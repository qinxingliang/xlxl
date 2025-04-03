const app = getApp()
Page({

    data: {
        cates: ["全部", "增加", "减少"],
        current: 0,
        scrollHeight: 500,
        jifenlog: []
    },

    onLoad: function (options) {
        var that = this;
        wx.request({
            url: app.globalData.baseUrl + 'api/jifen/record/v1/wx/getReacord',
            method: 'POST',
            data: {
                cOpenId: app.globalData.openid
            },
            success(res) {
                that.setData({
                    jifenlog: res.data
                })
            }
        })
    },
    change: function (a) {
        var t = this;
        t.setData({
            current: a.detail
        })
    }
})