Component({
    properties: {
        barHeight: {
            type: Number,
            value: 32
        },
        barWidth: {
            type: Number,
            value: 168
        },
        barColor: {
            type: String,
            value: "#FFFFFF"
        },
        barBgColor: {
            type: String,
            value: "linear-gradient(to right, #0da408,#0da408)"
        },
        bglineSize: {
            type: Number,
            value: 2
        },
        bglineColor: {
            type: String,
            value: "rgba(54,136,255,0.5)"
        },
        bglineAColor: {
            type: String,
            value: "#0da408"
        },
        barText: {
            type: String,
            value: ""
        },
        barTextSize: {
            type: String,
            value: "20rpx"
        },
        borderRadius: {
            type: String,
            value: "32rpx"
        },
        canSlide: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        left: 0,
        startLeft: 0,
        width: 0,
        barWidthPX: 30
    },
    ready: function() {
        var e = this;
        wx.getSystemInfo({
            success: function(t) {
                e.setData({
                    barWidthPX: t.windowWidth / 750 * e.data.barWidth
                }), e.init();
            }
        });
    },
    methods: {
        init: function() {
            var e = this;
            wx.createSelectorQuery().in(this).select("#gracesgslider").fields({
                size: !0,
                rect: !0
            }, function(t) {
                null != t ? e.setData({
                    startLeft: t.left,
                    width: t.width
                }) : setTimeout(function() {
                    e.init();
                }, 100);
            }).exec();
        },
        touchstart: function(t) {
            if (this.data.canSlide) {
                var e = t.touches[0] || t.changedTouches[0];
                this.changeBar(e.pageX);
            }
        },
        touchmove: function(t) {
            if (this.data.canSlide) {
                var e = t.touches[0] || t.changedTouches[0];
                this.changeBar(e.pageX);
            }
        },
        touchend: function(t) {
            if (this.data.canSlide) {
                var e = t.touches[0] || t.changedTouches[0];
                this.changeBar(e.pageX, !0);
            }
        },
        changeBar: function(t, e) {
            var a = t - this.data.startLeft;
            if (a <= 0) this.setData({
                left: 0
            }), this.triggerEvent("change", 0); else if (a + this.data.barWidthPX > this.data.width) a = this.data.width - this.data.barWidthPX, 
            this.setData({
                left: a
            }), this.triggerEvent("change", 100); else {
                this.setData({
                    left: a
                });
                var i = this.data.left / (this.data.width - this.data.barWidthPX);
                this.triggerEvent("change", Math.round(100 * i));
            }
        },
        setProgress: function(t) {
            var e = this;
            this.data.width < 1 ? setTimeout(function() {
                e.setProgress(t);
            }) : (t < 0 && (t = 0), 100 < t && (t = 100), this.setData({
                left: t / 100 * (this.data.width - this.data.barWidthPX)
            }));
        }
    }
});