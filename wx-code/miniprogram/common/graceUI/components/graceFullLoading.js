Component({
    properties: {
        graceFullLoading: {
            type: Boolean,
            value: !1
        },
        logoUrl: {
            type: String,
            value: ""
        },
        text: {
            type: String,
            value: "Loading ..."
        },
        size: {
            type: String,
            value: "138rpx"
        },
        fontSize: {
            type: String,
            value: "22rpx"
        },
        textColor: {
            type: String,
            value: "#999999"
        },
        background: {
            type: String,
            value: "rgba(255,255,255,1)"
        }
    },
    methods: {
        stopFun: function() {}
    }
});