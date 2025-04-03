Component({
    properties: {
        isCenter: {
            type: Boolean,
            value: !1
        },
        currentIndex: {
            type: Number,
            value: 0
        },
        size: {
            type: Number,
            value: 138
        },
        fontSize: {
            type: String,
            value: "28rpx"
        },
        activeFontSize: {
            type: String,
            value: "30rpx"
        },
        lineHeight: {
            type: Number,
            value: 52
        },
        fontSizeSmall: {
            type: String,
            value: "22rpx"
        },
        lineHeightSamll: {
            type: Number,
            value: 28
        },
        items: {
            type: Array,
            value: []
        },
        color: {
            type: String,
            value: "#333333"
        },
        descColor: {
            type: String,
            value: "#999999"
        },
        activeColor: {
            type: String,
            value: "#0da408"
        },
        bgColor: {
            type: String,
            value: "#FFFFFF"
        },
        autoLeft: {
            type: String,
            value: ""
        }
    },
    methods: {
        navchang: function(e) {
            this.triggerEvent("change", Number(e.currentTarget.dataset.index));
        }
    }
});