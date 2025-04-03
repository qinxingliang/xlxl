function defineReactive(t, e, a, i) {
    Object.defineProperty(t, e, {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return a;
        },
        set: function(t) {
            t !== a && (i && i(t), a = t);
        }
    });
}

function watch(a, i) {
    Object.keys(i).forEach(function(e) {
        defineReactive(a.data, e, a.data[e], function(t) {
            i[e].call(a, t);
        });
    });
}

Component({
    properties: {
        width: {
            type: Number,
            value: 750
        },
        height: {
            type: Number,
            value: 300
        },
        swiperItems: {
            type: Array,
            value: new Array()
        },
        borderRadius: {
            type: String,
            value: "10rpx"
        },
        indicatorBarHeight: {
            type: Number,
            value: 68
        },
        indicatorBarBgColor: {
            type: String,
            value: "rgba(0,0,0,0)"
        },
        indicatorWidth: {
            type: Number,
            value: 18
        },
        indicatorActiveWidth: {
            type: Number,
            value: 18
        },
        indicatorHeight: {
            type: Number,
            value: 18
        },
        indicatorRadius: {
            type: Number,
            value: 18
        },
        indicatorColor: {
            type: String,
            value: "rgba(255, 255, 255, 0.6)"
        },
        indicatorActiveColor: {
            type: String,
            value: "#0da408"
        },
        indicatorType: {
            type: String,
            value: "dot"
        },
        indicatorPosition: {
            type: String,
            value: "absolute"
        },
        indicatorDirection: {
            type: String,
            value: "center"
        },
        spacing: {
            type: Number,
            value: 50
        },
        padding: {
            type: Number,
            value: 26
        },
        interval: {
            type: Number,
            value: 5e3
        },
        autoplay: {
            type: Boolean,
            value: !0
        },
        currentIndex: {
            type: Number,
            value: 0
        },
        opacity: {
            type: Number,
            value: .66
        },
        titleColor: {
            type: String,
            value: "#FFFFFF"
        },
        titleSize: {
            type: String,
            value: "28rpx"
        }
    },
    data: {
        widthIn: 750,
        heightIn: 300,
        widthInSamll: 700,
        heightInSmall: 280,
        paddingY: 0,
        currentIndex: 0
    },
    ready: function() {
        this.setData({
            current: this.data.currentIndex
        }), this.data.widthIn = this.data.width - 2 * this.data.spacing, this.data.heightIn = this.data.height / this.data.width * this.data.widthIn, 
        this.data.paddingY = this.data.padding * this.data.height / this.data.width, this.data.widthInSamll = this.data.widthIn - 2 * this.data.padding, 
        this.data.heightInSmall = this.data.heightIn - 2 * this.data.paddingY, this.setData({
            widthIn: this.data.widthIn,
            heightIn: this.data.heightIn,
            paddingY: this.data.paddingY,
            widthInSamll: this.data.widthInSamll,
            heightInSmall: this.data.heightInSmall
        }), watch(this, {
            currentIndex: function(t, e) {
                this.setData({
                    current: t
                });
            }
        });
    },
    methods: {
        swiperchange: function(t) {
            var e = t.detail.current;
            this.setData({
                current: e
            }), this.triggerEvent("swiperchange", e);
        },
        taped: function(t) {
            this.triggerEvent("taped", t.currentTarget.dataset.index);
        }
    }
});