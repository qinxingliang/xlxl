package project.util;

import project.entity.TWxUser;
import project.service.TWxUserService;
import com.alibaba.fastjson2.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * @author : YJR
 * @className : WxUtil
 * @description : 微信工具类
 * @createTime : 2023/6/27 19:11
 */
@Component
@Slf4j
public class WxUtil {
    @Value("${wx.app-id}")
    private String appId;
    @Value("${wx.app-secret}")
    private String appSecret;
    @Value("${wx.base-url}")
    private String baseUrl;

    @Resource
    private TWxUserService wxUserService;
    // 授权凭证
    private static String accessToken;
    // 有效时间
    private static int time;

    /**
     * 定时任务获取授权凭证 60s 一次
     */
    @Scheduled(cron = "0 * * * * ? ")
    @PostConstruct
    public void getAccessToken() {
        // 当时间小于100s时获取授权凭证
        if (time - 100 < 0) {
            Connection connect = Jsoup.connect(baseUrl + "cgi-bin/stable_token");
            try {
                // 构建参数
                Map<String, String> data = new HashMap<>();
                data.put("grant_type", "client_credential");
                data.put("appid", appId);
                data.put("secret", appSecret);
                connect.ignoreContentType(true);
                connect.requestBody(JSONObject.toJSONString(data));
                Document document = connect.post();
                // 获取返回结果并转换为json
                JSONObject jsonObject = JSONObject.parseObject(document.body().text());
                if (StringUtils.isNotBlank(jsonObject.getString("errcode"))) {
                    log.error("获取授权凭证失败,errorcode{}", jsonObject.getString("errcode"));
                } else {
                    time = jsonObject.getInteger("expires_in");
                    accessToken = jsonObject.getString("access_token");
                }
            } catch (IOException e) {
                log.error("获取授权凭证失败", e);
            }

        }else{
            // 减少time时间
            time -= 60;
        }
    }

    /**
     * 获取用户openID
     * @param code 微信小程序返回的code
     * @return
     */
    public String getUserOpenId(String code) {
        Connection connect = Jsoup.connect(baseUrl + "sns/jscode2session");
        // 构建参数
        Map<String, String> data = new HashMap<>();
        data.put("appid",appId);
        data.put("secret",appSecret);
        data.put("js_code",code);
        data.put("grant_type","authorization_code");
        connect.data(data);
//        connect.requestBody(JSONObject.toJSONString(data));
        connect.ignoreContentType(true);
        try {
            JSONObject res = JSONObject.parseObject(connect.get().body().text());
            if(StringUtils.isBlank(res.getString("errcode"))){
                String openId = res.getString("openid");
                String unionid = res.getString("unionid");
                String sessionKey = res.getString("session_key");
                // 将登录数据保存到本地数据库
                TWxUser user = new TWxUser();
                // open id
                user.setcOpenid(openId);
                // sessionKey
                user.setcSessionKey(sessionKey);
                // unionid
                if(StringUtils.isNotBlank(unionid)){
                    user.setcUnionid(unionid);
                }
                TWxUser byId = wxUserService.getById(openId);
                if(byId == null){
                    user.setcScore(0);
                }
                wxUserService.saveOrUpdate(user);
                return openId;
            }else{
                log.error("获取openId失败,errorCode:{}", res.getString("errcode"));
            }
        } catch (IOException e) {
            log.error("获取openId失败", e);
        }
        return null;
    }

    /**
     * 获取用户电话号
     * @param code 微信小程序返回的code
     * @return
     */
    public String getUserPhone(String openid,String code) {
        Connection connect = Jsoup.connect(baseUrl + "wxa/business/getuserphonenumber");
        // 构建参数
        Map<String, String> data = new HashMap<>();
        data.put("access_token",accessToken);
        data.put("code",code);
        connect.data(data);
        connect.ignoreContentType(true);
        try {
            JSONObject res = JSONObject.parseObject(connect.post().body().text());
            if(StringUtils.isBlank(res.getString("errcode"))){
                String openId = res.getString("openid");
                String unionid = res.getString("unionid");
                String sessionKey = res.getString("session_key");
                // 将登录数据保存到本地数据库
                TWxUser user = new TWxUser();
                // open id
                user.setcOpenid(openId);
                // sessionKey
                user.setcSessionKey(sessionKey);
                // unionid
                if(StringUtils.isNotBlank(unionid)){
                    user.setcUnionid(unionid);
                }
                wxUserService.saveOrUpdate(user);
                return openId;
            }else{
                log.error("获取openId失败,errorCode:{}", res.getString("errcode"));
            }
        } catch (IOException e) {
            log.error("获取openId失败", e);
        }
        return null;
    }
}
