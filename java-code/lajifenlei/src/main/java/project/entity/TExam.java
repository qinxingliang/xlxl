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
 * 考试表
 * </p>
 *
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("t_exam")
public class TExam implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId("c_id")
    private String cId;

    /**
     * 问题内容
     */
    @TableField("c_wtnr")
    private String cWtnr;

    /**
     * 分数
     */
    @TableField("n_score")
    private Integer nScore;

    /**
     * 类型
     */
    @TableField("n_type")
    private Integer nType;

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

    public String getcWtnr() {
        return cWtnr;
    }

    public void setcWtnr(String cWtnr) {
        this.cWtnr = cWtnr;
    }

    public Integer getnScore() {
        return nScore;
    }

    public void setnScore(Integer nScore) {
        this.nScore = nScore;
    }

    public Integer getnType() {
        return nType;
    }

    public void setnType(Integer nType) {
        this.nType = nType;
    }

    public LocalDateTime getDtCreateTime() {
        return dtCreateTime;
    }

    public void setDtCreateTime(LocalDateTime dtCreateTime) {
        this.dtCreateTime = dtCreateTime;
    }
}
