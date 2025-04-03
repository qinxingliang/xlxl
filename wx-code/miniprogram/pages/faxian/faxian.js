const app =getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    catelistN:["关于垃圾分类"],
    currentIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  onShow(){
      this.setData({
        allList:[]
      })
      this.getAllList()
  },

  getAllList(){

        var that=this
        wx.request({
            url: app.globalData.baseUrl + 'api/faxian/v1/wx/getAll',
            method:"POST",
            data:{},
            success(res){
                
              that.setData({
                allList: res.data
              })
            }
          })
   
     },
     toDetail(event){
       var id=event.currentTarget.dataset.id
       console.log(id)
       wx.navigateTo({
         url: '../../pages/faxian/detail/detail?id='+id,
       })
     }
    
})