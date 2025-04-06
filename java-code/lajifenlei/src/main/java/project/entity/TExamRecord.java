package project.entity;

import com.alibaba.fastjson2.JSONArray;
import com.alibaba.fastjson2.JSONObject;
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
 * 考试记录
 * </p>
 *
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName(value = "t_exam_record",autoResultMap = true)
public class TExamRecord implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId("c_id")
    private String cId;

    /**
     * 用户id
     */
    @TableField("c_open_id")
    private String cOpenId;

    /**
     * 答题记录
     */
    @TableField(value = "c_exam_record",typeHandler = FastjsonTypeHandler.class)
    private JSONArray cExamRecord;

    /**
     * 答对题数
     */
    @TableField("n_success")
    private Integer nSuccess;

    /**
     * 答错题数
     */
    @TableField("n_error")
    private Integer nError;

    /**
     * 总分
     */
    @TableField("n_socre")
    private Integer nSocre;

    /**
     * 完成时间
     */
    @TableField("dt_create_time")
    private LocalDateTime dtCreateTime;

    /**
     * 称号
     */
    @TableField("c_chenghao")
    private String cChenghao;


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

    public JSONArray getcExamRecord() {
        return cExamRecord;
    }

    public void setcExamRecord(JSONArray cExamRecord) {
        this.cExamRecord = cExamRecord;
    }

    public Integer getnSuccess() {
        return nSuccess;
    }

    public void setnSuccess(Integer nSuccess) {
        this.nSuccess = nSuccess;
    }

    public Integer getnError() {
        return nError;
    }

    public void setnError(Integer nError) {
        this.nError = nError;
    }

    public Integer getnSocre() {
        return nSocre;
    }

    public void setnSocre(Integer nSocre) {
        this.nSocre = nSocre;
    }

    public LocalDateTime getDtCreateTime() {
        return dtCreateTime;
    }

    public void setDtCreateTime(LocalDateTime dtCreateTime) {
        this.dtCreateTime = dtCreateTime;
    }

    public String getcChenghao() {
        return cChenghao;
    }

    public void setcChenghao(String cChenghao) {
        this.cChenghao = cChenghao;
    }
}
