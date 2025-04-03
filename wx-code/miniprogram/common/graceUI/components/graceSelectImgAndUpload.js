Component({
    properties: {
        maxFileNumber: {
            type: Number,
            value: 9
        },
        btnName: {
            type: String,
            value: "添加照片"
        },
        items: {
            type: Array,
            value: []
        },
        closeBtnColor: {
            type: String,
            value: "#666666"
        },
        uploadServerUrl: {
            type: String,
            value: ""
        },
        progressSize: {
            type: Number,
            value: 1
        },
        progressColor: {
            type: String,
            value: "#27BD81"
        },
        progressBGColor: {
            type: String,
            value: "#F8F8F8"
        },
        fileName: {
            type: String,
            value: "img"
        },
        formData: {
            type: Object,
            value: {}
        },
        imgMode: {
            type: String,
            value: "widthFix"
        },
        header: {
            type: Object,
            value: {}
        }
    },
    data: {
        imgLists: [],
        updatting: !1
    },
    methods: {
        addImg: function() {
            var s = this, t = this.data.maxFileNumber - this.data.imgLists.length;
            if (t < 1) return !1;
            wx.showLoading({
                title: ""
            }), wx.chooseImage({
                count: t,
                sizeType: [ "compressed" ],
                success: function(t) {
                    for (var i = 0; i < t.tempFilePaths.length; i++) s.data.imgLists.push({
                        url: t.tempFilePaths[i],
                        progress: 0,
                        error: !1
                    });
                    s.setData({
                        imgLists: s.data.imgLists
                    }), s.triggerEvent("change", s.data.imgLists), wx.hideLoading();
                },
                complete: function() {
                    wx.hideLoading();
                },
                fail: function() {
                    wx.hideLoading();
                }
            });
        },
        removeImg: function(t) {
            var i = t.currentTarget.id.replace("grace-items-img-", ""), s = this.data.imgLists.splice(i, 1);
            this.setData({
                imgLists: this.data.imgLists
            }), this.triggerEvent("change", this.data.imgLists), this.triggerEvent("removeImg", s[0]);
        },
        showImgs: function(t) {
            for (var i = t.currentTarget.dataset.imgurl, s = [], a = 0; a < this.data.imgLists.length; a++) s.push(this.data.imgLists[a].url);
            wx.previewImage({
                urls: s,
                current: i
            });
        },
        upload: function(t) {
            this.data.updatting || (this.data.updatting = !0, t || (t = 0), wx.showLoading({
                title: "图片上传中"
            }), this.uploadBase(t));
        },
        retry: function(t) {
            var i = t.currentTarget.dataset.index;
            this.upload(i);
        },
        uploadBase: function(i) {
            var s = this;
            if (i > this.data.imgLists.length - 1) return wx.hideLoading(), this.setData({
                updatting: !1
            }), void this.triggerEvent("uploaded", this.data.imgLists);
            "" != this.data.uploadServerUrl ? 1 <= this.data.imgLists[i].progress ? this.uploadBase(i + 1) : (this.data.imgLists[i].error = !1, 
            this.setData({
                imgLists: this.data.imgLists
            }), wx.uploadFile({
                url: this.data.uploadServerUrl,
                filePath: this.data.imgLists[i].url,
                name: this.data.fileName,
                formData: this.data.formData,
                header: this.data.header,
                success: function(t) {
                    "ok" != (t = JSON.parse(t.data)).status ? (wx.showToast({
                        title: "上传失败 : " + t.data,
                        icon: "none"
                    }), s.error(i)) : (s.data.imgLists[i].url = t.data, s.data.imgLists[i].progress = 100, 
                    s.data.imgLists[i].result = t, s.setData({
                        imgLists: s.data.imgLists
                    }), s.uploadBase(i + 1));
                },
                fail: function(t) {
                    wx.showToast({
                        title: "上传失败，请点击图片重试",
                        icon: "none"
                    }), s.error(i);
                }
            }).onProgressUpdate(function(t) {
                0 < t.progress && (s.data.imgLists[i].progress = t.progress, s.setData({
                    imgLists: s.data.imgLists
                }));
            })) : wx.showToast({
                title: "请设置上传服务器地址",
                icon: "none"
            });
        },
        error: function(t) {
            var i = this;
            setTimeout(function() {
                i.data.updatting = !1, i.data.imgLists[t].progress = 0, i.data.imgLists[t].error = !0, 
                i.triggerEvent("uploaderror"), i.setData({
                    imgLists: i.data.imgLists,
                    updatting: !1
                });
            }, 500);
        },
        setItems: function(t) {
            for (var i = 0; i < t.length; i++) this.data.imgLists.push({
                url: t[i],
                progress: 100,
                error: !1
            }), this.setData({
                imgLists: this.data.imgLists
            });
            this.triggerEvent("change", this.data.imgLists);
        },
        clearAllImgs: function() {
            this.setData({
                imgLists: []
            });
        }
    }
});