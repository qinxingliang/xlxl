Component({
    properties: {
        show: {
            type: Boolean,
            value: !1
        },
        direction: {
            type: String,
            value: "left"
        },
        width: {
            type: String,
            value: "60%"
        },
        background: {
            type: String,
            value: "rgba(0, 0, 0, 0.5)"
        },
        slotBg: {
            type: String,
            value: "rgba(255, 255, 255, 1)"
        },
        padding: {
            type: String,
            value: "30rpx 0"
        },
        zIndex: {
            type: Number,
            value: 1
        },
        top: {
            type: Number,
            value: 0
        }
    },
    data: {},
    methods: {
        closeDrawer: function() {
            this.triggerEvent("closeDrawer");
        },
        open: function() {
            this.setData({
                show: !0
            });
        },
        hide: function() {
            this.setData({
                show: !1
            });
        },
        stopFun: function() {}
    }
});