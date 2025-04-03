var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

!function(t, e) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.WeCropper = e();
}(void 0, function() {
    var t = void 0, e = [ "touchstarted", "touchmoved", "touchended" ];
    function r(n) {
        for (var o = [], t = arguments.length - 1; 0 < t--; ) o[t] = arguments[t + 1];
        e.forEach(function(t, e) {
            void 0 !== o[e] && (n[t] = o[e]);
        });
    }
    function n() {
        return t || (t = wx.getSystemInfoSync()), t;
    }
    var o = {}, i = {
        id: {
            default: "cropper",
            get: function() {
                return o.id;
            },
            set: function(t) {
                "string" != typeof t && console.error("id：" + t + " is invalid"), o.id = t;
            }
        },
        width: {
            default: 750,
            get: function() {
                return o.width;
            },
            set: function(t) {
                "number" != typeof t && console.error("width：" + t + " is invalid"), o.width = t;
            }
        },
        height: {
            default: 750,
            get: function() {
                return o.height;
            },
            set: function(t) {
                "number" != typeof t && console.error("height：" + t + " is invalid"), o.height = t;
            }
        },
        pixelRatio: {
            default: n().pixelRatio,
            get: function() {
                return o.pixelRatio;
            },
            set: function(t) {
                "number" != typeof t && console.error("pixelRatio：" + t + " is invalid"), o.pixelRatio = t;
            }
        },
        scale: {
            default: 2.5,
            get: function() {
                return o.scale;
            },
            set: function(t) {
                "number" != typeof t && console.error("scale：" + t + " is invalid"), o.scale = t;
            }
        },
        zoom: {
            default: 5,
            get: function() {
                return o.zoom;
            },
            set: function(t) {
                "number" != typeof t ? console.error("zoom：" + t + " is invalid") : (t < 0 || 10 < t) && console.error("zoom should be ranged in 0 ~ 10"), 
                o.zoom = t;
            }
        },
        src: {
            default: "",
            get: function() {
                return o.src;
            },
            set: function(t) {
                "string" != typeof t && console.error("src：" + t + " is invalid"), o.src = t;
            }
        },
        cut: {
            default: {},
            get: function() {
                return o.cut;
            },
            set: function(t) {
                "object" !== (void 0 === t ? "undefined" : _typeof(t)) && console.error("cut：" + t + " is invalid"), 
                o.cut = t;
            }
        },
        boundStyle: {
            default: {},
            get: function() {
                return o.boundStyle;
            },
            set: function(t) {
                "object" !== (void 0 === t ? "undefined" : _typeof(t)) && console.error("boundStyle：" + t + " is invalid"), 
                o.boundStyle = t;
            }
        },
        onReady: {
            default: null,
            get: function() {
                return o.ready;
            },
            set: function(t) {
                o.ready = t;
            }
        },
        onBeforeImageLoad: {
            default: null,
            get: function() {
                return o.beforeImageLoad;
            },
            set: function(t) {
                o.beforeImageLoad = t;
            }
        },
        onImageLoad: {
            default: null,
            get: function() {
                return o.imageLoad;
            },
            set: function(t) {
                o.imageLoad = t;
            }
        },
        onBeforeDraw: {
            default: null,
            get: function() {
                return o.beforeDraw;
            },
            set: function(t) {
                o.beforeDraw = t;
            }
        }
    }, a = n().windowWidth;
    var h = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function c(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports;
    }
    var u = c(function(t, e) {
        e.isStr = function(t) {
            return "string" == typeof t;
        }, e.isNum = function(t) {
            return "number" == typeof t;
        }, e.isArr = Array.isArray, e.isUndef = function(t) {
            return void 0 === t;
        }, e.isTrue = function(t) {
            return !0 === t;
        }, e.isFalse = function(t) {
            return !1 === t;
        }, e.isFunc = function(t) {
            return "function" == typeof t;
        }, e.isObj = e.isObject = function(t) {
            return null !== t && "object" === (void 0 === t ? "undefined" : _typeof(t));
        };
        var n = Object.prototype.toString;
        e.isPlainObject = function(t) {
            return "[object Object]" === n.call(t);
        };
        var o = Object.prototype.hasOwnProperty;
        e.hasOwn = function(t, e) {
            return o.call(t, e);
        }, e.noop = function(t, e, n) {}, e.isValidArrayIndex = function(t) {
            var e = parseFloat(String(t));
            return 0 <= e && Math.floor(e) === e && isFinite(t);
        };
    }), l = u.isFunc, p = u.isPlainObject, s = [ "ready", "beforeImageLoad", "beforeDraw", "imageLoad" ];
    function d(r) {
        return function(t) {
            for (var o = [], e = arguments.length - 1; 0 < e--; ) o[e] = arguments[e + 1];
            return void 0 === t && (t = {}), new Promise(function(e, n) {
                t.success = function(t) {
                    e(t);
                }, t.fail = function(t) {
                    n(t);
                }, r.apply(void 0, [ t ].concat(o));
            });
        };
    }
    function g(e, n) {
        return void 0 === n && (n = !1), new Promise(function(t) {
            e.draw(n, t);
        });
    }
    var v = d(wx.getImageInfo), y = d(wx.canvasToTempFilePath), f = c(function(u, f) {
        !function(t) {
            var e = f, n = u && u.exports == e && u, o = "object" == (void 0 === h ? "undefined" : _typeof(h)) && h;
            o.global !== o && o.window !== o || (t = o);
            var r = function(t) {
                this.message = t;
            };
            (r.prototype = new Error()).name = "InvalidCharacterError";
            var s = function(t) {
                throw new r(t);
            }, d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = /[\t\n\f\r ]/g, i = {
                encode: function(t) {
                    t = String(t), /[^\0-\xFF]/.test(t) && s("The string to be encoded contains characters outside of the Latin1 range.");
                    for (var e, n, o, r, i = t.length % 3, a = "", c = -1, u = t.length - i; ++c < u; ) e = t.charCodeAt(c) << 16, 
                    n = t.charCodeAt(++c) << 8, o = t.charCodeAt(++c), a += d.charAt((r = e + n + o) >> 18 & 63) + d.charAt(r >> 12 & 63) + d.charAt(r >> 6 & 63) + d.charAt(63 & r);
                    return 2 == i ? (e = t.charCodeAt(c) << 8, n = t.charCodeAt(++c), a += d.charAt((r = e + n) >> 10) + d.charAt(r >> 4 & 63) + d.charAt(r << 2 & 63) + "=") : 1 == i && (r = t.charCodeAt(c), 
                    a += d.charAt(r >> 2) + d.charAt(r << 4 & 63) + "=="), a;
                },
                decode: function(t) {
                    var e = (t = String(t).replace(c, "")).length;
                    e % 4 == 0 && (e = (t = t.replace(/==?$/, "")).length), (e % 4 == 1 || /[^+a-zA-Z0-9/]/.test(t)) && s("Invalid character: the string to be decoded is not correctly encoded.");
                    for (var n, o, r = 0, i = "", a = -1; ++a < e; ) o = d.indexOf(t.charAt(a)), n = r % 4 ? 64 * n + o : o, 
                    r++ % 4 && (i += String.fromCharCode(255 & n >> (-2 * r & 6)));
                    return i;
                },
                version: "0.1.0"
            };
            if (e && !e.nodeType) if (n) n.exports = i; else for (var a in i) i.hasOwnProperty(a) && (e[a] = i[a]); else t.base64 = i;
        }(h);
    });
    function x(t) {
        var e = "";
        if ("string" == typeof t) e = t; else for (var n = 0; n < t.length; n++) e += String.fromCharCode(t[n]);
        return f.encode(e);
    }
    function m(t, e, n, o, r, i, a) {
        var c, u, s, d, f, h;
        void 0 === a && (a = function() {}), void 0 === i && (i = "png"), i = "image/" + i.toLowerCase().replace(/jpg/i, "jpeg").match(/png|jpeg|bmp|gif/)[0], 
        /bmp/.test(i) ? (c = t, u = e, s = n, d = o, f = r, h = function(t, e) {
            var n = function(t) {
                var e = t.width, n = t.height, o = e * n * 3, r = o + 54, i = [ 66, 77, 255 & r, r >> 8 & 255, r >> 16 & 255, r >> 24 & 255, 0, 0, 0, 0, 54, 0, 0, 0 ], a = [ 40, 0, 0, 0, 255 & e, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255, 255 & n, n >> 8 & 255, n >> 16 & 255, n >> 24 & 255, 1, 0, 24, 0, 0, 0, 0, 0, 255 & o, o >> 8 & 255, o >> 16 & 255, o >> 24 & 255, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], c = (4 - 3 * e % 4) % 4, u = t.data, s = "", d = e << 2, f = n, h = String.fromCharCode;
                do {
                    for (var l = d * (f - 1), p = "", g = 0; g < e; g++) {
                        var v = g << 2;
                        p += h(u[l + v + 2]) + h(u[l + v + 1]) + h(u[l + v]);
                    }
                    for (var y = 0; y < c; y++) p += String.fromCharCode(0);
                    s += p;
                } while (--f);
                return x(i.concat(a)) + x(s);
            }(t);
            l(a) && a("data:" + ("image/" + i) + ";base64," + n, e);
        }, wx.canvasGetImageData({
            canvasId: c,
            x: u,
            y: s,
            width: d,
            height: f,
            success: function(t) {
                h(t, null);
            },
            fail: function(t) {
                h(null, t);
            }
        })) : console.error("暂不支持生成'" + i + "'类型的base64图片");
    }
    var b = function(t, e) {
        return void 0 === t && (t = {}), void 0 === e && (e = function() {}), m(t.canvasId, t.x, t.y, t.width, t.height, "bmp", e);
    };
    var w = {
        touchStart: function(t) {
            var e = t.touches, n = e[0], o = e[1];
            this.src && (r(this, !0, null, null), this.__oneTouchStart(n), 2 <= t.touches.length && this.__twoTouchStart(n, o));
        },
        touchMove: function(t) {
            var e = t.touches, n = e[0], o = e[1];
            this.src && (r(this, null, !0), 1 === t.touches.length && this.__oneTouchMove(n), 
            2 <= t.touches.length && this.__twoTouchMove(n, o));
        },
        touchEnd: function(t) {
            this.src && (r(this, !1, !1, !0), this.__xtouchEnd());
        }
    };
    var S = function(t) {
        var e, n, o = this, r = {};
        return e = o, n = i, Object.defineProperties(e, n), Object.keys(i).forEach(function(t) {
            r[t] = i[t].default;
        }), Object.assign(o, r, t), o.prepare(), o.attachPage(), o.createCtx(), o.observer(), 
        o.cutt(), o.methods(), o.init(), o.update(), o;
    };
    return S.prototype.init = function() {
        var t = this, e = t.src;
        return t.version = "1.3.9", "function" == typeof t.onReady && t.onReady(t.ctx, t), 
        e ? t.pushOrign(e) : t.updateCanvas(), r(t, !1, !1, !1), t.oldScale = 1, t.newScale = 1, 
        t;
    }, Object.assign(S.prototype, w), S.prototype.prepare = function() {
        var n = this;
        n.attachPage = function() {
            var t = getCurrentPages(), e = t[t.length - 1];
            Object.defineProperty(e, "wecropper", {
                get: function() {
                    return console.warn("Instance will not be automatically bound to the page after v1.4.0\n\nPlease use a custom instance name instead\n\nExample: \nthis.mycropper = new WeCropper(options)\n\n// ...\nthis.mycropper.getCropperImage()"), 
                    n;
                },
                configurable: !0
            });
        }, n.createCtx = function() {
            var t = n.id, e = n.targetId;
            t ? (n.ctx = n.ctx || wx.createCanvasContext(t), n.targetCtx = n.targetCtx || wx.createCanvasContext(e)) : console.error("constructor: create canvas context failed, 'id' must be valuable");
        }, n.deviceRadio = a / 750;
    }, S.prototype.observer = function() {
        var o = this;
        o.on = function(t, e) {
            var n;
            return -1 < s.indexOf(t) ? l(e) && ("ready" === t ? e(o) : o["on" + (n = t, n.charAt(0).toUpperCase() + n.slice(1))] = e) : console.error("event: " + t + " is invalid"), 
            o;
        };
    }, S.prototype.methods = function() {
        var i = this, t = i.width, e = i.height, a = i.id, c = i.targetId, u = i.pixelRatio, n = i.cut, s = n.x;
        void 0 === s && (s = 0);
        var d = n.y;
        void 0 === d && (d = 0);
        var f = n.width;
        void 0 === f && (f = t);
        var h = n.height;
        void 0 === h && (h = e), i.updateCanvas = function(t) {
            return i.croperTarget && i.ctx.drawImage(i.croperTarget, i.imgLeft, i.imgTop, i.scaleWidth, i.scaleHeight), 
            l(i.onBeforeDraw) && i.onBeforeDraw(i.ctx, i), i.setBoundStyle(i.boundStyle), i.ctx.draw(!1, t), 
            i;
        }, i.pushOrigin = i.pushOrign = function(t) {
            return i.src = t, l(i.onBeforeImageLoad) && i.onBeforeImageLoad(i.ctx, i), v({
                src: t
            }).then(function(t) {
                var e = t.width / t.height, n = f / h;
                return i.croperTarget = t.path, e < n ? (i.rectX = s, i.baseWidth = f, i.baseHeight = f / e, 
                i.rectY = d - Math.abs((h - i.baseHeight) / 2)) : (i.rectY = d, i.baseWidth = h * e, 
                i.baseHeight = h, i.rectX = s - Math.abs((f - i.baseWidth) / 2)), i.imgLeft = i.rectX, 
                i.imgTop = i.rectY, i.scaleWidth = i.baseWidth, i.scaleHeight = i.baseHeight, i.update(), 
                new Promise(function(t) {
                    i.updateCanvas(t);
                });
            }).then(function() {
                l(i.onImageLoad) && i.onImageLoad(i.ctx, i);
            });
        }, i.removeImage = function() {
            return i.src = "", i.croperTarget = "", g(i.ctx);
        }, i.getCropperBase64 = function(t) {
            void 0 === t && (t = function() {}), b({
                canvasId: a,
                x: s,
                y: d,
                width: f,
                height: h
            }, t);
        }, i.getCropperImage = function(t, n) {
            var e = t, o = {
                canvasId: a,
                x: s,
                y: d,
                width: f,
                height: h
            }, r = function() {
                return Promise.resolve();
            };
            return p(e) && e.original && (r = function() {
                return i.targetCtx.drawImage(i.croperTarget, i.imgLeft * u, i.imgTop * u, i.scaleWidth * u, i.scaleHeight * u), 
                o = {
                    canvasId: c,
                    x: s * u,
                    y: d * u,
                    width: f * u,
                    height: h * u
                }, g(i.targetCtx);
            }), r().then(function() {
                p(e) && (o = Object.assign({}, o, e)), l(e) && (n = e);
                var t = o.componentContext ? [ o, o.componentContext ] : [ o ];
                return y.apply(null, t);
            }).then(function(t) {
                var e = t.tempFilePath;
                return l(n) ? n.call(i, e, null) : e;
            }).catch(function(t) {
                if (!l(n)) throw t;
                n.call(i, null, t);
            });
        };
    }, S.prototype.cutt = function() {
        var a = this, c = a.width, u = a.height, t = a.cut, s = t.x;
        void 0 === s && (s = 0);
        var d = t.y;
        void 0 === d && (d = 0);
        var f = t.width;
        void 0 === f && (f = c);
        var h = t.height;
        void 0 === h && (h = u), a.outsideBound = function(t, e) {
            a.imgLeft = s <= t ? s : a.scaleWidth + t - s <= f ? s + f - a.scaleWidth : t, a.imgTop = d <= e ? d : a.scaleHeight + e - d <= h ? d + h - a.scaleHeight : e;
        }, a.setBoundStyle = function(t) {
            void 0 === t && (t = {});
            var e = t.color;
            void 0 === e && (e = "#04b00f");
            var n = t.mask;
            void 0 === n && (n = "rgba(0, 0, 0, 0.3)");
            var o = t.lineWidth;
            void 0 === o && (o = 1);
            var r = o / 2, i = [ {
                start: {
                    x: s - r,
                    y: d + 10 - r
                },
                step1: {
                    x: s - r,
                    y: d - r
                },
                step2: {
                    x: s + 10 - r,
                    y: d - r
                }
            }, {
                start: {
                    x: s - r,
                    y: d + h - 10 + r
                },
                step1: {
                    x: s - r,
                    y: d + h + r
                },
                step2: {
                    x: s + 10 - r,
                    y: d + h + r
                }
            }, {
                start: {
                    x: s + f - 10 + r,
                    y: d - r
                },
                step1: {
                    x: s + f + r,
                    y: d - r
                },
                step2: {
                    x: s + f + r,
                    y: d + 10 - r
                }
            }, {
                start: {
                    x: s + f + r,
                    y: d + h - 10 + r
                },
                step1: {
                    x: s + f + r,
                    y: d + h + r
                },
                step2: {
                    x: s + f - 10 + r,
                    y: d + h + r
                }
            } ];
            a.ctx.beginPath(), a.ctx.setFillStyle(n), a.ctx.fillRect(0, 0, s, u), a.ctx.fillRect(s, 0, f, d), 
            a.ctx.fillRect(s, d + h, f, u - d - h), a.ctx.fillRect(s + f, 0, c - s - f, u), 
            a.ctx.fill(), i.forEach(function(t) {
                a.ctx.beginPath(), a.ctx.setStrokeStyle(e), a.ctx.setLineWidth(o), a.ctx.moveTo(t.start.x, t.start.y), 
                a.ctx.lineTo(t.step1.x, t.step1.y), a.ctx.lineTo(t.step2.x, t.step2.y), a.ctx.stroke();
            });
        };
    }, S.prototype.update = function() {
        var g = this;
        g.src && (g.__oneTouchStart = function(t) {
            g.touchX0 = Math.round(t.x), g.touchY0 = Math.round(t.y);
        }, g.__oneTouchMove = function(t) {
            var e, n;
            if (g.touchended) return g.updateCanvas();
            e = Math.round(t.x - g.touchX0), n = Math.round(t.y - g.touchY0);
            var o = Math.round(g.rectX + e), r = Math.round(g.rectY + n);
            g.outsideBound(o, r), g.updateCanvas();
        }, g.__twoTouchStart = function(t, e) {
            var n, o, r;
            g.touchX1 = Math.round(g.rectX + g.scaleWidth / 2), g.touchY1 = Math.round(g.rectY + g.scaleHeight / 2), 
            n = Math.round(e.x - t.x), o = Math.round(e.y - t.y), r = Math.round(Math.sqrt(n * n + o * o)), 
            g.oldDistance = r;
        }, g.__twoTouchMove = function(t, e) {
            var n, o, r, i, a, c, u, s = g.oldScale, d = g.oldDistance, f = g.scale, h = g.zoom;
            g.newScale = (n = s, o = d, r = h, i = t, a = e, c = Math.round(a.x - i.x), u = Math.round(a.y - i.y), 
            n + .001 * r * (Math.round(Math.sqrt(c * c + u * u)) - o)), g.newScale <= 1 && (g.newScale = 1), 
            g.newScale >= f && (g.newScale = f), g.scaleWidth = Math.round(g.newScale * g.baseWidth), 
            g.scaleHeight = Math.round(g.newScale * g.baseHeight);
            var l = Math.round(g.touchX1 - g.scaleWidth / 2), p = Math.round(g.touchY1 - g.scaleHeight / 2);
            g.outsideBound(l, p), g.updateCanvas();
        }, g.__xtouchEnd = function() {
            g.oldScale = g.newScale, g.rectX = g.imgLeft, g.rectY = g.imgTop;
        });
    }, S;
});