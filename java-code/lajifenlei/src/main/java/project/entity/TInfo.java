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
 * 
 * </p>
 *
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("t_info")
public class TInfo implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId("c_id")
    private String cId;

    /**
     * 小程序二维码
     */
    @TableField("c_image")
    private String cImage;

    /**
     * 积分说明
     */
    @TableField("c_jfsm")
    private String cJfsm;

    /**
     * 关于我们
     */
    @TableField("c_gywm")
    private String cGywm;

    public String getcId() {
        return cId;
    }

    public void setcId(String cId) {
        this.cId = cId;
    }

    public String getcImage() {
        return cImage;
    }

    public void setcImage(String cImage) {
        this.cImage = cImage;
    }

    public String getcJfsm() {
        return cJfsm;
    }

    public void setcJfsm(String cJfsm) {
        this.cJfsm = cJfsm;
    }

    public String getcGywm() {
        return cGywm;
    }

    public void setcGywm(String cGywm) {
        this.cGywm = cGywm;
    }
}
