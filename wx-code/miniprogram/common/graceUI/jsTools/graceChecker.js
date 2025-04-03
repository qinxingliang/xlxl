module.exports = {
    error: "",
    check: function(r, e) {
        r = JSON.stringify(r);
        for (var t = JSON.parse(r), s = 0; s < e.length; s++) {
            if (!e[s].checkType) return !0;
            if (!e[s].name) return !0;
            if (!e[s].errorMsg) return !0;
            if (!t[e[s].name] || "" == t[e[s].name]) return this.error = e[s].errorMsg, !1;
            switch ("string" == typeof t[e[s].name] && (t[e[s].name] = t[e[s].name].replace(/\s/g, "")), 
            e[s].checkType) {
              case "string":
                if (!new RegExp("^.{" + e[s].checkRule + "}$").test(t[e[s].name])) return this.error = e[s].errorMsg, 
                !1;
                break;

              case "int":
                var n = e[s].checkRule.split(",");
                if (e.length < 2 ? (n[0] = Number(n[0]) - 1, n[1] = "") : (n[0] = Number(n[0]) - 1, 
                n[1] = Number(n[1]) - 1), !new RegExp("^(-[1-9]|[1-9])[0-9]{" + n[0] + "," + n[1] + "}$").test(t[e[s].name])) return this.error = e[s].errorMsg, 
                !1;
                break;

              case "between":
                if (!this.isNumber(t[e[s].name])) return this.error = e[s].errorMsg, !1;
                if ((a = e[s].checkRule.split(","))[0] = Number(a[0]), a[1] = Number(a[1]), t[e[s].name] > a[1] || t[e[s].name] < a[0]) return this.error = e[s].errorMsg, 
                !1;
                break;

              case "betweenD":
                if (!/^-?\d+$/.test(t[e[s].name])) return this.error = e[s].errorMsg, !1;
                if ((a = e[s].checkRule.split(","))[0] = Number(a[0]), a[1] = Number(a[1]), t[e[s].name] > a[1] || t[e[s].name] < a[0]) return this.error = e[s].errorMsg, 
                !1;
                break;

              case "betweenF":
                var a;
                if (!/^-?[0-9][0-9]?.+[0-9]+$/.test(t[e[s].name])) return this.error = e[s].errorMsg, 
                !1;
                if ((a = e[s].checkRule.split(","))[0] = Number(a[0]), a[1] = Number(a[1]), t[e[s].name] > a[1] || t[e[s].name] < a[0]) return this.error = e[s].errorMsg, 
                !1;
                break;

              case "same":
                if (t[e[s].name] != e[s].checkRule) return this.error = e[s].errorMsg, !1;
                break;

              case "notsame":
                if (t[e[s].name] == e[s].checkRule) return this.error = e[s].errorMsg, !1;
                break;

              case "email":
                if (!/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(t[e[s].name])) return this.error = e[s].errorMsg, 
                !1;
                break;

              case "phoneno":
                if (!/^1[0-9]{10,10}$/.test(t[e[s].name])) return this.error = e[s].errorMsg, !1;
                break;

              case "zipcode":
                if (!/^[0-9]{6}$/.test(t[e[s].name])) return this.error = e[s].errorMsg, !1;
                break;

              case "reg":
                if (!new RegExp(e[s].checkRule).test(t[e[s].name])) return this.error = e[s].errorMsg, 
                !1;
                break;

              case "in":
                if (-1 == e[s].checkRule.indexOf(t[e[s].name])) return this.error = e[s].errorMsg, 
                !1;
                break;

              case "notnull":
                if (null == t[e[s].name] || t[e[s].name].length < 1) return this.error = e[s].errorMsg, 
                !1;
                break;

              case "samewith":
                if (t[e[s].name] != t[e[s].checkRule]) return this.error = e[s].errorMsg, !1;
                break;

              case "numbers":
                if (!new RegExp("^[0-9]{" + e[s].checkRule + "}$").test(t[e[s].name])) return this.error = e[s].errorMsg, 
                !1;
            }
        }
        return !0;
    },
    isNumber: function(r) {
        return NaN != (r = Number(r));
    }
};