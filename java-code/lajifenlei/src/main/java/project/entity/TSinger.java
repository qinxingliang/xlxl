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
 * 歌手表
 * </p>
 *
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("t_singer")
public class TSinger implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId("c_id")
    private String cId;

    /**
     * 歌手姓名
     */
    @TableField("c_name")
    private String cName;

    /**
     * 头像
     */
    @TableField("c_cover")
    private String cCover;

    /**
     * 是否推荐 0否，1是
     */
    @TableField("n_show")
    private Integer nShow;

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

    public String getcCover() {
        return cCover;
    }

    public void setcCover(String cCover) {
        this.cCover = cCover;
    }

    public Integer getnShow() {
        return nShow;
    }

    public void setnShow(Integer nShow) {
        this.nShow = nShow;
    }
}
