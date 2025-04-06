package project.util;

import java.util.UUID;

/**
 * @className : UUIDUtil
 * @description : [描述说明该类的功能]
 */
public class UUIDUtil {
    public static String getUUID(){
        return UUID.randomUUID().toString().replace("-","");
    }
}
