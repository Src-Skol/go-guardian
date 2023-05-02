!(function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var i = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) ||
        Object.defineProperty(t, e, {
          configurable: !1,
          enumerable: !0,
          get: n,
        });
    }),
    (r.r = function (t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = ""),
    r((r.s = 832));
})({
  12: function (t, e) {
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" == typeof window && (r = window);
    }
    t.exports = r;
  },
  19: function (t, e) {
    var r,
      n,
      i = (t.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function s() {
      throw new Error("clearTimeout has not been defined");
    }
    function a(t) {
      if (r === setTimeout) return setTimeout(t, 0);
      if ((r === o || !r) && setTimeout)
        return (r = setTimeout), setTimeout(t, 0);
      try {
        return r(t, 0);
      } catch (e) {
        try {
          return r.call(null, t, 0);
        } catch (e) {
          return r.call(this, t, 0);
        }
      }
    }
    !(function () {
      try {
        r = "function" == typeof setTimeout ? setTimeout : o;
      } catch (t) {
        r = o;
      }
      try {
        n = "function" == typeof clearTimeout ? clearTimeout : s;
      } catch (t) {
        n = s;
      }
    })();
    var c,
      u = [],
      l = !1,
      p = -1;
    function h() {
      l &&
        c &&
        ((l = !1), c.length ? (u = c.concat(u)) : (p = -1), u.length && f());
    }
    function f() {
      if (!l) {
        var t = a(h);
        l = !0;
        for (var e = u.length; e; ) {
          for (c = u, u = []; ++p < e; ) c && c[p].run();
          (p = -1), (e = u.length);
        }
        (c = null),
          (l = !1),
          (function (t) {
            if (n === clearTimeout) return clearTimeout(t);
            if ((n === s || !n) && clearTimeout)
              return (n = clearTimeout), clearTimeout(t);
            try {
              n(t);
            } catch (e) {
              try {
                return n.call(null, t);
              } catch (e) {
                return n.call(this, t);
              }
            }
          })(t);
      }
    }
    function d(t, e) {
      (this.fun = t), (this.array = e);
    }
    function _() {}
    (i.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
      u.push(new d(t, e)), 1 !== u.length || l || a(f);
    }),
      (d.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (i.title = "browser"),
      (i.browser = !0),
      (i.env = {}),
      (i.argv = []),
      (i.version = ""),
      (i.versions = {}),
      (i.on = _),
      (i.addListener = _),
      (i.once = _),
      (i.off = _),
      (i.removeListener = _),
      (i.removeAllListeners = _),
      (i.emit = _),
      (i.prependListener = _),
      (i.prependOnceListener = _),
      (i.listeners = function (t) {
        return [];
      }),
      (i.binding = function (t) {
        throw new Error("process.binding is not supported");
      }),
      (i.cwd = function () {
        return "/";
      }),
      (i.chdir = function (t) {
        throw new Error("process.chdir is not supported");
      }),
      (i.umask = function () {
        return 0;
      });
  },
  33: function (t, e, r) {
    (function (e, r) {
      (t.exports = (function () {
        var t, n, i;
        return (function t(e, r, n) {
          function i(s, a) {
            if (!r[s]) {
              if (!e[s]) {
                var c = "function" == typeof _dereq_ && _dereq_;
                if (!a && c) return c(s, !0);
                if (o) return o(s, !0);
                var u = new Error("Cannot find module '" + s + "'");
                throw ((u.code = "MODULE_NOT_FOUND"), u);
              }
              var l = (r[s] = { exports: {} });
              e[s][0].call(
                l.exports,
                function (t) {
                  var r = e[s][1][t];
                  return i(r || t);
                },
                l,
                l.exports,
                t,
                e,
                r,
                n
              );
            }
            return r[s].exports;
          }
          for (
            var o = "function" == typeof _dereq_ && _dereq_, s = 0;
            s < n.length;
            s++
          )
            i(n[s]);
          return i;
        })(
          {
            1: [
              function (t, e, r) {
                "use strict";
                e.exports = function (t) {
                  var e = t._SomePromiseArray;
                  function r(t) {
                    var r = new e(t),
                      n = r.promise();
                    return r.setHowMany(1), r.setUnwrap(), r.init(), n;
                  }
                  (t.any = function (t) {
                    return r(t);
                  }),
                    (t.prototype.any = function () {
                      return r(this);
                    });
                };
              },
              {},
            ],
            2: [
              function (t, e, r) {
                "use strict";
                var n;
                try {
                  throw new Error();
                } catch (t) {
                  n = t;
                }
                var i = t("./schedule.js"),
                  o = t("./queue.js"),
                  s = t("./util.js");
                function a() {
                  (this._isTickUsed = !1),
                    (this._lateQueue = new o(16)),
                    (this._normalQueue = new o(16)),
                    (this._trampolineEnabled = !0);
                  var t = this;
                  (this.drainQueues = function () {
                    t._drainQueues();
                  }),
                    (this._schedule = i.isStatic ? i(this.drainQueues) : i);
                }
                function c(t, e, r) {
                  this._lateQueue.push(t, e, r), this._queueTick();
                }
                function u(t, e, r) {
                  this._normalQueue.push(t, e, r), this._queueTick();
                }
                function l(t) {
                  this._normalQueue._pushOne(t), this._queueTick();
                }
                (a.prototype.disableTrampolineIfNecessary = function () {
                  s.hasDevTools && (this._trampolineEnabled = !1);
                }),
                  (a.prototype.enableTrampoline = function () {
                    this._trampolineEnabled ||
                      ((this._trampolineEnabled = !0),
                      (this._schedule = function (t) {
                        setTimeout(t, 0);
                      }));
                  }),
                  (a.prototype.haveItemsQueued = function () {
                    return this._normalQueue.length() > 0;
                  }),
                  (a.prototype.throwLater = function (t, e) {
                    if (
                      (1 === arguments.length &&
                        ((e = t),
                        (t = function () {
                          throw e;
                        })),
                      "undefined" != typeof setTimeout)
                    )
                      setTimeout(function () {
                        t(e);
                      }, 0);
                    else
                      try {
                        this._schedule(function () {
                          t(e);
                        });
                      } catch (t) {
                        throw new Error(
                          "No async scheduler available\n\n    See http://goo.gl/m3OTXk\n"
                        );
                      }
                  }),
                  s.hasDevTools
                    ? (i.isStatic &&
                        (i = function (t) {
                          setTimeout(t, 0);
                        }),
                      (a.prototype.invokeLater = function (t, e, r) {
                        this._trampolineEnabled
                          ? c.call(this, t, e, r)
                          : this._schedule(function () {
                              setTimeout(function () {
                                t.call(e, r);
                              }, 100);
                            });
                      }),
                      (a.prototype.invoke = function (t, e, r) {
                        this._trampolineEnabled
                          ? u.call(this, t, e, r)
                          : this._schedule(function () {
                              t.call(e, r);
                            });
                      }),
                      (a.prototype.settlePromises = function (t) {
                        this._trampolineEnabled
                          ? l.call(this, t)
                          : this._schedule(function () {
                              t._settlePromises();
                            });
                      }))
                    : ((a.prototype.invokeLater = c),
                      (a.prototype.invoke = u),
                      (a.prototype.settlePromises = l)),
                  (a.prototype.invokeFirst = function (t, e, r) {
                    this._normalQueue.unshift(t, e, r), this._queueTick();
                  }),
                  (a.prototype._drainQueue = function (t) {
                    for (; t.length() > 0; ) {
                      var e = t.shift();
                      if ("function" == typeof e) {
                        var r = t.shift(),
                          n = t.shift();
                        e.call(r, n);
                      } else e._settlePromises();
                    }
                  }),
                  (a.prototype._drainQueues = function () {
                    this._drainQueue(this._normalQueue),
                      this._reset(),
                      this._drainQueue(this._lateQueue);
                  }),
                  (a.prototype._queueTick = function () {
                    this._isTickUsed ||
                      ((this._isTickUsed = !0),
                      this._schedule(this.drainQueues));
                  }),
                  (a.prototype._reset = function () {
                    this._isTickUsed = !1;
                  }),
                  (e.exports = new a()),
                  (e.exports.firstLineError = n);
              },
              { "./queue.js": 28, "./schedule.js": 31, "./util.js": 38 },
            ],
            3: [
              function (t, e, r) {
                "use strict";
                e.exports = function (t, e, r) {
                  var n = function (t, e) {
                      this._reject(e);
                    },
                    i = function (t, e) {
                      (e.promiseRejectionQueued = !0),
                        e.bindingPromise._then(n, n, null, this, t);
                    },
                    o = function (t, e) {
                      this._isPending() && this._resolveCallback(e.target);
                    },
                    s = function (t, e) {
                      e.promiseRejectionQueued || this._reject(t);
                    };
                  (t.prototype.bind = function (n) {
                    var a = r(n),
                      c = new t(e);
                    c._propagateFrom(this, 1);
                    var u = this._target();
                    if ((c._setBoundTo(a), a instanceof t)) {
                      var l = {
                        promiseRejectionQueued: !1,
                        promise: c,
                        target: u,
                        bindingPromise: a,
                      };
                      u._then(e, i, c._progress, c, l),
                        a._then(o, s, c._progress, c, l);
                    } else c._resolveCallback(u);
                    return c;
                  }),
                    (t.prototype._setBoundTo = function (t) {
                      void 0 !== t
                        ? ((this._bitField = 131072 | this._bitField),
                          (this._boundTo = t))
                        : (this._bitField = -131073 & this._bitField);
                    }),
                    (t.prototype._isBound = function () {
                      return 131072 == (131072 & this._bitField);
                    }),
                    (t.bind = function (n, i) {
                      var o = r(n),
                        s = new t(e);
                      return (
                        s._setBoundTo(o),
                        o instanceof t
                          ? o._then(
                              function () {
                                s._resolveCallback(i);
                              },
                              s._reject,
                              s._progress,
                              s,
                              null
                            )
                          : s._resolveCallback(i),
                        s
                      );
                    });
                };
              },
              {},
            ],
            4: [
              function (t, e, r) {
                "use strict";
                var n;
                "undefined" != typeof Promise && (n = Promise);
                var i = t("./promise.js")();
                (i.noConflict = function () {
                  try {
                    Promise === i && (Promise = n);
                  } catch (t) {}
                  return i;
                }),
                  (e.exports = i);
              },
              { "./promise.js": 23 },
            ],
            5: [
              function (t, e, r) {
                "use strict";
                var n = Object.create;
                if (n) {
                  var i = n(null),
                    o = n(null);
                  i[" size"] = o[" size"] = 0;
                }
                e.exports = function (e) {
                  var r = t("./util.js"),
                    n = r.canEvaluate;
                  function i(t) {
                    var n = this.pop(),
                      i = (function (t, n) {
                        var i;
                        if ((null != t && (i = t[n]), "function" != typeof i)) {
                          var o =
                            "Object " +
                            r.classString(t) +
                            " has no method '" +
                            r.toString(n) +
                            "'";
                          throw new e.TypeError(o);
                        }
                        return i;
                      })(t, n);
                    return i.apply(t, this);
                  }
                  function o(t) {
                    return t[this];
                  }
                  function s(t) {
                    var e = +this;
                    return e < 0 && (e = Math.max(0, e + t.length)), t[e];
                  }
                  r.isIdentifier,
                    (e.prototype.call = function (t) {
                      for (
                        var e = arguments.length, r = new Array(e - 1), n = 1;
                        n < e;
                        ++n
                      )
                        r[n - 1] = arguments[n];
                      return (
                        r.push(t), this._then(i, void 0, void 0, r, void 0)
                      );
                    }),
                    (e.prototype.get = function (t) {
                      var e,
                        r = "number" == typeof t;
                      if (r) e = s;
                      else if (n) {
                        var i = (void 0)(t);
                        e = null !== i ? i : o;
                      } else e = o;
                      return this._then(e, void 0, void 0, t, void 0);
                    });
                };
              },
              { "./util.js": 38 },
            ],
            6: [
              function (t, e, r) {
                "use strict";
                e.exports = function (e) {
                  var r = t("./errors.js"),
                    n = t("./async.js"),
                    i = r.CancellationError;
                  (e.prototype._cancel = function (t) {
                    if (!this.isCancellable()) return this;
                    for (
                      var e, r = this;
                      void 0 !== (e = r._cancellationParent) &&
                      e.isCancellable();

                    )
                      r = e;
                    this._unsetCancellable(),
                      r._target()._rejectCallback(t, !1, !0);
                  }),
                    (e.prototype.cancel = function (t) {
                      return this.isCancellable()
                        ? (void 0 === t && (t = new i()),
                          n.invokeLater(this._cancel, this, t),
                          this)
                        : this;
                    }),
                    (e.prototype.cancellable = function () {
                      return this._cancellable()
                        ? this
                        : (n.enableTrampoline(),
                          this._setCancellable(),
                          (this._cancellationParent = void 0),
                          this);
                    }),
                    (e.prototype.uncancellable = function () {
                      var t = this.then();
                      return t._unsetCancellable(), t;
                    }),
                    (e.prototype.fork = function (t, e, r) {
                      var n = this._then(t, e, r, void 0, void 0);
                      return (
                        n._setCancellable(), (n._cancellationParent = void 0), n
                      );
                    });
                };
              },
              { "./async.js": 2, "./errors.js": 13 },
            ],
            7: [
              function (t, r, n) {
                "use strict";
                r.exports = function () {
                  var r,
                    n = t("./async.js"),
                    i = t("./util.js"),
                    o =
                      /[\\\/]bluebird[\\\/]js[\\\/](main|debug|zalgo|instrumented)/,
                    s = null,
                    a = null,
                    c = !1;
                  function u(t) {
                    this._parent = t;
                    var e = (this._length = 1 + (void 0 === t ? 0 : t._length));
                    g(this, u), e > 32 && this.uncycle();
                  }
                  function l(t) {
                    for (var e = [], r = 0; r < t.length; ++r) {
                      var n = t[r],
                        i = s.test(n) || "    (No stack trace)" === n,
                        o = i && h(n);
                      i &&
                        !o &&
                        (c && " " !== n.charAt(0) && (n = "    " + n),
                        e.push(n));
                    }
                    return e;
                  }
                  function p(t) {
                    var e;
                    if ("function" == typeof t)
                      e = "[function " + (t.name || "anonymous") + "]";
                    else {
                      if (
                        ((e = t.toString()),
                        /\[object [a-zA-Z0-9$_]+\]/.test(e))
                      )
                        try {
                          var r = JSON.stringify(t);
                          e = r;
                        } catch (t) {}
                      0 === e.length && (e = "(empty array)");
                    }
                    return (
                      "(<" +
                      (function (t) {
                        return t.length < 41 ? t : t.substr(0, 38) + "...";
                      })(e) +
                      ">, no stack trace)"
                    );
                  }
                  i.inherits(u, Error),
                    (u.prototype.uncycle = function () {
                      var t = this._length;
                      if (!(t < 2)) {
                        for (
                          var e = [], r = {}, n = 0, i = this;
                          void 0 !== i;
                          ++n
                        )
                          e.push(i), (i = i._parent);
                        for (var n = (t = this._length = n) - 1; n >= 0; --n) {
                          var o = e[n].stack;
                          void 0 === r[o] && (r[o] = n);
                        }
                        for (var n = 0; n < t; ++n) {
                          var s = e[n].stack,
                            a = r[s];
                          if (void 0 !== a && a !== n) {
                            a > 0 &&
                              ((e[a - 1]._parent = void 0),
                              (e[a - 1]._length = 1)),
                              (e[n]._parent = void 0),
                              (e[n]._length = 1);
                            var c = n > 0 ? e[n - 1] : this;
                            a < t - 1
                              ? ((c._parent = e[a + 1]),
                                c._parent.uncycle(),
                                (c._length = c._parent._length + 1))
                              : ((c._parent = void 0), (c._length = 1));
                            for (var u = c._length + 1, l = n - 2; l >= 0; --l)
                              (e[l]._length = u), u++;
                            return;
                          }
                        }
                      }
                    }),
                    (u.prototype.parent = function () {
                      return this._parent;
                    }),
                    (u.prototype.hasParent = function () {
                      return void 0 !== this._parent;
                    }),
                    (u.prototype.attachExtraTrace = function (t) {
                      if (!t.__stackCleaned__) {
                        this.uncycle();
                        for (
                          var e = u.parseStackAndMessage(t),
                            r = e.message,
                            n = [e.stack],
                            o = this;
                          void 0 !== o;

                        )
                          n.push(l(o.stack.split("\n"))), (o = o._parent);
                        !(function (t) {
                          for (var e = t[0], r = 1; r < t.length; ++r) {
                            for (
                              var n = t[r],
                                i = e.length - 1,
                                o = e[i],
                                s = -1,
                                a = n.length - 1;
                              a >= 0;
                              --a
                            )
                              if (n[a] === o) {
                                s = a;
                                break;
                              }
                            for (var a = s; a >= 0; --a) {
                              var c = n[a];
                              if (e[i] !== c) break;
                              e.pop(), i--;
                            }
                            e = n;
                          }
                        })(n),
                          (function (t) {
                            for (var e = 0; e < t.length; ++e)
                              (0 === t[e].length ||
                                (e + 1 < t.length &&
                                  t[e][0] === t[e + 1][0])) &&
                                (t.splice(e, 1), e--);
                          })(n),
                          i.notEnumerableProp(
                            t,
                            "stack",
                            (function (t, e) {
                              for (var r = 0; r < e.length - 1; ++r)
                                e[r].push("From previous event:"),
                                  (e[r] = e[r].join("\n"));
                              return (
                                r < e.length && (e[r] = e[r].join("\n")),
                                t + "\n" + e.join("\n")
                              );
                            })(r, n)
                          ),
                          i.notEnumerableProp(t, "__stackCleaned__", !0);
                      }
                    }),
                    (u.parseStackAndMessage = function (t) {
                      var e = t.stack,
                        r = t.toString();
                      return (
                        (e =
                          "string" == typeof e && e.length > 0
                            ? (function (t) {
                                for (
                                  var e = t.stack
                                      .replace(/\s+$/g, "")
                                      .split("\n"),
                                    r = 0;
                                  r < e.length;
                                  ++r
                                ) {
                                  var n = e[r];
                                  if ("    (No stack trace)" === n || s.test(n))
                                    break;
                                }
                                return r > 0 && (e = e.slice(r)), e;
                              })(t)
                            : ["    (No stack trace)"]),
                        { message: r, stack: l(e) }
                      );
                    }),
                    (u.formatAndLogError = function (t, e) {
                      if ("undefined" != typeof console) {
                        var n;
                        if ("object" == typeof t || "function" == typeof t) {
                          var i = t.stack;
                          n = e + a(i, t);
                        } else n = e + String(t);
                        "function" == typeof r
                          ? r(n)
                          : ("function" != typeof console.log &&
                              "object" != typeof console.log) ||
                            console.log(n);
                      }
                    }),
                    (u.unhandledRejection = function (t) {
                      u.formatAndLogError(
                        t,
                        "^--- With additional stack trace: "
                      );
                    }),
                    (u.isSupported = function () {
                      return "function" == typeof g;
                    }),
                    (u.fireRejectionEvent = function (t, e, r, i) {
                      var o = !1;
                      try {
                        "function" == typeof e &&
                          ((o = !0), "rejectionHandled" === t ? e(i) : e(r, i));
                      } catch (t) {
                        n.throwLater(t);
                      }
                      var s = !1;
                      try {
                        s = v(t, r, i);
                      } catch (t) {
                        (s = !0), n.throwLater(t);
                      }
                      var a = !1;
                      if (_)
                        try {
                          a = _(t.toLowerCase(), { reason: r, promise: i });
                        } catch (t) {
                          (a = !0), n.throwLater(t);
                        }
                      s ||
                        o ||
                        a ||
                        "unhandledRejection" !== t ||
                        u.formatAndLogError(r, "Unhandled rejection ");
                    });
                  var h = function () {
                      return !1;
                    },
                    f = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
                  function d(t) {
                    var e = t.match(f);
                    if (e) return { fileName: e[1], line: parseInt(e[2], 10) };
                  }
                  u.setBounds = function (t, e) {
                    if (u.isSupported()) {
                      for (
                        var r,
                          n,
                          i = t.stack.split("\n"),
                          s = e.stack.split("\n"),
                          a = -1,
                          c = -1,
                          l = 0;
                        l < i.length;
                        ++l
                      ) {
                        var p = d(i[l]);
                        if (p) {
                          (r = p.fileName), (a = p.line);
                          break;
                        }
                      }
                      for (var l = 0; l < s.length; ++l) {
                        var p = d(s[l]);
                        if (p) {
                          (n = p.fileName), (c = p.line);
                          break;
                        }
                      }
                      a < 0 ||
                        c < 0 ||
                        !r ||
                        !n ||
                        r !== n ||
                        a >= c ||
                        (h = function (t) {
                          if (o.test(t)) return !0;
                          var e = d(t);
                          return !!(
                            e &&
                            e.fileName === r &&
                            a <= e.line &&
                            e.line <= c
                          );
                        });
                    }
                  };
                  var _,
                    g = (function () {
                      var t = /^\s*at\s*/,
                        e = function (t, e) {
                          return "string" == typeof t
                            ? t
                            : void 0 !== e.name && void 0 !== e.message
                            ? e.toString()
                            : p(e);
                        };
                      if (
                        "number" == typeof Error.stackTraceLimit &&
                        "function" == typeof Error.captureStackTrace
                      ) {
                        (Error.stackTraceLimit = Error.stackTraceLimit + 6),
                          (s = t),
                          (a = e);
                        var r = Error.captureStackTrace;
                        return (
                          (h = function (t) {
                            return o.test(t);
                          }),
                          function (t, e) {
                            (Error.stackTraceLimit = Error.stackTraceLimit + 6),
                              r(t, e),
                              (Error.stackTraceLimit =
                                Error.stackTraceLimit - 6);
                          }
                        );
                      }
                      var n,
                        i = new Error();
                      if (
                        "string" == typeof i.stack &&
                        i.stack.split("\n")[0].indexOf("stackDetection@") >= 0
                      )
                        return (
                          (s = /@/),
                          (a = e),
                          (c = !0),
                          function (t) {
                            t.stack = new Error().stack;
                          }
                        );
                      try {
                        throw new Error();
                      } catch (t) {
                        n = "stack" in t;
                      }
                      return "stack" in i ||
                        !n ||
                        "number" != typeof Error.stackTraceLimit
                        ? ((a = function (t, e) {
                            return "string" == typeof t
                              ? t
                              : ("object" != typeof e &&
                                  "function" != typeof e) ||
                                void 0 === e.name ||
                                void 0 === e.message
                              ? p(e)
                              : e.toString();
                          }),
                          null)
                        : ((s = t),
                          (a = e),
                          function (t) {
                            Error.stackTraceLimit = Error.stackTraceLimit + 6;
                            try {
                              throw new Error();
                            } catch (e) {
                              t.stack = e.stack;
                            }
                            Error.stackTraceLimit = Error.stackTraceLimit - 6;
                          });
                    })(),
                    v = (function () {
                      if (i.isNode)
                        return function (t, r, n) {
                          return "rejectionHandled" === t
                            ? e.emit(t, n)
                            : e.emit(t, r, n);
                        };
                      var t = !1,
                        r = !0;
                      try {
                        var n = new self.CustomEvent("test");
                        t = n instanceof CustomEvent;
                      } catch (t) {}
                      if (!t)
                        try {
                          var o = document.createEvent("CustomEvent");
                          o.initCustomEvent("testingtheevent", !1, !0, {}),
                            self.dispatchEvent(o);
                        } catch (t) {
                          r = !1;
                        }
                      r &&
                        (_ = function (e, r) {
                          var n;
                          return (
                            t
                              ? (n = new self.CustomEvent(e, {
                                  detail: r,
                                  bubbles: !1,
                                  cancelable: !0,
                                }))
                              : self.dispatchEvent &&
                                (n =
                                  document.createEvent(
                                    "CustomEvent"
                                  )).initCustomEvent(e, !1, !0, r),
                            !!n && !self.dispatchEvent(n)
                          );
                        });
                      var s = {};
                      return (
                        (s.unhandledRejection =
                          "onunhandledRejection".toLowerCase()),
                        (s.rejectionHandled =
                          "onrejectionHandled".toLowerCase()),
                        function (t, e, r) {
                          var n = s[t],
                            i = self[n];
                          return (
                            !!i &&
                            ("rejectionHandled" === t
                              ? i.call(self, r)
                              : i.call(self, e, r),
                            !0)
                          );
                        }
                      );
                    })();
                  return (
                    "undefined" != typeof console &&
                      void 0 !== console.warn &&
                      ((r = function (t) {
                        console.warn(t);
                      }),
                      i.isNode && e.stderr.isTTY
                        ? (r = function (t) {
                            e.stderr.write("[31m" + t + "[39m\n");
                          })
                        : i.isNode ||
                          "string" != typeof new Error().stack ||
                          (r = function (t) {
                            console.warn("%c" + t, "color: red");
                          })),
                    u
                  );
                };
              },
              { "./async.js": 2, "./util.js": 38 },
            ],
            8: [
              function (t, e, r) {
                "use strict";
                e.exports = function (e) {
                  var r = t("./util.js"),
                    n = t("./errors.js"),
                    i = r.tryCatch,
                    o = r.errorObj,
                    s = t("./es5.js").keys,
                    a = n.TypeError;
                  function c(t, e, r) {
                    (this._instances = t),
                      (this._callback = e),
                      (this._promise = r);
                  }
                  function u(t, e) {
                    var r = {},
                      n = i(t).call(r, e);
                    if (n === o) return n;
                    var c = s(r);
                    return c.length
                      ? ((o.e = new a(
                          "Catch filter must inherit from Error or be a simple predicate function\n\n    See http://goo.gl/o84o68\n"
                        )),
                        o)
                      : n;
                  }
                  return (
                    (c.prototype.doFilter = function (t) {
                      for (
                        var r = this._callback,
                          n = this._promise,
                          s = n._boundValue(),
                          a = 0,
                          c = this._instances.length;
                        a < c;
                        ++a
                      ) {
                        var l = this._instances[a],
                          p =
                            l === Error ||
                            (null != l && l.prototype instanceof Error);
                        if (p && t instanceof l) {
                          var h = i(r).call(s, t);
                          return h === o ? ((e.e = h.e), e) : h;
                        }
                        if ("function" == typeof l && !p) {
                          var f = u(l, t);
                          if (f === o) {
                            t = o.e;
                            break;
                          }
                          if (f) {
                            var h = i(r).call(s, t);
                            return h === o ? ((e.e = h.e), e) : h;
                          }
                        }
                      }
                      return (e.e = t), e;
                    }),
                    c
                  );
                };
              },
              { "./errors.js": 13, "./es5.js": 14, "./util.js": 38 },
            ],
            9: [
              function (t, e, r) {
                "use strict";
                e.exports = function (t, e, r) {
                  var n = [];
                  function i() {
                    this._trace = new e(o());
                  }
                  function o() {
                    var t = n.length - 1;
                    if (t >= 0) return n[t];
                  }
                  return (
                    (i.prototype._pushContext = function () {
                      r() && void 0 !== this._trace && n.push(this._trace);
                    }),
                    (i.prototype._popContext = function () {
                      r() && void 0 !== this._trace && n.pop();
                    }),
                    (t.prototype._peekContext = o),
                    (t.prototype._pushContext = i.prototype._pushContext),
                    (t.prototype._popContext = i.prototype._popContext),
                    function () {
                      if (r()) return new i();
                    }
                  );
                };
              },
              {},
            ],
            10: [
              function (t, e, r) {
                "use strict";
                e.exports = function (e, r) {
                  var n,
                    i,
                    o = e._getDomain,
                    s = t("./async.js"),
                    a = t("./errors.js").Warning,
                    c = t("./util.js"),
                    u = c.canAttachTrace,
                    l =
                      c.isNode &&
                      (!!Object({
                        NODE_ENV: "production",
                        STACK_ENV: "staging",
                        TEST: void 0,
                        LOG: "off",
                        account: "https://staging-account.goguardian.com",
                        gatekeeper: "https://staging-gatekeeper.goguardian.com",
                        scribe:
                          "https://staging-agreements.goguardian.com/#/agree",
                        gandalf: "https://staging-gandalf.goguardian.com",
                        floorWarden:
                          "https://staging-floor-warden.goguardian.com",
                        magicHat: "https://staging-signup.goguardian.com",
                        adminV1: "https://dev.goguardian.com",
                        dashApi: "https://dev.goguardian.com",
                        cortana: "https://staging-cortana.goguardian.com",
                        masterchief: "https://staging-admin.goguardian.com",
                        presenter:
                          "https://x3-presenter-staging.goguardian.com",
                        x3Ui: "https://smart-alerts-staging.goguardian.com",
                        x3Predictor:
                          "https://x3-predictor-staging.goguardian.com",
                        policyMaker:
                          "https://x3-policy-maker-staging.goguardian.com",
                        reporter: "https://x3-reporter-staging.goguardian.com",
                        beaconFullpagePredictor:
                          "https://staging-beacon-fullpage-predictor.goguardian.com",
                        mlEndpoint: "https://stg-ml-endpoint.goguardian.com",
                        tivan: "https://staging-tivan.goguardian.com",
                        chalkboard: "https://chalkboard-stg.goguardian.com",
                        dunce: "https://staging-dunce.goguardian.com",
                        enroll: "https://staging-enroll.goguardian.com",
                        extScreenshots:
                          "https://staging-screenshots.goguardian.com",
                        inquisition:
                          "https://inquisition-staging.goguardian.com",
                        snapper: "https://snapper-stg.goguardian.com",
                        teacher: "https://staging-teacher.goguardian.com",
                        offTaskAlerts:
                          "https://taskiness-preprocessor-stg.goguardian.com",
                        scenesBlockPageUrl:
                          "https://staging-student.goguardian.com/teacher/blocked.html",
                        bigChune: "https://staging-big-go-chune.goguardian.com",
                        blessUp: "https://staging-director.goguardian.com",
                        fleetApi: "https://staging-fleet-api.goguardian.com",
                        fleetUi: "https://staging-fleet.goguardian.com",
                        extapi: "https://stg-go-ext-api.goguardian.com",
                        metrics: "https://staging-countvoncount.goguardian.com",
                        panther: "https://panther-stg.goguardian.com",
                        playButton:
                          "https://staging-play-button.goguardian.com",
                        present: "https://rollcall.goguardian.com",
                        quiddity: "https://quiddity-stg.goguardian.com",
                        shinkansen: "https://192.168.24.196",
                        snat: "https://staging-snat.goguardian.com",
                        waluigi: "https://staging-waluigi.goguardian.com",
                        kingsHand: "https://staging-kings-hand.goguardian.com",
                        throneRoom: "https://staging-manage.goguardian.com",
                        beaconUI: "https://staging-beacon.goguardian.com",
                        landing: "https://staging-www.goguardian.com",
                        static: "https://staging-static.goguardian.com",
                        merchant: "https://staging-merchant.goguardian.com",
                        shylock: "https://staging-shylock.goguardian.com",
                        harambe: "https://harambe.goguardian.com",
                        polyjuiceApi:
                          "https://staging-polyjuice-api.goguardian.com",
                        potatoApi:
                          "https://staging-potato-juice.goguardian.com",
                        supportApi: "https://support-api.goguardian.com",
                        supportDashboard:
                          "https://support-tools.goguardian.com",
                        theftRecoveryApi:
                          "https://staging-theft-recovery.goguardian.com",
                        courier: "",
                        checkup: "https://staging-checkup.goguardian.com",
                        experiments:
                          "https://experiments-api-stg.goguardian.com",
                      }).BLUEBIRD_DEBUG ||
                        !1);
                  return (
                    c.isNode &&
                      0 ==
                        Object({
                          NODE_ENV: "production",
                          STACK_ENV: "staging",
                          TEST: void 0,
                          LOG: "off",
                          account: "https://staging-account.goguardian.com",
                          gatekeeper:
                            "https://staging-gatekeeper.goguardian.com",
                          scribe:
                            "https://staging-agreements.goguardian.com/#/agree",
                          gandalf: "https://staging-gandalf.goguardian.com",
                          floorWarden:
                            "https://staging-floor-warden.goguardian.com",
                          magicHat: "https://staging-signup.goguardian.com",
                          adminV1: "https://dev.goguardian.com",
                          dashApi: "https://dev.goguardian.com",
                          cortana: "https://staging-cortana.goguardian.com",
                          masterchief: "https://staging-admin.goguardian.com",
                          presenter:
                            "https://x3-presenter-staging.goguardian.com",
                          x3Ui: "https://smart-alerts-staging.goguardian.com",
                          x3Predictor:
                            "https://x3-predictor-staging.goguardian.com",
                          policyMaker:
                            "https://x3-policy-maker-staging.goguardian.com",
                          reporter:
                            "https://x3-reporter-staging.goguardian.com",
                          beaconFullpagePredictor:
                            "https://staging-beacon-fullpage-predictor.goguardian.com",
                          mlEndpoint: "https://stg-ml-endpoint.goguardian.com",
                          tivan: "https://staging-tivan.goguardian.com",
                          chalkboard: "https://chalkboard-stg.goguardian.com",
                          dunce: "https://staging-dunce.goguardian.com",
                          enroll: "https://staging-enroll.goguardian.com",
                          extScreenshots:
                            "https://staging-screenshots.goguardian.com",
                          inquisition:
                            "https://inquisition-staging.goguardian.com",
                          snapper: "https://snapper-stg.goguardian.com",
                          teacher: "https://staging-teacher.goguardian.com",
                          offTaskAlerts:
                            "https://taskiness-preprocessor-stg.goguardian.com",
                          scenesBlockPageUrl:
                            "https://staging-student.goguardian.com/teacher/blocked.html",
                          bigChune:
                            "https://staging-big-go-chune.goguardian.com",
                          blessUp: "https://staging-director.goguardian.com",
                          fleetApi: "https://staging-fleet-api.goguardian.com",
                          fleetUi: "https://staging-fleet.goguardian.com",
                          extapi: "https://stg-go-ext-api.goguardian.com",
                          metrics:
                            "https://staging-countvoncount.goguardian.com",
                          panther: "https://panther-stg.goguardian.com",
                          playButton:
                            "https://staging-play-button.goguardian.com",
                          present: "https://rollcall.goguardian.com",
                          quiddity: "https://quiddity-stg.goguardian.com",
                          shinkansen: "https://192.168.24.196",
                          snat: "https://staging-snat.goguardian.com",
                          waluigi: "https://staging-waluigi.goguardian.com",
                          kingsHand:
                            "https://staging-kings-hand.goguardian.com",
                          throneRoom: "https://staging-manage.goguardian.com",
                          beaconUI: "https://staging-beacon.goguardian.com",
                          landing: "https://staging-www.goguardian.com",
                          static: "https://staging-static.goguardian.com",
                          merchant: "https://staging-merchant.goguardian.com",
                          shylock: "https://staging-shylock.goguardian.com",
                          harambe: "https://harambe.goguardian.com",
                          polyjuiceApi:
                            "https://staging-polyjuice-api.goguardian.com",
                          potatoApi:
                            "https://staging-potato-juice.goguardian.com",
                          supportApi: "https://support-api.goguardian.com",
                          supportDashboard:
                            "https://support-tools.goguardian.com",
                          theftRecoveryApi:
                            "https://staging-theft-recovery.goguardian.com",
                          courier: "",
                          checkup: "https://staging-checkup.goguardian.com",
                          experiments:
                            "https://experiments-api-stg.goguardian.com",
                        }).BLUEBIRD_DEBUG &&
                      (l = !1),
                    l && s.disableTrampolineIfNecessary(),
                    (e.prototype._ignoreRejections = function () {
                      this._unsetRejectionIsUnhandled(),
                        (this._bitField = 16777216 | this._bitField);
                    }),
                    (e.prototype._ensurePossibleRejectionHandled = function () {
                      0 == (16777216 & this._bitField) &&
                        (this._setRejectionIsUnhandled(),
                        s.invokeLater(
                          this._notifyUnhandledRejection,
                          this,
                          void 0
                        ));
                    }),
                    (e.prototype._notifyUnhandledRejectionIsHandled =
                      function () {
                        r.fireRejectionEvent(
                          "rejectionHandled",
                          n,
                          void 0,
                          this
                        );
                      }),
                    (e.prototype._notifyUnhandledRejection = function () {
                      if (this._isRejectionUnhandled()) {
                        var t =
                          this._getCarriedStackTrace() || this._settledValue;
                        this._setUnhandledRejectionIsNotified(),
                          r.fireRejectionEvent(
                            "unhandledRejection",
                            i,
                            t,
                            this
                          );
                      }
                    }),
                    (e.prototype._setUnhandledRejectionIsNotified =
                      function () {
                        this._bitField = 524288 | this._bitField;
                      }),
                    (e.prototype._unsetUnhandledRejectionIsNotified =
                      function () {
                        this._bitField = -524289 & this._bitField;
                      }),
                    (e.prototype._isUnhandledRejectionNotified = function () {
                      return (524288 & this._bitField) > 0;
                    }),
                    (e.prototype._setRejectionIsUnhandled = function () {
                      this._bitField = 2097152 | this._bitField;
                    }),
                    (e.prototype._unsetRejectionIsUnhandled = function () {
                      (this._bitField = -2097153 & this._bitField),
                        this._isUnhandledRejectionNotified() &&
                          (this._unsetUnhandledRejectionIsNotified(),
                          this._notifyUnhandledRejectionIsHandled());
                    }),
                    (e.prototype._isRejectionUnhandled = function () {
                      return (2097152 & this._bitField) > 0;
                    }),
                    (e.prototype._setCarriedStackTrace = function (t) {
                      (this._bitField = 1048576 | this._bitField),
                        (this._fulfillmentHandler0 = t);
                    }),
                    (e.prototype._isCarryingStackTrace = function () {
                      return (1048576 & this._bitField) > 0;
                    }),
                    (e.prototype._getCarriedStackTrace = function () {
                      return this._isCarryingStackTrace()
                        ? this._fulfillmentHandler0
                        : void 0;
                    }),
                    (e.prototype._captureStackTrace = function () {
                      return (
                        l && (this._trace = new r(this._peekContext())), this
                      );
                    }),
                    (e.prototype._attachExtraTrace = function (t, e) {
                      if (l && u(t)) {
                        var n = this._trace;
                        if (
                          (void 0 !== n && e && (n = n._parent), void 0 !== n)
                        )
                          n.attachExtraTrace(t);
                        else if (!t.__stackCleaned__) {
                          var i = r.parseStackAndMessage(t);
                          c.notEnumerableProp(
                            t,
                            "stack",
                            i.message + "\n" + i.stack.join("\n")
                          ),
                            c.notEnumerableProp(t, "__stackCleaned__", !0);
                        }
                      }
                    }),
                    (e.prototype._warn = function (t) {
                      var e = new a(t),
                        n = this._peekContext();
                      if (n) n.attachExtraTrace(e);
                      else {
                        var i = r.parseStackAndMessage(e);
                        e.stack = i.message + "\n" + i.stack.join("\n");
                      }
                      r.formatAndLogError(e, "");
                    }),
                    (e.onPossiblyUnhandledRejection = function (t) {
                      var e = o();
                      i =
                        "function" == typeof t
                          ? null === e
                            ? t
                            : e.bind(t)
                          : void 0;
                    }),
                    (e.onUnhandledRejectionHandled = function (t) {
                      var e = o();
                      n =
                        "function" == typeof t
                          ? null === e
                            ? t
                            : e.bind(t)
                          : void 0;
                    }),
                    (e.longStackTraces = function () {
                      if (s.haveItemsQueued() && !1 === l)
                        throw new Error(
                          "cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/DT1qyG\n"
                        );
                      (l = r.isSupported()) && s.disableTrampolineIfNecessary();
                    }),
                    (e.hasLongStackTraces = function () {
                      return l && r.isSupported();
                    }),
                    r.isSupported() ||
                      ((e.longStackTraces = function () {}), (l = !1)),
                    function () {
                      return l;
                    }
                  );
                };
              },
              { "./async.js": 2, "./errors.js": 13, "./util.js": 38 },
            ],
            11: [
              function (t, e, r) {
                "use strict";
                var n = t("./util.js"),
                  i = n.isPrimitive;
                e.exports = function (t) {
                  var e = function () {
                      return this;
                    },
                    r = function () {
                      throw this;
                    },
                    n = function () {},
                    o = function () {
                      throw void 0;
                    },
                    s = function (t, e) {
                      return 1 === e
                        ? function () {
                            throw t;
                          }
                        : 2 === e
                        ? function () {
                            return t;
                          }
                        : void 0;
                    };
                  (t.prototype.return = t.prototype.thenReturn =
                    function (r) {
                      return void 0 === r
                        ? this.then(n)
                        : i(r)
                        ? this._then(s(r, 2), void 0, void 0, void 0, void 0)
                        : (r instanceof t && r._ignoreRejections(),
                          this._then(e, void 0, void 0, r, void 0));
                    }),
                    (t.prototype.throw = t.prototype.thenThrow =
                      function (t) {
                        return void 0 === t
                          ? this.then(o)
                          : i(t)
                          ? this._then(s(t, 1), void 0, void 0, void 0, void 0)
                          : this._then(r, void 0, void 0, t, void 0);
                      });
                };
              },
              { "./util.js": 38 },
            ],
            12: [
              function (t, e, r) {
                "use strict";
                e.exports = function (t, e) {
                  var r = t.reduce;
                  (t.prototype.each = function (t) {
                    return r(this, t, null, e);
                  }),
                    (t.each = function (t, n) {
                      return r(t, n, null, e);
                    });
                };
              },
              {},
            ],
            13: [
              function (t, e, r) {
                "use strict";
                var n,
                  i,
                  o = t("./es5.js"),
                  s = o.freeze,
                  a = t("./util.js"),
                  c = a.inherits,
                  u = a.notEnumerableProp;
                function l(t, e) {
                  function r(n) {
                    if (!(this instanceof r)) return new r(n);
                    u(this, "message", "string" == typeof n ? n : e),
                      u(this, "name", t),
                      Error.captureStackTrace
                        ? Error.captureStackTrace(this, this.constructor)
                        : Error.call(this);
                  }
                  return c(r, Error), r;
                }
                var p = l("Warning", "warning"),
                  h = l("CancellationError", "cancellation error"),
                  f = l("TimeoutError", "timeout error"),
                  d = l("AggregateError", "aggregate error");
                try {
                  (n = TypeError), (i = RangeError);
                } catch (t) {
                  (n = l("TypeError", "type error")),
                    (i = l("RangeError", "range error"));
                }
                for (
                  var _ =
                      "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(
                        " "
                      ),
                    g = 0;
                  g < _.length;
                  ++g
                )
                  "function" == typeof Array.prototype[_[g]] &&
                    (d.prototype[_[g]] = Array.prototype[_[g]]);
                o.defineProperty(d.prototype, "length", {
                  value: 0,
                  configurable: !1,
                  writable: !0,
                  enumerable: !0,
                }),
                  (d.prototype.isOperational = !0);
                var v = 0;
                function y(t) {
                  if (!(this instanceof y)) return new y(t);
                  u(this, "name", "OperationalError"),
                    u(this, "message", t),
                    (this.cause = t),
                    (this.isOperational = !0),
                    t instanceof Error
                      ? (u(this, "message", t.message),
                        u(this, "stack", t.stack))
                      : Error.captureStackTrace &&
                        Error.captureStackTrace(this, this.constructor);
                }
                (d.prototype.toString = function () {
                  var t = Array(4 * v + 1).join(" "),
                    e = "\n" + t + "AggregateError of:\n";
                  v++, (t = Array(4 * v + 1).join(" "));
                  for (var r = 0; r < this.length; ++r) {
                    for (
                      var n =
                          this[r] === this
                            ? "[Circular AggregateError]"
                            : this[r] + "",
                        i = n.split("\n"),
                        o = 0;
                      o < i.length;
                      ++o
                    )
                      i[o] = t + i[o];
                    (n = i.join("\n")), (e += n + "\n");
                  }
                  return v--, e;
                }),
                  c(y, Error);
                var m = Error.__BluebirdErrorTypes__;
                m ||
                  ((m = s({
                    CancellationError: h,
                    TimeoutError: f,
                    OperationalError: y,
                    RejectionError: y,
                    AggregateError: d,
                  })),
                  u(Error, "__BluebirdErrorTypes__", m)),
                  (e.exports = {
                    Error: Error,
                    TypeError: n,
                    RangeError: i,
                    CancellationError: m.CancellationError,
                    OperationalError: m.OperationalError,
                    TimeoutError: m.TimeoutError,
                    AggregateError: m.AggregateError,
                    Warning: p,
                  });
              },
              { "./es5.js": 14, "./util.js": 38 },
            ],
            14: [
              function (t, e, r) {
                var n = (function () {
                  "use strict";
                  return void 0 === this;
                })();
                if (n)
                  e.exports = {
                    freeze: Object.freeze,
                    defineProperty: Object.defineProperty,
                    getDescriptor: Object.getOwnPropertyDescriptor,
                    keys: Object.keys,
                    names: Object.getOwnPropertyNames,
                    getPrototypeOf: Object.getPrototypeOf,
                    isArray: Array.isArray,
                    isES5: n,
                    propertyIsWritable: function (t, e) {
                      var r = Object.getOwnPropertyDescriptor(t, e);
                      return !(r && !r.writable && !r.set);
                    },
                  };
                else {
                  var i = {}.hasOwnProperty,
                    o = {}.toString,
                    s = {}.constructor.prototype,
                    a = function (t) {
                      var e = [];
                      for (var r in t) i.call(t, r) && e.push(r);
                      return e;
                    };
                  e.exports = {
                    isArray: function (t) {
                      try {
                        return "[object Array]" === o.call(t);
                      } catch (t) {
                        return !1;
                      }
                    },
                    keys: a,
                    names: a,
                    defineProperty: function (t, e, r) {
                      return (t[e] = r.value), t;
                    },
                    getDescriptor: function (t, e) {
                      return { value: t[e] };
                    },
                    freeze: function (t) {
                      return t;
                    },
                    getPrototypeOf: function (t) {
                      try {
                        return Object(t).constructor.prototype;
                      } catch (t) {
                        return s;
                      }
                    },
                    isES5: n,
                    propertyIsWritable: function () {
                      return !0;
                    },
                  };
                }
              },
              {},
            ],
            15: [
              function (t, e, r) {
                "use strict";
                e.exports = function (t, e) {
                  var r = t.map;
                  (t.prototype.filter = function (t, n) {
                    return r(this, t, n, e);
                  }),
                    (t.filter = function (t, n, i) {
                      return r(t, n, i, e);
                    });
                };
              },
              {},
            ],
            16: [
              function (t, e, r) {
                "use strict";
                e.exports = function (e, r, n) {
                  var i = t("./util.js"),
                    o = i.isPrimitive,
                    s = i.thrower;
                  function a() {
                    return this;
                  }
                  function c() {
                    throw this;
                  }
                  function u(t, e, r) {
                    var n, i;
                    return (
                      (n = o(e)
                        ? r
                          ? ((i = e),
                            function () {
                              return i;
                            })
                          : (function (t) {
                              return function () {
                                throw t;
                              };
                            })(e)
                        : r
                        ? a
                        : c),
                      t._then(n, s, void 0, e, void 0)
                    );
                  }
                  function l(t) {
                    var i = this.promise,
                      o = this.handler,
                      s = i._isBound() ? o.call(i._boundValue()) : o();
                    if (void 0 !== s) {
                      var a = n(s, i);
                      if (a instanceof e)
                        return u((a = a._target()), t, i.isFulfilled());
                    }
                    return i.isRejected() ? ((r.e = t), r) : t;
                  }
                  function p(t) {
                    var r = this.promise,
                      i = this.handler,
                      o = r._isBound() ? i.call(r._boundValue(), t) : i(t);
                    if (void 0 !== o) {
                      var s = n(o, r);
                      if (s instanceof e) return u((s = s._target()), t, !0);
                    }
                    return t;
                  }
                  (e.prototype._passThroughHandler = function (t, e) {
                    if ("function" != typeof t) return this.then();
                    var r = { promise: this, handler: t };
                    return this._then(
                      e ? l : p,
                      e ? l : void 0,
                      void 0,
                      r,
                      void 0
                    );
                  }),
                    (e.prototype.lastly = e.prototype.finally =
                      function (t) {
                        return this._passThroughHandler(t, !0);
                      }),
                    (e.prototype.tap = function (t) {
                      return this._passThroughHandler(t, !1);
                    });
                };
              },
              { "./util.js": 38 },
            ],
            17: [
              function (t, e, r) {
                "use strict";
                e.exports = function (e, r, n, i) {
                  var o = t("./errors.js"),
                    s = o.TypeError,
                    a = t("./util.js"),
                    c = a.errorObj,
                    u = a.tryCatch,
                    l = [];
                  function p(t, r, i, o) {
                    var s = (this._promise = new e(n));
                    s._captureStackTrace(),
                      (this._stack = o),
                      (this._generatorFunction = t),
                      (this._receiver = r),
                      (this._generator = void 0),
                      (this._yieldHandlers =
                        "function" == typeof i ? [i].concat(l) : l);
                  }
                  (p.prototype.promise = function () {
                    return this._promise;
                  }),
                    (p.prototype._run = function () {
                      (this._generator = this._generatorFunction.call(
                        this._receiver
                      )),
                        (this._receiver = this._generatorFunction = void 0),
                        this._next(void 0);
                    }),
                    (p.prototype._continue = function (t) {
                      if (t === c)
                        return this._promise._rejectCallback(t.e, !1, !0);
                      var r = t.value;
                      if (!0 === t.done) this._promise._resolveCallback(r);
                      else {
                        var n = i(r, this._promise);
                        if (
                          !(n instanceof e) &&
                          null ===
                            (n = (function (t, r, n) {
                              for (var o = 0; o < r.length; ++o) {
                                n._pushContext();
                                var s = u(r[o])(t);
                                if ((n._popContext(), s === c)) {
                                  n._pushContext();
                                  var a = e.reject(c.e);
                                  return n._popContext(), a;
                                }
                                var l = i(s, n);
                                if (l instanceof e) return l;
                              }
                              return null;
                            })(n, this._yieldHandlers, this._promise))
                        )
                          return void this._throw(
                            new s(
                              "A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/4Y4pDk\n\n".replace(
                                "%s",
                                r
                              ) +
                                "From coroutine:\n" +
                                this._stack.split("\n").slice(1, -7).join("\n")
                            )
                          );
                        n._then(this._next, this._throw, void 0, this, null);
                      }
                    }),
                    (p.prototype._throw = function (t) {
                      this._promise._attachExtraTrace(t),
                        this._promise._pushContext();
                      var e = u(this._generator.throw).call(this._generator, t);
                      this._promise._popContext(), this._continue(e);
                    }),
                    (p.prototype._next = function (t) {
                      this._promise._pushContext();
                      var e = u(this._generator.next).call(this._generator, t);
                      this._promise._popContext(), this._continue(e);
                    }),
                    (e.coroutine = function (t, e) {
                      if ("function" != typeof t)
                        throw new s(
                          "generatorFunction must be a function\n\n    See http://goo.gl/6Vqhm0\n"
                        );
                      var r = Object(e).yieldHandler,
                        n = p,
                        i = new Error().stack;
                      return function () {
                        var e = t.apply(this, arguments),
                          o = new n(void 0, void 0, r, i);
                        return (o._generator = e), o._next(void 0), o.promise();
                      };
                    }),
                    (e.coroutine.addYieldHandler = function (t) {
                      if ("function" != typeof t)
                        throw new s(
                          "fn must be a function\n\n    See http://goo.gl/916lJJ\n"
                        );
                      l.push(t);
                    }),
                    (e.spawn = function (t) {
                      if ("function" != typeof t)
                        return r(
                          "generatorFunction must be a function\n\n    See http://goo.gl/6Vqhm0\n"
                        );
                      var n = new p(t, this),
                        i = n.promise();
                      return n._run(e.spawn), i;
                    });
                };
              },
              { "./errors.js": 13, "./util.js": 38 },
            ],
            18: [
              function (t, e, r) {
                "use strict";
                e.exports = function (e, r, n, i) {
                  var o = t("./util.js");
                  o.canEvaluate,
                    o.tryCatch,
                    o.errorObj,
                    (e.join = function () {
                      var t,
                        e = arguments.length - 1;
                      e > 0 &&
                        "function" == typeof arguments[e] &&
                        (t = arguments[e]);
                      for (
                        var n = arguments.length, i = new Array(n), o = 0;
                        o < n;
                        ++o
                      )
                        i[o] = arguments[o];
                      t && i.pop();
                      var s = new r(i).promise();
                      return void 0 !== t ? s.spread(t) : s;
                    });
                };
              },
              { "./util.js": 38 },
            ],
            19: [
              function (t, e, r) {
                "use strict";
                e.exports = function (e, r, n, i, o) {
                  var s = e._getDomain,
                    a = t("./async.js"),
                    c = t("./util.js"),
                    u = c.tryCatch,
                    l = c.errorObj,
                    p = {},
                    h = [];
                  function f(t, e, r, n) {
                    this.constructor$(t), this._promise._captureStackTrace();
                    var i = s();
                    (this._callback = null === i ? e : i.bind(e)),
                      (this._preservedValues =
                        n === o ? new Array(this.length()) : null),
                      (this._limit = r),
                      (this._inFlight = 0),
                      (this._queue = r >= 1 ? [] : h),
                      a.invoke(d, this, void 0);
                  }
                  function d() {
                    this._init$(void 0, -2);
                  }
                  function _(t, e, r, n) {
                    var i =
                      "object" == typeof r && null !== r ? r.concurrency : 0;
                    return (
                      (i =
                        "number" == typeof i && isFinite(i) && i >= 1 ? i : 0),
                      new f(t, e, i, n)
                    );
                  }
                  c.inherits(f, r),
                    (f.prototype._init = function () {}),
                    (f.prototype._promiseFulfilled = function (t, r) {
                      var n = this._values,
                        o = this.length(),
                        s = this._preservedValues,
                        a = this._limit;
                      if (n[r] === p) {
                        if (
                          ((n[r] = t),
                          a >= 1 &&
                            (this._inFlight--,
                            this._drainQueue(),
                            this._isResolved()))
                        )
                          return;
                      } else {
                        if (a >= 1 && this._inFlight >= a)
                          return (n[r] = t), void this._queue.push(r);
                        null !== s && (s[r] = t);
                        var c = this._callback,
                          h = this._promise._boundValue();
                        this._promise._pushContext();
                        var f = u(c).call(h, t, r, o);
                        if ((this._promise._popContext(), f === l))
                          return this._reject(f.e);
                        var d = i(f, this._promise);
                        if (d instanceof e) {
                          if ((d = d._target())._isPending())
                            return (
                              a >= 1 && this._inFlight++,
                              (n[r] = p),
                              d._proxyPromiseArray(this, r)
                            );
                          if (!d._isFulfilled())
                            return this._reject(d._reason());
                          f = d._value();
                        }
                        n[r] = f;
                      }
                      var _ = ++this._totalResolved;
                      _ >= o &&
                        (null !== s ? this._filter(n, s) : this._resolve(n));
                    }),
                    (f.prototype._drainQueue = function () {
                      for (
                        var t = this._queue, e = this._limit, r = this._values;
                        t.length > 0 && this._inFlight < e;

                      ) {
                        if (this._isResolved()) return;
                        var n = t.pop();
                        this._promiseFulfilled(r[n], n);
                      }
                    }),
                    (f.prototype._filter = function (t, e) {
                      for (
                        var r = e.length, n = new Array(r), i = 0, o = 0;
                        o < r;
                        ++o
                      )
                        t[o] && (n[i++] = e[o]);
                      (n.length = i), this._resolve(n);
                    }),
                    (f.prototype.preservedValues = function () {
                      return this._preservedValues;
                    }),
                    (e.prototype.map = function (t, e) {
                      return "function" != typeof t
                        ? n(
                            "fn must be a function\n\n    See http://goo.gl/916lJJ\n"
                          )
                        : _(this, t, e, null).promise();
                    }),
                    (e.map = function (t, e, r, i) {
                      return "function" != typeof e
                        ? n(
                            "fn must be a function\n\n    See http://goo.gl/916lJJ\n"
                          )
                        : _(t, e, r, i).promise();
                    });
                };
              },
              { "./async.js": 2, "./util.js": 38 },
            ],
            20: [
              function (t, e, r) {
                "use strict";
                e.exports = function (e, r, n, i) {
                  var o = t("./util.js"),
                    s = o.tryCatch;
                  (e.method = function (t) {
                    if ("function" != typeof t)
                      throw new e.TypeError(
                        "fn must be a function\n\n    See http://goo.gl/916lJJ\n"
                      );
                    return function () {
                      var n = new e(r);
                      n._captureStackTrace(), n._pushContext();
                      var i = s(t).apply(this, arguments);
                      return n._popContext(), n._resolveFromSyncValue(i), n;
                    };
                  }),
                    (e.attempt = e.try =
                      function (t, n, a) {
                        if ("function" != typeof t)
                          return i(
                            "fn must be a function\n\n    See http://goo.gl/916lJJ\n"
                          );
                        var c = new e(r);
                        c._captureStackTrace(), c._pushContext();
                        var u = o.isArray(n)
                          ? s(t).apply(a, n)
                          : s(t).call(a, n);
                        return c._popContext(), c._resolveFromSyncValue(u), c;
                      }),
                    (e.prototype._resolveFromSyncValue = function (t) {
                      t === o.errorObj
                        ? this._rejectCallback(t.e, !1, !0)
                        : this._resolveCallback(t, !0);
                    });
                };
              },
              { "./util.js": 38 },
            ],
            21: [
              function (t, e, r) {
                "use strict";
                e.exports = function (e) {
                  var r = t("./util.js"),
                    n = t("./async.js"),
                    i = r.tryCatch,
                    o = r.errorObj;
                  function s(t, e) {
                    if (!r.isArray(t)) return a.call(this, t, e);
                    var s = i(e).apply(this._boundValue(), [null].concat(t));
                    s === o && n.throwLater(s.e);
                  }
                  function a(t, e) {
                    var r = this._boundValue(),
                      s =
                        void 0 === t
                          ? i(e).call(r, null)
                          : i(e).call(r, null, t);
                    s === o && n.throwLater(s.e);
                  }
                  function c(t, e) {
                    if (!t) {
                      var r = this._target(),
                        s = r._getCarriedStackTrace();
                      (s.cause = t), (t = s);
                    }
                    var a = i(e).call(this._boundValue(), t);
                    a === o && n.throwLater(a.e);
                  }
                  e.prototype.asCallback = e.prototype.nodeify = function (
                    t,
                    e
                  ) {
                    if ("function" == typeof t) {
                      var r = a;
                      void 0 !== e && Object(e).spread && (r = s),
                        this._then(r, c, void 0, this, t);
                    }
                    return this;
                  };
                };
              },
              { "./async.js": 2, "./util.js": 38 },
            ],
            22: [
              function (t, e, r) {
                "use strict";
                e.exports = function (e, r) {
                  var n = t("./util.js"),
                    i = t("./async.js"),
                    o = n.tryCatch,
                    s = n.errorObj;
                  (e.prototype.progressed = function (t) {
                    return this._then(void 0, void 0, t, void 0, void 0);
                  }),
                    (e.prototype._progress = function (t) {
                      this._isFollowingOrFulfilledOrRejected() ||
                        this._target()._progressUnchecked(t);
                    }),
                    (e.prototype._progressHandlerAt = function (t) {
                      return 0 === t
                        ? this._progressHandler0
                        : this[(t << 2) + t - 5 + 2];
                    }),
                    (e.prototype._doProgressWith = function (t) {
                      var r = t.value,
                        i = t.handler,
                        a = t.promise,
                        c = t.receiver,
                        u = o(i).call(c, r);
                      if (u === s) {
                        if (
                          null != u.e &&
                          "StopProgressPropagation" !== u.e.name
                        ) {
                          var l = n.canAttachTrace(u.e)
                            ? u.e
                            : new Error(n.toString(u.e));
                          a._attachExtraTrace(l), a._progress(u.e);
                        }
                      } else
                        u instanceof e
                          ? u._then(a._progress, null, null, a, void 0)
                          : a._progress(u);
                    }),
                    (e.prototype._progressUnchecked = function (t) {
                      for (
                        var n = this._length(), o = this._progress, s = 0;
                        s < n;
                        s++
                      ) {
                        var a = this._progressHandlerAt(s),
                          c = this._promiseAt(s);
                        if (c instanceof e)
                          "function" == typeof a
                            ? i.invoke(this._doProgressWith, this, {
                                handler: a,
                                promise: c,
                                receiver: this._receiverAt(s),
                                value: t,
                              })
                            : i.invoke(o, c, t);
                        else {
                          var u = this._receiverAt(s);
                          "function" == typeof a
                            ? a.call(u, t, c)
                            : u instanceof r &&
                              !u._isResolved() &&
                              u._promiseProgressed(t, c);
                        }
                      }
                    });
                };
              },
              { "./async.js": 2, "./util.js": 38 },
            ],
            23: [
              function (t, r, n) {
                "use strict";
                r.exports = function () {
                  var n,
                    i = function () {
                      return new p(
                        "circular promise resolution chain\n\n    See http://goo.gl/LhFpo0\n"
                      );
                    },
                    o = function () {
                      return new F.PromiseInspection(this._target());
                    },
                    s = function (t) {
                      return F.reject(new p(t));
                    },
                    a = t("./util.js");
                  (n = a.isNode
                    ? function () {
                        var t = e.domain;
                        return void 0 === t && (t = null), t;
                      }
                    : function () {
                        return null;
                      }),
                    a.notEnumerableProp(F, "_getDomain", n);
                  var c = {},
                    u = t("./async.js"),
                    l = t("./errors.js"),
                    p = (F.TypeError = l.TypeError);
                  (F.RangeError = l.RangeError),
                    (F.CancellationError = l.CancellationError),
                    (F.TimeoutError = l.TimeoutError),
                    (F.OperationalError = l.OperationalError),
                    (F.RejectionError = l.OperationalError),
                    (F.AggregateError = l.AggregateError);
                  var h = function () {},
                    f = {},
                    d = { e: null },
                    _ = t("./thenables.js")(F, h),
                    g = t("./promise_array.js")(F, h, _, s),
                    v = t("./captured_trace.js")(),
                    y = t("./debuggability.js")(F, v),
                    m = t("./context.js")(F, v, y),
                    j = t("./catch_filter.js")(d),
                    b = t("./promise_resolver.js"),
                    w = b._nodebackForPromise,
                    k = a.errorObj,
                    E = a.tryCatch;
                  function F(t) {
                    if ("function" != typeof t)
                      throw new p(
                        "the promise constructor requires a resolver function\n\n    See http://goo.gl/EC22Yn\n"
                      );
                    if (this.constructor !== F)
                      throw new p(
                        "the promise constructor cannot be invoked directly\n\n    See http://goo.gl/KsIlge\n"
                      );
                    (this._bitField = 0),
                      (this._fulfillmentHandler0 = void 0),
                      (this._rejectionHandler0 = void 0),
                      (this._progressHandler0 = void 0),
                      (this._promise0 = void 0),
                      (this._receiver0 = void 0),
                      (this._settledValue = void 0),
                      t !== h && this._resolveFromResolver(t);
                  }
                  function x(t) {
                    var e = new F(h);
                    (e._fulfillmentHandler0 = t),
                      (e._rejectionHandler0 = t),
                      (e._progressHandler0 = t),
                      (e._promise0 = t),
                      (e._receiver0 = t),
                      (e._settledValue = t);
                  }
                  return (
                    (F.prototype.toString = function () {
                      return "[object Promise]";
                    }),
                    (F.prototype.caught = F.prototype.catch =
                      function (t) {
                        var e = arguments.length;
                        if (e > 1) {
                          var r,
                            n = new Array(e - 1),
                            i = 0;
                          for (r = 0; r < e - 1; ++r) {
                            var o = arguments[r];
                            if ("function" != typeof o)
                              return F.reject(
                                new p(
                                  "Catch filter must inherit from Error or be a simple predicate function\n\n    See http://goo.gl/o84o68\n"
                                )
                              );
                            n[i++] = o;
                          }
                          (n.length = i), (t = arguments[r]);
                          var s = new j(n, t, this);
                          return this._then(
                            void 0,
                            s.doFilter,
                            void 0,
                            s,
                            void 0
                          );
                        }
                        return this._then(void 0, t, void 0, void 0, void 0);
                      }),
                    (F.prototype.reflect = function () {
                      return this._then(o, o, void 0, this, void 0);
                    }),
                    (F.prototype.then = function (t, e, r) {
                      if (
                        y() &&
                        arguments.length > 0 &&
                        "function" != typeof t &&
                        "function" != typeof e
                      ) {
                        var n =
                          ".then() only accepts functions but was passed: " +
                          a.classString(t);
                        arguments.length > 1 && (n += ", " + a.classString(e)),
                          this._warn(n);
                      }
                      return this._then(t, e, r, void 0, void 0);
                    }),
                    (F.prototype.done = function (t, e, r) {
                      var n = this._then(t, e, r, void 0, void 0);
                      n._setIsFinal();
                    }),
                    (F.prototype.spread = function (t, e) {
                      return this.all()._then(t, e, void 0, f, void 0);
                    }),
                    (F.prototype.isCancellable = function () {
                      return !this.isResolved() && this._cancellable();
                    }),
                    (F.prototype.toJSON = function () {
                      var t = {
                        isFulfilled: !1,
                        isRejected: !1,
                        fulfillmentValue: void 0,
                        rejectionReason: void 0,
                      };
                      return (
                        this.isFulfilled()
                          ? ((t.fulfillmentValue = this.value()),
                            (t.isFulfilled = !0))
                          : this.isRejected() &&
                            ((t.rejectionReason = this.reason()),
                            (t.isRejected = !0)),
                        t
                      );
                    }),
                    (F.prototype.all = function () {
                      return new g(this).promise();
                    }),
                    (F.prototype.error = function (t) {
                      return this.caught(a.originatesFromRejection, t);
                    }),
                    (F.getNewLibraryCopy = r.exports),
                    (F.is = function (t) {
                      return t instanceof F;
                    }),
                    (F.fromNode = function (t) {
                      var e = new F(h),
                        r = E(t)(w(e));
                      return r === k && e._rejectCallback(r.e, !0, !0), e;
                    }),
                    (F.all = function (t) {
                      return new g(t).promise();
                    }),
                    (F.defer = F.pending =
                      function () {
                        var t = new F(h);
                        return new b(t);
                      }),
                    (F.cast = function (t) {
                      var e = _(t);
                      if (!(e instanceof F)) {
                        var r = e;
                        (e = new F(h))._fulfillUnchecked(r);
                      }
                      return e;
                    }),
                    (F.resolve = F.fulfilled = F.cast),
                    (F.reject = F.rejected =
                      function (t) {
                        var e = new F(h);
                        return (
                          e._captureStackTrace(), e._rejectCallback(t, !0), e
                        );
                      }),
                    (F.setScheduler = function (t) {
                      if ("function" != typeof t)
                        throw new p(
                          "fn must be a function\n\n    See http://goo.gl/916lJJ\n"
                        );
                      var e = u._schedule;
                      return (u._schedule = t), e;
                    }),
                    (F.prototype._then = function (t, e, r, i, o) {
                      var s = void 0 !== o,
                        a = s ? o : new F(h);
                      s || (a._propagateFrom(this, 5), a._captureStackTrace());
                      var c = this._target();
                      c !== this &&
                        (void 0 === i && (i = this._boundTo),
                        s || a._setIsMigrated());
                      var l = c._addCallbacks(t, e, r, a, i, n());
                      return (
                        c._isResolved() &&
                          !c._isSettlePromisesQueued() &&
                          u.invoke(c._settlePromiseAtPostResolution, c, l),
                        a
                      );
                    }),
                    (F.prototype._settlePromiseAtPostResolution = function (t) {
                      this._isRejectionUnhandled() &&
                        this._unsetRejectionIsUnhandled(),
                        this._settlePromiseAt(t);
                    }),
                    (F.prototype._length = function () {
                      return 131071 & this._bitField;
                    }),
                    (F.prototype._isFollowingOrFulfilledOrRejected =
                      function () {
                        return (939524096 & this._bitField) > 0;
                      }),
                    (F.prototype._isFollowing = function () {
                      return 536870912 == (536870912 & this._bitField);
                    }),
                    (F.prototype._setLength = function (t) {
                      this._bitField =
                        (-131072 & this._bitField) | (131071 & t);
                    }),
                    (F.prototype._setFulfilled = function () {
                      this._bitField = 268435456 | this._bitField;
                    }),
                    (F.prototype._setRejected = function () {
                      this._bitField = 134217728 | this._bitField;
                    }),
                    (F.prototype._setFollowing = function () {
                      this._bitField = 536870912 | this._bitField;
                    }),
                    (F.prototype._setIsFinal = function () {
                      this._bitField = 33554432 | this._bitField;
                    }),
                    (F.prototype._isFinal = function () {
                      return (33554432 & this._bitField) > 0;
                    }),
                    (F.prototype._cancellable = function () {
                      return (67108864 & this._bitField) > 0;
                    }),
                    (F.prototype._setCancellable = function () {
                      this._bitField = 67108864 | this._bitField;
                    }),
                    (F.prototype._unsetCancellable = function () {
                      this._bitField = -67108865 & this._bitField;
                    }),
                    (F.prototype._setIsMigrated = function () {
                      this._bitField = 4194304 | this._bitField;
                    }),
                    (F.prototype._unsetIsMigrated = function () {
                      this._bitField = -4194305 & this._bitField;
                    }),
                    (F.prototype._isMigrated = function () {
                      return (4194304 & this._bitField) > 0;
                    }),
                    (F.prototype._receiverAt = function (t) {
                      var e = 0 === t ? this._receiver0 : this[5 * t - 5 + 4];
                      if (e !== c)
                        return void 0 === e && this._isBound()
                          ? this._boundValue()
                          : e;
                    }),
                    (F.prototype._promiseAt = function (t) {
                      return 0 === t ? this._promise0 : this[5 * t - 5 + 3];
                    }),
                    (F.prototype._fulfillmentHandlerAt = function (t) {
                      return 0 === t
                        ? this._fulfillmentHandler0
                        : this[5 * t - 5 + 0];
                    }),
                    (F.prototype._rejectionHandlerAt = function (t) {
                      return 0 === t
                        ? this._rejectionHandler0
                        : this[5 * t - 5 + 1];
                    }),
                    (F.prototype._boundValue = function () {
                      var t = this._boundTo;
                      return void 0 !== t && t instanceof F
                        ? t.isFulfilled()
                          ? t.value()
                          : void 0
                        : t;
                    }),
                    (F.prototype._migrateCallbacks = function (t, e) {
                      var r = t._fulfillmentHandlerAt(e),
                        n = t._rejectionHandlerAt(e),
                        i = t._progressHandlerAt(e),
                        o = t._promiseAt(e),
                        s = t._receiverAt(e);
                      o instanceof F && o._setIsMigrated(),
                        void 0 === s && (s = c),
                        this._addCallbacks(r, n, i, o, s, null);
                    }),
                    (F.prototype._addCallbacks = function (t, e, r, n, i, o) {
                      var s = this._length();
                      if (
                        (s >= 131066 && ((s = 0), this._setLength(0)), 0 === s)
                      )
                        (this._promise0 = n),
                          void 0 !== i && (this._receiver0 = i),
                          "function" != typeof t ||
                            this._isCarryingStackTrace() ||
                            (this._fulfillmentHandler0 =
                              null === o ? t : o.bind(t)),
                          "function" == typeof e &&
                            (this._rejectionHandler0 =
                              null === o ? e : o.bind(e)),
                          "function" == typeof r &&
                            (this._progressHandler0 =
                              null === o ? r : o.bind(r));
                      else {
                        var a = 5 * s - 5;
                        (this[a + 3] = n),
                          (this[a + 4] = i),
                          "function" == typeof t &&
                            (this[a + 0] = null === o ? t : o.bind(t)),
                          "function" == typeof e &&
                            (this[a + 1] = null === o ? e : o.bind(e)),
                          "function" == typeof r &&
                            (this[a + 2] = null === o ? r : o.bind(r));
                      }
                      return this._setLength(s + 1), s;
                    }),
                    (F.prototype._setProxyHandlers = function (t, e) {
                      var r = this._length();
                      if (
                        (r >= 131066 && ((r = 0), this._setLength(0)), 0 === r)
                      )
                        (this._promise0 = e), (this._receiver0 = t);
                      else {
                        var n = 5 * r - 5;
                        (this[n + 3] = e), (this[n + 4] = t);
                      }
                      this._setLength(r + 1);
                    }),
                    (F.prototype._proxyPromiseArray = function (t, e) {
                      this._setProxyHandlers(t, e);
                    }),
                    (F.prototype._resolveCallback = function (t, e) {
                      if (!this._isFollowingOrFulfilledOrRejected()) {
                        if (t === this)
                          return this._rejectCallback(i(), !1, !0);
                        var r = _(t, this);
                        if (!(r instanceof F)) return this._fulfill(t);
                        var n = 1 | (e ? 4 : 0);
                        this._propagateFrom(r, n);
                        var o = r._target();
                        if (o._isPending()) {
                          for (var s = this._length(), a = 0; a < s; ++a)
                            o._migrateCallbacks(this, a);
                          this._setFollowing(),
                            this._setLength(0),
                            this._setFollowee(o);
                        } else
                          o._isFulfilled()
                            ? this._fulfillUnchecked(o._value())
                            : this._rejectUnchecked(
                                o._reason(),
                                o._getCarriedStackTrace()
                              );
                      }
                    }),
                    (F.prototype._rejectCallback = function (t, e, r) {
                      r || a.markAsOriginatingFromRejection(t);
                      var n = a.ensureErrorObject(t),
                        i = n === t;
                      this._attachExtraTrace(n, !!e && i),
                        this._reject(t, i ? void 0 : n);
                    }),
                    (F.prototype._resolveFromResolver = function (t) {
                      var e = this;
                      this._captureStackTrace(), this._pushContext();
                      var r = !0,
                        n = E(t)(
                          function (t) {
                            null !== e && (e._resolveCallback(t), (e = null));
                          },
                          function (t) {
                            null !== e && (e._rejectCallback(t, r), (e = null));
                          }
                        );
                      (r = !1),
                        this._popContext(),
                        void 0 !== n &&
                          n === k &&
                          null !== e &&
                          (e._rejectCallback(n.e, !0, !0), (e = null));
                    }),
                    (F.prototype._settlePromiseFromHandler = function (
                      t,
                      e,
                      r,
                      n
                    ) {
                      var o;
                      if (!n._isRejected())
                        if (
                          (n._pushContext(),
                          (o =
                            e !== f || this._isRejected()
                              ? E(t).call(e, r)
                              : E(t).apply(this._boundValue(), r)),
                          n._popContext(),
                          o === k || o === n || o === d)
                        ) {
                          var s = o === n ? i() : o.e;
                          n._rejectCallback(s, !1, !0);
                        } else n._resolveCallback(o);
                    }),
                    (F.prototype._target = function () {
                      for (var t = this; t._isFollowing(); ) t = t._followee();
                      return t;
                    }),
                    (F.prototype._followee = function () {
                      return this._rejectionHandler0;
                    }),
                    (F.prototype._setFollowee = function (t) {
                      this._rejectionHandler0 = t;
                    }),
                    (F.prototype._cleanValues = function () {
                      this._cancellable() &&
                        (this._cancellationParent = void 0);
                    }),
                    (F.prototype._propagateFrom = function (t, e) {
                      (1 & e) > 0 &&
                        t._cancellable() &&
                        (this._setCancellable(),
                        (this._cancellationParent = t)),
                        (4 & e) > 0 &&
                          t._isBound() &&
                          this._setBoundTo(t._boundTo);
                    }),
                    (F.prototype._fulfill = function (t) {
                      this._isFollowingOrFulfilledOrRejected() ||
                        this._fulfillUnchecked(t);
                    }),
                    (F.prototype._reject = function (t, e) {
                      this._isFollowingOrFulfilledOrRejected() ||
                        this._rejectUnchecked(t, e);
                    }),
                    (F.prototype._settlePromiseAt = function (t) {
                      var e = this._promiseAt(t),
                        r = e instanceof F;
                      if (r && e._isMigrated())
                        return (
                          e._unsetIsMigrated(),
                          u.invoke(this._settlePromiseAt, this, t)
                        );
                      var n = this._isFulfilled()
                          ? this._fulfillmentHandlerAt(t)
                          : this._rejectionHandlerAt(t),
                        i = this._isCarryingStackTrace()
                          ? this._getCarriedStackTrace()
                          : void 0,
                        o = this._settledValue,
                        s = this._receiverAt(t);
                      this._clearCallbackDataAtIndex(t),
                        "function" == typeof n
                          ? r
                            ? this._settlePromiseFromHandler(n, s, o, e)
                            : n.call(s, o, e)
                          : s instanceof g
                          ? s._isResolved() ||
                            (this._isFulfilled()
                              ? s._promiseFulfilled(o, e)
                              : s._promiseRejected(o, e))
                          : r &&
                            (this._isFulfilled()
                              ? e._fulfill(o)
                              : e._reject(o, i)),
                        t >= 4 &&
                          4 == (31 & t) &&
                          u.invokeLater(this._setLength, this, 0);
                    }),
                    (F.prototype._clearCallbackDataAtIndex = function (t) {
                      if (0 === t)
                        this._isCarryingStackTrace() ||
                          (this._fulfillmentHandler0 = void 0),
                          (this._rejectionHandler0 =
                            this._progressHandler0 =
                            this._receiver0 =
                            this._promise0 =
                              void 0);
                      else {
                        var e = 5 * t - 5;
                        this[e + 3] =
                          this[e + 4] =
                          this[e + 0] =
                          this[e + 1] =
                          this[e + 2] =
                            void 0;
                      }
                    }),
                    (F.prototype._isSettlePromisesQueued = function () {
                      return -1073741824 == (-1073741824 & this._bitField);
                    }),
                    (F.prototype._setSettlePromisesQueued = function () {
                      this._bitField = -1073741824 | this._bitField;
                    }),
                    (F.prototype._unsetSettlePromisesQueued = function () {
                      this._bitField = 1073741823 & this._bitField;
                    }),
                    (F.prototype._queueSettlePromises = function () {
                      u.settlePromises(this), this._setSettlePromisesQueued();
                    }),
                    (F.prototype._fulfillUnchecked = function (t) {
                      if (t === this) {
                        var e = i();
                        return (
                          this._attachExtraTrace(e),
                          this._rejectUnchecked(e, void 0)
                        );
                      }
                      this._setFulfilled(),
                        (this._settledValue = t),
                        this._cleanValues(),
                        this._length() > 0 && this._queueSettlePromises();
                    }),
                    (F.prototype._rejectUncheckedCheckError = function (t) {
                      var e = a.ensureErrorObject(t);
                      this._rejectUnchecked(t, e === t ? void 0 : e);
                    }),
                    (F.prototype._rejectUnchecked = function (t, e) {
                      if (t === this) {
                        var r = i();
                        return (
                          this._attachExtraTrace(r), this._rejectUnchecked(r)
                        );
                      }
                      this._setRejected(),
                        (this._settledValue = t),
                        this._cleanValues(),
                        this._isFinal()
                          ? u.throwLater(
                              function (t) {
                                throw (
                                  ("stack" in t &&
                                    u.invokeFirst(
                                      v.unhandledRejection,
                                      void 0,
                                      t
                                    ),
                                  t)
                                );
                              },
                              void 0 === e ? t : e
                            )
                          : (void 0 !== e &&
                              e !== t &&
                              this._setCarriedStackTrace(e),
                            this._length() > 0
                              ? this._queueSettlePromises()
                              : this._ensurePossibleRejectionHandled());
                    }),
                    (F.prototype._settlePromises = function () {
                      this._unsetSettlePromisesQueued();
                      for (var t = this._length(), e = 0; e < t; e++)
                        this._settlePromiseAt(e);
                    }),
                    a.notEnumerableProp(F, "_makeSelfResolutionError", i),
                    t("./progress.js")(F, g),
                    t("./method.js")(F, h, _, s),
                    t("./bind.js")(F, h, _),
                    t("./finally.js")(F, d, _),
                    t("./direct_resolve.js")(F),
                    t("./synchronous_inspection.js")(F),
                    t("./join.js")(F, g, _, h),
                    (F.version = "2.11.0"),
                    (F.Promise = F),
                    t("./map.js")(F, g, s, _, h),
                    t("./cancel.js")(F),
                    t("./using.js")(F, s, _, m),
                    t("./generators.js")(F, s, h, _),
                    t("./nodeify.js")(F),
                    t("./call_get.js")(F),
                    t("./props.js")(F, g, _, s),
                    t("./race.js")(F, h, _, s),
                    t("./reduce.js")(F, g, s, _, h),
                    t("./settle.js")(F, g),
                    t("./some.js")(F, g, s),
                    t("./promisify.js")(F, h),
                    t("./any.js")(F),
                    t("./each.js")(F, h),
                    t("./timers.js")(F, h),
                    t("./filter.js")(F, h),
                    a.toFastProperties(F),
                    a.toFastProperties(F.prototype),
                    x({ a: 1 }),
                    x({ b: 2 }),
                    x({ c: 3 }),
                    x(1),
                    x(function () {}),
                    x(void 0),
                    x(!1),
                    x(new F(h)),
                    v.setBounds(u.firstLineError, a.lastLineError),
                    F
                  );
                };
              },
              {
                "./any.js": 1,
                "./async.js": 2,
                "./bind.js": 3,
                "./call_get.js": 5,
                "./cancel.js": 6,
                "./captured_trace.js": 7,
                "./catch_filter.js": 8,
                "./context.js": 9,
                "./debuggability.js": 10,
                "./direct_resolve.js": 11,
                "./each.js": 12,
                "./errors.js": 13,
                "./filter.js": 15,
                "./finally.js": 16,
                "./generators.js": 17,
                "./join.js": 18,
                "./map.js": 19,
                "./method.js": 20,
                "./nodeify.js": 21,
                "./progress.js": 22,
                "./promise_array.js": 24,
                "./promise_resolver.js": 25,
                "./promisify.js": 26,
                "./props.js": 27,
                "./race.js": 29,
                "./reduce.js": 30,
                "./settle.js": 32,
                "./some.js": 33,
                "./synchronous_inspection.js": 34,
                "./thenables.js": 35,
                "./timers.js": 36,
                "./using.js": 37,
                "./util.js": 38,
              },
            ],
            24: [
              function (t, e, r) {
                "use strict";
                e.exports = function (e, r, n, i) {
                  var o = t("./util.js"),
                    s = o.isArray;
                  function a(t) {
                    var n,
                      i = (this._promise = new e(r));
                    t instanceof e && ((n = t), i._propagateFrom(n, 5)),
                      (this._values = t),
                      (this._length = 0),
                      (this._totalResolved = 0),
                      this._init(void 0, -2);
                  }
                  return (
                    (a.prototype.length = function () {
                      return this._length;
                    }),
                    (a.prototype.promise = function () {
                      return this._promise;
                    }),
                    (a.prototype._init = function t(r, o) {
                      var a = n(this._values, this._promise);
                      if (a instanceof e) {
                        if (
                          ((a = a._target()),
                          (this._values = a),
                          !a._isFulfilled())
                        )
                          return a._isPending()
                            ? void a._then(t, this._reject, void 0, this, o)
                            : void this._reject(a._reason());
                        if (((a = a._value()), !s(a))) {
                          var c = new e.TypeError(
                            "expecting an array, a promise or a thenable\n\n    See http://goo.gl/s8MMhc\n"
                          );
                          return void this.__hardReject__(c);
                        }
                      } else if (!s(a))
                        return void this._promise._reject(
                          i(
                            "expecting an array, a promise or a thenable\n\n    See http://goo.gl/s8MMhc\n"
                          )._reason()
                        );
                      if (0 !== a.length) {
                        var u = this.getActualLength(a.length);
                        (this._length = u),
                          (this._values = this.shouldCopyValues()
                            ? new Array(u)
                            : this._values);
                        for (var l = this._promise, p = 0; p < u; ++p) {
                          var h = this._isResolved(),
                            f = n(a[p], l);
                          f instanceof e
                            ? ((f = f._target()),
                              h
                                ? f._ignoreRejections()
                                : f._isPending()
                                ? f._proxyPromiseArray(this, p)
                                : f._isFulfilled()
                                ? this._promiseFulfilled(f._value(), p)
                                : this._promiseRejected(f._reason(), p))
                            : h || this._promiseFulfilled(f, p);
                        }
                      } else
                        -5 === o
                          ? this._resolveEmptyArray()
                          : this._resolve(
                              (function (t) {
                                switch (t) {
                                  case -2:
                                    return [];
                                  case -3:
                                    return {};
                                }
                              })(o)
                            );
                    }),
                    (a.prototype._isResolved = function () {
                      return null === this._values;
                    }),
                    (a.prototype._resolve = function (t) {
                      (this._values = null), this._promise._fulfill(t);
                    }),
                    (a.prototype.__hardReject__ = a.prototype._reject =
                      function (t) {
                        (this._values = null),
                          this._promise._rejectCallback(t, !1, !0);
                      }),
                    (a.prototype._promiseProgressed = function (t, e) {
                      this._promise._progress({ index: e, value: t });
                    }),
                    (a.prototype._promiseFulfilled = function (t, e) {
                      this._values[e] = t;
                      var r = ++this._totalResolved;
                      r >= this._length && this._resolve(this._values);
                    }),
                    (a.prototype._promiseRejected = function (t, e) {
                      this._totalResolved++, this._reject(t);
                    }),
                    (a.prototype.shouldCopyValues = function () {
                      return !0;
                    }),
                    (a.prototype.getActualLength = function (t) {
                      return t;
                    }),
                    a
                  );
                };
              },
              { "./util.js": 38 },
            ],
            25: [
              function (t, e, r) {
                "use strict";
                var n,
                  i = t("./util.js"),
                  o = i.maybeWrapAsError,
                  s = t("./errors.js"),
                  a = s.TimeoutError,
                  c = s.OperationalError,
                  u = i.haveGetters,
                  l = t("./es5.js"),
                  p = /^(?:name|message|stack|cause)$/;
                function h(t) {
                  var e;
                  if (
                    (function (t) {
                      return (
                        t instanceof Error &&
                        l.getPrototypeOf(t) === Error.prototype
                      );
                    })(t)
                  ) {
                    ((e = new c(t)).name = t.name),
                      (e.message = t.message),
                      (e.stack = t.stack);
                    for (var r = l.keys(t), n = 0; n < r.length; ++n) {
                      var o = r[n];
                      p.test(o) || (e[o] = t[o]);
                    }
                    return e;
                  }
                  return i.markAsOriginatingFromRejection(t), t;
                }
                function f(t) {
                  return function (e, r) {
                    if (null !== t) {
                      if (e) {
                        var n = h(o(e));
                        t._attachExtraTrace(n), t._reject(n);
                      } else if (arguments.length > 2) {
                        for (
                          var i = arguments.length, s = new Array(i - 1), a = 1;
                          a < i;
                          ++a
                        )
                          s[a - 1] = arguments[a];
                        t._fulfill(s);
                      } else t._fulfill(r);
                      t = null;
                    }
                  };
                }
                if (
                  ((n = u
                    ? function (t) {
                        this.promise = t;
                      }
                    : function (t) {
                        (this.promise = t),
                          (this.asCallback = f(t)),
                          (this.callback = this.asCallback);
                      }),
                  u)
                ) {
                  var d = {
                    get: function () {
                      return f(this.promise);
                    },
                  };
                  l.defineProperty(n.prototype, "asCallback", d),
                    l.defineProperty(n.prototype, "callback", d);
                }
                (n._nodebackForPromise = f),
                  (n.prototype.toString = function () {
                    return "[object PromiseResolver]";
                  }),
                  (n.prototype.resolve = n.prototype.fulfill =
                    function (t) {
                      if (!(this instanceof n))
                        throw new TypeError(
                          "Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\n\n    See http://goo.gl/sdkXL9\n"
                        );
                      this.promise._resolveCallback(t);
                    }),
                  (n.prototype.reject = function (t) {
                    if (!(this instanceof n))
                      throw new TypeError(
                        "Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\n\n    See http://goo.gl/sdkXL9\n"
                      );
                    this.promise._rejectCallback(t);
                  }),
                  (n.prototype.progress = function (t) {
                    if (!(this instanceof n))
                      throw new TypeError(
                        "Illegal invocation, resolver resolve/reject must be called within a resolver context. Consider using the promise constructor instead.\n\n    See http://goo.gl/sdkXL9\n"
                      );
                    this.promise._progress(t);
                  }),
                  (n.prototype.cancel = function (t) {
                    this.promise.cancel(t);
                  }),
                  (n.prototype.timeout = function () {
                    this.reject(new a("timeout"));
                  }),
                  (n.prototype.isResolved = function () {
                    return this.promise.isResolved();
                  }),
                  (n.prototype.toJSON = function () {
                    return this.promise.toJSON();
                  }),
                  (e.exports = n);
              },
              { "./errors.js": 13, "./es5.js": 14, "./util.js": 38 },
            ],
            26: [
              function (t, e, r) {
                "use strict";
                e.exports = function (e, r) {
                  var n = {},
                    i = t("./util.js"),
                    o = t("./promise_resolver.js")._nodebackForPromise,
                    s = i.withAppended,
                    a = i.maybeWrapAsError,
                    c = i.canEvaluate,
                    u = t("./errors").TypeError,
                    l = { __isPromisified__: !0 },
                    p = new RegExp(
                      "^(?:" +
                        [
                          "arity",
                          "length",
                          "name",
                          "arguments",
                          "caller",
                          "callee",
                          "prototype",
                          "__isPromisified__",
                        ].join("|") +
                        ")$"
                    ),
                    h = function (t) {
                      return (
                        i.isIdentifier(t) &&
                        "_" !== t.charAt(0) &&
                        "constructor" !== t
                      );
                    };
                  function f(t) {
                    return !p.test(t);
                  }
                  function d(t) {
                    try {
                      return !0 === t.__isPromisified__;
                    } catch (t) {
                      return !1;
                    }
                  }
                  function _(t, e, r) {
                    var n = i.getDataPropertyOrDefault(t, e + r, l);
                    return !!n && d(n);
                  }
                  function g(t, e, r, n) {
                    for (
                      var o = i.inheritedDataKeys(t), s = [], a = 0;
                      a < o.length;
                      ++a
                    ) {
                      var c = o[a],
                        l = t[c],
                        p = n === h || h(c, l, t);
                      "function" != typeof l ||
                        d(l) ||
                        _(t, c, e) ||
                        !n(c, l, t, p) ||
                        s.push(c, l);
                    }
                    return (
                      (function (t, e, r) {
                        for (var n = 0; n < t.length; n += 2) {
                          var i = t[n];
                          if (r.test(i))
                            for (
                              var o = i.replace(r, ""), s = 0;
                              s < t.length;
                              s += 2
                            )
                              if (t[s] === o)
                                throw new u(
                                  "Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/iWrZbw\n".replace(
                                    "%s",
                                    e
                                  )
                                );
                        }
                      })(s, e, r),
                      s
                    );
                  }
                  var v = function (t) {
                      return t.replace(/([$])/, "\\$");
                    },
                    y = c
                      ? void 0
                      : function (t, c, u, l) {
                          var p = (function () {
                              return this;
                            })(),
                            h = t;
                          function f() {
                            var i = c;
                            c === n && (i = this);
                            var u = new e(r);
                            u._captureStackTrace();
                            var l =
                                "string" == typeof h && this !== p
                                  ? this[h]
                                  : t,
                              f = o(u);
                            try {
                              l.apply(i, s(arguments, f));
                            } catch (t) {
                              u._rejectCallback(a(t), !0, !0);
                            }
                            return u;
                          }
                          return (
                            "string" == typeof h && (t = l),
                            i.notEnumerableProp(f, "__isPromisified__", !0),
                            f
                          );
                        };
                  function m(t, e, r, o) {
                    for (
                      var s = new RegExp(v(e) + "$"),
                        a = g(t, e, s, r),
                        c = 0,
                        u = a.length;
                      c < u;
                      c += 2
                    ) {
                      var l = a[c],
                        p = a[c + 1],
                        h = l + e;
                      if (o === y) t[h] = y(l, n, l, p, e);
                      else {
                        var f = o(p, function () {
                          return y(l, n, l, p, e);
                        });
                        i.notEnumerableProp(f, "__isPromisified__", !0),
                          (t[h] = f);
                      }
                    }
                    return i.toFastProperties(t), t;
                  }
                  (e.promisify = function (t, e) {
                    if ("function" != typeof t)
                      throw new u(
                        "fn must be a function\n\n    See http://goo.gl/916lJJ\n"
                      );
                    if (d(t)) return t;
                    var r = (function (t, e) {
                      return y(t, e, void 0, t);
                    })(t, arguments.length < 2 ? n : e);
                    return i.copyDescriptors(t, r, f), r;
                  }),
                    (e.promisifyAll = function (t, e) {
                      if ("function" != typeof t && "object" != typeof t)
                        throw new u(
                          "the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/9ITlV0\n"
                        );
                      var r = (e = Object(e)).suffix;
                      "string" != typeof r && (r = "Async");
                      var n = e.filter;
                      "function" != typeof n && (n = h);
                      var o = e.promisifier;
                      if (
                        ("function" != typeof o && (o = y), !i.isIdentifier(r))
                      )
                        throw new RangeError(
                          "suffix must be a valid identifier\n\n    See http://goo.gl/8FZo5V\n"
                        );
                      for (
                        var s = i.inheritedDataKeys(t), a = 0;
                        a < s.length;
                        ++a
                      ) {
                        var c = t[s[a]];
                        "constructor" !== s[a] &&
                          i.isClass(c) &&
                          (m(c.prototype, r, n, o), m(c, r, n, o));
                      }
                      return m(t, r, n, o);
                    });
                };
              },
              { "./errors": 13, "./promise_resolver.js": 25, "./util.js": 38 },
            ],
            27: [
              function (t, e, r) {
                "use strict";
                e.exports = function (e, r, n, i) {
                  var o = t("./util.js"),
                    s = o.isObject,
                    a = t("./es5.js");
                  function c(t) {
                    for (
                      var e = a.keys(t),
                        r = e.length,
                        n = new Array(2 * r),
                        i = 0;
                      i < r;
                      ++i
                    ) {
                      var o = e[i];
                      (n[i] = t[o]), (n[i + r] = o);
                    }
                    this.constructor$(n);
                  }
                  function u(t) {
                    var r,
                      o = n(t);
                    return s(o)
                      ? ((r =
                          o instanceof e
                            ? o._then(e.props, void 0, void 0, void 0, void 0)
                            : new c(o).promise()),
                        o instanceof e && r._propagateFrom(o, 4),
                        r)
                      : i(
                          "cannot await properties of a non-object\n\n    See http://goo.gl/OsFKC8\n"
                        );
                  }
                  o.inherits(c, r),
                    (c.prototype._init = function () {
                      this._init$(void 0, -3);
                    }),
                    (c.prototype._promiseFulfilled = function (t, e) {
                      this._values[e] = t;
                      var r = ++this._totalResolved;
                      if (r >= this._length) {
                        for (
                          var n = {},
                            i = this.length(),
                            o = 0,
                            s = this.length();
                          o < s;
                          ++o
                        )
                          n[this._values[o + i]] = this._values[o];
                        this._resolve(n);
                      }
                    }),
                    (c.prototype._promiseProgressed = function (t, e) {
                      this._promise._progress({
                        key: this._values[e + this.length()],
                        value: t,
                      });
                    }),
                    (c.prototype.shouldCopyValues = function () {
                      return !1;
                    }),
                    (c.prototype.getActualLength = function (t) {
                      return t >> 1;
                    }),
                    (e.prototype.props = function () {
                      return u(this);
                    }),
                    (e.props = function (t) {
                      return u(t);
                    });
                };
              },
              { "./es5.js": 14, "./util.js": 38 },
            ],
            28: [
              function (t, e, r) {
                "use strict";
                function n(t) {
                  (this._capacity = t), (this._length = 0), (this._front = 0);
                }
                (n.prototype._willBeOverCapacity = function (t) {
                  return this._capacity < t;
                }),
                  (n.prototype._pushOne = function (t) {
                    var e = this.length();
                    this._checkCapacity(e + 1);
                    var r = (this._front + e) & (this._capacity - 1);
                    (this[r] = t), (this._length = e + 1);
                  }),
                  (n.prototype._unshiftOne = function (t) {
                    var e = this._capacity;
                    this._checkCapacity(this.length() + 1);
                    var r = this._front,
                      n = (((r - 1) & (e - 1)) ^ e) - e;
                    (this[n] = t),
                      (this._front = n),
                      (this._length = this.length() + 1);
                  }),
                  (n.prototype.unshift = function (t, e, r) {
                    this._unshiftOne(r),
                      this._unshiftOne(e),
                      this._unshiftOne(t);
                  }),
                  (n.prototype.push = function (t, e, r) {
                    var n = this.length() + 3;
                    if (this._willBeOverCapacity(n))
                      return (
                        this._pushOne(t),
                        this._pushOne(e),
                        void this._pushOne(r)
                      );
                    var i = this._front + n - 3;
                    this._checkCapacity(n);
                    var o = this._capacity - 1;
                    (this[(i + 0) & o] = t),
                      (this[(i + 1) & o] = e),
                      (this[(i + 2) & o] = r),
                      (this._length = n);
                  }),
                  (n.prototype.shift = function () {
                    var t = this._front,
                      e = this[t];
                    return (
                      (this[t] = void 0),
                      (this._front = (t + 1) & (this._capacity - 1)),
                      this._length--,
                      e
                    );
                  }),
                  (n.prototype.length = function () {
                    return this._length;
                  }),
                  (n.prototype._checkCapacity = function (t) {
                    this._capacity < t && this._resizeTo(this._capacity << 1);
                  }),
                  (n.prototype._resizeTo = function (t) {
                    var e = this._capacity;
                    this._capacity = t;
                    var r = this._front,
                      n = this._length,
                      i = (r + n) & (e - 1);
                    !(function (t, e, r, n, i) {
                      for (var o = 0; o < i; ++o)
                        (r[o + n] = t[o + e]), (t[o + e] = void 0);
                    })(this, 0, this, e, i);
                  }),
                  (e.exports = n);
              },
              {},
            ],
            29: [
              function (t, e, r) {
                "use strict";
                e.exports = function (e, r, n, i) {
                  var o = t("./util.js").isArray,
                    s = function (t) {
                      return t.then(function (e) {
                        return a(e, t);
                      });
                    };
                  function a(t, a) {
                    var c = n(t);
                    if (c instanceof e) return s(c);
                    if (!o(t))
                      return i(
                        "expecting an array, a promise or a thenable\n\n    See http://goo.gl/s8MMhc\n"
                      );
                    var u = new e(r);
                    void 0 !== a && u._propagateFrom(a, 5);
                    for (
                      var l = u._fulfill, p = u._reject, h = 0, f = t.length;
                      h < f;
                      ++h
                    ) {
                      var d = t[h];
                      (void 0 !== d || h in t) &&
                        e.cast(d)._then(l, p, void 0, u, null);
                    }
                    return u;
                  }
                  (e.race = function (t) {
                    return a(t, void 0);
                  }),
                    (e.prototype.race = function () {
                      return a(this, void 0);
                    });
                };
              },
              { "./util.js": 38 },
            ],
            30: [
              function (t, e, r) {
                "use strict";
                e.exports = function (e, r, n, i, o) {
                  var s = e._getDomain,
                    a = t("./async.js"),
                    c = t("./util.js"),
                    u = c.tryCatch,
                    l = c.errorObj;
                  function p(t, r, n, c) {
                    this.constructor$(t),
                      this._promise._captureStackTrace(),
                      (this._preservedValues = c === o ? [] : null),
                      (this._zerothIsAccum = void 0 === n),
                      (this._gotAccum = !1),
                      (this._reducingIndex = this._zerothIsAccum ? 1 : 0),
                      (this._valuesPhase = void 0);
                    var u = i(n, this._promise),
                      l = !1,
                      p = u instanceof e;
                    p &&
                      ((u = u._target())._isPending()
                        ? u._proxyPromiseArray(this, -1)
                        : u._isFulfilled()
                        ? ((n = u._value()), (this._gotAccum = !0))
                        : (this._reject(u._reason()), (l = !0))),
                      p || this._zerothIsAccum || (this._gotAccum = !0);
                    var f = s();
                    (this._callback = null === f ? r : f.bind(r)),
                      (this._accum = n),
                      l || a.invoke(h, this, void 0);
                  }
                  function h() {
                    this._init$(void 0, -5);
                  }
                  function f(t, e, r, i) {
                    if ("function" != typeof e)
                      return n(
                        "fn must be a function\n\n    See http://goo.gl/916lJJ\n"
                      );
                    var o = new p(t, e, r, i);
                    return o.promise();
                  }
                  c.inherits(p, r),
                    (p.prototype._init = function () {}),
                    (p.prototype._resolveEmptyArray = function () {
                      (this._gotAccum || this._zerothIsAccum) &&
                        this._resolve(
                          null !== this._preservedValues ? [] : this._accum
                        );
                    }),
                    (p.prototype._promiseFulfilled = function (t, r) {
                      var n = this._values;
                      n[r] = t;
                      var o,
                        s = this.length(),
                        a = this._preservedValues,
                        c = null !== a,
                        p = this._gotAccum,
                        h = this._valuesPhase;
                      if (!h)
                        for (
                          h = this._valuesPhase = new Array(s), o = 0;
                          o < s;
                          ++o
                        )
                          h[o] = 0;
                      if (
                        ((o = h[r]),
                        0 === r && this._zerothIsAccum
                          ? ((this._accum = t),
                            (this._gotAccum = p = !0),
                            (h[r] = 0 === o ? 1 : 2))
                          : -1 === r
                          ? ((this._accum = t), (this._gotAccum = p = !0))
                          : 0 === o
                          ? (h[r] = 1)
                          : ((h[r] = 2), (this._accum = t)),
                        p)
                      ) {
                        for (
                          var f,
                            d = this._callback,
                            _ = this._promise._boundValue(),
                            g = this._reducingIndex;
                          g < s;
                          ++g
                        )
                          if (2 !== (o = h[g])) {
                            if (1 !== o) return;
                            if (
                              ((t = n[g]),
                              this._promise._pushContext(),
                              c
                                ? (a.push(t), (f = u(d).call(_, t, g, s)))
                                : (f = u(d).call(_, this._accum, t, g, s)),
                              this._promise._popContext(),
                              f === l)
                            )
                              return this._reject(f.e);
                            var v = i(f, this._promise);
                            if (v instanceof e) {
                              if ((v = v._target())._isPending())
                                return (
                                  (h[g] = 4), v._proxyPromiseArray(this, g)
                                );
                              if (!v._isFulfilled())
                                return this._reject(v._reason());
                              f = v._value();
                            }
                            (this._reducingIndex = g + 1), (this._accum = f);
                          } else this._reducingIndex = g + 1;
                        this._resolve(c ? a : this._accum);
                      }
                    }),
                    (e.prototype.reduce = function (t, e) {
                      return f(this, t, e, null);
                    }),
                    (e.reduce = function (t, e, r, n) {
                      return f(t, e, r, n);
                    });
                };
              },
              { "./async.js": 2, "./util.js": 38 },
            ],
            31: [
              function (t, n, i) {
                "use strict";
                var o,
                  s = t("./util");
                if (s.isNode && "undefined" == typeof MutationObserver) {
                  var a = r.setImmediate,
                    c = e.nextTick;
                  o = s.isRecentNode
                    ? function (t) {
                        a.call(r, t);
                      }
                    : function (t) {
                        c.call(e, t);
                      };
                } else
                  "undefined" == typeof MutationObserver ||
                  ("undefined" != typeof window &&
                    window.navigator &&
                    window.navigator.standalone)
                    ? (o =
                        "undefined" != typeof setImmediate
                          ? function (t) {
                              setImmediate(t);
                            }
                          : "undefined" != typeof setTimeout
                          ? function (t) {
                              setTimeout(t, 0);
                            }
                          : function () {
                              throw new Error(
                                "No async scheduler available\n\n    See http://goo.gl/m3OTXk\n"
                              );
                            })
                    : ((o = function (t) {
                        var e = document.createElement("div"),
                          r = new MutationObserver(t);
                        return (
                          r.observe(e, { attributes: !0 }),
                          function () {
                            e.classList.toggle("foo");
                          }
                        );
                      }).isStatic = !0);
                n.exports = o;
              },
              { "./util": 38 },
            ],
            32: [
              function (t, e, r) {
                "use strict";
                e.exports = function (e, r) {
                  var n = e.PromiseInspection,
                    i = t("./util.js");
                  function o(t) {
                    this.constructor$(t);
                  }
                  i.inherits(o, r),
                    (o.prototype._promiseResolved = function (t, e) {
                      this._values[t] = e;
                      var r = ++this._totalResolved;
                      r >= this._length && this._resolve(this._values);
                    }),
                    (o.prototype._promiseFulfilled = function (t, e) {
                      var r = new n();
                      (r._bitField = 268435456),
                        (r._settledValue = t),
                        this._promiseResolved(e, r);
                    }),
                    (o.prototype._promiseRejected = function (t, e) {
                      var r = new n();
                      (r._bitField = 134217728),
                        (r._settledValue = t),
                        this._promiseResolved(e, r);
                    }),
                    (e.settle = function (t) {
                      return new o(t).promise();
                    }),
                    (e.prototype.settle = function () {
                      return new o(this).promise();
                    });
                };
              },
              { "./util.js": 38 },
            ],
            33: [
              function (t, e, r) {
                "use strict";
                e.exports = function (e, r, n) {
                  var i = t("./util.js"),
                    o = t("./errors.js").RangeError,
                    s = t("./errors.js").AggregateError,
                    a = i.isArray;
                  function c(t) {
                    this.constructor$(t),
                      (this._howMany = 0),
                      (this._unwrap = !1),
                      (this._initialized = !1);
                  }
                  function u(t, e) {
                    if ((0 | e) !== e || e < 0)
                      return n(
                        "expecting a positive integer\n\n    See http://goo.gl/1wAmHx\n"
                      );
                    var r = new c(t),
                      i = r.promise();
                    return r.setHowMany(e), r.init(), i;
                  }
                  i.inherits(c, r),
                    (c.prototype._init = function () {
                      if (this._initialized)
                        if (0 !== this._howMany) {
                          this._init$(void 0, -5);
                          var t = a(this._values);
                          !this._isResolved() &&
                            t &&
                            this._howMany > this._canPossiblyFulfill() &&
                            this._reject(this._getRangeError(this.length()));
                        } else this._resolve([]);
                    }),
                    (c.prototype.init = function () {
                      (this._initialized = !0), this._init();
                    }),
                    (c.prototype.setUnwrap = function () {
                      this._unwrap = !0;
                    }),
                    (c.prototype.howMany = function () {
                      return this._howMany;
                    }),
                    (c.prototype.setHowMany = function (t) {
                      this._howMany = t;
                    }),
                    (c.prototype._promiseFulfilled = function (t) {
                      this._addFulfilled(t),
                        this._fulfilled() === this.howMany() &&
                          ((this._values.length = this.howMany()),
                          1 === this.howMany() && this._unwrap
                            ? this._resolve(this._values[0])
                            : this._resolve(this._values));
                    }),
                    (c.prototype._promiseRejected = function (t) {
                      if (
                        (this._addRejected(t),
                        this.howMany() > this._canPossiblyFulfill())
                      ) {
                        for (
                          var e = new s(), r = this.length();
                          r < this._values.length;
                          ++r
                        )
                          e.push(this._values[r]);
                        this._reject(e);
                      }
                    }),
                    (c.prototype._fulfilled = function () {
                      return this._totalResolved;
                    }),
                    (c.prototype._rejected = function () {
                      return this._values.length - this.length();
                    }),
                    (c.prototype._addRejected = function (t) {
                      this._values.push(t);
                    }),
                    (c.prototype._addFulfilled = function (t) {
                      this._values[this._totalResolved++] = t;
                    }),
                    (c.prototype._canPossiblyFulfill = function () {
                      return this.length() - this._rejected();
                    }),
                    (c.prototype._getRangeError = function (t) {
                      var e =
                        "Input array must contain at least " +
                        this._howMany +
                        " items but contains only " +
                        t +
                        " items";
                      return new o(e);
                    }),
                    (c.prototype._resolveEmptyArray = function () {
                      this._reject(this._getRangeError(0));
                    }),
                    (e.some = function (t, e) {
                      return u(t, e);
                    }),
                    (e.prototype.some = function (t) {
                      return u(this, t);
                    }),
                    (e._SomePromiseArray = c);
                };
              },
              { "./errors.js": 13, "./util.js": 38 },
            ],
            34: [
              function (t, e, r) {
                "use strict";
                e.exports = function (t) {
                  function e(t) {
                    void 0 !== t
                      ? ((t = t._target()),
                        (this._bitField = t._bitField),
                        (this._settledValue = t._settledValue))
                      : ((this._bitField = 0), (this._settledValue = void 0));
                  }
                  (e.prototype.value = function () {
                    if (!this.isFulfilled())
                      throw new TypeError(
                        "cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/hc1DLj\n"
                      );
                    return this._settledValue;
                  }),
                    (e.prototype.error = e.prototype.reason =
                      function () {
                        if (!this.isRejected())
                          throw new TypeError(
                            "cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/hPuiwB\n"
                          );
                        return this._settledValue;
                      }),
                    (e.prototype.isFulfilled = t.prototype._isFulfilled =
                      function () {
                        return (268435456 & this._bitField) > 0;
                      }),
                    (e.prototype.isRejected = t.prototype._isRejected =
                      function () {
                        return (134217728 & this._bitField) > 0;
                      }),
                    (e.prototype.isPending = t.prototype._isPending =
                      function () {
                        return 0 == (402653184 & this._bitField);
                      }),
                    (e.prototype.isResolved = t.prototype._isResolved =
                      function () {
                        return (402653184 & this._bitField) > 0;
                      }),
                    (t.prototype.isPending = function () {
                      return this._target()._isPending();
                    }),
                    (t.prototype.isRejected = function () {
                      return this._target()._isRejected();
                    }),
                    (t.prototype.isFulfilled = function () {
                      return this._target()._isFulfilled();
                    }),
                    (t.prototype.isResolved = function () {
                      return this._target()._isResolved();
                    }),
                    (t.prototype._value = function () {
                      return this._settledValue;
                    }),
                    (t.prototype._reason = function () {
                      return (
                        this._unsetRejectionIsUnhandled(), this._settledValue
                      );
                    }),
                    (t.prototype.value = function () {
                      var t = this._target();
                      if (!t.isFulfilled())
                        throw new TypeError(
                          "cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/hc1DLj\n"
                        );
                      return t._settledValue;
                    }),
                    (t.prototype.reason = function () {
                      var t = this._target();
                      if (!t.isRejected())
                        throw new TypeError(
                          "cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/hPuiwB\n"
                        );
                      return t._unsetRejectionIsUnhandled(), t._settledValue;
                    }),
                    (t.PromiseInspection = e);
                };
              },
              {},
            ],
            35: [
              function (t, e, r) {
                "use strict";
                e.exports = function (e, r) {
                  var n = t("./util.js"),
                    i = n.errorObj,
                    o = n.isObject;
                  function s(t) {
                    return t.then;
                  }
                  var a = {}.hasOwnProperty;
                  return function (t, c) {
                    if (o(t)) {
                      if (t instanceof e) return t;
                      if (
                        (function (t) {
                          return a.call(t, "_promise0");
                        })(t)
                      ) {
                        var u = new e(r);
                        return (
                          t._then(
                            u._fulfillUnchecked,
                            u._rejectUncheckedCheckError,
                            u._progressUnchecked,
                            u,
                            null
                          ),
                          u
                        );
                      }
                      var l = n.tryCatch(s)(t);
                      if (l === i) {
                        c && c._pushContext();
                        var u = e.reject(l.e);
                        return c && c._popContext(), u;
                      }
                      if ("function" == typeof l)
                        return (function (t, o, s) {
                          var a = new e(r),
                            c = a;
                          s && s._pushContext(),
                            a._captureStackTrace(),
                            s && s._popContext();
                          var u = !0,
                            l = n.tryCatch(o).call(
                              t,
                              function (t) {
                                a && (a._resolveCallback(t), (a = null));
                              },
                              function (t) {
                                a && (a._rejectCallback(t, u, !0), (a = null));
                              },
                              function (t) {
                                a &&
                                  "function" == typeof a._progress &&
                                  a._progress(t);
                              }
                            );
                          return (
                            (u = !1),
                            a &&
                              l === i &&
                              (a._rejectCallback(l.e, !0, !0), (a = null)),
                            c
                          );
                        })(t, l, c);
                    }
                    return t;
                  };
                };
              },
              { "./util.js": 38 },
            ],
            36: [
              function (t, e, r) {
                "use strict";
                e.exports = function (e, r) {
                  var n = t("./util.js"),
                    i = e.TimeoutError,
                    o = function (t) {
                      return s(+this).thenReturn(t);
                    },
                    s = (e.delay = function (t, n) {
                      if (void 0 === n) {
                        (n = t), (t = void 0);
                        var i = new e(r);
                        return (
                          setTimeout(function () {
                            i._fulfill();
                          }, n),
                          i
                        );
                      }
                      return (
                        (n = +n), e.resolve(t)._then(o, null, null, n, void 0)
                      );
                    });
                  function a(t) {
                    var e = this;
                    return e instanceof Number && (e = +e), clearTimeout(e), t;
                  }
                  function c(t) {
                    var e = this;
                    throw (e instanceof Number && (e = +e), clearTimeout(e), t);
                  }
                  (e.prototype.delay = function (t) {
                    return s(this, t);
                  }),
                    (e.prototype.timeout = function (t, e) {
                      t = +t;
                      var r = this.then().cancellable();
                      r._cancellationParent = this;
                      var o = setTimeout(function () {
                        !(function (t, e) {
                          var r;
                          t.isPending() &&
                            (!n.isPrimitive(e) && e instanceof Error
                              ? (r = e)
                              : ("string" != typeof e &&
                                  (e = "operation timed out"),
                                (r = new i(e))),
                            n.markAsOriginatingFromRejection(r),
                            t._attachExtraTrace(r),
                            t._cancel(r));
                        })(r, e);
                      }, t);
                      return r._then(a, c, void 0, o, void 0);
                    });
                };
              },
              { "./util.js": 38 },
            ],
            37: [
              function (t, e, r) {
                "use strict";
                e.exports = function (e, r, n, i) {
                  var o = t("./errors.js").TypeError,
                    s = t("./util.js").inherits,
                    a = e.PromiseInspection;
                  function c(t) {
                    for (var r = t.length, n = 0; n < r; ++n) {
                      var i = t[n];
                      if (i.isRejected()) return e.reject(i.error());
                      t[n] = i._settledValue;
                    }
                    return t;
                  }
                  function u(t) {
                    setTimeout(function () {
                      throw t;
                    }, 0);
                  }
                  function l(t, r) {
                    var i = 0,
                      o = t.length,
                      s = e.defer();
                    return (
                      (function a() {
                        if (i >= o) return s.resolve();
                        var c = (function (t) {
                          var e = n(t);
                          return (
                            e !== t &&
                              "function" == typeof t._isDisposable &&
                              "function" == typeof t._getDisposer &&
                              t._isDisposable() &&
                              e._setDisposable(t._getDisposer()),
                            e
                          );
                        })(t[i++]);
                        if (c instanceof e && c._isDisposable()) {
                          try {
                            c = n(c._getDisposer().tryDispose(r), t.promise);
                          } catch (t) {
                            return u(t);
                          }
                          if (c instanceof e)
                            return c._then(a, u, null, null, null);
                        }
                        a();
                      })(),
                      s.promise
                    );
                  }
                  function p(t) {
                    var e = new a();
                    return (
                      (e._settledValue = t),
                      (e._bitField = 268435456),
                      l(this, e).thenReturn(t)
                    );
                  }
                  function h(t) {
                    var e = new a();
                    return (
                      (e._settledValue = t),
                      (e._bitField = 134217728),
                      l(this, e).thenThrow(t)
                    );
                  }
                  function f(t, e, r) {
                    (this._data = t), (this._promise = e), (this._context = r);
                  }
                  function d(t, e, r) {
                    this.constructor$(t, e, r);
                  }
                  function _(t) {
                    return f.isDisposer(t)
                      ? (this.resources[this.index]._setDisposable(t),
                        t.promise())
                      : t;
                  }
                  (f.prototype.data = function () {
                    return this._data;
                  }),
                    (f.prototype.promise = function () {
                      return this._promise;
                    }),
                    (f.prototype.resource = function () {
                      return this.promise().isFulfilled()
                        ? this.promise().value()
                        : null;
                    }),
                    (f.prototype.tryDispose = function (t) {
                      var e = this.resource(),
                        r = this._context;
                      void 0 !== r && r._pushContext();
                      var n = null !== e ? this.doDispose(e, t) : null;
                      return (
                        void 0 !== r && r._popContext(),
                        this._promise._unsetDisposable(),
                        (this._data = null),
                        n
                      );
                    }),
                    (f.isDisposer = function (t) {
                      return (
                        null != t &&
                        "function" == typeof t.resource &&
                        "function" == typeof t.tryDispose
                      );
                    }),
                    s(d, f),
                    (d.prototype.doDispose = function (t, e) {
                      var r = this.data();
                      return r.call(t, t, e);
                    }),
                    (e.using = function () {
                      var t = arguments.length;
                      if (t < 2)
                        return r(
                          "you must pass at least 2 arguments to Promise.using"
                        );
                      var i,
                        o = arguments[t - 1];
                      if ("function" != typeof o)
                        return r(
                          "fn must be a function\n\n    See http://goo.gl/916lJJ\n"
                        );
                      var s = !0;
                      2 === t && Array.isArray(arguments[0])
                        ? ((i = arguments[0]), (t = i.length), (s = !1))
                        : ((i = arguments), t--);
                      for (var a = new Array(t), u = 0; u < t; ++u) {
                        var l = i[u];
                        if (f.isDisposer(l)) {
                          var d = l;
                          (l = l.promise())._setDisposable(d);
                        } else {
                          var g = n(l);
                          g instanceof e &&
                            (l = g._then(
                              _,
                              null,
                              null,
                              { resources: a, index: u },
                              void 0
                            ));
                        }
                        a[u] = l;
                      }
                      var v = e
                        .settle(a)
                        .then(c)
                        .then(function (t) {
                          var e;
                          v._pushContext();
                          try {
                            e = s ? o.apply(void 0, t) : o.call(void 0, t);
                          } finally {
                            v._popContext();
                          }
                          return e;
                        })
                        ._then(p, h, void 0, a, void 0);
                      return (a.promise = v), v;
                    }),
                    (e.prototype._setDisposable = function (t) {
                      (this._bitField = 262144 | this._bitField),
                        (this._disposer = t);
                    }),
                    (e.prototype._isDisposable = function () {
                      return (262144 & this._bitField) > 0;
                    }),
                    (e.prototype._getDisposer = function () {
                      return this._disposer;
                    }),
                    (e.prototype._unsetDisposable = function () {
                      (this._bitField = -262145 & this._bitField),
                        (this._disposer = void 0);
                    }),
                    (e.prototype.disposer = function (t) {
                      if ("function" == typeof t) return new d(t, this, i());
                      throw new o();
                    });
                };
              },
              { "./errors.js": 13, "./util.js": 38 },
            ],
            38: [
              function (t, r, n) {
                "use strict";
                var i = t("./es5.js"),
                  o = "undefined" == typeof navigator,
                  s = (function () {
                    try {
                      var t = {};
                      return (
                        i.defineProperty(t, "f", {
                          get: function () {
                            return 3;
                          },
                        }),
                        3 === t.f
                      );
                    } catch (t) {
                      return !1;
                    }
                  })(),
                  a = { e: {} },
                  c;
                function u() {
                  try {
                    var t = c;
                    return (c = null), t.apply(this, arguments);
                  } catch (t) {
                    return (a.e = t), a;
                  }
                }
                function l(t) {
                  return (c = t), u;
                }
                var p = function (t, e) {
                  var r = {}.hasOwnProperty;
                  function n() {
                    for (var n in ((this.constructor = t),
                    (this.constructor$ = e),
                    e.prototype))
                      r.call(e.prototype, n) &&
                        "$" !== n.charAt(n.length - 1) &&
                        (this[n + "$"] = e.prototype[n]);
                  }
                  return (
                    (n.prototype = e.prototype),
                    (t.prototype = new n()),
                    t.prototype
                  );
                };
                function h(t) {
                  return (
                    null == t ||
                    !0 === t ||
                    !1 === t ||
                    "string" == typeof t ||
                    "number" == typeof t
                  );
                }
                function f(t) {
                  return !h(t);
                }
                function d(t) {
                  return h(t) ? new Error(x(t)) : t;
                }
                function _(t, e) {
                  var r,
                    n = t.length,
                    i = new Array(n + 1);
                  for (r = 0; r < n; ++r) i[r] = t[r];
                  return (i[r] = e), i;
                }
                function g(t, e, r) {
                  if (!i.isES5)
                    return {}.hasOwnProperty.call(t, e) ? t[e] : void 0;
                  var n = Object.getOwnPropertyDescriptor(t, e);
                  return null != n
                    ? null == n.get && null == n.set
                      ? n.value
                      : r
                    : void 0;
                }
                function v(t, e, r) {
                  if (h(t)) return t;
                  var n = {
                    value: r,
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                  };
                  return i.defineProperty(t, e, n), t;
                }
                function y(t) {
                  throw t;
                }
                var m = (function () {
                    var t = [
                        Array.prototype,
                        Object.prototype,
                        Function.prototype,
                      ],
                      e = function (e) {
                        for (var r = 0; r < t.length; ++r)
                          if (t[r] === e) return !0;
                        return !1;
                      };
                    if (i.isES5) {
                      var r = Object.getOwnPropertyNames;
                      return function (t) {
                        for (
                          var n = [], o = Object.create(null);
                          null != t && !e(t);

                        ) {
                          var s;
                          try {
                            s = r(t);
                          } catch (t) {
                            return n;
                          }
                          for (var a = 0; a < s.length; ++a) {
                            var c = s[a];
                            if (!o[c]) {
                              o[c] = !0;
                              var u = Object.getOwnPropertyDescriptor(t, c);
                              null != u &&
                                null == u.get &&
                                null == u.set &&
                                n.push(c);
                            }
                          }
                          t = i.getPrototypeOf(t);
                        }
                        return n;
                      };
                    }
                    var n = {}.hasOwnProperty;
                    return function (r) {
                      if (e(r)) return [];
                      var i = [];
                      t: for (var o in r)
                        if (n.call(r, o)) i.push(o);
                        else {
                          for (var s = 0; s < t.length; ++s)
                            if (n.call(t[s], o)) continue t;
                          i.push(o);
                        }
                      return i;
                    };
                  })(),
                  j = /this\s*\.\s*\S+\s*=/;
                function b(t) {
                  try {
                    if ("function" == typeof t) {
                      var e = i.names(t.prototype),
                        r = i.isES5 && e.length > 1,
                        n =
                          e.length > 0 &&
                          !(1 === e.length && "constructor" === e[0]),
                        o = j.test(t + "") && i.names(t).length > 0;
                      if (r || n || o) return !0;
                    }
                    return !1;
                  } catch (t) {
                    return !1;
                  }
                }
                function w(t) {
                  function e() {}
                  e.prototype = t;
                  for (var r = 8; r--; ) new e();
                  return t;
                }
                var k = /^[a-z$_][a-z$_0-9]*$/i;
                function E(t) {
                  return k.test(t);
                }
                function F(t, e, r) {
                  for (var n = new Array(t), i = 0; i < t; ++i)
                    n[i] = e + i + r;
                  return n;
                }
                function x(t) {
                  try {
                    return t + "";
                  } catch (t) {
                    return "[no string representation]";
                  }
                }
                function T(t) {
                  try {
                    v(t, "isOperational", !0);
                  } catch (t) {}
                }
                function C(t) {
                  return (
                    null != t &&
                    (t instanceof
                      Error.__BluebirdErrorTypes__.OperationalError ||
                      !0 === t.isOperational)
                  );
                }
                function P(t) {
                  return t instanceof Error && i.propertyIsWritable(t, "stack");
                }
                var A =
                  "stack" in new Error()
                    ? function (t) {
                        return P(t) ? t : new Error(x(t));
                      }
                    : function (t) {
                        if (P(t)) return t;
                        try {
                          throw new Error(x(t));
                        } catch (t) {
                          return t;
                        }
                      };
                function R(t) {
                  return {}.toString.call(t);
                }
                function S(t, e, r) {
                  for (var n = i.names(t), o = 0; o < n.length; ++o) {
                    var s = n[o];
                    if (r(s))
                      try {
                        i.defineProperty(e, s, i.getDescriptor(t, s));
                      } catch (t) {}
                  }
                }
                var O = {
                    isClass: b,
                    isIdentifier: E,
                    inheritedDataKeys: m,
                    getDataPropertyOrDefault: g,
                    thrower: y,
                    isArray: i.isArray,
                    haveGetters: s,
                    notEnumerableProp: v,
                    isPrimitive: h,
                    isObject: f,
                    canEvaluate: o,
                    errorObj: a,
                    tryCatch: l,
                    inherits: p,
                    withAppended: _,
                    maybeWrapAsError: d,
                    toFastProperties: w,
                    filledRange: F,
                    toString: x,
                    canAttachTrace: P,
                    ensureErrorObject: A,
                    originatesFromRejection: C,
                    markAsOriginatingFromRejection: T,
                    classString: R,
                    copyDescriptors: S,
                    hasDevTools:
                      "undefined" != typeof chrome &&
                      chrome &&
                      "function" == typeof chrome.loadTimes,
                    isNode:
                      void 0 !== e && "[object process]" === R(e).toLowerCase(),
                  },
                  L;
                (O.isRecentNode =
                  O.isNode &&
                  ((L = e.versions.node.split(".").map(Number)),
                  (0 === L[0] && L[1] > 10) || L[0] > 0)),
                  O.isNode && O.toFastProperties(e);
                try {
                  throw new Error();
                } catch (t) {
                  O.lastLineError = t;
                }
                r.exports = O;
              },
              { "./es5.js": 14 },
            ],
          },
          {},
          [4]
        )(4);
      })()),
        "undefined" != typeof window && null !== window
          ? (window.P = window.Promise)
          : "undefined" != typeof self &&
            null !== self &&
            (self.P = self.Promise);
    }).call(this, r(19), r(12));
  },
  8: function (t, e, r) {
    "use strict";
    Object.defineProperty(e, "__esModule", { value: !0 });
    var n,
      i = r(33),
      o = (n = i) && n.__esModule ? n : { default: n };
    function s(t) {
      return function (...e) {
        return new o.default((r, n) => {
          e.push((t) => {
            window.chrome.runtime.lastError
              ? n(window.chrome.runtime.lastError.message)
              : r(t);
          }),
            t.apply(this, e);
        });
      };
    }
    !(function t(e) {
      Object.values(e)
        .filter(
          (t) =>
            "object" == typeof t &&
            null !== t &&
            !Object.keys(t).some((t) => /Async$/.test(t))
        )
        .forEach((e) => {
          o.default.promisifyAll(e, { promisifier: s }), t(e);
        });
    })(window.chrome);
    const a = window.chrome;
    (e.default = a), (t.exports = e.default);
  },
  832: function (t, e, r) {
    "use strict";
    var n,
      i = r(8),
      o = (n = i) && n.__esModule ? n : { default: n };
    const s = document.createElement("script"),
      a = o.default.runtime.id;
    (s.text = `window['_docs_force_html_by_ext'] = '${a}';window['_docs_annotate_canvas_by_ext'] = '${a}'`),
      document.documentElement.appendChild(s);
  },
});
