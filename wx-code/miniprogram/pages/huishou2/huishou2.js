const app = getApp();
Page({


    data: {
  
    },
  
  
    onLoad(options) {
        var that = this;
        wx.request({
            url: app.globalData.baseUrl + 'api/hss/v1/wx/select',
            method: "POST",
            data: {},
            success(res) {
                that.setData({
                    list:res.data.data
                })
                // console.log(res)
            }
        })
    //   wx.cloud.database().collection('garbage_huishous')
    //   .get()
    //   .then(res=>{
    //     console.log(res)
    //     this.setData({
    //       list:res.data
    //     })
    //   })
    },
    call(event){
      wx.makePhoneCall({
        phoneNumber: event.currentTarget.dataset.phone,
      })
    },
    copy(event){
      wx.setClipboardData({
        data: event.currentTarget.dataset.weixin,
      })
    },
  })