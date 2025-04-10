const app = getApp()
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
        this.setData({
            id: options.id
        })


    },
    onShow() {
        this.getData()
        this.getUser()
        this.addOne()
    },
    async getUser() {
        var user = await app.getUserInfo();
        this.setData({
            user
        })
    },
    getData() {
        // 获取详情
        var that = this
       // console.log("该商品id:{}",this.data.id)
        wx.request({
            url: app.globalData.baseUrl + 'api/sp/v1/wx/selectById',
            method: "POST",
            data: {
                cId: this.data.id
            },
            success(res) {
                that.setData({
                    product: res.data
                })
           //     console.log("获得详细商品信息:{}",res.data)
            }
        })
    },
    addOne() {

        wx.request({
            url: app.globalData.baseUrl + 'api/sp/v1/wx/addLll',
            method: "POST",
            data: {
                cId: this.data.id
            },
            success(res) {
                console.log(res)
            }
        })
    },
    openMap: function (t) {
        var e = t.currentTarget.dataset.res,
            a = Number(e.cLatitude),
            n = Number(e.cLongitude);
        wx.openLocation({
            latitude: a,
            longitude: n,
            scale: 14,
            name: e.dz_title,
            address: e.dizhi,
            success: function (t) {
                console.log(t);
            },
            fail: function (t) {
                console.log(t);
            }
        });
    },
    buyNow: function () {
        var that = this
        if (app.globalData.userInfo == null) {
            wx.switchTab({
                url: '../../../pages/me/me',
                success() {
                    wx.showToast({
                        title: '请先登录',
                        icon: 'none'
                    })

                }
            })
            return
        }
        if (that.data.user.cScore < that.data.product.nJifen) {
            wx.showToast({
                title: '积分不足',
                icon: 'none'
            })
            return
        }
        wx.showModal({
            title: "兑换提示",
            content: "是否兑换该产品",
            success(res) {
                if (res.confirm) {
                    wx.showLoading({
                      title: '加载中',
                    })
                    // 请求后台
                    wx.request({
                      url: app.globalData.baseUrl + 'api/sp/v1/wx/dh',
                      method:"POST",
                      data:{
                        cId: that.data.id,
                        openId: that.data.user.cOpenid
                      },
                      success(res){
                        if(res.data == true){
                            wx.navigateTo({
                                url: '../../../pages/me/score/score',
                                success() {
                                    wx.showToast({
                                        title: '兑换成功',
                                    })
                                }
                            })
                        }else{
                            wx.showToast({
                                title: '兑换失败',
                                icon:"error"
                            })
                        }
                      },
                      complete(){
                          wx.hideLoading()
                      }
                    })
                } else if (res.cancel) {
                    console.log('用户点击取消')
                }

            }
        });
    },
})