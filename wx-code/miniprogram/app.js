//app.js
App({
    globalData: {
        openid: null,
        // URL
        baseUrl: 'http://127.0.0.1:8080/'
    },
    onLaunch: function () {
      wx.cloud.init({
        env:'cloud1-0gxgpmzo06901b21'
      })
        // this.onGetOpenid()
        // this.getUserinfo()

      if(wx.getStorageSync('userInfo')){
        this.globalData.userInfo=wx.getStorageSync('userInfo')
      }
       var that=this
        // 请求后台获取openid
        wx.login({
            success(res) {
                if (res.code) {
                    //发起网络请求
                    wx.request({
                        url: that.globalData.baseUrl + 'api/wx/v1/getOpenId',
                        method: "POST",
                        data: {
                            code: res.code
                        },
                        async success(suc) {
                            that.globalData.openid = suc.data.data.openId
                            // 当存在用户缓存信息系时请求后台 获取用户登录信息
                            if (wx.getStorageSync('userInfo')) {
                                var info = await that.getUserInfo()
                                // 设置userInfo信息
                                that.globalData.userInfo = info;
                                wx.setStorageSync('userInfo', info)
                            }
                        }
                    })
                } else {
                    console.log('登录失败！' + res.errMsg)
                }
            }
        })

        // 版本检测
        const updateManager = wx.getUpdateManager()
        updateManager.onCheckForUpdate(function (res) {
            console.log(res.hasUpdate)
            if (res.hasUpdate) {
                updateManager.onUpdateReady(function () {
                    wx.showModal({
                        title: '更新提示',
                        content: '新版本已经准备好，是否重启应用？',
                        success: function (res) {
                            if (res.confirm) {
                                updateManager.applyUpdate()
                            }
                        }
                    })
                })
            }
        })
        updateManager.onUpdateFailed(function () {
            // 新版本下载失败
        })

    },
    getUserInfo() {
        return new Promise((resolve, reject) => {
            wx.request({
                url: this.globalData.baseUrl + 'api/wx/v1/getUserInfo',
                method: 'POST',
                data: {
                    openId: this.globalData.openid
                },
                success: function (res) {
                    resolve(res.data.data)
                },
                fail(res) {
                    reject(res);
                }
            })
        })
    },
    onGetOpenid: function () {
        let app = this;
        // 调用云函数
        wx.cloud.callFunction({
            name: 'login',
            success: res => {
                console.log('[云函数] [login]: ', res)
                app.globalData.openid = res.result.openid
            },
        })
    }
})