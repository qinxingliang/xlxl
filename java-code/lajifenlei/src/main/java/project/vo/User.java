package project.vo;

import project.entity.TUser;
import lombok.Data;

/**
 * @author : YJR
 * @className : User
 * @createTime : 2023/6/8 22:48
 */
@Data

public class User {
    /**
     * 主键
     */
    private String id;

    /**
     * 登录id
     */
    private String userName;

    /**
     *  昵称
     */
    private String nickName;

    /**
     *  昵称
     */
    private String passWord;
    /**
     * 权限 1管理员, 2普通用户
     */
    private Integer role;

    /**
     * 头像地址
     */
    private String icon;
    public User() {

    };

    public User(TUser tUser){
        this.id = tUser.getcId();
        this.nickName = tUser.getcNickName();
        this.userName = tUser.getcUserName();
        this.role = tUser.getcRole();
        this.icon = tUser.getcIcon();
    }
}
