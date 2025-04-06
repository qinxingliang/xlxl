package project.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.time.LocalDateTime;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

/**
 * <p>
 * 垃圾类型管理 product
 * </p>
 *
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("t_product")
public class TProduct implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId("c_id")
    private String cId;

    /**
     * 名称
     */
    @TableField("c_name")
    private String cName;

    /**
     * 类型	可回收物1	有害垃圾2	湿垃圾3	干垃圾4
     */
    @TableField("n_sort_id")
    private Integer nSortId;

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

    public String getcName() {
        return cName;
    }

    public void setcName(String cName) {
        this.cName = cName;
    }

    public Integer getnSortId() {
        return nSortId;
    }

    public void setnSortId(Integer nSortId) {
        this.nSortId = nSortId;
    }

    public LocalDateTime getDtCreateTime() {
        return dtCreateTime;
    }

    public void setDtCreateTime(LocalDateTime dtCreateTime) {
        this.dtCreateTime = dtCreateTime;
    }
}
