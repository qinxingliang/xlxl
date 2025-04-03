const app = getApp();
Page({


    data: {
        MAX_LIMIT: 20,
        page: 0,
        dataCount: 0,
        datas: [],
        logo: "",
        isSHow: false,
        keyword: "",
        isHasData: true,
    },


    onLoad: function (options) {
        this.data.keyword = options.keyword
        this.onGetData()
    },
    onGetData: function () {
        wx.showLoading({
            title: '正在加载数据中.....',
        })
        var that = this;
        wx.request({
            url: app.globalData.baseUrl + 'api/product/v1/wx/getAll',
            method: "POST",
            data: {
                cName: that.data.keyword
            },
            success(res) {
                that.setData({
                    datas: res.data.data
                })
            },
            complete() {
                wx.hideLoading()
            }
        })

    },
    onItemClick: function (event) {
        var index = event.currentTarget.dataset.index
        console.log(index)
        var data = this.data.datas[index]
        wx.navigateTo({
            url: '/pages/result/gan?sortId=' + data.nSortId,
        })
    },
    hideModal: function () {
        this.setData({
            isShow: !this.data.isShow
        })
    },
    onPullDownRefresh: function () {
        this.data.page = 0
        this.onGetData()
    },
    onGoHome: function () {
        wx.switchTab({
            url: '/pages/ai/index',
        })
    },
    commit: function () {
        wx.navigateTo({
            url: '/pages/result/commit?keyword=' + this.data.keyword,
        })
    },
    onReachBottom: function () {
        this.onGetData()
    },

})