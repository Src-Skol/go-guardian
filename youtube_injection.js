!(function (e) {
  var t = {};

  function i(n) {
    if (t[n]) return t[n].exports;
    var r = (t[n] = {
      i: n,
      l: !1,
      exports: {},
    });
    return e[n].call(r.exports, r, r.exports, i), (r.l = !0), r.exports;
  }
  (i.m = e),
    (i.c = t),
    (i.d = function (e, t, n) {
      i.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: n,
        });
    }),
    (i.r = function (e) {
      Object.defineProperty(e, "__esModule", {
        value: !0,
      });
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = ""),
    i((i.s = 868));
})({
  12: function (e, t) {
    var i;
    i = (function () {
      return this;
    })();
    try {
      i = i || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == typeof window && (i = window);
    }
    e.exports = i;
  },
  140: function (e, t) {
    for (var i = [], n = 0; n < 256; ++n)
      i[n] = (n + 256).toString(16).substr(1);
    e.exports = function (e, t) {
      var n = t || 0,
        r = i;
      return (
        r[e[n++]] +
        r[e[n++]] +
        r[e[n++]] +
        r[e[n++]] +
        "-" +
        r[e[n++]] +
        r[e[n++]] +
        "-" +
        r[e[n++]] +
        r[e[n++]] +
        "-" +
        r[e[n++]] +
        r[e[n++]] +
        "-" +
        r[e[n++]] +
        r[e[n++]] +
        r[e[n++]] +
        r[e[n++]] +
        r[e[n++]] +
        r[e[n++]]
      );
    };
  },
  141: function (e, t, i) {
    (function (t) {
      var i,
        n = t.crypto || t.msCrypto;
      if (n && n.getRandomValues) {
        var r = new Uint8Array(16);
        i = function () {
          return n.getRandomValues(r), r;
        };
      }
      if (!i) {
        var o = new Array(16);
        i = function () {
          for (var e, t = 0; t < 16; t++)
            0 == (3 & t) && (e = 4294967296 * Math.random()),
              (o[t] = (e >>> ((3 & t) << 3)) & 255);
          return o;
        };
      }
      e.exports = i;
    }).call(this, i(12));
  },
  143: function (e, t, i) {
    var n = i(302),
      r = i(301),
      o = r;
    (o.v1 = n), (o.v4 = r), (e.exports = o);
  },
  146: function (e, t) {
    var i = Object.prototype.toString;
    e.exports = function (e) {
      return i.call(e);
    };
  },
  147: function (e, t, i) {
    var n = i(62),
      r = Object.prototype,
      o = r.hasOwnProperty,
      a = r.toString,
      s = n ? n.toStringTag : void 0;
    e.exports = function (e) {
      var t = o.call(e, s),
        i = e[s];
      try {
        e[s] = void 0;
        var n = !0;
      } catch (e) {}
      var r = a.call(e);
      return n && (t ? (e[s] = i) : delete e[s]), r;
    };
  },
  301: function (e, t, i) {
    var n = i(141),
      r = i(140);
    e.exports = function (e, t, i) {
      var o = (t && i) || 0;
      "string" == typeof e &&
        ((t = "binary" == e ? new Array(16) : null), (e = null));
      var a = (e = e || {}).random || (e.rng || n)();
      if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), t))
        for (var s = 0; s < 16; ++s) t[o + s] = a[s];
      return t || r(a);
    };
  },
  302: function (e, t, i) {
    var n = i(141),
      r = i(140),
      o = n(),
      a = [1 | o[0], o[1], o[2], o[3], o[4], o[5]],
      s = 16383 & ((o[6] << 8) | o[7]),
      l = 0,
      d = 0;
    e.exports = function (e, t, i) {
      var n = (t && i) || 0,
        o = t || [],
        c = void 0 !== (e = e || {}).clockseq ? e.clockseq : s,
        u = void 0 !== e.msecs ? e.msecs : new Date().getTime(),
        h = void 0 !== e.nsecs ? e.nsecs : d + 1,
        p = u - l + (h - d) / 1e4;
      if (
        (p < 0 && void 0 === e.clockseq && (c = (c + 1) & 16383),
        (p < 0 || u > l) && void 0 === e.nsecs && (h = 0),
        h >= 1e4)
      )
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      (l = u), (d = h), (s = c);
      var y = (1e4 * (268435455 & (u += 122192928e5)) + h) % 4294967296;
      (o[n++] = (y >>> 24) & 255),
        (o[n++] = (y >>> 16) & 255),
        (o[n++] = (y >>> 8) & 255),
        (o[n++] = 255 & y);
      var f = ((u / 4294967296) * 1e4) & 268435455;
      (o[n++] = (f >>> 8) & 255),
        (o[n++] = 255 & f),
        (o[n++] = ((f >>> 24) & 15) | 16),
        (o[n++] = (f >>> 16) & 255),
        (o[n++] = (c >>> 8) | 128),
        (o[n++] = 255 & c);
      for (var v = e.node || a, g = 0; g < 6; ++g) o[n + g] = v[g];
      return t || r(o);
    };
  },
  34: function (e, t) {
    e.exports = function (e) {
      var t = typeof e;
      return null != e && ("object" == t || "function" == t);
    };
  },
  35: function (e, t, i) {
    var n = i(89),
      r = "object" == typeof self && self && self.Object === Object && self,
      o = n || r || Function("return this")();
    e.exports = o;
  },
  43: function (e, t) {
    e.exports = function (e) {
      return null != e && "object" == typeof e;
    };
  },
  44: function (e, t, i) {
    var n = i(62),
      r = i(147),
      o = i(146),
      a = "[object Null]",
      s = "[object Undefined]",
      l = n ? n.toStringTag : void 0;
    e.exports = function (e) {
      return null == e
        ? void 0 === e
          ? s
          : a
        : l && l in Object(e)
        ? r(e)
        : o(e);
    };
  },
  592: function (e, t, i) {
    var n = i(44),
      r = i(43),
      o = "[object Symbol]";
    e.exports = function (e) {
      return "symbol" == typeof e || (r(e) && n(e) == o);
    };
  },
  62: function (e, t, i) {
    var n = i(35).Symbol;
    e.exports = n;
  },
  658: function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0,
    }),
      (t.MsgToCS = function (e) {
        return new CustomEvent("GG_YT_MSG_FROM_PAGE", {
          detail: {
            action: e,
          },
        });
      });
  },
  860: function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    (t.default = {
      holder:
        "position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: 4;",
      titleDiv:
        "font-size: 15px;\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  position:absolute;\n  color:white;\n  top: 0px;\n  left: 0px;\n  background: -webkit-gradient(linear, left top, right top,\n  color-stop(2%,rgba(0,0,0,1)),\n  color-stop(50%,rgba(0,0,0,1)),\n  color-stop(98%,rgba(0, 0, 0, 0.25)),\n  color-stop(100%,rgba(0, 0, 0, 0)));\n  padding: 5px 0px;",
      titleSpan: "margin-left: 10px; margin-right: 10px;",
      lockDiv:
        "text-align: center;\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n  padding: 4px;\n  color: #4098D7;\n  width: 100px",
      lockImage:
        "width: 100%;\n  -webkit-border-image: none;\n  border: none;\n  background: none;",
      blockedDiv:
        "font-size: 16px;\n  background: -webkit-gradient(linear, left top, right top,\n  color-stop(0%,rgba(0, 0, 0, 0)),\n  color-stop(2%,rgba(0, 0, 0, 0.25)),\n  color-stop(50%,rgba(0,0,0,1)),\n  color-stop(98%,rgba(0, 0, 0, 0.25)),\n  color-stop(100%,rgba(0, 0, 0, 0)));\n  overflow:hidden;\n  line-height: 1.3;\n  width:100%;\n  position: absolute;\n  color:white;\n  top: 45%;\n  left: 0px;\n  text-align: center;\n  padding: 5px 0px;",
      backgroundImage:
        "top: 0px;\n  left: 0px;\n  background-size: cover;\n  margin: 0px;\n  border: 0px;\n  width: 100%;\n  height: 100%;\n  -webkit-filter: blur(15px);",
    }),
      (e.exports = t.default);
  },
  861: function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0,
    });
    var n,
      r = i(860),
      o =
        (n = r) && n.__esModule
          ? n
          : {
              default: n,
            };
    (t.default = class {
      constructor(e, t = "", i) {
        (this.videoId = e),
          (this.videoTitle = t),
          (this.reason = i),
          this.createOverlay();
      }
      createOverlay() {
        (this.overlay = document.createElement("div")),
          (this.overlay.id = "goguardian-youtube-filter"),
          (this.overlay.style.cssText = o.default.holder),
          (this.overlay.innerHTML = `<div style="background: url(https://i.ytimg.com/vi/${this.videoId}/hqdefault.jpg) no-repeat; ${o.default.backgroundImage}"></div>\n      <div class="gg-player-title" style="${o.default.titleDiv}" title="${this.videoTitle}">\n        <span style="${o.default.titleSpan}">${this.videoTitle}</span>\n      </div>\n      <div style="${o.default.lockDiv}">\n        <img style="${o.default.lockImage}" src="https://static.goguardian.com/images/logos/shared/gg-dark-shield-notification.png">\n      </div>\n      <div class="gg-player-blocked" style="${o.default.blockedDiv}">\n        <span>This video is blocked because ${this.reason}</span>\n      </div>`);
      }
      html() {
        return this.overlay;
      }
      remove() {
        this.overlay.parentElement &&
          this.overlay.parentElement.removeChild(this.overlay);
      }
    }),
      (e.exports = t.default);
  },
  862: function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0,
    }),
      (t.GoGuardianPlayer = void 0);
    var n,
      r = i(861),
      o =
        (n = r) && n.__esModule
          ? n
          : {
              default: n,
            },
      a = i(658);
    const s = {
        UNSTARTED: -1,
        ENDED: 0,
        PLAYING: 1,
        PAUSED: 2,
        BUFFERING: 3,
        VIDEO_CUED: 5,
      },
      l = [
        "getVideoData",
        "getPlayerResponse",
        "getDebugText",
        "getPlayerState",
        "getVideoUrl",
        "getVideoStats",
        "playVideo",
        "pauseVideo",
        "mute",
        "unMute",
        "addEventListener",
        "removeEventListener",
      ];
    t.GoGuardianPlayer = class {
      constructor(e, t) {
        (this.checkVideo = () => {
          const e = this.getVideoId();
          e &&
            (e !== this.currentVideo.id
              ? (this.currentVideo.id &&
                  this.currentVideo.blocked &&
                  this.restoreVideo(),
                (this.currentVideo.id = e),
                (this.currentVideo.metadata = {}),
                (this.currentVideo.blocked = !1),
                (this.currentVideo.reason = ""),
                window.dispatchEvent(
                  (0, a.MsgToCS)({
                    type: "VIDEO_CHECK",
                    payload: e,
                    meta: this.id,
                  })
                ))
              : this.currentVideo.id &&
                this.currentVideo.blocked &&
                this.blockVideo());
        }),
          (this.id = e),
          (this.player = t),
          (this.currentVideo = {
            id: "",
            metadata: {},
            blocked: !1,
            reason: "",
          }),
          this.verifyPlayerMethods(),
          this.player.addEventListener("onStateChange", this.checkVideo),
          this.checkVideo();
      }
      verifyPlayerMethods() {
        const e = l.filter((e) => !this.player[e]);
        e.length > 0 &&
          window.dispatchEvent(
            (0, a.MsgToCS)({
              type: "COLLECT_METRIC",
              payload: {
                metric: "player_api.missing_methods",
                tags: e,
              },
            })
          );
      }
      cleanup() {
        this.player.removeEventListener("onStateChange", this.checkVideo),
          (this.player.style.display = ""),
          this.overlay && (this.overlay.remove(), delete this.overlay),
          (this.currentVideo.id = ""),
          (this.currentVideo.metadata = {}),
          (this.currentVideo.blocked = !1),
          (this.currentVideo.reason = "");
      }
      getVideoId() {
        if (this.player.getVideoData) {
          const e = this.player.getVideoData();
          if (e) return e.video_id;
        }
        if (this.player.getPlayerResponse) {
          const e = this.player.getPlayerResponse();
          if (e && e.videoDetails) return e.videoDetails.videoId;
        }
        if (this.player.getDebugText) {
          const e = this.player.getDebugText();
          if (e)
            try {
              const t = JSON.parse(e);
              if (t) return t.debug_videoId;
            } catch (e) {}
        }
        if (this.player.getVideoUrl) {
          const e = this.player.getVideoUrl();
          if (e)
            try {
              const t = new URL(e),
                i = new URLSearchParams(t.searchParams);
              if (i.get("v")) return i.get("v");
            } catch (e) {}
        }
        if (this.player.getVideoStats) {
          const e = this.player.getVideoStats();
          if (e) return e.debug_videoId;
        }
        return "";
      }
      constructOverlay() {
        const { id: e, metadata: t, reason: i } = this.currentVideo;
        this.overlay = new o.default(e, t.title, i);
      }
      blockVideo() {
        this.player.pauseVideo(),
          this.player.mute(),
          "none" !== this.player.style.display &&
            (this.player.style.display = "none");
        const e = this.overlay.html(),
          t = this.player.parentElement;
        t && !t.contains(e) && t.appendChild(e),
          setTimeout(() => {
            this.player.getAdState &&
              this.player.cancelPlayback &&
              1 === this.player.getAdState() &&
              this.player.cancelPlayback();
          }, 1e3);
      }
      restoreVideo() {
        this.overlay && this.overlay.remove(),
          (this.player.style.display = ""),
          this.player.playVideo(),
          this.player.unMute();
      }
      trackVideo() {
        this.player.getPlayerState() === s.PLAYING
          ? this.messageVideoPlayed()
          : this.listenForVideoPlay(this.currentVideo.id);
      }
      listenForVideoPlay(e) {
        const t = (i) => {
          i === s.PLAYING &&
            (this.player.removeEventListener("onStateChange", t),
            e === this.currentVideo.id && this.messageVideoPlayed());
        };
        this.player.addEventListener("onStateChange", t);
      }
      messageVideoPlayed() {
        window.dispatchEvent(
          (0, a.MsgToCS)({
            type: "VIDEO_PLAYED",
            payload: this.currentVideo.metadata,
          })
        );
      }
    };
  },
  863: function (e, t, i) {
    var n = i(34),
      r = i(592),
      o = NaN,
      a = /^\s+|\s+$/g,
      s = /^[-+]0x[0-9a-f]+$/i,
      l = /^0b[01]+$/i,
      d = /^0o[0-7]+$/i,
      c = parseInt;
    e.exports = function (e) {
      if ("number" == typeof e) return e;
      if (r(e)) return o;
      if (n(e)) {
        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
        e = n(t) ? t + "" : t;
      }
      if ("string" != typeof e) return 0 === e ? e : +e;
      e = e.replace(a, "");
      var i = l.test(e);
      return i || d.test(e) ? c(e.slice(2), i ? 2 : 8) : s.test(e) ? o : +e;
    };
  },
  864: function (e, t, i) {
    var n = i(35);
    e.exports = function () {
      return n.Date.now();
    };
  },
  865: function (e, t, i) {
    var n = i(34),
      r = i(864),
      o = i(863),
      a = "Expected a function",
      s = Math.max,
      l = Math.min;
    e.exports = function (e, t, i) {
      var d,
        c,
        u,
        h,
        p,
        y,
        f = 0,
        v = !1,
        g = !1,
        b = !0;
      if ("function" != typeof e) throw new TypeError(a);

      function m(t) {
        var i = d,
          n = c;
        return (d = c = void 0), (f = t), (h = e.apply(n, i));
      }

      function V(e) {
        var i = e - y;
        return void 0 === y || i >= t || i < 0 || (g && e - f >= u);
      }

      function w() {
        var e = r();
        if (V(e)) return x(e);
        p = setTimeout(
          w,
          (function (e) {
            var i = t - (e - y);
            return g ? l(i, u - (e - f)) : i;
          })(e)
        );
      }

      function x(e) {
        return (p = void 0), b && d ? m(e) : ((d = c = void 0), h);
      }

      function E() {
        var e = r(),
          i = V(e);
        if (((d = arguments), (c = this), (y = e), i)) {
          if (void 0 === p)
            return (function (e) {
              return (f = e), (p = setTimeout(w, t)), v ? m(e) : h;
            })(y);
          if (g) return (p = setTimeout(w, t)), m(y);
        }
        return void 0 === p && (p = setTimeout(w, t)), h;
      }
      return (
        (t = o(t) || 0),
        n(i) &&
          ((v = !!i.leading),
          (u = (g = "maxWait" in i) ? s(o(i.maxWait) || 0, t) : u),
          (b = "trailing" in i ? !!i.trailing : b)),
        (E.cancel = function () {
          void 0 !== p && clearTimeout(p), (f = 0), (d = y = c = p = void 0);
        }),
        (E.flush = function () {
          return void 0 === p ? h : x(r());
        }),
        E
      );
    };
  },
  866: function (e, t, i) {
    var n = i(865),
      r = i(34),
      o = "Expected a function";
    e.exports = function (e, t, i) {
      var a = !0,
        s = !0;
      if ("function" != typeof e) throw new TypeError(o);
      return (
        r(i) &&
          ((a = "leading" in i ? !!i.leading : a),
          (s = "trailing" in i ? !!i.trailing : s)),
        n(e, t, {
          leading: a,
          maxWait: t,
          trailing: s,
        })
      );
    };
  },
  867: function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0,
    }),
      (t.YouTubeInjection = void 0);
    var n = s(i(866)),
      r = s(i(143)),
      o = i(862),
      a = i(658);

    function s(e) {
      return e && e.__esModule
        ? e
        : {
            default: e,
          };
    }
    t.YouTubeInjection = class {
      constructor() {
        (this.handleCSMessage = (e) => {
          const { action: t } = e.detail;
          switch (t.type) {
            case "SETTINGS_RECEIVED":
              this.configure(t.payload);
              break;
            case "VIDEO_CHECK_RESULT":
              this.enforce(t);
              break;
            case "DESTROY":
              this.destroy();
          }
        }),
          (this.onMutation = () => {
            const {
              filterEnabled: e,
              blockComments: t,
              blockSidebar: i,
              blockLiveChat: n,
              selectors: a,
            } = this.settings;
            a.player.forEach((e) => {
              document.querySelectorAll(e).forEach((e) => {
                let t = !1;
                if (
                  (this.ggPlayers.forEach(({ player: i }) => {
                    e === i && (t = !0);
                  }),
                  !t)
                ) {
                  const t = r.default.v4();
                  this.ggPlayers.set(t, new o.GoGuardianPlayer(t, e));
                }
              });
            }),
              this.ggPlayers.forEach(({ player: e }, t) => {
                document.body &&
                  !document.body.contains(e) &&
                  this.ggPlayers.delete(t);
              }),
              e &&
                this.topLevel &&
                (t && this.queryAndHide(a.comments),
                i && this.queryAndHide(a.sidebar),
                n && this.queryAndHide(a.liveChat));
          }),
          (this.enforce = (e) => {
            const {
                videoId: t,
                metadata: i,
                blocked: n,
                reason: r,
              } = e.payload,
              { filterEnabled: o, monitorEnabled: a } = this.settings,
              s = e.meta,
              l = this.ggPlayers.get(s);
            l &&
              (!document.body || document.body.contains(l.player)
                ? ((l.currentVideo.id = t),
                  (l.currentVideo.metadata = i),
                  (l.currentVideo.blocked = n),
                  (l.currentVideo.reason = r),
                  o && n
                    ? (l.constructOverlay(),
                      l.blockVideo(),
                      l.messageVideoPlayed())
                    : a && l.trackVideo())
                : this.ggPlayers.delete(s));
          }),
          (this.enabled = !1),
          (this.topLevel = window.top === window.self),
          (this.ggPlayers = new Map()),
          (this.throttledOnMutation = (0, n.default)(this.onMutation, 1e3, {
            trailing: !0,
            leading: !0,
          })),
          (this.observer = new MutationObserver(this.throttledOnMutation)),
          window.addEventListener("GG_YT_MSG_FROM_CS", this.handleCSMessage),
          window.dispatchEvent(
            (0, a.MsgToCS)({
              type: "SETTINGS_REQUEST",
            })
          ),
          window.dispatchEvent(
            (0, a.MsgToCS)({
              type: "INJECTION_HEALTHY",
            })
          );
      }
      configure(e) {
        this.settings = e;
        const {
          filterEnabled: t,
          monitorEnabled: i,
          blockComments: n,
          blockSidebar: r,
          blockLiveChat: o,
          selectors: a,
        } = this.settings;
        t || i
          ? (this.enable(),
            this.topLevel &&
              ((t && n) || this.queryAndRestore(a.comments),
              (t && r) || this.queryAndRestore(a.sidebar),
              (t && o) || this.queryAndRestore(a.liveChat)),
            this.throttledOnMutation())
          : this.disable();
      }
      enable() {
        this.enabled ||
          (this.observer ||
            (this.observer = new MutationObserver(this.throttledOnMutation)),
          document.body &&
            this.observer.observe(document.body, {
              childList: !0,
              characterData: !1,
              characterDataOldValue: !1,
              attributes: !1,
              attributeOldValue: !1,
              subtree: !0,
            }),
          (this.enabled = !0));
      }
      disable() {
        if (this.enabled) {
          if (
            (this.observer &&
              (this.observer.takeRecords(),
              this.observer.disconnect(),
              this.throttledOnMutation.cancel()),
            this.ggPlayers.forEach((e) => {
              e.cleanup();
            }),
            this.ggPlayers.clear(),
            this.topLevel)
          ) {
            const { selectors: e } = this.settings;
            this.queryAndRestore(e.comments),
              this.queryAndRestore(e.sidebar),
              this.queryAndRestore(e.liveChat);
          }
          this.enabled = !1;
        }
      }
      destroy() {
        this.disable(),
          window.removeEventListener("GG_YT_MSG_FROM_CS", this.handleCSMessage);
      }
      queryAndHide(e) {
        e.some((e) => {
          const t = document.querySelector(e);
          if (t && "none" !== t.style.display)
            return (t.style.display = "none"), !0;
        });
      }
      queryAndRestore(e) {
        e.some((e) => {
          const t = document.querySelector(e);
          if (t && "none" === t.style.display)
            return (t.style.display = ""), !0;
        });
      }
    };
  },
  868: function (e, t, i) {
    "use strict";
    new (i(867).YouTubeInjection)();
  },
  89: function (e, t, i) {
    (function (t) {
      var i = "object" == typeof t && t && t.Object === Object && t;
      e.exports = i;
    }).call(this, i(12));
  },
});
