package project.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

/**
 * <p>
 * 
 * </p>
 *
 * @author YJR
 * @since 2023-06-06
 */
@Data
@Accessors(chain = true)
@TableName("t_user")
public class TUser implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 主键
     */
    @TableId("c_id")
    private String cId;

    /**
     * 登录id
     */
    @TableField("c_user_name")
    private String cUserName;

    /**
     * 密码
     */
    @TableField("c_pass_word")
    private String cPassWord;

    /**
     * 昵称
     */
    @TableField("c_nick_name")
    private String cNickName;

    /**
     * 权限 1管理员, 2普通用户
     */
    @TableField("c_role")
    private Integer cRole;

    /**
     * 头像地址
     */
    @TableField("c_icon")
    private String cIcon;

    public String getcId() {
        return cId;
    }

    public void setcId(String cId) {
        this.cId = cId;
    }

    public String getcUserName() {
        return cUserName;
    }

    public void setcUserName(String cUserName) {
        this.cUserName = cUserName;
    }

    public String getcPassWord() {
        return cPassWord;
    }

    public void setcPassWord(String cPassWord) {
        this.cPassWord = cPassWord;
    }

    public String getcNickName() {
        return cNickName;
    }

    public void setcNickName(String cNickName) {
        this.cNickName = cNickName;
    }

    public Integer getcRole() {
        return cRole;
    }

    public void setcRole(Integer cRole) {
        this.cRole = cRole;
    }

    public String getcIcon() {
        return cIcon;
    }

    public void setcIcon(String cIcon) {
        this.cIcon = cIcon;
    }
}
