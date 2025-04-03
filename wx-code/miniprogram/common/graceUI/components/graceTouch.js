Component({
    properties: {
        datas: {
            type: Array,
            value: []
        }
    },
    data: {
        toucheTimer: 0,
        fingerRes: [],
        distance: 0,
        isTap: !0
    },
    methods: {
        toInt: function(t) {
            var a = [];
            return t.forEach(function(t) {
                t.pageX = parseInt(t.pageX), t.pageY = parseInt(t.pageY), a.push(t);
            }), a;
        },
        touchstart: function(t) {
            if (this.data.isTap = !0, this.data.fingerRes = this.toInt(t.touches), !(2 < this.data.fingerRes.length)) {
                this.data.toucheTimer = new Date().getTime();
                var i = [];
                this.data.fingerRes.forEach(function(t) {
                    var a = t.pageX, e = t.pageY;
                    i.push([ a, e ]), 0;
                }), this.triggerEvent("thStart", [ i, this.data.datas ]);
            }
        },
        touchmove: function(t) {
            var i = this;
            setTimeout(function() {
                i.data.isTap = !1;
            }, 100);
            var a = this.toInt(t.touches);
            if (!(2 < a.length)) if (1 == a.length) {
                var s = 0, h = [];
                a.forEach(function(t) {
                    var a = t.pageX - i.data.fingerRes[s].pageX, e = t.pageY - i.data.fingerRes[s].pageY;
                    h.push([ a, e ]), s++;
                }), this.triggerEvent("thMove", [ h, this.data.datas ]);
            } else if (2 == a.length) if (0 == this.data.distance) this.data.distance = parseInt(this.getDistance(a[0].pageX, a[0].pageY, a[1].pageX, a[1].pageY)); else {
                var e = parseInt(this.getDistance(a[0].pageX, a[0].pageY, a[1].pageX, a[1].pageY)) / this.data.distance;
                e = Math.floor(100 * e) / 100, this.triggerEvent("scale", [ e, this.data.datas ]);
            }
        },
        touchend: function(t) {
            var i = this;
            if (this.data.isTap) this.triggerEvent("tapme"); else {
                var a = this.toInt(t.changedTouches);
                if (this.data.distance = 0, 1 == a.length) {
                    var s = 0, h = [];
                    a.forEach(function(t) {
                        var a = t.pageX - i.data.fingerRes[s].pageX, e = t.pageY - i.data.fingerRes[s].pageY;
                        h.push([ a, e ]), s++;
                    });
                    var e = new Date().getTime() - this.data.toucheTimer;
                    if (h.push(e), this.triggerEvent("thEnd", [ h, this.data.datas ]), e < 300) {
                        var n = Math.abs(h[0][0]), r = Math.abs(h[0][1]);
                        r < n ? 50 <= n && (0 < h[0][0] ? this.triggerEvent("swipe", [ "right", this.data.datas ]) : this.triggerEvent("swipe", [ "left", this.data.datas ])) : 50 <= r && (0 < h[0][1] ? this.triggerEvent("swipe", [ "down", this.data.datas ]) : this.triggerEvent("swipe", [ "up", this.data.datas ]));
                    }
                }
            }
        },
        getDistance: function(t, a, e, i) {
            var s = t * Math.PI / 180, h = e * Math.PI / 180, n = s - h, r = a * Math.PI / 180 - i * Math.PI / 180, g = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(n / 2), 2) + Math.cos(s) * Math.cos(h) * Math.pow(Math.sin(r / 2), 2)));
            return g *= 6378.137, Math.round(1e4 * g) / 1e4;
        },
        tapmd: function() {
            this.data.isTap = !1;
        }
    }
});