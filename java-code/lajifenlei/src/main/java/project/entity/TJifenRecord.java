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
 * 
 * </p>
 *
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("t_jifen_record")
public class TJifenRecord implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId("c_id")
    private String cId;

    /**
     * 用户openid
     */
    @TableField("c_open_id")
    private String cOpenId;

    /**
     * 类型 增加0，减少1
     */
    @TableField("n_type")
    private Byte nType;

    /**
     * 积分变更原因
     */
    @TableField("c_bg_name")
    private String cBgName;

    /**
     * 积分变更数量
     */
    @TableField("n_jifen")
    private Integer nJifen;

    /**
     * 变更时间
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

    public Byte getnType() {
        return nType;
    }

    public void setnType(Byte nType) {
        this.nType = nType;
    }

    public String getcBgName() {
        return cBgName;
    }

    public void setcBgName(String cBgName) {
        this.cBgName = cBgName;
    }

    public Integer getnJifen() {
        return nJifen;
    }

    public void setnJifen(Integer nJifen) {
        this.nJifen = nJifen;
    }

    public LocalDateTime getDtCreateTime() {
        return dtCreateTime;
    }

    public void setDtCreateTime(LocalDateTime dtCreateTime) {
        this.dtCreateTime = dtCreateTime;
    }
}
