package project.controller;

import project.entity.TUser;
import project.service.TUserService;
import project.util.RequestUtil;
import project.util.ResponseUtil;
import project.vo.User;
import com.alibaba.fastjson2.JSONObject;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.Map;

/**
 * @author : YJR
 * @className : UserController
 * @description : [描述说明该类的功能]
 * @createTime : 2023/6/9 23:39
 */
@RestController
@RequestMapping(value = "/api/user/v1")
public class UserController {
    @Resource
    private TUserService userServiceservice;

    /**
     * 获取用户信息
     * @param request
     * @return
     */
    @RequestMapping(value = "/getUserMessage",method = RequestMethod.POST)
    public JSONObject getUserMessage(HttpServletRequest request){
        TUser tuser = RequestUtil.getUserFromRequest(request);
        TUser userAll = userServiceservice.getById(tuser.getcId());
        return ResponseUtil.getSuccessResponseBody(JSONObject.from(new User(userAll)));
    }

    /**
     * 获取用户信息
     * @param request
     * @return
     */
    @RequestMapping(value = "/updateUserPass",method = RequestMethod.POST)
    public JSONObject updateUserPass(HttpServletRequest request, @RequestBody Map<String,Object> param){
        // 从请求中获取登录人员信息
        TUser tuser = RequestUtil.getUserFromRequest(request);
        // 获取当前人员信息
        TUser userAll = userServiceservice.getById(tuser.getcId());
        String oldPass = (String)param.get("oldPass");
        String newPass = (String)param.get("newPass");
        // 判断当前输入旧密码和新密码是否保持一致
        if(StringUtils.equals(oldPass,userAll.getcPassWord())){
            TUser user = new TUser();
            user.setcId(userAll.getcId());
            user.setcPassWord(newPass);
            userServiceservice.updateById(user);
            // 更新密码操作
            return ResponseUtil.getSuccessResponseBody(null,"更新成功");
        }else{
            // 返回前台密码错误
            return ResponseUtil.getResponseBody(ResponseUtil.YW_FAIL_CODE,null, "旧密码不正确");
        }
    }

    @RequestMapping(value = "/update",method = RequestMethod.POST)
    public boolean update(HttpServletRequest request ,@RequestBody TUser user){
        // 从请求中获取登录人员信息
        TUser tuser = RequestUtil.getUserFromRequest(request);
        user.setcId(tuser.getcId());
        return userServiceservice.saveOrUpdate(user);
    }
}
