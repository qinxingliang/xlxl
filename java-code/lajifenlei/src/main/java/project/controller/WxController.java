package project.controller;


import com.alibaba.fastjson2.JSON;
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
import com.baidubce.http.ApiExplorerClient;
import com.baidubce.http.AppSigner;
import com.baidubce.http.HttpMethodName;
import com.baidubce.model.ApiExplorerRequest;
import com.baidubce.model.ApiExplorerResponse;

import javax.annotation.Resource;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;


/**
 * @className : WxController
 * @description : [描述说明该类的功能]
 */
@RestController
@Slf4j
@RequestMapping("api/wx/v1")
public class WxController {
    @Value("${baidu.api-key}")
    private String apiKey;

    @Value("${baidu.secret-key}")
    private String secretKey;

    @Value("${baidu.access-key}")
    private String accessKey;

    @Value("${baidu.app-secret}")
    private String appSecret;

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
            wrapper.lambda().like(TWxUser::getcOpenid, userId);
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

    @RequestMapping(value = "getFenLei", method = RequestMethod.POST)
    public JSONObject getFenLei(@RequestBody String image)
    {
       // log.info("图片Base64：{}",image);
//        if (image.length()==0) { log.info("1");return null;}
//        else log.info("照片大小：{}",image.length());
//        return null;
        /*log.info("传输过来的image：{}",imageJson);
        JSONObject json = (JSONObject) JSON.parse(imageJson);
        String image = json.getString("image");*/

        //log.info(image);
        String path = "http://znsb2ljfl.api.bdymkt.com/image/waste-sorting/execute";
        ApiExplorerRequest request = new ApiExplorerRequest(HttpMethodName.POST, path);
        request.setCredentials(accessKey, appSecret);

        // 设置header参数
        request.addHeaderParameter("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");


       /* String convertImage = image.replace("+", "%2B")
                                    .replace("/", "%2F")
                                    .replace("=", "%3D");
        log.info("转换后的base64编码:{}",convertImage);*/
        // 设置jsonBody参数
//        String jsonBody = "image=".concat(image);
//        log.info("添加image=后的：{}",jsonBody);
        request.setJsonBody(image);
//        String result = "{\"data\":{\"list\":[{\"trust\":0.751592,\"lajitype\":4,\"name\":\"钓竿\",\"lajitip\":\"钓竿的垃圾分类系统暂时无法判别，请重新尝试拍摄物体的主要特征。\"},{\"trust\":0.590628,\"lajitype\":4,\"name\":\"铁撬棍\",\"lajitip\":\"铁撬棍的垃圾分类系统暂时无法判别，请重新尝试拍摄物体的主要特征。\"},{\"trust\":0.432636,\"lajitype\":4,\"name\":\"数学图形\",\"lajitip\":\"数学图形的垃圾分类系统暂时无法判别，请重新尝试拍摄物体的主要特征。\"},{\"trust\":0.272688,\"lajitype\":4,\"name\":\"脱钩器\",\"lajitip\":\"脱钩器的垃圾分类系统暂时无法判别，请重新尝试拍摄物体的主要特征。\"},{\"trust\":0.115347,\"lajitype\":4,\"name\":\"简笔画\",\"lajitip\":\"简笔画的垃圾分类系统暂时无法判别，请重新尝试拍摄物体的主要特征。\"}]},\"msg\":\"成功\",\"success\":true,\"code\":200,\"taskNo\":\"458335925204572499446478\"}";
//        return (JSONObject) JSON.parse(result);
        ApiExplorerClient client = new ApiExplorerClient(new AppSigner());

        try {
            ApiExplorerResponse response = client.sendRequest(request);
            // 返回结果格式为Json字符串
            log.info("分类识别结果:{}",response.getResult());
            return (JSONObject) JSON.parse(response.getResult());
        } catch (Exception e) {
            log.error("照片过大或其他原因",e);
        }
        return null;
    }
}
