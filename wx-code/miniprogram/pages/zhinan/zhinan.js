const app = getApp();
Page({
    data: {

    },
    map(){
      wx.navigateTo({
        url: '/pages/zhinan/map/map',
      })
    },
    dati() {
        wx.switchTab({
            url: '/pages/kaoshi/kaoshi',
        })
    },
    jifen() {
        wx.switchTab({
            url: '/pages/duihuan/duihuan',
        })
    },
    xw() {
        wx.switchTab({
            url: '/pages/faxian/faxian',
        })

    },
    onLoad: function (options) {

    },
    onShow() {
        this.getBanners()
        this.getVideo()

    },
    paizhao() {
        wx.navigateTo({
            url: '/pages/ai/index',
        })
    },



    //获取轮播图数据库记录
    getBanners() {
        var that = this;
        wx.request({
            url: app.globalData.baseUrl + 'api/lbt/v1/getAll',
            method: 'POST',
            success: function (res) {
                that.setData({
                    bannerList: res.data.data
                })
            }
        })

    },
    getVideo() {
        var that = this;
        wx.request({
          url: app.globalData.baseUrl + 'api/video/v1/wx/getAll',
          data:{},
          method:"POST",
          success(res){
            that.setData({
                    videoList: res.data.data
                })
          }
        })
    },
    huishou() {
        wx.navigateTo({
            url: '../../pages/huishou/huishou',
        })
    }
})