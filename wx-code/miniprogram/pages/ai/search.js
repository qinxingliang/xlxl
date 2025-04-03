const app = getApp()
Page({


    data: {
        MAX_LIMIT: 20,
        page: 0,
        dataCount: 0,
        datas: [],
        searchTxt: "",
        logo: "",
        isSHow: false
    },

    onLoad: function (options) {
        console.log('传进来的文字', options)
        let searchTxt = options.searchTxt
        if (searchTxt) {
            this.setData({
                searchTxt
            })
            this.onGetData()
        }
    },
    searchIcon: function (e) {
        // this.data.searchTxt = e.detail.value
        this.setData({
            searchTxt: e.detail.value
        })
        console.log("=====" + e.detail.value)
        this.data.page = 0
        this.onGetData()



    },
    onGetData: function () {
        wx.showLoading({
            title: '正在加载数据中.....',
        })
        var that = this
        wx.request({
            url: app.globalData.baseUrl + 'api/product/v1/wx/getAll',
            method: "POST",
            data: {
                cName: that.data.searchTxt
            },
            success(res) {
                that.setData({
                    datas: res.data.data
                })
                if (wx.getStorageSync('history')) {
                    let history = wx.getStorageSync('history')
                    history.push(that.data.searchTxt)
                    wx.setStorageSync('history', history)
                } else {
                    let history = []
                    history.push(that.data.searchTxt)
                    wx.setStorageSync('history', history)
                }
            },
            complete() {
                wx.hideLoading()
            }
        })
    },
    onItemClick: function (event) {
        var index = event.currentTarget.dataset.index
        var logoImg = ""
        console.log(index)
        switch (parseInt(index)) {
            case 1:
                logoImg = "/images/RecycleableWaste.jpg"
                break;
            case 2:
                logoImg = "/images/HazardouAwaste.jpg"
                break;
            case 3:
                logoImg = "/images/HouseholdfoodWaste.jpg"
                break;
            case 4:
                logoImg = "/images/ResidualWaste.png"
                break;
        }
        console.log(logoImg)
        this.setData({
            logo: logoImg,
            isShow: !this.data.isShow
        })
    },
    hideModal: function () {
        this.setData({
            isShow: !this.data.isShow
        })
    },
    onPullDownRefresh: function () {
        this.data.page = 0
        this.data.datas = []
        this.onGetData()
    },

    onReachBottom: function () {
        this.onGetData()
    },

})