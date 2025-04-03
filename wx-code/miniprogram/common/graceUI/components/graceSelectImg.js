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
        imgMode: {
            type: String,
            value: "widthFix"
        }
    },
    methods: {
        addImg: function() {
            var i = this, t = this.data.maxFileNumber - this.data.items.length;
            if (t < 1) return !1;
            wx.chooseImage({
                count: t,
                sizeType: [ "compressed" ],
                success: function(t) {
                    for (var e = 0; e < t.tempFilePaths.length; e++) i.data.items.push({
                        url: t.tempFilePaths[e],
                        progress: 0
                    });
                    i.setData({
                        items: i.data.items
                    }), i.triggerEvent("change", i.data.items);
                },
                fail: function() {}
            });
        },
        removeImg: function(t) {
            var e = t.currentTarget.id.replace("grace-items-img-", ""), i = this.data.items.splice(e, 1);
            this.setData({
                items: this.data.items
            }), this.triggerEvent("change", this.data.items), this.triggerEvent("removeImg", i[0]);
        },
        showImgs: function(t) {
            for (var e = t.currentTarget.dataset.imgurl, i = [], a = 0; a < this.data.items.length; a++) i.push(this.data.items[a].url);
            wx.previewImage({
                urls: i,
                current: e
            });
        }
    }
});