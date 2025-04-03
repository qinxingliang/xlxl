package project.entity;

import com.alibaba.fastjson.JSONArray;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.sql.Date;

import com.baomidou.mybatisplus.extension.handlers.FastjsonTypeHandler;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

/**
 * <p>
 * 
 * </p>
 *
 * @author YJR
 * @since 2023-07-02
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName(value = "t_wx_user",autoResultMap = true)
public class TWxUser implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 微信小程序openId
     */
    @TableId("c_openid")
    private String cOpenid;

    /**
     * 微信小程序登录会话密钥
     */
    @TableField("c_session_key")
    private String cSessionKey;

    /**
     * 头像地址
     */
    @TableField("c_icon")
    private String cIcon;

    /**
     * 电话号码
     */
    @TableField("c_phone")
    private String cPhone;

    /**
     * 微信小程序unionid
     */
    @TableField("c_unionid")
    private String cUnionid;

    /**
     * 昵称
     */
    @TableField("c_nick_name")
    private String cNickName;

    /**
     * 积分
     */
    @TableField("c_score")
    private Integer cScore;

    /**
     * 上次签到日期
     */
    @TableField("dt_qiandao_date")
    private Date dtQiandaoDate;

    public String getcSessionKey() {
        return cSessionKey;
    }

    public void setcSessionKey(String cSessionKey) {
        this.cSessionKey = cSessionKey;
    }

    public String getcIcon() {
        return cIcon;
    }

    public void setcIcon(String cIcon) {
        this.cIcon = cIcon;
    }

    public String getcPhone() {
        return cPhone;
    }

    public void setcPhone(String cPhone) {
        this.cPhone = cPhone;
    }

    public String getcOpenid() {
        return cOpenid;
    }

    public void setcOpenid(String cOpenid) {
        this.cOpenid = cOpenid;
    }

    public String getcUnionid() {
        return cUnionid;
    }

    public void setcUnionid(String cUnionid) {
        this.cUnionid = cUnionid;
    }

    public String getcNickName() {
        return cNickName;
    }

    public void setcNickName(String cNickName) {
        this.cNickName = cNickName;
    }

    public Integer getcScore() {
        return cScore;
    }

    public void setcScore(Integer cScore) {
        this.cScore = cScore;
    }


    public Date getDtQiandaoDate() {
        return dtQiandaoDate;
    }

    public void setDtQiandaoDate(Date dtQiandaoDate) {
        this.dtQiandaoDate = dtQiandaoDate;
    }
}
