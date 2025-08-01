/*! For license information please see gamepush.gd.js.LICENSE.txt */
(() => {
  var e,
    t,
    i,
    r,
    n = {
      2616: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var i = e(t);
                return t[2] ? "@media ".concat(t[2], " {").concat(i, "}") : i;
              }).join("");
            }),
            (t.i = function (e, i, r) {
              "string" == typeof e && (e = [[null, e, ""]]);
              var n = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var a = this[s][0];
                  null != a && (n[a] = !0);
                }
              for (var o = 0; o < e.length; o++) {
                var c = [].concat(e[o]);
                (r && n[c[0]]) ||
                  (i &&
                    (c[2]
                      ? (c[2] = "".concat(i, " and ").concat(c[2]))
                      : (c[2] = i)),
                  t.push(c));
              }
            }),
            t
          );
        };
      },
      9639: function (e, t, i) {
        var r, n, s;
        function a(e) {
          return (a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        ((s = function () {
          "use strict";
          var e = 6e4,
            t = 36e5,
            i = "millisecond",
            r = "second",
            n = "minute",
            s = "hour",
            o = "day",
            c = "week",
            l = "month",
            h = "quarter",
            u = "year",
            d = "date",
            p = "Invalid Date",
            f =
              /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
            v =
              /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            y = {
              name: "en",
              weekdays:
                "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                  "_",
                ),
              months:
                "January_February_March_April_May_June_July_August_September_October_November_December".split(
                  "_",
                ),
              ordinal: function (e) {
                var t = ["th", "st", "nd", "rd"],
                  i = e % 100;
                return "[" + e + (t[(i - 20) % 10] || t[i] || t[0]) + "]";
              },
            },
            m = function (e, t, i) {
              var r = String(e);
              return !r || r.length >= t
                ? e
                : "" + Array(t + 1 - r.length).join(i) + e;
            },
            g = {
              s: m,
              z: function (e) {
                var t = -e.utcOffset(),
                  i = Math.abs(t),
                  r = Math.floor(i / 60),
                  n = i % 60;
                return (t <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(n, 2, "0");
              },
              m: function e(t, i) {
                if (t.date() < i.date()) return -e(i, t);
                var r = 12 * (i.year() - t.year()) + (i.month() - t.month()),
                  n = t.clone().add(r, l),
                  s = i - n < 0,
                  a = t.clone().add(r + (s ? -1 : 1), l);
                return +(-(r + (i - n) / (s ? n - a : a - n)) || 0);
              },
              a: function (e) {
                return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
              },
              p: function (e) {
                return (
                  {
                    M: l,
                    y: u,
                    w: c,
                    d: o,
                    D: d,
                    h: s,
                    m: n,
                    s: r,
                    ms: i,
                    Q: h,
                  }[e] ||
                  String(e || "")
                    .toLowerCase()
                    .replace(/s$/, "")
                );
              },
              u: function (e) {
                return void 0 === e;
              },
            },
            w = "en",
            b = {};
          b[w] = y;
          var E = "$isDayjsObject",
            P = function (e) {
              return e instanceof T || !(!e || !e[E]);
            },
            S = function e(t, i, r) {
              var n;
              if (!t) return w;
              if ("string" == typeof t) {
                var s = t.toLowerCase();
                (b[s] && (n = s), i && ((b[s] = i), (n = s)));
                var a = t.split("-");
                if (!n && a.length > 1) return e(a[0]);
              } else {
                var o = t.name;
                ((b[o] = t), (n = o));
              }
              return (!r && n && (w = n), n || (!r && w));
            },
            _ = function (e, t) {
              if (P(e)) return e.clone();
              var i = "object" == a(t) ? t : {};
              return ((i.date = e), (i.args = arguments), new T(i));
            },
            A = g;
          ((A.l = S),
            (A.i = P),
            (A.w = function (e, t) {
              return _(e, {
                locale: t.$L,
                utc: t.$u,
                x: t.$x,
                $offset: t.$offset,
              });
            }));
          var T = (function () {
              function a(e) {
                ((this.$L = S(e.locale, null, !0)),
                  this.parse(e),
                  (this.$x = this.$x || e.x || {}),
                  (this[E] = !0));
              }
              var y = a.prototype;
              return (
                (y.parse = function (e) {
                  ((this.$d = (function (e) {
                    var t = e.date,
                      i = e.utc;
                    if (null === t) return new Date(NaN);
                    if (A.u(t)) return new Date();
                    if (t instanceof Date) return new Date(t);
                    if ("string" == typeof t && !/Z$/i.test(t)) {
                      var r = t.match(f);
                      if (r) {
                        var n = r[2] - 1 || 0,
                          s = (r[7] || "0").substring(0, 3);
                        return i
                          ? new Date(
                              Date.UTC(
                                r[1],
                                n,
                                r[3] || 1,
                                r[4] || 0,
                                r[5] || 0,
                                r[6] || 0,
                                s,
                              ),
                            )
                          : new Date(
                              r[1],
                              n,
                              r[3] || 1,
                              r[4] || 0,
                              r[5] || 0,
                              r[6] || 0,
                              s,
                            );
                      }
                    }
                    return new Date(t);
                  })(e)),
                    this.init());
                }),
                (y.init = function () {
                  var e = this.$d;
                  ((this.$y = e.getFullYear()),
                    (this.$M = e.getMonth()),
                    (this.$D = e.getDate()),
                    (this.$W = e.getDay()),
                    (this.$H = e.getHours()),
                    (this.$m = e.getMinutes()),
                    (this.$s = e.getSeconds()),
                    (this.$ms = e.getMilliseconds()));
                }),
                (y.$utils = function () {
                  return A;
                }),
                (y.isValid = function () {
                  return !(this.$d.toString() === p);
                }),
                (y.isSame = function (e, t) {
                  var i = _(e);
                  return this.startOf(t) <= i && i <= this.endOf(t);
                }),
                (y.isAfter = function (e, t) {
                  return _(e) < this.startOf(t);
                }),
                (y.isBefore = function (e, t) {
                  return this.endOf(t) < _(e);
                }),
                (y.$g = function (e, t, i) {
                  return A.u(e) ? this[t] : this.set(i, e);
                }),
                (y.unix = function () {
                  return Math.floor(this.valueOf() / 1e3);
                }),
                (y.valueOf = function () {
                  return this.$d.getTime();
                }),
                (y.startOf = function (e, t) {
                  var i = this,
                    a = !!A.u(t) || t,
                    h = A.p(e),
                    p = function (e, t) {
                      var r = A.w(
                        i.$u ? Date.UTC(i.$y, t, e) : new Date(i.$y, t, e),
                        i,
                      );
                      return a ? r : r.endOf(o);
                    },
                    f = function (e, t) {
                      return A.w(
                        i
                          .toDate()
                          [
                            e
                          ].apply(i.toDate("s"), (a ? [0, 0, 0, 0] : [23, 59,
                                  59, 999]).slice(t)),
                        i,
                      );
                    },
                    v = this.$W,
                    y = this.$M,
                    m = this.$D,
                    g = "set" + (this.$u ? "UTC" : "");
                  switch (h) {
                    case u:
                      return a ? p(1, 0) : p(31, 11);
                    case l:
                      return a ? p(1, y) : p(0, y + 1);
                    case c:
                      var w = this.$locale().weekStart || 0,
                        b = (v < w ? v + 7 : v) - w;
                      return p(a ? m - b : m + (6 - b), y);
                    case o:
                    case d:
                      return f(g + "Hours", 0);
                    case s:
                      return f(g + "Minutes", 1);
                    case n:
                      return f(g + "Seconds", 2);
                    case r:
                      return f(g + "Milliseconds", 3);
                    default:
                      return this.clone();
                  }
                }),
                (y.endOf = function (e) {
                  return this.startOf(e, !1);
                }),
                (y.$set = function (e, t) {
                  var a,
                    c = A.p(e),
                    h = "set" + (this.$u ? "UTC" : ""),
                    p = ((a = {}),
                    (a[o] = h + "Date"),
                    (a[d] = h + "Date"),
                    (a[l] = h + "Month"),
                    (a[u] = h + "FullYear"),
                    (a[s] = h + "Hours"),
                    (a[n] = h + "Minutes"),
                    (a[r] = h + "Seconds"),
                    (a[i] = h + "Milliseconds"),
                    a)[c],
                    f = c === o ? this.$D + (t - this.$W) : t;
                  if (c === l || c === u) {
                    var v = this.clone().set(d, 1);
                    (v.$d[p](f),
                      v.init(),
                      (this.$d = v.set(
                        d,
                        Math.min(this.$D, v.daysInMonth()),
                      ).$d));
                  } else p && this.$d[p](f);
                  return (this.init(), this);
                }),
                (y.set = function (e, t) {
                  return this.clone().$set(e, t);
                }),
                (y.get = function (e) {
                  return this[A.p(e)]();
                }),
                (y.add = function (i, a) {
                  var h,
                    d = this;
                  i = Number(i);
                  var p = A.p(a),
                    f = function (e) {
                      var t = _(d);
                      return A.w(t.date(t.date() + Math.round(e * i)), d);
                    };
                  if (p === l) return this.set(l, this.$M + i);
                  if (p === u) return this.set(u, this.$y + i);
                  if (p === o) return f(1);
                  if (p === c) return f(7);
                  var v =
                      ((h = {}), (h[n] = e), (h[s] = t), (h[r] = 1e3), h)[p] ||
                      1,
                    y = this.$d.getTime() + i * v;
                  return A.w(y, this);
                }),
                (y.subtract = function (e, t) {
                  return this.add(-1 * e, t);
                }),
                (y.format = function (e) {
                  var t = this,
                    i = this.$locale();
                  if (!this.isValid()) return i.invalidDate || p;
                  var r = e || "YYYY-MM-DDTHH:mm:ssZ",
                    n = A.z(this),
                    s = this.$H,
                    a = this.$m,
                    o = this.$M,
                    c = i.weekdays,
                    l = i.months,
                    h = i.meridiem,
                    u = function (e, i, n, s) {
                      return (e && (e[i] || e(t, r))) || n[i].slice(0, s);
                    },
                    d = function (e) {
                      return A.s(s % 12 || 12, e, "0");
                    },
                    f =
                      h ||
                      function (e, t, i) {
                        var r = e < 12 ? "AM" : "PM";
                        return i ? r.toLowerCase() : r;
                      };
                  return r.replace(v, function (e, r) {
                    return (
                      r ||
                      (function (e) {
                        switch (e) {
                          case "YY":
                            return String(t.$y).slice(-2);
                          case "YYYY":
                            return A.s(t.$y, 4, "0");
                          case "M":
                            return o + 1;
                          case "MM":
                            return A.s(o + 1, 2, "0");
                          case "MMM":
                            return u(i.monthsShort, o, l, 3);
                          case "MMMM":
                            return u(l, o);
                          case "D":
                            return t.$D;
                          case "DD":
                            return A.s(t.$D, 2, "0");
                          case "d":
                            return String(t.$W);
                          case "dd":
                            return u(i.weekdaysMin, t.$W, c, 2);
                          case "ddd":
                            return u(i.weekdaysShort, t.$W, c, 3);
                          case "dddd":
                            return c[t.$W];
                          case "H":
                            return String(s);
                          case "HH":
                            return A.s(s, 2, "0");
                          case "h":
                            return d(1);
                          case "hh":
                            return d(2);
                          case "a":
                            return f(s, a, !0);
                          case "A":
                            return f(s, a, !1);
                          case "m":
                            return String(a);
                          case "mm":
                            return A.s(a, 2, "0");
                          case "s":
                            return String(t.$s);
                          case "ss":
                            return A.s(t.$s, 2, "0");
                          case "SSS":
                            return A.s(t.$ms, 3, "0");
                          case "Z":
                            return n;
                        }
                        return null;
                      })(e) ||
                      n.replace(":", "")
                    );
                  });
                }),
                (y.utcOffset = function () {
                  return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
                }),
                (y.diff = function (i, a, d) {
                  var p,
                    f = this,
                    v = A.p(a),
                    y = _(i),
                    m = (y.utcOffset() - this.utcOffset()) * e,
                    g = this - y,
                    w = function () {
                      return A.m(f, y);
                    };
                  switch (v) {
                    case u:
                      p = w() / 12;
                      break;
                    case l:
                      p = w();
                      break;
                    case h:
                      p = w() / 3;
                      break;
                    case c:
                      p = (g - m) / 6048e5;
                      break;
                    case o:
                      p = (g - m) / 864e5;
                      break;
                    case s:
                      p = g / t;
                      break;
                    case n:
                      p = g / e;
                      break;
                    case r:
                      p = g / 1e3;
                      break;
                    default:
                      p = g;
                  }
                  return d ? p : A.a(p);
                }),
                (y.daysInMonth = function () {
                  return this.endOf(l).$D;
                }),
                (y.$locale = function () {
                  return b[this.$L];
                }),
                (y.locale = function (e, t) {
                  if (!e) return this.$L;
                  var i = this.clone(),
                    r = S(e, t, !0);
                  return (r && (i.$L = r), i);
                }),
                (y.clone = function () {
                  return A.w(this.$d, this);
                }),
                (y.toDate = function () {
                  return new Date(this.valueOf());
                }),
                (y.toJSON = function () {
                  return this.isValid() ? this.toISOString() : null;
                }),
                (y.toISOString = function () {
                  return this.$d.toISOString();
                }),
                (y.toString = function () {
                  return this.$d.toUTCString();
                }),
                a
              );
            })(),
            O = T.prototype;
          return (
            (_.prototype = O),
            [
              ["$ms", i],
              ["$s", r],
              ["$m", n],
              ["$H", s],
              ["$W", o],
              ["$M", l],
              ["$y", u],
              ["$D", d],
            ].forEach(function (e) {
              O[e[1]] = function (t) {
                return this.$g(t, e[0], e[1]);
              };
            }),
            (_.extend = function (e, t) {
              return (e.$i || (e(t, T, _), (e.$i = !0)), _);
            }),
            (_.locale = S),
            (_.isDayjs = P),
            (_.unix = function (e) {
              return _(1e3 * e);
            }),
            (_.en = b[w]),
            (_.Ls = b),
            (_.p = {}),
            _
          );
        }),
          "object" == a(t)
            ? (e.exports = s())
            : void 0 ===
                (n = "function" == typeof (r = s) ? r.call(t, i, t, e) : r) ||
              (e.exports = n));
      },
      5585: (e) => {
        !(function (t) {
          e.exports = t;
          var i = {
            on: function (e, t) {
              return (s(this, e).push(t), this);
            },
            once: function (e, t) {
              var i = this;
              return ((r.originalListener = t), s(i, e).push(r), i);
              function r() {
                (n.call(i, e, r), t.apply(this, arguments));
              }
            },
            off: n,
            emit: function (e, t) {
              var i = this,
                r = s(i, e, !0);
              if (!r) return !1;
              var n = arguments.length;
              if (1 === n) r.forEach(o);
              else if (2 === n) r.forEach(c);
              else {
                var a = Array.prototype.slice.call(arguments, 1);
                r.forEach(l);
              }
              return !!r.length;
              function o(e) {
                e.call(i);
              }
              function c(e) {
                e.call(i, t);
              }
              function l(e) {
                e.apply(i, a);
              }
            },
          };
          function r(e) {
            for (var t in i) e[t] = i[t];
            return e;
          }
          function n(e, t) {
            var i,
              r = this;
            if (arguments.length) {
              if (t) {
                if ((i = s(r, e, !0))) {
                  if (!(i = i.filter(a)).length) return n.call(r, e);
                  r.listeners[e] = i;
                }
              } else if (
                (i = r.listeners) &&
                (delete i[e], !Object.keys(i).length)
              )
                return n.call(r);
            } else delete r.listeners;
            return r;
            function a(e) {
              return e !== t && e.originalListener !== t;
            }
          }
          function s(e, t, i) {
            if (!i || e.listeners) {
              var r = e.listeners || (e.listeners = {});
              return r[t] || (r[t] = []);
            }
          }
          (r(t.prototype), (t.mixin = r));
        })(function e() {
          if (!(this instanceof e)) return new e();
        });
      },
      4943: (e) => {
        "use strict";
        ((e.exports = r), (e.exports.isMobile = r), (e.exports.default = r));
        var t =
            /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i,
          i = /android|ipad|playbook|silk/i;
        function r(e) {
          e || (e = {});
          var r = e.ua;
          if (
            (r || "undefined" == typeof navigator || (r = navigator.userAgent),
            r &&
              r.headers &&
              "string" == typeof r.headers["user-agent"] &&
              (r = r.headers["user-agent"]),
            "string" != typeof r)
          )
            return !1;
          var n = t.test(r) || (!!e.tablet && i.test(r));
          return (
            !n &&
              e.tablet &&
              e.featureDetect &&
              navigator &&
              navigator.maxTouchPoints > 1 &&
              -1 !== r.indexOf("Macintosh") &&
              -1 !== r.indexOf("Safari") &&
              (n = !0),
            n
          );
        }
      },
      1232: (e, t, i) => {
        var r = i(2510)(i(1203), "DataView");
        e.exports = r;
      },
      7460: (e, t, i) => {
        var r = i(6844),
          n = i(770),
          s = i(862),
          a = i(8670),
          o = i(3931);
        function c(e) {
          var t = -1,
            i = null == e ? 0 : e.length;
          for (this.clear(); ++t < i; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        ((c.prototype.clear = r),
          (c.prototype.delete = n),
          (c.prototype.get = s),
          (c.prototype.has = a),
          (c.prototype.set = o),
          (e.exports = c));
      },
      7589: (e, t, i) => {
        var r = i(693),
          n = i(7564),
          s = i(9656),
          a = i(4133),
          o = i(3135);
        function c(e) {
          var t = -1,
            i = null == e ? 0 : e.length;
          for (this.clear(); ++t < i; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        ((c.prototype.clear = r),
          (c.prototype.delete = n),
          (c.prototype.get = s),
          (c.prototype.has = a),
          (c.prototype.set = o),
          (e.exports = c));
      },
      8489: (e, t, i) => {
        var r = i(2510)(i(1203), "Map");
        e.exports = r;
      },
      5270: (e, t, i) => {
        var r = i(1455),
          n = i(8686),
          s = i(4945),
          a = i(4886),
          o = i(5305);
        function c(e) {
          var t = -1,
            i = null == e ? 0 : e.length;
          for (this.clear(); ++t < i; ) {
            var r = e[t];
            this.set(r[0], r[1]);
          }
        }
        ((c.prototype.clear = r),
          (c.prototype.delete = n),
          (c.prototype.get = s),
          (c.prototype.has = a),
          (c.prototype.set = o),
          (e.exports = c));
      },
      9929: (e, t, i) => {
        var r = i(2510)(i(1203), "Promise");
        e.exports = r;
      },
      1317: (e, t, i) => {
        var r = i(2510)(i(1203), "Set");
        e.exports = r;
      },
      9464: (e, t, i) => {
        var r = i(7589),
          n = i(6315),
          s = i(5716),
          a = i(4013),
          o = i(1974),
          c = i(4467);
        function l(e) {
          var t = (this.__data__ = new r(e));
          this.size = t.size;
        }
        ((l.prototype.clear = n),
          (l.prototype.delete = s),
          (l.prototype.get = a),
          (l.prototype.has = o),
          (l.prototype.set = c),
          (e.exports = l));
      },
      442: (e, t, i) => {
        var r = i(1203).Symbol;
        e.exports = r;
      },
      2802: (e, t, i) => {
        var r = i(1203).Uint8Array;
        e.exports = r;
      },
      2492: (e, t, i) => {
        var r = i(2510)(i(1203), "WeakMap");
        e.exports = r;
      },
      7668: (e) => {
        e.exports = function (e, t) {
          for (
            var i = -1, r = null == e ? 0 : e.length;
            ++i < r && !1 !== t(e[i], i, e);

          );
          return e;
        };
      },
      6541: (e) => {
        e.exports = function (e, t) {
          for (
            var i = -1, r = null == e ? 0 : e.length, n = 0, s = [];
            ++i < r;

          ) {
            var a = e[i];
            t(a, i, e) && (s[n++] = a);
          }
          return s;
        };
      },
      1236: (e, t, i) => {
        var r = i(3494),
          n = i(3130),
          s = i(3936),
          a = i(3238),
          o = i(6711),
          c = i(4587),
          l = Object.prototype.hasOwnProperty;
        e.exports = function (e, t) {
          var i = s(e),
            h = !i && n(e),
            u = !i && !h && a(e),
            d = !i && !h && !u && c(e),
            p = i || h || u || d,
            f = p ? r(e.length, String) : [],
            v = f.length;
          for (var y in e)
            (!t && !l.call(e, y)) ||
              (p &&
                ("length" == y ||
                  (u && ("offset" == y || "parent" == y)) ||
                  (d &&
                    ("buffer" == y ||
                      "byteLength" == y ||
                      "byteOffset" == y)) ||
                  o(y, v))) ||
              f.push(y);
          return f;
        };
      },
      836: (e) => {
        e.exports = function (e, t) {
          for (var i = -1, r = t.length, n = e.length; ++i < r; )
            e[n + i] = t[i];
          return e;
        };
      },
      7213: (e, t, i) => {
        var r = i(8551),
          n = i(294),
          s = Object.prototype.hasOwnProperty;
        e.exports = function (e, t, i) {
          var a = e[t];
          (s.call(e, t) && n(a, i) && (void 0 !== i || t in e)) || r(e, t, i);
        };
      },
      9025: (e, t, i) => {
        var r = i(294);
        e.exports = function (e, t) {
          for (var i = e.length; i--; ) if (r(e[i][0], t)) return i;
          return -1;
        };
      },
      2691: (e, t, i) => {
        var r = i(4336),
          n = i(4638);
        e.exports = function (e, t) {
          return e && r(t, n(t), e);
        };
      },
      4348: (e, t, i) => {
        var r = i(4336),
          n = i(748);
        e.exports = function (e, t) {
          return e && r(t, n(t), e);
        };
      },
      8551: (e, t, i) => {
        var r = i(549);
        e.exports = function (e, t, i) {
          "__proto__" == t && r
            ? r(e, t, {
                configurable: !0,
                enumerable: !0,
                value: i,
                writable: !0,
              })
            : (e[t] = i);
        };
      },
      9984: (e, t, i) => {
        var r = i(9464),
          n = i(7668),
          s = i(7213),
          a = i(2691),
          o = i(4348),
          c = i(9777),
          l = i(5722),
          h = i(1840),
          u = i(4239),
          d = i(8340),
          p = i(8395),
          f = i(1853),
          v = i(2001),
          y = i(1150),
          m = i(3914),
          g = i(3936),
          w = i(3238),
          b = i(2844),
          E = i(368),
          P = i(8131),
          S = i(4638),
          _ = i(748),
          A = "[object Arguments]",
          T = "[object Function]",
          O = "[object Object]",
          C = {};
        ((C[A] =
          C["[object Array]"] =
          C["[object ArrayBuffer]"] =
          C["[object DataView]"] =
          C["[object Boolean]"] =
          C["[object Date]"] =
          C["[object Float32Array]"] =
          C["[object Float64Array]"] =
          C["[object Int8Array]"] =
          C["[object Int16Array]"] =
          C["[object Int32Array]"] =
          C["[object Map]"] =
          C["[object Number]"] =
          C[O] =
          C["[object RegExp]"] =
          C["[object Set]"] =
          C["[object String]"] =
          C["[object Symbol]"] =
          C["[object Uint8Array]"] =
          C["[object Uint8ClampedArray]"] =
          C["[object Uint16Array]"] =
          C["[object Uint32Array]"] =
            !0),
          (C["[object Error]"] = C[T] = C["[object WeakMap]"] = !1),
          (e.exports = function e(t, i, R, k, I, D) {
            var x,
              N = 1 & i,
              M = 2 & i,
              L = 4 & i;
            if ((R && (x = I ? R(t, k, I, D) : R(t)), void 0 !== x)) return x;
            if (!E(t)) return t;
            var F = g(t);
            if (F) {
              if (((x = v(t)), !N)) return l(t, x);
            } else {
              var j = f(t),
                U = j == T || "[object GeneratorFunction]" == j;
              if (w(t)) return c(t, N);
              if (j == O || j == A || (U && !I)) {
                if (((x = M || U ? {} : m(t)), !N))
                  return M ? u(t, o(x, t)) : h(t, a(x, t));
              } else {
                if (!C[j]) return I ? t : {};
                x = y(t, j, N);
              }
            }
            D || (D = new r());
            var G = D.get(t);
            if (G) return G;
            (D.set(t, x),
              P(t)
                ? t.forEach(function (r) {
                    x.add(e(r, i, R, r, t, D));
                  })
                : b(t) &&
                  t.forEach(function (r, n) {
                    x.set(n, e(r, i, R, n, t, D));
                  }));
            var B = F ? void 0 : (L ? (M ? p : d) : M ? _ : S)(t);
            return (
              n(B || t, function (r, n) {
                (B && (r = t[(n = r)]), s(x, n, e(r, i, R, n, t, D)));
              }),
              x
            );
          }));
      },
      9537: (e, t, i) => {
        var r = i(368),
          n = Object.create,
          s = (function () {
            function e() {}
            return function (t) {
              if (!r(t)) return {};
              if (n) return n(t);
              e.prototype = t;
              var i = new e();
              return ((e.prototype = void 0), i);
            };
          })();
        e.exports = s;
      },
      1380: (e, t, i) => {
        var r = i(836),
          n = i(3936);
        e.exports = function (e, t, i) {
          var s = t(e);
          return n(e) ? s : r(s, i(e));
        };
      },
      5244: (e, t, i) => {
        var r = i(442),
          n = i(4384),
          s = i(9671),
          a = r ? r.toStringTag : void 0;
        e.exports = function (e) {
          return null == e
            ? void 0 === e
              ? "[object Undefined]"
              : "[object Null]"
            : a && a in Object(e)
              ? n(e)
              : s(e);
        };
      },
      1650: (e, t, i) => {
        var r = i(5244),
          n = i(8223);
        e.exports = function (e) {
          return n(e) && "[object Arguments]" == r(e);
        };
      },
      3198: (e, t, i) => {
        var r = i(1853),
          n = i(8223);
        e.exports = function (e) {
          return n(e) && "[object Map]" == r(e);
        };
      },
      1627: (e, t, i) => {
        var r = i(1560),
          n = i(9843),
          s = i(368),
          a = i(1421),
          o = /^\[object .+?Constructor\]$/,
          c = Function.prototype,
          l = Object.prototype,
          h = c.toString,
          u = l.hasOwnProperty,
          d = RegExp(
            "^" +
              h
                .call(u)
                .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?",
                ) +
              "$",
          );
        e.exports = function (e) {
          return !(!s(e) || n(e)) && (r(e) ? d : o).test(a(e));
        };
      },
      9781: (e, t, i) => {
        var r = i(1853),
          n = i(8223);
        e.exports = function (e) {
          return n(e) && "[object Set]" == r(e);
        };
      },
      4323: (e, t, i) => {
        var r = i(5244),
          n = i(501),
          s = i(8223),
          a = {};
        ((a["[object Float32Array]"] =
          a["[object Float64Array]"] =
          a["[object Int8Array]"] =
          a["[object Int16Array]"] =
          a["[object Int32Array]"] =
          a["[object Uint8Array]"] =
          a["[object Uint8ClampedArray]"] =
          a["[object Uint16Array]"] =
          a["[object Uint32Array]"] =
            !0),
          (a["[object Arguments]"] =
            a["[object Array]"] =
            a["[object ArrayBuffer]"] =
            a["[object Boolean]"] =
            a["[object DataView]"] =
            a["[object Date]"] =
            a["[object Error]"] =
            a["[object Function]"] =
            a["[object Map]"] =
            a["[object Number]"] =
            a["[object Object]"] =
            a["[object RegExp]"] =
            a["[object Set]"] =
            a["[object String]"] =
            a["[object WeakMap]"] =
              !1),
          (e.exports = function (e) {
            return s(e) && n(e.length) && !!a[r(e)];
          }));
      },
      1741: (e, t, i) => {
        var r = i(7064),
          n = i(8485),
          s = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
          if (!r(e)) return n(e);
          var t = [];
          for (var i in Object(e))
            s.call(e, i) && "constructor" != i && t.push(i);
          return t;
        };
      },
      7695: (e, t, i) => {
        var r = i(368),
          n = i(7064),
          s = i(9857),
          a = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
          if (!r(e)) return s(e);
          var t = n(e),
            i = [];
          for (var o in e)
            ("constructor" != o || (!t && a.call(e, o))) && i.push(o);
          return i;
        };
      },
      3494: (e) => {
        e.exports = function (e, t) {
          for (var i = -1, r = Array(e); ++i < e; ) r[i] = t(i);
          return r;
        };
      },
      9679: (e) => {
        e.exports = function (e) {
          return function (t) {
            return e(t);
          };
        };
      },
      4368: (e, t, i) => {
        var r = i(2802);
        e.exports = function (e) {
          var t = new e.constructor(e.byteLength);
          return (new r(t).set(new r(e)), t);
        };
      },
      9777: (e, t, i) => {
        function r(e) {
          return (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        e = i.nmd(e);
        var n = i(1203),
          s = "object" == r(t) && t && !t.nodeType && t,
          a = s && "object" == r(e) && e && !e.nodeType && e,
          o = a && a.exports === s ? n.Buffer : void 0,
          c = o ? o.allocUnsafe : void 0;
        e.exports = function (e, t) {
          if (t) return e.slice();
          var i = e.length,
            r = c ? c(i) : new e.constructor(i);
          return (e.copy(r), r);
        };
      },
      531: (e, t, i) => {
        var r = i(4368);
        e.exports = function (e, t) {
          var i = t ? r(e.buffer) : e.buffer;
          return new e.constructor(i, e.byteOffset, e.byteLength);
        };
      },
      5116: (e) => {
        var t = /\w*$/;
        e.exports = function (e) {
          var i = new e.constructor(e.source, t.exec(e));
          return ((i.lastIndex = e.lastIndex), i);
        };
      },
      8407: (e, t, i) => {
        var r = i(442),
          n = r ? r.prototype : void 0,
          s = n ? n.valueOf : void 0;
        e.exports = function (e) {
          return s ? Object(s.call(e)) : {};
        };
      },
      4966: (e, t, i) => {
        var r = i(4368);
        e.exports = function (e, t) {
          var i = t ? r(e.buffer) : e.buffer;
          return new e.constructor(i, e.byteOffset, e.length);
        };
      },
      5722: (e) => {
        e.exports = function (e, t) {
          var i = -1,
            r = e.length;
          for (t || (t = Array(r)); ++i < r; ) t[i] = e[i];
          return t;
        };
      },
      4336: (e, t, i) => {
        var r = i(7213),
          n = i(8551);
        e.exports = function (e, t, i, s) {
          var a = !i;
          i || (i = {});
          for (var o = -1, c = t.length; ++o < c; ) {
            var l = t[o],
              h = s ? s(i[l], e[l], l, i, e) : void 0;
            (void 0 === h && (h = e[l]), a ? n(i, l, h) : r(i, l, h));
          }
          return i;
        };
      },
      1840: (e, t, i) => {
        var r = i(4336),
          n = i(9783);
        e.exports = function (e, t) {
          return r(e, n(e), t);
        };
      },
      4239: (e, t, i) => {
        var r = i(4336),
          n = i(9155);
        e.exports = function (e, t) {
          return r(e, n(e), t);
        };
      },
      168: (e, t, i) => {
        var r = i(1203)["__core-js_shared__"];
        e.exports = r;
      },
      549: (e, t, i) => {
        var r = i(2510),
          n = (function () {
            try {
              var e = r(Object, "defineProperty");
              return (e({}, "", {}), e);
            } catch (e) {}
          })();
        e.exports = n;
      },
      9747: (e, t, i) => {
        function r(e) {
          return (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        var n =
          "object" == (void 0 === i.g ? "undefined" : r(i.g)) &&
          i.g &&
          i.g.Object === Object &&
          i.g;
        e.exports = n;
      },
      8340: (e, t, i) => {
        var r = i(1380),
          n = i(9783),
          s = i(4638);
        e.exports = function (e) {
          return r(e, s, n);
        };
      },
      8395: (e, t, i) => {
        var r = i(1380),
          n = i(9155),
          s = i(748);
        e.exports = function (e) {
          return r(e, s, n);
        };
      },
      427: (e, t, i) => {
        var r = i(1929);
        e.exports = function (e, t) {
          var i = e.__data__;
          return r(t) ? i["string" == typeof t ? "string" : "hash"] : i.map;
        };
      },
      2510: (e, t, i) => {
        var r = i(1627),
          n = i(9489);
        e.exports = function (e, t) {
          var i = n(e, t);
          return r(i) ? i : void 0;
        };
      },
      2264: (e, t, i) => {
        var r = i(1182)(Object.getPrototypeOf, Object);
        e.exports = r;
      },
      4384: (e, t, i) => {
        var r = i(442),
          n = Object.prototype,
          s = n.hasOwnProperty,
          a = n.toString,
          o = r ? r.toStringTag : void 0;
        e.exports = function (e) {
          var t = s.call(e, o),
            i = e[o];
          try {
            e[o] = void 0;
            var r = !0;
          } catch (e) {}
          var n = a.call(e);
          return (r && (t ? (e[o] = i) : delete e[o]), n);
        };
      },
      9783: (e, t, i) => {
        var r = i(6541),
          n = i(4361),
          s = Object.prototype.propertyIsEnumerable,
          a = Object.getOwnPropertySymbols,
          o = a
            ? function (e) {
                return null == e
                  ? []
                  : ((e = Object(e)),
                    r(a(e), function (t) {
                      return s.call(e, t);
                    }));
              }
            : n;
        e.exports = o;
      },
      9155: (e, t, i) => {
        var r = i(836),
          n = i(2264),
          s = i(9783),
          a = i(4361),
          o = Object.getOwnPropertySymbols
            ? function (e) {
                for (var t = []; e; ) (r(t, s(e)), (e = n(e)));
                return t;
              }
            : a;
        e.exports = o;
      },
      1853: (e, t, i) => {
        var r = i(1232),
          n = i(8489),
          s = i(9929),
          a = i(1317),
          o = i(2492),
          c = i(5244),
          l = i(1421),
          h = "[object Map]",
          u = "[object Promise]",
          d = "[object Set]",
          p = "[object WeakMap]",
          f = "[object DataView]",
          v = l(r),
          y = l(n),
          m = l(s),
          g = l(a),
          w = l(o),
          b = c;
        (((r && b(new r(new ArrayBuffer(1))) != f) ||
          (n && b(new n()) != h) ||
          (s && b(s.resolve()) != u) ||
          (a && b(new a()) != d) ||
          (o && b(new o()) != p)) &&
          (b = function (e) {
            var t = c(e),
              i = "[object Object]" == t ? e.constructor : void 0,
              r = i ? l(i) : "";
            if (r)
              switch (r) {
                case v:
                  return f;
                case y:
                  return h;
                case m:
                  return u;
                case g:
                  return d;
                case w:
                  return p;
              }
            return t;
          }),
          (e.exports = b));
      },
      9489: (e) => {
        e.exports = function (e, t) {
          return null == e ? void 0 : e[t];
        };
      },
      6844: (e, t, i) => {
        var r = i(6382);
        e.exports = function () {
          ((this.__data__ = r ? r(null) : {}), (this.size = 0));
        };
      },
      770: (e) => {
        e.exports = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return ((this.size -= t ? 1 : 0), t);
        };
      },
      862: (e, t, i) => {
        var r = i(6382),
          n = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
          var t = this.__data__;
          if (r) {
            var i = t[e];
            return "__lodash_hash_undefined__" === i ? void 0 : i;
          }
          return n.call(t, e) ? t[e] : void 0;
        };
      },
      8670: (e, t, i) => {
        var r = i(6382),
          n = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
          var t = this.__data__;
          return r ? void 0 !== t[e] : n.call(t, e);
        };
      },
      3931: (e, t, i) => {
        var r = i(6382);
        e.exports = function (e, t) {
          var i = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (i[e] = r && void 0 === t ? "__lodash_hash_undefined__" : t),
            this
          );
        };
      },
      2001: (e) => {
        var t = Object.prototype.hasOwnProperty;
        e.exports = function (e) {
          var i = e.length,
            r = new e.constructor(i);
          return (
            i &&
              "string" == typeof e[0] &&
              t.call(e, "index") &&
              ((r.index = e.index), (r.input = e.input)),
            r
          );
        };
      },
      1150: (e, t, i) => {
        var r = i(4368),
          n = i(531),
          s = i(5116),
          a = i(8407),
          o = i(4966);
        e.exports = function (e, t, i) {
          var c = e.constructor;
          switch (t) {
            case "[object ArrayBuffer]":
              return r(e);
            case "[object Boolean]":
            case "[object Date]":
              return new c(+e);
            case "[object DataView]":
              return n(e, i);
            case "[object Float32Array]":
            case "[object Float64Array]":
            case "[object Int8Array]":
            case "[object Int16Array]":
            case "[object Int32Array]":
            case "[object Uint8Array]":
            case "[object Uint8ClampedArray]":
            case "[object Uint16Array]":
            case "[object Uint32Array]":
              return o(e, i);
            case "[object Map]":
              return new c();
            case "[object Number]":
            case "[object String]":
              return new c(e);
            case "[object RegExp]":
              return s(e);
            case "[object Set]":
              return new c();
            case "[object Symbol]":
              return a(e);
          }
        };
      },
      3914: (e, t, i) => {
        var r = i(9537),
          n = i(2264),
          s = i(7064);
        e.exports = function (e) {
          return "function" != typeof e.constructor || s(e) ? {} : r(n(e));
        };
      },
      6711: (e) => {
        function t(e) {
          return (t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        var i = /^(?:0|[1-9]\d*)$/;
        e.exports = function (e, r) {
          var n = t(e);
          return (
            !!(r = null == r ? 9007199254740991 : r) &&
            ("number" == n || ("symbol" != n && i.test(e))) &&
            e > -1 &&
            e % 1 == 0 &&
            e < r
          );
        };
      },
      1929: (e) => {
        function t(e) {
          return (t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        e.exports = function (e) {
          var i = t(e);
          return "string" == i ||
            "number" == i ||
            "symbol" == i ||
            "boolean" == i
            ? "__proto__" !== e
            : null === e;
        };
      },
      9843: (e, t, i) => {
        var r,
          n = i(168),
          s = (r = /[^.]+$/.exec((n && n.keys && n.keys.IE_PROTO) || ""))
            ? "Symbol(src)_1." + r
            : "";
        e.exports = function (e) {
          return !!s && s in e;
        };
      },
      7064: (e) => {
        var t = Object.prototype;
        e.exports = function (e) {
          var i = e && e.constructor;
          return e === (("function" == typeof i && i.prototype) || t);
        };
      },
      693: (e) => {
        e.exports = function () {
          ((this.__data__ = []), (this.size = 0));
        };
      },
      7564: (e, t, i) => {
        var r = i(9025),
          n = Array.prototype.splice;
        e.exports = function (e) {
          var t = this.__data__,
            i = r(t, e);
          return !(
            i < 0 ||
            (i == t.length - 1 ? t.pop() : n.call(t, i, 1), --this.size, 0)
          );
        };
      },
      9656: (e, t, i) => {
        var r = i(9025);
        e.exports = function (e) {
          var t = this.__data__,
            i = r(t, e);
          return i < 0 ? void 0 : t[i][1];
        };
      },
      4133: (e, t, i) => {
        var r = i(9025);
        e.exports = function (e) {
          return r(this.__data__, e) > -1;
        };
      },
      3135: (e, t, i) => {
        var r = i(9025);
        e.exports = function (e, t) {
          var i = this.__data__,
            n = r(i, e);
          return (n < 0 ? (++this.size, i.push([e, t])) : (i[n][1] = t), this);
        };
      },
      1455: (e, t, i) => {
        var r = i(7460),
          n = i(7589),
          s = i(8489);
        e.exports = function () {
          ((this.size = 0),
            (this.__data__ = {
              hash: new r(),
              map: new (s || n)(),
              string: new r(),
            }));
        };
      },
      8686: (e, t, i) => {
        var r = i(427);
        e.exports = function (e) {
          var t = r(this, e).delete(e);
          return ((this.size -= t ? 1 : 0), t);
        };
      },
      4945: (e, t, i) => {
        var r = i(427);
        e.exports = function (e) {
          return r(this, e).get(e);
        };
      },
      4886: (e, t, i) => {
        var r = i(427);
        e.exports = function (e) {
          return r(this, e).has(e);
        };
      },
      5305: (e, t, i) => {
        var r = i(427);
        e.exports = function (e, t) {
          var i = r(this, e),
            n = i.size;
          return (i.set(e, t), (this.size += i.size == n ? 0 : 1), this);
        };
      },
      6382: (e, t, i) => {
        var r = i(2510)(Object, "create");
        e.exports = r;
      },
      8485: (e, t, i) => {
        var r = i(1182)(Object.keys, Object);
        e.exports = r;
      },
      9857: (e) => {
        e.exports = function (e) {
          var t = [];
          if (null != e) for (var i in Object(e)) t.push(i);
          return t;
        };
      },
      5684: (e, t, i) => {
        function r(e) {
          return (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        e = i.nmd(e);
        var n = i(9747),
          s = "object" == r(t) && t && !t.nodeType && t,
          a = s && "object" == r(e) && e && !e.nodeType && e,
          o = a && a.exports === s && n.process,
          c = (function () {
            try {
              return (
                (a && a.require && a.require("util").types) ||
                (o && o.binding && o.binding("util"))
              );
            } catch (e) {}
          })();
        e.exports = c;
      },
      9671: (e) => {
        var t = Object.prototype.toString;
        e.exports = function (e) {
          return t.call(e);
        };
      },
      1182: (e) => {
        e.exports = function (e, t) {
          return function (i) {
            return e(t(i));
          };
        };
      },
      1203: (e, t, i) => {
        function r(e) {
          return (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        var n = i(9747),
          s =
            "object" == ("undefined" == typeof self ? "undefined" : r(self)) &&
            self &&
            self.Object === Object &&
            self,
          a = n || s || Function("return this")();
        e.exports = a;
      },
      6315: (e, t, i) => {
        var r = i(7589);
        e.exports = function () {
          ((this.__data__ = new r()), (this.size = 0));
        };
      },
      5716: (e) => {
        e.exports = function (e) {
          var t = this.__data__,
            i = t.delete(e);
          return ((this.size = t.size), i);
        };
      },
      4013: (e) => {
        e.exports = function (e) {
          return this.__data__.get(e);
        };
      },
      1974: (e) => {
        e.exports = function (e) {
          return this.__data__.has(e);
        };
      },
      4467: (e, t, i) => {
        var r = i(7589),
          n = i(8489),
          s = i(5270);
        e.exports = function (e, t) {
          var i = this.__data__;
          if (i instanceof r) {
            var a = i.__data__;
            if (!n || a.length < 199)
              return (a.push([e, t]), (this.size = ++i.size), this);
            i = this.__data__ = new s(a);
          }
          return (i.set(e, t), (this.size = i.size), this);
        };
      },
      1421: (e) => {
        var t = Function.prototype.toString;
        e.exports = function (e) {
          if (null != e) {
            try {
              return t.call(e);
            } catch (e) {}
            try {
              return e + "";
            } catch (e) {}
          }
          return "";
        };
      },
      6609: (e, t, i) => {
        var r = i(9984);
        e.exports = function (e) {
          return r(e, 5);
        };
      },
      294: (e) => {
        e.exports = function (e, t) {
          return e === t || (e != e && t != t);
        };
      },
      3130: (e, t, i) => {
        var r = i(1650),
          n = i(8223),
          s = Object.prototype,
          a = s.hasOwnProperty,
          o = s.propertyIsEnumerable,
          c = r(
            (function () {
              return arguments;
            })(),
          )
            ? r
            : function (e) {
                return n(e) && a.call(e, "callee") && !o.call(e, "callee");
              };
        e.exports = c;
      },
      3936: (e) => {
        var t = Array.isArray;
        e.exports = t;
      },
      3599: (e, t, i) => {
        var r = i(1560),
          n = i(501);
        e.exports = function (e) {
          return null != e && n(e.length) && !r(e);
        };
      },
      3238: (e, t, i) => {
        function r(e) {
          return (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        e = i.nmd(e);
        var n = i(1203),
          s = i(2263),
          a = "object" == r(t) && t && !t.nodeType && t,
          o = a && "object" == r(e) && e && !e.nodeType && e,
          c = o && o.exports === a ? n.Buffer : void 0,
          l = (c ? c.isBuffer : void 0) || s;
        e.exports = l;
      },
      1560: (e, t, i) => {
        var r = i(5244),
          n = i(368);
        e.exports = function (e) {
          if (!n(e)) return !1;
          var t = r(e);
          return (
            "[object Function]" == t ||
            "[object GeneratorFunction]" == t ||
            "[object AsyncFunction]" == t ||
            "[object Proxy]" == t
          );
        };
      },
      501: (e) => {
        e.exports = function (e) {
          return (
            "number" == typeof e &&
            e > -1 &&
            e % 1 == 0 &&
            e <= 9007199254740991
          );
        };
      },
      2844: (e, t, i) => {
        var r = i(3198),
          n = i(9679),
          s = i(5684),
          a = s && s.isMap,
          o = a ? n(a) : r;
        e.exports = o;
      },
      368: (e) => {
        function t(e) {
          return (t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        e.exports = function (e) {
          var i = t(e);
          return null != e && ("object" == i || "function" == i);
        };
      },
      8223: (e) => {
        function t(e) {
          return (t =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        e.exports = function (e) {
          return null != e && "object" == t(e);
        };
      },
      8131: (e, t, i) => {
        var r = i(9781),
          n = i(9679),
          s = i(5684),
          a = s && s.isSet,
          o = a ? n(a) : r;
        e.exports = o;
      },
      4587: (e, t, i) => {
        var r = i(4323),
          n = i(9679),
          s = i(5684),
          a = s && s.isTypedArray,
          o = a ? n(a) : r;
        e.exports = o;
      },
      4638: (e, t, i) => {
        var r = i(1236),
          n = i(1741),
          s = i(3599);
        e.exports = function (e) {
          return s(e) ? r(e) : n(e);
        };
      },
      748: (e, t, i) => {
        var r = i(1236),
          n = i(7695),
          s = i(3599);
        e.exports = function (e) {
          return s(e) ? r(e, !0) : n(e);
        };
      },
      4361: (e) => {
        e.exports = function () {
          return [];
        };
      },
      2263: (e) => {
        e.exports = function () {
          return !1;
        };
      },
      2096: () => {
        "function" != typeof Promise.prototype.finally &&
          (Promise.prototype.finally = function (e) {
            var t = this;
            return this.then(function (i) {
              return t.constructor.resolve(e()).then(function () {
                return i;
              });
            }).catch(function (i) {
              return t.constructor.resolve(e()).then(function () {
                throw i;
              });
            });
          });
      },
      6256: function (e, t, i) {
        var r;
        function n(e) {
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        ((e = i.nmd(e)),
          (function (s, a) {
            "use strict";
            var o = "function",
              c = "undefined",
              l = "object",
              h = "string",
              u = "model",
              d = "name",
              p = "type",
              f = "vendor",
              v = "version",
              y = "architecture",
              m = "console",
              g = "mobile",
              w = "tablet",
              b = "smarttv",
              E = "wearable",
              P = "embedded",
              S = "Amazon",
              _ = "Apple",
              A = "ASUS",
              T = "BlackBerry",
              O = "Google",
              C = "Huawei",
              R = "LG",
              k = "Microsoft",
              I = "Motorola",
              D = "Samsung",
              x = "Sharp",
              N = "Sony",
              M = "Xiaomi",
              L = "Zebra",
              F = "Facebook",
              j = "Chromium OS",
              U = "Mac OS",
              G = function (e) {
                for (var t = {}, i = 0; i < e.length; i++)
                  t[e[i].toUpperCase()] = e[i];
                return t;
              },
              B = function (e, t) {
                return n(e) === h && -1 !== $(t).indexOf($(e));
              },
              $ = function (e) {
                return e.toLowerCase();
              },
              V = function (e, t) {
                if (n(e) === h)
                  return (
                    (e = e.replace(/^\s\s*/, "")),
                    n(t) === c ? e : e.substring(0, 350)
                  );
              },
              W = function (e, t) {
                for (var i, r, s, c, h, u, d = 0; d < t.length && !h; ) {
                  var p = t[d],
                    f = t[d + 1];
                  for (i = r = 0; i < p.length && !h && p[i]; )
                    if ((h = p[i++].exec(e)))
                      for (s = 0; s < f.length; s++)
                        ((u = h[++r]),
                          n((c = f[s])) === l && c.length > 0
                            ? 2 === c.length
                              ? n(c[1]) == o
                                ? (this[c[0]] = c[1].call(this, u))
                                : (this[c[0]] = c[1])
                              : 3 === c.length
                                ? n(c[1]) !== o || (c[1].exec && c[1].test)
                                  ? (this[c[0]] = u ? u.replace(c[1], c[2]) : a)
                                  : (this[c[0]] = u
                                      ? c[1].call(this, u, c[2])
                                      : a)
                                : 4 === c.length &&
                                  (this[c[0]] = u
                                    ? c[3].call(this, u.replace(c[1], c[2]))
                                    : a)
                            : (this[c] = u || a));
                  d += 2;
                }
              },
              q = function (e, t) {
                for (var i in t)
                  if (n(t[i]) === l && t[i].length > 0) {
                    for (var r = 0; r < t[i].length; r++)
                      if (B(t[i][r], e)) return "?" === i ? a : i;
                  } else if (B(t[i], e)) return "?" === i ? a : i;
                return e;
              },
              Y = {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2e3: "NT 5.0",
                XP: ["NT 5.1", "NT 5.2"],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                8.1: "NT 6.3",
                10: ["NT 6.4", "NT 10.0"],
                RT: "ARM",
              },
              z = {
                browser: [
                  [/\b(?:crmo|crios)\/([\w\.]+)/i],
                  [v, [d, "Chrome"]],
                  [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                  [v, [d, "Edge"]],
                  [
                    /(opera mini)\/([-\w\.]+)/i,
                    /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                    /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
                  ],
                  [d, v],
                  [/opios[\/ ]+([\w\.]+)/i],
                  [v, [d, "Opera Mini"]],
                  [/\bopr\/([\w\.]+)/i],
                  [v, [d, "Opera"]],
                  [
                    /(kindle)\/([\w\.]+)/i,
                    /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                    /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                    /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                    /(?:ms|\()(ie) ([\w\.]+)/i,
                    /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                    /(heytap|ovi)browser\/([\d\.]+)/i,
                    /(weibo)__([\d\.]+)/i,
                  ],
                  [d, v],
                  [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                  [v, [d, "UCBrowser"]],
                  [
                    /microm.+\bqbcore\/([\w\.]+)/i,
                    /\bqbcore\/([\w\.]+).+microm/i,
                  ],
                  [v, [d, "WeChat(Win) Desktop"]],
                  [/micromessenger\/([\w\.]+)/i],
                  [v, [d, "WeChat"]],
                  [/konqueror\/([\w\.]+)/i],
                  [v, [d, "Konqueror"]],
                  [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                  [v, [d, "IE"]],
                  [/ya(?:search)?browser\/([\w\.]+)/i],
                  [v, [d, "Yandex"]],
                  [/(avast|avg)\/([\w\.]+)/i],
                  [[d, /(.+)/, "$1 Secure Browser"], v],
                  [/\bfocus\/([\w\.]+)/i],
                  [v, [d, "Firefox Focus"]],
                  [/\bopt\/([\w\.]+)/i],
                  [v, [d, "Opera Touch"]],
                  [/coc_coc\w+\/([\w\.]+)/i],
                  [v, [d, "Coc Coc"]],
                  [/dolfin\/([\w\.]+)/i],
                  [v, [d, "Dolphin"]],
                  [/coast\/([\w\.]+)/i],
                  [v, [d, "Opera Coast"]],
                  [/miuibrowser\/([\w\.]+)/i],
                  [v, [d, "MIUI Browser"]],
                  [/fxios\/([-\w\.]+)/i],
                  [v, [d, "Firefox"]],
                  [/\bqihu|(qi?ho?o?|360)browser/i],
                  [[d, "360 Browser"]],
                  [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                  [[d, /(.+)/, "$1 Browser"], v],
                  [/(comodo_dragon)\/([\w\.]+)/i],
                  [[d, /_/g, " "], v],
                  [
                    /(electron)\/([\w\.]+) safari/i,
                    /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                    /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
                  ],
                  [d, v],
                  [
                    /(metasr)[\/ ]?([\w\.]+)/i,
                    /(lbbrowser)/i,
                    /\[(linkedin)app\]/i,
                  ],
                  [d],
                  [
                    /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i,
                  ],
                  [[d, F], v],
                  [
                    /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                    /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                    /safari (line)\/([\w\.]+)/i,
                    /\b(line)\/([\w\.]+)\/iab/i,
                    /(chromium|instagram)[\/ ]([-\w\.]+)/i,
                  ],
                  [d, v],
                  [/\bgsa\/([\w\.]+) .*safari\//i],
                  [v, [d, "GSA"]],
                  [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                  [v, [d, "TikTok"]],
                  [/headlesschrome(?:\/([\w\.]+)| )/i],
                  [v, [d, "Chrome Headless"]],
                  [/ wv\).+(chrome)\/([\w\.]+)/i],
                  [[d, "Chrome WebView"], v],
                  [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                  [v, [d, "Android Browser"]],
                  [
                    /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i,
                  ],
                  [d, v],
                  [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                  [v, [d, "Mobile Safari"]],
                  [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                  [v, d],
                  [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                  [
                    d,
                    [
                      v,
                      q,
                      {
                        "1.0": "/8",
                        1.2: "/1",
                        1.3: "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/",
                      },
                    ],
                  ],
                  [/(webkit|khtml)\/([\w\.]+)/i],
                  [d, v],
                  [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                  [[d, "Netscape"], v],
                  [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                  [v, [d, "Firefox Reality"]],
                  [
                    /ekiohf.+(flow)\/([\w\.]+)/i,
                    /(swiftfox)/i,
                    /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                    /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                    /(firefox)\/([\w\.]+)/i,
                    /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                    /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                    /(links) \(([\w\.]+)/i,
                    /panasonic;(viera)/i,
                  ],
                  [d, v],
                  [/(cobalt)\/([\w\.]+)/i],
                  [d, [v, /master.|lts./, ""]],
                ],
                cpu: [
                  [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                  [[y, "amd64"]],
                  [/(ia32(?=;))/i],
                  [[y, $]],
                  [/((?:i[346]|x)86)[;\)]/i],
                  [[y, "ia32"]],
                  [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                  [[y, "arm64"]],
                  [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                  [[y, "armhf"]],
                  [/windows (ce|mobile); ppc;/i],
                  [[y, "arm"]],
                  [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                  [[y, /ower/, "", $]],
                  [/(sun4\w)[;\)]/i],
                  [[y, "sparc"]],
                  [
                    /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
                  ],
                  [[y, $]],
                ],
                device: [
                  [
                    /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
                  ],
                  [u, [f, D], [p, w]],
                  [
                    /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                    /samsung[- ]([-\w]+)/i,
                    /sec-(sgh\w+)/i,
                  ],
                  [u, [f, D], [p, g]],
                  [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                  [u, [f, _], [p, g]],
                  [
                    /\((ipad);[-\w\),; ]+apple/i,
                    /applecoremedia\/[\w\.]+ \((ipad)/i,
                    /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
                  ],
                  [u, [f, _], [p, w]],
                  [/(macintosh);/i],
                  [u, [f, _]],
                  [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                  [u, [f, x], [p, g]],
                  [
                    /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i,
                  ],
                  [u, [f, C], [p, w]],
                  [
                    /(?:huawei|honor)([-\w ]+)[;\)]/i,
                    /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
                  ],
                  [u, [f, C], [p, g]],
                  [
                    /\b(poco[\w ]+)(?: bui|\))/i,
                    /\b; (\w+) build\/hm\1/i,
                    /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                    /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                    /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
                  ],
                  [
                    [u, /_/g, " "],
                    [f, M],
                    [p, g],
                  ],
                  [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                  [
                    [u, /_/g, " "],
                    [f, M],
                    [p, w],
                  ],
                  [
                    /; (\w+) bui.+ oppo/i,
                    /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
                  ],
                  [u, [f, "OPPO"], [p, g]],
                  [
                    /vivo (\w+)(?: bui|\))/i,
                    /\b(v[12]\d{3}\w?[at])(?: bui|;)/i,
                  ],
                  [u, [f, "Vivo"], [p, g]],
                  [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                  [u, [f, "Realme"], [p, g]],
                  [
                    /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                    /\bmot(?:orola)?[- ](\w*)/i,
                    /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
                  ],
                  [u, [f, I], [p, g]],
                  [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                  [u, [f, I], [p, w]],
                  [
                    /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i,
                  ],
                  [u, [f, R], [p, w]],
                  [
                    /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                    /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                    /\blg-?([\d\w]+) bui/i,
                  ],
                  [u, [f, R], [p, g]],
                  [
                    /(ideatab[-\w ]+)/i,
                    /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
                  ],
                  [u, [f, "Lenovo"], [p, w]],
                  [
                    /(?:maemo|nokia).*(n900|lumia \d+)/i,
                    /nokia[-_ ]?([-\w\.]*)/i,
                  ],
                  [
                    [u, /_/g, " "],
                    [f, "Nokia"],
                    [p, g],
                  ],
                  [/(pixel c)\b/i],
                  [u, [f, O], [p, w]],
                  [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                  [u, [f, O], [p, g]],
                  [
                    /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
                  ],
                  [u, [f, N], [p, g]],
                  [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                  [
                    [u, "Xperia Tablet"],
                    [f, N],
                    [p, w],
                  ],
                  [
                    / (kb2005|in20[12]5|be20[12][59])\b/i,
                    /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
                  ],
                  [u, [f, "OnePlus"], [p, g]],
                  [
                    /(alexa)webm/i,
                    /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
                    /(kf[a-z]+)( bui|\)).+silk\//i,
                  ],
                  [u, [f, S], [p, w]],
                  [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                  [
                    [u, /(.+)/g, "Fire Phone $1"],
                    [f, S],
                    [p, g],
                  ],
                  [/(playbook);[-\w\),; ]+(rim)/i],
                  [u, f, [p, w]],
                  [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                  [u, [f, T], [p, g]],
                  [
                    /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
                  ],
                  [u, [f, A], [p, w]],
                  [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                  [u, [f, A], [p, g]],
                  [/(nexus 9)/i],
                  [u, [f, "HTC"], [p, w]],
                  [
                    /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                    /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                    /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
                  ],
                  [f, [u, /_/g, " "], [p, g]],
                  [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                  [u, [f, "Acer"], [p, w]],
                  [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                  [u, [f, "Meizu"], [p, g]],
                  [
                    /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                    /(hp) ([\w ]+\w)/i,
                    /(asus)-?(\w+)/i,
                    /(microsoft); (lumia[\w ]+)/i,
                    /(lenovo)[-_ ]?([-\w]+)/i,
                    /(jolla)/i,
                    /(oppo) ?([\w ]+) bui/i,
                  ],
                  [f, u, [p, g]],
                  [
                    /(kobo)\s(ereader|touch)/i,
                    /(archos) (gamepad2?)/i,
                    /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                    /(kindle)\/([\w\.]+)/i,
                    /(nook)[\w ]+build\/(\w+)/i,
                    /(dell) (strea[kpr\d ]*[\dko])/i,
                    /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                    /(trinity)[- ]*(t\d{3}) bui/i,
                    /(gigaset)[- ]+(q\w{1,9}) bui/i,
                    /(vodafone) ([\w ]+)(?:\)| bui)/i,
                  ],
                  [f, u, [p, w]],
                  [/(surface duo)/i],
                  [u, [f, k], [p, w]],
                  [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                  [u, [f, "Fairphone"], [p, g]],
                  [/(u304aa)/i],
                  [u, [f, "AT&T"], [p, g]],
                  [/\bsie-(\w*)/i],
                  [u, [f, "Siemens"], [p, g]],
                  [/\b(rct\w+) b/i],
                  [u, [f, "RCA"], [p, w]],
                  [/\b(venue[\d ]{2,7}) b/i],
                  [u, [f, "Dell"], [p, w]],
                  [/\b(q(?:mv|ta)\w+) b/i],
                  [u, [f, "Verizon"], [p, w]],
                  [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                  [u, [f, "Barnes & Noble"], [p, w]],
                  [/\b(tm\d{3}\w+) b/i],
                  [u, [f, "NuVision"], [p, w]],
                  [/\b(k88) b/i],
                  [u, [f, "ZTE"], [p, w]],
                  [/\b(nx\d{3}j) b/i],
                  [u, [f, "ZTE"], [p, g]],
                  [/\b(gen\d{3}) b.+49h/i],
                  [u, [f, "Swiss"], [p, g]],
                  [/\b(zur\d{3}) b/i],
                  [u, [f, "Swiss"], [p, w]],
                  [/\b((zeki)?tb.*\b) b/i],
                  [u, [f, "Zeki"], [p, w]],
                  [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                  [[f, "Dragon Touch"], u, [p, w]],
                  [/\b(ns-?\w{0,9}) b/i],
                  [u, [f, "Insignia"], [p, w]],
                  [/\b((nxa|next)-?\w{0,9}) b/i],
                  [u, [f, "NextBook"], [p, w]],
                  [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                  [[f, "Voice"], u, [p, g]],
                  [/\b(lvtel\-)?(v1[12]) b/i],
                  [[f, "LvTel"], u, [p, g]],
                  [/\b(ph-1) /i],
                  [u, [f, "Essential"], [p, g]],
                  [/\b(v(100md|700na|7011|917g).*\b) b/i],
                  [u, [f, "Envizen"], [p, w]],
                  [/\b(trio[-\w\. ]+) b/i],
                  [u, [f, "MachSpeed"], [p, w]],
                  [/\btu_(1491) b/i],
                  [u, [f, "Rotor"], [p, w]],
                  [/(shield[\w ]+) b/i],
                  [u, [f, "Nvidia"], [p, w]],
                  [/(sprint) (\w+)/i],
                  [f, u, [p, g]],
                  [/(kin\.[onetw]{3})/i],
                  [
                    [u, /\./g, " "],
                    [f, k],
                    [p, g],
                  ],
                  [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                  [u, [f, L], [p, w]],
                  [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                  [u, [f, L], [p, g]],
                  [/smart-tv.+(samsung)/i],
                  [f, [p, b]],
                  [/hbbtv.+maple;(\d+)/i],
                  [
                    [u, /^/, "SmartTV"],
                    [f, D],
                    [p, b],
                  ],
                  [
                    /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i,
                  ],
                  [
                    [f, R],
                    [p, b],
                  ],
                  [/(apple) ?tv/i],
                  [f, [u, "Apple TV"], [p, b]],
                  [/crkey/i],
                  [
                    [u, "Chromecast"],
                    [f, O],
                    [p, b],
                  ],
                  [/droid.+aft(\w)( bui|\))/i],
                  [u, [f, S], [p, b]],
                  [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                  [u, [f, x], [p, b]],
                  [/(bravia[\w ]+)( bui|\))/i],
                  [u, [f, N], [p, b]],
                  [/(mitv-\w{5}) bui/i],
                  [u, [f, M], [p, b]],
                  [/Hbbtv.*(technisat) (.*);/i],
                  [f, u, [p, b]],
                  [
                    /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                    /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
                  ],
                  [
                    [f, V],
                    [u, V],
                    [p, b],
                  ],
                  [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                  [[p, b]],
                  [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                  [f, u, [p, m]],
                  [/droid.+; (shield) bui/i],
                  [u, [f, "Nvidia"], [p, m]],
                  [/(playstation [345portablevi]+)/i],
                  [u, [f, N], [p, m]],
                  [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                  [u, [f, k], [p, m]],
                  [/((pebble))app/i],
                  [f, u, [p, E]],
                  [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                  [u, [f, _], [p, E]],
                  [/droid.+; (glass) \d/i],
                  [u, [f, O], [p, E]],
                  [/droid.+; (wt63?0{2,3})\)/i],
                  [u, [f, L], [p, E]],
                  [/(quest( 2| pro)?)/i],
                  [u, [f, F], [p, E]],
                  [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                  [f, [p, P]],
                  [/(aeobc)\b/i],
                  [u, [f, S], [p, P]],
                  [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                  [u, [p, g]],
                  [
                    /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i,
                  ],
                  [u, [p, w]],
                  [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                  [[p, w]],
                  [
                    /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
                  ],
                  [[p, g]],
                  [/(android[-\w\. ]{0,9});.+buil/i],
                  [u, [f, "Generic"]],
                ],
                engine: [
                  [/windows.+ edge\/([\w\.]+)/i],
                  [v, [d, "EdgeHTML"]],
                  [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                  [v, [d, "Blink"]],
                  [
                    /(presto)\/([\w\.]+)/i,
                    /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                    /ekioh(flow)\/([\w\.]+)/i,
                    /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                    /(icab)[\/ ]([23]\.[\d\.]+)/i,
                    /\b(libweb)/i,
                  ],
                  [d, v],
                  [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                  [v, d],
                ],
                os: [
                  [/microsoft (windows) (vista|xp)/i],
                  [d, v],
                  [
                    /(windows) nt 6\.2; (arm)/i,
                    /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                    /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                  ],
                  [d, [v, q, Y]],
                  [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                  [
                    [d, "Windows"],
                    [v, q, Y],
                  ],
                  [
                    /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                    /ios;fbsv\/([\d\.]+)/i,
                    /cfnetwork\/.+darwin/i,
                  ],
                  [
                    [v, /_/g, "."],
                    [d, "iOS"],
                  ],
                  [
                    /(mac os x) ?([\w\. ]*)/i,
                    /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
                  ],
                  [
                    [d, U],
                    [v, /_/g, "."],
                  ],
                  [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                  [v, d],
                  [
                    /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                    /(blackberry)\w*\/([\w\.]*)/i,
                    /(tizen|kaios)[\/ ]([\w\.]+)/i,
                    /\((series40);/i,
                  ],
                  [d, v],
                  [/\(bb(10);/i],
                  [v, [d, T]],
                  [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                  [v, [d, "Symbian"]],
                  [
                    /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
                  ],
                  [v, [d, "Firefox OS"]],
                  [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                  [v, [d, "webOS"]],
                  [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                  [v, [d, "watchOS"]],
                  [/crkey\/([\d\.]+)/i],
                  [v, [d, "Chromecast"]],
                  [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                  [[d, j], v],
                  [
                    /panasonic;(viera)/i,
                    /(netrange)mmh/i,
                    /(nettv)\/(\d+\.[\w\.]+)/i,
                    /(nintendo|playstation) ([wids345portablevuch]+)/i,
                    /(xbox); +xbox ([^\);]+)/i,
                    /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                    /(mint)[\/\(\) ]?(\w*)/i,
                    /(mageia|vectorlinux)[; ]/i,
                    /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                    /(hurd|linux) ?([\w\.]*)/i,
                    /(gnu) ?([\w\.]*)/i,
                    /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                    /(haiku) (\w+)/i,
                  ],
                  [d, v],
                  [/(sunos) ?([\w\.\d]*)/i],
                  [[d, "Solaris"], v],
                  [
                    /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                    /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                    /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                    /(unix) ?([\w\.]*)/i,
                  ],
                  [d, v],
                ],
              },
              K = function e(t, i) {
                if ((n(t) === l && ((i = t), (t = a)), !(this instanceof e)))
                  return new e(t, i).getResult();
                var r = n(s) !== c && s.navigator ? s.navigator : a,
                  u = t || (r && r.userAgent ? r.userAgent : ""),
                  d = r && r.userAgentData ? r.userAgentData : a,
                  p = i
                    ? (function (e, t) {
                        var i = {};
                        for (var r in e)
                          t[r] && t[r].length % 2 == 0
                            ? (i[r] = t[r].concat(e[r]))
                            : (i[r] = e[r]);
                        return i;
                      })(z, i)
                    : z,
                  f = r && r.userAgent == u;
                return (
                  (this.getBrowser = function () {
                    var e,
                      t = {};
                    return (
                      (t.name = a),
                      (t.version = a),
                      W.call(t, u, p.browser),
                      (t.major =
                        n((e = t.version)) === h
                          ? e.replace(/[^\d\.]/g, "").split(".")[0]
                          : a),
                      f &&
                        r &&
                        r.brave &&
                        n(r.brave.isBrave) == o &&
                        (t.name = "Brave"),
                      t
                    );
                  }),
                  (this.getCPU = function () {
                    var e = {};
                    return ((e.architecture = a), W.call(e, u, p.cpu), e);
                  }),
                  (this.getDevice = function () {
                    var e = {};
                    return (
                      (e.vendor = a),
                      (e.model = a),
                      (e.type = a),
                      W.call(e, u, p.device),
                      f && !e.type && d && d.mobile && (e.type = g),
                      f &&
                        "Macintosh" == e.model &&
                        r &&
                        n(r.standalone) !== c &&
                        r.maxTouchPoints &&
                        r.maxTouchPoints > 2 &&
                        ((e.model = "iPad"), (e.type = w)),
                      e
                    );
                  }),
                  (this.getEngine = function () {
                    var e = {};
                    return (
                      (e.name = a),
                      (e.version = a),
                      W.call(e, u, p.engine),
                      e
                    );
                  }),
                  (this.getOS = function () {
                    var e = {};
                    return (
                      (e.name = a),
                      (e.version = a),
                      W.call(e, u, p.os),
                      f &&
                        !e.name &&
                        d &&
                        "Unknown" != d.platform &&
                        (e.name = d.platform
                          .replace(/chrome os/i, j)
                          .replace(/macos/i, U)),
                      e
                    );
                  }),
                  (this.getResult = function () {
                    return {
                      ua: this.getUA(),
                      browser: this.getBrowser(),
                      engine: this.getEngine(),
                      os: this.getOS(),
                      device: this.getDevice(),
                      cpu: this.getCPU(),
                    };
                  }),
                  (this.getUA = function () {
                    return u;
                  }),
                  (this.setUA = function (e) {
                    return (
                      (u = n(e) === h && e.length > 350 ? V(e, 350) : e),
                      this
                    );
                  }),
                  this.setUA(u),
                  this
                );
              };
            ((K.VERSION = "1.0.35"),
              (K.BROWSER = G([d, v, "major"])),
              (K.CPU = G([y])),
              (K.DEVICE = G([u, f, p, m, g, b, w, E, P])),
              (K.ENGINE = K.OS = G([d, v])),
              n(t) !== c
                ? (n(e) !== c && e.exports && (t = e.exports = K),
                  (t.UAParser = K))
                : n(i.amdD) === o && i.amdO
                  ? (r = function () {
                      return K;
                    }.call(t, i, t, e)) === a || (e.exports = r)
                  : n(s) !== c && (s.UAParser = K));
            var J = n(s) !== c && (s.jQuery || s.Zepto);
            if (J && !J.ua) {
              var Z = new K();
              ((J.ua = Z.getResult()),
                (J.ua.get = function () {
                  return Z.getUA();
                }),
                (J.ua.set = function (e) {
                  Z.setUA(e);
                  var t = Z.getResult();
                  for (var i in t) J.ua[i] = t[i];
                }));
            }
          })(
            "object" ===
              ("undefined" == typeof window ? "undefined" : n(window))
              ? window
              : this,
          ));
      },
      8205: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => s });
        var r = i(2616),
          n = i.n(r)()(function (e) {
            return e[1];
          });
        n.push([
          e.id,
          ".gs-global-loader{position:fixed;z-index:99999;top:8px;right:8px;width:48px;height:48px}@media only screen and (min-width: 1024px){.gs-global-loader{top:inherit;right:16px;bottom:16px}}.gs-loader{position:relative;width:40px;height:40px;border-radius:50%;display:flex}.gs-loader__outter{box-sizing:border-box;position:absolute;border:4px solid #f50057;border-left-color:transparent;width:100%;height:100%;border-radius:50%;-webkit-animation:loader-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;animation:loader-outter 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite}.gs-loader__inner{box-sizing:border-box;position:absolute;border:4px solid #f50057;border-radius:50%;width:20px;height:20px;left:calc(50% - 10px);top:calc(50% - 10px);border-top-color:transparent;-webkit-animation:loader-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite;animation:loader-inner 1s cubic-bezier(0.42, 0.61, 0.58, 0.41) infinite}@keyframes loader-outter{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes loader-inner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}.gs-loader-hidden{display:none}",
          "",
        ]);
        const s = n;
      },
      280: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => s });
        var r = i(2616),
          n = i.n(r)()(function (e) {
            return e[1];
          });
        n.push([
          e.id,
          ".gp-gamedistribution-sticky{display:flex;justify-content:center;position:fixed;left:50%;transform:translateX(-50%);z-index:100;max-height:90px;max-width:728px;overflow:hidden}.gp-gamedistribution-sticky__creative{position:relative;height:90px;width:728px;max-width:100vw}.gp-gamedistribution-sticky_top{top:0}.gp-gamedistribution-sticky_bottom{bottom:0}",
          "",
        ]);
        const s = n;
      },
      3379: (e, t, i) => {
        "use strict";
        var r,
          n = (function () {
            var e = {};
            return function (t) {
              if (void 0 === e[t]) {
                var i = document.querySelector(t);
                if (
                  window.HTMLIFrameElement &&
                  i instanceof window.HTMLIFrameElement
                )
                  try {
                    i = i.contentDocument.head;
                  } catch (e) {
                    i = null;
                  }
                e[t] = i;
              }
              return e[t];
            };
          })(),
          s = [];
        function a(e) {
          for (var t = -1, i = 0; i < s.length; i++)
            if (s[i].identifier === e) {
              t = i;
              break;
            }
          return t;
        }
        function o(e, t) {
          for (var i = {}, r = [], n = 0; n < e.length; n++) {
            var o = e[n],
              c = t.base ? o[0] + t.base : o[0],
              l = i[c] || 0,
              h = "".concat(c, " ").concat(l);
            i[c] = l + 1;
            var u = a(h),
              d = { css: o[1], media: o[2], sourceMap: o[3] };
            (-1 !== u
              ? (s[u].references++, s[u].updater(d))
              : s.push({ identifier: h, updater: v(d, t), references: 1 }),
              r.push(h));
          }
          return r;
        }
        function c(e) {
          var t = document.createElement("style"),
            r = e.attributes || {};
          if (void 0 === r.nonce) {
            var s = i.nc;
            s && (r.nonce = s);
          }
          if (
            (Object.keys(r).forEach(function (e) {
              t.setAttribute(e, r[e]);
            }),
            "function" == typeof e.insert)
          )
            e.insert(t);
          else {
            var a = n(e.insert || "head");
            if (!a)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
              );
            a.appendChild(t);
          }
          return t;
        }
        var l,
          h =
            ((l = []),
            function (e, t) {
              return ((l[e] = t), l.filter(Boolean).join("\n"));
            });
        function u(e, t, i, r) {
          var n = i
            ? ""
            : r.media
              ? "@media ".concat(r.media, " {").concat(r.css, "}")
              : r.css;
          if (e.styleSheet) e.styleSheet.cssText = h(t, n);
          else {
            var s = document.createTextNode(n),
              a = e.childNodes;
            (a[t] && e.removeChild(a[t]),
              a.length ? e.insertBefore(s, a[t]) : e.appendChild(s));
          }
        }
        function d(e, t, i) {
          var r = i.css,
            n = i.media,
            s = i.sourceMap;
          if (
            (n ? e.setAttribute("media", n) : e.removeAttribute("media"),
            s &&
              "undefined" != typeof btoa &&
              (r +=
                "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(s)))),
                  " */",
                )),
            e.styleSheet)
          )
            e.styleSheet.cssText = r;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(r));
          }
        }
        var p = null,
          f = 0;
        function v(e, t) {
          var i, r, n;
          if (t.singleton) {
            var s = f++;
            ((i = p || (p = c(t))),
              (r = u.bind(null, i, s, !1)),
              (n = u.bind(null, i, s, !0)));
          } else
            ((i = c(t)),
              (r = d.bind(null, i, t)),
              (n = function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(i);
              }));
          return (
            r(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap
                )
                  return;
                r((e = t));
              } else n();
            }
          );
        }
        e.exports = function (e, t) {
          (t = t || {}).singleton ||
            "boolean" == typeof t.singleton ||
            (t.singleton =
              (void 0 === r &&
                (r = Boolean(
                  window && document && document.all && !window.atob,
                )),
              r));
          var i = o((e = e || []), t);
          return function (e) {
            if (
              ((e = e || []),
              "[object Array]" === Object.prototype.toString.call(e))
            ) {
              for (var r = 0; r < i.length; r++) {
                var n = a(i[r]);
                s[n].references--;
              }
              for (var c = o(e, t), l = 0; l < i.length; l++) {
                var h = a(i[l]);
                0 === s[h].references && (s[h].updater(), s.splice(h, 1));
              }
              i = c;
            }
          };
        };
      },
      3080: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => j, M: () => U });
        var r,
          n,
          s,
          a,
          o,
          c,
          l,
          h,
          u,
          d,
          p,
          f,
          v,
          y,
          m,
          g,
          w,
          b,
          E,
          P,
          S,
          _,
          A,
          T = i(6558),
          O = i(1437),
          C = i(4835),
          R = i(8293),
          k = i(6388),
          I = i(6041),
          D = function (e, t, i, r) {
            return new (i || (i = Promise))(function (n, s) {
              function a(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? n(e.value)
                  : ((t = e.value),
                    t instanceof i
                      ? t
                      : new i(function (e) {
                          e(t);
                        })).then(a, o);
              }
              c((r = r.apply(e, t || [])).next());
            });
          },
          x = function (e, t, i, r, n) {
            if ("m" === r)
              throw new TypeError("Private method is not writable");
            if ("a" === r && !n)
              throw new TypeError(
                "Private accessor was defined without a setter",
              );
            if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError(
                "Cannot write private member to an object whose class did not declare it",
              );
            return (
              "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i),
              i
            );
          },
          N = function (e, t, i, r) {
            if ("a" === i && !r)
              throw new TypeError(
                "Private accessor was defined without a getter",
              );
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
              throw new TypeError(
                "Cannot read private member from an object whose class did not declare it",
              );
            return "m" === i
              ? r
              : "a" === i
                ? r.call(e)
                : r
                  ? r.value
                  : t.get(e);
          },
          M = function (e, t) {
            var i = {};
            for (var r in e)
              Object.prototype.hasOwnProperty.call(e, r) &&
                t.indexOf(r) < 0 &&
                (i[r] = e[r]);
            if (
              null != e &&
              "function" == typeof Object.getOwnPropertySymbols
            ) {
              var n = 0;
              for (r = Object.getOwnPropertySymbols(e); n < r.length; n++)
                t.indexOf(r[n]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, r[n]) &&
                  (i[r[n]] = e[r[n]]);
            }
            return i;
          };
        const L = "already_unlocked",
          F = "achievement_not_found";
        class j extends k.Z {
          constructor(e, t, i) {
            (super(),
              (this.gp = e),
              r.add(this),
              n.set(this, void 0),
              s.set(this, void 0),
              a.set(this, []),
              o.set(this, []),
              c.set(this, []),
              l.set(this, {}),
              h.set(this, {}),
              u.set(this, {}),
              d.set(this, {}),
              p.set(this, {}),
              f.set(this, {}),
              v.set(this, {}),
              y.set(this, new Set()),
              x(this, n, i.project.achievements, "f"),
              i.achievements.forEach((t) => {
                ((t.name = t.names[e.language] || t.names.en),
                  (t.description =
                    t.descriptions[e.language] || t.descriptions.en),
                  (t.lockedIcon = (0, I.ZP)(t.lockedIcon, 256, 256, !1)),
                  (t.lockedIconSmall = (0, I.ZP)(t.lockedIcon, 48, 48, !1)),
                  (t.icon = (0, I.ZP)(t.icon, 256, 256, !1)),
                  (t.iconSmall = (0, I.ZP)(t.icon, 48, 48, !1)));
              }),
              x(this, a, [...i.achievements], "f"),
              x(this, o, [...i.achievementsGroups], "f"),
              N(this, r, "m", S).call(this),
              N(this, r, "m", _).call(this),
              x(this, s, t, "f"),
              N(this, s, "f").on("setAchievementsList", (e) =>
                N(this, r, "m", E).call(this, e.achievements),
              ),
              N(this, s, "f").on("markAchievementsUnlocked", (e) => {
                e.forEach((e) => {
                  const { achievement: t, playerAchievement: i } = N(
                    this,
                    r,
                    "m",
                    b,
                  ).call(this, e);
                  if (!t)
                    return void T.kg.error(`achievement not found, ID: ${e}`);
                  if (i)
                    return void T.kg.error(
                      `player achievement already unlocked, ID: ${e}, Tag: ${t.tag}`,
                    );
                  const s = {
                    achievementId: t.id,
                    unlocked: !0,
                    progress: t.maxProgress || 0,
                    createdAt: new Date().toISOString(),
                  };
                  let a;
                  N(this, n, "f").enableUnlockToast &&
                    (a = this.gp.loadOverlay());
                  const o = Object.assign(Object.assign({}, t), s);
                  (N(this, r, "m", P).call(this, o),
                    this._events.emit("unlock", o),
                    N(this, n, "f").enableUnlockToast &&
                      Promise.all([a, (0, O.p)(U(o)).catch(T.kg.error)]).then(
                        () => {
                          this.gp.overlay.unlockAchievement(o);
                        },
                      ));
                });
              }),
              this.gp.on("change:language", (e) => {
                (N(this, a, "f").forEach((t) => {
                  ((t.name = t.names[e] || t.names.en),
                    (t.description = t.descriptions[e] || t.descriptions.en));
                }),
                  N(this, o, "f").forEach((t) => {
                    ((t.name = t.names[e] || t.names.en),
                      (t.description = t.descriptions[e] || t.descriptions.en));
                  }),
                  N(this, r, "m", S).call(this));
              }));
          }
          get list() {
            return [...N(this, a, "f")];
          }
          get groupsList() {
            return [...N(this, o, "f")];
          }
          get playerAchievementsList() {
            return [...N(this, c, "f")];
          }
          get unlockedList() {
            return [...N(this, c, "f")];
          }
          open({ scrollTo: e } = {}) {
            return D(this, void 0, void 0, function* () {
              this.gp.loader.inc();
              try {
                const [t] = yield Promise.all([
                  this.fetch(),
                  this.gp.loadOverlay(),
                  (0, O.p)(C.Z.app.trophy).catch(T.kg.error),
                ]);
                (this.gp.loader.dec(),
                  t.achievements.length > 0
                    ? (this._events.emit("open"),
                      yield this.gp.overlay
                        .openAchievements(t, { scrollTo: e })
                        .catch(T.kg.error),
                      this._events.emit("close"))
                    : T.kg.error(new Error("Empty achievements list")));
              } catch (e) {
                (this.gp.loader.dec(), T.kg.error(e));
              }
            });
          }
          fetch() {
            return D(this, void 0, void 0, function* () {
              const e = (0, R._)();
              this.gp.loader.inc();
              try {
                const t = {
                  achievements: this.list,
                  achievementsGroups: this.groupsList,
                  playerAchievements: this.unlockedList,
                };
                (e.done(t), this._events.emit("fetch", t));
              } catch (t) {
                (e.abort(t), this._events.emit("error:fetch"));
              } finally {
                this.gp.loader.dec();
              }
              return e.ready;
            });
          }
          unlock(e) {
            return D(this, void 0, void 0, function* () {
              const t = (0, R._)(),
                i = (i) => (
                  t.done({ success: !1, achievement: null, error: i }),
                  this._events.emit("error:unlock", i, { input: e }),
                  t.ready
                ),
                s = Number(e.id) || e.tag,
                { achievement: a, playerAchievement: o } = N(
                  this,
                  r,
                  "m",
                  b,
                ).call(this, s);
              if (!a) return i(F);
              if (null == o ? void 0 : o.unlocked) return i(L);
              if (N(this, y, "f").has(a.id)) return i(L);
              let c;
              ((N(this, l, "f")[s] = t),
                this.gp.loader.inc(),
                N(this, n, "f").enableUnlockToast &&
                  (c = this.gp.loadOverlay()));
              const h = a.id;
              try {
                const e = yield this.gp._services.achievementsService.unlock({
                    id: h,
                  }),
                  { achievement: i } = e,
                  s = M(e, ["achievement"]),
                  a = Object.assign(Object.assign({}, i), s);
                (N(this, r, "m", P).call(this, a),
                  this._events.emit("unlock", a),
                  N(this, n, "f").enableUnlockToast &&
                    Promise.all([c, (0, O.p)(U(a)).catch(T.kg.error)]).then(
                      () => {
                        this.gp.overlay.unlockAchievement(a);
                      },
                    ),
                  t.done({ achievement: a, success: !0, error: "" }));
              } catch (r) {
                "string" == typeof r
                  ? (r === L && N(this, y, "f").add(a.id), T.kg.error(r), i(r))
                  : (t.abort(r),
                    this._events.emit("error:unlock", r, { input: e }));
              } finally {
                this.gp.loader.dec();
              }
              return (
                t.ready.finally(() => {
                  delete N(this, l, "f")[s];
                }),
                t.ready
              );
            });
          }
          getAchievement(e) {
            return N(this, r, "m", b).call(this, e);
          }
          has(e) {
            var t;
            return !!(null ===
              (t = N(this, r, "m", b).call(this, e).playerAchievement) ||
            void 0 === t
              ? void 0
              : t.unlocked);
          }
          setProgress(e) {
            var t;
            return D(this, void 0, void 0, function* () {
              const i = (0, R._)(),
                s = (t) => (
                  i.done({ success: !1, achievement: null, error: t }),
                  this._events.emit("error:progress", t, { input: e }),
                  i.ready
                ),
                a = Number(e.id) || e.tag,
                { achievement: o } = N(this, r, "m", b).call(this, a);
              return o
                ? a in N(this, h, "f")
                  ? ((N(this, h, "f")[a] = e.progress),
                    null === (t = N(this, u, "f")[a]) || void 0 === t
                      ? void 0
                      : t.ready)
                  : ((N(this, h, "f")[a] = e.progress),
                    (N(this, u, "f")[a] = i),
                    setTimeout(
                      () =>
                        D(this, void 0, void 0, function* () {
                          const t = N(this, h, "f")[a],
                            { playerAchievement: c } = N(this, r, "m", b).call(
                              this,
                              a,
                            );
                          if (N(this, y, "f").has(o.id)) return s(L);
                          if (null == c ? void 0 : c.unlocked) return s(L);
                          const l = (null == c ? void 0 : c.progress) || 0;
                          if (l === t) return s("progress_the_same");
                          let u;
                          (this.gp.loader.inc(),
                            N(this, n, "f").enableUnlockToast &&
                              (u = this.gp.loadOverlay()),
                            yield this.gp._services.achievementsService
                              .setProgress(
                                Object.assign(Object.assign({}, e), {
                                  progress: t,
                                }),
                              )
                              .then((e) => {
                                var { achievement: t } = e,
                                  s = M(e, ["achievement"]);
                                const a = Object.assign(
                                    Object.assign({}, t),
                                    s,
                                  ),
                                  o = Math.floor(l / a.progressStep),
                                  c = Math.floor(a.progress / a.progressStep);
                                (N(this, r, "m", P).call(this, s),
                                  N(this, n, "f").enableUnlockToast &&
                                    (a.unlocked || o < c) &&
                                    Promise.all([
                                      u,
                                      (0, O.p)(U(a)).catch(T.kg.error),
                                    ]).then(() => {
                                      this.gp.overlay.unlockAchievement(a);
                                    }),
                                  a.unlocked && this._events.emit("unlock", a),
                                  this._events.emit("progress", a),
                                  i.done({
                                    achievement: a,
                                    success: !0,
                                    error: "",
                                  }));
                              })
                              .catch((t) => {
                                "string" == typeof t
                                  ? (t === L && N(this, y, "f").add(o.id),
                                    T.kg.error(t),
                                    s(t))
                                  : (i.abort(t),
                                    this._events.emit("error:progress", t, {
                                      input: e,
                                    }));
                              }),
                            this.gp.loader.dec());
                        }),
                      1e3,
                    ),
                    i.ready.finally(() => {
                      (delete N(this, u, "f")[a], delete N(this, h, "f")[a]);
                    }),
                    i.ready)
                : s(F);
            });
          }
          getProgress(e) {
            const { achievement: t, playerAchievement: i } = N(
              this,
              r,
              "m",
              b,
            ).call(this, e);
            return t && i ? i.progress : 0;
          }
        }
        function U(e) {
          let t = "";
          return (
            (t =
              window.devicePixelRatio > 1
                ? e.unlocked
                  ? e.icon || e.lockedIcon
                  : e.lockedIcon || e.icon
                : e.unlocked
                  ? e.iconSmall || e.lockedIconSmall
                  : e.lockedIconSmall || e.iconSmall),
            t || C.Z.cdn.trophy
          );
        }
        ((n = new WeakMap()),
          (s = new WeakMap()),
          (a = new WeakMap()),
          (o = new WeakMap()),
          (c = new WeakMap()),
          (l = new WeakMap()),
          (h = new WeakMap()),
          (u = new WeakMap()),
          (d = new WeakMap()),
          (p = new WeakMap()),
          (f = new WeakMap()),
          (v = new WeakMap()),
          (y = new WeakMap()),
          (r = new WeakSet()),
          (m = function (e) {
            return N(this, d, "f")[e] || N(this, p, "f")[e];
          }),
          (g = function (e) {
            return N(this, f, "f")[e];
          }),
          (w = function (e) {
            return N(this, o, "f")[e];
          }),
          (b = function (e) {
            const t = {
                achievement: null,
                playerAchievement: null,
                achievementGroup: null,
              },
              i = N(this, r, "m", m).call(this, e);
            if (!i) return t;
            t.achievement = i;
            const n = N(this, r, "m", g).call(this, i.id);
            n && (t.playerAchievement = n);
            const s = N(this, r, "m", w).call(this, i.id);
            return (s && (t.achievementGroup = s), t);
          }),
          (E = function (e) {
            (x(this, c, [...e], "f"), N(this, r, "m", A).call(this));
          }),
          (P = function (e) {
            (N(this, c, "f").some((t) => t.achievementId === e.achievementId)
              ? x(
                  this,
                  c,
                  N(this, c, "f").map((t) =>
                    t.achievementId === e.achievementId ? e : t,
                  ),
                  "f",
                )
              : N(this, c, "f").push(e),
              N(this, r, "m", A).call(this));
          }),
          (S = function () {
            (x(this, d, {}, "f"),
              x(this, p, {}, "f"),
              N(this, a, "f").forEach((e) => {
                ((N(this, d, "f")[e.id] = e), (N(this, p, "f")[e.tag] = e));
              }));
          }),
          (_ = function () {
            (x(this, v, {}, "f"),
              N(this, o, "f").forEach((e) => {
                N(this, v, "f")[e.id] = e;
              }));
          }),
          (A = function () {
            (x(this, f, {}, "f"),
              N(this, c, "f").forEach((e) => {
                N(this, f, "f")[e.achievementId] = e;
              }));
          }));
      },
      7791: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => p });
        var r = i(6558),
          n = i(1437),
          s = i(4835),
          a = i(8293),
          o = i(5942),
          c = i(6388),
          l = function (e, t, i, r) {
            return new (i || (i = Promise))(function (n, s) {
              function a(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? n(e.value)
                  : ((t = e.value),
                    t instanceof i
                      ? t
                      : new i(function (e) {
                          e(t);
                        })).then(a, o);
              }
              c((r = r.apply(e, t || [])).next());
            });
          };
        const h = (e) => {
            var t;
            return (
              (null === (t = null == e ? void 0 : e.resources[0]) ||
              void 0 === t
                ? void 0
                : t.src) || ""
            );
          },
          u = (e) => {
            var { assets: t } = e,
              i = (function (e, t) {
                var i = {};
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) &&
                    t.indexOf(r) < 0 &&
                    (i[r] = e[r]);
                if (
                  null != e &&
                  "function" == typeof Object.getOwnPropertySymbols
                ) {
                  var n = 0;
                  for (r = Object.getOwnPropertySymbols(e); n < r.length; n++)
                    t.indexOf(r[n]) < 0 &&
                      Object.prototype.propertyIsEnumerable.call(e, r[n]) &&
                      (i[r[n]] = e[r[n]]);
                }
                return i;
              })(e, ["assets"]);
            return Object.assign(Object.assign({}, i), { icon: h(t.icon) });
          },
          d = [o.z.YANDEX, o.z.VK, o.z.OK, o.z.GAMEPIX, o.z.Y8];
        class p extends c.Z {
          constructor(e, t) {
            (super(), (this.gp = e), (this.adapter = t));
          }
          get isAvailable() {
            var e;
            return null !== (e = this.adapter.isGamesCollectionsAllowed) &&
              void 0 !== e
              ? e
              : this.gp.platform.isExternalLinksAllowed ||
                  d.includes(this.gp.platform.type);
          }
          open(
            { id: e, tag: t, shareParams: i } = { tag: "ALL", shareParams: {} },
          ) {
            return l(this, void 0, void 0, function* () {
              if (this.isAvailable) {
                this.gp.loader.inc();
                try {
                  const [a] = yield Promise.all([
                    this.fetch({ id: e, tag: t, shareParams: i }),
                    this.gp.loadOverlay(),
                    (0, n.p)(s.Z.app.trophy).catch(r.kg.error),
                  ]);
                  (this.gp.loader.dec(),
                    a.games.length > 0 &&
                      (this._events.emit("open"),
                      yield this.gp.overlay
                        .openGamesCollections(a)
                        .catch(r.kg.error),
                      this._events.emit("close")));
                } catch (e) {
                  (this.gp.loader.dec(), r.kg.error(e));
                }
              } else r.kg.warn(`Not available on ${this.gp.platform.type}`);
            });
          }
          fetch(
            { id: e, tag: t = "ALL", shareParams: i = {} } = {
              tag: "ALL",
              shareParams: {},
            },
          ) {
            return l(this, void 0, void 0, function* () {
              if (!this.isAvailable)
                return void r.kg.warn(
                  `Not available on ${this.gp.platform.type}`,
                );
              const n = (0, a._)();
              this.gp.loader.inc();
              try {
                const s = yield this.gp._services.gamesCollectionsService.fetch(
                  { id: e, tag: t, urlFrom: this.gp.app.url },
                );
                if (!s) throw new Error("can't fetch GamesCollections list");
                const a = yield this.adapter.mapGamesCollections(s.games),
                  o = Object.assign(Object.assign({}, s), {
                    games: a.filter((e) => e.url).map(u),
                  });
                (Object.keys(i).length > 0 &&
                  (o.games = o.games.map((e) =>
                    Object.assign(Object.assign({}, e), {
                      url: this.gp.socials.addShareParamsToUrl(e.url, i),
                    }),
                  )),
                  o.games || r.kg.warn("empty games collection"),
                  n.done(o),
                  this._events.emit("fetch", o));
              } catch (e) {
                (n.abort(e), this._events.emit("error:fetch"));
              } finally {
                this.gp.loader.dec();
              }
              return n.ready;
            });
          }
        }
      },
      4687: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => k });
        var r,
          n,
          s,
          a,
          o,
          c,
          l,
          h,
          u,
          d,
          p,
          f,
          v,
          y,
          m,
          g,
          w = i(6558),
          b = i(8293),
          E = i(1438),
          P = i(6388),
          S = i(5942),
          _ = i(6041),
          A = i(8866),
          T = function (e, t, i, r) {
            return new (i || (i = Promise))(function (n, s) {
              function a(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? n(e.value)
                  : ((t = e.value),
                    t instanceof i
                      ? t
                      : new i(function (e) {
                          e(t);
                        })).then(a, o);
              }
              c((r = r.apply(e, t || [])).next());
            });
          },
          O = function (e, t, i, r, n) {
            if ("m" === r)
              throw new TypeError("Private method is not writable");
            if ("a" === r && !n)
              throw new TypeError(
                "Private accessor was defined without a setter",
              );
            if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError(
                "Cannot write private member to an object whose class did not declare it",
              );
            return (
              "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i),
              i
            );
          },
          C = function (e, t, i, r) {
            if ("a" === i && !r)
              throw new TypeError(
                "Private accessor was defined without a getter",
              );
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
              throw new TypeError(
                "Cannot read private member from an object whose class did not declare it",
              );
            return "m" === i
              ? r
              : "a" === i
                ? r.call(e)
                : r
                  ? r.value
                  : t.get(e);
          };
        const R = "product_not_found";
        class k extends P.Z {
          constructor(e, t, i, f) {
            (super(),
              (this.gp = e),
              (this.adapter = i),
              r.add(this),
              n.set(this, void 0),
              s.set(this, []),
              a.set(this, []),
              o.set(this, {}),
              c.set(this, {}),
              l.set(this, {}),
              h.set(this, {}),
              u.set(this, {}),
              O(this, a, f.products, "f"),
              C(this, r, "m", m).call(this),
              O(this, n, t, "f"),
              C(this, n, "f").on("setPurchasedList", (e) =>
                C(this, r, "m", y).call(this, e.playerPurchases),
              ),
              C(this, n, "f").on("markPurchasesGiven", (e) => {
                e.forEach((e) => {
                  const { product: t } = C(this, r, "m", p).call(this, e);
                  if (!t) return void w.kg.error(`product not found, ID: ${e}`);
                  const i = {
                    productId: t.id,
                    tag: t.tag,
                    payload: {},
                    createdAt: this.gp.serverTime,
                    expiredAt: t.isSubscription
                      ? I(this.gp.serverTime, t.period)
                      : "",
                    gift: !0,
                    subscribed: t.isSubscription,
                    orderStatus: E.i.Paid,
                  };
                  (C(this, s, "f").push(i),
                    C(this, r, "m", g).call(this),
                    this._events.emit(
                      t.isSubscription ? "subscribe" : "purchase",
                      { product: t, purchase: i },
                    ));
                });
              }),
              C(this, n, "f").on("syncPurchases", (e) =>
                C(this, r, "m", d).call(this).finally(e),
              ),
              this.gp.on("change:language", (e) => {
                (C(this, a, "f").forEach((t) => {
                  ((t.name = t.names[e] || t.names.en),
                    (t.description = t.descriptions[e] || t.descriptions.en));
                }),
                  C(this, r, "m", m).call(this));
              }),
              this.adapter.mapProducts(this.gp, this.products).then((t) => {
                (O(this, a, t, "f"),
                  C(this, a, "f").forEach((t) => {
                    ((t.name = t.names[e.language] || t.names.en),
                      (t.description =
                        t.descriptions[e.language] || t.descriptions.en),
                      (t.icon = (0, _.ZP)(t.icon, 256, 256, !1)),
                      (t.iconSmall = (0, _.ZP)(t.icon, 48, 48, !1)));
                  }),
                  C(this, r, "m", m).call(this));
              }));
          }
          get isAvailable() {
            return this.adapter.isSupportsPayments;
          }
          get isSubscriptionsAvailable() {
            return this.adapter.isSupportsSubscriptions;
          }
          get products() {
            return [...C(this, a, "f")];
          }
          get purchases() {
            return [...C(this, s, "f")];
          }
          fetchProducts() {
            return T(this, void 0, void 0, function* () {
              const e = (0, b._)();
              this.gp.loader.inc();
              try {
                const t = this.purchases,
                  i = yield this.adapter.mapProducts(this.gp, this.products);
                (O(this, a, i, "f"),
                  C(this, r, "m", m).call(this),
                  e.done({ products: i, playerPurchases: t }),
                  this._events.emit("fetchProducts", {
                    products: i,
                    playerPurchases: t,
                  }));
              } catch (t) {
                (e.abort(t), this._events.emit("error:fetchProducts", t));
              } finally {
                this.gp.loader.dec();
              }
              return e.ready;
            });
          }
          purchase(e) {
            return T(this, void 0, void 0, function* () {
              const t = Number(e.id) || e.tag;
              if (C(this, o, "f")[t]) throw new Error("payment_in_progress");
              const i = (0, b._)(),
                n = (t) => (
                  i.abort(t),
                  this._events.emit("error:purchase", t, { input: e }),
                  i.ready
                ),
                { product: a } = C(this, r, "m", p).call(this, t);
              if (!a) return n(R);
              (i.ready.finally(() => {
                delete C(this, o, "f")[t];
              }),
                (C(this, o, "f")[t] = i),
                this.gp.loader.inc());
              try {
                let e,
                  t,
                  o = !0,
                  c = null,
                  l = "";
                if (
                  !this.gp.player.isLoggedInByPlatform &&
                  this.adapter.isNeedAuthorizeBeforePurchase
                )
                  if (
                    this.gp.platform.type === S.z.YANDEX ||
                    this.gp.platform.type === S.z.PARTNER ||
                    this.gp.isDev
                  ) {
                    if (!(yield this.gp.player.login({ withSecretCode: !1 })))
                      return n("user_not_logged_in");
                  } else yield this.gp.player.sync({ silent: !1 });
                else
                  this.gp.player.isLoggedInByPlatform &&
                    !this.gp.player.credentials &&
                    (yield this.gp.player.sync());
                try {
                  t = yield this.adapter.purchase(a);
                } catch (e) {
                  throw e;
                }
                if (this.adapter.isServerValidation) {
                  try {
                    c = yield this.checkPurchaseStatus(
                      this.gp.projectId,
                      "",
                      t,
                      this.gp.player.id,
                      a.id,
                    );
                  } catch (e) {
                    ((o = !1), (l = e.message));
                  }
                  e = {
                    _id: (null == c ? void 0 : c._id) || "",
                    productId: a.id,
                    tag: a.tag,
                    payload: t,
                    createdAt: this.gp.serverTime,
                    expiredAt: "",
                    gift: !1,
                    orderStatus: E.i.Paid,
                    subscribed: !1,
                  };
                } else
                  try {
                    e = (yield this.gp._services.paymentsService.purchase({
                      id: a.id,
                      payload: t,
                    })).purchase;
                  } catch (e) {
                    ((o = !1), (l = e.message));
                  }
                if (!o) throw l;
                (C(this, s, "f").push({
                  _id:
                    (null == c ? void 0 : c._id) ||
                    (null == e ? void 0 : e._id) ||
                    "",
                  productId: a.id,
                  tag: a.tag,
                  createdAt: e.createdAt,
                  expiredAt: e.expiredAt,
                  payload: e.payload,
                  gift: e.gift,
                  orderStatus: e.orderStatus,
                  subscribed: e.subscribed,
                }),
                  C(this, r, "m", g).call(this),
                  this._events.emit("purchase", { product: a, purchase: e }),
                  this.gp.analytics.trackPurchase(e, a),
                  i.done({ success: o, product: a, purchase: e, error: l }));
              } catch (e) {
                n(e);
              } finally {
                this.gp.loader.dec();
              }
              return i.ready;
            });
          }
          consume(e) {
            return T(this, void 0, void 0, function* () {
              const t = Number(e.id) || e.tag;
              C(this, c, "f")[t] && (yield C(this, c, "f")[t]);
              const i = (0, b._)(),
                n = (t) => (
                  i.abort(t),
                  this._events.emit("error:consume", t, { input: e }),
                  i.ready
                );
              let { purchase: a, product: o } = C(this, r, "m", p).call(
                this,
                t,
              );
              if (!o) return n(R);
              ((C(this, c, "f")[t] = i), this.gp.loader.inc());
              const l = o.id;
              try {
                if (!(null == a ? void 0 : a.needConsumeOnlyOnPlatform)) {
                  const e = yield this.gp._services.paymentsService.consume({
                    id: l,
                  });
                  ((a = e.purchase), (o = e.product));
                }
                a.gift || (yield this.adapter.consume(a));
                const e = C(this, s, "f").findIndex(
                  (e) => e.productId === o.id,
                );
                (-1 !== e &&
                  (C(this, s, "f").splice(e, 1), C(this, r, "m", g).call(this)),
                  this._events.emit("consume", { product: o, purchase: a }),
                  i.done({ product: o, purchase: a, success: !0, error: "" }));
              } catch (e) {
                n(e);
              } finally {
                this.gp.loader.dec();
              }
              return (
                i.ready.finally(() => {
                  delete C(this, c, "f")[t];
                }),
                i.ready
              );
            });
          }
          subscribe(e) {
            return T(this, void 0, void 0, function* () {
              const t = Number(e.id) || e.tag;
              if (C(this, o, "f")[t]) return C(this, o, "f")[t];
              const i = (0, b._)(),
                n = (t) => (
                  i.abort(t),
                  this._events.emit("error:subscribe", t, { input: e }),
                  i.ready
                ),
                { product: a, purchase: c } = C(this, r, "m", p).call(this, t);
              if (!a) return n(R);
              ((C(this, o, "f")[t] = i), this.gp.loader.inc());
              try {
                if (!a.isSubscription)
                  throw new Error(
                    `Not subscription "${t}", please enable subscription on the product`,
                  );
                let e,
                  o,
                  l = !0,
                  h = "";
                if (
                  !this.gp.player.isLoggedInByPlatform &&
                  this.adapter.isNeedAuthorizeBeforePurchase
                )
                  if (
                    this.gp.platform.type === S.z.YANDEX ||
                    this.gp.platform.type === S.z.PARTNER
                  ) {
                    if (!(yield this.gp.player.login({ withSecretCode: !1 })))
                      return n("user_not_logged_in");
                  } else yield this.gp.player.sync({ silent: !1 });
                else
                  this.gp.player.isLoggedInByPlatform &&
                    !this.gp.player.credentials &&
                    (yield this.gp.player.sync());
                try {
                  o = yield this.adapter.subscribe(a, c);
                } catch (e) {
                  throw e;
                }
                if (this.adapter.isServerValidation)
                  e = {
                    payload: o,
                    tag: a.tag,
                    productId: a.id,
                    createdAt: this.gp.serverTime,
                    expiredAt:
                      (null == c ? void 0 : c.expiredAt) ||
                      I(this.gp.serverTime, a.period),
                    gift: !1,
                    subscribed: !this.adapter.isOneTimeSubscription,
                    orderStatus: E.i.Paid,
                  };
                else
                  try {
                    e = (yield this.gp._services.paymentsService.purchase({
                      id: a.id,
                      payload: o,
                    })).purchase;
                  } catch (e) {
                    ((l = !1), (h = e.message));
                  }
                (l
                  ? (c &&
                      O(
                        this,
                        s,
                        C(this, s, "f").filter(
                          (e) => e.productId !== c.productId,
                        ),
                        "f",
                      ),
                    C(this, s, "f").push({
                      tag: a.tag,
                      productId: a.id,
                      createdAt: e.createdAt,
                      expiredAt: e.expiredAt,
                      payload: e.payload,
                      gift: e.gift,
                      subscribed: !0,
                      orderStatus: e.orderStatus,
                    }),
                    C(this, r, "m", g).call(this),
                    this.gp.analytics.trackPurchase(e, a),
                    this._events.emit("subscribe", { product: a, purchase: e }))
                  : w.kg.error(h),
                  i.done({ success: l, product: a, purchase: e, error: h }));
              } catch (e) {
                n(e);
              } finally {
                this.gp.loader.dec();
              }
              return (
                i.ready.finally(() => {
                  delete C(this, o, "f")[t];
                }),
                i.ready
              );
            });
          }
          unsubscribe(e) {
            return T(this, void 0, void 0, function* () {
              const t = Number(e.id) || e.tag;
              if (C(this, o, "f")[t]) return C(this, o, "f")[t];
              const i = (0, b._)(),
                n = (t) => (
                  i.abort(t),
                  this._events.emit("error:unsubscribe", t, { input: e }),
                  i.ready
                ),
                { product: a, purchase: c } = C(this, r, "m", p).call(this, t);
              if (!a) return n(R);
              ((C(this, o, "f")[t] = i), this.gp.loader.inc());
              try {
                if (!a.isSubscription)
                  throw new Error(
                    `Not subscription "${t}", please enable subscription on the product`,
                  );
                if (!c || !c.subscribed)
                  throw new Error("already_unsubscribed");
                let e = !0,
                  n = Object.assign({}, c),
                  o = "";
                try {
                  yield this.adapter.unsubscribe(a, c);
                } catch (e) {
                  throw (w.kg.error(o), e);
                }
                ((n.subscribed = !1),
                  O(
                    this,
                    s,
                    C(this, s, "f").map((e) =>
                      e.productId !== c.productId
                        ? e
                        : Object.assign(Object.assign({}, e), {
                            subscribed: !1,
                          }),
                    ),
                    "f",
                  ),
                  C(this, r, "m", g).call(this),
                  this._events.emit("unsubscribe", { product: a, purchase: n }),
                  i.done({ success: e, product: a, purchase: n, error: o }));
              } catch (e) {
                n(e);
              } finally {
                this.gp.loader.dec();
              }
              return (
                i.ready.finally(() => {
                  delete C(this, o, "f")[t];
                }),
                i.ready
              );
            });
          }
          checkPurchaseStatus(e, t, i, r, n) {
            return T(this, void 0, void 0, function* () {
              const s = (0, b._)();
              let a = 0;
              const o = () =>
                T(this, void 0, void 0, function* () {
                  try {
                    const a =
                      yield this.gp._services.paymentsService.getPlayerPurchase(
                        {
                          projectId: e,
                          purchaseId: t,
                          payload: i,
                          playerId: r,
                          productId: n,
                          orderStatus: E.i.Paid,
                        },
                      );
                    return (
                      (!0 === a.subscribed || a.orderStatus === E.i.Paid) &&
                      (s.done(a), !0)
                    );
                  } catch (e) {
                    if ("internal_error" === e)
                      throw new Error(`purchase:error ${e}`);
                    if ("db: ничего не найдено" === e) return !1;
                    throw new Error(`Error during purchase status check: ${e}`);
                  }
                });
              for (; a < 15; )
                try {
                  if (yield o()) break;
                  if ((a++, a >= 15)) {
                    s.abort("purchase_timeout");
                    break;
                  }
                  yield (0, A.Z)(5e3);
                } catch (e) {
                  s.abort(e);
                  break;
                }
              return s.ready;
            });
          }
          has(e) {
            return !!C(this, r, "m", p).call(this, e).purchase;
          }
          getProduct(e) {
            return C(this, r, "m", p).call(this, e).product;
          }
          getPurchase(e) {
            return C(this, r, "m", p).call(this, e).purchase;
          }
        }
        function I(e, t) {
          return (function (e, t) {
            const i = new Date(e);
            return (i.setDate(i.getDate() + t), i);
          })(new Date(e), t).toISOString();
        }
        ((n = new WeakMap()),
          (s = new WeakMap()),
          (a = new WeakMap()),
          (o = new WeakMap()),
          (c = new WeakMap()),
          (l = new WeakMap()),
          (h = new WeakMap()),
          (u = new WeakMap()),
          (r = new WeakSet()),
          (d = function () {
            return T(this, void 0, void 0, function* () {
              const { purchases: e, payload: t } =
                yield this.adapter.fetchPurchases();
              if (0 === e.length) return;
              const { purchases: i } =
                yield this.gp._services.paymentsService.sync({
                  purchases: e,
                  payload: t,
                });
              (C(this, r, "m", y).call(this, i),
                this.adapter.consumeAllExpired(this.products, e, i));
            });
          }),
          (p = function (e) {
            const t = { product: null, purchase: null },
              i = C(this, r, "m", f).call(this, e);
            if (!i) return t;
            t.product = i;
            const n = C(this, r, "m", v).call(this, i.id);
            return (n && (t.purchase = n), t);
          }),
          (f = function (e) {
            return C(this, l, "f")[e] || C(this, h, "f")[e];
          }),
          (v = function (e) {
            return C(this, u, "f")[e];
          }),
          (y = function (e) {
            (O(
              this,
              s,
              e.map((e) =>
                Object.assign(Object.assign({}, e), { id: e.productId }),
              ),
              "f",
            ),
              C(this, r, "m", g).call(this));
          }),
          (m = function () {
            (O(this, l, {}, "f"),
              O(this, h, {}, "f"),
              C(this, a, "f").forEach((e) => {
                ((C(this, l, "f")[e.id] = e), (C(this, h, "f")[e.tag] = e));
              }));
          }),
          (g = function () {
            (O(
              this,
              s,
              C(this, s, "f").reduce((e, t) => {
                const i = C(this, r, "m", f).call(this, t.productId);
                return (
                  i &&
                    e.push(
                      Object.assign(Object.assign({}, t), {
                        id: i.id,
                        tag: i.tag,
                      }),
                    ),
                  e
                );
              }, []),
              "f",
            ),
              O(this, u, {}, "f"),
              C(this, s, "f").forEach((e) => {
                C(this, u, "f")[e.productId] = e;
              }));
          }));
      },
      4293: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => p });
        var r = i(8293);
        const n = [
          "adsbox",
          "advertisement",
          "pub_300x250",
          "pub_300x250m",
          "pub_728x90",
          "text-ad",
          "textAd",
          "text_ad",
          "text_ads",
          "text-ads",
          "text-ad-links",
        ];
        var s,
          a = i(180),
          o = i(6388),
          c = i(6558),
          l = i(8866),
          h = function (e, t, i, r) {
            return new (i || (i = Promise))(function (n, s) {
              function a(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? n(e.value)
                  : ((t = e.value),
                    t instanceof i
                      ? t
                      : new i(function (e) {
                          e(t);
                        })).then(a, o);
              }
              c((r = r.apply(e, t || [])).next());
            });
          },
          u = function (e, t, i, r, n) {
            if ("m" === r)
              throw new TypeError("Private method is not writable");
            if ("a" === r && !n)
              throw new TypeError(
                "Private accessor was defined without a setter",
              );
            if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError(
                "Cannot write private member to an object whose class did not declare it",
              );
            return (
              "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i),
              i
            );
          },
          d = function (e, t, i, r) {
            if ("a" === i && !r)
              throw new TypeError(
                "Private accessor was defined without a getter",
              );
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
              throw new TypeError(
                "Cannot read private member from an object whose class did not declare it",
              );
            return "m" === i
              ? r
              : "a" === i
                ? r.call(e)
                : r
                  ? r.value
                  : t.get(e);
          };
        class p extends o.Z {
          constructor(e, t, i) {
            (super(),
              (this.gp = e),
              (this.adapter = t),
              (this.config = i),
              (this.isAdblockEnabled = !1),
              (this.fullscreenDisplayIntervalId = 0),
              (this.stickyRefreshIntervalId = 0),
              (this.isStickyPlaying = !1),
              (this.isRewardedPlaying = !1),
              (this.isFullscreenPlaying = !1),
              (this.isPreloaderPlaying = !1),
              s.set(this, 0),
              (this.adsInfo = e._storage.temp.adsInfo));
            const r = this.config.platformConfig.banners;
            ((this.stickyBanner = r.find((e) => e.type === a.$.STICKY)),
              (this.fullscreenBanner = r.find(
                (e) => e.type === a.$.FULLSCREEN,
              )),
              (this.rewardedVideo = r.find((e) => e.type === a.$.REWARDED)),
              (this.preloaderBanner = r.find((e) => e.type === a.$.PRELOADER)),
              (this.banners = r.reduce((e, t) => ((e[t.type] = t), e), {})),
              this._checkLimitsExpired(!0),
              setInterval(() => this._checkLimitsExpired(!1), 1e3));
          }
          get needToLeaveFullscreenBeforeAds() {
            return this.adapter.needToLeaveFullscreenBeforeAds;
          }
          get isAllowedToResumeGameplay() {
            return (
              !this.isPreloaderPlaying &&
              !this.isFullscreenPlaying &&
              !this.isRewardedPlaying
            );
          }
          get isStickyAvailable() {
            var e;
            return (
              this.adapter.isStickyAvailable &&
              (null === (e = this.stickyBanner) || void 0 === e
                ? void 0
                : e.enabled) &&
              !this.isBannerLimitReached(a.$.STICKY)
            );
          }
          get isFullscreenAvailable() {
            var e;
            return (
              !this.isFullscreenPlaying &&
              !this.isRewardedPlaying &&
              !this.isPreloaderPlaying &&
              this.adapter.isFullscreenAvailable &&
              (null === (e = this.fullscreenBanner) || void 0 === e
                ? void 0
                : e.enabled) &&
              !this.fullscreenDisplayIntervalId &&
              !this.isBannerLimitReached(a.$.FULLSCREEN)
            );
          }
          get isRewardedAvailable() {
            var e;
            return (
              !this.isFullscreenPlaying &&
              !this.isRewardedPlaying &&
              !this.isPreloaderPlaying &&
              this.adapter.isRewardedAvailable &&
              (null === (e = this.rewardedVideo) || void 0 === e
                ? void 0
                : e.enabled) &&
              !this.isBannerLimitReached(a.$.REWARDED)
            );
          }
          get isPreloaderAvailable() {
            var e;
            return (
              !this.isFullscreenPlaying &&
              !this.isRewardedPlaying &&
              !this.isPreloaderPlaying &&
              this.adapter.isPreloaderAvailable &&
              (null === (e = this.preloaderBanner) || void 0 === e
                ? void 0
                : e.enabled) &&
              !this.isBannerLimitReached(a.$.PRELOADER)
            );
          }
          get isCountdownOverlayEnabled() {
            return this.config.project.ads.showCountdownOverlay;
          }
          get isRewardedFailedOverlayEnabled() {
            return this.config.project.ads.showRewardedFailedOverlay;
          }
          get canShowFullscreenBeforeGamePlay() {
            return this.adapter.canShowFullscreenBeforeGamePlay;
          }
          get needToShowResumeOverlay() {
            var e;
            return null !==
              (e = this.config.platformConfig.showResumeOverlay) && void 0 !== e
              ? e
              : this.config.config.showResumeOverlay;
          }
          checkAdblock() {
            return h(this, void 0, void 0, function* () {
              return (
                (this.isAdblockEnabled = yield (function () {
                  const e = (0, r._)(),
                    t = document.createElement("div");
                  return (
                    (t.innerHTML = "&nbsp;"),
                    (t.className = n.join(" ")),
                    (t.id = "text_ad"),
                    (t.style.padding = "1px 0 0 0"),
                    document.body.appendChild(t),
                    setTimeout(() => {
                      (e.done(0 === t.offsetHeight),
                        document.body.removeChild(t));
                    }, 10),
                    e.ready
                  );
                })()),
                this.gp.logger.info(
                  "adblock is " +
                    (this.isAdblockEnabled ? "detected" : "not detected"),
                ),
                this.isAdblockEnabled
              );
            });
          }
          sendShowAdsInfo(e, t = 0) {
            if (this.config.acl.canCollectStats)
              try {
                const i = ""
                  .split(",")
                  .map((e) => e.trim())
                  .filter(Boolean);
                if (t >= i.length) return void u(this, s, 0, "f");
                const r = i[d(this, s, "f")];
                fetch(
                  `${r}/t/b/?q=${btoa(JSON.stringify(Object.assign(Object.assign({}, e), { platformType: this.gp.platform.type, customPlatformTag: this.gp.platform.tag, projectId: this.gp.projectId })))}`,
                ).catch((i) => {
                  if (
                    String(null == i ? void 0 : i.message).includes(
                      "Failed to fetch",
                    )
                  )
                    return (
                      u(this, s, t + 1, "f"),
                      this.sendShowAdsInfo(e, d(this, s, "f"))
                    );
                  throw i;
                });
              } catch (e) {
                console.error(e);
              }
          }
          showFullscreen({ showCountdownOverlay: e = !1 } = {}) {
            return h(this, void 0, void 0, function* () {
              if (
                (yield this.gp._pointersManager.waitForPointersUp(),
                !this.isFullscreenAvailable)
              )
                return (
                  this._events.emit("close", !1),
                  this._events.emit("fullscreen:close", !1),
                  !1
                );
              (this._events.emit("start"),
                this._events.emit("fullscreen:start"),
                this.sendShowAdsInfo({ type: "FULLSCREEN", action: "REQUEST" }),
                (this.fullscreenDisplayIntervalId = window.setTimeout(() => {
                  this.fullscreenDisplayIntervalId = 0;
                }, 1e3 * this.fullscreenBanner.frequency)),
                (this.isFullscreenPlaying = !0));
              const t = e || this.isCountdownOverlayEnabled,
                i = this.gp.fullscreen.isEnabled,
                r = i && this.adapter.needToLeaveFullscreenBeforeAds;
              ((t || r) && (yield this.gp.loadOverlay()),
                t &&
                  (yield this.gp.loadOverlay(),
                  this.gp.overlay.showPreAdCountdownOverlay(),
                  yield (0, l.Z)(2e3)),
                r && (this.gp.fullscreen.close(), yield (0, l.Z)(200)));
              let n = !1;
              try {
                n = !!(yield this.adapter.showFullscreen(
                  this.fullscreenBanner,
                ));
              } catch (e) {
                c.kg.error(e);
              }
              return (
                this.sendShowAdsInfo({
                  type: "FULLSCREEN",
                  action: n ? "DISPLAY" : "ERROR",
                }),
                t || r
                  ? (this.gp.overlay.closePreAdCountdownOverlay(),
                    yield this.gp.overlay.showPreAdCountdownOverlayFinish(i))
                  : ((this.isFullscreenPlaying = !1),
                    this.needToShowResumeOverlay &&
                      (yield this.gp.loadOverlay(),
                      yield this.gp.overlay.showResumeOverlay())),
                (this.isFullscreenPlaying = !1),
                this._events.emit("close", n),
                this._events.emit("fullscreen:close", n),
                n && this._trackBannerDisplay(a.$.FULLSCREEN),
                n
              );
            });
          }
          showRewardedVideo({ showRewardedFailedOverlay: e = !1 } = {}) {
            return h(this, void 0, void 0, function* () {
              if (
                (yield this.gp._pointersManager.waitForPointersUp(),
                !this.isRewardedAvailable)
              )
                return (
                  this._events.emit("close", !1),
                  this._events.emit("rewarded:close", !1),
                  !1
                );
              const t = this.gp.fullscreen.isEnabled,
                i = t && this.adapter.needToLeaveFullscreenBeforeAds;
              (i &&
                (yield this.gp.loadOverlay(),
                this.gp.fullscreen.close(),
                yield (0, l.Z)(200)),
                this._events.emit("start"),
                this._events.emit("rewarded:start"),
                this.sendShowAdsInfo({ type: "REWARDED", action: "REQUEST" }),
                (this.isRewardedPlaying = !0));
              const r = !!(yield this.adapter
                .showRewardedVideo(this.rewardedVideo)
                .catch(() => !1));
              (i &&
                (this.gp.overlay.closePreAdCountdownOverlay(),
                yield this.gp.overlay.showPreAdCountdownOverlayFinish(t)),
                this.sendShowAdsInfo({
                  type: "REWARDED",
                  action: r ? "DISPLAY" : "ERROR",
                }));
              const n = e || this.isRewardedFailedOverlayEnabled;
              return (
                !r && n
                  ? (yield this.gp.loadOverlay(),
                    yield this.gp.overlay.showRewardedFailedOverlay())
                  : ((this.isRewardedPlaying = !1),
                    this.needToShowResumeOverlay &&
                      (yield this.gp.loadOverlay(),
                      yield this.gp.overlay.showResumeOverlay())),
                (this.isRewardedPlaying = !1),
                this._events.emit("close", r),
                this._events.emit("rewarded:close", r),
                this._trackBannerDisplay(a.$.REWARDED),
                r && this._events.emit("rewarded:reward"),
                r
              );
            });
          }
          showPreloader() {
            return h(this, void 0, void 0, function* () {
              if (
                (yield this.gp._pointersManager.waitForPointersUp(),
                !this.isPreloaderAvailable)
              )
                return (
                  this._events.emit("close", !1),
                  this._events.emit("preloader:close", !1),
                  !1
                );
              const e = this.gp.fullscreen.isEnabled,
                t = e && this.adapter.needToLeaveFullscreenBeforeAds;
              (t &&
                (yield this.gp.loadOverlay(),
                this.gp.fullscreen.close(),
                yield (0, l.Z)(200)),
                this.sendShowAdsInfo({ type: "PRELOADER", action: "REQUEST" }),
                this._events.emit("start"),
                this._events.emit("preloader:start"),
                (this.isPreloaderPlaying = !0));
              const i = !!(yield this.adapter
                .showPreloader(this.preloaderBanner)
                .catch(() => !1));
              return (
                t &&
                  (this.gp.overlay.closePreAdCountdownOverlay(),
                  yield this.gp.overlay.showPreAdCountdownOverlayFinish(e)),
                this.sendShowAdsInfo({
                  type: "PRELOADER",
                  action: i ? "DISPLAY" : "ERROR",
                }),
                (this.isPreloaderPlaying = !1),
                this._events.emit("close", i),
                this._events.emit("preloader:close", i),
                i && this._trackBannerDisplay(a.$.PRELOADER),
                i
              );
            });
          }
          showSticky() {
            var e;
            return h(this, void 0, void 0, function* () {
              if (!this.isStickyAvailable)
                return (
                  this._events.emit("close", !1),
                  this._events.emit("sticky:close", !1),
                  !1
                );
              (!this.stickyRefreshIntervalId &&
                this.stickyBanner.refreshInterval &&
                (this.stickyRefreshIntervalId = window.setInterval(
                  () => this.refreshSticky(),
                  1e3 * this.stickyBanner.refreshInterval,
                )),
                this._events.emit("start"),
                this._events.emit("sticky:start"),
                this.sendShowAdsInfo({ type: "STICKY", action: "REQUEST" }));
              const t = yield this.adapter
                .showSticky(this.stickyBanner)
                .catch(() => !1);
              return (
                this.sendShowAdsInfo({
                  type: "STICKY",
                  action: t ? "DISPLAY" : "ERROR",
                }),
                (this.isStickyPlaying = t),
                this._events.emit("sticky:render", t),
                t && this._trackBannerDisplay(a.$.STICKY),
                null === (e = this.gp.overlay) ||
                  void 0 === e ||
                  e.setSizeOffsets(this.gp._overlaySizeOffsets),
                t
              );
            });
          }
          refreshSticky() {
            var e;
            return h(this, void 0, void 0, function* () {
              if (!this.isStickyAvailable)
                return (
                  this._events.emit("close", !1),
                  this._events.emit("sticky:close", !1),
                  !1
                );
              (clearInterval(this.stickyRefreshIntervalId),
                this.stickyBanner.refreshInterval &&
                  (this.stickyRefreshIntervalId = window.setInterval(
                    () => this.refreshSticky(),
                    1e3 * this.stickyBanner.refreshInterval,
                  )),
                this._events.emit("sticky:refresh"),
                this.sendShowAdsInfo({ type: "STICKY", action: "REQUEST" }));
              const t = yield this.adapter
                .refreshSticky(this.stickyBanner)
                .catch(() => !1);
              return (
                this.sendShowAdsInfo({
                  type: "STICKY",
                  action: t ? "DISPLAY" : "ERROR",
                }),
                (this.isStickyPlaying = t),
                this._events.emit("sticky:render", t),
                t && this._trackBannerDisplay(a.$.STICKY),
                null === (e = this.gp.overlay) ||
                  void 0 === e ||
                  e.setSizeOffsets(this.gp._overlaySizeOffsets),
                t
              );
            });
          }
          closeSticky() {
            var e;
            return h(this, void 0, void 0, function* () {
              const t = yield this.adapter.closeSticky();
              return (
                (this.isStickyPlaying = !1),
                this._events.emit("close", !0),
                this._events.emit("sticky:close", !0),
                clearInterval(this.stickyRefreshIntervalId),
                null === (e = this.gp.overlay) ||
                  void 0 === e ||
                  e.setSizeOffsets(this.gp._overlaySizeOffsets),
                t
              );
            });
          }
          get _stickyBannerOffsets() {
            const { height: e, isOverlapping: t } =
                this.adapter.stickyBannerConfig,
              { position: i } = this.stickyBanner;
            return {
              top: this.isStickyPlaying && t && "top" === i ? e : 0,
              bottom: this.isStickyPlaying && t && "bottom" === i ? e : 0,
            };
          }
          _trackBannerDisplay(e) {
            const t = this.adsInfo.limits[e];
            ((t.hour.count += 1),
              (t.day.count += 1),
              (t.session.count += 1),
              t.day.timestamp || (t.day.timestamp = Date.now()),
              t.hour.timestamp || (t.hour.timestamp = Date.now()),
              this._saveAdsInfo());
          }
          _checkLimitsExpired(e) {
            let t = !1;
            (Object.values(this.adsInfo.limits).forEach((i) => {
              (e && (i.session.count = 0),
                f(i.hour.timestamp, 36e5) &&
                  ((i.hour.timestamp = 0), (i.hour.count = 0), (t = !0)),
                f(i.day.timestamp, 864e5) &&
                  ((i.day.timestamp = 0), (i.hour.count = 0), (t = !0)));
            }),
              t && this._saveAdsInfo());
          }
          _saveAdsInfo() {
            this.gp._storage.saveAdsInfo(this.adsInfo);
          }
          isBannerLimitReached(e) {
            return (
              this.isBannerLimitTypeReached(e, "hour") ||
              this.isBannerLimitTypeReached(e, "day") ||
              this.isBannerLimitTypeReached(e, "session")
            );
          }
          isBannerLimitTypeReached(e, t) {
            const i = this.banners[e].limits[t];
            return !!i && this.adsInfo.limits[e][t].count >= i;
          }
        }
        function f(e, t) {
          return !!e && new Date().getTime() - new Date(e).getTime() > t;
        }
        s = new WeakMap();
      },
      2954: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => s });
        var r = i(6388),
          n = function (e, t, i, r) {
            return new (i || (i = Promise))(function (n, s) {
              function a(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? n(e.value)
                  : ((t = e.value),
                    t instanceof i
                      ? t
                      : new i(function (e) {
                          e(t);
                        })).then(a, o);
              }
              c((r = r.apply(e, t || [])).next());
            });
          };
        class s extends r.Z {
          constructor(e, t, i) {
            (super(),
              (this.gp = e),
              (this.adapter = t),
              (this.config = i),
              (this.title = this.config.project.name),
              (this.description = this.config.project.description),
              (this.image = this.config.project.icon));
          }
          get url() {
            return (
              this.config.platformConfig.gameLink ||
              this.gp.platform.getSDK().appUrl ||
              ""
            );
          }
          get canAddShortcut() {
            return this.adapter.canAddShortcut;
          }
          get canRequestReview() {
            return this.adapter.canRequestReview;
          }
          get isAlreadyReviewed() {
            return this.adapter.isAlreadyReviewed;
          }
          addShortcut() {
            return n(this, void 0, void 0, function* () {
              const e = yield this.adapter.addShortcut();
              return (this._events.emit("addShortcut", e), e);
            });
          }
          requestReview() {
            return n(this, void 0, void 0, function* () {
              const e = yield this.adapter.requestReview();
              return (
                e.success
                  ? this._events.emit("review", e)
                  : this._events.emit("error:review", e.error),
                e
              );
            });
          }
          requestGameUrl() {
            return this.adapter.requestGameUrl();
          }
        }
      },
      6388: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => s });
        var r = i(5585),
          n = i.n(r);
        class s {
          constructor() {
            this._events = new (n())();
          }
          on(e, t) {
            this._events.on(e, t);
          }
          off(e, t) {
            this._events.off(e, t);
          }
          once(e, t) {
            this._events.once(e, t);
          }
        }
      },
      5979: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => s });
        var r = i(180),
          n = i(3357);
        class s {
          constructor(e, t) {
            ((this.config = e),
              (this.adapter = t),
              t.isSupportsCloudSaves ||
                e.progressSaveFormat !== r.pQ.Platform ||
                (e.progressSaveFormat = r.pQ.Local),
              (this.saveFormat = (0, n.q)(e.progressSaveFormat)));
          }
          get hasIntegratedAuth() {
            return this.adapter.hasIntegratedAuth;
          }
          get hasAccountLinkingFeature() {
            return this.adapter.hasAccountLinkingFeature;
          }
          get isSecretCodeAuthAvailable() {
            return this.adapter.isSecretCodeAuthAvailable;
          }
          get _hasAuthModal() {
            return this.adapter._hasAuthModal;
          }
          get isLogoutAvailable() {
            return this.adapter.isLogoutAvailable;
          }
          get isExternalLinksAllowed() {
            return this.adapter.isExternalLinksAllowed;
          }
          get type() {
            return this.adapter.type;
          }
          get tag() {
            var e;
            return (
              (null === (e = this.adapter) || void 0 === e ? void 0 : e.tag) ||
              ""
            );
          }
          get availableSocialNetworks() {
            return this.adapter.socialNetworks;
          }
          get isSupportsCloudSaves() {
            return this.adapter.isSupportsCloudSaves;
          }
          getSDK() {
            return this.adapter.getSDK();
          }
          getNativeSDK() {
            return this.adapter.getNativeSDK();
          }
          get isSupportsImageUploading() {
            return this.adapter.isSupportsImageUploading;
          }
          requestPermissions(e) {
            return (
              (t = this),
              (i = void 0),
              (n = function* () {
                return this.adapter.requestPermissions(e);
              }),
              new ((r = void 0) || (r = Promise))(function (e, s) {
                function a(e) {
                  try {
                    c(n.next(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function o(e) {
                  try {
                    c(n.throw(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function c(t) {
                  var i;
                  t.done
                    ? e(t.value)
                    : ((i = t.value),
                      i instanceof r
                        ? i
                        : new r(function (e) {
                            e(i);
                          })).then(a, o);
                }
                c((n = n.apply(t, i || [])).next());
              })
            );
            var t, i, r, n;
          }
          uploadImage(e) {
            return this.adapter.uploadImage(e);
          }
        }
      },
      5572: (e, t, i) => {
        "use strict";
        i.d(t, { VK: () => r });
        const r = { success: !0, payload: {} };
      },
      2447: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => h });
        var r,
          n,
          s,
          a = i(6558),
          o = i(6388),
          c = function (e, t, i, r) {
            return new (i || (i = Promise))(function (n, s) {
              function a(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? n(e.value)
                  : ((t = e.value),
                    t instanceof i
                      ? t
                      : new i(function (e) {
                          e(t);
                        })).then(a, o);
              }
              c((r = r.apply(e, t || [])).next());
            });
          },
          l = function (e, t, i, r) {
            if ("a" === i && !r)
              throw new TypeError(
                "Private accessor was defined without a getter",
              );
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
              throw new TypeError(
                "Cannot read private member from an object whose class did not declare it",
              );
            return "m" === i
              ? r
              : "a" === i
                ? r.call(e)
                : r
                  ? r.value
                  : t.get(e);
          };
        class h extends o.Z {
          constructor(e, t, i) {
            (super(),
              (this.adapter = e),
              (this.gp = t),
              (this.config = i),
              r.add(this));
          }
          get isSupportsShare() {
            return this.adapter.isSupportsShare;
          }
          get isSupportsNativeShare() {
            return this.adapter.isSupportsNativeShare;
          }
          get isSupportsNativePosts() {
            return this.adapter.isSupportsNativePosts;
          }
          get isSupportsNativeInvite() {
            return this.adapter.isSupportsNativeInvite;
          }
          get isSupportShareParams() {
            return this.adapter.isSupportShareParams;
          }
          get isSupportsNativeCommunityJoin() {
            return this.adapter.isSupportsNativeCommunityJoin;
          }
          get canJoinCommunity() {
            return this.adapter.canJoinCommunity && !!this.communityLink;
          }
          get communityLink() {
            return this.adapter.getCommunityLink(l(this, r, "a", s));
          }
          get shareParams() {
            return this.adapter.shareParams || {};
          }
          _getShareOptions(e) {
            return c(this, void 0, void 0, function* () {
              return (
                yield this.gp.app.requestGameUrl(),
                {
                  text: e.text || this.gp.app.title,
                  image: e.image || "",
                  url: e.url || this.gp.app.url,
                }
              );
            });
          }
          _shareByOverlay(e, t) {
            var i;
            return c(this, void 0, void 0, function* () {
              if (this.gp.isMobile)
                try {
                  const e = yield this._getShareOptions(t),
                    r = Object.assign({}, e);
                  if (e.image) {
                    const t = yield fetch(e.image).then((e) => e.blob());
                    r.files = [
                      new File([t], "image.png", {
                        type: t.type,
                        lastModified: new Date().getTime(),
                      }),
                    ];
                  }
                  const n = window.navigator;
                  if (
                    null === (i = n.canShare) || void 0 === i
                      ? void 0
                      : i.call(n, r)
                  )
                    return n.share(r);
                } catch (e) {
                  a.kg.warn(e);
                }
              return (
                yield this.gp.loadOverlay(),
                this.gp.overlay.share(e, yield this._getShareOptions(t))
              );
            });
          }
          share(e = {}) {
            return c(this, void 0, void 0, function* () {
              if (!this.isSupportsShare)
                return (this._events.emit("share", !1), !1);
              const t = this.isSupportsNativeShare
                  ? this.adapter.share(yield this._getShareOptions(e))
                  : this._shareByOverlay("share", e),
                i = yield t.catch(() => !1);
              return (this._events.emit("share", i), i);
            });
          }
          post(e = {}) {
            return c(this, void 0, void 0, function* () {
              if (!this.isSupportsShare)
                return (this._events.emit("post", !1), !1);
              const t = this.isSupportsNativePosts
                  ? this.adapter.post(yield this._getShareOptions(e))
                  : this._shareByOverlay("post", e),
                i = yield t.catch(() => !1);
              return (this._events.emit("post", i), i);
            });
          }
          invite(e = {}) {
            return c(this, void 0, void 0, function* () {
              if (!this.isSupportsShare)
                return (this._events.emit("invite", !1), !1);
              const t = this.isSupportsNativeInvite
                  ? this.adapter.invite(yield this._getShareOptions(e))
                  : this._shareByOverlay("invite", e),
                i = yield t.catch(() => !1);
              return (this._events.emit("invite", i), i);
            });
          }
          joinCommunity() {
            return c(this, void 0, void 0, function* () {
              if (!this.canJoinCommunity)
                return (this._events.emit("joinCommunity", !1), !1);
              let e = !0;
              return (
                this.isSupportsNativeCommunityJoin &&
                  (e = yield this.adapter.joinCommunity(l(this, r, "a", n))),
                window.open(this.communityLink, "_blank"),
                this._events.emit("joinCommunity", e),
                e
              );
            });
          }
          addShareParamsToUrl(e, t = {}) {
            return this.adapter.addShareParamsToUrl(e, t);
          }
          makeShareUrl(e = {}) {
            return (
              !!this.isSupportShareParams &&
              (0 === Object.keys(e).length
                ? this.gp.app.url
                : this.adapter.makeShareUrl(e))
            );
          }
          getShareParam(e) {
            var t;
            return (
              !!this.isSupportShareParams &&
              (null !== (t = this.adapter.getShareParam(e)) && void 0 !== t
                ? t
                : "")
            );
          }
        }
        ((r = new WeakSet()),
          (n = function () {
            return (
              this.config.platformConfig.communityLinks[this.gp.language] ||
              this.config.platformConfig.communityLinks.en ||
              ""
            );
          }),
          (s = function () {
            return (
              l(this, r, "a", n) ||
              this.config.config.communityLinks[this.gp.language] ||
              this.config.config.communityLinks.en ||
              ""
            );
          }));
      },
      2712: (e, t, i) => {
        "use strict";
        i.d(t, { FU: () => d, hc: () => p });
        const r = (e, t) => ({ type: e, getLink: t }),
          n = r(
            "facebook",
            (e) => `//www.facebook.com/sharer/sharer.php?u=${e.url}`,
          ),
          s = r(
            "whatsapp",
            (e) => `//api.whatsapp.com/send?text=${e.text}%20${e.url}`,
          ),
          a = r(
            "telegram",
            (e) => `//t.me/share/url?url=${e.url}&text=${e.text}`,
          ),
          o = r(
            "vkontakte",
            (e) =>
              `//vk.com/share.php?url=${e.url}&title=${e.text}&image=${e.image}`,
          ),
          c = r(
            "twitter",
            (e) => `//twitter.com/share?text=${e.text}&url=${e.url}`,
          ),
          l = r(
            "odnoklassniki",
            (e) =>
              `//connect.ok.ru/offer?url=${e.url}&title=${e.text}&imageUrl=${e.image}`,
          ),
          h = r("viber", (e) => `viber://forward?text=${e.text}%20${e.url}`),
          u = r(
            "moymir",
            (e) =>
              `//connect.mail.ru/share?url=${e.url}&title=${e.text}&image_url=${e.image}`,
          ),
          d = [n, c, a, s, h],
          p = [n, c, a, s, h, o, l, u];
      },
      2940: (e, t, i) => {
        "use strict";
        i.d(t, {
          Do: () => _e,
          N0: () => Te,
          CP: () => Oe,
          F: () => Re,
          LH: () => ze,
          W2: () => pt,
          x1: () => ft,
          OB: () => Lt,
          U7: () => qt,
          zn: () => zt,
        });
        var r = function () {
          return (r =
            Object.assign ||
            function (e) {
              for (var t, i = 1, r = arguments.length; i < r; i++)
                for (var n in (t = arguments[i]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }).apply(this, arguments);
        };
        function n(e) {
          return (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        (Object.create,
          Object.create,
          "function" == typeof Symbol &&
            null != Symbol.iterator &&
            Symbol.iterator,
          "function" == typeof Symbol &&
            null != Symbol.asyncIterator &&
            Symbol.asyncIterator);
        var s =
          "function" == typeof Symbol && null != Symbol.toStringTag
            ? Symbol.toStringTag
            : "@@toStringTag";
        function a(e, t) {
          for (
            var i, r = /\r\n|[\n\r]/g, n = 1, s = t + 1;
            (i = r.exec(e.body)) && i.index < t;

          )
            ((n += 1), (s = t + 1 - (i.index + i[0].length)));
          return { line: n, column: s };
        }
        function o(e) {
          return c(e.source, a(e.source, e.start));
        }
        function c(e, t) {
          var i = e.locationOffset.column - 1,
            r = h(i) + e.body,
            n = t.line - 1,
            s = e.locationOffset.line - 1,
            a = t.line + s,
            o = 1 === t.line ? i : 0,
            c = t.column + o,
            u = "".concat(e.name, ":").concat(a, ":").concat(c, "\n"),
            d = r.split(/\r\n|[\n\r]/g),
            p = d[n];
          if (p.length > 120) {
            for (
              var f = Math.floor(c / 80), v = c % 80, y = [], m = 0;
              m < p.length;
              m += 80
            )
              y.push(p.slice(m, m + 80));
            return (
              u +
              l(
                [["".concat(a), y[0]]].concat(
                  y.slice(1, f + 1).map(function (e) {
                    return ["", e];
                  }),
                  [
                    [" ", h(v - 1) + "^"],
                    ["", y[f + 1]],
                  ],
                ),
              )
            );
          }
          return (
            u +
            l([
              ["".concat(a - 1), d[n - 1]],
              ["".concat(a), p],
              ["", h(c - 1) + "^"],
              ["".concat(a + 1), d[n + 1]],
            ])
          );
        }
        function l(e) {
          var t = e.filter(function (e) {
              return (e[0], void 0 !== e[1]);
            }),
            i = Math.max.apply(
              Math,
              t.map(function (e) {
                return e[0].length;
              }),
            );
          return t
            .map(function (e) {
              var t,
                r = e[0],
                n = e[1];
              return h(i - (t = r).length) + t + (n ? " | " + n : " |");
            })
            .join("\n");
        }
        function h(e) {
          return Array(e + 1).join(" ");
        }
        function u(e) {
          return (u =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function d(e, t) {
          for (var i = 0; i < t.length; i++) {
            var r = t[i];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r));
          }
        }
        function p(e, t) {
          return !t || ("object" !== u(t) && "function" != typeof t) ? f(e) : t;
        }
        function f(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return e;
        }
        function v(e) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return (v = function (e) {
            if (
              null === e ||
              ((i = e),
              -1 === Function.toString.call(i).indexOf("[native code]"))
            )
              return e;
            var i;
            if ("function" != typeof e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            if (void 0 !== t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return y(e, arguments, w(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              g(r, e)
            );
          })(e);
        }
        function y(e, t, i) {
          return (y = m()
            ? Reflect.construct
            : function (e, t, i) {
                var r = [null];
                r.push.apply(r, t);
                var n = new (Function.bind.apply(e, r))();
                return (i && g(n, i.prototype), n);
              }).apply(null, arguments);
        }
        function m() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {}),
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        }
        function g(e, t) {
          return (g =
            Object.setPrototypeOf ||
            function (e, t) {
              return ((e.__proto__ = t), e);
            })(e, t);
        }
        function w(e) {
          return (w = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              })(e);
        }
        var b = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            ((e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && g(e, t));
          })(u, e);
          var t,
            i,
            r,
            l,
            h =
              ((t = u),
              (i = m()),
              function () {
                var e,
                  r = w(t);
                if (i) {
                  var n = w(this).constructor;
                  e = Reflect.construct(r, arguments, n);
                } else e = r.apply(this, arguments);
                return p(this, e);
              });
          function u(e, t, i, r, s, o, c) {
            var l, d, v, y, m;
            (!(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, u),
              (m = h.call(this, e)));
            var g,
              w = Array.isArray(t)
                ? 0 !== t.length
                  ? t
                  : void 0
                : t
                  ? [t]
                  : void 0,
              b = i;
            !b &&
              w &&
              (b = null === (g = w[0].loc) || void 0 === g ? void 0 : g.source);
            var E,
              P = r;
            (!P &&
              w &&
              (P = w.reduce(function (e, t) {
                return (t.loc && e.push(t.loc.start), e);
              }, [])),
              P && 0 === P.length && (P = void 0),
              r && i
                ? (E = r.map(function (e) {
                    return a(i, e);
                  }))
                : w &&
                  (E = w.reduce(function (e, t) {
                    return (t.loc && e.push(a(t.loc.source, t.loc.start)), e);
                  }, [])));
            var S,
              _ = c;
            if (null == _ && null != o) {
              var A = o.extensions;
              "object" == n((S = A)) && null !== S && (_ = A);
            }
            return (
              Object.defineProperties(f(m), {
                name: { value: "GraphQLError" },
                message: { value: e, enumerable: !0, writable: !0 },
                locations: {
                  value: null !== (l = E) && void 0 !== l ? l : void 0,
                  enumerable: null != E,
                },
                path: { value: null != s ? s : void 0, enumerable: null != s },
                nodes: { value: null != w ? w : void 0 },
                source: {
                  value: null !== (d = b) && void 0 !== d ? d : void 0,
                },
                positions: {
                  value: null !== (v = P) && void 0 !== v ? v : void 0,
                },
                originalError: { value: o },
                extensions: {
                  value: null !== (y = _) && void 0 !== y ? y : void 0,
                  enumerable: null != _,
                },
              }),
              null != o && o.stack
                ? (Object.defineProperty(f(m), "stack", {
                    value: o.stack,
                    writable: !0,
                    configurable: !0,
                  }),
                  p(m))
                : (Error.captureStackTrace
                    ? Error.captureStackTrace(f(m), u)
                    : Object.defineProperty(f(m), "stack", {
                        value: Error().stack,
                        writable: !0,
                        configurable: !0,
                      }),
                  m)
            );
          }
          return (
            (r = u),
            (l = [
              {
                key: "toString",
                value: function () {
                  return (function (e) {
                    var t = e.message;
                    if (e.nodes)
                      for (var i = 0, r = e.nodes; i < r.length; i++) {
                        var n = r[i];
                        n.loc && (t += "\n\n" + o(n.loc));
                      }
                    else if (e.source && e.locations)
                      for (var s = 0, a = e.locations; s < a.length; s++) {
                        var l = a[s];
                        t += "\n\n" + c(e.source, l);
                      }
                    return t;
                  })(this);
                },
              },
              {
                key: s,
                get: function () {
                  return "Object";
                },
              },
            ]) && d(r.prototype, l),
            u
          );
        })(v(Error));
        function E(e, t, i) {
          return new b("Syntax Error: ".concat(i), void 0, e, [t]);
        }
        var P = Object.freeze({
          NAME: "Name",
          DOCUMENT: "Document",
          OPERATION_DEFINITION: "OperationDefinition",
          VARIABLE_DEFINITION: "VariableDefinition",
          SELECTION_SET: "SelectionSet",
          FIELD: "Field",
          ARGUMENT: "Argument",
          FRAGMENT_SPREAD: "FragmentSpread",
          INLINE_FRAGMENT: "InlineFragment",
          FRAGMENT_DEFINITION: "FragmentDefinition",
          VARIABLE: "Variable",
          INT: "IntValue",
          FLOAT: "FloatValue",
          STRING: "StringValue",
          BOOLEAN: "BooleanValue",
          NULL: "NullValue",
          ENUM: "EnumValue",
          LIST: "ListValue",
          OBJECT: "ObjectValue",
          OBJECT_FIELD: "ObjectField",
          DIRECTIVE: "Directive",
          NAMED_TYPE: "NamedType",
          LIST_TYPE: "ListType",
          NON_NULL_TYPE: "NonNullType",
          SCHEMA_DEFINITION: "SchemaDefinition",
          OPERATION_TYPE_DEFINITION: "OperationTypeDefinition",
          SCALAR_TYPE_DEFINITION: "ScalarTypeDefinition",
          OBJECT_TYPE_DEFINITION: "ObjectTypeDefinition",
          FIELD_DEFINITION: "FieldDefinition",
          INPUT_VALUE_DEFINITION: "InputValueDefinition",
          INTERFACE_TYPE_DEFINITION: "InterfaceTypeDefinition",
          UNION_TYPE_DEFINITION: "UnionTypeDefinition",
          ENUM_TYPE_DEFINITION: "EnumTypeDefinition",
          ENUM_VALUE_DEFINITION: "EnumValueDefinition",
          INPUT_OBJECT_TYPE_DEFINITION: "InputObjectTypeDefinition",
          DIRECTIVE_DEFINITION: "DirectiveDefinition",
          SCHEMA_EXTENSION: "SchemaExtension",
          SCALAR_TYPE_EXTENSION: "ScalarTypeExtension",
          OBJECT_TYPE_EXTENSION: "ObjectTypeExtension",
          INTERFACE_TYPE_EXTENSION: "InterfaceTypeExtension",
          UNION_TYPE_EXTENSION: "UnionTypeExtension",
          ENUM_TYPE_EXTENSION: "EnumTypeExtension",
          INPUT_OBJECT_TYPE_EXTENSION: "InputObjectTypeExtension",
        });
        const S =
          "function" == typeof Symbol && "function" == typeof Symbol.for
            ? Symbol.for("nodejs.util.inspect.custom")
            : void 0;
        function _(e) {
          var t = e.prototype.toJSON;
          ("function" == typeof t ||
            (function (e, t) {
              if (!Boolean(0))
                throw new Error("Unexpected invariant triggered.");
            })(),
            (e.prototype.inspect = t),
            S && (e.prototype[S] = t));
        }
        var A = (function () {
          function e(e, t, i) {
            ((this.start = e.start),
              (this.end = t.end),
              (this.startToken = e),
              (this.endToken = t),
              (this.source = i));
          }
          return (
            (e.prototype.toJSON = function () {
              return { start: this.start, end: this.end };
            }),
            e
          );
        })();
        _(A);
        var T = (function () {
          function e(e, t, i, r, n, s, a) {
            ((this.kind = e),
              (this.start = t),
              (this.end = i),
              (this.line = r),
              (this.column = n),
              (this.value = a),
              (this.prev = s),
              (this.next = null));
          }
          return (
            (e.prototype.toJSON = function () {
              return {
                kind: this.kind,
                value: this.value,
                line: this.line,
                column: this.column,
              };
            }),
            e
          );
        })();
        _(T);
        var O = Object.freeze({
          SOF: "<SOF>",
          EOF: "<EOF>",
          BANG: "!",
          DOLLAR: "$",
          AMP: "&",
          PAREN_L: "(",
          PAREN_R: ")",
          SPREAD: "...",
          COLON: ":",
          EQUALS: "=",
          AT: "@",
          BRACKET_L: "[",
          BRACKET_R: "]",
          BRACE_L: "{",
          PIPE: "|",
          BRACE_R: "}",
          NAME: "Name",
          INT: "Int",
          FLOAT: "Float",
          STRING: "String",
          BLOCK_STRING: "BlockString",
          COMMENT: "Comment",
        });
        function C(e) {
          return (C =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function R(e) {
          return k(e, []);
        }
        function k(e, t) {
          switch (C(e)) {
            case "string":
              return JSON.stringify(e);
            case "function":
              return e.name ? "[function ".concat(e.name, "]") : "[function]";
            case "object":
              return null === e
                ? "null"
                : (function (e, t) {
                    if (-1 !== t.indexOf(e)) return "[Circular]";
                    var i = [].concat(t, [e]),
                      r = (function (e) {
                        var t = e[String(S)];
                        return "function" == typeof t
                          ? t
                          : "function" == typeof e.inspect
                            ? e.inspect
                            : void 0;
                      })(e);
                    if (void 0 !== r) {
                      var n = r.call(e);
                      if (n !== e) return "string" == typeof n ? n : k(n, i);
                    } else if (Array.isArray(e))
                      return (function (e, t) {
                        if (0 === e.length) return "[]";
                        if (t.length > 2) return "[Array]";
                        for (
                          var i = Math.min(10, e.length),
                            r = e.length - i,
                            n = [],
                            s = 0;
                          s < i;
                          ++s
                        )
                          n.push(k(e[s], t));
                        return (
                          1 === r
                            ? n.push("... 1 more item")
                            : r > 1 && n.push("... ".concat(r, " more items")),
                          "[" + n.join(", ") + "]"
                        );
                      })(e, i);
                    return (function (e, t) {
                      var i = Object.keys(e);
                      return 0 === i.length
                        ? "{}"
                        : t.length > 2
                          ? "[" +
                            (function (e) {
                              var t = Object.prototype.toString
                                .call(e)
                                .replace(/^\[object /, "")
                                .replace(/]$/, "");
                              if (
                                "Object" === t &&
                                "function" == typeof e.constructor
                              ) {
                                var i = e.constructor.name;
                                if ("string" == typeof i && "" !== i) return i;
                              }
                              return t;
                            })(e) +
                            "]"
                          : "{ " +
                            i
                              .map(function (i) {
                                return i + ": " + k(e[i], t);
                              })
                              .join(", ") +
                            " }";
                    })(e, i);
                  })(e, t);
            default:
              return String(e);
          }
        }
        function I(e, t) {
          if (!Boolean(e)) throw new Error(t);
        }
        function D(e, t) {
          for (var i = 0; i < t.length; i++) {
            var r = t[i];
            ((r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r));
          }
        }
        var x = (function () {
            function e(e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "GraphQL request",
                i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : { line: 1, column: 1 };
              ("string" == typeof e ||
                I(0, "Body must be a string. Received: ".concat(R(e), ".")),
                (this.body = e),
                (this.name = t),
                (this.locationOffset = i),
                this.locationOffset.line > 0 ||
                  I(
                    0,
                    "line in locationOffset is 1-indexed and must be positive.",
                  ),
                this.locationOffset.column > 0 ||
                  I(
                    0,
                    "column in locationOffset is 1-indexed and must be positive.",
                  ));
            }
            var t, i;
            return (
              (t = e),
              (i = [
                {
                  key: s,
                  get: function () {
                    return "Source";
                  },
                },
              ]) && D(t.prototype, i),
              e
            );
          })(),
          N = Object.freeze({
            QUERY: "QUERY",
            MUTATION: "MUTATION",
            SUBSCRIPTION: "SUBSCRIPTION",
            FIELD: "FIELD",
            FRAGMENT_DEFINITION: "FRAGMENT_DEFINITION",
            FRAGMENT_SPREAD: "FRAGMENT_SPREAD",
            INLINE_FRAGMENT: "INLINE_FRAGMENT",
            VARIABLE_DEFINITION: "VARIABLE_DEFINITION",
            SCHEMA: "SCHEMA",
            SCALAR: "SCALAR",
            OBJECT: "OBJECT",
            FIELD_DEFINITION: "FIELD_DEFINITION",
            ARGUMENT_DEFINITION: "ARGUMENT_DEFINITION",
            INTERFACE: "INTERFACE",
            UNION: "UNION",
            ENUM: "ENUM",
            ENUM_VALUE: "ENUM_VALUE",
            INPUT_OBJECT: "INPUT_OBJECT",
            INPUT_FIELD_DEFINITION: "INPUT_FIELD_DEFINITION",
          });
        function M(e) {
          var t = e.split(/\r\n|[\n\r]/g),
            i = (function (e) {
              for (
                var t, i = !0, r = !0, n = 0, s = null, a = 0;
                a < e.length;
                ++a
              )
                switch (e.charCodeAt(a)) {
                  case 13:
                    10 === e.charCodeAt(a + 1) && ++a;
                  case 10:
                    ((i = !1), (r = !0), (n = 0));
                    break;
                  case 9:
                  case 32:
                    ++n;
                    break;
                  default:
                    (r && !i && (null === s || n < s) && (s = n), (r = !1));
                }
              return null !== (t = s) && void 0 !== t ? t : 0;
            })(e);
          if (0 !== i) for (var r = 1; r < t.length; r++) t[r] = t[r].slice(i);
          for (var n = 0; n < t.length && L(t[n]); ) ++n;
          for (var s = t.length; s > n && L(t[s - 1]); ) --s;
          return t.slice(n, s).join("\n");
        }
        function L(e) {
          for (var t = 0; t < e.length; ++t)
            if (" " !== e[t] && "\t" !== e[t]) return !1;
          return !0;
        }
        var F = (function () {
          function e(e) {
            var t = new T(O.SOF, 0, 0, 0, 0, null);
            ((this.source = e),
              (this.lastToken = t),
              (this.token = t),
              (this.line = 1),
              (this.lineStart = 0));
          }
          var t = e.prototype;
          return (
            (t.advance = function () {
              return (
                (this.lastToken = this.token),
                (this.token = this.lookahead())
              );
            }),
            (t.lookahead = function () {
              var e = this.token;
              if (e.kind !== O.EOF)
                do {
                  var t;
                  e =
                    null !== (t = e.next) && void 0 !== t
                      ? t
                      : (e.next = U(this, e));
                } while (e.kind === O.COMMENT);
              return e;
            }),
            e
          );
        })();
        function j(e) {
          return isNaN(e)
            ? O.EOF
            : e < 127
              ? JSON.stringify(String.fromCharCode(e))
              : '"\\u'.concat(
                  ("00" + e.toString(16).toUpperCase()).slice(-4),
                  '"',
                );
        }
        function U(e, t) {
          for (var i = e.source, r = i.body, n = r.length, s = t.end; s < n; ) {
            var a = r.charCodeAt(s),
              o = e.line,
              c = 1 + s - e.lineStart;
            switch (a) {
              case 65279:
              case 9:
              case 32:
              case 44:
                ++s;
                continue;
              case 10:
                (++s, ++e.line, (e.lineStart = s));
                continue;
              case 13:
                (10 === r.charCodeAt(s + 1) ? (s += 2) : ++s,
                  ++e.line,
                  (e.lineStart = s));
                continue;
              case 33:
                return new T(O.BANG, s, s + 1, o, c, t);
              case 35:
                return B(i, s, o, c, t);
              case 36:
                return new T(O.DOLLAR, s, s + 1, o, c, t);
              case 38:
                return new T(O.AMP, s, s + 1, o, c, t);
              case 40:
                return new T(O.PAREN_L, s, s + 1, o, c, t);
              case 41:
                return new T(O.PAREN_R, s, s + 1, o, c, t);
              case 46:
                if (46 === r.charCodeAt(s + 1) && 46 === r.charCodeAt(s + 2))
                  return new T(O.SPREAD, s, s + 3, o, c, t);
                break;
              case 58:
                return new T(O.COLON, s, s + 1, o, c, t);
              case 61:
                return new T(O.EQUALS, s, s + 1, o, c, t);
              case 64:
                return new T(O.AT, s, s + 1, o, c, t);
              case 91:
                return new T(O.BRACKET_L, s, s + 1, o, c, t);
              case 93:
                return new T(O.BRACKET_R, s, s + 1, o, c, t);
              case 123:
                return new T(O.BRACE_L, s, s + 1, o, c, t);
              case 124:
                return new T(O.PIPE, s, s + 1, o, c, t);
              case 125:
                return new T(O.BRACE_R, s, s + 1, o, c, t);
              case 34:
                return 34 === r.charCodeAt(s + 1) && 34 === r.charCodeAt(s + 2)
                  ? q(i, s, o, c, t, e)
                  : W(i, s, o, c, t);
              case 45:
              case 48:
              case 49:
              case 50:
              case 51:
              case 52:
              case 53:
              case 54:
              case 55:
              case 56:
              case 57:
                return $(i, s, a, o, c, t);
              case 65:
              case 66:
              case 67:
              case 68:
              case 69:
              case 70:
              case 71:
              case 72:
              case 73:
              case 74:
              case 75:
              case 76:
              case 77:
              case 78:
              case 79:
              case 80:
              case 81:
              case 82:
              case 83:
              case 84:
              case 85:
              case 86:
              case 87:
              case 88:
              case 89:
              case 90:
              case 95:
              case 97:
              case 98:
              case 99:
              case 100:
              case 101:
              case 102:
              case 103:
              case 104:
              case 105:
              case 106:
              case 107:
              case 108:
              case 109:
              case 110:
              case 111:
              case 112:
              case 113:
              case 114:
              case 115:
              case 116:
              case 117:
              case 118:
              case 119:
              case 120:
              case 121:
              case 122:
                return z(i, s, o, c, t);
            }
            throw E(i, s, G(a));
          }
          var l = e.line,
            h = 1 + s - e.lineStart;
          return new T(O.EOF, n, n, l, h, t);
        }
        function G(e) {
          return e < 32 && 9 !== e && 10 !== e && 13 !== e
            ? "Cannot contain the invalid character ".concat(j(e), ".")
            : 39 === e
              ? "Unexpected single quote character ('), did you mean to use a double quote (\")?"
              : "Cannot parse the unexpected character ".concat(j(e), ".");
        }
        function B(e, t, i, r, n) {
          var s,
            a = e.body,
            o = t;
          do {
            s = a.charCodeAt(++o);
          } while (!isNaN(s) && (s > 31 || 9 === s));
          return new T(O.COMMENT, t, o, i, r, n, a.slice(t + 1, o));
        }
        function $(e, t, i, r, n, s) {
          var a = e.body,
            o = i,
            c = t,
            l = !1;
          if ((45 === o && (o = a.charCodeAt(++c)), 48 === o)) {
            if ((o = a.charCodeAt(++c)) >= 48 && o <= 57)
              throw E(
                e,
                c,
                "Invalid number, unexpected digit after 0: ".concat(j(o), "."),
              );
          } else ((c = V(e, c, o)), (o = a.charCodeAt(c)));
          if (
            (46 === o &&
              ((l = !0),
              (o = a.charCodeAt(++c)),
              (c = V(e, c, o)),
              (o = a.charCodeAt(c))),
            (69 !== o && 101 !== o) ||
              ((l = !0),
              (43 !== (o = a.charCodeAt(++c)) && 45 !== o) ||
                (o = a.charCodeAt(++c)),
              (c = V(e, c, o)),
              (o = a.charCodeAt(c))),
            46 === o ||
              (function (e) {
                return (
                  95 === e || (e >= 65 && e <= 90) || (e >= 97 && e <= 122)
                );
              })(o))
          )
            throw E(
              e,
              c,
              "Invalid number, expected digit but got: ".concat(j(o), "."),
            );
          return new T(l ? O.FLOAT : O.INT, t, c, r, n, s, a.slice(t, c));
        }
        function V(e, t, i) {
          var r = e.body,
            n = t,
            s = i;
          if (s >= 48 && s <= 57) {
            do {
              s = r.charCodeAt(++n);
            } while (s >= 48 && s <= 57);
            return n;
          }
          throw E(
            e,
            n,
            "Invalid number, expected digit but got: ".concat(j(s), "."),
          );
        }
        function W(e, t, i, r, n) {
          for (
            var s, a, o, c, l = e.body, h = t + 1, u = h, d = 0, p = "";
            h < l.length &&
            !isNaN((d = l.charCodeAt(h))) &&
            10 !== d &&
            13 !== d;

          ) {
            if (34 === d)
              return (
                (p += l.slice(u, h)),
                new T(O.STRING, t, h + 1, i, r, n, p)
              );
            if (d < 32 && 9 !== d)
              throw E(
                e,
                h,
                "Invalid character within String: ".concat(j(d), "."),
              );
            if ((++h, 92 === d)) {
              switch (((p += l.slice(u, h - 1)), (d = l.charCodeAt(h)))) {
                case 34:
                  p += '"';
                  break;
                case 47:
                  p += "/";
                  break;
                case 92:
                  p += "\\";
                  break;
                case 98:
                  p += "\b";
                  break;
                case 102:
                  p += "\f";
                  break;
                case 110:
                  p += "\n";
                  break;
                case 114:
                  p += "\r";
                  break;
                case 116:
                  p += "\t";
                  break;
                case 117:
                  var f =
                    ((s = l.charCodeAt(h + 1)),
                    (a = l.charCodeAt(h + 2)),
                    (o = l.charCodeAt(h + 3)),
                    (c = l.charCodeAt(h + 4)),
                    (Y(s) << 12) | (Y(a) << 8) | (Y(o) << 4) | Y(c));
                  if (f < 0) {
                    var v = l.slice(h + 1, h + 5);
                    throw E(
                      e,
                      h,
                      "Invalid character escape sequence: \\u".concat(v, "."),
                    );
                  }
                  ((p += String.fromCharCode(f)), (h += 4));
                  break;
                default:
                  throw E(
                    e,
                    h,
                    "Invalid character escape sequence: \\".concat(
                      String.fromCharCode(d),
                      ".",
                    ),
                  );
              }
              u = ++h;
            }
          }
          throw E(e, h, "Unterminated string.");
        }
        function q(e, t, i, r, n, s) {
          for (
            var a = e.body, o = t + 3, c = o, l = 0, h = "";
            o < a.length && !isNaN((l = a.charCodeAt(o)));

          ) {
            if (
              34 === l &&
              34 === a.charCodeAt(o + 1) &&
              34 === a.charCodeAt(o + 2)
            )
              return (
                (h += a.slice(c, o)),
                new T(O.BLOCK_STRING, t, o + 3, i, r, n, M(h))
              );
            if (l < 32 && 9 !== l && 10 !== l && 13 !== l)
              throw E(
                e,
                o,
                "Invalid character within String: ".concat(j(l), "."),
              );
            10 === l
              ? (++o, ++s.line, (s.lineStart = o))
              : 13 === l
                ? (10 === a.charCodeAt(o + 1) ? (o += 2) : ++o,
                  ++s.line,
                  (s.lineStart = o))
                : 92 === l &&
                    34 === a.charCodeAt(o + 1) &&
                    34 === a.charCodeAt(o + 2) &&
                    34 === a.charCodeAt(o + 3)
                  ? ((h += a.slice(c, o) + '"""'), (c = o += 4))
                  : ++o;
          }
          throw E(e, o, "Unterminated string.");
        }
        function Y(e) {
          return e >= 48 && e <= 57
            ? e - 48
            : e >= 65 && e <= 70
              ? e - 55
              : e >= 97 && e <= 102
                ? e - 87
                : -1;
        }
        function z(e, t, i, r, n) {
          for (
            var s = e.body, a = s.length, o = t + 1, c = 0;
            o !== a &&
            !isNaN((c = s.charCodeAt(o))) &&
            (95 === c ||
              (c >= 48 && c <= 57) ||
              (c >= 65 && c <= 90) ||
              (c >= 97 && c <= 122));

          )
            ++o;
          return new T(O.NAME, t, o, i, r, n, s.slice(t, o));
        }
        var K = (function () {
          function e(e, t) {
            var i = (function (e) {
              return e instanceof x;
            })(e)
              ? e
              : new x(e);
            ((this._lexer = new F(i)), (this._options = t));
          }
          var t = e.prototype;
          return (
            (t.parseName = function () {
              var e = this.expectToken(O.NAME);
              return { kind: P.NAME, value: e.value, loc: this.loc(e) };
            }),
            (t.parseDocument = function () {
              var e = this._lexer.token;
              return {
                kind: P.DOCUMENT,
                definitions: this.many(O.SOF, this.parseDefinition, O.EOF),
                loc: this.loc(e),
              };
            }),
            (t.parseDefinition = function () {
              if (this.peek(O.NAME))
                switch (this._lexer.token.value) {
                  case "query":
                  case "mutation":
                  case "subscription":
                    return this.parseOperationDefinition();
                  case "fragment":
                    return this.parseFragmentDefinition();
                  case "schema":
                  case "scalar":
                  case "type":
                  case "interface":
                  case "union":
                  case "enum":
                  case "input":
                  case "directive":
                    return this.parseTypeSystemDefinition();
                  case "extend":
                    return this.parseTypeSystemExtension();
                }
              else {
                if (this.peek(O.BRACE_L))
                  return this.parseOperationDefinition();
                if (this.peekDescription())
                  return this.parseTypeSystemDefinition();
              }
              throw this.unexpected();
            }),
            (t.parseOperationDefinition = function () {
              var e = this._lexer.token;
              if (this.peek(O.BRACE_L))
                return {
                  kind: P.OPERATION_DEFINITION,
                  operation: "query",
                  name: void 0,
                  variableDefinitions: [],
                  directives: [],
                  selectionSet: this.parseSelectionSet(),
                  loc: this.loc(e),
                };
              var t,
                i = this.parseOperationType();
              return (
                this.peek(O.NAME) && (t = this.parseName()),
                {
                  kind: P.OPERATION_DEFINITION,
                  operation: i,
                  name: t,
                  variableDefinitions: this.parseVariableDefinitions(),
                  directives: this.parseDirectives(!1),
                  selectionSet: this.parseSelectionSet(),
                  loc: this.loc(e),
                }
              );
            }),
            (t.parseOperationType = function () {
              var e = this.expectToken(O.NAME);
              switch (e.value) {
                case "query":
                  return "query";
                case "mutation":
                  return "mutation";
                case "subscription":
                  return "subscription";
              }
              throw this.unexpected(e);
            }),
            (t.parseVariableDefinitions = function () {
              return this.optionalMany(
                O.PAREN_L,
                this.parseVariableDefinition,
                O.PAREN_R,
              );
            }),
            (t.parseVariableDefinition = function () {
              var e = this._lexer.token;
              return {
                kind: P.VARIABLE_DEFINITION,
                variable: this.parseVariable(),
                type: (this.expectToken(O.COLON), this.parseTypeReference()),
                defaultValue: this.expectOptionalToken(O.EQUALS)
                  ? this.parseValueLiteral(!0)
                  : void 0,
                directives: this.parseDirectives(!0),
                loc: this.loc(e),
              };
            }),
            (t.parseVariable = function () {
              var e = this._lexer.token;
              return (
                this.expectToken(O.DOLLAR),
                { kind: P.VARIABLE, name: this.parseName(), loc: this.loc(e) }
              );
            }),
            (t.parseSelectionSet = function () {
              var e = this._lexer.token;
              return {
                kind: P.SELECTION_SET,
                selections: this.many(
                  O.BRACE_L,
                  this.parseSelection,
                  O.BRACE_R,
                ),
                loc: this.loc(e),
              };
            }),
            (t.parseSelection = function () {
              return this.peek(O.SPREAD)
                ? this.parseFragment()
                : this.parseField();
            }),
            (t.parseField = function () {
              var e,
                t,
                i = this._lexer.token,
                r = this.parseName();
              return (
                this.expectOptionalToken(O.COLON)
                  ? ((e = r), (t = this.parseName()))
                  : (t = r),
                {
                  kind: P.FIELD,
                  alias: e,
                  name: t,
                  arguments: this.parseArguments(!1),
                  directives: this.parseDirectives(!1),
                  selectionSet: this.peek(O.BRACE_L)
                    ? this.parseSelectionSet()
                    : void 0,
                  loc: this.loc(i),
                }
              );
            }),
            (t.parseArguments = function (e) {
              var t = e ? this.parseConstArgument : this.parseArgument;
              return this.optionalMany(O.PAREN_L, t, O.PAREN_R);
            }),
            (t.parseArgument = function () {
              var e = this._lexer.token,
                t = this.parseName();
              return (
                this.expectToken(O.COLON),
                {
                  kind: P.ARGUMENT,
                  name: t,
                  value: this.parseValueLiteral(!1),
                  loc: this.loc(e),
                }
              );
            }),
            (t.parseConstArgument = function () {
              var e = this._lexer.token;
              return {
                kind: P.ARGUMENT,
                name: this.parseName(),
                value: (this.expectToken(O.COLON), this.parseValueLiteral(!0)),
                loc: this.loc(e),
              };
            }),
            (t.parseFragment = function () {
              var e = this._lexer.token;
              this.expectToken(O.SPREAD);
              var t = this.expectOptionalKeyword("on");
              return !t && this.peek(O.NAME)
                ? {
                    kind: P.FRAGMENT_SPREAD,
                    name: this.parseFragmentName(),
                    directives: this.parseDirectives(!1),
                    loc: this.loc(e),
                  }
                : {
                    kind: P.INLINE_FRAGMENT,
                    typeCondition: t ? this.parseNamedType() : void 0,
                    directives: this.parseDirectives(!1),
                    selectionSet: this.parseSelectionSet(),
                    loc: this.loc(e),
                  };
            }),
            (t.parseFragmentDefinition = function () {
              var e,
                t = this._lexer.token;
              return (
                this.expectKeyword("fragment"),
                !0 ===
                (null === (e = this._options) || void 0 === e
                  ? void 0
                  : e.experimentalFragmentVariables)
                  ? {
                      kind: P.FRAGMENT_DEFINITION,
                      name: this.parseFragmentName(),
                      variableDefinitions: this.parseVariableDefinitions(),
                      typeCondition:
                        (this.expectKeyword("on"), this.parseNamedType()),
                      directives: this.parseDirectives(!1),
                      selectionSet: this.parseSelectionSet(),
                      loc: this.loc(t),
                    }
                  : {
                      kind: P.FRAGMENT_DEFINITION,
                      name: this.parseFragmentName(),
                      typeCondition:
                        (this.expectKeyword("on"), this.parseNamedType()),
                      directives: this.parseDirectives(!1),
                      selectionSet: this.parseSelectionSet(),
                      loc: this.loc(t),
                    }
              );
            }),
            (t.parseFragmentName = function () {
              if ("on" === this._lexer.token.value) throw this.unexpected();
              return this.parseName();
            }),
            (t.parseValueLiteral = function (e) {
              var t = this._lexer.token;
              switch (t.kind) {
                case O.BRACKET_L:
                  return this.parseList(e);
                case O.BRACE_L:
                  return this.parseObject(e);
                case O.INT:
                  return (
                    this._lexer.advance(),
                    { kind: P.INT, value: t.value, loc: this.loc(t) }
                  );
                case O.FLOAT:
                  return (
                    this._lexer.advance(),
                    { kind: P.FLOAT, value: t.value, loc: this.loc(t) }
                  );
                case O.STRING:
                case O.BLOCK_STRING:
                  return this.parseStringLiteral();
                case O.NAME:
                  switch ((this._lexer.advance(), t.value)) {
                    case "true":
                      return { kind: P.BOOLEAN, value: !0, loc: this.loc(t) };
                    case "false":
                      return { kind: P.BOOLEAN, value: !1, loc: this.loc(t) };
                    case "null":
                      return { kind: P.NULL, loc: this.loc(t) };
                    default:
                      return { kind: P.ENUM, value: t.value, loc: this.loc(t) };
                  }
                case O.DOLLAR:
                  if (!e) return this.parseVariable();
              }
              throw this.unexpected();
            }),
            (t.parseStringLiteral = function () {
              var e = this._lexer.token;
              return (
                this._lexer.advance(),
                {
                  kind: P.STRING,
                  value: e.value,
                  block: e.kind === O.BLOCK_STRING,
                  loc: this.loc(e),
                }
              );
            }),
            (t.parseList = function (e) {
              var t = this,
                i = this._lexer.token;
              return {
                kind: P.LIST,
                values: this.any(
                  O.BRACKET_L,
                  function () {
                    return t.parseValueLiteral(e);
                  },
                  O.BRACKET_R,
                ),
                loc: this.loc(i),
              };
            }),
            (t.parseObject = function (e) {
              var t = this,
                i = this._lexer.token;
              return {
                kind: P.OBJECT,
                fields: this.any(
                  O.BRACE_L,
                  function () {
                    return t.parseObjectField(e);
                  },
                  O.BRACE_R,
                ),
                loc: this.loc(i),
              };
            }),
            (t.parseObjectField = function (e) {
              var t = this._lexer.token,
                i = this.parseName();
              return (
                this.expectToken(O.COLON),
                {
                  kind: P.OBJECT_FIELD,
                  name: i,
                  value: this.parseValueLiteral(e),
                  loc: this.loc(t),
                }
              );
            }),
            (t.parseDirectives = function (e) {
              for (var t = []; this.peek(O.AT); )
                t.push(this.parseDirective(e));
              return t;
            }),
            (t.parseDirective = function (e) {
              var t = this._lexer.token;
              return (
                this.expectToken(O.AT),
                {
                  kind: P.DIRECTIVE,
                  name: this.parseName(),
                  arguments: this.parseArguments(e),
                  loc: this.loc(t),
                }
              );
            }),
            (t.parseTypeReference = function () {
              var e,
                t = this._lexer.token;
              return (
                this.expectOptionalToken(O.BRACKET_L)
                  ? ((e = this.parseTypeReference()),
                    this.expectToken(O.BRACKET_R),
                    (e = { kind: P.LIST_TYPE, type: e, loc: this.loc(t) }))
                  : (e = this.parseNamedType()),
                this.expectOptionalToken(O.BANG)
                  ? { kind: P.NON_NULL_TYPE, type: e, loc: this.loc(t) }
                  : e
              );
            }),
            (t.parseNamedType = function () {
              var e = this._lexer.token;
              return {
                kind: P.NAMED_TYPE,
                name: this.parseName(),
                loc: this.loc(e),
              };
            }),
            (t.parseTypeSystemDefinition = function () {
              var e = this.peekDescription()
                ? this._lexer.lookahead()
                : this._lexer.token;
              if (e.kind === O.NAME)
                switch (e.value) {
                  case "schema":
                    return this.parseSchemaDefinition();
                  case "scalar":
                    return this.parseScalarTypeDefinition();
                  case "type":
                    return this.parseObjectTypeDefinition();
                  case "interface":
                    return this.parseInterfaceTypeDefinition();
                  case "union":
                    return this.parseUnionTypeDefinition();
                  case "enum":
                    return this.parseEnumTypeDefinition();
                  case "input":
                    return this.parseInputObjectTypeDefinition();
                  case "directive":
                    return this.parseDirectiveDefinition();
                }
              throw this.unexpected(e);
            }),
            (t.peekDescription = function () {
              return this.peek(O.STRING) || this.peek(O.BLOCK_STRING);
            }),
            (t.parseDescription = function () {
              if (this.peekDescription()) return this.parseStringLiteral();
            }),
            (t.parseSchemaDefinition = function () {
              var e = this._lexer.token,
                t = this.parseDescription();
              this.expectKeyword("schema");
              var i = this.parseDirectives(!0),
                r = this.many(
                  O.BRACE_L,
                  this.parseOperationTypeDefinition,
                  O.BRACE_R,
                );
              return {
                kind: P.SCHEMA_DEFINITION,
                description: t,
                directives: i,
                operationTypes: r,
                loc: this.loc(e),
              };
            }),
            (t.parseOperationTypeDefinition = function () {
              var e = this._lexer.token,
                t = this.parseOperationType();
              this.expectToken(O.COLON);
              var i = this.parseNamedType();
              return {
                kind: P.OPERATION_TYPE_DEFINITION,
                operation: t,
                type: i,
                loc: this.loc(e),
              };
            }),
            (t.parseScalarTypeDefinition = function () {
              var e = this._lexer.token,
                t = this.parseDescription();
              this.expectKeyword("scalar");
              var i = this.parseName(),
                r = this.parseDirectives(!0);
              return {
                kind: P.SCALAR_TYPE_DEFINITION,
                description: t,
                name: i,
                directives: r,
                loc: this.loc(e),
              };
            }),
            (t.parseObjectTypeDefinition = function () {
              var e = this._lexer.token,
                t = this.parseDescription();
              this.expectKeyword("type");
              var i = this.parseName(),
                r = this.parseImplementsInterfaces(),
                n = this.parseDirectives(!0),
                s = this.parseFieldsDefinition();
              return {
                kind: P.OBJECT_TYPE_DEFINITION,
                description: t,
                name: i,
                interfaces: r,
                directives: n,
                fields: s,
                loc: this.loc(e),
              };
            }),
            (t.parseImplementsInterfaces = function () {
              var e;
              if (!this.expectOptionalKeyword("implements")) return [];
              if (
                !0 ===
                (null === (e = this._options) || void 0 === e
                  ? void 0
                  : e.allowLegacySDLImplementsInterfaces)
              ) {
                var t = [];
                this.expectOptionalToken(O.AMP);
                do {
                  t.push(this.parseNamedType());
                } while (this.expectOptionalToken(O.AMP) || this.peek(O.NAME));
                return t;
              }
              return this.delimitedMany(O.AMP, this.parseNamedType);
            }),
            (t.parseFieldsDefinition = function () {
              var e;
              return !0 ===
                (null === (e = this._options) || void 0 === e
                  ? void 0
                  : e.allowLegacySDLEmptyFields) &&
                this.peek(O.BRACE_L) &&
                this._lexer.lookahead().kind === O.BRACE_R
                ? (this._lexer.advance(), this._lexer.advance(), [])
                : this.optionalMany(
                    O.BRACE_L,
                    this.parseFieldDefinition,
                    O.BRACE_R,
                  );
            }),
            (t.parseFieldDefinition = function () {
              var e = this._lexer.token,
                t = this.parseDescription(),
                i = this.parseName(),
                r = this.parseArgumentDefs();
              this.expectToken(O.COLON);
              var n = this.parseTypeReference(),
                s = this.parseDirectives(!0);
              return {
                kind: P.FIELD_DEFINITION,
                description: t,
                name: i,
                arguments: r,
                type: n,
                directives: s,
                loc: this.loc(e),
              };
            }),
            (t.parseArgumentDefs = function () {
              return this.optionalMany(
                O.PAREN_L,
                this.parseInputValueDef,
                O.PAREN_R,
              );
            }),
            (t.parseInputValueDef = function () {
              var e = this._lexer.token,
                t = this.parseDescription(),
                i = this.parseName();
              this.expectToken(O.COLON);
              var r,
                n = this.parseTypeReference();
              this.expectOptionalToken(O.EQUALS) &&
                (r = this.parseValueLiteral(!0));
              var s = this.parseDirectives(!0);
              return {
                kind: P.INPUT_VALUE_DEFINITION,
                description: t,
                name: i,
                type: n,
                defaultValue: r,
                directives: s,
                loc: this.loc(e),
              };
            }),
            (t.parseInterfaceTypeDefinition = function () {
              var e = this._lexer.token,
                t = this.parseDescription();
              this.expectKeyword("interface");
              var i = this.parseName(),
                r = this.parseImplementsInterfaces(),
                n = this.parseDirectives(!0),
                s = this.parseFieldsDefinition();
              return {
                kind: P.INTERFACE_TYPE_DEFINITION,
                description: t,
                name: i,
                interfaces: r,
                directives: n,
                fields: s,
                loc: this.loc(e),
              };
            }),
            (t.parseUnionTypeDefinition = function () {
              var e = this._lexer.token,
                t = this.parseDescription();
              this.expectKeyword("union");
              var i = this.parseName(),
                r = this.parseDirectives(!0),
                n = this.parseUnionMemberTypes();
              return {
                kind: P.UNION_TYPE_DEFINITION,
                description: t,
                name: i,
                directives: r,
                types: n,
                loc: this.loc(e),
              };
            }),
            (t.parseUnionMemberTypes = function () {
              return this.expectOptionalToken(O.EQUALS)
                ? this.delimitedMany(O.PIPE, this.parseNamedType)
                : [];
            }),
            (t.parseEnumTypeDefinition = function () {
              var e = this._lexer.token,
                t = this.parseDescription();
              this.expectKeyword("enum");
              var i = this.parseName(),
                r = this.parseDirectives(!0),
                n = this.parseEnumValuesDefinition();
              return {
                kind: P.ENUM_TYPE_DEFINITION,
                description: t,
                name: i,
                directives: r,
                values: n,
                loc: this.loc(e),
              };
            }),
            (t.parseEnumValuesDefinition = function () {
              return this.optionalMany(
                O.BRACE_L,
                this.parseEnumValueDefinition,
                O.BRACE_R,
              );
            }),
            (t.parseEnumValueDefinition = function () {
              var e = this._lexer.token,
                t = this.parseDescription(),
                i = this.parseName(),
                r = this.parseDirectives(!0);
              return {
                kind: P.ENUM_VALUE_DEFINITION,
                description: t,
                name: i,
                directives: r,
                loc: this.loc(e),
              };
            }),
            (t.parseInputObjectTypeDefinition = function () {
              var e = this._lexer.token,
                t = this.parseDescription();
              this.expectKeyword("input");
              var i = this.parseName(),
                r = this.parseDirectives(!0),
                n = this.parseInputFieldsDefinition();
              return {
                kind: P.INPUT_OBJECT_TYPE_DEFINITION,
                description: t,
                name: i,
                directives: r,
                fields: n,
                loc: this.loc(e),
              };
            }),
            (t.parseInputFieldsDefinition = function () {
              return this.optionalMany(
                O.BRACE_L,
                this.parseInputValueDef,
                O.BRACE_R,
              );
            }),
            (t.parseTypeSystemExtension = function () {
              var e = this._lexer.lookahead();
              if (e.kind === O.NAME)
                switch (e.value) {
                  case "schema":
                    return this.parseSchemaExtension();
                  case "scalar":
                    return this.parseScalarTypeExtension();
                  case "type":
                    return this.parseObjectTypeExtension();
                  case "interface":
                    return this.parseInterfaceTypeExtension();
                  case "union":
                    return this.parseUnionTypeExtension();
                  case "enum":
                    return this.parseEnumTypeExtension();
                  case "input":
                    return this.parseInputObjectTypeExtension();
                }
              throw this.unexpected(e);
            }),
            (t.parseSchemaExtension = function () {
              var e = this._lexer.token;
              (this.expectKeyword("extend"), this.expectKeyword("schema"));
              var t = this.parseDirectives(!0),
                i = this.optionalMany(
                  O.BRACE_L,
                  this.parseOperationTypeDefinition,
                  O.BRACE_R,
                );
              if (0 === t.length && 0 === i.length) throw this.unexpected();
              return {
                kind: P.SCHEMA_EXTENSION,
                directives: t,
                operationTypes: i,
                loc: this.loc(e),
              };
            }),
            (t.parseScalarTypeExtension = function () {
              var e = this._lexer.token;
              (this.expectKeyword("extend"), this.expectKeyword("scalar"));
              var t = this.parseName(),
                i = this.parseDirectives(!0);
              if (0 === i.length) throw this.unexpected();
              return {
                kind: P.SCALAR_TYPE_EXTENSION,
                name: t,
                directives: i,
                loc: this.loc(e),
              };
            }),
            (t.parseObjectTypeExtension = function () {
              var e = this._lexer.token;
              (this.expectKeyword("extend"), this.expectKeyword("type"));
              var t = this.parseName(),
                i = this.parseImplementsInterfaces(),
                r = this.parseDirectives(!0),
                n = this.parseFieldsDefinition();
              if (0 === i.length && 0 === r.length && 0 === n.length)
                throw this.unexpected();
              return {
                kind: P.OBJECT_TYPE_EXTENSION,
                name: t,
                interfaces: i,
                directives: r,
                fields: n,
                loc: this.loc(e),
              };
            }),
            (t.parseInterfaceTypeExtension = function () {
              var e = this._lexer.token;
              (this.expectKeyword("extend"), this.expectKeyword("interface"));
              var t = this.parseName(),
                i = this.parseImplementsInterfaces(),
                r = this.parseDirectives(!0),
                n = this.parseFieldsDefinition();
              if (0 === i.length && 0 === r.length && 0 === n.length)
                throw this.unexpected();
              return {
                kind: P.INTERFACE_TYPE_EXTENSION,
                name: t,
                interfaces: i,
                directives: r,
                fields: n,
                loc: this.loc(e),
              };
            }),
            (t.parseUnionTypeExtension = function () {
              var e = this._lexer.token;
              (this.expectKeyword("extend"), this.expectKeyword("union"));
              var t = this.parseName(),
                i = this.parseDirectives(!0),
                r = this.parseUnionMemberTypes();
              if (0 === i.length && 0 === r.length) throw this.unexpected();
              return {
                kind: P.UNION_TYPE_EXTENSION,
                name: t,
                directives: i,
                types: r,
                loc: this.loc(e),
              };
            }),
            (t.parseEnumTypeExtension = function () {
              var e = this._lexer.token;
              (this.expectKeyword("extend"), this.expectKeyword("enum"));
              var t = this.parseName(),
                i = this.parseDirectives(!0),
                r = this.parseEnumValuesDefinition();
              if (0 === i.length && 0 === r.length) throw this.unexpected();
              return {
                kind: P.ENUM_TYPE_EXTENSION,
                name: t,
                directives: i,
                values: r,
                loc: this.loc(e),
              };
            }),
            (t.parseInputObjectTypeExtension = function () {
              var e = this._lexer.token;
              (this.expectKeyword("extend"), this.expectKeyword("input"));
              var t = this.parseName(),
                i = this.parseDirectives(!0),
                r = this.parseInputFieldsDefinition();
              if (0 === i.length && 0 === r.length) throw this.unexpected();
              return {
                kind: P.INPUT_OBJECT_TYPE_EXTENSION,
                name: t,
                directives: i,
                fields: r,
                loc: this.loc(e),
              };
            }),
            (t.parseDirectiveDefinition = function () {
              var e = this._lexer.token,
                t = this.parseDescription();
              (this.expectKeyword("directive"), this.expectToken(O.AT));
              var i = this.parseName(),
                r = this.parseArgumentDefs(),
                n = this.expectOptionalKeyword("repeatable");
              this.expectKeyword("on");
              var s = this.parseDirectiveLocations();
              return {
                kind: P.DIRECTIVE_DEFINITION,
                description: t,
                name: i,
                arguments: r,
                repeatable: n,
                locations: s,
                loc: this.loc(e),
              };
            }),
            (t.parseDirectiveLocations = function () {
              return this.delimitedMany(O.PIPE, this.parseDirectiveLocation);
            }),
            (t.parseDirectiveLocation = function () {
              var e = this._lexer.token,
                t = this.parseName();
              if (void 0 !== N[t.value]) return t;
              throw this.unexpected(e);
            }),
            (t.loc = function (e) {
              var t;
              if (
                !0 !==
                (null === (t = this._options) || void 0 === t
                  ? void 0
                  : t.noLocation)
              )
                return new A(e, this._lexer.lastToken, this._lexer.source);
            }),
            (t.peek = function (e) {
              return this._lexer.token.kind === e;
            }),
            (t.expectToken = function (e) {
              var t = this._lexer.token;
              if (t.kind === e) return (this._lexer.advance(), t);
              throw E(
                this._lexer.source,
                t.start,
                "Expected ".concat(Z(e), ", found ").concat(J(t), "."),
              );
            }),
            (t.expectOptionalToken = function (e) {
              var t = this._lexer.token;
              if (t.kind === e) return (this._lexer.advance(), t);
            }),
            (t.expectKeyword = function (e) {
              var t = this._lexer.token;
              if (t.kind !== O.NAME || t.value !== e)
                throw E(
                  this._lexer.source,
                  t.start,
                  'Expected "'.concat(e, '", found ').concat(J(t), "."),
                );
              this._lexer.advance();
            }),
            (t.expectOptionalKeyword = function (e) {
              var t = this._lexer.token;
              return (
                t.kind === O.NAME &&
                t.value === e &&
                (this._lexer.advance(), !0)
              );
            }),
            (t.unexpected = function (e) {
              var t = null != e ? e : this._lexer.token;
              return E(
                this._lexer.source,
                t.start,
                "Unexpected ".concat(J(t), "."),
              );
            }),
            (t.any = function (e, t, i) {
              this.expectToken(e);
              for (var r = []; !this.expectOptionalToken(i); )
                r.push(t.call(this));
              return r;
            }),
            (t.optionalMany = function (e, t, i) {
              if (this.expectOptionalToken(e)) {
                var r = [];
                do {
                  r.push(t.call(this));
                } while (!this.expectOptionalToken(i));
                return r;
              }
              return [];
            }),
            (t.many = function (e, t, i) {
              this.expectToken(e);
              var r = [];
              do {
                r.push(t.call(this));
              } while (!this.expectOptionalToken(i));
              return r;
            }),
            (t.delimitedMany = function (e, t) {
              this.expectOptionalToken(e);
              var i = [];
              do {
                i.push(t.call(this));
              } while (this.expectOptionalToken(e));
              return i;
            }),
            e
          );
        })();
        function J(e) {
          var t = e.value;
          return Z(e.kind) + (null != t ? ' "'.concat(t, '"') : "");
        }
        function Z(e) {
          return (function (e) {
            return (
              e === O.BANG ||
              e === O.DOLLAR ||
              e === O.AMP ||
              e === O.PAREN_L ||
              e === O.PAREN_R ||
              e === O.SPREAD ||
              e === O.COLON ||
              e === O.EQUALS ||
              e === O.AT ||
              e === O.BRACKET_L ||
              e === O.BRACKET_R ||
              e === O.BRACE_L ||
              e === O.PIPE ||
              e === O.BRACE_R
            );
          })(e)
            ? '"'.concat(e, '"')
            : e;
        }
        function X(e) {
          return (X =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        var H = new Map(),
          Q = new Map(),
          ee = !0,
          te = !1;
        function ie(e) {
          return e.replace(/[\s,]+/g, " ").trim();
        }
        function re(e) {
          var t,
            i,
            n,
            s = ie(e);
          if (!H.has(s)) {
            var a = (function (e, t) {
              return new K(e, t).parseDocument();
            })(e, { experimentalFragmentVariables: te });
            if (!a || "Document" !== a.kind)
              throw new Error("Not a valid GraphQL document.");
            H.set(
              s,
              (function (e) {
                var t = new Set(e.definitions);
                t.forEach(function (e) {
                  (e.loc && delete e.loc,
                    Object.keys(e).forEach(function (i) {
                      var r = e[i];
                      r && "object" === X(r) && t.add(r);
                    }));
                });
                var i = e.loc;
                return (i && (delete i.startToken, delete i.endToken), e);
              })(
                ((t = a),
                (i = new Set()),
                (n = []),
                t.definitions.forEach(function (e) {
                  if ("FragmentDefinition" === e.kind) {
                    var t = e.name.value,
                      r = ie((a = e.loc).source.body.substring(a.start, a.end)),
                      s = Q.get(t);
                    (s && !s.has(r)
                      ? ee &&
                        console.warn(
                          "Warning: fragment with name " +
                            t +
                            " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names",
                        )
                      : s || Q.set(t, (s = new Set())),
                      s.add(r),
                      i.has(r) || (i.add(r), n.push(e)));
                  } else n.push(e);
                  var a;
                }),
                r(r({}, t), { definitions: n })),
              ),
            );
          }
          return H.get(s);
        }
        function ne(e) {
          for (var t = [], i = 1; i < arguments.length; i++)
            t[i - 1] = arguments[i];
          "string" == typeof e && (e = [e]);
          var r = e[0];
          return (
            t.forEach(function (t, i) {
              (t && "Document" === t.kind ? (r += t.loc.source.body) : (r += t),
                (r += e[i + 1]));
            }),
            re(r)
          );
        }
        var se,
          ae = ne;
        (((se = ne || (ne = {})).gql = ae),
          (se.resetCaches = function () {
            (H.clear(), Q.clear());
          }),
          (se.disableFragmentWarnings = function () {
            ee = !1;
          }),
          (se.enableExperimentalFragmentVariables = function () {
            te = !0;
          }),
          (se.disableExperimentalFragmentVariables = function () {
            te = !1;
          }),
          (ne.default = ne));
        const oe = ne;
        var ce,
          le,
          he,
          ue,
          de,
          pe,
          fe,
          ve,
          ye,
          me,
          ge,
          we,
          be,
          Ee,
          Pe,
          Se,
          _e,
          Ae,
          Te,
          Oe,
          Ce,
          Re,
          ke,
          Ie,
          De,
          xe,
          Ne,
          Me,
          Le,
          Fe,
          je,
          Ue,
          Ge,
          Be,
          $e,
          Ve,
          We,
          qe,
          Ye,
          ze,
          Ke,
          Je,
          Ze,
          Xe,
          He,
          Qe,
          et,
          tt,
          it,
          rt,
          nt,
          st,
          at,
          ot,
          ct,
          lt,
          ht,
          ut,
          dt,
          pt,
          ft,
          vt,
          yt,
          mt,
          gt,
          wt,
          bt,
          Et,
          Pt,
          St,
          _t,
          At,
          Tt,
          Ot,
          Ct,
          Rt,
          kt,
          It,
          Dt,
          xt,
          Nt,
          Mt,
          Lt,
          Ft,
          jt,
          Ut,
          Gt,
          Bt,
          $t,
          Vt,
          Wt,
          qt,
          Yt,
          zt,
          Kt,
          Jt,
          Zt,
          Xt,
          Ht,
          Qt;
        (!(function (e) {
          ((e.UnlockPlayerAchievement = "UnlockPlayerAchievement"),
            (e.PlayerSetAchievementProgress = "PlayerSetAchievementProgress"),
            (e.FetchPlayerAchievements = "FetchPlayerAchievements"),
            (e.SyncPlayer = "SyncPlayer"),
            (e.GetPlayer = "GetPlayer"),
            (e.GetPlayerLoginStatus = "GetPlayerLoginStatus"),
            (e.FetchPlayerFields = "FetchPlayerFields"),
            (e.CheckPlayerCode = "CheckPlayerCode"),
            (e.PlayerFetchPlayers = "PlayerFetchPlayers"),
            (e.SyncPlayerPurchases = "SyncPlayerPurchases"),
            (e.PurchasePlayerPurchase = "PurchasePlayerPurchase"),
            (e.ConsumePlayerPurchase = "ConsumePlayerPurchase"),
            (e.UnsubscribePlayerSubscription = "UnsubscribePlayerSubscription"),
            (e.ResumePlayerSubscription = "ResumePlayerSubscription"),
            (e.FetchPlayerPurchases = "FetchPlayerPurchases"),
            (e.FindPlayerPurchase = "FindPlayerPurchase"),
            (e.PlayerGetPaymentLink = "PlayerGetPaymentLink"),
            (e.FetchPlayerProjectVariables = "FetchPlayerProjectVariables"),
            (e.FetchPlayerProjectConfig = "FetchPlayerProjectConfig"),
            (e.GivePlayerReward = "GivePlayerReward"),
            (e.FetchPlayerRewards = "FetchPlayerRewards"),
            (e.PlayerPublishRecord = "PlayerPublishRecord"),
            (e.FetchTop = "FetchTop"),
            (e.FetchPlayerRating = "FetchPlayerRating"),
            (e.UploadPlayerImage = "UploadPlayerImage"),
            (e.FetchPlayerImages = "FetchPlayerImages"),
            (e.UploadPlayerFile = "UploadPlayerFile"),
            (e.FetchPlayerFiles = "FetchPlayerFiles"),
            (e.FetchPlayerGamesCollection = "FetchPlayerGamesCollection"),
            (e.PlayerJoinEvent = "PlayerJoinEvent"),
            (e.PlayerRegisterOnScheduler = "PlayerRegisterOnScheduler"),
            (e.FetchPlayerDocument = "FetchPlayerDocument"),
            (e.PlayerCreateChannel = "PlayerCreateChannel"),
            (e.PlayerUpdateChannel = "PlayerUpdateChannel"),
            (e.PlayerDeleteChannel = "PlayerDeleteChannel"),
            (e.PlayerMutePlayerInChannel = "PlayerMutePlayerInChannel"),
            (e.PlayerUnmutePlayerInChannel = "PlayerUnmutePlayerInChannel"),
            (e.PlayerSendPersonalMessage = "PlayerSendPersonalMessage"),
            (e.PlayerSendFeedMessage = "PlayerSendFeedMessage"),
            (e.PlayerSendMessage = "PlayerSendMessage"),
            (e.PlayerEditMessage = "PlayerEditMessage"),
            (e.PlayerDeleteMessage = "PlayerDeleteMessage"),
            (e.PlayerFetchChannelMessages = "PlayerFetchChannelMessages"),
            (e.PlayerFetchPersonalMessages = "PlayerFetchPersonalMessages"),
            (e.PlayerFetchFeedMessages = "PlayerFetchFeedMessages"),
            (e.PlayerKickFromChannel = "PlayerKickFromChannel"),
            (e.PlayerFetchChannelMembers = "PlayerFetchChannelMembers"),
            (e.PlayerJoinChannel = "PlayerJoinChannel"),
            (e.PlayerLeaveChannel = "PlayerLeaveChannel"),
            (e.PlayerCancelJoinChannel = "PlayerCancelJoinChannel"),
            (e.PlayerAcceptJoinRequestToChannel =
              "PlayerAcceptJoinRequestToChannel"),
            (e.PlayerRejectJoinRequestToChannel =
              "PlayerRejectJoinRequestToChannel"),
            (e.PlayerFetchChannelJoinRequests =
              "PlayerFetchChannelJoinRequests"),
            (e.PlayerFetchSentJoinRequests = "PlayerFetchSentJoinRequests"),
            (e.PlayerSendInviteToChannel = "PlayerSendInviteToChannel"),
            (e.PlayerCancelInviteToChannel = "PlayerCancelInviteToChannel"),
            (e.PlayerAcceptInviteToChannel = "PlayerAcceptInviteToChannel"),
            (e.PlayerRejectInviteToChannel = "PlayerRejectInviteToChannel"),
            (e.PlayerFetchChannelInvites = "PlayerFetchChannelInvites"),
            (e.PlayerFetchPlayerSentInvites = "PlayerFetchPlayerSentInvites"),
            (e.PlayerFetchPlayerInvites = "PlayerFetchPlayerInvites"),
            (e.CheckPlayerUniqueValue = "CheckPlayerUniqueValue"),
            (e.RegisterPlayerUniqueValue = "RegisterPlayerUniqueValue"),
            (e.DeletePlayerUniqueValue = "DeletePlayerUniqueValue"),
            (e.CreateAchievement = "CreateAchievement"),
            (e.UpdateAchievement = "UpdateAchievement"),
            (e.DeleteAchievement = "DeleteAchievement"),
            (e.CreateAchievementsGroup = "CreateAchievementsGroup"),
            (e.UpdateAchievementsGroup = "UpdateAchievementsGroup"),
            (e.DeleteAchievementsGroup = "DeleteAchievementsGroup"),
            (e.AddAchievementToPlayer = "AddAchievementToPlayer"),
            (e.RemoveAchievementFromPlayer = "RemoveAchievementFromPlayer"),
            (e.FetchAchievements = "FetchAchievements"),
            (e.FetchAchievementsGroups = "FetchAchievementsGroups"),
            (e.FetchPlayersAchievements = "FetchPlayersAchievements"),
            (e.FetchAdminPlayerAchievements = "FetchAdminPlayerAchievements"),
            (e.FetchAchievementStats = "FetchAchievementStats"),
            (e.FetchChannelInvites = "FetchChannelInvites"),
            (e.SendInviteToChannel = "SendInviteToChannel"),
            (e.CancelInviteToChannel = "CancelInviteToChannel"),
            (e.FetchChannelJoinRequests = "FetchChannelJoinRequests"),
            (e.RejectJoinRequestToChannel = "RejectJoinRequestToChannel"),
            (e.FetchChannelMembers = "FetchChannelMembers"),
            (e.KickFromChannel = "KickFromChannel"),
            (e.AddToChannel = "AddToChannel"),
            (e.FetchChannelMessages = "FetchChannelMessages"),
            (e.FetchPrivateMessages = "FetchPrivateMessages"),
            (e.FetchFeedMessages = "FetchFeedMessages"),
            (e.CreateChannelMessage = "CreateChannelMessage"),
            (e.UpdateChannelMessage = "UpdateChannelMessage"),
            (e.DeleteChannelMessage = "DeleteChannelMessage"),
            (e.SendPersonalMessage = "SendPersonalMessage"),
            (e.SendFeedMessage = "SendFeedMessage"),
            (e.FetchPlayerMute = "FetchPlayerMute"),
            (e.MutePlayerInChannel = "MutePlayerInChannel"),
            (e.UnmutePlayerInChannel = "UnmutePlayerInChannel"),
            (e.FetchChannelTemplate = "FetchChannelTemplate"),
            (e.FetchChannelTemplates = "FetchChannelTemplates"),
            (e.CreateChannelTemplate = "CreateChannelTemplate"),
            (e.UpdateChannelTemplate = "UpdateChannelTemplate"),
            (e.DeleteChannelTemplate = "DeleteChannelTemplate"),
            (e.FetchChannels = "FetchChannels"),
            (e.FetchChannel = "FetchChannel"),
            (e.CreateChannel = "CreateChannel"),
            (e.UpdateChannel = "UpdateChannel"),
            (e.DeleteChannel = "DeleteChannel"),
            (e.FetchDocuments = "FetchDocuments"),
            (e.SaveDocument = "SaveDocument"),
            (e.FetchEvents = "FetchEvents"),
            (e.CheckEventExists = "CheckEventExists"),
            (e.FetchAdminPlayerEvents = "FetchAdminPlayerEvents"),
            (e.FetchEventsStats = "FetchEventsStats"),
            (e.UpsertEvent = "UpsertEvent"),
            (e.DeleteEvent = "DeleteEvent"),
            (e.AddEventToPlayer = "AddEventToPlayer"),
            (e.RemoveEventFromPlayer = "RemoveEventFromPlayer"),
            (e.FetchFiles = "FetchFiles"),
            (e.UploadFile = "UploadFile"),
            (e.UpdateFile = "UpdateFile"),
            (e.DeleteFiles = "DeleteFiles"),
            (e.FetchGamesCollections = "FetchGamesCollections"),
            (e.CreateGamesCollection = "CreateGamesCollection"),
            (e.UpdateGamesCollection = "UpdateGamesCollection"),
            (e.DeleteGamesCollection = "DeleteGamesCollection"),
            (e.FetchImages = "FetchImages"),
            (e.UploadImage = "UploadImage"),
            (e.UpdateImage = "UpdateImage"),
            (e.DeleteImages = "DeleteImages"),
            (e.FetchLeaderboards = "FetchLeaderboards"),
            (e.FetchLeaderboard = "FetchLeaderboard"),
            (e.FetchLeaderboardVariant = "FetchLeaderboardVariant"),
            (e.FetchLeaderboardsVariants = "FetchLeaderboardsVariants"),
            (e.FetchLeaderboardRecords = "FetchLeaderboardRecords"),
            (e.FetchAdminPlayerRecords = "FetchAdminPlayerRecords"),
            (e.CreateLeaderboard = "CreateLeaderboard"),
            (e.UpdateLeaderboard = "UpdateLeaderboard"),
            (e.DeleteLeaderboard = "DeleteLeaderboard"),
            (e.DeleteLeaderboardVariant = "DeleteLeaderboardVariant"),
            (e.UpdateLeaderboardRecord = "UpdateLeaderboardRecord"),
            (e.DeleteLeaderboardRecord = "DeleteLeaderboardRecord"),
            (e.DeleteAdminPlayerRecords = "DeleteAdminPlayerRecords"),
            (e.FetchModel = "FetchModel"),
            (e.FetchModels = "FetchModels"),
            (e.UpdateModel = "UpdateModel"),
            (e.FetchPlatforms = "FetchPlatforms"),
            (e.AddPlatform = "AddPlatform"),
            (e.UpdatePlatform = "UpdatePlatform"),
            (e.UpdatePlatformBanners = "UpdatePlatformBanners"),
            (e.UpdatePlatformAds = "UpdatePlatformAds"),
            (e.DeletePlatform = "DeletePlatform"),
            (e.FindPlayerStateById = "FindPlayerStateByID"),
            (e.FindPlayerById = "FindPlayerByID"),
            (e.FetchPlayers = "FetchPlayers"),
            (e.FetchPlayersReports = "FetchPlayersReports"),
            (e.UpdatePlayer = "UpdatePlayer"),
            (e.DeletePlayer = "DeletePlayer"),
            (e.RestorePlayer = "RestorePlayer"),
            (e.BanPlayer = "BanPlayer"),
            (e.UnbanPlayer = "UnbanPlayer"),
            (e.RestorePlayerFromArchive = "RestorePlayerFromArchive"),
            (e.UpdatePlayerModifiedAt = "UpdatePlayerModifiedAt"),
            (e.FetchPlayersPurchases = "FetchPlayersPurchases"),
            (e.FetchAdminPlayerPurchases = "FetchAdminPlayerPurchases"),
            (e.FetchProducts = "FetchProducts"),
            (e.FetchPlayerPurchasesStats = "FetchPlayerPurchasesStats"),
            (e.GetPlayerPurchase = "GetPlayerPurchase"),
            (e.AddPurchaseToPlayer = "AddPurchaseToPlayer"),
            (e.UpdatePlayerPurchase = "UpdatePlayerPurchase"),
            (e.RemovePurchaseFromPlayer = "RemovePurchaseFromPlayer"),
            (e.CreateProduct = "CreateProduct"),
            (e.UpdateProduct = "UpdateProduct"),
            (e.DeleteProduct = "DeleteProduct"),
            (e.UpsertProjectVariable = "UpsertProjectVariable"),
            (e.DeleteProjectVariable = "DeleteProjectVariable"),
            (e.FetchRewards = "FetchRewards"),
            (e.FetchPlayersRewards = "FetchPlayersRewards"),
            (e.FetchAdminPlayerRewards = "FetchAdminPlayerRewards"),
            (e.CheckRewardExists = "CheckRewardExists"),
            (e.FetchRewardStats = "FetchRewardStats"),
            (e.CreateReward = "CreateReward"),
            (e.UpdateReward = "UpdateReward"),
            (e.DeleteReward = "DeleteReward"),
            (e.AddRewardToPlayer = "AddRewardToPlayer"),
            (e.SubstractRewardFromPlayer = "SubstractRewardFromPlayer"),
            (e.DropRewardsForPlayer = "DropRewardsForPlayer"),
            (e.FetchSchedulers = "FetchSchedulers"),
            (e.FetchSchedulerTriggers = "FetchSchedulerTriggers"),
            (e.CheckSchedulerExists = "CheckSchedulerExists"),
            (e.FetchPlayersSchedulers = "FetchPlayersSchedulers"),
            (e.UpsertScheduler = "UpsertScheduler"),
            (e.SaveSchedulerTriggersOnDay = "SaveSchedulerTriggersOnDay"),
            (e.DeleteScheduler = "DeleteScheduler"),
            (e.AddSchedulerToPlayer = "AddSchedulerToPlayer"),
            (e.RemoveSchedulerFromPlayer = "RemoveSchedulerFromPlayer"),
            (e.UpdatePlayerScheduler = "UpdatePlayerScheduler"),
            (e.FetchSegments = "FetchSegments"),
            (e.CreateSegment = "CreateSegment"),
            (e.UpdateSegment = "UpdateSegment"),
            (e.DeleteSegment = "DeleteSegment"),
            (e.FetchCommonTriggers = "FetchCommonTriggers"),
            (e.FetchAdminPlayerTriggers = "FetchAdminPlayerTriggers"),
            (e.CheckTriggerExists = "CheckTriggerExists"),
            (e.FetchTriggersStats = "FetchTriggersStats"),
            (e.CreateCommonTrigger = "CreateCommonTrigger"),
            (e.UpdateCommonTrigger = "UpdateCommonTrigger"),
            (e.DeleteCommonTrigger = "DeleteCommonTrigger"),
            (e.ActivateTriggerForPlayer = "ActivateTriggerForPlayer"),
            (e.DeactivateTriggerForPlayer = "DeactivateTriggerForPlayer"),
            (e.FetchAdsStats = "FetchAdsStats"),
            (e.FetchDwmStats = "FetchDWMStats"),
            (e.FetchFilesStats = "FetchFilesStats"),
            (e.FetchHostingStats = "FetchHostingStats"),
            (e.FetchImagesStats = "FetchImagesStats"),
            (e.FetchOnlineStats = "FetchOnlineStats"),
            (e.FetchStatsRequests = "FetchStatsRequests"),
            (e.FetchRetentionStats = "FetchRetentionStats"),
            (e.FetchSessionsStats = "FetchSessionsStats"),
            (e.FetchUniqueValues = "FetchUniqueValues"),
            (e.CreateUniqueValue = "CreateUniqueValue"),
            (e.UpdateUniqueValue = "UpdateUniqueValue"),
            (e.DeleteUniqueValue = "DeleteUniqueValue"),
            (e.FetchUniqueValuesRules = "FetchUniqueValuesRules"),
            (e.CreateUniqueValueRule = "CreateUniqueValueRule"),
            (e.UpdateUniqueValueRule = "UpdateUniqueValueRule"),
            (e.DeleteUniqueValueRule = "DeleteUniqueValueRule"),
            (e.PlayerAiCheckCensor = "PlayerAICheckCensor"),
            (e.AiCensor = "AICensor"),
            (e.UploadProjectBuild = "UploadProjectBuild"),
            (e.PublishProjectBuild = "PublishProjectBuild"),
            (e.UnpublishProjectBuild = "UnpublishProjectBuild"),
            (e.CreateDistributionRequest = "CreateDistributionRequest"),
            (e.SendDistributionMessage = "SendDistributionMessage"),
            (e.CommitDistributionChanges = "CommitDistributionChanges"));
        })(ce || (ce = {})),
          (function (e) {
            ((e.Skip = "SKIP"), (e.Analytics = "ANALYTICS"), (e.Ai = "AI"));
          })(le || (le = {})),
          (function (e) {
            ((e.Any = "ANY"),
              (e.Player = "PLAYER"),
              (e.Admin = "ADMIN"),
              (e.Developer = "DEVELOPER"),
              (e.Analytic = "ANALYTIC"),
              (e.ContentManager = "CONTENT_MANAGER"),
              (e.GamePlatform = "GAME_PLATFORM"),
              (e.GamePlatformPlayer = "GAME_PLATFORM_PLAYER"),
              (e.InternalDeveloper = "INTERNAL_DEVELOPER"),
              (e.InternalModerator = "INTERNAL_MODERATOR"),
              (e.InternalApi = "INTERNAL_API"),
              (e.Marketer = "MARKETER"));
          })(he || (he = {})),
          (function (e) {
            ((e.Achievement = "ACHIEVEMENT"),
              (e.Platform = "PLATFORM"),
              (e.Dev = "DEV"),
              (e.Date = "DATE"),
              (e.Project = "PROJECT"));
          })(ue || (ue = {})),
          (function (e) {
            ((e.Achievement = "ACHIEVEMENT"),
              (e.Platform = "PLATFORM"),
              (e.Dev = "DEV"),
              (e.Date = "DATE"),
              (e.Total = "TOTAL"));
          })(de || (de = {})),
          (function (e) {
            ((e.YandexSimpleMonetization = "YandexSimpleMonetization"),
              (e.Adfox = "ADFOX"),
              (e.Advertonic = "ADVERTONIC"),
              (e.Adsense = "ADSENSE"),
              (e.Rtb = "RTB"),
              (e.Gpt = "GPT"),
              (e.Adsgram = "ADSGRAM"),
              (e.Tmads = "TMADS"),
              (e.Adsonar = "ADSONAR"));
          })(pe || (pe = {})),
          (function (e) {
            ((e.External = "EXTERNAL"), (e.Internal = "INTERNAL"));
          })(fe || (fe = {})),
          (function (e) {
            ((e.Date = "DATE"),
              (e.Platform = "PLATFORM"),
              (e.BannerType = "BANNER_TYPE"),
              (e.Project = "PROJECT"));
          })(ve || (ve = {})),
          (function (e) {
            ((e.Date = "DATE"),
              (e.Platform = "PLATFORM"),
              (e.BannerType = "BANNER_TYPE"),
              (e.Requests = "REQUESTS"),
              (e.Displays = "DISPLAYS"),
              (e.Errors = "ERRORS"),
              (e.FillRate = "FILL_RATE"),
              (e.Revenue = "REVENUE"));
          })(ye || (ye = {})),
          (function (e) {
            ((e.GamepushLlc = "GAMEPUSH_LLC"),
              (e.GamepushFzco = "GAMEPUSH_FZCO"));
          })(me || (me = {})),
          (function (e) {
            ((e.External = "EXTERNAL"),
              (e.Internal = "INTERNAL"),
              (e.Pikabu = "PIKABU"),
              (e.ExtranalToken = "EXTRANAL_TOKEN"));
          })(ge || (ge = {})),
          (function (e) {
            ((e.Xsolla = "XSOLLA"),
              (e.Google = "GOOGLE"),
              (e.GooglePlay = "GOOGLE_PLAY"),
              (e.Yandex = "YANDEX"));
          })(we || (we = {})),
          (function (e) {
            ((e.Preloader = "PRELOADER"),
              (e.Fullscreen = "FULLSCREEN"),
              (e.Rewarded = "REWARDED"),
              (e.Sticky = "STICKY"),
              (e.VbMain = "VB_MAIN"),
              (e.Inline = "INLINE"),
              (e.InlineSmall = "INLINE_SMALL"));
          })(be || (be = {})),
          (function (e) {
            ((e.Banner = "BANNER"),
              (e.Combo = "COMBO"),
              (e.Inpage = "INPAGE"),
              (e.Instream = "INSTREAM"),
              (e.Empty = "EMPTY"));
          })(Ee || (Ee = {})),
          (function (e) {
            ((e.String = "STRING"), (e.Number = "NUMBER"));
          })(Pe || (Pe = {})),
          (function (e) {
            ((e.Active = "ACTIVE"),
              (e.Inactive = "INACTIVE"),
              (e.Deleted = "DELETED"));
          })(Se || (Se = {})),
          (function (e) {
            ((e.Reward = "REWARD"),
              (e.Achievement = "ACHIEVEMENT"),
              (e.Product = "PRODUCT"));
          })(_e || (_e = {})),
          (function (e) {
            ((e.Awaits = "AWAITS"),
              (e.Running = "RUNNING"),
              (e.Succeed = "SUCCEED"),
              (e.Failed = "FAILED"));
          })(Ae || (Ae = {})),
          (function (e) {
            ((e.Eq = "EQ"),
              (e.Ne = "NE"),
              (e.In = "IN"),
              (e.Lt = "LT"),
              (e.Gt = "GT"),
              (e.Lte = "LTE"),
              (e.Gte = "GTE"));
          })(Te || (Te = {})),
          (function (e) {
            ((e.PlayerStat = "PLAYER_STAT"),
              (e.EntityStat = "ENTITY_STAT"),
              (e.PlayerField = "PLAYER_FIELD"));
          })(Oe || (Oe = {})),
          (function (e) {
            ((e.Webhook = "WEBHOOK"), (e.ClientSide = "CLIENT_SIDE"));
          })(Ce || (Ce = {})),
          (function (e) {
            ((e.Rub = "RUB"),
              (e.Usd = "USD"),
              (e.Eur = "EUR"),
              (e.Aed = "AED"),
              (e.Inr = "INR"),
              (e.Krw = "KRW"),
              (e.Gbp = "GBP"),
              (e.Jpy = "JPY"),
              (e.Cny = "CNY"),
              (e.Try = "TRY"),
              (e.Brl = "BRL"),
              (e.Idr = "IDR"));
          })(Re || (Re = {})),
          (function (e) {
            ((e.Date = "DATE"),
              (e.Platform = "PLATFORM"),
              (e.Project = "PROJECT"));
          })(ke || (ke = {})),
          (function (e) {
            ((e.Date = "DATE"),
              (e.Platform = "PLATFORM"),
              (e.StickyFactor = "STICKY_FACTOR"),
              (e.Dau = "DAU"),
              (e.Wau = "WAU"),
              (e.Mau = "MAU"),
              (e.NewUsersDay = "NEW_USERS_DAY"),
              (e.NewUsersWeek = "NEW_USERS_WEEK"),
              (e.NewUsersMonth = "NEW_USERS_MONTH"));
          })(Ie || (Ie = {})),
          (function (e) {
            ((e.System = "SYSTEM"), (e.Developer = "DEVELOPER"));
          })(De || (De = {})),
          (function (e) {
            ((e.ChangeStatus = "CHANGE_STATUS"),
              (e.ChangeProgressStatus = "CHANGE_PROGRESS_STATUS"),
              (e.Message = "MESSAGE"));
          })(xe || (xe = {})),
          (function (e) {
            ((e.New = "NEW"),
              (e.CreatingDraft = "CREATING_DRAFT"),
              (e.RequestForUpdate = "REQUEST_FOR_UPDATE"),
              (e.ReadyForTest = "READY_FOR_TEST"),
              (e.ChangesRequired = "CHANGES_REQUIRED"),
              (e.WaitingForDeveloper = "WAITING_FOR_DEVELOPER"),
              (e.Testing = "TESTING"),
              (e.SendingToModeration = "SENDING_TO_MODERATION"),
              (e.WaitingForModeration = "WAITING_FOR_MODERATION"),
              (e.WaitingForRelease = "WAITING_FOR_RELEASE"),
              (e.Published = "PUBLISHED"),
              (e.Rejected = "REJECTED"),
              (e.Cancelled = "CANCELLED"));
          })(Ne || (Ne = {})),
          (function (e) {
            ((e.AdsRevenueSum = "AdsRevenueSum"),
              (e.PurchasesRevenueSum = "PurchasesRevenueSum"),
              (e.TotalRevenue = "TotalRevenue"),
              (e.DeveloperRevenue = "DeveloperRevenue"));
          })(Me || (Me = {})),
          (function (e) {
            ((e.Purchases = "Purchases"), (e.Ads = "Ads"));
          })(Le || (Le = {})),
          (function (e) {
            ((e.Created = "CREATED"),
              (e.Accepted = "ACCEPTED"),
              (e.ReadyForTest = "READY_FOR_TEST"),
              (e.PreTest = "PRE_TEST"),
              (e.WaitingForDeveloper = "WAITING_FOR_DEVELOPER"),
              (e.Tested = "TESTED"),
              (e.SigningDocs = "SIGNING_DOCS"),
              (e.Distributing = "DISTRIBUTING"),
              (e.DistributingPartner = "DISTRIBUTING_PARTNER"),
              (e.Cancelled = "CANCELLED"));
          })(Fe || (Fe = {})),
          (function (e) {
            ((e.Raw = "RAW"), (e.Txt = "TXT"), (e.Html = "HTML"));
          })(je || (je = {})),
          (function (e) {
            e.PlayerPrivacyPolicy = "PLAYER_PRIVACY_POLICY";
          })(Ue || (Ue = {})),
          (function (e) {
            ((e.Name = "NAME"),
              (e.Description = "DESCRIPTION"),
              (e.Review = "REVIEW"),
              (e.FullDescription = "FULL_DESCRIPTION"),
              (e.HowToPlay = "HOW_TO_PLAY"),
              (e.ShareText = "SHARE_TEXT"),
              (e.DocumentContent = "DOCUMENT_CONTENT"));
          })(Ge || (Ge = {})),
          (function (e) {
            ((e.Project = "PROJECT"),
              (e.GamePlatform = "GAME_PLATFORM"),
              (e.Internal = "INTERNAL"),
              (e.Support = "SUPPORT"),
              (e.SupportProject = "SUPPORT_PROJECT"));
          })(Be || (Be = {})),
          (function (e) {
            ((e.Image = "IMAGE"),
              (e.File = "FILE"),
              (e.Channel = "CHANNEL"),
              (e.ChannelMessage = "CHANNEL_MESSAGE"),
              (e.ChannelTemplate = "CHANNEL_TEMPLATE"),
              (e.Achievement = "ACHIEVEMENT"),
              (e.AchievementsGroup = "ACHIEVEMENTS_GROUP"),
              (e.Product = "PRODUCT"),
              (e.Project = "PROJECT"),
              (e.Leaderboard = "LEADERBOARD"),
              (e.Reward = "REWARD"),
              (e.Trigger = "TRIGGER"),
              (e.Events = "EVENTS"),
              (e.Document = "DOCUMENT"),
              (e.GamesCollections = "GAMES_COLLECTIONS"),
              (e.GamePlatform = "GAME_PLATFORM"),
              (e.GamePlatformCollection = "GAME_PLATFORM_COLLECTION"),
              (e.GamePlatformPage = "GAME_PLATFORM_PAGE"),
              (e.GamePlatformMenu = "GAME_PLATFORM_MENU"),
              (e.Article = "ARTICLE"));
          })($e || ($e = {})),
          (function (e) {
            ((e.Event = "EVENT"),
              (e.Platform = "PLATFORM"),
              (e.Dev = "DEV"),
              (e.Date = "DATE"),
              (e.Project = "PROJECT"));
          })(Ve || (Ve = {})),
          (function (e) {
            ((e.Event = "EVENT"),
              (e.Platform = "PLATFORM"),
              (e.Dev = "DEV"),
              (e.Date = "DATE"),
              (e.Count = "COUNT"));
          })(We || (We = {})),
          (function (e) {
            ((e.Date = "DATE"), (e.Plan = "PLAN"), (e.Project = "PROJECT"));
          })(qe || (qe = {})),
          (function (e) {
            ((e.Date = "DATE"),
              (e.Plan = "PLAN"),
              (e.Count = "COUNT"),
              (e.Size = "SIZE"));
          })(Ye || (Ye = {})),
          (function (e) {
            ((e.Any = "ANY"),
              (e.Portrait = "PORTRAIT"),
              (e.Landscape = "LANDSCAPE"));
          })(ze || (ze = {})),
          (function (e) {
            ((e.Standard = "STANDARD"), (e.PopOut = "POP_OUT"));
          })(Ke || (Ke = {})),
          (function (e) {
            ((e.MainSlider = "MAIN_SLIDER"),
              (e.LargeHorizontalTiles = "LARGE_HORIZONTAL_TILES"),
              (e.LargeVerticalTiles = "LARGE_VERTICAL_TILES"),
              (e.SmallSquareTiles = "SMALL_SQUARE_TILES"),
              (e.SmallHorizontalTiles = "SMALL_HORIZONTAL_TILES"),
              (e.MediumHorizontalTiles = "MEDIUM_HORIZONTAL_TILES"),
              (e.MediumMasonry_1B_2STiles = "MEDIUM_MASONRY_1B_2S_TILES"),
              (e.ExtraSmallSquareTiles = "EXTRA_SMALL_SQUARE_TILES"));
          })(Je || (Je = {})),
          (function (e) {
            ((e.Date = "DATE"),
              (e.PlayersMau = "PLAYERS_MAU"),
              (e.Online = "ONLINE"),
              (e.Rating = "RATING"),
              (e.RelevanceSimple = "RELEVANCE_SIMPLE"));
          })(Ze || (Ze = {})),
          (function (e) {
            ((e.Collection = "COLLECTION"),
              (e.Category = "CATEGORY"),
              (e.Categories = "CATEGORIES"),
              (e.Game = "GAME"),
              (e.GameFrame = "GAME_FRAME"),
              (e.Page = "PAGE"),
              (e.MainPage = "MAIN_PAGE"),
              (e.Search = "SEARCH"),
              (e.Tag = "TAG"),
              (e.Tags = "TAGS"));
          })(Xe || (Xe = {})),
          (function (e) {
            ((e.Premium = "PREMIUM"), (e.App = "APP"));
          })(He || (He = {})),
          (function (e) {
            ((e.Link = "LINK"),
              (e.Collection = "COLLECTION"),
              (e.Game = "GAME"),
              (e.Page = "PAGE"),
              (e.Category = "CATEGORY"),
              (e.Tag = "TAG"));
          })(Qe || (Qe = {})),
          (function (e) {
            ((e.Aside = "ASIDE"), (e.Footer = "FOOTER"));
          })(et || (et = {})),
          (function (e) {
            ((e.Content = "CONTENT"),
              (e.Custom = "CUSTOM"),
              (e.Collection = "COLLECTION"),
              (e.Tag = "TAG"),
              (e.Category = "CATEGORY"),
              (e.MyGames = "MY_GAMES"));
          })(tt || (tt = {})),
          (function (e) {
            ((e.InApp = "IN_APP"), (e.OnPlatform = "ON_PLATFORM"));
          })(it || (it = {})),
          (function (e) {
            ((e.Available = "AVAILABLE"), (e.OnPlatform = "ON_PLATFORM"));
          })(rt || (rt = {})),
          (function (e) {
            ((e.Day = "DAY"), (e.Month = "MONTH"), (e.Year = "YEAR"));
          })(nt || (nt = {})),
          (function (e) {
            ((e.Date = "DATE"), (e.Plan = "PLAN"), (e.Project = "PROJECT"));
          })(st || (st = {})),
          (function (e) {
            ((e.Date = "DATE"), (e.Plan = "PLAN"), (e.Count = "COUNT"));
          })(at || (at = {})),
          (function (e) {
            ((e.GameIcon = "GAME_ICON"),
              (e.GameIcon4X3 = "GAME_ICON4X3"),
              (e.GameIcon3X4 = "GAME_ICON3X4"),
              (e.GameCover = "GAME_COVER"),
              (e.GameCoverPortrait = "GAME_COVER_PORTRAIT"),
              (e.GameBackground = "GAME_BACKGROUND"),
              (e.GameScreenshotAlbum = "GAME_SCREENSHOT_ALBUM"),
              (e.GameScreenshotPortrait = "GAME_SCREENSHOT_PORTRAIT"));
          })(ot || (ot = {})),
          (function (e) {
            ((e.Date = "DATE"), (e.Plan = "PLAN"), (e.Project = "PROJECT"));
          })(ct || (ct = {})),
          (function (e) {
            ((e.Date = "DATE"), (e.Plan = "PLAN"), (e.Count = "COUNT"));
          })(lt || (lt = {})),
          (function (e) {
            ((e.En = "EN"),
              (e.Fr = "FR"),
              (e.It = "IT"),
              (e.De = "DE"),
              (e.Es = "ES"),
              (e.Zh = "ZH"),
              (e.Pt = "PT"),
              (e.Ko = "KO"),
              (e.Ja = "JA"),
              (e.Ru = "RU"),
              (e.Tr = "TR"),
              (e.Ar = "AR"),
              (e.Hi = "HI"),
              (e.Id = "ID"));
          })(ht || (ht = {})),
          (function (e) {
            ((e.Google = "GOOGLE"),
              (e.Yandex = "YANDEX"),
              (e.XsollaLogin = "XSOLLA_LOGIN"),
              (e.Social = "SOCIAL"),
              (e.Email = "EMAIL"),
              (e.Phone = "PHONE"),
              (e.Device = "DEVICE"));
          })(ut || (ut = {})),
          (function (e) {
            e.Android = "ANDROID";
          })(dt || (dt = {})),
          (function (e) {
            ((e.Add = "ADD"), (e.Remove = "REMOVE"), (e.Set = "SET"));
          })(pt || (pt = {})),
          (function (e) {
            e.PlayerField = "PLAYER_FIELD";
          })(ft || (ft = {})),
          (function (e) {
            ((e.InvitationSent = "INVITATION_SENT"),
              (e.InProject = "IN_PROJECT"));
          })(vt || (vt = {})),
          (function (e) {
            ((e.News = "NEWS"),
              (e.DistributionUpdate = "DISTRIBUTION_UPDATE"),
              (e.SupportMessage = "SUPPORT_MESSAGE"));
          })(yt || (yt = {})),
          (function (e) {
            ((e.ExchangeToken = "ExchangeToken"),
              (e.AccessToken = "AccessToken"));
          })(mt || (mt = {})),
          (function (e) {
            ((e.Date = "DATE"),
              (e.Platform = "PLATFORM"),
              (e.Project = "PROJECT"));
          })(gt || (gt = {})),
          (function (e) {
            ((e.Date = "DATE"),
              (e.Platform = "PLATFORM"),
              (e.Avg = "AVG"),
              (e.Peak = "PEAK"));
          })(wt || (wt = {})),
          (function (e) {
            ((e.New = "NEW"), (e.Paid = "PAID"));
          })(bt || (bt = {})),
          (function (e) {
            ((e.Company = "COMPANY"),
              (e.Individual = "INDIVIDUAL"),
              (e.SoleProprietor = "SOLE_PROPRIETOR"),
              (e.SelfEmployed = "SELF_EMPLOYED"));
          })(Et || (Et = {})),
          (function (e) {
            ((e.External = "EXTERNAL"), (e.Internal = "INTERNAL"));
          })(Pt || (Pt = {})),
          (function (e) {
            ((e.Xsolla = "XSOLLA"),
              (e.Robokassa = "ROBOKASSA"),
              (e.GooglePlay = "GOOGLE_PLAY"),
              (e.Stripe = "STRIPE"),
              (e.Onestore = "ONESTORE"));
          })(St || (St = {})),
          (function (e) {
            ((e.Playdia = "PLAYDIA"),
              (e.Coolmath = "COOLMATH"),
              (e.Y8 = "Y8"),
              (e.Fotostrana = "FOTOSTRANA"),
              (e.JioGames = "JIO_GAMES"),
              (e.Telegram = "TELEGRAM"),
              (e.GooglePlay = "GOOGLE_PLAY"),
              (e.Yandex = "YANDEX"),
              (e.Vk = "VK"),
              (e.Ok = "OK"),
              (e.GameMonetize = "GAME_MONETIZE"),
              (e.GameDistribution = "GAME_DISTRIBUTION"),
              (e.CrazyGames = "CRAZY_GAMES"),
              (e.Smartmarket = "SMARTMARKET"),
              (e.Fb = "FB"),
              (e.Poki = "POKI"),
              (e.Gamepix = "GAMEPIX"),
              (e.VkPlay = "VK_PLAY"),
              (e.WgPlayground = "WG_PLAYGROUND"),
              (e.Beeline = "BEELINE"),
              (e.Kongregate = "KONGREGATE"),
              (e.Playdeck = "PLAYDECK"),
              (e.Custom = "CUSTOM"),
              (e.Partner = "PARTNER"),
              (e.AppGallery = "APP_GALLERY"),
              (e.GalaxyStore = "GALAXY_STORE"),
              (e.OneStore = "ONE_STORE"),
              (e.AmazonAppstore = "AMAZON_APPSTORE"),
              (e.XiaomiGetapps = "XIAOMI_GETAPPS"),
              (e.Aptoide = "APTOIDE"),
              (e.Rustore = "RUSTORE"),
              (e.Android = "ANDROID"),
              (e.Pikabu = "PIKABU"),
              (e.XiaomiGamecenter = "XIAOMI_GAMECENTER"),
              (e.None = "NONE"));
          })(_t || (_t = {})),
          (function (e) {
            ((e.InGame = "IN_GAME"),
              (e.CurrencyBundle = "CURRENCY_BUNDLE"),
              (e.Vip = "VIP"),
              (e.SkipAd = "SKIP_AD"));
          })(At || (At = {})),
          (function (e) {
            ((e.Local = "LOCAL"),
              (e.Platform = "PLATFORM"),
              (e.Cloud = "CLOUD"));
          })(Tt || (Tt = {})),
          (function (e) {
            ((e.Category = "CATEGORY"), (e.Tag = "TAG"), (e.Engine = "ENGINE"));
          })(Ot || (Ot = {})),
          (function (e) {
            ((e.Player = "PLAYER"),
              (e.Profile = "PROFILE"),
              (e.Product = "PRODUCT"),
              (e.Platform = "PLATFORM"),
              (e.Consumed = "CONSUMED"),
              (e.Dev = "DEV"),
              (e.Date = "DATE"),
              (e.Project = "PROJECT"));
          })(Ct || (Ct = {})),
          (function (e) {
            ((e.Player = "PLAYER"),
              (e.Product = "PRODUCT"),
              (e.Platform = "PLATFORM"),
              (e.Consumed = "CONSUMED"),
              (e.Dev = "DEV"),
              (e.Date = "DATE"),
              (e.Total = "TOTAL"),
              (e.Price = "PRICE"));
          })(Rt || (Rt = {})),
          (function (e) {
            ((e.Common = "COMMON"),
              (e.Uncommon = "UNCOMMON"),
              (e.Rare = "RARE"),
              (e.Epic = "EPIC"),
              (e.Legendary = "LEGENDARY"),
              (e.Mythic = "MYTHIC"));
          })(kt || (kt = {})),
          (function (e) {
            ((e.Date = "DATE"),
              (e.Platform = "PLATFORM"),
              (e.Project = "PROJECT"));
          })(It || (It = {})),
          (function (e) {
            ((e.Date = "DATE"),
              (e.Platform = "PLATFORM"),
              (e.RetentionDay = "RETENTION_DAY"),
              (e.RetentionWeek = "RETENTION_WEEK"),
              (e.RetentionMonth = "RETENTION_MONTH"),
              (e.NewUsersDay = "NEW_USERS_DAY"),
              (e.NewUsersWeek = "NEW_USERS_WEEK"),
              (e.NewUsersMonth = "NEW_USERS_MONTH"),
              (e.ReturnedUsersDay = "RETURNED_USERS_DAY"),
              (e.ReturnedUsersWeek = "RETURNED_USERS_WEEK"),
              (e.ReturnedUsersMonth = "RETURNED_USERS_MONTH"));
          })(Dt || (Dt = {})),
          (function (e) {
            e.Common = "COMMON";
          })(xt || (xt = {})),
          (function (e) {
            ((e.Reward = "REWARD"),
              (e.Platform = "PLATFORM"),
              (e.Dev = "DEV"),
              (e.Date = "DATE"),
              (e.Project = "PROJECT"));
          })(Nt || (Nt = {})),
          (function (e) {
            ((e.Reward = "REWARD"),
              (e.Platform = "PLATFORM"),
              (e.Dev = "DEV"),
              (e.Date = "DATE"),
              (e.GivenCount = "GIVEN_COUNT"),
              (e.AcceptedCount = "ACCEPTED_COUNT"));
          })(Mt || (Mt = {})),
          (function (e) {
            ((e.ActiveDays = "ACTIVE_DAYS"),
              (e.ActiveDaysConsecutive = "ACTIVE_DAYS_CONSECUTIVE"));
          })(Lt || (Lt = {})),
          (function (e) {
            ((e.Gamepush = "GAMEPUSH"), (e.Spellsync = "SPELLSYNC"));
          })(Ft || (Ft = {})),
          (function (e) {
            ((e.Date = "DATE"),
              (e.Platform = "PLATFORM"),
              (e.Project = "PROJECT"));
          })(jt || (jt = {})),
          (function (e) {
            ((e.Date = "DATE"),
              (e.Platform = "PLATFORM"),
              (e.SessionTime = "SESSION_TIME"),
              (e.SessionsCount = "SESSIONS_COUNT"),
              (e.InGameTime = "IN_GAME_TIME"));
          })(Ut || (Ut = {})),
          (function (e) {
            ((e.Px = "PX"), (e.Percent = "PERCENT"));
          })(Gt || (Gt = {})),
          (function (e) {
            ((e.Asc = "ASC"), (e.Desc = "DESC"));
          })(Bt || (Bt = {})),
          (function (e) {
            ((e.Account = "Account"),
              (e.Project = "Project"),
              (e.Platform = "Platform"));
          })($t || ($t = {})),
          (function (e) {
            ((e.System = "SYSTEM"), (e.Developer = "DEVELOPER"));
          })(Vt || (Vt = {})),
          (function (e) {
            e.Message = "MESSAGE";
          })(Wt || (Wt = {})),
          (function (e) {
            ((e.Desktop = "Desktop"),
              (e.Ios = "IOS"),
              (e.Android = "Android"),
              (e.Tv = "TV"));
          })(qt || (qt = {})),
          (function (e) {
            ((e.Honorary = "HONORARY"),
              (e.Release = "RELEASE"),
              (e.Absolute = "ABSOLUTE"),
              (e.Start = "START"),
              (e.Advanced = "ADVANCED"),
              (e.Pro = "PRO"),
              (e.Enterprise = "ENTERPRISE"),
              (e.Premium = "PREMIUM"),
              (e.Unlimited = "UNLIMITED"));
          })(Yt || (Yt = {})),
          (function (e) {
            ((e.Common = "COMMON"),
              (e.Scheduler = "SCHEDULER"),
              (e.Event = "EVENT"));
          })(zt || (zt = {})),
          (function (e) {
            ((e.Trigger = "TRIGGER"),
              (e.Type = "TYPE"),
              (e.Entity = "ENTITY"),
              (e.Platform = "PLATFORM"),
              (e.Dev = "DEV"),
              (e.Date = "DATE"),
              (e.Project = "PROJECT"));
          })(Kt || (Kt = {})),
          (function (e) {
            ((e.Trigger = "TRIGGER"),
              (e.Type = "TYPE"),
              (e.Entity = "ENTITY"),
              (e.Platform = "PLATFORM"),
              (e.Dev = "DEV"),
              (e.Date = "DATE"),
              (e.Count = "COUNT"));
          })(Jt || (Jt = {})),
          (function (e) {
            e.Player = "PLAYER";
          })(Zt || (Zt = {})),
          (function (e) {
            ((e.Date = "DATE"),
              (e.Platform = "PLATFORM"),
              (e.Plan = "PLAN"),
              (e.Action = "ACTION"),
              (e.Project = "PROJECT"));
          })(Xt || (Xt = {})),
          (function (e) {
            ((e.Date = "DATE"),
              (e.Action = "ACTION"),
              (e.Requests = "REQUESTS"),
              (e.Plan = "PLAN"),
              (e.Platform = "PLATFORM"));
          })(Ht || (Ht = {})),
          (function (e) {
            ((e.PurchasePlayerPurchase = "PurchasePlayerPurchase"),
              (e.ConsumePlayerPurchase = "ConsumePlayerPurchase"),
              (e.ExpirePlayerSubscription = "ExpirePlayerSubscription"),
              (e.CancelPlayerSubscription = "CancelPlayerSubscription"),
              (e.ResumePlayerSubscription = "ResumePlayerSubscription"),
              (e.UnlockPlayerAchievement = "UnlockPlayerAchievement"),
              (e.PlayerSetAchievementProgress = "PlayerSetAchievementProgress"),
              (e.PlayerSendInviteToChannel = "PlayerSendInviteToChannel"),
              (e.PlayerCancelInviteToChannel = "PlayerCancelInviteToChannel"),
              (e.PlayerAcceptInviteToChannel = "PlayerAcceptInviteToChannel"),
              (e.PlayerRejectInviteToChannel = "PlayerRejectInviteToChannel"),
              (e.PlayerJoinChannel = "PlayerJoinChannel"),
              (e.PlayerLeaveChannel = "PlayerLeaveChannel"),
              (e.PlayerCancelJoinChannel = "PlayerCancelJoinChannel"),
              (e.PlayerAcceptJoinRequestToChannel =
                "PlayerAcceptJoinRequestToChannel"),
              (e.PlayerRejectJoinRequestToChannel =
                "PlayerRejectJoinRequestToChannel"),
              (e.PlayerKickFromChannel = "PlayerKickFromChannel"),
              (e.PlayerSendPersonalMessage = "PlayerSendPersonalMessage"),
              (e.PlayerSendFeedMessage = "PlayerSendFeedMessage"),
              (e.PlayerSendMessage = "PlayerSendMessage"),
              (e.PlayerEditMessage = "PlayerEditMessage"),
              (e.PlayerDeleteMessage = "PlayerDeleteMessage"),
              (e.PlayerMutePlayerInChannel = "PlayerMutePlayerInChannel"),
              (e.PlayerUnmutePlayerInChannel = "PlayerUnmutePlayerInChannel"),
              (e.PlayerCreateChannel = "PlayerCreateChannel"),
              (e.PlayerUpdateChannel = "PlayerUpdateChannel"),
              (e.PlayerDeleteChannel = "PlayerDeleteChannel"),
              (e.UploadPlayerFile = "UploadPlayerFile"),
              (e.UploadPlayerImage = "UploadPlayerImage"),
              (e.PlayerPublishRecord = "PlayerPublishRecord"),
              (e.SyncPlayer = "SyncPlayer"),
              (e.GetPlayer = "GetPlayer"),
              (e.GivePlayerReward = "GivePlayerReward"),
              (e.RegisterPlayerUniqueValue = "RegisterPlayerUniqueValue"),
              (e.DeletePlayerUniqueValue = "DeletePlayerUniqueValue"),
              (e.PlayerActivateTrigger = "PlayerActivateTrigger"));
          })(Qt || (Qt = {})),
          oe`
    mutation createProject($input: CreateProjectInput!) {
  result: CreateProject(input: $input) {
    ...project
  }
}
    ${oe`
    fragment project on Project {
  id
  name
  icon
  publicToken
  orderedAchievementsGroups
  achievements {
    isLockedVisible
    isLockedDescriptionVisible
    enableUnlockToast
  }
  origins {
    origin
    isDev
    isActive
  }
  config {
    lang
    avatarGenerator
    ymCounterId
    gtagCounterId
    showLoader
    showReqCounter
  }
  assets {
    icon {
      ...imageAsset
    }
  }
}
    ${oe`
    fragment imageAsset on Asset {
  __typename
  ... on ImageAsset {
    type
    resources {
      src
      crop {
        left
        top
        width
        height
      }
    }
  }
}
    `}`}`);
      },
      1049: (e, t, i) => {
        "use strict";
        function r(e, t, i) {
          return e.replace(/{{hash}}/gi, t).replace(/{{size}}/gi, i);
        }
        i.d(t, { Z: () => r });
      },
      6480: (e, t, i) => {
        "use strict";
        function r(e, t) {
          return !e || (t && "none" !== t) ? t : "last";
        }
        function n(e) {
          return e > 10 ? 10 : e;
        }
        function s(e, t) {
          return e || t.limit;
        }
        function a(e, t) {
          const i = new Set([...e.map((e) => e.id), ...t.map((e) => e.id)]);
          return (
            e.forEach((e) => {
              i.has(e.id) && i.delete(e.id);
            }),
            i.size
          );
        }
        i.d(t, { oo: () => r, pY: () => n, wQ: () => s, q3: () => a });
      },
      1961: (e, t, i) => {
        "use strict";
        i.d(t, { vf: () => n, Yc: () => s });
        var r = i(9503);
        function n(e) {
          return (
            (t = this),
            (r = void 0),
            (s = function* () {
              const { default: t } = yield i(6958)(`./${e}.json`);
              return t;
            }),
            new ((n = void 0) || (n = Promise))(function (e, i) {
              function a(e) {
                try {
                  c(s.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function o(e) {
                try {
                  c(s.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function c(t) {
                var i;
                t.done
                  ? e(t.value)
                  : ((i = t.value),
                    i instanceof n
                      ? i
                      : new n(function (e) {
                          e(i);
                        })).then(a, o);
              }
              c((s = s.apply(t, r || [])).next());
            })
          );
          var t, r, n, s;
        }
        function s() {
          const e = navigator.language.slice(0, 2).toLowerCase();
          return Object.values(r.Uo).includes(e) ? e : null;
        }
      },
      6558: (e, t, i) => {
        "use strict";
        i.d(t, { Yd: () => r, kg: () => n, EK: () => s });
        class r {
          constructor() {
            ((this.isCollectingLogs = !0),
              (this.logs = []),
              (this.log = (...e) => {
                (this.collectLogs("log", e), console.log(this.name, ...e));
              }),
              (this.info = (...e) => {
                (this.collectLogs("info", e), console.info(this.name, ...e));
              }),
              (this.warn = (...e) => {
                (this.collectLogs("warn", e), console.warn(this.name, ...e));
              }),
              (this.error = (...e) => {
                (this.collectLogs("error", e), console.error(this.name, ...e));
              }),
              (this.assert = (...e) => {
                (this.collectLogs("assert", e),
                  console.assert(...e, { name: this.name }));
              }));
          }
          get name() {
            return `${globalThis.__SDKProvider || "SDK"}`;
          }
          stopCollect() {
            ((this.isCollectingLogs = !1), (this.logs = []));
          }
          collectLogs(e, t) {
            this.isCollectingLogs && this.logs.push({ type: e, args: t });
          }
        }
        let n = new r();
        const s = (e) => (n = e);
      },
      1437: (e, t, i) => {
        "use strict";
        i.d(t, { p: () => n });
        var r = i(8293);
        function n(e) {
          const t = (0, r._)(r.s),
            i = new Image();
          return (
            (i.onload = () => t.done(i)),
            (i.onerror = () => t.abort()),
            (i.onabort = () => t.abort()),
            (i.src = e),
            t.ready
          );
        }
      },
      3357: (e, t, i) => {
        "use strict";
        i.d(t, { q: () => n });
        var r = i(180);
        const n = (e) => ({
          isLocalSave: e === r.pQ.Local,
          isCloudSave: e === r.pQ.Cloud,
          isPlatformSave: e === r.pQ.Platform,
          format: e,
        });
      },
      6041: (e, t, i) => {
        "use strict";
        i.d(t, { ZP: () => a });
        const r = 2048,
          n =
            /cdn.(eponesh|gamepush|spellsync).com\/static(\/([\d\-]+.)([\d\-]+.)|)\/(.*)/,
          s = /-(\d+)x(\d+)\.\w+$/;
        function a(e, t, i, a) {
          const o = n.exec(e);
          if (!o) return e;
          const [c, l] = (function (e) {
            const t = s.exec(e);
            return t ? [Number(t[1]) || 0, Number(t[2]) || 0] : [0, 0];
          })(e);
          (c && t > c && (t = c),
            l && i > l && (i = l),
            t > r && (t = r),
            i > r && (i = r));
          const [, h, , , , u] = o;
          return `https://cdn.${h}.com/static/${t || "-"}x${i || "-"}${a ? "crop" : ""}/${u}`;
        }
      },
      8866: (e, t, i) => {
        "use strict";
        function r(e) {
          return new Promise((t) => setTimeout(t, e));
        }
        i.d(t, { Z: () => r });
      },
      4835: (e, t, i) => {
        "use strict";
        i.d(t, { Z: () => r });
        const r = {
          app: { trophy: "./sdk-bundle/static/icons/trophy.svg" },
          cdn: { trophy: "./sdk-bundle/static/icons/reward.png" },
        };
      },
      8293: (e, t, i) => {
        "use strict";
        i.d(t, { s: () => n, _: () => s });
        var r = i(6558);
        const n = { timeout: 5e3 };
        function s({ timeout: e = 0 } = {}) {
          let t = !1;
          const i = {},
            n = new Promise((e, s) => {
              ((i.done = (i) => {
                if (!t) return ((t = !0), e(i), n);
              }),
                (i.abort = (e) => {
                  if (!t) return ((t = !0), r.kg.error(e), s(e), n);
                }));
            });
          return (
            e &&
              setTimeout(() => {
                t || i.abort(`Timeout ${e}ms exceeded`);
              }, e),
            (i.ready = n),
            i
          );
        }
      },
      5942: (e, t, i) => {
        "use strict";
        var r;
        (i.d(t, { z: () => r }),
          (function (e) {
            ((e.TELEGRAM = "TELEGRAM"),
              (e.YANDEX = "YANDEX"),
              (e.VK = "VK"),
              (e.OK = "OK"),
              (e.GAME_MONETIZE = "GAME_MONETIZE"),
              (e.GAME_DISTRIBUTION = "GAME_DISTRIBUTION"),
              (e.WG_PLAYGROUND = "WG_PLAYGROUND"),
              (e.CRAZY_GAMES = "CRAZY_GAMES"),
              (e.SMARTMARKET = "SMARTMARKET"),
              (e.GAMEPIX = "GAMEPIX"),
              (e.POKI = "POKI"),
              (e.VK_PLAY = "VK_PLAY"),
              (e.BEELINE = "BEELINE"),
              (e.KONGREGATE = "KONGREGATE"),
              (e.CUSTOM = "CUSTOM"),
              (e.PLAYDECK = "PLAYDECK"),
              (e.GOOGLE_PLAY = "GOOGLE_PLAY"),
              (e.APP_GALLERY = "APP_GALLERY"),
              (e.GALAXY_STORE = "GALAXY_STORE"),
              (e.ONE_STORE = "ONE_STORE"),
              (e.AMAZON_APPSTORE = "AMAZON_APPSTORE"),
              (e.XIAOMI_GETAPPS = "XIAOMI_GETAPPS"),
              (e.APTOIDE = "APTOIDE"),
              (e.RUSTORE = "RUSTORE"),
              (e.ANDROID = "ANDROID"),
              (e.FOTOSTRANA = "FOTOSTRANA"),
              (e.Y8 = "Y8"),
              (e.PARTNER = "PARTNER"),
              (e.COOLMATH = "COOLMATH"),
              (e.XIAOMI_GAMECENTER = "XIAOMI_GAMECENTER"),
              (e.PLAYDIA = "PLAYDIA"),
              (e.NONE = "NONE"));
          })(r || (r = {})));
      },
      1438: (e, t, i) => {
        "use strict";
        var r;
        (i.d(t, { i: () => r }),
          (function (e) {
            ((e.New = "NEW"), (e.Paid = "PAID"));
          })(r || (r = {})));
      },
      180: (e, t, i) => {
        "use strict";
        i.d(t, {
          $: () => r,
          L_: () => n,
          pQ: () => c,
          J1: () => d,
          iA: () => v,
        });
        var r,
          n,
          s,
          a,
          o,
          c,
          l,
          h,
          u,
          d,
          p = i(5942);
        (!(function (e) {
          ((e.PRELOADER = "PRELOADER"),
            (e.FULLSCREEN = "FULLSCREEN"),
            (e.REWARDED = "REWARDED"),
            (e.STICKY = "STICKY"));
        })(r || (r = {})),
          (function (e) {
            ((e.Xsolla = "XSOLLA"),
              (e.Robokassa = "ROBOKASSA"),
              (e.Stripe = "STRIPE"),
              (e.OneStore = "ONESTORE"),
              (e.GooglePlay = "GOOGLE_PLAY"));
          })(n || (n = {})),
          (function (e) {
            ((e.Webhook = "WEBHOOK"), (e.ClientSide = "CLIENT_SIDE"));
          })(s || (s = {})),
          (function (e) {
            ((e.YandexSimpleMonetization = "YandexSimpleMonetization"),
              (e.Adfox = "ADFOX"),
              (e.Gpt = "GPT"),
              (e.Rtb = "RTB"),
              (e.Advertonic = "ADVERTONIC"),
              (e.Adsense = "ADSENSE"),
              (e.TmAds = "TMADS"),
              (e.Adsgram = "ADSGRAM"),
              (e.Adsonar = "ADSONAR"));
          })(a || (a = {})),
          (function (e) {
            ((e.top = "TOP"), (e.bottom = "BOTTOM"));
          })(o || (o = {})),
          (function (e) {
            ((e.Local = "LOCAL"),
              (e.Platform = "PLATFORM"),
              (e.Cloud = "CLOUD"));
          })(c || (c = {})),
          (function (e) {
            ((e.External = "EXTERNAL"), (e.Internal = "INTERNAL"));
          })(l || (l = {})),
          (function (e) {
            ((e.External = "EXTERNAL"), (e.Internal = "INTERNAL"));
          })(h || (h = {})),
          (function (e) {
            ((e.External = "EXTERNAL"),
              (e.Internal = "INTERNAL"),
              (e.Pikabu = "PIKABU"),
              (e.ExternalToken = "EXTRANAL_TOKEN"));
          })(u || (u = {})),
          (function (e) {
            ((e.Xsolla = "XSOLLA"),
              (e.Google = "GOOGLE"),
              (e.Yandex = "YANDEX"));
          })(d || (d = {})));
        const f = () => ({
            type: r.STICKY,
            enabled: !1,
            enabledDesktop: !1,
            adServer: null,
            adServerDesktop: null,
            name: "",
            description: "",
            bannerId: "",
            desktopBannerId: "",
            frequency: 0,
            refreshInterval: 0,
            maxWidth: 0,
            maxHeight: 0,
            maxWidthDimension: "PX",
            maxHeightDimension: "PX",
            desktopMaxWidth: 0,
            desktopMaxHeight: 0,
            desktopMaxWidthDimension: "PX",
            desktopMaxHeightDimension: "PX",
            fitCanvas: !1,
            position: "bottom",
            limits: { hour: 0, day: 0, session: 0 },
            useNative: !0,
          }),
          v = {
            appId: "",
            communityLinks: { en: "" },
            gameLink: "",
            tag: "",
            publicKey: "",
            currencyPluralisations: { en: "" },
            progressSaveFormat: c.Platform,
            alwaysSyncPublicFields: !1,
            customAdsConfig: {
              id: "",
              name: "",
              adFoxOwnerId: "",
              advertonicUserId: "",
              adsenseClientId: "",
              tmAdsAppKey: "",
              adSonarAppId: "",
              description: "",
              configs: {
                web: {
                  implementation: l.Internal,
                  bidders: [],
                  banners: [
                    Object.assign(Object.assign({}, f()), {
                      type: r.FULLSCREEN,
                    }),
                    Object.assign(Object.assign({}, f()), {
                      type: r.PRELOADER,
                    }),
                    Object.assign(Object.assign({}, f()), { type: r.REWARDED }),
                    Object.assign(Object.assign({}, f()), { type: r.STICKY }),
                  ],
                },
                android: {
                  implementation: l.Internal,
                  banners: [
                    Object.assign(Object.assign({}, f()), {
                      type: r.FULLSCREEN,
                    }),
                    Object.assign(Object.assign({}, f()), {
                      type: r.PRELOADER,
                    }),
                    Object.assign(Object.assign({}, f()), { type: r.REWARDED }),
                    Object.assign(Object.assign({}, f()), { type: r.STICKY }),
                  ],
                },
                telegram: {
                  implementation: l.Internal,
                  banners: [
                    Object.assign(Object.assign({}, f()), {
                      type: r.FULLSCREEN,
                    }),
                    Object.assign(Object.assign({}, f()), {
                      type: r.PRELOADER,
                    }),
                    Object.assign(Object.assign({}, f()), { type: r.REWARDED }),
                    Object.assign(Object.assign({}, f()), { type: r.STICKY }),
                  ],
                },
              },
            },
            payload: {},
            customAdsConfigId: "",
            paymentsConfig: {
              id: "",
              name: "",
              description: "",
              sandbox: !0,
              oneStoreConfig: { publicKey: "" },
              configs: {
                web: { implementation: h.Internal, activeService: null },
                android: { implementation: h.Internal, activeService: null },
              },
            },
            paymentsConfigId: "",
            authConfig: {
              id: "",
              name: "",
              description: "",
              xsollaConfig: { loginProjectId: "" },
              googleConfig: { clientID: "" },
              yandexConfig: { clientID: "" },
              configs: {
                web: { implementation: u.Internal, activeService: null },
                android: { implementation: u.Internal, activeService: null },
              },
            },
            authConfigId: "",
            type: p.z.NONE,
            banners: [
              Object.assign(Object.assign({}, f()), {
                type: r.FULLSCREEN,
                enabled: !0,
                frequency: 60,
              }),
              Object.assign(Object.assign({}, f()), {
                type: r.PRELOADER,
                enabled: !1,
              }),
              Object.assign(Object.assign({}, f()), {
                type: r.REWARDED,
                enabled: !0,
              }),
              Object.assign(Object.assign({}, f()), {
                type: r.STICKY,
                enabled: !1,
              }),
            ],
            ymCounterId: 0,
            gtagCounterId: "",
            showResumeOverlay: null,
          };
      },
      9503: (e, t, i) => {
        "use strict";
        i.d(t, { Uo: () => r, h$: () => a, lR: () => o, GH: () => c });
        var r,
          n = i(180),
          s = i(2940);
        !(function (e) {
          ((e.EN = "en"),
            (e.FR = "fr"),
            (e.IT = "it"),
            (e.DE = "de"),
            (e.ES = "es"),
            (e.ZH = "zh"),
            (e.PT = "pt"),
            (e.KO = "ko"),
            (e.JA = "ja"),
            (e.RU = "ru"),
            (e.TR = "tr"),
            (e.AR = "ar"),
            (e.HI = "hi"),
            (e.ID = "id"));
        })(r || (r = {}));
        const a = {
            [r.EN]: "en-US",
            [r.FR]: "fr-FR",
            [r.IT]: "it-IT",
            [r.DE]: "de-DE",
            [r.ES]: "es-ES",
            [r.ZH]: "zh-CN",
            [r.PT]: "pt-BR",
            [r.KO]: "ko-KR",
            [r.JA]: "ja-JP",
            [r.RU]: "ru-RU",
            [r.TR]: "tr-TR",
            [r.AR]: "ar-SA",
            [r.HI]: "hi-IN",
            [r.ID]: "id-ID",
          },
          o = {
            isDev: !1,
            isAllowedOrigin: !0,
            config: {
              avatarGenerator: "dicebear_retro",
              avatarGeneratorTemplate: "",
              enableUserUploadFiles: !1,
              enableUserUploadImages: !1,
              ymCounterId: 0,
              gtagCounterId: "",
              showLoader: !1,
              showReqCounter: !1,
              orientation: s.LH.Any,
              showOrientationOverlay: !1,
              showUnsupportedOSOverlay: !1,
              targetOS: [],
              communityLinks: { en: "" },
              showResumeOverlay: !1,
            },
            platformConfig: n.iA,
            playerFields: [],
            serverTime: new Date().toISOString(),
            gameVariables: [],
            acl: {
              canUploadFiles: !1,
              canUploadImages: !1,
              canConnectOnline: !1,
              canCollectStats: !1,
            },
            project: {
              icon: "",
              description: "",
              name: "",
              enableMainChat: !1,
              mainChatId: 0,
              achievements: {
                isLockedVisible: !1,
                isLockedDescriptionVisible: !1,
                enableUnlockToast: !1,
              },
              ads: { showCountdownOverlay: !1, showRewardedFailedOverlay: !1 },
            },
            rewards: [],
            triggers: [],
            products: [],
            achievements: [],
            achievementsGroups: [],
            schedulers: [],
            events: [],
          },
          c = {
            limits: {
              [n.$.PRELOADER]: {
                hour: { timestamp: 0, count: 0 },
                day: { timestamp: 0, count: 0 },
                session: { count: 0 },
              },
              [n.$.FULLSCREEN]: {
                hour: { timestamp: 0, count: 0 },
                day: { timestamp: 0, count: 0 },
                session: { count: 0 },
              },
              [n.$.REWARDED]: {
                hour: { timestamp: 0, count: 0 },
                day: { timestamp: 0, count: 0 },
                session: { count: 0 },
              },
              [n.$.STICKY]: {
                hour: { timestamp: 0, count: 0 },
                day: { timestamp: 0, count: 0 },
                session: { count: 0 },
              },
            },
          };
      },
      4618: (e, t, i) => {
        var r = {
          "./ar.json": [9582, 808],
          "./de.json": [3268, 459],
          "./en.json": [7772, 932],
          "./es.json": [9533, 968],
          "./fr.json": [1674, 746],
          "./hi.json": [5262, 637],
          "./id.json": [6599, 513],
          "./it.json": [7001, 159],
          "./ja.json": [8257, 848],
          "./ko.json": [3677, 670],
          "./pt.json": [3449, 47],
          "./ru.json": [5207, 964],
          "./tr.json": [4905, 66],
          "./zh.json": [2621, 929],
        };
        function n(e) {
          if (!i.o(r, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = r[e],
            n = t[0];
          return i.e(t[1]).then(() => i.t(n, 3));
        }
        ((n.keys = () => Object.keys(r)), (n.id = 4618), (e.exports = n));
      },
      6958: (e, t, i) => {
        var r = {
          "./ar.json": [6278, 808],
          "./de.json": [9717, 459],
          "./devtools/en.json": [1868, 897],
          "./devtools/ru.json": [3845, 606],
          "./en.json": [7630, 932],
          "./es.json": [1662, 968],
          "./external-sdk/ar.json": [9582, 38],
          "./external-sdk/de.json": [3268, 215],
          "./external-sdk/en.json": [7772, 463],
          "./external-sdk/es.json": [9533, 999],
          "./external-sdk/fr.json": [1674, 815],
          "./external-sdk/hi.json": [5262, 36],
          "./external-sdk/id.json": [6599, 406],
          "./external-sdk/it.json": [7001, 483],
          "./external-sdk/ja.json": [8257, 852],
          "./external-sdk/ko.json": [3677, 843],
          "./external-sdk/pt.json": [3449, 883],
          "./external-sdk/ru.json": [5207, 836],
          "./external-sdk/tr.json": [4905, 423],
          "./external-sdk/zh.json": [2621, 426],
          "./fr.json": [5997, 746],
          "./hi.json": [5513, 637],
          "./id.json": [159, 513],
          "./it.json": [1043, 159],
          "./ja.json": [3125, 848],
          "./ko.json": [7344, 670],
          "./pt.json": [8365, 47],
          "./ru.json": [4313, 964],
          "./tr.json": [2877, 66],
          "./zh.json": [5113, 929],
        };
        function n(e) {
          if (!i.o(r, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = r[e],
            n = t[0];
          return i.e(t[1]).then(() => i.t(n, 3));
        }
        ((n.keys = () => Object.keys(r)), (n.id = 6958), (e.exports = n));
      },
    },
    s = {};
  function a(e) {
    var t = s[e];
    if (void 0 !== t) return t.exports;
    var i = (s[e] = { id: e, loaded: !1, exports: {} });
    return (n[e].call(i.exports, i, i.exports, a), (i.loaded = !0), i.exports);
  }
  ((a.m = n),
    (a.amdD = function () {
      throw new Error("define cannot be used indirect");
    }),
    (a.amdO = {}),
    (a.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return (a.d(t, { a: t }), t);
    }),
    (t = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (a.t = function (i, r) {
      if ((1 & r && (i = this(i)), 8 & r)) return i;
      if ("object" == typeof i && i) {
        if (4 & r && i.__esModule) return i;
        if (16 & r && "function" == typeof i.then) return i;
      }
      var n = Object.create(null);
      a.r(n);
      var s = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var o = 2 & r && i; "object" == typeof o && !~e.indexOf(o); o = t(o))
        Object.getOwnPropertyNames(o).forEach((e) => (s[e] = () => i[e]));
      return ((s.default = () => i), a.d(n, s), n);
    }),
    (a.d = (e, t) => {
      for (var i in t)
        a.o(t, i) &&
          !a.o(e, i) &&
          Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
    }),
    (a.f = {}),
    (a.e = (e) =>
      Promise.all(Object.keys(a.f).reduce((t, i) => (a.f[i](e, t), t), []))),
    (a.u = (e) =>
      (({
        36: "i18n/external-sdk-hi-json",
        38: "i18n/external-sdk-ar-json",
        47: "i18n/pt-json",
        66: "i18n/tr-json",
        159: "i18n/it-json",
        215: "i18n/external-sdk-de-json",
        406: "i18n/external-sdk-id-json",
        415: "gs.overlay",
        423: "i18n/external-sdk-tr-json",
        426: "i18n/external-sdk-zh-json",
        459: "i18n/de-json",
        463: "i18n/external-sdk-en-json",
        483: "i18n/external-sdk-it-json",
        513: "i18n/id-json",
        606: "i18n/devtools-ru-json",
        634: "gs.windows",
        637: "i18n/hi-json",
        670: "i18n/ko-json",
        718: "gs.devtools",
        746: "i18n/fr-json",
        808: "i18n/ar-json",
        815: "i18n/external-sdk-fr-json",
        836: "i18n/external-sdk-ru-json",
        843: "i18n/external-sdk-ko-json",
        848: "i18n/ja-json",
        852: "i18n/external-sdk-ja-json",
        883: "i18n/external-sdk-pt-json",
        897: "i18n/devtools-en-json",
        929: "i18n/zh-json",
        932: "i18n/en-json",
        964: "i18n/ru-json",
        968: "i18n/es-json",
        999: "i18n/external-sdk-es-json",
      })[e] || e) +
      "." +
      a.h() +
      ".js"),
    (a.h = () => "cd8b933d1b9c56a01cee"),
    (a.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (i = {}),
    (r = "game-score-sdk:"),
    (a.l = (e, t, n, s) => {
      if (i[e]) i[e].push(t);
      else {
        var o, c;
        if (void 0 !== n)
          for (
            var l = document.getElementsByTagName("script"), h = 0;
            h < l.length;
            h++
          ) {
            var u = l[h];
            if (
              u.getAttribute("src") == e ||
              u.getAttribute("data-webpack") == r + n
            ) {
              o = u;
              break;
            }
          }
        (o ||
          ((c = !0),
          ((o = document.createElement("script")).charset = "utf-8"),
          (o.timeout = 120),
          a.nc && o.setAttribute("nonce", a.nc),
          o.setAttribute("data-webpack", r + n),
          (o.src = e),
          0 !== o.src.indexOf(window.location.origin + "/") &&
            (o.crossOrigin = "anonymous")),
          (i[e] = [t]));
        var d = (t, r) => {
            ((o.onerror = o.onload = null), clearTimeout(p));
            var n = i[e];
            if (
              (delete i[e],
              o.parentNode && o.parentNode.removeChild(o),
              n && n.forEach((e) => e(r)),
              t)
            )
              return t(r);
          },
          p = setTimeout(
            d.bind(null, void 0, { type: "timeout", target: o }),
            12e4,
          );
        ((o.onerror = d.bind(null, o.onerror)),
          (o.onload = d.bind(null, o.onload)),
          c && document.head.appendChild(o));
      }
    }),
    (a.r = (e) => {
      ("undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 }));
    }),
    (a.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e;
      a.g.importScripts && (e = a.g.location + "");
      var t = a.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var i = t.getElementsByTagName("script");
        i.length && (e = i[i.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      ((e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (a.p = e));
    })(),
    (() => {
      var e = { 436: 0 };
      a.f.j = (t, i) => {
        var r = a.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) i.push(r[2]);
          else {
            var n = new Promise((i, n) => (r = e[t] = [i, n]));
            i.push((r[2] = n));
            var s = a.p + a.u(t),
              o = new Error();
            a.l(
              s,
              (i) => {
                if (a.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var n = i && ("load" === i.type ? "missing" : i.type),
                    s = i && i.target && i.target.src;
                  ((o.message =
                    "Loading chunk " + t + " failed.\n(" + n + ": " + s + ")"),
                    (o.name = "ChunkLoadError"),
                    (o.type = n),
                    (o.request = s),
                    r[1](o));
                }
              },
              "chunk-" + t,
              t,
            );
          }
      };
      var t = (t, i) => {
          var r,
            n,
            [s, o, c] = i,
            l = 0;
          for (r in o) a.o(o, r) && (a.m[r] = o[r]);
          for (c && c(a), t && t(i); l < s.length; l++)
            ((n = s[l]), a.o(e, n) && e[n] && e[n][0](), (e[s[l]] = 0));
        },
        i = (self.webpackChunkgame_score_sdk =
          self.webpackChunkgame_score_sdk || []);
      (i.forEach(t.bind(null, 0)), (i.push = t.bind(null, i.push.bind(i))));
    })(),
    (() => {
      "use strict";
      a(2096);
      var e = a(4943),
        t = a.n(e),
        i = a(4293),
        r = a(8293),
        n = a(5979),
        s = a(3379),
        o = a.n(s),
        c = a(8205);
      (o()(c.Z, { insert: "head", singleton: !1 }), c.Z.locals);
      var l,
        h,
        u,
        d,
        p,
        f,
        v = a(6558),
        y = a(9503),
        m = function (e, t, i, r) {
          return new (i || (i = Promise))(function (n, s) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        g = function (e, t, i, r, n) {
          if ("m" === r) throw new TypeError("Private method is not writable");
          if ("a" === r && !n)
            throw new TypeError(
              "Private accessor was defined without a setter",
            );
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it",
            );
          return (
            "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i),
            i
          );
        },
        w = function (e, t, i, r) {
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e);
        };
      class b {
        constructor(e = []) {
          ((this.storages = e),
            l.add(this),
            h.set(this, void 0),
            u.set(this, ""),
            d.set(this, !0),
            p.set(this, void 0),
            (this.isEmptyOnBoot = !0),
            (this.temp = {}),
            g(this, h, (0, r._)(), "f"),
            (this.ready = w(this, h, "f").ready));
        }
        get _storages() {
          return this.storages;
        }
        get activeStorages() {
          return w(this, d, "f") ? this.storages : this.localStorages;
        }
        get localStorages() {
          return this.storages.filter(
            (e) => !0 === e.isLocal || null === e.isLocal,
          );
        }
        setStorages(e, t) {
          ((this.storages = e),
            g(this, p, t, "f"),
            Promise.all([
              this._get(e, "context"),
              this._get(w(this, p, "f"), "config"),
            ]).then(([e, t]) => {
              (g(this, u, e || "", "f"),
                (this.isEmptyOnBoot = !t),
                w(this, h, "f").done());
            }));
        }
        replaceStorages(e) {
          this.storages = e;
        }
        _get(e, t) {
          const i = (0, r._)();
          return (
            Promise.all(
              e.map((e) => {
                const i = (0, r._)(r.s);
                return (
                  e
                    .get(t)
                    .then((e) => {
                      i.done(e);
                    })
                    .catch(i.abort),
                  i.ready.catch((e) => (v.kg.warn(e), null))
                );
              }),
            ).then((e) => {
              i.done(e.find((e) => null != e));
            }),
            i.ready
          );
        }
        _set(e, t, i) {
          return Promise.all(e.map((e) => e.set(t, i)));
        }
        set(e, t, i) {
          return this._set(e, `${t}${w(this, u, "f")}`, i);
        }
        setRaw(e, t, i) {
          return this._set(e, `${t}`, i);
        }
        get(e, t) {
          return this._get(e, `${t}${w(this, u, "f")}`);
        }
        getRaw(e, t) {
          return this._get(e, `${t}`);
        }
        isEmptyContext() {
          return !w(this, u, "f");
        }
        setContext(e) {
          (g(this, u, e, "f"),
            this._set(this.localStorages, "context", w(this, u, "f")));
        }
        migrateToContext(e) {
          return m(this, void 0, void 0, function* () {
            g(this, u, "", "f");
            const [t, i, r] = yield Promise.all([
                this.loadPlayer(),
                this.loadSecretCode(),
                this.loadLanguage(),
              ]),
              n = i || (null == t ? void 0 : t.secretCode);
            return (
              g(this, u, e, "f"),
              yield Promise.all([
                this.savePlayer(t, w(this, d, "f")),
                this.saveSecretCode(n),
                this.saveLanguage(r),
              ]),
              g(this, u, "", "f"),
              yield Promise.all([
                this.savePlayer(null, w(this, d, "f")),
                this.saveSecretCode(null),
                this.saveLanguage(null),
              ]),
              [t, n]
            );
          });
        }
        clearContext(e, t) {
          return m(this, void 0, void 0, function* () {
            const i = w(this, u, "f");
            (g(this, u, e, "f"),
              yield Promise.all([
                this.savePlayer(null, t),
                this.saveSecretCode(null),
                this.saveLanguage(null),
              ]),
              g(this, u, i, "f"));
          });
        }
        extractFromContext(e, t = !1) {
          return m(this, void 0, void 0, function* () {
            const i = w(this, u, "f");
            g(this, u, e, "f");
            const [r, n, s] = yield Promise.all(
                t
                  ? [
                      this.loadPlayerFromLocalStorage(),
                      this.loadSecretCodeFromLocalStorage(),
                      this.loadLanguage(),
                    ]
                  : [
                      this.loadPlayer(),
                      this.loadSecretCode(),
                      this.loadLanguage(),
                    ],
              ),
              a = n || (null == r ? void 0 : r.secretCode);
            return (g(this, u, i, "f"), [r, a, s]);
          });
        }
        copyFromContext(e, t, i) {
          return m(this, void 0, void 0, function* () {
            const r = w(this, u, "f"),
              [n, s, a] = yield this.extractFromContext(e);
            (g(this, u, t, "f"),
              yield Promise.all([
                this.savePlayer(n, i),
                this.saveSecretCode(s),
                this.saveLanguage(a),
              ]),
              g(this, u, r, "f"));
          });
        }
        checkIsMigrated(e) {
          return m(this, void 0, void 0, function* () {
            let t = !1;
            try {
              t = yield this.get(w(this, p, "f"), `migrated:${e}`);
            } catch (e) {}
            return !!t;
          });
        }
        setMigrated(e) {
          return m(this, void 0, void 0, function* () {
            return this.set(w(this, p, "f"), `migrated:${e}`, !0);
          });
        }
        loadPlayer() {
          return this.get(this.activeStorages, "players").then(
            w(this, l, "m", f),
          );
        }
        loadPlayerFromPlatformCloud() {
          const e = this.storages.filter((e) => !e.isLocal);
          return this.get(e, "players").then(([e] = [null]) => e);
        }
        loadPlayerFromLocalStorage() {
          return this.get(this.localStorages, "players").then(
            w(this, l, "m", f),
          );
        }
        savePlayer(e, t) {
          return this.set(t ? this.storages : this.localStorages, "players", [
            e,
          ]).catch(v.kg.warn);
        }
        loadSecretCode() {
          return m(this, void 0, void 0, function* () {
            return this.get(this.activeStorages, "sk").catch(v.kg.warn);
          });
        }
        loadSecretCodeFromLocalStorage() {
          return m(this, void 0, void 0, function* () {
            return this.get(this.localStorages, "sk").catch(v.kg.warn);
          });
        }
        saveSecretCode(e) {
          return this.set(this.activeStorages, "sk", e).catch(v.kg.warn);
        }
        setLocalRaw(e, t) {
          return this.setRaw(this.localStorages, e, t).catch(v.kg.warn);
        }
        getLocalRaw(e) {
          return this.getRaw(this.localStorages, e).catch(v.kg.warn);
        }
        loadLanguage() {
          return this.get(w(this, p, "f"), "lang").catch(
            (e) => (v.kg.warn(e), null),
          );
        }
        saveLanguage(e) {
          return this.set(w(this, p, "f"), "lang", e).catch(v.kg.warn);
        }
        loadConfig() {
          return this._get(w(this, p, "f"), "config")
            .then((e) => Object.assign(Object.assign({}, y.lR), e))
            .catch((e) => (v.kg.warn(e), y.lR));
        }
        saveConfig(e) {
          return this._set(w(this, p, "f"), "config", e).catch(v.kg.warn);
        }
        loadAdsInfo() {
          const e = this._get(w(this, p, "f"), "adsInfo")
            .then((e) => Object.assign(Object.assign({}, y.GH), e))
            .catch((e) => (v.kg.warn(e), y.GH));
          return (e.then((e) => (this.temp.adsInfo = e)), e);
        }
        saveAdsInfo(e) {
          return this._set(w(this, p, "f"), "adsInfo", e).catch(v.kg.warn);
        }
        saveIsExistsShortcut(e) {
          this.set(w(this, p, "f"), "isExistsShortcut", e);
        }
        loadIsExistsShortcut() {
          return this.get(w(this, p, "f"), "isExistsShortcut");
        }
        isCrazyGamesAccountLinked(e) {
          var t;
          return m(this, void 0, void 0, function* () {
            return Boolean(
              null !==
                (t = yield this.getRaw(
                  this.localStorages,
                  `crazyGames.account${e}.linked`,
                )) &&
                void 0 !== t &&
                t,
            );
          });
        }
        setCrazyGamesAccountLinked(e) {
          return m(this, void 0, void 0, function* () {
            yield this.setRaw(
              this.localStorages,
              `crazyGames.account${e}.linked`,
              !0,
            );
          });
        }
        setSaveInPlatformStorage(e) {
          g(this, d, e, "f");
        }
      }
      ((h = new WeakMap()),
        (u = new WeakMap()),
        (d = new WeakMap()),
        (p = new WeakMap()),
        (l = new WeakSet()),
        (f = function (e) {
          if (!e) return null;
          const [t] = e;
          return t;
        }));
      var E = a(6388),
        P = function (e, t, i, r) {
          return new (i || (i = Promise))(function (n, s) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((r = r.apply(e, t || [])).next());
          });
        };
      class S extends Error {
        constructor() {
          (super("throttled invocation was canceled"),
            (this.name = "CanceledError"));
        }
      }
      class _ {
        constructor(e, t) {
          this.canceled = !1;
          const i = new Promise((e) => {
            ((this.timeout = setTimeout(e, t)), (this.resolve = e));
          });
          this.ready = e.then(
            () => i,
            () => i,
          );
        }
        flush() {
          (clearTimeout(this.timeout), this.resolve());
        }
        cancel() {
          ((this.canceled = !0), clearTimeout(this.timeout), this.resolve());
        }
        then(e) {
          return this.ready.then(() => {
            if (this.canceled) throw new S();
            return e();
          });
        }
      }
      function A(e, t, i = {}) {
        const r = null != t && Number.isFinite(t) ? Math.max(t, 0) : 0,
          n = i.getNextArgs || ((e, t) => t);
        let s,
          a = Promise.resolve(),
          o = new _(a, 0),
          c = null;
        function l() {
          const t = s;
          ((c = null), (s = null));
          const i = (() =>
            P(this, void 0, void 0, function* () {
              return yield e.apply(this, t);
            }))();
          return ((o = new _(i, r)), i);
        }
        function h(...e) {
          return ((s = s ? n(s, e) : e), c || (c = o.then(l.bind(this))), c);
        }
        return (
          (h.cancel = () =>
            P(this, void 0, void 0, function* () {
              const e = a;
              (o.cancel(),
                (c = null),
                (s = null),
                (a = Promise.resolve()),
                (o = new _(a, 0)),
                yield e);
            })),
          (h.flush = () =>
            P(this, void 0, void 0, function* () {
              (o.flush(), yield a);
            })),
          h
        );
      }
      function T(e) {
        return function (t, i, r) {
          const n = r.value;
          return ((r.value = A(n, e)), r);
        };
      }
      A.CanceledError = S;
      const O = (e) => {
        if ("Problem" === (null == e ? void 0 : e.__typename)) throw e.message;
      };
      new TextEncoder();
      var C = a(6480),
        R = function (e, t, i, r) {
          var n,
            s = arguments.length,
            a =
              s < 3
                ? t
                : null === r
                  ? (r = Object.getOwnPropertyDescriptor(t, i))
                  : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, i, r);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (n = e[o]) &&
                (a = (s < 3 ? n(a) : s > 3 ? n(t, i, a) : n(t, i)) || a);
          return (s > 3 && a && Object.defineProperty(t, i, a), a);
        },
        k = function (e, t, i, r) {
          return new (i || (i = Promise))(function (n, s) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((r = r.apply(e, t || [])).next());
          });
        };
      class I extends E.Z {
        constructor(e) {
          (super(), (this.gp = e));
        }
        open(e = { orderBy: ["score"] }) {
          return k(this, void 0, void 0, function* () {
            e.orderBy &&
              "string" == typeof e.orderBy &&
              (e.orderBy = [e.orderBy]);
            const t = (Array.isArray(e.orderBy) ? e.orderBy : ["score"]).filter(
              (e) => "" !== e,
            );
            e = Object.assign(Object.assign({}, e), { orderBy: t });
            const [i] = yield Promise.all([
              this.fetch(e),
              this.gp.loadOverlay(),
            ]);
            (this._events.emit("open"),
              yield this.gp.overlay.openLeaderboard(e, i),
              this._events.emit("close"));
          });
        }
        openScoped(e) {
          return k(this, void 0, void 0, function* () {
            const [t] = yield Promise.all([
                this.fetchScoped(e),
                this.gp.loadOverlay(),
              ]),
              i = Object.assign({}, e),
              r = t.fields.map((e) => e.key);
            ((i.orderBy = e.includeFields
              ? r.filter((t) => !e.includeFields.includes(t))
              : r),
              this._events.emit("open"),
              yield this.gp.overlay.openLeaderboard(i, t),
              this._events.emit("close"));
          });
        }
        fetch(e = {}) {
          return k(this, void 0, void 0, function* () {
            const t = (0, r._)();
            this.gp.loader.inc();
            const { showNearest: i, withMe: n, limit: s } = e,
              a = Object.assign(Object.assign({}, e), {
                showNearest: (0, C.pY)(i),
                withMe: (0, C.oo)(i, n),
              });
            try {
              const { result: e, playerResult: i } =
                yield this.gp._services.leaderboardsService.getRating(a);
              (O(e),
                O(i),
                D(e, i, a.showNearest, a.withMe, (0, C.wQ)(s, e.leaderboard)),
                t.done(e),
                this._events.emit("fetch", e));
            } catch (e) {
              (t.abort(e), this._events.emit("error:fetch"));
            } finally {
              this.gp.loader.dec();
            }
            return t.ready;
          });
        }
        fetchScoped(e) {
          return k(this, void 0, void 0, function* () {
            const t = (0, r._)();
            this.gp.loader.inc();
            const { showNearest: i, withMe: n, limit: s } = e,
              a = Object.assign(Object.assign({}, e), {
                showNearest: (0, C.pY)(i),
                withMe: (0, C.oo)(i, n),
              });
            try {
              const e =
                  yield this.gp._services.leaderboardsService.getRatingVariant(
                    a,
                  ),
                { result: i, playerResult: r } = e;
              (O(i),
                O(r),
                D(i, r, a.showNearest, a.withMe, (0, C.wQ)(s, i.leaderboard)),
                t.done(i),
                this._events.emit("fetch", i));
            } catch (e) {
              (t.abort(e), this._events.emit("error:fetch"));
            } finally {
              this.gp.loader.dec();
            }
            return t.ready;
          });
        }
        fetchPlayerRating(e = {}) {
          return k(this, void 0, void 0, function* () {
            const t = (0, r._)();
            this.gp.loader.inc();
            const { showNearest: i } = e,
              n = Object.assign(Object.assign({}, e), {
                showNearest: (0, C.pY)(i),
              });
            try {
              const e =
                yield this.gp._services.leaderboardsService.getPlayerRating(n);
              (O(e), t.done(e), this._events.emit("fetchPlayer", e));
            } catch (e) {
              (t.abort(e), this._events.emit("error:fetchPlayer", e));
            } finally {
              this.gp.loader.dec();
            }
            return t.ready;
          });
        }
        fetchPlayerRatingScoped(e) {
          return k(this, void 0, void 0, function* () {
            const t = (0, r._)();
            this.gp.loader.inc();
            const { showNearest: i } = e,
              n = Object.assign(Object.assign({}, e), {
                showNearest: (0, C.pY)(i),
              });
            try {
              const e =
                yield this.gp._services.leaderboardsService.getPlayerRatingVariant(
                  n,
                );
              (O(e), t.done(e), this._events.emit("fetchPlayerScoped", e));
            } catch (e) {
              (t.abort(e), this._events.emit("error:fetchPlayerScoped", e));
            } finally {
              this.gp.loader.dec();
            }
            return t.ready;
          });
        }
        publishRecord(e) {
          return k(this, void 0, void 0, function* () {
            const t = (0, r._)();
            this.gp.loader.inc();
            try {
              const i =
                yield this.gp._services.leaderboardsService.publishRecord(e);
              (t.done(i), this._events.emit("publishRecord", i));
            } catch (e) {
              (t.abort(e), this._events.emit("error:publishRecord", e));
            } finally {
              this.gp.loader.dec();
            }
            return t.ready;
          });
        }
      }
      function D(e, t, i, r, n) {
        ((e.countOfPlayersAbove = (0, C.q3)(
          e.players,
          (null == t ? void 0 : t.abovePlayers) || [],
        )),
          (e.topPlayers = [...e.players]),
          (e.countOfTopPlayers = e.topPlayers.length),
          (e.abovePlayers = [...((null == t ? void 0 : t.abovePlayers) || [])]),
          (e.belowPlayers = [...((null == t ? void 0 : t.belowPlayers) || [])]),
          (e.player = (null == t ? void 0 : t.player) || null),
          (e.players = (function (e, t, i, r, n, s, a) {
            if (!r || !t || "none" === t) return e;
            if (e.some((e) => e.id === r.id && e.position === r.position))
              return e.map((e) => (r.id === e.id ? r : e));
            const o = e.length,
              c = r.position - 1;
            if (c > o) {
              const t = e.findIndex((e) => e.id === r.id);
              t >= 0 &&
                e.forEach((e, i) => {
                  i >= t && (e.position -= 1);
                });
            }
            if (
              (n && 0 !== n.length && c > i - 1 && (e = [...n, ...e]),
              s && 0 !== s.length && c > i - 1 && (e = [...e, ...s]),
              c < o)
            )
              (e.splice(c, 0, r),
                e.forEach((e, t) => {
                  t <= c || e.position++;
                }),
                e.length > o && e.pop());
            else
              switch (t) {
                case "first":
                  e.unshift(r);
                  break;
                case "last":
                  e.push(r);
              }
            return (
              (e = Array.from(new Map(e.map((e) => [e.id, e])).values())),
              a && (e = e.sort((e, t) => e.position - t.position)),
              e
            );
          })(
            e.players,
            (0, C.oo)(i, r),
            (0, C.wQ)(n, e.leaderboard),
            null == t ? void 0 : t.player,
            null == t ? void 0 : t.abovePlayers,
            null == t ? void 0 : t.belowPlayers,
            (0, C.pY)(i),
          )));
      }
      (R([T(500)], I.prototype, "open", null),
        R([T(500)], I.prototype, "openScoped", null),
        R([T(500)], I.prototype, "fetch", null),
        R([T(500)], I.prototype, "fetchScoped", null),
        R([T(500)], I.prototype, "fetchPlayerRating", null),
        R([T(500)], I.prototype, "fetchPlayerRatingScoped", null),
        R([T(500)], I.prototype, "publishRecord", null));
      var x,
        N,
        M,
        L,
        F = a(5942),
        j = function (e, t, i, r) {
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e);
        },
        U = function (e, t, i, r, n) {
          if ("m" === r) throw new TypeError("Private method is not writable");
          if ("a" === r && !n)
            throw new TypeError(
              "Private accessor was defined without a setter",
            );
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it",
            );
          return (
            "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i),
            i
          );
        };
      const G = {
          data: (e) => String(e || ""),
          stats: (e) => Number(e) || 0,
          flag: (e) => Boolean(e) || !1,
          service: null,
          accounts: null,
        },
        B = ["name", "avatar"];
      class $ extends E.Z {
        constructor(e = {}, t, i) {
          (super(),
            (this.coreSdk = i),
            x.add(this),
            (this.credentials = ""),
            (this.modifiedAt = ""),
            (this.saveFormat = ""),
            N.set(this, {}),
            M.set(this, []),
            (this._wasReset = !1),
            (this.isPublicFieldsDirty = !1),
            j(this, x, "m", L).call(this, t),
            this.fromJSON(e));
        }
        get id() {
          return this.state.id;
        }
        get score() {
          return this.get("score");
        }
        set score(e) {
          this.set("score", e);
        }
        get name() {
          return this.get("name");
        }
        set name(e) {
          this.set("name", e);
        }
        get avatar() {
          return this.get("avatar");
        }
        set avatar(e) {
          this.set("avatar", e);
        }
        get isStub() {
          return !this.fields
            .filter((e) => !e.key.endsWith(":timestamp") && !B.includes(e.key))
            .some((e) => this.get(e.key) !== e.default);
        }
        fromJSON(e) {
          var t, i, r;
          ((this.state = {
            id: e.id || 0,
            active: null === (t = e.active) || void 0 === t || t,
            removed: null !== (i = e.removed) && void 0 !== i && i,
            test: null !== (r = e.test) && void 0 !== r && r,
            name: e.name || "",
            avatar: e.avatar || "",
            score: e.score || 0,
            credentials: e.credentials || "",
          }),
            e.credentials && (this.credentials = String(e.credentials)),
            e.modifiedAt && (this.modifiedAt = String(e.modifiedAt)),
            e.saveFormat && (this.saveFormat = e.saveFormat || ""),
            this.fields.forEach((t) => {
              if (!(t.key in e)) return void (this.state[t.key] = t.default);
              const i = G[t.type];
              if (!i) return void (this.state[t.key] = e[t.key] || t.default);
              const r = i(e[t.key]);
              ((this.state[t.key] =
                t.variants.length && !t.variants.some((e) => e.value === r)
                  ? t.default
                  : r),
                t.intervalIncrement &&
                  (function (e, t, i, r) {
                    (Object.defineProperty(r, `${i.key}:secondsLeft`, {
                      enumerable: !1,
                      get: () => {
                        const r = t.get(`${i.key}:incrementValue`) < 0,
                          n = r ? t.getMinValue(i.key) : t.getMaxValue(i.key),
                          s = t.get(i.key);
                        if (void 0 !== n) {
                          if (r && s <= n) return 0;
                          if (!r && s >= n) return 0;
                        }
                        const a = t.get(`${i.key}:timestamp`);
                        if (!a) return 0;
                        const o = new Date(a);
                        if (isNaN(o.getTime())) return 0;
                        const c =
                            new Date(e.serverTime).getTime() - o.getTime(),
                          l =
                            t.get(`${i.key}:incrementInterval`) -
                            Math.ceil(c / 1e3);
                        return l >= 0 ? l : 0;
                      },
                    }),
                      Object.defineProperty(r, `${i.key}:secondsLeftTotal`, {
                        enumerable: !1,
                        get: () => {
                          const e = t.get(`${i.key}:incrementValue`),
                            r = e < 0,
                            n = r ? t.getMinValue(i.key) : t.getMaxValue(i.key),
                            s = t.get(i.key);
                          if (void 0 !== n) {
                            if (r && s <= n) return 0;
                            if (!r && s >= n) return 0;
                          }
                          const a = t.get(`${i.key}:incrementInterval`),
                            o = r ? s - n : n - s,
                            c =
                              Math.ceil(o / Math.abs(e)) * a -
                              (a - t.get(`${i.key}:secondsLeft`));
                          return c >= 0 ? c : 0;
                        },
                      }));
                  })(this.coreSdk, this, t, this.state));
            }),
            this._events.emit("change"));
        }
        toJSON() {
          return Object.assign(Object.assign({}, this.state), {
            modifiedAt: this.coreSdk.serverTime,
            saveFormat: this.coreSdk.platform.saveFormat.format,
            credentials: this.credentials,
          });
        }
        getField(e) {
          const t = j(this, N, "f")[e];
          if (!t) {
            const t = `Field "${e}" not exists on player model`;
            throw (v.kg.error(t), new Error(t));
          }
          return t;
        }
        getFieldName(e) {
          return this.getField(e).name || "";
        }
        getFieldVariantName(e, t) {
          var i;
          return (
            (null ===
              (i = this.getField(e).variants.find((e) => e.value === t)) ||
            void 0 === i
              ? void 0
              : i.name) || ""
          );
        }
        getMinValue(e) {
          var t;
          if (
            null ==
            (null === (t = this.getField(e).limits) || void 0 === t
              ? void 0
              : t.min)
          ) {
            const t = `minValue not exists on field "${e}"`;
            throw (v.kg.error(t), new Error(t));
          }
          return this.get(`${e}:min`);
        }
        getMaxValue(e) {
          var t;
          if (
            null ==
            (null === (t = this.getField(e).limits) || void 0 === t
              ? void 0
              : t.max)
          ) {
            const t = `maxValue not exists on field "${e}"`;
            throw (v.kg.error(t), new Error(t));
          }
          return this.get(`${e}:max`);
        }
        get(e) {
          return this.state[e];
        }
        set(e, t) {
          var i, r;
          const n = this.state[e];
          if (((this.state[e] = this._convert(e, t)), n !== this.state[e])) {
            this.updateTime = Date.now();
            const t = this.getField(e);
            if ((t.public && (this.isPublicFieldsDirty = !0), t.limits)) {
              const { couldGoOverLimit: n } = t.limits,
                s = this.get(`${e}:max`),
                a = this.get(`${e}:min`),
                o = this.get(`${t.key}:incrementValue`),
                c = this.get(t.key),
                l = `${t.key}:timestamp`;
              null !== t.limits.max && c >= s
                ? (n || (this.state[e] = s),
                  this._events.emit("field:maximum", { field: t }),
                  t.intervalIncrement && o > 0 && (this.state[l] = ""))
                : null !== t.limits.min &&
                  c <= a &&
                  ((this.state[e] = a),
                  this._events.emit("field:minimum", { field: t }),
                  t.intervalIncrement && o < 0 && (this.state[l] = ""));
              const h = !!(null === (i = this.state[l]) || void 0 === i
                ? void 0
                : i.length);
              t.intervalIncrement &&
                !h &&
                ((o > 0 && c < s) || (o < 0 && c > a)) &&
                (this.state[`${t.key}:timestamp`] = new Date(
                  null === (r = this.coreSdk) || void 0 === r
                    ? void 0
                    : r.serverTime,
                ).toISOString());
            }
            this._events.emit("change");
          }
        }
        add(e, t) {
          return this.set(e, this.get(e) + this._convert(e, t));
        }
        toggle(e) {
          return this.set(e, !this.get(e));
        }
        has(e) {
          return Boolean(this.get(e));
        }
        reset() {
          ((this._wasReset = !0),
            this.fields.forEach((e) => this.set(e.key, e.default)));
        }
        remove() {
          ((this.state.id = 0), this.reset());
        }
        _convert(e, t) {
          const i = this.getField(e),
            r = G[i.type];
          if (!r) {
            const t = `Cannot mutate "${e}", it's readonly`;
            throw (v.kg.error(t), new Error(t));
          }
          const n = r(t);
          if (i.variants.length && !i.variants.some((e) => e.value === n)) {
            const t = `Invalid variant ${n} of "${e}"`;
            throw (v.kg.error(t), new Error(t));
          }
          return n;
        }
        _initializeIncrementFields() {
          j(this, M, "f").forEach((e) => {
            e.intervalIncrement && this._incrementField(e);
          });
        }
        _incrementField(e) {
          const t = this.get(e.key),
            i = this.get(`${e.key}:max`),
            r = this.get(`${e.key}:min`),
            n = this.get(`${e.key}:incrementInterval`),
            s = this.get(`${e.key}:incrementValue`),
            a = Date.parse(this.coreSdk.serverTime),
            o = Date.parse(this.get(`${e.key}:timestamp`)) || a,
            c = (a - o) / 1e3,
            l = Math.floor(c / n);
          if (l > 0 && ((s > 0 && t < i) || (s < 0 && t > r))) {
            let a = t + l * s;
            ((a = Math.min(Math.max(a, r), i)),
              this._events.emit("field:increment", {
                field: e,
                oldValue: t,
                newValue: a,
              }),
              this.set(e.key, a));
            const c = n * l * 1e3 + o;
            this.state[`${e.key}:timestamp`] = new Date(c).toISOString();
          }
        }
        _syncIncrementVariable() {
          this._initializeIncrementFields();
        }
      }
      ((N = new WeakMap()),
        (M = new WeakMap()),
        (x = new WeakSet()),
        (L = function (e) {
          ((this.fields = e),
            U(
              this,
              M,
              e.filter((e) => !!e.limits),
              "f",
            ),
            U(this, N, {}, "f"),
            e.forEach((e) => {
              j(this, N, "f")[e.key] = e;
            }));
        }));
      const V = [],
        W = (e) => (
          V.push(e),
          () => {
            V.splice(V.indexOf(e), 1);
          }
        );
      let q = performance.now();
      const Y = (e) => {
        const t = e - q;
        ((q = e), V.forEach((e) => e(t)), requestAnimationFrame(Y));
      };
      requestAnimationFrame(Y);
      var z,
        K,
        J,
        Z,
        X,
        H,
        Q,
        ee,
        te,
        ie,
        re,
        ne,
        se,
        ae,
        oe,
        ce,
        le,
        he,
        ue,
        de,
        pe,
        fe,
        ve,
        ye = a(180),
        me = a(3357),
        ge = function (e, t, i, r) {
          var n,
            s = arguments.length,
            a =
              s < 3
                ? t
                : null === r
                  ? (r = Object.getOwnPropertyDescriptor(t, i))
                  : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, i, r);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (n = e[o]) &&
                (a = (s < 3 ? n(a) : s > 3 ? n(t, i, a) : n(t, i)) || a);
          return (s > 3 && a && Object.defineProperty(t, i, a), a);
        },
        we = function (e, t, i, r) {
          return new (i || (i = Promise))(function (n, s) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        be = function (e, t, i, r, n) {
          if ("m" === r) throw new TypeError("Private method is not writable");
          if ("a" === r && !n)
            throw new TypeError(
              "Private accessor was defined without a setter",
            );
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it",
            );
          return (
            "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i),
            i
          );
        },
        Ee = function (e, t, i, r) {
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e);
        };
      const Pe = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/,
        Se = {
          local: ye.pQ.Local,
          platform: ye.pQ.Platform,
          cloud: ye.pQ.Cloud,
        };
      class _e extends $ {
        constructor(e = {}, t, i, n, s, a) {
          (super(e, t, n),
            (this.playerAdapter = i),
            (this.coreSDk = n),
            z.add(this),
            (this.isLoggedIn = !1),
            (this.isLoggedInByPlatform = !1),
            (this.hasAnyCredentials = !1),
            (this.secretCode = ""),
            (this.tempSecredCode = ""),
            (this._hasFirstSync = !1),
            (this.isFirstRequest = !1),
            (this.credentials = ""),
            (this.stats = {
              activeDays: 0,
              activeDaysConsecutive: 0,
              playtimeAll: 0,
              playtimeToday: 0,
            }),
            K.set(this, ""),
            J.set(this, void 0),
            Z.set(this, ""),
            X.set(this, !1),
            H.set(this, {}),
            (this._platformData = {}),
            Q.set(this, void 0),
            ee.set(this, () => {}),
            te.set(this, {}),
            ie.set(this, {}),
            re.set(this, void 0),
            le.set(this, function (e = {}) {
              return we(this, void 0, void 0, function* () {
                const {
                  silent: t = !0,
                  override: i = !1,
                  storage: n = "preferred",
                } = e;
                this.gp.loader.inc();
                const s = (0, r._)();
                Ee(this, te, "f")[n] = this.gp.serverTime;
                const a = Se[n] || this.gp.platform.config.progressSaveFormat;
                let o = !1;
                const {
                  isLocalSave: c,
                  isCloudSave: l,
                  isPlatformSave: h,
                } = (0, me.q)(a);
                yield this.gp._storage
                  .savePlayer(this.toJSON(), !c)
                  .catch(v.kg.warn);
                try {
                  yield Ee(this, z, "m", oe).call(
                    this,
                    t,
                    e._isFromLoginWindow,
                  );
                  const r =
                    this.gp.platform.config.alwaysSyncPublicFields &&
                    this.isPublicFieldsDirty;
                  if (
                    r ||
                    (Ee(this, J, "f").isDirty() && l) ||
                    l ||
                    this.isFirstRequest
                  ) {
                    const e = this.toJSON();
                    !l &&
                      r &&
                      this.fields.forEach((t) => {
                        t.public || delete e[t.key];
                      });
                    const n = yield this.gp._services.playerService.sync(
                      Object.assign(
                        { override: i, playerState: e },
                        Ee(this, J, "f").export(),
                      ),
                      { withToken: this.isFirstRequest },
                    );
                    switch (n.__typename) {
                      case "PlayerSyncConflict": {
                        this.gp.loader.dec();
                        const e = n;
                        let i;
                        (h
                          ? (i = this.toJSON())
                          : (yield this.gp.loadOverlay(),
                            (o = !0),
                            yield this.playerAdapter.authFinished,
                            (i =
                              yield this.gp.overlay.pickPlayerOnConflict(e))),
                          this.has("name") &&
                            !i.name &&
                            (i.name = this.get("name")),
                          this.has("avatar") &&
                            !i.avatar &&
                            (i.avatar = this.get("avatar")),
                          this.gp.loader.inc());
                        const r = yield this.gp._services.playerService.sync(
                          Object.assign(
                            { playerState: i, override: !0 },
                            Ee(this, J, "f").export(),
                          ),
                          { withToken: this.isFirstRequest },
                        );
                        if ("Player" !== r.__typename) return void s.abort();
                        (t || Ee(this, z, "m", pe).call(this, ""),
                          o && this.gp.overlay.close(),
                          yield Ee(this, z, "m", ue).call(this, r, a),
                          s.done(),
                          yield Ee(this, z, "m", de).call(this, r.state));
                        break;
                      }
                      case "Player": {
                        const { state: e } = n;
                        (t || Ee(this, z, "m", pe).call(this, ""),
                          yield Ee(this, z, "m", ue).call(this, n, a),
                          s.done(),
                          yield Ee(this, z, "m", de).call(this, e),
                          this.playerAdapter.publishRecord(e));
                        break;
                      }
                    }
                  } else if (t)
                    yield this.gp._storage
                      .savePlayer(this.toJSON(), !c)
                      .catch(v.kg.warn);
                  else {
                    const e =
                        yield this.gp._storage.loadPlayerFromPlatformCloud(),
                      t = yield this.gp._services.playerService.getPlayer({
                        withToken: !0,
                      });
                    let i = e;
                    ((!e || new $(e, this.fields, this.gp).isStub) &&
                      (i = t.state),
                      (t.state = i),
                      Ee(this, z, "m", ue).call(this, t, a),
                      s.done(),
                      yield Ee(this, z, "m", de).call(this, i),
                      this.playerAdapter.publishRecord(i));
                  }
                  s.done();
                } catch (e) {
                  s.abort(e);
                } finally {
                  ((this._hasFirstSync = !0),
                    (this.isPublicFieldsDirty = !1),
                    (this.isFirstRequest = !1),
                    this.gp.loader.dec());
                }
                const u = {
                  options: {
                    silent: t,
                    override: i,
                    storage: n,
                    progressSaveFormat: a,
                  },
                };
                return (
                  s.ready
                    .then(() => this._events.emit("sync", !0, u))
                    .catch(() => this._events.emit("sync", !1, u)),
                  s.ready
                );
              });
            }),
            he.set(this, function () {
              return we(this, void 0, void 0, function* () {
                this.gp.loader.inc();
                try {
                  const e = yield this.gp._services.playerService.getPlayer({
                      withToken: !0,
                    }),
                    t = yield this.gp._storage.loadPlayerFromLocalStorage();
                  if (null == t ? void 0 : t.saveFormat) {
                    const { isCloudSave: i } = (0, me.q)(t.saveFormat),
                      { isCloudSave: r } = (0, me.q)(
                        this.gp.platform.config.progressSaveFormat,
                      );
                    !i &&
                      r &&
                      (e.state = Object.assign(Object.assign({}, e.state), t));
                  }
                  (yield Ee(this, z, "m", ue).call(
                    this,
                    e,
                    this.gp.platform.saveFormat.format,
                  ),
                    yield Ee(this, z, "m", de).call(this, e.state),
                    this._events.emit("load", !0));
                } catch (e) {
                  (v.kg.error(e), this._events.emit("load", !1));
                } finally {
                  (this.gp.loader.dec(), (this.isFirstRequest = !1));
                }
              });
            }),
            (this.gp = this.coreSDk),
            be(this, re, (0, r._)(), "f"),
            (this.ready = Ee(this, re, "f").ready),
            be(this, Q, a, "f"),
            be(this, J, s, "f"),
            be(
              this,
              Z,
              `,${this.coreSDk.platform.type}${Ee(this, z, "a", ne) ? `:${this.gp.platform.tag}` : ""},${this.coreSDk.isDev ? "d" : "p"},`,
              "f",
            ),
            s.on("syncPlayer", () => {
              this.ready.then(() =>
                this.sync().finally(() => s.commitSyncPlayer()),
              );
            }),
            this._events.on("login", (e) =>
              we(this, void 0, void 0, function* () {
                e && (yield Ee(this, J, "f").syncPurchases());
              }),
            ));
        }
        get avatar() {
          return this.get("avatar") || this.gp.generateAvatar(this.id, 64);
        }
        set avatar(e) {
          this.set("avatar", e);
        }
        get _isRequredDataUpdate() {
          return !this.get("name") || this._isRequredAvatarUpdate;
        }
        get _isRequredAvatarUpdate() {
          const e = this.get("avatar");
          return (
            !e ||
            (!this._hasFirstSync && this.playerAdapter.isPlatformAvatar(e))
          );
        }
        get _authInfo() {
          return Object.assign(Object.assign({}, this._platformData), {
            secretCode: this.secretCode || Ee(this, K, "f"),
          });
        }
        get(e) {
          return "secretCode" === e
            ? this.secretCode || Ee(this, K, "f")
            : "credentials" === e
              ? this.credentials || this.playerAdapter.userId
              : super.get(e);
        }
        loadProgress(e, t) {
          return we(this, void 0, void 0, function* () {
            const [i] = yield this.gp._storage.extractFromContext(t);
            let r = !i;
            if ((i && (this.fromJSON(i), this.isStub && (r = !0)), r)) {
              const i = yield Promise.all(
                  e.map((e) => this.gp._storage.extractFromContext(e)),
                ),
                r =
                  null == i
                    ? void 0
                    : i.find(
                        ([e]) => e && !new $(e, this.fields, this.gp).isStub,
                      ),
                [n] = r || [];
              n &&
                (delete n.platformType,
                delete n.secretCode,
                delete n.credentials,
                (n.id = this.id),
                this.fromJSON(n),
                this.gp._storage.setContext(t),
                yield Ee(this, le, "f").call(this),
                this.gp._storage.setMigrated(t));
            }
          });
        }
        _init(e) {
          return we(this, void 0, void 0, function* () {
            this.gp.ready.then(() => {
              (this.id
                ? Ee(this, he, "f").call(this)
                : Ee(this, le, "f").call(this)
              ).finally(() =>
                we(this, void 0, void 0, function* () {
                  (this.isLoggedInByPlatform &&
                    (yield Ee(this, J, "f").syncPurchases()),
                    e.done(),
                    this._events.emit("ready"));
                }),
              );
            });
          });
        }
        fetchFields() {
          return we(this, void 0, void 0, function* () {
            try {
              ((this.fields =
                (yield this.gp._services.playerService.fetchFields()).items),
                this._events.emit("fetchFields", !0));
            } catch (e) {
              this._events.emit("fetchFields", !1);
            }
          });
        }
        sync(e = {}) {
          return we(this, void 0, void 0, function* () {
            return Ee(this, le, "f").call(this, e);
          });
        }
        enableAutoSync(
          { interval: e, override: t = !1, storage: i = "preferred" } = {
            interval: 0,
          },
        ) {
          if (Ee(this, ie, "f")[i])
            return void v.kg.error(
              `AutoSync for ${i} storage already enabled. Call disableAutoSync() before re-enabling.`,
            );
          if (!e) return void v.kg.error("Interval is not defined");
          let r = 0;
          Ee(this, ie, "f")[i] = W(() =>
            we(this, void 0, void 0, function* () {
              (new Date(this.gp.serverTime).getTime() -
                (Ee(this, te, "f")[i]
                  ? new Date(Ee(this, te, "f")[i]).getTime()
                  : 0)) /
                1e3 >=
                e &&
                this.updateTime > r &&
                ((r = Date.now()),
                yield Ee(this, le, "f").call(this, {
                  override: t,
                  storage: i,
                }));
            }),
          );
        }
        disableAutoSync({ storage: e = "preferred" } = {}) {
          Ee(this, ie, "f")[e]
            ? (Ee(this, ie, "f")[e](), delete Ee(this, ie, "f")[e])
            : v.kg.error(
                `AutoSync for ${e} storage disable attempt: not active`,
              );
        }
        load() {
          return we(this, void 0, void 0, function* () {
            return Ee(this, he, "f").call(this);
          });
        }
        login(e = {}) {
          var t;
          return we(this, void 0, void 0, function* () {
            let i = !1;
            if (this.gp.platform._hasAuthModal)
              return (yield this.playerAdapter.loginPlayer(this, {
                isAuthModal: !0,
              })).id
                ? (yield Ee(this, le, "f")
                    .call(this, { silent: !1 })
                    .then(() => {
                      ((i = !0), this._events.emit("login", !0));
                    })
                    .catch((e) => {
                      (v.kg.error(e), this._events.emit("login", !1));
                    }),
                  i)
                : (this._events.emit("login", !1), i);
            if (
              !this.gp.platform.hasIntegratedAuth &&
              !this.gp.platform.isSecretCodeAuthAvailable
            )
              return (this._events.emit("login", !1), i);
            try {
              yield this.gp.loadOverlay();
              const { type: r, secretCode: n } = yield this.gp.overlay.login({
                withSecretCode:
                  this.gp.platform.isSecretCodeAuthAvailable &&
                  (null === (t = e.withSecretCode) || void 0 === t || t),
              });
              switch (r) {
                case "PLATFORM_AUTH":
                  yield Ee(this, le, "f")
                    .call(this, { silent: !1, _isFromLoginWindow: !0 })
                    .then(() => {
                      ((i = !0), this._events.emit("login", !0));
                    })
                    .catch((e) => {
                      (v.kg.error(e), this._events.emit("login", !1));
                    });
                  break;
                case "SECRET_KEY_AUTH_LOGIN":
                  (Ee(this, z, "m", pe).call(this, n),
                    yield Ee(this, he, "f")
                      .call(this)
                      .then(() => {
                        ((i = !0), this._events.emit("login", !0));
                      })
                      .catch((e) => {
                        (v.kg.error(e), this._events.emit("login", !1));
                      }));
              }
              this.gp.overlay.close();
            } catch (e) {
              (v.kg.error(e), this._events.emit("login", !1));
            }
            return i;
          });
        }
        logout() {
          return we(this, void 0, void 0, function* () {
            if (this.gp.platform.isLogoutAvailable)
              if (this.isLoggedIn)
                try {
                  const e = yield this.playerAdapter.logoutPlayer();
                  yield this._onLogout(e);
                } catch (e) {
                  (v.kg.error(e), this._events.emit("logout", !1));
                }
              else this._events.emit("logout", !1);
            else this._events.emit("logout", !1);
          });
        }
        _onLogout(e) {
          return we(this, void 0, void 0, function* () {
            (this.resetCredentials(),
              (this.isLoggedIn = !1),
              yield Ee(this, z, "m", ae).call(this),
              this._events.emit("logout", e),
              yield Ee(this, he, "f").call(this));
          });
        }
        resetCredentials() {
          (be(this, K, "", "f"),
            (this.credentials = ""),
            Ee(this, z, "m", pe).call(this, ""),
            (this._hasFirstSync = !1),
            (this.isFirstRequest = !0));
        }
        _setPlayerAdapter(e) {
          this.playerAdapter = e;
        }
        _setupOnBoot() {
          Ee(this, z, "m", ae)
            .call(this)
            .finally(() => this._init(Ee(this, re, "f")));
        }
      }
      ((K = new WeakMap()),
        (J = new WeakMap()),
        (Z = new WeakMap()),
        (X = new WeakMap()),
        (H = new WeakMap()),
        (Q = new WeakMap()),
        (ee = new WeakMap()),
        (te = new WeakMap()),
        (ie = new WeakMap()),
        (re = new WeakMap()),
        (le = new WeakMap()),
        (he = new WeakMap()),
        (z = new WeakSet()),
        (ne = function () {
          return (
            this.gp.platform.type === F.z.CUSTOM ||
            this.gp.platform.type === F.z.PARTNER
          );
        }),
        (se = function (e, t) {
          return e
            ? t && (null == t ? void 0 : t.id) === e.id
              ? new Date(e.modifiedAt).getTime() >
                new Date(null == t ? void 0 : t.modifiedAt).getTime() + 3500
                ? e
                : t
              : e
            : t;
        }),
        (ae = function () {
          var e;
          return we(this, void 0, void 0, function* () {
            const { platformData: t, key: i } = yield this.playerAdapter
              .getPlayerContext()
              .catch((e) => (v.kg.error(e), { platformData: null, key: "" }));
            ((this._platformData = t || {}),
              Ee(this, Q, "f").call(this, this._authInfo),
              (this.credentials = String("0" != i && i ? i : "")));
            const r = this._wasReset;
            let n;
            if (
              ((this._wasReset = !1),
              (this.isFirstRequest = !0),
              (n = Ee(this, z, "a", ne)
                ? `,${this.gp.platform.type}:${this.gp.platform.config.tag},${this.gp.isDev ? "d" : "p"},${this.credentials}`
                : `,${this.gp.platform.type},${this.gp.isDev ? "d" : "p"},${this.credentials}`),
              null == t ? void 0 : t.savedState)
            ) {
              v.kg.info("found saved state...");
              const e = `,${this.gp.platform.type},${this.gp.isDev ? "d" : "p"},null`,
                [t] = yield this.gp._storage.extractFromContext(e);
              t &&
                (this.fromJSON(t),
                yield Ee(this, le, "f").call(this),
                yield this.gp._storage.copyFromContext(
                  n,
                  e,
                  this.gp.platform.saveFormat.isPlatformSave,
                ));
            }
            const s = [
                F.z.POKI,
                F.z.VK_PLAY,
                F.z.CRAZY_GAMES,
                F.z.WG_PLAYGROUND,
                F.z.BEELINE,
                F.z.KONGREGATE,
                F.z.GOOGLE_PLAY,
                F.z.ANDROID,
                F.z.APP_GALLERY,
                F.z.GALAXY_STORE,
                F.z.ONE_STORE,
                F.z.AMAZON_APPSTORE,
                F.z.XIAOMI_GETAPPS,
                F.z.APTOIDE,
                F.z.RUSTORE,
                F.z.PLAYDECK,
                F.z.TELEGRAM,
                F.z.CUSTOM,
                F.z.Y8,
                F.z.PARTNER,
              ].includes(this.gp.platform.type),
              a = [
                F.z.APP_GALLERY,
                F.z.GALAXY_STORE,
                F.z.ONE_STORE,
                F.z.AMAZON_APPSTORE,
                F.z.XIAOMI_GETAPPS,
                F.z.APTOIDE,
                F.z.RUSTORE,
                F.z.ANDROID,
              ].includes(this.gp.platform.type),
              o = yield this.gp._storage.checkIsMigrated(n),
              c = [];
            if (
              (a && !o && c.push(`,GOOGLE_PLAY,${this.gp.isDev ? "d" : "p"},`),
              s && !o && c.push(`,NONE,${this.gp.isDev ? "d" : "p"},`),
              c.length > 0 && (yield this.loadProgress(c, n)),
              !this.gp._storage.isEmptyOnBoot &&
                this.gp._storage.isEmptyContext() &&
                this.isStub)
            ) {
              v.kg.info("Applying migration...");
              const [e, t] = yield this.gp._storage.migrateToContext(n);
              ((this.secretCode = t),
                this.fromJSON(e),
                be(this, K, e.secretCode, "f"),
                Ee(this, Q, "f").call(this, this._authInfo),
                yield Ee(this, le, "f").call(this));
            }
            (be(this, X, !!i, "f"), this.gp._storage.setContext(n));
            const [l, h, u] = yield Promise.all([
              this.gp._storage.loadPlayer(),
              this.gp._storage.loadSecretCode(),
              this.gp._storage.loadPlayerFromLocalStorage(),
            ]);
            if (
              this.isStub &&
              !this.credentials &&
              (null == l ? void 0 : l.credentials) &&
              (null === (e = null == l ? void 0 : l.credentials) || void 0 === e
                ? void 0
                : e.length) > 0
            ) {
              const [e] = yield this.gp._storage.extractFromContext(
                `${Ee(this, Z, "f")}${this.credentials}`,
              );
              (e ||
                (yield this.gp._storage.copyFromContext(
                  Ee(this, Z, "f"),
                  `${Ee(this, Z, "f")}${this.credentials}`,
                  this.gp.platform.saveFormat.isPlatformSave,
                )),
                yield this.gp._storage.clearContext(
                  Ee(this, Z, "f"),
                  this.gp.platform.saveFormat.isPlatformSave,
                ),
                (Ee(this, H, "f")[this.credentials] = !0));
            }
            const d = Ee(this, z, "m", se).call(this, u, l);
            if (
              (this.fromJSON(d || {}),
              be(this, K, (null == d ? void 0 : d.secretCode) || "", "f"),
              (this.secretCode = h),
              Ee(this, Q, "f").call(this, this._authInfo),
              Ee(this, X, "f") && this.isStub && !r)
            ) {
              const [e] = yield this.gp._storage.extractFromContext(
                Ee(this, Z, "f"),
              );
              e &&
                (delete e.platformType,
                delete e.secretCode,
                delete e.credentials,
                (e.name = this.name),
                (e.avatar = this.avatar),
                (e.id = this.id),
                this.fromJSON(e),
                yield Ee(this, le, "f").call(this));
            }
          });
        }),
        (oe = function (e, t) {
          return we(this, void 0, void 0, function* () {
            let i;
            if (
              (e
                ? this._isRequredDataUpdate &&
                  (i = this.playerAdapter.getPlayer())
                : (i = this.playerAdapter.loginPlayer(this, {
                    isAuthModal: t,
                  })),
              i)
            ) {
              const t = yield i.catch((e) => {
                if (
                  "cancelled" === (null == e ? void 0 : e.message) ||
                  "cancelled" === e
                )
                  throw e;
                return { name: "", photoLarge: "" };
              });
              yield Ee(this, z, "m", ce).call(this, t, e);
            }
          });
        }),
        (ce = function (e, t) {
          return we(this, void 0, void 0, function* () {
            var i;
            (t || (yield Ee(this, z, "m", ae).call(this)),
              e.name && !this.get("name") && (this.name = e.name),
              (this.name =
                (i = this.name) && Pe.test(i) ? i.replace(/@.*/, "") : i),
              e.photoLarge &&
                this._isRequredAvatarUpdate &&
                (this.avatar = e.photoLarge));
          });
        }),
        (ue = function (e, t) {
          return we(this, void 0, void 0, function* () {
            const i = this.credentials,
              r = this.id;
            (Ee(this, J, "f").canUpdateServerTime &&
              Ee(this, J, "f").updateServerTime(e.serverTime),
              (this._firstReqHash = e.firstReqHash),
              (this.stats = e.stats),
              Ee(this, z, "m", fe).call(this, e.token),
              this.playerAdapter.setCredentials(e.state.credentials));
            const n =
                Date.parse(e.state.modifiedAt) - Date.parse(this.modifiedAt) >
                3500,
              s = this.secretCode || Ee(this, K, "f"),
              { isCloudSave: a, isLocalSave: o } = (0, me.q)(t);
            if (
              (this.credentials && this.credentials !== e.state.credentials) ||
              0 === this.id ||
              (s && s != e.state.secretCode) ||
              a
            ) {
              if (
                (this.fromJSON(e.state),
                this.gp.platform.config.alwaysSyncPublicFields &&
                  !a &&
                  !this.isFirstRequest)
              ) {
                const e = this.fields.filter((e) => !e.public),
                  t = yield this.gp._storage.loadPlayer();
                e.forEach((e) => {
                  this.set(e.key, t[e.key]);
                });
              }
            } else
              this.gp.platform.config.alwaysSyncPublicFields
                ? this.fields
                    .filter((e) => e.public)
                    .forEach((t) => {
                      this.set(t.key, e.state[t.key]);
                    })
                : n && this.fromJSON(e.state);
            ((yield Ee(this, z, "m", ve).call(
              this,
              this.credentials,
              this.id,
              i,
              r,
            )) ||
              (yield this.gp._storage.clearContext(
                Ee(this, Z, "f"),
                this.gp.platform.saveFormat.isPlatformSave,
              ),
              (Ee(this, H, "f")[this.credentials] = !0)),
              be(this, K, e.state.secretCode, "f"),
              this._events.emit("sync:before"),
              Ee(this, Q, "f").call(this, this._authInfo),
              yield this.gp._storage.savePlayer(this.toJSON(), !o));
            const c = Date.parse(e.sessionStart),
              l = c > 0 ? Date.parse(this.gp.serverTime) - c : 0;
            let h = this.stats.playtimeAll + l / 1e3,
              u = this.stats.playtimeToday + l / 1e3;
            (Ee(this, ee, "f").call(this),
              be(
                this,
                ee,
                W((e) => {
                  ((h += e / 1e3),
                    (u += e / 1e3),
                    h - this.stats.playtimeAll >= 1 &&
                      this._syncIncrementVariable(),
                    (this.stats.playtimeAll = Math.floor(h)),
                    (this.stats.playtimeToday = Math.floor(u)));
                }),
                "f",
              ),
              Ee(this, J, "f").reset(),
              Ee(this, J, "f").markTriggersActivated(
                e.rewardsData.activatedTriggersNow,
              ),
              Ee(this, J, "f").markTriggersClaimed(
                e.rewardsData.claimedTriggersNow,
              ),
              Ee(this, J, "f").markRewardsGiven(e.rewardsData.givenRewards),
              Ee(this, J, "f").markAchievementsUnlocked(
                e.rewardsData.givenAchievements,
              ),
              Ee(this, J, "f").markPurchasesGiven(e.rewardsData.givenProducts),
              Ee(this, J, "f").markSchedulersDaysClaimed(
                e.rewardsData.claimedSchedulersDaysNow,
              ),
              Ee(this, J, "f").setPlayerSegments(
                e.segments,
                e.newSegments,
                e.leftSegments,
              ),
              Ee(this, J, "f").setAchievementsList(e.achievementsList),
              Ee(this, J, "f").setPurchasedList(e.purchasesListV2),
              Ee(this, J, "f").setRewardsList(e.rewards),
              Ee(this, J, "f").setTriggersList(e.triggers),
              Ee(this, J, "f").setPlayerSchedulersList(e.playerSchedulers),
              Ee(this, J, "f").setPlayerEventsList(e.playerEvents),
              Ee(this, J, "f").setExperiments(e.experiments),
              Ee(this, J, "f").setUniques(e.uniques));
          });
        }),
        (de = function (e) {
          return we(this, void 0, void 0, function* () {
            (this.isStub
              ? ((this.tempSecredCode = e.secretCode),
                Ee(this, z, "m", pe).call(this, e.secretCode))
              : this.tempSecredCode &&
                this.tempSecredCode === e.secretCode &&
                (Ee(this, z, "m", pe).call(this, ""),
                (this.tempSecredCode = "")),
              (this.isLoggedInByPlatform = this.playerAdapter.hasCredetials),
              (this.isLoggedIn = this.isLoggedInByPlatform),
              (this.hasAnyCredentials = this.isLoggedIn || !!this.secretCode),
              this.secretCode &&
                this.secretCode != e.secretCode &&
                Ee(this, z, "m", pe).call(this, e.secretCode),
              this.hasAnyCredentials ||
                (Ee(this, z, "m", pe).call(this, e.secretCode),
                (this.hasAnyCredentials = !0)));
          });
        }),
        (pe = function (e) {
          ((this.secretCode = e),
            this.gp._storage.saveSecretCode(this.secretCode),
            Ee(this, Q, "f").call(this, this._authInfo));
        }),
        (fe = function (e) {
          e && this.gp.channels._connect(e);
        }),
        (ve = function (e, t, i, r) {
          return we(this, void 0, void 0, function* () {
            if (e && !Ee(this, H, "f")[e]) {
              const [e] = yield this.gp._storage.extractFromContext(
                Ee(this, Z, "f"),
                !0,
              );
              if (e && e.id === t) return !1;
            }
            return !!i || t !== r || !e;
          });
        }),
        ge([T(300)], _e.prototype, "fetchFields", null),
        ge([T(300)], _e.prototype, "sync", null),
        ge([T(300)], _e.prototype, "load", null));
      class Ae extends E.Z {
        constructor() {
          (super(),
            document.documentElement.addEventListener(
              "fullscreenchange",
              () => {
                let e = this.isEnabled;
                (this._events.emit("change", e),
                  this._events.emit(e ? "open" : "close"));
              },
            ));
        }
        get isEnabled() {
          return Boolean(
            document.fullscreenElement || document.webkitFullscreenElement,
          );
        }
        open() {
          this.isEnabled ||
            (document.documentElement.requestFullscreen
              ? document.documentElement.requestFullscreen()
              : document.documentElement.webkitRequestFullscreen &&
                document.documentElement.webkitRequestFullscreen());
        }
        close() {
          this.isEnabled &&
            (document.exitFullscreen
              ? document.exitFullscreen()
              : document.webkitExitFullscreen &&
                document.webkitExitFullscreen());
        }
        toggle() {
          this.isEnabled ? this.close() : this.open();
        }
      }
      var Te,
        Oe = function (e, t, i, r, n) {
          if ("m" === r) throw new TypeError("Private method is not writable");
          if ("a" === r && !n)
            throw new TypeError(
              "Private accessor was defined without a setter",
            );
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it",
            );
          return (
            "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i),
            i
          );
        };
      class Ce {
        constructor() {
          ((this.counters = []),
            (this.visitParams = {}),
            (this._experimentsVisitParams = {}),
            (this._segmentsVisitParams = {}),
            Te.set(this, 0));
        }
        addCounter(e) {
          return (
            (t = this),
            (i = void 0),
            (n = function* () {
              this.counters.push(e);
            }),
            new ((r = void 0) || (r = Promise))(function (e, s) {
              function a(e) {
                try {
                  c(n.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                try {
                  c(n.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function c(t) {
                var i;
                t.done
                  ? e(t.value)
                  : ((i = t.value),
                    i instanceof r
                      ? i
                      : new r(function (e) {
                          e(i);
                        })).then(a, o);
              }
              c((n = n.apply(t, i || [])).next());
            })
          );
          var t, i, r, n;
        }
        replaceCounters(e) {
          this.counters = e;
        }
        hit(e) {
          this.counters.forEach((t) => t.hit(e));
        }
        goal(e, t) {
          this.counters.forEach((i) => i.goal(e, t));
        }
        trackPurchase(e, t) {
          this.pushDataLayerEvent({
            event: "purchase",
            ecommerce: {
              transaction_id: (null == e ? void 0 : e._id) || "",
              items: [
                {
                  item_id: t.id,
                  item_name: t.name,
                  price: t.price,
                  quantity: 1,
                  discount: 0,
                },
              ],
            },
          });
        }
        setVisitParams(e) {
          ((this.visitParams = e),
            (function (e, t, i, r) {
              if ("a" === i && !r)
                throw new TypeError(
                  "Private accessor was defined without a getter",
                );
              if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError(
                  "Cannot read private member from an object whose class did not declare it",
                );
              return "m" === i
                ? r
                : "a" === i
                  ? r.call(e)
                  : r
                    ? r.value
                    : t.get(e);
            })(this, Te, "f") ||
              Oe(
                this,
                Te,
                window.setTimeout(() => {
                  Oe(this, Te, 0, "f");
                  const e = Object.assign(
                    Object.assign(
                      Object.assign({}, this._experimentsVisitParams),
                      this._segmentsVisitParams,
                    ),
                    this.visitParams,
                  );
                  this.counters.forEach((t) => t.setVisitParams(e));
                }, 100),
                "f",
              ));
        }
        pushDataLayerEvent(e) {
          window.dataLayer &&
            window.dataLayer.push(JSON.parse(JSON.stringify(e)));
        }
      }
      Te = new WeakMap();
      var Re = a(2447),
        ke = a(2954),
        Ie = function (e, t, i, r) {
          return new (i || (i = Promise))(function (n, s) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((r = r.apply(e, t || [])).next());
          });
        };
      function De() {
        var e;
        return Ie(this, void 0, void 0, function* () {
          const t = new URL(window.location.href),
            { searchParams: i, hostname: n, hash: s } = t,
            { platformType: a } = (function () {
              const { platformType: e } = window.__GS_BOOT_CONFIG__ || {};
              return { platformType: e };
            })(),
            o = yield (function () {
              return Ie(this, void 0, void 0, function* () {
                const e = (0, r._)(),
                  { cordova: t } = window;
                if (t)
                  try {
                    yield (function () {
                      const e = (0, r._)({ timeout: 5e3 });
                      return (
                        document.addEventListener(
                          "deviceready",
                          () => e.done(),
                          !1,
                        ),
                        e.ready
                      );
                    })();
                    const { device: i } = window;
                    "Android" === (null == i ? void 0 : i.platform)
                      ? e.done(!0)
                      : t.exec(
                          () => {
                            e.done(!0);
                          },
                          () => {
                            e.done(!1);
                          },
                          "GooglePlayServicesChecker",
                          "check",
                          [],
                        );
                  } catch (t) {
                    (console.warn(t), e.done(!1));
                  }
                else e.done(!1);
                return e.ready;
              });
            })();
          return (function (e) {
            return (
              !!e.hostname.includes(
                ["games", "s3", "yandex", "net"].join("."),
              ) ||
              (!!e.hash.includes("origin=https") &&
                (e.hash.includes("app-id=") || e.searchParams.has("app-id")))
            );
          })(t)
            ? { platformType: F.z.YANDEX }
            : n.includes("gamemonetize.co")
              ? { platformType: F.z.GAME_MONETIZE }
              : n.includes("gamedistribution.co")
                ? { platformType: F.z.GAME_DISTRIBUTION }
                : n.includes("crazygames.com")
                  ? { platformType: F.z.CRAZY_GAMES }
                  : n.includes(".gamepix.com")
                    ? { platformType: F.z.GAMEPIX }
                    : n.includes(".wgplayground.com")
                      ? { platformType: F.z.WG_PLAYGROUND }
                      : n.includes("poki.com") ||
                          i.has("pokiDebug") ||
                          n.includes("poki-gdn.com")
                        ? { platformType: F.z.POKI }
                        : (i.has("api_id") &&
                              i.has("viewer_id") &&
                              i.has("auth_key")) ||
                            (i.get("vk_user_id") &&
                              i.get("sign") &&
                              i.get("vk_app_id"))
                          ? { platformType: F.z.VK }
                          : i.has("auth_sig") && i.has("session_key")
                            ? { platformType: F.z.OK }
                            : i.has("gp_beeline_token")
                              ? { platformType: F.z.BEELINE }
                              : n.includes(".konggames.com") ||
                                  (i.has("kongregate_game_version") &&
                                    i.has("kongregate_host"))
                                ? { platformType: F.z.KONGREGATE }
                                : n.includes(
                                      "static.developer.sberdevices.ru",
                                    ) ||
                                    (Array.isArray(window.appInitialData) &&
                                      window.appInitialData.some(
                                        (e) =>
                                          "app_context" ===
                                          (null == e ? void 0 : e.type),
                                      ))
                                  ? { platformType: F.z.SMARTMARKET }
                                  : (function (e) {
                                        const { searchParams: t } = e;
                                        if (
                                          !(t.get("lang") || "").includes("_")
                                        )
                                          return !1;
                                        if (!t.has("currency")) return !1;
                                        if (
                                          t.has("uid") &&
                                          t.has("sign") &&
                                          t.has("appid")
                                        )
                                          return !0;
                                        const i = t.get("status");
                                        return (
                                          Number(t.get("appid")) > 0 ||
                                          (i.length > 0 &&
                                            !Number.isNaN(t.get("status")))
                                        );
                                      })(t)
                                    ? { platformType: F.z.VK_PLAY }
                                    : a
                                      ? { platformType: a }
                                      : o
                                        ? { platformType: F.z.GOOGLE_PLAY }
                                        : "true" === i.get("telegram") &&
                                            "true" === i.get("playdeck")
                                          ? { platformType: F.z.PLAYDECK }
                                          : s.includes("tgWebAppData") ||
                                              s.includes("tgWebAppPlatform")
                                            ? { platformType: F.z.TELEGRAM }
                                            : (function (e) {
                                                  var t, i;
                                                  const r =
                                                      null ===
                                                        (t =
                                                          e.get("_platform")) ||
                                                      void 0 === t
                                                        ? void 0
                                                        : t.toUpperCase(),
                                                    n =
                                                      null ===
                                                        (i =
                                                          e.get(
                                                            "_platform-key",
                                                          )) || void 0 === i
                                                        ? void 0
                                                        : i.trim();
                                                  return (
                                                    r === F.z.PARTNER &&
                                                    (n.startsWith("gp-") ||
                                                      n.startsWith("ss-"))
                                                  );
                                                })(i)
                                              ? {
                                                  platformType: F.z.PARTNER,
                                                  platformKey:
                                                    i.get("_platform-key") ||
                                                    "",
                                                }
                                              : (function (e) {
                                                    var t, i;
                                                    const r =
                                                        null ===
                                                          (t =
                                                            e.get(
                                                              "_platform",
                                                            )) || void 0 === t
                                                          ? void 0
                                                          : t.toUpperCase(),
                                                      n =
                                                        null ===
                                                          (i =
                                                            e.get(
                                                              "_platform-key",
                                                            )) || void 0 === i
                                                          ? void 0
                                                          : i.trim();
                                                    return (
                                                      r === F.z.CUSTOM && !!n
                                                    );
                                                  })(i)
                                                ? {
                                                    platformType: F.z.CUSTOM,
                                                    platformKey:
                                                      i.get("_platform-key") ||
                                                      "",
                                                  }
                                                : i.has("apiId") &&
                                                    i.has("viewerId") &&
                                                    i.has("authKey")
                                                  ? {
                                                      platformType:
                                                        F.z.FOTOSTRANA,
                                                    }
                                                  : n.includes(".y8.com")
                                                    ? { platformType: F.z.Y8 }
                                                    : (function (e) {
                                                          return !!e.hostname.includes(
                                                            [
                                                              "coolmathgames",
                                                              "com",
                                                            ].join("."),
                                                          );
                                                        })(t)
                                                      ? {
                                                          platformType:
                                                            F.z.COOLMATH,
                                                        }
                                                      : (function (e) {
                                                            return !!e.hostname.includes(
                                                              [
                                                                "playdia",
                                                                "com",
                                                              ].join("."),
                                                            );
                                                          })(t)
                                                        ? {
                                                            platformType:
                                                              F.z.PLAYDIA,
                                                          }
                                                        : (null ===
                                                              (e =
                                                                i.get(
                                                                  "_platform",
                                                                )) ||
                                                            void 0 === e
                                                              ? void 0
                                                              : e.toUpperCase()) !==
                                                            F.z.CUSTOM
                                                          ? {
                                                              platformType:
                                                                i.get(
                                                                  "_platform",
                                                                ),
                                                            }
                                                          : {
                                                              platformType:
                                                                F.z.NONE,
                                                            };
        });
      }
      var xe,
        Ne = a(3080);
      function Me(e) {
        return new Promise(function (t, i) {
          ((e.oncomplete = e.onsuccess =
            function () {
              return t(e.result);
            }),
            (e.onabort = e.onerror =
              function () {
                return i(e.error);
              }));
        });
      }
      function Le(e, t) {
        var i = indexedDB.open(e);
        i.onupgradeneeded = function () {
          return i.result.createObjectStore(t);
        };
        var r = Me(i);
        return function (e, i) {
          return r.then(function (r) {
            return i(r.transaction(t, e).objectStore(t));
          });
        };
      }
      function Fe() {
        return (xe || (xe = Le("keyval-store", "keyval")), xe);
      }
      class je {
        constructor(e) {
          ((this.dbName = e), (this.isLocal = !0));
          try {
            this.store = Le(this.dbName, "storage");
          } catch (e) {
            v.kg.error(e);
          }
        }
        set(e, t) {
          return this.store
            ? (function (e, t) {
                return (
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : Fe()
                )("readwrite", function (i) {
                  return (i.put(t, e), Me(i.transaction));
                });
              })(e, t, this.store).catch(() => null)
            : Promise.resolve();
        }
        get(e) {
          if (!this.store) return Promise.resolve(null);
          const t = (0, r._)({ timeout: 2e3 });
          return (
            (function (e) {
              return (
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Fe()
              )("readonly", function (t) {
                return Me(t.get(e));
              });
            })(e, this.store)
              .then(t.done)
              .catch(() => t.done(null)),
            t.ready
          );
        }
      }
      var Ue,
        Ge = function (e, t, i, r) {
          return new (i || (i = Promise))(function (n, s) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        Be = function (e, t, i, r) {
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e);
        };
      class $e {
        constructor(e) {
          ((this.projectId = e), Ue.set(this, void 0), (this.isLocal = !0));
          try {
            !(function (e, t, i, r, n) {
              if ("m" === r)
                throw new TypeError("Private method is not writable");
              if ("a" === r && !n)
                throw new TypeError(
                  "Private accessor was defined without a setter",
                );
              if ("function" == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it",
                );
              "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i);
            })(this, Ue, window.localStorage, "f");
          } catch (e) {}
        }
        getKey(e) {
          return `gs-db-project-${this.projectId}-${e}`;
        }
        set(e, t) {
          return Ge(this, void 0, void 0, function* () {
            Be(this, Ue, "f").setItem(this.getKey(e), JSON.stringify(t));
          });
        }
        get(e) {
          return Ge(this, void 0, void 0, function* () {
            try {
              return JSON.parse(
                Be(this, Ue, "f").getItem(this.getKey(e)) || "null",
              );
            } catch (e) {}
          });
        }
      }
      Ue = new WeakMap();
      var Ve,
        We,
        qe,
        Ye = a(4687),
        ze = a(7791),
        Ke = function (e, t, i, r) {
          return new (i || (i = Promise))(function (n, s) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        Je = function (e, t, i, r) {
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e);
        };
      class Ze {
        constructor(e) {
          ((this.queryBuilder = e),
            Ve.set(this, {}),
            We.set(this, function (e = {}, t) {
              return Ke(this, void 0, void 0, function* () {
                const i = (0, r._)();
                e.limit = e.limit || 10;
                try {
                  const r = yield t(e),
                    n = r.length === e.limit;
                  ((Je(this, Ve, "f")[this.queryBuilder(e)] = Object.assign(
                    Object.assign({}, e),
                    { canLoadMore: n },
                  )),
                    i.done({ items: r, canLoadMore: n }));
                } catch (e) {
                  i.abort(e);
                }
                return i.ready;
              });
            }),
            qe.set(this, function (e = {}, t) {
              return Ke(this, void 0, void 0, function* () {
                const i = this.queryBuilder(e),
                  n = Je(this, Ve, "f")[i];
                if (!n) return yield this.fetch(e, t);
                if (!n.canLoadMore) return { items: [], canLoadMore: !1 };
                const s = (0, r._)(),
                  a = (n.offset || 0) + (n.limit || 0);
                n.limit = e.limit || n.limit;
                const o = Object.assign({}, Je(this, Ve, "f")[i]),
                  c = Object.assign(Object.assign({}, n), { offset: a });
                Je(this, Ve, "f")[i] = c;
                try {
                  const e = yield t(c),
                    r = e.length === c.limit;
                  ((Je(this, Ve, "f")[i].canLoadMore = r),
                    s.done({ items: e, canLoadMore: r }));
                } catch (e) {
                  ((Je(this, Ve, "f")[i] = o), s.abort(e));
                }
                return s.ready;
              });
            }));
        }
        fetch(e = {}, t) {
          return Je(this, We, "f").call(this, e, t);
        }
        fetchMore(e = {}, t) {
          return Ke(this, void 0, void 0, function* () {
            return Je(this, qe, "f").call(this, e, t);
          });
        }
      }
      ((Ve = new WeakMap()), (We = new WeakMap()), (qe = new WeakMap()));
      var Xe,
        He,
        Qe,
        et,
        tt,
        it,
        rt,
        nt,
        st,
        at,
        ot = function (e, t, i, r) {
          return new (i || (i = Promise))(function (n, s) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        ct = function (e, t, i, r) {
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e);
        },
        lt = function (e, t) {
          var i = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (i[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (r = Object.getOwnPropertySymbols(e); n < r.length; n++)
              t.indexOf(r[n]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[n]) &&
                (i[r[n]] = e[r[n]]);
          }
          return i;
        };
      class ht extends E.Z {
        constructor(e, t) {
          (super(),
            (this.gp = e),
            (this._config = t),
            Xe.set(
              this,
              new Ze((e) =>
                [
                  "channels",
                  (e.tags || []).join(","),
                  e.search || "",
                  (e.ids || []).join(","),
                  e.onlyJoined || !1,
                  e.onlyOwned || !1,
                ].join(":"),
              ),
            ),
            He.set(this, new Ze((e) => `channelsMembers:${e.channelId}`)),
            Qe.set(this, new Ze((e) => `invites:${e.channelId}`)),
            et.set(this, new Ze((e) => `channelsInvites:${e.channelId}`)),
            tt.set(this, new Ze((e) => "sentInvites")),
            it.set(this, new Ze((e) => `channelsJoinRequests:${e.channelId}`)),
            rt.set(this, new Ze((e) => "sentJoinRequests")),
            nt.set(
              this,
              new Ze(
                (e) =>
                  `channelsJoinRequests:${e.channelId}:${(e.tags || []).join(",")}`,
              ),
            ),
            st.set(
              this,
              new Ze(
                (e) =>
                  `channelsJoinRequests:${e.playerId}:${(e.tags || []).join(",")}`,
              ),
            ),
            at.set(
              this,
              new Ze(
                (e) =>
                  `channelsJoinRequests:${e.playerId}:${(e.tags || []).join(",")}`,
              ),
            ));
        }
        get canBeOnline() {
          return this._config.acl.canConnectOnline;
        }
        get isMainChatEnabled() {
          return this._config.project.enableMainChat && this.mainChatId > 0;
        }
        get mainChatId() {
          return this._config.project.mainChatId;
        }
        _handleResponse(e, t) {
          (e.then((e) => this._events.emit(t, e)),
            e.catch((e) => {
              (v.kg.error(e), this._events.emit(`error:${t}`, e));
            }));
        }
        sendInvite(e) {
          const t = this.gp._services.channelsService.invites.sendInvite(e);
          return (this._handleResponse(t, "sendInvite"), t);
        }
        cancelInvite(e) {
          const t = this.gp._services.channelsService.invites.cancelInvite(e);
          return (this._handleResponse(t, "cancelInvite"), t);
        }
        acceptInvite(e) {
          const t = this.gp._services.channelsService.invites.acceptInvite(e);
          return (this._handleResponse(t, "acceptInvite"), t);
        }
        rejectInvite(e) {
          const t = this.gp._services.channelsService.invites.rejectInvite(e);
          return (this._handleResponse(t, "rejectInvite"), t);
        }
        join(e) {
          const t = this.gp._services.channelsService.members.join(e);
          return (this._handleResponse(t, "join"), t);
        }
        leave(e) {
          const t = this.gp._services.channelsService.members.leave(e);
          return (this._handleResponse(t, "leave"), t);
        }
        cancelJoin(e) {
          const t = this.gp._services.channelsService.members.cancelJoin(e);
          return (this._handleResponse(t, "cancelJoin"), t);
        }
        acceptJoinRequest(e) {
          const t =
            this.gp._services.channelsService.joinRequests.acceptJoinRequest(e);
          return (this._handleResponse(t, "acceptJoinRequest"), t);
        }
        rejectJoinRequest(e) {
          const t =
            this.gp._services.channelsService.joinRequests.rejectJoinRequest(e);
          return (this._handleResponse(t, "rejectJoinRequest"), t);
        }
        fetchMessages(e) {
          return ot(this, void 0, void 0, function* () {
            const t = ct(this, nt, "f").fetch(e, (e) =>
              this.gp._services.channelsService.messages
                .fetchMessages(e)
                .then((e) => e.items),
            );
            return (this._handleResponse(t, "fetchMessages"), t);
          });
        }
        fetchMoreMessages(e) {
          return ot(this, void 0, void 0, function* () {
            const t = ct(this, nt, "f").fetchMore(e, (e) =>
              this.gp._services.channelsService.messages
                .fetchMessages(e)
                .then((e) => e.items),
            );
            return (this._handleResponse(t, "fetchMoreMessages"), t);
          });
        }
        fetchPersonalMessages(e) {
          return ot(this, void 0, void 0, function* () {
            const t = ct(this, st, "f").fetch(e, (e) =>
              this.gp._services.channelsService.messages
                .fetchPersonalMessages(e)
                .then((e) => e.items),
            );
            return (this._handleResponse(t, "fetchPersonalMessages"), t);
          });
        }
        fetchMorePersonalMessages(e) {
          return ot(this, void 0, void 0, function* () {
            const t = ct(this, st, "f").fetchMore(e, (e) =>
              this.gp._services.channelsService.messages
                .fetchPersonalMessages(e)
                .then((e) => e.items),
            );
            return (this._handleResponse(t, "fetchMorePersonalMessages"), t);
          });
        }
        fetchFeedMessages(e) {
          return ot(this, void 0, void 0, function* () {
            const t = ct(this, at, "f").fetch(e, (e) =>
              this.gp._services.channelsService.messages
                .fetchFeedMessages(e)
                .then((e) => e.items),
            );
            return (this._handleResponse(t, "fetchFeedMessages"), t);
          });
        }
        fetchMoreFeedMessages(e) {
          return ot(this, void 0, void 0, function* () {
            const t = ct(this, at, "f").fetchMore(e, (e) =>
              this.gp._services.channelsService.messages
                .fetchFeedMessages(e)
                .then((e) => e.items),
            );
            return (this._handleResponse(t, "fetchMoreFeedMessages"), t);
          });
        }
        sendMessage(e) {
          const t = this.gp._services.channelsService.messages.sendMessage(e);
          return (this._handleResponse(t, "sendMessage"), t);
        }
        sendFeedMessage(e) {
          const t =
            this.gp._services.channelsService.messages.sendFeedMessage(e);
          return (this._handleResponse(t, "sendMessage"), t);
        }
        sendPersonalMessage(e) {
          const t =
            this.gp._services.channelsService.messages.sendPersonalMessage(e);
          return (this._handleResponse(t, "sendMessage"), t);
        }
        editMessage(e) {
          const t = this.gp._services.channelsService.messages.editMessage(e);
          return (this._handleResponse(t, "editMessage"), t);
        }
        deleteMessage(e) {
          const t = this.gp._services.channelsService.messages.deleteMessage(e);
          return (this._handleResponse(t, "deleteMessage"), t);
        }
        mute(e) {
          var { seconds: t = 0 } = e;
          const i = lt(e, ["seconds"]);
          if (t > 0) {
            const e = new Date();
            (e.setSeconds(e.getSeconds() + t), (i.unmuteAt = e.toISOString()));
          }
          const r = this.gp._services.channelsService.members.mute(i);
          return (this._handleResponse(r, "mute"), r);
        }
        unmute(e) {
          const t = this.gp._services.channelsService.members.unmute(e);
          return (this._handleResponse(t, "unmute"), t);
        }
        fetchMembers(e) {
          return ot(this, void 0, void 0, function* () {
            const t = ct(this, He, "f").fetch(e, (e) =>
              this.gp._services.channelsService.members
                .fetchMembers(e)
                .then((e) => e.players),
            );
            return (this._handleResponse(t, "fetchMembers"), t);
          });
        }
        fetchMoreMembers(e) {
          return ot(this, void 0, void 0, function* () {
            const t = ct(this, He, "f").fetchMore(e, (e) =>
              this.gp._services.channelsService.members
                .fetchMembers(e)
                .then((e) => e.players),
            );
            return (this._handleResponse(t, "fetchMoreMembers"), t);
          });
        }
        fetchInvites(e) {
          return ot(this, void 0, void 0, function* () {
            const t = ct(this, Qe, "f").fetch(e, (e) =>
              this.gp._services.channelsService.invites
                .fetchInvites(e)
                .then((e) => e.items),
            );
            return (this._handleResponse(t, "fetchInvites"), t);
          });
        }
        fetchMoreInvites(e) {
          return ot(this, void 0, void 0, function* () {
            const t = ct(this, Qe, "f").fetchMore(e, (e) =>
              this.gp._services.channelsService.invites
                .fetchInvites(e)
                .then((e) => e.items),
            );
            return (this._handleResponse(t, "fetchMoreInvites"), t);
          });
        }
        fetchChannelInvites(e) {
          return ot(this, void 0, void 0, function* () {
            const t = ct(this, et, "f").fetch(e, (e) =>
              this.gp._services.channelsService.invites
                .fetchChannelInvites(e)
                .then((e) => e.items),
            );
            return (this._handleResponse(t, "fetchChannelInvites"), t);
          });
        }
        fetchMoreChannelInvites(e) {
          return ot(this, void 0, void 0, function* () {
            const t = ct(this, et, "f").fetchMore(e, (e) =>
              this.gp._services.channelsService.invites
                .fetchChannelInvites(e)
                .then((e) => e.items),
            );
            return (this._handleResponse(t, "fetchMoreChannelInvites"), t);
          });
        }
        fetchSentInvites(e) {
          return ot(this, void 0, void 0, function* () {
            const t = ct(this, tt, "f").fetch(e, (e) =>
              this.gp._services.channelsService.invites
                .fetchSentInvites(e)
                .then((e) => e.items),
            );
            return (this._handleResponse(t, "fetchSentInvites"), t);
          });
        }
        fetchMoreSentInvites(e) {
          return ot(this, void 0, void 0, function* () {
            const t = ct(this, tt, "f").fetchMore(e, (e) =>
              this.gp._services.channelsService.invites
                .fetchSentInvites(e)
                .then((e) => e.items),
            );
            return (this._handleResponse(t, "fetchMoreSentInvites"), t);
          });
        }
        fetchJoinRequests(e) {
          return ot(this, void 0, void 0, function* () {
            const t = ct(this, it, "f").fetch(e, (e) =>
              this.gp._services.channelsService.joinRequests
                .fetchJoinRequests(e)
                .then((e) => e.items),
            );
            return (this._handleResponse(t, "fetchJoinRequests"), t);
          });
        }
        fetchMoreJoinRequests(e) {
          return ot(this, void 0, void 0, function* () {
            const t = ct(this, it, "f").fetchMore(e, (e) =>
              this.gp._services.channelsService.joinRequests
                .fetchJoinRequests(e)
                .then((e) => e.items),
            );
            return (this._handleResponse(t, "fetchMoreJoinRequests"), t);
          });
        }
        fetchSentJoinRequests(e) {
          return ot(this, void 0, void 0, function* () {
            const t = ct(this, rt, "f").fetch(e, (e) =>
              this.gp._services.channelsService.joinRequests
                .fetchSentJoinRequests(e)
                .then((e) => e.items),
            );
            return (this._handleResponse(t, "fetchSentJoinRequests"), t);
          });
        }
        fetchMoreSentJoinRequests(e) {
          return ot(this, void 0, void 0, function* () {
            const t = ct(this, rt, "f").fetchMore(e, (e) =>
              this.gp._services.channelsService.joinRequests
                .fetchSentJoinRequests(e)
                .then((e) => e.items),
            );
            return (this._handleResponse(t, "fetchMoreSentJoinRequests"), t);
          });
        }
        kick(e) {
          const t = this.gp._services.channelsService.members.kick(e);
          return (this._handleResponse(t, "kick"), t);
        }
        openChat({ id: e, tags: t } = { id: 0, tags: [] }) {
          return ot(this, void 0, void 0, function* () {
            let i = e;
            if (
              (!e &&
                this._config.project.enableMainChat &&
                (i = this._config.project.mainChatId),
              i)
            ) {
              this.gp.loader.inc();
              try {
                const e = this.gp.loadOverlay(),
                  r = yield this.fetchChannel({ channelId: i });
                if (
                  !(r.ownerId === this.gp.player.id ? r.ownerAcl : r.memberAcl)
                    .canViewMessages
                )
                  throw (v.kg.error("access_denied"), Error("access_denied"));
                r.isJoined ||
                  (yield this.join({ channelId: i }),
                  (r.membersCount += 1),
                  (r.membersOnlineCount += 1),
                  (r.isJoined = !0));
                const [n] = yield Promise.all([
                  this.fetchMessages({ channelId: i, limit: 100, tags: t }),
                  e,
                ]);
                (this.gp.loader.dec(),
                  this._events.emit("openChat"),
                  yield this.openChatOverlay(r, n, t),
                  this._events.emit("closeChat"));
              } catch (e) {
                (this._events.emit("error:openChat", e),
                  this.gp.loader.dec(),
                  v.kg.error(e));
              }
            } else v.kg.error("empty_channel_id");
          });
        }
        openPersonalChat({ playerId: e, tags: t } = { playerId: 0, tags: [] }) {
          return ot(this, void 0, void 0, function* () {
            if (e) {
              this.gp.loader.inc();
              try {
                const i = this.gp.loadOverlay(),
                  r = yield this.fetchPersonalChannel({ playerId: e }),
                  [n] = yield Promise.all([
                    this.fetchPersonalMessages({
                      playerId: e,
                      limit: 100,
                      tags: t,
                    }),
                    i,
                  ]);
                (this.gp.loader.dec(),
                  this._events.emit("openChat"),
                  yield this.openChatOverlay(r, n, t),
                  this._events.emit("closeChat"));
              } catch (e) {
                (this._events.emit("error:openChat", e),
                  this.gp.loader.dec(),
                  v.kg.error(e));
              }
            } else v.kg.error("empty_player_id");
          });
        }
        openFeed({ playerId: e, tags: t } = { playerId: 0, tags: [] }) {
          return ot(this, void 0, void 0, function* () {
            if (e) {
              this.gp.loader.inc();
              try {
                const i = this.gp.loadOverlay(),
                  r = yield this.fetchFeedChannel({ playerId: e }),
                  [n] = yield Promise.all([
                    this.fetchFeedMessages({
                      playerId: e,
                      limit: 100,
                      tags: t,
                    }),
                    i,
                  ]);
                (this.gp.loader.dec(),
                  this._events.emit("openChat"),
                  yield this.openChatOverlay(r, n, t),
                  this._events.emit("closeChat"));
              } catch (e) {
                (this._events.emit("error:openFeed", e),
                  this.gp.loader.dec(),
                  v.kg.error(e));
              }
            } else v.kg.error("empty_player_id");
          });
        }
        openChatOverlay(e, t, i) {
          return ot(this, void 0, void 0, function* () {
            const { playerId: r, activeOverlay: n } = this.processTags(
                e.tags,
                this.gp.player.id,
              ),
              s = r ? parseInt(r, 10) : this.gp.player.id,
              a = { playerId: s, tags: i, channelName: e.name, channelType: n };
            if ("personal" === n || "feed" === n) {
              const e = yield this.gp.players.fetch({ ids: [s] }),
                [t] = e.players;
              if (!t) throw "player_not_found";
              a.channelName = t.state.name || null;
            }
            yield this.gp.overlay.openChat(e, t, a);
          });
        }
        processTags(e, t) {
          let i = "channel",
            r = "";
          return (
            e.forEach((e) => {
              e.startsWith("@feed:")
                ? ((i = "feed"),
                  (r = e
                    .split(":")
                    .filter((e) => !isNaN(parseInt(e, 10)))
                    .join("")))
                : e.startsWith("@personal:") &&
                  ((i = "personal"),
                  (r = e
                    .split(":")
                    .filter((e) => !isNaN(parseInt(e, 10)))
                    .filter((e) => e !== t.toString())
                    .join("")));
            }),
            { playerId: r, activeOverlay: i }
          );
        }
        fetchChannel(e) {
          return ot(this, void 0, void 0, function* () {
            const t =
              this.gp._services.channelsService.channels.fetchChannel(e);
            return (this._handleResponse(t, "fetchChannel"), t);
          });
        }
        fetchPersonalChannel(e) {
          return ot(this, void 0, void 0, function* () {
            const t =
              this.gp._services.channelsService.channels.fetchPersonalChannel(
                e,
              );
            return (this._handleResponse(t, "fetchPersonalChannel"), t);
          });
        }
        fetchFeedChannel(e) {
          return ot(this, void 0, void 0, function* () {
            const t =
              this.gp._services.channelsService.channels.fetchFeedChannel(e);
            return (this._handleResponse(t, "fetchFeedChannel"), t);
          });
        }
        fetchChannels(e) {
          var { ids: t = [] } = e,
            i = lt(e, ["ids"]);
          return ot(this, void 0, void 0, function* () {
            const e = i;
            (t = t.map((e) => Number(String(e).trim())).filter(Boolean))
              .length > 0 && (e.ids = t);
            const r = ct(this, Xe, "f").fetch(i, (e) =>
              this.gp._services.channelsService.channels
                .fetchChannels(e)
                .then((e) => e.items),
            );
            return (this._handleResponse(r, "fetchChannels"), r);
          });
        }
        fetchMoreChannels(e) {
          var { ids: t = [] } = e,
            i = lt(e, ["ids"]);
          return ot(this, void 0, void 0, function* () {
            const e = i;
            (t =
              null == t
                ? void 0
                : t.map((e) => Number(String(e).trim())).filter(Boolean))
              .length > 0 && (e.ids = t);
            const r = ct(this, Xe, "f").fetchMore(i, (e) =>
              this.gp._services.channelsService.channels
                .fetchChannels(e)
                .then((e) => e.items),
            );
            return (this._handleResponse(r, "fetchMoreChannels"), r);
          });
        }
        createChannel(e) {
          const t = this.gp._services.channelsService.channels.createChannel(e);
          return (this._handleResponse(t, "createChannel"), t);
        }
        updateChannel(e) {
          const t = this.gp._services.channelsService.channels.updateChannel(e);
          return (this._handleResponse(t, "updateChannel"), t);
        }
        deleteChannel(e) {
          const t = this.gp._services.channelsService.channels.deleteChannel(e);
          return (this._handleResponse(t, "deleteChannel"), t);
        }
        _connect(e) {
          return ot(this, void 0, void 0, function* () {
            const t = () => this.gp._services.channelsService.ping(e);
            if ((window.setInterval(t, 45e3), t(), !this.canBeOnline)) return;
            const i = new TextDecoder(),
              r =
                yield this.gp._services.channelsService.createCentrifugeClient(
                  e,
                  "",
                  "",
                  "",
                );
            r &&
              r
                .on("connected", (e) => {
                  console.info(`connected over ${e.transport}`);
                })
                .on("connecting", function (e) {
                  console.info(`connecting: ${e.code}, ${e.reason}`);
                })
                .on("disconnected", function (e) {
                  console.info(`disconnected: ${e.code}, ${e.reason}`);
                })
                .on("publication", (e) => {
                  const t = JSON.parse(i.decode(e.data));
                  (null == t ? void 0 : t.type) &&
                    (this._events.emit("event", t),
                    this._events.emit(t.type, t.data));
                })
                .connect();
          });
        }
      }
      ((Xe = new WeakMap()),
        (He = new WeakMap()),
        (Qe = new WeakMap()),
        (et = new WeakMap()),
        (tt = new WeakMap()),
        (it = new WeakMap()),
        (rt = new WeakMap()),
        (nt = new WeakMap()),
        (st = new WeakMap()),
        (at = new WeakMap()));
      var ut = a(1437),
        dt = a(4835),
        pt = function (e, t, i, r) {
          return new (i || (i = Promise))(function (n, s) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((r = r.apply(e, t || [])).next());
          });
        };
      class ft extends E.Z {
        constructor(e) {
          (super(), (this.gp = e));
        }
        open({ type: e }) {
          return pt(this, void 0, void 0, function* () {
            this.gp.loader.inc();
            try {
              const [t] = yield Promise.all([
                this.fetch({ type: e }),
                this.gp.loadOverlay(),
                (0, ut.p)(dt.Z.app.trophy).catch(v.kg.error),
              ]);
              (this.gp.loader.dec(),
                t
                  ? ((t.format = "HTML"),
                    this._events.emit("open"),
                    yield this.gp.overlay.openDocument(t).catch(v.kg.error),
                    this._events.emit("close"))
                  : v.kg.error(new Error("document not found")));
            } catch (e) {
              (this.gp.loader.dec(), v.kg.error(e));
            }
          });
        }
        fetch({ type: e, format: t = "HTML" }) {
          return pt(this, void 0, void 0, function* () {
            const i = (0, r._)();
            this.gp.loader.inc();
            try {
              const r = yield this.gp._services.documentsService.fetch({
                type: e,
                format: t,
              });
              if (!r) throw new Error("can't fetch privacy policy");
              ((r.format = t), i.done(r), this._events.emit("fetch", r));
            } catch (e) {
              (i.abort(e), this._events.emit("error:fetch", e));
            } finally {
              this.gp.loader.dec();
            }
            return i.ready;
          });
        }
      }
      var vt,
        yt = function (e, t, i, r) {
          var n,
            s = arguments.length,
            a =
              s < 3
                ? t
                : null === r
                  ? (r = Object.getOwnPropertyDescriptor(t, i))
                  : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, i, r);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (n = e[o]) &&
                (a = (s < 3 ? n(a) : s > 3 ? n(t, i, a) : n(t, i)) || a);
          return (s > 3 && a && Object.defineProperty(t, i, a), a);
        },
        mt = function (e, t, i, r) {
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e);
        };
      const gt = {
        data: (e) => String(e || ""),
        stats: (e) => Number(e) || 0,
        flag: (e) => Boolean(e) || !1,
        image: (e) => String(e || ""),
        doc_html: (e) => String(e || ""),
        file: (e) => String(e || ""),
      };
      class wt extends E.Z {
        constructor(e, t, i) {
          (super(),
            (this.gp = e),
            (this.platformAdapter = t),
            (this.state = {}),
            (this.list = []),
            vt.set(this, function (e) {
              ((this.state = {}),
                (this.list = e),
                e.forEach((e) => {
                  var t;
                  const i =
                    (null === (t = gt[e.type]) || void 0 === t
                      ? void 0
                      : t.call(gt, e.value)) || e.value;
                  this.state[e.key] = i;
                }),
                this._events.emit("change"));
            }),
            mt(this, vt, "f").call(this, i));
        }
        get isPlatformVariablesAvailable() {
          return this.platformAdapter.isSupportsRemoteVariables;
        }
        get(e) {
          return this.state[e];
        }
        has(e) {
          return Boolean(this.get(e));
        }
        type(e) {
          var t;
          return (
            (null === (t = this.list.find((t) => t.key === e)) || void 0 === t
              ? void 0
              : t.type) || "data"
          );
        }
        fetch() {
          return (
            (e = this),
            (t = void 0),
            (r = function* () {
              try {
                const e =
                  (yield this.gp._services.projectService.fetchVariables())
                    .items;
                return (
                  mt(this, vt, "f").call(this, e),
                  this._events.emit("fetch", e),
                  e
                );
              } catch (e) {
                (v.kg.error(e), this._events.emit("error:fetch", e));
              }
            }),
            new ((i = void 0) || (i = Promise))(function (n, s) {
              function a(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? n(e.value)
                  : ((t = e.value),
                    t instanceof i
                      ? t
                      : new i(function (e) {
                          e(t);
                        })).then(a, o);
              }
              c((r = r.apply(e, t || [])).next());
            })
          );
          var e, t, i, r;
        }
        fetchPlatformVariables(e) {
          const t = this.platformAdapter.getVariables(e);
          return (
            t
              .then((e) => this._events.emit("fetchPlatformVariables", e))
              .catch((e) => {
                (v.kg.error(e),
                  this._events.emit(
                    "error:fetchPlatformVariables",
                    (null == e ? void 0 : e.message) || e,
                  ));
              }),
            t
          );
        }
      }
      ((vt = new WeakMap()),
        yt([T(300)], wt.prototype, "fetch", null),
        yt([T(300)], wt.prototype, "fetchPlatformVariables", null));
      var bt,
        Et,
        Pt,
        St,
        _t = a(6041),
        At = function (e, t, i, r) {
          var n,
            s = arguments.length,
            a =
              s < 3
                ? t
                : null === r
                  ? (r = Object.getOwnPropertyDescriptor(t, i))
                  : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            a = Reflect.decorate(e, t, i, r);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (n = e[o]) &&
                (a = (s < 3 ? n(a) : s > 3 ? n(t, i, a) : n(t, i)) || a);
          return (s > 3 && a && Object.defineProperty(t, i, a), a);
        },
        Tt = function (e, t, i, r) {
          return new (i || (i = Promise))(function (n, s) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        Ot = function (e, t, i, r) {
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e);
        },
        Ct = function (e, t) {
          var i = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (i[r] = e[r]);
          if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var n = 0;
            for (r = Object.getOwnPropertySymbols(e); n < r.length; n++)
              t.indexOf(r[n]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[n]) &&
                (i[r[n]] = e[r[n]]);
          }
          return i;
        };
      const Rt = "empty_url",
        kt = "empty_content",
        It = "empty_filename";
      class Dt extends Ze {
        constructor() {
          (super(xt),
            bt.set(this, void 0),
            Et.set(this, {}),
            Pt.set(this, function (e, t) {
              var { url: i, filename: r } = e,
                n = Ct(e, ["url", "filename"]);
              return Tt(this, void 0, void 0, function* () {
                if (!i) throw (v.kg.error(Rt), new Error(Rt));
                if (!r) throw (v.kg.error(It), new Error(It));
                if (Ot(this, Et, "f")[i]) {
                  const e = new File(
                    [Ot(this, Et, "f")[i]],
                    r,
                    Ot(this, Et, "f")[i],
                  );
                  return t(Object.assign(Object.assign({}, n), { file: e }));
                }
                try {
                  const e = yield fetch(i).then((e) => e.blob());
                  return t(
                    Object.assign(Object.assign({}, n), {
                      file: new File([e], r, { type: e.type }),
                    }),
                  );
                } catch (e) {
                  throw (v.kg.error(e), e);
                }
              });
            }),
            St.set(this, function (e, t) {
              return Tt(this, void 0, void 0, function* () {
                const { content: i, filename: r } = e,
                  n = Ct(e, ["content", "filename"]);
                if (!i.trim()) throw (v.kg.error(kt), new Error(kt));
                if (!r) throw (v.kg.error(It), new Error(It));
                return t(
                  Object.assign(Object.assign({}, n), {
                    file: new File([i], r),
                  }),
                );
              });
            }));
          const { openFile: e } = (function () {
            let e = null;
            const t = document.createElement("input");
            ((t.type = "file"),
              (t.id = "gp-file-input"),
              (t.style.cssText =
                "position: fixed; top: -999px; left: -999px; z-index: 0;"),
              (t.onchange = (e) => n(e.target)),
              (t.tabIndex = -1),
              document.body.appendChild(t));
            const i = () => {
                (setTimeout(() => e.done(null), 1e3),
                  document.body.removeEventListener("focus", i, !0));
              },
              n = (t) => {
                const [r] = t.files ? Array.from(t.files) : [];
                (document.body.removeEventListener("focus", i, !0), e.done(r));
              };
            return {
              input: t,
              openFile: (n = "*") => {
                return (
                  (s = this),
                  (a = void 0),
                  (c = function* () {
                    (null == e || e.abort(),
                      (e = (0, r._)()),
                      (t.accept = n),
                      t.click(),
                      document.body.addEventListener("focus", i, !0));
                    const s = yield e.ready;
                    if (s) return s;
                    throw new Error("cancelled");
                  }),
                  new ((o = void 0) || (o = Promise))(function (e, t) {
                    function i(e) {
                      try {
                        n(c.next(e));
                      } catch (e) {
                        t(e);
                      }
                    }
                    function r(e) {
                      try {
                        n(c.throw(e));
                      } catch (e) {
                        t(e);
                      }
                    }
                    function n(t) {
                      var n;
                      t.done
                        ? e(t.value)
                        : ((n = t.value),
                          n instanceof o
                            ? n
                            : new o(function (e) {
                                e(n);
                              })).then(i, r);
                    }
                    n((c = c.apply(s, a || [])).next());
                  })
                );
                var s, a, o, c;
              },
            };
          })();
          !(function (e, t, i, r, n) {
            if ("m" === r)
              throw new TypeError("Private method is not writable");
            if ("a" === r && !n)
              throw new TypeError(
                "Private accessor was defined without a setter",
              );
            if ("function" == typeof t ? e !== t || !n : !t.has(e))
              throw new TypeError(
                "Cannot write private member to an object whose class did not declare it",
              );
            "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i);
          })(this, bt, e, "f");
        }
        chooseFile(e) {
          return Tt(this, void 0, void 0, function* () {
            const t = (0, r._)();
            try {
              const i = yield Ot(this, bt, "f").call(this, e),
                r = URL.createObjectURL(i);
              ((Ot(this, Et, "f")[r] = i), t.done({ file: i, tempUrl: r }));
            } catch (e) {
              t.abort(e);
            }
            return t.ready;
          });
        }
        upload(e, t) {
          return Tt(this, void 0, void 0, function* () {
            const i = (0, r._)();
            try {
              e.file || (e.file = yield Ot(this, bt, "f").call(this, e.accept));
              const r = yield t(e);
              i.done(r);
            } catch (e) {
              i.abort(e);
            }
            return i.ready;
          });
        }
        uploadUrl(e, t) {
          return Tt(this, void 0, void 0, function* () {
            return Ot(this, Pt, "f").call(this, e, t);
          });
        }
        uploadContent(e, t) {
          return Tt(this, void 0, void 0, function* () {
            return Ot(this, St, "f").call(this, e, t);
          });
        }
      }
      function xt(e) {
        return `p${e.playerId || 0}:${(e.tags || []).join(",")}`;
      }
      ((bt = new WeakMap()),
        (Et = new WeakMap()),
        (Pt = new WeakMap()),
        (St = new WeakMap()),
        At([T(300)], Dt.prototype, "uploadUrl", null),
        At([T(300)], Dt.prototype, "uploadContent", null));
      var Nt,
        Mt = function (e, t, i, r) {
          return new (i || (i = Promise))(function (n, s) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        Lt = function (e, t, i, r) {
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e);
        };
      const Ft = "image/png,.jpeg,.jpg";
      class jt extends E.Z {
        constructor(e, t) {
          (super(), (this.gp = e), (this.acl = t), Nt.set(this, new Dt()));
        }
        get canUpload() {
          return this.acl.canUploadImages;
        }
        resize(e, t, i, r) {
          return (0, _t.ZP)(e, t, i, r);
        }
        chooseFile() {
          return Mt(this, void 0, void 0, function* () {
            const e = Lt(this, Nt, "f").chooseFile(Ft);
            return (
              e.then((e) => this._events.emit("choose", e)),
              e.catch((e) => this._events.emit("error:choose", e)),
              e
            );
          });
        }
        upload(e = {}) {
          return Mt(this, void 0, void 0, function* () {
            const t = Lt(this, Nt, "f").upload(
              Object.assign(Object.assign({}, e), { accept: Ft }),
              ({ file: e, tags: t }) =>
                Mt(this, void 0, void 0, function* () {
                  const i = this.gp.app.title,
                    r = yield this.gp.platform.requestPermissions({
                      allowUploadImages: !0,
                    });
                  if (!r.success)
                    throw new Error("permission_not_allowed_by_user");
                  if (this.gp.platform.isSupportsImageUploading) {
                    const n = yield this.gp.platform.uploadImage({
                      file: e,
                      tags: t,
                      albumName: i,
                      accessToken: r.payload.token,
                    });
                    return this.gp._services.imagesService.saveByURL({
                      src: n.src,
                      tags: t,
                      crop: {
                        height: n.height,
                        width: n.width,
                        left: 0,
                        top: 0,
                      },
                    });
                  }
                  return this.gp._services.imagesService.upload({
                    file: e,
                    tags: t,
                    accessPayload: r.payload,
                  });
                }),
            );
            return (
              this.gp.loader.inc(),
              t.then((e) => this._events.emit("upload", e)),
              t.catch((e) => this._events.emit("error:upload", e)),
              t.finally(() => this.gp.loader.dec()),
              t
            );
          });
        }
        uploadUrl(e = { url: "" }) {
          return Mt(this, void 0, void 0, function* () {
            return Lt(this, Nt, "f").uploadUrl(
              Object.assign(Object.assign({}, e), { filename: "image.jpeg" }),
              (e) => this.upload(e),
            );
          });
        }
        fetch(e = {}) {
          return Mt(this, void 0, void 0, function* () {
            const t = Lt(this, Nt, "f").fetch(e, (e) =>
              this.gp._services.imagesService.fetch(e).then((e) => e.items),
            );
            return (
              this.gp.loader.inc(),
              t.then((e) => this._events.emit("fetch", e)),
              t.catch((e) => this._events.emit("error:fetch", e)),
              t.finally(() => this.gp.loader.dec()),
              t
            );
          });
        }
        fetchMore(e = {}) {
          return Mt(this, void 0, void 0, function* () {
            const t = Lt(this, Nt, "f").fetchMore(e, (e) =>
              this.gp._services.imagesService.fetch(e).then((e) => e.items),
            );
            return (
              this.gp.loader.inc(),
              t.then((e) => this._events.emit("fetchMore", e)),
              t.catch((e) => this._events.emit("error:fetchMore", e)),
              t.finally(() => this.gp.loader.dec()),
              t
            );
          });
        }
      }
      Nt = new WeakMap();
      var Ut,
        Gt = function (e, t, i, r) {
          return new (i || (i = Promise))(function (n, s) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        Bt = function (e, t, i, r) {
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e);
        };
      class $t extends E.Z {
        constructor(e, t) {
          (super(), (this.gp = e), (this.acl = t), Ut.set(this, new Dt()));
        }
        get canUpload() {
          return this.acl.canUploadFiles;
        }
        chooseFile(e) {
          return Gt(this, void 0, void 0, function* () {
            const t = Bt(this, Ut, "f").chooseFile(e);
            return (
              t.then((e) => this._events.emit("choose", e)),
              t.catch((e) => this._events.emit("error:choose", e)),
              t
            );
          });
        }
        upload(e) {
          return Gt(this, void 0, void 0, function* () {
            const t = Bt(this, Ut, "f").upload(e, (e) =>
              this.gp._services.filesService.upload(e),
            );
            return (
              this.gp.loader.inc(),
              t.then((e) => this._events.emit("upload", e)),
              t.catch((e) => this._events.emit("error:upload", e)),
              t.finally(() => this.gp.loader.dec()),
              t
            );
          });
        }
        uploadContent(e) {
          return Gt(this, void 0, void 0, function* () {
            return Bt(this, Ut, "f").uploadContent(e, (e) => this.upload(e));
          });
        }
        uploadUrl(e) {
          return Gt(this, void 0, void 0, function* () {
            return Bt(this, Ut, "f").uploadUrl(e, (e) => this.upload(e));
          });
        }
        loadContent(e) {
          return Gt(this, void 0, void 0, function* () {
            const t = fetch(new URL(e).toString()).then((t) => {
              if (t.ok) return t.text();
              throw new Error(`Failed to load ${e}, errorCode: ${t.status}`);
            });
            return (
              this.gp.loader.inc(),
              t.then((e) => this._events.emit("loadContent", e)),
              t.catch((e) => this._events.emit("error:loadContent", e)),
              t.finally(() => this.gp.loader.dec()),
              t
            );
          });
        }
        fetch(e = {}) {
          return Gt(this, void 0, void 0, function* () {
            const t = Bt(this, Ut, "f").fetch(e, (e) =>
              this.gp._services.filesService.fetch(e).then((e) => e.items),
            );
            return (
              this.gp.loader.inc(),
              t.then((e) => this._events.emit("fetch", e)),
              t.catch((e) => this._events.emit("error:fetch", e)),
              t.finally(() => this.gp.loader.dec()),
              t
            );
          });
        }
        fetchMore(e = {}) {
          return Gt(this, void 0, void 0, function* () {
            const t = Bt(this, Ut, "f").fetchMore(e, (e) =>
              this.gp._services.filesService.fetch(e).then((e) => e.items),
            );
            return (
              this.gp.loader.inc(),
              t.then((e) => this._events.emit("fetchMore", e)),
              t.catch((e) => this._events.emit("error:fetchMore", e)),
              t.finally(() => this.gp.loader.dec()),
              t
            );
          });
        }
      }
      Ut = new WeakMap();
      var Vt = a(1049);
      class Wt extends E.Z {
        constructor(e) {
          (super(), (this.gp = e));
        }
        fetch({ ids: e }) {
          return (
            (t = this),
            (i = void 0),
            (s = function* () {
              if (0 === e.map(Number).filter(Boolean).length)
                throw (v.kg.error("empty_ids"), new Error("empty_ids"));
              const t = (0, r._)();
              return (
                this.gp.loader.inc(),
                t.ready
                  .then((e) => this._events.emit("fetch", e))
                  .catch((e) => this._events.emit("fetch:error", e)),
                this.gp._services.playerService
                  .fetchPlayers({ ids: e })
                  .then(t.done)
                  .catch(t.abort)
                  .finally(() => this.gp.loader.dec()),
                t.ready
              );
            }),
            new ((n = void 0) || (n = Promise))(function (e, r) {
              function a(e) {
                try {
                  c(s.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function o(e) {
                try {
                  c(s.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function c(t) {
                var i;
                t.done
                  ? e(t.value)
                  : ((i = t.value),
                    i instanceof n
                      ? i
                      : new n(function (e) {
                          e(i);
                        })).then(a, o);
              }
              c((s = s.apply(t, i || [])).next());
            })
          );
          var t, i, n, s;
        }
      }
      let qt;
      try {
        (new EventTarget(), (qt = !0));
      } catch (e) {
        qt = !1;
      }
      var Yt = qt
          ? EventTarget
          : class {
              constructor() {
                this.e = {};
              }
              addEventListener(e, t, i = !1) {
                this.t(e).push(t);
              }
              removeEventListener(e, t, i = !1) {
                const r = this.t(e),
                  n = r.indexOf(t);
                n > -1 && r.splice(n, 1);
              }
              dispatchEvent(e) {
                return (
                  (e.target = this),
                  Object.freeze(e),
                  this.t(e.type).forEach((t) => t(e)),
                  !0
                );
              }
              t(e) {
                return (this.e[e] = this.e[e] || []);
              }
            },
        zt = qt
          ? Event
          : class {
              constructor(e) {
                this.type = e;
              }
            };
      class Kt extends zt {
        constructor(e, t) {
          (super(e),
            (this.newState = t.newState),
            (this.oldState = t.oldState),
            (this.originalEvent = t.originalEvent));
        }
      }
      const Jt = "active",
        Zt = "passive",
        Xt = "hidden",
        Ht = "frozen",
        Qt = "terminated",
        ei = "object" == typeof safari && safari.pushNotification,
        ti = [
          "focus",
          "blur",
          "visibilitychange",
          "freeze",
          "resume",
          "pageshow",
          "onpageshow" in self ? "pagehide" : "unload",
        ],
        ii = (e) => (e.preventDefault(), (e.returnValue = "Are you sure?")),
        ri = [
          [Jt, Zt, Xt, Qt],
          [Jt, Zt, Xt, Ht],
          [Xt, Zt, Jt],
          [Ht, Xt],
          [Ht, Jt],
          [Ht, Zt],
        ].map((e) => e.reduce((e, t, i) => ((e[t] = i), e), {})),
        ni = () =>
          document.visibilityState === Xt ? Xt : document.hasFocus() ? Jt : Zt,
        si = new (class extends Yt {
          constructor() {
            super();
            const e = ni();
            ((this.s = e),
              (this.i = []),
              (this.a = this.a.bind(this)),
              ti.forEach((e) => addEventListener(e, this.a, !0)),
              ei &&
                addEventListener("beforeunload", (e) => {
                  this.n = setTimeout(() => {
                    e.defaultPrevented ||
                      e.returnValue.length > 0 ||
                      this.r(e, Xt);
                  }, 0);
                }));
          }
          get state() {
            return this.s;
          }
          get pageWasDiscarded() {
            return document.wasDiscarded || !1;
          }
          addUnsavedChanges(e) {
            !this.i.indexOf(e) > -1 &&
              (0 === this.i.length && addEventListener("beforeunload", ii),
              this.i.push(e));
          }
          removeUnsavedChanges(e) {
            const t = this.i.indexOf(e);
            t > -1 &&
              (this.i.splice(t, 1),
              0 === this.i.length && removeEventListener("beforeunload", ii));
          }
          r(e, t) {
            if (t !== this.s) {
              const i = ((e, t) => {
                for (let i, r = 0; (i = ri[r]); ++r) {
                  const r = i[e],
                    n = i[t];
                  if (r >= 0 && n >= 0 && n > r)
                    return Object.keys(i).slice(r, n + 1);
                }
                return [];
              })(this.s, t);
              for (let t = 0; t < i.length - 1; ++t) {
                const r = i[t],
                  n = i[t + 1];
                ((this.s = n),
                  this.dispatchEvent(
                    new Kt("statechange", {
                      oldState: r,
                      newState: n,
                      originalEvent: e,
                    }),
                  ));
              }
            }
          }
          a(e) {
            switch ((ei && clearTimeout(this.n), e.type)) {
              case "pageshow":
              case "resume":
                this.r(e, ni());
                break;
              case "focus":
                this.r(e, Jt);
                break;
              case "blur":
                this.s === Jt && this.r(e, ni());
                break;
              case "pagehide":
              case "unload":
                this.r(e, e.persisted ? Ht : Qt);
                break;
              case "visibilitychange":
                this.s !== Ht && this.s !== Qt && this.r(e, ni());
                break;
              case "freeze":
                this.r(e, Ht);
            }
          }
        })(),
        ai = ["hidden", "frozen", "terminated"];
      function oi({ url: e, blur: t = 0, fade: i = 0 }) {
        e
          ? ((function (e) {
              document
                .querySelectorAll(".gp-custom-background")
                .forEach((t) => {
                  (t.childNodes.forEach((e) => {
                    e.style.opacity = "0";
                  }),
                    setTimeout(() => {
                      t.remove();
                    }, 1e3 * e));
                });
            })(i),
            (function (e) {
              const t = document.createElement("div");
              (document.body.style.setProperty(
                "background",
                "transparent",
                "important",
              ),
                t.classList.add("gp-custom-background"),
                (function (e, t) {
                  const i = document.createElement("div");
                  ((i.style.cssText = `\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        z-index: -1;\n        background: transparent;\n        backdrop-filter: blur(${e.blur}px);\n        \n        transition: ${e.fade}s;\n    `),
                    i.classList.add("gp-custom-background-blur"),
                    t.append(i));
                })(e, t),
                (function (e, t) {
                  const i = document.createElement("div");
                  ((i.style.cssText = `\n        background-image: url(${e.url});\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: center;\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        z-index: -2;\n        opacity: 0;\n        transition: ${e.fade}s;\n    `),
                    i.classList.add("gp-custom-background-img"),
                    t.append(i),
                    setTimeout(() => {
                      i.style.opacity = "1";
                    }, 100));
                })(e, t),
                document.body.append(t));
            })({ url: e, blur: t, fade: i }))
          : v.kg.warn("Empty background url");
      }
      class ci {
        getLanguage(e) {
          return (
            (t = this),
            (i = void 0),
            (n = function* () {
              const t = decodeURIComponent(window.location.toString()),
                i = new RegExp(`_${e}_lang=(?<lang>\\w{2})`).exec(t);
              return i ? i.groups.lang : null;
            }),
            new ((r = void 0) || (r = Promise))(function (e, s) {
              function a(e) {
                try {
                  c(n.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                try {
                  c(n.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function c(t) {
                var i;
                t.done
                  ? e(t.value)
                  : ((i = t.value),
                    i instanceof r
                      ? i
                      : new r(function (e) {
                          e(i);
                        })).then(a, o);
              }
              c((n = n.apply(t, i || [])).next());
            })
          );
          var t, i, r, n;
        }
      }
      var li;
      const hi = Object.values(y.Uo);
      class ui {
        constructor() {
          li.set(this, [new ci()]);
        }
        getLanguage(e) {
          return (
            (t = this),
            (i = void 0),
            (n = function* () {
              for (const t of (function (e, t, i, r) {
                if ("a" === i && !r)
                  throw new TypeError(
                    "Private accessor was defined without a getter",
                  );
                if ("function" == typeof t ? e !== t || !r : !t.has(e))
                  throw new TypeError(
                    "Cannot read private member from an object whose class did not declare it",
                  );
                return "m" === i
                  ? r
                  : "a" === i
                    ? r.call(e)
                    : r
                      ? r.value
                      : t.get(e);
              })(this, li, "f")) {
                const i = yield t.getLanguage(e);
                if (null === i) continue;
                const r = i.toLowerCase();
                return hi.includes(r) ? r : null;
              }
              return null;
            }),
            new ((r = void 0) || (r = Promise))(function (e, s) {
              function a(e) {
                try {
                  c(n.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                try {
                  c(n.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function c(t) {
                var i;
                t.done
                  ? e(t.value)
                  : ((i = t.value),
                    i instanceof r
                      ? i
                      : new r(function (e) {
                          e(i);
                        })).then(a, o);
              }
              c((n = n.apply(t, i || [])).next());
            })
          );
          var t, i, r, n;
        }
      }
      li = new WeakMap();
      var di = a(2940);
      const pi = () => window.matchMedia("(orientation: portrait)").matches,
        fi = (e) => {
          const t = pi();
          return (t && e === di.LH.Portrait) || (!t && e === di.LH.Landscape);
        };
      var vi,
        yi = a(8866),
        mi = function (e, t, i, r) {
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e);
        };
      class gi {
        constructor() {
          (vi.set(this, new Set()),
            document.addEventListener("pointerdown", (e) => {
              mi(this, vi, "f").add(e.pointerId);
            }),
            document.addEventListener("pointerup", (e) => {
              mi(this, vi, "f").delete(e.pointerId);
            }));
        }
        waitForPointersUp() {
          return (
            (e = this),
            (t = void 0),
            (r = function* () {
              const e = new Promise((e) => {
                if (0 === mi(this, vi, "f").size) return e();
                const t = (i) => {
                  if (
                    (mi(this, vi, "f").delete(i.pointerId),
                    0 === mi(this, vi, "f").size)
                  )
                    return (document.removeEventListener("pointerup", t), e());
                };
                document.addEventListener("pointerup", t);
              });
              yield Promise.race([e, (0, yi.Z)(1500)]);
            }),
            new ((i = void 0) || (i = Promise))(function (n, s) {
              function a(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? n(e.value)
                  : ((t = e.value),
                    t instanceof i
                      ? t
                      : new i(function (e) {
                          e(t);
                        })).then(a, o);
              }
              c((r = r.apply(e, t || [])).next());
            })
          );
          var e, t, i, r;
        }
      }
      vi = new WeakMap();
      const wi = {
          [di.W2.Add]: (e, t) => {
            e.player.add(t.key, t.value);
          },
          [di.W2.Remove]: (e, t) => {
            e.player.add(t.key, -t.value);
          },
          [di.W2.Set]: (e, t) => {
            e.player.set(t.key, t.value);
          },
        },
        bi = { [di.x1.PlayerField]: wi };
      var Ei,
        Pi,
        Si,
        _i,
        Ai,
        Ti,
        Oi,
        Ci,
        Ri,
        ki,
        Ii,
        Di,
        xi,
        Ni,
        Mi,
        Li,
        Fi,
        ji = function (e, t, i, r) {
          return new (i || (i = Promise))(function (n, s) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        Ui = function (e, t, i, r, n) {
          if ("m" === r) throw new TypeError("Private method is not writable");
          if ("a" === r && !n)
            throw new TypeError(
              "Private accessor was defined without a setter",
            );
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it",
            );
          return (
            "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i),
            i
          );
        },
        Gi = function (e, t, i, r) {
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e);
        };
      const Bi = "reward_not_found";
      class $i extends E.Z {
        constructor(e, t, i) {
          (super(),
            (this.gp = e),
            Ei.add(this),
            Pi.set(this, void 0),
            Si.set(this, []),
            _i.set(this, []),
            Ai.set(this, []),
            Ti.set(this, {}),
            Oi.set(this, {}),
            Ci.set(this, {}),
            Ui(this, _i, i, "f"),
            Gi(this, Ei, "m", Li).call(this),
            Ui(this, Pi, t, "f"),
            Gi(this, Pi, "f").on("setRewardsList", (e) =>
              Gi(this, Ei, "m", Di).call(
                this,
                e.playerRewards,
                e.notSentGivenList,
                e.notSentAcceptedList,
              ),
            ),
            Gi(this, Pi, "f").on("markRewardsGiven", (e) => {
              e.forEach((e) => {
                const t = Gi(this, Ei, "m", Ri).call(this, e);
                if (!t) return void v.kg.error(`reward not found', ID ${e}`);
                Gi(this, Ei, "m", xi).call(this, t.id);
                const i = Gi(this, Ei, "m", Ii).call(this, t.id);
                (this._events.emit("give", i),
                  t.isAutoAccept && this._events.emit("accept", i));
              });
            }),
            this.gp.on("change:language", (e) => {
              (Gi(this, _i, "f").forEach((t) => {
                ((t.name = t.names[e] || t.names.en),
                  (t.description = t.descriptions[e] || t.descriptions.en));
              }),
                Gi(this, Ei, "m", Li).call(this));
            }),
            Gi(this, _i, "f").forEach((e) => {
              ((e.description =
                e.descriptions[this.gp.language] || e.descriptions.en),
                (e.name = e.names[this.gp.language] || e.names.en),
                (e.icon = (0, _t.ZP)(e.icon, 256, 256, !1)),
                (e.iconSmall = (0, _t.ZP)(e.icon, 48, 48, !1)));
            }),
            this.gp.on("gameStart", () =>
              ji(this, void 0, void 0, function* () {
                (yield this.gp.player.ready,
                  Gi(this, Ai, "f").forEach((e) => {
                    const t = Gi(this, Ei, "m", Ri).call(this, e.rewardId);
                    if (null == t ? void 0 : t.isAutoAccept) {
                      const i = e.countTotal - e.countAccepted;
                      if (i > 0)
                        for (let e = 0; e < i; e++) this.accept({ id: t.id });
                    }
                  }));
              }),
            ));
        }
        get list() {
          return [...Gi(this, _i, "f")];
        }
        get givenList() {
          return [...Gi(this, Ai, "f")];
        }
        give(e) {
          return ji(this, void 0, void 0, function* () {
            const t = Number(e.id) || e.tag,
              i = (0, r._)(),
              n = (t) => {
                (i.abort(t), this._events.emit("error:give", t, { input: e }));
              };
            if (Gi(this, Si, "f").includes(t)) return (n(Bi), i.ready);
            const s = Gi(this, Ei, "m", Ri).call(this, t);
            if (!s) return (n(Bi), i.ready);
            if (e.lazy) {
              let e = { rewardId: s.id, countTotal: 1, countAccepted: 0 };
              (Gi(this, Ei, "m", xi).call(this, s.id),
                Gi(this, Pi, "f").addGivenReward({ id: s.id, count: 1 }));
              const t = Gi(this, Ei, "m", ki).call(this, s.id);
              return (
                (e.countTotal = t.countTotal),
                (e.countAccepted = t.countAccepted),
                this._events.emit("give", { reward: s, playerReward: e }),
                s.isAutoAccept && (yield this.accept({ id: s.id })),
                i.done({ reward: s, playerReward: e }),
                i.ready
              );
            }
            this.gp.loader.inc();
            const a = s.id;
            try {
              const e = yield this.gp._services.rewardsService.give({ id: a }),
                { reward: t } = e,
                r = (function (e, t) {
                  var i = {};
                  for (var r in e)
                    Object.prototype.hasOwnProperty.call(e, r) &&
                      t.indexOf(r) < 0 &&
                      (i[r] = e[r]);
                  if (
                    null != e &&
                    "function" == typeof Object.getOwnPropertySymbols
                  ) {
                    var n = 0;
                    for (r = Object.getOwnPropertySymbols(e); n < r.length; n++)
                      t.indexOf(r[n]) < 0 &&
                        Object.prototype.propertyIsEnumerable.call(e, r[n]) &&
                        (i[r[n]] = e[r[n]]);
                  }
                  return i;
                })(e, ["reward"]);
              Gi(this, Ei, "m", xi).call(this, t.id);
              const n = Gi(this, Ei, "m", ki).call(this, t.id);
              ((r.countTotal = n.countTotal),
                (r.countAccepted = n.countAccepted),
                this._events.emit("give", { reward: t, playerReward: r }),
                t.isAutoAccept && (yield this.accept({ id: t.id })),
                i.done({ reward: t, playerReward: r }));
            } catch (r) {
              ("reward_not_found" === r && Gi(this, Si, "f").push(t),
                "string" == typeof r
                  ? (v.kg.error(r), n(r))
                  : (i.abort(r),
                    this._events.emit("error:give", r, { input: e })));
            } finally {
              this.gp.loader.dec();
            }
            return i.ready;
          });
        }
        accept(e) {
          return ji(this, void 0, void 0, function* () {
            const t = Number(e.id) || e.tag,
              i = (0, r._)(),
              n = (t) => {
                (i.abort(t),
                  this._events.emit("error:accept", t, { input: e }));
              };
            if (Gi(this, Si, "f").includes(t)) return (n(Bi), i.ready);
            if (!this.hasUnaccepted(t))
              return (n("reward_already_accepted"), i.ready);
            const { reward: s, playerReward: a } = Gi(this, Ei, "m", Ii).call(
              this,
              t,
            );
            return a
              ? (Gi(this, Ei, "m", Ni).call(this, a),
                Gi(this, Pi, "f").addAcceptedReward({
                  id: a.rewardId,
                  count: 1,
                }),
                this._events.emit("accept", { reward: s, playerReward: a }),
                i.done({ reward: s, playerReward: a }),
                i.ready)
              : (n("player_reward_not_found"), i.ready);
          });
        }
        has(e) {
          var t;
          return (
            (null === (t = Gi(this, Ei, "m", Ii).call(this, e).playerReward) ||
            void 0 === t
              ? void 0
              : t.countTotal) > 0
          );
        }
        hasAccepted(e) {
          var t;
          return (
            (null === (t = Gi(this, Ei, "m", Ii).call(this, e).playerReward) ||
            void 0 === t
              ? void 0
              : t.countAccepted) > 0
          );
        }
        hasUnaccepted(e) {
          const { playerReward: t } = Gi(this, Ei, "m", Ii).call(this, e);
          return !!t && t.countTotal > t.countAccepted;
        }
        getReward(e) {
          return Gi(this, Ei, "m", Ii).call(this, e);
        }
      }
      function Vi(e, t = 1) {
        e.countAccepted += t;
      }
      ((Pi = new WeakMap()),
        (Si = new WeakMap()),
        (_i = new WeakMap()),
        (Ai = new WeakMap()),
        (Ti = new WeakMap()),
        (Oi = new WeakMap()),
        (Ci = new WeakMap()),
        (Ei = new WeakSet()),
        (Ri = function (e) {
          return Gi(this, Ti, "f")[e] || Gi(this, Oi, "f")[e];
        }),
        (ki = function (e) {
          return Gi(this, Ci, "f")[e];
        }),
        (Ii = function (e) {
          const t = { reward: null, playerReward: null },
            i = Gi(this, Ei, "m", Ri).call(this, e);
          if (!i) return t;
          t.reward = i;
          const r = Gi(this, Ei, "m", ki).call(this, i.id);
          return (
            (t.playerReward = r || {
              rewardId: i.id,
              countAccepted: 0,
              countTotal: 0,
            }),
            t
          );
        }),
        (Di = function (e, t, i) {
          let r = [...i];
          const n = t.reduce((t, { id: i, count: r }) => {
              const n = e.find((e) => e.rewardId === i);
              return n
                ? ((n.countTotal += r), t)
                : (Gi(this, _i, "f").find((e) => e.id === i) &&
                    t.push({ rewardId: i, countTotal: r, countAccepted: 0 }),
                  t);
            }, []),
            s = [...e, ...n];
          (Ui(
            this,
            Ai,
            s.reduce((e, t) => {
              if (Gi(this, _i, "f").find((e) => e.id === t.rewardId)) {
                const i = r.find((e) => e.id === t.rewardId);
                (i &&
                  ((r = r.filter((e) => e.id !== t.rewardId)), Vi(t, i.count)),
                  e.push(t));
              }
              return e;
            }, []),
            "f",
          ),
            Gi(this, Ei, "m", Fi).call(this));
        }),
        (xi = function (e) {
          if (!Gi(this, Ei, "m", Ri).call(this, e)) return;
          const t = Gi(this, Ei, "m", ki).call(this, e);
          t
            ? (t.countTotal += 1)
            : (Gi(this, Ai, "f").unshift({
                rewardId: e,
                countTotal: 1,
                countAccepted: 0,
              }),
              Gi(this, Ei, "m", Fi).call(this));
        }),
        (Ni = function (e) {
          const t = Gi(this, Ei, "m", Ri).call(this, e.rewardId);
          t
            ? (Vi(e), Gi(this, Ei, "m", Mi).call(this, t))
            : v.kg.error(`Reward ${e.rewardId} not found`);
        }),
        (Mi = function (e) {
          try {
            ((t = this.gp),
              e.mutations.forEach((e) => {
                const i = bi[e.type];
                if (!i) throw new Error(`Unknown mutation type: ${e.type}`);
                const r = i[e.action];
                if (!r) throw new Error(`Unknown mutation action: ${e.action}`);
                r(t, e);
              }));
          } catch (e) {
            v.kg.error("failed to apply reward", e);
          }
          var t;
        }),
        (Li = function () {
          (Ui(this, Ti, {}, "f"),
            Ui(this, Oi, {}, "f"),
            Gi(this, _i, "f").forEach((e) => {
              ((Gi(this, Ti, "f")[e.id] = e), (Gi(this, Oi, "f")[e.tag] = e));
            }));
        }),
        (Fi = function () {
          (Ui(this, Ci, {}, "f"),
            Gi(this, Ai, "f").forEach((e) => {
              Gi(this, Ci, "f")[e.rewardId] = e;
            }));
        }));
      var Wi,
        qi,
        Yi,
        zi,
        Ki,
        Ji,
        Zi,
        Xi,
        Hi,
        Qi,
        er,
        tr,
        ir = function (e, t, i, r) {
          return new (i || (i = Promise))(function (n, s) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        rr = function (e, t, i, r, n) {
          if ("m" === r) throw new TypeError("Private method is not writable");
          if ("a" === r && !n)
            throw new TypeError(
              "Private accessor was defined without a setter",
            );
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it",
            );
          return (
            "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i),
            i
          );
        },
        nr = function (e, t, i, r) {
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e);
        };
      const sr = "trigger_not_found";
      class ar extends E.Z {
        constructor(e, t, i) {
          (super(),
            (this.gp = e),
            Wi.add(this),
            qi.set(this, void 0),
            Yi.set(this, []),
            zi.set(this, []),
            Ki.set(this, {}),
            Ji.set(this, {}),
            Zi.set(this, {}),
            rr(
              this,
              Yi,
              [
                ...i.triggers,
                ...i.schedulers.reduce((e, t) => [...e, ...t.triggers], []),
                ...i.events.reduce((e, t) => [...e, ...t.triggers], []),
              ],
              "f",
            ),
            nr(this, Wi, "m", er).call(this),
            rr(this, qi, t, "f"),
            nr(this, qi, "f").on("setTriggersList", (e) => {
              (rr(
                this,
                zi,
                e.playerTriggers.filter(
                  (e) => !!nr(this, Ki, "f")[e.triggerId],
                ),
                "f",
              ),
                nr(this, Wi, "m", tr).call(this));
            }),
            nr(this, qi, "f").on("markTriggersActivated", (e) => {
              e.forEach((e) => {
                const { trigger: t, isActivated: i } = nr(
                  this,
                  Wi,
                  "m",
                  Hi,
                ).call(this, e);
                t
                  ? i ||
                    (nr(this, zi, "f").push({ triggerId: e, claimed: !1 }),
                    nr(this, Wi, "m", tr).call(this),
                    this._events.emit("activate", { trigger: t }),
                    v.kg.info(`🎉 Trigger activated, ID: ${e}, Tag: ${t.tag}`))
                  : v.kg.error(`trigger not found, ID: ${e}`);
              });
            }),
            nr(this, qi, "f").on("markTriggersClaimed", (e) => {
              e.forEach((e) => {
                const { trigger: t, isClaimed: i } = nr(this, Wi, "m", Hi).call(
                  this,
                  e,
                );
                t
                  ? i ||
                    (rr(
                      this,
                      zi,
                      nr(this, zi, "f").map((t) =>
                        t.triggerId === e
                          ? Object.assign(Object.assign({}, t), { claimed: !0 })
                          : t,
                      ),
                      "f",
                    ),
                    nr(this, Wi, "m", tr).call(this),
                    this._events.emit("claim", { trigger: t }),
                    v.kg.info(`🎉 Trigger claimed, ID: ${e}, Tag: ${t.tag}`))
                  : v.kg.error(`trigger not found, ID: ${e}`);
              });
            }),
            this.gp.on("change:language", (e) => {
              (nr(this, Yi, "f").forEach((t) => {
                t.description = t.descriptions[e] || t.descriptions.en;
              }),
                nr(this, Wi, "m", er).call(this));
            }));
        }
        get list() {
          return [...nr(this, Yi, "f")];
        }
        get activatedList() {
          return [...nr(this, zi, "f")];
        }
        isActivated(e) {
          return nr(this, Wi, "m", Hi).call(this, e).isActivated;
        }
        isClaimed(e) {
          return nr(this, Wi, "m", Hi).call(this, e).isClaimed;
        }
        getTrigger(e) {
          return nr(this, Wi, "m", Hi).call(this, e);
        }
        claim(e) {
          return ir(this, void 0, void 0, function* () {
            const t = e.id || e.tag,
              i = nr(this, Wi, "m", Xi).call(this, t),
              n = (0, r._)();
            try {
              if (!i)
                throw (
                  v.kg.error(`trigger not found, ID: ${t}`),
                  new Error(sr)
                );
              const e = yield this._claim({ id: i.id });
              n.done(e);
            } catch (t) {
              const i = (null == t ? void 0 : t.message) || t;
              (this._events.emit("error:claim", i, { input: e }), n.abort(i));
            }
            return n.ready;
          });
        }
        _claim({ id: e, tag: t }) {
          return ir(this, void 0, void 0, function* () {
            const i = e || t,
              { isActivated: r, isClaimed: n } = nr(this, Wi, "m", Qi).call(
                this,
                i,
              );
            if (!r)
              throw (
                v.kg.error(`trigger is not activated, ID: ${i}`),
                new Error("trigger_not_activated")
              );
            if (n)
              throw (
                v.kg.error(`trigger is already claimed, ID: ${i}`),
                new Error("trigger_already_claimed")
              );
            return (
              nr(this, qi, "f").addClaimedTrigger(i),
              yield nr(this, qi, "f").syncPlayer(),
              nr(this, Wi, "m", Hi).call(this, i)
            );
          });
        }
      }
      ((qi = new WeakMap()),
        (Yi = new WeakMap()),
        (zi = new WeakMap()),
        (Ki = new WeakMap()),
        (Ji = new WeakMap()),
        (Zi = new WeakMap()),
        (Wi = new WeakSet()),
        (Xi = function (e) {
          return nr(this, Ki, "f")[e] || nr(this, Ji, "f")[e];
        }),
        (Hi = function (e) {
          const t = { trigger: null, isActivated: !1, isClaimed: !1 },
            i = nr(this, Wi, "m", Xi).call(this, e);
          if (!i) return t;
          if (((t.trigger = i), i)) {
            const e = nr(this, Zi, "f")[i.id];
            e && ((t.isActivated = !0), (t.isClaimed = e.claimed));
          }
          return t;
        }),
        (Qi = function (e) {
          const t = nr(this, Zi, "f")[e];
          return t
            ? { isActivated: !0, isClaimed: t.claimed }
            : { isActivated: !1, isClaimed: !1 };
        }),
        (er = function () {
          (rr(this, Ki, {}, "f"),
            rr(this, Ji, {}, "f"),
            nr(this, Yi, "f").forEach((e) => {
              ((nr(this, Ki, "f")[e.id] = e), (nr(this, Ji, "f")[e.tag] = e));
            }));
        }),
        (tr = function () {
          (rr(this, Zi, {}, "f"),
            nr(this, zi, "f").forEach((e) => {
              nr(this, Zi, "f")[e.triggerId] = e;
            }));
        }));
      var or,
        cr = function (e, t, i, r) {
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e);
        },
        lr = function (e, t, i, r, n) {
          if ("m" === r) throw new TypeError("Private method is not writable");
          if ("a" === r && !n)
            throw new TypeError(
              "Private accessor was defined without a setter",
            );
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it",
            );
          return (
            "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i),
            i
          );
        };
      class hr extends E.Z {
        constructor() {
          (super(...arguments),
            (this.acceptedRewards = []),
            (this.givenRewards = []),
            (this.unlockedAchievements = []),
            (this.purchasedProducts = []),
            (this.claimedTriggers = []),
            (this.claimedSchedulersDays = []),
            (this.canUpdateServerTime = !0),
            or.set(this, null));
        }
        addGivenReward(e) {
          const t = this.givenRewards.find((t) => t.id === e.id);
          t ? (t.count += e.count) : this.givenRewards.push(e);
        }
        addAcceptedReward(e) {
          const t = this.acceptedRewards.find((t) => t.id === e.id);
          t ? (t.count += e.count) : this.acceptedRewards.push(e);
        }
        addClaimedTrigger(e) {
          this.claimedTriggers.push(e);
        }
        addClaimedSchedulerDay(e) {
          this.claimedSchedulersDays.push(e);
        }
        addUnlockedAchievement(e) {
          this.unlockedAchievements.push(e);
        }
        setTriggersList(e) {
          this.emit("setTriggersList", { playerTriggers: e });
        }
        setRewardsList(e) {
          this.emit("setRewardsList", {
            playerRewards: e,
            notSentAcceptedList: this.acceptedRewards,
            notSentGivenList: this.givenRewards,
          });
        }
        setAchievementsList(e) {
          this.emit("setAchievementsList", {
            achievements: e,
            notSentIds: this.unlockedAchievements,
          });
        }
        setPurchasedList(e) {
          this.emit("setPurchasedList", {
            playerPurchases: e,
            notSentIds: this.purchasedProducts,
          });
        }
        setExperiments(e) {
          this.emit("setExperiments", { playerExperiments: e });
        }
        setPlayerSegments(e, t, i) {
          this.emit("setPlayerSegments", {
            playerSegments: e,
            leftSegments: i,
            enterSegments: t,
          });
        }
        setPlayerSchedulersList(e) {
          this.emit("setPlayerSchedulersList", { playerSchedulers: e });
        }
        setPlayerEventsList(e) {
          this.emit("setPlayerEventsList", { playerEvents: e });
        }
        setUniques(e) {
          this.emit("setUniques", { uniques: e });
        }
        markTriggersActivated(e) {
          this.emit("markTriggersActivated", e);
        }
        markTriggersClaimed(e) {
          this.emit("markTriggersClaimed", e);
        }
        markRewardsGiven(e) {
          this.emit("markRewardsGiven", e);
        }
        markAchievementsUnlocked(e) {
          this.emit("markAchievementsUnlocked", e);
        }
        markPurchasesGiven(e) {
          this.emit("markPurchasesGiven", e);
        }
        markSchedulersDaysClaimed(e) {
          this.emit("markSchedulersDaysClaimed", e);
        }
        markUniqueRegistered(e) {
          this.emit("markUniqueRegistered", e);
        }
        syncPurchases() {
          const e = (0, r._)();
          return (this._events.emit("syncPurchases", e.done), e.ready);
        }
        updateServerTime(e) {
          this._events.emit("updateServerTime", e);
        }
        syncPlayer() {
          if (cr(this, or, "f")) return cr(this, or, "f").ready;
          const e = (0, r._)();
          return (
            lr(this, or, e, "f"),
            (0, yi.Z)(300).then(() => this._events.emit("syncPlayer")),
            e.ready
          );
        }
        commitSyncPlayer() {
          var e;
          (null === (e = cr(this, or, "f")) || void 0 === e || e.done(),
            lr(this, or, null, "f"));
        }
        isDirty() {
          return (
            this.acceptedRewards.length > 0 ||
            this.givenRewards.length > 0 ||
            this.claimedTriggers.length > 0 ||
            this.claimedSchedulersDays.length > 0
          );
        }
        export() {
          return {
            acceptedRewards: this.acceptedRewards,
            givenRewards: this.givenRewards,
            claimedTriggers: this.claimedTriggers,
            claimedSchedulersDays: this.claimedSchedulersDays,
          };
        }
        reset() {
          ((this.acceptedRewards = []),
            (this.givenRewards = []),
            (this.claimedTriggers = []),
            (this.claimedSchedulersDays = []));
        }
        emit(e, t) {
          this._events.emit(e, t);
        }
      }
      or = new WeakMap();
      var ur,
        dr,
        pr,
        fr,
        vr,
        yr,
        mr,
        gr,
        wr,
        br,
        Er,
        Pr,
        Sr = function (e, t, i, r) {
          return new (i || (i = Promise))(function (n, s) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        _r = function (e, t, i, r, n) {
          if ("m" === r) throw new TypeError("Private method is not writable");
          if ("a" === r && !n)
            throw new TypeError(
              "Private accessor was defined without a setter",
            );
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it",
            );
          return (
            "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i),
            i
          );
        },
        Ar = function (e, t, i, r) {
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e);
        };
      const Tr = "scheduler_not_found",
        Or = "wrong_day",
        Cr = "day_not_reached",
        Rr = "nothing_to_claim",
        kr = {
          scheduler: null,
          bonuses: [],
          canClaimAllDay: !1,
          canClaimDay: !1,
          day: 0,
          isAllDayClaimed: !1,
          isDayClaimed: !1,
          isDayComplete: !1,
          isDayReached: !1,
          triggers: [],
        };
      class Ir extends E.Z {
        constructor(e, t, i) {
          (super(),
            (this.gp = e),
            ur.add(this),
            dr.set(this, void 0),
            pr.set(this, []),
            fr.set(this, []),
            _r(this, pr, i, "f"),
            _r(this, dr, t, "f"),
            Ar(this, dr, "f").on(
              "setPlayerSchedulersList",
              ({ playerSchedulers: e }) => {
                _r(
                  this,
                  fr,
                  e.filter((e) =>
                    Ar(this, pr, "f").some((t) => t.id === e.schedulerId),
                  ),
                  "f",
                );
              },
            ));
        }
        get list() {
          return [...Ar(this, pr, "f")];
        }
        get activeList() {
          return [...Ar(this, fr, "f")];
        }
        getSchedulersTriggers() {
          return Ar(this, pr, "f").reduce(
            (e, { triggers: t }) => [...e, ...t],
            [],
          );
        }
        getScheduler(e) {
          const { scheduler: t, playerScheduler: i } = Ar(
            this,
            ur,
            "m",
            yr,
          ).call(this, e);
          if (!t)
            return {
              scheduler: null,
              currentDay: 0,
              daysClaimed: [],
              isRegistered: !1,
              stats: { activeDays: 0, activeDaysConsecutive: 0 },
            };
          let r = !1,
            n = 0,
            s = [],
            a = { activeDays: 0, activeDaysConsecutive: 0 };
          return (
            i &&
              ((r = !0),
              (a = i.stats),
              (s = i.daysClaimed),
              (n =
                t.type === di.OB.ActiveDays
                  ? a.activeDays
                  : a.activeDaysConsecutive)),
            {
              scheduler: t,
              isRegistered: r,
              currentDay: n,
              daysClaimed: s,
              stats: a,
            }
          );
        }
        isRegistered(e) {
          return !!Ar(this, ur, "m", yr).call(this, e).playerScheduler;
        }
        isTodayRewardClaimed(e) {
          const t = this.getScheduler(e);
          if (!t.scheduler) return !1;
          const { currentDay: i, daysClaimed: r } = t;
          return r.includes(i);
        }
        canClaimDay(e, t) {
          return this.getSchedulerDay(e, t).canClaimDay;
        }
        canClaimDayAdditional(e, t, i) {
          const { scheduler: r } = Ar(this, ur, "m", yr).call(this, e);
          if (!r) return !1;
          const n = r.triggers.find(
            (e) => (e.id === i || e.tag === i) && e.day === t,
          );
          return (
            !!n &&
            this.gp.triggers.isActivated(n.id) &&
            !this.gp.triggers.isClaimed(n.id)
          );
        }
        canClaimAllDay(e, t) {
          return this.getSchedulerDay(e, t).canClaimAllDay;
        }
        getSchedulerDay(e, t) {
          var i;
          const r = this.getScheduler(e);
          if (!r.scheduler) return kr;
          const { scheduler: n, currentDay: s, daysClaimed: a } = r,
            o = n.triggers.filter((e) => e.day === t),
            c = s >= t,
            l = c && o.every((e) => this.gp.triggers.isActivated(e.id)),
            h = a.includes(t),
            u = h && o.every((e) => this.gp.triggers.isClaimed(e.id)),
            d = !!n && !h && c,
            p =
              d ||
              n.triggers.some((i) => this.canClaimDayAdditional(e, t, i.id));
          return {
            scheduler: n,
            day: t,
            isDayReached: c,
            isDayComplete: l,
            isDayClaimed: h,
            isAllDayClaimed: u,
            canClaimDay: d,
            canClaimAllDay: p,
            bonuses:
              (null === (i = n.daysBonuses.find((e) => e.day === t)) ||
              void 0 === i
                ? void 0
                : i.bonuses) || [],
            triggers: o,
          };
        }
        getSchedulerCurrentDay(e) {
          const t = this.getScheduler(e);
          if (!t.scheduler) return kr;
          const { currentDay: i } = t;
          return this.getSchedulerDay(e, i);
        }
        claimDay(e, t) {
          return Sr(this, void 0, void 0, function* () {
            return Ar(this, ur, "m", Pr).call(
              this,
              "claimDay",
              Ar(this, ur, "m", gr).call(this, e, t),
              { schedulerIdOrTag: e, day: t },
            );
          });
        }
        claimDayAdditional(e, t, i) {
          return Sr(this, void 0, void 0, function* () {
            return Ar(this, ur, "m", Pr).call(
              this,
              "claimDayAdditional",
              Ar(this, ur, "m", wr).call(this, e, t, i),
              { schedulerIdOrTag: e, day: t, triggerIdOrTag: i },
            );
          });
        }
        claimAllDay(e, t) {
          return Sr(this, void 0, void 0, function* () {
            return Ar(this, ur, "m", Pr).call(
              this,
              "claimAllDay",
              Ar(this, ur, "m", br).call(this, e, t),
              { schedulerIdOrTag: e, day: t },
            );
          });
        }
        claimAllDays(e) {
          return Sr(this, void 0, void 0, function* () {
            return Ar(this, ur, "m", Pr).call(
              this,
              "claimAllDays",
              Ar(this, ur, "m", Er).call(this, e),
              { schedulerIdOrTag: e },
            );
          });
        }
        register(e) {
          return Sr(this, void 0, void 0, function* () {
            return Ar(this, ur, "m", Pr).call(
              this,
              "register",
              Ar(this, ur, "m", vr).call(
                this,
                (null == e ? void 0 : e.id) || (null == e ? void 0 : e.tag),
              ),
              e,
            );
          });
        }
      }
      ((dr = new WeakMap()),
        (pr = new WeakMap()),
        (fr = new WeakMap()),
        (ur = new WeakSet()),
        (vr = function (e) {
          return Sr(this, void 0, void 0, function* () {
            const t = this.getScheduler(e);
            if (!t.scheduler) throw new Error(Tr);
            const { scheduler: i } = t,
              r = yield this.gp._services.schedulersService.register({
                schedulerId: i.id,
              });
            Ar(this, fr, "f").push(
              Object.assign(Object.assign({}, r), { scheduler: i }),
            );
            const n = this.getScheduler(e),
              { scheduler: s } = n;
            return (function (e, t) {
              var i = {};
              for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) &&
                  t.indexOf(r) < 0 &&
                  (i[r] = e[r]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              ) {
                var n = 0;
                for (r = Object.getOwnPropertySymbols(e); n < r.length; n++)
                  t.indexOf(r[n]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, r[n]) &&
                    (i[r[n]] = e[r[n]]);
              }
              return i;
            })(n, ["scheduler"]);
          });
        }),
        (yr = function (e) {
          const t = { scheduler: null, playerScheduler: null },
            i = Ar(this, pr, "f").find(
              (t) => t.tag === e || t.id === Number(e),
            );
          return i
            ? ((t.scheduler = i),
              i &&
                (t.playerScheduler = Ar(this, fr, "f").find(
                  (e) => e.schedulerId === i.id,
                )),
              t)
            : t;
        }),
        (mr = function (e, t) {
          return !Number.isNaN(e) && e > 0 && e <= t.days;
        }),
        (gr = function (e, t) {
          return Sr(this, void 0, void 0, function* () {
            const {
              scheduler: i,
              isDayReached: r,
              isDayClaimed: n,
            } = this.getSchedulerDay(e, t);
            if (!i) throw Tr;
            if (!Ar(this, ur, "m", mr).call(this, t, i)) throw Or;
            if (!r) throw Cr;
            if (n) throw "day_already_claimed";
            return (
              Ar(this, dr, "f").addClaimedSchedulerDay({
                schedulerId: i.id,
                day: t,
              }),
              yield Ar(this, dr, "f").syncPlayer(),
              this.getSchedulerDay(e, t)
            );
          });
        }),
        (wr = function (e, t, i) {
          return Sr(this, void 0, void 0, function* () {
            const { scheduler: r, isDayReached: n } = this.getSchedulerDay(
              e,
              t,
            );
            if (!r) throw Tr;
            if (!Ar(this, ur, "m", mr).call(this, t, r)) throw Or;
            if (!n) throw Cr;
            const s = r.triggers.find((e) => e.id === i || e.tag === i);
            if (!s) throw sr;
            const { isClaimed: a } = yield this.gp.triggers._claim({
              id: s.id,
            });
            if (!a) throw "failed_to_claim";
            return this.getSchedulerDay(e, t);
          });
        }),
        (br = function (e, t) {
          return Sr(this, void 0, void 0, function* () {
            const { scheduler: i, isDayReached: r } = this.getSchedulerDay(
              e,
              t,
            );
            if (!i) throw Tr;
            if (!Ar(this, ur, "m", mr).call(this, t, i)) throw Or;
            if (!r) throw Cr;
            const n = [];
            if (
              (this.canClaimDay(e, t) &&
                n.push(Ar(this, ur, "m", gr).call(this, e, t)),
              i.triggers.forEach((i) => {
                this.canClaimDayAdditional(e, t, i.id) &&
                  n.push(Ar(this, ur, "m", wr).call(this, e, t, i.id));
              }),
              0 === n.length)
            )
              throw Rr;
            return (yield Promise.all(n), this.getSchedulerDay(e, t));
          });
        }),
        (Er = function (e) {
          return Sr(this, void 0, void 0, function* () {
            const { scheduler: t } = Ar(this, ur, "m", yr).call(this, e);
            if (!t) throw Tr;
            const i = [];
            for (let r = 1; r <= t.days; r++)
              this.canClaimAllDay(e, r) &&
                i.push(this.claimAllDay(e, r).catch(v.kg.warn));
            if (0 === i.length) throw Rr;
            return (yield Promise.all(i), this.getScheduler(e));
          });
        }),
        (Pr = function (e, t, i) {
          return t
            .then((t) => (this._events.emit(e, t, { input: i }), t))
            .catch((t) => {
              const r = (null == t ? void 0 : t.message) || t;
              throw (this._events.emit(`error:${e}`, r, { input: i }), r);
            });
        }));
      var Dr,
        xr,
        Nr,
        Mr,
        Lr,
        Fr = function (e, t, i, r, n) {
          if ("m" === r) throw new TypeError("Private method is not writable");
          if ("a" === r && !n)
            throw new TypeError(
              "Private accessor was defined without a setter",
            );
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it",
            );
          return (
            "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i),
            i
          );
        },
        jr = function (e, t, i, r) {
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e);
        };
      class Ur extends E.Z {
        constructor(e, t, i) {
          (super(),
            (this.gp = e),
            Dr.add(this),
            xr.set(this, void 0),
            Nr.set(this, []),
            Mr.set(this, []),
            Fr(
              this,
              Nr,
              i.map((t) =>
                Object.assign(Object.assign({}, t), {
                  name: t.names[e.language] || t.names.en,
                  description: t.descriptions[e.language] || t.descriptions.en,
                  iconSmall: (0, _t.ZP)(t.icon, 48, 48, !1),
                  icon: (0, _t.ZP)(t.icon, 256, 256, !1),
                  get timeLeft() {
                    const i = Date.parse(t.dateEnd) || 1 / 0,
                      r = Math.floor((i - Date.parse(e.serverTime)) / 1e3);
                    return r > 0 ? r : 0;
                  },
                  get isActive() {
                    const i = Date.parse(t.dateStart) || 0;
                    return Date.parse(e.serverTime) >= i && this.timeLeft > 0;
                  },
                }),
              ),
              "f",
            ),
            Fr(this, xr, t, "f"),
            jr(this, xr, "f").on(
              "setPlayerEventsList",
              ({ playerEvents: e }) => {
                Fr(
                  this,
                  Mr,
                  e.filter((e) =>
                    jr(this, Nr, "f").some((t) => t.id === e.eventId),
                  ),
                  "f",
                );
              },
            ),
            this.gp.on("change:language", (e) => {
              jr(this, Nr, "f").forEach((t) => {
                ((t.name = t.names[e] || t.names.en),
                  (t.description = t.descriptions[e] || t.descriptions.en));
              });
            }));
        }
        get list() {
          return [...jr(this, Nr, "f")];
        }
        get activeList() {
          return [...jr(this, Mr, "f")];
        }
        getEvent(e) {
          const { event: t, playerEvent: i } = jr(this, Dr, "m", Lr).call(
              this,
              e,
            ),
            r = {
              event: t,
              stats: (null == i ? void 0 : i.stats) || {
                activeDays: 0,
                activeDaysConsecutive: 0,
              },
              isJoined: !!(null == t ? void 0 : t.isActive) && !!i,
              rewards: [],
              achievements: [],
              products: [],
            };
          return t
            ? (t.triggers.forEach((e) => {
                e.bonuses.forEach((e) => {
                  switch (e.type) {
                    case di.Do.Reward:
                      const { reward: t } = this.gp.rewards.getReward(e.id);
                      t &&
                        r.rewards.push(
                          Object.assign(Object.assign({}, t), {
                            isExists: this.gp.rewards.has(e.id),
                          }),
                        );
                      break;
                    case di.Do.Achievement:
                      const { achievement: i } =
                        this.gp.achievements.getAchievement(e.id);
                      i &&
                        r.achievements.push(
                          Object.assign(Object.assign({}, i), {
                            isExists: this.gp.achievements.has(e.id),
                          }),
                        );
                      break;
                    case di.Do.Product:
                      const n = this.gp.payments.getProduct(e.id);
                      n &&
                        r.products.push(
                          Object.assign(Object.assign({}, n), {
                            isExists: this.gp.payments.has(e.id),
                          }),
                        );
                  }
                }, []);
              }),
              r)
            : r;
        }
        has(e) {
          const { event: t } = jr(this, Dr, "m", Lr).call(this, e);
          return !!(null == t ? void 0 : t.isActive);
        }
        isJoined(e) {
          const { event: t, playerEvent: i } = jr(this, Dr, "m", Lr).call(
            this,
            e,
          );
          return !!(null == t ? void 0 : t.isActive) && !!i;
        }
        join(e) {
          return (
            (t = this),
            (i = void 0),
            (s = function* () {
              const t = Number(e.id) || e.tag,
                i = (0, r._)(),
                n = (t) => {
                  const r = "string" == typeof t ? t : t.message;
                  return (
                    i.abort(r),
                    this._events.emit("error:join", r, { input: e }),
                    i.ready
                  );
                },
                { event: s, playerEvent: a } = jr(this, Dr, "m", Lr).call(
                  this,
                  t,
                );
              if (!s) return n("event_not_found");
              if (a) return n("already_joined");
              try {
                this.gp.loader.inc();
                const e = yield this.gp._services.eventsService.join({
                    eventId: s.id,
                  }),
                  { __typename: t } = e,
                  r = (function (e, t) {
                    var i = {};
                    for (var r in e)
                      Object.prototype.hasOwnProperty.call(e, r) &&
                        t.indexOf(r) < 0 &&
                        (i[r] = e[r]);
                    if (
                      null != e &&
                      "function" == typeof Object.getOwnPropertySymbols
                    ) {
                      var n = 0;
                      for (
                        r = Object.getOwnPropertySymbols(e);
                        n < r.length;
                        n++
                      )
                        t.indexOf(r[n]) < 0 &&
                          Object.prototype.propertyIsEnumerable.call(e, r[n]) &&
                          (i[r[n]] = e[r[n]]);
                    }
                    return i;
                  })(e, ["__typename"]);
                (jr(this, Mr, "f").some((e) => e.eventId === r.eventId) ||
                  jr(this, Mr, "f").push(r),
                  i.done({ event: s, playerEvent: r }),
                  this._events.emit("join", { event: s, playerEvent: r }));
              } catch (e) {
                n(e);
              } finally {
                this.gp.loader.dec();
              }
              return i.ready;
            }),
            new ((n = void 0) || (n = Promise))(function (e, r) {
              function a(e) {
                try {
                  c(s.next(e));
                } catch (e) {
                  r(e);
                }
              }
              function o(e) {
                try {
                  c(s.throw(e));
                } catch (e) {
                  r(e);
                }
              }
              function c(t) {
                var i;
                t.done
                  ? e(t.value)
                  : ((i = t.value),
                    i instanceof n
                      ? i
                      : new n(function (e) {
                          e(i);
                        })).then(a, o);
              }
              c((s = s.apply(t, i || [])).next());
            })
          );
          var t, i, n, s;
        }
      }
      ((xr = new WeakMap()),
        (Nr = new WeakMap()),
        (Mr = new WeakMap()),
        (Dr = new WeakSet()),
        (Lr = function (e) {
          const t = { event: null, playerEvent: null },
            i = jr(this, Nr, "f").find((t) => t.tag === e || t.id === e);
          return i
            ? ((t.event = i),
              i &&
                (t.playerEvent = jr(this, Mr, "f").find(
                  (e) => e.eventId === i.id,
                )),
              t)
            : t;
        }));
      var Gr,
        Br,
        $r = a(6256);
      class Vr {
        constructor() {
          (Gr.add(this),
            (this.type = (function (e, t, i, r) {
              if ("a" === i && !r)
                throw new TypeError(
                  "Private accessor was defined without a getter",
                );
              if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError(
                  "Cannot read private member from an object whose class did not declare it",
                );
              return "m" === i
                ? r
                : "a" === i
                  ? r.call(e)
                  : r
                    ? r.value
                    : t.get(e);
            })(this, Gr, "m", Br).call(this)));
        }
        _satisfies(e) {
          return e.includes(this.type);
        }
      }
      ((Gr = new WeakSet()),
        (Br = function () {
          const e = new $r.UAParser(),
            t = e.getOS(),
            i = e.getDevice();
          return "iOS" === t.name
            ? di.U7.Ios
            : "Android" === t.name
              ? di.U7.Android
              : "smarttv" === i.type
                ? di.U7.Tv
                : di.U7.Desktop;
        }));
      var Wr,
        qr,
        Yr,
        zr,
        Kr,
        Jr = function (e, t, i, r, n) {
          if ("m" === r) throw new TypeError("Private method is not writable");
          if ("a" === r && !n)
            throw new TypeError(
              "Private accessor was defined without a setter",
            );
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it",
            );
          return (
            "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i),
            i
          );
        },
        Zr = function (e, t, i, r) {
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e);
        };
      class Xr {
        constructor(e, t) {
          ((this.gp = e),
            Wr.add(this),
            qr.set(this, void 0),
            Yr.set(this, []),
            zr.set(this, {}),
            Jr(this, qr, t, "f"),
            Zr(this, qr, "f").on("setExperiments", (e) =>
              Zr(this, Wr, "m", Kr).call(this, e.playerExperiments),
            ));
        }
        get map() {
          return Object.assign({}, Zr(this, zr, "f"));
        }
        has(e, t) {
          return e in Zr(this, zr, "f") && Zr(this, zr, "f")[e] === t;
        }
      }
      ((qr = new WeakMap()),
        (Yr = new WeakMap()),
        (zr = new WeakMap()),
        (Wr = new WeakSet()),
        (Kr = function (e) {
          if (0 === e.length) return;
          let t = !1;
          const i = {};
          (Jr(
            this,
            zr,
            e.reduce((e, r, n) => {
              var s;
              return (
                (e[r.experiment] = r.cohort),
                (i[`${this.gp.name.toUpperCase()}_AB_${r.experiment}`] =
                  r.cohort),
                t ||
                  (null === (s = Zr(this, Yr, "f")[n]) || void 0 === s
                    ? void 0
                    : s.cohort) === r.cohort ||
                  (t = !0),
                e
              );
            }, {}),
            "f",
          ),
            Jr(this, Yr, e, "f"),
            (this.gp.analytics._experimentsVisitParams = i),
            t &&
              this.gp.analytics.setVisitParams(this.gp.analytics.visitParams));
        }));
      var Hr,
        Qr,
        en,
        tn,
        rn = function (e, t, i, r, n) {
          if ("m" === r) throw new TypeError("Private method is not writable");
          if ("a" === r && !n)
            throw new TypeError(
              "Private accessor was defined without a setter",
            );
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it",
            );
          return (
            "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i),
            i
          );
        },
        nn = function (e, t, i, r) {
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e);
        };
      class sn extends E.Z {
        constructor(e, t) {
          (super(),
            (this.gp = e),
            Hr.add(this),
            Qr.set(this, void 0),
            en.set(this, []),
            rn(this, Qr, t, "f"),
            nn(this, Qr, "f").on("setPlayerSegments", (e) =>
              nn(this, Hr, "m", tn).call(
                this,
                e.playerSegments,
                e.enterSegments,
                e.leftSegments,
              ),
            ));
        }
        get list() {
          return [...nn(this, en, "f")];
        }
        has(e) {
          return nn(this, en, "f").includes(e);
        }
      }
      ((Qr = new WeakMap()),
        (en = new WeakMap()),
        (Hr = new WeakSet()),
        (tn = function (e, t, i) {
          (((0 === nn(this, en, "f").length && e.length > 0) ||
            t.length > 0 ||
            i.length > 0) &&
            ((this.gp.analytics._segmentsVisitParams = e.reduce(
              (e, t) => ((e[`GP_SEGMENT_${t}`] = "1"), e),
              {},
            )),
            this.gp.analytics.setVisitParams(this.gp.analytics.visitParams)),
            rn(this, en, e, "f"),
            t.forEach((e) => this._events.emit("enter", e)),
            i.forEach((e) => this._events.emit("leave", e)));
        }));
      var an,
        on,
        cn,
        ln,
        hn = function (e, t, i, r) {
          return new (i || (i = Promise))(function (n, s) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        un = function (e, t, i, r, n) {
          if ("m" === r) throw new TypeError("Private method is not writable");
          if ("a" === r && !n)
            throw new TypeError(
              "Private accessor was defined without a setter",
            );
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it",
            );
          return (
            "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i),
            i
          );
        },
        dn = function (e, t, i, r) {
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e);
        };
      const pn = "empty_tag";
      class fn extends E.Z {
        constructor(e, t) {
          (super(),
            (this.gp = e),
            an.add(this),
            on.set(this, void 0),
            cn.set(this, []),
            un(this, on, t, "f"),
            dn(this, on, "f").on("setUniques", (e) =>
              un(this, cn, e.uniques, "f"),
            ));
        }
        get list() {
          return [...dn(this, cn, "f")];
        }
        check({ tag: e, value: t }) {
          return hn(this, void 0, void 0, function* () {
            e || dn(this, an, "m", ln).call(this, "check", new Error(pn));
            try {
              const i = yield this.gp._services.playerService.checkUniqueValue({
                tag: e,
                value: t,
              });
              return (
                this._events.emit("check", {
                  tag: e,
                  value: t,
                  success: i.success,
                }),
                i.success
              );
            } catch (e) {
              dn(this, an, "m", ln).call(this, "check", e);
            }
          });
        }
        register({ tag: e, value: t }) {
          return hn(this, void 0, void 0, function* () {
            e || dn(this, an, "m", ln).call(this, "register", new Error(pn));
            try {
              const i =
                yield this.gp._services.playerService.registerUniqueValue({
                  tag: e,
                  value: t,
                });
              return (
                dn(this, cn, "f").some((e) => e.tag === i.tag)
                  ? un(
                      this,
                      cn,
                      dn(this, cn, "f").map((e) => (e.tag === i.tag ? i : e)),
                      "f",
                    )
                  : dn(this, cn, "f").push(i),
                this._events.emit("register", { tag: e, value: t }),
                !0
              );
            } catch (e) {
              dn(this, an, "m", ln).call(this, "register", e);
            }
          });
        }
        delete({ tag: e }) {
          return hn(this, void 0, void 0, function* () {
            (e || dn(this, an, "m", ln).call(this, "delete", new Error(pn)),
              dn(this, cn, "f").some((t) => t.tag === e) ||
                dn(this, an, "m", ln).call(
                  this,
                  "delete",
                  new Error("unique_value_not_found"),
                ));
            try {
              return (
                yield this.gp._services.playerService.deleteUniqueValue({
                  tag: e,
                }),
                un(
                  this,
                  cn,
                  dn(this, cn, "f").filter((t) => t.tag !== e),
                  "f",
                ),
                this._events.emit("delete", { tag: e }),
                !0
              );
            } catch (e) {
              dn(this, an, "m", ln).call(this, "delete", e);
            }
          });
        }
        get(e) {
          var t;
          return (
            (null === (t = dn(this, cn, "f").find((t) => t.tag === e)) ||
            void 0 === t
              ? void 0
              : t.value) || ""
          );
        }
      }
      ((on = new WeakMap()),
        (cn = new WeakMap()),
        (an = new WeakSet()),
        (ln = function (e, t) {
          throw (
            v.kg.error(t),
            this._events.emit(
              `error:${e}`,
              (null == t ? void 0 : t.message) || t,
            ),
            t
          );
        }));
      var vn = function (e, t, i, r) {
        return new (i || (i = Promise))(function (n, s) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(a, o);
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
      const yn = (e) => `_${e}`;
      class mn extends E.Z {
        constructor(e) {
          (super(), (this.storage = e), (this.type = "platform"));
        }
        setStorage(e) {
          this.type = e;
        }
        get storages() {
          return "local" === this.type
            ? this.storage.localStorages
            : this.storage._storages;
        }
        get(e) {
          return vn(this, void 0, void 0, function* () {
            const t = yield this.storage.get(this.storages, yn(e));
            return (
              this._events.emit("get", { key: e, value: null != t ? t : null }),
              null != t ? t : null
            );
          });
        }
        set(e, t) {
          return vn(this, void 0, void 0, function* () {
            (yield this.storage.set(this.storages, yn(e), t),
              this._events.emit("set", { key: e, value: t }));
          });
        }
        getGlobal(e) {
          return vn(this, void 0, void 0, function* () {
            const t = yield this.storage.getRaw(this.storages, yn(e));
            return (
              this._events.emit("get:global", {
                key: e,
                value: null != t ? t : null,
              }),
              null != t ? t : null
            );
          });
        }
        setGlobal(e, t) {
          return vn(this, void 0, void 0, function* () {
            (yield this.storage.setRaw(this.storages, yn(e), t),
              this._events.emit("set:global", { key: e, value: t }));
          });
        }
      }
      var gn,
        wn,
        bn,
        En = a(1961),
        Pn = function (e, t, i, r) {
          return new (i || (i = Promise))(function (n, s) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        Sn = function (e, t, i, r) {
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e);
        };
      class _n extends E.Z {
        constructor(e) {
          (super(),
            (this.gp = e),
            gn.add(this),
            wn.set(this, void 0),
            this.gp.on("change:language", (e) => {
              Sn(this, wn, "f") && Sn(this, wn, "f").changeLanguage(e);
            }));
        }
        showConfirm({
          title: e,
          description: t,
          textConfirm: i,
          textCancel: r,
          invertButtonColors: n,
        } = {}) {
          return Pn(this, void 0, void 0, function* () {
            this.gp.loader.inc();
            try {
              yield Sn(this, gn, "m", bn).call(this);
              const s = yield Sn(this, wn, "f").showConfirm({
                title: e,
                description: t,
                textConfirm: i,
                textCancel: r,
                invertButtonColors: n,
              });
              return (
                this.gp.loader.dec(),
                this._events.emit("confirm:close", s),
                s
              );
            } catch (e) {
              (this.gp.loader.dec(), Sn(this, wn, "f").close(), v.kg.error(e));
            }
          });
        }
      }
      ((wn = new WeakMap()),
        (gn = new WeakSet()),
        (bn = function () {
          return Pn(this, void 0, void 0, function* () {
            Sn(this, wn, "f") ||
              ((function (e, t, i, r, n) {
                if ("m" === r)
                  throw new TypeError("Private method is not writable");
                if ("a" === r && !n)
                  throw new TypeError(
                    "Private accessor was defined without a setter",
                  );
                if ("function" == typeof t ? e !== t || !n : !t.has(e))
                  throw new TypeError(
                    "Cannot write private member to an object whose class did not declare it",
                  );
                "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i);
              })(
                this,
                wn,
                yield Promise.all([a.e(364), a.e(634)])
                  .then(a.bind(a, 8184))
                  .then((e) => e.default(this.gp)),
                "f",
              ),
              this._events.emit("windows:ready"));
          });
        }));
      var An,
        Tn,
        On,
        Cn,
        Rn,
        kn,
        In,
        Dn = function (e, t, i, r) {
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e);
        };
      class xn extends E.Z {
        constructor(e) {
          (super(),
            (this.gp = e),
            An.add(this),
            (this.isSFXMuted = !1),
            (this.isMusicMuted = !1),
            Tn.set(this, { isSFXMuted: !1, isMusicMuted: !1 }),
            this.gp._storage.getLocalRaw("_gs_sounds").then((e) => {
              e &&
                ((function (e, t, i, r, n) {
                  if ("m" === r)
                    throw new TypeError("Private method is not writable");
                  if ("a" === r && !n)
                    throw new TypeError(
                      "Private accessor was defined without a setter",
                    );
                  if ("function" == typeof t ? e !== t || !n : !t.has(e))
                    throw new TypeError(
                      "Cannot write private member to an object whose class did not declare it",
                    );
                  "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i);
                })(
                  this,
                  Tn,
                  {
                    isSFXMuted: e.isSFXMuted || !1,
                    isMusicMuted: e.isMusicMuted || !1,
                  },
                  "f",
                ),
                (this.isSFXMuted = Dn(this, Tn, "f").isSFXMuted),
                (this.isMusicMuted = Dn(this, Tn, "f").isMusicMuted));
            }),
            this.gp.on("pause", () => {
              ((this.isSFXMuted = !0),
                (this.isMusicMuted = !0),
                this._events.emit("mute"),
                this._events.emit("mute:sfx"),
                this._events.emit("mute:music"));
            }),
            this.gp.on("resume", () => {
              (Dn(this, Tn, "f").isSFXMuted ||
                ((this.isSFXMuted = !1), this._events.emit("unmute:sfx")),
                Dn(this, Tn, "f").isMusicMuted ||
                  ((this.isMusicMuted = !1), this._events.emit("unmute:music")),
                (Dn(this, Tn, "f").isSFXMuted &&
                  Dn(this, Tn, "f").isMusicMuted) ||
                  this._events.emit("unmute"));
            }));
        }
        get isMuted() {
          return this.isSFXMuted && this.isMusicMuted;
        }
        mute() {
          const e = this.isMuted;
          let t = !1;
          (this.isSFXMuted || (Dn(this, An, "m", On).call(this, !1), (t = !0)),
            this.isMusicMuted ||
              (Dn(this, An, "m", Rn).call(this, !1), (t = !0)),
            t && !e && this._events.emit("mute"));
        }
        unmute() {
          let e = !1;
          (this.isSFXMuted && (Dn(this, An, "m", Cn).call(this, !1), (e = !0)),
            this.isMusicMuted &&
              (Dn(this, An, "m", kn).call(this, !1), (e = !0)),
            e && this._events.emit("unmute"));
        }
        muteSFX() {
          Dn(this, An, "m", On).call(this);
        }
        unmuteSFX() {
          Dn(this, An, "m", Cn).call(this);
        }
        muteMusic() {
          Dn(this, An, "m", Rn).call(this);
        }
        unmuteMusic() {
          Dn(this, An, "m", kn).call(this);
        }
      }
      ((Tn = new WeakMap()),
        (An = new WeakSet()),
        (On = function (e = !0) {
          if (!this.isSFXMuted) {
            const t = this.isMuted;
            ((this.isSFXMuted = !0),
              (Dn(this, Tn, "f").isSFXMuted = !0),
              Dn(this, An, "m", In).call(this),
              this._events.emit("mute:sfx"),
              e && !t && this.isMuted && this._events.emit("mute"));
          }
        }),
        (Cn = function (e = !0) {
          if (this.isSFXMuted) {
            const t = this.isMuted;
            ((this.isSFXMuted = !1),
              (Dn(this, Tn, "f").isSFXMuted = !1),
              Dn(this, An, "m", In).call(this),
              this._events.emit("unmute:sfx"),
              e && t && !this.isMuted && this._events.emit("unmute"));
          }
        }),
        (Rn = function (e = !0) {
          if (!this.isMusicMuted) {
            const t = this.isMuted;
            ((this.isMusicMuted = !0),
              (Dn(this, Tn, "f").isMusicMuted = !0),
              Dn(this, An, "m", In).call(this),
              this._events.emit("mute:music"),
              e && !t && this.isMuted && this._events.emit("mute"));
          }
        }),
        (kn = function (e = !0) {
          if (this.isMusicMuted) {
            const t = this.isMuted;
            ((this.isMusicMuted = !1),
              (Dn(this, Tn, "f").isMusicMuted = !1),
              Dn(this, An, "m", In).call(this),
              this._events.emit("unmute:music"),
              e && t && !this.isMuted && this._events.emit("unmute"));
          }
        }),
        (In = function () {
          this.gp._storage.setLocalRaw("_gs_sounds", Dn(this, Tn, "f"));
        }));
      var Nn,
        Mn,
        Ln = function (e, t, i, r) {
          return new (i || (i = Promise))(function (n, s) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((r = r.apply(e, t || [])).next());
          });
        };
      class Fn {
        constructor(e, t) {
          ((this.gp = e),
            (this.app = t),
            Nn.add(this),
            (this.userId = ""),
            (this.username = ""),
            (this.isAuthorizedAtPlatform = !1),
            (this.authFinished = Promise.resolve()));
        }
        get hasCredetials() {
          return !!this.userId;
        }
        getPlayerAuthInfo() {
          return Ln(this, void 0, void 0, function* () {
            const e = (0, r._)();
            return (
              this.gp._services.playerService
                .getLoginStatus()
                .then(({ credentials: t }) => {
                  ((this.userId = t),
                    (this.username = t),
                    e.done({ credentials: t }));
                })
                .catch(() => {
                  e.done({});
                }),
              e.ready
            );
          });
        }
        getPlayerContext() {
          return Ln(this, void 0, void 0, function* () {
            return {
              platformData: yield this.getPlayerAuthInfo(),
              key: this.userId,
            };
          });
        }
        loginPlayer(e, t = { isAuthModal: !1 }) {
          return Ln(this, void 0, void 0, function* () {
            return (
              (!t.isAuthModal && this.userId) ||
                (yield (function (e, t, i, r) {
                  if ("a" === i && !r)
                    throw new TypeError(
                      "Private accessor was defined without a getter",
                    );
                  if ("function" == typeof t ? e !== t || !r : !t.has(e))
                    throw new TypeError(
                      "Cannot read private member from an object whose class did not declare it",
                    );
                  return "m" === i
                    ? r
                    : "a" === i
                      ? r.call(e)
                      : r
                        ? r.value
                        : t.get(e);
                })(this, Nn, "m", Mn).call(this)),
              this.getPlayer()
            );
          });
        }
        logoutPlayer() {
          return Ln(this, void 0, void 0, function* () {
            const { success: e } =
              yield this.gp._services.playerService.logoutPlayer();
            return (e && ((this.userId = ""), (this.username = "")), e);
          });
        }
        getPlayer() {
          return Ln(this, void 0, void 0, function* () {
            return {
              id: this.userId,
              name: this.username,
              photoSmall: "",
              photoMedium: "",
              photoLarge: "",
            };
          });
        }
        publishRecord(e) {}
        isPlatformAvatar() {
          return !1;
        }
        setCredentials(e) {}
      }
      ((Nn = new WeakSet()),
        (Mn = function () {
          return Ln(this, void 0, void 0, function* () {
            const e = (0, r._)(),
              t = yield this.app.login();
            return (
              t
                ? this.gp._services.playerService
                    .loginPlayer({ token: t })
                    .then(({ success: i }) => {
                      ((this.userId = t), (this.username = t), e.done(i));
                    })
                    .catch(() => {
                      e.abort("login failed");
                    })
                : e.abort("cancel"),
              e.ready
            );
          });
        }));
      var jn,
        Un,
        Gn,
        Bn,
        $n,
        Vn,
        Wn,
        qn,
        Yn = function (e, t, i, r) {
          return new (i || (i = Promise))(function (n, s) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        zn = function (e, t, i, r) {
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e);
        },
        Kn = function (e, t, i, r, n) {
          if ("m" === r) throw new TypeError("Private method is not writable");
          if ("a" === r && !n)
            throw new TypeError(
              "Private accessor was defined without a setter",
            );
          if ("function" == typeof t ? e !== t || !n : !t.has(e))
            throw new TypeError(
              "Cannot write private member to an object whose class did not declare it",
            );
          return (
            "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i),
            i
          );
        };
      const Jn = [
          F.z.CUSTOM,
          F.z.GOOGLE_PLAY,
          F.z.APP_GALLERY,
          F.z.GALAXY_STORE,
          F.z.ONE_STORE,
          F.z.AMAZON_APPSTORE,
          F.z.XIAOMI_GETAPPS,
          F.z.APTOIDE,
          F.z.RUSTORE,
          F.z.ANDROID,
        ],
        Zn = { [ye.J1.Google]: !0, [ye.J1.Yandex]: !0, [ye.J1.Xsolla]: !0 };
      class Xn extends E.Z {
        constructor({ projectId: e, publicToken: t, onReady: i } = {}, r) {
          var n, s;
          (super(),
            jn.add(this),
            (this.setBackground = oi),
            (this.name = ""),
            (this.isPaused = !1),
            (this.isGameplay = !1),
            (this.isGameStarted = !1),
            (this.logger = v.kg),
            Un.set(this, void 0),
            Gn.set(this, void 0),
            Bn.set(this, void 0),
            $n.set(this, void 0),
            (this._params =
              null ===
                (s = new URL(
                  (null === (n = document.currentScript) || void 0 === n
                    ? void 0
                    : n.src) || document.URL,
                )) || void 0 === s
                ? void 0
                : s.searchParams),
            (this.projectId =
              null != e ? e : Number(this._params.get("projectId"))),
            (this.publicToken =
              null != t ? t : this._params.get("publicToken")),
            (this.onReady = i),
            zn(this, jn, "m", Vn).call(this, r));
        }
        get nativeSDK() {
          return this.platform.getNativeSDK();
        }
        get serverTime() {
          return new Date(zn(this, $n, "f")).toISOString();
        }
        get isDev() {
          var e;
          return (
            (null === (e = zn(this, Gn, "f")) || void 0 === e
              ? void 0
              : e.isDev) || !1
          );
        }
        get isAllowedOrigin() {
          var e;
          return (
            (null === (e = zn(this, Gn, "f")) || void 0 === e
              ? void 0
              : e.isAllowedOrigin) || !1
          );
        }
        get locale() {
          return y.h$[this.language] || "en-US";
        }
        get isPortrait() {
          return pi();
        }
        init(e) {
          return Yn(this, void 0, void 0, function* () {
            this.channels.on("event:connect", ({ hash: e }) => {
              this.player._firstReqHash !== e &&
                this._events.emit("event:connect");
            });
            const t = () => {
                this.ads.isAllowedToResumeGameplay && this.resume();
              },
              i = () => {
                this.pause();
              };
            (this.ads.on("fullscreen:start", i),
              this.ads.on("fullscreen:close", t),
              this.ads.on("preloader:start", i),
              this.ads.on("preloader:close", t),
              this.ads.on("rewarded:start", i),
              this.ads.on("rewarded:close", t),
              yield Promise.all([this.ads.checkAdblock()]).catch(v.kg.warn),
              e.done(this));
          });
        }
        loadOverlay() {
          return Yn(this, void 0, void 0, function* () {
            this.overlay ||
              ((this.overlay = yield Promise.all([
                a.e(364),
                a.e(26),
                a.e(206),
                a.e(481),
                a.e(415),
              ])
                .then(a.bind(a, 1030))
                .then((e) => e.default(this))),
              this._events.emit("overlay:ready"));
          });
        }
        get _overlaySizeOffsets() {
          return {
            top: this.ads._stickyBannerOffsets.top,
            bottom: this.ads._stickyBannerOffsets.bottom,
          };
        }
        changeLanguage(e) {
          return Yn(this, void 0, void 0, function* () {
            if (this.language !== e)
              try {
                if (!Object.values(y.Uo).includes(e))
                  throw new Error(`Language ${e} not supported`);
                ((this.language = e),
                  this._storage.saveLanguage(e),
                  this.overlay && (yield this.overlay.changeLanguage(e)),
                  zn(this, Bn, "f").setLang(this.language),
                  this._events.emit("change:language", this.language));
              } catch (e) {
                v.kg.error(e);
              }
          });
        }
        changeAvatarGenerator() {
          return Yn(this, void 0, void 0, function* () {
            v.kg.warn("[DEPRECATED]: changeAvatarGenerator");
          });
        }
        generateAvatar(e, t) {
          return (0, Vt.Z)(this.avatarGeneratorTemplate, e, t);
        }
        pause() {
          var e, t, i, r, n;
          return Yn(this, void 0, void 0, function* () {
            this.isPaused ||
              ((this.isPaused = !0),
              this._events.emit("pause"),
              (null !==
                (i =
                  null ===
                    (t =
                      null === (e = zn(this, Gn, "f")) || void 0 === e
                        ? void 0
                        : e.platformConfig) || void 0 === t
                    ? void 0
                    : t.showResumeOverlay) && void 0 !== i
                ? i
                : null ===
                      (n =
                        null === (r = zn(this, Gn, "f")) || void 0 === r
                          ? void 0
                          : r.config) || void 0 === n
                  ? void 0
                  : n.showResumeOverlay) &&
                (yield this.loadOverlay(),
                yield this.overlay.showResumeOverlay()));
          });
        }
        resume() {
          this.isPaused && ((this.isPaused = !1), this._events.emit("resume"));
        }
        gameStart() {
          return Yn(this, void 0, void 0, function* () {
            (yield this.ready,
              this.isGameStarted ||
                (this._events.emit("gameStart"), (this.isGameStarted = !0)));
          });
        }
        gameplayStart() {
          return Yn(this, void 0, void 0, function* () {
            (yield this.ready,
              this.isGameplay ||
                ((this.isGameplay = !0), this._events.emit("gameplayStart")));
          });
        }
        gameplayStop() {
          return Yn(this, void 0, void 0, function* () {
            (yield this.ready,
              this.isGameplay &&
                ((this.isGameplay = !1), this._events.emit("gameplayStop")));
          });
        }
      }
      ((Un = new WeakMap()),
        (Gn = new WeakMap()),
        (Bn = new WeakMap()),
        ($n = new WeakMap()),
        (jn = new WeakSet()),
        (Vn = function (e) {
          var s;
          return Yn(this, void 0, void 0, function* () {
            const o = (0, r._)();
            this.ready = o.ready;
            const c =
              (null === (s = this._params) || void 0 === s
                ? void 0
                : s.get("callback")) || "onGPInit";
            (this.ready.then((e) => {
              var t, i, r, n;
              this.onReady
                ? this.onReady(e)
                : (null === (i = (t = window)[c]) ||
                    void 0 === i ||
                    i.call(t, e),
                  "onGSInit" !== c &&
                    (null === (n = (r = window).onGSInit) ||
                      void 0 === n ||
                      n.call(r, e)));
            }),
              (this.fullscreen = new Ae()),
              (this.analytics = new Ce()),
              (this.leaderboard = new I(this)),
              (this.documents = new ft(this)),
              (this.players = new Wt(this)),
              (this.isMobile = t()({ tablet: !0, featureDetect: !0 })),
              (this.device = new Vr()));
            let { platformType: l, platformKey: h } = yield De(),
              u = (0, En.Yc)();
            (l !== F.z.GAME_DISTRIBUTION &&
              l !== F.z.GAMEPIX &&
              l !== F.z.WG_PLAYGROUND) ||
              (u = y.Uo.EN);
            const d = Hn("", l, this.device.type, location.protocol);
            ((this._storage = new b()), (this.storage = new mn(this._storage)));
            const p = e.servicesChunk({
                apiUrl: d,
                projectId: this.projectId,
                publicToken: this.publicToken,
                lang: u || y.Uo.EN,
                platformType: l,
                platformKey: h,
                storage: this._storage,
              }),
              { apiClient: f, setupAnalytics: m } = p,
              g = (function (e, t) {
                var i = {};
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) &&
                    t.indexOf(r) < 0 &&
                    (i[r] = e[r]);
                if (
                  null != e &&
                  "function" == typeof Object.getOwnPropertySymbols
                ) {
                  var n = 0;
                  for (r = Object.getOwnPropertySymbols(e); n < r.length; n++)
                    t.indexOf(r[n]) < 0 &&
                      Object.prototype.propertyIsEnumerable.call(e, r[n]) &&
                      (i[r[n]] = e[r[n]]);
                }
                return i;
              })(p, ["apiClient", "setupAnalytics"]),
              w = (e) => {
                f.setPlayerData(e);
              };
            (Kn(this, Bn, f, "f"),
              (this._services = g),
              (this._pointersManager = new gi()),
              Kn(this, Un, new ui(), "f"));
            const E = {
              apiClient: f,
              gp: this,
              setupStorage: (e) => {
                const t = `gs-db-project-${E.gp.projectId}`,
                  i = [...e, new je(t)],
                  r = [new je(`gs-db-project-${E.gp.projectId}`)];
                try {
                  null !== window.localStorage &&
                    i.push(new $e(this.projectId));
                } catch (e) {}
                return (this._storage.setStorages(i, r), this._storage.ready);
              },
              fetchConfig: (e) =>
                Yn(this, void 0, void 0, function* () {
                  yield this._storage.ready;
                  const [t, i, r, n] = yield Promise.all([
                    this._storage.loadLanguage(),
                    this._storage.loadConfig(),
                    this._storage.loadAdsInfo(),
                    zn(this, Un, "f").getLanguage(this.name),
                  ]);
                  return (
                    t || this._storage.saveLanguage(null),
                    (this.language = n || t || e || u || y.Uo.EN),
                    zn(this, Bn, "f").setLang(this.language),
                    this._services.projectService
                      .fetchConfig()
                      .then((e) => {
                        var t, r;
                        const n = e || i,
                          { platformConfig: s } = n;
                        return (
                          (a =
                            (Jn.includes(s.type) &&
                              (Zn[
                                null === (t = s.authConfig) || void 0 === t
                                  ? void 0
                                  : t.configs.web.activeService
                              ] ||
                                Zn[
                                  null === (r = s.authConfig) || void 0 === r
                                    ? void 0
                                    : r.configs.android.activeService
                                ])) ||
                            e.isDev),
                          f.setWithCookie(a),
                          l === F.z.NONE &&
                            l !== s.type &&
                            zn(this, Bn, "f").setPlatform(s.type, s.tag),
                          this._storage.setSaveInPlatformStorage(
                            !(0, me.q)(s.progressSaveFormat).isLocalSave,
                          ),
                          n
                        );
                        var a;
                      })
                      .catch((e) => (console.error(e), i))
                  );
                }),
            };
            /* if (e.platformType && e.platformType !== l)
              throw new Error("wrong platform type"); */
            var P, S;
            ((e.platformChunk
              ? e.platformChunk(E, l)
              : e.preparePlatform({ platformType: l, tools: E })
            )
              .then((e) =>
                Yn(this, void 0, void 0, function* () {
                  const {
                    adsAdapter: t,
                    playerAdapter: r,
                    platformAdapter: s,
                    socialsAdapter: c,
                    paymentsAdapter: h,
                    projectConfig: u,
                    appAdapter: d,
                    analyticsCounters: p = [],
                  } = e;
                  if (
                    (Kn(this, Gn, u, "f"),
                    Kn(this, $n, Date.parse(u.serverTime), "f"),
                    W((e) => {
                      Kn(this, $n, zn(this, $n, "f") + e, "f");
                    }),
                    l !== F.z.GAMEPIX &&
                      l !== F.z.GAME_DISTRIBUTION &&
                      l !== F.z.WG_PLAYGROUND)
                  ) {
                    const { counters: e } = m(u.config);
                    (e.forEach((e) => this.analytics.addCounter(e)),
                      p.forEach((e) => this.analytics.addCounter(e)));
                  }
                  ((this.avatarGenerator = u.config.avatarGenerator),
                    (this.avatarGeneratorTemplate =
                      u.config.avatarGeneratorTemplate),
                    (this.loader = (function (e) {
                      let t = 0;
                      const i = document.createElement("div");
                      function r() {
                        i.style.display = t > 0 ? "flex" : "none";
                      }
                      return (
                        i.classList.add("gs-global-loader"),
                        (i.innerHTML = `<div class="gs-loader ${!e && "gs-loader-hidden"}">\n        <div class="gs-loader__outter"></div>\n        <div class="gs-loader__inner"></div>\n    </div>`),
                        document.body.appendChild(i),
                        {
                          inc() {
                            ((t += 1), r());
                          },
                          dec() {
                            ((t = t <= 0 ? 0 : t - 1), r());
                          },
                        }
                      );
                    })(u.config.showLoader)),
                    this._storage.saveConfig(u));
                  const f = new hr();
                  if (
                    (f.on("updateServerTime", (e) => {
                      Kn(this, $n, Date.parse(e), "f");
                    }),
                    (this.gamesCollections = new ze.Z(this, s)),
                    (this.platform = new n.Z(u.platformConfig, s)),
                    (this.ads = new i.Z(this, t, u)),
                    (this.app = new ke.Z(this, d, u)),
                    (this.socials = new Re.Z(c, this, u)),
                    (this.channels = new ht(this, u)),
                    (this.player = new _e({}, u.playerFields, r, this, f, w)),
                    (this.payments = new Ye.Z(this, f, h, u)),
                    (this.variables = new wt(this, s, u.gameVariables || [])),
                    (this.images = new jt(this, u.acl)),
                    (this.files = new $t(this, u.acl)),
                    (this.achievements = new Ne.Z(this, f, u)),
                    (this.rewards = new $i(this, f, u.rewards)),
                    (this.triggers = new ar(this, f, u)),
                    (this.schedulers = new Ir(this, f, u.schedulers)),
                    (this.segments = new sn(this, f)),
                    (this.events = new Ur(this, f, u.events)),
                    (this.experiments = new Xr(this, f)),
                    (this.uniques = new fn(this, f)),
                    (this.windows = new _n(this)),
                    (this.sounds = new xn(this)),
                    this.isDev)
                  ) {
                    ((this.devtools = yield Promise.all([
                      a.e(364),
                      a.e(26),
                      a.e(481),
                      a.e(718),
                    ])
                      .then(a.bind(a, 5545))
                      .then((e) => e.default(this, f, u))),
                      u.config.showReqCounter &&
                        zn(this, Bn, "f").addCounterListener((e) => {
                          this.devtools.showCounter(e);
                        }));
                    const e = new Fn(this, this.devtools);
                    this.player._setPlayerAdapter(e);
                  } else v.kg.stopCollect();
                  (this.player._setupOnBoot(),
                    zn(this, jn, "m", qn).call(this),
                    zn(this, jn, "m", Wn).call(this),
                    this.init(o));
                }),
              )
              .catch(v.kg.error),
              (P = () => this.pause()),
              (S = () => {
                var e, t, i, r, n;
                this.ads &&
                  (this.ads.isFullscreenPlaying ||
                    this.ads.isPreloaderPlaying ||
                    this.ads.isRewardedPlaying ||
                    (null !==
                      (i =
                        null ===
                          (t =
                            null === (e = zn(this, Gn, "f")) || void 0 === e
                              ? void 0
                              : e.platformConfig) || void 0 === t
                          ? void 0
                          : t.showResumeOverlay) && void 0 !== i
                      ? i
                      : null ===
                            (n =
                              null === (r = zn(this, Gn, "f")) || void 0 === r
                                ? void 0
                                : r.config) || void 0 === n
                        ? void 0
                        : n.showResumeOverlay) ||
                    this.resume());
              }),
              si.addEventListener("statechange", (e) => {
                ai.includes(e.newState) ? P() : S();
              }));
          });
        }),
        (Wn = function () {
          const { showOrientationOverlay: e, orientation: t } = zn(
              this,
              Gn,
              "f",
            ).config,
            i =
              e &&
              this.isMobile &&
              t != di.LH.Any &&
              this.device.type !== di.U7.Tv,
            r = () =>
              Yn(this, void 0, void 0, function* () {
                var e;
                i && !fi(t)
                  ? (yield this.loadOverlay(),
                    fi(t) || this.overlay.showOrientationOverlay(t))
                  : null === (e = this.overlay) ||
                    void 0 === e ||
                    e.closeOrientationOverlay();
              });
          var n;
          ((n = (e) => {
            (this._events.emit("change:orientation", e), r());
          }),
            window
              .matchMedia("(orientation: portrait)")
              .addEventListener("change", () =>
                requestAnimationFrame(() => n(pi())),
              ),
            r());
        }),
        (qn = function () {
          return Yn(this, void 0, void 0, function* () {
            const { showUnsupportedOSOverlay: e, targetOS: t } = zn(
              this,
              Gn,
              "f",
            ).config;
            (this.logger.info(`Running on ${this.device.type}`),
              e
                ? this.logger.info(`allowed=(${t.join(",")})`)
                : this.logger.info("no device restrictions"),
              e &&
                !this.device._satisfies(t) &&
                (this.logger.info(`${this.device.type} is restricted`),
                yield this.loadOverlay(),
                this.overlay.setUnsupportedDeviceOverlay({
                  allowed: t,
                  detected: this.device.type,
                })));
          });
        }));
      const Hn = (e, t, i, r) =>
        e
          .split(",")
          .map((e) => e.trim())
          .filter(Boolean)
          .map((e) =>
            ((e, t, i, r) =>
              t === F.z.VK && i === di.U7.Ios && "file:" === r
                ? e.replace("https", "vkcors")
                : e)(e, t, i, r),
          );
      function Qn(e) {
        var t;
        (t = e.sticky) &&
          (t.$el.style.width = `${(function (e) {
            let t = window.innerWidth;
            if (
              "PX" === e.options.maxWidthDimension &&
              e.options.maxWidth > 0 &&
              window.innerWidth > e.options.maxWidth
            )
              t = e.options.maxWidth;
            else if (
              "PERCENT" === e.options.maxWidthDimension &&
              e.options.maxWidth > 0
            ) {
              const i = (e.options.maxWidth / 100) * window.innerWidth;
              window.innerWidth > e.options.maxWidth && (t = i);
            }
            const i =
              (e.options.fitCanvas &&
                ((window.innerWidth >= 640 &&
                  (null === (r = document.querySelector("canvas")) ||
                  void 0 === r
                    ? void 0
                    : r.offsetWidth)) ||
                  0)) ||
              t;
            var r;
            return Math.round(i);
          })(t)}px`);
      }
      var es = a(280);
      (o()(es.Z, { insert: "head", singleton: !1 }), es.Z.locals);
      const ts = "gp-gamedistribution-sticky";
      var is = function (e, t, i, r) {
        return new (i || (i = Promise))(function (n, s) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(a, o);
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
      class rs {
        constructor(e) {
          ((this.config = e),
            (this.app = (function () {
              const e = document.createElement("div");
              ((e.id = "gs-gamedistribution"), document.body.appendChild(e));
              const t = { sticky: null };
              return (
                window.addEventListener("resize", () => Qn(t)),
                {
                  banners: t,
                  createSticky(i) {
                    t.sticky ||
                      (t.sticky = (function (t) {
                        const i = document.createElement("div");
                        i.className = `${ts} ${ts}_${t.position || "bottom"}`;
                        const r = document.createElement("div");
                        ((r.id = "responsive-banner-container"),
                          (r.className = `${ts}__creative`));
                        const n = { $wrapper: i, $el: r, options: t };
                        return (i.appendChild(r), e.appendChild(i), n);
                      })(i));
                  },
                  closeSticky() {
                    t.sticky &&
                      (t.sticky.$wrapper.remove(),
                      (t.sticky.$wrapper.innerHTML = ""),
                      (t.sticky = null));
                  },
                }
              );
            })()));
        }
        get appUrl() {
          return (function () {
            try {
              return window.top.location.href || location.href;
            } catch (e) {
              return location.href;
            }
          })();
        }
        init() {
          return is(this, void 0, void 0, function* () {
            const e = (0, r._)();
            return (
              (this.ready = e.ready),
              (window.GD_OPTIONS = {
                gameId: this.config.appId,
                onEvent: (t) => {
                  switch (t.name) {
                    case "SDK_READY":
                    case "SDK_ERROR":
                      e.done(this);
                  }
                },
              }),
              (function ({ src: e, check: t }) {
                return new Promise((i, r) => {
                  let n = 0;
                  if (null == t ? void 0 : t(window)) return void i();
                  function s() {
                    t ? t(window) && (clearInterval(n), i()) : i();
                  }
                  if (document.querySelector(`script[src="${e}"]`) && t)
                    return void (n = setInterval(s, 100));
                  var a = document.getElementsByTagName("script")[0];
                  const o = document.createElement("script");
                  ((o.src = e),
                    (o.onload = s),
                    (o.onerror = r),
                    (o.onabort = r),
                    a.parentNode.insertBefore(o, a),
                    t && (n = setInterval(s, 100)));
                });
              })({
                src: "/core/gam-distribution/gd-cr4cked-by-crazim-main.min.js",
                check: (e) => "gdsdk" in e,
              })
                .then(() => (this.gdsdk = window.gdsdk))
                .catch((t) => {
                  (v.kg.error(t), e.done(this));
                }),
              setTimeout(() => e.done(this), 1e4),
              e.ready
            );
          });
        }
        getPlayer() {
          return is(this, void 0, void 0, function* () {
            const e = (0, r._)();
            return (
              e.done({
                id: 0,
                name: "",
                photoSmall: "",
                photoMedium: "",
                photoLarge: "",
              }),
              e.ready
            );
          });
        }
        showAd(e) {
          const t = (0, r._)();
          try {
            this.gdsdk
              .showAd(e)
              .then((e) => {
                var i, r;
                t.done(
                  null ===
                    (r =
                      null === (i = null == e ? void 0 : e.args) || void 0 === i
                        ? void 0
                        : i.success) ||
                    void 0 === r ||
                    r,
                );
              })
              .catch((e) => {
                (v.kg.error(
                  "[GameDistribution] failed to show interstitial ads:",
                  e,
                ),
                  t.done(!1));
              });
          } catch (e) {
            t.abort(e);
          }
          return t.ready;
        }
        showFullscreen() {
          return this.showAd("interstitial");
        }
        showPreloader() {
          return this.showAd("interstitial");
        }
        showRewardedVideo() {
          return is(this, void 0, void 0, function* () {
            const e = (0, r._)();
            try {
              this.gdsdk
                .showAd("rewarded")
                .then((t) => {
                  var i, r;
                  e.done(
                    null ===
                      (r =
                        null === (i = null == t ? void 0 : t.args) ||
                        void 0 === i
                          ? void 0
                          : i.success) ||
                      void 0 === r ||
                      r,
                  );
                })
                .catch((t) => {
                  (v.kg.error(
                    "[GameDistribution] failed to show rewarded video:",
                    t,
                  ),
                    e.done(!1));
                });
            } catch (t) {
              e.abort(t);
            }
            return e.ready;
          });
        }
        showSticky() {
          const e = (0, r._)();
          try {
            this.gdsdk
              .showAd("display", { containerId: "responsive-banner-container" })
              .then(() => e.done(!0))
              .catch((t) => {
                (v.kg.error(
                  "[GameDistribution] failed to show sticky-banner:",
                  t,
                ),
                  e.done(!1));
              });
          } catch (t) {
            e.abort(t);
          }
          return e.ready;
        }
      }
      var ns = function (e, t, i, r) {
        return new (i || (i = Promise))(function (n, s) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(a, o);
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
      class ss {
        constructor(e) {
          ((this.sdk = e),
            (this.isFullscreenAvailable = !0),
            (this.stickyBannerConfig = { isOverlapping: !1, height: 0 }),
            (this.isRewardedAvailable = !0),
            (this.isPreloaderAvailable = !0),
            (this.needToLeaveFullscreenBeforeAds = !1),
            (this.canShowFullscreenBeforeGamePlay = !0));
        }
        get isStickyAvailable() {
          return window.innerWidth >= 728;
        }
        showPreloader() {
          return ns(this, void 0, void 0, function* () {
            return (
              yield this.sdk.ready,
              this.sdk.showPreloader().catch(() => !1)
            );
          });
        }
        showFullscreen() {
          return ns(this, void 0, void 0, function* () {
            return (
              yield this.sdk.ready,
              this.sdk.showFullscreen().catch(() => !1)
            );
          });
        }
        showRewardedVideo() {
          return ns(this, void 0, void 0, function* () {
            return (
              yield this.sdk.ready,
              this.sdk.showRewardedVideo().catch(() => !1)
            );
          });
        }
        showSticky(e) {
          return ns(this, void 0, void 0, function* () {
            return (
              !!this.sdk.app.banners.sticky ||
              (this.sdk.app.createSticky(e), this.sdk.showSticky())
            );
          });
        }
        refreshSticky(e) {
          return ns(this, void 0, void 0, function* () {
            return (this.sdk.app.closeSticky(), this.showSticky(e));
          });
        }
        closeSticky() {
          return ns(this, void 0, void 0, function* () {
            (yield this.sdk.ready, this.sdk.app.closeSticky());
          });
        }
      }
      var as = function (e, t, i, r) {
        return new (i || (i = Promise))(function (n, s) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(a, o);
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
      class os {
        constructor(e) {
          ((this.sdk = e),
            (this.hasCredetials = !1),
            (this.userId = ""),
            (this.isAuthorizedAtPlatform = !0),
            (this.authFinished = Promise.resolve()));
        }
        getPlayerAuthInfo() {
          return as(this, void 0, void 0, function* () {
            const e = (0, r._)();
            return (e.done({}), e.ready);
          });
        }
        getPlayerContext() {
          return as(this, void 0, void 0, function* () {
            return { platformData: yield this.getPlayerAuthInfo(), key: "" };
          });
        }
        loginPlayer() {
          return as(this, void 0, void 0, function* () {
            return this.sdk.getPlayer();
          });
        }
        logoutPlayer() {
          return as(this, void 0, void 0, function* () {
            return !1;
          });
        }
        getPlayer() {
          return as(this, void 0, void 0, function* () {
            return this.sdk.getPlayer();
          });
        }
        publishRecord(e) {}
        isPlatformAvatar() {
          return !1;
        }
        setCredentials(e) {}
      }
      var cs = a(2712),
        ls = a(5572),
        hs = function (e, t, i, r) {
          return new (i || (i = Promise))(function (n, s) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((r = r.apply(e, t || [])).next());
          });
        };
      class us {
        constructor(e) {
          ((this.sdk = e),
            (this.hasIntegratedAuth = !1),
            (this.isExternalLinksAllowed = !1),
            (this.isSecretCodeAuthAvailable = !1),
            (this._hasAuthModal = !1),
            (this.isLogoutAvailable = !1),
            (this.type = F.z.GAME_DISTRIBUTION),
            (this.socialNetworks = cs.FU),
            (this.isSupportsImageUploading = !1),
            (this.hasAccountLinkingFeature = !1),
            (this.isSupportsRemoteVariables = !1),
            (this.isSupportsCloudSaves = !1));
        }
        getSDK() {
          return this.sdk;
        }
        getNativeSDK() {
          return this.sdk.gdsdk;
        }
        mapGamesCollections(e) {
          return hs(this, void 0, void 0, function* () {
            return e;
          });
        }
        requestPermissions() {
          return hs(this, void 0, void 0, function* () {
            return ls.VK;
          });
        }
        uploadImage() {
          return null;
        }
        getVariables() {
          return hs(this, void 0, void 0, function* () {
            return {};
          });
        }
      }
      class ds {
        constructor(e) {
          ((this.sdk = e),
            (this.isSupportsShare = !1),
            (this.isSupportsNativeShare = !1),
            (this.isSupportsNativePosts = !1),
            (this.isSupportsNativeInvite = !1),
            (this.isSupportsNativeCommunityJoin = !1),
            (this.canJoinCommunity = !1),
            (this.isSupportShareParams = !1));
        }
        get shareParams() {
          return {};
        }
        share(e) {
          return Promise.resolve(!1);
        }
        post(e) {
          return Promise.resolve(!1);
        }
        invite(e) {
          return Promise.resolve(!1);
        }
        getCommunityLink(e) {
          return e;
        }
        joinCommunity() {
          return Promise.resolve(!1);
        }
        addShareParamsToUrl(e, t) {
          return e;
        }
        makeShareUrl(e) {
          return "";
        }
        getShareParam(e) {
          return "";
        }
      }
      var ps = function (e, t, i, r) {
        return new (i || (i = Promise))(function (n, s) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(a, o);
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
      class fs {
        constructor(e) {
          ((this.sdk = e),
            (this.isSupportsSubscriptions = !1),
            (this.isOneTimeSubscription = !0),
            (this.isSupportsPayments = !1),
            (this.isServerValidation = !1),
            (this.isNeedAuthorizeBeforePurchase = !1));
        }
        mapProducts(e, t) {
          return ps(this, void 0, void 0, function* () {
            return t;
          });
        }
        consumeAllExpired(e, t, i) {
          return ps(this, void 0, void 0, function* () {});
        }
        fetchPurchases() {
          return ps(this, void 0, void 0, function* () {
            return { payload: {}, purchases: [] };
          });
        }
        purchase(e) {
          return ps(this, void 0, void 0, function* () {
            return {};
          });
        }
        consume(e) {
          return ps(this, void 0, void 0, function* () {
            return {};
          });
        }
        subscribe(e, t) {
          return ps(this, void 0, void 0, function* () {
            return {};
          });
        }
        unsubscribe(e, t) {
          return ps(this, void 0, void 0, function* () {
            return {};
          });
        }
      }
      var vs = function (e, t, i, r) {
        return new (i || (i = Promise))(function (n, s) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(a, o);
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
      class ys {
        constructor() {
          ((this.canAddShortcut = !1),
            (this.canRequestReview = !1),
            (this.isAlreadyReviewed = !1));
        }
        addShortcut() {
          return vs(this, void 0, void 0, function* () {
            return !1;
          });
        }
        requestReview() {
          return Promise.resolve({ success: !1, rating: 0, error: "" });
        }
        requestGameUrl() {
          return vs(this, void 0, void 0, function* () {});
        }
      }
      var ms,
        gs = function (e, t, i, r) {
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e);
        };
      class ws {
        constructor(e) {
          (ms.set(this, void 0),
            (function (e, t, i, r, n) {
              if ("m" === r)
                throw new TypeError("Private method is not writable");
              if ("a" === r && !n)
                throw new TypeError(
                  "Private accessor was defined without a setter",
                );
              if ("function" == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it",
                );
              "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i);
            })(this, ms, e, "f"));
        }
        fetchConfig() {
          return gs(this, ms, "f").fetchConfig();
        }
        fetchVariables() {
          return (
            (e = this),
            (t = void 0),
            (r = function* () {
              return { items: yield gs(this, ms, "f").fetchGameVariables() };
            }),
            new ((i = void 0) || (i = Promise))(function (n, s) {
              function a(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? n(e.value)
                  : ((t = e.value),
                    t instanceof i
                      ? t
                      : new i(function (e) {
                          e(t);
                        })).then(a, o);
              }
              c((r = r.apply(e, t || [])).next());
            })
          );
          var e, t, i, r;
        }
      }
      ms = new WeakMap();
      var bs,
        Es = function (e, t, i, r) {
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e);
        };
      class Ps {
        constructor(e) {
          (bs.set(this, void 0),
            (function (e, t, i, r, n) {
              if ("m" === r)
                throw new TypeError("Private method is not writable");
              if ("a" === r && !n)
                throw new TypeError(
                  "Private accessor was defined without a setter",
                );
              if ("function" == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it",
                );
              "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i);
            })(this, bs, e, "f"));
        }
        setProgress(e) {
          return Es(this, bs, "f").setAchievementProgress(e);
        }
        unlock(e) {
          return Es(this, bs, "f").unlockAchievement(e);
        }
      }
      bs = new WeakMap();
      var Ss = function (e, t, i, r) {
        return new (i || (i = Promise))(function (n, s) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(a, o);
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
      const _s = "method_not_supported";
      class As {
        constructor(e) {
          this.options = e;
        }
        get reqCounter() {
          return 0;
        }
        set reqCounter(e) {}
        getOptions() {
          return this.options;
        }
        getApiUrl() {
          return "";
        }
        addCounterListener(e) {}
        setLang(e) {}
        setWithCookie(e) {}
        setPlayerData(e) {}
        ping(e) {}
        setPlatform(e, t) {}
        signQuery(e = null) {
          return Ss(this, void 0, void 0, function* () {});
        }
        fetch(e, t, i) {
          return Ss(this, void 0, void 0, function* () {
            return Promise.resolve({});
          });
        }
        fetchMany(e, t, i = {}) {
          return Ss(this, void 0, void 0, function* () {
            return Promise.resolve({});
          });
        }
      }
      class Ts {
        constructor() {}
        sync() {
          throw _s;
        }
        fetch() {
          throw _s;
        }
        getPaymentLink() {
          throw _s;
        }
        purchase() {
          throw _s;
        }
        getPlayerPurchase() {
          throw _s;
        }
        findProduct() {
          throw _s;
        }
        consume() {
          throw _s;
        }
        cancelSubscription() {
          throw _s;
        }
        resumeSubscription() {
          throw _s;
        }
      }
      class Os {
        constructor() {}
        fetch() {
          throw _s;
        }
      }
      var Cs = function (e, t, i, r) {
        return new (i || (i = Promise))(function (n, s) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(a, o);
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
      class Rs {
        constructor() {}
        getRating() {
          return Cs(this, void 0, void 0, function* () {
            throw _s;
          });
        }
        getPlayerRating() {
          return Cs(this, void 0, void 0, function* () {
            throw _s;
          });
        }
        getRatingVariant() {
          return Cs(this, void 0, void 0, function* () {
            throw _s;
          });
        }
        getPlayerRatingVariant() {
          return Cs(this, void 0, void 0, function* () {
            throw _s;
          });
        }
        publishRecord() {
          return Cs(this, void 0, void 0, function* () {
            throw _s;
          });
        }
      }
      class ks {
        constructor() {}
        fetch() {
          throw _s;
        }
      }
      class Is {
        constructor() {}
        fetch() {
          throw _s;
        }
        upload() {
          throw _s;
        }
        uploadByURL() {
          throw _s;
        }
        saveByURL() {
          throw _s;
        }
      }
      class Ds {
        constructor() {}
        fetch() {
          throw _s;
        }
        upload() {
          throw _s;
        }
      }
      var xs;
      class Ns {
        constructor(e) {
          (xs.set(this, void 0),
            (function (e, t, i, r, n) {
              if ("m" === r)
                throw new TypeError("Private method is not writable");
              if ("a" === r && !n)
                throw new TypeError(
                  "Private accessor was defined without a setter",
                );
              if ("function" == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it",
                );
              "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i);
            })(this, xs, e, "f"));
        }
        give(e) {
          return (function (e, t, i, r) {
            if ("a" === i && !r)
              throw new TypeError(
                "Private accessor was defined without a getter",
              );
            if ("function" == typeof t ? e !== t || !r : !t.has(e))
              throw new TypeError(
                "Cannot read private member from an object whose class did not declare it",
              );
            return "m" === i
              ? r
              : "a" === i
                ? r.call(e)
                : r
                  ? r.value
                  : t.get(e);
          })(this, xs, "f").giveReward(e);
        }
      }
      xs = new WeakMap();
      var Ms;
      class Ls {
        constructor(e) {
          (Ms.set(this, void 0),
            (function (e, t, i, r, n) {
              if ("m" === r)
                throw new TypeError("Private method is not writable");
              if ("a" === r && !n)
                throw new TypeError(
                  "Private accessor was defined without a setter",
                );
              if ("function" == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it",
                );
              "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i);
            })(this, Ms, e, "f"));
        }
        join(e) {
          return (
            (t = this),
            (i = void 0),
            (n = function* () {
              return (function (e, t, i, r) {
                if ("a" === i && !r)
                  throw new TypeError(
                    "Private accessor was defined without a getter",
                  );
                if ("function" == typeof t ? e !== t || !r : !t.has(e))
                  throw new TypeError(
                    "Cannot read private member from an object whose class did not declare it",
                  );
                return "m" === i
                  ? r
                  : "a" === i
                    ? r.call(e)
                    : r
                      ? r.value
                      : t.get(e);
              })(this, Ms, "f").joinEvent(e);
            }),
            new ((r = void 0) || (r = Promise))(function (e, s) {
              function a(e) {
                try {
                  c(n.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                try {
                  c(n.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function c(t) {
                var i;
                t.done
                  ? e(t.value)
                  : ((i = t.value),
                    i instanceof r
                      ? i
                      : new r(function (e) {
                          e(i);
                        })).then(a, o);
              }
              c((n = n.apply(t, i || [])).next());
            })
          );
          var t, i, r, n;
        }
      }
      Ms = new WeakMap();
      var Fs;
      class js {
        constructor(e) {
          (Fs.set(this, void 0),
            (function (e, t, i, r, n) {
              if ("m" === r)
                throw new TypeError("Private method is not writable");
              if ("a" === r && !n)
                throw new TypeError(
                  "Private accessor was defined without a setter",
                );
              if ("function" == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it",
                );
              "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i);
            })(this, Fs, e, "f"));
        }
        register(e) {
          return (
            (t = this),
            (i = void 0),
            (n = function* () {
              return (function (e, t, i, r) {
                if ("a" === i && !r)
                  throw new TypeError(
                    "Private accessor was defined without a getter",
                  );
                if ("function" == typeof t ? e !== t || !r : !t.has(e))
                  throw new TypeError(
                    "Cannot read private member from an object whose class did not declare it",
                  );
                return "m" === i
                  ? r
                  : "a" === i
                    ? r.call(e)
                    : r
                      ? r.value
                      : t.get(e);
              })(this, Fs, "f").registerScheduler(e);
            }),
            new ((r = void 0) || (r = Promise))(function (e, s) {
              function a(e) {
                try {
                  c(n.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                try {
                  c(n.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function c(t) {
                var i;
                t.done
                  ? e(t.value)
                  : ((i = t.value),
                    i instanceof r
                      ? i
                      : new r(function (e) {
                          e(i);
                        })).then(a, o);
              }
              c((n = n.apply(t, i || [])).next());
            })
          );
          var t, i, r, n;
        }
      }
      Fs = new WeakMap();
      const Us = new TextEncoder();
      var Gs,
        Bs = function (e, t, i, r) {
          return new (i || (i = Promise))(function (n, s) {
            function a(e) {
              try {
                c(r.next(e));
              } catch (e) {
                s(e);
              }
            }
            function o(e) {
              try {
                c(r.throw(e));
              } catch (e) {
                s(e);
              }
            }
            function c(e) {
              var t;
              e.done
                ? n(e.value)
                : ((t = e.value),
                  t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      })).then(a, o);
            }
            c((r = r.apply(e, t || [])).next());
          });
        },
        $s = function (e, t, i, r) {
          if ("a" === i && !r)
            throw new TypeError(
              "Private accessor was defined without a getter",
            );
          if ("function" == typeof t ? e !== t || !r : !t.has(e))
            throw new TypeError(
              "Cannot read private member from an object whose class did not declare it",
            );
          return "m" === i ? r : "a" === i ? r.call(e) : r ? r.value : t.get(e);
        };
      let Vs = !0;
      class Ws {
        constructor(e) {
          (Gs.set(this, void 0),
            (function (e, t, i, r, n) {
              if ("m" === r)
                throw new TypeError("Private method is not writable");
              if ("a" === r && !n)
                throw new TypeError(
                  "Private accessor was defined without a setter",
                );
              if ("function" == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it",
                );
              "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i);
            })(this, Gs, e, "f"));
        }
        sync(
          {
            playerState: e,
            override: t,
            acceptedRewards: i,
            givenRewards: r,
            claimedTriggers: n,
            claimedSchedulersDays: s,
          },
          { withToken: a },
        ) {
          ((e, t, i) => {
            const r = Us.encode(JSON.stringify(e)).length;
            if (
              (r > 1048576 &&
                v.kg.warn(
                  `Maximum size exceeded: sending data must be maximum 1MB, your size is: ${Math.round((r / 1024 / 1024) * 100) / 100} MB`,
                ),
              r > 2097152)
            )
              throw new Error("max_data_limit_exceeded");
          })(e);
          const o = $s(this, Gs, "f").sync({
            playerState: e,
            override: t,
            acceptedRewards: i,
            givenRewards: r,
            claimedTriggers: n,
            claimedSchedulersDays: s,
            isFirstRequest: Vs,
          });
          return ((Vs = !1), o);
        }
        getPlayer({ withToken: e }) {
          const t = $s(this, Gs, "f").getPlayer({ isFirstRequest: Vs });
          return ((Vs = !1), t);
        }
        logoutPlayer() {
          return Bs(this, void 0, void 0, function* () {
            return { success: !1 };
          });
        }
        loginPlayer(e) {
          return Bs(this, void 0, void 0, function* () {
            return { success: !1 };
          });
        }
        getLoginStatus() {
          return Bs(this, void 0, void 0, function* () {
            return { credentials: "" };
          });
        }
        fetchFields() {
          return Bs(this, void 0, void 0, function* () {
            return { items: yield $s(this, Gs, "f").fetchPlayerFields() };
          });
        }
        checkCode({ secretCode: e }) {
          return Bs(this, void 0, void 0, function* () {
            return { success: !1 };
          });
        }
        fetchPlayers({ ids: e }) {
          return Bs(this, void 0, void 0, function* () {
            throw _s;
          });
        }
        checkUniqueValue({ tag: e, value: t }) {
          return Bs(this, void 0, void 0, function* () {
            return {
              success: (yield $s(this, Gs, "f").getPlayer({
                isFirstRequest: Vs,
              })).uniques.some((i) => i.tag === e && i.value === t),
            };
          });
        }
        registerUniqueValue({ tag: e, value: t }) {
          return Bs(this, void 0, void 0, function* () {
            return yield $s(this, Gs, "f").registerUniqueValue({
              tag: e,
              value: t,
            });
          });
        }
        deleteUniqueValue({ tag: e }) {
          return Bs(this, void 0, void 0, function* () {
            return yield $s(this, Gs, "f").deleteUniqueValue({ tag: e });
          });
        }
      }
      Gs = new WeakMap();
      class qs {
        constructor() {}
        fetchInvites() {
          throw _s;
        }
        fetchChannelInvites() {
          throw _s;
        }
        fetchSentInvites() {
          throw _s;
        }
        sendInvite() {
          throw _s;
        }
        cancelInvite() {
          throw _s;
        }
        acceptInvite() {
          throw _s;
        }
        rejectInvite() {
          throw _s;
        }
      }
      class Ys {
        fetchJoinRequests() {
          throw _s;
        }
        fetchSentJoinRequests() {
          throw _s;
        }
        acceptJoinRequest() {
          throw _s;
        }
        rejectJoinRequest() {
          throw _s;
        }
      }
      class zs {
        mute() {
          throw _s;
        }
        unmute() {
          throw _s;
        }
        fetchMembers() {
          throw _s;
        }
        join() {
          throw _s;
        }
        cancelJoin() {
          throw _s;
        }
        leave() {
          throw _s;
        }
        kick() {
          throw _s;
        }
      }
      class Ks {
        constructor() {}
        fetchMessages() {
          throw _s;
        }
        fetchPersonalMessages() {
          throw _s;
        }
        fetchFeedMessages() {
          throw _s;
        }
        sendMessage() {
          throw _s;
        }
        sendFeedMessage() {
          throw _s;
        }
        sendPersonalMessage() {
          throw _s;
        }
        editMessage() {
          throw _s;
        }
        deleteMessage() {
          throw _s;
        }
      }
      class Js {
        constructor() {}
        fetchChannel() {
          throw _s;
        }
        fetchPersonalChannel() {
          throw _s;
        }
        fetchFeedChannel() {
          throw _s;
        }
        fetchChannels() {
          throw _s;
        }
        createChannel() {
          throw _s;
        }
        updateChannel() {
          throw _s;
        }
        deleteChannel() {
          throw _s;
        }
      }
      class Zs {
        constructor() {
          ((this.channels = new Js()),
            (this.messages = new Ks()),
            (this.members = new zs()),
            (this.invites = new qs()),
            (this.joinRequests = new Ys()));
        }
        ping(e) {}
        createCentrifugeClient() {
          return (
            (e = this),
            (t = void 0),
            (r = function* () {
              return null;
            }),
            new ((i = void 0) || (i = Promise))(function (n, s) {
              function a(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? n(e.value)
                  : ((t = e.value),
                    t instanceof i
                      ? t
                      : new i(function (e) {
                          e(t);
                        })).then(a, o);
              }
              c((r = r.apply(e, t || [])).next());
            })
          );
          var e, t, i, r;
        }
      }
      var Xs = a(6609),
        Hs = a.n(Xs),
        Qs = a(9639),
        ea = a.n(Qs);
      const ta = {
          [di.N0.Eq]: (e, t) => t.some((t) => e == t),
          [di.N0.Ne]: (e, t) => t.every((t) => e != t),
          [di.N0.Lt]: (e, t) => e < t[0],
          [di.N0.Gt]: (e, t) => e > t[0],
          [di.N0.Lte]: (e, t) => e <= t[0],
          [di.N0.Gte]: (e, t) => e >= t[0],
          [di.N0.In]: (e, t) => e >= t.includes(e),
        },
        ia = {
          [di.CP.EntityStat]: (e, t, i) => {
            switch (i.type) {
              case di.zn.Event: {
                const r = e.playerEvents.find((e) => e.eventId === i.entityId);
                if (!r)
                  throw new Error(
                    `Player does not participate in ID ${i.entityId} event`,
                  );
                return r.stats[t.key] || 0;
              }
              case di.zn.Scheduler: {
                const r = e.playerSchedulers.find(
                  (e) => e.schedulerId === i.entityId,
                );
                if (!r)
                  throw new Error(
                    `Player does not participate in ID ${i.entityId} rewards schedule`,
                  );
                return r.stats[t.key] || 0;
              }
              default:
                throw new Error("invalid statType");
            }
          },
          [di.CP.PlayerStat]: (e, t, i) => e.stats[t.key] || 0,
          [di.CP.PlayerField]: (e, t, i) => e.state[t.key] || "",
        };
      const ra = {
          [di.W2.Add]: (e, t) => (
            Number.isNaN(t.value)
              ? v.kg.warn(
                  `Invalid value for mutation, key ${t.key}: ${t.value}`,
                )
              : (e[t.key] += t.value),
            e
          ),
          [di.W2.Set]: (e, t) => ((e[t.key] = t.value), e),
          [di.W2.Remove]: (e, t) => ((e[t.key] -= t.value), e),
        },
        na = { [di.x1.PlayerField]: (e, t) => ra[t.action](e, t) };
      var sa,
        aa = a(1438);
      class oa {
        constructor(e) {
          ((this.game = e), sa.set(this, () => {}), this.resetRewardsPerSync());
        }
        sync({
          isFirstRequest: e,
          playerState: t,
          claimedTriggers: i,
          givenRewards: r,
          acceptedRewards: n,
          claimedSchedulersDays: s,
        }) {
          return (
            (a = this),
            (o = void 0),
            (l = function* () {
              (this.game.playerFields.forEach((e) => {
                this.player.state[e.key] = t[e.key];
              }),
                this.game.playerFields.forEach((e) => {
                  this.player.state[e.key] = t[e.key];
                }),
                this.updateModifiedAt(),
                e && this.resetSession(),
                this.resetRewardsPerSync());
              const a = [...this.game.triggers];
              return (
                this.game.events.forEach((e) => {
                  this.player.playerEvents.find((t) => t.eventId === e.id) &&
                    a.push(...e.triggers);
                }),
                this.game.schedulers.forEach((e) => {
                  const t = this.player.playerSchedulers.find(
                    (t) => t.schedulerId === e.id,
                  );
                  if (t) {
                    const i =
                        e.type === di.OB.ActiveDays
                          ? t.stats.activeDays
                          : t.stats.activeDaysConsecutive,
                      r = e.triggers.filter((e) => e.day === i);
                    a.push(...r);
                  }
                }),
                a.forEach((e) => {
                  const t = this.player.triggers.find(
                    (t) => t.triggerId === e.id,
                  );
                  var r;
                  (null == t ? void 0 : t.claimed) ||
                    t ||
                    ((function (e, t, i) {
                      return i.some((i) =>
                        (function (e, t, i) {
                          return i.every((i) =>
                            (function (e, t, i) {
                              const r = ia[i.type];
                              return (0, ta[i.operator])(r(e, i, t), i.value);
                            })(e, t, i),
                          );
                        })(e, t, i),
                      );
                    })(this.player, (r = e), r.conditions) &&
                      (this.rewardsData.activatedTriggersNow.push(e.id),
                      this.player.triggers.push({
                        triggerId: e.id,
                        claimed: !1,
                      }),
                      e.isAutoClaim && i.push(e.id)));
                }),
                i.forEach((e) => {
                  const t = this.player.triggers.find((t) => t.triggerId === e),
                    i = a.find((t) => t.id === e);
                  i &&
                    t &&
                    !t.claimed &&
                    ((t.claimed = !0),
                    this.rewardsData.claimedTriggersNow.push(e),
                    i.bonuses.forEach((e) => this.giveBonus(e)));
                }),
                r.forEach((e) => this.giveReward(e.id, e.count, !1)),
                n.forEach((e) => this.acceptReward(e.id, e.count, !1)),
                s.forEach((e) => {
                  var t;
                  if (e.day < 0) return;
                  const i = this.game.schedulers.find(
                    (t) => t.id === e.schedulerId,
                  );
                  if (!i) return;
                  const r = this.player.playerSchedulers.find(
                    (t) => t.schedulerId === e.schedulerId,
                  );
                  r &&
                    (r.daysClaimed.includes(e.day) ||
                      i.days < e.day ||
                      (((i.type == di.OB.ActiveDays &&
                        r.stats.activeDays >= e.day) ||
                        (i.type == di.OB.ActiveDaysConsecutive &&
                          r.stats.activeDaysConsecutive >= e.day)) &&
                        (r.daysClaimed.push(e.day),
                        this.rewardsData.claimedSchedulersDaysNow.push({
                          schedulerId: e.schedulerId,
                          day: e.day,
                        }),
                        (
                          (null ===
                            (t = i.daysBonuses.find((t) => t.day === e.day)) ||
                          void 0 === t
                            ? void 0
                            : t.bonuses) || []
                        ).forEach((e) => this.giveBonus(e)))));
                }),
                Object.assign(
                  Object.assign({ __typename: "Player" }, this.player),
                  { rewardsData: this.rewardsData },
                )
              );
            }),
            new ((c = void 0) || (c = Promise))(function (e, t) {
              function i(e) {
                try {
                  n(l.next(e));
                } catch (e) {
                  t(e);
                }
              }
              function r(e) {
                try {
                  n(l.throw(e));
                } catch (e) {
                  t(e);
                }
              }
              function n(t) {
                var n;
                t.done
                  ? e(t.value)
                  : ((n = t.value),
                    n instanceof c
                      ? n
                      : new c(function (e) {
                          e(n);
                        })).then(i, r);
              }
              n((l = l.apply(a, o || [])).next());
            })
          );
          var a, o, c, l;
        }
        setPlayer({ player: e, isFirstRequest: t }) {
          this.player = e;
          let i = this.updateModifiedAt();
          t && this.resetSession();
          const r = Date.parse(e.sessionStart),
            n = r > 0 ? Date.now() - r : 0;
          let s = e.stats.playtimeAll + n / 1e3,
            a = e.stats.playtimeToday + n / 1e3;
          return (
            (function (e, t, i, r) {
              if ("a" === i && !r)
                throw new TypeError(
                  "Private accessor was defined without a getter",
                );
              if ("function" == typeof t ? e !== t || !r : !t.has(e))
                throw new TypeError(
                  "Cannot read private member from an object whose class did not declare it",
                );
              return "m" === i
                ? r
                : "a" === i
                  ? r.call(e)
                  : r
                    ? r.value
                    : t.get(e);
            })(this, sa, "f").call(this),
            (function (e, t, i, r, n) {
              if ("m" === r)
                throw new TypeError("Private method is not writable");
              if ("a" === r && !n)
                throw new TypeError(
                  "Private accessor was defined without a setter",
                );
              if ("function" == typeof t ? e !== t || !n : !t.has(e))
                throw new TypeError(
                  "Cannot write private member to an object whose class did not declare it",
                );
              "a" === r ? n.call(e, i) : n ? (n.value = i) : t.set(e, i);
            })(
              this,
              sa,
              W((e) => {
                ((s += e / 1e3),
                  (a += e / 1e3),
                  (this.player.stats.playtimeAll = Math.floor(s)),
                  (this.player.stats.playtimeToday = Math.floor(a)));
              }),
              "f",
            ),
            i
          );
        }
        _incrementActiveDays() {
          ((this.player.stats.activeDays += 1),
            this.player.playerEvents.forEach((e) => {
              e.stats.activeDays += 1;
            }),
            this.player.playerSchedulers.forEach((e) => {
              ((e.stats.activeDays += 1),
                this._checkToRestartScheduler(e.schedulerId));
            }));
        }
        _incrementActiveDaysConsecutive() {
          ((this.player.stats.activeDaysConsecutive += 1),
            this.player.playerEvents.forEach((e) => {
              e.stats.activeDaysConsecutive += 1;
            }),
            this.player.playerSchedulers.forEach((e) => {
              ((e.stats.activeDaysConsecutive += 1),
                this._checkToRestartScheduler(e.schedulerId));
            }));
        }
        _resetActiveDaysConsecutive() {
          ((this.player.stats.activeDaysConsecutive = 1),
            this.player.playerEvents.forEach((e) => {
              e.stats.activeDaysConsecutive = 1;
            }),
            this.player.playerSchedulers.forEach((e) => {
              ((e.stats.activeDaysConsecutive = 1),
                this._checkToRestartScheduler(e.schedulerId, !0));
            }));
        }
        _checkToRestartScheduler(e, t) {
          const i = this.game.schedulers.find((t) => t.id === e);
          if (!i) return;
          const r = this.player.playerSchedulers.find(
            (t) => t.schedulerId === e,
          );
          if (!r) return;
          const n =
            i.type === di.OB.ActiveDays
              ? "activeDays"
              : "activeDaysConsecutive";
          (t || (i.isRepeat && r.stats[n] > i.days)) &&
            ((r.stats = { activeDays: 1, activeDaysConsecutive: 1 }),
            (r.daysClaimed = []));
        }
        updateModifiedAt() {
          let e = !1;
          const [t, i] =
            ((r = this.player.state.modifiedAt),
            [ea()().isAfter(r, "day"), ea()().diff(r, "day", !0)]);
          var r;
          return (
            (this.player.state.modifiedAt = new Date().toISOString()),
            t &&
              (this._incrementActiveDays(),
              i >= 1 &&
                (i <= 2
                  ? this._incrementActiveDaysConsecutive()
                  : this._resetActiveDaysConsecutive()),
              (e = !0)),
            this.game.schedulers
              .filter(
                (e) =>
                  e.isAutoRegister &&
                  !this.player.playerSchedulers.some(
                    (t) => t.schedulerId === e.id,
                  ),
              )
              .forEach((t) => {
                (this.registerScheduler(t.id), (e = !0));
              }),
            this.game.events
              .filter(
                (e) =>
                  e.isAutoJoin &&
                  !this.player.playerEvents.some((t) => t.eventId === e.id) &&
                  this._isActiveEvent(e.id),
              )
              .forEach((t) => {
                (this.joinEvent(t.id), (e = !0));
              }),
            e
          );
        }
        _isActiveEvent(e) {
          const t = this.game.events.find((t) => t.id === e);
          if (!t) return !1;
          const i = ea()(),
            r = ea()(t.dateStart),
            n = ea()(t.dateEnd);
          return i.isAfter(r) && i.isBefore(n);
        }
        resetSession() {
          ((this.player.stats.playtimeToday = 0),
            (this.player.sessionStart = new Date().toISOString()));
        }
        giveBonus(e) {
          switch (e.type) {
            case di.Do.Reward:
              this.giveReward(e.id, 1, !0);
              break;
            case di.Do.Achievement:
              (this.rewardsData.givenRewards.push(e.id),
                this.giveAchievement(e.id));
              break;
            case di.Do.Product:
              this.giveProduct(e.id);
          }
        }
        giveReward(e, t, i) {
          const r = this.game.rewards.find((t) => t.id === e);
          if (!r || 0 === t) return;
          let n = this.player.rewards.find((t) => t.rewardId === e);
          if (
            (n ||
              ((n = { rewardId: e, countTotal: 0, countAccepted: 0 }),
              this.player.rewards.push(n)),
            (n.countTotal += t),
            r.isAutoAccept && i)
          ) {
            n.countAccepted += t;
            for (let e = 0; e < t; e++) this.applyMutations(r.mutations);
          }
          return (this.rewardsData.givenRewards.push(r.id), n);
        }
        joinEvent(e) {
          if (!this.game.events.find((t) => t.id === e)) return;
          if (this.player.playerEvents.find((t) => t.eventId === e)) return;
          const t = {
            eventId: e,
            stats: { activeDays: 1, activeDaysConsecutive: 1 },
          };
          return (this.player.playerEvents.push(t), t);
        }
        registerScheduler(e) {
          if (!this.game.schedulers.find((t) => t.id === e)) return;
          if (this.player.playerSchedulers.find((t) => t.schedulerId === e))
            return;
          const t = {
            schedulerId: e,
            stats: { activeDays: 1, activeDaysConsecutive: 1 },
            daysClaimed: [],
          };
          return (this.player.playerSchedulers.push(t), t);
        }
        registerUniqueValue(e, t) {
          const i = this.player.uniques.find((t) => t.tag === e);
          if (i) return ((i.value = t), i);
          const r = { tag: e, value: t };
          return (this.player.uniques.push(r), r);
        }
        deleteUniqueValue(e) {
          this.player.uniques = this.player.uniques.filter((t) => t.tag !== e);
        }
        acceptReward(e, t, i) {
          const r = this.game.rewards.find((t) => t.id === e);
          if (!r) throw new Error("reward_not_found");
          const n = this.player.rewards.find((t) => t.rewardId === e);
          if (!n) throw new Error("player_reward_not_found");
          const s = Math.min(n.countTotal - n.countAccepted, t);
          if (0 === s) throw new Error("player_reward_not_found");
          ((n.countAccepted += s), i && this.applyMutations(r.mutations));
        }
        giveAchievement(e) {
          const t = this.game.achievements.find((t) => t.id === e);
          if (!t) return;
          let i = this.player.achievementsList.find(
            (t) => t.achievementId === e,
          );
          return (
            i ||
              ((i = {
                achievementId: e,
                unlocked: !1,
                progress: 0,
                createdAt: new Date().toISOString(),
              }),
              this.player.achievementsList.push(i)),
            (i.unlocked = !0),
            (i.progress = t.maxProgress),
            this.rewardsData.givenAchievements.push(e),
            i
          );
        }
        giveProduct(e) {
          const t = this.game.products.find((t) => t.id === e);
          if (!t) return;
          const i = {
            productId: t.id,
            tag: t.tag,
            payload: {},
            createdAt: new Date().toISOString(),
            orderStatus: aa.i.Paid,
            expiredAt: "",
            gift: !0,
            subscribed: !1,
          };
          (t.isSubscription &&
            (i.expiredAt = ea()().add(t.period, "days").toISOString()),
            this.player.purchasesListV2.push(i),
            this.rewardsData.givenProducts.push(e));
        }
        setAchievementProgress(e, t) {
          const i = this.game.achievements.find((t) => t.id === e);
          if (!i) return;
          let r = this.player.achievementsList.find(
            (t) => t.achievementId === e,
          );
          return (
            r ||
              ((r = {
                achievementId: e,
                unlocked: !1,
                progress: 0,
                createdAt: new Date().toISOString(),
              }),
              this.player.achievementsList.push(r)),
            t >= i.maxProgress
              ? ((r.progress = i.maxProgress), (r.unlocked = !0))
              : (r.progress = t < 0 ? 0 : t),
            r
          );
        }
        resetRewardsPerSync() {
          this.rewardsData = {
            activatedTriggersNow: [],
            claimedTriggersNow: [],
            claimedSchedulersDaysNow: [],
            givenAchievements: [],
            givenRewards: [],
            givenProducts: [],
          };
        }
        applyMutations(e) {
          e.forEach((e) => this.applyMutation(e));
        }
        applyMutation(e) {
          this.player.state = (function (e, t) {
            const i = na[t.type];
            if (!i) throw new Error(`Unknown mutation type: ${t.type}`);
            return i(e, t);
          })(this.player.state, e);
        }
      }
      sa = new WeakMap();
      var ca = function (e, t, i, r) {
        return new (i || (i = Promise))(function (n, s) {
          function a(e) {
            try {
              c(r.next(e));
            } catch (e) {
              s(e);
            }
          }
          function o(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              s(e);
            }
          }
          function c(e) {
            var t;
            e.done
              ? n(e.value)
              : ((t = e.value),
                t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    })).then(a, o);
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
      const la = "ofl:player_allData";
      class ha {
        constructor(e) {
          ((this.storage = e),
            (this.readyTransaction = (0, r._)()),
            (this.gameState = {}),
            (this.ready = this.readyTransaction.ready));
        }
        setProjectConfig(e) {
          try {
            !(function (e) {
              e.platformConfig.banners.length;
            })(e);
          } catch (e) {
            throw (
              v.kg.error(
                'failed to parse project config "./gs-config.json"',
                e,
              ),
              e
            );
          }
          return (
            (e.serverTime = new Date().toISOString()),
            (e.platformConfig.progressSaveFormat = ye.pQ.Cloud),
            (this.gameState.config = e),
            this.readyTransaction.done(),
            e
          );
        }
        fetchConfig() {
          var e;
          return ca(this, void 0, void 0, function* () {
            const t =
              (null === (e = window.__GS_BOOT_CFG__) || void 0 === e
                ? void 0
                : e.version) || 0;
            return fetch(`./gs-config.json?v=${t}`)
              .then((e) => e.json())
              .then((e) => this.setProjectConfig(e))
              .catch(() =>
                ca(this, void 0, void 0, function* () {
                  const e = yield this.storage.loadConfig();
                  return this.setProjectConfig(e);
                }),
              );
          });
        }
        fetchGameVariables() {
          return ca(this, void 0, void 0, function* () {
            return (
              yield this.ready,
              Hs()(this.gameState.config.gameVariables)
            );
          });
        }
        fetchPlayerFields() {
          return ca(this, void 0, void 0, function* () {
            return (yield this.ready, this.gameState.config.playerFields);
          });
        }
        sync(e) {
          return ca(this, void 0, void 0, function* () {
            if (
              (yield this.ready,
              this.player ||
                (yield this.getPlayer({ isFirstRequest: e.isFirstRequest })),
              !this.player)
            )
              throw new Error("player_not_found");
            const t = yield this.player.sync(e);
            return (yield this.savePlayer(t), Hs()(t));
          });
        }
        getPlayer({ isFirstRequest: e }) {
          return ca(this, void 0, void 0, function* () {
            return (
              yield this.ready,
              this.storage
                .get(this.storage.localStorages, la)
                .then((e) =>
                  ca(this, void 0, void 0, function* () {
                    const t = this.gameState.config.playerFields.reduce(
                      (e, t) => ((e[t.key] = t.default), e),
                      {},
                    );
                    if (e)
                      return (
                        "serverTime" in e ||
                          (e.serverTime = new Date().toISOString()),
                        Object.entries(e.state).forEach(([i, r]) => {
                          void 0 === r && (e.state[i] = t[i]);
                        }),
                        e
                      );
                    const i = {
                      state: Object.assign(
                        {
                          id: Date.now(),
                          active: !0,
                          removed: !1,
                          test: !1,
                          name: "",
                          avatar: "",
                          credentials: "",
                          score: 0,
                          secretCode: String(Date.now()),
                          modifiedAt: new Date().toISOString(),
                        },
                        t,
                      ),
                      stats: {
                        playtimeAll: 0,
                        playtimeToday: 0,
                        activeDays: 1,
                        activeDaysConsecutive: 1,
                      },
                      achievementsList: [],
                      purchasesListV2: [],
                      rewards: [],
                      triggers: [],
                      uniques: [],
                      token: "",
                      firstReqHash: "",
                      sessionStart: new Date().toISOString(),
                      playerSchedulers: [],
                      rewardsData: {
                        activatedTriggersNow: [],
                        claimedTriggersNow: [],
                        claimedSchedulersDaysNow: [],
                        givenAchievements: [],
                        givenRewards: [],
                        givenProducts: [],
                      },
                      playerEvents: [],
                      experiments: [],
                      segments: [],
                      newSegments: [],
                      leftSegments: [],
                      serverTime: new Date().toISOString(),
                    };
                    return (yield this.savePlayer(i), i);
                  }),
                )
                .then((t) => (this._setPlayer(t, e), Hs()(t)))
            );
          });
        }
        setAchievementProgress({ id: e, tag: t, progress: i }) {
          return ca(this, void 0, void 0, function* () {
            if ((yield this.ready, !this.player))
              throw new Error("player_not_found");
            const r = this.gameState.config.achievements.find(
              (i) => i.id === e || i.tag === t,
            );
            if (!r) throw new Error("achievement_not_found");
            const n = this.player.player.achievementsList.find(
              (e) => e.achievementId === r.id,
            );
            if (null == n ? void 0 : n.unlocked)
              throw new Error("achievement_already_unlocked");
            const s = this.player.setAchievementProgress(r.id, i);
            return (
              yield this.savePlayer(this.player.player),
              Object.assign(Object.assign({}, s), { achievement: r })
            );
          });
        }
        unlockAchievement({ id: e, tag: t }) {
          return ca(this, void 0, void 0, function* () {
            if ((yield this.ready, !this.player))
              throw new Error("player_not_found");
            const i = this.gameState.config.achievements.find(
              (i) => i.id === e || i.tag === t,
            );
            if (!i) throw new Error("achievement_not_found");
            const r = this.player.player.achievementsList.find(
              (e) => e.achievementId === i.id,
            );
            if (null == r ? void 0 : r.unlocked)
              throw new Error("achievement_already_unlocked");
            const n = this.player.giveAchievement(i.id);
            return (
              yield this.savePlayer(this.player.player),
              Object.assign(Object.assign({}, n), { achievement: i })
            );
          });
        }
        giveReward({ id: e, tag: t }) {
          return ca(this, void 0, void 0, function* () {
            if ((yield this.ready, !this.player))
              throw new Error("player_not_found");
            const i = this.gameState.config.rewards.find(
              (i) => i.id === e || i.tag === t,
            );
            if (!i) throw new Error("reward_not_found");
            const r = this.player.giveReward(i.id, 1, !1);
            return (
              yield this.savePlayer(this.player.player),
              Object.assign(Object.assign({}, r), { reward: i })
            );
          });
        }
        joinEvent({ eventId: e }) {
          return ca(this, void 0, void 0, function* () {
            if ((yield this.ready, !this.player))
              throw new Error("player_not_found");
            const t = this.gameState.config.events.find((t) => t.id === e);
            if (!t) throw new Error("event_not_found");
            if (this.player.player.playerEvents.find((e) => e.eventId === t.id))
              throw new Error("already_joined");
            const i = this.player.joinEvent(t.id);
            return (
              yield this.savePlayer(this.player.player),
              Object.assign({}, i)
            );
          });
        }
        registerScheduler({ schedulerId: e }) {
          return ca(this, void 0, void 0, function* () {
            if ((yield this.ready, !this.player))
              throw new Error("player_not_found");
            const t = this.gameState.config.schedulers.find((t) => t.id === e);
            if (!t) throw new Error("scheduler_not_found");
            if (
              this.player.player.playerSchedulers.find(
                (e) => e.schedulerId === t.id,
              )
            )
              throw new Error("already_registered");
            const i = this.player.registerScheduler(t.id);
            return (
              yield this.savePlayer(this.player.player),
              Object.assign({}, i)
            );
          });
        }
        registerUniqueValue({ tag: e, value: t }) {
          return ca(this, void 0, void 0, function* () {
            if ((yield this.ready, !this.player))
              throw new Error("player_not_found");
            if (
              this.player.player.uniques.find(
                (i) => i.tag === e && i.value === t,
              )
            )
              throw new Error("already_exists");
            const i = this.player.registerUniqueValue(e, t);
            return (
              yield this.savePlayer(this.player.player),
              Object.assign({}, i)
            );
          });
        }
        deleteUniqueValue({ tag: e }) {
          return ca(this, void 0, void 0, function* () {
            if ((yield this.ready, !this.player))
              throw new Error("player_not_found");
            if (!this.player.player.uniques.find((t) => t.tag === e))
              throw new Error("unique_value_not_found");
            return (
              this.player.deleteUniqueValue(e),
              yield this.savePlayer(this.player.player),
              { success: !0 }
            );
          });
        }
        _setPlayer(e, t) {
          (this.player || (this.player = new oa(this.gameState.config)),
            this.player.setPlayer({ player: e, isFirstRequest: t }) &&
              this.savePlayer(e));
        }
        savePlayer(e) {
          return this.storage.set(this.storage.localStorages, la, e);
        }
      }
      class ua {
        checkCensor() {
          return (
            (e = this),
            (t = void 0),
            (r = function* () {
              return { success: !0 };
            }),
            new ((i = void 0) || (i = Promise))(function (n, s) {
              function a(e) {
                try {
                  c(r.next(e));
                } catch (e) {
                  s(e);
                }
              }
              function o(e) {
                try {
                  c(r.throw(e));
                } catch (e) {
                  s(e);
                }
              }
              function c(e) {
                var t;
                e.done
                  ? n(e.value)
                  : ((t = e.value),
                    t instanceof i
                      ? t
                      : new i(function (e) {
                          e(t);
                        })).then(a, o);
              }
              c((r = r.apply(e, t || [])).next());
            })
          );
          var e, t, i, r;
        }
      }
      (v.kg.info("GameDistribution Special Build"),
        (window.__SDKProvider = "GamePush"),
        new (class extends Xn {
          constructor() {
            (super(...arguments), (this.name = "gp"));
          }
        })(void 0, {
          platformType: F.z.GAME_DISTRIBUTION,
          platformChunk: function (e) {
            return (
              (t = this),
              (i = void 0),
              (n = function* () {
                const [, t] = yield Promise.all([
                    e.setupStorage([]),
                    e.fetchConfig(),
                  ]),
                  i = new rs({ appId: t.platformConfig.appId });
                yield i.init();
                const r = new os(i);
                return {
                  adsAdapter: new ss(i),
                  appAdapter: new ys(),
                  playerAdapter: r,
                  platformAdapter: new us(i),
                  socialsAdapter: new ds(i),
                  paymentsAdapter: new fs(i),
                  projectConfig: t,
                };
              }),
              new ((r = void 0) || (r = Promise))(function (e, s) {
                function a(e) {
                  try {
                    c(n.next(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function o(e) {
                  try {
                    c(n.throw(e));
                  } catch (e) {
                    s(e);
                  }
                }
                function c(t) {
                  var i;
                  t.done
                    ? e(t.value)
                    : ((i = t.value),
                      i instanceof r
                        ? i
                        : new r(function (e) {
                            e(i);
                          })).then(a, o);
                }
                c((n = n.apply(t, i || [])).next());
              })
            );
            var t, i, r, n;
          },
          servicesChunk: function (e) {
            const t = new As(e),
              i = new ha(e.storage);
            return {
              apiClient: t,
              setupAnalytics: () => ({ counters: [] }),
              projectService: new ws(i),
              achievementsService: new Ps(i),
              paymentsService: new Ts(),
              gamesCollectionsService: new Os(),
              leaderboardsService: new Rs(),
              documentsService: new ks(),
              imagesService: new Is(),
              filesService: new Ds(),
              rewardsService: new Ns(i),
              eventsService: new Ls(i),
              schedulersService: new js(i),
              playerService: new Ws(i),
              channelsService: new Zs(),
              aiService: new ua(),
            };
          },
        }));
    })());
})();
