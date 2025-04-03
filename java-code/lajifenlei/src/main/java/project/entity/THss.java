package project.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

/**
 * <p>
 * 回收商表
 * </p>
 *
 * @author YJR
 * @since 2023-09-14
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("t_hss")
public class THss implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 主键id
     */
    @TableId("c_id")
    private String cId;

    /**
     * 回收商名称
     */
    @TableField("c_name")
    private String cName;

    /**
     * 回收商电话
     */
    @TableField("c_phone")
    private String cPhone;

    /**
     * 回收商微信
     */
    @TableField("c_wx")
    private String cWx;

    /**
     * 回收商区域
     */
    @TableField("c_address")
    private String cAddress;

    public String getcId() {
        return cId;
    }

    public void setcId(String cId) {
        this.cId = cId;
    }

    public String getcName() {
        return cName;
    }

    public void setcName(String cName) {
        this.cName = cName;
    }

    public String getcPhone() {
        return cPhone;
    }

    public void setcPhone(String cPhone) {
        this.cPhone = cPhone;
    }

    public String getcWx() {
        return cWx;
    }

    public void setcWx(String cWx) {
        this.cWx = cWx;
    }

    public String getcAddress() {
        return cAddress;
    }

    public void setcAddress(String cAddress) {
        this.cAddress = cAddress;
    }
}
