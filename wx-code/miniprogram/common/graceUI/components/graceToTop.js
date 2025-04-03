Component({
    properties: {
        top: {
            type: Number,
            value: 0
        },
        color: {
            type: String,
            value: "#0da408"
        },
        bottom: {
            type: String,
            value: "80rpx"
        },
        background: {
            type: String,
            value: "#FFFFFF"
        }
    },
    methods: {
        totop: function() {
            wx.pageScrollTo({
                scrollTop: 0,
                duration: 0
            });
        }
    }
});