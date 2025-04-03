Component({
    properties: {
        lists: {
            type: Array,
            value: []
        },
        checkColor: {
            type: String,
            value: "#0da408"
        },
        type: {
            type: String,
            value: "radio"
        },
        imgSize: {
            type: Array,
            value: [ "68rpx", "68rpx" ]
        },
        fontSize: {
            type: String,
            value: "28rpx"
        },
        isBorder: {
            type: Boolean,
            value: !0
        },
        lineHeight: {
            type: String,
            value: "50rpx"
        },
        itemColor: {
            type: String,
            value: "#323232"
        },
        imgBorderRadius: {
            type: String,
            value: "60rpx"
        },
        borderColor: {
            type: String,
            value: "#F6F6F6"
        },
        maxSize: {
            type: Number,
            value: 0
        }
    },
    methods: {
        choose: function(t) {
            var e = t.currentTarget.dataset.index;
            if ("radio" == this.data.type) if (this.data.lists[e].checked) this.data.lists[e].checked = !1, 
            this.setData({
                lists: this.data.lists
            }), this.triggerEvent("change", -1); else {
                for (var i = 0; i < this.data.lists.length; i++) this.data.lists[i].checked = !1;
                this.data.lists[e].checked = !0, this.setData({
                    lists: this.data.lists
                }), this.triggerEvent("change", e);
            } else {
                if (this.data.lists[e].checked) this.data.lists[e].checked = !1; else {
                    if (0 < this.data.maxSize) {
                        var s = 0;
                        if (this.data.lists.forEach(function(t) {
                            t.checked && s++;
                        }), ++s > this.data.maxSize) return void this.triggerEvent("maxSed");
                    }
                    this.data.lists[e].checked = !0;
                }
                for (var a = [], r = 0; r < this.data.lists.length; r++) this.data.lists[r].checked && a.push(r);
                this.setData({
                    lists: this.data.lists
                }), this.triggerEvent("change", a);
            }
        }
    }
});