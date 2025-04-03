Component({
    properties: {
        currentDate: {
            type: String,
            value: ""
        },
        bgColor: {
            type: String,
            value: "#F8F8F8"
        },
        activeBgColor: {
            type: String,
            value: "#0da408"
        },
        isLunar: {
            type: Boolean,
            value: !0
        },
        startDate: {
            type: String,
            value: "1950-01-01"
        },
        endDate: {
            type: String,
            value: "2050-01-01"
        },
        schedules: {
            type: Array,
            value: []
        },
        pointColor: {
            type: String,
            value: "#FF0036"
        }
    },
    data: {
        cYear: 2020,
        cMonth: 1,
        cDay: 10,
        cMonthStr: "01",
        weeks: [ "一", "二", "三", "四", "五", "六", "日" ],
        days: [],
        currentDayIn: "",
        hours: [ "00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23" ],
        schedulesIn: []
    },
    ready: function() {
        this.setData({
            currentDayIn: this.data.currentDate
        }), this.initTime(), this.getSchedulesIn();
    },
    methods: {
        initTime: function() {
            if ("" == this.data.currentDayIn) {
                var t = new Date();
                this.data.cYear = Number(t.getFullYear()), this.data.cMonth = Number(t.getMonth() + 1), 
                this.data.cMonthStr = this.data.cMonth < 10 ? "0" + this.data.cMonth : this.data.cMonth, 
                this.data.cDay = t.getDate(), this.data.cDay = this.data.cDay < 10 ? "0" + this.data.cDay : this.data.cDay, 
                this.data.currentDayIn = this.data.cYear + "-" + this.data.cMonthStr + "-" + this.data.cDay;
            } else {
                var a = this.data.currentDayIn.split(" ");
                a[1] || (a[1] = "");
                var e = a[0].split("-");
                this.data.cYear = Number(e[0]), this.data.cMonth = e[1], this.data.cDay = e[2], 
                new RegExp("^0[0-9]+$").test(this.data.cMonth) && (this.data.cMonth = this.data.cMonth.substr(1, 1)), 
                this.data.cMonth = Number(this.data.cMonth), this.data.cMonthStr = this.data.cMonth < 10 ? "0" + this.data.cMonth : this.data.cMonth, 
                this.data.currentDayIn = a[0], this.data.currentTimeIn = a[1];
            }
            this.setData({
                cYear: this.data.cYear,
                cMonth: this.data.cMonth,
                cMonthStr: this.data.cMonthStr,
                cDay: this.data.cDay,
                currentDayIn: this.data.currentDayIn
            }), this.changeMonth();
        },
        changeMonth: function() {
            for (var t = [], a = this.getDaysInOneMonth(), e = 0, n = 0 - this.getDay(); n < a; n++) 0 <= n ? (t[e] = {
                date: 9 <= n ? n + 1 : "0" + (n + 1),
                nl: ""
            }, t[e].nl = GetLunarDay(this.data.cYear, this.data.cMonth, n + 1), t[e].haveSe = this.haveSchedule(t[e].date)) : t[e] = "", 
            e++;
            this.setData({
                days: t
            });
        },
        haveSchedule: function(t) {
            for (var a = this.data.cYear + "-" + this.data.cMonthStr + "-" + t, e = 0; e < this.data.schedules.length; e++) if (-1 != this.data.schedules[e].datetime.indexOf(a)) return !0;
            return !1;
        },
        getDaysInOneMonth: function() {
            return new Date(this.data.cYear, this.data.cMonth, 0).getDate();
        },
        getDay: function() {
            return new Date(this.data.cYear, this.data.cMonth - 1, 0).getDay();
        },
        selectDate: function(t) {
            this.setData({
                currentDayIn: t.detail.value
            }), this.initTime(), this.getSchedulesIn(), this.triggerEvent("selectDate", t.detail.value);
        },
        chooseDate: function(t) {
            this.setData({
                currentDayIn: t.currentTarget.dataset.cdate
            }), this.getSchedulesIn(), this.triggerEvent("chooseDate", t.currentTarget.dataset.cdate);
        },
        getSchedulesIn: function() {
            for (var t = [], a = 0; a < this.data.hours.length; a++) {
                var e = this.data.currentDayIn + " " + this.data.hours[a] + ":00";
                t.push([]);
                for (var n = 0; n < this.data.schedules.length; n++) this.data.schedules[n].datetime == e && t[a].push(this.data.schedules[n]);
            }
            this.setData({
                schedulesIn: t
            });
        },
        scheduleTap: function(t) {
            var a = t.currentTarget.dataset.id;
            this.triggerEvent("scheduleTap", a);
        },
        gotoToday: function() {
            var t = new Date();
            this.data.cYear = Number(t.getFullYear()), this.data.cMonth = Number(t.getMonth() + 1), 
            this.data.cMonthStr = this.data.cMonth < 10 ? "0" + this.data.cMonth : this.data.cMonth, 
            this.data.cDay = t.getDate(), this.data.cDay = this.data.cDay < 10 ? "0" + this.data.cDay : this.data.cDay, 
            this.data.currentDayIn = this.data.cYear + "-" + this.data.cMonthStr + "-" + this.data.cDay, 
            this.setData({
                cYear: this.data.cYear,
                cMonth: this.data.cMonth,
                cMonthStr: this.data.cMonthStr,
                cDay: this.data.cDay,
                currentDayIn: this.data.currentDayIn
            }), this.changeMonth(), this.getSchedulesIn(), this.triggerEvent("gotoToday", this.data.currentDayIn);
        }
    }
});

