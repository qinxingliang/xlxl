// pages/me/edit/edit.js
const app = getApp();
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
        if (app.globalData.userInfo && app.globalData.userInfo.cNickName && app.globalData.userInfo.cIcon) {
            this.setData({
                avatarUrl: app.globalData.userInfo.cIcon,
                nickName: app.globalData.userInfo.cNickName
            })
        } else {
            this.setData({
                avatarUrl: "https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0"
            })
        }
    },

    onChooseAvatar(e) {
        var that = this;
        // 设置头像
        const {
            avatarUrl
        } = e.detail
        wx.showLoading({
            title: '图片上传中',
            mask: 'true'
        })
        wx.uploadFile({
            // 上传至服务器地址
            url: app.globalData.baseUrl + 'api/file/imgUpload',
            // 文件路径
            filePath: avatarUrl,
            // 名称
            name: 'file',
            success(res) {
                const data = JSON.parse(res.data)
                that.setData({
                    avatarUrl: data.data.url
                })
            },
            fail(res) {},
            complete() {
                wx.hideLoading();
            }
        })
    },

    // 提交事件
    comit() {
        var that = this;
        if (that.data.nickName == null || that.data.nickName == '') {
            wx.showToast({
                title: '请输入昵称',
                icon: 'none'
            })
            return;
        }
        wx.request({
            url: app.globalData.baseUrl + 'api/wx/v1/updateUserInfo',
            method: 'POST',
            data: {
                "cOpenid": app.globalData.openid,
                "cIcon": that.data.avatarUrl,
                "cNickName": that.data.nickName
            },
            success(res) {
                if (res.data.code == 200) {
                    // 更新成功
                    app.globalData.userInfo = res.data.data
                    wx.setStorageSync('userInfo', that.data.userInfo)
                    // 返回上一页
                    wx.navigateBack();
                } else {
                    wx.showToast({
                        title: '更新失败请重试',
                        icon: "error"
                    })
                }

            },
            fail(e) {
                wx.showToast({
                    title: '保存失败',
                    icon: 'none'
                })
            }
        })
    },
})