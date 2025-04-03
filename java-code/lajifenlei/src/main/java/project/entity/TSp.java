package project.entity;

import com.alibaba.fastjson.JSONArray;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

import com.baomidou.mybatisplus.extension.handlers.FastjsonTypeHandler;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.Accessors;

/**
 * <p>
 * 
 * </p>
 *
 * @author YJR
 * @since 2023-09-15
 */
@Getter
@Setter
@Accessors(chain = true)
@TableName(value = "t_sp",autoResultMap = true)
public class TSp implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId("c_id")
    private String cId;

    /**
     * 标题
     */
    @TableField("c_title")
    private String cTitle;

    /**
     * 封面图地址
     */
    @TableField("c_img_url")
    private String cImgUrl;

    /**
     * 顶部轮播图
     */
    @TableField(value = "c_imgs",typeHandler = FastjsonTypeHandler.class)
    private JSONArray cImgs;

    /**
     * 商品详情图片
     */
    @TableField(value = "c_img_list",typeHandler = FastjsonTypeHandler.class)
    private JSONArray cImgList;

    /**
     * 地址
     */
    @TableField("c_dizhi")
    private String cDizhi;

    /**
     * 积分
     */
    @TableField("n_jifen")
    private Integer nJifen;

    /**
     * 原价
     */
    @TableField("d_market_price")
    private BigDecimal dMarketPrice;

    /**
     * 库存
     */
    @TableField("n_stock")
    private Integer nStock;

    /**
     * 已售
     */
    @TableField("n_yishou")
    private Integer nYishou;

    /**
     * 浏览量
     */
    @TableField("n_view")
    private Integer nView;

    /**
     * 经度
     */
    @TableField("c_longitude")
    private String cLongitude;

    /**
     * 维度
     */
    @TableField("c_latitude")
    private String cLatitude;

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

    public JSONArray getcImgs() {
        return cImgs;
    }

    public void setcImgs(JSONArray cImgs) {
        this.cImgs = cImgs;
    }

    public JSONArray getcImgList() {
        return cImgList;
    }

    public void setcImgList(JSONArray cImgList) {
        this.cImgList = cImgList;
    }

    public String getcDizhi() {
        return cDizhi;
    }

    public void setcDizhi(String cDizhi) {
        this.cDizhi = cDizhi;
    }

    public Integer getnJifen() {
        return nJifen;
    }

    public void setnJifen(Integer nJifen) {
        this.nJifen = nJifen;
    }

    public BigDecimal getdMarketPrice() {
        return dMarketPrice;
    }

    public void setdMarketPrice(BigDecimal dMarketPrice) {
        this.dMarketPrice = dMarketPrice;
    }

    public Integer getnStock() {
        return nStock;
    }

    public void setnStock(Integer nStock) {
        this.nStock = nStock;
    }

    public Integer getnYishou() {
        return nYishou;
    }

    public void setnYishou(Integer nYishou) {
        this.nYishou = nYishou;
    }

    public Integer getnView() {
        return nView;
    }

    public void setnView(Integer nView) {
        this.nView = nView;
    }

    public String getcLongitude() {
        return cLongitude;
    }

    public void setcLongitude(String cLongitude) {
        this.cLongitude = cLongitude;
    }

    public String getcLatitude() {
        return cLatitude;
    }

    public void setcLatitude(String cLatitude) {
        this.cLatitude = cLatitude;
    }

    public LocalDateTime getDtCreateTime() {
        return dtCreateTime;
    }

    public void setDtCreateTime(LocalDateTime dtCreateTime) {
        this.dtCreateTime = dtCreateTime;
    }
}
