Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        zIndex: {
            type: Number,
            value: 99
        },
        bottom: {
            type: String,
            value: "150rpx"
        },
        width: {
            type: String,
            value: "260rpx"
        },
        height: {
            type: String,
            value: "80rpx"
        },
        minWidth: {
            type: String,
            value: "80rpx"
        },
        background: {
            type: String,
            value: "#0da408"
        }
    },
    data: {
        showIn: !0,
        status: 1
    },
    methods: {
        open: function() {
            this.setData({
                status: 1
            });
        },
        hide: function() {
            this.setData({
                showIn: !1
            });
        },
        shrink: function() {
            this.setData({
                status: 2
            });
        },
        show: function() {
            this.setData({
                showIn: !0
            });
        }
    }
});