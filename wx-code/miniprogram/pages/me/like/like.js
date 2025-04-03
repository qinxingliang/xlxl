const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        catelistN: ["关于垃圾分类"],
        currentIndex: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    onShow() {
        this.setData({
            allList: []
        })
        this.getAllList()
    },

    getAllList() {
        wx.request({
            url: app.globalData.baseUrl + 'api/dianzan/v1/wx/my/select',
            method: "POST",
            data: {
                cOpenId: app.globalData.openid
            },
            success:async res => {
                let data = res.data;
                for (const key in data) {
                    // 获取详情数据
                    let article = await this.getData(data[key].cFaxianId)

                    data[key].article = article;
                    // 获取点赞数量
                    let zan = await this.getZan(data[key].cFaxianId)
                    data[key].zan = zan;
                }
                this.setData({
                    list: data
                })
            }
        })

    },
    /**
     * 获取对应的数据
     */
    getData(id) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: app.globalData.baseUrl + 'api/faxian/v1/wx/getByid',
                method: "POST",
                data: {
                    cId: id
                },
                success(res) {
                    resolve(res.data.data)
                }
            })
        })

    },


    /**
     * 获取点赞数量
     */
    getZan(id) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: app.globalData.baseUrl + 'api/dianzan/v1/wx/select',
                method: "POST",
                data: {
                    faxianId: id,
                },
                success(res) {
                    resolve(res.data.length)
                }
            })
        })

    },
    toDetail(event) {
        var id = event.currentTarget.dataset.id
        console.log(id)
        wx.navigateTo({
            url: '../../../pages/faxian/detail/detail?id=' + id,
        })
    }

})