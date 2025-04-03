// pages/me/info1/info1.js
const app =getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
        this.getInfo()
  },
  getInfo(){
      var that = this;
    wx.request({
      url: app.globalData.baseUrl + 'api/info/v1/wx/getInfo',
      data:{},
      method:"POST",
      success(res){
        that.setData({
            info:res.data
        })
      }
    })
  },
  previewImg(){
    var that=this
    wx.previewImage({
      urls: [that.data.info.cImage],
      current: that.data.info.cImage
  });
  }

  
})