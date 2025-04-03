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
        value: {
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
        height: {
            type: String,
            value: "300rpx"
        },
        isHeaderBar: {
            type: Boolean,
            value: !0
        },
        paddingBottom: {
            type: String,
            value: "0rpx"
        }
    },
    data: {
        show: !1,
        defaultVal: [ 0, 0, 0, 0, 0, 0 ],
        sDate: [ [], [], [], [], [], [] ]
    },
    ready: function() {
        this.init();
    },
    methods: {
        now: function() {
            var a = new Date(), t = a.getFullYear(), e = a.getMonth() + 1;
            e = e < 10 ? "0" + e : e;
            var s = a.getDate();
            s = s < 10 ? "0" + s : s;
            var i = a.getHours();
            i = i < 10 ? "0" + i : i;
            var r = a.getMinutes(), h = a.getSeconds();
            return t + "-" + e + "-" + s + " " + i + ":" + (r = r < 10 ? "0" + r : r) + ":" + (h = h < 10 ? "0" + h : h);
        },
        arrayIndexOf: function(a, t) {
            for (var e = -1, s = 0; s < a.length; s++) if (a[s] == t) return e = s;
            return e;
        },
        setValue: function(a) {
            "" == a && (a = this.now());
            var t = /^([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2})$/, e = a.match(t);
            if (null == e) {
                if (t = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/, null == (e = a.match(t))) return void this.setValue(this.now());
                e[4] = "00", e[5] = "00", e[6] = "00";
            }
            this.setDefaults([ e[1], e[2], e[3], e[4], e[5], e[6] ]);
        },
        setDefaults: function(a) {
            for (var t = 0; t < a.length; t++) {
                var e = this.arrayIndexOf(this.data.sDate[t], a[t]);
                -1 == e && (e = 0), this.data.defaultVal.splice(t, 1, e);
            }
            this.setData({
                defaultVal: this.data.defaultVal
            }), this.changeBase(this.data.defaultVal);
        },
        init: function() {
            this.data.startYear < 1970 && this.setData({
                startYear: 1970
            }), this.data.endYear < this.data.startYear && this.setData({
                endYear: this.data.startYear + 10
            });
            for (var a = new Array(), t = this.data.startYear; t <= this.data.endYear; t++) a.push(t);
            for (var e = new Array(), s = 1; s <= 12; s++) s < 10 ? e.push("0" + s) : e.push(s);
            for (var i = new Array(), r = 1; r <= 31; r++) r < 10 ? i.push("0" + r) : i.push(r);
            for (var h = new Array(), n = 0; n < 24; n++) n < 10 ? h.push("0" + n) : h.push(n);
            for (var d = new Array(), l = new Array(), u = 0; u < 60; u++) u < 10 ? (d.push("0" + u), 
            l.push("0" + u)) : (d.push(u), l.push(u));
            this.setData({
                sDate: [ a, e, i, h, d, l ]
            }, function() {
                var a = this;
                setTimeout(function() {
                    a.setValue(a.data.value);
                }, 500);
            });
        },
        change: function(a) {
            this.changeBase(a.detail.value);
        },
        changeBase: function(a) {
            for (var t = new Date(this.data.sDate[0][a[0]], this.data.sDate[1][a[1]], 0).getDate(), e = new Array(), s = 1; s <= t; s++) s < 10 ? e.push("0" + s) : e.push(s);
            if (this.data.sDate.splice(2, 1, e), a[2] + 1 > t && (a[2] = t - 1), this.setData({
                sDate: this.data.sDate,
                defaultVal: a
            }), this.data.isTime) var i = new Array(this.data.sDate[0][this.data.defaultVal[0]], this.data.sDate[1][this.data.defaultVal[1]], this.data.sDate[2][this.data.defaultVal[2]], this.data.sDate[3][this.data.defaultVal[3]], this.data.sDate[4][this.data.defaultVal[4]], this.data.sDate[5][this.data.defaultVal[5]]); else i = new Array(this.data.sDate[0][this.data.defaultVal[0]], this.data.sDate[1][this.data.defaultVal[1]], this.data.sDate[2][this.data.defaultVal[2]]);
            this.triggerEvent("change", i);
        },
        confirm: function() {
            if (this.data.isTime) var a = new Array(this.data.sDate[0][this.data.defaultVal[0]], this.data.sDate[1][this.data.defaultVal[1]], this.data.sDate[2][this.data.defaultVal[2]], this.data.sDate[3][this.data.defaultVal[3]], this.data.sDate[4][this.data.defaultVal[4]], this.data.sDate[5][this.data.defaultVal[5]]); else a = new Array(this.data.sDate[0][this.data.defaultVal[0]], this.data.sDate[1][this.data.defaultVal[1]], this.data.sDate[2][this.data.defaultVal[2]]);
            this.triggerEvent("confirm", a), this.close();
        },
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
        nomove: function() {
            return !0;
        }
    }
});