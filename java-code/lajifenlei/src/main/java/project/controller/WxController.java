package project.controller;

import lombok.extern.slf4j.Slf4j;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Value;
import project.entity.TWxUser;
import project.service.TWxUserService;
import project.util.FileUtil;
import project.util.ResponseUtil;
import project.util.WxUtil;
import com.alibaba.fastjson2.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * @author : YJR
 * @className : WxController
 * @description : [描述说明该类的功能]
 * @createTime : 2023/6/27 19:44
 */
@RestController
@Slf4j
@RequestMapping("api/wx/v1")
public class WxController {
    @Value("${baidu.api-key}")
    private String apiKey;

    @Value("${baidu.secret-key}")
    private String secretKey;

    @Resource
    private WxUtil wxUtil;

    @Resource
    private TWxUserService wxUserService;

    @Resource
    private FileUtil fileUtil;

    /**
     * 获取openId
     *
     * @param param
     * @return
     */
    @RequestMapping(value = "getOpenId", method = RequestMethod.POST)
    public JSONObject getOpenId(@RequestBody JSONObject param) {
        String code = param.getString("code");
        String openId = wxUtil.getUserOpenId(code);
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("openId", openId);
        return ResponseUtil.getSuccessResponseBody(jsonObject);
    }

    /**
     * 获取电话号
     *
     * @param param
     * @return
     */
    @RequestMapping(value = "getPhone", method = RequestMethod.POST)
    public JSONObject getPhone(@RequestBody JSONObject param) {
        String code = param.getString("code");
        String openId = param.getString("openId");
        if (StringUtils.isBlank(code) || StringUtils.isBlank(openId)) {
            return ResponseUtil.getErrorResponseBody(null, "openId或者授权conde为空");
        }
        String phone = wxUtil.getUserPhone(openId, code);
        if (StringUtils.isBlank(phone)) {
            return ResponseUtil.getErrorResponseBody(null, "获取手机号信息失败,请重试");
        }
        return ResponseUtil.getSuccessResponseBody(phone);
    }

    /**
     * 获取用户信息
     *
     * @param param
     * @return
     */
    @RequestMapping(value = "getUserInfo", method = RequestMethod.POST)
    public JSONObject getUserInfo(@RequestBody JSONObject param) {
        String openId = param.getString("openId");
        if (StringUtils.isBlank(openId)) {
            return ResponseUtil.getErrorResponseBody(null, "openId为空");
        }
        QueryWrapper<TWxUser> wrapper = new QueryWrapper<TWxUser>();
        wrapper.lambda().eq(TWxUser::getcOpenid, openId);
        TWxUser wxUser = wxUserService.getOne(wrapper);
        if (wxUser == null) {
            return ResponseUtil.getErrorResponseBody(null, "获取用户信息失败");
        }
        // 移除用户登录的session key
        wxUser.setcSessionKey(null);
        return ResponseUtil.getSuccessResponseBody(wxUser);
    }

    @RequestMapping(value = "updateUserInfo", method = RequestMethod.POST)
    public JSONObject updateUserInfo(@RequestBody TWxUser wxUser) {
        boolean b = wxUserService.saveOrUpdate(wxUser);
        if (b) {
            return ResponseUtil.getSuccessResponseBody(wxUserService.getById(wxUser));
        } else {
            return ResponseUtil.getErrorResponseBody(null, "更新失败");
        }

    }

    @RequestMapping(value = "select", method = RequestMethod.POST)
    public JSONObject select(@RequestBody JSONObject param) {
        // 获取页数
        Integer current = param.getInteger("current");
        // 获取用户id
        String userId = param.getString("userId");
        // 获取用户昵称
        String nickName = param.getString("nickName");

        Page<TWxUser> page = new Page<TWxUser>();

        page.setSize(10);
        if (current != null) {
            page.setCurrent(current);
        } else {
            page.setCurrent(1);
        }

        QueryWrapper<TWxUser> wrapper = new QueryWrapper<TWxUser>();

        if (StringUtils.isNotBlank(userId)) {
            wrapper.lambda().eq(TWxUser::getcOpenid, userId);
        }
        if (StringUtils.isNotBlank(nickName)) {
            wrapper.lambda().like(TWxUser::getcNickName, nickName);
        }
        // 获取查询返回结果
        Page<TWxUser> pageSelect = wxUserService.page(page, wrapper);
        JSONObject object = new JSONObject();
        object.put("list", pageSelect.getRecords());
        object.put("total", pageSelect.getTotal());
        return ResponseUtil.getSuccessResponseBody(object);
    }

    @RequestMapping(value = "getAccessToken", method = RequestMethod.POST)
    public JSONObject getAccessToken() {
        Connection connect = Jsoup.connect("https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id="
                + apiKey + "&client_secret=" + secretKey);
        connect.ignoreContentType(true);
        try {
            Document post = connect.post();
            String res = post.body().text();
            JSONObject object = JSONObject.parseObject(res);
            return object;
        } catch (IOException e) {
            log.error("获取百度云key出现异常",e);
        }
        return null;
    }
}
