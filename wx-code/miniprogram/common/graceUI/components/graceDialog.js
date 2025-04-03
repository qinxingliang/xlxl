Component({
    properties: {
        show: {
            type: Boolean,
            value: !1
        },
        width: {
            type: String,
            value: "580rpx"
        },
        isCloseBtn: {
            type: Boolean,
            value: !0
        },
        closeBtnColor: {
            type: String,
            value: "#FF0036"
        },
        isTitle: {
            type: Boolean,
            value: !0
        },
        title: {
            type: String,
            value: ""
        },
        titleWeight: {
            type: Boolean,
            value: !0
        },
        titleSize: {
            type: String,
            value: "28rpx"
        },
        titleColor: {
            type: String,
            value: "#333333"
        },
        isBtns: {
            type: Boolean,
            value: !0
        },
        background: {
            type: String,
            value: "rgba(0, 0, 0, 0.5)"
        },
        borderRadius: {
            type: String,
            value: "6rpx"
        },
        zIndex: {
            type: Number,
            value: 999
        },
        titleBg: {
            type: String,
            value: ""
        },
        titleHeight: {
            type: String,
            value: "100rpx"
        },
        canCloseByShade: {
            type: Boolean,
            value: !0
        }
    },
    data: {},
    methods: {
        closeDialogByShade: function() {
            this.data.canCloseByShade && this.closeDialog();
        },
        closeDialog: function() {
            this.triggerEvent("closeDialog");
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
    },
    options: {
        multipleSlots: !0
    }
});