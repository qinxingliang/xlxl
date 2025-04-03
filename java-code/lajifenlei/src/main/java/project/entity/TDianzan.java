package project.entity;

import com.alibaba.fastjson.JSONObject;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.time.LocalDateTime;

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
 * @since 2023-09-14
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName(value = "t_dianzan",autoResultMap = true)
public class TDianzan implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId("c_id")
    private String cId;

    /**
     * 用户id
     */
    @TableField("c_open_id")
    private String cOpenId;

    /**
     * 用户信息
     */
    @TableField(value = "c_user_info",typeHandler = FastjsonTypeHandler.class)
    private JSONObject cUserInfo;

    /**
     * 发现内容
     */
    @TableField(exist = false)
    private TFaxian faxian;

    /**
     * 发现内容id
     */
    @TableField("c_faxian_id")
    private String cFaxianId;

    /**
     * 创建时间
     */
    @TableField("dt_create_time")
    private LocalDateTime dtCreateTime;


    public String getcId() {
        return cId;
    }

    public void setcId(String cId) {
        this.cId = cId;
    }

    public String getcOpenId() {
        return cOpenId;
    }

    public void setcOpenId(String cOpenId) {
        this.cOpenId = cOpenId;
    }

    public JSONObject getcUserInfo() {
        return cUserInfo;
    }

    public void setcUserInfo(JSONObject cUserInfo) {
        this.cUserInfo = cUserInfo;
    }

    public String getcFaxianId() {
        return cFaxianId;
    }

    public void setcFaxianId(String cFaxianId) {
        this.cFaxianId = cFaxianId;
    }

    public LocalDateTime getDtCreateTime() {
        return dtCreateTime;
    }

    public void setDtCreateTime(LocalDateTime dtCreateTime) {
        this.dtCreateTime = dtCreateTime;
    }

    public TFaxian getFaxian() {
        return faxian;
    }

    public void setFaxian(TFaxian faxian) {
        this.faxian = faxian;
    }
}
