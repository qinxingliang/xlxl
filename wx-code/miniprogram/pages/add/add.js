const app = getApp();
let dataList = []
let content = null
Page({
    data: {
        index: 0,
        nameList: [
            "可回收物",
            "有害垃圾",
            "湿垃圾",
            "干垃圾"
        ]
    },
    //入口
    onLoad() {

    },
    //选择属于哪类垃圾
    bindPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index: e.detail.value
        })
    },
    //输入物品名
    getData(event) {
        console.log("输入的内容", event.detail.value)
        content = event.detail.value
    },
    //提交数据
    submit() {
        console.log("点击了提交按钮")
        if (content) {
            var that = this
            wx.request({
                url: app.globalData.baseUrl + 'api/product/v1/wx/addOrUpdate',
                method: "POST",
                data: {
                    cName: content,
                    nSortId: this.data.index + 1
                },
                success(res) {
                    wx.showToast({
                        title: '提交成功',
                    })
                },
                fail(res) {

                }
            })
        } else {
            wx.showToast({
                icon: 'none',
                title: '请输入物品名',
            })
        }
    }



})