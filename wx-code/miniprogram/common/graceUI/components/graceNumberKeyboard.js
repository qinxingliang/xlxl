Component({
    properties: {
        show: {
            type: Boolean,
            value: !1
        },
        doneBtnName: {
            type: String,
            value: "完成"
        },
        isPoint: {
            type: Boolean,
            value: !0
        },
        showInputRes: {
            type: Boolean,
            value: !0
        },
        value: {
            type: String,
            value: ""
        },
        confirmBtnColor: {
            type: String,
            value: "#0da408"
        },
        resultColor: {
            type: String,
            value: "#323232"
        },
        resultSize: {
            type: String,
            value: "32rpx"
        },
        closeByShade: {
            type: Boolean,
            default: !0
        }
    },
    methods: {
        inputNow: function(e) {
            var t = e.currentTarget.dataset.keynumber;
            this.setData({
                value: this.data.value + t + ""
            }), this.triggerEvent("keyboardInput", t);
        },
        deleteNow: function() {
            this.setData({
                value: this.data.value.substring(0, this.data.value.length - 1)
            }), this.triggerEvent("keyboardDelete");
        },
        done: function() {
            this.triggerEvent("keyboardDone");
        },
        stopFun: function() {},
        masktap: function() {
            this.data.closeByShade && this.done();
        }
    }
});