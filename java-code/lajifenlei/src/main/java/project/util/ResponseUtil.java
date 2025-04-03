package project.util;

import com.alibaba.fastjson2.JSONObject;
import org.apache.commons.lang3.StringUtils;

/**
 * @author : YJR
 * @className : ResponseUtil
 * @description : 返回结果集
 * @createTime : 2023/6/8 22:21
 */
public class ResponseUtil {
    // 成功code
    public static final int SUCCESS_CODE = 200;
    // 登录未授权 或者 登录身份过期
    public static final int NO_LOGIN_CODE = 800;

    // 登录失败code
    public static final int LOFIN_FAIL_CODE = 202;

    // 业务失败code
    public static final int YW_FAIL_CODE = 208;
    // 服务器错误
    public static final int ERROR_CODE = 500;


    /**
     * 获取成功的返回对象
     * @param data 返回数据
     * @return
     */
    public static JSONObject getSuccessResponseBody(Object data,String message){
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("code",SUCCESS_CODE);
        jsonObject.put("data",data);
        if(StringUtils.isNotBlank(message)){
            jsonObject.put("message",message);
        }
        return jsonObject;
    }

    /**
     * 获取成功的返回对象
     * @param data 返回数据
     * @return
     */
    public static JSONObject getSuccessResponseBody(Object data){
        return getSuccessResponseBody(data,null);
    }
    /**
     * 获取后端错误的返回对象
     * @param data 返回数据
     * @param message 提示信息
     * @return
     */
    public static JSONObject getErrorResponseBody(JSONObject data,String message){
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("code",ERROR_CODE);
        jsonObject.put("data",data);
        jsonObject.put("message",message);
        return jsonObject;
    }

    /**
     * 获取返回值对象
     * @param code 返回code信息
     * @param data 返回数据信息
     * @param message 提示信息
     * @return
     */
    public static JSONObject getResponseBody(int code,JSONObject data,String message){
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("code",code);
        jsonObject.put("data",data);
        jsonObject.put("message",message);
        return jsonObject;
    }
}
