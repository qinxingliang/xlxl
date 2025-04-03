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

        this.getData()
    },

    getData() {
        var that = this;
        wx.request({
            url: app.globalData.baseUrl + 'api/exam/record/v1/wx/get',
            method: "POST",
            data: {
                cOpenId: app.globalData.openid
            },
            success(res) {
                that.setData({
                    record: res.data[0]
                })
            }
        })

    },

})