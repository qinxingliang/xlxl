package project.handler;

import project.entity.TUser;
import project.util.JwtUtils;
import project.util.ResponseUtil;
import org.apache.commons.lang3.StringUtils;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author : YJR
 * @className : LoginHandlerInterceptor
 * @description : 登录拦截器
 * @createTime : 2023/6/6 23:17
 */
@Component
public class LoginHandlerInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        // 拦截器不拦截跨域预检
        if(HttpMethod.OPTIONS.toString().equals(request.getMethod())){
            return true;
        }
        // 从header中获取token
        String token = request.getHeader("token");
        if (StringUtils.isBlank(token)){
            // 没有token时 直接返回空
            response.setStatus(ResponseUtil.NO_LOGIN_CODE);
            return false;
        }else{
            // 当有token时执行校验程序
            // 调用解密获取加密对象
            TUser user = JwtUtils.getMemberIdByJwtToken(token);
            if(user == null){
                // 没有token时 直接返回空
                response.setStatus(ResponseUtil.NO_LOGIN_CODE);
                return false;
            }else {
                // 校验成功
                request.setAttribute("user",user);
                return true;
            }

        }

    }
}