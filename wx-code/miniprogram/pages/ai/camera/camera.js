var md5 = require('../../../utils/md5.js')
var http = require('../../../utils/http.js')
var util = require('../../../utils/util.js')
var app =getApp();
Page({
    data: {
        accessToken: "",
        isShow: false,
        result: {},
        src: "",
        isCamera: true,
        btnTxt: "拍照",
        typeName:["可回收垃圾","有害垃圾","厨余（湿）垃圾","其他（干）垃圾","未知结果"]
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
                    success: base64Res => {
                        // const imageType = res.tempImagePath.split('.').pop(); 
                        // // 获取文件扩展名（如 png/jpg）
                        // const base64Data = `data:image/${imageType};base64,${base64Res.data}`;
                        // console.info(base64Data)
                        that.req(base64Res.data)
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
    req: function (image) {
    //  console.info("1")
   //   console.info(image)
    /*  image=image.replace(/\+/g, '%2B')  // 替换所有 +
                  .replace(/\//g, '%2F')  // 替换所有 /（注意转义符号）
                  .replace(/=/g, '%3D');  // 替换所有 =*/
     // console.info("2")
    //  console.info(image)
        var that = this
        wx.request({
          url: app.globalData.baseUrl + 'api/wx/v1/getFenLei',
          method: "POST",
          data:{
            image:image
          },
          header:{
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          success(res) {
            wx.hideLoading()
            console.log(JSON.stringify(res))
            var code = res.statusCode
            if (code == 401 || code == 403 ) {
                wx.clearStorageSync("access_token")
                wx.clearStorageSync("time")
                that.accessTokenFunc()
                return
            }
            const results = res.data.data.list
            // console.info(results[0])
            if (results != undefined && results != null) {
                that.setData({
                    isShow: true,
                    result: results[0]
                })
                console.info(that.data.result);
            } else {
                wx.clearStorageSync("access_token")
                wx.showToast({
                    icon: 'none',
                    title: 'AI识别失败,请重新尝试',
                })
            }
        }
    })
  },
    // 获取accessToken
     accessTokenFunc: async function () {
        var that = this
        return await new Promise((resolve,reject)=>{
            wx.request({
                url: app.globalData.baseUrl + 'api/wx/v1/getAccessToken',
                method: "POST",
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
            success: (ress) => {

                console.log(ress)
                console.log(ress.tempFilePaths)
                this.setData({
                  src: ress.tempFilePaths[0],
                  isCamera: false,
                  btnTxt: "拍照"
                })
                wx.showLoading({
                    title: '正在加载中',
                })
                wx.getFileSystemManager().readFile({
                    filePath: ress.tempFilePaths[0],
                    encoding: "base64",
                    success: res => {
                        that.req(res.data)
                    },
                    fail: (err) => {
                      wx.showToast({
                        title: '读取照片失败',
                        icon: 'none'
                      });
                      console.error('读取照片错误:', err);
                    }
                })

            }
        })
    }

})