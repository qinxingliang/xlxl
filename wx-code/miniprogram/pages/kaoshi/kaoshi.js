const app = getApp()
const util = require("../../utils/util")

Page({

    /**
     * 页面的初始数据
     */
    data: {
        tIndex: 0,
        chakan: false,
        jie: false,
        complete: false,
        recordList: [],
        duanweiList: ["倔强青铜", "秩序白银", "荣耀黄金", "尊贵铂金", "永恒钻石", "至尊星耀", "最强王者"],
        status: 0,
        answerList: ["可回收物", "有害垃圾", "厨余垃圾", "其他垃圾"]
    },
    onShow() {
        if (app.globalData.userInfo == null) {
            wx.switchTab({
                url: '../../pages/me/me',
                success() {
                    wx.showToast({
                        title: '请先登录',
                        icon: 'none'
                    })

                }
            })
            return
        }
        this.getUser()
        wx.request({
          url: app.globalData.baseUrl + 'api/exam/record/v1/wx/get',
          method: "POST",
          data:{
            cOpenId: app.globalData.openid,
            isToday: "1"
          },
          success(res) {
            console.log("查看res",res);
              if (res.data.length > 0) {
                wx.switchTab({
                  url: '../../pages/zhinan/zhinan',
                        success() {
                      wx.showToast({
                          title: '你今天已经答过题了',
                          icon: 'none'
                      })
                    }
              

            })
                return
              } 
          }
      })
        this.getRandom()

    },
    // onShow()
    // {
    //   if (app.globalData.userInfo == null) {
    //     wx.switchTab({
    //         url: '../../pages/me/me',
    //         success() {
    //             wx.showToast({
    //                 title: '请先登录',
    //                 icon: 'none'
    //             })

    //         }
    //     })
    //     return
    //     }
    // },
    async getUser() {
        var user = await app.getUserInfo();
        this.setData({
            user
        })
    },
    getRandom() {
        var that = this;
        // 获取题目信息
        wx.request({
          url: app.globalData.baseUrl + 'api/exam/v1/wx/getAll',
          method:"POST",
          data:{},
          success(res){
            that.setData({
                examList: res.data.data
            })
          }
        })

    },
    choose(event) {
        var that = this
        var index = event.currentTarget.dataset.index
        console.log(index)
        if (that.data.jie) {
            return
        }

        if (index == that.data.examList[that.data.tIndex].nType) {
            that.setData({
                linIndex: index,
            })
            that.next()
        } else {
            that.setData({
                linIndex: index,
                jie: true
            })
        }
    },
    next() {
        var that = this

        var data = {}
        data.title = that.data.examList[that.data.tIndex].cWtnr
        data.duiAnswer = that.data.answerList[that.data.examList[that.data.tIndex].nType]
        data.myAnswer = that.data.answerList[that.data.linIndex]
        if (data.myAnswer == data.duiAnswer) {
            data.score = that.data.examList[that.data.tIndex].nScore
        } else {
            data.score = 0
        }
        that.data.recordList.push(data)
        that.setData({
            recordList: that.data.recordList,
        })

        if (that.data.tIndex == 9) {
            that.setData({
                status: 1
            })
            var recordList = that.data.recordList
            var dui = 0
            var cuo = 0
            var score = 0
            for (var i in recordList) {
                score = score + recordList[i].score
                if (recordList[i].score > 0) {
                    dui++
                } else {
                    cuo++
                }
            }
            var chenghao = ""
            var chenghaoList = that.data.duanweiList
            if (score > 0 && score <= 20) {
                chenghao = chenghaoList[0]
            }
            if (score > 20 && score <= 40) {
                chenghao = chenghaoList[1]
            }
            if (score > 40 && score <= 50) {
                chenghao = chenghaoList[2]
            }
            if (score > 50 && score <= 60) {
                chenghao = chenghaoList[3]
            }
            if (score > 60 && score <= 80) {
                chenghao = chenghaoList[4]
            }
            if (score > 80 && score <= 90) {
                chenghao = chenghaoList[5]
            }
            if (score > 90 && score <= 100) {
                chenghao = chenghaoList[6]
            }

            that.setData({
                dui,
                cuo,
                score,
                chenghao
            })
            that.add()
        } else {
            that.setData({
                tIndex: Number(that.data.tIndex + 1),
            })
            that.setData({
                jie: false
            })
        }


    },

    add() {
      // console.log("添加考试记录");
        var that = this;
        wx.request({
          url: app.globalData.baseUrl + 'api/exam/record/v1/wx/add',
          method:"POST",
          data:{
            cOpenId:app.globalData.openid,
            cExamRecord: that.data.recordList,
            nSuccess:that.data.dui,
            nError: that.data.cuo,
            nSocre: that.data.score,
            cChenghao: that.data.chenghao,
          },
          success(res){
            console.log(res);
          }
        })
    },
    che() {
        var that = this
        that.getRandom()
        that.setData({
            tIndex: 0,
            jie: false,
            complete: false,
            recordList: [],
            status: 0,
            chakan: false,
        })
    },
    chakan() {
        this.setData({
            chakan: !this.data.chakan
        })
    }



})