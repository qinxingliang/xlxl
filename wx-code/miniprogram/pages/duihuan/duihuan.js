const util = require("../../utils/util")

const app = getApp()
Page({


    data: {
        inputValue: ''

    },


    onLoad: function (options) {

    },
    onShow() {
        this.setData({
            allList: []
        })
        this.getAllList()
    },
    getAllList() {
        var that = this
        wx.request({
            url: app.globalData.baseUrl + 'api/sp/v1/wx/select',
            method: "POST",
            data: {},
            success(res) {
                that.setData({
                    allList: res.data.data
                })
            }
        })
    },
    getValue(event) {
        console.log(event.detail.value)
        this.data.inputValue = event.detail.value
        this.setData({
            inputValue: (this.data.inputValue).replace(/\s+/g, '')
        })
        this.toSearch()
    },
    toSearch() {
        var that = this
        var list = []
        for (var i in that.data.allList) {
            console.log(i)
            if (that.data.allList[i].cTitle.indexOf(that.data.inputValue) != -1) {
                list.push(that.data.allList[i])

            }

        }
        that.setData({
            list,
        })
    },

    toDetail(event) {
        var id = event.currentTarget.dataset.id
        console.log(id)
        wx.navigateTo({
            url: '../../pages/duihuan/detail/detail?id=' + id,
        })
    }

})