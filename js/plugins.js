

// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.

/*!
 * ScrollToPlugin 3.11.3
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {}) }(this, function (e) { "use strict"; function k() { return "undefined" != typeof window } function l() { return u || k() && (u = window.gsap) && u.registerPlugin && u } function m(e) { return "string" == typeof e } function n(e) { return "function" == typeof e } function o(e, t) { var o = "x" === t ? "Width" : "Height", n = "scroll" + o, r = "client" + o; return e === T || e === i || e === c ? Math.max(i[n], c[n]) - (T["inner" + o] || i[r] || c[r]) : e[n] - e["offset" + o] } function p(e, t) { var o = "scroll" + ("x" === t ? "Left" : "Top"); return e === T && (null != e.pageXOffset ? o = "page" + t.toUpperCase() + "Offset" : e = null != i[o] ? i : c), function () { return e[o] } } function r(e, t) { if (!(e = f(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || { x: 0, y: 0 }; var o = e.getBoundingClientRect(), n = !t || t === T || t === c, r = n ? { top: i.clientTop - (T.pageYOffset || i.scrollTop || c.scrollTop || 0), left: i.clientLeft - (T.pageXOffset || i.scrollLeft || c.scrollLeft || 0) } : t.getBoundingClientRect(), l = { x: o.left - r.left, y: o.top - r.top }; return !n && t && (l.x += p(t, "x")(), l.y += p(t, "y")()), l } function s(e, t, n, l, s) { return isNaN(e) || "object" == typeof e ? m(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + l - s : "max" === e ? o(t, n) - s : Math.min(o(t, n), r(e, t)[n] - s) : parseFloat(e) - s } function t() { u = l(), k() && u && document.body && (T = window, c = document.body, i = document.documentElement, f = u.utils.toArray, u.config({ autoKillThreshold: 7 }), v = u.config(), a = 1) } var u, a, T, i, c, f, v, y = { version: "3.11.3", name: "scrollTo", rawVars: 1, register: function register(e) { u = e, t() }, init: function init(e, o, r, l, i) { a || t(); var c = this, f = u.getProperty(e, "scrollSnapType"); c.isWin = e === T, c.target = e, c.tween = r, o = function _clean(e, t, o, r) { if (n(e) && (e = e(t, o, r)), "object" != typeof e) return m(e) && "max" !== e && "=" !== e.charAt(1) ? { x: e, y: e } : { y: e }; if (e.nodeType) return { y: e, x: e }; var l, s = {}; for (l in e) s[l] = "onAutoKill" !== l && n(e[l]) ? e[l](t, o, r) : e[l]; return s }(o, l, e, i), c.vars = o, c.autoKill = !!o.autoKill, c.getX = p(e, "x"), c.getY = p(e, "y"), c.x = c.xPrev = c.getX(), c.y = c.yPrev = c.getY(), "smooth" === u.getProperty(e, "scrollBehavior") && u.set(e, { scrollBehavior: "auto" }), f && "none" !== f && (c.snap = 1, c.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), null != o.x ? (c.add(c, "x", c.x, s(o.x, e, "x", c.x, o.offsetX || 0), l, i), c._props.push("scrollTo_x")) : c.skipX = 1, null != o.y ? (c.add(c, "y", c.y, s(o.y, e, "y", c.y, o.offsetY || 0), l, i), c._props.push("scrollTo_y")) : c.skipY = 1 }, render: function render(e, t) { for (var n, r, l, s, i, p = t._pt, c = t.target, f = t.tween, u = t.autoKill, a = t.xPrev, y = t.yPrev, d = t.isWin, x = t.snap, g = t.snapInline; p;)p.r(e, p.d), p = p._next; n = d || !t.skipX ? t.getX() : a, l = (r = d || !t.skipY ? t.getY() : y) - y, s = n - a, i = v.autoKillThreshold, t.x < 0 && (t.x = 0), t.y < 0 && (t.y = 0), u && (!t.skipX && (i < s || s < -i) && n < o(c, "x") && (t.skipX = 1), !t.skipY && (i < l || l < -i) && r < o(c, "y") && (t.skipY = 1), t.skipX && t.skipY && (f.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(f, t.vars.onAutoKillParams || []))), d ? T.scrollTo(t.skipX ? n : t.x, t.skipY ? r : t.y) : (t.skipY || (c.scrollTop = t.y), t.skipX || (c.scrollLeft = t.x)), !x || 1 !== e && 0 !== e || (r = c.scrollTop, n = c.scrollLeft, g ? c.style.scrollSnapType = g : c.style.removeProperty("scroll-snap-type"), c.scrollTop = r + 1, c.scrollLeft = n + 1, c.scrollTop = r, c.scrollLeft = n), t.xPrev = t.x, t.yPrev = t.y }, kill: function kill(e) { var t = "scrollTo" === e; !t && "scrollTo_x" !== e || (this.skipX = 1), !t && "scrollTo_y" !== e || (this.skipY = 1) } }; y.max = o, y.getOffset = r, y.buildGetter = p, l() && u.registerPlugin(y), e.ScrollToPlugin = y, e.default = y; if (typeof (window) === "undefined" || window !== e) { Object.defineProperty(e, "__esModule", { value: !0 }) } else { delete e.default } });
