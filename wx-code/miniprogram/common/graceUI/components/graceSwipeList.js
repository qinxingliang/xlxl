function defineReactive(t, a, i, e) {
    Object.defineProperty(t, a, {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return i;
        },
        set: function(t) {
            t !== i && (e && e(t), i = t);
        }
    });
}

function watch(i, e) {
    Object.keys(e).forEach(function(a) {
        defineReactive(i.data, a, i.data[a], function(t) {
            e[a].call(i, t);
        });
    });
}

Component({
    properties: {
        width: {
            type: Number,
            value: 750
        },
        msgs: {
            type: Array,
            value: []
        },
        imgSize: {
            type: Array,
            value: [ "80rpx", "80rpx" ]
        },
        fontSizes: {
            type: Array,
            value: [ "28rpx", "22rpx", "22rpx" ]
        },
        fontColors: {
            type: Array,
            value: [ "#323232", "#888888", "#888888" ]
        },
        btnWidth: {
            type: Number,
            value: 160
        }
    },
    data: {
        msgsIn: [],
        damping: .1,
        moveIndex: -1,
        x: 0,
        oX: 0
    },
    ready: function() {
        this.init(this.data.msgs), watch(this, {
            msgs: function(t, a) {
                this.init(t);
            }
        });
    },
    methods: {
        init: function(t) {
            this.setData({
                moveIndex: -1,
                msgsIn: t
            });
        },
        thStart: function(t) {
            var a = t.detail[1][0];
            this.setData({
                damping: .1,
                oX: this.data.x,
                x: 0,
                moveIndex: a
            });
        },
        thMove: function(t) {
            t = t.detail, this.data.x -= t[0][0][0] * this.data.damping, this.data.x > this.data.btnWidth && (this.data.x = this.data.btnWidth), 
            this.data.x < 0 && (this.data.x = 0), this.data.damping *= 1.02, this.setData({
                x: this.data.x,
                damping: this.data.damping
            });
        },
        thEnd: function(t) {
            this.data.x < this.data.btnWidth / 3 ? this.data.x = 0 : this.data.x = this.data.btnWidth, 
            this.setData({
                x: this.data.x
            });
        },
        btnTap: function(t) {
            var a = t.currentTarget.dataset.indexs;
            this.triggerEvent("btnTap", a);
        },
        itemTap: function(t) {
            this.triggerEvent("itemTap", t.currentTarget.dataset.index);
        },
        tapin: function() {
            this.data.oX < 30 && this.triggerEvent("itemTap", this.data.moveIndex);
        }
    }
});