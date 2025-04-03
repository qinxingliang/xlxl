Component({
    properties: {
        width: {
            type: String,
            value: "100%"
        },
        height: {
            type: String,
            value: "300rpx"
        },
        swiperItems: {
            type: Array,
            value: []
        },
        borderRadius: {
            type: String,
            value: "5rpx"
        },
        indicatorColor: {
            type: String,
            value: "rgba(0, 0, 0, 0.2)"
        },
        indicatorActiveColor: {
            type: String,
            value: "#0da408"
        },
        spacing: {
            type: String,
            value: "50rpx"
        },
        interval: {
            type: Number,
            value: 5e3
        },
        padding: {
            type: String,
            value: "0 10rpx"
        },
        scale: {
            type: Boolean,
            value: !0
        },
        autoplay: {
            type: Boolean,
            value: !0
        },
        currentIndex: {
            type: Number,
            value: 0
        },
        indicatorDots: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        isReady: !1
    },
    methods: {
        swiperchange: function(e) {
            this.setData({
                currentIndex: e.detail.current,
                isReady: !0
            }), this.triggerEvent("swiperchange", e.detail.current);
        }
    }
});