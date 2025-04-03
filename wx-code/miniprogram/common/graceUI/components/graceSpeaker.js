Component({
    properties: {
        msgs: {
            type: Array,
            value: function() {
                return [];
            }
        },
        iconClass: {
            type: String,
            value: ""
        },
        iconColor: {
            type: String,
            value: "#0da408"
        },
        interval: {
            type: Number,
            value: 5e3
        },
        vertical: {
            type: Boolean,
            value: !0
        },
        fontSize: {
            type: String,
            value: "26rpx"
        },
        fontColor: {
            type: String,
            value: "#333333"
        },
        fontWeight: {
            type: String,
            value: ""
        },
        height: {
            type: String,
            value: "60rpx"
        }
    },
    methods: {
        change: function(e) {
            this.triggerEvent("change", e.detail.current);
        }
    }
});