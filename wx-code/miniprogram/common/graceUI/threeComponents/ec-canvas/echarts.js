var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

!function(t, e) {
    "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define([ "exports" ], e) : e(t.echarts = {});
}(void 0, function(t) {
    function b(t) {
        if (null == t || "object" != (void 0 === t ? "undefined" : _typeof(t))) return t;
        var e = t, i = Do.call(t);
        if ("[object Array]" === i) {
            if (!m(t)) {
                e = [];
                for (var n = 0, r = t.length; n < r; n++) e[n] = b(t[n]);
            }
        } else if (Io[i]) {
            if (!m(t)) {
                var a = t.constructor;
                if (t.constructor.from) e = a.from(t); else {
                    e = new a(t.length);
                    for (n = 0, r = t.length; n < r; n++) e[n] = b(t[n]);
                }
            }
        } else if (!To[i] && !m(t) && !l(t)) for (var o in e = {}, t) t.hasOwnProperty(o) && (e[o] = b(t[o]));
        return e;
    }
    function s(t, e, i) {
        if (!k(e) || !k(t)) return i ? b(e) : t;
        for (var n in e) if (e.hasOwnProperty(n)) {
            var r = t[n], a = e[n];
            !k(a) || !k(r) || M(a) || M(r) || l(a) || l(r) || o(a) || o(r) || m(a) || m(r) ? !i && n in t || (t[n] = b(e[n])) : s(r, a, i);
        }
        return t;
    }
    function D(t, e) {
        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        return t;
    }
    function T(t, e, i) {
        for (var n in e) e.hasOwnProperty(n) && (i ? null != e[n] : null == t[n]) && (t[n] = e[n]);
        return t;
    }
    function d(t, e) {
        if (t) {
            if (t.indexOf) return t.indexOf(e);
            for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
        }
        return -1;
    }
    function n(t, e) {
        function i() {}
        var n = t.prototype;
        for (var r in i.prototype = e.prototype, t.prototype = new i(), n) t.prototype[r] = n[r];
        (t.prototype.constructor = t).superClass = e;
    }
    function e(t, e, i) {
        T(t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, i);
    }
    function E(t) {
        return t ? "string" != typeof t && "number" == typeof t.length : void 0;
    }
    function N(t, e, i) {
        if (t && e) if (t.forEach && t.forEach === Lo) t.forEach(e, i); else if (t.length === +t.length) for (var n = 0, r = t.length; n < r; n++) e.call(i, t[n], n, t); else for (var a in t) t.hasOwnProperty(a) && e.call(i, t[a], a, t);
    }
    function I(t, e, i) {
        if (t && e) {
            if (t.map && t.map === Eo) return t.map(e, i);
            for (var n = [], r = 0, a = t.length; r < a; r++) n.push(e.call(i, t[r], r, t));
            return n;
        }
    }
    function u(t, e, i) {
        if (t && e) {
            if (t.filter && t.filter === Po) return t.filter(e, i);
            for (var n = [], r = 0, a = t.length; r < a; r++) e.call(i, t[r], r, t) && n.push(t[r]);
            return n;
        }
    }
    function c(t, e) {
        var i = Oo.call(arguments, 2);
        return function() {
            return t.apply(e, i.concat(Oo.call(arguments)));
        };
    }
    function r(t) {
        var e = Oo.call(arguments, 1);
        return function() {
            return t.apply(this, e.concat(Oo.call(arguments)));
        };
    }
    function M(t) {
        return "[object Array]" === Do.call(t);
    }
    function S(t) {
        return "function" == typeof t;
    }
    function C(t) {
        return "[object String]" === Do.call(t);
    }
    function k(t) {
        var e = void 0 === t ? "undefined" : _typeof(t);
        return "function" === e || !!t && "object" == e;
    }
    function o(t) {
        return !!To[Do.call(t)];
    }
    function p(t) {
        return !!Io[Do.call(t)];
    }
    function l(t) {
        return "object" == (void 0 === t ? "undefined" : _typeof(t)) && "number" == typeof t.nodeType && "object" == _typeof(t.ownerDocument);
    }
    function y(t) {
        return t != t;
    }
    function A() {
        for (var t = 0, e = arguments.length; t < e; t++) if (null != arguments[t]) return arguments[t];
    }
    function L(t, e) {
        return null != t ? t : e;
    }
    function P(t, e, i) {
        return null != t ? t : null != e ? e : i;
    }
    function a() {
        return Function.call.apply(Oo, arguments);
    }
    function h(t) {
        if ("number" == typeof t) return [ t, t, t, t ];
        var e = t.length;
        return 2 === e ? [ t[0], t[1], t[0], t[1] ] : 3 === e ? [ t[0], t[1], t[2], t[1] ] : t;
    }
    function f(t, e) {
        if (!t) throw new Error(e);
    }
    function g(t) {
        return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    }
    function v(t) {
        t[Fo] = !0;
    }
    function m(t) {
        return t[Fo];
    }
    function _(t) {
        function e(t, e) {
            i ? n.set(t, e) : n.set(e, t);
        }
        var i = M(t), n = this;
        t instanceof _ ? t.each(e) : t && N(t, e);
    }
    function O(t) {
        return new _(t);
    }
    function x() {}
    function i(t, e) {
        var i = new Vo(2);
        return null == t && (t = 0), null == e && (e = 0), i[0] = t, i[1] = e, i;
    }
    function w(t) {
        var e = new Vo(2);
        return e[0] = t[0], e[1] = t[1], e;
    }
    function R(t, e, i) {
        return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t;
    }
    function B(t, e, i) {
        return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t;
    }
    function z(t, e, i) {
        return t[0] = e[0] * i, t[1] = e[1] * i, t;
    }
    function F(t, e) {
        var i, n, r = (i = e, Math.sqrt((n = i)[0] * n[0] + n[1] * n[1]));
        return 0 === r ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / r, t[1] = e[1] / r), t;
    }
    function V(t, e) {
        return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));
    }
    function W(t, e, i) {
        var n = e[0], r = e[1];
        return t[0] = i[0] * n + i[2] * r + i[4], t[1] = i[1] * n + i[3] * r + i[5], t;
    }
    function H(t, e, i) {
        return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t;
    }
    function G(t, e, i) {
        return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t;
    }
    function q() {
        this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), 
        this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this);
    }
    function X(t, e) {
        return {
            target: t,
            topTarget: e && e.topTarget
        };
    }
    function U() {}
    function Y(t, e, i) {
        if (t[t.rectHover ? "rectContain" : "contain"](e, i)) {
            for (var n, r = t; r; ) {
                if (r.clipPath && !r.clipPath.contain(e, i)) return !1;
                r.silent && (n = !0), r = r.parent;
            }
            return !n || Xo;
        }
        return !1;
    }
    function j() {
        var t = new jo(6);
        return Z(t), t;
    }
    function Z(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
    }
    function $(t, e, i) {
        var n = e[0] * i[0] + e[2] * i[1], r = e[1] * i[0] + e[3] * i[1], a = e[0] * i[2] + e[2] * i[3], o = e[1] * i[2] + e[3] * i[3], s = e[0] * i[4] + e[2] * i[5] + e[4], l = e[1] * i[4] + e[3] * i[5] + e[5];
        return t[0] = n, t[1] = r, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t;
    }
    function K(t, e, i) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + i[0], t[5] = e[5] + i[1], 
        t;
    }
    function Q(t, e, i) {
        var n = e[0], r = e[2], a = e[4], o = e[1], s = e[3], l = e[5], h = Math.sin(i), u = Math.cos(i);
        return t[0] = n * u + o * h, t[1] = -n * h + o * u, t[2] = r * u + s * h, t[3] = -r * h + u * s, 
        t[4] = u * a + h * l, t[5] = u * l - h * a, t;
    }
    function J(t, e, i) {
        var n = i[0], r = i[1];
        return t[0] = e[0] * n, t[1] = e[1] * r, t[2] = e[2] * n, t[3] = e[3] * r, t[4] = e[4] * n, 
        t[5] = e[5] * r, t;
    }
    function tt(t) {
        return 5e-5 < t || t < -5e-5;
    }
    function et(t) {
        this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, 
        this._initialized = !1, this.loop = null != t.loop && t.loop, this.gap = t.gap || 0, 
        this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, 
        this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1;
    }
    function it(t) {
        return (t = Math.round(t)) < 0 ? 0 : 255 < t ? 255 : t;
    }
    function nt(t) {
        return it(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10));
    }
    function rt(t) {
        return (e = t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t)) < 0 ? 0 : 1 < e ? 1 : e;
        var e;
    }
    function at(t, e, i) {
        return i < 0 ? i += 1 : 1 < i && (i -= 1), 6 * i < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t;
    }
    function ot(t, e, i, n, r) {
        return t[0] = e, t[1] = i, t[2] = n, t[3] = r, t;
    }
    function st(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
    }
    function lt(t, e) {
        ss && st(ss, e), ss = os.put(t, ss || e.slice());
    }
    function ht(t, e) {
        if (t) {
            e = e || [];
            var i = os.get(t);
            if (i) return st(e, i);
            var n = (t += "").replace(/ /g, "").toLowerCase();
            if (n in as) return st(e, as[n]), lt(t, e), e;
            if ("#" !== n.charAt(0)) {
                var r = n.indexOf("("), a = n.indexOf(")");
                if (-1 !== r && a + 1 === n.length) {
                    var o = n.substr(0, r), s = n.substr(r + 1, a - (r + 1)).split(","), l = 1;
                    switch (o) {
                      case "rgba":
                        if (4 !== s.length) return void ot(e, 0, 0, 0, 1);
                        l = rt(s.pop());

                      case "rgb":
                        return 3 !== s.length ? void ot(e, 0, 0, 0, 1) : (ot(e, nt(s[0]), nt(s[1]), nt(s[2]), l), 
                        lt(t, e), e);

                      case "hsla":
                        return 4 !== s.length ? void ot(e, 0, 0, 0, 1) : (s[3] = rt(s[3]), ut(s, e), lt(t, e), 
                        e);

                      case "hsl":
                        return 3 !== s.length ? void ot(e, 0, 0, 0, 1) : (ut(s, e), lt(t, e), e);

                      default:
                        return;
                    }
                }
                ot(e, 0, 0, 0, 1);
            } else {
                var h;
                if (4 === n.length) return 0 <= (h = parseInt(n.substr(1), 16)) && h <= 4095 ? (ot(e, (3840 & h) >> 4 | (3840 & h) >> 8, 240 & h | (240 & h) >> 4, 15 & h | (15 & h) << 4, 1), 
                lt(t, e), e) : void ot(e, 0, 0, 0, 1);
                if (7 === n.length) return 0 <= (h = parseInt(n.substr(1), 16)) && h <= 16777215 ? (ot(e, (16711680 & h) >> 16, (65280 & h) >> 8, 255 & h, 1), 
                lt(t, e), e) : void ot(e, 0, 0, 0, 1);
            }
        }
    }
    function ut(t, e) {
        var i = (parseFloat(t[0]) % 360 + 360) % 360 / 360, n = rt(t[1]), r = rt(t[2]), a = r <= .5 ? r * (n + 1) : r + n - r * n, o = 2 * r - a;
        return ot(e = e || [], it(255 * at(o, a, i + 1 / 3)), it(255 * at(o, a, i)), it(255 * at(o, a, i - 1 / 3)), 1), 
        4 === t.length && (e[3] = t[3]), e;
    }
    function ct(t, e) {
        if (t && t.length) {
            var i = t[0] + "," + t[1] + "," + t[2];
            return ("rgba" === e || "hsva" === e || "hsla" === e) && (i += "," + t[3]), e + "(" + i + ")";
        }
    }
    function dt(t, e) {
        return t[e];
    }
    function ft(t, e, i) {
        t[e] = i;
    }
    function pt(t, e, i) {
        return (e - t) * i + t;
    }
    function gt(t, e, i) {
        return .5 < i ? e : t;
    }
    function vt(t, e, i, n, r) {
        var a = t.length;
        if (1 == r) for (var o = 0; o < a; o++) n[o] = pt(t[o], e[o], i); else {
            var s = a && t[0].length;
            for (o = 0; o < a; o++) for (var l = 0; l < s; l++) n[o][l] = pt(t[o][l], e[o][l], i);
        }
    }
    function mt(t, e, i) {
        var n = t.length, r = e.length;
        if (n !== r) if (r < n) t.length = r; else for (var a = n; a < r; a++) t.push(1 === i ? e[a] : ls.call(e[a]));
        var o = t[0] && t[0].length;
        for (a = 0; a < t.length; a++) if (1 === i) isNaN(t[a]) && (t[a] = e[a]); else for (var s = 0; s < o; s++) isNaN(t[a][s]) && (t[a][s] = e[a][s]);
    }
    function yt(t, e, i) {
        if (t === e) return !0;
        var n = t.length;
        if (n !== e.length) return !1;
        if (1 === i) {
            for (var r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
        } else {
            var a = t[0].length;
            for (r = 0; r < n; r++) for (var o = 0; o < a; o++) if (t[r][o] !== e[r][o]) return !1;
        }
        return !0;
    }
    function _t(t, e, i, n, r, a, o, s, l) {
        var h = t.length;
        if (1 == l) for (var u = 0; u < h; u++) s[u] = xt(t[u], e[u], i[u], n[u], r, a, o); else {
            var c = t[0].length;
            for (u = 0; u < h; u++) for (var d = 0; d < c; d++) s[u][d] = xt(t[u][d], e[u][d], i[u][d], n[u][d], r, a, o);
        }
    }
    function xt(t, e, i, n, r, a, o) {
        var s = .5 * (i - t), l = .5 * (n - e);
        return (2 * (e - i) + s + l) * o + (-3 * (e - i) - 2 * s - l) * a + s * r + e;
    }
    function wt(t) {
        if (E(t)) {
            var e = t.length;
            if (E(t[0])) {
                for (var i = [], n = 0; n < e; n++) i.push(ls.call(t[n]));
                return i;
            }
            return ls.call(t);
        }
        return t;
    }
    function bt(t) {
        return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), 
        "rgba(" + t.join(",") + ")";
    }
    function Mt(t, e, i, n, a, r) {
        var o, s, l = t._getter, h = t._setter, u = "spline" === e, c = n.length;
        if (c) {
            var d, f = E(n[0].value), p = !1, g = !1, v = f ? E((s = (o = n)[o.length - 1].value) && s[0]) ? 2 : 1 : 0;
            n.sort(function(t, e) {
                return t.time - e.time;
            }), d = n[c - 1].time;
            for (var m = [], y = [], _ = n[0].value, x = !0, w = 0; w < c; w++) {
                m.push(n[w].time / d);
                var b = n[w].value;
                if (f && yt(b, _, v) || !f && b === _ || (x = !1), "string" == typeof (_ = b)) {
                    var M = ht(b);
                    M ? (b = M, p = !0) : g = !0;
                }
                y.push(b);
            }
            if (r || !x) {
                var S = y[c - 1];
                for (w = 0; w < c - 1; w++) f ? mt(y[w], S, v) : !isNaN(y[w]) || isNaN(S) || g || p || (y[w] = S);
                f && mt(l(t._target, a), S, v);
                var C, k, T, I, D, A = 0, L = 0;
                if (p) var P = [ 0, 0, 0, 0 ];
                var O = new et({
                    target: t._target,
                    life: d,
                    loop: t._loop,
                    delay: t._delay,
                    onframe: function(t, e) {
                        var i;
                        if (e < 0) i = 0; else if (e < L) {
                            for (i = Math.min(A + 1, c - 1); 0 <= i && !(m[i] <= e); i--) ;
                            i = Math.min(i, c - 2);
                        } else {
                            for (i = A; i < c && !(m[i] > e); i++) ;
                            i = Math.min(i - 1, c - 2);
                        }
                        L = e;
                        var n = m[(A = i) + 1] - m[i];
                        if (0 !== n) if (C = (e - m[i]) / n, u) if (T = y[i], k = y[0 === i ? i : i - 1], 
                        I = y[c - 2 < i ? c - 1 : i + 1], D = y[c - 3 < i ? c - 1 : i + 2], f) _t(k, T, I, D, C, C * C, C * C * C, l(t, a), v); else {
                            if (p) r = _t(k, T, I, D, C, C * C, C * C * C, P, 1), r = bt(P); else {
                                if (g) return gt(T, I, C);
                                r = xt(k, T, I, D, C, C * C, C * C * C);
                            }
                            h(t, a, r);
                        } else if (f) vt(y[i], y[i + 1], C, l(t, a), v); else {
                            var r;
                            if (p) vt(y[i], y[i + 1], C, P, 1), r = bt(P); else {
                                if (g) return gt(y[i], y[i + 1], C);
                                r = pt(y[i], y[i + 1], C);
                            }
                            h(t, a, r);
                        }
                    },
                    ondestroy: i
                });
                return e && "spline" !== e && (O.easing = e), O;
            }
        }
    }
    function St(t, e, i, n) {
        i < 0 && (t += i, i = -i), n < 0 && (e += n, n = -n), this.x = t, this.y = e, this.width = i, 
        this.height = n;
    }
    function Ct(t, e, i, n) {
        var r = e + 1;
        if (r === i) return 1;
        if (n(t[r++], t[e]) < 0) {
            for (;r < i && n(t[r], t[r - 1]) < 0; ) r++;
            !function(t, e, i) {
                for (i--; e < i; ) {
                    var n = t[e];
                    t[e++] = t[i], t[i--] = n;
                }
            }(t, e, r);
        } else for (;r < i && 0 <= n(t[r], t[r - 1]); ) r++;
        return r - e;
    }
    function kt(t, e, i, n, r) {
        for (n === e && n++; n < i; n++) {
            for (var a, o = t[n], s = e, l = n; s < l; ) r(o, t[a = s + l >>> 1]) < 0 ? l = a : s = a + 1;
            var h = n - s;
            switch (h) {
              case 3:
                t[s + 3] = t[s + 2];

              case 2:
                t[s + 2] = t[s + 1];

              case 1:
                t[s + 1] = t[s];
                break;

              default:
                for (;0 < h; ) t[s + h] = t[s + h - 1], h--;
            }
            t[s] = o;
        }
    }
    function Tt(t, e, i, n, r, a) {
        var o = 0, s = 0, l = 1;
        if (0 < a(t, e[i + r])) {
            for (s = n - r; l < s && 0 < a(t, e[i + r + l]); ) (l = 1 + ((o = l) << 1)) <= 0 && (l = s);
            s < l && (l = s), o += r, l += r;
        } else {
            for (s = r + 1; l < s && a(t, e[i + r - l]) <= 0; ) (l = 1 + ((o = l) << 1)) <= 0 && (l = s);
            s < l && (l = s);
            var h = o;
            o = r - l, l = r - h;
        }
        for (o++; o < l; ) {
            var u = o + (l - o >>> 1);
            0 < a(t, e[i + u]) ? o = u + 1 : l = u;
        }
        return l;
    }
    function It(t, e, i, n, r, a) {
        var o = 0, s = 0, l = 1;
        if (a(t, e[i + r]) < 0) {
            for (s = r + 1; l < s && a(t, e[i + r - l]) < 0; ) (l = 1 + ((o = l) << 1)) <= 0 && (l = s);
            s < l && (l = s);
            var h = o;
            o = r - l, l = r - h;
        } else {
            for (s = n - r; l < s && 0 <= a(t, e[i + r + l]); ) (l = 1 + ((o = l) << 1)) <= 0 && (l = s);
            s < l && (l = s), o += r, l += r;
        }
        for (o++; o < l; ) {
            var u = o + (l - o >>> 1);
            a(t, e[i + u]) < 0 ? l = u : o = u + 1;
        }
        return l;
    }
    function Dt(p, g) {
        function e(t) {
            var e = o[t], i = s[t], n = o[t + 1], r = s[t + 1];
            s[t] = i + r, t === l - 3 && (o[t + 1] = o[t + 2], s[t + 1] = s[t + 2]), l--;
            var a = It(p[n], p, e, i, 0, g);
            e += a, 0 !== (i -= a) && (0 !== (r = Tt(p[e + i - 1], p, n, r, r - 1, g)) && (i <= r ? function(t, e, i, n) {
                var r = 0;
                for (r = 0; r < e; r++) m[r] = p[t + r];
                var a = 0, o = i, s = t;
                if (p[s++] = p[o++], 0 != --n) {
                    if (1 === e) {
                        for (r = 0; r < n; r++) p[s + r] = p[o + r];
                        return p[s + n] = m[a];
                    }
                    for (var l, h, u, c = v; ;) {
                        h = l = 0, u = !1;
                        do {
                            if (g(p[o], m[a]) < 0) {
                                if (p[s++] = p[o++], h++, (l = 0) == --n) {
                                    u = !0;
                                    break;
                                }
                            } else if (p[s++] = m[a++], l++, h = 0, 1 == --e) {
                                u = !0;
                                break;
                            }
                        } while ((l | h) < c);
                        if (u) break;
                        do {
                            if (0 !== (l = It(p[o], m, a, e, 0, g))) {
                                for (r = 0; r < l; r++) p[s + r] = m[a + r];
                                if (s += l, a += l, (e -= l) <= 1) {
                                    u = !0;
                                    break;
                                }
                            }
                            if (p[s++] = p[o++], 0 == --n) {
                                u = !0;
                                break;
                            }
                            if (0 !== (h = Tt(m[a], p, o, n, 0, g))) {
                                for (r = 0; r < h; r++) p[s + r] = p[o + r];
                                if (s += h, o += h, 0 === (n -= h)) {
                                    u = !0;
                                    break;
                                }
                            }
                            if (p[s++] = m[a++], 1 == --e) {
                                u = !0;
                                break;
                            }
                            c--;
                        } while (Cs <= l || Cs <= h);
                        if (u) break;
                        c < 0 && (c = 0), c += 2;
                    }
                    if ((v = c) < 1 && (v = 1), 1 === e) {
                        for (r = 0; r < n; r++) p[s + r] = p[o + r];
                        p[s + n] = m[a];
                    } else {
                        if (0 === e) throw new Error();
                        for (r = 0; r < e; r++) p[s + r] = m[a + r];
                    }
                } else for (r = 0; r < e; r++) p[s + r] = m[a + r];
            }(e, i, n, r) : function(t, e, i, n) {
                var r = 0;
                for (r = 0; r < n; r++) m[r] = p[i + r];
                var a = t + e - 1, o = n - 1, s = i + n - 1, l = 0, h = 0;
                if (p[s--] = p[a--], 0 != --e) {
                    if (1 === n) {
                        for (h = (s -= e) + 1, l = (a -= e) + 1, r = e - 1; 0 <= r; r--) p[h + r] = p[l + r];
                        return p[s] = m[o];
                    }
                    for (var u = v; ;) {
                        var c = 0, d = 0, f = !1;
                        do {
                            if (g(m[o], p[a]) < 0) {
                                if (p[s--] = p[a--], c++, (d = 0) == --e) {
                                    f = !0;
                                    break;
                                }
                            } else if (p[s--] = m[o--], d++, c = 0, 1 == --n) {
                                f = !0;
                                break;
                            }
                        } while ((c | d) < u);
                        if (f) break;
                        do {
                            if (0 !== (c = e - It(m[o], p, t, e, e - 1, g))) {
                                for (e -= c, h = (s -= c) + 1, l = (a -= c) + 1, r = c - 1; 0 <= r; r--) p[h + r] = p[l + r];
                                if (0 === e) {
                                    f = !0;
                                    break;
                                }
                            }
                            if (p[s--] = m[o--], 1 == --n) {
                                f = !0;
                                break;
                            }
                            if (0 !== (d = n - Tt(p[a], m, 0, n, n - 1, g))) {
                                for (n -= d, h = (s -= d) + 1, l = (o -= d) + 1, r = 0; r < d; r++) p[h + r] = m[l + r];
                                if (n <= 1) {
                                    f = !0;
                                    break;
                                }
                            }
                            if (p[s--] = p[a--], 0 == --e) {
                                f = !0;
                                break;
                            }
                            u--;
                        } while (Cs <= c || Cs <= d);
                        if (f) break;
                        u < 0 && (u = 0), u += 2;
                    }
                    if ((v = u) < 1 && (v = 1), 1 === n) {
                        for (h = (s -= e) + 1, l = (a -= e) + 1, r = e - 1; 0 <= r; r--) p[h + r] = p[l + r];
                        p[s] = m[o];
                    } else {
                        if (0 === n) throw new Error();
                        for (l = s - (n - 1), r = 0; r < n; r++) p[l + r] = m[r];
                    }
                } else for (l = s - (n - 1), r = 0; r < n; r++) p[l + r] = m[r];
            }(e, i, n, r)));
        }
        var o, s, v = Cs, l = 0, m = [];
        o = [], s = [], this.mergeRuns = function() {
            for (;1 < l; ) {
                var t = l - 2;
                if (1 <= t && s[t - 1] <= s[t] + s[t + 1] || 2 <= t && s[t - 2] <= s[t] + s[t - 1]) s[t - 1] < s[t + 1] && t--; else if (s[t] > s[t + 1]) break;
                e(t);
            }
        }, this.forceMergeRuns = function() {
            for (;1 < l; ) {
                var t = l - 2;
                0 < t && s[t - 1] < s[t + 1] && t--, e(t);
            }
        }, this.pushRun = function(t, e) {
            o[l] = t, s[l] = e, l += 1;
        };
    }
    function At(t, e, i, n) {
        i || (i = 0), n || (n = t.length);
        var r = n - i;
        if (!(r < 2)) {
            var a = 0;
            if (r < Ss) return void kt(t, i, n, i + (a = Ct(t, i, n, e)), e);
            var o = new Dt(t, e), s = function(t) {
                for (var e = 0; Ss <= t; ) e |= 1 & t, t >>= 1;
                return t + e;
            }(r);
            do {
                if ((a = Ct(t, i, n, e)) < s) {
                    var l = r;
                    s < l && (l = s), kt(t, i, i + l, i + a, e), a = l;
                }
                o.pushRun(i, a), o.mergeRuns(), r -= a, i += a;
            } while (0 !== r);
            o.forceMergeRuns();
        }
    }
    function Lt(t, e) {
        return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel;
    }
    function Pt(t, e, i) {
        var n = null == e.x ? 0 : e.x, r = null == e.x2 ? 1 : e.x2, a = null == e.y ? 0 : e.y, o = null == e.y2 ? 0 : e.y2;
        return e.global || (n = n * i.width + i.x, r = r * i.width + i.x, a = a * i.height + i.y, 
        o = o * i.height + i.y), n = isNaN(n) ? 0 : n, r = isNaN(r) ? 1 : r, a = isNaN(a) ? 0 : a, 
        o = isNaN(o) ? 0 : o, t.createLinearGradient(n, a, r, o);
    }
    function Ot(t, e, i) {
        var n = i.width, r = i.height, a = Math.min(n, r), o = null == e.x ? .5 : e.x, s = null == e.y ? .5 : e.y, l = null == e.r ? .5 : e.r;
        return e.global || (o = o * n + i.x, s = s * r + i.y, l *= a), t.createRadialGradient(o, s, 0, o, s, l);
    }
    function Et() {
        return !1;
    }
    function Rt(t, e, i) {
        var n = No(), r = e.getWidth(), a = e.getHeight(), o = n.style;
        return o && (o.position = "absolute", o.left = 0, o.top = 0, o.width = r + "px", 
        o.height = a + "px", n.setAttribute("data-zr-dom-id", t)), n.width = r * i, n.height = a * i, 
        n;
    }
    function Bt(t) {
        if ("string" == typeof t) {
            var e = Ns.get(t);
            return e && e.image;
        }
        return t;
    }
    function Nt(t, e, i, n, r) {
        if (t) {
            if ("string" == typeof t) {
                if (e && e.__zrImageSrc === t || !i) return e;
                var a = Ns.get(t), o = {
                    hostEl: i,
                    cb: n,
                    cbPayload: r
                };
                return a ? !Ft(e = a.image) && a.pending.push(o) : (!e && (e = new Image()), e.onload = zt, 
                Ns.put(t, e.__cachedImgObj = {
                    image: e,
                    pending: [ o ]
                }), e.src = e.__zrImageSrc = t), e;
            }
            return t;
        }
        return e;
    }
    function zt() {
        var t = this.__cachedImgObj;
        this.onload = this.__cachedImgObj = null;
        for (var e = 0; e < t.pending.length; e++) {
            var i = t.pending[e], n = i.cb;
            n && n(this, i.cbPayload), i.hostEl.dirty();
        }
        t.pending.length = 0;
    }
    function Ft(t) {
        return t && t.width && t.height;
    }
    function Vt(t, e) {
        var i, n, r = t + ":" + (e = e || Hs);
        if (zs[r]) return zs[r];
        for (var a = (t + "").split("\n"), o = 0, s = 0, l = a.length; s < l; s++) o = Math.max((i = a[s], 
        n = e, Gs.measureText(i, n)).width, o);
        return Vs < Fs && (Fs = 0, zs = {}), Fs++, zs[r] = o;
    }
    function Wt(t, e, i, n, r, a, o) {
        return a ? (l = n, h = $t(t, {
            rich: a,
            truncate: o,
            font: e,
            textAlign: s = i,
            textPadding: r
        }), u = h.outerWidth, c = h.outerHeight, d = Ht(0, u, s), f = Gt(0, c, l), new St(d, f, u, c)) : function(t, e, i, n, r, a) {
            var o = Zt(t, e, r, a), s = Vt(t, e);
            r && (s += r[1] + r[3]);
            var l = o.outerHeight, h = Ht(0, s, i), u = Gt(0, l, n), c = new St(h, u, s, l);
            return c.lineHeight = o.lineHeight, c;
        }(t, e, i, n, r, o);
        var s, l, h, u, c, d, f;
    }
    function Ht(t, e, i) {
        return "right" === i ? t -= e : "center" === i && (t -= e / 2), t;
    }
    function Gt(t, e, i) {
        return "middle" === i ? t -= e / 2 : "bottom" === i && (t -= e), t;
    }
    function qt(t, e, i, n, r) {
        if (!e) return "";
        var a = (t + "").split("\n");
        r = Xt(e, i, n, r);
        for (var o = 0, s = a.length; o < s; o++) a[o] = Ut(a[o], r);
        return a.join("\n");
    }
    function Xt(t, e, i, n) {
        (n = D({}, n)).font = e;
        i = L(i, "...");
        n.maxIterations = L(n.maxIterations, 2);
        var r = n.minChar = L(n.minChar, 0);
        n.cnCharWidth = Vt("国", e);
        var a = n.ascCharWidth = Vt("a", e);
        n.placeholder = L(n.placeholder, "");
        for (var o = t = Math.max(0, t - 1), s = 0; s < r && a <= o; s++) o -= a;
        var l = Vt(i);
        return o < l && (i = "", l = 0), o = t - l, n.ellipsis = i, n.ellipsisWidth = l, 
        n.contentWidth = o, n.containerWidth = t, n;
    }
    function Ut(t, e) {
        var i = e.containerWidth, n = e.font, r = e.contentWidth;
        if (!i) return "";
        var a = Vt(t, n);
        if (a <= i) return t;
        for (var o = 0; ;o++) {
            if (a <= r || o >= e.maxIterations) {
                t += e.ellipsis;
                break;
            }
            var s = 0 === o ? Yt(t, r, e.ascCharWidth, e.cnCharWidth) : 0 < a ? Math.floor(t.length * r / a) : 0;
            a = Vt(t = t.substr(0, s), n);
        }
        return "" === t && (t = e.placeholder), t;
    }
    function Yt(t, e, i, n) {
        for (var r = 0, a = 0, o = t.length; a < o && r < e; a++) {
            var s = t.charCodeAt(a);
            r += 0 <= s && s <= 127 ? i : n;
        }
        return a;
    }
    function jt(t) {
        return Vt("国", t);
    }
    function Zt(t, e, i, n) {
        null != t && (t += "");
        var r = jt(e), a = t ? t.split("\n") : [], o = a.length * r, s = o;
        if (i && (s += i[0] + i[2]), t && n) {
            var l = n.outerHeight, h = n.outerWidth;
            if (null != l && l < s) t = "", a = []; else if (null != h) for (var u = Xt(h - (i ? i[1] + i[3] : 0), e, n.ellipsis, {
                minChar: n.minChar,
                placeholder: n.placeholder
            }), c = 0, d = a.length; c < d; c++) a[c] = Ut(a[c], u);
        }
        return {
            lines: a,
            height: o,
            outerHeight: s,
            lineHeight: r
        };
    }
    function $t(t, e) {
        var i = {
            lines: [],
            width: 0,
            height: 0
        };
        if (null != t && (t += ""), !t) return i;
        for (var n, r = Ws.lastIndex = 0; null != (n = Ws.exec(t)); ) {
            var a = n.index;
            r < a && Kt(i, t.substring(r, a)), Kt(i, n[2], n[1]), r = Ws.lastIndex;
        }
        r < t.length && Kt(i, t.substring(r, t.length));
        var o = i.lines, s = 0, l = 0, h = [], u = e.textPadding, c = e.truncate, d = c && c.outerWidth, f = c && c.outerHeight;
        u && (null != d && (d -= u[1] + u[3]), null != f && (f -= u[0] + u[2]));
        for (var p = 0; p < o.length; p++) {
            for (var g = o[p], v = 0, m = 0, y = 0; y < g.tokens.length; y++) {
                var _ = (D = g.tokens[y]).styleName && e.rich[D.styleName] || {}, x = D.textPadding = _.textPadding, w = D.font = _.font || e.font, b = D.textHeight = L(_.textHeight, jt(w));
                if (x && (b += x[0] + x[2]), D.height = b, D.lineHeight = P(_.textLineHeight, e.textLineHeight, b), 
                D.textAlign = _ && _.textAlign || e.textAlign, D.textVerticalAlign = _ && _.textVerticalAlign || "middle", 
                null != f && s + D.lineHeight > f) return {
                    lines: [],
                    width: 0,
                    height: 0
                };
                D.textWidth = Vt(D.text, w);
                var M = _.textWidth, S = null == M || "auto" === M;
                if ("string" == typeof M && "%" === M.charAt(M.length - 1)) D.percentWidth = M, 
                h.push(D), M = 0; else {
                    if (S) {
                        M = D.textWidth;
                        var C = _.textBackgroundColor, k = C && C.image;
                        k && (Ft(k = Bt(k)) && (M = Math.max(M, k.width * b / k.height)));
                    }
                    var T = x ? x[1] + x[3] : 0;
                    M += T;
                    var I = null != d ? d - m : null;
                    null != I && I < M && (!S || I < T ? (D.text = "", D.textWidth = M = 0) : (D.text = qt(D.text, I - T, w, c.ellipsis, {
                        minChar: c.minChar
                    }), D.textWidth = Vt(D.text, w), M = D.textWidth + T));
                }
                m += D.width = M, _ && (v = Math.max(v, D.lineHeight));
            }
            g.width = m, s += g.lineHeight = v, l = Math.max(l, m);
        }
        i.outerWidth = i.width = L(e.textWidth, l), i.outerHeight = i.height = L(e.textHeight, s), 
        u && (i.outerWidth += u[1] + u[3], i.outerHeight += u[0] + u[2]);
        for (p = 0; p < h.length; p++) {
            var D, A = (D = h[p]).percentWidth;
            D.width = parseInt(A, 10) / 100 * l;
        }
        return i;
    }
    function Kt(t, e, i) {
        for (var n = "" === e, r = e.split("\n"), a = t.lines, o = 0; o < r.length; o++) {
            var s = r[o], l = {
                styleName: i,
                text: s,
                isLineHolder: !s && !n
            };
            if (o) a.push({
                tokens: [ l ]
            }); else {
                var h = (a[a.length - 1] || (a[0] = {
                    tokens: []
                })).tokens, u = h.length;
                1 === u && h[0].isLineHolder ? h[0] = l : (s || !u || n) && h.push(l);
            }
        }
    }
    function Qt(t, e) {
        var i, n, r, a, o, s = e.x, l = e.y, h = e.width, u = e.height, c = e.r;
        h < 0 && (s += h, h = -h), u < 0 && (l += u, u = -u), "number" == typeof c ? i = n = r = a = c : c instanceof Array ? 1 === c.length ? i = n = r = a = c[0] : 2 === c.length ? (i = r = c[0], 
        n = a = c[1]) : 3 === c.length ? (i = c[0], n = a = c[1], r = c[2]) : (i = c[0], 
        n = c[1], r = c[2], a = c[3]) : i = n = r = a = 0, h < i + n && (i *= h / (o = i + n), 
        n *= h / o), h < r + a && (r *= h / (o = r + a), a *= h / o), u < n + r && (n *= u / (o = n + r), 
        r *= u / o), u < i + a && (i *= u / (o = i + a), a *= u / o), t.moveTo(s + i, l), 
        t.lineTo(s + h - n, l), 0 !== n && t.arc(s + h - n, l + n, n, -Math.PI / 2, 0), 
        t.lineTo(s + h, l + u - r), 0 !== r && t.arc(s + h - r, l + u - r, r, 0, Math.PI / 2), 
        t.lineTo(s + a, l + u), 0 !== a && t.arc(s + a, l + u - a, a, Math.PI / 2, Math.PI), 
        t.lineTo(s, l + i), 0 !== i && t.arc(s + i, l + i, i, Math.PI, 1.5 * Math.PI);
    }
    function Jt(t) {
        return te(t), N(t.rich, te), t;
    }
    function te(t) {
        if (t) {
            t.font = (r = ((n = t).fontSize || n.fontFamily) && [ n.fontStyle, n.fontWeight, (n.fontSize || 12) + "px", n.fontFamily || "sans-serif" ].join(" ")) && g(r) || n.textFont || n.font;
            var e = t.textAlign;
            "middle" === e && (e = "center"), t.textAlign = null == e || qs[e] ? e : "left";
            var i = t.textVerticalAlign || t.textBaseline;
            "center" === i && (i = "middle"), t.textVerticalAlign = null == i || Xs[i] ? i : "top", 
            t.textPadding && (t.textPadding = h(t.textPadding));
        }
        var n, r;
    }
    function ee(t, e, i, n, r) {
        var a, o, s, l, h, u;
        n.rich ? (o = e, s = i, l = n, h = r, (!(u = (a = t).__textCotentBlock) || a.__dirty) && (u = a.__textCotentBlock = $t(s, l)), 
        function(t, e, i, n, r) {
            var a = i.width, o = i.outerWidth, s = i.outerHeight, l = n.textPadding, h = se(s, n, r), u = h.baseX, c = h.baseY, d = h.textAlign, f = h.textVerticalAlign;
            ie(e, n, r, u, c);
            var p = Ht(u, o, d), g = Gt(c, s, f), v = p, m = g;
            l && (v += l[3], m += l[0]);
            var y = v + a;
            re(n) && ae(t, e, n, p, g, o, s);
            for (var _ = 0; _ < i.lines.length; _++) {
                for (var x, w = i.lines[_], b = w.tokens, M = b.length, S = w.lineHeight, C = w.width, k = 0, T = v, I = y, D = M - 1; k < M && (!(x = b[k]).textAlign || "left" === x.textAlign); ) ne(t, e, x, n, S, m, T, "left"), 
                C -= x.width, T += x.width, k++;
                for (;0 <= D && "right" === (x = b[D]).textAlign; ) ne(t, e, x, n, S, m, I, "right"), 
                C -= x.width, I -= x.width, D--;
                for (T += (a - (T - v) - (y - I) - C) / 2; k <= D; ) x = b[k], ne(t, e, x, n, S, m, T + x.width / 2, "center"), 
                T += x.width, k++;
                m += S;
            }
        }(a, o, u, l, h)) : function(t, e, i, n, r) {
            var a = le(e, "font", n.font || Hs), o = n.textPadding, s = t.__textCotentBlock;
            (!s || t.__dirty) && (s = t.__textCotentBlock = Zt(i, a, o, n.truncate));
            var l = s.outerHeight, h = s.lines, u = s.lineHeight, c = se(l, n, r), d = c.baseX, f = c.baseY, p = c.textAlign, g = c.textVerticalAlign;
            ie(e, n, r, d, f);
            var v = Gt(f, l, g), m = d, y = v, _ = re(n);
            if (_ || o) {
                var x = Vt(i, a), w = x;
                o && (w += o[1] + o[3]);
                var b = Ht(d, w, p);
                _ && ae(t, e, n, b, v, w, l), o && (m = de(d, p, o), y += o[0]);
            }
            le(e, "textAlign", p || "left"), le(e, "textBaseline", "middle"), le(e, "shadowBlur", n.textShadowBlur || 0), 
            le(e, "shadowColor", n.textShadowColor || "transparent"), le(e, "shadowOffsetX", n.textShadowOffsetX || 0), 
            le(e, "shadowOffsetY", n.textShadowOffsetY || 0), y += u / 2;
            var M = n.textStrokeWidth, S = he(n.textStroke, M), C = ue(n.textFill);
            S && (le(e, "lineWidth", M), le(e, "strokeStyle", S)), C && le(e, "fillStyle", C);
            for (var k = 0; k < h.length; k++) S && e.strokeText(h[k], m, y), C && e.fillText(h[k], m, y), 
            y += u;
        }(t, e, i, n, r);
    }
    function ie(t, e, i, n, r) {
        if (i && e.textRotation) {
            var a = e.textOrigin;
            "center" === a ? (n = i.width / 2 + i.x, r = i.height / 2 + i.y) : a && (n = a[0] + i.x, 
            r = a[1] + i.y), t.translate(n, r), t.rotate(-e.textRotation), t.translate(-n, -r);
        }
    }
    function ne(t, e, i, n, r, a, o, s) {
        var l = n.rich[i.styleName] || {}, h = i.textVerticalAlign, u = a + r / 2;
        "top" === h ? u = a + i.height / 2 : "bottom" === h && (u = a + r - i.height / 2), 
        !i.isLineHolder && re(l) && ae(t, e, l, "right" === s ? o - i.width : "center" === s ? o - i.width / 2 : o, u - i.height / 2, i.width, i.height);
        var c = i.textPadding;
        c && (o = de(o, s, c), u -= i.height / 2 - c[2] - i.textHeight / 2), le(e, "shadowBlur", P(l.textShadowBlur, n.textShadowBlur, 0)), 
        le(e, "shadowColor", l.textShadowColor || n.textShadowColor || "transparent"), le(e, "shadowOffsetX", P(l.textShadowOffsetX, n.textShadowOffsetX, 0)), 
        le(e, "shadowOffsetY", P(l.textShadowOffsetY, n.textShadowOffsetY, 0)), le(e, "textAlign", s), 
        le(e, "textBaseline", "middle"), le(e, "font", i.font || Hs);
        var d = he(l.textStroke || n.textStroke, p), f = ue(l.textFill || n.textFill), p = L(l.textStrokeWidth, n.textStrokeWidth);
        d && (le(e, "lineWidth", p), le(e, "strokeStyle", d), e.strokeText(i.text, o, u)), 
        f && (le(e, "fillStyle", f), e.fillText(i.text, o, u));
    }
    function re(t) {
        return t.textBackgroundColor || t.textBorderWidth && t.textBorderColor;
    }
    function ae(t, e, i, n, r, a, o) {
        var s = i.textBackgroundColor, l = i.textBorderWidth, h = i.textBorderColor, u = C(s);
        if (le(e, "shadowBlur", i.textBoxShadowBlur || 0), le(e, "shadowColor", i.textBoxShadowColor || "transparent"), 
        le(e, "shadowOffsetX", i.textBoxShadowOffsetX || 0), le(e, "shadowOffsetY", i.textBoxShadowOffsetY || 0), 
        u || l && h) {
            e.beginPath();
            var c = i.textBorderRadius;
            c ? Qt(e, {
                x: n,
                y: r,
                width: a,
                height: o,
                r: c
            }) : e.rect(n, r, a, o), e.closePath();
        }
        if (u) le(e, "fillStyle", s), e.fill(); else if (k(s)) {
            var d = s.image;
            (d = Nt(d, null, t, oe, s)) && Ft(d) && e.drawImage(d, n, r, a, o);
        }
        l && h && (le(e, "lineWidth", l), le(e, "strokeStyle", h), e.stroke());
    }
    function oe(t, e) {
        e.image = t;
    }
    function se(t, e, i) {
        var n = e.x || 0, r = e.y || 0, a = e.textAlign, o = e.textVerticalAlign;
        if (i) {
            var s = e.textPosition;
            if (s instanceof Array) n = i.x + ce(s[0], i.width), r = i.y + ce(s[1], i.height); else {
                var l = function(t, e, i) {
                    var n = e.x, r = e.y, a = e.height, o = e.width, s = a / 2, l = "left", h = "top";
                    switch (t) {
                      case "left":
                        n -= i, r += s, l = "right", h = "middle";
                        break;

                      case "right":
                        n += i + o, r += s, h = "middle";
                        break;

                      case "top":
                        n += o / 2, r -= i, l = "center", h = "bottom";
                        break;

                      case "bottom":
                        n += o / 2, r += a + i, l = "center";
                        break;

                      case "inside":
                        n += o / 2, r += s, l = "center", h = "middle";
                        break;

                      case "insideLeft":
                        n += i, r += s, h = "middle";
                        break;

                      case "insideRight":
                        n += o - i, r += s, l = "right", h = "middle";
                        break;

                      case "insideTop":
                        n += o / 2, r += i, l = "center";
                        break;

                      case "insideBottom":
                        n += o / 2, r += a - i, l = "center", h = "bottom";
                        break;

                      case "insideTopLeft":
                        n += i, r += i;
                        break;

                      case "insideTopRight":
                        n += o - i, r += i, l = "right";
                        break;

                      case "insideBottomLeft":
                        n += i, r += a - i, h = "bottom";
                        break;

                      case "insideBottomRight":
                        n += o - i, r += a - i, l = "right", h = "bottom";
                    }
                    return {
                        x: n,
                        y: r,
                        textAlign: l,
                        textVerticalAlign: h
                    };
                }(s, i, e.textDistance);
                n = l.x, r = l.y, a = a || l.textAlign, o = o || l.textVerticalAlign;
            }
            var h = e.textOffset;
            h && (n += h[0], r += h[1]);
        }
        return {
            baseX: n,
            baseY: r,
            textAlign: a,
            textVerticalAlign: o
        };
    }
    function le(t, e, i) {
        return t[e] = Is(t, e, i), t[e];
    }
    function he(t, e) {
        return null == t || e <= 0 || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
    }
    function ue(t) {
        return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
    }
    function ce(t, e) {
        return "string" == typeof t ? 0 <= t.lastIndexOf("%") ? parseFloat(t) / 100 * e : parseFloat(t) : t;
    }
    function de(t, e, i) {
        return "right" === e ? t - i[1] : "center" === e ? t + i[3] / 2 - i[1] / 2 : t + i[3];
    }
    function fe(t, e) {
        return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding);
    }
    function pe(t) {
        for (var e in t = t || {}, gs.call(this, t), t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
        this.style = new As(t.style, this), this._rect = null, this.__clipPaths = [];
    }
    function ge(t) {
        pe.call(this, t);
    }
    function ve(t) {
        return parseInt(t, 10);
    }
    function me(t, e, i, n) {
        return i = i || {}, n || !ko.canvasSupported ? ye(t, e, i) : ko.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (i.zrX = e.layerX, 
        i.zrY = e.layerY) : null != e.offsetX ? (i.zrX = e.offsetX, i.zrY = e.offsetY) : ye(t, e, i), 
        i;
    }
    function ye(t, e, i) {
        var n, r = (n = t).getBoundingClientRect ? n.getBoundingClientRect() : {
            left: 0,
            top: 0
        };
        i.zrX = e.clientX - r.left, i.zrY = e.clientY - r.top;
    }
    function _e(t, e, i) {
        if (null != (e = e || window.event).zrX) return e;
        var n = e.type;
        if (n && 0 <= n.indexOf("touch")) {
            var r = "touchend" != n ? e.targetTouches[0] : e.changedTouches[0];
            r && me(t, r, e, i);
        } else me(t, e, e, i), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
        var a = e.button;
        return null == e.which && void 0 !== a && Js.test(e.type) && (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), 
        e;
    }
    function xe(t) {
        var e = t[1][0] - t[0][0], i = t[1][1] - t[0][1];
        return Math.sqrt(e * e + i * i);
    }
    function we(t) {
        return "mousewheel" === t && ko.browser.firefox ? "DOMMouseScroll" : t;
    }
    function be(t, e, i) {
        var n = t._gestureMgr;
        "start" === i && n.clear();
        var r = n.recognize(e, t.handler.findHover(e.zrX, e.zrY, null).target, t.dom);
        if ("end" === i && n.clear(), r) {
            var a = r.type;
            e.gestureEvent = a, t.handler.dispatchToElement({
                target: r.target
            }, a, r.event);
        }
    }
    function Me(t) {
        t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function() {
            t._touching = !1;
        }, 700);
    }
    function Se(t) {
        var e = t.pointerType;
        return "pen" === e || "touch" === e;
    }
    function Ce(a) {
        function t(t, r) {
            N(t, function(t) {
                var e, i, n;
                e = a, i = we(t), n = r._handlers[t], Qs ? e.addEventListener(i, n) : e.attachEvent("on" + i, n);
            }, r);
        }
        var n;
        qo.call(this), this.dom = a, this._touching = !1, this._touchTimer, this._gestureMgr = new el(), 
        this._handlers = {}, n = this, N(rl, function(t) {
            n._handlers[t] = c(sl[t], n);
        }), N(ol, function(t) {
            n._handlers[t] = c(sl[t], n);
        }), N(nl, function(t) {
            var e, i;
            n._handlers[t] = (e = sl[t], i = n, function() {
                return i._touching ? void 0 : e.apply(i, arguments);
            });
        }), ko.pointerEventsSupported ? t(ol, this) : (ko.touchEventsSupported && t(rl, this), 
        t(nl, this));
    }
    function ke(t, e) {
        return new cl(Co(), t, e);
    }
    function Te(t) {
        return t instanceof Array ? t : null == t ? [] : [ t ];
    }
    function Ie(t, e, i) {
        if (t) {
            t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};
            for (var n = 0, r = i.length; n < r; n++) {
                var a = i[n];
                !t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a]);
            }
        }
    }
    function De(t) {
        return !fl(t) || pl(t) || t instanceof Date ? t : t.value;
    }
    function Ae(t, r) {
        r = (r || []).slice();
        var a = I(t || [], function(t) {
            return {
                exist: t
            };
        });
        return dl(r, function(t, e) {
            if (fl(t)) {
                for (var i = 0; i < a.length; i++) if (!a[i].option && null != t.id && a[i].exist.id === t.id + "") return a[i].option = t, 
                void (r[e] = null);
                for (i = 0; i < a.length; i++) {
                    var n = a[i].exist;
                    if (!(a[i].option || null != n.id && null != t.id || null == t.name || Pe(t) || Pe(n) || n.name !== t.name + "")) return a[i].option = t, 
                    void (r[e] = null);
                }
            }
        }), dl(r, function(t) {
            if (fl(t)) {
                for (var e = 0; e < a.length; e++) {
                    var i = a[e].exist;
                    if (!a[e].option && !Pe(i) && null == t.id) {
                        a[e].option = t;
                        break;
                    }
                }
                e >= a.length && a.push({
                    option: t
                });
            }
        }), a;
    }
    function Le(t) {
        var e = t.name;
        return !(!e || !e.indexOf(gl));
    }
    function Pe(t) {
        return fl(t) && t.id && 0 === (t.id + "").indexOf("\0_ec_\0");
    }
    function Oe(e, t) {
        return null != t.dataIndexInside ? t.dataIndexInside : null != t.dataIndex ? M(t.dataIndex) ? I(t.dataIndex, function(t) {
            return e.indexOfRawIndex(t);
        }) : e.indexOfRawIndex(t.dataIndex) : null != t.name ? M(t.name) ? I(t.name, function(t) {
            return e.indexOfName(t);
        }) : e.indexOfName(t.name) : void 0;
    }
    function Ee() {
        var e = "__\0ec_inner_" + ml++ + "_" + Math.random().toFixed(5);
        return function(t) {
            return t[e] || (t[e] = {});
        };
    }
    function Re(s, l, h) {
        if (C(l)) {
            var t = {};
            t[l + "Index"] = 0, l = t;
        }
        var e = h && h.defaultMainType;
        !e || Be(l, e + "Index") || Be(l, e + "Id") || Be(l, e + "Name") || (l[e + "Index"] = 0);
        var u = {};
        return dl(l, function(t, e) {
            t = l[e];
            if ("dataIndex" !== e && "dataIndexInside" !== e) {
                var i = e.match(/^(\w+)(Index|Id|Name)$/) || [], n = i[1], r = (i[2] || "").toLowerCase();
                if (!(!n || !r || null == t || "index" === r && "none" === t || h && h.includeMainTypes && d(h.includeMainTypes, n) < 0)) {
                    var a = {
                        mainType: n
                    };
                    ("index" !== r || "all" !== t) && (a[r] = t);
                    var o = s.queryComponents(a);
                    u[n + "Models"] = o, u[n + "Model"] = o[0];
                }
            } else u[e] = t;
        }), u;
    }
    function Be(t, e) {
        return t && t.hasOwnProperty(e);
    }
    function Ne(t, e, i) {
        t.setAttribute ? t.setAttribute(e, i) : t[e] = i;
    }
    function ze(t) {
        var e = {
            main: "",
            sub: ""
        };
        return t && (t = t.split(yl), e.main = t[0] || "", e.sub = t[1] || ""), e;
    }
    function Fe(t) {
        (t.$constructor = t).extend = function(t) {
            var e = this, i = function() {
                t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments);
            };
            return D(i.prototype, t), i.extend = this.extend, i.superCall = We, i.superApply = He, 
            n(i, this), i.superClass = e, i;
        };
    }
    function Ve(t) {
        var e = [ "__\0is_clz", xl++, Math.random().toFixed(3) ].join("_");
        t.prototype[e] = !0, t.isInstance = function(t) {
            return !(!t || !t[e]);
        };
    }
    function We(t, e) {
        var i = a(arguments, 2);
        return this.superClass.prototype[e].apply(t, i);
    }
    function He(t, e, i) {
        return this.superClass.prototype[e].apply(t, i);
    }
    function Ge(i, t) {
        t = t || {};
        var a = {};
        if (i.registerClass = function(t, e) {
            if (e) if (f(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(r = e), 'componentType "' + r + '" illegal'), 
            (e = ze(e)).sub) {
                if (e.sub !== _l) ((n = a[(i = e).main]) && n[_l] || ((n = a[i.main] = {})[_l] = !0), 
                n)[e.sub] = t;
            } else a[e.main] = t;
            var i, n, r;
            return t;
        }, i.getClass = function(t, e, i) {
            var n = a[t];
            if (n && n[_l] && (n = e ? n[e] : null), i && !n) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");
            return n;
        }, i.getClassesByMainType = function(t) {
            t = ze(t);
            var i = [], e = a[t.main];
            return e && e[_l] ? N(e, function(t, e) {
                e !== _l && i.push(t);
            }) : i.push(e), i;
        }, i.hasClass = function(t) {
            return t = ze(t), !!a[t.main];
        }, i.getAllClassMainTypes = function() {
            var i = [];
            return N(a, function(t, e) {
                i.push(e);
            }), i;
        }, i.hasSubTypes = function(t) {
            t = ze(t);
            var e = a[t.main];
            return e && e[_l];
        }, i.parseClassType = ze, t.registerWhenExtend) {
            var n = i.extend;
            n && (i.extend = function(t) {
                var e = n.call(this, t);
                return i.registerClass(e, t.type);
            });
        }
        return i;
    }
    function qe(t) {
        return -Il < t && t < Il;
    }
    function Xe(t) {
        return Il < t || t < -Il;
    }
    function Ue(t, e, i, n, r) {
        var a = 1 - r;
        return a * a * (a * t + 3 * r * e) + r * r * (r * n + 3 * a * i);
    }
    function Ye(t, e, i, n, r) {
        var a = 1 - r;
        return 3 * (((e - t) * a + 2 * (i - e) * r) * a + (n - i) * r * r);
    }
    function je(t, e, i, n, r) {
        var a = 6 * i - 12 * e + 6 * t, o = 9 * e + 3 * n - 3 * t - 9 * i, s = 3 * e - 3 * t, l = 0;
        if (qe(o)) {
            if (Xe(a)) 0 <= (u = -s / a) && u <= 1 && (r[l++] = u);
        } else {
            var h = a * a - 4 * o * s;
            if (qe(h)) r[0] = -a / (2 * o); else if (0 < h) {
                var u, c = Tl(h), d = (-a - c) / (2 * o);
                0 <= (u = (-a + c) / (2 * o)) && u <= 1 && (r[l++] = u), 0 <= d && d <= 1 && (r[l++] = d);
            }
        }
        return l;
    }
    function Ze(t, e, i, n, r, a) {
        var o = (e - t) * r + t, s = (i - e) * r + e, l = (n - i) * r + i, h = (s - o) * r + o, u = (l - s) * r + s, c = (u - h) * r + h;
        a[0] = t, a[1] = o, a[2] = h, a[3] = c, a[4] = c, a[5] = u, a[6] = l, a[7] = n;
    }
    function $e(t, e, i, n) {
        var r = 1 - n;
        return r * (r * t + 2 * n * e) + n * n * i;
    }
    function Ke(t, e, i, n) {
        return 2 * ((1 - n) * (e - t) + n * (i - e));
    }
    function Qe(t, e, i) {
        var n = t + i - 2 * e;
        return 0 === n ? .5 : (t - e) / n;
    }
    function Je(t, e, i, n, r) {
        var a = (e - t) * n + t, o = (i - e) * n + e, s = (o - a) * n + a;
        r[0] = t, r[1] = a, r[2] = s, r[3] = s, r[4] = o, r[5] = i;
    }
    function ti(t, e, i, n, r, a) {
        r[0] = Rl(t, i), r[1] = Rl(e, n), a[0] = Bl(t, i), a[1] = Bl(e, n);
    }
    function ei(t, e, i, n, r, a, o, s, l, h) {
        var u, c = je, d = Ue, f = c(t, i, r, o, Gl);
        for (l[0] = 1 / 0, l[1] = 1 / 0, h[0] = -1 / 0, h[1] = -1 / 0, u = 0; u < f; u++) {
            var p = d(t, i, r, o, Gl[u]);
            l[0] = Rl(p, l[0]), h[0] = Bl(p, h[0]);
        }
        for (f = c(e, n, a, s, ql), u = 0; u < f; u++) {
            var g = d(e, n, a, s, ql[u]);
            l[1] = Rl(g, l[1]), h[1] = Bl(g, h[1]);
        }
        l[0] = Rl(t, l[0]), h[0] = Bl(t, h[0]), l[0] = Rl(o, l[0]), h[0] = Bl(o, h[0]), 
        l[1] = Rl(e, l[1]), h[1] = Bl(e, h[1]), l[1] = Rl(s, l[1]), h[1] = Bl(s, h[1]);
    }
    function ii(t, e, i, n, r, a, o, s, l) {
        var h = H, u = G, c = Math.abs(r - a);
        if (c % Fl < 1e-4 && 1e-4 < c) return s[0] = t - i, s[1] = e - n, l[0] = t + i, 
        void (l[1] = e + n);
        if (Vl[0] = zl(r) * i + t, Vl[1] = Nl(r) * n + e, Wl[0] = zl(a) * i + t, Wl[1] = Nl(a) * n + e, 
        h(s, Vl, Wl), u(l, Vl, Wl), (r %= Fl) < 0 && (r += Fl), (a %= Fl) < 0 && (a += Fl), 
        a < r && !o ? a += Fl : r < a && o && (r += Fl), o) {
            var d = a;
            a = r, r = d;
        }
        for (var f = 0; f < a; f += Math.PI / 2) r < f && (Hl[0] = zl(f) * i + t, Hl[1] = Nl(f) * n + e, 
        h(s, Hl, s), u(l, Hl, l));
    }
    function ni(t, e, i, n, r, a, o) {
        if (0 === r) return !1;
        var s, l = r;
        if (e + l < o && n + l < o || o < e - l && o < n - l || t + l < a && i + l < a || a < t - l && a < i - l) return !1;
        if (t === i) return Math.abs(a - t) <= l / 2;
        var h = (s = (e - n) / (t - i)) * a - o + (t * n - i * e) / (t - i);
        return h * h / (s * s + 1) <= l / 2 * l / 2;
    }
    function ri(t, e, i, n, r, a, o, s, l, h, u) {
        if (0 === l) return !1;
        var c = l;
        return !(e + c < u && n + c < u && a + c < u && s + c < u || u < e - c && u < n - c && u < a - c && u < s - c || t + c < h && i + c < h && r + c < h && o + c < h || h < t - c && h < i - c && h < r - c && h < o - c) && function(t, e, i, n, r, a, o, s, l, h, u) {
            var c, d, f, p, g, v = .005, m = 1 / 0;
            Pl[0] = l, Pl[1] = h;
            for (var y = 0; y < 1; y += .05) Ol[0] = Ue(t, i, r, o, y), Ol[1] = Ue(e, n, a, s, y), 
            (p = Ho(Pl, Ol)) < m && (c = y, m = p);
            m = 1 / 0;
            for (var _ = 0; _ < 32 && !(v < Dl); _++) d = c - v, f = c + v, Ol[0] = Ue(t, i, r, o, d), 
            Ol[1] = Ue(e, n, a, s, d), p = Ho(Ol, Pl), 0 <= d && p < m ? (c = d, m = p) : (El[0] = Ue(t, i, r, o, f), 
            El[1] = Ue(e, n, a, s, f), g = Ho(El, Pl), f <= 1 && g < m ? (c = f, m = g) : v *= .5);
            return u && (u[0] = Ue(t, i, r, o, c), u[1] = Ue(e, n, a, s, c)), Tl(m);
        }(t, e, i, n, r, a, o, s, h, u, null) <= c / 2;
    }
    function ai(t, e, i, n, r, a, o, s, l) {
        if (0 === o) return !1;
        var h = o;
        return !(e + h < l && n + h < l && a + h < l || l < e - h && l < n - h && l < a - h || t + h < s && i + h < s && r + h < s || s < t - h && s < i - h && s < r - h) && function(t, e, i, n, r, a, o, s, l) {
            var h, u = .005, c = 1 / 0;
            Pl[0] = o, Pl[1] = s;
            for (var d = 0; d < 1; d += .05) Ol[0] = $e(t, i, r, d), Ol[1] = $e(e, n, a, d), 
            (v = Ho(Pl, Ol)) < c && (h = d, c = v);
            c = 1 / 0;
            for (var f = 0; f < 32 && !(u < Dl); f++) {
                var p = h - u, g = h + u;
                Ol[0] = $e(t, i, r, p), Ol[1] = $e(e, n, a, p);
                var v = Ho(Ol, Pl);
                if (0 <= p && v < c) h = p, c = v; else {
                    El[0] = $e(t, i, r, g), El[1] = $e(e, n, a, g);
                    var m = Ho(El, Pl);
                    g <= 1 && m < c ? (h = g, c = m) : u *= .5;
                }
            }
            return l && (l[0] = $e(t, i, r, h), l[1] = $e(e, n, a, h)), Tl(c);
        }(t, e, i, n, r, a, s, l, null) <= h / 2;
    }
    function oi(t) {
        return (t %= rh) < 0 && (t += rh), t;
    }
    function si(t, e, i, n, r, a, o, s, l) {
        if (0 === o) return !1;
        var h = o;
        s -= t, l -= e;
        var u = Math.sqrt(s * s + l * l);
        if (i < u - h || u + h < i) return !1;
        if (Math.abs(n - r) % ah < 1e-4) return !0;
        if (a) {
            var c = n;
            n = oi(r), r = oi(c);
        } else n = oi(n), r = oi(r);
        r < n && (r += ah);
        var d = Math.atan2(l, s);
        return d < 0 && (d += ah), n <= d && d <= r || n <= d + ah && d + ah <= r;
    }
    function li(t, e, i, n, r, a) {
        if (e < a && n < a || a < e && a < n) return 0;
        if (n === e) return 0;
        var o = n < e ? 1 : -1, s = (a - e) / (n - e);
        (1 === s || 0 === s) && (o = n < e ? .5 : -.5);
        var l = s * (i - t) + t;
        return l === r ? 1 / 0 : r < l ? o : 0;
    }
    function hi(t, e, i, n, r, a, o, s, l, h) {
        if (e < h && n < h && a < h && s < h || h < e && h < n && h < a && h < s) return 0;
        var u, c = function(t, e, i, n, r, a) {
            var o = n + 3 * (e - i) - t, s = 3 * (i - 2 * e + t), l = 3 * (e - t), h = t - r, u = s * s - 3 * o * l, c = s * l - 9 * o * h, d = l * l - 3 * s * h, f = 0;
            if (qe(u) && qe(c)) qe(s) ? a[0] = 0 : 0 <= (S = -l / s) && S <= 1 && (a[f++] = S); else {
                var p = c * c - 4 * u * d;
                if (qe(p)) {
                    var g = c / u, v = -g / 2;
                    0 <= (S = -s / o + g) && S <= 1 && (a[f++] = S), 0 <= v && v <= 1 && (a[f++] = v);
                } else if (0 < p) {
                    var m = Tl(p), y = u * s + 1.5 * o * (-c + m), _ = u * s + 1.5 * o * (-c - m);
                    0 <= (S = (-s - ((y = y < 0 ? -kl(-y, Ll) : kl(y, Ll)) + (_ = _ < 0 ? -kl(-_, Ll) : kl(_, Ll)))) / (3 * o)) && S <= 1 && (a[f++] = S);
                } else {
                    var x = (2 * u * s - 3 * o * c) / (2 * Tl(u * u * u)), w = Math.acos(x) / 3, b = Tl(u), M = Math.cos(w), S = (-s - 2 * b * M) / (3 * o), C = (v = (-s + b * (M + Al * Math.sin(w))) / (3 * o), 
                    (-s + b * (M - Al * Math.sin(w))) / (3 * o));
                    0 <= S && S <= 1 && (a[f++] = S), 0 <= v && v <= 1 && (a[f++] = v), 0 <= C && C <= 1 && (a[f++] = C);
                }
            }
            return f;
        }(e, n, a, s, h, hh);
        if (0 === c) return 0;
        for (var d, f, p = 0, g = -1, v = 0; v < c; v++) {
            var m = hh[v], y = 0 === m || 1 === m ? .5 : 1;
            Ue(t, i, r, o, m) < l || (g < 0 && (g = je(e, n, a, s, uh), uh[1] < uh[0] && 1 < g && (void 0, 
            u = uh[0], uh[0] = uh[1], uh[1] = u), d = Ue(e, n, a, s, uh[0]), 1 < g && (f = Ue(e, n, a, s, uh[1]))), 
            p += 2 == g ? m < uh[0] ? d < e ? y : -y : m < uh[1] ? f < d ? y : -y : s < f ? y : -y : m < uh[0] ? d < e ? y : -y : s < d ? y : -y);
        }
        return p;
    }
    function ui(t, e, i, n, r, a, o, s) {
        if (e < s && n < s && a < s || s < e && s < n && s < a) return 0;
        var l = function(t, e, i, n, r) {
            var a = t - 2 * e + i, o = 2 * (e - t), s = t - n, l = 0;
            if (qe(a)) Xe(o) && 0 <= (u = -s / o) && u <= 1 && (r[l++] = u); else {
                var h = o * o - 4 * a * s;
                if (qe(h)) 0 <= (u = -o / (2 * a)) && u <= 1 && (r[l++] = u); else if (0 < h) {
                    var u, c = Tl(h), d = (-o - c) / (2 * a);
                    0 <= (u = (-o + c) / (2 * a)) && u <= 1 && (r[l++] = u), 0 <= d && d <= 1 && (r[l++] = d);
                }
            }
            return l;
        }(e, n, a, s, hh);
        if (0 === l) return 0;
        var h = Qe(e, n, a);
        if (0 <= h && h <= 1) {
            for (var u = 0, c = $e(e, n, a, h), d = 0; d < l; d++) {
                var f = 0 === hh[d] || 1 === hh[d] ? .5 : 1;
                $e(t, i, r, hh[d]) < o || (u += hh[d] < h ? c < e ? f : -f : a < c ? f : -f);
            }
            return u;
        }
        f = 0 === hh[0] || 1 === hh[0] ? .5 : 1;
        return $e(t, i, r, hh[0]) < o ? 0 : a < e ? f : -f;
    }
    function ci(t, e, i, n, r, a, o, s) {
        if (i < (s -= e) || s < -i) return 0;
        var l = Math.sqrt(i * i - s * s);
        hh[0] = -l, hh[1] = l;
        var h = Math.abs(n - r);
        if (h < 1e-4) return 0;
        if (h % sh < 1e-4) {
            r = sh;
            var u = a ? 1 : -1;
            return o >= hh[n = 0] + t && o <= hh[1] + t ? u : 0;
        }
        if (a) {
            l = n;
            n = oi(r), r = oi(l);
        } else n = oi(n), r = oi(r);
        r < n && (r += sh);
        for (var c = 0, d = 0; d < 2; d++) {
            var f = hh[d];
            if (o < f + t) {
                var p = Math.atan2(s, f);
                u = a ? 1 : -1;
                p < 0 && (p = sh + p), (n <= p && p <= r || n <= p + sh && p + sh <= r) && (p > Math.PI / 2 && p < 1.5 * Math.PI && (u = -u), 
                c += u);
            }
        }
        return c;
    }
    function di(t, e, i, n, r) {
        for (var a = 0, o = 0, s = 0, l = 0, h = 0, u = 0; u < t.length; ) {
            var c = t[u++];
            switch (c === oh.M && 1 < u && (i || (a += li(o, s, l, h, n, r))), 1 == u && (l = o = t[u], 
            h = s = t[u + 1]), c) {
              case oh.M:
                o = l = t[u++], s = h = t[u++];
                break;

              case oh.L:
                if (i) {
                    if (ni(o, s, t[u], t[u + 1], e, n, r)) return !0;
                } else a += li(o, s, t[u], t[u + 1], n, r) || 0;
                o = t[u++], s = t[u++];
                break;

              case oh.C:
                if (i) {
                    if (ri(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], e, n, r)) return !0;
                } else a += hi(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], n, r) || 0;
                o = t[u++], s = t[u++];
                break;

              case oh.Q:
                if (i) {
                    if (ai(o, s, t[u++], t[u++], t[u], t[u + 1], e, n, r)) return !0;
                } else a += ui(o, s, t[u++], t[u++], t[u], t[u + 1], n, r) || 0;
                o = t[u++], s = t[u++];
                break;

              case oh.A:
                var d = t[u++], f = t[u++], p = t[u++], g = t[u++], v = t[u++], m = t[u++], y = (t[u++], 
                1 - t[u++]), _ = Math.cos(v) * p + d, x = Math.sin(v) * g + f;
                1 < u ? a += li(o, s, _, x, n, r) : (l = _, h = x);
                var w = (n - d) * g / p + d;
                if (i) {
                    if (si(d, f, g, v, v + m, y, e, w, r)) return !0;
                } else a += ci(d, f, g, v, v + m, y, w, r);
                o = Math.cos(v + m) * p + d, s = Math.sin(v + m) * g + f;
                break;

              case oh.R:
                l = o = t[u++], h = s = t[u++];
                _ = l + t[u++], x = h + t[u++];
                if (i) {
                    if (ni(l, h, _, h, e, n, r) || ni(_, h, _, x, e, n, r) || ni(_, x, l, x, e, n, r) || ni(l, x, l, h, e, n, r)) return !0;
                } else a += li(_, h, _, x, n, r), a += li(l, x, l, h, n, r);
                break;

              case oh.Z:
                if (i) {
                    if (ni(o, s, l, h, e, n, r)) return !0;
                } else a += li(o, s, l, h, n, r);
                o = l, s = h;
            }
        }
        return i || (b = s, M = h, Math.abs(b - M) < lh) || (a += li(o, s, l, h, n, r) || 0), 
        0 !== a;
        var b, M;
    }
    function fi(t) {
        pe.call(this, t), this.path = null;
    }
    function pi(t, e, i, n, r, a, o, s, l, h, u) {
        var c = l * (Mh / 180), d = bh(c) * (t - i) / 2 + wh(c) * (e - n) / 2, f = -1 * wh(c) * (t - i) / 2 + bh(c) * (e - n) / 2, p = d * d / (o * o) + f * f / (s * s);
        1 < p && (o *= xh(p), s *= xh(p));
        var g = (r === a ? -1 : 1) * xh((o * o * s * s - o * o * f * f - s * s * d * d) / (o * o * f * f + s * s * d * d)) || 0, v = g * o * f / s, m = g * -s * d / o, y = (t + i) / 2 + bh(c) * v - wh(c) * m, _ = (e + n) / 2 + wh(c) * v + bh(c) * m, x = kh([ 1, 0 ], [ (d - v) / o, (f - m) / s ]), w = [ (d - v) / o, (f - m) / s ], b = [ (-1 * d - v) / o, (-1 * f - m) / s ], M = kh(w, b);
        Ch(w, b) <= -1 && (M = Mh), 1 <= Ch(w, b) && (M = 0), 0 === a && 0 < M && (M -= 2 * Mh), 
        1 === a && M < 0 && (M += 2 * Mh), u.addData(h, y, _, o, s, x, M, c, a);
    }
    function gi(t, e) {
        var i = function(t) {
            if (!t) return [];
            var e, i = t.replace(/-/g, " -").replace(/  /g, " ").replace(/ /g, ",").replace(/,,/g, ",");
            for (e = 0; e < _h.length; e++) i = i.replace(new RegExp(_h[e], "g"), "|" + _h[e]);
            var n, r = i.split("|"), a = 0, o = 0, s = new nh(), l = nh.CMD;
            for (e = 1; e < r.length; e++) {
                var h, u = r[e], c = u.charAt(0), d = 0, f = u.slice(1).replace(/e,-/g, "e-").split(",");
                0 < f.length && "" === f[0] && f.shift();
                for (var p = 0; p < f.length; p++) f[p] = parseFloat(f[p]);
                for (;d < f.length && !isNaN(f[d]) && !isNaN(f[0]); ) {
                    var g, v, m, y, _, x, w, b = a, M = o;
                    switch (c) {
                      case "l":
                        a += f[d++], o += f[d++], h = l.L, s.addData(h, a, o);
                        break;

                      case "L":
                        a = f[d++], o = f[d++], h = l.L, s.addData(h, a, o);
                        break;

                      case "m":
                        a += f[d++], o += f[d++], h = l.M, s.addData(h, a, o), c = "l";
                        break;

                      case "M":
                        a = f[d++], o = f[d++], h = l.M, s.addData(h, a, o), c = "L";
                        break;

                      case "h":
                        a += f[d++], h = l.L, s.addData(h, a, o);
                        break;

                      case "H":
                        a = f[d++], h = l.L, s.addData(h, a, o);
                        break;

                      case "v":
                        o += f[d++], h = l.L, s.addData(h, a, o);
                        break;

                      case "V":
                        o = f[d++], h = l.L, s.addData(h, a, o);
                        break;

                      case "C":
                        h = l.C, s.addData(h, f[d++], f[d++], f[d++], f[d++], f[d++], f[d++]), a = f[d - 2], 
                        o = f[d - 1];
                        break;

                      case "c":
                        h = l.C, s.addData(h, f[d++] + a, f[d++] + o, f[d++] + a, f[d++] + o, f[d++] + a, f[d++] + o), 
                        a += f[d - 2], o += f[d - 1];
                        break;

                      case "S":
                        g = a, v = o;
                        var S = s.len(), C = s.data;
                        n === l.C && (g += a - C[S - 4], v += o - C[S - 3]), h = l.C, b = f[d++], M = f[d++], 
                        a = f[d++], o = f[d++], s.addData(h, g, v, b, M, a, o);
                        break;

                      case "s":
                        g = a, v = o, S = s.len(), C = s.data, n === l.C && (g += a - C[S - 4], v += o - C[S - 3]), 
                        h = l.C, b = a + f[d++], M = o + f[d++], a += f[d++], o += f[d++], s.addData(h, g, v, b, M, a, o);
                        break;

                      case "Q":
                        b = f[d++], M = f[d++], a = f[d++], o = f[d++], h = l.Q, s.addData(h, b, M, a, o);
                        break;

                      case "q":
                        b = f[d++] + a, M = f[d++] + o, a += f[d++], o += f[d++], h = l.Q, s.addData(h, b, M, a, o);
                        break;

                      case "T":
                        g = a, v = o, S = s.len(), C = s.data, n === l.Q && (g += a - C[S - 4], v += o - C[S - 3]), 
                        a = f[d++], o = f[d++], h = l.Q, s.addData(h, g, v, a, o);
                        break;

                      case "t":
                        g = a, v = o, S = s.len(), C = s.data, n === l.Q && (g += a - C[S - 4], v += o - C[S - 3]), 
                        a += f[d++], o += f[d++], h = l.Q, s.addData(h, g, v, a, o);
                        break;

                      case "A":
                        m = f[d++], y = f[d++], _ = f[d++], x = f[d++], w = f[d++], pi(b = a, M = o, a = f[d++], o = f[d++], x, w, m, y, _, h = l.A, s);
                        break;

                      case "a":
                        m = f[d++], y = f[d++], _ = f[d++], x = f[d++], w = f[d++], pi(b = a, M = o, a += f[d++], o += f[d++], x, w, m, y, _, h = l.A, s);
                    }
                }
                ("z" === c || "Z" === c) && (h = l.Z, s.addData(h)), n = h;
            }
            return s.toStatic(), s;
        }(t);
        return (e = e || {}).buildPath = function(t) {
            if (t.setData) {
                t.setData(i.data), (e = t.getContext()) && t.rebuildPath(e);
            } else {
                var e = t;
                i.rebuildPath(e);
            }
        }, e.applyTransform = function(t) {
            yh(i, t), this.dirty(!0);
        }, e;
    }
    function vi(t, e, i, n, r, a, o) {
        var s = .5 * (i - t), l = .5 * (n - e);
        return (2 * (e - i) + s + l) * o + (-3 * (e - i) - 2 * s - l) * a + s * r + e;
    }
    function mi(t, e, i) {
        var n = e.points, r = e.smooth;
        if (n && 2 <= n.length) {
            if (r && "spline" !== r) {
                var a = function(t, e, i, n) {
                    var r, a, o, s, l = [], h = [], u = [], c = [];
                    if (n) {
                        o = [ 1 / 0, 1 / 0 ], s = [ -1 / 0, -1 / 0 ];
                        for (var d = 0, f = t.length; d < f; d++) H(o, o, t[d]), G(s, s, t[d]);
                        H(o, o, n[0]), G(s, s, n[1]);
                    }
                    for (var d = 0, f = t.length; d < f; d++) {
                        var p = t[d];
                        if (i) r = t[d ? d - 1 : f - 1], a = t[(d + 1) % f]; else {
                            if (0 === d || d === f - 1) {
                                l.push(w(t[d]));
                                continue;
                            }
                            r = t[d - 1], a = t[d + 1];
                        }
                        B(h, a, r), z(h, h, e);
                        var g = V(p, r), v = V(p, a), m = g + v;
                        0 !== m && (g /= m, v /= m), z(u, h, -g), z(c, h, v);
                        var y = R([], p, u), _ = R([], p, c);
                        n && (G(y, y, o), H(y, y, s), G(_, _, o), H(_, _, s)), l.push(y), l.push(_);
                    }
                    return i && l.push(l.shift()), l;
                }(n, r, i, e.smoothConstraint);
                t.moveTo(n[0][0], n[0][1]);
                for (var o = n.length, s = 0; s < (i ? o : o - 1); s++) {
                    var l = a[2 * s], h = a[2 * s + 1], u = n[(s + 1) % o];
                    t.bezierCurveTo(l[0], l[1], h[0], h[1], u[0], u[1]);
                }
            } else {
                "spline" === r && (n = function(t, e) {
                    for (var i = t.length, n = [], r = 0, a = 1; a < i; a++) r += V(t[a - 1], t[a]);
                    var o = r / 2;
                    o = o < i ? i : o;
                    for (var a = 0; a < o; a++) {
                        var s, l, h, u = a / (o - 1) * (e ? i : i - 1), c = Math.floor(u), d = u - c, f = t[c % i];
                        e ? (s = t[(c - 1 + i) % i], l = t[(c + 1) % i], h = t[(c + 2) % i]) : (s = t[0 === c ? c : c - 1], 
                        l = t[i - 2 < c ? i - 1 : c + 1], h = t[i - 3 < c ? i - 1 : c + 2]);
                        var p = d * d, g = d * p;
                        n.push([ vi(s[0], f[0], l[0], h[0], d, p, g), vi(s[1], f[1], l[1], h[1], d, p, g) ]);
                    }
                    return n;
                }(n, i)), t.moveTo(n[0][0], n[0][1]);
                s = 1;
                for (var c = n.length; s < c; s++) t.lineTo(n[s][0], n[s][1]);
            }
            i && t.closePath();
        }
    }
    function yi(t, e, i) {
        var n = t.cpx2, r = t.cpy2;
        return null === n || null === r ? [ (i ? Ye : Ue)(t.x1, t.cpx1, t.cpx2, t.x2, e), (i ? Ye : Ue)(t.y1, t.cpy1, t.cpy2, t.y2, e) ] : [ (i ? Ke : $e)(t.x1, t.cpx1, t.x2, e), (i ? Ke : $e)(t.y1, t.cpy1, t.y2, e) ];
    }
    function _i(t) {
        pe.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, 
        this.notClear = !0;
    }
    function xi(t) {
        return fi.extend(t);
    }
    function wi(t, e, i, n) {
        var r = new fi(gi(t, e)), a = r.getBoundingRect();
        return i && ("center" === n && (i = bi(i, a)), function(t, e) {
            if (t.applyTransform) {
                var i = t.getBoundingRect(), n = i.calculateTransform(e);
                t.applyTransform(n);
            }
        }(r, i)), r;
    }
    function bi(t, e) {
        var i, n = e.width / e.height, r = t.height * n;
        return r <= t.width ? i = t.height : i = (r = t.width) / n, {
            x: t.x + t.width / 2 - r / 2,
            y: t.y + t.height / 2 - i / 2,
            width: r,
            height: i
        };
    }
    function Mi(t) {
        var e = t.shape, i = t.style.lineWidth;
        return Vh(2 * e.x1) === Vh(2 * e.x2) && (e.x1 = e.x2 = Si(e.x1, i, !0)), Vh(2 * e.y1) === Vh(2 * e.y2) && (e.y1 = e.y2 = Si(e.y1, i, !0)), 
        t;
    }
    function Si(t, e, i) {
        var n = Vh(2 * t);
        return (n + Vh(e)) % 2 == 0 ? n / 2 : (n + (i ? 1 : -1)) / 2;
    }
    function Ci(t) {
        return null != t && "none" != t;
    }
    function ki(t) {
        return "string" == typeof t ? function(t, e) {
            var i = ht(t);
            if (i) {
                for (var n = 0; n < 3; n++) i[n] = e < 0 ? i[n] * (1 - e) | 0 : (255 - i[n]) * e + i[n] | 0, 
                255 < i[n] ? i[n] = 255 : t[n] < 0 && (i[n] = 0);
                return ct(i, 4 === i.length ? "rgba" : "rgb");
            }
        }(t, -.1) : t;
    }
    function Ti(t) {
        if (t.__hoverStlDirty) {
            var e = t.style.stroke, i = t.style.fill, n = t.__hoverStl;
            n.fill = n.fill || (Ci(i) ? ki(i) : null), n.stroke = n.stroke || (Ci(e) ? ki(e) : null);
            var r = {};
            for (var a in n) null != n[a] && (r[a] = t.style[a]);
            t.__normalStl = r, t.__hoverStlDirty = !1;
        }
    }
    function Ii(t) {
        if (!t.__isHover) {
            if (Ti(t), t.useHoverLayer) t.__zr && t.__zr.addHover(t, t.__hoverStl); else {
                var e = t.style, i = e.insideRollbackOpt;
                i && ((r = (n = e).insideRollback) && (n.textFill = r.textFill, n.textStroke = r.textStroke, 
                n.textStrokeWidth = r.textStrokeWidth)), e.extendFrom(t.__hoverStl), i && (Wi(e, e.insideOriginalTextPosition, i), 
                null == e.textFill && (e.textFill = i.autoColor)), t.dirty(!1), t.z2 += 1;
            }
            t.__isHover = !0;
        }
        var n, r;
    }
    function Di(t) {
        if (t.__isHover) {
            var e = t.__normalStl;
            t.useHoverLayer ? t.__zr && t.__zr.removeHover(t) : (e && t.setStyle(e), t.z2 -= 1), 
            t.__isHover = !1;
        }
    }
    function Ai(t) {
        "group" === t.type ? t.traverse(function(t) {
            "group" !== t.type && Ii(t);
        }) : Ii(t);
    }
    function Li(t) {
        "group" === t.type ? t.traverse(function(t) {
            "group" !== t.type && Di(t);
        }) : Di(t);
    }
    function Pi(t, e) {
        t.__hoverStl = t.hoverStyle || e || {}, t.__hoverStlDirty = !0, t.__isHover && Ti(t);
    }
    function Oi(t) {
        this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && Ai(this);
    }
    function Ei(t) {
        this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && Li(this);
    }
    function Ri() {
        this.__isEmphasis = !0, Ai(this);
    }
    function Bi() {
        this.__isEmphasis = !1, Li(this);
    }
    function Ni(t, e, i) {
        t.__hoverSilentOnTouch = i && i.hoverSilentOnTouch, "group" === t.type ? t.traverse(function(t) {
            "group" !== t.type && Pi(t, e);
        }) : Pi(t, e), t.on("mouseover", Oi).on("mouseout", Ei), t.on("emphasis", Ri).on("normal", Bi);
    }
    function zi(t, e, i, n, r) {
        return function(t, e, i, n) {
            if ((i = i || Wh).isRectText) {
                var r = e.getShallow("position") || (n ? null : "inside");
                "outside" === r && (r = "top"), t.textPosition = r, t.textOffset = e.getShallow("offset");
                var a = e.getShallow("rotate");
                null != a && (a *= Math.PI / 180), t.textRotation = a, t.textDistance = L(e.getShallow("distance"), n ? null : 5);
            }
            var o, s = e.ecModel, l = s && s.option.textStyle, h = function(t) {
                for (var e; t && t !== t.ecModel; ) {
                    var i = (t.option || Wh).rich;
                    if (i) for (var n in e = e || {}, i) i.hasOwnProperty(n) && (e[n] = 1);
                    t = t.parentModel;
                }
                return e;
            }(e);
            if (h) for (var u in o = {}, h) if (h.hasOwnProperty(u)) {
                var c = e.getModel([ "rich", u ]);
                Fi(o[u] = {}, c, l, i, n);
            }
            t.rich = o, Fi(t, e, l, i, n, !0), i.forceRich && !i.textStyle && (i.textStyle = {});
        }(t, e, n, r), i && D(t, i), t.host && t.host.dirty && t.host.dirty(!1), t;
    }
    function Fi(t, e, i, n, r, a) {
        if (i = !r && i || Wh, t.textFill = Vi(e.getShallow("color"), n) || i.color, t.textStroke = Vi(e.getShallow("textBorderColor"), n) || i.textBorderColor, 
        t.textStrokeWidth = L(e.getShallow("textBorderWidth"), i.textBorderWidth), !r) {
            if (a) {
                var o = t.textPosition;
                t.insideRollback = Wi(t, o, n), t.insideOriginalTextPosition = o, t.insideRollbackOpt = n;
            }
            null == t.textFill && (t.textFill = n.autoColor);
        }
        t.fontStyle = e.getShallow("fontStyle") || i.fontStyle, t.fontWeight = e.getShallow("fontWeight") || i.fontWeight, 
        t.fontSize = e.getShallow("fontSize") || i.fontSize, t.fontFamily = e.getShallow("fontFamily") || i.fontFamily, 
        t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), 
        t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), 
        t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), a && n.disableBox || (t.textBackgroundColor = Vi(e.getShallow("backgroundColor"), n), 
        t.textPadding = e.getShallow("padding"), t.textBorderColor = Vi(e.getShallow("borderColor"), n), 
        t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), 
        t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), 
        t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), 
        t.textShadowColor = e.getShallow("textShadowColor") || i.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || i.textShadowBlur, 
        t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || i.textShadowOffsetX, 
        t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || i.textShadowOffsetY;
    }
    function Vi(t, e) {
        return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null;
    }
    function Wi(t, e, i) {
        var n, r = i.useInsideStyle;
        return null == t.textFill && !1 !== r && (!0 === r || i.isRectText && e && "string" == typeof e && 0 <= e.indexOf("inside")) && (n = {
            textFill: null,
            textStroke: t.textStroke,
            textStrokeWidth: t.textStrokeWidth
        }, t.textFill = "#fff", null == t.textStroke && (t.textStroke = i.autoColor, null == t.textStrokeWidth && (t.textStrokeWidth = 2))), 
        n;
    }
    function Hi(t, e, i, n, r, a) {
        if ("function" == typeof r && (a = r, r = null), n && n.isAnimationEnabled()) {
            var o = t ? "Update" : "", s = n.getShallow("animationDuration" + o), l = n.getShallow("animationEasing" + o), h = n.getShallow("animationDelay" + o);
            "function" == typeof h && (h = h(r, n.getAnimationDelayParams ? n.getAnimationDelayParams(e, r) : null)), 
            "function" == typeof s && (s = s(r)), 0 < s ? e.animateTo(i, s, h || 0, l, a, !!a) : (e.stopAnimation(), 
            e.attr(i), a && a());
        } else e.stopAnimation(), e.attr(i), a && a();
    }
    function Gi(t, e, i, n, r) {
        Hi(!0, t, e, i, n, r);
    }
    function qi(t, e, i, n, r) {
        Hi(!1, t, e, i, n, r);
    }
    function Xi(t, e, i) {
        this.parentModel = e, this.ecModel = i, this.option = t;
    }
    function Ui(t, e, i) {
        for (var n = 0; n < e.length && (!e[n] || null != (t = t && "object" == (void 0 === t ? "undefined" : _typeof(t)) ? t[e[n]] : null)); n++) ;
        return null == t && i && (t = i.get(e)), t;
    }
    function Yi(t, e) {
        var i = Yh(t).getParent;
        return i ? i.call(t, e) : t.parentModel;
    }
    function ji(t) {
        return [ t || "", $h++, Math.random().toFixed(5) ].join("_");
    }
    function Zi(t, e, i, n) {
        var r = e[1] - e[0], a = i[1] - i[0];
        if (0 === r) return 0 === a ? i[0] : (i[0] + i[1]) / 2;
        if (n) if (0 < r) {
            if (t <= e[0]) return i[0];
            if (t >= e[1]) return i[1];
        } else {
            if (t >= e[0]) return i[0];
            if (t <= e[1]) return i[1];
        } else {
            if (t === e[0]) return i[0];
            if (t === e[1]) return i[1];
        }
        return (t - e[0]) / r * a + i[0];
    }
    function $i(t, e) {
        switch (t) {
          case "center":
          case "middle":
            t = "50%";
            break;

          case "left":
          case "top":
            t = "0%";
            break;

          case "right":
          case "bottom":
            t = "100%";
        }
        return "string" == typeof t ? (i = t, i.replace(/^\s+/, "").replace(/\s+$/, "")).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? NaN : +t;
        var i;
    }
    function Ki(t, e, i) {
        return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), 
        i ? t : +t;
    }
    function Qi(t) {
        var e = t.toString(), i = e.indexOf("e");
        if (0 < i) {
            var n = +e.slice(i + 1);
            return n < 0 ? -n : 0;
        }
        var r = e.indexOf(".");
        return r < 0 ? 0 : e.length - 1 - r;
    }
    function Ji(t) {
        var e = 2 * Math.PI;
        return (t % e + e) % e;
    }
    function tn(t) {
        return -Kh < t && t < Kh;
    }
    function en(t) {
        if (t instanceof Date) return t;
        if ("string" == typeof t) {
            var e = Qh.exec(t);
            if (!e) return new Date(NaN);
            if (e[8]) {
                var i = +e[4] || 0;
                return "Z" !== e[8].toUpperCase() && (i -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, i, +(e[5] || 0), +e[6] || 0, +e[7] || 0));
            }
            return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0);
        }
        return new Date(null == t ? NaN : Math.round(t));
    }
    function nn(t) {
        return Math.floor(Math.log(t) / Math.LN10);
    }
    function rn(t, e) {
        var i = nn(t), n = Math.pow(10, i), r = t / n;
        return t = (e ? r < 1.5 ? 1 : r < 2.5 ? 2 : r < 4 ? 3 : r < 7 ? 5 : 10 : r < 1 ? 1 : r < 2 ? 2 : r < 3 ? 3 : r < 5 ? 5 : 10) * n, 
        -20 <= i ? +t.toFixed(i < 0 ? -i : 0) : t;
    }
    function an(t) {
        return isNaN(t) ? "-" : (t = (t + "").split("."))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (1 < t.length ? "." + t[1] : "");
    }
    function on(t) {
        return null == t ? "" : (t + "").replace(tu, function(t, e) {
            return eu[e];
        });
    }
    function sn(t, e) {
        var i = (t = C(t) ? {
            color: t,
            extraCssText: e
        } : t || {}).color, n = t.type;
        e = t.extraCssText;
        return i ? "subItem" === n ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + on(i) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + on(i) + ";" + (e || "") + '"></span>' : "";
    }
    function ln(t, e) {
        return "0000".substr(0, e - (t += "").length) + t;
    }
    function hn(t, e, i) {
        ("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");
        var n = en(e), r = i ? "UTC" : "", a = n["get" + r + "FullYear"](), o = n["get" + r + "Month"]() + 1, s = n["get" + r + "Date"](), l = n["get" + r + "Hours"](), h = n["get" + r + "Minutes"](), u = n["get" + r + "Seconds"](), c = n["get" + r + "Milliseconds"]();
        return t.replace("MM", ln(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", a % 100).replace("dd", ln(s, 2)).replace("d", s).replace("hh", ln(l, 2)).replace("h", l).replace("mm", ln(h, 2)).replace("m", h).replace("ss", ln(u, 2)).replace("s", u).replace("SSS", ln(c, 3));
    }
    function un(u, c, d, f, p) {
        var g = 0, v = 0;
        null == f && (f = 1 / 0), null == p && (p = 1 / 0);
        var m = 0;
        c.eachChild(function(t, e) {
            var i, n, r = t.position, a = t.getBoundingRect(), o = c.childAt(e + 1), s = o && o.getBoundingRect();
            if ("horizontal" === u) {
                var l = a.width + (s ? -s.x + a.x : 0);
                f < (i = g + l) || t.newline ? (g = 0, i = l, v += m + d, m = a.height) : m = Math.max(m, a.height);
            } else {
                var h = a.height + (s ? -s.y + a.y : 0);
                p < (n = v + h) || t.newline ? (g += m + d, v = 0, n = h, m = a.width) : m = Math.max(m, a.width);
            }
            t.newline || (r[0] = g, r[1] = v, "horizontal" === u ? g = i + d : v = n + d);
        });
    }
    function cn(l, h, t) {
        function e(t, e) {
            var i = {}, n = 0, r = {}, a = 0;
            if (au(t, function(t) {
                r[t] = l[t];
            }), au(t, function(t) {
                u(h, t) && (i[t] = r[t] = h[t]), c(i, t) && n++, c(r, t) && a++;
            }), d[e]) return c(h, t[1]) ? r[t[2]] = null : c(h, t[2]) && (r[t[1]] = null), r;
            if (2 !== a && n) {
                if (2 <= n) return i;
                for (var o = 0; o < t.length; o++) {
                    var s = t[o];
                    if (!u(i, s) && u(l, s)) {
                        i[s] = l[s];
                        break;
                    }
                }
                return i;
            }
            return r;
        }
        function u(t, e) {
            return t.hasOwnProperty(e);
        }
        function c(t, e) {
            return null != t[e] && "auto" !== t[e];
        }
        function i(t, e, i) {
            au(t, function(t) {
                e[t] = i[t];
            });
        }
        !k(t) && (t = {});
        var d = t.ignoreSize;
        !M(d) && (d = [ d, d ]);
        var n = e(su[0], 0), r = e(su[1], 1);
        i(su[0], l, n), i(su[1], l, r);
    }
    function dn(t) {
        return e = {}, (i = t) && e && au(ou, function(t) {
            i.hasOwnProperty(t) && (e[t] = i[t]);
        }), e;
        var e, i;
    }
    function fn(t) {
        var e = t.get("coordinateSystem"), i = {
            coordSysName: e,
            coordSysDims: [],
            axisMap: O(),
            categoryAxisMap: O()
        }, n = gu[e];
        return n ? (n(t, i, i.axisMap, i.categoryAxisMap), i) : void 0;
    }
    function pn(t) {
        return "category" === t.get("type");
    }
    function gn(t) {
        this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === _u ? {} : []), 
        this.sourceFormat = t.sourceFormat || xu, this.seriesLayoutBy = t.seriesLayoutBy || bu, 
        this.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && O(t.encodeDefine), 
        this.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount;
    }
    function vn(t) {
        var e, i, n = t.option, r = n.data, a = p(r) ? wu : vu, o = !1, s = n.seriesLayoutBy, l = n.sourceHeader, h = n.dimensions, u = (i = (e = t).option).data ? void 0 : e.ecModel.getComponent("dataset", i.datasetIndex || 0);
        if (u) {
            var c = u.option;
            r = c.source, a = Su(u).sourceFormat, o = !0, s = s || c.seriesLayoutBy, null == l && (l = c.sourceHeader), 
            h = h || c.dimensions;
        }
        var d = function(t, e, i, n, r) {
            if (!t) return {
                dimensionsDefine: mn(r)
            };
            var a, o, s, l;
            if (e === mu) "auto" === n || null == n ? yn(function(t) {
                null != t && "-" !== t && (C(t) ? null == o && (o = 1) : o = 0);
            }, i, t, 10) : o = n ? 1 : 0, r || 1 !== o || (r = [], yn(function(t, e) {
                r[e] = null != t ? t : "";
            }, i, t)), a = r ? r.length : i === Mu ? t.length : t[0] ? t[0].length : null; else if (e === yu) r || (r = function(t) {
                for (var e, i = 0; i < t.length && !(e = t[i++]); ) ;
                if (e) {
                    var n = [];
                    return N(e, function(t, e) {
                        n.push(e);
                    }), n;
                }
            }(t), s = !0); else if (e === _u) r || (r = [], s = !0, N(t, function(t, e) {
                r.push(e);
            })); else if (e === vu) {
                var h = De(t[0]);
                a = M(h) && h.length || 1;
            }
            return s && N(r, function(t, e) {
                "name" === (k(t) ? t.name : t) && (l = e);
            }), {
                startIndex: o,
                dimensionsDefine: mn(r),
                dimensionsDetectCount: a,
                potentialNameDimIndex: l
            };
        }(r, a, s, l, h), f = n.encode;
        !f && u && (f = function(t, e, i, n, r, a) {
            var o = fn(t), s = {}, l = [], h = [], u = t.subType, c = O([ "pie", "map", "funnel" ]), d = O([ "line", "bar", "pictorialBar", "scatter", "effectScatter", "candlestick", "boxplot" ]);
            if (o && null != d.get(u)) {
                var f = t.ecModel, p = Su(f).datasetMap, g = e.uid + "_" + r, v = p.get(g) || p.set(g, {
                    categoryWayDim: 1,
                    valueWayDim: 0
                });
                N(o.coordSysDims, function(t) {
                    if (null == o.firstCategoryDimIndex) {
                        var e = v.valueWayDim++;
                        s[t] = e, h.push(e);
                    } else if (o.categoryAxisMap.get(t)) s[t] = 0, l.push(0); else {
                        var e = v.categoryWayDim++;
                        s[t] = e, h.push(e);
                    }
                });
            } else if (null != c.get(u)) {
                for (var m, y = 0; y < 5 && null == m; y++) _n(i, n, r, a.dimensionsDefine, a.startIndex, y) || (m = y);
                if (null != m) {
                    s.value = m;
                    var _ = a.potentialNameDimIndex || Math.max(m - 1, 0);
                    h.push(_), l.push(_);
                }
            }
            return l.length && (s.itemName = l), h.length && (s.seriesName = h), s;
        }(t, u, r, a, s, d)), Su(t).source = new gn({
            data: r,
            fromDataset: o,
            seriesLayoutBy: s,
            sourceFormat: a,
            dimensionsDefine: d.dimensionsDefine,
            startIndex: d.startIndex,
            dimensionsDetectCount: d.dimensionsDetectCount,
            encodeDefine: f
        });
    }
    function mn(t) {
        if (t) {
            var i = O();
            return I(t, function(t) {
                if (null == (t = D({}, k(t) ? t : {
                    name: t
                })).name) return t;
                t.name += "", null == t.displayName && (t.displayName = t.name);
                var e = i.get(t.name);
                return e ? t.name += "-" + e.count++ : i.set(t.name, {
                    count: 1
                }), t;
            });
        }
    }
    function yn(t, e, i, n) {
        if (null == n && (n = 1 / 0), e === Mu) for (var r = 0; r < i.length && r < n; r++) t(i[r] ? i[r][0] : null, r); else {
            var a = i[0] || [];
            for (r = 0; r < a.length && r < n; r++) t(a[r], r);
        }
    }
    function _n(t, e, i, n, r, a) {
        function o(t) {
            return (null == t || !isFinite(t) || "" === t) && (!(!C(t) || "-" === t) || void 0);
        }
        var s, l;
        if (p(t)) return !1;
        if (n && (l = k(l = n[a]) ? l.name : l), e === mu) if (i === Mu) {
            for (var h = t[a], u = 0; u < (h || []).length && u < 5; u++) if (null != (s = o(h[r + u]))) return s;
        } else for (u = 0; u < t.length && u < 5; u++) {
            var c = t[r + u];
            if (c && null != (s = o(c[a]))) return s;
        } else if (e === yu) {
            if (!l) return;
            for (u = 0; u < t.length && u < 5; u++) {
                if ((d = t[u]) && null != (s = o(d[l]))) return s;
            }
        } else if (e === _u) {
            if (!l) return;
            if (!(h = t[l]) || p(h)) return !1;
            for (u = 0; u < h.length && u < 5; u++) if (null != (s = o(h[u]))) return s;
        } else if (e === vu) for (u = 0; u < t.length && u < 5; u++) {
            var d, f = De(d = t[u]);
            if (!M(f)) return !1;
            if (null != (s = o(f[a]))) return s;
        }
        return !1;
    }
    function xn(t) {
        var i, e, n;
        t = t, this.option = {}, this.option[Cu] = 1, this._componentsMap = O({
            series: []
        }), this._seriesIndices, this._seriesIndicesMap, i = t, e = this._theme.option, 
        n = i.color && !i.colorLayer, N(e, function(t, e) {
            "colorLayer" === e && n || uu.hasClass(e) || ("object" == (void 0 === t ? "undefined" : _typeof(t)) ? i[e] = i[e] ? s(i[e], t, !1) : b(t) : null == i[e] && (i[e] = t));
        }), s(t, du, !1), this.mergeOption(t);
    }
    function wn(t, e) {
        t._seriesIndicesMap = O(t._seriesIndices = I(e, function(t) {
            return t.componentIndex;
        }) || []);
    }
    function bn(t, e) {
        return e.hasOwnProperty("subType") ? u(t, function(t) {
            return t.subType === e.subType;
        }) : t;
    }
    function Mn(e) {
        N(Tu, function(t) {
            this[t] = c(e[t], e);
        }, this);
    }
    function Sn() {
        this._coordinateSystems = [];
    }
    function Cn(t) {
        this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, 
        this._currentMediaIndices = [], this._optionBackup, this._newBaseOption;
    }
    function kn(t, e, i) {
        var l = {
            width: e,
            height: i,
            aspectratio: e / i
        }, h = !0;
        return N(t, function(t, e) {
            var i, n, r, a = e.match(Ou);
            if (a && a[1] && a[2]) {
                var o = a[1], s = a[2].toLowerCase();
                i = l[s], n = t, ("min" === (r = o) ? n <= i : "max" === r ? i <= n : i === n) || (h = !1);
            }
        }), h;
    }
    function Tn(t) {
        var e = t && t.itemStyle;
        if (e) for (var i = 0, n = Bu.length; i < n; i++) {
            var r = Bu[i], a = e.normal, o = e.emphasis;
            a && a[r] && (t[r] = t[r] || {}, t[r].normal ? s(t[r].normal, a[r]) : t[r].normal = a[r], 
            a[r] = null), o && o[r] && (t[r] = t[r] || {}, t[r].emphasis ? s(t[r].emphasis, o[r]) : t[r].emphasis = o[r], 
            o[r] = null);
        }
    }
    function In(t, e, i) {
        if (t && t[e] && (t[e].normal || t[e].emphasis)) {
            var n = t[e].normal, r = t[e].emphasis;
            n && (i ? (t[e].normal = t[e].emphasis = null, T(t[e], n)) : t[e] = n), r && (t.emphasis = t.emphasis || {}, 
            t.emphasis[e] = r);
        }
    }
    function Dn(t) {
        In(t, "itemStyle"), In(t, "lineStyle"), In(t, "areaStyle"), In(t, "label"), In(t, "labelLine"), 
        In(t, "upperLabel"), In(t, "edgeLabel");
    }
    function An(t, e) {
        var i = Ru(t) && t[e], n = Ru(i) && i.textStyle;
        if (n) for (var r = 0, a = vl.length; r < a; r++) {
            e = vl[r];
            n.hasOwnProperty(e) && (i[e] = n[e]);
        }
    }
    function Ln(t) {
        t && (Dn(t), An(t, "label"), t.emphasis && An(t.emphasis, "label"));
    }
    function Pn(t) {
        return M(t) ? t : t ? [ t ] : [];
    }
    function On(t) {
        return (M(t) ? t[0] : t) || {};
    }
    function En(e) {
        N(zu, function(t) {
            t[0] in e && !(t[1] in e) && (e[t[1]] = e[t[0]]);
        });
    }
    function Rn(v) {
        N(v, function(u, c) {
            var d = [], f = [ NaN, NaN ], t = [ u.stackResultDimension, u.stackedOverDimension ], p = u.data, g = u.isStackedByIndex, e = p.map(t, function(t, e, i) {
                var n, r, a = p.get(u.stackedDimension, i);
                if (isNaN(a)) return f;
                g ? r = p.getRawIndex(i) : n = p.get(u.stackedByDimension, i);
                for (var o = NaN, s = c - 1; 0 <= s; s--) {
                    var l = v[s];
                    if (g || (r = l.data.rawIndexOf(l.stackedByDimension, n)), 0 <= r) {
                        var h = l.data.getByRawIndex(l.stackResultDimension, r);
                        if (0 <= a && 0 < h || a <= 0 && h < 0) {
                            a += h, o = h;
                            break;
                        }
                    }
                }
                return d[0] = a, d[1] = o, d;
            });
            p.hostModel.setData(e), u.data = e;
        });
    }
    function Bn(t, e) {
        gn.isInstance(t) || (t = gn.seriesDataToSource(t)), this._source = t;
        var i = this._data = t.data, n = t.sourceFormat;
        n === wu && (this._offset = 0, this._dimSize = e, this._data = i), D(this, Hu[n === mu ? n + "_" + t.seriesLayoutBy : n]);
    }
    function Nn() {
        return this._data.length;
    }
    function zn(t) {
        return this._data[t];
    }
    function Fn(t) {
        for (var e = 0; e < t.length; e++) this._data.push(t[e]);
    }
    function Vn(t, e, i) {
        return null != i ? t[i] : t;
    }
    function Wn(t, e, i, n) {
        return Hn(t[n], this._dimensionInfos[e]);
    }
    function Hn(t, e) {
        var i = e && e.type;
        if ("ordinal" === i) {
            var n = e && e.ordinalMeta;
            return n ? n.parseAndCollect(t) : t;
        }
        return "time" === i && "number" != typeof t && null != t && "-" !== t && (t = +en(t)), 
        null == t || "" === t ? NaN : +t;
    }
    function Gn(t, e, i) {
        if (t) {
            var n = t.getRawDataItem(e);
            if (null != n) {
                var r, a, o = t.getProvider().getSource().sourceFormat, s = t.getDimensionInfo(i);
                return s && (r = s.name, a = s.index), Gu[o](n, e, a, r);
            }
        }
    }
    function qn(t) {
        return new Xn(t);
    }
    function Xn(t) {
        t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, 
        this._onDirty = t.onDirty, this._dirty = !0, this.context;
    }
    function Un(t, e, i, n, r, a) {
        ju.reset(i, n, r, a), t._callingProgress = e, t._callingProgress({
            start: i,
            end: n,
            count: n - i,
            next: ju.next
        }, t.context);
    }
    function Yn(t) {
        var i, e, n, r = t.name;
        Le(t) || (t.name = (i = t.getRawData(), e = i.mapDimension("seriesName", !0), n = [], 
        N(e, function(t) {
            var e = i.getDimensionInfo(t);
            e.displayName && n.push(e.displayName);
        }), n.join(" ") || r));
    }
    function jn(t) {
        return t.model.getRawData().count();
    }
    function Zn(t) {
        var e = t.model;
        return e.setData(e.getRawData().cloneShallow()), $n;
    }
    function $n(t, e) {
        t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData);
    }
    function Kn(e, i) {
        N(e.CHANGABLE_METHODS, function(t) {
            e.wrapMethod(t, r(Qn, i));
        });
    }
    function Qn(t) {
        var e = Jn(t);
        e && e.setOutputEnd(this.count());
    }
    function Jn(t) {
        var e = (t.ecModel || {}).scheduler, i = e && e.getPipeline(t.uid);
        if (i) {
            var n = i.currentTask;
            if (n) {
                var r = n.agentStubMap;
                r && (n = r.get(t.uid));
            }
            return n;
        }
    }
    function tr() {
        this.group = new Ms(), this.uid = ji("viewChart"), this.renderTask = qn({
            plan: nr,
            reset: rr
        }), this.renderTask.context = {
            view: this
        };
    }
    function er(t, e) {
        if (t && (t.trigger(e), "group" === t.type)) for (var i = 0; i < t.childCount(); i++) er(t.childAt(i), e);
    }
    function ir(e, t, i) {
        var n = Oe(e, t);
        null != n ? N(Te(n), function(t) {
            er(e.getItemGraphicEl(t), i);
        }) : e.eachItemGraphicEl(function(t) {
            er(t, i);
        });
    }
    function nr(t) {
        return ec(t.model);
    }
    function rr(t) {
        var e = t.model, i = t.ecModel, n = t.api, r = t.payload, a = e.pipelineContext.progressiveRender, o = t.view, s = r && tc(r).updateMethod, l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
        return "render" !== l && o[l](e, i, n, r), nc[l];
    }
    function ar(t, e, i, n) {
        this.ecInstance = t, this.api = e, this.unfinished;
        i = this._dataProcessorHandlers = i.slice(), n = this._visualHandlers = n.slice();
        this._allHandlers = i.concat(n), this._stageTaskMap = O();
    }
    function or(s, t, l, h, u) {
        function c(t, e) {
            return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id));
        }
        var d;
        u = u || {}, N(t, function(i) {
            if (!u.visualType || u.visualType === i.visualType) {
                var t = s._stageTaskMap.get(i.uid), e = t.seriesTaskMap, n = t.overallTask;
                if (n) {
                    var r, a = n.agentStubMap;
                    a.each(function(t) {
                        c(u, t) && (t.dirty(), r = !0);
                    }), r && n.dirty(), hc(n, h);
                    var o = s.getPerformArgs(n, u.block);
                    a.each(function(t) {
                        t.perform(o);
                    }), d |= n.perform(o);
                } else e && e.each(function(t) {
                    c(u, t) && t.dirty();
                    var e = s.getPerformArgs(t, u.block);
                    e.skip = !i.performRawSeries && l.isSeriesFiltered(t.context.model), hc(t, h), d |= t.perform(e);
                });
            }
        }), s.unfinished |= d;
    }
    function sr(t) {
        t.overallReset(t.ecModel, t.api, t.payload);
    }
    function lr(t) {
        return t.overallProgress && hr;
    }
    function hr() {
        this.agent.dirty(), this.getDownstream().dirty();
    }
    function ur() {
        this.agent && this.agent.dirty();
    }
    function cr(t) {
        return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload);
    }
    function dr(t) {
        t.useClearVisual && t.data.clearAllVisual();
        var e = t.resetDefines = Te(t.reset(t.model, t.ecModel, t.api, t.payload));
        return 1 < e.length ? I(e, function(t, e) {
            return fr(e);
        }) : uc;
    }
    function fr(a) {
        return function(t, e) {
            var i = e.data, n = e.resetDefines[a];
            if (n && n.dataEach) for (var r = t.start; r < t.end; r++) n.dataEach(i, r); else n && n.progress && n.progress(t, i);
        };
    }
    function pr(t) {
        return t.data.count();
    }
    function gr(t, e, i) {
        var n = e.uid, r = t._pipelineMap.get(n);
        !r.head && (r.head = i), r.tail && r.tail.pipe(i), (r.tail = i).__idxInPipeline = r.count++, 
        i.__pipeline = r;
    }
    function vr(t, e) {
        for (var i in e.prototype) t[i] = x;
    }
    function mr(n) {
        return function(t, e, i) {
            t = t && t.toLowerCase(), qo.prototype[n].call(this, t, e, i);
        };
    }
    function yr() {
        qo.call(this);
    }
    function _r(t, e, i) {
        function n(t, e) {
            return t.__prio - e.__prio;
        }
        i = i || {}, "string" == typeof e && (e = zc[e]), this.id, this.group, this._dom = t;
        var r = this._zr = ke(t, {
            renderer: i.renderer || "canvas",
            devicePixelRatio: i.devicePixelRatio,
            width: i.width,
            height: i.height
        });
        this._throttledZrFlush = function(t, i, n) {
            function r() {
                c = new Date().getTime(), d = null, t.apply(s, l || []);
            }
            var a, o, s, l, h, u = 0, c = 0, d = null;
            i = i || 0;
            var e = function() {
                a = new Date().getTime(), s = this, l = arguments;
                var t = h || i, e = h || n;
                h = null, o = a - (e ? u : c) - t, clearTimeout(d), e ? d = setTimeout(r, t) : 0 <= o ? r() : d = setTimeout(r, -o), 
                u = a;
            };
            return e.clear = function() {
                d && (clearTimeout(d), d = null);
            }, e.debounceNextCall = function(t) {
                h = t;
            }, e;
        }(c(r.flush, r), 17), (e = b(e)) && Vu(e, !0), this._theme = e, this._chartsViews = [], 
        this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new Sn();
        var a, o, s, l, h = this._api = (o = (a = this)._coordSysMgr, D(new Mn(a), {
            getCoordinateSystems: c(o.getCoordinateSystems, o),
            getComponentByElement: function(t) {
                for (;t; ) {
                    var e = t.__ecComponentInfo;
                    if (null != e) return a._model.getComponent(e.mainType, e.index);
                    t = t.parent;
                }
            }
        }));
        At(Nc, n), At(Ec, n), this._scheduler = new ar(this, h, Ec, Nc), qo.call(this), 
        this._messageCenter = new yr(), this._initEvents(), this.resize = c(this.resize, this), 
        this._pendingActions = [], r.animation.on("frame", this._onframe, this), l = this, 
        (s = r).on("rendered", function() {
            l.trigger("rendered"), !s.animation.isFinished() || l[Tc] || l._scheduler.unfinished || l._pendingActions.length || l.trigger("finished");
        }), v(this);
    }
    function xr(t, e, i) {
        var n, r = this._model, a = this._coordSysMgr.getCoordinateSystems();
        e = Re(r, e);
        for (var o = 0; o < a.length; o++) {
            var s = a[o];
            if (s[t] && null != (n = s[t](r, e, i))) return n;
        }
    }
    function wr(t) {
        var e = t._model, i = t._scheduler;
        i.restorePipelines(e), i.prepareStageTasks(), Tr(t, "component", e, i), Tr(t, "chart", e, i), 
        i.plan();
    }
    function br(e, i, n, r, t) {
        function a(t) {
            t && t.__alive && t[i] && t[i](t.__model, o, e._api, n);
        }
        var o = e._model;
        if (r) {
            var s = {};
            s[r + "Id"] = n[r + "Id"], s[r + "Index"] = n[r + "Index"], s[r + "Name"] = n[r + "Name"];
            var l = {
                mainType: r,
                query: s
            };
            t && (l.subType = t);
            var h = n.excludeSeriesId;
            null != h && (h = O(Te(h))), o && o.eachComponent(l, function(t) {
                h && null != h.get(t.id) || a(e["series" === r ? "_chartsMap" : "_componentsMap"][t.__viewId]);
            }, e);
        } else wc(e._componentsViews.concat(e._chartsViews), a);
    }
    function Mr(t, e) {
        var i = t._chartsMap, n = t._scheduler;
        e.eachSeries(function(t) {
            n.updateStreamModes(t, i[t.__viewId]);
        });
    }
    function Sr(e, t) {
        var i = e.type, n = e.escapeConnect, r = Pc[i], a = r.actionInfo, o = (a.update || "update").split(":"), s = o.pop();
        o = null != o[0] && Sc(o[0]), this[kc] = !0;
        var l = [ e ], h = !1;
        e.batch && (h = !0, l = I(e.batch, function(t) {
            return (t = T(D({}, t), e)).batch = null, t;
        }));
        var u, c = [], d = "highlight" === i || "downplay" === i;
        wc(l, function(t) {
            (u = (u = r.action(t, this._model, this._api)) || D({}, t)).type = a.event || u.type, 
            c.push(u), d ? br(this, s, t, "series") : o && br(this, s, t, o.main, o.sub);
        }, this), "none" === s || d || o || (this[Tc] ? (wr(this), Ac.update.call(this, e), 
        this[Tc] = !1) : Ac[s].call(this, e)), u = h ? {
            type: a.event || i,
            escapeConnect: n,
            batch: c
        } : c[0], this[kc] = !1, !t && this._messageCenter.trigger(u.type, u);
    }
    function Cr(t) {
        for (var e = this._pendingActions; e.length; ) {
            var i = e.shift();
            Sr.call(this, i, t);
        }
    }
    function kr(t) {
        !t && this.trigger("updated");
    }
    function Tr(t, e, r, a) {
        function i(t) {
            var e = "_ec_" + t.id + "_" + t.type, i = l[e];
            if (!i) {
                var n = Sc(t.type);
                (i = new (o ? Ku.getClass(n.main, n.sub) : tr.getClass(n.sub))()).init(r, u), l[e] = i, 
                s.push(i), h.add(i.group);
            }
            t.__viewId = i.__id = e, i.__alive = !0, i.__model = t, i.group.__ecComponentInfo = {
                mainType: t.mainType,
                index: t.componentIndex
            }, !o && a.prepareView(i, t, r, u);
        }
        for (var o = "component" === e, s = o ? t._componentsViews : t._chartsViews, l = o ? t._componentsMap : t._chartsMap, h = t._zr, u = t._api, n = 0; n < s.length; n++) s[n].__alive = !1;
        o ? r.eachComponent(function(t, e) {
            "series" !== t && i(e);
        }) : r.eachSeries(i);
        for (n = 0; n < s.length; ) {
            var c = s[n];
            c.__alive ? n++ : (!o && c.renderTask.dispose(), h.remove(c.group), c.dispose(r, u), 
            s.splice(n, 1), delete l[c.__id], c.__id = c.group.__ecComponentInfo = null);
        }
    }
    function Ir(t) {
        t.clearColorPalette(), t.eachSeries(function(t) {
            t.clearColorPalette();
        });
    }
    function Dr(t, e, i, n) {
        var r, a, o, s, l;
        r = t, a = e, o = i, s = n, wc(l || r._componentsViews, function(t) {
            var e = t.__model;
            t.render(e, a, o, s), Pr(e, t);
        }), wc(t._chartsViews, function(t) {
            t.__alive = !1;
        }), Ar(t, e, i, n), wc(t._chartsViews, function(t) {
            t.__alive || t.remove(e, i);
        });
    }
    function Ar(a, t, e, o, s) {
        var l, i, n, r, h, u = a._scheduler;
        t.eachSeries(function(t) {
            var e = a._chartsMap[t.__viewId];
            e.__alive = !0;
            var i, n, r = e.renderTask;
            u.updatePayload(r, o), s && s.get(t.uid) && r.dirty(), l |= r.perform(u.getPerformArgs(r)), 
            e.group.silent = !!t.get("silent"), Pr(t, e), i = e, n = t.get("blendMode") || null, 
            i.group.traverse(function(t) {
                t.isGroup || t.style.blend !== n && t.setStyle("blend", n), t.eachPendingDisplayable && t.eachPendingDisplayable(function(t) {
                    t.setStyle("blend", n);
                });
            });
        }), u.unfinished |= l, i = a._zr, n = t, r = i.storage, h = 0, r.traverse(function(t) {
            t.isGroup || h++;
        }), h > n.get("hoverLayerThreshold") && !ko.node && r.traverse(function(t) {
            t.isGroup || (t.useHoverLayer = !0);
        }), oc(a._zr.dom, t);
    }
    function Lr(e, i) {
        wc(Bc, function(t) {
            t(e, i);
        });
    }
    function Pr(t, e) {
        var i = t.get("z"), n = t.get("zlevel");
        e.group.traverse(function(t) {
            "group" !== t.type && (null != i && (t.z = i), null != n && (t.zlevel = n));
        });
    }
    function Or(t) {
        Wc[t] = !1;
    }
    function Er(t) {
        return Vc[(e = t, i = qc, e.getAttribute ? e.getAttribute(i) : e[i])];
        var e, i;
    }
    function Rr(t, e) {
        zc[t] = e;
    }
    function Br(t) {
        Rc.push(t);
    }
    function Nr(t, e) {
        Wr(Ec, t, e, 1e3);
    }
    function zr(t, e, i) {
        "function" == typeof e && (i = e, e = "");
        var n = Mc(t) ? t.type : [ t, t = {
            event: e
        } ][0];
        t.event = (t.event || n).toLowerCase(), e = t.event, xc(Ic.test(n) && Ic.test(e)), 
        Pc[n] || (Pc[n] = {
            action: i,
            actionInfo: t
        }), Oc[e] = n;
    }
    function Fr(t, e) {
        Wr(Nc, t, e, 1e3, "layout");
    }
    function Vr(t, e) {
        Wr(Nc, t, e, 3e3, "visual");
    }
    function Wr(t, e, i, n, r) {
        (bc(e) || Mc(e)) && (i = e, e = n);
        var a = ar.wrapStageHandler(i, r);
        return a.__prio = e, a.__raw = i, t.push(a), a;
    }
    function Hr(t, e) {
        Fc[t] = e;
    }
    function Gr(t) {
        return Ku.extend(t);
    }
    function qr(t) {
        return t;
    }
    function Xr(t, e, i, n, r) {
        this._old = t, this._new = e, this._oldKeyGetter = i || qr, this._newKeyGetter = n || qr, 
        this.context = r;
    }
    function Ur(t, e, i, n, r) {
        for (var a = 0; a < t.length; a++) {
            var o = "_ec_" + r[n](t[a], a), s = e[o];
            null == s ? (i.push(o), e[o] = a) : (s.length || (e[o] = s = [ s ]), s.push(a));
        }
    }
    function Yr(t) {
        return 65535 < t._rawCount ? Kc : Qc;
    }
    function jr(e, i) {
        N(Jc.concat(i.__wrappedMethods || []), function(t) {
            i.hasOwnProperty(t) && (e[t] = i[t]);
        }), e.__wrappedMethods = i.__wrappedMethods, N(td, function(t) {
            e[t] = b(i[t]);
        }), e._calculationInfo = D(i._calculationInfo);
    }
    function Zr(t, e, i) {
        var n;
        if (null != e) {
            var r = t._chunkSize, a = Math.floor(i / r), o = i % r, s = t.dimensions[e], l = t._storage[s][a];
            if (l) {
                n = l[o];
                var h = t._dimensionInfos[s].ordinalMeta;
                h && h.categories.length && (n = h.categories[n]);
            }
        }
        return n;
    }
    function $r(t) {
        return t;
    }
    function Kr(t) {
        return t < this._count && 0 <= t ? this._indices[t] : -1;
    }
    function Qr(t, e) {
        var i = t._idList[e];
        return null == i && (i = Zr(t, t._idDimIdx, e)), null == i && (i = "e\0\0" + e), 
        i;
    }
    function Jr(t) {
        return M(t) || (t = [ t ]), t;
    }
    function ta(t, e) {
        var i = t.dimensions, n = new ed(I(i, t.getDimensionInfo, t), t.hostModel);
        jr(n, t);
        for (var r = n._storage = {}, a = t._storage, o = 0; o < i.length; o++) {
            var s = i[o];
            a[s] && (0 <= d(e, s) ? (r[s] = ea(a[s]), n._rawExtent[s] = [ 1 / 0, -1 / 0 ], n._extent[s] = null) : r[s] = a[s]);
        }
        return n;
    }
    function ea(t) {
        for (var e = new Array(t.length), i = 0; i < t.length; i++) e[i] = (n = t[i], r = void 0, 
        (r = n.constructor) === Array ? n.slice() : new r(n));
        var n, r;
        return e;
    }
    function ia(t, e, i) {
        function l(t, e, i) {
            null != Yc.get(e) ? t.otherDims[e] = i : (t.coordDim = e, t.coordDimIndex = i, a.set(e, !0));
        }
        gn.isInstance(e) || (e = gn.seriesDataToSource(e)), i = i || {}, t = (t || []).slice();
        for (var n = (i.dimsDef || []).slice(), h = O(i.encodeDef), r = O(), a = O(), u = [], o = function(t, e, i, n) {
            var r = Math.max(t.dimensionsDetectCount || 1, e.length, i.length, n || 0);
            return N(e, function(t) {
                var e = t.dimsDef;
                e && (r = Math.max(r, e.length));
            }), r;
        }(e, t, n, i.dimCount), s = 0; s < o; s++) {
            var c = n[s] = D({}, k(n[s]) ? n[s] : {
                name: n[s]
            }), d = c.name, f = u[s] = {
                otherDims: {}
            };
            null != d && null == r.get(d) && (f.name = f.displayName = d, r.set(d, s)), null != c.type && (f.type = c.type), 
            null != c.displayName && (f.displayName = c.displayName);
        }
        h.each(function(t, i) {
            t = Te(t).slice();
            var n = h.set(i, []);
            N(t, function(t, e) {
                C(t) && (t = r.get(t)), null != t && t < o && (n[e] = t, l(u[t], i, e));
            });
        });
        var p = 0;
        N(t, function(r) {
            var a, o, s;
            if (C(r)) a = r, r = {}; else {
                a = r.name;
                var t = r.ordinalMeta;
                r.ordinalMeta = null, (r = b(r)).ordinalMeta = t, o = r.dimsDef, s = r.otherDims, 
                r.name = r.coordDim = r.coordDimIndex = r.dimsDef = r.otherDims = null;
            }
            var e = Te(h.get(a));
            if (!e.length) for (var i = 0; i < (o && o.length || 1); i++) {
                for (;p < u.length && null != u[p].coordDim; ) p++;
                p < u.length && e.push(p++);
            }
            N(e, function(t, e) {
                var i = u[t];
                if (l(T(i, r), a, e), null == i.name && o) {
                    var n = o[e];
                    !k(n) && (n = {
                        name: n
                    }), i.name = i.displayName = n.name, i.defaultTooltip = n.defaultTooltip;
                }
                s && T(i.otherDims, s);
            });
        });
        var g, v, m = i.generateCoord, y = i.generateCoordCount, _ = null != y;
        y = m ? y || 1 : 0;
        for (var x = m || "value", w = 0; w < o; w++) {
            null == (f = u[w] = u[w] || {}).coordDim && (f.coordDim = na(x, a, _), f.coordDimIndex = 0, 
            (!m || y <= 0) && (f.isExtraCoord = !0), y--), null == f.name && (f.name = na(f.coordDim, r)), 
            null == f.type && (g = e, v = w, f.name, _n(g.data, g.sourceFormat, g.seriesLayoutBy, g.dimensionsDefine, g.startIndex, v)) && (f.type = "ordinal");
        }
        return u;
    }
    function na(t, e, i) {
        if (i || null != e.get(t)) {
            for (var n = 0; null != e.get(t + n); ) n++;
            t += n;
        }
        return e.set(t, !0), t;
    }
    function ra(t, e) {
        return !!e && e === t.getCalculationInfo("stackedDimension");
    }
    function aa(t, e, i) {
        i = i || {}, gn.isInstance(t) || (t = gn.seriesDataToSource(t));
        var n, r = e.get("coordinateSystem"), a = Sn.get(r), o = fn(e);
        o && (n = I(o.coordSysDims, function(t) {
            var e, i = {
                name: t
            }, n = o.axisMap.get(t);
            if (n) {
                var r = n.get("type");
                i.type = "category" === (e = r) ? "ordinal" : "time" === e ? "time" : "float";
            }
            return i;
        })), n || (n = a && (a.getDimensionsInfo ? a.getDimensionsInfo() : a.dimensions.slice()) || [ "x", "y" ]);
        var s, l, h = rd(t, {
            coordDimensions: n,
            generateCoord: i.generateCoord
        });
        o && N(h, function(t, e) {
            var i = t.coordDim, n = o.categoryAxisMap.get(i);
            n && (null == s && (s = e), t.ordinalMeta = n.getOrdinalMeta()), null != t.otherDims.itemName && (l = !0);
        }), l || null == s || (h[s].otherDims.itemName = 0);
        var u = function(t, i, e) {
            var n, r, a, o, s = (e = e || {}).byIndex, l = e.stackedCoordDimension, h = !(!t || !t.get("stack"));
            if (N(i, function(t, e) {
                C(t) && (i[e] = t = {
                    name: t
                }), h && !t.isExtraCoord && (s || n || !t.ordinalMeta || (n = t), r || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (r = t));
            }), !r || s || n || (s = !0), r) {
                a = "__\0ecstackresult", o = "__\0ecstackedover", n && (n.createInvertedIndices = !0);
                var u = r.coordDim, c = r.type, d = 0;
                N(i, function(t) {
                    t.coordDim === u && d++;
                }), i.push({
                    name: a,
                    coordDim: u,
                    coordDimIndex: d,
                    type: c,
                    isExtraCoord: !0,
                    isCalculationCoord: !0
                }), d++, i.push({
                    name: o,
                    coordDim: o,
                    coordDimIndex: d,
                    type: c,
                    isExtraCoord: !0,
                    isCalculationCoord: !0
                });
            }
            return {
                stackedDimension: r && r.name,
                stackedByDimension: n && n.name,
                isStackedByIndex: s,
                stackedOverDimension: o,
                stackResultDimension: a
            };
        }(e, h), c = new ed(h, e);
        c.setCalculationInfo(u);
        var d = null != s && function(t) {
            if (t.sourceFormat === vu) {
                var e = function(t) {
                    for (var e = 0; e < t.length && null == t[e]; ) e++;
                    return t[e];
                }(t.data || []);
                return null != e && !M(De(e));
            }
        }(t) ? function(t, e, i, n) {
            return n === s ? i : this.defaultDimValueGetter(t, e, i, n);
        } : null;
        return c.hasItemOption = !1, c.initData(t, null, d), c;
    }
    function oa(t, e) {
        if ("image" !== this.type) {
            var i = this.style, n = this.shape;
            n && "line" === n.symbolType ? i.stroke = t : this.__isEmptyBrush ? (i.stroke = t, 
            i.fill = e || "#fff") : (i.fill && (i.fill = t), i.stroke && (i.stroke = t)), this.dirty(!1);
        }
    }
    function sa(t, e, i, n, r, a, o) {
        var s, l, h, u, c, d = 0 === t.indexOf("empty");
        return d && (t = t.substr(5, 1).toLowerCase() + t.substr(6)), (s = 0 === t.indexOf("image://") ? (l = t.slice(8), 
        h = new St(e, i, n, r), u = o ? "center" : "cover", c = new ge({
            style: {
                image: l,
                x: h.x,
                y: h.y,
                width: h.width,
                height: h.height
            },
            onload: function(t) {
                if ("center" === u) {
                    var e = {
                        width: t.width,
                        height: t.height
                    };
                    c.setStyle(bi(h, e));
                }
            }
        })) : 0 === t.indexOf("path://") ? wi(t.slice(7), {}, new St(e, i, n, r), o ? "center" : "cover") : new cd({
            shape: {
                symbolType: t,
                x: e,
                y: i,
                width: n,
                height: r
            }
        })).__isEmptyBrush = d, s.setColor = oa, s.setColor(a), s;
    }
    function la(t, e, i) {
        Ms.call(this), this.updateData(t, e, i);
    }
    function ha(t) {
        return [ t[0] / 2, t[1] / 2 ];
    }
    function ua(t, e) {
        this.parent.drift(t, e);
    }
    function ca(t) {
        this.group = new Ms(), this._symbolCtor = t || la;
    }
    function da(t, e, i, n) {
        return !(!e || isNaN(e[0]) || isNaN(e[1]) || n.isIgnore && n.isIgnore(i) || n.clipShape && !n.clipShape.contain(e[0], e[1]) || "none" === t.getItemVisual(i, "symbol"));
    }
    function fa(t) {
        return null == t || k(t) || (t = {
            isIgnore: t
        }), t || {};
    }
    function pa(t) {
        var e = t.hostModel;
        return {
            itemStyle: e.getModel("itemStyle").getItemStyle([ "color" ]),
            hoverItemStyle: e.getModel("emphasis.itemStyle").getItemStyle(),
            symbolRotate: e.get("symbolRotate"),
            symbolOffset: e.get("symbolOffset"),
            hoverAnimation: e.get("hoverAnimation"),
            labelModel: e.getModel("label"),
            hoverLabelModel: e.getModel("emphasis.label"),
            cursorStyle: e.get("cursor")
        };
    }
    function ga(t, e, i) {
        var n, r, a, o, s = t.getBaseAxis(), l = t.getOtherAxis(s), h = (r = i, a = 0, o = l.scale.getExtent(), 
        "start" === r ? a = o[0] : "end" === r ? a = o[1] : 0 < o[0] ? a = o[0] : o[1] < 0 && (a = o[1]), 
        a), u = s.dim, c = l.dim, d = e.mapDimension(c), f = e.mapDimension(u), p = "x" === c || "radius" === c ? 1 : 0, g = I(t.dimensions, function(t) {
            return e.mapDimension(t);
        }), v = e.getCalculationInfo("stackResultDimension");
        return (n |= ra(e, g[0])) && (g[0] = v), (n |= ra(e, g[1])) && (g[1] = v), {
            dataDimsForPoint: g,
            valueStart: h,
            valueAxisDim: c,
            baseAxisDim: u,
            stacked: !!n,
            valueDim: d,
            baseDim: f,
            baseDataOffset: p,
            stackedOverDimension: e.getCalculationInfo("stackedOverDimension")
        };
    }
    function va(t, e, i, n) {
        var r = NaN;
        t.stacked && (r = i.get(i.getCalculationInfo("stackedOverDimension"), n)), isNaN(r) && (r = t.valueStart);
        var a = t.baseDataOffset, o = [];
        return o[a] = i.get(t.baseDim, n), o[1 - a] = r, e.dataToPoint(o);
    }
    function ma(t) {
        return isNaN(t[0]) || isNaN(t[1]);
    }
    function ya(t, e, i, n, r, a, o, s, l, h) {
        return "none" !== h && h ? function(t, e, i, n, r, a, o, s, l, h, u) {
            for (var c = 0, d = i, f = 0; f < n; f++) {
                var p = e[d];
                if (r <= d || d < 0) break;
                if (ma(p)) {
                    if (u) {
                        d += a;
                        continue;
                    }
                    break;
                }
                if (d === i) t[0 < a ? "moveTo" : "lineTo"](p[0], p[1]); else if (0 < l) {
                    var g = e[c], v = "y" === h ? 1 : 0, m = (p[v] - g[v]) * l;
                    bd(Sd, g), Sd[v] = g[v] + m, bd(Cd, p), Cd[v] = p[v] - m, t.bezierCurveTo(Sd[0], Sd[1], Cd[0], Cd[1], p[0], p[1]);
                } else t.lineTo(p[0], p[1]);
                c = d, d += a;
            }
            return f;
        }.apply(this, arguments) : function(t, e, i, n, r, a, o, s, l, h, u) {
            for (var c = 0, d = i, f = 0; f < n; f++) {
                var p = e[d];
                if (r <= d || d < 0) break;
                if (ma(p)) {
                    if (u) {
                        d += a;
                        continue;
                    }
                    break;
                }
                if (d === i) t[0 < a ? "moveTo" : "lineTo"](p[0], p[1]), bd(Sd, p); else if (0 < l) {
                    var g = d + a, v = e[g];
                    if (u) for (;v && ma(e[g]); ) v = e[g += a];
                    var m = .5, y = e[c], v = e[g];
                    if (!v || ma(v)) bd(Cd, p); else {
                        var _, x;
                        if (ma(v) && !u && (v = p), B(Md, v, y), "x" === h || "y" === h) {
                            var w = "x" === h ? 0 : 1;
                            _ = Math.abs(p[w] - y[w]), x = Math.abs(p[w] - v[w]);
                        } else _ = Wo(p, y), x = Wo(p, v);
                        wd(Cd, p, Md, -l * (1 - (m = x / (x + _))));
                    }
                    _d(Sd, Sd, s), xd(Sd, Sd, o), _d(Cd, Cd, s), xd(Cd, Cd, o), t.bezierCurveTo(Sd[0], Sd[1], Cd[0], Cd[1], p[0], p[1]), 
                    wd(Sd, p, Md, l * m);
                } else t.lineTo(p[0], p[1]);
                c = d, d += a;
            }
            return f;
        }.apply(this, arguments);
    }
    function _a(t, e) {
        var i = [ 1 / 0, 1 / 0 ], n = [ -1 / 0, -1 / 0 ];
        if (e) for (var r = 0; r < t.length; r++) {
            var a = t[r];
            a[0] < i[0] && (i[0] = a[0]), a[1] < i[1] && (i[1] = a[1]), a[0] > n[0] && (n[0] = a[0]), 
            a[1] > n[1] && (n[1] = a[1]);
        }
        return {
            min: e ? i : n,
            max: e ? n : i
        };
    }
    function xa(t, e) {
        if (t.length === e.length) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i], r = e[i];
                if (n[0] !== r[0] || n[1] !== r[1]) return;
            }
            return !0;
        }
    }
    function wa(t) {
        return "number" == typeof t ? t : t ? .5 : 0;
    }
    function ba(t) {
        var e = t.getGlobalExtent();
        if (t.onBand) {
            var i = t.getBandWidth() / 2 - 1, n = e[1] > e[0] ? 1 : -1;
            e[0] += n * i, e[1] -= n * i;
        }
        return e;
    }
    function Ma(t, e, i, n) {
        return "polar" === t.type ? function(t, e, i, n) {
            var r = t.getAngleAxis(), a = t.getRadiusAxis().getExtent().slice();
            a[0] > a[1] && a.reverse();
            var o = r.getExtent(), s = Math.PI / 180;
            i && (a[0] -= .5, a[1] += .5);
            var l = new Lh({
                shape: {
                    cx: Ki(t.cx, 1),
                    cy: Ki(t.cy, 1),
                    r0: Ki(a[0], 1),
                    r: Ki(a[1], 1),
                    startAngle: -o[0] * s,
                    endAngle: -o[1] * s,
                    clockwise: r.inverse
                }
            });
            return e && (l.shape.endAngle = -o[0] * s, qi(l, {
                shape: {
                    endAngle: -o[1] * s
                }
            }, n)), l;
        }(t, e, i, n) : function(t, e, i, n) {
            var r = ba(t.getAxis("x")), a = ba(t.getAxis("y")), o = t.getBaseAxis().isHorizontal(), s = Math.min(r[0], r[1]), l = Math.min(a[0], a[1]), h = Math.max(r[0], r[1]) - s, u = Math.max(a[0], a[1]) - l;
            if (i) s -= .5, h += .5, l -= .5, u += .5; else {
                var c = n.get("lineStyle.width") || 2, d = n.get("clipOverflow") ? c / 2 : Math.max(h, u);
                o ? (l -= d, u += 2 * d) : (s -= d, h += 2 * d);
            }
            var f = new Ph({
                shape: {
                    x: s,
                    y: l,
                    width: h,
                    height: u
                }
            });
            return e && (f.shape[o ? "width" : "height"] = 0, qi(f, {
                shape: {
                    width: h,
                    height: u
                }
            }, n)), f;
        }(t, e, i, n);
    }
    function Sa(t, e, i) {
        for (var n = e.getBaseAxis(), r = "x" === n.dim || "radius" === n.dim ? 0 : 1, a = [], o = 0; o < t.length - 1; o++) {
            var s = t[o + 1], l = t[o];
            a.push(l);
            var h = [];
            switch (i) {
              case "end":
                h[r] = s[r], h[1 - r] = l[1 - r], a.push(h);
                break;

              case "middle":
                var u = (l[r] + s[r]) / 2, c = [];
                h[r] = c[r] = u, h[1 - r] = l[1 - r], c[1 - r] = s[1 - r], a.push(h), a.push(c);
                break;

              default:
                h[r] = l[r], h[1 - r] = s[1 - r], a.push(h);
            }
        }
        return t[o] && a.push(t[o]), a;
    }
    function Ca(t, e, i) {
        var n = t.get("showAllSymbol"), r = "auto" === n;
        if (!n || r) {
            var a = i.getAxesByScale("ordinal")[0];
            if (a && (!r || !function(t, e) {
                var i = t.getExtent(), n = Math.abs(i[1] - i[0]) / t.scale.count();
                isNaN(n) && (n = 0);
                for (var r = e.count(), a = Math.max(1, Math.round(r / 5)), o = 0; o < r; o += a) if (1.5 * la.getSymbolSize(e, o)[t.isHorizontal() ? 1 : 0] > n) return !1;
                return !0;
            }(a, e))) {
                var o = e.mapDimension(a.dim), s = {};
                return N(a.getViewLabels(), function(t) {
                    s[t.tickValue] = 1;
                }), function(t) {
                    return !s.hasOwnProperty(e.get(o, t));
                };
            }
        }
    }
    function ka(t) {
        this._setting = t || {}, this._extent = [ 1 / 0, -1 / 0 ], this._interval = 0, this.init && this.init.apply(this, arguments);
    }
    function Ta(t) {
        this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, 
        this._map;
    }
    function Ia(t) {
        return t._map || (t._map = O(t.categories));
    }
    function Da(t) {
        return k(t) && null != t.value ? t.value : t + "";
    }
    function Aa(t) {
        return Qi(t) + 2;
    }
    function La(t, e, i) {
        t[e] = Math.max(Math.min(t[e], i[1]), i[0]);
    }
    function Pa(t, e) {
        !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), La(t, 0, e), 
        La(t, 1, e), t[0] > t[1] && (t[0] = t[1]);
    }
    function Oa(t) {
        return t.get("stack") || Bd + t.seriesIndex;
    }
    function Ea(t) {
        return t.dim + t.index;
    }
    function Ra(t) {
        var h = [];
        return N(t, function(t) {
            var e = t.getData(), i = t.coordinateSystem.getBaseAxis(), n = i.getExtent(), r = "category" === i.type ? i.getBandWidth() : Math.abs(n[1] - n[0]) / e.count(), a = $i(t.get("barWidth"), r), o = $i(t.get("barMaxWidth"), r), s = t.get("barGap"), l = t.get("barCategoryGap");
            h.push({
                bandWidth: r,
                barWidth: a,
                barMaxWidth: o,
                barGap: s,
                barCategoryGap: l,
                axisKey: Ea(i),
                stackId: Oa(t)
            });
        }), function(t) {
            var u = {};
            N(t, function(t) {
                var e = t.axisKey, i = t.bandWidth, n = u[e] || {
                    bandWidth: i,
                    remainedWidth: i,
                    autoWidthCount: 0,
                    categoryGap: "20%",
                    gap: "30%",
                    stacks: {}
                }, r = n.stacks;
                u[e] = n;
                var a = t.stackId;
                r[a] || n.autoWidthCount++, r[a] = r[a] || {
                    width: 0,
                    maxWidth: 0
                };
                var o = t.barWidth;
                o && !r[a].width && (r[a].width = o, o = Math.min(n.remainedWidth, o), n.remainedWidth -= o);
                var s = t.barMaxWidth;
                s && (r[a].maxWidth = s);
                var l = t.barGap;
                null != l && (n.gap = l);
                var h = t.barCategoryGap;
                null != h && (n.categoryGap = h);
            });
            var d = {};
            return N(u, function(t, i) {
                d[i] = {};
                var e = t.stacks, n = t.bandWidth, r = $i(t.categoryGap, n), a = $i(t.gap, 1), o = t.remainedWidth, s = t.autoWidthCount, l = (o - r) / (s + (s - 1) * a);
                l = Math.max(l, 0), N(e, function(t) {
                    var e = t.maxWidth;
                    e && e < l && (e = Math.min(e, o), t.width && (e = Math.min(e, t.width)), o -= e, 
                    t.width = e, s--);
                }), l = (o - r) / (s + (s - 1) * a), l = Math.max(l, 0);
                var h, u = 0;
                N(e, function(t) {
                    t.width || (t.width = l), u += (h = t).width * (1 + a);
                }), h && (u -= h.width * a);
                var c = -u / 2;
                N(e, function(t, e) {
                    d[i][e] = d[i][e] || {
                        offset: c,
                        width: t.width
                    }, c += t.width * (1 + a);
                });
            }), d;
        }(h);
    }
    function Ba(t, e, i) {
        if (t && e) {
            var n = t[Ea(e)];
            return null != n && null != i && (n = n[Oa(i)]), n;
        }
    }
    function Na(t) {
        return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type;
    }
    function za(t) {
        return t.pipelineContext && t.pipelineContext.large;
    }
    function Fa(t, e) {
        return Yd(t, Ud(e));
    }
    function Va(t, e) {
        var i, n, r, a = t.type, o = e.getMin(), s = e.getMax(), l = null != o, h = null != s, u = t.getExtent();
        "ordinal" === a ? i = e.getCategories().length : (M(n = e.get("boundaryGap")) || (n = [ n || 0, n || 0 ]), 
        "boolean" == typeof n[0] && (n = [ 0, 0 ]), n[0] = $i(n[0], 1), n[1] = $i(n[1], 1), 
        r = u[1] - u[0] || Math.abs(u[0])), null == o && (o = "ordinal" === a ? i ? 0 : NaN : u[0] - n[0] * r), 
        null == s && (s = "ordinal" === a ? i ? i - 1 : NaN : u[1] + n[1] * r), "dataMin" === o ? o = u[0] : "function" == typeof o && (o = o({
            min: u[0],
            max: u[1]
        })), "dataMax" === s ? s = u[1] : "function" == typeof s && (s = s({
            min: u[0],
            max: u[1]
        })), (null == o || !isFinite(o)) && (o = NaN), (null == s || !isFinite(s)) && (s = NaN), 
        t.setBlank(y(o) || y(s) || "ordinal" === a && !t.getOrdinalMeta().categories.length), 
        e.getNeedCrossZero() && (0 < o && 0 < s && !l && (o = 0), o < 0 && s < 0 && !h && (s = 0));
        var c, d, f = e.ecModel;
        if (f && "time" === a) {
            var p, g = (c = "bar", d = [], f.eachSeriesByType(c, function(t) {
                Na(t) && !za(t) && d.push(t);
            }), d);
            if (N(g, function(t) {
                p |= t.getBaseAxis() === e.axis;
            }), p) {
                var v = Ra(g), m = function(t, e, i, n) {
                    var r = i.axis.getExtent(), a = r[1] - r[0], o = Ba(n, i.axis);
                    if (void 0 === o) return {
                        min: t,
                        max: e
                    };
                    var s = 1 / 0;
                    N(o, function(t) {
                        s = Math.min(t.offset, s);
                    });
                    var l = -1 / 0;
                    N(o, function(t) {
                        l = Math.max(t.offset + t.width, l);
                    }), s = Math.abs(s), l = Math.abs(l);
                    var h = s + l, u = e - t, c = u / (1 - (s + l) / a) - u;
                    return {
                        min: t -= c * (s / h),
                        max: e += c * (l / h)
                    };
                }(o, s, e, v);
                o = m.min, s = m.max;
            }
        }
        return [ o, s ];
    }
    function Wa(t, e) {
        var i = Va(t, e), n = null != e.getMin(), r = null != e.getMax(), a = e.get("splitNumber");
        "log" === t.type && (t.base = e.get("logBase"));
        var o = t.type;
        t.setExtent(i[0], i[1]), t.niceExtent({
            splitNumber: a,
            fixMin: n,
            fixMax: r,
            minInterval: "interval" === o || "time" === o ? e.get("minInterval") : null,
            maxInterval: "interval" === o || "time" === o ? e.get("maxInterval") : null
        });
        var s = e.get("interval");
        null != s && t.setInterval && t.setInterval(s);
    }
    function Ha(r) {
        var e, a = r.getLabelModel().get("formatter"), o = "category" === r.type ? r.scale.getExtent()[0] : null;
        return "string" == typeof a ? (e = a, a = function(t) {
            return e.replace("{value}", null != t ? t : "");
        }) : "function" == typeof a ? function(t, e) {
            return null != o && (e = t - o), a((n = t, "category" === (i = r).type ? i.scale.getLabel(n) : n), e);
            var i, n;
        } : function(t) {
            return r.scale.getLabel(t);
        };
    }
    function Ga(t) {
        return this._axes[t];
    }
    function qa(t) {
        Jd.call(this, t);
    }
    function Xa(t) {
        return "category" === t.type ? (a = (r = t).getLabelModel(), o = Ya(r, a), !a.get("show") || r.scale.isBlank() ? {
            labels: [],
            labelCategoryInterval: o.labelCategoryInterval
        } : o) : (e = (i = t).scale.getTicks(), n = Ha(i), {
            labels: I(e, function(t, e) {
                return {
                    formattedLabel: n(t, e),
                    rawLabel: i.scale.getLabel(t),
                    tickValue: t
                };
            })
        });
        var i, e, n, r, a, o;
    }
    function Ua(t, e) {
        return "category" === t.type ? function(t, e) {
            var i, n, r = ja(t, "ticks"), a = Ja(e), o = Za(r, a);
            if (o) return o;
            if ((!e.get("show") || t.scale.isBlank()) && (i = []), S(a)) i = Qa(t, a, !0); else if ("auto" === a) {
                var s = Ya(t, t.getLabelModel());
                n = s.labelCategoryInterval, i = I(s.labels, function(t) {
                    return t.tickValue;
                });
            } else i = Ka(t, n = a, !0);
            return $a(r, a, {
                ticks: i,
                tickCategoryInterval: n
            });
        }(t, e) : {
            ticks: t.scale.getTicks()
        };
    }
    function Ya(t, e) {
        var i, n, r, a, o = ja(t, "labels"), s = Ja(e), l = Za(o, s);
        return l || (S(s) ? i = Qa(t, s) : i = Ka(t, n = "auto" === s ? null != (a = tf(r = t).autoInterval) ? a : tf(r).autoInterval = r.calculateCategoryInterval() : s), 
        $a(o, s, {
            labels: i,
            labelCategoryInterval: n
        }));
    }
    function ja(t, e) {
        return tf(t)[e] || (tf(t)[e] = []);
    }
    function Za(t, e) {
        for (var i = 0; i < t.length; i++) if (t[i].key === e) return t[i].value;
    }
    function $a(t, e, i) {
        return t.push({
            key: e,
            value: i
        }), i;
    }
    function Ka(t, e, i) {
        function n(t) {
            l.push(i ? t : {
                formattedLabel: r(t),
                rawLabel: a.getLabel(t),
                tickValue: t
            });
        }
        var r = Ha(t), a = t.scale, o = a.getExtent(), s = t.getLabelModel(), l = [], h = Math.max((e || 0) + 1, 1), u = o[0], c = a.count();
        0 !== u && 1 < h && 2 < c / h && (u = Math.round(Math.ceil(u / h) * h));
        var d = s.get("showMinLabel"), f = s.get("showMaxLabel");
        d && u !== o[0] && n(o[0]);
        for (var p = u; p <= o[1]; p += h) n(p);
        return f && p !== o[1] && n(o[1]), l;
    }
    function Qa(t, i, n) {
        var r = t.scale, a = Ha(t), o = [];
        return N(r.getTicks(), function(t) {
            var e = r.getLabel(t);
            i(t, e) && o.push(n ? t : {
                formattedLabel: a(t),
                rawLabel: e,
                tickValue: t
            });
        }), o;
    }
    function Ja(t) {
        var e = t.get("interval");
        return null == e ? "auto" : e;
    }
    function to(t, e) {
        var i = (t[1] - t[0]) / e / 2;
        t[0] += i, t[1] -= i;
    }
    function eo(t, e) {
        return e.type || (e.data ? "category" : "value");
    }
    function io(t, e) {
        return t.getCoordSysModel() === e;
    }
    function no(t, e, i) {
        this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], 
        this._initCartesian(t, e, i), this.model = t;
    }
    function ro(t, e, i) {
        i.getAxesOnZeroOf = function() {
            return n ? [ n ] : [];
        };
        var n, r = t[e], a = i.model, o = a.get("axisLine.onZero"), s = a.get("axisLine.onZeroAxisIndex");
        if (o) {
            if (null != s) return void (ao(r[s]) && (n = r[s]));
            for (var l in r) if (r.hasOwnProperty(l) && ao(r[l])) {
                n = r[l];
                break;
            }
        }
    }
    function ao(t) {
        return t && "category" !== t.type && "time" !== t.type && (e = t.scale.getExtent(), 
        i = e[0], n = e[1], !(0 < i && 0 < n || i < 0 && n < 0));
        var e, i, n;
    }
    function oo(e) {
        return I(ff, function(t) {
            return e.getReferringComponents(t)[0];
        });
    }
    function so(t) {
        return "cartesian2d" === t.get("coordinateSystem");
    }
    function lo(t) {
        var e = {
            componentType: t.mainType
        };
        return e[t.mainType + "Index"] = t.componentIndex, e;
    }
    function ho(t) {
        var e = t.get("tooltip");
        return t.get("silent") || !(t.get("triggerEvent") || e && e.show);
    }
    function uo(t) {
        t && (t.ignore = !0);
    }
    function co(t, e) {
        var i = t && t.getBoundingRect().clone(), n = e && e.getBoundingRect().clone();
        if (i && n) {
            var r = Z([]);
            return Q(r, r, -t.rotation), i.applyTransform($([], r, t.getLocalTransform())), 
            n.applyTransform($([], r, e.getLocalTransform())), i.intersect(n);
        }
    }
    function fo(t) {
        return "middle" === t || "center" === t;
    }
    function po(t) {
        var e, i = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
        return i && i.axesInfo[(e = t, e.type + "||" + e.id)];
    }
    function go(t, e, i, n, r, a) {
        var o, s = yf.getAxisPointerClass(t.axisPointerClass);
        if (s) {
            var l = (o = po(e)) && o.axisPointerModel;
            l ? (t._axisPointer || (t._axisPointer = new s())).render(e, l, n, a) : vo(t, n);
        }
    }
    function vo(t, e, i) {
        var n = t._axisPointer;
        n && n.dispose(e, i), t._axisPointer = null;
    }
    function mo(t, e) {
        return e && ("string" == typeof e ? t = e.replace("{value}", null != t ? t : "") : "function" == typeof e && (t = e(t))), 
        t;
    }
    var yo, _o, xo, wo, bo, Mo, So = 2311, Co = function() {
        return So++;
    }, ko = "object" == ("undefined" == typeof wx ? "undefined" : _typeof(wx)) && "function" == typeof wx.getSystemInfoSync ? {
        browser: {},
        os: {},
        node: !1,
        wxa: !0,
        canvasSupported: !0,
        svgSupported: !1,
        touchEventsSupported: !0
    } : "undefined" == typeof document && "undefined" != typeof self ? {
        browser: {},
        os: {},
        node: !1,
        worker: !0,
        canvasSupported: !0
    } : "undefined" == typeof navigator ? {
        browser: {},
        os: {},
        node: !0,
        worker: !1,
        canvasSupported: !0,
        svgSupported: !0
    } : (yo = navigator.userAgent, _o = {}, xo = yo.match(/Firefox\/([\d.]+)/), wo = yo.match(/MSIE\s([\d.]+)/) || yo.match(/Trident\/.+?rv:(([\d.]+))/), 
    bo = yo.match(/Edge\/([\d.]+)/), Mo = /micromessenger/i.test(yo), xo && (_o.firefox = !0, 
    _o.version = xo[1]), wo && (_o.ie = !0, _o.version = wo[1]), bo && (_o.edge = !0, 
    _o.version = bo[1]), Mo && (_o.weChat = !0), {
        browser: _o,
        os: {},
        node: !1,
        canvasSupported: !!document.createElement("canvas").getContext,
        svgSupported: "undefined" != typeof SVGRect,
        touchEventsSupported: "ontouchstart" in window && !_o.ie && !_o.edge,
        pointerEventsSupported: "onpointerdown" in window && (_o.edge || _o.ie && 11 <= _o.version)
    }), To = {
        "[object Function]": 1,
        "[object RegExp]": 1,
        "[object Date]": 1,
        "[object Error]": 1,
        "[object CanvasGradient]": 1,
        "[object CanvasPattern]": 1,
        "[object Image]": 1,
        "[object Canvas]": 1
    }, Io = {
        "[object Int8Array]": 1,
        "[object Uint8Array]": 1,
        "[object Uint8ClampedArray]": 1,
        "[object Int16Array]": 1,
        "[object Uint16Array]": 1,
        "[object Int32Array]": 1,
        "[object Uint32Array]": 1,
        "[object Float32Array]": 1,
        "[object Float64Array]": 1
    }, Do = Object.prototype.toString, Ao = Array.prototype, Lo = Ao.forEach, Po = Ao.filter, Oo = Ao.slice, Eo = Ao.map, Ro = Ao.reduce, Bo = {}, No = function() {
        return Bo.createCanvas();
    };
    Bo.createCanvas = function() {
        return document.createElement("canvas");
    };
    var zo, Fo = "__ec_primitive__";
    _.prototype = {
        constructor: _,
        get: function(t) {
            return this.hasOwnProperty(t) ? this[t] : null;
        },
        set: function(t, e) {
            return this[t] = e;
        },
        each: function(t, e) {
            for (var i in void 0 !== e && (t = c(t, e)), this) this.hasOwnProperty(i) && t(this[i], i);
        },
        removeKey: function(t) {
            delete this[t];
        }
    };
    var Vo = "undefined" == typeof Float32Array ? Array : Float32Array, Wo = V, Ho = function(t, e) {
        return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);
    };
    q.prototype = {
        constructor: q,
        _dragStart: function(t) {
            var e = t.target;
            e && e.draggable && ((this._draggingTarget = e).dragging = !0, this._x = t.offsetX, 
            this._y = t.offsetY, this.dispatchToElement(X(e, t), "dragstart", t.event));
        },
        _drag: function(t) {
            var e = this._draggingTarget;
            if (e) {
                var i = t.offsetX, n = t.offsetY, r = i - this._x, a = n - this._y;
                this._x = i, this._y = n, e.drift(r, a, t), this.dispatchToElement(X(e, t), "drag", t.event);
                var o = this.findHover(i, n, e).target, s = this._dropTarget;
                e !== (this._dropTarget = o) && (s && o !== s && this.dispatchToElement(X(s, t), "dragleave", t.event), 
                o && o !== s && this.dispatchToElement(X(o, t), "dragenter", t.event));
            }
        },
        _dragEnd: function(t) {
            var e = this._draggingTarget;
            e && (e.dragging = !1), this.dispatchToElement(X(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(X(this._dropTarget, t), "drop", t.event), 
            this._draggingTarget = null, this._dropTarget = null;
        }
    };
    var Go = Array.prototype.slice, qo = function() {
        this._$handlers = {};
    };
    qo.prototype = {
        constructor: qo,
        one: function(t, e, i) {
            var n = this._$handlers;
            if (!e || !t) return this;
            n[t] || (n[t] = []);
            for (var r = 0; r < n[t].length; r++) if (n[t][r].h === e) return this;
            return n[t].push({
                h: e,
                one: !0,
                ctx: i || this
            }), this;
        },
        on: function(t, e, i) {
            var n = this._$handlers;
            if (!e || !t) return this;
            n[t] || (n[t] = []);
            for (var r = 0; r < n[t].length; r++) if (n[t][r].h === e) return this;
            return n[t].push({
                h: e,
                one: !1,
                ctx: i || this
            }), this;
        },
        isSilent: function(t) {
            var e = this._$handlers;
            return e[t] && e[t].length;
        },
        off: function(t, e) {
            var i = this._$handlers;
            if (!t) return this._$handlers = {}, this;
            if (e) {
                if (i[t]) {
                    for (var n = [], r = 0, a = i[t].length; r < a; r++) i[t][r].h != e && n.push(i[t][r]);
                    i[t] = n;
                }
                i[t] && 0 === i[t].length && delete i[t];
            } else delete i[t];
            return this;
        },
        trigger: function(t) {
            if (this._$handlers[t]) {
                var e = arguments, i = e.length;
                3 < i && (e = Go.call(e, 1));
                for (var n = this._$handlers[t], r = n.length, a = 0; a < r; ) {
                    switch (i) {
                      case 1:
                        n[a].h.call(n[a].ctx);
                        break;

                      case 2:
                        n[a].h.call(n[a].ctx, e[1]);
                        break;

                      case 3:
                        n[a].h.call(n[a].ctx, e[1], e[2]);
                        break;

                      default:
                        n[a].h.apply(n[a].ctx, e);
                    }
                    n[a].one ? (n.splice(a, 1), r--) : a++;
                }
            }
            return this;
        },
        triggerWithContext: function(t) {
            if (this._$handlers[t]) {
                var e = arguments, i = e.length;
                4 < i && (e = Go.call(e, 1, e.length - 1));
                for (var n = e[e.length - 1], r = this._$handlers[t], a = r.length, o = 0; o < a; ) {
                    switch (i) {
                      case 1:
                        r[o].h.call(n);
                        break;

                      case 2:
                        r[o].h.call(n, e[1]);
                        break;

                      case 3:
                        r[o].h.call(n, e[1], e[2]);
                        break;

                      default:
                        r[o].h.apply(n, e);
                    }
                    r[o].one ? (r.splice(o, 1), a--) : o++;
                }
            }
            return this;
        }
    };
    var Xo = "silent";
    U.prototype.dispose = function() {};
    var Uo = [ "click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu" ], Yo = function(t, e, i, n) {
        qo.call(this), this.storage = t, this.painter = e, this.painterRoot = n, i = i || new U(), 
        this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, 
        q.call(this), this.setHandlerProxy(i);
    };
    Yo.prototype = {
        constructor: Yo,
        setHandlerProxy: function(e) {
            this.proxy && this.proxy.dispose(), e && (N(Uo, function(t) {
                e.on && e.on(t, this[t], this);
            }, this), e.handler = this), this.proxy = e;
        },
        mousemove: function(t) {
            var e = t.zrX, i = t.zrY, n = this._hovered, r = n.target;
            r && !r.__zr && (r = (n = this.findHover(n.x, n.y)).target);
            var a = this._hovered = this.findHover(e, i), o = a.target, s = this.proxy;
            s.setCursor && s.setCursor(o ? o.cursor : "default"), r && o !== r && this.dispatchToElement(n, "mouseout", t), 
            this.dispatchToElement(a, "mousemove", t), o && o !== r && this.dispatchToElement(a, "mouseover", t);
        },
        mouseout: function(t) {
            this.dispatchToElement(this._hovered, "mouseout", t);
            for (var e, i = t.toElement || t.relatedTarget; (i = i && i.parentNode) && 9 != i.nodeType && !(e = i === this.painterRoot); ) ;
            !e && this.trigger("globalout", {
                event: t
            });
        },
        resize: function() {
            this._hovered = {};
        },
        dispatch: function(t, e) {
            var i = this[t];
            i && i.call(this, e);
        },
        dispose: function() {
            this.proxy.dispose(), this.storage = this.proxy = this.painter = null;
        },
        setCursorStyle: function(t) {
            var e = this.proxy;
            e.setCursor && e.setCursor(t);
        },
        dispatchToElement: function(t, e, i) {
            var n, r, a = (t = t || {}).target;
            if (!a || !a.silent) {
                for (var o = "on" + e, s = {
                    type: e,
                    event: r = i,
                    target: (n = t).target,
                    topTarget: n.topTarget,
                    cancelBubble: !1,
                    offsetX: r.zrX,
                    offsetY: r.zrY,
                    gestureEvent: r.gestureEvent,
                    pinchX: r.pinchX,
                    pinchY: r.pinchY,
                    pinchScale: r.pinchScale,
                    wheelDelta: r.zrDelta,
                    zrByTouch: r.zrByTouch,
                    which: r.which
                }; a && (a[o] && (s.cancelBubble = a[o].call(a, s)), a.trigger(e, s), a = a.parent, 
                !s.cancelBubble); ) ;
                s.cancelBubble || (this.trigger(e, s), this.painter && this.painter.eachOtherLayer(function(t) {
                    "function" == typeof t[o] && t[o].call(t, s), t.trigger && t.trigger(e, s);
                }));
            }
        },
        findHover: function(t, e, i) {
            for (var n = this.storage.getDisplayList(), r = {
                x: t,
                y: e
            }, a = n.length - 1; 0 <= a; a--) {
                var o;
                if (n[a] !== i && !n[a].ignore && (o = Y(n[a], t, e)) && (!r.topTarget && (r.topTarget = n[a]), 
                o !== Xo)) {
                    r.target = n[a];
                    break;
                }
            }
            return r;
        }
    }, N([ "click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu" ], function(n) {
        Yo.prototype[n] = function(t) {
            var e = this.findHover(t.zrX, t.zrY), i = e.target;
            if ("mousedown" === n) this._downEl = i, this._downPoint = [ t.zrX, t.zrY ], this._upEl = i; else if ("mouseup" === n) this._upEl = i; else if ("click" === n) {
                if (this._downEl !== this._upEl || !this._downPoint || 4 < Wo(this._downPoint, [ t.zrX, t.zrY ])) return;
                this._downPoint = null;
            }
            this.dispatchToElement(e, n, t);
        };
    }), e(Yo, qo), e(Yo, q);
    var jo = "undefined" == typeof Float32Array ? Array : Float32Array, Zo = Z, $o = function(t) {
        (t = t || {}).position || (this.position = [ 0, 0 ]), null == t.rotation && (this.rotation = 0), 
        t.scale || (this.scale = [ 1, 1 ]), this.origin = this.origin || null;
    }, Ko = $o.prototype;
    Ko.transform = null, Ko.needLocalTransform = function() {
        return tt(this.rotation) || tt(this.position[0]) || tt(this.position[1]) || tt(this.scale[0] - 1) || tt(this.scale[1] - 1);
    }, Ko.updateTransform = function() {
        var t, e, i, n, r, a, o, s, l, h, u, c = this.parent, d = c && c.transform, f = this.needLocalTransform(), p = this.transform;
        return f || d ? (p = p || j(), f ? this.getLocalTransform(p) : Zo(p), d && (f ? $(p, c.transform, p) : (h = p, 
        u = c.transform, h[0] = u[0], h[1] = u[1], h[2] = u[2], h[3] = u[3], h[4] = u[4], 
        h[5] = u[5])), this.transform = p, this.invTransform = this.invTransform || j(), 
        t = this.invTransform, i = (e = p)[0], n = e[2], r = e[4], a = e[1], o = e[3], s = e[5], 
        void ((l = i * o - a * n) && (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -n * l, 
        t[3] = i * l, t[4] = (n * s - o * r) * l, t[5] = (a * r - i * s) * l))) : void (p && Zo(p));
    }, Ko.getLocalTransform = function(t) {
        return $o.getLocalTransform(this, t);
    }, Ko.setTransform = function(t) {
        var e = this.transform, i = t.dpr || 1;
        e ? t.setTransform(i * e[0], i * e[1], i * e[2], i * e[3], i * e[4], i * e[5]) : t.setTransform(i, 0, 0, i, 0, 0);
    }, Ko.restoreTransform = function(t) {
        var e = t.dpr || 1;
        t.setTransform(e, 0, 0, e, 0, 0);
    };
    var Qo = [];
    Ko.decomposeTransform = function() {
        if (this.transform) {
            var t = this.parent, e = this.transform;
            t && t.transform && ($(Qo, t.invTransform, e), e = Qo);
            var i = e[0] * e[0] + e[1] * e[1], n = e[2] * e[2] + e[3] * e[3], r = this.position, a = this.scale;
            tt(i - 1) && (i = Math.sqrt(i)), tt(n - 1) && (n = Math.sqrt(n)), e[0] < 0 && (i = -i), 
            e[3] < 0 && (n = -n), r[0] = e[4], r[1] = e[5], a[0] = i, a[1] = n, this.rotation = Math.atan2(-e[1] / n, e[0] / i);
        }
    }, Ko.getGlobalScale = function() {
        var t = this.transform;
        if (!t) return [ 1, 1 ];
        var e = Math.sqrt(t[0] * t[0] + t[1] * t[1]), i = Math.sqrt(t[2] * t[2] + t[3] * t[3]);
        return t[0] < 0 && (e = -e), t[3] < 0 && (i = -i), [ e, i ];
    }, Ko.transformCoordToLocal = function(t, e) {
        var i = [ t, e ], n = this.invTransform;
        return n && W(i, i, n), i;
    }, Ko.transformCoordToGlobal = function(t, e) {
        var i = [ t, e ], n = this.transform;
        return n && W(i, i, n), i;
    }, $o.getLocalTransform = function(t, e) {
        Zo(e = e || []);
        var i = t.origin, n = t.scale || [ 1, 1 ], r = t.rotation || 0, a = t.position || [ 0, 0 ];
        return i && (e[4] -= i[0], e[5] -= i[1]), J(e, e, n), r && Q(e, e, r), i && (e[4] += i[0], 
        e[5] += i[1]), e[4] += a[0], e[5] += a[1], e;
    };
    var Jo = {
        linear: function(t) {
            return t;
        },
        quadraticIn: function(t) {
            return t * t;
        },
        quadraticOut: function(t) {
            return t * (2 - t);
        },
        quadraticInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
        },
        cubicIn: function(t) {
            return t * t * t;
        },
        cubicOut: function(t) {
            return --t * t * t + 1;
        },
        cubicInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
        },
        quarticIn: function(t) {
            return t * t * t * t;
        },
        quarticOut: function(t) {
            return 1 - --t * t * t * t;
        },
        quarticInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
        },
        quinticIn: function(t) {
            return t * t * t * t * t;
        },
        quinticOut: function(t) {
            return --t * t * t * t * t + 1;
        },
        quinticInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
        },
        sinusoidalIn: function(t) {
            return 1 - Math.cos(t * Math.PI / 2);
        },
        sinusoidalOut: function(t) {
            return Math.sin(t * Math.PI / 2);
        },
        sinusoidalInOut: function(t) {
            return .5 * (1 - Math.cos(Math.PI * t));
        },
        exponentialIn: function(t) {
            return 0 === t ? 0 : Math.pow(1024, t - 1);
        },
        exponentialOut: function(t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
        },
        exponentialInOut: function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
        },
        circularIn: function(t) {
            return 1 - Math.sqrt(1 - t * t);
        },
        circularOut: function(t) {
            return Math.sqrt(1 - --t * t);
        },
        circularInOut: function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        },
        elasticIn: function(t) {
            var e, i = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = .1) : e = .4 * Math.asin(1 / i) / (2 * Math.PI), 
            -i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / .4));
        },
        elasticOut: function(t) {
            var e, i = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = .1) : e = .4 * Math.asin(1 / i) / (2 * Math.PI), 
            i * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / .4) + 1);
        },
        elasticInOut: function(t) {
            var e, i = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!i || i < 1 ? (i = 1, e = .1) : e = .4 * Math.asin(1 / i) / (2 * Math.PI), 
            (t *= 2) < 1 ? -.5 * i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / .4) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / .4) * .5 + 1);
        },
        backIn: function(t) {
            return t * t * (2.70158 * t - 1.70158);
        },
        backOut: function(t) {
            return --t * t * (2.70158 * t + 1.70158) + 1;
        },
        backInOut: function(t) {
            var e = 2.5949095;
            return (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
        },
        bounceIn: function(t) {
            return 1 - Jo.bounceOut(1 - t);
        },
        bounceOut: function(t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
        },
        bounceInOut: function(t) {
            return t < .5 ? .5 * Jo.bounceIn(2 * t) : .5 * Jo.bounceOut(2 * t - 1) + .5;
        }
    };
    et.prototype = {
        constructor: et,
        step: function(t, e) {
            if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), 
            this._paused) this._pausedTime += e; else {
                var i = (t - this._startTime - this._pausedTime) / this._life;
                if (!(i < 0)) {
                    i = Math.min(i, 1);
                    var n = this.easing, r = "string" == typeof n ? Jo[n] : n, a = "function" == typeof r ? r(i) : i;
                    return this.fire("frame", a), 1 == i ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, 
                    "destroy") : null;
                }
            }
        },
        restart: function(t) {
            var e = (t - this._startTime - this._pausedTime) % this._life;
            this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1;
        },
        fire: function(t, e) {
            this[t = "on" + t] && this[t](this._target, e);
        },
        pause: function() {
            this._paused = !0;
        },
        resume: function() {
            this._paused = !1;
        }
    };
    var ts = function() {
        this.head = null, this.tail = null, this._len = 0;
    }, es = ts.prototype;
    es.insert = function(t) {
        var e = new is(t);
        return this.insertEntry(e), e;
    }, es.insertEntry = function(t) {
        this.head ? ((this.tail.next = t).prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, 
        this._len++;
    }, es.remove = function(t) {
        var e = t.prev, i = t.next;
        e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, 
        this._len--;
    }, es.len = function() {
        return this._len;
    }, es.clear = function() {
        this.head = this.tail = null, this._len = 0;
    };
    var is = function(t) {
        this.value = t, this.next, this.prev;
    }, ns = function(t) {
        this._list = new ts(), this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null;
    }, rs = ns.prototype;
    rs.put = function(t, e) {
        var i = this._list, n = this._map, r = null;
        if (null == n[t]) {
            var a = i.len(), o = this._lastRemovedEntry;
            if (a >= this._maxSize && 0 < a) {
                var s = i.head;
                i.remove(s), delete n[s.key], r = s.value, this._lastRemovedEntry = s;
            }
            o ? o.value = e : o = new is(e), o.key = t, i.insertEntry(o), n[t] = o;
        }
        return r;
    }, rs.get = function(t) {
        var e = this._map[t], i = this._list;
        return null != e ? (e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value) : void 0;
    }, rs.clear = function() {
        this._list.clear(), this._map = {};
    };
    var as = {
        transparent: [ 0, 0, 0, 0 ],
        aliceblue: [ 240, 248, 255, 1 ],
        antiquewhite: [ 250, 235, 215, 1 ],
        aqua: [ 0, 255, 255, 1 ],
        aquamarine: [ 127, 255, 212, 1 ],
        azure: [ 240, 255, 255, 1 ],
        beige: [ 245, 245, 220, 1 ],
        bisque: [ 255, 228, 196, 1 ],
        black: [ 0, 0, 0, 1 ],
        blanchedalmond: [ 255, 235, 205, 1 ],
        blue: [ 0, 0, 255, 1 ],
        blueviolet: [ 138, 43, 226, 1 ],
        brown: [ 165, 42, 42, 1 ],
        burlywood: [ 222, 184, 135, 1 ],
        cadetblue: [ 95, 158, 160, 1 ],
        chartreuse: [ 127, 255, 0, 1 ],
        chocolate: [ 210, 105, 30, 1 ],
        coral: [ 255, 127, 80, 1 ],
        cornflowerblue: [ 100, 149, 237, 1 ],
        cornsilk: [ 255, 248, 220, 1 ],
        crimson: [ 220, 20, 60, 1 ],
        cyan: [ 0, 255, 255, 1 ],
        darkblue: [ 0, 0, 139, 1 ],
        darkcyan: [ 0, 139, 139, 1 ],
        darkgoldenrod: [ 184, 134, 11, 1 ],
        darkgray: [ 169, 169, 169, 1 ],
        darkgreen: [ 0, 100, 0, 1 ],
        darkgrey: [ 169, 169, 169, 1 ],
        darkkhaki: [ 189, 183, 107, 1 ],
        darkmagenta: [ 139, 0, 139, 1 ],
        darkolivegreen: [ 85, 107, 47, 1 ],
        darkorange: [ 255, 140, 0, 1 ],
        darkorchid: [ 153, 50, 204, 1 ],
        darkred: [ 139, 0, 0, 1 ],
        darksalmon: [ 233, 150, 122, 1 ],
        darkseagreen: [ 143, 188, 143, 1 ],
        darkslateblue: [ 72, 61, 139, 1 ],
        darkslategray: [ 47, 79, 79, 1 ],
        darkslategrey: [ 47, 79, 79, 1 ],
        darkturquoise: [ 0, 206, 209, 1 ],
        darkviolet: [ 148, 0, 211, 1 ],
        deeppink: [ 255, 20, 147, 1 ],
        deepskyblue: [ 0, 191, 255, 1 ],
        dimgray: [ 105, 105, 105, 1 ],
        dimgrey: [ 105, 105, 105, 1 ],
        dodgerblue: [ 30, 144, 255, 1 ],
        firebrick: [ 178, 34, 34, 1 ],
        floralwhite: [ 255, 250, 240, 1 ],
        forestgreen: [ 34, 139, 34, 1 ],
        fuchsia: [ 255, 0, 255, 1 ],
        gainsboro: [ 220, 220, 220, 1 ],
        ghostwhite: [ 248, 248, 255, 1 ],
        gold: [ 255, 215, 0, 1 ],
        goldenrod: [ 218, 165, 32, 1 ],
        gray: [ 128, 128, 128, 1 ],
        green: [ 0, 128, 0, 1 ],
        greenyellow: [ 173, 255, 47, 1 ],
        grey: [ 128, 128, 128, 1 ],
        honeydew: [ 240, 255, 240, 1 ],
        hotpink: [ 255, 105, 180, 1 ],
        indianred: [ 205, 92, 92, 1 ],
        indigo: [ 75, 0, 130, 1 ],
        ivory: [ 255, 255, 240, 1 ],
        khaki: [ 240, 230, 140, 1 ],
        lavender: [ 230, 230, 250, 1 ],
        lavenderblush: [ 255, 240, 245, 1 ],
        lawngreen: [ 124, 252, 0, 1 ],
        lemonchiffon: [ 255, 250, 205, 1 ],
        lightblue: [ 173, 216, 230, 1 ],
        lightcoral: [ 240, 128, 128, 1 ],
        lightcyan: [ 224, 255, 255, 1 ],
        lightgoldenrodyellow: [ 250, 250, 210, 1 ],
        lightgray: [ 211, 211, 211, 1 ],
        lightgreen: [ 144, 238, 144, 1 ],
        lightgrey: [ 211, 211, 211, 1 ],
        lightpink: [ 255, 182, 193, 1 ],
        lightsalmon: [ 255, 160, 122, 1 ],
        lightseagreen: [ 32, 178, 170, 1 ],
        lightskyblue: [ 135, 206, 250, 1 ],
        lightslategray: [ 119, 136, 153, 1 ],
        lightslategrey: [ 119, 136, 153, 1 ],
        lightsteelblue: [ 176, 196, 222, 1 ],
        lightyellow: [ 255, 255, 224, 1 ],
        lime: [ 0, 255, 0, 1 ],
        limegreen: [ 50, 205, 50, 1 ],
        linen: [ 250, 240, 230, 1 ],
        magenta: [ 255, 0, 255, 1 ],
        maroon: [ 128, 0, 0, 1 ],
        mediumaquamarine: [ 102, 205, 170, 1 ],
        mediumblue: [ 0, 0, 205, 1 ],
        mediumorchid: [ 186, 85, 211, 1 ],
        mediumpurple: [ 147, 112, 219, 1 ],
        mediumseagreen: [ 60, 179, 113, 1 ],
        mediumslateblue: [ 123, 104, 238, 1 ],
        mediumspringgreen: [ 0, 250, 154, 1 ],
        mediumturquoise: [ 72, 209, 204, 1 ],
        mediumvioletred: [ 199, 21, 133, 1 ],
        midnightblue: [ 25, 25, 112, 1 ],
        mintcream: [ 245, 255, 250, 1 ],
        mistyrose: [ 255, 228, 225, 1 ],
        moccasin: [ 255, 228, 181, 1 ],
        navajowhite: [ 255, 222, 173, 1 ],
        navy: [ 0, 0, 128, 1 ],
        oldlace: [ 253, 245, 230, 1 ],
        olive: [ 128, 128, 0, 1 ],
        olivedrab: [ 107, 142, 35, 1 ],
        orange: [ 255, 165, 0, 1 ],
        orangered: [ 255, 69, 0, 1 ],
        orchid: [ 218, 112, 214, 1 ],
        palegoldenrod: [ 238, 232, 170, 1 ],
        palegreen: [ 152, 251, 152, 1 ],
        paleturquoise: [ 175, 238, 238, 1 ],
        palevioletred: [ 219, 112, 147, 1 ],
        papayawhip: [ 255, 239, 213, 1 ],
        peachpuff: [ 255, 218, 185, 1 ],
        peru: [ 205, 133, 63, 1 ],
        pink: [ 255, 192, 203, 1 ],
        plum: [ 221, 160, 221, 1 ],
        powderblue: [ 176, 224, 230, 1 ],
        purple: [ 128, 0, 128, 1 ],
        red: [ 255, 0, 0, 1 ],
        rosybrown: [ 188, 143, 143, 1 ],
        royalblue: [ 65, 105, 225, 1 ],
        saddlebrown: [ 139, 69, 19, 1 ],
        salmon: [ 250, 128, 114, 1 ],
        sandybrown: [ 244, 164, 96, 1 ],
        seagreen: [ 46, 139, 87, 1 ],
        seashell: [ 255, 245, 238, 1 ],
        sienna: [ 160, 82, 45, 1 ],
        silver: [ 192, 192, 192, 1 ],
        skyblue: [ 135, 206, 235, 1 ],
        slateblue: [ 106, 90, 205, 1 ],
        slategray: [ 112, 128, 144, 1 ],
        slategrey: [ 112, 128, 144, 1 ],
        snow: [ 255, 250, 250, 1 ],
        springgreen: [ 0, 255, 127, 1 ],
        steelblue: [ 70, 130, 180, 1 ],
        tan: [ 210, 180, 140, 1 ],
        teal: [ 0, 128, 128, 1 ],
        thistle: [ 216, 191, 216, 1 ],
        tomato: [ 255, 99, 71, 1 ],
        turquoise: [ 64, 224, 208, 1 ],
        violet: [ 238, 130, 238, 1 ],
        wheat: [ 245, 222, 179, 1 ],
        white: [ 255, 255, 255, 1 ],
        whitesmoke: [ 245, 245, 245, 1 ],
        yellow: [ 255, 255, 0, 1 ],
        yellowgreen: [ 154, 205, 50, 1 ]
    }, os = new ns(20), ss = null, ls = Array.prototype.slice, hs = function(t, e, i, n) {
        this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = i || dt, 
        this._setter = n || ft, this._clipCount = 0, this._delay = 0, this._doneList = [], 
        this._onframeList = [], this._clipList = [];
    };
    hs.prototype = {
        when: function(t, e) {
            var i = this._tracks;
            for (var n in e) if (e.hasOwnProperty(n)) {
                if (!i[n]) {
                    i[n] = [];
                    var r = this._getter(this._target, n);
                    if (null == r) continue;
                    0 !== t && i[n].push({
                        time: 0,
                        value: wt(r)
                    });
                }
                i[n].push({
                    time: t,
                    value: e[n]
                });
            }
            return this;
        },
        during: function(t) {
            return this._onframeList.push(t), this;
        },
        pause: function() {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
            this._paused = !0;
        },
        resume: function() {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
            this._paused = !1;
        },
        isPaused: function() {
            return !!this._paused;
        },
        _doneCallback: function() {
            this._tracks = {}, this._clipList.length = 0;
            for (var t = this._doneList, e = t.length, i = 0; i < e; i++) t[i].call(this);
        },
        start: function(t, e) {
            var i, n = this, r = 0, a = function() {
                --r || n._doneCallback();
            };
            for (var o in this._tracks) if (this._tracks.hasOwnProperty(o)) {
                var s = Mt(this, t, a, this._tracks[o], o, e);
                s && (this._clipList.push(s), r++, this.animation && this.animation.addClip(s), 
                i = s);
            }
            if (i) {
                var l = i.onframe;
                i.onframe = function(t, e) {
                    l(t, e);
                    for (var i = 0; i < n._onframeList.length; i++) n._onframeList[i](t, e);
                };
            }
            return r || this._doneCallback(), this;
        },
        stop: function(t) {
            for (var e = this._clipList, i = this.animation, n = 0; n < e.length; n++) {
                var r = e[n];
                t && r.onframe(this._target, 1), i && i.removeClip(r);
            }
            e.length = 0;
        },
        delay: function(t) {
            return this._delay = t, this;
        },
        done: function(t) {
            return t && this._doneList.push(t), this;
        },
        getClips: function() {
            return this._clipList;
        }
    };
    var us = 1;
    "undefined" != typeof window && (us = Math.max(window.devicePixelRatio || 1, 1));
    var cs = us, ds = function() {}, fs = ds, ps = function() {
        this.animators = [];
    };
    ps.prototype = {
        constructor: ps,
        animate: function(t, e) {
            var i, n = !1, r = this, a = this.__zr;
            if (t) {
                var o = t.split("."), s = r;
                n = "shape" === o[0];
                for (var l = 0, h = o.length; l < h; l++) s && (s = s[o[l]]);
                s && (i = s);
            } else i = r;
            if (i) {
                var u = r.animators, c = new hs(i, e);
                return c.during(function() {
                    r.dirty(n);
                }).done(function() {
                    u.splice(d(u, c), 1);
                }), u.push(c), a && a.animation.addAnimator(c), c;
            }
            fs('Property "' + t + '" is not existed in element ' + r.id);
        },
        stopAnimation: function(t) {
            for (var e = this.animators, i = e.length, n = 0; n < i; n++) e[n].stop(t);
            return e.length = 0, this;
        },
        animateTo: function(t, e, i, n, r, a) {
            function o() {
                --l || r && r();
            }
            C(i) ? (r = n, n = i, i = 0) : S(n) ? (r = n, n = "linear", i = 0) : S(i) ? (r = i, 
            i = 0) : S(e) ? (r = e, e = 500) : e || (e = 500), this.stopAnimation(), this._animateToShallow("", this, t, e, i);
            var s = this.animators.slice(), l = s.length;
            l || r && r();
            for (var h = 0; h < s.length; h++) s[h].done(o).start(n, a);
        },
        _animateToShallow: function(t, e, i, n, r) {
            var a = {}, o = 0;
            for (var s in i) if (i.hasOwnProperty(s)) if (null != e[s]) k(i[s]) && !E(i[s]) ? this._animateToShallow(t ? t + "." + s : s, e[s], i[s], n, r) : (a[s] = i[s], 
            o++); else if (null != i[s]) if (t) {
                var l = {};
                l[t] = {}, l[t][s] = i[s], this.attr(l);
            } else this.attr(s, i[s]);
            return 0 < o && this.animate(t, !1).when(null == n ? 500 : n, a).delay(r || 0), 
            this;
        }
    };
    var gs = function(t) {
        $o.call(this, t), qo.call(this, t), ps.call(this, t), this.id = t.id || Co();
    };
    gs.prototype = {
        type: "element",
        name: "",
        __zr: null,
        ignore: !1,
        clipPath: null,
        isGroup: !1,
        drift: function(t, e) {
            switch (this.draggable) {
              case "horizontal":
                e = 0;
                break;

              case "vertical":
                t = 0;
            }
            var i = this.transform;
            i || (i = this.transform = [ 1, 0, 0, 1, 0, 0 ]), i[4] += t, i[5] += e, this.decomposeTransform(), 
            this.dirty(!1);
        },
        beforeUpdate: function() {},
        afterUpdate: function() {},
        update: function() {
            this.updateTransform();
        },
        traverse: function() {},
        attrKV: function(t, e) {
            if ("position" === t || "scale" === t || "origin" === t) {
                if (e) {
                    var i = this[t];
                    i || (i = this[t] = []), i[0] = e[0], i[1] = e[1];
                }
            } else this[t] = e;
        },
        hide: function() {
            this.ignore = !0, this.__zr && this.__zr.refresh();
        },
        show: function() {
            this.ignore = !1, this.__zr && this.__zr.refresh();
        },
        attr: function(t, e) {
            if ("string" == typeof t) this.attrKV(t, e); else if (k(t)) for (var i in t) t.hasOwnProperty(i) && this.attrKV(i, t[i]);
            return this.dirty(!1), this;
        },
        setClipPath: function(t) {
            var e = this.__zr;
            e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), 
            (this.clipPath = t).__zr = e, (t.__clipTarget = this).dirty(!1);
        },
        removeClipPath: function() {
            var t = this.clipPath;
            t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, 
            this.clipPath = null, this.dirty(!1));
        },
        addSelfToZr: function(t) {
            this.__zr = t;
            var e = this.animators;
            if (e) for (var i = 0; i < e.length; i++) t.animation.addAnimator(e[i]);
            this.clipPath && this.clipPath.addSelfToZr(t);
        },
        removeSelfFromZr: function(t) {
            this.__zr = null;
            var e = this.animators;
            if (e) for (var i = 0; i < e.length; i++) t.animation.removeAnimator(e[i]);
            this.clipPath && this.clipPath.removeSelfFromZr(t);
        }
    }, e(gs, ps), e(gs, $o), e(gs, qo);
    var vs, ms, ys, _s, xs = W, ws = Math.min, bs = Math.max;
    St.prototype = {
        constructor: St,
        union: function(t) {
            var e = ws(t.x, this.x), i = ws(t.y, this.y);
            this.width = bs(t.x + t.width, this.x + this.width) - e, this.height = bs(t.y + t.height, this.y + this.height) - i, 
            this.x = e, this.y = i;
        },
        applyTransform: (vs = [], ms = [], ys = [], _s = [], function(t) {
            if (t) {
                vs[0] = ys[0] = this.x, vs[1] = _s[1] = this.y, ms[0] = _s[0] = this.x + this.width, 
                ms[1] = ys[1] = this.y + this.height, xs(vs, vs, t), xs(ms, ms, t), xs(ys, ys, t), 
                xs(_s, _s, t), this.x = ws(vs[0], ms[0], ys[0], _s[0]), this.y = ws(vs[1], ms[1], ys[1], _s[1]);
                var e = bs(vs[0], ms[0], ys[0], _s[0]), i = bs(vs[1], ms[1], ys[1], _s[1]);
                this.width = e - this.x, this.height = i - this.y;
            }
        }),
        calculateTransform: function(t) {
            var e = t.width / this.width, i = t.height / this.height, n = j();
            return K(n, n, [ -this.x, -this.y ]), J(n, n, [ e, i ]), K(n, n, [ t.x, t.y ]), 
            n;
        },
        intersect: function(t) {
            if (!t) return !1;
            t instanceof St || (t = St.create(t));
            var e = this.x, i = this.x + this.width, n = this.y, r = this.y + this.height, a = t.x, o = t.x + t.width, s = t.y, l = t.y + t.height;
            return !(i < a || o < e || r < s || l < n);
        },
        contain: function(t, e) {
            return t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height;
        },
        clone: function() {
            return new St(this.x, this.y, this.width, this.height);
        },
        copy: function(t) {
            this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height;
        },
        plain: function() {
            return {
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height
            };
        }
    }, St.create = function(t) {
        return new St(t.x, t.y, t.width, t.height);
    };
    var Ms = function(t) {
        for (var e in t = t || {}, gs.call(this, t), t) t.hasOwnProperty(e) && (this[e] = t[e]);
        this._children = [], this.__storage = null, this.__dirty = !0;
    };
    Ms.prototype = {
        constructor: Ms,
        isGroup: !0,
        type: "group",
        silent: !1,
        children: function() {
            return this._children.slice();
        },
        childAt: function(t) {
            return this._children[t];
        },
        childOfName: function(t) {
            for (var e = this._children, i = 0; i < e.length; i++) if (e[i].name === t) return e[i];
        },
        childCount: function() {
            return this._children.length;
        },
        add: function(t) {
            return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), 
            this;
        },
        addBefore: function(t, e) {
            if (t && t !== this && t.parent !== this && e && e.parent === this) {
                var i = this._children, n = i.indexOf(e);
                0 <= n && (i.splice(n, 0, t), this._doAdd(t));
            }
            return this;
        },
        _doAdd: function(t) {
            t.parent && t.parent.remove(t);
            var e = (t.parent = this).__storage, i = this.__zr;
            e && e !== t.__storage && (e.addToStorage(t), t instanceof Ms && t.addChildrenToStorage(e)), 
            i && i.refresh();
        },
        remove: function(t) {
            var e = this.__zr, i = this.__storage, n = this._children, r = d(n, t);
            return r < 0 || (n.splice(r, 1), t.parent = null, i && (i.delFromStorage(t), t instanceof Ms && t.delChildrenFromStorage(i)), 
            e && e.refresh()), this;
        },
        removeAll: function() {
            var t, e, i = this._children, n = this.__storage;
            for (e = 0; e < i.length; e++) t = i[e], n && (n.delFromStorage(t), t instanceof Ms && t.delChildrenFromStorage(n)), 
            t.parent = null;
            return i.length = 0, this;
        },
        eachChild: function(t, e) {
            for (var i = this._children, n = 0; n < i.length; n++) {
                var r = i[n];
                t.call(e, r, n);
            }
            return this;
        },
        traverse: function(t, e) {
            for (var i = 0; i < this._children.length; i++) {
                var n = this._children[i];
                t.call(e, n), "group" === n.type && n.traverse(t, e);
            }
            return this;
        },
        addChildrenToStorage: function(t) {
            for (var e = 0; e < this._children.length; e++) {
                var i = this._children[e];
                t.addToStorage(i), i instanceof Ms && i.addChildrenToStorage(t);
            }
        },
        delChildrenFromStorage: function(t) {
            for (var e = 0; e < this._children.length; e++) {
                var i = this._children[e];
                t.delFromStorage(i), i instanceof Ms && i.delChildrenFromStorage(t);
            }
        },
        dirty: function() {
            return this.__dirty = !0, this.__zr && this.__zr.refresh(), this;
        },
        getBoundingRect: function(t) {
            for (var e = null, i = new St(0, 0, 0, 0), n = t || this._children, r = [], a = 0; a < n.length; a++) {
                var o = n[a];
                if (!o.ignore && !o.invisible) {
                    var s = o.getBoundingRect(), l = o.getLocalTransform(r);
                    l ? (i.copy(s), i.applyTransform(l), (e = e || i.clone()).union(i)) : (e = e || s.clone()).union(s);
                }
            }
            return e || i;
        }
    }, n(Ms, gs);
    var Ss = 32, Cs = 7, ks = function() {
        this._roots = [], this._displayList = [], this._displayListLen = 0;
    };
    ks.prototype = {
        constructor: ks,
        traverse: function(t, e) {
            for (var i = 0; i < this._roots.length; i++) this._roots[i].traverse(t, e);
        },
        getDisplayList: function(t, e) {
            return e = e || !1, t && this.updateDisplayList(e), this._displayList;
        },
        updateDisplayList: function(t) {
            this._displayListLen = 0;
            for (var e = this._roots, i = this._displayList, n = 0, r = e.length; n < r; n++) this._updateAndAddDisplayable(e[n], null, t);
            i.length = this._displayListLen, ko.canvasSupported && At(i, Lt);
        },
        _updateAndAddDisplayable: function(t, e, i) {
            if (!t.ignore || i) {
                t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
                var n = t.clipPath;
                if (n) {
                    e = e ? e.slice() : [];
                    for (var r = n, a = t; r; ) r.parent = a, r.updateTransform(), e.push(r), r = (a = r).clipPath;
                }
                if (t.isGroup) {
                    for (var o = t._children, s = 0; s < o.length; s++) {
                        var l = o[s];
                        t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, i);
                    }
                    t.__dirty = !1;
                } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t;
            }
        },
        addRoot: function(t) {
            t.__storage !== this && (t instanceof Ms && t.addChildrenToStorage(this), this.addToStorage(t), 
            this._roots.push(t));
        },
        delRoot: function(t) {
            if (null == t) {
                for (var e = 0; e < this._roots.length; e++) {
                    var i = this._roots[e];
                    i instanceof Ms && i.delChildrenFromStorage(this);
                }
                return this._roots = [], this._displayList = [], void (this._displayListLen = 0);
            }
            if (t instanceof Array) {
                e = 0;
                for (var n = t.length; e < n; e++) this.delRoot(t[e]);
            } else {
                var r = d(this._roots, t);
                0 <= r && (this.delFromStorage(t), this._roots.splice(r, 1), t instanceof Ms && t.delChildrenFromStorage(this));
            }
        },
        addToStorage: function(t) {
            return t && (t.__storage = this, t.dirty(!1)), this;
        },
        delFromStorage: function(t) {
            return t && (t.__storage = null), this;
        },
        dispose: function() {
            this._renderList = this._roots = null;
        },
        displayableSortFunc: Lt
    };
    var Ts = {
        shadowBlur: 1,
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        textShadowBlur: 1,
        textShadowOffsetX: 1,
        textShadowOffsetY: 1,
        textBoxShadowBlur: 1,
        textBoxShadowOffsetX: 1,
        textBoxShadowOffsetY: 1
    }, Is = function(t, e, i) {
        return Ts.hasOwnProperty(e) ? i *= t.dpr : i;
    }, Ds = [ [ "shadowBlur", 0 ], [ "shadowOffsetX", 0 ], [ "shadowOffsetY", 0 ], [ "shadowColor", "#000" ], [ "lineCap", "butt" ], [ "lineJoin", "miter" ], [ "miterLimit", 10 ] ], As = function(t, e) {
        this.extendFrom(t, !1), this.host = e;
    };
    As.prototype = {
        constructor: As,
        host: null,
        fill: "#000",
        stroke: null,
        opacity: 1,
        lineDash: null,
        lineDashOffset: 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        lineWidth: 1,
        strokeNoScale: !1,
        text: null,
        font: null,
        textFont: null,
        fontStyle: null,
        fontWeight: null,
        fontSize: null,
        fontFamily: null,
        textTag: null,
        textFill: "#000",
        textStroke: null,
        textWidth: null,
        textHeight: null,
        textStrokeWidth: 0,
        textLineHeight: null,
        textPosition: "inside",
        textRect: null,
        textOffset: null,
        textAlign: null,
        textVerticalAlign: null,
        textDistance: 5,
        textShadowColor: "transparent",
        textShadowBlur: 0,
        textShadowOffsetX: 0,
        textShadowOffsetY: 0,
        textBoxShadowColor: "transparent",
        textBoxShadowBlur: 0,
        textBoxShadowOffsetX: 0,
        textBoxShadowOffsetY: 0,
        transformText: !1,
        textRotation: 0,
        textOrigin: null,
        textBackgroundColor: null,
        textBorderColor: null,
        textBorderWidth: 0,
        textBorderRadius: 0,
        textPadding: null,
        rich: null,
        truncate: null,
        blend: null,
        bind: function(t, e, i) {
            for (var n = this, r = i && i.style, a = !r, o = 0; o < Ds.length; o++) {
                var s = Ds[o], l = s[0];
                (a || n[l] !== r[l]) && (t[l] = Is(t, l, n[l] || s[1]));
            }
            if ((a || n.fill !== r.fill) && (t.fillStyle = n.fill), (a || n.stroke !== r.stroke) && (t.strokeStyle = n.stroke), 
            (a || n.opacity !== r.opacity) && (t.globalAlpha = null == n.opacity ? 1 : n.opacity), 
            (a || n.blend !== r.blend) && (t.globalCompositeOperation = n.blend || "source-over"), 
            this.hasStroke()) {
                var h = n.lineWidth;
                t.lineWidth = h / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1);
            }
        },
        hasFill: function() {
            var t = this.fill;
            return null != t && "none" !== t;
        },
        hasStroke: function() {
            var t = this.stroke;
            return null != t && "none" !== t && 0 < this.lineWidth;
        },
        extendFrom: function(t, e) {
            if (t) for (var i in t) !t.hasOwnProperty(i) || !0 !== e && (!1 === e ? this.hasOwnProperty(i) : null == t[i]) || (this[i] = t[i]);
        },
        set: function(t, e) {
            "string" == typeof t ? this[t] = e : this.extendFrom(t, !0);
        },
        clone: function() {
            var t = new this.constructor();
            return t.extendFrom(this, !0), t;
        },
        getGradient: function(t, e, i) {
            for (var n = ("radial" === e.type ? Ot : Pt)(t, e, i), r = e.colorStops, a = 0; a < r.length; a++) n.addColorStop(r[a].offset, r[a].color);
            return n;
        }
    };
    for (var Ls = As.prototype, Ps = 0; Ps < Ds.length; Ps++) {
        var Os = Ds[Ps];
        Os[0] in Ls || (Ls[Os[0]] = Os[1]);
    }
    As.getGradient = Ls.getGradient;
    var Es = function(t, e) {
        this.image = t, this.repeat = e, this.type = "pattern";
    }, Rs = function(t, e, i) {
        var n;
        i = i || cs, "string" == typeof t ? n = Rt(t, e, i) : k(t) && (t = (n = t).id), 
        this.id = t;
        var r = (this.dom = n).style;
        r && (n.onselectstart = Et, r["-webkit-user-select"] = "none", r["user-select"] = "none", 
        r["-webkit-touch-callout"] = "none", r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", 
        r.padding = 0, r.margin = 0, r["border-width"] = 0), this.domBack = null, this.ctxBack = null, 
        this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, 
        this.lastFrameAlpha = .7, this.dpr = i;
    };
    Rs.prototype = {
        constructor: Rs,
        __dirty: !0,
        __used: !(Es.prototype.getCanvasPattern = function(t) {
            return t.createPattern(this.image, this.repeat || "repeat");
        }),
        __drawIndex: 0,
        __startIndex: 0,
        __endIndex: 0,
        incremental: !1,
        getElementCount: function() {
            return this.__endIndex - this.__startIndex;
        },
        initContext: function() {
            this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
        },
        createBackBuffer: function() {
            var t = this.dpr;
            this.domBack = Rt("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 
            1 != t && this.ctxBack.scale(t, t);
        },
        resize: function(t, e) {
            var i = this.dpr, n = this.dom, r = n.style, a = this.domBack;
            r && (r.width = t + "px", r.height = e + "px"), n.width = t * i, n.height = e * i, 
            a && (a.width = t * i, a.height = e * i, 1 != i && this.ctxBack.scale(i, i));
        },
        clear: function(t, e) {
            var i, n = this.dom, r = this.ctx, a = n.width, o = n.height, s = (e = e || this.clearColor, 
            this.motionBlur && !t), l = this.lastFrameAlpha, h = this.dpr;
            (s && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", 
            this.ctxBack.drawImage(n, 0, 0, a / h, o / h)), r.clearRect(0, 0, a, o), e && "transparent" !== e) && (e.colorStops ? (i = e.__canvasGradient || As.getGradient(r, e, {
                x: 0,
                y: 0,
                width: a,
                height: o
            }), e.__canvasGradient = i) : e.image && (i = Es.prototype.getCanvasPattern.call(e, r)), 
            r.save(), r.fillStyle = i || e, r.fillRect(0, 0, a, o), r.restore());
            if (s) {
                var u = this.domBack;
                r.save(), r.globalAlpha = l, r.drawImage(u, 0, 0, a, o), r.restore();
            }
        }
    };
    var Bs = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(t) {
        setTimeout(t, 16);
    }, Ns = new ns(50), zs = {}, Fs = 0, Vs = 5e3, Ws = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g, Hs = "12px sans-serif", Gs = {};
    Gs.measureText = function(t, e) {
        var i = (zo || (zo = No().getContext("2d")), zo);
        return i.font = e || Hs, i.measureText(t);
    };
    var qs = {
        left: 1,
        right: 1,
        center: 1
    }, Xs = {
        top: 1,
        bottom: 1,
        middle: 1
    }, Us = new St(), Ys = function() {};
    pe.prototype = {
        constructor: pe,
        type: "displayable",
        __dirty: !0,
        invisible: !(Ys.prototype = {
            constructor: Ys,
            drawRectText: function(t, e) {
                var i = this.style;
                e = i.textRect || e, this.__dirty && Jt(i);
                var n = i.text;
                if (null != n && (n += ""), fe(n, i)) {
                    t.save();
                    var r = this.transform;
                    i.transformText ? this.setTransform(t) : r && (Us.copy(e), Us.applyTransform(r), 
                    e = Us), ee(this, t, n, i, e), t.restore();
                }
            }
        }),
        z: 0,
        z2: 0,
        zlevel: 0,
        draggable: !1,
        dragging: !1,
        silent: !1,
        culling: !1,
        cursor: "pointer",
        rectHover: !1,
        progressive: !1,
        incremental: !1,
        inplace: !1,
        beforeBrush: function() {},
        afterBrush: function() {},
        brush: function() {},
        getBoundingRect: function() {},
        contain: function(t, e) {
            return this.rectContain(t, e);
        },
        traverse: function(t, e) {
            t.call(e, this);
        },
        rectContain: function(t, e) {
            var i = this.transformCoordToLocal(t, e);
            return this.getBoundingRect().contain(i[0], i[1]);
        },
        dirty: function() {
            this.__dirty = !0, this._rect = null, this.__zr && this.__zr.refresh();
        },
        animateStyle: function(t) {
            return this.animate("style", t);
        },
        attrKV: function(t, e) {
            "style" !== t ? gs.prototype.attrKV.call(this, t, e) : this.style.set(e);
        },
        setStyle: function(t, e) {
            return this.style.set(t, e), this.dirty(!1), this;
        },
        useStyle: function(t) {
            return this.style = new As(t, this), this.dirty(!1), this;
        }
    }, n(pe, gs), e(pe, Ys), ge.prototype = {
        constructor: ge,
        type: "image",
        brush: function(t, e) {
            var i = this.style, n = i.image;
            i.bind(t, this, e);
            var r = this._image = Nt(n, this._image, this, this.onload);
            if (r && Ft(r)) {
                var a = i.x || 0, o = i.y || 0, s = i.width, l = i.height, h = r.width / r.height;
                if (null == s && null != l ? s = l * h : null == l && null != s ? l = s / h : null == s && null == l && (s = r.width, 
                l = r.height), this.setTransform(t), i.sWidth && i.sHeight) {
                    var u = i.sx || 0, c = i.sy || 0;
                    t.drawImage(r, u, c, i.sWidth, i.sHeight, a, o, s, l);
                } else if (i.sx && i.sy) {
                    var d = s - (u = i.sx), f = l - (c = i.sy);
                    t.drawImage(r, u, c, d, f, a, o, s, l);
                } else t.drawImage(r, a, o, s, l);
                null != i.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
            }
        },
        getBoundingRect: function() {
            var t = this.style;
            return this._rect || (this._rect = new St(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), 
            this._rect;
        }
    }, n(ge, pe);
    var js = 314159, Zs = new St(0, 0, 0, 0), $s = new St(0, 0, 0, 0), Ks = function(t, e, i) {
        this.type = "canvas";
        var n = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
        this._opts = i = D({}, i || {}), this.dpr = i.devicePixelRatio || cs, this._singleCanvas = n;
        var r = (this.root = t).style;
        r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", 
        t.innerHTML = ""), this.storage = e;
        var a, o, s, l = this._zlevelList = [], h = this._layers = {};
        if (this._layerConfig = {}, this._needsManuallyCompositing = !1, n) {
            var u = t.width, c = t.height;
            null != i.width && (u = i.width), null != i.height && (c = i.height), this.dpr = i.devicePixelRatio || 1, 
            t.width = u * this.dpr, t.height = c * this.dpr, this._width = u, this._height = c;
            var d = new Rs(t, this, this.dpr);
            d.__builtin__ = !0, d.initContext(), (h[js] = d).zlevel = js, l.push(js), this._domRoot = t;
        } else {
            this._width = this._getSize(0), this._height = this._getSize(1);
            var f = this._domRoot = (a = this._width, o = this._height, (s = document.createElement("div")).style.cssText = [ "position:relative", "overflow:hidden", "width:" + a + "px", "height:" + o + "px", "padding:0", "margin:0", "border-width:0" ].join(";") + ";", 
            s);
            t.appendChild(f);
        }
        this._hoverlayer = null, this._hoverElements = [];
    };
    Ks.prototype = {
        constructor: Ks,
        getType: function() {
            return "canvas";
        },
        isSingleCanvas: function() {
            return this._singleCanvas;
        },
        getViewportRoot: function() {
            return this._domRoot;
        },
        getViewportRootOffset: function() {
            var t = this.getViewportRoot();
            return t ? {
                offsetLeft: t.offsetLeft || 0,
                offsetTop: t.offsetTop || 0
            } : void 0;
        },
        refresh: function(t) {
            var e = this.storage.getDisplayList(!0), i = this._zlevelList;
            this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);
            for (var n = 0; n < i.length; n++) {
                var r = i[n], a = this._layers[r];
                if (!a.__builtin__ && a.refresh) {
                    var o = 0 === n ? this._backgroundColor : null;
                    a.refresh(o);
                }
            }
            return this.refreshHover(), this;
        },
        addHover: function(t, e) {
            if (!t.__hoverMir) {
                var i = new t.constructor({
                    style: t.style,
                    shape: t.shape
                });
                ((i.__from = t).__hoverMir = i).setStyle(e), this._hoverElements.push(i);
            }
        },
        removeHover: function(t) {
            var e = t.__hoverMir, i = this._hoverElements, n = d(i, e);
            0 <= n && i.splice(n, 1), t.__hoverMir = null;
        },
        clearHover: function() {
            for (var t = this._hoverElements, e = 0; e < t.length; e++) {
                var i = t[e].__from;
                i && (i.__hoverMir = null);
            }
            t.length = 0;
        },
        refreshHover: function() {
            var t = this._hoverElements, e = t.length, i = this._hoverlayer;
            if (i && i.clear(), e) {
                At(t, this.storage.displayableSortFunc), i || (i = this._hoverlayer = this.getLayer(1e5));
                var n = {};
                i.ctx.save();
                for (var r = 0; r < e; ) {
                    var a = t[r], o = a.__from;
                    o && o.__zr ? (r++, o.invisible || (a.transform = o.transform, a.invTransform = o.invTransform, 
                    a.__clipPaths = o.__clipPaths, this._doPaintEl(a, i, !0, n))) : (t.splice(r, 1), 
                    o.__hoverMir = null, e--);
                }
                i.ctx.restore();
            }
        },
        getHoverLayer: function() {
            return this.getLayer(1e5);
        },
        _paintList: function(t, e, i) {
            if (this._redrawId === i) {
                e = e || !1, this._updateLayerStatus(t);
                var n = this._doPaintList(t, e);
                if (this._needsManuallyCompositing && this._compositeManually(), !n) {
                    var r = this;
                    Bs(function() {
                        r._paintList(t, e, i);
                    });
                }
            }
        },
        _compositeManually: function() {
            var e = this.getLayer(js).ctx, i = this._domRoot.width, n = this._domRoot.height;
            e.clearRect(0, 0, i, n), this.eachBuiltinLayer(function(t) {
                t.virtual && e.drawImage(t.dom, 0, 0, i, n);
            });
        },
        _doPaintList: function(t, e) {
            for (var i = [], n = 0; n < this._zlevelList.length; n++) {
                var r = this._zlevelList[n];
                (s = this._layers[r]).__builtin__ && s !== this._hoverlayer && (s.__dirty || e) && i.push(s);
            }
            for (var a = !0, o = 0; o < i.length; o++) {
                var s, l = (s = i[o]).ctx, h = {};
                l.save();
                var u = e ? s.__startIndex : s.__drawIndex, c = !e && s.incremental && Date.now, d = c && Date.now(), f = s.zlevel === this._zlevelList[0] ? this._backgroundColor : null;
                if (s.__startIndex === s.__endIndex) s.clear(!1, f); else if (u === s.__startIndex) {
                    var p = t[u];
                    p.incremental && p.notClear && !e || s.clear(!1, f);
                }
                -1 === u && (console.error("For some unknown reason. drawIndex is -1"), u = s.__startIndex);
                for (var g = u; g < s.__endIndex; g++) {
                    var v = t[g];
                    if (this._doPaintEl(v, s, e, h), v.__dirty = !1, c) if (15 < Date.now() - d) break;
                }
                s.__drawIndex = g, s.__drawIndex < s.__endIndex && (a = !1), h.prevElClipPaths && l.restore(), 
                l.restore();
            }
            return ko.wxa && N(this._layers, function(t) {
                t && t.ctx && t.ctx.draw && t.ctx.draw();
            }), a;
        },
        _doPaintEl: function(t, e, i, n) {
            var r, a, o, s = e.ctx, l = t.transform;
            if (!(!e.__dirty && !i || t.invisible || 0 === t.style.opacity || l && !l[0] && !l[3] || t.culling && (r = t, 
            a = this._width, o = this._height, Zs.copy(r.getBoundingRect()), r.transform && Zs.applyTransform(r.transform), 
            $s.width = a, $s.height = o, !Zs.intersect($s)))) {
                var h = t.__clipPaths;
                (!n.prevElClipPaths || function(t, e) {
                    if (t == e) return !1;
                    if (!t || !e || t.length !== e.length) return !0;
                    for (var i = 0; i < t.length; i++) if (t[i] !== e[i]) return !0;
                }(h, n.prevElClipPaths)) && (n.prevElClipPaths && (e.ctx.restore(), n.prevElClipPaths = null, 
                n.prevEl = null), h && (s.save(), function(t, e) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.setTransform(e), e.beginPath(), n.buildPath(e, n.shape), e.clip(), n.restoreTransform(e);
                    }
                }(h, s), n.prevElClipPaths = h)), t.beforeBrush && t.beforeBrush(s), t.brush(s, n.prevEl || null), 
                (n.prevEl = t).afterBrush && t.afterBrush(s);
            }
        },
        getLayer: function(t, e) {
            this._singleCanvas && !this._needsManuallyCompositing && (t = js);
            var i = this._layers[t];
            return i || ((i = new Rs("zr_" + t, this, this.dpr)).zlevel = t, i.__builtin__ = !0, 
            this._layerConfig[t] && s(i, this._layerConfig[t], !0), e && (i.virtual = e), this.insertLayer(t, i), 
            i.initContext()), i;
        },
        insertLayer: function(t, e) {
            var i = this._layers, n = this._zlevelList, r = n.length, a = null, o = -1, s = this._domRoot;
            if (i[t]) fs("ZLevel " + t + " has been used already"); else if ((l = e) && (l.__builtin__ || "function" == typeof l.resize && "function" == typeof l.refresh)) {
                var l;
                if (0 < r && t > n[0]) {
                    for (o = 0; o < r - 1 && !(n[o] < t && n[o + 1] > t); o++) ;
                    a = i[n[o]];
                }
                if (n.splice(o + 1, 0, t), !(i[t] = e).virtual) if (a) {
                    var h = a.dom;
                    h.nextSibling ? s.insertBefore(e.dom, h.nextSibling) : s.appendChild(e.dom);
                } else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom);
            } else fs("Layer of zlevel " + t + " is not valid");
        },
        eachLayer: function(t, e) {
            var i, n, r = this._zlevelList;
            for (n = 0; n < r.length; n++) i = r[n], t.call(e, this._layers[i], i);
        },
        eachBuiltinLayer: function(t, e) {
            var i, n, r, a = this._zlevelList;
            for (r = 0; r < a.length; r++) n = a[r], (i = this._layers[n]).__builtin__ && t.call(e, i, n);
        },
        eachOtherLayer: function(t, e) {
            var i, n, r, a = this._zlevelList;
            for (r = 0; r < a.length; r++) n = a[r], (i = this._layers[n]).__builtin__ || t.call(e, i, n);
        },
        getLayers: function() {
            return this._layers;
        },
        _updateLayerStatus: function(t) {
            function e(t) {
                n && (n.__endIndex !== t && (n.__dirty = !0), n.__endIndex = t);
            }
            if (this.eachBuiltinLayer(function(t) {
                t.__dirty = t.__used = !1;
            }), this._singleCanvas) for (var i = 1; i < t.length; i++) {
                if ((o = t[i]).zlevel !== t[i - 1].zlevel || o.incremental) {
                    this._needsManuallyCompositing = !0;
                    break;
                }
            }
            var n = null, r = 0;
            for (i = 0; i < t.length; i++) {
                var a, o, s = (o = t[i]).zlevel;
                o.incremental ? ((a = this.getLayer(s + .001, this._needsManuallyCompositing)).incremental = !0, 
                r = 1) : a = this.getLayer(s + (0 < r ? .01 : 0), this._needsManuallyCompositing), 
                a.__builtin__ || fs("ZLevel " + s + " has been used by unkown layer " + a.id), a !== n && (a.__used = !0, 
                a.__startIndex !== i && (a.__dirty = !0), a.__startIndex = i, a.__drawIndex = a.incremental ? -1 : i, 
                e(i), n = a), o.__dirty && (a.__dirty = !0, a.incremental && a.__drawIndex < 0 && (a.__drawIndex = i));
            }
            e(i), this.eachBuiltinLayer(function(t) {
                !t.__used && 0 < t.getElementCount() && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), 
                t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex);
            });
        },
        clear: function() {
            return this.eachBuiltinLayer(this._clearLayer), this;
        },
        _clearLayer: function(t) {
            t.clear();
        },
        setBackgroundColor: function(t) {
            this._backgroundColor = t;
        },
        configLayer: function(t, e) {
            if (e) {
                var i = this._layerConfig;
                i[t] ? s(i[t], e, !0) : i[t] = e;
                for (var n = 0; n < this._zlevelList.length; n++) {
                    var r = this._zlevelList[n];
                    if (r === t || r === t + .01) s(this._layers[r], i[t], !0);
                }
            }
        },
        delLayer: function(t) {
            var e = this._layers, i = this._zlevelList, n = e[t];
            n && (n.dom.parentNode.removeChild(n.dom), delete e[t], i.splice(d(i, t), 1));
        },
        resize: function(e, i) {
            if (this._domRoot.style) {
                var t = this._domRoot;
                t.style.display = "none";
                var n = this._opts;
                if (null != e && (n.width = e), null != i && (n.height = i), e = this._getSize(0), 
                i = this._getSize(1), t.style.display = "", this._width != e || i != this._height) {
                    for (var r in t.style.width = e + "px", t.style.height = i + "px", this._layers) this._layers.hasOwnProperty(r) && this._layers[r].resize(e, i);
                    N(this._progressiveLayers, function(t) {
                        t.resize(e, i);
                    }), this.refresh(!0);
                }
                this._width = e, this._height = i;
            } else {
                if (null == e || null == i) return;
                this._width = e, this._height = i, this.getLayer(js).resize(e, i);
            }
            return this;
        },
        clearLayer: function(t) {
            var e = this._layers[t];
            e && e.clear();
        },
        dispose: function() {
            this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
        },
        getRenderedCanvas: function(t) {
            if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[js].dom;
            var e = new Rs("image", this, t.pixelRatio || this.dpr);
            if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
                this.refresh();
                var i = e.dom.width, n = e.dom.height, r = e.ctx;
                this.eachLayer(function(t) {
                    t.__builtin__ ? r.drawImage(t.dom, 0, 0, i, n) : t.renderToCanvas && (e.ctx.save(), 
                    t.renderToCanvas(e.ctx), e.ctx.restore());
                });
            } else for (var a = {}, o = this.storage.getDisplayList(!0), s = 0; s < o.length; s++) {
                var l = o[s];
                this._doPaintEl(l, e, !0, a);
            }
            return e.dom;
        },
        getWidth: function() {
            return this._width;
        },
        getHeight: function() {
            return this._height;
        },
        _getSize: function(t) {
            var e = this._opts, i = [ "width", "height" ][t], n = [ "clientWidth", "clientHeight" ][t], r = [ "paddingLeft", "paddingTop" ][t], a = [ "paddingRight", "paddingBottom" ][t];
            if (null != e[i] && "auto" !== e[i]) return parseFloat(e[i]);
            var o = this.root, s = document.defaultView.getComputedStyle(o);
            return (o[n] || ve(s[i]) || ve(o.style[i])) - (ve(s[r]) || 0) - (ve(s[a]) || 0) | 0;
        },
        pathToImage: function(t, e) {
            e = e || this.dpr;
            var i = document.createElement("canvas"), n = i.getContext("2d"), r = t.getBoundingRect(), a = t.style, o = a.shadowBlur * e, s = a.shadowOffsetX * e, l = a.shadowOffsetY * e, h = a.hasStroke() ? a.lineWidth : 0, u = Math.max(h / 2, -s + o), c = Math.max(h / 2, s + o), d = Math.max(h / 2, -l + o), f = Math.max(h / 2, l + o), p = r.width + u + c, g = r.height + d + f;
            i.width = p * e, i.height = g * e, n.scale(e, e), n.clearRect(0, 0, p, g), n.dpr = e;
            var v = {
                position: t.position,
                rotation: t.rotation,
                scale: t.scale
            };
            t.position = [ u - r.x, d - r.y ], t.rotation = 0, t.scale = [ 1, 1 ], t.updateTransform(), 
            t && t.brush(n);
            var m = new ge({
                style: {
                    x: 0,
                    y: 0,
                    image: i
                }
            });
            return null != v.position && (m.position = t.position = v.position), null != v.rotation && (m.rotation = t.rotation = v.rotation), 
            null != v.scale && (m.scale = t.scale = v.scale), m;
        }
    };
    var Qs = "undefined" != typeof window && !!window.addEventListener, Js = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, tl = function(t) {
        t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function() {}, 
        this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, 
        this._paused = !1, qo.call(this);
    };
    tl.prototype = {
        constructor: tl,
        addClip: function(t) {
            this._clips.push(t);
        },
        addAnimator: function(t) {
            t.animation = this;
            for (var e = t.getClips(), i = 0; i < e.length; i++) this.addClip(e[i]);
        },
        removeClip: function(t) {
            var e = d(this._clips, t);
            0 <= e && this._clips.splice(e, 1);
        },
        removeAnimator: function(t) {
            for (var e = t.getClips(), i = 0; i < e.length; i++) this.removeClip(e[i]);
            t.animation = null;
        },
        _update: function() {
            for (var t = new Date().getTime() - this._pausedTime, e = t - this._time, i = this._clips, n = i.length, r = [], a = [], o = 0; o < n; o++) {
                var s = i[o], l = s.step(t, e);
                l && (r.push(l), a.push(s));
            }
            for (o = 0; o < n; ) i[o]._needsRemove ? (i[o] = i[n - 1], i.pop(), n--) : o++;
            n = r.length;
            for (o = 0; o < n; o++) a[o].fire(r[o]);
            this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update();
        },
        _startLoop: function() {
            var e = this;
            this._running = !0, Bs(function t() {
                e._running && (Bs(t), !e._paused && e._update());
            });
        },
        start: function() {
            this._time = new Date().getTime(), this._pausedTime = 0, this._startLoop();
        },
        stop: function() {
            this._running = !1;
        },
        pause: function() {
            this._paused || (this._pauseStart = new Date().getTime(), this._paused = !0);
        },
        resume: function() {
            this._paused && (this._pausedTime += new Date().getTime() - this._pauseStart, this._paused = !1);
        },
        clear: function() {
            this._clips = [];
        },
        isFinished: function() {
            return !this._clips.length;
        },
        animate: function(t, e) {
            var i = new hs(t, (e = e || {}).loop, e.getter, e.setter);
            return this.addAnimator(i), i;
        }
    }, e(tl, qo);
    var el = function() {
        this._track = [];
    };
    el.prototype = {
        constructor: el,
        recognize: function(t, e, i) {
            return this._doTrack(t, e, i), this._recognize(t);
        },
        clear: function() {
            return this._track.length = 0, this;
        },
        _doTrack: function(t, e, i) {
            var n = t.touches;
            if (n) {
                for (var r = {
                    points: [],
                    touches: [],
                    target: e,
                    event: t
                }, a = 0, o = n.length; a < o; a++) {
                    var s = n[a], l = me(i, s, {});
                    r.points.push([ l.zrX, l.zrY ]), r.touches.push(s);
                }
                this._track.push(r);
            }
        },
        _recognize: function(t) {
            for (var e in il) if (il.hasOwnProperty(e)) {
                var i = il[e](this._track, t);
                if (i) return i;
            }
        }
    };
    var il = {
        pinch: function(t, e) {
            var i, n = t.length;
            if (n) {
                var r = (t[n - 1] || {}).points, a = (t[n - 2] || {}).points || r;
                if (a && 1 < a.length && r && 1 < r.length) {
                    var o = xe(r) / xe(a);
                    !isFinite(o) && (o = 1), e.pinchScale = o;
                    var s = [ ((i = r)[0][0] + i[1][0]) / 2, (i[0][1] + i[1][1]) / 2 ];
                    return e.pinchX = s[0], e.pinchY = s[1], {
                        type: "pinch",
                        target: t[0].target,
                        event: e
                    };
                }
            }
        }
    }, nl = [ "click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu" ], rl = [ "touchstart", "touchend", "touchmove" ], al = {
        pointerdown: 1,
        pointerup: 1,
        pointermove: 1,
        pointerout: 1
    }, ol = I(nl, function(t) {
        var e = t.replace("mouse", "pointer");
        return al[e] ? e : t;
    }), sl = {
        mousemove: function(t) {
            t = _e(this.dom, t), this.trigger("mousemove", t);
        },
        mouseout: function(t) {
            var e = (t = _e(this.dom, t)).toElement || t.relatedTarget;
            if (e != this.dom) for (;e && 9 != e.nodeType; ) {
                if (e === this.dom) return;
                e = e.parentNode;
            }
            this.trigger("mouseout", t);
        },
        touchstart: function(t) {
            (t = _e(this.dom, t)).zrByTouch = !0, this._lastTouchMoment = new Date(), be(this, t, "start"), 
            sl.mousemove.call(this, t), sl.mousedown.call(this, t), Me(this);
        },
        touchmove: function(t) {
            (t = _e(this.dom, t)).zrByTouch = !0, be(this, t, "change"), sl.mousemove.call(this, t), 
            Me(this);
        },
        touchend: function(t) {
            (t = _e(this.dom, t)).zrByTouch = !0, be(this, t, "end"), sl.mouseup.call(this, t), 
            +new Date() - this._lastTouchMoment < 300 && sl.click.call(this, t), Me(this);
        },
        pointerdown: function(t) {
            sl.mousedown.call(this, t);
        },
        pointermove: function(t) {
            Se(t) || sl.mousemove.call(this, t);
        },
        pointerup: function(t) {
            sl.mouseup.call(this, t);
        },
        pointerout: function(t) {
            Se(t) || sl.mouseout.call(this, t);
        }
    };
    N([ "click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu" ], function(e) {
        sl[e] = function(t) {
            t = _e(this.dom, t), this.trigger(e, t);
        };
    });
    var ll = Ce.prototype;
    ll.dispose = function() {
        for (var t = nl.concat(rl), e = 0; e < t.length; e++) {
            var i = t[e];
            n = this.dom, r = we(i), a = this._handlers[i], Qs ? n.removeEventListener(r, a) : n.detachEvent("on" + r, a);
        }
        var n, r, a;
    }, ll.setCursor = function(t) {
        this.dom.style && (this.dom.style.cursor = t || "default");
    }, e(Ce, qo);
    var hl = !ko.canvasSupported, ul = {
        canvas: Ks
    }, cl = function(t, e, i) {
        i = i || {}, this.dom = e, this.id = t;
        var n = this, r = new ks(), a = i.renderer;
        if (hl) {
            if (!ul.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
            a = "vml";
        } else a && ul[a] || (a = "canvas");
        var o = new ul[a](e, r, i, t);
        this.storage = r, this.painter = o;
        var s = ko.node || ko.worker ? null : new Ce(o.getViewportRoot());
        this.handler = new Yo(r, o, s, o.root), this.animation = new tl({
            stage: {
                update: c(this.flush, this)
            }
        }), this.animation.start(), this._needsRefresh;
        var l = r.delFromStorage, h = r.addToStorage;
        r.delFromStorage = function(t) {
            l.call(r, t), t && t.removeSelfFromZr(n);
        }, r.addToStorage = function(t) {
            h.call(r, t), t.addSelfToZr(n);
        };
    };
    cl.prototype = {
        constructor: cl,
        getId: function() {
            return this.id;
        },
        add: function(t) {
            this.storage.addRoot(t), this._needsRefresh = !0;
        },
        remove: function(t) {
            this.storage.delRoot(t), this._needsRefresh = !0;
        },
        configLayer: function(t, e) {
            this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0;
        },
        setBackgroundColor: function(t) {
            this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0;
        },
        refreshImmediately: function() {
            this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1;
        },
        refresh: function() {
            this._needsRefresh = !0;
        },
        flush: function() {
            var t;
            this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0, 
            this.refreshHoverImmediately()), t && this.trigger("rendered");
        },
        addHover: function(t, e) {
            this.painter.addHover && (this.painter.addHover(t, e), this.refreshHover());
        },
        removeHover: function(t) {
            this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover());
        },
        clearHover: function() {
            this.painter.clearHover && (this.painter.clearHover(), this.refreshHover());
        },
        refreshHover: function() {
            this._needsRefreshHover = !0;
        },
        refreshHoverImmediately: function() {
            this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover();
        },
        resize: function(t) {
            t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize();
        },
        clearAnimation: function() {
            this.animation.clear();
        },
        getWidth: function() {
            return this.painter.getWidth();
        },
        getHeight: function() {
            return this.painter.getHeight();
        },
        pathToImage: function(t, e) {
            return this.painter.pathToImage(t, e);
        },
        setCursorStyle: function(t) {
            this.handler.setCursorStyle(t);
        },
        findHover: function(t, e) {
            return this.handler.findHover(t, e);
        },
        on: function(t, e, i) {
            this.handler.on(t, e, i);
        },
        off: function(t, e) {
            this.handler.off(t, e);
        },
        trigger: function(t, e) {
            this.handler.trigger(t, e);
        },
        clear: function() {
            this.storage.delRoot(), this.painter.clear();
        },
        dispose: function() {
            this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), 
            this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null;
        }
    };
    var dl = N, fl = k, pl = M, gl = "series\0", vl = [ "fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding" ], ml = 0, yl = ".", _l = "___EC__COMPONENT__CONTAINER___", xl = 0, wl = function(s) {
        for (var t = 0; t < s.length; t++) s[t][1] || (s[t][1] = s[t][0]);
        return function(t, e, i) {
            for (var n = {}, r = 0; r < s.length; r++) {
                var a = s[r][1];
                if (!(e && 0 <= d(e, a) || i && d(i, a) < 0)) {
                    var o = t.getShallow(a);
                    null != o && (n[s[r][0]] = o);
                }
            }
            return n;
        };
    }, bl = wl([ [ "lineWidth", "width" ], [ "stroke", "color" ], [ "opacity" ], [ "shadowBlur" ], [ "shadowOffsetX" ], [ "shadowOffsetY" ], [ "shadowColor" ] ]), Ml = {
        getLineStyle: function(t) {
            var e = bl(this, t), i = this.getLineDash(e.lineWidth);
            return i && (e.lineDash = i), e;
        },
        getLineDash: function(t) {
            null == t && (t = 1);
            var e = this.get("type"), i = Math.max(t, 2), n = 4 * t;
            return "solid" === e || null == e ? null : "dashed" === e ? [ n, n ] : [ i, i ];
        }
    }, Sl = wl([ [ "fill", "color" ], [ "shadowBlur" ], [ "shadowOffsetX" ], [ "shadowOffsetY" ], [ "opacity" ], [ "shadowColor" ] ]), Cl = {
        getAreaStyle: function(t, e) {
            return Sl(this, t, e);
        }
    }, kl = Math.pow, Tl = Math.sqrt, Il = 1e-8, Dl = 1e-4, Al = Tl(3), Ll = 1 / 3, Pl = i(), Ol = i(), El = i(), Rl = Math.min, Bl = Math.max, Nl = Math.sin, zl = Math.cos, Fl = 2 * Math.PI, Vl = i(), Wl = i(), Hl = i(), Gl = [], ql = [], Xl = {
        M: 1,
        L: 2,
        C: 3,
        Q: 4,
        A: 5,
        Z: 6,
        R: 7
    }, Ul = [], Yl = [], jl = [], Zl = [], $l = Math.min, Kl = Math.max, Ql = Math.cos, Jl = Math.sin, th = Math.sqrt, eh = Math.abs, ih = "undefined" != typeof Float32Array, nh = function(t) {
        this._saveData = !t, this._saveData && (this.data = []), this._ctx = null;
    };
    nh.prototype = {
        constructor: nh,
        _xi: 0,
        _yi: 0,
        _x0: 0,
        _y0: 0,
        _ux: 0,
        _uy: 0,
        _len: 0,
        _lineDash: null,
        _dashOffset: 0,
        _dashIdx: 0,
        _dashSum: 0,
        setScale: function(t, e) {
            this._ux = eh(1 / cs / t) || 0, this._uy = eh(1 / cs / e) || 0;
        },
        getContext: function() {
            return this._ctx;
        },
        beginPath: function(t) {
            return (this._ctx = t) && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), 
            this._lineDash && (this._lineDash = null, this._dashOffset = 0), this;
        },
        moveTo: function(t, e) {
            return this.addData(Xl.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, 
            this._y0 = e, this._xi = t, this._yi = e, this;
        },
        lineTo: function(t, e) {
            var i = eh(t - this._xi) > this._ux || eh(e - this._yi) > this._uy || this._len < 5;
            return this.addData(Xl.L, t, e), this._ctx && i && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), 
            i && (this._xi = t, this._yi = e), this;
        },
        bezierCurveTo: function(t, e, i, n, r, a) {
            return this.addData(Xl.C, t, e, i, n, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, i, n, r, a) : this._ctx.bezierCurveTo(t, e, i, n, r, a)), 
            this._xi = r, this._yi = a, this;
        },
        quadraticCurveTo: function(t, e, i, n) {
            return this.addData(Xl.Q, t, e, i, n), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, i, n) : this._ctx.quadraticCurveTo(t, e, i, n)), 
            this._xi = i, this._yi = n, this;
        },
        arc: function(t, e, i, n, r, a) {
            return this.addData(Xl.A, t, e, i, i, n, r - n, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, n, r, a), 
            this._xi = Ql(r) * i + t, this._yi = Jl(r) * i + t, this;
        },
        arcTo: function(t, e, i, n, r) {
            return this._ctx && this._ctx.arcTo(t, e, i, n, r), this;
        },
        rect: function(t, e, i, n) {
            return this._ctx && this._ctx.rect(t, e, i, n), this.addData(Xl.R, t, e, i, n), 
            this;
        },
        closePath: function() {
            this.addData(Xl.Z);
            var t = this._ctx, e = this._x0, i = this._y0;
            return t && (this._needsDash() && this._dashedLineTo(e, i), t.closePath()), this._xi = e, 
            this._yi = i, this;
        },
        fill: function(t) {
            t && t.fill(), this.toStatic();
        },
        stroke: function(t) {
            t && t.stroke(), this.toStatic();
        },
        setLineDash: function(t) {
            if (t instanceof Array) {
                this._lineDash = t;
                for (var e = this._dashIdx = 0, i = 0; i < t.length; i++) e += t[i];
                this._dashSum = e;
            }
            return this;
        },
        setLineDashOffset: function(t) {
            return this._dashOffset = t, this;
        },
        len: function() {
            return this._len;
        },
        setData: function(t) {
            var e = t.length;
            this.data && this.data.length == e || !ih || (this.data = new Float32Array(e));
            for (var i = 0; i < e; i++) this.data[i] = t[i];
            this._len = e;
        },
        appendPath: function(t) {
            t instanceof Array || (t = [ t ]);
            for (var e = t.length, i = 0, n = this._len, r = 0; r < e; r++) i += t[r].len();
            ih && this.data instanceof Float32Array && (this.data = new Float32Array(n + i));
            for (r = 0; r < e; r++) for (var a = t[r].data, o = 0; o < a.length; o++) this.data[n++] = a[o];
            this._len = n;
        },
        addData: function(t) {
            if (this._saveData) {
                var e = this.data;
                this._len + arguments.length > e.length && (this._expandData(), e = this.data);
                for (var i = 0; i < arguments.length; i++) e[this._len++] = arguments[i];
                this._prevCmd = t;
            }
        },
        _expandData: function() {
            if (!(this.data instanceof Array)) {
                for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
                this.data = t;
            }
        },
        _needsDash: function() {
            return this._lineDash;
        },
        _dashedLineTo: function(t, e) {
            var i, n, r = this._dashSum, a = this._dashOffset, o = this._lineDash, s = this._ctx, l = this._xi, h = this._yi, u = t - l, c = e - h, d = th(u * u + c * c), f = l, p = h, g = o.length;
            for (a < 0 && (a = r + a), f -= (a %= r) * (u /= d), p -= a * (c /= d); 0 < u && f <= t || u < 0 && t <= f || 0 == u && (0 < c && p <= e || c < 0 && e <= p); ) f += u * (i = o[n = this._dashIdx]), 
            p += c * i, this._dashIdx = (n + 1) % g, 0 < u && f < l || u < 0 && l < f || 0 < c && p < h || c < 0 && h < p || s[n % 2 ? "moveTo" : "lineTo"](0 <= u ? $l(f, t) : Kl(f, t), 0 <= c ? $l(p, e) : Kl(p, e));
            u = f - t, c = p - e, this._dashOffset = -th(u * u + c * c);
        },
        _dashedBezierTo: function(t, e, i, n, r, a) {
            var o, s, l, h, u, c = this._dashSum, d = this._dashOffset, f = this._lineDash, p = this._ctx, g = this._xi, v = this._yi, m = Ue, y = 0, _ = this._dashIdx, x = f.length, w = 0;
            for (d < 0 && (d = c + d), d %= c, o = 0; o < 1; o += .1) s = m(g, t, i, r, o + .1) - m(g, t, i, r, o), 
            l = m(v, e, n, a, o + .1) - m(v, e, n, a, o), y += th(s * s + l * l);
            for (;_ < x && !(d < (w += f[_])); _++) ;
            for (o = (w - d) / y; o <= 1; ) h = m(g, t, i, r, o), u = m(v, e, n, a, o), _ % 2 ? p.moveTo(h, u) : p.lineTo(h, u), 
            o += f[_] / y, _ = (_ + 1) % x;
            _ % 2 != 0 && p.lineTo(r, a), s = r - h, l = a - u, this._dashOffset = -th(s * s + l * l);
        },
        _dashedQuadraticTo: function(t, e, i, n) {
            var r = i, a = n;
            i = (i + 2 * t) / 3, n = (n + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, 
            this._dashedBezierTo(t, e, i, n, r, a);
        },
        toStatic: function() {
            var t = this.data;
            t instanceof Array && (t.length = this._len, ih && (this.data = new Float32Array(t)));
        },
        getBoundingRect: function() {
            Ul[0] = Ul[1] = jl[0] = jl[1] = Number.MAX_VALUE, Yl[0] = Yl[1] = Zl[0] = Zl[1] = -Number.MAX_VALUE;
            for (var t = this.data, e = 0, i = 0, n = 0, r = 0, a = 0; a < t.length; ) {
                var o = t[a++];
                switch (1 == a && (n = e = t[a], r = i = t[a + 1]), o) {
                  case Xl.M:
                    e = n = t[a++], i = r = t[a++], jl[0] = n, jl[1] = r, Zl[0] = n, Zl[1] = r;
                    break;

                  case Xl.L:
                    ti(e, i, t[a], t[a + 1], jl, Zl), e = t[a++], i = t[a++];
                    break;

                  case Xl.C:
                    ei(e, i, t[a++], t[a++], t[a++], t[a++], t[a], t[a + 1], jl, Zl), e = t[a++], i = t[a++];
                    break;

                  case Xl.Q:
                    p = e, g = i, v = t[a++], m = t[a++], y = t[a], _ = t[a + 1], x = jl, w = Zl, M = b = void 0, 
                    M = $e, S = Bl(Rl((b = Qe)(p, v, y), 1), 0), C = Bl(Rl(b(g, m, _), 1), 0), k = M(p, v, y, S), 
                    T = M(g, m, _, C), x[0] = Rl(p, y, k), x[1] = Rl(g, _, T), w[0] = Bl(p, y, k), w[1] = Bl(g, _, T), 
                    e = t[a++], i = t[a++];
                    break;

                  case Xl.A:
                    var s = t[a++], l = t[a++], h = t[a++], u = t[a++], c = t[a++], d = t[a++] + c, f = (t[a++], 
                    1 - t[a++]);
                    1 == a && (n = Ql(c) * h + s, r = Jl(c) * u + l), ii(s, l, h, u, c, d, f, jl, Zl), 
                    e = Ql(d) * h + s, i = Jl(d) * u + l;
                    break;

                  case Xl.R:
                    ti(n = e = t[a++], r = i = t[a++], n + t[a++], r + t[a++], jl, Zl);
                    break;

                  case Xl.Z:
                    e = n, i = r;
                }
                H(Ul, Ul, jl), G(Yl, Yl, Zl);
            }
            var p, g, v, m, y, _, x, w, b, M, S, C, k, T;
            return 0 === a && (Ul[0] = Ul[1] = Yl[0] = Yl[1] = 0), new St(Ul[0], Ul[1], Yl[0] - Ul[0], Yl[1] - Ul[1]);
        },
        rebuildPath: function(t) {
            for (var e, i, n, r, a, o, s = this.data, l = this._ux, h = this._uy, u = this._len, c = 0; c < u; ) {
                var d = s[c++];
                switch (1 == c && (e = n = s[c], i = r = s[c + 1]), d) {
                  case Xl.M:
                    e = n = s[c++], i = r = s[c++], t.moveTo(n, r);
                    break;

                  case Xl.L:
                    a = s[c++], o = s[c++], (eh(a - n) > l || eh(o - r) > h || c === u - 1) && (t.lineTo(a, o), 
                    n = a, r = o);
                    break;

                  case Xl.C:
                    t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), n = s[c - 2], r = s[c - 1];
                    break;

                  case Xl.Q:
                    t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), n = s[c - 2], r = s[c - 1];
                    break;

                  case Xl.A:
                    var f = s[c++], p = s[c++], g = s[c++], v = s[c++], m = s[c++], y = s[c++], _ = s[c++], x = s[c++], w = v < g ? g : v, b = v < g ? 1 : g / v, M = v < g ? v / g : 1, S = m + y;
                    .001 < Math.abs(g - v) ? (t.translate(f, p), t.rotate(_), t.scale(b, M), t.arc(0, 0, w, m, S, 1 - x), 
                    t.scale(1 / b, 1 / M), t.rotate(-_), t.translate(-f, -p)) : t.arc(f, p, w, m, S, 1 - x), 
                    1 == c && (e = Ql(m) * g + f, i = Jl(m) * v + p), n = Ql(S) * g + f, r = Jl(S) * v + p;
                    break;

                  case Xl.R:
                    e = n = s[c], i = r = s[c + 1], t.rect(s[c++], s[c++], s[c++], s[c++]);
                    break;

                  case Xl.Z:
                    t.closePath(), n = e, r = i;
                }
            }
        }
    }, nh.CMD = Xl;
    var rh = 2 * Math.PI, ah = 2 * Math.PI, oh = nh.CMD, sh = 2 * Math.PI, lh = 1e-4, hh = [ -1, -1, -1 ], uh = [ -1, -1 ], ch = Es.prototype.getCanvasPattern, dh = Math.abs, fh = new nh(!0);
    fi.prototype = {
        constructor: fi,
        type: "path",
        __dirtyPath: !0,
        strokeContainThreshold: 5,
        brush: function(t, e) {
            var i, n = this.style, r = this.path || fh, a = n.hasStroke(), o = n.hasFill(), s = n.fill, l = n.stroke, h = o && !!s.colorStops, u = a && !!l.colorStops, c = o && !!s.image, d = a && !!l.image;
            (n.bind(t, this, e), this.setTransform(t), this.__dirty) && (h && (i = i || this.getBoundingRect(), 
            this._fillGradient = n.getGradient(t, s, i)), u && (i = i || this.getBoundingRect(), 
            this._strokeGradient = n.getGradient(t, l, i)));
            h ? t.fillStyle = this._fillGradient : c && (t.fillStyle = ch.call(s, t)), u ? t.strokeStyle = this._strokeGradient : d && (t.strokeStyle = ch.call(l, t));
            var f = n.lineDash, p = n.lineDashOffset, g = !!t.setLineDash, v = this.getGlobalScale();
            r.setScale(v[0], v[1]), this.__dirtyPath || f && !g && a ? (r.beginPath(t), f && !g && (r.setLineDash(f), 
            r.setLineDashOffset(p)), this.buildPath(r, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), 
            this.path.rebuildPath(t)), o && r.fill(t), f && g && (t.setLineDash(f), t.lineDashOffset = p), 
            a && r.stroke(t), f && g && t.setLineDash([]), null != n.text && (this.restoreTransform(t), 
            this.drawRectText(t, this.getBoundingRect()));
        },
        buildPath: function() {},
        createPathProxy: function() {
            this.path = new nh();
        },
        getBoundingRect: function() {
            var t = this._rect, e = this.style, i = !t;
            if (i) {
                var n = this.path;
                n || (n = this.path = new nh()), this.__dirtyPath && (n.beginPath(), this.buildPath(n, this.shape, !1)), 
                t = n.getBoundingRect();
            }
            if (this._rect = t, e.hasStroke()) {
                var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
                if (this.__dirty || i) {
                    r.copy(t);
                    var a = e.lineWidth, o = e.strokeNoScale ? this.getLineScale() : 1;
                    e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), 1e-10 < o && (r.width += a / o, 
                    r.height += a / o, r.x -= a / o / 2, r.y -= a / o / 2);
                }
                return r;
            }
            return t;
        },
        contain: function(t, e) {
            var i = this.transformCoordToLocal(t, e), n = this.getBoundingRect(), r = this.style;
            if (t = i[0], e = i[1], n.contain(t, e)) {
                var a = this.path.data;
                if (r.hasStroke()) {
                    var o = r.lineWidth, s = r.strokeNoScale ? this.getLineScale() : 1;
                    if (1e-10 < s && (r.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), 
                    di(a, o / s, !0, t, e))) return !0;
                }
                if (r.hasFill()) return di(a, 0, !1, t, e);
            }
            return !1;
        },
        dirty: function(t) {
            null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = !0, 
            this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty();
        },
        animateShape: function(t) {
            return this.animate("shape", t);
        },
        attrKV: function(t, e) {
            "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : pe.prototype.attrKV.call(this, t, e);
        },
        setShape: function(t, e) {
            var i = this.shape;
            if (i) {
                if (k(t)) for (var n in t) t.hasOwnProperty(n) && (i[n] = t[n]); else i[t] = e;
                this.dirty(!0);
            }
            return this;
        },
        getLineScale: function() {
            var t = this.transform;
            return t && 1e-10 < dh(t[0] - 1) && 1e-10 < dh(t[3] - 1) ? Math.sqrt(dh(t[0] * t[3] - t[2] * t[1])) : 1;
        }
    }, fi.extend = function(r) {
        var t = function(t) {
            fi.call(this, t), r.style && this.style.extendFrom(r.style, !1);
            var e = r.shape;
            if (e) {
                this.shape = this.shape || {};
                var i = this.shape;
                for (var n in e) !i.hasOwnProperty(n) && e.hasOwnProperty(n) && (i[n] = e[n]);
            }
            r.init && r.init.call(this, t);
        };
        for (var e in n(t, fi), r) "style" !== e && "shape" !== e && (t.prototype[e] = r[e]);
        return t;
    }, n(fi, pe);
    var ph = nh.CMD, gh = [ [], [], [] ], vh = Math.sqrt, mh = Math.atan2, yh = function(t, e) {
        var i, n, r, a, o, s = t.data, l = ph.M, h = ph.C, u = ph.L, c = ph.R, d = ph.A, f = ph.Q;
        for (a = r = 0; r < s.length; ) {
            switch (i = s[r++], a = r, n = 0, i) {
              case l:
              case u:
                n = 1;
                break;

              case h:
                n = 3;
                break;

              case f:
                n = 2;
                break;

              case d:
                var p = e[4], g = e[5], v = vh(e[0] * e[0] + e[1] * e[1]), m = vh(e[2] * e[2] + e[3] * e[3]), y = mh(-e[1] / m, e[0] / v);
                s[r] *= v, s[r++] += p, s[r] *= m, s[r++] += g, s[r++] *= v, s[r++] *= m, s[r++] += y, 
                s[r++] += y, a = r += 2;
                break;

              case c:
                _[0] = s[r++], _[1] = s[r++], W(_, _, e), s[a++] = _[0], s[a++] = _[1], _[0] += s[r++], 
                _[1] += s[r++], W(_, _, e), s[a++] = _[0], s[a++] = _[1];
            }
            for (o = 0; o < n; o++) {
                var _;
                (_ = gh[o])[0] = s[r++], _[1] = s[r++], W(_, _, e), s[a++] = _[0], s[a++] = _[1];
            }
        }
    }, _h = [ "m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A" ], xh = Math.sqrt, wh = Math.sin, bh = Math.cos, Mh = Math.PI, Sh = function(t) {
        return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
    }, Ch = function(t, e) {
        return (t[0] * e[0] + t[1] * e[1]) / (Sh(t) * Sh(e));
    }, kh = function(t, e) {
        return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(Ch(t, e));
    }, Th = function(t) {
        pe.call(this, t);
    };
    Th.prototype = {
        constructor: Th,
        type: "text",
        brush: function(t, e) {
            var i = this.style;
            this.__dirty && Jt(i), i.fill = i.stroke = i.shadowBlur = i.shadowColor = i.shadowOffsetX = i.shadowOffsetY = null;
            var n = i.text;
            null != n && (n += ""), i.bind(t, this, e), fe(n, i) && (this.setTransform(t), ee(this, t, n, i), 
            this.restoreTransform(t));
        },
        getBoundingRect: function() {
            var t = this.style;
            if (this.__dirty && Jt(t), !this._rect) {
                var e = t.text;
                null != e ? e += "" : e = "";
                var i = Wt(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.rich);
                if (i.x += t.x || 0, i.y += t.y || 0, he(t.textStroke, t.textStrokeWidth)) {
                    var n = t.textStrokeWidth;
                    i.x -= n / 2, i.y -= n / 2, i.width += n, i.height += n;
                }
                this._rect = i;
            }
            return this._rect;
        }
    }, n(Th, pe);
    var Ih = fi.extend({
        type: "circle",
        shape: {
            cx: 0,
            cy: 0,
            r: 0
        },
        buildPath: function(t, e, i) {
            i && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0);
        }
    }), Dh = [ [ "shadowBlur", 0 ], [ "shadowColor", "#000" ], [ "shadowOffsetX", 0 ], [ "shadowOffsetY", 0 ] ], Ah = function(l) {
        return ko.browser.ie && 11 <= ko.browser.version ? function() {
            var t, e = this.__clipPaths, i = this.style;
            if (e) for (var n = 0; n < e.length; n++) {
                var r = e[n], a = r && r.shape, o = r && r.type;
                if (a && ("sector" === o && a.startAngle === a.endAngle || "rect" === o && (!a.width || !a.height))) {
                    for (var s = 0; s < Dh.length; s++) Dh[s][2] = i[Dh[s][0]], i[Dh[s][0]] = Dh[s][1];
                    t = !0;
                    break;
                }
            }
            if (l.apply(this, arguments), t) for (s = 0; s < Dh.length; s++) i[Dh[s][0]] = Dh[s][2];
        } : l;
    }, Lh = fi.extend({
        type: "sector",
        shape: {
            cx: 0,
            cy: 0,
            r0: 0,
            r: 0,
            startAngle: 0,
            endAngle: 2 * Math.PI,
            clockwise: !0
        },
        brush: Ah(fi.prototype.brush),
        buildPath: function(t, e) {
            var i = e.cx, n = e.cy, r = Math.max(e.r0 || 0, 0), a = Math.max(e.r, 0), o = e.startAngle, s = e.endAngle, l = e.clockwise, h = Math.cos(o), u = Math.sin(o);
            t.moveTo(h * r + i, u * r + n), t.lineTo(h * a + i, u * a + n), t.arc(i, n, a, o, s, !l), 
            t.lineTo(Math.cos(s) * r + i, Math.sin(s) * r + n), 0 !== r && t.arc(i, n, r, s, o, l), 
            t.closePath();
        }
    });
    fi.extend({
        type: "ring",
        shape: {
            cx: 0,
            cy: 0,
            r: 0,
            r0: 0
        },
        buildPath: function(t, e) {
            var i = e.cx, n = e.cy, r = 2 * Math.PI;
            t.moveTo(i + e.r, n), t.arc(i, n, e.r, 0, r, !1), t.moveTo(i + e.r0, n), t.arc(i, n, e.r0, 0, r, !0);
        }
    });
    fi.extend({
        type: "polygon",
        shape: {
            points: null,
            smooth: !1,
            smoothConstraint: null
        },
        buildPath: function(t, e) {
            mi(t, e, !0);
        }
    }), fi.extend({
        type: "polyline",
        shape: {
            points: null,
            smooth: !1,
            smoothConstraint: null
        },
        style: {
            stroke: "#000",
            fill: null
        },
        buildPath: function(t, e) {
            mi(t, e, !1);
        }
    });
    var Ph = fi.extend({
        type: "rect",
        shape: {
            r: 0,
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var i = e.x, n = e.y, r = e.width, a = e.height;
            e.r ? Qt(t, e) : t.rect(i, n, r, a), t.closePath();
        }
    }), Oh = fi.extend({
        type: "line",
        shape: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            percent: 1
        },
        style: {
            stroke: "#000",
            fill: null
        },
        buildPath: function(t, e) {
            var i = e.x1, n = e.y1, r = e.x2, a = e.y2, o = e.percent;
            0 !== o && (t.moveTo(i, n), o < 1 && (r = i * (1 - o) + r * o, a = n * (1 - o) + a * o), 
            t.lineTo(r, a));
        },
        pointAt: function(t) {
            var e = this.shape;
            return [ e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t ];
        }
    }), Eh = [];
    fi.extend({
        type: "bezier-curve",
        shape: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            cpx1: 0,
            cpy1: 0,
            percent: 1
        },
        style: {
            stroke: "#000",
            fill: null
        },
        buildPath: function(t, e) {
            var i = e.x1, n = e.y1, r = e.x2, a = e.y2, o = e.cpx1, s = e.cpy1, l = e.cpx2, h = e.cpy2, u = e.percent;
            0 !== u && (t.moveTo(i, n), null == l || null == h ? (u < 1 && (Je(i, o, r, u, Eh), 
            o = Eh[1], r = Eh[2], Je(n, s, a, u, Eh), s = Eh[1], a = Eh[2]), t.quadraticCurveTo(o, s, r, a)) : (u < 1 && (Ze(i, o, l, r, u, Eh), 
            o = Eh[1], l = Eh[2], r = Eh[3], Ze(n, s, h, a, u, Eh), s = Eh[1], h = Eh[2], a = Eh[3]), 
            t.bezierCurveTo(o, s, l, h, r, a)));
        },
        pointAt: function(t) {
            return yi(this.shape, t, !1);
        },
        tangentAt: function(t) {
            var e = yi(this.shape, t, !0);
            return F(e, e);
        }
    });
    var Rh = fi.extend({
        type: "arc",
        shape: {
            cx: 0,
            cy: 0,
            r: 0,
            startAngle: 0,
            endAngle: 2 * Math.PI,
            clockwise: !0
        },
        style: {
            stroke: "#000",
            fill: null
        },
        buildPath: function(t, e) {
            var i = e.cx, n = e.cy, r = Math.max(e.r, 0), a = e.startAngle, o = e.endAngle, s = e.clockwise, l = Math.cos(a), h = Math.sin(a);
            t.moveTo(l * r + i, h * r + n), t.arc(i, n, r, a, o, !s);
        }
    });
    fi.extend({
        type: "compound",
        shape: {
            paths: null
        },
        _updatePathDirty: function() {
            for (var t = this.__dirtyPath, e = this.shape.paths, i = 0; i < e.length; i++) t = t || e[i].__dirtyPath;
            this.__dirtyPath = t, this.__dirty = this.__dirty || t;
        },
        beforeBrush: function() {
            this._updatePathDirty();
            for (var t = this.shape.paths || [], e = this.getGlobalScale(), i = 0; i < t.length; i++) t[i].path || t[i].createPathProxy(), 
            t[i].path.setScale(e[0], e[1]);
        },
        buildPath: function(t, e) {
            for (var i = e.paths || [], n = 0; n < i.length; n++) i[n].buildPath(t, i[n].shape, !0);
        },
        afterBrush: function() {
            for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1;
        },
        getBoundingRect: function() {
            return this._updatePathDirty(), fi.prototype.getBoundingRect.call(this);
        }
    });
    var Bh = function(t) {
        this.colorStops = t || [];
    };
    Bh.prototype = {
        constructor: Bh,
        addColorStop: function(t, e) {
            this.colorStops.push({
                offset: t,
                color: e
            });
        }
    };
    var Nh = function(t, e, i, n, r, a) {
        this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == i ? 1 : i, 
        this.y2 = null == n ? 0 : n, this.type = "linear", this.global = a || !1, Bh.call(this, r);
    };
    Nh.prototype = {
        constructor: Nh
    }, n(Nh, Bh);
    var zh = function(t, e, i, n, r) {
        this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == i ? .5 : i, 
        this.type = "radial", this.global = r || !1, Bh.call(this, n);
    };
    zh.prototype = {
        constructor: zh
    }, n(zh, Bh), _i.prototype.incremental = !0, _i.prototype.clearDisplaybles = function() {
        this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), 
        this.notClear = !1;
    }, _i.prototype.addDisplayable = function(t, e) {
        e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty();
    }, _i.prototype.addDisplayables = function(t, e) {
        e = e || !1;
        for (var i = 0; i < t.length; i++) this.addDisplayable(t[i], e);
    }, _i.prototype.eachPendingDisplayable = function(t) {
        for (var e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
        for (e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e]);
    }, _i.prototype.update = function() {
        this.updateTransform();
        for (var t = this._cursor; t < this._displayables.length; t++) {
            (e = this._displayables[t]).parent = this, e.update(), e.parent = null;
        }
        for (t = 0; t < this._temporaryDisplayables.length; t++) {
            var e;
            (e = this._temporaryDisplayables[t]).parent = this, e.update(), e.parent = null;
        }
    }, _i.prototype.brush = function(t) {
        for (var e = this._cursor; e < this._displayables.length; e++) {
            (i = this._displayables[e]).beforeBrush && i.beforeBrush(t), i.brush(t, e === this._cursor ? null : this._displayables[e - 1]), 
            i.afterBrush && i.afterBrush(t);
        }
        this._cursor = e;
        for (e = 0; e < this._temporaryDisplayables.length; e++) {
            var i;
            (i = this._temporaryDisplayables[e]).beforeBrush && i.beforeBrush(t), i.brush(t, 0 === e ? null : this._temporaryDisplayables[e - 1]), 
            i.afterBrush && i.afterBrush(t);
        }
        this._temporaryDisplayables = [], this.notClear = !0;
    };
    var Fh = [];
    _i.prototype.getBoundingRect = function() {
        if (!this._rect) {
            for (var t = new St(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
                var i = this._displayables[e], n = i.getBoundingRect().clone();
                i.needLocalTransform() && n.applyTransform(i.getLocalTransform(Fh)), t.union(n);
            }
            this._rect = t;
        }
        return this._rect;
    }, _i.prototype.contain = function(t, e) {
        var i = this.transformCoordToLocal(t, e);
        if (this.getBoundingRect().contain(i[0], i[1])) for (var n = 0; n < this._displayables.length; n++) {
            if (this._displayables[n].contain(t, e)) return !0;
        }
        return !1;
    }, n(_i, pe);
    var Vh = Math.round, Wh = {}, Hh = [ "textStyle", "color" ], Gh = {
        getTextColor: function(t) {
            var e = this.ecModel;
            return this.getShallow("color") || (!t && e ? e.get(Hh) : null);
        },
        getFont: function() {
            return t = {
                fontStyle: this.getShallow("fontStyle"),
                fontWeight: this.getShallow("fontWeight"),
                fontSize: this.getShallow("fontSize"),
                fontFamily: this.getShallow("fontFamily")
            }, e = this.ecModel, i = e || e.getModel("textStyle"), g([ t.fontStyle || i && i.getShallow("fontStyle") || "", t.fontWeight || i && i.getShallow("fontWeight") || "", (t.fontSize || i && i.getShallow("fontSize") || 12) + "px", t.fontFamily || i && i.getShallow("fontFamily") || "sans-serif" ].join(" "));
            var t, e, i;
        },
        getTextRect: function(t) {
            return Wt(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("rich"), this.getShallow("truncateText"));
        }
    }, qh = wl([ [ "fill", "color" ], [ "stroke", "borderColor" ], [ "lineWidth", "borderWidth" ], [ "opacity" ], [ "shadowBlur" ], [ "shadowOffsetX" ], [ "shadowOffsetY" ], [ "shadowColor" ], [ "textPosition" ], [ "textAlign" ] ]), Xh = {
        getItemStyle: function(t, e) {
            var i = qh(this, t, e), n = this.getBorderLineDash();
            return n && (i.lineDash = n), i;
        },
        getBorderLineDash: function() {
            var t = this.get("borderType");
            return "solid" === t || null == t ? null : "dashed" === t ? [ 5, 5 ] : [ 1, 1 ];
        }
    }, Uh = e, Yh = Ee();
    Xi.prototype = {
        constructor: Xi,
        init: null,
        mergeOption: function(t) {
            s(this.option, t, !0);
        },
        get: function(t, e) {
            return null == t ? this.option : Ui(this.option, this.parsePath(t), !e && Yi(this, t));
        },
        getShallow: function(t, e) {
            var i = this.option, n = null == i ? i : i[t], r = !e && Yi(this, t);
            return null == n && r && (n = r.getShallow(t)), n;
        },
        getModel: function(t, e) {
            var i;
            return new Xi(null == t ? this.option : Ui(this.option, t = this.parsePath(t)), e = e || (i = Yi(this, t)) && i.getModel(t), this.ecModel);
        },
        isEmpty: function() {
            return null == this.option;
        },
        restoreData: function() {},
        clone: function() {
            return new this.constructor(b(this.option));
        },
        setReadOnly: function() {},
        parsePath: function(t) {
            return "string" == typeof t && (t = t.split(".")), t;
        },
        customizeGetParent: function(t) {
            Yh(this).getParent = t;
        },
        isAnimationEnabled: function() {
            if (!ko.node) {
                if (null != this.option.animation) return !!this.option.animation;
                if (this.parentModel) return this.parentModel.isAnimationEnabled();
            }
        }
    }, Fe(Xi), Ve(Xi), Uh(Xi, Ml), Uh(Xi, Cl), Uh(Xi, Gh), Uh(Xi, Xh);
    var jh, Zh, $h = 0, Kh = 1e-4, Qh = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/, Jh = h, tu = /([&<>"'])/g, eu = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }, iu = [ "a", "b", "c", "d", "e", "f", "g" ], nu = function(t, e) {
        return "{" + t + (null == e ? "" : e) + "}";
    }, ru = qt, au = N, ou = [ "left", "right", "top", "bottom", "width", "height" ], su = [ [ "width", "left", "right" ], [ "height", "top", "bottom" ] ], lu = (r(un, "vertical"), 
    r(un, "horizontal"), {
        getBoxLayoutParams: function() {
            return {
                left: this.get("left"),
                top: this.get("top"),
                right: this.get("right"),
                bottom: this.get("bottom"),
                width: this.get("width"),
                height: this.get("height")
            };
        }
    }), hu = Ee(), uu = Xi.extend({
        type: "component",
        id: "",
        name: "",
        mainType: "",
        subType: "",
        componentIndex: 0,
        defaultOption: null,
        ecModel: null,
        dependentModels: [],
        uid: null,
        layoutMode: null,
        $constructor: function(t, e, i, n) {
            Xi.call(this, t, e, i, n), this.uid = ji("ec_cpt_model");
        },
        init: function(t, e, i) {
            this.mergeDefaultAndTheme(t, i);
        },
        mergeDefaultAndTheme: function(t, e) {
            var i = this.layoutMode, n = i ? dn(t) : {};
            s(t, e.getTheme().get(this.mainType)), s(t, this.getDefaultOption()), i && cn(t, n, i);
        },
        mergeOption: function(t) {
            s(this.option, t, !0);
            var e = this.layoutMode;
            e && cn(this.option, t, e);
        },
        optionUpdated: function() {},
        getDefaultOption: function() {
            var t = hu(this);
            if (!t.defaultOption) {
                for (var e = [], i = this.constructor; i; ) {
                    var n = i.prototype.defaultOption;
                    n && e.push(n), i = i.superClass;
                }
                for (var r = {}, a = e.length - 1; 0 <= a; a--) r = s(r, e[a], !0);
                t.defaultOption = r;
            }
            return t.defaultOption;
        },
        getReferringComponents: function(t) {
            return this.ecModel.queryComponents({
                mainType: t,
                index: this.get(t + "Index", !0),
                id: this.get(t + "Id", !0)
            });
        }
    });
    Ge(uu, {
        registerWhenExtend: !0
    }), Zh = {}, (jh = uu).registerSubTypeDefaulter = function(t, e) {
        t = ze(t), Zh[t.main] = e;
    }, jh.determineSubType = function(t, e) {
        var i = e.type;
        if (!i) {
            var n = ze(t).main;
            jh.hasSubTypes(t) && Zh[n] && (i = Zh[n](e));
        }
        return i;
    }, function(t, h) {
        function f(o) {
            var s = {}, l = [];
            return N(o, function(i) {
                var e, n, r = u(s, i), t = r.originalDeps = h(i), a = (e = o, n = [], N(t, function(t) {
                    0 <= d(e, t) && n.push(t);
                }), n);
                r.entryCount = a.length, 0 === r.entryCount && l.push(i), N(a, function(t) {
                    d(r.predecessor, t) < 0 && r.predecessor.push(t);
                    var e = u(s, t);
                    d(e.successor, t) < 0 && e.successor.push(i);
                });
            }), {
                graph: s,
                noEntryList: l
            };
        }
        function u(t, e) {
            return t[e] || (t[e] = {
                predecessor: [],
                successor: []
            }), t[e];
        }
        t.topologicalTravel = function(t, e, i, n) {
            function r(t) {
                s[t].entryCount--, 0 === s[t].entryCount && l.push(t);
            }
            function a(t) {
                h[t] = !0, r(t);
            }
            if (t.length) {
                var o = f(e), s = o.graph, l = o.noEntryList, h = {};
                for (N(t, function(t) {
                    h[t] = !0;
                }); l.length; ) {
                    var u = l.pop(), c = s[u], d = !!h[u];
                    d && (i.call(n, u, c.originalDeps.slice()), delete h[u]), N(c.successor, d ? a : r);
                }
                N(h, function() {
                    throw new Error("Circle dependency may exists");
                });
            }
        };
    }(uu, function(t) {
        var e = [];
        return N(uu.getClassesByMainType(t), function(t) {
            e = e.concat(t.prototype.dependencies || []);
        }), e = I(e, function(t) {
            return ze(t).main;
        }), "dataset" !== t && d(e, "dataset") <= 0 && e.unshift("dataset"), e;
    }), e(uu, lu);
    var cu = "";
    "undefined" != typeof navigator && (cu = navigator.platform || "");
    var du = {
        color: [ "#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3" ],
        gradientColor: [ "#f6efa6", "#d88273", "#bf444c" ],
        textStyle: {
            fontFamily: cu.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: "normal"
        },
        blendMode: null,
        animation: "auto",
        animationDuration: 1e3,
        animationDurationUpdate: 300,
        animationEasing: "exponentialOut",
        animationEasingUpdate: "cubicOut",
        animationThreshold: 2e3,
        progressiveThreshold: 3e3,
        progressive: 400,
        hoverLayerThreshold: 3e3,
        useUTC: !1
    }, fu = Ee(), pu = {
        clearColorPalette: function() {
            fu(this).colorIdx = 0, fu(this).colorNameMap = {};
        },
        getColorFromPalette: function(t, e, i) {
            var n = fu(e = e || this), r = n.colorIdx || 0, a = n.colorNameMap = n.colorNameMap || {};
            if (a.hasOwnProperty(t)) return a[t];
            var o = Te(this.get("color", !0)), s = this.get("colorLayer", !0), l = null != i && s ? function(t, e) {
                for (var i = t.length, n = 0; n < i; n++) if (t[n].length > e) return t[n];
                return t[i - 1];
            }(s, i) : o;
            if ((l = l || o) && l.length) {
                var h = l[r];
                return t && (a[t] = h), n.colorIdx = (r + 1) % l.length, h;
            }
        }
    }, gu = {
        cartesian2d: function(t, e, i, n) {
            var r = t.getReferringComponents("xAxis")[0], a = t.getReferringComponents("yAxis")[0];
            e.coordSysDims = [ "x", "y" ], i.set("x", r), i.set("y", a), pn(r) && (n.set("x", r), 
            e.firstCategoryDimIndex = 0), pn(a) && (n.set("y", a), e.firstCategoryDimIndex = 1);
        },
        singleAxis: function(t, e, i, n) {
            var r = t.getReferringComponents("singleAxis")[0];
            e.coordSysDims = [ "single" ], i.set("single", r), pn(r) && (n.set("single", r), 
            e.firstCategoryDimIndex = 0);
        },
        polar: function(t, e, i, n) {
            var r = t.getReferringComponents("polar")[0], a = r.findAxisModel("radiusAxis"), o = r.findAxisModel("angleAxis");
            e.coordSysDims = [ "radius", "angle" ], i.set("radius", a), i.set("angle", o), pn(a) && (n.set("radius", a), 
            e.firstCategoryDimIndex = 0), pn(o) && (n.set("angle", o), e.firstCategoryDimIndex = 1);
        },
        geo: function(t, e) {
            e.coordSysDims = [ "lng", "lat" ];
        },
        parallel: function(t, r, a, o) {
            var s = t.ecModel, e = s.getComponent("parallel", t.get("parallelIndex")), l = r.coordSysDims = e.dimensions.slice();
            N(e.parallelAxisIndex, function(t, e) {
                var i = s.getComponent("parallelAxis", t), n = l[e];
                a.set(n, i), pn(i) && null == r.firstCategoryDimIndex && (o.set(n, i), r.firstCategoryDimIndex = e);
            });
        }
    }, vu = "original", mu = "arrayRows", yu = "objectRows", _u = "keyedColumns", xu = "unknown", wu = "typedArray", bu = "column", Mu = "row";
    gn.seriesDataToSource = function(t) {
        return new gn({
            data: t,
            sourceFormat: p(t) ? wu : vu,
            fromDataset: !1
        });
    }, Ve(gn);
    var Su = Ee(), Cu = "\0_ec_inner", ku = Xi.extend({
        init: function(t, e, i, n) {
            i = i || {}, this.option = null, this._theme = new Xi(i), this._optionManager = n;
        },
        setOption: function(t, e) {
            f(!(Cu in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), 
            this.resetOption(null);
        },
        resetOption: function(t) {
            var e = !1, i = this._optionManager;
            if (!t || "recreate" === t) {
                var n = i.mountOption("recreate" === t);
                this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(n)) : xn.call(this, n), 
                e = !0;
            }
            if (("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t) {
                var r = i.getTimelineOption(this);
                r && (this.mergeOption(r), e = !0);
            }
            if (!t || "recreate" === t || "media" === t) {
                var a = i.getMediaOption(this, this._api);
                a.length && N(a, function(t) {
                    this.mergeOption(t, e = !0);
                }, this);
            }
            return e;
        },
        mergeOption: function(r) {
            var h = this.option, u = this._componentsMap, i = [];
            Su(this).datasetMap = O(), N(r, function(t, e) {
                null != t && (uu.hasClass(e) ? e && i.push(e) : h[e] = null == h[e] ? b(t) : s(h[e], t, !0));
            }), uu.topologicalTravel(i, uu.getAllClassMainTypes(), function(o, t) {
                var e, s, i = Te(r[o]), n = Ae(u.get(o), i);
                e = n, s = O(), dl(e, function(t) {
                    var e = t.exist;
                    e && s.set(e.id, t);
                }), dl(e, function(t) {
                    var e = t.option;
                    f(!e || null == e.id || !s.get(e.id) || s.get(e.id) === t, "id duplicates: " + (e && e.id)), 
                    e && null != e.id && s.set(e.id, t), !t.keyInfo && (t.keyInfo = {});
                }), dl(e, function(t, e) {
                    var i = t.exist, n = t.option, r = t.keyInfo;
                    if (fl(n)) {
                        if (r.name = null != n.name ? n.name + "" : i ? i.name : gl + e, i) r.id = i.id; else if (null != n.id) r.id = n.id + ""; else for (var a = 0; r.id = "\0" + r.name + "\0" + a++, 
                        s.get(r.id); ) ;
                        s.set(r.id, t);
                    }
                }), N(n, function(t) {
                    var e, i, n, r = t.option;
                    k(r) && (t.keyInfo.mainType = o, t.keyInfo.subType = (e = o, i = r, n = t.exist, 
                    i.type ? i.type : n ? n.subType : uu.determineSubType(e, i)));
                });
                var l = function(e, t) {
                    M(t) || (t = t ? [ t ] : []);
                    var i = {};
                    return N(t, function(t) {
                        i[t] = (e.get(t) || []).slice();
                    }), i;
                }(u, t);
                h[o] = [], u.set(o, []), N(n, function(t, e) {
                    var i = t.exist, n = t.option;
                    if (f(k(n) || i, "Empty component definition"), n) {
                        var r = uu.getClass(o, t.keyInfo.subType, !0);
                        if (i && i instanceof r) i.name = t.keyInfo.name, i.mergeOption(n, this), i.optionUpdated(n, !1); else {
                            var a = D({
                                dependentModels: l,
                                componentIndex: e
                            }, t.keyInfo);
                            D(i = new r(n, this, this, a), a), i.init(n, this, this, a), i.optionUpdated(null, !0);
                        }
                    } else i.mergeOption({}, this), i.optionUpdated({}, !1);
                    u.get(o)[e] = i, h[o][e] = i.option;
                }, this), "series" === o && wn(this, u.get("series"));
            }, this), this._seriesIndicesMap = O(this._seriesIndices = this._seriesIndices || []);
        },
        getOption: function() {
            var n = b(this.option);
            return N(n, function(t, e) {
                if (uu.hasClass(e)) {
                    for (var i = (t = Te(t)).length - 1; 0 <= i; i--) Pe(t[i]) && t.splice(i, 1);
                    n[e] = t;
                }
            }), delete n[Cu], n;
        },
        getTheme: function() {
            return this._theme;
        },
        getComponent: function(t, e) {
            var i = this._componentsMap.get(t);
            return i ? i[e || 0] : void 0;
        },
        queryComponents: function(t) {
            var e = t.mainType;
            if (!e) return [];
            var i, n = t.index, r = t.id, a = t.name, o = this._componentsMap.get(e);
            if (!o || !o.length) return [];
            if (null != n) M(n) || (n = [ n ]), i = u(I(n, function(t) {
                return o[t];
            }), function(t) {
                return !!t;
            }); else if (null != r) {
                var s = M(r);
                i = u(o, function(t) {
                    return s && 0 <= d(r, t.id) || !s && t.id === r;
                });
            } else if (null != a) {
                var l = M(a);
                i = u(o, function(t) {
                    return l && 0 <= d(a, t.name) || !l && t.name === a;
                });
            } else i = o.slice();
            return bn(i, t);
        },
        findComponents: function(t) {
            var e, i, n, r, a, o = t.query, s = t.mainType, l = (i = s + "Index", n = s + "Id", 
            r = s + "Name", !(e = o) || null == e[i] && null == e[n] && null == e[r] ? null : {
                mainType: s,
                index: e[i],
                id: e[n],
                name: e[r]
            }), h = l ? this.queryComponents(l) : this._componentsMap.get(s);
            return a = bn(h, t), t.filter ? u(a, t.filter) : a;
        },
        eachComponent: function(t, n, r) {
            var e = this._componentsMap;
            if ("function" == typeof t) r = n, n = t, e.each(function(t, i) {
                N(t, function(t, e) {
                    n.call(r, i, t, e);
                });
            }); else if (C(t)) N(e.get(t), n, r); else if (k(t)) {
                N(this.findComponents(t), n, r);
            }
        },
        getSeriesByName: function(e) {
            return u(this._componentsMap.get("series"), function(t) {
                return t.name === e;
            });
        },
        getSeriesByIndex: function(t) {
            return this._componentsMap.get("series")[t];
        },
        getSeriesByType: function(e) {
            return u(this._componentsMap.get("series"), function(t) {
                return t.subType === e;
            });
        },
        getSeries: function() {
            return this._componentsMap.get("series").slice();
        },
        getSeriesCount: function() {
            return this._componentsMap.get("series").length;
        },
        eachSeries: function(i, n) {
            N(this._seriesIndices, function(t) {
                var e = this._componentsMap.get("series")[t];
                i.call(n, e, t);
            }, this);
        },
        eachRawSeries: function(t, e) {
            N(this._componentsMap.get("series"), t, e);
        },
        eachSeriesByType: function(i, n, r) {
            N(this._seriesIndices, function(t) {
                var e = this._componentsMap.get("series")[t];
                e.subType === i && n.call(r, e, t);
            }, this);
        },
        eachRawSeriesByType: function(t, e, i) {
            return N(this.getSeriesByType(t), e, i);
        },
        isSeriesFiltered: function(t) {
            return null == this._seriesIndicesMap.get(t.componentIndex);
        },
        getCurrentSeriesIndices: function() {
            return (this._seriesIndices || []).slice();
        },
        filterSeries: function(t, e) {
            wn(this, u(this._componentsMap.get("series"), t, e));
        },
        restoreData: function(i) {
            var t = this._componentsMap;
            wn(this, t.get("series"));
            var n = [];
            t.each(function(t, e) {
                n.push(e);
            }), uu.topologicalTravel(n, uu.getAllClassMainTypes(), function(e) {
                N(t.get(e), function(t) {
                    ("series" !== e || !function(t, e) {
                        if (e) {
                            var i = e.seiresIndex, n = e.seriesId, r = e.seriesName;
                            return null != i && t.componentIndex !== i || null != n && t.id !== n || null != r && t.name !== r;
                        }
                    }(t, i)) && t.restoreData();
                });
            });
        }
    });
    e(ku, pu);
    var Tu = [ "getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel" ], Iu = {};
    Sn.prototype = {
        constructor: Sn,
        create: function(i, n) {
            var r = [];
            N(Iu, function(t) {
                var e = t.create(i, n);
                r = r.concat(e || []);
            }), this._coordinateSystems = r;
        },
        update: function(e, i) {
            N(this._coordinateSystems, function(t) {
                t.update && t.update(e, i);
            });
        },
        getCoordinateSystems: function() {
            return this._coordinateSystems.slice();
        }
    }, Sn.register = function(t, e) {
        Iu[t] = e;
    }, Sn.get = function(t) {
        return Iu[t];
    };
    var Du = N, Au = b, Lu = I, Pu = s, Ou = /^(min|max)?(.+)$/;
    Cn.prototype = {
        constructor: Cn,
        setOption: function(t, e) {
            t && N(Te(t.series), function(t) {
                t && t.data && p(t.data) && v(t.data);
            }), t = Au(t, !0);
            var r, i, n = this._optionBackup, a = function(t, i, n) {
                var e, r, a = [], o = [], s = t.timeline;
                if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, a = (t.options || []).slice()), 
                t.media) {
                    r = r || {};
                    var l = t.media;
                    Du(l, function(t) {
                        t && t.option && (t.query ? o.push(t) : e || (e = t));
                    });
                }
                return r || (r = t), r.timeline || (r.timeline = s), Du([ r ].concat(a).concat(I(o, function(t) {
                    return t.option;
                })), function(e) {
                    Du(i, function(t) {
                        t(e, n);
                    });
                }), {
                    baseOption: r,
                    timelineOptions: a,
                    mediaDefault: e,
                    mediaList: o
                };
            }.call(this, t, e, !n);
            this._newBaseOption = a.baseOption, n ? (r = n.baseOption, i = a.baseOption, Du(i = i || {}, function(t, e) {
                if (null != t) {
                    var i = r[e];
                    if (uu.hasClass(e)) {
                        t = Te(t);
                        var n = Ae(i = Te(i), t);
                        r[e] = Lu(n, function(t) {
                            return t.option && t.exist ? Pu(t.exist, t.option, !0) : t.exist || t.option;
                        });
                    } else r[e] = Pu(i, t, !0);
                }
            }), a.timelineOptions.length && (n.timelineOptions = a.timelineOptions), a.mediaList.length && (n.mediaList = a.mediaList), 
            a.mediaDefault && (n.mediaDefault = a.mediaDefault)) : this._optionBackup = a;
        },
        mountOption: function(t) {
            var e = this._optionBackup;
            return this._timelineOptions = Lu(e.timelineOptions, Au), this._mediaList = Lu(e.mediaList, Au), 
            this._mediaDefault = Au(e.mediaDefault), this._currentMediaIndices = [], Au(t ? e.baseOption : this._newBaseOption);
        },
        getTimelineOption: function(t) {
            var e, i = this._timelineOptions;
            if (i.length) {
                var n = t.getComponent("timeline");
                n && (e = Au(i[n.getCurrentIndex()], !0));
            }
            return e;
        },
        getMediaOption: function() {
            var t, e, i = this._api.getWidth(), n = this._api.getHeight(), r = this._mediaList, a = this._mediaDefault, o = [], s = [];
            if (!r.length && !a) return s;
            for (var l = 0, h = r.length; l < h; l++) kn(r[l].query, i, n) && o.push(l);
            return !o.length && a && (o = [ -1 ]), o.length && (t = o, e = this._currentMediaIndices, 
            !(t.join(",") === e.join(","))) && (s = Lu(o, function(t) {
                return Au(-1 === t ? a.option : r[t].option);
            })), this._currentMediaIndices = o, s;
        }
    };
    var Eu = N, Ru = k, Bu = [ "areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine" ], Nu = function(e, t) {
        Eu(Pn(e.series), function(t) {
            Ru(t) && function(t) {
                if (Ru(t)) {
                    Tn(t), Dn(t), An(t, "label"), An(t, "upperLabel"), An(t, "edgeLabel"), t.emphasis && (An(t.emphasis, "label"), 
                    An(t.emphasis, "upperLabel"), An(t.emphasis, "edgeLabel")), (i = t.markPoint) && (Tn(i), 
                    Ln(i)), (n = t.markLine) && (Tn(n), Ln(n));
                    var e = t.markArea;
                    e && Ln(e);
                    var i, n, r = t.data;
                    if ("graph" === t.type) {
                        r = r || t.nodes;
                        var a = t.links || t.edges;
                        if (a && !p(a)) for (var o = 0; o < a.length; o++) Ln(a[o]);
                        N(t.categories, function(t) {
                            Dn(t);
                        });
                    }
                    if (r && !p(r)) for (o = 0; o < r.length; o++) Ln(r[o]);
                    if ((i = t.markPoint) && i.data) {
                        var s = i.data;
                        for (o = 0; o < s.length; o++) Ln(s[o]);
                    }
                    if ((n = t.markLine) && n.data) {
                        var l = n.data;
                        for (o = 0; o < l.length; o++) M(l[o]) ? (Ln(l[o][0]), Ln(l[o][1])) : Ln(l[o]);
                    }
                    "gauge" === t.type ? (An(t, "axisLabel"), An(t, "title"), An(t, "detail")) : "treemap" === t.type ? (In(t.breadcrumb, "itemStyle"), 
                    N(t.levels, function(t) {
                        Dn(t);
                    })) : "tree" === t.type && Dn(t.leaves);
                }
            }(t);
        });
        var i = [ "xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar" ];
        t && i.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), Eu(i, function(t) {
            Eu(Pn(e[t]), function(t) {
                t && (An(t, "axisLabel"), An(t.axisPointer, "label"));
            });
        }), Eu(Pn(e.parallel), function(t) {
            var e = t && t.parallelAxisDefault;
            An(e, "axisLabel"), An(e && e.axisPointer, "label");
        }), Eu(Pn(e.calendar), function(t) {
            In(t, "itemStyle"), An(t, "dayLabel"), An(t, "monthLabel"), An(t, "yearLabel");
        }), Eu(Pn(e.radar), function(t) {
            An(t, "name");
        }), Eu(Pn(e.geo), function(t) {
            Ru(t) && (Ln(t), Eu(Pn(t.regions), function(t) {
                Ln(t);
            }));
        }), Eu(Pn(e.timeline), function(t) {
            Ln(t), In(t, "label"), In(t, "itemStyle"), In(t, "controlStyle", !0);
            var e = t.data;
            M(e) && N(e, function(t) {
                k(t) && (In(t, "label"), In(t, "itemStyle"));
            });
        }), Eu(Pn(e.toolbox), function(t) {
            In(t, "iconStyle"), Eu(t.feature, function(t) {
                In(t, "iconStyle");
            });
        }), An(On(e.axisPointer), "label"), An(On(e.tooltip).axisPointer, "label");
    }, zu = [ [ "x", "left" ], [ "y", "top" ], [ "x2", "right" ], [ "y2", "bottom" ] ], Fu = [ "grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline" ], Vu = function(i, t) {
        Nu(i, t), i.series = Te(i.series), N(i.series, function(t) {
            if (k(t)) {
                var e = t.type;
                if (("pie" === e || "gauge" === e) && null != t.clockWise && (t.clockwise = t.clockWise), 
                "gauge" === e) {
                    var i = function(t, e) {
                        e = e.split(",");
                        for (var i = t, n = 0; n < e.length && null != (i = i && i[e[n]]); n++) ;
                        return i;
                    }(t, "pointer.color");
                    null != i && function(t, e, i, n) {
                        e = e.split(",");
                        for (var r, a = t, o = 0; o < e.length - 1; o++) null == a[r = e[o]] && (a[r] = {}), 
                        a = a[r];
                        (n || null == a[e[o]]) && (a[e[o]] = i);
                    }(t, "itemStyle.normal.color", i);
                }
                En(t);
            }
        }), i.dataRange && (i.visualMap = i.dataRange), N(Fu, function(t) {
            var e = i[t];
            e && (M(e) || (e = [ e ]), N(e, function(t) {
                En(t);
            }));
        });
    }, Wu = Bn.prototype;
    Wu.pure = !1;
    var Hu = {
        arrayRows_column: {
            pure: Wu.persistent = !0,
            count: function() {
                return Math.max(0, this._data.length - this._source.startIndex);
            },
            getItem: function(t) {
                return this._data[t + this._source.startIndex];
            },
            appendData: Fn
        },
        arrayRows_row: {
            pure: !0,
            count: function() {
                var t = this._data[0];
                return t ? Math.max(0, t.length - this._source.startIndex) : 0;
            },
            getItem: function(t) {
                t += this._source.startIndex;
                for (var e = [], i = this._data, n = 0; n < i.length; n++) {
                    var r = i[n];
                    e.push(r ? r[t] : null);
                }
                return e;
            },
            appendData: function() {
                throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
            }
        },
        objectRows: {
            pure: !0,
            count: Nn,
            getItem: zn,
            appendData: Fn
        },
        keyedColumns: {
            pure: !0,
            count: function() {
                var t = this._source.dimensionsDefine[0].name, e = this._data[t];
                return e ? e.length : 0;
            },
            getItem: function(t) {
                for (var e = [], i = this._source.dimensionsDefine, n = 0; n < i.length; n++) {
                    var r = this._data[i[n].name];
                    e.push(r ? r[t] : null);
                }
                return e;
            },
            appendData: function(t) {
                var r = this._data;
                N(t, function(t, e) {
                    for (var i = r[e] || (r[e] = []), n = 0; n < (t || []).length; n++) i.push(t[n]);
                });
            }
        },
        original: {
            count: Nn,
            getItem: zn,
            appendData: Fn
        },
        typedArray: {
            persistent: !(Wu.getSource = function() {
                return this._source;
            }),
            pure: !0,
            count: function() {
                return this._data ? this._data.length / this._dimSize : 0;
            },
            getItem: function(t, e) {
                t -= this._offset, e = e || [];
                for (var i = this._dimSize * t, n = 0; n < this._dimSize; n++) e[n] = this._data[i + n];
                return e;
            },
            appendData: function(t) {
                this._data = t;
            },
            clean: function() {
                this._offset += this.count(), this._data = null;
            }
        }
    }, Gu = {
        arrayRows: Vn,
        objectRows: function(t, e, i, n) {
            return null != i ? t[n] : t;
        },
        keyedColumns: Vn,
        original: function(t, e, i) {
            var n = De(t);
            return null != i && n instanceof Array ? n[i] : n;
        },
        typedArray: Vn
    }, qu = {
        arrayRows: Wn,
        objectRows: function(t, e) {
            return Hn(t[e], this._dimensionInfos[e]);
        },
        keyedColumns: Wn,
        original: function(t, e, i, n) {
            var r, a = t && (null == t.value ? t : t.value);
            return !this._rawData.pure && (fl(r = t) && !(r instanceof Array)) && (this.hasItemOption = !0), 
            Hn(a instanceof Array ? a[n] : a, this._dimensionInfos[e]);
        },
        typedArray: function(t, e, i, n) {
            return t[n];
        }
    }, Xu = /\{@(.+?)\}/g, Uu = {
        getDataParams: function(t, e) {
            var i = this.getData(e), n = this.getRawValue(t, e), r = i.getRawIndex(t), a = i.getName(t), o = i.getRawDataItem(t), s = i.getItemVisual(t, "color");
            return {
                componentType: this.mainType,
                componentSubType: this.subType,
                seriesType: "series" === this.mainType ? this.subType : null,
                seriesIndex: this.seriesIndex,
                seriesId: this.id,
                seriesName: this.name,
                name: a,
                dataIndex: r,
                data: o,
                dataType: e,
                value: n,
                color: s,
                marker: sn(s),
                $vars: [ "seriesName", "name", "value" ]
            };
        },
        getFormattedLabel: function(n, t, e, i, r) {
            t = t || "normal";
            var a = this.getData(e), o = a.getItemModel(n), s = this.getDataParams(n, e);
            null != i && s.value instanceof Array && (s.value = s.value[i]);
            var l = o.get("normal" === t ? [ r || "label", "formatter" ] : [ t, r || "label", "formatter" ]);
            return "function" == typeof l ? (s.status = t, l(s)) : "string" == typeof l ? function(t, e, i) {
                M(e) || (e = [ e ]);
                var n = e.length;
                if (!n) return "";
                for (var r = e[0].$vars || [], a = 0; a < r.length; a++) {
                    var o = iu[a];
                    t = t.replace(nu(o), nu(o, 0));
                }
                for (var s = 0; s < n; s++) for (var l = 0; l < r.length; l++) {
                    var h = e[s][r[l]];
                    t = t.replace(nu(iu[l], s), i ? on(h) : h);
                }
                return t;
            }(l, s).replace(Xu, function(t, e) {
                var i = e.length;
                return "[" === e.charAt(0) && "]" === e.charAt(i - 1) && (e = +e.slice(1, i - 1)), 
                Gn(a, n, e);
            }) : void 0;
        },
        getRawValue: function(t, e) {
            return Gn(this.getData(e), t);
        },
        formatTooltip: function() {}
    }, Yu = Xn.prototype;
    Yu.perform = function(t) {
        function e(t) {
            return !(1 <= t) && (t = 1), t;
        }
        var i, n = this._upstream, r = t && t.skip;
        if (this._dirty && n) {
            var a = this.context;
            a.data = a.outputData = n.context.outputData;
        }
        this.__pipeline && (this.__pipeline.currentTask = this), this._plan && !r && (i = this._plan(this.context));
        var o, s = e(this._modBy), l = this._modDataCount || 0, h = e(t && t.modBy), u = t && t.modDataCount || 0;
        (s !== h || l !== u) && (i = "reset"), (this._dirty || "reset" === i) && (this._dirty = !1, 
        o = function(t, e) {
            var i, n;
            t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null, !e && t._reset && ((i = t._reset(t.context)) && i.progress && (n = i.forceFirstProgress, 
            i = i.progress), M(i) && !i.length && (i = null)), t._progress = i, t._modBy = t._modDataCount = null;
            var r = t._downstream;
            return r && r.dirty(), n;
        }(this, r)), this._modBy = h, this._modDataCount = u;
        var c = t && t.step;
        if (this._dueEnd = n ? n._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, 
        this._progress) {
            var d = this._dueIndex, f = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);
            if (!r && (o || d < f)) {
                var p = this._progress;
                if (M(p)) for (var g = 0; g < p.length; g++) Un(this, p[g], d, f, h, u); else Un(this, p, d, f, h, u);
            }
            this._dueIndex = f;
            var v = null != this._settedOutputEnd ? this._settedOutputEnd : f;
            this._outputDueEnd = v;
        } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
        return this.unfinished();
    };
    var ju = function() {
        function r() {
            return s < o ? s++ : null;
        }
        function a() {
            var t = s % u * l + Math.ceil(s / u), e = o <= s ? null : t < h ? t : s;
            return s++, e;
        }
        var o, s, l, h, u, c = {
            reset: function(t, e, i, n) {
                s = t, o = e, l = i, h = n, u = Math.ceil(h / l), c.next = 1 < l && 0 < h ? a : r;
            }
        };
        return c;
    }();
    Yu.dirty = function() {
        this._dirty = !0, this._onDirty && this._onDirty(this.context);
    }, Yu.unfinished = function() {
        return this._progress && this._dueIndex < this._dueEnd;
    }, Yu.pipe = function(t) {
        (this._downstream !== t || this._dirty) && ((this._downstream = t)._upstream = this, 
        t.dirty());
    }, Yu.dispose = function() {
        this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), 
        this._dirty = !1, this._disposed = !0);
    }, Yu.getUpstream = function() {
        return this._upstream;
    }, Yu.getDownstream = function() {
        return this._downstream;
    }, Yu.setOutputEnd = function(t) {
        this._outputDueEnd = this._settedOutputEnd = t;
    };
    var Zu = Ee(), $u = uu.extend({
        type: "series.__base__",
        seriesIndex: 0,
        coordinateSystem: null,
        defaultOption: null,
        legendDataProvider: null,
        visualColorAccessPath: "itemStyle.color",
        layoutMode: null,
        init: function(t, e, i) {
            this.seriesIndex = this.componentIndex, this.dataTask = qn({
                count: jn,
                reset: Zn
            }), this.dataTask.context = {
                model: this
            }, this.mergeDefaultAndTheme(t, i), vn(this);
            var n = this.getInitialData(t, i);
            Kn(n, this), this.dataTask.context.data = n, Zu(this).dataBeforeProcessed = n, Yn(this);
        },
        mergeDefaultAndTheme: function(t, e) {
            var i = this.layoutMode, n = i ? dn(t) : {}, r = this.subType;
            uu.hasClass(r) && (r += "Series"), s(t, e.getTheme().get(this.subType)), s(t, this.getDefaultOption()), 
            Ie(t, "label", [ "show" ]), this.fillDataTextStyle(t.data), i && cn(t, n, i);
        },
        mergeOption: function(t, e) {
            t = s(this.option, t, !0), this.fillDataTextStyle(t.data);
            var i = this.layoutMode;
            i && cn(this.option, t, i), vn(this);
            var n = this.getInitialData(t, e);
            Kn(n, this), this.dataTask.dirty(), this.dataTask.context.data = n, Zu(this).dataBeforeProcessed = n, 
            Yn(this);
        },
        fillDataTextStyle: function(t) {
            if (t && !p(t)) for (var e = [ "show" ], i = 0; i < t.length; i++) t[i] && t[i].label && Ie(t[i], "label", e);
        },
        getInitialData: function() {},
        appendData: function(t) {
            this.getRawData().appendData(t.data);
        },
        getData: function(t) {
            var e = Jn(this);
            if (e) {
                var i = e.context.data;
                return null == t ? i : i.getLinkedData(t);
            }
            return Zu(this).data;
        },
        setData: function(t) {
            var e = Jn(this);
            if (e) {
                var i = e.context;
                i.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), i.outputData = t, 
                e !== this.dataTask && (i.data = t);
            }
            Zu(this).data = t;
        },
        getSource: function() {
            return Su(this).source;
        },
        getRawData: function() {
            return Zu(this).dataBeforeProcessed;
        },
        getBaseAxis: function() {
            var t = this.coordinateSystem;
            return t && t.getBaseAxis && t.getBaseAxis();
        },
        formatTooltip: function(i, l) {
            var h = this.getData(), n = h.mapDimension("defaultedTooltip", !0), t = n.length, e = this.getRawValue(i), r = M(e), u = h.getItemVisual(i, "color");
            k(u) && u.colorStops && (u = (u.colorStops[0] || {}).color), u = u || "transparent";
            var a = 1 < t || r && !t ? function(t) {
                function e(t, e) {
                    var i = h.getDimensionInfo(e);
                    if (i && !1 !== i.otherDims.tooltip) {
                        var n = i.type, r = sn({
                            color: u,
                            type: "subItem"
                        }), a = (o ? r + on(i.displayName || "-") + ": " : "") + on("ordinal" === n ? t + "" : "time" === n ? l ? "" : hn("yyyy/MM/dd hh:mm:ss", t) : an(t));
                        a && s.push(a);
                    }
                }
                var o = function(t, e, i, n) {
                    if (t && e) {
                        if (t.reduce && t.reduce === Ro) return t.reduce(e, i, n);
                        for (var r = 0, a = t.length; r < a; r++) i = e.call(n, i, t[r], r, t);
                        return i;
                    }
                }(t, function(t, e, i) {
                    var n = h.getDimensionInfo(i);
                    return t | (n && !1 !== n.tooltip && null != n.displayName);
                }, 0), s = [];
                return n.length ? N(n, function(t) {
                    e(Gn(h, i, t), t);
                }) : N(t, e), (o ? "<br/>" : "") + s.join(o ? "<br/>" : ", ");
            }(e) : on(an(t ? Gn(h, i, n[0]) : r ? e[0] : e)), o = sn(u), s = h.getName(i), c = this.name;
            return Le(this) || (c = ""), c = c ? on(c) + (l ? ": " : "<br/>") : "", l ? o + c + a : c + o + (s ? on(s) + ": " + a : a);
        },
        isAnimationEnabled: function() {
            if (ko.node) return !1;
            var t = this.getShallow("animation");
            return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), 
            t;
        },
        restoreData: function() {
            this.dataTask.dirty();
        },
        getColorFromPalette: function(t, e, i) {
            var n = this.ecModel, r = pu.getColorFromPalette.call(this, t, e, i);
            return r || (r = n.getColorFromPalette(t, e, i)), r;
        },
        coordDimToDataDim: function(t) {
            return this.getRawData().mapDimension(t, !0);
        },
        getProgressive: function() {
            return this.get("progressive");
        },
        getProgressiveThreshold: function() {
            return this.get("progressiveThreshold");
        },
        getAxisTooltipData: null,
        getTooltipPosition: null,
        pipeTask: null,
        preventIncremental: null,
        pipelineContext: null
    });
    e($u, Uu), e($u, pu);
    var Ku = function() {
        this.group = new Ms(), this.uid = ji("viewComponent");
    };
    Ku.prototype = {
        constructor: Ku,
        init: function() {},
        render: function() {},
        dispose: function() {}
    };
    var Qu = Ku.prototype;
    Qu.updateView = Qu.updateLayout = Qu.updateVisual = function() {}, Fe(Ku), Ge(Ku, {
        registerWhenExtend: !0
    });
    var Ju = function() {
        var s = Ee();
        return function(t) {
            var e = s(t), i = t.pipelineContext, n = e.large, r = e.progressiveRender, a = e.large = i.large, o = e.progressiveRender = i.progressiveRender;
            return !!(n ^ a || r ^ o) && "reset";
        };
    }, tc = Ee(), ec = Ju(), ic = tr.prototype = {
        type: "chart",
        init: function() {},
        render: function() {},
        highlight: function(t, e, i, n) {
            ir(t.getData(), n, "emphasis");
        },
        downplay: function(t, e, i, n) {
            ir(t.getData(), n, "normal");
        },
        remove: function() {
            this.group.removeAll();
        },
        dispose: function() {},
        incrementalPrepareRender: null,
        incrementalRender: null,
        updateTransform: null
    };
    ic.updateView = ic.updateLayout = ic.updateVisual = function(t, e, i, n) {
        this.render(t, e, i, n);
    }, Fe(tr), Ge(tr, {
        registerWhenExtend: !0
    }), tr.markUpdateMethod = function(t, e) {
        tc(t).updateMethod = e;
    };
    var nc = {
        incrementalPrepareRender: {
            progress: function(t, e) {
                e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload);
            }
        },
        render: {
            forceFirstProgress: !0,
            progress: function(t, e) {
                e.view.render(e.model, e.ecModel, e.api, e.payload);
            }
        }
    }, rc = {
        createOnAllSeries: !0,
        performRawSeries: !0,
        reset: function(e, t) {
            var i = e.getData(), n = (e.visualColorAccessPath || "itemStyle.color").split("."), r = e.get(n) || e.getColorFromPalette(e.name, null, t.getSeriesCount());
            if (i.setVisual("color", r), !t.isSeriesFiltered(e)) {
                "function" != typeof r || r instanceof Bh || i.each(function(t) {
                    i.setItemVisual(t, "color", r(e.getDataParams(t)));
                });
                return {
                    dataEach: i.hasItemOption ? function(t, e) {
                        var i = t.getItemModel(e).get(n, !0);
                        null != i && t.setItemVisual(e, "color", i);
                    } : null
                };
            }
        }
    }, ac = {
        toolbox: {
            brush: {
                title: {
                    rect: "矩形选择",
                    polygon: "圈选",
                    lineX: "横向选择",
                    lineY: "纵向选择",
                    keep: "保持选择",
                    clear: "清除选择"
                }
            },
            dataView: {
                title: "数据视图",
                lang: [ "数据视图", "关闭", "刷新" ]
            },
            dataZoom: {
                title: {
                    zoom: "区域缩放",
                    back: "区域缩放还原"
                }
            },
            magicType: {
                title: {
                    line: "切换为折线图",
                    bar: "切换为柱状图",
                    stack: "切换为堆叠",
                    tiled: "切换为平铺"
                }
            },
            restore: {
                title: "还原"
            },
            saveAsImage: {
                title: "保存为图片",
                lang: [ "右键另存为图片" ]
            }
        },
        series: {
            typeNames: {
                pie: "饼图",
                bar: "柱状图",
                line: "折线图",
                scatter: "散点图",
                effectScatter: "涟漪散点图",
                radar: "雷达图",
                tree: "树图",
                treemap: "矩形树图",
                boxplot: "箱型图",
                candlestick: "K线图",
                k: "K线图",
                heatmap: "热力图",
                map: "地图",
                parallel: "平行坐标图",
                lines: "线图",
                graph: "关系图",
                sankey: "桑基图",
                funnel: "漏斗图",
                gauge: "仪表盘图",
                pictorialBar: "象形柱图",
                themeRiver: "主题河流图",
                sunburst: "旭日图"
            }
        },
        aria: {
            general: {
                withTitle: "这是一个关于“{title}”的图表。",
                withoutTitle: "这是一个图表，"
            },
            series: {
                single: {
                    prefix: "",
                    withName: "图表类型是{seriesType}，表示{seriesName}。",
                    withoutName: "图表类型是{seriesType}。"
                },
                multiple: {
                    prefix: "它由{seriesCount}个图表系列组成。",
                    withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
                    withoutName: "第{seriesId}个系列是一个{seriesType}，",
                    separator: {
                        middle: "；",
                        end: "。"
                    }
                }
            },
            data: {
                allData: "其数据是——",
                partialData: "其中，前{displayCnt}项是——",
                withName: "{name}的数据是{value}",
                withoutName: "{value}",
                separator: {
                    middle: "，",
                    end: ""
                }
            }
        }
    }, oc = function(t, e) {
        function c(t, e) {
            if ("string" != typeof t) return t;
            var i = t;
            return N(e, function(t, e) {
                i = i.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t);
            }), i;
        }
        function d(t) {
            var e = a.get(t);
            if (null == e) {
                for (var i = t.split("."), n = ac.aria, r = 0; r < i.length; ++r) n = n[i[r]];
                return n;
            }
            return e;
        }
        var i, a = e.getModel("aria");
        if (a.get("show")) {
            if (a.get("description")) return void t.setAttribute("aria-label", a.get("description"));
            var f = 0;
            e.eachSeries(function() {
                ++f;
            }, this);
            var n, p = a.get("data.maxCount") || 10, r = a.get("series.maxCount") || 10, g = Math.min(f, r);
            if (!(f < 1)) {
                var o = ((i = e.getModel("title").option) && i.length && (i = i[0]), i && i.text);
                n = o ? c(d("general.withTitle"), {
                    title: o
                }) : d("general.withoutTitle");
                var v = [];
                n += c(d(1 < f ? "series.multiple.prefix" : "series.single.prefix"), {
                    seriesCount: f
                }), e.eachSeries(function(t, e) {
                    if (e < g) {
                        var i, n = t.get("name"), r = "series." + (1 < f ? "multiple" : "single") + ".";
                        i = c(i = d(n ? r + "withName" : r + "withoutName"), {
                            seriesId: t.seriesIndex,
                            seriesName: t.get("name"),
                            seriesType: (u = t.subType, ac.series.typeNames[u] || "自定义图")
                        });
                        var a = t.getData();
                        i += (window.data = a).count() > p ? c(d("data.partialData"), {
                            displayCnt: p
                        }) : d("data.allData");
                        for (var o = [], s = 0; s < a.count(); s++) if (s < p) {
                            var l = a.getName(s), h = Gn(a, s);
                            o.push(c(d(l ? "data.withName" : "data.withoutName"), {
                                name: l,
                                value: h
                            }));
                        }
                        i += o.join(d("data.separator.middle")) + d("data.separator.end"), v.push(i);
                    }
                    var u;
                }), n += v.join(d("series.multiple.separator.middle")) + d("series.multiple.separator.end"), 
                t.setAttribute("aria-label", n);
            }
        }
    }, sc = Math.PI, lc = ar.prototype;
    lc.restoreData = function(t, e) {
        t.restoreData(e), this._stageTaskMap.each(function(t) {
            var e = t.overallTask;
            e && e.dirty();
        });
    }, lc.getPerformArgs = function(t, e) {
        if (t.__pipeline) {
            var i = this._pipelineMap.get(t.__pipeline.id), n = i.context, r = !e && i.progressiveEnabled && (!n || n.progressiveRender) && t.__idxInPipeline > i.blockIndex ? i.step : null, a = n && n.modDataCount;
            return {
                step: r,
                modBy: null != a ? Math.ceil(a / r) : null,
                modDataCount: a
            };
        }
    }, lc.getPipeline = function(t) {
        return this._pipelineMap.get(t);
    }, lc.updateStreamModes = function(t, e) {
        var i = this._pipelineMap.get(t.uid), n = t.getData().count(), r = i.progressiveEnabled && e.incrementalPrepareRender && n >= i.threshold, a = t.get("large") && n >= t.get("largeThreshold"), o = "mod" === t.get("progressiveChunkMode") ? n : null;
        t.pipelineContext = i.context = {
            progressiveRender: r,
            modDataCount: o,
            large: a
        };
    }, lc.restorePipelines = function(t) {
        var n = this, r = n._pipelineMap = O();
        t.eachSeries(function(t) {
            var e = t.getProgressive(), i = t.uid;
            r.set(i, {
                id: i,
                head: null,
                tail: null,
                threshold: t.getProgressiveThreshold(),
                progressiveEnabled: e && !(t.preventIncremental && t.preventIncremental()),
                blockIndex: -1,
                step: Math.round(e || 700),
                count: 0
            }), gr(n, t, t.dataTask);
        });
    }, lc.prepareStageTasks = function() {
        var i = this._stageTaskMap, n = this.ecInstance.getModel(), r = this.api;
        N(this._allHandlers, function(t) {
            var e = i.get(t.uid) || i.set(t.uid, []);
            t.reset && function(n, r, t, a, o) {
                function e(t) {
                    var e = t.uid, i = s.get(e) || s.set(e, qn({
                        plan: cr,
                        reset: dr,
                        count: pr
                    }));
                    i.context = {
                        model: t,
                        ecModel: a,
                        api: o,
                        useClearVisual: r.isVisual && !r.isLayout,
                        plan: r.plan,
                        reset: r.reset,
                        scheduler: n
                    }, gr(n, t, i);
                }
                var s = t.seriesTaskMap || (t.seriesTaskMap = O()), i = r.seriesType, l = r.getTargetSeries;
                r.createOnAllSeries ? a.eachRawSeries(e) : i ? a.eachRawSeriesByType(i, e) : l && l(a, o).each(e);
                var h = n._pipelineMap;
                s.each(function(t, e) {
                    h.get(e) || (t.dispose(), s.removeKey(e));
                });
            }(this, t, e, n, r), t.overallReset && function(n, t, e, i, r) {
                function a(t) {
                    var e = t.uid, i = s.get(e);
                    i || (i = s.set(e, qn({
                        reset: lr,
                        onDirty: ur
                    })), o.dirty()), i.context = {
                        model: t,
                        overallProgress: u,
                        modifyOutputEnd: c
                    }, i.agent = o, i.__block = u, gr(n, t, i);
                }
                var o = e.overallTask = e.overallTask || qn({
                    reset: sr
                });
                o.context = {
                    ecModel: i,
                    api: r,
                    overallReset: t.overallReset,
                    scheduler: n
                };
                var s = o.agentStubMap = o.agentStubMap || O(), l = t.seriesType, h = t.getTargetSeries, u = !0, c = t.modifyOutputEnd;
                l ? i.eachRawSeriesByType(l, a) : h ? h(i, r).each(a) : (u = !1, N(i.getSeries(), a));
                var d = n._pipelineMap;
                s.each(function(t, e) {
                    d.get(e) || (t.dispose(), o.dirty(), s.removeKey(e));
                });
            }(this, t, e, n, r);
        }, this);
    }, lc.prepareView = function(t, e, i, n) {
        var r = t.renderTask, a = r.context;
        a.model = e, a.ecModel = i, a.api = n, r.__block = !t.incrementalPrepareRender, 
        gr(this, e, r);
    }, lc.performDataProcessorTasks = function(t, e) {
        or(this, this._dataProcessorHandlers, t, e, {
            block: !0
        });
    }, lc.performVisualTasks = function(t, e, i) {
        or(this, this._visualHandlers, t, e, i);
    }, lc.performSeriesTasks = function(t) {
        var e;
        t.eachSeries(function(t) {
            e |= t.dataTask.perform();
        }), this.unfinished |= e;
    }, lc.plan = function() {
        this._pipelineMap.each(function(t) {
            var e = t.tail;
            do {
                if (e.__block) {
                    t.blockIndex = e.__idxInPipeline;
                    break;
                }
                e = e.getUpstream();
            } while (e);
        });
    };
    var hc = lc.updatePayload = function(t, e) {
        "remain" !== e && (t.context.payload = e);
    }, uc = fr(0);
    ar.wrapStageHandler = function(t, e) {
        return S(t) && (t = {
            overallReset: t,
            seriesType: function(t) {
                cc = null;
                try {
                    t(dc, fc);
                } catch (t) {}
                return cc;
            }(t)
        }), t.uid = ji("stageHandler"), e && (t.visualType = e), t;
    };
    var cc, dc = {}, fc = {};
    vr(dc, ku), vr(fc, Mn), dc.eachSeriesByType = dc.eachRawSeriesByType = function(t) {
        cc = t;
    }, dc.eachComponent = function(t) {
        "series" === t.mainType && t.subType && (cc = t.subType);
    };
    var pc = [ "#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF" ], gc = {
        color: pc,
        colorLayer: [ [ "#37A2DA", "#ffd85c", "#fd7b5f" ], [ "#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5" ], [ "#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF" ], pc ]
    }, vc = "#eee", mc = function() {
        return {
            axisLine: {
                lineStyle: {
                    color: vc
                }
            },
            axisTick: {
                lineStyle: {
                    color: vc
                }
            },
            axisLabel: {
                textStyle: {
                    color: vc
                }
            },
            splitLine: {
                lineStyle: {
                    type: "dashed",
                    color: "#aaa"
                }
            },
            splitArea: {
                areaStyle: {
                    color: vc
                }
            }
        };
    }, yc = [ "#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42" ], _c = {
        color: yc,
        backgroundColor: "#333",
        tooltip: {
            axisPointer: {
                lineStyle: {
                    color: vc
                },
                crossStyle: {
                    color: vc
                }
            }
        },
        legend: {
            textStyle: {
                color: vc
            }
        },
        textStyle: {
            color: vc
        },
        title: {
            textStyle: {
                color: vc
            }
        },
        toolbox: {
            iconStyle: {
                normal: {
                    borderColor: vc
                }
            }
        },
        dataZoom: {
            textStyle: {
                color: vc
            }
        },
        visualMap: {
            textStyle: {
                color: vc
            }
        },
        timeline: {
            lineStyle: {
                color: vc
            },
            itemStyle: {
                normal: {
                    color: yc[1]
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: vc
                    }
                }
            },
            controlStyle: {
                normal: {
                    color: vc,
                    borderColor: vc
                }
            }
        },
        timeAxis: mc(),
        logAxis: mc(),
        valueAxis: mc(),
        categoryAxis: mc(),
        line: {
            symbol: "circle"
        },
        graph: {
            color: yc
        },
        gauge: {
            title: {
                textStyle: {
                    color: vc
                }
            }
        },
        candlestick: {
            itemStyle: {
                normal: {
                    color: "#FD1050",
                    color0: "#0CF49B",
                    borderColor: "#FD1050",
                    borderColor0: "#0CF49B"
                }
            }
        }
    };
    _c.categoryAxis.splitLine.show = !1, uu.extend({
        type: "dataset",
        defaultOption: {
            seriesLayoutBy: bu,
            sourceHeader: null,
            dimensions: null,
            source: null
        },
        optionUpdated: function() {
            !function(t) {
                var e = t.option.source, i = xu;
                if (p(e)) i = wu; else if (M(e)) for (var n = 0, r = e.length; n < r; n++) {
                    var a = e[n];
                    if (null != a) {
                        if (M(a)) {
                            i = mu;
                            break;
                        }
                        if (k(a)) {
                            i = yu;
                            break;
                        }
                    }
                } else if (k(e)) {
                    for (var o in e) if (e.hasOwnProperty(o) && E(e[o])) {
                        i = _u;
                        break;
                    }
                } else if (null != e) throw new Error("Invalid data");
                Su(t).sourceFormat = i;
            }(this);
        }
    }), Ku.extend({
        type: "dataset"
    });
    var xc = f, wc = N, bc = S, Mc = k, Sc = uu.parseClassType, Cc = {
        PROCESSOR: {
            FILTER: 1e3,
            STATISTIC: 5e3
        },
        VISUAL: {
            LAYOUT: 1e3,
            GLOBAL: 2e3,
            CHART: 3e3,
            COMPONENT: 4e3,
            BRUSH: 5e3
        }
    }, kc = "__flagInMainProcess", Tc = "__optionUpdated", Ic = /^[a-zA-Z0-9_]+$/;
    yr.prototype.on = mr("on"), yr.prototype.off = mr("off"), yr.prototype.one = mr("one"), 
    e(yr, qo);
    var Dc = _r.prototype;
    Dc._onframe = function() {
        if (!this._disposed) {
            var t = this._scheduler;
            if (this[Tc]) {
                var e = this[Tc].silent;
                this[kc] = !0, wr(this), Ac.update.call(this), this[kc] = !1, this[Tc] = !1, Cr.call(this, e), 
                kr.call(this, e);
            } else if (t.unfinished) {
                var i = 1, n = this._model;
                this._api;
                t.unfinished = !1;
                do {
                    var r = +new Date();
                    t.performSeriesTasks(n), t.performDataProcessorTasks(n), Mr(this, n), t.performVisualTasks(n), 
                    Ar(this, this._model, 0, "remain"), i -= +new Date() - r;
                } while (0 < i && t.unfinished);
                t.unfinished || this._zr.flush();
            }
        }
    }, Dc.getDom = function() {
        return this._dom;
    }, Dc.getZr = function() {
        return this._zr;
    }, Dc.setOption = function(t, e, i) {
        var n;
        if (Mc(e) && (i = e.lazyUpdate, n = e.silent, e = e.notMerge), this[kc] = !0, !this._model || e) {
            var r = new Cn(this._api), a = this._theme, o = this._model = new ku(null, null, a, r);
            o.scheduler = this._scheduler, o.init(null, null, a, r);
        }
        this._model.setOption(t, Rc), i ? (this[Tc] = {
            silent: n
        }, this[kc] = !1) : (wr(this), Ac.update.call(this), this._zr.flush(), this[Tc] = !1, 
        this[kc] = !1, Cr.call(this, n), kr.call(this, n));
    }, Dc.setTheme = function() {
        console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0");
    }, Dc.getModel = function() {
        return this._model;
    }, Dc.getOption = function() {
        return this._model && this._model.getOption();
    }, Dc.getWidth = function() {
        return this._zr.getWidth();
    }, Dc.getHeight = function() {
        return this._zr.getHeight();
    }, Dc.getDevicePixelRatio = function() {
        return this._zr.painter.dpr || window.devicePixelRatio || 1;
    }, Dc.getRenderedCanvas = function(t) {
        if (ko.canvasSupported) return (t = t || {}).pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor"), 
        this._zr.painter.getRenderedCanvas(t);
    }, Dc.getSvgDataUrl = function() {
        if (ko.svgSupported) {
            var t = this._zr;
            return N(t.storage.getDisplayList(), function(t) {
                t.stopAnimation(!0);
            }), t.painter.pathToDataUrl();
        }
    }, Dc.getDataURL = function(t) {
        var e = (t = t || {}).excludeComponents, i = this._model, n = [], r = this;
        wc(e, function(t) {
            i.eachComponent({
                mainType: t
            }, function(t) {
                var e = r._componentsMap[t.__viewId];
                e.group.ignore || (n.push(e), e.group.ignore = !0);
            });
        });
        var a = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
        return wc(n, function(t) {
            t.group.ignore = !1;
        }), a;
    }, Dc.getConnectedDataURL = function(n) {
        if (ko.canvasSupported) {
            var r = this.group, a = Math.min, o = Math.max;
            if (Wc[r]) {
                var s = 1 / 0, l = 1 / 0, h = -1 / 0, u = -1 / 0, c = [], i = n && n.pixelRatio || 1;
                N(Vc, function(t) {
                    if (t.group === r) {
                        var e = t.getRenderedCanvas(b(n)), i = t.getDom().getBoundingClientRect();
                        s = a(i.left, s), l = a(i.top, l), h = o(i.right, h), u = o(i.bottom, u), c.push({
                            dom: e,
                            left: i.left,
                            top: i.top
                        });
                    }
                });
                var t = (h *= i) - (s *= i), e = (u *= i) - (l *= i), d = No();
                d.width = t, d.height = e;
                var f = ke(d);
                return wc(c, function(t) {
                    var e = new ge({
                        style: {
                            x: t.left * i - s,
                            y: t.top * i - l,
                            image: t.dom
                        }
                    });
                    f.add(e);
                }), f.refreshImmediately(), d.toDataURL("image/" + (n && n.type || "png"));
            }
            return this.getDataURL(n);
        }
    }, Dc.convertToPixel = r(xr, "convertToPixel"), Dc.convertFromPixel = r(xr, "convertFromPixel"), 
    Dc.containPixel = function(t, r) {
        var a;
        return N(t = Re(this._model, t), function(t, n) {
            0 <= n.indexOf("Models") && N(t, function(t) {
                var e = t.coordinateSystem;
                if (e && e.containPoint) a |= !!e.containPoint(r); else if ("seriesModels" === n) {
                    var i = this._chartsMap[t.__viewId];
                    i && i.containPoint && (a |= i.containPoint(r, t));
                }
            }, this);
        }, this), !!a;
    }, Dc.getVisual = function(t, e) {
        var i = (t = Re(this._model, t, {
            defaultMainType: "series"
        })).seriesModel.getData(), n = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? i.indexOfRawIndex(t.dataIndex) : null;
        return null != n ? i.getItemVisual(n, e) : i.getVisual(e);
    }, Dc.getViewOfComponentModel = function(t) {
        return this._componentsMap[t.__viewId];
    }, Dc.getViewOfSeriesModel = function(t) {
        return this._chartsMap[t.__viewId];
    };
    var Ac = {
        prepareAndUpdate: function(t) {
            wr(this), Ac.update.call(this, t);
        },
        update: function(t) {
            var e = this._model, i = this._api, n = this._zr, r = this._coordSysMgr, a = this._scheduler;
            if (e) {
                a.restoreData(e, t), a.performSeriesTasks(e), r.create(e, i), a.performDataProcessorTasks(e, t), 
                Mr(this, e), r.update(e, i), Ir(e), a.performVisualTasks(e, t), Dr(this, e, i, t);
                var o = e.get("backgroundColor") || "transparent";
                if (ko.canvasSupported) n.setBackgroundColor(o); else {
                    var s = ht(o);
                    o = ct(s, "rgb"), 0 === s[3] && (o = "transparent");
                }
                Lr(e, i);
            }
        },
        updateTransform: function(r) {
            var a = this._model, o = this, s = this._api;
            if (a) {
                var l = [];
                a.eachComponent(function(t, e) {
                    var i = o.getViewOfComponentModel(e);
                    if (i && i.__alive) if (i.updateTransform) {
                        var n = i.updateTransform(e, a, s, r);
                        n && n.update && l.push(i);
                    } else l.push(i);
                });
                var n = O();
                a.eachSeries(function(t) {
                    var e = o._chartsMap[t.__viewId];
                    if (e.updateTransform) {
                        var i = e.updateTransform(t, a, s, r);
                        i && i.update && n.set(t.uid, 1);
                    } else n.set(t.uid, 1);
                }), Ir(a), this._scheduler.performVisualTasks(a, r, {
                    setDirty: !0,
                    dirtyMap: n
                }), Ar(o, a, 0, r, n), Lr(a, this._api);
            }
        },
        updateView: function(t) {
            var e = this._model;
            e && (tr.markUpdateMethod(t, "updateView"), Ir(e), this._scheduler.performVisualTasks(e, t, {
                setDirty: !0
            }), Dr(this, this._model, this._api, t), Lr(e, this._api));
        },
        updateVisual: function(t) {
            Ac.update.call(this, t);
        },
        updateLayout: function(t) {
            Ac.update.call(this, t);
        }
    };
    Dc.resize = function(t) {
        this._zr.resize(t);
        var e = this._model;
        if (this._loadingFX && this._loadingFX.resize(), e) {
            var i = e.resetOption("media"), n = t && t.silent;
            this[kc] = !0, i && wr(this), Ac.update.call(this), this[kc] = !1, Cr.call(this, n), 
            kr.call(this, n);
        }
    }, Dc.showLoading = function(t, e) {
        if (Mc(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), Fc[t]) {
            var i = Fc[t](this._api, e), n = this._zr;
            this._loadingFX = i, n.add(i);
        }
    }, Dc.hideLoading = function() {
        this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
    }, Dc.makeActionFromEvent = function(t) {
        var e = D({}, t);
        return e.type = Oc[t.type], e;
    }, Dc.dispatchAction = function(t, e) {
        if (Mc(e) || (e = {
            silent: !!e
        }), Pc[t.type] && this._model) {
            if (this[kc]) return void this._pendingActions.push(t);
            Sr.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : !1 !== e.flush && ko.browser.weChat && this._throttledZrFlush(), 
            Cr.call(this, e.silent), kr.call(this, e.silent);
        }
    }, Dc.appendData = function(t) {
        var e = t.seriesIndex;
        this.getModel().getSeriesByIndex(e).appendData(t), this._scheduler.unfinished = !0;
    }, Dc.on = mr("on"), Dc.off = mr("off"), Dc.one = mr("one");
    var Lc = [ "click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu" ];
    Dc._initEvents = function() {
        wc(Lc, function(a) {
            this._zr.on(a, function(t) {
                var e, i = this.getModel(), n = t.target;
                if ("globalout" === a) e = {}; else if (n && null != n.dataIndex) {
                    var r = n.dataModel || i.getSeriesByIndex(n.seriesIndex);
                    e = r && r.getDataParams(n.dataIndex, n.dataType) || {};
                } else n && n.eventData && (e = D({}, n.eventData));
                e && (e.event = t, e.type = a, this.trigger(a, e));
            }, this);
        }, this), wc(Oc, function(t, e) {
            this._messageCenter.on(e, function(t) {
                this.trigger(e, t);
            }, this);
        }, this);
    }, Dc.isDisposed = function() {
        return this._disposed;
    }, Dc.clear = function() {
        this.setOption({
            series: []
        }, !0);
    }, Dc.dispose = function() {
        if (!this._disposed) {
            this._disposed = !0, Ne(this.getDom(), qc, "");
            var e = this._api, i = this._model;
            wc(this._componentsViews, function(t) {
                t.dispose(i, e);
            }), wc(this._chartsViews, function(t) {
                t.dispose(i, e);
            }), this._zr.dispose(), delete Vc[this.id];
        }
    }, e(_r, qo);
    var Pc = {}, Oc = {}, Ec = [], Rc = [], Bc = [], Nc = [], zc = {}, Fc = {}, Vc = {}, Wc = {}, Hc = new Date() - 0, Gc = new Date() - 0, qc = "_echarts_instance_", Xc = {}, Uc = Or;
    Vr(2e3, rc), Br(Vu), Nr(5e3, function(t) {
        var a = O();
        t.eachSeries(function(t) {
            var e = t.get("stack");
            if (e) {
                var i = a.get(e) || a.set(e, []), n = t.getData(), r = {
                    stackResultDimension: n.getCalculationInfo("stackResultDimension"),
                    stackedOverDimension: n.getCalculationInfo("stackedOverDimension"),
                    stackedDimension: n.getCalculationInfo("stackedDimension"),
                    stackedByDimension: n.getCalculationInfo("stackedByDimension"),
                    isStackedByIndex: n.getCalculationInfo("isStackedByIndex"),
                    data: n,
                    seriesModel: t
                };
                if (!r.stackedDimension || !r.isStackedByIndex && !r.stackedByDimension) return;
                i.length && n.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), 
                i.push(r);
            }
        }), a.each(Rn);
    }), Hr("default", function(n, t) {
        T(t = t || {}, {
            text: "loading",
            color: "#c23531",
            textColor: "#000",
            maskColor: "rgba(255, 255, 255, 0.8)",
            zlevel: 0
        });
        var r = new Ph({
            style: {
                fill: t.maskColor
            },
            zlevel: t.zlevel,
            z: 1e4
        }), a = new Rh({
            shape: {
                startAngle: -sc / 2,
                endAngle: -sc / 2 + .1,
                r: 10
            },
            style: {
                stroke: t.color,
                lineCap: "round",
                lineWidth: 5
            },
            zlevel: t.zlevel,
            z: 10001
        }), o = new Ph({
            style: {
                fill: "none",
                text: t.text,
                textPosition: "right",
                textDistance: 10,
                textFill: t.textColor
            },
            zlevel: t.zlevel,
            z: 10001
        });
        a.animateShape(!0).when(1e3, {
            endAngle: 3 * sc / 2
        }).start("circularInOut"), a.animateShape(!0).when(1e3, {
            startAngle: 3 * sc / 2
        }).delay(300).start("circularInOut");
        var e = new Ms();
        return e.add(a), e.add(o), e.add(r), e.resize = function() {
            var t = n.getWidth() / 2, e = n.getHeight() / 2;
            a.setShape({
                cx: t,
                cy: e
            });
            var i = a.shape.r;
            o.setShape({
                x: t - i,
                y: e - i,
                width: 2 * i,
                height: 2 * i
            }), r.setShape({
                x: 0,
                y: 0,
                width: n.getWidth(),
                height: n.getHeight()
            });
        }, e.resize(), e;
    }), zr({
        type: "highlight",
        event: "highlight",
        update: "highlight"
    }, x), zr({
        type: "downplay",
        event: "downplay",
        update: "downplay"
    }, x), Rr("light", gc), Rr("dark", _c);
    Xr.prototype = {
        constructor: Xr,
        add: function(t) {
            return this._add = t, this;
        },
        update: function(t) {
            return this._update = t, this;
        },
        remove: function(t) {
            return this._remove = t, this;
        },
        execute: function() {
            var t = this._old, e = this._new, i = {}, n = [], r = [];
            for (Ur(t, {}, n, "_oldKeyGetter", this), Ur(e, i, r, "_newKeyGetter", this), a = 0; a < t.length; a++) {
                if (null != (s = i[o = n[a]])) (h = s.length) ? (1 === h && (i[o] = null), s = s.unshift()) : i[o] = null, 
                this._update && this._update(s, a); else this._remove && this._remove(a);
            }
            for (var a = 0; a < r.length; a++) {
                var o = r[a];
                if (i.hasOwnProperty(o)) {
                    var s;
                    if (null == (s = i[o])) continue;
                    if (s.length) for (var l = 0, h = s.length; l < h; l++) this._add && this._add(s[l]); else this._add && this._add(s);
                }
            }
        }
    };
    var Yc = O([ "tooltip", "label", "itemName", "itemId", "seriesName" ]), jc = k, Zc = "undefined", $c = {
        float: ("undefined" == typeof Float64Array ? "undefined" : _typeof(Float64Array)) === Zc ? Array : Float64Array,
        int: ("undefined" == typeof Int32Array ? "undefined" : _typeof(Int32Array)) === Zc ? Array : Int32Array,
        ordinal: Array,
        number: Array,
        time: Array
    }, Kc = ("undefined" == typeof Uint32Array ? "undefined" : _typeof(Uint32Array)) === Zc ? Array : Uint32Array, Qc = ("undefined" == typeof Uint16Array ? "undefined" : _typeof(Uint16Array)) === Zc ? Array : Uint16Array, Jc = [ "hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx" ], td = [ "_extent", "_approximateExtent", "_rawExtent" ], ed = function(t, e) {
        t = t || [ "x", "y" ];
        for (var i = {}, n = [], r = {}, a = 0; a < t.length; a++) {
            var o = t[a];
            C(o) && (o = {
                name: o
            });
            var s = o.name;
            o.type = o.type || "float", o.coordDim || (o.coordDim = s, o.coordDimIndex = 0), 
            o.otherDims = o.otherDims || {}, n.push(s), (i[s] = o).index = a, o.createInvertedIndices && (r[s] = []);
        }
        this.dimensions = n, this._dimensionInfos = i, this.hostModel = e, this.dataType, 
        this._indices = null, this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], 
        this._idList = [], this._optionModels = [], this._visual = {}, this._layout = {}, 
        this._itemVisuals = [], this.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], 
        this._chunkSize = 1e5, this._chunkCount = 0, this._rawData, this._rawExtent = {}, 
        this._extent = {}, this._approximateExtent = {}, this._dimensionsSummary = function(a) {
            var t = {}, o = t.encode = {}, s = O(), l = [], h = [];
            N(a.dimensions, function(t) {
                var e, r = a.getDimensionInfo(t), i = r.coordDim;
                if (i) {
                    var n = o[i];
                    o.hasOwnProperty(i) || (n = o[i] = []), n[r.coordDimIndex] = t, r.isExtraCoord || (s.set(i, 1), 
                    !("ordinal" === (e = r.type) || "time" === e) && (l[0] = t)), r.defaultTooltip && h.push(t);
                }
                Yc.each(function(t, e) {
                    var i = o[e];
                    o.hasOwnProperty(e) || (i = o[e] = []);
                    var n = r.otherDims[e];
                    null != n && !1 !== n && (i[n] = r.name);
                });
            });
            var n = [], r = {};
            s.each(function(t, e) {
                var i = o[e];
                r[e] = i[0], n = n.concat(i);
            }), t.dataDimsOnCoord = n, t.encodeFirstDimNotExtra = r;
            var e = o.label;
            e && e.length && (l = e.slice());
            var i = o.tooltip;
            return i && i.length ? h = i.slice() : h.length || (h = l.slice()), o.defaultedLabel = l, 
            o.defaultedTooltip = h, t;
        }(this), this._invertedIndicesMap = r, this._calculationInfo = {};
    }, id = ed.prototype;
    id.type = "list", id.hasItemOption = !0, id.getDimension = function(t) {
        return isNaN(t) || (t = this.dimensions[t] || t), t;
    }, id.getDimensionInfo = function(t) {
        return this._dimensionInfos[this.getDimension(t)];
    }, id.getDimensionsOnCoord = function() {
        return this._dimensionsSummary.dataDimsOnCoord.slice();
    }, id.mapDimension = function(t, e) {
        var i = this._dimensionsSummary;
        if (null == e) return i.encodeFirstDimNotExtra[t];
        var n = i.encode[t];
        return !0 === e ? (n || []).slice() : n && n[e];
    }, id.initData = function(t, e, i) {
        (gn.isInstance(t) || E(t)) && (t = new Bn(t, this.dimensions.length)), this._rawData = t, 
        this._storage = {}, this._indices = null, this._nameList = e || [], this._idList = [], 
        this._nameRepeatCount = {}, i || (this.hasItemOption = !1), this.defaultDimValueGetter = qu[this._rawData.getSource().sourceFormat], 
        this._dimValueGetter = i = i || this.defaultDimValueGetter, this._rawExtent = {}, 
        this._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = !1);
    }, id.getProvider = function() {
        return this._rawData;
    }, id.appendData = function(t) {
        var e = this._rawData, i = this.count();
        e.appendData(t);
        var n = e.count();
        e.persistent || (n += i), this._initDataFromProvider(i, n);
    }, id._initDataFromProvider = function(t, e) {
        if (!(e <= t)) {
            for (var i, n = this._chunkSize, r = this._rawData, a = this._storage, o = this.dimensions, s = o.length, l = this._dimensionInfos, h = this._nameList, u = this._idList, c = this._rawExtent, d = this._nameRepeatCount = {}, f = this._chunkCount, p = f - 1, g = 0; g < s; g++) {
                c[k = o[g]] || (c[k] = [ 1 / 0, -1 / 0 ]);
                var v = l[k];
                0 === v.otherDims.itemName && (i = this._nameDimIdx = g), 0 === v.otherDims.itemId && (this._idDimIdx = g);
                var m = $c[v.type];
                a[k] || (a[k] = []);
                var y = a[k][p];
                if (y && y.length < n) {
                    for (var _ = new m(Math.min(e - p * n, n)), x = 0; x < y.length; x++) _[x] = y[x];
                    a[k][p] = _;
                }
                for (var w = f * n; w < e; w += n) a[k].push(new m(Math.min(e - w, n)));
                this._chunkCount = a[k].length;
            }
            for (var b = new Array(s), M = t; M < e; M++) {
                b = r.getItem(M, b);
                var S = Math.floor(M / n), C = M % n;
                for (w = 0; w < s; w++) {
                    var k, T = a[k = o[w]][S], I = this._dimValueGetter(b, k, M, w);
                    T[C] = I;
                    var D = c[k];
                    I < D[0] && (D[0] = I), I > D[1] && (D[1] = I);
                }
                if (!r.pure) {
                    var A = h[M];
                    if (b && null == A) if (null != b.name) h[M] = A = b.name; else if (null != i) {
                        var L = o[i], P = a[L][S];
                        if (P) {
                            A = P[C];
                            var O = l[L].ordinalMeta;
                            O && O.categories.length && (A = O.categories[A]);
                        }
                    }
                    var E = null == b ? null : b.id;
                    null == E && null != A && (d[A] = d[A] || 0, 0 < d[E = A] && (E += "__ec__" + d[A]), 
                    d[A]++), null != E && (u[M] = E);
                }
            }
            !r.persistent && r.clean && r.clean(), this._rawCount = this._count = e, this._extent = {}, 
            N(B = (R = this)._invertedIndicesMap, function(t, e) {
                var i = R._dimensionInfos[e].ordinalMeta;
                if (i) {
                    t = B[e] = new Kc(i.categories.length);
                    for (var n = 0; n < t.length; n++) t[n] = NaN;
                    for (n = 0; n < R._count; n++) t[R.get(e, n)] = n;
                }
            });
        }
        var R, B;
    }, id.count = function() {
        return this._count;
    }, id.getIndices = function() {
        var t = this._indices;
        if (t) {
            var e = t.constructor, i = this._count;
            if (e === Array) {
                r = new e(i);
                for (var n = 0; n < i; n++) r[n] = t[n];
            } else r = new e(t.buffer, 0, i);
        } else {
            var r = new (e = Yr(this))(this.count());
            for (n = 0; n < r.length; n++) r[n] = n;
        }
        return r;
    }, id.get = function(t, e) {
        if (!(0 <= e && e < this._count)) return NaN;
        var i = this._storage;
        if (!i[t]) return NaN;
        e = this.getRawIndex(e);
        var n = Math.floor(e / this._chunkSize), r = e % this._chunkSize;
        return i[t][n][r];
    }, id.getByRawIndex = function(t, e) {
        if (!(0 <= e && e < this._rawCount)) return NaN;
        var i = this._storage[t];
        if (!i) return NaN;
        var n = Math.floor(e / this._chunkSize), r = e % this._chunkSize;
        return i[n][r];
    }, id._getFast = function(t, e) {
        var i = Math.floor(e / this._chunkSize), n = e % this._chunkSize;
        return this._storage[t][i][n];
    }, id.getValues = function(t, e) {
        var i = [];
        M(t) || (e = t, t = this.dimensions);
        for (var n = 0, r = t.length; n < r; n++) i.push(this.get(t[n], e));
        return i;
    }, id.hasValue = function(t) {
        for (var e = this._dimensionsSummary.dataDimsOnCoord, i = this._dimensionInfos, n = 0, r = e.length; n < r; n++) if ("ordinal" !== i[e[n]].type && isNaN(this.get(e[n], t))) return !1;
        return !0;
    }, id.getDataExtent = function(t) {
        t = this.getDimension(t);
        var e = [ 1 / 0, -1 / 0 ];
        if (!this._storage[t]) return e;
        var i, n = this.count();
        if (!this._indices) return this._rawExtent[t].slice();
        if (i = this._extent[t]) return i.slice();
        for (var r = (i = e)[0], a = i[1], o = 0; o < n; o++) {
            var s = this._getFast(t, this.getRawIndex(o));
            s < r && (r = s), a < s && (a = s);
        }
        return i = [ r, a ], this._extent[t] = i;
    }, id.getApproximateExtent = function(t) {
        return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t);
    }, id.setApproximateExtent = function(t, e) {
        e = this.getDimension(e), this._approximateExtent[e] = t.slice();
    }, id.getCalculationInfo = function(t) {
        return this._calculationInfo[t];
    }, id.setCalculationInfo = function(t, e) {
        jc(t) ? D(this._calculationInfo, t) : this._calculationInfo[t] = e;
    }, id.getSum = function(t) {
        var e = 0;
        if (this._storage[t]) for (var i = 0, n = this.count(); i < n; i++) {
            var r = this.get(t, i);
            isNaN(r) || (e += r);
        }
        return e;
    }, id.getMedian = function(t) {
        var e = [];
        this.each(t, function(t) {
            isNaN(t) || e.push(t);
        });
        var i = [].concat(e).sort(function(t, e) {
            return t - e;
        }), n = this.count();
        return 0 === n ? 0 : n % 2 == 1 ? i[(n - 1) / 2] : (i[n / 2] + i[n / 2 - 1]) / 2;
    }, id.rawIndexOf = function(t, e) {
        var i = (t && this._invertedIndicesMap[t])[e];
        return null == i || isNaN(i) ? -1 : i;
    }, id.indexOfName = function(t) {
        for (var e = 0, i = this.count(); e < i; e++) if (this.getName(e) === t) return e;
        return -1;
    }, id.indexOfRawIndex = function(t) {
        if (!this._indices) return t;
        if (t >= this._rawCount || t < 0) return -1;
        var e = this._indices, i = e[t];
        if (null != i && i < this._count && i === t) return t;
        for (var n = 0, r = this._count - 1; n <= r; ) {
            var a = (n + r) / 2 | 0;
            if (e[a] < t) n = a + 1; else {
                if (!(e[a] > t)) return a;
                r = a - 1;
            }
        }
        return -1;
    }, id.indicesOfNearest = function(t, e, i) {
        var n = [];
        if (!this._storage[t]) return n;
        null == i && (i = 1 / 0);
        for (var r = Number.MAX_VALUE, a = -1, o = 0, s = this.count(); o < s; o++) {
            var l = e - this.get(t, o), h = Math.abs(l);
            l <= i && h <= r && ((h < r || 0 <= l && a < 0) && (r = h, a = l, n.length = 0), 
            n.push(o));
        }
        return n;
    }, id.getRawIndex = $r, id.getRawDataItem = function(t) {
        if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));
        for (var e = [], i = 0; i < this.dimensions.length; i++) {
            var n = this.dimensions[i];
            e.push(this.get(n, t));
        }
        return e;
    }, id.getName = function(t) {
        var e = this.getRawIndex(t);
        return this._nameList[e] || Zr(this, this._nameDimIdx, e) || "";
    }, id.getId = function(t) {
        return Qr(this, this.getRawIndex(t));
    }, id.each = function(t, e, i, n) {
        if (this._count) {
            "function" == typeof t && (n = i, i = e, e = t, t = []), i = i || n || this;
            for (var r = (t = I(Jr(t), this.getDimension, this)).length, a = 0; a < this.count(); a++) switch (r) {
              case 0:
                e.call(i, a);
                break;

              case 1:
                e.call(i, this.get(t[0], a), a);
                break;

              case 2:
                e.call(i, this.get(t[0], a), this.get(t[1], a), a);
                break;

              default:
                for (var o = 0, s = []; o < r; o++) s[o] = this.get(t[o], a);
                s[o] = a, e.apply(i, s);
            }
        }
    }, id.filterSelf = function(t, e, i, n) {
        if (this._count) {
            "function" == typeof t && (n = i, i = e, e = t, t = []), i = i || n || this, t = I(Jr(t), this.getDimension, this);
            for (var r = this.count(), a = new (Yr(this))(r), o = [], s = t.length, l = 0, h = t[0], u = 0; u < r; u++) {
                var c, d = this.getRawIndex(u);
                if (0 === s) c = e.call(i, u); else if (1 === s) {
                    var f = this._getFast(h, d);
                    c = e.call(i, f, u);
                } else {
                    for (var p = 0; p < s; p++) o[p] = this._getFast(h, d);
                    o[p] = u, c = e.apply(i, o);
                }
                c && (a[l++] = d);
            }
            return l < r && (this._indices = a), this._count = l, this._extent = {}, this.getRawIndex = this._indices ? Kr : $r, 
            this;
        }
    }, id.selectRange = function(t) {
        if (this._count) {
            var e = [];
            for (var i in t) t.hasOwnProperty(i) && e.push(i);
            var n = e.length;
            if (n) {
                var r = this.count(), a = new (Yr(this))(r), o = 0, s = e[0], l = t[s][0], h = t[s][1], u = !1;
                if (!this._indices) {
                    var c = 0;
                    if (1 === n) {
                        for (var d = this._storage[e[0]], f = 0; f < this._chunkCount; f++) for (var p = d[f], g = Math.min(this._count - f * this._chunkSize, this._chunkSize), v = 0; v < g; v++) {
                            (l <= (w = p[v]) && w <= h || isNaN(w)) && (a[o++] = c), c++;
                        }
                        u = !0;
                    } else if (2 === n) {
                        d = this._storage[s];
                        var m = this._storage[e[1]], y = t[e[1]][0], _ = t[e[1]][1];
                        for (f = 0; f < this._chunkCount; f++) {
                            p = d[f];
                            var x = m[f];
                            for (g = Math.min(this._count - f * this._chunkSize, this._chunkSize), v = 0; v < g; v++) {
                                var w = p[v], b = x[v];
                                (l <= w && w <= h || isNaN(w)) && (y <= b && b <= _ || isNaN(b)) && (a[o++] = c), 
                                c++;
                            }
                        }
                        u = !0;
                    }
                }
                if (!u) if (1 === n) for (v = 0; v < r; v++) {
                    var M = this.getRawIndex(v);
                    (l <= (w = this._getFast(s, M)) && w <= h || isNaN(w)) && (a[o++] = M);
                } else for (v = 0; v < r; v++) {
                    var S = !0;
                    for (M = this.getRawIndex(v), f = 0; f < n; f++) {
                        var C = e[f];
                        ((w = this._getFast(i, M)) < t[C][0] || w > t[C][1]) && (S = !1);
                    }
                    S && (a[o++] = this.getRawIndex(v));
                }
                return o < r && (this._indices = a), this._count = o, this._extent = {}, this.getRawIndex = this._indices ? Kr : $r, 
                this;
            }
        }
    }, id.mapArray = function(t, e, i, n) {
        "function" == typeof t && (n = i, i = e, e = t, t = []), i = i || n || this;
        var r = [];
        return this.each(t, function() {
            r.push(e && e.apply(this, arguments));
        }, i), r;
    }, id.map = function(t, e, i, n) {
        i = i || n || this;
        var r = ta(this, t = I(Jr(t), this.getDimension, this));
        r._indices = this._indices, r.getRawIndex = r._indices ? Kr : $r;
        for (var a = r._storage, o = [], s = this._chunkSize, l = t.length, h = this.count(), u = [], c = r._rawExtent, d = 0; d < h; d++) {
            for (var f = 0; f < l; f++) u[f] = this.get(t[f], d);
            u[l] = d;
            var p = e && e.apply(i, u);
            if (null != p) {
                "object" != (void 0 === p ? "undefined" : _typeof(p)) && (o[0] = p, p = o);
                for (var g = this.getRawIndex(d), v = Math.floor(g / s), m = g % s, y = 0; y < p.length; y++) {
                    var _ = t[y], x = p[y], w = c[_], b = a[_];
                    b && (b[v][m] = x), x < w[0] && (w[0] = x), x > w[1] && (w[1] = x);
                }
            }
        }
        return r;
    }, id.downSample = function(t, e, i, n) {
        for (var r = ta(this, [ t ]), a = r._storage, o = [], s = Math.floor(1 / e), l = a[t], h = this.count(), u = this._chunkSize, c = r._rawExtent[t], d = new (Yr(this))(h), f = 0, p = 0; p < h; p += s) {
            h - p < s && (s = h - p, o.length = s);
            for (var g = 0; g < s; g++) {
                var v = this.getRawIndex(p + g), m = Math.floor(v / u), y = v % u;
                o[g] = l[m][y];
            }
            var _ = i(o), x = this.getRawIndex(Math.min(p + n(o, _) || 0, h - 1)), w = x % u;
            (l[Math.floor(x / u)][w] = _) < c[0] && (c[0] = _), _ > c[1] && (c[1] = _), d[f++] = x;
        }
        return r._count = f, r._indices = d, r.getRawIndex = Kr, r;
    }, id.getItemModel = function(t) {
        var e = this.hostModel;
        return new Xi(this.getRawDataItem(t), e, e && e.ecModel);
    }, id.diff = function(e) {
        var i = this;
        return new Xr(e ? e.getIndices() : [], this.getIndices(), function(t) {
            return Qr(e, t);
        }, function(t) {
            return Qr(i, t);
        });
    }, id.getVisual = function(t) {
        var e = this._visual;
        return e && e[t];
    }, id.setVisual = function(t, e) {
        if (jc(t)) for (var i in t) t.hasOwnProperty(i) && this.setVisual(i, t[i]); else this._visual = this._visual || {}, 
        this._visual[t] = e;
    }, id.setLayout = function(t, e) {
        if (jc(t)) for (var i in t) t.hasOwnProperty(i) && this.setLayout(i, t[i]); else this._layout[t] = e;
    }, id.getLayout = function(t) {
        return this._layout[t];
    }, id.getItemLayout = function(t) {
        return this._itemLayouts[t];
    }, id.setItemLayout = function(t, e, i) {
        this._itemLayouts[t] = i ? D(this._itemLayouts[t] || {}, e) : e;
    }, id.clearItemLayouts = function() {
        this._itemLayouts.length = 0;
    }, id.getItemVisual = function(t, e, i) {
        var n = this._itemVisuals[t], r = n && n[e];
        return null != r || i ? r : this.getVisual(e);
    }, id.setItemVisual = function(t, e, i) {
        var n = this._itemVisuals[t] || {}, r = this.hasItemVisual;
        if (this._itemVisuals[t] = n, jc(e)) for (var a in e) e.hasOwnProperty(a) && (n[a] = e[a], 
        r[a] = !0); else n[e] = i, r[e] = !0;
    }, id.clearAllVisual = function() {
        this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {};
    };
    var nd = function(t) {
        t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType;
    };
    id.setItemGraphicEl = function(t, e) {
        var i = this.hostModel;
        e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = i && i.seriesIndex, 
        "group" === e.type && e.traverse(nd, e)), this._graphicEls[t] = e;
    }, id.getItemGraphicEl = function(t) {
        return this._graphicEls[t];
    }, id.eachItemGraphicEl = function(i, n) {
        N(this._graphicEls, function(t, e) {
            t && i && i.call(n, t, e);
        });
    }, id.cloneShallow = function(t) {
        if (!t) {
            var e = I(this.dimensions, this.getDimensionInfo, this);
            t = new ed(e, this.hostModel);
        }
        if (t._storage = this._storage, jr(t, this), this._indices) {
            var i = this._indices.constructor;
            t._indices = new i(this._indices);
        } else t._indices = null;
        return t.getRawIndex = t._indices ? Kr : $r, t;
    }, id.wrapMethod = function(t, e) {
        var i = this[t];
        "function" == typeof i && (this.__wrappedMethods = this.__wrappedMethods || [], 
        this.__wrappedMethods.push(t), this[t] = function() {
            var t = i.apply(this, arguments);
            return e.apply(this, [ t ].concat(a(arguments)));
        });
    }, id.TRANSFERABLE_METHODS = [ "cloneShallow", "downSample", "map" ], id.CHANGABLE_METHODS = [ "filterSelf", "selectRange" ];
    var rd = function(t, e) {
        return ia((e = e || {}).coordDimensions || [], t, {
            dimsDef: e.dimensionsDefine || t.dimensionsDefine,
            encodeDef: e.encodeDefine || t.encodeDefine,
            dimCount: e.dimensionsCount,
            generateCoord: e.generateCoord,
            generateCoordCount: e.generateCoordCount
        });
    };
    $u.extend({
        type: "series.line",
        dependencies: [ "grid", "polar" ],
        getInitialData: function() {
            return aa(this.getSource(), this);
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: "cartesian2d",
            legendHoverLink: !0,
            hoverAnimation: !0,
            clipOverflow: !0,
            label: {
                position: "top"
            },
            lineStyle: {
                width: 2,
                type: "solid"
            },
            step: !1,
            smooth: !1,
            smoothMonotone: null,
            symbol: "emptyCircle",
            symbolSize: 4,
            symbolRotate: null,
            showSymbol: !0,
            showAllSymbol: "auto",
            connectNulls: !1,
            sampling: "none",
            animationEasing: "linear",
            progressive: 0,
            hoverLayerThreshold: 1 / 0
        }
    });
    var ad = xi({
        type: "triangle",
        shape: {
            cx: 0,
            cy: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var i = e.cx, n = e.cy, r = e.width / 2, a = e.height / 2;
            t.moveTo(i, n - a), t.lineTo(i + r, n + a), t.lineTo(i - r, n + a), t.closePath();
        }
    }), od = xi({
        type: "diamond",
        shape: {
            cx: 0,
            cy: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var i = e.cx, n = e.cy, r = e.width / 2, a = e.height / 2;
            t.moveTo(i, n - a), t.lineTo(i + r, n), t.lineTo(i, n + a), t.lineTo(i - r, n), 
            t.closePath();
        }
    }), sd = xi({
        type: "pin",
        shape: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var i = e.x, n = e.y, r = e.width / 5 * 3, a = Math.max(r, e.height), o = r / 2, s = o * o / (a - o), l = n - a + o + s, h = Math.asin(s / o), u = Math.cos(h) * o, c = Math.sin(h), d = Math.cos(h), f = .6 * o, p = .7 * o;
            t.moveTo(i - u, l + s), t.arc(i, l, o, Math.PI - h, 2 * Math.PI + h), t.bezierCurveTo(i + u - c * f, l + s + d * f, i, n - p, i, n), 
            t.bezierCurveTo(i, n - p, i - u + c * f, l + s + d * f, i - u, l + s), t.closePath();
        }
    }), ld = xi({
        type: "arrow",
        shape: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var i = e.height, n = e.width, r = e.x, a = e.y, o = n / 3 * 2;
            t.moveTo(r, a), t.lineTo(r + o, a + i), t.lineTo(r, a + i / 4 * 3), t.lineTo(r - o, a + i), 
            t.lineTo(r, a), t.closePath();
        }
    }), hd = {
        line: function(t, e, i, n, r) {
            r.x1 = t, r.y1 = e + n / 2, r.x2 = t + i, r.y2 = e + n / 2;
        },
        rect: function(t, e, i, n, r) {
            r.x = t, r.y = e, r.width = i, r.height = n;
        },
        roundRect: function(t, e, i, n, r) {
            r.x = t, r.y = e, r.width = i, r.height = n, r.r = Math.min(i, n) / 4;
        },
        square: function(t, e, i, n, r) {
            var a = Math.min(i, n);
            r.x = t, r.y = e, r.width = a, r.height = a;
        },
        circle: function(t, e, i, n, r) {
            r.cx = t + i / 2, r.cy = e + n / 2, r.r = Math.min(i, n) / 2;
        },
        diamond: function(t, e, i, n, r) {
            r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r.height = n;
        },
        pin: function(t, e, i, n, r) {
            r.x = t + i / 2, r.y = e + n / 2, r.width = i, r.height = n;
        },
        arrow: function(t, e, i, n, r) {
            r.x = t + i / 2, r.y = e + n / 2, r.width = i, r.height = n;
        },
        triangle: function(t, e, i, n, r) {
            r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r.height = n;
        }
    }, ud = {};
    N({
        line: Oh,
        rect: Ph,
        roundRect: Ph,
        square: Ph,
        circle: Ih,
        diamond: od,
        pin: sd,
        arrow: ld,
        triangle: ad
    }, function(t, e) {
        ud[e] = new t();
    });
    var cd = xi({
        type: "symbol",
        shape: {
            symbolType: "",
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        beforeBrush: function() {
            var t = this.style;
            "pin" === this.shape.symbolType && "inside" === t.textPosition && (t.textPosition = [ "50%", "40%" ], 
            t.textAlign = "center", t.textVerticalAlign = "middle");
        },
        buildPath: function(t, e, i) {
            var n = e.symbolType, r = ud[n];
            "none" !== e.symbolType && (r || (r = ud[n = "rect"]), hd[n](e.x, e.y, e.width, e.height, r.shape), 
            r.buildPath(t, r.shape, i));
        }
    }), dd = la.prototype, fd = la.getSymbolSize = function(t, e) {
        var i = t.getItemVisual(e, "symbolSize");
        return i instanceof Array ? i.slice() : [ +i, +i ];
    };
    dd._createSymbol = function(t, e, i, n, r) {
        this.removeAll();
        var a = sa(t, -1, -1, 2, 2, e.getItemVisual(i, "color"), r);
        a.attr({
            z2: 100,
            culling: !0,
            scale: ha(n)
        }), a.drift = ua, this._symbolType = t, this.add(a);
    }, dd.stopSymbolAnimation = function(t) {
        this.childAt(0).stopAnimation(t);
    }, dd.getSymbolPath = function() {
        return this.childAt(0);
    }, dd.getScale = function() {
        return this.childAt(0).scale;
    }, dd.highlight = function() {
        this.childAt(0).trigger("emphasis");
    }, dd.downplay = function() {
        this.childAt(0).trigger("normal");
    }, dd.setZ = function(t, e) {
        var i = this.childAt(0);
        i.zlevel = t, i.z = e;
    }, dd.setDraggable = function(t) {
        var e = this.childAt(0);
        e.draggable = t, e.cursor = t ? "move" : "pointer";
    }, dd.updateData = function(t, e, i) {
        this.silent = !1;
        var n = t.getItemVisual(e, "symbol") || "circle", r = t.hostModel, a = fd(t, e), o = n !== this._symbolType;
        if (o) {
            var s = t.getItemVisual(e, "symbolKeepAspect");
            this._createSymbol(n, t, e, a, s);
        } else {
            (l = this.childAt(0)).silent = !1, Gi(l, {
                scale: ha(a)
            }, r, e);
        }
        if (this._updateCommon(t, e, a, i), o) {
            var l = this.childAt(0), h = i && i.fadeIn, u = {
                scale: l.scale.slice()
            };
            h && (u.style = {
                opacity: l.style.opacity
            }), l.scale = [ 0, 0 ], h && (l.style.opacity = 0), qi(l, u, r, e);
        }
        this._seriesModel = r;
    };
    var pd = [ "itemStyle" ], gd = [ "emphasis", "itemStyle" ], vd = [ "label" ], md = [ "emphasis", "label" ];
    dd._updateCommon = function(e, t, i, n) {
        var r = this.childAt(0), a = e.hostModel, o = e.getItemVisual(t, "color");
        "image" !== r.type && r.useStyle({
            strokeNoScale: !0
        });
        var s = n && n.itemStyle, l = n && n.hoverItemStyle, h = n && n.symbolRotate, u = n && n.symbolOffset, c = n && n.labelModel, d = n && n.hoverLabelModel, f = n && n.hoverAnimation, p = n && n.cursorStyle;
        if (!n || e.hasItemOption) {
            var g = n && n.itemModel ? n.itemModel : e.getItemModel(t);
            s = g.getModel(pd).getItemStyle([ "color" ]), l = g.getModel(gd).getItemStyle(), 
            h = g.getShallow("symbolRotate"), u = g.getShallow("symbolOffset"), c = g.getModel(vd), 
            d = g.getModel(md), f = g.getShallow("hoverAnimation"), p = g.getShallow("cursor");
        } else l = D({}, l);
        var v = r.style;
        r.attr("rotation", (h || 0) * Math.PI / 180 || 0), u && r.attr("position", [ $i(u[0], i[0]), $i(u[1], i[1]) ]), 
        p && r.attr("cursor", p), r.setColor(o, n && n.symbolInnerColor), r.setStyle(s);
        var m = e.getItemVisual(t, "opacity");
        null != m && (v.opacity = m);
        var y = e.getItemVisual(t, "liftZ"), _ = r.__z2Origin;
        null != y ? null == _ && (r.__z2Origin = r.z2, r.z2 += y) : null != _ && (r.z2 = _, 
        r.__z2Origin = null);
        var x = n && n.useNameLabel;
        (function(t, e, i, n, r, a, o) {
            var s, l = (r = r || Wh).labelFetcher, h = r.labelDataIndex, u = r.labelDimIndex, c = i.getShallow("show"), d = n.getShallow("show");
            (c || d) && (l && (s = l.getFormattedLabel(h, "normal", null, u)), null == s && (s = S(r.defaultText) ? r.defaultText(h, r) : r.defaultText));
            var f = c ? s : null, p = d ? L(l ? l.getFormattedLabel(h, "emphasis", null, u) : null, s) : null;
            (null != f || null != p) && (zi(t, i, a, r), zi(e, n, o, r, !0)), t.text = f, e.text = p;
        })(v, l, c, d, {
            labelFetcher: a,
            labelDataIndex: t,
            defaultText: function(t) {
                return x ? e.getName(t) : function(t, e) {
                    var i = t.mapDimension("defaultedLabel", !0), n = i.length;
                    if (1 === n) return Gn(t, e, i[0]);
                    if (n) {
                        for (var r = [], a = 0; a < i.length; a++) {
                            var o = Gn(t, e, i[a]);
                            r.push(o);
                        }
                        return r.join(" ");
                    }
                }(e, t);
            },
            isRectText: !0,
            autoColor: o
        }), r.off("mouseover").off("mouseout").off("emphasis").off("normal"), r.hoverStyle = l, 
        Ni(r);
        var w = ha(i);
        if (f && a.isAnimationEnabled()) {
            var b = function() {
                if (!this.incremental) {
                    var t = w[1] / w[0];
                    this.animateTo({
                        scale: [ Math.max(1.1 * w[0], w[0] + 3), Math.max(1.1 * w[1], w[1] + 3 * t) ]
                    }, 400, "elasticOut");
                }
            }, M = function() {
                this.incremental || this.animateTo({
                    scale: w
                }, 400, "elasticOut");
            };
            r.on("mouseover", b).on("mouseout", M).on("emphasis", b).on("normal", M);
        }
    }, dd.fadeOut = function(t, e) {
        var i = this.childAt(0);
        this.silent = i.silent = !0, !(e && e.keepLabel) && (i.style.text = null), Gi(i, {
            style: {
                opacity: 0
            },
            scale: [ 0, 0 ]
        }, this._seriesModel, this.dataIndex, t);
    }, n(la, Ms);
    var yd = ca.prototype;
    yd.updateData = function(r, a) {
        a = fa(a);
        var o = this.group, s = r.hostModel, l = this._data, h = this._symbolCtor, u = pa(r);
        l || o.removeAll(), r.diff(l).add(function(t) {
            var e = r.getItemLayout(t);
            if (da(r, e, t, a)) {
                var i = new h(r, t, u);
                i.attr("position", e), r.setItemGraphicEl(t, i), o.add(i);
            }
        }).update(function(t, e) {
            var i = l.getItemGraphicEl(e), n = r.getItemLayout(t);
            return da(r, n, t, a) ? (i ? (i.updateData(r, t, u), Gi(i, {
                position: n
            }, s)) : (i = new h(r, t)).attr("position", n), o.add(i), void r.setItemGraphicEl(t, i)) : void o.remove(i);
        }).remove(function(t) {
            var e = l.getItemGraphicEl(t);
            e && e.fadeOut(function() {
                o.remove(e);
            });
        }).execute(), this._data = r;
    }, yd.isPersistent = function() {
        return !0;
    }, yd.updateLayout = function() {
        var n = this._data;
        n && n.eachItemGraphicEl(function(t, e) {
            var i = n.getItemLayout(e);
            t.attr("position", i);
        });
    }, yd.incrementalPrepareUpdate = function(t) {
        this._seriesScope = pa(t), this._data = null, this.group.removeAll();
    }, yd.incrementalUpdate = function(t, e, i) {
        function n(t) {
            t.isGroup || (t.incremental = t.useHoverLayer = !0);
        }
        i = fa(i);
        for (var r = t.start; r < t.end; r++) {
            var a = e.getItemLayout(r);
            if (da(e, a, r, i)) {
                var o = new this._symbolCtor(e, r, this._seriesScope);
                o.traverse(n), o.attr("position", a), this.group.add(o), e.setItemGraphicEl(r, o);
            }
        }
    }, yd.remove = function(t) {
        var e = this.group, i = this._data;
        i && t ? i.eachItemGraphicEl(function(t) {
            t.fadeOut(function() {
                e.remove(t);
            });
        }) : e.removeAll();
    };
    var _d = H, xd = G, wd = function(t, e, i, n) {
        return t[0] = e[0] + i[0] * n, t[1] = e[1] + i[1] * n, t;
    }, bd = function(t, e) {
        return t[0] = e[0], t[1] = e[1], t;
    }, Md = [], Sd = [], Cd = [], kd = fi.extend({
        type: "ec-polyline",
        shape: {
            points: [],
            smooth: 0,
            smoothConstraint: !0,
            smoothMonotone: null,
            connectNulls: !1
        },
        style: {
            fill: null,
            stroke: "#000"
        },
        brush: Ah(fi.prototype.brush),
        buildPath: function(t, e) {
            var i = e.points, n = 0, r = i.length, a = _a(i, e.smoothConstraint);
            if (e.connectNulls) {
                for (;0 < r && ma(i[r - 1]); r--) ;
                for (;n < r && ma(i[n]); n++) ;
            }
            for (;n < r; ) n += ya(t, i, n, r, r, 1, a.min, a.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1;
        }
    }), Td = fi.extend({
        type: "ec-polygon",
        shape: {
            points: [],
            stackedOnPoints: [],
            smooth: 0,
            stackedOnSmooth: 0,
            smoothConstraint: !0,
            smoothMonotone: null,
            connectNulls: !1
        },
        brush: Ah(fi.prototype.brush),
        buildPath: function(t, e) {
            var i = e.points, n = e.stackedOnPoints, r = 0, a = i.length, o = e.smoothMonotone, s = _a(i, e.smoothConstraint), l = _a(n, e.smoothConstraint);
            if (e.connectNulls) {
                for (;0 < a && ma(i[a - 1]); a--) ;
                for (;r < a && ma(i[r]); r++) ;
            }
            for (;r < a; ) {
                var h = ya(t, i, r, a, a, 1, s.min, s.max, e.smooth, o, e.connectNulls);
                ya(t, n, r + h - 1, h, a, -1, l.min, l.max, e.stackedOnSmooth, o, e.connectNulls), 
                r += h + 1, t.closePath();
            }
        }
    });
    tr.extend({
        type: "line",
        init: function() {
            var t = new Ms(), e = new ca();
            this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t;
        },
        render: function(t, e, i) {
            var n = t.coordinateSystem, r = this.group, a = t.getData(), o = t.getModel("lineStyle"), s = t.getModel("areaStyle"), l = a.mapArray(a.getItemLayout), h = "polar" === n.type, u = this._coordSys, c = this._symbolDraw, d = this._polyline, f = this._polygon, p = this._lineGroup, g = t.get("animation"), v = !s.isEmpty(), m = s.get("origin"), y = function(t, e, i) {
                if (!i.valueDim) return [];
                for (var n = [], r = 0, a = e.count(); r < a; r++) n.push(va(i, t, e, r));
                return n;
            }(n, a, ga(n, a, m)), _ = t.get("showSymbol"), x = _ && !h && Ca(t, a, n), w = this._data;
            w && w.eachItemGraphicEl(function(t, e) {
                t.__temp && (r.remove(t), w.setItemGraphicEl(e, null));
            }), _ || c.remove(), r.add(p);
            var b = !h && t.get("step");
            d && u.type === n.type && b === this._step ? (v && !f ? f = this._newPolygon(l, y, n, g) : f && !v && (p.remove(f), 
            f = this._polygon = null), p.setClipPath(Ma(n, !1, !1, t)), _ && c.updateData(a, {
                isIgnore: x,
                clipShape: Ma(n, !1, !0, t)
            }), a.eachItemGraphicEl(function(t) {
                t.stopAnimation(!0);
            }), xa(this._stackedOnPoints, y) && xa(this._points, l) || (g ? this._updateAnimation(a, y, n, i, b, m) : (b && (l = Sa(l, n, b), 
            y = Sa(y, n, b)), d.setShape({
                points: l
            }), f && f.setShape({
                points: l,
                stackedOnPoints: y
            })))) : (_ && c.updateData(a, {
                isIgnore: x,
                clipShape: Ma(n, !1, !0, t)
            }), b && (l = Sa(l, n, b), y = Sa(y, n, b)), d = this._newPolyline(l, n, g), v && (f = this._newPolygon(l, y, n, g)), 
            p.setClipPath(Ma(n, !0, !1, t)));
            var M = function(t, e) {
                var i = t.getVisual("visualMeta");
                if (i && i.length && t.count() && "cartesian2d" === e.type) {
                    for (var n, r, a = i.length - 1; 0 <= a; a--) {
                        var o = i[a].dimension, s = t.dimensions[o], l = t.getDimensionInfo(s);
                        if ("x" === (n = l && l.coordDim) || "y" === n) {
                            r = i[a];
                            break;
                        }
                    }
                    if (r) {
                        var h = e.getAxis(n), u = I(r.stops, function(t) {
                            return {
                                coord: h.toGlobalCoord(h.dataToCoord(t.value)),
                                color: t.color
                            };
                        }), c = u.length, d = r.outerColors.slice();
                        c && u[0].coord > u[c - 1].coord && (u.reverse(), d.reverse());
                        var f = u[0].coord - 10, p = u[c - 1].coord + 10, g = p - f;
                        if (g < .001) return "transparent";
                        N(u, function(t) {
                            t.offset = (t.coord - f) / g;
                        }), u.push({
                            offset: c ? u[c - 1].offset : .5,
                            color: d[1] || "transparent"
                        }), u.unshift({
                            offset: c ? u[0].offset : .5,
                            color: d[0] || "transparent"
                        });
                        var v = new Nh(0, 0, 0, 0, u, !0);
                        return v[n] = f, v[n + "2"] = p, v;
                    }
                }
            }(a, n) || a.getVisual("color");
            d.useStyle(T(o.getLineStyle(), {
                fill: "none",
                stroke: M,
                lineJoin: "bevel"
            }));
            var S = t.get("smooth");
            if (S = wa(t.get("smooth")), d.setShape({
                smooth: S,
                smoothMonotone: t.get("smoothMonotone"),
                connectNulls: t.get("connectNulls")
            }), f) {
                var C = a.getCalculationInfo("stackedOnSeries"), k = 0;
                f.useStyle(T(s.getAreaStyle(), {
                    fill: M,
                    opacity: .7,
                    lineJoin: "bevel"
                })), C && (k = wa(C.get("smooth"))), f.setShape({
                    smooth: S,
                    stackedOnSmooth: k,
                    smoothMonotone: t.get("smoothMonotone"),
                    connectNulls: t.get("connectNulls")
                });
            }
            this._data = a, this._coordSys = n, this._stackedOnPoints = y, this._points = l, 
            this._step = b, this._valueOrigin = m;
        },
        dispose: function() {},
        highlight: function(t, e, i, n) {
            var r = t.getData(), a = Oe(r, n);
            if (!(a instanceof Array) && null != a && 0 <= a) {
                var o = r.getItemGraphicEl(a);
                if (!o) {
                    var s = r.getItemLayout(a);
                    if (!s) return;
                    (o = new la(r, a)).position = s, o.setZ(t.get("zlevel"), t.get("z")), o.ignore = isNaN(s[0]) || isNaN(s[1]), 
                    o.__temp = !0, r.setItemGraphicEl(a, o), o.stopSymbolAnimation(!0), this.group.add(o);
                }
                o.highlight();
            } else tr.prototype.highlight.call(this, t, e, i, n);
        },
        downplay: function(t, e, i, n) {
            var r = t.getData(), a = Oe(r, n);
            if (null != a && 0 <= a) {
                var o = r.getItemGraphicEl(a);
                o && (o.__temp ? (r.setItemGraphicEl(a, null), this.group.remove(o)) : o.downplay());
            } else tr.prototype.downplay.call(this, t, e, i, n);
        },
        _newPolyline: function(t) {
            var e = this._polyline;
            return e && this._lineGroup.remove(e), e = new kd({
                shape: {
                    points: t
                },
                silent: !0,
                z2: 10
            }), this._lineGroup.add(e), this._polyline = e;
        },
        _newPolygon: function(t, e) {
            var i = this._polygon;
            return i && this._lineGroup.remove(i), i = new Td({
                shape: {
                    points: t,
                    stackedOnPoints: e
                },
                silent: !0
            }), this._lineGroup.add(i), this._polygon = i;
        },
        _updateAnimation: function(t, e, i, n, r, a) {
            var o = this._polyline, s = this._polygon, l = t.hostModel, h = function(t, e, i, n, r, a, o, s) {
                for (var l = function(t, e) {
                    var i = [];
                    return e.diff(t).add(function(t) {
                        i.push({
                            cmd: "+",
                            idx: t
                        });
                    }).update(function(t, e) {
                        i.push({
                            cmd: "=",
                            idx: e,
                            idx1: t
                        });
                    }).remove(function(t) {
                        i.push({
                            cmd: "-",
                            idx: t
                        });
                    }).execute(), i;
                }(t, e), h = [], u = [], c = [], d = [], f = [], p = [], g = [], v = ga(r, e, o), m = ga(a, t, s), y = 0; y < l.length; y++) {
                    var _ = l[y], x = !0;
                    switch (_.cmd) {
                      case "=":
                        var w = t.getItemLayout(_.idx), b = e.getItemLayout(_.idx1);
                        (isNaN(w[0]) || isNaN(w[1])) && (w = b.slice()), h.push(w), u.push(b), c.push(i[_.idx]), 
                        d.push(n[_.idx1]), g.push(e.getRawIndex(_.idx1));
                        break;

                      case "+":
                        var M = _.idx;
                        h.push(r.dataToPoint([ e.get(v.dataDimsForPoint[0], M), e.get(v.dataDimsForPoint[1], M) ])), 
                        u.push(e.getItemLayout(M).slice()), c.push(va(v, r, e, M)), d.push(n[M]), g.push(e.getRawIndex(M));
                        break;

                      case "-":
                        M = _.idx;
                        var S = t.getRawIndex(M);
                        S !== M ? (h.push(t.getItemLayout(M)), u.push(a.dataToPoint([ t.get(m.dataDimsForPoint[0], M), t.get(m.dataDimsForPoint[1], M) ])), 
                        c.push(i[M]), d.push(va(m, a, t, M)), g.push(S)) : x = !1;
                    }
                    x && (f.push(_), p.push(p.length));
                }
                p.sort(function(t, e) {
                    return g[t] - g[e];
                });
                var C = [], k = [], T = [], I = [], D = [];
                for (y = 0; y < p.length; y++) M = p[y], C[y] = h[M], k[y] = u[M], T[y] = c[M], 
                I[y] = d[M], D[y] = f[M];
                return {
                    current: C,
                    next: k,
                    stackedOnCurrent: T,
                    stackedOnNext: I,
                    status: D
                };
            }(this._data, t, this._stackedOnPoints, e, this._coordSys, i, this._valueOrigin, a), u = h.current, c = h.stackedOnCurrent, d = h.next, f = h.stackedOnNext;
            r && (u = Sa(h.current, i, r), c = Sa(h.stackedOnCurrent, i, r), d = Sa(h.next, i, r), 
            f = Sa(h.stackedOnNext, i, r)), o.shape.__points = h.current, o.shape.points = u, 
            Gi(o, {
                shape: {
                    points: d
                }
            }, l), s && (s.setShape({
                points: u,
                stackedOnPoints: c
            }), Gi(s, {
                shape: {
                    points: d,
                    stackedOnPoints: f
                }
            }, l));
            for (var p = [], g = h.status, v = 0; v < g.length; v++) {
                if ("=" === g[v].cmd) {
                    var m = t.getItemGraphicEl(g[v].idx1);
                    m && p.push({
                        el: m,
                        ptIdx: v
                    });
                }
            }
            o.animators && o.animators.length && o.animators[0].during(function() {
                for (var t = 0; t < p.length; t++) {
                    p[t].el.attr("position", o.shape.__points[p[t].ptIdx]);
                }
            });
        },
        remove: function() {
            var i = this.group, n = this._data;
            this._lineGroup.removeAll(), this._symbolDraw.remove(!0), n && n.eachItemGraphicEl(function(t, e) {
                t.__temp && (i.remove(t), n.setItemGraphicEl(e, null));
            }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null;
        }
    });
    var Id = {
        average: function(t) {
            for (var e = 0, i = 0, n = 0; n < t.length; n++) isNaN(t[n]) || (e += t[n], i++);
            return 0 === i ? NaN : e / i;
        },
        sum: function(t) {
            for (var e = 0, i = 0; i < t.length; i++) e += t[i] || 0;
            return e;
        },
        max: function(t) {
            for (var e = -1 / 0, i = 0; i < t.length; i++) t[i] > e && (e = t[i]);
            return isFinite(e) ? e : NaN;
        },
        min: function(t) {
            for (var e = 1 / 0, i = 0; i < t.length; i++) t[i] < e && (e = t[i]);
            return isFinite(e) ? e : NaN;
        },
        nearest: function(t) {
            return t[0];
        }
    }, Dd = function(t) {
        return Math.round(t.length / 2);
    };
    ka.prototype.parse = function(t) {
        return t;
    }, ka.prototype.getSetting = function(t) {
        return this._setting[t];
    }, ka.prototype.contain = function(t) {
        var e = this._extent;
        return t >= e[0] && t <= e[1];
    }, ka.prototype.normalize = function(t) {
        var e = this._extent;
        return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0]);
    }, ka.prototype.scale = function(t) {
        var e = this._extent;
        return t * (e[1] - e[0]) + e[0];
    }, ka.prototype.unionExtent = function(t) {
        var e = this._extent;
        t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);
    }, ka.prototype.unionExtentFromData = function(t, e) {
        this.unionExtent(t.getApproximateExtent(e));
    }, ka.prototype.getExtent = function() {
        return this._extent.slice();
    }, ka.prototype.setExtent = function(t, e) {
        var i = this._extent;
        isNaN(t) || (i[0] = t), isNaN(e) || (i[1] = e);
    }, ka.prototype.isBlank = function() {
        return this._isBlank;
    }, ka.prototype.setBlank = function(t) {
        this._isBlank = t;
    }, ka.prototype.getLabel = null, Fe(ka), Ge(ka, {
        registerWhenExtend: !0
    }), Ta.createByAxisModel = function(t) {
        var e = t.option, i = e.data, n = i && I(i, Da);
        return new Ta({
            categories: n,
            needCollect: !n,
            deduplication: !1 !== e.dedplication
        });
    };
    var Ad = Ta.prototype;
    Ad.getOrdinal = function(t) {
        return Ia(this).get(t);
    }, Ad.parseAndCollect = function(t) {
        var e, i = this._needCollect;
        if ("string" != typeof t && !i) return t;
        if (i && !this._deduplication) return e = this.categories.length, this.categories[e] = t, 
        e;
        var n = Ia(this);
        return null == (e = n.get(t)) && (i ? (e = this.categories.length, this.categories[e] = t, 
        n.set(t, e)) : e = NaN), e;
    };
    var Ld = ka.prototype, Pd = ka.extend({
        type: "ordinal",
        init: function(t, e) {
            (!t || M(t)) && (t = new Ta({
                categories: t
            })), this._ordinalMeta = t, this._extent = e || [ 0, t.categories.length - 1 ];
        },
        parse: function(t) {
            return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t);
        },
        contain: function(t) {
            return t = this.parse(t), Ld.contain.call(this, t) && null != this._ordinalMeta.categories[t];
        },
        normalize: function(t) {
            return Ld.normalize.call(this, this.parse(t));
        },
        scale: function(t) {
            return Math.round(Ld.scale.call(this, t));
        },
        getTicks: function() {
            for (var t = [], e = this._extent, i = e[0]; i <= e[1]; ) t.push(i), i++;
            return t;
        },
        getLabel: function(t) {
            return this.isBlank() ? void 0 : this._ordinalMeta.categories[t];
        },
        count: function() {
            return this._extent[1] - this._extent[0] + 1;
        },
        unionExtentFromData: function(t, e) {
            this.unionExtent(t.getApproximateExtent(e));
        },
        getOrdinalMeta: function() {
            return this._ordinalMeta;
        },
        niceTicks: x,
        niceExtent: x
    });
    Pd.create = function() {
        return new Pd();
    };
    var Od = Ki, Ed = Ki, Rd = ka.extend({
        type: "interval",
        _interval: 0,
        _intervalPrecision: 2,
        setExtent: function(t, e) {
            var i = this._extent;
            isNaN(t) || (i[0] = parseFloat(t)), isNaN(e) || (i[1] = parseFloat(e));
        },
        unionExtent: function(t) {
            var e = this._extent;
            t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), Rd.prototype.setExtent.call(this, e[0], e[1]);
        },
        getInterval: function() {
            return this._interval;
        },
        setInterval: function(t) {
            this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = Aa(t);
        },
        getTicks: function() {
            return function(t, e, i, n) {
                var r = [];
                if (!t) return r;
                e[0] < i[0] && r.push(e[0]);
                for (var a = i[0]; a <= i[1] && (r.push(a), (a = Od(a + t, n)) !== r[r.length - 1]); ) if (1e4 < r.length) return [];
                return e[1] > (r.length ? r[r.length - 1] : i[1]) && r.push(e[1]), r;
            }(this._interval, this._extent, this._niceExtent, this._intervalPrecision);
        },
        getLabel: function(t, e) {
            if (null == t) return "";
            var i = e && e.precision;
            return null == i ? i = Qi(t) || 0 : "auto" === i && (i = this._intervalPrecision), 
            an(t = Ed(t, i, !0));
        },
        niceTicks: function(t, e, i) {
            t = t || 5;
            var n = this._extent, r = n[1] - n[0];
            if (isFinite(r)) {
                r < 0 && (r = -r, n.reverse());
                var a = function(t, e, i, n) {
                    var r = {}, a = t[1] - t[0], o = r.interval = rn(a / e, !0);
                    null != i && o < i && (o = r.interval = i), null != n && n < o && (o = r.interval = n);
                    var s = r.intervalPrecision = Aa(o);
                    return Pa(r.niceTickExtent = [ Od(Math.ceil(t[0] / o) * o, s), Od(Math.floor(t[1] / o) * o, s) ], t), 
                    r;
                }(n, t, e, i);
                this._intervalPrecision = a.intervalPrecision, this._interval = a.interval, this._niceExtent = a.niceTickExtent;
            }
        },
        niceExtent: function(t) {
            var e = this._extent;
            if (e[0] === e[1]) if (0 !== e[0]) {
                var i = e[0];
                t.fixMax || (e[1] += i / 2), e[0] -= i / 2;
            } else e[1] = 1;
            var n = e[1] - e[0];
            isFinite(n) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
            var r = this._interval;
            t.fixMin || (e[0] = Ed(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = Ed(Math.ceil(e[1] / r) * r));
        }
    });
    Rd.create = function() {
        return new Rd();
    };
    var Bd = "__ec_stack_", Nd = ("undefined" != typeof Float32Array ? Float32Array : Array, 
    Ju(), Rd.prototype), zd = Math.ceil, Fd = Math.floor, Vd = 36e5, Wd = 864e5, Hd = Rd.extend({
        type: "time",
        getLabel: function(t) {
            var e = this._stepLvl, i = new Date(t);
            return hn(e[0], i, this.getSetting("useUTC"));
        },
        niceExtent: function(t) {
            var e = this._extent;
            if (e[0] === e[1] && (e[0] -= Wd, e[1] += Wd), e[1] === -1 / 0 && 1 / 0 === e[0]) {
                var i = new Date();
                e[1] = +new Date(i.getFullYear(), i.getMonth(), i.getDate()), e[0] = e[1] - Wd;
            }
            this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
            var n = this._interval;
            t.fixMin || (e[0] = Ki(Fd(e[0] / n) * n)), t.fixMax || (e[1] = Ki(zd(e[1] / n) * n));
        },
        niceTicks: function(t, e, i) {
            t = t || 10;
            var n = this._extent, r = n[1] - n[0], a = r / t;
            null != e && a < e && (a = e), null != i && i < a && (a = i);
            var o = Gd.length, s = function(t, e, i, n) {
                for (;i < n; ) {
                    var r = i + n >>> 1;
                    t[r][1] < e ? i = r + 1 : n = r;
                }
                return i;
            }(Gd, a, 0, o), l = Gd[Math.min(s, o - 1)], h = l[1];
            "year" === l[0] && (h *= rn(r / h / t, !0));
            var u = this.getSetting("useUTC") ? 0 : 60 * new Date(+n[0] || +n[1]).getTimezoneOffset() * 1e3, c = [ Math.round(zd((n[0] - u) / h) * h + u), Math.round(Fd((n[1] - u) / h) * h + u) ];
            Pa(c, n), this._stepLvl = l, this._interval = h, this._niceExtent = c;
        },
        parse: function(t) {
            return +en(t);
        }
    });
    N([ "contain", "normalize" ], function(e) {
        Hd.prototype[e] = function(t) {
            return Nd[e].call(this, this.parse(t));
        };
    });
    var Gd = [ [ "hh:mm:ss", 1e3 ], [ "hh:mm:ss", 5e3 ], [ "hh:mm:ss", 1e4 ], [ "hh:mm:ss", 15e3 ], [ "hh:mm:ss", 3e4 ], [ "hh:mm\nMM-dd", 6e4 ], [ "hh:mm\nMM-dd", 3e5 ], [ "hh:mm\nMM-dd", 6e5 ], [ "hh:mm\nMM-dd", 9e5 ], [ "hh:mm\nMM-dd", 18e5 ], [ "hh:mm\nMM-dd", Vd ], [ "hh:mm\nMM-dd", 72e5 ], [ "hh:mm\nMM-dd", 6 * Vd ], [ "hh:mm\nMM-dd", 432e5 ], [ "MM-dd\nyyyy", Wd ], [ "MM-dd\nyyyy", 2 * Wd ], [ "MM-dd\nyyyy", 3 * Wd ], [ "MM-dd\nyyyy", 4 * Wd ], [ "MM-dd\nyyyy", 5 * Wd ], [ "MM-dd\nyyyy", 6 * Wd ], [ "week", 7 * Wd ], [ "MM-dd\nyyyy", 864e6 ], [ "week", 14 * Wd ], [ "week", 21 * Wd ], [ "month", 31 * Wd ], [ "week", 42 * Wd ], [ "month", 62 * Wd ], [ "week", 42 * Wd ], [ "quarter", 8208e6 ], [ "month", 31 * Wd * 4 ], [ "month", 13392e6 ], [ "half-year", 16416e6 ], [ "month", 31 * Wd * 8 ], [ "month", 26784e6 ], [ "year", 380 * Wd ] ];
    Hd.create = function(t) {
        return new Hd({
            useUTC: t.ecModel.get("useUTC")
        });
    };
    var qd = ka.prototype, Xd = Rd.prototype, Ud = Qi, Yd = Ki, jd = Math.floor, Zd = Math.ceil, $d = Math.pow, Kd = Math.log, Qd = ka.extend({
        type: "log",
        base: 10,
        $constructor: function() {
            ka.apply(this, arguments), this._originalScale = new Rd();
        },
        getTicks: function() {
            var i = this._originalScale, n = this._extent, r = i.getExtent();
            return I(Xd.getTicks.call(this), function(t) {
                var e = Ki($d(this.base, t));
                return e = t === n[0] && i.__fixMin ? Fa(e, r[0]) : e, t === n[1] && i.__fixMax ? Fa(e, r[1]) : e;
            }, this);
        },
        getLabel: Xd.getLabel,
        scale: function(t) {
            return t = qd.scale.call(this, t), $d(this.base, t);
        },
        setExtent: function(t, e) {
            var i = this.base;
            t = Kd(t) / Kd(i), e = Kd(e) / Kd(i), Xd.setExtent.call(this, t, e);
        },
        getExtent: function() {
            var t = this.base, e = qd.getExtent.call(this);
            e[0] = $d(t, e[0]), e[1] = $d(t, e[1]);
            var i = this._originalScale, n = i.getExtent();
            return i.__fixMin && (e[0] = Fa(e[0], n[0])), i.__fixMax && (e[1] = Fa(e[1], n[1])), 
            e;
        },
        unionExtent: function(t) {
            this._originalScale.unionExtent(t);
            var e = this.base;
            t[0] = Kd(t[0]) / Kd(e), t[1] = Kd(t[1]) / Kd(e), qd.unionExtent.call(this, t);
        },
        unionExtentFromData: function(t, e) {
            this.unionExtent(t.getApproximateExtent(e));
        },
        niceTicks: function(t) {
            t = t || 10;
            var e, i = this._extent, n = i[1] - i[0];
            if (!(1 / 0 === n || n <= 0)) {
                var r = (e = n, Math.pow(10, nn(e)));
                for (t / n * r <= .5 && (r *= 10); !isNaN(r) && Math.abs(r) < 1 && 0 < Math.abs(r); ) r *= 10;
                var a = [ Ki(Zd(i[0] / r) * r), Ki(jd(i[1] / r) * r) ];
                this._interval = r, this._niceExtent = a;
            }
        },
        niceExtent: function(t) {
            Xd.niceExtent.call(this, t);
            var e = this._originalScale;
            e.__fixMin = t.fixMin, e.__fixMax = t.fixMax;
        }
    });
    N([ "contain", "normalize" ], function(e) {
        Qd.prototype[e] = function(t) {
            return t = Kd(t) / Kd(this.base), qd[e].call(this, t);
        };
    }), Qd.create = function() {
        return new Qd();
    };
    var Jd = function(t) {
        this._axes = {}, this._dimList = [], this.name = t || "";
    };
    Jd.prototype = {
        constructor: Jd,
        type: "cartesian",
        getAxis: function(t) {
            return this._axes[t];
        },
        getAxes: function() {
            return I(this._dimList, Ga, this);
        },
        getAxesByScale: function(e) {
            return e = e.toLowerCase(), u(this.getAxes(), function(t) {
                return t.scale.type === e;
            });
        },
        addAxis: function(t) {
            var e = t.dim;
            this._axes[e] = t, this._dimList.push(e);
        },
        dataToCoord: function(t) {
            return this._dataCoordConvert(t, "dataToCoord");
        },
        coordToData: function(t) {
            return this._dataCoordConvert(t, "coordToData");
        },
        _dataCoordConvert: function(t, e) {
            for (var i = this._dimList, n = t instanceof Array ? [] : {}, r = 0; r < i.length; r++) {
                var a = i[r], o = this._axes[a];
                n[a] = o[e](t[a]);
            }
            return n;
        }
    }, qa.prototype = {
        constructor: qa,
        type: "cartesian2d",
        dimensions: [ "x", "y" ],
        getBaseAxis: function() {
            return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");
        },
        containPoint: function(t) {
            var e = this.getAxis("x"), i = this.getAxis("y");
            return e.contain(e.toLocalCoord(t[0])) && i.contain(i.toLocalCoord(t[1]));
        },
        containData: function(t) {
            return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1]);
        },
        dataToPoint: function(t, e, i) {
            var n = this.getAxis("x"), r = this.getAxis("y");
            return (i = i || [])[0] = n.toGlobalCoord(n.dataToCoord(t[0])), i[1] = r.toGlobalCoord(r.dataToCoord(t[1])), 
            i;
        },
        clampData: function(t, e) {
            var i = this.getAxis("x").scale, n = this.getAxis("y").scale, r = i.getExtent(), a = n.getExtent(), o = i.parse(t[0]), s = n.parse(t[1]);
            return (e = e || [])[0] = Math.min(Math.max(Math.min(r[0], r[1]), o), Math.max(r[0], r[1])), 
            e[1] = Math.min(Math.max(Math.min(a[0], a[1]), s), Math.max(a[0], a[1])), e;
        },
        pointToData: function(t, e) {
            var i = this.getAxis("x"), n = this.getAxis("y");
            return (e = e || [])[0] = i.coordToData(i.toLocalCoord(t[0])), e[1] = n.coordToData(n.toLocalCoord(t[1])), 
            e;
        },
        getOtherAxis: function(t) {
            return this.getAxis("x" === t.dim ? "y" : "x");
        }
    }, n(qa, Jd);
    var tf = Ee(), ef = [ 0, 1 ], nf = function(t, e, i) {
        this.dim = t, this.scale = e, this._extent = i || [ 0, 0 ], this.inverse = !1, this.onBand = !1;
    };
    nf.prototype = {
        constructor: nf,
        contain: function(t) {
            var e = this._extent, i = Math.min(e[0], e[1]), n = Math.max(e[0], e[1]);
            return i <= t && t <= n;
        },
        containData: function(t) {
            return this.contain(this.dataToCoord(t));
        },
        getExtent: function() {
            return this._extent.slice();
        },
        getPixelPrecision: function(t) {
            return e = t || this.scale.getExtent(), i = this._extent, n = Math.log, r = Math.LN10, 
            a = Math.floor(n(e[1] - e[0]) / r), o = Math.round(n(Math.abs(i[1] - i[0])) / r), 
            s = Math.min(Math.max(-a + o, 0), 20), isFinite(s) ? s : 20;
            var e, i, n, r, a, o, s;
        },
        setExtent: function(t, e) {
            var i = this._extent;
            i[0] = t, i[1] = e;
        },
        dataToCoord: function(t, e) {
            var i = this._extent, n = this.scale;
            return t = n.normalize(t), this.onBand && "ordinal" === n.type && to(i = i.slice(), n.count()), 
            Zi(t, ef, i, e);
        },
        coordToData: function(t, e) {
            var i = this._extent, n = this.scale;
            this.onBand && "ordinal" === n.type && to(i = i.slice(), n.count());
            var r = Zi(t, i, ef, e);
            return this.scale.scale(r);
        },
        pointToData: function() {},
        getTicksCoords: function(t) {
            var e = (t = t || {}).tickModel || this.getTickModel(), i = Ua(this, e), n = I(i.ticks, function(t) {
                return {
                    coord: this.dataToCoord(t),
                    tickValue: t
                };
            }, this), r = e.get("alignWithLabel");
            return function(t, e, i, n, r) {
                function a(t, e) {
                    return u ? e < t : t < e;
                }
                var o = e.length;
                if (t.onBand && !n && o) {
                    var s, l = t.getExtent();
                    if (1 === o) e[0].coord = l[0], s = e[1] = {
                        coord: l[0]
                    }; else {
                        var h = e[1].coord - e[0].coord;
                        N(e, function(t) {
                            t.coord -= h / 2;
                            var e = e || 0;
                            0 < e % 2 && (t.coord -= h / (2 * (e + 1)));
                        }), s = {
                            coord: e[o - 1].coord + h
                        }, e.push(s);
                    }
                    var u = l[0] > l[1];
                    a(e[0].coord, l[0]) && (r ? e[0].coord = l[0] : e.shift()), r && a(l[0], e[0].coord) && e.unshift({
                        coord: l[0]
                    }), a(l[1], s.coord) && (r ? s.coord = l[1] : e.pop()), r && a(s.coord, l[1]) && e.push({
                        coord: l[1]
                    });
                }
            }(this, n, i.tickCategoryInterval, r, t.clamp), n;
        },
        getViewLabels: function() {
            return Xa(this).labels;
        },
        getLabelModel: function() {
            return this.model.getModel("axisLabel");
        },
        getTickModel: function() {
            return this.model.getModel("axisTick");
        },
        getBandWidth: function() {
            var t = this._extent, e = this.scale.getExtent(), i = e[1] - e[0] + (this.onBand ? 1 : 0);
            0 === i && (i = 1);
            var n = Math.abs(t[1] - t[0]);
            return Math.abs(n) / i;
        },
        isHorizontal: null,
        getRotate: null,
        calculateCategoryInterval: function() {
            return function(t) {
                var e, i, n = (i = (e = t).getLabelModel(), {
                    axisRotate: e.getRotate ? e.getRotate() : e.isHorizontal && !e.isHorizontal() ? 90 : 0,
                    labelRotate: i.get("rotate") || 0,
                    font: i.getFont()
                }), r = Ha(t), a = (n.axisRotate - n.labelRotate) / 180 * Math.PI, o = t.scale, s = o.getExtent(), l = o.count();
                if (s[1] - s[0] < 1) return 0;
                var h = 1;
                40 < l && (h = Math.max(1, Math.floor(l / 40)));
                for (var u = s[0], c = t.dataToCoord(u + 1) - t.dataToCoord(u), d = Math.abs(c * Math.cos(a)), f = Math.abs(c * Math.sin(a)), p = 0, g = 0; u <= s[1]; u += h) {
                    var v, m, y = Wt(r(u), n.font, "center", "top");
                    v = 1.3 * y.width, m = 1.3 * y.height, p = Math.max(p, v, 7), g = Math.max(g, m, 7);
                }
                var _ = p / d, x = g / f;
                isNaN(_) && (_ = 1 / 0), isNaN(x) && (x = 1 / 0);
                var w = Math.max(0, Math.floor(Math.min(_, x))), b = tf(t.model), M = b.lastAutoInterval, S = b.lastTickCount;
                return null != M && null != S && Math.abs(M - w) <= 1 && Math.abs(S - l) <= 1 && w < M ? w = M : (b.lastTickCount = l, 
                b.lastAutoInterval = w), w;
            }(this);
        }
    };
    var rf = function(t, e, i, n, r) {
        nf.call(this, t, e, i), this.type = n || "value", this.position = r || "bottom";
    };
    rf.prototype = {
        constructor: rf,
        index: 0,
        getAxesOnZeroOf: null,
        model: null,
        isHorizontal: function() {
            var t = this.position;
            return "top" === t || "bottom" === t;
        },
        getGlobalExtent: function(t) {
            var e = this.getExtent();
            return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), 
            e;
        },
        getOtherAxis: function() {
            this.grid.getOtherAxis();
        },
        pointToData: function(t, e) {
            return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e);
        },
        toLocalCoord: null,
        toGlobalCoord: null
    }, n(rf, nf);
    var af = {
        show: !0,
        zlevel: 0,
        z: 0,
        inverse: !1,
        name: "",
        nameLocation: "end",
        nameRotate: null,
        nameTruncate: {
            maxWidth: null,
            ellipsis: "...",
            placeholder: "."
        },
        nameTextStyle: {},
        nameGap: 15,
        silent: !1,
        triggerEvent: !1,
        tooltip: {
            show: !1
        },
        axisPointer: {},
        axisLine: {
            show: !0,
            onZero: !0,
            onZeroAxisIndex: null,
            lineStyle: {
                color: "#333",
                width: 1,
                type: "solid"
            },
            symbol: [ "none", "none" ],
            symbolSize: [ 10, 15 ]
        },
        axisTick: {
            show: !0,
            inside: !1,
            length: 5,
            lineStyle: {
                width: 1
            }
        },
        axisLabel: {
            show: !0,
            inside: !1,
            rotate: 0,
            showMinLabel: null,
            showMaxLabel: null,
            margin: 8,
            fontSize: 12
        },
        splitLine: {
            show: !0,
            lineStyle: {
                color: [ "#ccc" ],
                width: 1,
                type: "solid"
            }
        },
        splitArea: {
            show: !1,
            areaStyle: {
                color: [ "rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)" ]
            }
        }
    }, of = {};
    of.categoryAxis = s({
        boundaryGap: !0,
        deduplication: null,
        splitLine: {
            show: !1
        },
        axisTick: {
            alignWithLabel: !1,
            interval: "auto"
        },
        axisLabel: {
            interval: "auto"
        }
    }, af), of.valueAxis = s({
        boundaryGap: [ 0, 0 ],
        splitNumber: 5
    }, af), of.timeAxis = T({
        scale: !0,
        min: "dataMin",
        max: "dataMax"
    }, of.valueAxis), of.logAxis = T({
        scale: !0,
        logBase: 10
    }, of.valueAxis);
    var sf = [ "value", "category", "time", "log" ], lf = function(a, t, o, e) {
        N(sf, function(r) {
            t.extend({
                type: a + "Axis." + r,
                mergeDefaultAndTheme: function(t, e) {
                    var i = this.layoutMode, n = i ? dn(t) : {};
                    s(t, e.getTheme().get(r + "Axis")), s(t, this.getDefaultOption()), t.type = o(a, t), 
                    i && cn(t, n, i);
                },
                optionUpdated: function() {
                    "category" === this.option.type && (this.__ordinalMeta = Ta.createByAxisModel(this));
                },
                getCategories: function(t) {
                    var e = this.option;
                    return "category" === e.type ? t ? e.data : this.__ordinalMeta.categories : void 0;
                },
                getOrdinalMeta: function() {
                    return this.__ordinalMeta;
                },
                defaultOption: function(t, e) {
                    for (var i = t[0], n = 1, r = t.length; n < r; n++) i = s(i, t[n], e);
                    return i;
                }([ {}, of[r + "Axis"], e ], !0)
            });
        }), uu.registerSubTypeDefaulter(a + "Axis", r(o, a));
    }, hf = {
        getMin: function(t) {
            var e = this.option, i = t || null == e.rangeStart ? e.min : e.rangeStart;
            return this.axis && null != i && "dataMin" !== i && "function" != typeof i && !y(i) && (i = this.axis.scale.parse(i)), 
            i;
        },
        getMax: function(t) {
            var e = this.option, i = t || null == e.rangeEnd ? e.max : e.rangeEnd;
            return this.axis && null != i && "dataMax" !== i && "function" != typeof i && !y(i) && (i = this.axis.scale.parse(i)), 
            i;
        },
        getNeedCrossZero: function() {
            var t = this.option;
            return null == t.rangeStart && null == t.rangeEnd && !t.scale;
        },
        getCoordSysModel: x,
        setRange: function(t, e) {
            this.option.rangeStart = t, this.option.rangeEnd = e;
        },
        resetRange: function() {
            this.option.rangeStart = this.option.rangeEnd = null;
        }
    }, uf = uu.extend({
        type: "cartesian2dAxis",
        axis: null,
        init: function() {
            uf.superApply(this, "init", arguments), this.resetRange();
        },
        mergeOption: function() {
            uf.superApply(this, "mergeOption", arguments), this.resetRange();
        },
        restoreData: function() {
            uf.superApply(this, "restoreData", arguments), this.resetRange();
        },
        getCoordSysModel: function() {
            return this.ecModel.queryComponents({
                mainType: "grid",
                index: this.option.gridIndex,
                id: this.option.gridId
            })[0];
        }
    });
    s(uf.prototype, hf);
    var cf = {
        offset: 0
    };
    lf("x", uf, eo, cf), lf("y", uf, eo, cf), uu.extend({
        type: "grid",
        dependencies: [ "xAxis", "yAxis" ],
        layoutMode: "box",
        coordinateSystem: null,
        defaultOption: {
            show: !1,
            zlevel: 0,
            z: 0,
            left: "10%",
            top: 60,
            right: "10%",
            bottom: 60,
            containLabel: !1,
            backgroundColor: "rgba(0,0,0,0)",
            borderWidth: 1,
            borderColor: "#ccc"
        }
    });
    var df = no.prototype;
    df.type = "grid", df.axisPointerEnabled = !0, df.getRect = function() {
        return this._rect;
    }, df.update = function(t, e) {
        var i = this._axesMap;
        this._updateScale(t, this.model), N(i.x, function(t) {
            Wa(t.scale, t.model);
        }), N(i.y, function(t) {
            Wa(t.scale, t.model);
        }), N(i.x, function(t) {
            ro(i, "y", t);
        }), N(i.y, function(t) {
            ro(i, "x", t);
        }), this.resize(this.model, e);
    }, df.resize = function(t, e, i) {
        function n() {
            N(r, function(t) {
                var e, i, n, r, a = t.isHorizontal(), o = a ? [ 0, l.width ] : [ 0, l.height ], s = t.inverse ? 1 : 0;
                t.setExtent(o[s], o[1 - s]), e = t, i = a ? l.x : l.y, n = e.getExtent(), r = n[0] + n[1], 
                e.toGlobalCoord = "x" === e.dim ? function(t) {
                    return t + i;
                } : function(t) {
                    return r - t + i;
                }, e.toLocalCoord = "x" === e.dim ? function(t) {
                    return t - i;
                } : function(t) {
                    return r - t + i;
                };
            });
        }
        var l = function(t, e, i) {
            i = Jh(i || 0);
            var n = e.width, r = e.height, a = $i(t.left, n), o = $i(t.top, r), s = $i(t.right, n), l = $i(t.bottom, r), h = $i(t.width, n), u = $i(t.height, r), c = i[2] + i[0], d = i[1] + i[3], f = t.aspect;
            switch (isNaN(h) && (h = n - s - d - a), isNaN(u) && (u = r - l - c - o), null != f && (isNaN(h) && isNaN(u) && (n / r < f ? h = .8 * n : u = .8 * r), 
            isNaN(h) && (h = f * u), isNaN(u) && (u = h / f)), isNaN(a) && (a = n - s - h - d), 
            isNaN(o) && (o = r - l - u - c), t.left || t.right) {
              case "center":
                a = n / 2 - h / 2 - i[3];
                break;

              case "right":
                a = n - h - d;
            }
            switch (t.top || t.bottom) {
              case "middle":
              case "center":
                o = r / 2 - u / 2 - i[0];
                break;

              case "bottom":
                o = r - u - c;
            }
            a = a || 0, o = o || 0, isNaN(h) && (h = n - d - a - (s || 0)), isNaN(u) && (u = r - c - o - (l || 0));
            var p = new St(a + i[3], o + i[0], h, u);
            return p.margin = i, p;
        }(t.getBoxLayoutParams(), {
            width: e.getWidth(),
            height: e.getHeight()
        });
        this._rect = l;
        var r = this._axesList;
        n(), !i && t.get("containLabel") && (N(r, function(t) {
            if (!t.model.get("axisLabel.inside")) {
                var e = function(t) {
                    var e, i, n, r, a, o, s, l, h = t.model, u = t.scale;
                    if (h.get("axisLabel.show") && !u.isBlank()) {
                        var c, d, f = "category" === t.type, p = u.getExtent();
                        d = f ? u.count() : (c = u.getTicks()).length;
                        var g, v = t.getLabelModel(), m = Ha(t), y = 1;
                        40 < d && (y = Math.ceil(d / 40));
                        for (var _ = 0; _ < d; _ += y) {
                            var x = m(c ? c[_] : p[0] + _), w = v.getTextRect(x), b = (e = w, i = v.get("rotate") || 0, 
                            n = i * Math.PI / 180, r = e.plain(), a = r.width, o = r.height, s = a * Math.cos(n) + o * Math.sin(n), 
                            l = a * Math.sin(n) + o * Math.cos(n), new St(r.x, r.y, s, l));
                            g ? g.union(b) : g = b;
                        }
                        return g;
                    }
                }(t);
                if (e) {
                    var i = t.isHorizontal() ? "height" : "width", n = t.model.get("axisLabel.margin");
                    l[i] -= e[i] + n, "top" === t.position ? l.y += e.height + n : "left" === t.position && (l.x += e.width + n);
                }
            }
        }), n());
    }, df.getAxis = function(t, e) {
        var i = this._axesMap[t];
        if (null != i) {
            if (null == e) for (var n in i) if (i.hasOwnProperty(n)) return i[n];
            return i[e];
        }
    }, df.getAxes = function() {
        return this._axesList.slice();
    }, df.getCartesian = function(t, e) {
        if (null != t && null != e) {
            var i = "x" + t + "y" + e;
            return this._coordsMap[i];
        }
        k(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
        for (var n = 0, r = this._coordsList; n < r.length; n++) if (r[n].getAxis("x").index === t || r[n].getAxis("y").index === e) return r[n];
    }, df.getCartesians = function() {
        return this._coordsList.slice();
    }, df.convertToPixel = function(t, e, i) {
        var n = this._findConvertTarget(t, e);
        return n.cartesian ? n.cartesian.dataToPoint(i) : n.axis ? n.axis.toGlobalCoord(n.axis.dataToCoord(i)) : null;
    }, df.convertFromPixel = function(t, e, i) {
        var n = this._findConvertTarget(t, e);
        return n.cartesian ? n.cartesian.pointToData(i) : n.axis ? n.axis.coordToData(n.axis.toLocalCoord(i)) : null;
    }, df._findConvertTarget = function(t, e) {
        var i, n, r = e.seriesModel, a = e.xAxisModel || r && r.getReferringComponents("xAxis")[0], o = e.yAxisModel || r && r.getReferringComponents("yAxis")[0], s = e.gridModel, l = this._coordsList;
        if (r) d(l, i = r.coordinateSystem) < 0 && (i = null); else if (a && o) i = this.getCartesian(a.componentIndex, o.componentIndex); else if (a) n = this.getAxis("x", a.componentIndex); else if (o) n = this.getAxis("y", o.componentIndex); else if (s) {
            s.coordinateSystem === this && (i = this._coordsList[0]);
        }
        return {
            cartesian: i,
            axis: n
        };
    }, df.containPoint = function(t) {
        var e = this._coordsList[0];
        return e ? e.containPoint(t) : void 0;
    }, df._initCartesian = function(o, t) {
        function e(a) {
            return function(t, e) {
                if (io(t, o)) {
                    var i = t.get("position");
                    "x" === a ? "top" !== i && "bottom" !== i && (s[i = "bottom"] && (i = "top" === i ? "bottom" : "top")) : "left" !== i && "right" !== i && (s[i = "left"] && (i = "left" === i ? "right" : "left")), 
                    s[i] = !0;
                    var n = new rf(a, function(t, e) {
                        if (e = e || t.get("type")) switch (e) {
                          case "category":
                            return new Pd(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [ 1 / 0, -1 / 0 ]);

                          case "value":
                            return new Rd();

                          default:
                            return (ka.getClass(e) || Rd).create(t);
                        }
                    }(t), [ 0, 0 ], t.get("type"), i), r = "category" === n.type;
                    n.onBand = r && t.get("boundaryGap"), n.inverse = t.get("inverse"), (t.axis = n).model = t, 
                    n.grid = this, n.index = e, this._axesList.push(n), l[a][e] = n, h[a]++;
                }
            };
        }
        var s = {
            left: !1,
            right: !1,
            top: !1,
            bottom: !1
        }, l = {
            x: {},
            y: {}
        }, h = {
            x: 0,
            y: 0
        };
        return t.eachComponent("xAxis", e("x"), this), t.eachComponent("yAxis", e("y"), this), 
        h.x && h.y ? void N((this._axesMap = l).x, function(r, a) {
            N(l.y, function(t, e) {
                var i = "x" + a + "y" + e, n = new qa(i);
                n.grid = this, n.model = o, this._coordsMap[i] = n, this._coordsList.push(n), n.addAxis(r), 
                n.addAxis(t);
            }, this);
        }, this) : (this._axesMap = {}, void (this._axesList = []));
    }, df._updateScale = function(t, l) {
        function h(n, r) {
            N(n.mapDimension(r.dim, !0), function(t) {
                var e, i;
                r.scale.unionExtentFromData(n, ra(e = n, i = t) ? e.getCalculationInfo("stackResultDimension") : i);
            });
        }
        N(this._axesList, function(t) {
            t.scale.setExtent(1 / 0, -1 / 0);
        }), t.eachSeries(function(t) {
            if (so(t)) {
                var e = oo(t), i = e[0], n = e[1];
                if (!io(i, l) || !io(n, l)) return;
                var r = this.getCartesian(i.componentIndex, n.componentIndex), a = t.getData(), o = r.getAxis("x"), s = r.getAxis("y");
                "list" === a.type && (h(a, o), h(a, s));
            }
        }, this);
    }, df.getTooltipAxes = function(n) {
        var r = [], a = [];
        return N(this.getCartesians(), function(t) {
            var e = null != n && "auto" !== n ? t.getAxis(n) : t.getBaseAxis(), i = t.getOtherAxis(e);
            d(r, e) < 0 && r.push(e), d(a, i) < 0 && a.push(i);
        }), {
            baseAxes: r,
            otherAxes: a
        };
    };
    var ff = [ "xAxis", "yAxis" ];
    no.create = function(n, r) {
        var a = [];
        return n.eachComponent("grid", function(t, e) {
            var i = new no(t, n, r);
            i.name = "grid_" + e, i.resize(t, r, !0), t.coordinateSystem = i, a.push(i);
        }), n.eachSeries(function(t) {
            if (so(t)) {
                var e = oo(t), i = e[0], n = e[1], r = i.getCoordSysModel().coordinateSystem;
                t.coordinateSystem = r.getCartesian(i.componentIndex, n.componentIndex);
            }
        }), a;
    }, no.dimensions = no.prototype.dimensions = qa.prototype.dimensions, Sn.register("cartesian2d", no);
    var pf = Math.PI, gf = function(t, e) {
        this.opt = e, this.axisModel = t, T(e, {
            labelOffset: 0,
            nameDirection: 1,
            tickDirection: 1,
            labelDirection: 1,
            silent: !0
        }), this.group = new Ms();
        var i = new Ms({
            position: e.position.slice(),
            rotation: e.rotation
        });
        i.updateTransform(), this._transform = i.transform, this._dumbGroup = i;
    };
    gf.prototype = {
        constructor: gf,
        hasBuilder: function(t) {
            return !!vf[t];
        },
        add: function(t) {
            vf[t].call(this);
        },
        getGroup: function() {
            return this.group;
        }
    };
    var vf = {
        axisLine: function() {
            var a = this.opt, t = this.axisModel;
            if (t.get("axisLine.show")) {
                var e = this.axisModel.axis.getExtent(), i = this._transform, o = [ e[0], 0 ], n = [ e[1], 0 ];
                i && (W(o, o, i), W(n, n, i));
                var s = D({
                    lineCap: "round"
                }, t.getModel("axisLine.lineStyle").getLineStyle());
                this.group.add(new Oh(Mi({
                    anid: "line",
                    shape: {
                        x1: o[0],
                        y1: o[1],
                        x2: n[0],
                        y2: n[1]
                    },
                    style: s,
                    strokeContainThreshold: a.strokeContainThreshold || 5,
                    silent: !0,
                    z2: 1
                })));
                var l = t.get("axisLine.symbol"), r = t.get("axisLine.symbolSize"), h = t.get("axisLine.symbolOffset") || 0;
                if ("number" == typeof h && (h = [ h, h ]), null != l) {
                    "string" == typeof l && (l = [ l, l ]), ("string" == typeof r || "number" == typeof r) && (r = [ r, r ]);
                    var u = r[0], c = r[1];
                    N([ {
                        rotate: a.rotation + Math.PI / 2,
                        offset: h[0],
                        r: 0
                    }, {
                        rotate: a.rotation - Math.PI / 2,
                        offset: h[1],
                        r: Math.sqrt((o[0] - n[0]) * (o[0] - n[0]) + (o[1] - n[1]) * (o[1] - n[1]))
                    } ], function(t, e) {
                        if ("none" !== l[e] && null != l[e]) {
                            var i = sa(l[e], -u / 2, -c / 2, u, c, s.stroke, !0), n = t.r + t.offset, r = [ o[0] + n * Math.cos(a.rotation), o[1] - n * Math.sin(a.rotation) ];
                            i.attr({
                                rotation: t.rotate,
                                position: r,
                                silent: !0
                            }), this.group.add(i);
                        }
                    }, this);
                }
            }
        },
        axisTickLabel: function() {
            var t = this.axisModel, e = this.opt, i = function(t, e, i) {
                var n = e.axis;
                if (e.get("axisTick.show") && !n.scale.isBlank()) {
                    for (var r = e.getModel("axisTick"), a = r.getModel("lineStyle"), o = r.get("length"), s = n.getTicksCoords(), l = [], h = [], u = t._transform, c = [], d = 0; d < s.length; d++) {
                        var f = s[d].coord;
                        l[0] = f, h[l[1] = 0] = f, h[1] = i.tickDirection * o, u && (W(l, l, u), W(h, h, u));
                        var p = new Oh(Mi({
                            anid: "tick_" + s[d].tickValue,
                            shape: {
                                x1: l[0],
                                y1: l[1],
                                x2: h[0],
                                y2: h[1]
                            },
                            style: T(a.getLineStyle(), {
                                stroke: e.get("axisLine.lineStyle.color")
                            }),
                            z2: 2,
                            silent: !0
                        }));
                        t.group.add(p), c.push(p);
                    }
                    return c;
                }
            }(this, t, e);
            !function(t, e, i) {
                var n = t.get("axisLabel.showMinLabel"), r = t.get("axisLabel.showMaxLabel");
                i = i || [];
                var a = (e = e || [])[0], o = e[1], s = e[e.length - 1], l = e[e.length - 2], h = i[0], u = i[1], c = i[i.length - 1], d = i[i.length - 2];
                !1 === n ? (uo(a), uo(h)) : co(a, o) && (n ? (uo(o), uo(u)) : (uo(a), uo(h))), !1 === r ? (uo(s), 
                uo(c)) : co(l, s) && (r ? (uo(l), uo(d)) : (uo(s), uo(c)));
            }(t, function(h, u, c) {
                var d = u.axis;
                if (A(c.axisLabelShow, u.get("axisLabel.show")) && !d.scale.isBlank()) {
                    var f = u.getModel("axisLabel"), p = f.get("margin"), t = d.getViewLabels(), e = (A(c.labelRotate, f.get("rotate")) || 0) * pf / 180, g = mf(c.rotation, e, c.labelDirection), v = u.getCategories(!0), m = [], y = ho(u), _ = u.get("triggerEvent");
                    return N(t, function(t, e) {
                        var i = t.tickValue, n = t.formattedLabel, r = t.rawLabel, a = f;
                        v && v[i] && v[i].textStyle && (a = new Xi(v[i].textStyle, f, u.ecModel));
                        var o = a.getTextColor() || u.get("axisLine.lineStyle.color"), s = [ d.dataToCoord(i), c.labelOffset + c.labelDirection * p ], l = new Th({
                            anid: "label_" + i,
                            position: s,
                            rotation: g.rotation,
                            silent: y,
                            z2: 10
                        });
                        zi(l.style, a, {
                            text: n,
                            textAlign: a.getShallow("align", !0) || g.textAlign,
                            textVerticalAlign: a.getShallow("verticalAlign", !0) || a.getShallow("baseline", !0) || g.textVerticalAlign,
                            textFill: "function" == typeof o ? o("category" === d.type ? r : "value" === d.type ? i + "" : i, e) : o
                        }), _ && (l.eventData = lo(u), l.eventData.targetType = "axisLabel", l.eventData.value = r), 
                        h._dumbGroup.add(l), l.updateTransform(), m.push(l), h.group.add(l), l.decomposeTransform();
                    }), m;
                }
            }(this, t, e), i);
        },
        axisName: function() {
            var t, e, i, n, r, a, o, s = this.opt, l = this.axisModel, h = A(s.axisName, l.get("name"));
            if (h) {
                var u, c, d = l.get("nameLocation"), f = s.nameDirection, p = l.getModel("nameTextStyle"), g = l.get("nameGap") || 0, v = this.axisModel.axis.getExtent(), m = v[0] > v[1] ? -1 : 1, y = [ "start" === d ? v[0] - m * g : "end" === d ? v[1] + m * g : (v[0] + v[1]) / 2, fo(d) ? s.labelOffset + f * g : 0 ], _ = l.get("nameRotate");
                null != _ && (_ = _ * pf / 180), fo(d) ? u = mf(s.rotation, null != _ ? _ : s.rotation, f) : (t = d, 
                e = v, r = Ji((_ || 0) - s.rotation), a = e[0] > e[1], o = "start" === t && !a || "start" !== t && a, 
                tn(r - pf / 2) ? (n = o ? "bottom" : "top", i = "center") : tn(r - 1.5 * pf) ? (n = o ? "top" : "bottom", 
                i = "center") : (n = "middle", i = r < 1.5 * pf && pf / 2 < r ? o ? "left" : "right" : o ? "right" : "left"), 
                u = {
                    rotation: r,
                    textAlign: i,
                    textVerticalAlign: n
                }, null != (c = s.axisNameAvailableWidth) && (c = Math.abs(c / Math.sin(u.rotation)), 
                !isFinite(c) && (c = null)));
                var x = p.getFont(), w = l.get("nameTruncate", !0) || {}, b = w.ellipsis, M = A(s.nameTruncateMaxWidth, w.maxWidth, c), S = null != b && null != M ? ru(h, M, x, b, {
                    minChar: 2,
                    placeholder: w.placeholder
                }) : h, C = l.get("tooltip", !0), k = l.mainType, T = {
                    componentType: k,
                    name: h,
                    $vars: [ "name" ]
                };
                T[k + "Index"] = l.componentIndex;
                var I = new Th({
                    anid: "name",
                    __fullText: h,
                    __truncatedText: S,
                    position: y,
                    rotation: u.rotation,
                    silent: ho(l),
                    z2: 1,
                    tooltip: C && C.show ? D({
                        content: h,
                        formatter: function() {
                            return h;
                        },
                        formatterParams: T
                    }, C) : null
                });
                zi(I.style, p, {
                    text: S,
                    textFont: x,
                    textFill: p.getTextColor() || l.get("axisLine.lineStyle.color"),
                    textAlign: u.textAlign,
                    textVerticalAlign: u.textVerticalAlign
                }), l.get("triggerEvent") && (I.eventData = lo(l), I.eventData.targetType = "axisName", 
                I.eventData.name = h), this._dumbGroup.add(I), I.updateTransform(), this.group.add(I), 
                I.decomposeTransform();
            }
        }
    }, mf = gf.innerTextLayout = function(t, e, i) {
        var n, r, a = Ji(e - t);
        return tn(a) ? (r = 0 < i ? "top" : "bottom", n = "center") : tn(a - pf) ? (r = 0 < i ? "bottom" : "top", 
        n = "center") : (r = "middle", n = 0 < a && a < pf ? 0 < i ? "right" : "left" : 0 < i ? "left" : "right"), 
        {
            rotation: a,
            textAlign: n,
            textVerticalAlign: r
        };
    }, yf = Gr({
        type: "axis",
        _axisPointer: null,
        axisPointerClass: null,
        render: function(t, e, i, n) {
            this.axisPointerClass && function(t) {
                var e = po(t);
                if (e) {
                    var i = e.axisPointerModel, n = e.axis.scale, r = i.option, a = i.get("status"), o = i.get("value");
                    null != o && (o = n.parse(o));
                    var s = !!i.get("handle.show");
                    null == a && (r.status = s ? "show" : "hide");
                    var l = n.getExtent().slice();
                    l[0] > l[1] && l.reverse(), (null == o || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), 
                    r.value = o, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show");
                }
            }(t), yf.superApply(this, "render", arguments), go(this, t, 0, i, 0, !0);
        },
        updateAxisPointer: function(t, e, i, n) {
            go(this, t, 0, i, 0, !1);
        },
        remove: function(t, e) {
            var i = this._axisPointer;
            i && i.remove(e), yf.superApply(this, "remove", arguments);
        },
        dispose: function(t, e) {
            vo(this, e), yf.superApply(this, "dispose", arguments);
        }
    }), _f = [];
    yf.registerAxisPointerClass = function(t, e) {
        _f[t] = e;
    }, yf.getAxisPointerClass = function(t) {
        return t && _f[t];
    };
    var xf, wf, bf, Mf = [ "axisLine", "axisTickLabel", "axisName" ], Sf = [ "splitArea", "splitLine" ], Cf = yf.extend({
        type: "cartesianAxis",
        axisPointerClass: "CartesianAxisPointer",
        render: function(e, t, i, n) {
            this.group.removeAll();
            var r = this._axisGroup;
            if (this._axisGroup = new Ms(), this.group.add(this._axisGroup), e.get("show")) {
                var a = e.getCoordSysModel(), o = function(t, e, i) {
                    i = i || {};
                    var n = t.coordinateSystem, r = e.axis, a = {}, o = r.getAxesOnZeroOf()[0], s = r.position, l = o ? "onZero" : s, h = r.dim, u = n.getRect(), c = [ u.x, u.x + u.width, u.y, u.y + u.height ], d = {
                        left: 0,
                        right: 1,
                        top: 0,
                        bottom: 1,
                        onZero: 2
                    }, f = e.get("offset") || 0, p = "x" === h ? [ c[2] - f, c[3] + f ] : [ c[0] - f, c[1] + f ];
                    if (o) {
                        var g = o.toGlobalCoord(o.dataToCoord(0));
                        p[d.onZero] = Math.max(Math.min(g, p[1]), p[0]);
                    }
                    a.position = [ "y" === h ? p[d[l]] : c[0], "x" === h ? p[d[l]] : c[3] ], a.rotation = Math.PI / 2 * ("x" === h ? 0 : 1), 
                    a.labelDirection = a.tickDirection = a.nameDirection = {
                        top: -1,
                        bottom: 1,
                        left: -1,
                        right: 1
                    }[s], a.labelOffset = o ? p[d[s]] - p[d.onZero] : 0, e.get("axisTick.inside") && (a.tickDirection = -a.tickDirection), 
                    A(i.labelInside, e.get("axisLabel.inside")) && (a.labelDirection = -a.labelDirection);
                    var v = e.get("axisLabel.rotate");
                    return a.labelRotate = "top" === l ? -v : v, a.z2 = 1, a;
                }(a, e), s = new gf(e, o);
                N(Mf, s.add, s), this._axisGroup.add(s.getGroup()), N(Sf, function(t) {
                    e.get(t + ".show") && this["_" + t](e, a);
                }, this), function(t, e, n) {
                    function r(t) {
                        var e = {
                            position: w(t.position),
                            rotation: t.rotation
                        };
                        return t.shape && (e.shape = D({}, t.shape)), e;
                    }
                    if (t && e) {
                        var a = (i = {}, t.traverse(function(t) {
                            !t.isGroup && t.anid && (i[t.anid] = t);
                        }), i);
                        e.traverse(function(t) {
                            if (!t.isGroup && t.anid) {
                                var e = a[t.anid];
                                if (e) {
                                    var i = r(t);
                                    t.attr(r(e)), Gi(t, i, n, t.dataIndex);
                                }
                            }
                        });
                    }
                    var i;
                }(r, this._axisGroup, e), Cf.superCall(this, "render", e, t, i, n);
            }
        },
        remove: function() {
            this._splitAreaColors = null;
        },
        _splitLine: function(t, e) {
            var i = t.axis;
            if (!i.scale.isBlank()) {
                var n = t.getModel("splitLine"), r = n.getModel("lineStyle"), a = r.get("color");
                a = M(a) ? a : [ a ];
                for (var o = e.coordinateSystem.getRect(), s = i.isHorizontal(), l = 0, h = i.getTicksCoords({
                    tickModel: n
                }), u = [], c = [], d = r.getLineStyle(), f = 0; f < h.length; f++) {
                    var p = i.toGlobalCoord(h[f].coord);
                    s ? (u[0] = p, u[1] = o.y, c[0] = p, c[1] = o.y + o.height) : (u[0] = o.x, u[1] = p, 
                    c[0] = o.x + o.width, c[1] = p);
                    var g = l++ % a.length, v = h[f].tickValue;
                    this._axisGroup.add(new Oh(Mi({
                        anid: null != v ? "line_" + h[f].tickValue : null,
                        shape: {
                            x1: u[0],
                            y1: u[1],
                            x2: c[0],
                            y2: c[1]
                        },
                        style: T({
                            stroke: a[g]
                        }, d),
                        silent: !0
                    })));
                }
            }
        },
        _splitArea: function(t, e) {
            var i = t.axis;
            if (!i.scale.isBlank()) {
                var n = t.getModel("splitArea"), r = n.getModel("areaStyle"), a = r.get("color"), o = e.coordinateSystem.getRect(), s = i.getTicksCoords({
                    tickModel: n,
                    clamp: !0
                });
                if (s.length) {
                    var l = a.length, h = this._splitAreaColors, u = O(), c = 0;
                    if (h) for (var d = 0; d < s.length; d++) {
                        var f = h.get(s[d].tickValue);
                        if (null != f) {
                            c = (f + (l - 1) * d) % l;
                            break;
                        }
                    }
                    var p = i.toGlobalCoord(s[0].coord), g = r.getAreaStyle();
                    a = M(a) ? a : [ a ];
                    for (d = 1; d < s.length; d++) {
                        var v, m, y, _, x = i.toGlobalCoord(s[d].coord);
                        i.isHorizontal() ? (v = p, m = o.y, y = x - v, _ = o.height, p = v + y) : (v = o.x, 
                        m = p, y = o.width, p = m + (_ = x - m));
                        var w = s[d - 1].tickValue;
                        null != w && u.set(w, c), this._axisGroup.add(new Ph({
                            anid: null != w ? "area_" + w : null,
                            shape: {
                                x: v,
                                y: m,
                                width: y,
                                height: _
                            },
                            style: T({
                                fill: a[c]
                            }, g),
                            silent: !0
                        })), c = (c + 1) % l;
                    }
                    this._splitAreaColors = u;
                }
            }
        }
    });
    Cf.extend({
        type: "xAxis"
    }), Cf.extend({
        type: "yAxis"
    }), Gr({
        type: "grid",
        render: function(t) {
            this.group.removeAll(), t.get("show") && this.group.add(new Ph({
                shape: t.coordinateSystem.getRect(),
                style: T({
                    fill: t.get("backgroundColor")
                }, t.getItemStyle()),
                silent: !0,
                z2: -1
            }));
        }
    }), Br(function(t) {
        t.xAxis && t.yAxis && !t.grid && (t.grid = {});
    }), Vr((wf = "circle", bf = xf = "line", {
        seriesType: xf,
        performRawSeries: !0,
        reset: function(l, t) {
            var e = l.getData(), i = l.get("symbol") || wf, h = l.get("symbolSize"), n = l.get("symbolKeepAspect");
            if (e.setVisual({
                legendSymbol: bf || i,
                symbol: i,
                symbolSize: h,
                symbolKeepAspect: n
            }), !t.isSeriesFiltered(l)) {
                var r = "function" == typeof h;
                return {
                    dataEach: e.hasItemOption || r ? function(t, e) {
                        if ("function" == typeof h) {
                            var i = l.getRawValue(e), n = l.getDataParams(e);
                            t.setItemVisual(e, "symbolSize", h(i, n));
                        }
                        if (t.hasItemOption) {
                            var r = t.getItemModel(e), a = r.getShallow("symbol", !0), o = r.getShallow("symbolSize", !0), s = r.getShallow("symbolKeepAspect", !0);
                            null != a && t.setItemVisual(e, "symbol", a), null != o && t.setItemVisual(e, "symbolSize", o), 
                            null != s && t.setItemVisual(e, "symbolKeepAspect", s);
                        }
                    } : null
                };
            }
        }
    })), Fr({
        seriesType: "line",
        plan: Ju(),
        reset: function(t) {
            var e = t.getData(), c = t.coordinateSystem, d = t.pipelineContext.large;
            if (c) {
                var f = I(c.dimensions, function(t) {
                    return e.mapDimension(t);
                }).slice(0, 2), p = f.length, i = e.getCalculationInfo("stackResultDimension");
                return ra(e, f[0]) && (f[0] = i), ra(e, f[1]) && (f[1] = i), p && {
                    progress: function(t, e) {
                        for (var i = t.end - t.start, n = d && new Float32Array(i * p), r = t.start, a = 0, o = [], s = []; r < t.end; r++) {
                            var l;
                            if (1 === p) {
                                var h = e.get(f[0], r);
                                l = !isNaN(h) && c.dataToPoint(h, null, s);
                            } else {
                                h = o[0] = e.get(f[0], r);
                                var u = o[1] = e.get(f[1], r);
                                l = !isNaN(h) && !isNaN(u) && c.dataToPoint(o, null, s);
                            }
                            d ? (n[a++] = l ? l[0] : NaN, n[a++] = l ? l[1] : NaN) : e.setItemLayout(r, l && l.slice() || [ NaN, NaN ]);
                        }
                        d && e.setLayout("symbolPoints", n);
                    }
                };
            }
        }
    }), Nr(Cc.PROCESSOR.STATISTIC, {
        seriesType: "line",
        modifyOutputEnd: !0,
        reset: function(t) {
            var e = t.getData(), i = t.get("sampling"), n = t.coordinateSystem;
            if ("cartesian2d" === n.type && i) {
                var r, a = n.getBaseAxis(), o = n.getOtherAxis(a), s = a.getExtent(), l = s[1] - s[0], h = Math.round(e.count() / l);
                1 < h && ("string" == typeof i ? r = Id[i] : "function" == typeof i && (r = i), 
                r && t.setData(e.downSample(e.mapDimension(o.dim), 1 / h, r, Dd)));
            }
        }
    });
    var kf = ($u.extend({
        type: "series.gauge",
        getInitialData: function(t) {
            var e = t.data || [];
            return M(e) || (e = [ e ]), t.data = e, function(t, e, i) {
                e = M(e) && {
                    coordDimensions: e
                } || D({}, e);
                var n = t.getSource(), r = rd(n, e), a = new ed(r, t);
                return a.initData(n, i), a;
            }(this, [ "value" ]);
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            center: [ "50%", "50%" ],
            legendHoverLink: !0,
            radius: "75%",
            startAngle: 225,
            endAngle: -45,
            clockwise: !0,
            min: 0,
            max: 100,
            splitNumber: 10,
            axisLine: {
                show: !0,
                lineStyle: {
                    color: [ [ .2, "#91c7ae" ], [ .8, "#63869e" ], [ 1, "#c23531" ] ],
                    width: 30
                }
            },
            splitLine: {
                show: !0,
                length: 30,
                lineStyle: {
                    color: "#eee",
                    width: 2,
                    type: "solid"
                }
            },
            axisTick: {
                show: !0,
                splitNumber: 5,
                length: 8,
                lineStyle: {
                    color: "#eee",
                    width: 1,
                    type: "solid"
                }
            },
            axisLabel: {
                show: !0,
                distance: 5,
                color: "auto"
            },
            pointer: {
                show: !0,
                length: "80%",
                width: 8
            },
            itemStyle: {
                color: "auto"
            },
            title: {
                show: !0,
                offsetCenter: [ 0, "-40%" ],
                color: "#333",
                fontSize: 15
            },
            detail: {
                show: !0,
                backgroundColor: "rgba(0,0,0,0)",
                borderWidth: 0,
                borderColor: "#ccc",
                width: 100,
                height: null,
                padding: [ 5, 10 ],
                offsetCenter: [ 0, "40%" ],
                color: "auto",
                fontSize: 30
            }
        }
    }), fi.extend({
        type: "echartsGaugePointer",
        shape: {
            angle: 0,
            width: 10,
            r: 10,
            x: 0,
            y: 0
        },
        buildPath: function(t, e) {
            var i = Math.cos, n = Math.sin, r = e.r, a = e.width, o = e.angle, s = e.x - i(o) * a * (r / 3 <= a ? 1 : 2), l = e.y - n(o) * a * (r / 3 <= a ? 1 : 2);
            o = e.angle - Math.PI / 2, t.moveTo(s, l), t.lineTo(e.x + i(o) * a, e.y + n(o) * a), 
            t.lineTo(e.x + i(e.angle) * r, e.y + n(e.angle) * r), t.lineTo(e.x - i(o) * a, e.y - n(o) * a), 
            t.lineTo(s, l);
        }
    })), Tf = 2 * Math.PI;
    tr.extend({
        type: "gauge",
        render: function(t, e, i) {
            this.group.removeAll();
            var n, r, a, o, s, l, h = t.get("axisLine.lineStyle.color"), u = (r = i, a = (n = t).get("center"), 
            o = r.getWidth(), s = r.getHeight(), l = Math.min(o, s), {
                cx: $i(a[0], r.getWidth()),
                cy: $i(a[1], r.getHeight()),
                r: $i(n.get("radius"), l / 2)
            });
            this._renderMain(t, e, i, h, u);
        },
        dispose: function() {},
        _renderMain: function(t, e, i, n, r) {
            for (var a = this.group, o = t.getModel("axisLine").getModel("lineStyle"), s = t.get("clockwise"), l = -t.get("startAngle") / 180 * Math.PI, h = ((f = -t.get("endAngle") / 180 * Math.PI) - l) % Tf, u = l, c = o.get("width"), d = 0; d < n.length; d++) {
                var f, p = Math.min(Math.max(n[d][0], 0), 1), g = new Lh({
                    shape: {
                        startAngle: u,
                        endAngle: f = l + h * p,
                        cx: r.cx,
                        cy: r.cy,
                        clockwise: s,
                        r0: r.r - c,
                        r: r.r
                    },
                    silent: !0
                });
                g.setStyle({
                    fill: n[d][1]
                }), g.setStyle(o.getLineStyle([ "color", "borderWidth", "borderColor" ])), a.add(g), 
                u = f;
            }
            var v = function(t) {
                if (t <= 0) return n[0][1];
                for (var e = 0; e < n.length; e++) if (n[e][0] >= t && (0 === e ? 0 : n[e - 1][0]) < t) return n[e][1];
                return n[e - 1][1];
            };
            if (!s) {
                var m = l;
                l = f, f = m;
            }
            this._renderTicks(t, e, i, v, r, l, f, s), this._renderPointer(t, e, i, v, r, l, f, s), 
            this._renderTitle(t, e, i, v, r), this._renderDetail(t, e, i, v, r);
        },
        _renderTicks: function(t, e, i, n, r, a, o) {
            for (var s = this.group, l = r.cx, h = r.cy, u = r.r, c = +t.get("min"), d = +t.get("max"), f = t.getModel("splitLine"), p = t.getModel("axisTick"), g = t.getModel("axisLabel"), v = t.get("splitNumber"), m = p.get("splitNumber"), y = $i(f.get("length"), u), _ = $i(p.get("length"), u), x = a, w = (o - a) / v, b = w / m, M = f.getModel("lineStyle").getLineStyle(), S = p.getModel("lineStyle").getLineStyle(), C = 0; C <= v; C++) {
                var k = Math.cos(x), T = Math.sin(x);
                if (f.get("show")) {
                    var I = new Oh({
                        shape: {
                            x1: k * u + l,
                            y1: T * u + h,
                            x2: k * (u - y) + l,
                            y2: T * (u - y) + h
                        },
                        style: M,
                        silent: !0
                    });
                    "auto" === M.stroke && I.setStyle({
                        stroke: n(C / v)
                    }), s.add(I);
                }
                if (g.get("show")) {
                    var D = mo(Ki(C / v * (d - c) + c), g.get("formatter")), A = g.get("distance"), L = n(C / v);
                    s.add(new Th({
                        style: zi({}, g, {
                            text: D,
                            x: k * (u - y - A) + l,
                            y: T * (u - y - A) + h,
                            textVerticalAlign: T < -.4 ? "top" : .4 < T ? "bottom" : "middle",
                            textAlign: k < -.4 ? "left" : .4 < k ? "right" : "center"
                        }, {
                            autoColor: L
                        }),
                        silent: !0
                    }));
                }
                if (p.get("show") && C !== v) {
                    for (var P = 0; P <= m; P++) {
                        k = Math.cos(x), T = Math.sin(x);
                        var O = new Oh({
                            shape: {
                                x1: k * u + l,
                                y1: T * u + h,
                                x2: k * (u - _) + l,
                                y2: T * (u - _) + h
                            },
                            silent: !0,
                            style: S
                        });
                        "auto" === S.stroke && O.setStyle({
                            stroke: n((C + P / m) / v)
                        }), s.add(O), x += b;
                    }
                    x -= b;
                } else x += w;
            }
        },
        _renderPointer: function(n, t, e, r, a, i, o) {
            var s = this.group, l = this._data;
            if (n.get("pointer.show")) {
                var h = [ +n.get("min"), +n.get("max") ], u = [ i, o ], c = n.getData(), d = c.mapDimension("value");
                c.diff(l).add(function(t) {
                    var e = new kf({
                        shape: {
                            angle: i
                        }
                    });
                    qi(e, {
                        shape: {
                            angle: Zi(c.get(d, t), h, u, !0)
                        }
                    }, n), s.add(e), c.setItemGraphicEl(t, e);
                }).update(function(t, e) {
                    var i = l.getItemGraphicEl(e);
                    Gi(i, {
                        shape: {
                            angle: Zi(c.get(d, t), h, u, !0)
                        }
                    }, n), s.add(i), c.setItemGraphicEl(t, i);
                }).remove(function(t) {
                    var e = l.getItemGraphicEl(t);
                    s.remove(e);
                }).execute(), c.eachItemGraphicEl(function(t, e) {
                    var i = c.getItemModel(e), n = i.getModel("pointer");
                    t.setShape({
                        x: a.cx,
                        y: a.cy,
                        width: $i(n.get("width"), a.r),
                        r: $i(n.get("length"), a.r)
                    }), t.useStyle(i.getModel("itemStyle").getItemStyle()), "auto" === t.style.fill && t.setStyle("fill", r(Zi(c.get(d, e), h, [ 0, 1 ], !0))), 
                    Ni(t, i.getModel("emphasis.itemStyle").getItemStyle());
                }), this._data = c;
            } else l && l.eachItemGraphicEl(function(t) {
                s.remove(t);
            });
        },
        _renderTitle: function(t, e, i, n, r) {
            var a = t.getData(), o = a.mapDimension("value"), s = t.getModel("title");
            if (s.get("show")) {
                var l = s.get("offsetCenter"), h = r.cx + $i(l[0], r.r), u = r.cy + $i(l[1], r.r), c = +t.get("min"), d = +t.get("max"), f = n(Zi(t.getData().get(o, 0), [ c, d ], [ 0, 1 ], !0));
                this.group.add(new Th({
                    silent: !0,
                    style: zi({}, s, {
                        x: h,
                        y: u,
                        text: a.getName(0),
                        textAlign: "center",
                        textVerticalAlign: "middle"
                    }, {
                        autoColor: f,
                        forceRich: !0
                    })
                }));
            }
        },
        _renderDetail: function(t, e, i, n, r) {
            var a = t.getModel("detail"), o = +t.get("min"), s = +t.get("max");
            if (a.get("show")) {
                var l = a.get("offsetCenter"), h = r.cx + $i(l[0], r.r), u = r.cy + $i(l[1], r.r), c = $i(a.get("width"), r.r), d = $i(a.get("height"), r.r), f = t.getData(), p = f.get(f.mapDimension("value"), 0), g = n(Zi(p, [ o, s ], [ 0, 1 ], !0));
                this.group.add(new Th({
                    silent: !0,
                    style: zi({}, a, {
                        x: h,
                        y: u,
                        text: mo(p, a.get("formatter")),
                        textWidth: isNaN(c) ? null : c,
                        textHeight: isNaN(d) ? null : d,
                        textAlign: "center",
                        textVerticalAlign: "middle"
                    }, {
                        autoColor: g,
                        forceRich: !0
                    })
                }));
            }
        }
    }), t.version = "4.1.0", t.dependencies = {
        zrender: "4.0.4"
    }, t.PRIORITY = Cc, t.init = function(t, e, i) {
        var n = Er(t);
        if (n) return n;
        var r = new _r(t, e, i);
        return r.id = "ec_" + Hc++, Vc[r.id] = r, Ne(t, qc, r.id), function(n) {
            function r(t, e) {
                for (var i = 0; i < t.length; i++) t[i][a] = e;
            }
            var a = "__connectUpdateStatus";
            wc(Oc, function(t, e) {
                n._messageCenter.on(e, function(t) {
                    if (Wc[n.group] && 0 !== n[a]) {
                        if (t && t.escapeConnect) return;
                        var e = n.makeActionFromEvent(t), i = [];
                        wc(Vc, function(t) {
                            t !== n && t.group === n.group && i.push(t);
                        }), r(i, 0), wc(i, function(t) {
                            1 !== t[a] && t.dispatchAction(e);
                        }), r(i, 2);
                    }
                });
            });
        }(r), r;
    }, t.connect = function(e) {
        if (M(e)) {
            var t = e;
            e = null, wc(t, function(t) {
                null != t.group && (e = t.group);
            }), e = e || "g_" + Gc++, wc(t, function(t) {
                t.group = e;
            });
        }
        return Wc[e] = !0, e;
    }, t.disConnect = Or, t.disconnect = Uc, t.dispose = function(t) {
        "string" == typeof t ? t = Vc[t] : t instanceof _r || (t = Er(t)), t instanceof _r && !t.isDisposed() && t.dispose();
    }, t.getInstanceByDom = Er, t.getInstanceById = function(t) {
        return Vc[t];
    }, t.registerTheme = Rr, t.registerPreprocessor = Br, t.registerProcessor = Nr, 
    t.registerPostUpdate = function(t) {
        Bc.push(t);
    }, t.registerAction = zr, t.registerCoordinateSystem = function(t, e) {
        Sn.register(t, e);
    }, t.getCoordinateSystemDimensions = function(t) {
        var e = Sn.get(t);
        return e ? e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice() : void 0;
    }, t.registerLayout = Fr, t.registerVisual = Vr, t.registerLoading = Hr, t.extendComponentModel = function(t) {
        return uu.extend(t);
    }, t.extendComponentView = Gr, t.extendSeriesModel = function(t) {
        return $u.extend(t);
    }, t.extendChartView = function(t) {
        return tr.extend(t);
    }, t.setCanvasCreator = function(t) {
        var e, i;
        i = t, (e = "createCanvas") === e && (zo = null), Bo[e] = i;
    }, t.registerMap = function(t, e, i) {
        e.geoJson && !e.features && (i = e.specialAreas, e = e.geoJson), "string" == typeof e && (e = "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")()), 
        Xc[t] = {
            geoJson: e,
            specialAreas: i
        };
    }, t.getMap = function(t) {
        return Xc[t];
    }, t.dataTool = {};
});