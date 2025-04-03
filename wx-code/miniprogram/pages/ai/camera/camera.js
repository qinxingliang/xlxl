var md5 = require('../../../utils/md5.js')
var http = require('../../../utils/http.js')
var util = require('../../../utils/util.js')
var app =getApp();
Page({
    data: {
        accessToken: "",
        isShow: false,
        results: [],
        src: "",
        isCamera: true,
        btnTxt: "拍照"
    },
    onLoad() {
        this.ctx = wx.createCameraContext()
        var time = wx.getStorageSync("time")
        var curTime = new Date().getTime()
        var timeInt = parseInt(time)
        var timeNum = parseInt((curTime - timeInt) / (1000 * 60 * 60 * 24))
        console.log("=======" + timeNum)
        var accessToken = wx.getStorageSync("access_token")
        console.log("====accessToken===" + accessToken + "a")
        if (timeNum > 28 || (accessToken == "" ||
                accessToken == null || accessToken == undefined)) {
            this.accessTokenFunc()
        } else {
            this.setData({
                accessToken: wx.getStorageSync("access_token")
            })
        }
    },
    takePhoto() {
        var that = this
        if (this.data.isCamera == false) {
            this.setData({
                isCamera: true,
                btnTxt: "拍照"
            })
            return
        }
        this.ctx.takePhoto({
            quality: 'high',
            success: (res) => {
                this.setData({
                    src: res.tempImagePath,
                    isCamera: false,
                    btnTxt: "重拍"
                })
                wx.showLoading({
                    title: '正在加载中',
                })
                wx.getFileSystemManager().readFile({
                    filePath: res.tempImagePath,
                    encoding: "base64",
                    success: res => {
                        console.log(res)
                        that.req(that.data.accessToken, res.data)
                    },
                    fail: res => {
                        wx.hideLoading()
                        wx.showToast({
                            title: '拍照失败,未获取相机权限或其他原因',
                            icon: "none"
                        })
                    }
                })
            }
        })
    },
    req: function (token, image) {
        var that = this
        http.req("https://aip.baidubce.com/rest/2.0/image-classify/v2/advanced_general?access_token=" + token, {
            "image": image
        }, function (res) {
            wx.hideLoading()
            console.log(JSON.stringify(res))
            var code = res.data.err_code
            if (code == 111 || code == 100 || code == 110) {
                wx.clearStorageSync("access_token")
                wx.clearStorageSync("time")
                that.accessTokenFunc()
                return
            }
            var num = res.result_num
            var results = res.data.result
            if (results != undefined && results != null) {
                that.setData({
                    isShow: true,
                    results: results
                })
            } else {
                wx.clearStorageSync("access_token")
                wx.showToast({
                    icon: 'none',
                    title: 'AI识别失败,请重新尝试',
                })
            }
        }, "POST")
    },
    // 获取accessToken
     accessTokenFunc: async function () {
        var that = this
        return await new Promise((resolve,reject)=>{
            wx.request({
                url: app.globalData.baseUrl + 'api/wx/v1/getAccessToken',
                method: "POST",
                data: {},
                success(res){
                    that.data.accessToken = res.data.access_token
                    wx.setStorageSync("access_token", res.result.data.access_token)
                    wx.setStorageSync("time", new Date().getTime())
                    resolve();
                },
                fail(){
                    wx.clearStorageSync("access_token")
                    wx.showToast({
                        icon: 'none',
                        title: '调用失败,请重新尝试',
                    })
                    reject();
                }
            })
        })
    },
    radioChange: function (e) {
        wx.request({
          url: app.globalData.baseUrl + 'api/sb/record/v1/wx/add',
          method:"POST",
          data:{
            cOpenId:app.globalData.openid,
            cText:e.detail.value
          },
          success:res=>{
              this.setData({
                isShow: false
              })
          }
        })
    },
    hideModal: function () {
        this.setData({
            isShow: false,
        })
    },
    stopRecord() {
        this.ctx.stopRecord({
            success: (res) => {
                this.setData({
                    src: res.tempThumbPath,
                    videoSrc: res.tempVideoPath
                })
            }
        })
    },
    error(e) {
        console.log(e.detail)
    },

    chooseImage() {
        var that = this;
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success(ress) {

                console.log(ress)
                console.log(ress.tempFilePaths)

                wx.getFileSystemManager().readFile({
                    filePath: ress.tempFilePaths[0],
                    encoding: "base64",
                    success: res => {
                        that.req(that.data.accessToken, res.data)
                    },

                })

            }
        })
    }

})