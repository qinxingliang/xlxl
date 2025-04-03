function defineReactive(t, e, i, a) {
    Object.defineProperty(t, e, {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return i;
        },
        set: function(t) {
            t !== i && (a && a(t), i = t);
        }
    });
}

function watch(i, a) {
    Object.keys(a).forEach(function(e) {
        defineReactive(i.data, e, i.data[e], function(t) {
            a[e].call(i, t);
        });
    });
}

Component({
    properties: {
        width: {
            type: String,
            value: "750rpx"
        },
        left: {
            type: String,
            value: "0rpx"
        },
        show: {
            type: Boolean,
            value: !1
        },
        background: {
            type: String,
            value: "rgba(0, 0, 0, 0.5)"
        },
        borderRadius: {
            type: String,
            value: "0rpx"
        },
        zIndex: {
            type: Number,
            value: 99
        },
        isSwitchPage: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        realShow: !1,
        isIpx: !1,
        isOut: !1
    },
    methods: {
        closeDialog: function() {
            this.triggerEvent("closeDialog");
        },
        stopFun: function() {},
        open: function() {
            this.setData({
                realShow: !0,
                isOut: !1
            });
        },
        hide: function() {
            var t = this;
            this.isOut = !0, this.setData({
                isOut: !0
            }), setTimeout(function() {
                t.setData({
                    realShow: !1
                });
            }, 120);
        }
    },
    options: {
        multipleSlots: !0
    },
    ready: function() {
        this.setData({
            realShow: this.data.show
        });
        var e = this;
        wx.getSystemInfo({
            success: function(t) {
                -1 != t.model.search("iPhone X") && e.setData({
                    isIpx: !0
                });
            }
        }), watch(this, {
            show: function(t, e) {
                var i = this;
                t ? this.setData({
                    realShow: t
                }) : (this.setData({
                    isOut: !0
                }), setTimeout(function() {
                    i.setData({
                        realShow: !1
                    });
                }, 120), setTimeout(function() {
                    i.setData({
                        isOut: !1
                    });
                }, 150));
            }
        });
    }
});