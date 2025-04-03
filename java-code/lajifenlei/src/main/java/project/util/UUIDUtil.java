package project.util;

import java.util.UUID;

/**
 * @author : YJR
 * @className : UUIDUtil
 * @description : [描述说明该类的功能]
 * @createTime : 2023/6/24 20:19
 */
public class UUIDUtil {
    public static String getUUID(){
        return UUID.randomUUID().toString().replace("-","");
    }
}
