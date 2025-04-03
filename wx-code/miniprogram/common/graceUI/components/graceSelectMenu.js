function defineReactive(t, e, n, a) {
    Object.defineProperty(t, e, {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return n;
        },
        set: function(t) {
            t !== n && (a && a(t), n = t);
        }
    });
}

function watch(n, a) {
    Object.keys(a).forEach(function(e) {
        defineReactive(n.data, e, n.data[e], function(t) {
            a[e].call(n, t);
        });
    });
}

Component({
    properties: {
        items: {
            type: Array,
            value: []
        },
        show: {
            type: Boolean,
            value: !1
        },
        height: {
            type: Number,
            value: 300
        },
        color: {
            type: String,
            value: "#333333"
        },
        activeColor: {
            type: String,
            value: "#0da408"
        },
        selectIndex: {
            type: Number,
            value: 0
        },
        currentIndex: {
            type: Number,
            value: 0
        },
        padding: {
            type: String,
            value: "0 20rpx"
        },
        isInput: {
            type: Boolean,
            value: !1
        },
        placeholder: {
            type: String,
            value: "自定义"
        },
        addBtnName: {
            type: String,
            value: "+ 添加"
        }
    },
    data: {
        top: 0,
        heightIn: 200,
        inputVal: ""
    },
    ready: function() {
        this.currentIndex = this.selectIndex, watch(this, {
            selectIndex: function(t) {
                this.setData({
                    currentIndex: t
                });
            }
        });
    },
    methods: {
        showMenu: function() {
            var n = this;
            wx.createSelectorQuery().in(this).select("#menuMain").fields({
                rect: !0
            }, function(t) {
                n.setData({
                    top: t.top
                });
                try {
                    var e = wx.getSystemInfoSync().windowHeight;
                    n.setData({
                        heightIn: e - n.data.top
                    });
                } catch (t) {}
            }).exec(), this.triggerEvent("showMenu");
        },
        close: function() {
            this.triggerEvent("close");
        },
        select: function(t) {
            var e = Number(t.currentTarget.dataset.index);
            this.setData({
                currentIndex: e
            }), this.triggerEvent("select", e), this.close();
        },
        stopFun: function() {},
        inputting: function(t) {
            this.setData({
                inputVal: t.detail.value
            });
        },
        addTag: function() {
            "" != this.data.inputVal && (this.triggerEvent("submit", this.data.inputVal), this.setData({
                inputVal: ""
            }));
        }
    }
});