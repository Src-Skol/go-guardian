!(function (e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = {
      i: r,
      l: !1,
      exports: {},
    });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) ||
        Object.defineProperty(e, t, {
          configurable: !1,
          enumerable: !0,
          get: r,
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
    n((n.s = 859));
})({
  859: function (e, t, n) {
    "use strict";
    if (window.self === window.top) {
      const e = document.createElement("iframe");
      e.setAttribute("role", "dialog"),
        e.setAttribute("aria-label", "GoGuardian Suicide Message"),
        (e.src = chrome.runtime.getURL("beacon/beacon-message.html"));
      const t =
        "\n    position: fixed;\n    bottom: 30px;\n    right: 30px;\n    width: 40%;\n    max-height: 40% !important;\n    height: 165px;\n    z-index: 1000;\n    box-shadow: 2px 3px 0 0 rgba(0, 0, 0, 0.18);";
      (e.style.cssText = t), (e.frameBorder = "0");
      const n = (t) => {
          "CLOSE_BEACON_IFRAME" === t.type &&
            (chrome.runtime.onMessage.removeListener(n),
            e && e.parentNode && e.parentNode.removeChild(e));
        },
        r = () => {
          o.onMessage.removeListener(n),
            e && e.parentNode && e.parentNode.removeChild(e);
        },
        o = chrome.runtime.connect({
          name: "beacon",
        });
      o.onMessage.addListener(n),
        o.onDisconnect.addListener(r),
        document.body.appendChild(e);
      const i = (t) => {
        t.target !== e &&
          (chrome.runtime.sendMessage({
            type: "BEACON_MESSAGE_CLOSED",
            byUser: !1,
          }),
          document.removeEventListener("click", i));
      };
      document.addEventListener("click", i);
    }
  },
});
