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
    n((n.s = 858));
})({
  858: function (e, t, n) {
    "use strict";
    if (window.self === window.top) {
      const e = document.createElement("iframe");
      e.setAttribute("role", "dialog"),
        e.setAttribute("aria-label", "GoGuardian Violence Message"),
        (e.src = chrome.runtime.getURL("beacon/beacon-tv-message.html"));
      const t =
        "\n    position: fixed;\n    bottom: 200px;\n    right: 30px;\n    width: 40%;\n    max-height: 40% !important;\n    height: 165px;\n    z-index: 1000;\n    box-shadow: 2px 3px 0 0 rgba(0, 0, 0, 0.18);";
      (e.style.cssText = t), (e.frameBorder = "0");
      const n = (t) => {
          "CLOSE_BEACON_TV_IFRAME" === t.type &&
            (chrome.runtime.onMessage.removeListener(n),
            e && e.parentNode && e.parentNode.removeChild(e));
        },
        o = () => {
          r.onMessage.removeListener(n),
            e && e.parentNode && e.parentNode.removeChild(e);
        },
        r = chrome.runtime.connect({
          name: "tvBeacon",
        });
      r.onMessage.addListener(n),
        r.onDisconnect.addListener(o),
        document.body.appendChild(e);
      const i = (t) => {
        t.target !== e &&
          (chrome.runtime.sendMessage({
            type: "BEACON_TV_MESSAGE_CLOSED",
            byUser: !1,
          }),
          document.removeEventListener("click", i));
      };
      document.addEventListener("click", i);
    }
  },
});
