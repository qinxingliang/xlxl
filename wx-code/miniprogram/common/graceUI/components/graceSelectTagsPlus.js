function defineReactive(t, a, e, s) {
    Object.defineProperty(t, a, {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return e;
        },
        set: function(t) {
            t !== e && (s && s(t), e = t);
        }
    });
}

function watch(e, s) {
    Object.keys(s).forEach(function(a) {
        defineReactive(e.data, a, e.data[a], function(t) {
            s[a].call(e, t);
        });
    });
}

Component({
    properties: {
        itemWidth: {
            type: String,
            value: "200rpx"
        },
        type: {
            type: String,
            value: ""
        },
        items: {
            type: Array,
            value: []
        },
        fontSize: {
            type: String,
            value: "26rpx"
        },
        selectedColor: {
            type: String,
            value: "#0da408"
        },
        bgColor: {
            type: String,
            value: "#F6F7F8"
        },
        height: {
            type: String,
            value: "68rpx"
        },
        borderRadius: {
            type: String,
            value: "10rpx"
        },
        fontColor: {
            type: String,
            value: "#323232"
        },
        fontActiveColor: {
            type: String,
            value: "#FFFFFF"
        },
        datas: {
            type: Array,
            value: []
        }
    },
    data: {
        tagsData: []
    },
    ready: function() {
        null == this.data.items ? this.setData({
            tagsData: []
        }) : (this.setData({
            tagsData: this.data.items
        }), this.initChange()), watch(this, {
            items: function(t, a) {
                this.setData({
                    tagsData: t
                }), this.initChange();
            }
        });
    },
    methods: {
        initChange: function() {
            if ("radio" == this.data.type) for (var t = 0; t < this.data.tagsData.length; t++) this.data.tagsData[t].checked && this.data.tagsData[t].value; else {
                var a = [];
                for (t = 0; t < this.data.tagsData.length; t++) this.data.tagsData[t].checked && a.push(this.data.tagsData[t].value);
            }
        },
        graceSelectChange: function(t) {
            if (t.currentTarget && (t = t.currentTarget.dataset.index), "radio" == this.data.type) {
                for (var a = 0; a < this.data.tagsData.length; a++) this.data.tagsData[a].checked = !1;
                this.data.tagsData[t].checked = !0, this.setData({
                    tagsData: this.data.tagsData
                }), this.triggerEvent("change", [ this.data.tagsData[t].value, this.data.datas ]);
            } else {
                this.data.tagsData[t].checked ? this.data.tagsData[t].checked = !1 : this.data.tagsData[t].checked = !0, 
                this.setData({
                    tagsData: this.data.tagsData
                });
                var e = [];
                for (a = 0; a < this.data.tagsData.length; a++) this.data.tagsData[a].checked && e.push(this.data.tagsData[a].value);
                this.triggerEvent("change", [ e, this.data.datas ]);
            }
        },
        setItems: function(t) {
            this.setData({
                tagsData: t
            }), this.initChange();
        },
        clearSelected: function() {
            for (var t = [], a = 0; a < this.data.tagsData.length; a++) this.data.tagsData[a].checked = !1, 
            t.push(this.data.tagsData[a]);
            this.setData({
                tagsData: t
            }), "radio" == this.data.type ? this.triggerEvent("change", [ "", this.data.datas ]) : this.triggerEvent("change", [ [], this.data.datas ]);
        },
        selectAll: function() {
            if ("radio" != this.data.type) {
                for (var t = [], a = [], e = 0; e < this.data.tagsData.length; e++) this.data.tagsData[e].checked = !0, 
                t.push(this.data.tagsData[e]), a.push(this.data.tagsData[e].value);
                this.setData({
                    tagsData: t
                }), this.triggerEvent("change", [ a, this.data.datas ]);
            }
        }
    }
});