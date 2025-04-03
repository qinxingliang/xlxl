Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        customHeader: {
            type: Boolean,
            value: !0
        },
        headerHeight: {
            type: Number,
            value: 44
        },
        headerIndex: {
            type: Number,
            value: 98
        },
        headerBG: {
            type: String,
            value: "none"
        },
        statusBarBG: {
            type: String,
            value: "none"
        },
        footerIndex: {
            type: Number,
            value: 98
        },
        rbWidth: {
            type: Number,
            value: 100
        },
        rbBottom: {
            type: Number,
            value: 100
        },
        rbRight: {
            type: Number,
            value: 20
        },
        footerBg: {
            type: String,
            value: ""
        },
        isSwitchPage: {
            type: Boolean,
            value: !1
        },
        borderWidth: {
            type: String,
            value: "0px"
        },
        borderColor: {
            type: String,
            value: "#D1D1D1"
        },
        rbIndex: {
            type: Number,
            value: 1
        },
        loadingBG: {
            type: String,
            value: "rgba(255,255,255, 0.1)"
        },
        isLoading: {
            type: Boolean,
            value: !1
        },
        loadingPointBg: {
            type: String,
            value: "#0da408"
        },
        footerBottom: {
            type: String,
            value: "0rpx"
        },
        bounding: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        statusBarHeight: 44,
        iphoneXButtomHeight: 0,
        BoundingWidth: "0px"
    },
    methods: {
        stopFun: function() {},
        getHeaderHeight: function() {
            return this.data.headerHeight + this.data.statusBarHeight;
        }
    },
    ready: function() {
        try {
            var e = wx.getSystemInfoSync();
            if (e.model = e.model.replace(" ", ""), e.model = e.model.toLowerCase(), -1 == e.model.indexOf("iphonex") && -1 == e.model.indexOf("iphone11") || this.setData({
                iphoneXButtomHeight: e.windowWidth / 750 * 50
            }), !this.data.customHeader) return null;
            this.setData({
                statusBarHeight: e.statusBarHeight
            });
            var t = wx.getMenuButtonBoundingClientRect();
            this.setData({
                BoundingWidth: t.width + e.windowWidth - t.right + 10 + "px"
            });
        } catch (e) {
            return null;
        }
    }
});