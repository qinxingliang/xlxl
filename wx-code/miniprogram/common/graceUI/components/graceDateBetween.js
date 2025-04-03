Component({
    properties: {
        weexBg: {
            type: String,
            value: "#F8F8F8"
        },
        unit: {
            type: Array,
            value: [ " 年 ", " 月" ]
        },
        sedBg: {
            type: String,
            value: "rgba(54,136,255,0.8)"
        },
        itemBg: {
            type: String,
            value: "#FFFFFF"
        },
        color: {
            type: String,
            value: "#323232"
        },
        sedColor: {
            type: String,
            value: "#FFFFFF"
        },
        startBg: {
            type: String,
            value: "rgba(54,136,255,1)"
        },
        endBg: {
            type: String,
            value: "rgba(54,136,255,1)"
        },
        monthNumber: {
            type: Number,
            value: 2
        }
    },
    data: {
        startYear: "1900",
        startMonth: "01",
        endYear: "1900",
        endMonth: "01",
        nextdays: [],
        sedDays: [ 0, 0 ],
        btDays: [],
        nextbtDays: [],
        daysData: []
    },
    ready: function() {
        this.setMonth(this.currentMonth());
    },
    methods: {
        setBetween: function(n) {
            0 == n[1] && (n[1] = n[0]), n[0] = Number(n[0]), n[1] = Number(n[1]), this.setData({
                sedDays: n
            });
            var h = 0, a = [];
            this.data.daysData.forEach(function(t) {
                var e = t[0][0], s = t[0][1], r = [];
                t[1].forEach(function(t) {
                    var a = e + "" + s + t[0];
                    (a = Number(a)) >= n[0] && a <= n[1] ? (t[1] = !0, h++) : t[1] = !1, r.push(t);
                }), a.push([ [ e, s ], r ]);
            }), this.setData({
                daysData: a
            }), this.triggerEvent("selectDate", [ n, h ]);
        },
        setMonth: function(t) {
            var a = /^([0-9]{4}).*([0-9]{2}).*$/, e = t.match(a);
            null == e && (e = (t = this.currentMonth()).match(a)), this.setMonthBase(e);
        },
        setMonthBase: function(t) {
            var a = [];
            "0" == t[2].substr(0, 1) && (t[2] = t[2].substr(1)), t[1] = Number(t[1]), t[2] = Number(t[2]);
            for (var e = 0; e < this.data.monthNumber; e++) {
                var s = t[1], r = t[2] + e;
                12 < r && (s += r = 1), r < 10 && (r = "0" + r), a[e] = [], a[e].push([ s, r ]);
                for (var n = this.getDays(s, r), h = [], d = 0 - n[1]; d < n[0]; d++) 0 <= d ? h.push([ 9 <= d ? d + 1 : "0" + (d + 1), !1 ]) : h.push([ "", !1 ]);
                a[e].push(h);
            }
            this.setData({
                daysData: a
            });
        },
        currentMonth: function() {
            var t = new Date(), a = t.getFullYear(), e = t.getMonth() + 1;
            return a + "年" + (e = e < 10 ? "0" + e : e) + "月";
        },
        getDays: function(t, a) {
            return [ new Date(t, a, 0).getDate(), new Date(t, a - 1, 0).getDay() ];
        },
        selectDay: function(t) {
            var a = t.currentTarget.dataset.dt;
            "" != a && (a = Number(a), 0 == this.data.sedDays[0] ? this.data.sedDays[0] = a : 0 == this.data.sedDays[1] || this.data.sedDays[0] == this.data.sedDays[1] ? a > this.data.sedDays[0] ? this.data.sedDays[1] = a : a < this.data.sedDays[0] && (this.data.sedDays[1] = this.data.sedDays[0], 
            this.data.sedDays[0] = a) : (this.data.sedDays[0] = a, this.data.sedDays[1] = 0), 
            this.setData({
                sedDays: this.data.sedDays
            }), this.setBetween(this.data.sedDays));
        }
    }
});