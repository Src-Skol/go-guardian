!(function (e) {
  var t = {};

  function n(o) {
    if (t[o]) return t[o].exports;
    var r = (t[o] = {
      i: o,
      l: !1,
      exports: {},
    });
    return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, o) {
      n.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: o,
        });
    }),
    (n.r = function (e) {
      Object.defineProperty(e, "__esModule", {
        value: !0,
      });
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 834));
})({
  834: function (e, t, n) {
    "use strict";
    var o =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
        return e;
      };
    const r = {
        all: "initial",
        position: "absolute",
        "pointer-events": "none",
      },
      i = o({}, r, {
        contain: "layout",
        left: "0",
        top: "0",
        width: "0",
        height: "0",
        "z-index": "2147483647",
      }),
      a = (e) => {
        const t = document.createElement("div");
        Object.entries(
          (({ left: e, top: t, diameter: n, color: i, opacity: a }) =>
            o({}, r, {
              "background-color": i,
              opacity: `${a}`,
              width: `${n}px`,
              height: `${n}px`,
              left: `${e}px`,
              top: `${t}px`,
              "border-radius": "50%",
              "transform-origin": "center center",
              animation: "ggt-annotate-pulse 1.5s ease-in-out infinite both",
            }))(e)
        ).forEach(([e, n]) => {
          t.style.setProperty(e, n, "important");
        });
        const n = document.createElement("div");
        Object.entries(i).forEach(([e, t]) => {
          n.style.setProperty(e, t, "important");
        }),
          n.appendChild(t),
          document.body.appendChild(n),
          setTimeout(() => {
            document.body.removeChild(n);
          }, e.durationMs);
      };
    chrome.runtime.onMessage.addListener((e, t, n) => {
      if ("annotate-screen-request" === e.type)
        try {
          a(e.payload), n("ok");
        } catch (e) {
          console.error(e);
        }
      else
        "get-current-window-state" === e.type &&
          n({
            scrollX: window.scrollX,
            scrollY: window.scrollY,
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth,
            pixelRatio: window.devicePixelRatio,
          });
    });
    const c = document.createElement("style");
    (c.textContent =
      "\n@keyframes ggt-annotate-pulse {\n  from {\n    transform: scale(1);\n  }\n  10% {\n    transform: scale(0.91);\n  }\n  17% {\n    transform: scale(0.98);\n  }\n  33% {\n    transform: scale(0.87);\n  }\n  45% {\n    transform: scale(1);\n  }\n};\n"),
      document.head.appendChild(c);
  },
});
