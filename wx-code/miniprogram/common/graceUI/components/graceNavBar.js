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
            value: 120
        },
        items: {
            type: Array,
            value: function() {
                return [];
            }
        },
        activeLineBg: {
            type: String,
            value: "linear-gradient(to right, #66BFFF,#3388FF)"
        },
        activeColor: {
            type: String,
            value: "#333333"
        },
        activeLineHeight: {
            type: String,
            value: "6rpx"
        },
        activeLineWidth: {
            type: String,
            value: "36rpx"
        },
        activeLineRadius: {
            type: String,
            value: "0rpx"
        },
        activeDirection: {
            type: String,
            value: ""
        },
        activeFontWeight: {
            type: Number,
            value: 900
        },
        color: {
            type: String,
            value: "#333333"
        },
        margin: {
            type: Number,
            value: 0
        },
        textAlign: {
            type: String,
            value: "left"
        },
        lineHeight: {
            type: String,
            value: "50rpx"
        },
        fontSize: {
            type: String,
            value: "28rpx"
        },
        activeFontSize: {
            type: String,
            value: "28rpx"
        },
        padding: {
            type: String,
            value: "0rpx"
        },
        animatie: {
            type: Boolean,
            value: !0
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