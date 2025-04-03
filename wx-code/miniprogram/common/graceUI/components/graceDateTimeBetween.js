Component({
    properties: {
        background: {
            type: String,
            value: "rgba(0, 0, 0, 0.5)"
        },
        cancelText: {
            type: String,
            value: "取消"
        },
        cancelTColor: {
            type: String,
            value: "#888888"
        },
        confirmText: {
            type: String,
            value: "确定"
        },
        confirmColor: {
            type: String,
            value: "#0da408"
        },
        startValue: {
            type: String,
            value: ""
        },
        endValue: {
            type: String,
            value: ""
        },
        isTime: {
            type: Boolean,
            value: !0
        },
        isSecond: {
            type: Boolean,
            value: !0
        },
        startYear: {
            type: Number,
            value: 1980
        },
        endYear: {
            type: Number,
            value: 2050
        },
        units: {
            type: Array,
            value: [ "年", "月", "日", "时", "分", "秒" ]
        },
        titles: {
            type: Array,
            value: [ "请选择开始时间", "请选择结束时间" ]
        },
        paddingBottom: {
            type: String,
            value: "0rpx"
        }
    },
    data: {
        show: !1,
        indicatorStyle: "height:35px",
        defaultVal: [ 0, 0, 0, 0, 0, 0 ],
        sDate: [ [], [], [], [], [], [] ],
        recDate: [ [], [] ]
    },
    methods: {
        open: function() {
            this.setData({
                show: !0
            });
        },
        close: function() {
            this.setData({
                show: !1
            });
        },
        confirm: function() {
            this.setData({
                show: !1
            }), this.triggerEvent("confirm", this.data.recDate);
        },
        chang1: function(t) {
            t = t.detail, this.data.recDate[0] = t, this.setData({
                recDate: this.data.recDate
            });
        },
        chang2: function(t) {
            t = t.detail, this.data.recDate[1] = t, this.setData({
                recDate: this.data.recDate
            });
        },
        nomove: function() {}
    }
});