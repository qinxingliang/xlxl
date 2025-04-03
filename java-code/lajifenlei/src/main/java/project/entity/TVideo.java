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
 * 视频表
 * </p>
 *
 * @author YJR
 * @since 2023-09-14
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("t_video")
public class TVideo implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId("c_id")
    private String cId;

    /**
     * 视频地址
     */
    @TableField("c_url")
    private String cUrl;

    /**
     * 视频标题
     */
    @TableField("c_title")
    private String cTitle;

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

    public String getcUrl() {
        return cUrl;
    }

    public void setcUrl(String cUrl) {
        this.cUrl = cUrl;
    }

    public String getcTitle() {
        return cTitle;
    }

    public void setcTitle(String cTitle) {
        this.cTitle = cTitle;
    }

    public LocalDateTime getDtCreateTime() {
        return dtCreateTime;
    }

    public void setDtCreateTime(LocalDateTime dtCreateTime) {
        this.dtCreateTime = dtCreateTime;
    }
}
