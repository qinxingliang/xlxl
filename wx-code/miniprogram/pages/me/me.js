var util = require("../../utils/util.js")
const app = getApp()

Page({


    data: {

    },
    biaozhu(){
      wx.navigateTo({
        url: '/pages/zhinan/add/add',
      })
    },
    feedback() {
        wx.navigateTo({
            url: '/pages/me/feedback/feedback',
        })
    },
    toNote() {
        wx.navigateTo({
            url: '/pages/me/note/note',
        })
    },
    toScoreRank() {
        wx.navigateTo({
            url: '/pages/me/scoreRank/scoreRank',
        })
    },
    onLoad: function (options) {

    },
    previewImg: function (e) {

        wx.previewImage({
            current: this.data.userInfo.avatarUrl, //当前图片地址  
            //所有要预览的图片的地址集合 数组形式
            urls: [this.data.userInfo.avatarUrl],

        })
    },
    toMyCircle() {
        wx.navigateTo({
            url: '/pages/me/myCircle/myCircle',
        })
    },
    onShow() {
        // setTimeout(() => {

        // }, 2000);
        this.setData({
            userInfo: app.globalData.userInfo
        })

        // console.log(app.globalData.openid)
        this.getUser()
        this.getQiandao()
    },
    getQiandao() {
        var that = this;
        // 查看今天是否签到
        wx.request({
            url: app.globalData.baseUrl + 'api/qiandao/v1/wx/getQiandao',
            method: "POST",
            data: {
                cOpenId: app.globalData.openid,
                isToday: "1"
            },
            success(res) {
                if (res.data.length > 0) {
                    that.setData({
                        qian: true
                    })
                } else {
                    that.setData({
                        qian: false
                    })
                }
            }
        })
     
    },
    async getUser() {
        var user = await app.getUserInfo();
        this.setData({
            user
        })
    },

    qiandao() {
        var that = this
        if (that.data.qian) {
            wx.showToast({
                title: '您今天已经签过了',
                icon: 'none'
            })
            return
        }
        wx.request({
            url: app.globalData.baseUrl + 'api/qiandao/v1/wx/addQiandao',
            method: "POST",
            data: {
                cOpenId: app.globalData.openid,
            },
            success(res) {
                console.log(res)
                wx.showToast({
                    title: '签到成功',
                })
                that.getUser()
                that.getQiandao()
            }

        })
     
    },
    getUserProfile() {
        var that = this;
        wx.request({
            url: app.globalData.baseUrl + 'api/wx/v1/getUserInfo',
            method: 'POST',
            data: {
                openId: app.globalData.openid
            },

            success: function (res) {
                var data = res.data.data;
                if (data.cIcon == null && data.cNickName == null) {
                    
                    wx.navigateTo({
                        url: './userInfo/userInfo',
                    })
                } else {
                    // 设置userInfo信息
                    that.setData({
                        userInfo: data
                    })
                    app.globalData.userInfo = that.data.userInfo;
                    wx.setStorageSync('userInfo', that.data.userInfo)
                }
            }
        })
        // var that = this;
        // wx.cloud.database().collection('garbage_users')
        // .where({
        //     _openid: app.globalData.openid
        // })
        // .get()
        // .then(result => {
        //     if (result.data.length == 0) {
        //         wx.navigateTo({
        //             url: '../../pages/me/userInfo/userInfo',
        //             success() {
        //                 wx.showToast({
        //                     title: '首次登录请填写用户昵称及头像',
        //                     icon: 'none'
        //                 })
        //             }
        //         })
        //     } else {
        //         // 获取数据库用户信息
        //         wx.cloud.database().collection('garbage_users')
        //             .where({
        //                 _openid: app.globalData.openid
        //             })
        //             .get()
        //             .then(res => {
        //                 console.log(res)
        //                 app.globalData.userInfo = res.data[0]
        //                 wx.setStorageSync('userInfo', res.data[0])
        //                 that.setData({
        //                     user: res.data[0]
        //                 })
        //                 that.setData({
        //                     userInfo: res.data[0]
        //                 })
        //             })

        //     }
        // })
    },
    loginOut() {
        app.globalData.userInfo = null
        this.setData({
            userInfo: null
        })
        wx.removeStorageSync('userInfo')
       // console.log("退出登录用户信息",this.userInfo,wx.getUserInfo(),app.globalData.userInfo);
    },

    tobiaobai() {
        wx.navigateTo({
            url: '/pages/me/biaobai/biaobai',
        })
    },
    toshiwu() {
        wx.navigateTo({
            url: '/pages/me/shiwu/shiwu',
        })
    },
    toershou() {
        wx.navigateTo({
            url: '/pages/me/ershou/ershou',
        })
    },
    toChooseSchool() {
        wx.navigateTo({
            url: '/pages/me/chooseSchool/chooseSchool',
        })
    },
    toPao() {
        wx.navigateTo({
            url: '/pages/me/pao/pao',
        })
    },
    toErshouCollect() {
        wx.navigateTo({
            url: '/pages/me/ershouCollect/ershouCollect',
        })
    },

    toHistory() {
        wx.navigateTo({
            url: '../../pages/me/history/history',
        })
    },
    toScoreHistory() {
        wx.navigateTo({
            url: '../../pages/me/score/score',
        })
    },
    toSearchHistory() {
        wx.navigateTo({
            url: '../../pages/me/searchHistory/searchHistory',
        })
    },



    // qiandao(){
    //   let that = this;
    //   if(!app.globalData.userInfo){

    //     wx.showToast({
    //       title: '请登录',
    //     })
    //     return
    //   }

    //   console.log(util.formatDate(new Date()))
    //   console.log(app.globalData.userInfo.qiandaoDate)
    //   //为空 或者 今天未签到  则更新并加积分
    //   if(!app.globalData.userInfo.qiandaoDate || app.globalData.userInfo.qiandaoDate!=util.formatDate(new Date())){



    //     let qiandao = {}
    //     qiandao.date = util.formatDate(new Date())
    //     qiandao.time = util.formatTime(new Date())
    //     app.globalData.userInfo.qiandaoList.push(qiandao)

    //     wx.cloud.database().collection('garbage_users').doc(app.globalData.userInfo._id).update({
    //       data: {
    //         qiandaoDate:util.formatDate(new Date()),
    //         score:app.globalData.userInfo.score + 1,
    //         qiandaoList: app.globalData.userInfo.qiandaoList
    //       },
    //       success(res){

    //         app.getUserinfo()

    //       }

    //     })


    //     wx.showToast({
    //       icon:'none',
    //       title: '签到成功',
    //     })

    //     wx.cloud.database().collection('garbage_score')
    //       .add({
    //         data:{
    //           time:util.getTime(new Date(Date.now())),
    //           detail:'签到',
    //           score:1
    //         }
    //       })



    //   //否则提示 已经签到
    //   }else{
    //     app.getUserinfo()
    //     wx.showToast({
    //       icon:'none',
    //       title: '今天已签到成功',
    //     })

    //   }
    // },
    toUserInfo() {
        wx.navigateTo({
            url: '../../pages/me/userInfo/userInfo',
        })
    },
    toDuiHuan() {
        wx.switchTab({
            url: '../../pages/duihuan/duihuan',
        })
    },
    toInfo1() {
        wx.navigateTo({
            url: '../../pages/me/info1/info1',
        })
    },
    toInfo2() {
        wx.navigateTo({
            url: '../../pages/me/info2/info2',
        })
    },
    toMyLike() {
        wx.navigateTo({
            url: '../../pages/me/like/like',
        })
    },
    toSbRecord() {
        wx.navigateTo({
            url: '../../pages/me/sbRecord/sbRecord',
        })
    }



})