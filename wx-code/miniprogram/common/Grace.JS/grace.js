module.exports = {
    verson: function() {
        console.log("1.0");
    },
    navigate: function(e, t, n, r, o) {
        switch (t || (t = "navigateTo"), n || (n = function() {}), r || (r = function() {}), 
        o || (o = function() {}), t) {
          case "navigateTo":
            wx.navigateTo({
                url: e,
                success: n,
                fail: r,
                complete: o
            });
            break;

          case "redirectTo":
            wx.redirectTo({
                url: e,
                success: n,
                fail: r,
                complete: o
            });
            break;

          case "switchTab":
            wx.switchTab({
                url: e,
                success: n,
                fail: r,
                complete: o
            });
            break;

          case "reLaunch":
            wx.reLaunch({
                url: e,
                success: n,
                fail: r,
                complete: o
            });
        }
    },
    back: function(e) {
        e || (e = 1), wx.navigateBack({
            delta: e
        });
    },
    get: function(e, t, n, r, o) {
        var a = this;
        o || (o = function() {
            a.msg("网络请求失败");
        }), n || (n = {}), null != this.__before && (this.__before(), this.__before = null), 
        wx.request({
            url: e,
            data: t,
            method: "GET",
            dataType: "json",
            header: n,
            success: function(e) {
                r(e.data);
            },
            fail: o,
            complete: function() {
                null != a.__after && (a.__after(), a.__after = null);
            }
        });
    },
    post: function(e, t, n, r, o, a) {
        var c = this;
        switch (a || (a = function() {
            c.msg("网络请求失败");
        }), r || (r = {}), n || (n = "form"), null != this.__before && (this.__before(), 
        this.__before = null), n) {
          case "form":
            r["content-type"] = "application/x-www-form-urlencoded";
            break;

          case "json":
            r["content-type"] = "application/json";
            break;

          default:
            r["content-type"] = "application/x-www-form-urlencoded";
        }
        wx.request({
            url: e,
            data: t,
            method: "POST",
            dataType: "json",
            header: r,
            success: function(e) {
                o(e.data);
            },
            fail: a,
            complete: function() {
                null != c.__after && (c.__after(), c.__after = null);
            }
        });
    },
    __before: null,
    setBefore: function(e) {
        this.__before = e;
    },
    __after: null,
    setAfter: function(e) {
        this.__after = e;
    },
    setStorage: function(e) {
        try {
            for (var t in e) wx.setStorageSync(t, e[t] + "");
            return !0;
        } catch (e) {
            return !1;
        }
    },
    getStorage: function(e) {
        try {
            var t = wx.getStorageSync(e);
            return "" != t && t;
        } catch (e) {
            return !1;
        }
    },
    removeStorage: function(e) {
        try {
            return wx.removeStorageSync(e), !0;
        } catch (e) {
            return !1;
        }
    },
    clearStorage: function() {
        try {
            wx.clearStorageSync();
        } catch (e) {}
    },
    chooseImgs: function(e, t, n, r) {
        e.count || (e.count = 1), e.sizeType || (e.sizeType = [ "original", "compressed" ]), 
        e.sourceType || (e.sourceType = [ "album", "camera" ]), wx.chooseImage({
            count: e.count,
            sizeType: e.sizeType,
            sourceType: e.sourceType,
            success: function(e) {
                t(e.tempFilePaths);
            },
            fail: function(e) {
                n && n(e);
            },
            complete: function(e) {
                r && r(e);
            }
        });
    },
    getImageInfo: function(e, t, n, r) {
        wx.getImageInfo({
            src: e,
            success: function(e) {
                t(e);
            },
            fail: function(e) {
                n && n(e);
            },
            complete: function(e) {
                r && r(e);
            }
        });
    },
    previewImage: function(e, t) {
        wx.previewImage({
            urls: e,
            current: t
        });
    },
    system: function() {
        try {
            var e = wx.getSystemInfoSync();
            return e.model = e.model.replace(" ", ""), e.model = e.model.toLowerCase(), -1 != e.model.indexOf("iphonex") || -1 != e.model.indexOf("iphone11") ? (e.iPhoneXBottomHeightRpx = 50, 
            e.iPhoneXBottomHeightPx = 25) : (e.iPhoneXBottomHeightRpx = 0, e.iPhoneXBottomHeightPx = 0), 
            e.rpx2px = 750 / e.windowWidth, e;
        } catch (e) {
            return null;
        }
    },
    msg: function(e) {
        wx.showToast({
            title: e,
            icon: "none"
        });
    },
    showLoading: function(e) {
        wx.showLoading({
            title: e
        });
    },
    setNavBar: function(e) {
        e.title && wx.setNavigationBarTitle({
            title: e.title
        }), e.color && wx.setNavigationBarColor({
            frontColor: e.color.frontColor,
            backgroundColor: e.color.backgroundColor,
            animation: {
                duration: 400,
                timingFunc: "easeIn"
            }
        }), e.loading ? wx.showNavigationBarLoading() : wx.hideNavigationBarLoading();
    },
    select: function(e, t) {
        wx.createSelectorQuery().select(e).boundingClientRect().exec(function(e) {
            t(e[0]);
        });
    },
    selectAll: function(e, t) {
        wx.createSelectorQuery().selectAll(e).boundingClientRect().exec(function(e) {
            t(e[0]);
        });
    },
    arrayConcat: function() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(arguments[t]);
        return e;
    },
    arrayDrop: function(e, t, n) {
        return t || (t = 0), n || (n = 1), e.splice(t, n), e;
    },
    arrayIndexOf: function(e, t) {
        for (var n = -1, r = 0; r < e.length; r++) if (e[r] == t) return n = r;
        return n;
    },
    arrayDifference: function(e, t) {
        var n = new Set(t);
        return e.filter(function(e) {
            return !n.has(e);
        });
    },
    arrayShuffle: function(e) {
        for (var t = e.length; t; ) {
            var n = Math.floor(Math.random() * t--), r = [ e[n], e[t] ];
            e[t] = r[0], e[n] = r[1], console.log(n);
        }
        return e;
    },
    arraySum: function(e) {
        return e.reduce(function(e, t) {
            return e + t;
        }, 0);
    },
    arrayAvg: function(e) {
        return e.reduce(function(e, t) {
            return e + t;
        }, 0) / e.length;
    },
    arrayEach: function(e, t) {
        for (var n = 0; n < e.length; n++) t(e[n], n);
    },
    random: function(e, t) {
        switch (arguments.length) {
          case 1:
            return parseInt(Math.random() * e + 1, 10);

          case 2:
            return parseInt(Math.random() * (t - e + 1) + e, 10);

          default:
            return 0;
        }
    },
    uuid: function(e) {
        var t, n, r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), o = [];
        if (e) for (t = 0; t < e; t++) o[t] = r[0 | Math.random() * r.length]; else for (o[8] = o[13] = o[18] = o[23] = "-", 
        o[14] = "4", t = 0; t < 36; t++) o[t] || (n = 0 | 16 * Math.random(), o[t] = r[19 == t ? 3 & n | 8 : n]);
        return o.join("");
    },
    now: function(e, t) {
        var n = new Date().getTime();
        return t && (n += t), e || (e = "number"), "number" == e ? n : this.toDate(n / 1e3, "str");
    },
    toDate: function(e, t) {
        e = parseInt(e);
        var n = new Date();
        e < 9e10 ? n.setTime(1e3 * e) : n.setTime(e);
        var r = n.getFullYear(), o = n.getMonth() + 1;
        o = o < 10 ? "0" + o : o;
        var a = n.getDate();
        a = a < 10 ? "0" + a : a;
        var c = n.getHours();
        c = c < 10 ? "0" + c : c;
        var i = n.getMinutes(), u = n.getSeconds();
        return i = i < 10 ? "0" + i : i, u = u < 10 ? "0" + u : u, "str" == t ? r + "-" + o + "-" + a + " " + c + ":" + i + ":" + u : [ r, o, a, c, i, u ];
    },
    toTimeStamp: function(e) {
        var t = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2}) ([0-9]{2}):([0-9]{2}):([0-9]{2})$/);
        if (null == t) {
            var n = e.match(/^([0-9]{2})\/([0-9]{2})\/([0-9]{4}) ([0-9]{2}):([0-9]{2}):([0-9]{2})$/);
            if (null == n) return console.log("时间格式错误 E001"), !1;
            var r = parseInt(n[3]), o = parseInt(n[1]), a = parseInt(n[2]), c = parseInt(n[4]), i = parseInt(n[5]), u = parseInt(n[6]);
        } else r = parseInt(t[1]), o = parseInt(t[2]), a = parseInt(t[3]), c = parseInt(t[4]), 
        i = parseInt(t[5]), u = parseInt(t[6]);
        return r < 1e3 ? (console.log("时间格式错误"), !1) : c < 0 || 24 < c ? (console.log("时间格式错误"), 
        !1) : i < 0 || 60 < i ? (console.log("时间格式错误"), !1) : u < 0 || 60 < u ? (console.log("时间格式错误"), 
        !1) : Date.parse(new Date(r, o - 1, a, c, i, u));
    },
    fromTime: function(e) {
        e < 9e10 && (e *= 1e3);
        var t = new Date().getTime() - e;
        return (t = parseInt(t / 1e3)) < 180 ? "刚刚" : 180 <= t && t < 3600 ? parseInt(t / 60) + "分钟前" : 3600 <= t && t < 86400 ? parseInt(t / 3600) + "小时前" : 86400 <= t && t < 2592e3 ? parseInt(t / 86400) + "天前" : this.toDate(e, "str");
    },
    delay: function(e, t) {
        return setTimeout(t, e);
    },
    interval: function(e, t) {
        return setInterval(t, e);
    },
    assign: function(e, t, n) {
        e[t] = n;
    },
    removeByKey: function(e, t) {
        delete e[t];
    },
    each: function(e, t) {
        for (var n in e) t(n, e[n]);
    },
    isEmptyObj: function(e) {
        return "{}" === JSON.stringify(e);
    }
};