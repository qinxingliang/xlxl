package project.util;

import project.entity.TUser;

import javax.servlet.http.HttpServletRequest;

/**
 * @className : RequestUtil
 * @description : [描述说明该类的功能]
 */
public class RequestUtil {
    /**
     * 从请求中获取user
     * @param request
     * @return
     */
    public static TUser getUserFromRequest(HttpServletRequest request){
        return (TUser) request.getAttribute("user");
    }
}
