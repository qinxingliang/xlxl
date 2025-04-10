package project.entity;

import com.alibaba.fastjson2.JSONObject;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.time.LocalDateTime;

import com.baomidou.mybatisplus.extension.handlers.Fastjson2TypeHandler;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

/**
 * <p>
 * 签到表
 * </p>
 *
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName(value = "t_qiandao",autoResultMap = true)
public class TQiandao implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 签到
     */
    @TableId("c_id")
    private String cId;

    /**
     * 用户信息
     */
    @TableField(value = "c_user_info",typeHandler = Fastjson2TypeHandler.class)
    private JSONObject cUserInfo;

    /**
     * 创建时间
     */
    @TableField("dt_create_time")
    private LocalDateTime dtCreateTime;

    /**
     * 用户openid
     */
    @TableField("c_open_id")
    private String cOpenId;

    public String getcId() {
        return cId;
    }

    public void setcId(String cId) {
        this.cId = cId;
    }

    public JSONObject getcUserInfo() {
        return cUserInfo;
    }

    public void setcUserInfo(JSONObject cUserInfo) {
        this.cUserInfo = cUserInfo;
    }

    public LocalDateTime getDtCreateTime() {
        return dtCreateTime;
    }

    public void setDtCreateTime(LocalDateTime dtCreateTime) {
        this.dtCreateTime = dtCreateTime;
    }

    public String getcOpenId() {
        return cOpenId;
    }

    public void setcOpenId(String cOpenId) {
        this.cOpenId = cOpenId;
    }
}