var cYear, cMonth, cDay, TheDate, CalendarData = new Array(100), madd = new Array(12), tgString = "甲乙丙丁戊己庚辛壬癸", dzString = "子丑寅卯辰巳午未申酉戌亥", numString = "一二三四五六七八九十", monString = "正二三四五六七八九十冬腊", weekString = "日一二三四五六", sx = "鼠牛虎兔龙蛇马羊猴鸡狗猪";

function GetBit(t, a) {
    return t >> a & 1;
}

function e2c() {
    var t, a, e, n, h = !1, r = (TheDate = 3 != arguments.length ? new Date() : new Date(arguments[0], arguments[1], arguments[2])).getYear();
    for (r < 1900 && (r += 1900), t = 365 * (r - 1921) + Math.floor((r - 1921) / 4) + madd[TheDate.getMonth()] + TheDate.getDate() - 38, 
    TheDate.getYear() % 4 == 0 && 1 < TheDate.getMonth() && t++, a = 0; ;a++) {
        for (e = n = CalendarData[a] < 4095 ? 11 : 12; 0 <= e; e--) {
            if (t <= 29 + GetBit(CalendarData[a], e)) {
                h = !0;
                break;
            }
            t = t - 29 - GetBit(CalendarData[a], e);
        }
        if (h) break;
    }
    cYear = 1921 + a, cMonth = n - e + 1, cDay = t, 12 == n && (cMonth == Math.floor(CalendarData[a] / 65536) + 1 && (cMonth = 1 - cMonth), 
    cMonth > Math.floor(CalendarData[a] / 65536) + 1 && cMonth--);
}

function GetcDateString() {
    var t = "";
    return t += cDay < 11 ? "初" : cDay < 20 ? "十" : cDay < 30 ? "廿" : "三十", cDay % 10 == 0 && 10 != cDay || (t += numString.charAt((cDay - 1) % 10)), 
    t;
}

function GetLunarDay(t, a, e) {
    return t < 1921 ? "" : (e2c(t, a = 0 < parseInt(a) ? a - 1 : 11, e), GetcDateString());
}

CalendarData = new Array(2635, 333387, 1701, 1748, 267701, 694, 2391, 133423, 1175, 396438, 3402, 3749, 331177, 1453, 694, 201326, 2350, 465197, 3221, 3402, 400202, 2901, 1386, 267611, 605, 2349, 137515, 2709, 464533, 1738, 2901, 330421, 1242, 2651, 199255, 1323, 529706, 3733, 1706, 398762, 2741, 1206, 267438, 2647, 1318, 204070, 3477, 461653, 1386, 2413, 330077, 1197, 2637, 268877, 3365, 531109, 2900, 2922, 398042, 2395, 1179, 267415, 2635, 661067, 1701, 1748, 398772, 2742, 2391, 330031, 1175, 1611, 200010, 3749, 527717, 1452, 2742, 332397, 2350, 3222, 268949, 3402, 3493, 133973, 1386, 464219, 605, 2349, 334123, 2709, 2890, 267946, 2773, 592565, 1210, 2651, 395863, 1323, 2707, 265877), 
madd[0] = 0, madd[1] = 31, madd[2] = 59, madd[3] = 90, madd[4] = 120, madd[5] = 151, 
madd[6] = 181, madd[7] = 212, madd[8] = 243, madd[9] = 273, madd[10] = 304, madd[11] = 334;