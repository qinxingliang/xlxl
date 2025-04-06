package project.controller;

import project.entity.TUser;
import project.service.TUserService;
import project.util.JwtUtils;
import project.util.ResponseUtil;
import project.vo.User;
import com.alibaba.fastjson2.JSONObject;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;

import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



@RestController
@RequestMapping("/api/v1")
//@CrossOrigin(originPatterns = "*",allowCredentials = "true")
public class LoginController {
    @Resource
    private TUserService userService;
    @RequestMapping(value = "login",method = {RequestMethod.POST})
    public JSONObject login(@RequestBody User user, HttpServletResponse response, HttpServletRequest request){
        QueryWrapper<TUser> queryWrapper = new QueryWrapper<>();
        TUser param = new TUser();
        param.setcUserName(user.getUserName());
        param.setcPassWord(user.getPassWord());
        queryWrapper.setEntity(param);
        TUser tUser = userService.getOne(queryWrapper);
        if(tUser != null){
            String token = JwtUtils.getJwtToken(tUser);
            response.addHeader("token",token);
            response.setHeader("Access-Control-Expose-Headers","token");
            return ResponseUtil.getSuccessResponseBody(null);
        }else{
            return ResponseUtil.getResponseBody(ResponseUtil.LOFIN_FAIL_CODE,null,"登录失败");
        }
    }
}
