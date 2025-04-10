const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        zan: false,
        zanCount: 0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            id: options.id
        })
        this.getUser();
        this.getData();
        this.getZan();
        this.addOne();
    },
    async getUser() {
        var user = app.globalData.userInfo
        this.setData({
            user
        })
        console.log("用户信息",user)
    },
    getData() {
        var that = this;
        wx.request({
            url: app.globalData.baseUrl + 'api/faxian/v1/wx/getByid',
            method: "POST",
            data: {
                cId: this.data.id
            },
            success(res) {
                var article = res.data.data;
                var yulanList = []
                for (const key in article.cYulanList) {
                    yulanList.push(article.cYulanList[key].response)
                }
                that.setData({
                    article,
                    yulanList
                })
            }
        })
    },

    addOne() {
        wx.request({
            url: app.globalData.baseUrl + 'api/faxian/v1/wx/liulan',
            method: "POST",
            data: {
                cId: this.data.id,
            },
            success(res) {
                console.log(res)
            }
        })
    },

    zan(e) {
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
        var that = this
        wx.request({
            url: app.globalData.baseUrl + 'api/dianzan/v1/wx/add',
            method: "POST",
            data: {
                cOpenId: app.globalData.openid,
                cUserInfo: this.data.user,
                cFaxianId: this.data.id
            },
            success(res) {
                wx.showToast({
                    title: '点赞成功',
                })
                that.getData();
                that.getZan();
            }
        })
    },
    zan2() {
      var that = this
      wx.request({
        url: app.globalData.baseUrl + 'api/dianzan/v1/wx/del',
        method: "POST",
        data: {
            openId: app.globalData.openid,
            faxianId: this.data.id
        },
        success(res) {
            wx.showToast({
                title: '取消点赞',
            })
            that.getData();
            that.getZan();
        }
    })
    },
    getZan(){
        var that = this
        wx.request({
            url: app.globalData.baseUrl + 'api/dianzan/v1/wx/select',
            method: "POST",
            data: {
                faxianId: this.data.id,
            },
            success(res) {
                var data = res.data;
                var zanCount = data.length;
                var faces = [];
                var zan = false;
                data.forEach(item => {
                   if (that.data.user != null)
                    if(item.cOpenId == that.data.user.cOpenid){
                        zan = true;
                    }
                    
                    faces.push(item.cUserInfo.cIcon);
                });
                console.log("是否已经点赞",zan);
                that.setData({
                    zanCount,
                    faces,
                    zan
                })
            }
        })
    },
    previewImg() {
        var that = this
        wx.previewImage({
            urls: that.data.yulanList,
            current: that.data.yulanList[0]
        });
    }
})