Component({
    properties: {
        show: {
            type: Boolean,
            value: !1
        },
        top: {
            type: Number,
            value: 0
        },
        bgColor: {
            type: String,
            value: "#FFFFFF"
        },
        menuWidth: {
            type: String,
            value: "258rpx"
        },
        background: {
            type: String,
            value: "rgba(0,0,0, 0.3)"
        },
        borderRadius: {
            type: String,
            value: "0rpx"
        },
        zIndex: {
            type: Number,
            value: 3
        },
        isArrow: {
            type: Boolean,
            value: !0
        },
        arrowDirection: {
            type: String,
            value: "right"
        },
        arrowMargin: {
            type: String,
            value: "0 12rpx"
        }
    },
    methods: {
        hideMenu: function() {
            this.triggerEvent("hideMenu");
        },
        stopFun: function() {},
        open: function() {
            this.setData({
                show: !0
            });
        },
        hide: function() {
            this.setData({
                show: !1
            });
        }
    }
});