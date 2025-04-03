Component({
    properties: {
        width: {
            type: String,
            value: "700rpx"
        },
        height: {
            type: String,
            value: "300px"
        },
        btnTxt: {
            type: String,
            value: "展开阅读全文"
        },
        btnColor: {
            type: String,
            value: "#999999"
        },
        btnTxtSize: {
            type: String,
            value: "28rpx"
        },
        zIndex: {
            type: Number,
            value: 1
        },
        isShrink: {
            type: Boolean,
            value: !1
        },
        shrinkBtnTxt: {
            type: String,
            value: "收缩展示"
        }
    },
    data: {
        isBtn: !0,
        setHeight: "300px"
    },
    ready: function() {
        this.setData({
            setHeight: this.data.height
        });
    },
    methods: {
        spreadContent: function() {
            this.setData({
                height: "auto",
                isBtn: !1
            });
        },
        shrinkContent: function() {
            this.setData({
                height: this.data.setHeight,
                isBtn: !0
            });
        }
    }
});