package project.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

/**
 * <p>
 * 
 * </p>
 *
 */
@Data
@Accessors(chain = true)
@TableName("t_lbt")
public class TLbt implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 主键
     */
    @TableId("c_id")
    private String cId;

    /**
     * 图片地址
     */
    @TableField("c_img_url")
    private String cImgUrl;

    /**
     * 是否删除0否1是
     */
    @TableField("n_del")
    private Integer nDel;

    /**
     * 描述
     */
    @TableField("c_describe")
    private String cDescribe;

    /**
     * 文本内容
     */
    @TableField("c_content")
    private String cContent;

    public String getcContent() {
        return cContent;
    }

    public void setcContent(String cContent) {
        this.cContent = cContent;
    }

    public String getcDescribe() {
        return cDescribe;
    }

    public void setcDescribe(String cDescribe) {
        this.cDescribe = cDescribe;
    }

    public String getcId() {
        return cId;
    }

    public void setcId(String cId) {
        this.cId = cId;
    }

    public String getcImgUrl() {
        return cImgUrl;
    }

    public void setcImgUrl(String cImgUrl) {
        this.cImgUrl = cImgUrl;
    }

    public Integer getnDel() {
        return nDel;
    }

    public void setnDel(Integer nDel) {
        this.nDel = nDel;
    }
}
