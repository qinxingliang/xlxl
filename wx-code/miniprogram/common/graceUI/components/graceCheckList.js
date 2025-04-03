Component({
    properties: {
        height: {
            type: Number,
            value: 0
        },
        lists: {
            type: Array,
            value: []
        },
        checkColor: {
            type: String,
            value: "#0da408"
        },
        imgSize: {
            type: Array,
            value: [ "68rpx", "68rpx" ]
        },
        isBorder: {
            type: Boolean,
            value: !0
        },
        fontSize: {
            type: String,
            value: "28rpx"
        },
        itemColor: {
            type: String,
            value: "#323232"
        },
        imgBordeRadius: {
            type: String,
            value: "8rpx"
        },
        smallTextColor: {
            type: String,
            value: "#999999"
        },
        smallTextSize: {
            type: String,
            value: "24rpx"
        },
        batch: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        sedAll: !1,
        sedNumbers: 0
    },
    methods: {
        choose: function(t) {
            if (this.data.batch) {
                var s = t.currentTarget.dataset.index;
                this.data.lists[s].checked ? this.data.lists[s].checked = !1 : this.data.lists[s].checked = !0, 
                this.data.lists.splice(s, 1, this.data.lists[s]), this.setData({
                    lists: this.data.lists
                });
                for (var e = [], a = 0, i = 0; i < this.data.lists.length; i++) this.data.lists[i].checked && (e.push(i), 
                a++);
                this.setData({
                    sedNumbers: a
                }), a >= this.data.lists.length ? this.setData({
                    sedAll: !0
                }) : this.setData({
                    sedAll: !1
                }), this.triggerEvent("change", e);
            }
        },
        selectAll: function() {
            if (this.data.sedAll) {
                for (var t = 0; t < this.data.lists.length; t++) this.data.lists[t].checked = !1, 
                this.data.lists.splice(t, 1, this.data.lists[t]);
                this.setData({
                    lists: this.data.lists,
                    sedAll: !1
                }), this.triggerEvent("change", []);
            } else {
                for (var s = [], e = 0; e < this.data.lists.length; e++) this.data.lists[e].checked = !0, 
                this.data.lists.splice(e, 1, this.data.lists[e]), s.push(e);
                this.setData({
                    lists: this.data.lists,
                    sedAll: !0
                }), this.triggerEvent("change", s);
            }
        }
    }
});