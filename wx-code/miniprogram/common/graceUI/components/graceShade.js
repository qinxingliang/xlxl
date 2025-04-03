function defineReactive(t, e, n, o) {
    Object.defineProperty(t, e, {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return n;
        },
        set: function(t) {
            t !== n && (o && o(t), n = t);
        }
    });
}

function watch(n, o) {
    Object.keys(o).forEach(function(e) {
        defineReactive(n.data, e, n.data[e], function(t) {
            o[e].call(n, t);
        });
    });
}

Component({
    properties: {
        background: {
            type: String,
            value: "rgba(0, 0, 0, 0.1)"
        },
        zIndex: {
            type: Number,
            value: 1
        },
        show: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        shadeShow: !1,
        showInReal: !1
    },
    methods: {
        closeShade: function() {
            this.triggerEvent("closeShade");
        },
        nottmove: function() {},
        showIt: function() {
            var t = this;
            this.setData({
                shadeShow: !0
            }), setTimeout(function() {
                t.setData({
                    showInReal: !0
                });
            }, 50);
        },
        hideIt: function() {
            var t = this;
            this.setData({
                showInReal: !1
            }), setTimeout(function() {
                t.setData({
                    shadeShow: !1
                });
            }, 150);
        }
    },
    ready: function() {
        this.data.show ? this.showIt() : this.hideIt(), watch(this, {
            show: function(t, e) {
                t ? this.showIt() : this.hideIt();
            }
        });
    }
});