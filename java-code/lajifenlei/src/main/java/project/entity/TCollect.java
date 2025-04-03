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
 * 收藏表
 * </p>
 *
 * @author YJR
 * @since 2023-07-07
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName("t_collect")
public class TCollect implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 主键
     */
    @TableId("c_id")
    private String cId;

    /**
     * 音乐图片
     */
    @TableField("c_cover")
    private String cCover;

    /**
     * 音乐名称
     */
    @TableField("c_title")
    private String cTitle;

    /**
     * 价格
     */
    @TableField("d_price")
    private Object dPrice;

    /**
     * 音乐id主键
     */
    @TableField("c_spid")
    private String cSpid;

    /**
     * 微信用户openid
     */
    @TableField("c_wx_open_id")
    private String cWxOpenId;

    public String getcId() {
        return cId;
    }

    public void setcId(String cId) {
        this.cId = cId;
    }

    public String getcCover() {
        return cCover;
    }

    public void setcCover(String cCover) {
        this.cCover = cCover;
    }

    public String getcTitle() {
        return cTitle;
    }

    public void setcTitle(String cTitle) {
        this.cTitle = cTitle;
    }

    public Object getdPrice() {
        return dPrice;
    }

    public void setdPrice(Object dPrice) {
        this.dPrice = dPrice;
    }

    public String getcSpid() {
        return cSpid;
    }

    public void setcSpid(String cSpid) {
        this.cSpid = cSpid;
    }

    public String getcWxOpenId() {
        return cWxOpenId;
    }

    public void setcWxOpenId(String cWxOpenId) {
        this.cWxOpenId = cWxOpenId;
    }
}
