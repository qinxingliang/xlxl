const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onShow(){
    this.setData({
      allList:[]
    })
    this.getAllList()
  },
  getAllList(){
      wx.request({
        url: app.globalData.baseUrl + 'api/sb/record/v1/wx/getAll',
        method:"POST",
        data:{
            oepnid: app.globalData.openid
        },
        success:res=>{
            this.setData({
                allList:res.data
            })
        }
      })

     },
     toList(e){
      wx.navigateTo({
        url: '/pages/result/list?keyword=' + e.currentTarget.dataset.text,
      })
     }
})