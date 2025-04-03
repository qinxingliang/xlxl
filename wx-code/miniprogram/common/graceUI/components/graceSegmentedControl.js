Component({
    properties: {
        items: {
            type: Array,
            value: new Array()
        },
        height: {
            type: String,
            value: "60rpx"
        },
        bgColor: {
            type: String,
            default: "#F8F8F8"
        },
        color: {
            type: String,
            value: "#0da408"
        },
        fontSize: {
            type: String,
            value: "26rpx"
        },
        current: {
            type: Number,
            value: 0
        }
    },
    methods: {
        changeSC: function(e) {
            var t = Number(e.currentTarget.dataset.index);
            this.triggerEvent("change", t), this.setData({
                current: t
            });
        }
    }
});