const app=getApp()
Page({

  data: {
    navIndex:0,
    navItems:["最新考试","分数最高"]
  },


  onLoad: function (options) {
   
  },
  onShow(){
    this.setData({
      allList:[]
    })
    this.getAllList()
  },
  getAllList(){
    var that=this
    var order="time"

    if(that.data.navIndex==0){
       order="time"
    }else{
      order="score"
    }
    wx.request({
      url: app.globalData.baseUrl + 'api/exam/record/v1/wx/get',
      method: "POST",
      data:{
        cOpenId: app.globalData.openid,
        orderBy: order
      },
      success(res){
        that.setData({
            allList:res.data
        })
      }
    })
 },
  navChange: function(a) {
    var t = this;
    t.setData({
        navIndex: a.detail
    })
    this.setData({
      allList:[]
    })
    this.getAllList()
},
toDetail(event){
  var id=event.currentTarget.dataset.id
  wx.navigateTo({
    url: '../../../pages/me/history/detail/detail?id='+id,
  })
}

  
})