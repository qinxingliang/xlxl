Component({
    properties: {
        width: {
            type: String,
            value: "720rpx"
        },
        height: {
            type: String,
            value: "500rpx"
        },
        left: {
            type: String,
            value: "15rpx"
        },
        background: {
            type: String,
            value: "rgba(0, 0, 0, 0.3)"
        },
        borderRadius: {
            type: String,
            value: "10rpx"
        },
        zIndex: {
            type: Number,
            value: 99
        },
        title: {
            type: String,
            value: ""
        },
        titleColor: {
            type: String,
            value: "#323232"
        },
        items: {
            type: Array,
            value: []
        },
        listColor: {
            type: String,
            value: "#0da408"
        },
        listLineHeight: {
            type: String,
            value: "100rpx"
        },
        listFontSize: {
            type: String,
            value: "30rpx"
        },
        isCancelBtn: {
            type: Boolean,
            value: !0
        },
        cancelBtnName: {
            type: String,
            value: "取消"
        },
        cancelBtnColor: {
            type: String,
            value: "#999999"
        },
        isSwitchPage: {
            type: Boolean,
            value: !0
        }
    },
    ready: function() {
        try {
            var e = wx.getSystemInfoSync();
            e.model = e.model.replace(" ", ""), e.model = e.model.toLowerCase(), -1 == e.model.indexOf("iphonex") && -1 == e.model.indexOf("iphone11") || this.setData({
                isIpx: !0
            });
        } catch (e) {
            return null;
        }
    },
    data: {
        realShow: !1,
        isIpx: !1
    },
    methods: {
        cancel: function() {
            this.setData({
                realShow: !1
            }), this.triggerEvent("cancel");
        },
        closeByShade: function() {
            this.cancel();
        },
        stopFun: function() {
            return null;
        },
        selected: function(e) {
            this.triggerEvent("selected", e.currentTarget.dataset.index), this.close();
        },
        close: function() {
            this.setData({
                realShow: !1
            });
        },
        show: function() {
            this.setData({
                realShow: !0
            });
        }
    }
});