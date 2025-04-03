Component({
    properties: {
        src: {
            type: String,
            value: ""
        },
        width: {
            type: Number,
            value: 300
        },
        height: {
            type: Number,
            value: 0
        },
        timer: {
            type: Number,
            value: 300
        },
        borderRadius: {
            type: String,
            value: "0rpx"
        }
    },
    data: {
        isLoading: !0,
        imgHeight: 300,
        opacity: 0,
        animate: !1
    },
    methods: {
        imgLoad: function(t) {
            var i = this, e = t.detail.width / t.detail.height;
            this.setData({
                imgHeight: this.data.width / e,
                animate: !0
            }), setTimeout(function() {
                i.setData({
                    isLoading: !1,
                    opacity: 1
                });
            }, this.data.timer);
        }
    }
});