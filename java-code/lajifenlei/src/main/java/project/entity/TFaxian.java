package project.entity;

import com.alibaba.fastjson.JSONArray;
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
 * 发现表
 * </p>
 *
 * @author YJR
 * @since 2023-09-14
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName(value = "t_faxian",autoResultMap = true)
public class TFaxian implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId("c_id")
    private String cId;

    /**
     * 标题
     */
    @TableField("c_title")
    private String cTitle;

    /**
     * 封面图
     */
    @TableField("c_img_url")
    private String cImgUrl;

    /**
     * 浏览量
     */
    @TableField("n_lll")
    private Integer nLll;

    /**
     * 详情
     */
    @TableField("c_content")
    private String cContent;

    /**
     * 预览图片
     */
    @TableField(value = "c_yulan_list",typeHandler = FastjsonTypeHandler.class)
    private JSONArray cYulanList;

    /**
     * 点赞数量
     */
    @TableField(exist = false)
    private Integer number;

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

    public String getcTitle() {
        return cTitle;
    }

    public void setcTitle(String cTitle) {
        this.cTitle = cTitle;
    }

    public String getcImgUrl() {
        return cImgUrl;
    }

    public void setcImgUrl(String cImgUrl) {
        this.cImgUrl = cImgUrl;
    }

    public Integer getnLll() {
        return nLll;
    }

    public void setnLll(Integer nLll) {
        this.nLll = nLll;
    }

    public String getcContent() {
        return cContent;
    }

    public void setcContent(String cContent) {
        this.cContent = cContent;
    }

    public JSONArray getcYulanList() {
        return cYulanList;
    }

    public void setcYulanList(JSONArray cYulanList) {
        this.cYulanList = cYulanList;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public LocalDateTime getDtCreateTime() {
        return dtCreateTime;
    }

    public void setDtCreateTime(LocalDateTime dtCreateTime) {
        this.dtCreateTime = dtCreateTime;
    }
}
