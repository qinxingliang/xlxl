const app =getApp();
Page({


  data: {
    MAX_LIMIT: 20,
    page: 0,
    dataCount: 0,
    datas: [],
    type: 1,
    logo:""
  },


  onLoad: function(options) {
    console.log(JSON.stringify(options))
    this.data.type = options.type
    var typeInt = parseInt(this.data.type)
    var title = ""
    var logoImg=""
    switch (typeInt) {
      case 1:
        title = '可回收物'
        logoImg ="/images/RecycleableWaste.jpg"
        break;
      case 2:
        title = '有害垃圾'
        logoImg = "/images/HazardouAwaste.jpg"
        break;
      case 3:
        title = '湿垃圾'
        logoImg = "/images/HouseholdfoodWaste.jpg"
        break;
      case 4:
        title = '干垃圾'
        logoImg = "/images/ResidualWaste.png"
        break;
    }
    wx.setNavigationBarTitle({
      title: title,
    })
    this.setData({
      logo:logoImg
    })
 
    this.onGetData()
  },
  onGetData: function() {
    wx.showLoading({
      title: '正在加载数据中.....',
    })
    var that = this;
    wx.request({
        url: app.globalData.baseUrl + 'api/product/v1/wx/getAll',
        method:"POST",
        data:{
            nSortId: parseInt(that.data.type)
        },
        success(res){
          that.setData({
            datas: res.data.data
          })
        },
        complete(){
            wx.hideLoading()
        }
      })
 
  },
  onPullDownRefresh: function() {
    this.data.page = 0
    this.onGetData()
  },

  onReachBottom: function() {
    this.onGetData()
  },

})