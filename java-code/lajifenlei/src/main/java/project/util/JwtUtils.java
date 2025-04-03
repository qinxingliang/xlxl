package project.util;

import project.entity.TUser;
import com.alibaba.fastjson2.JSONObject;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;

import java.security.Key;
import java.util.Date;

/**
 * @author : YJR
 * @className : JwtUtils
 * @description : 权限验证工具类
 * @createTime : 2023/6/6 23:35
 */
@Slf4j
public class JwtUtils {
    //常量
    public static final long EXPIRE = 1000 * 60 * 60 * 24; //token过期时间

    static Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    //生成token字符串的方法
    public static String getJwtToken(TUser user){

        String JwtToken = Jwts.builder()
                .setHeaderParam("typ", "JWT")
                .setHeaderParam("alg", "HS256")
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRE))
                .claim("user", user)  // 用户id
                .signWith(key)
                .compact();

        return JwtToken;
    }

    /**
     * 判断token是否存在与有效
     * @param token
     * @return
     */
    public static boolean checkToken(String token) {
        if(StringUtils.isEmpty(token)) {
            return false;
        }
        try {
            JwtParser jwtParser = Jwts.parserBuilder().setSigningKey(key).build();
            jwtParser.parseClaimsJws(token);
        } catch (Exception e) {
            return false;
        }
        return true;
    }

    /**
     * 根据token 获取存入信息
     * @param token
     * @return
     * HttpServletRequest 由于后端会将token传前端，前端会将token存储在cookie,所以这里传入HttpServletRequest 获取cookie里面的token，然后返回用户id
     */
    public static TUser getMemberIdByJwtToken(String token) {
        try{
            JwtParser jwtParser = Jwts.parserBuilder().setSigningKey(key).build();
            Jws<Claims> claimsJws = jwtParser.parseClaimsJws(token);
            Claims claims = claimsJws.getBody();
            // 获取用户信息
            return JSONObject.parseObject(JSONObject.from(claims.get("user")).toString(),TUser.class);
        }catch (Exception e){
            return null;
        }

    }
}
