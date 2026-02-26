import ge, { useState as z, useRef as X, useCallback as Te, useEffect as q } from "react";
var M = { exports: {} }, A = {};
var J;
function _e() {
  if (J) return A;
  J = 1;
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(m, c, a) {
    var h = null;
    if (a !== void 0 && (h = "" + a), c.key !== void 0 && (h = "" + c.key), "key" in c) {
      a = {};
      for (var d in c)
        d !== "key" && (a[d] = c[d]);
    } else a = c;
    return c = a.ref, {
      $$typeof: r,
      type: m,
      key: h,
      ref: c !== void 0 ? c : null,
      props: a
    };
  }
  return A.Fragment = f, A.jsx = o, A.jsxs = o, A;
}
var S = {};
var Q;
function be() {
  return Q || (Q = 1, process.env.NODE_ENV !== "production" && (function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Ee ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case p:
          return "Fragment";
        case x:
          return "Profiler";
        case u:
          return "StrictMode";
        case me:
          return "Suspense";
        case he:
          return "SuspenseList";
        case ve:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case b:
            return "Portal";
          case Y:
            return e.displayName || "Context";
          case T:
            return (e._context.displayName || "Context") + ".Consumer";
          case P:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case de:
            return t = e.displayName || null, t !== null ? t : r(e.type) || "Memo";
          case D:
            t = e._payload, e = e._init;
            try {
              return r(e(t));
            } catch {
            }
        }
      return null;
    }
    function f(e) {
      return "" + e;
    }
    function o(e) {
      try {
        f(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var s = t.error, l = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          l
        ), f(e);
      }
    }
    function m(e) {
      if (e === p) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === D)
        return "<...>";
      try {
        var t = r(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var e = N.A;
      return e === null ? null : e.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function h(e) {
      if (Z.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, t) {
      function s() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      s.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: s,
        configurable: !0
      });
    }
    function E() {
      var e = r(this.type);
      return B[e] || (B[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function w(e, t, s, l, k, C) {
      var i = s.ref;
      return e = {
        $$typeof: g,
        type: e,
        key: t,
        props: s,
        _owner: l
      }, (i !== void 0 ? i : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: E
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: k
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: C
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function R(e, t, s, l, k, C) {
      var i = t.children;
      if (i !== void 0)
        if (l)
          if (we(i)) {
            for (l = 0; l < i.length; l++)
              _(i[l]);
            Object.freeze && Object.freeze(i);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else _(i);
      if (Z.call(t, "key")) {
        i = r(e);
        var O = Object.keys(t).filter(function(xe) {
          return xe !== "key";
        });
        l = 0 < O.length ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}", G[i + l] || (O = 0 < O.length ? "{" + O.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          l,
          i,
          O,
          i
        ), G[i + l] = !0);
      }
      if (i = null, s !== void 0 && (o(s), i = "" + s), h(t) && (o(t.key), i = "" + t.key), "key" in t) {
        s = {};
        for (var I in t)
          I !== "key" && (s[I] = t[I]);
      } else s = t;
      return i && d(
        s,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), w(
        e,
        i,
        s,
        c(),
        k,
        C
      );
    }
    function _(e) {
      j(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === D && (e._payload.status === "fulfilled" ? j(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function j(e) {
      return typeof e == "object" && e !== null && e.$$typeof === g;
    }
    var v = ge, g = /* @__PURE__ */ Symbol.for("react.transitional.element"), b = /* @__PURE__ */ Symbol.for("react.portal"), p = /* @__PURE__ */ Symbol.for("react.fragment"), u = /* @__PURE__ */ Symbol.for("react.strict_mode"), x = /* @__PURE__ */ Symbol.for("react.profiler"), T = /* @__PURE__ */ Symbol.for("react.consumer"), Y = /* @__PURE__ */ Symbol.for("react.context"), P = /* @__PURE__ */ Symbol.for("react.forward_ref"), me = /* @__PURE__ */ Symbol.for("react.suspense"), he = /* @__PURE__ */ Symbol.for("react.suspense_list"), de = /* @__PURE__ */ Symbol.for("react.memo"), D = /* @__PURE__ */ Symbol.for("react.lazy"), ve = /* @__PURE__ */ Symbol.for("react.activity"), Ee = /* @__PURE__ */ Symbol.for("react.client.reference"), N = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = Object.prototype.hasOwnProperty, we = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var $, B = {}, K = v.react_stack_bottom_frame.bind(
      v,
      a
    )(), W = H(m(a)), G = {};
    S.Fragment = p, S.jsx = function(e, t, s) {
      var l = 1e4 > N.recentlyCreatedOwnerStacks++;
      return R(
        e,
        t,
        s,
        !1,
        l ? Error("react-stack-top-frame") : K,
        l ? H(m(e)) : W
      );
    }, S.jsxs = function(e, t, s) {
      var l = 1e4 > N.recentlyCreatedOwnerStacks++;
      return R(
        e,
        t,
        s,
        !0,
        l ? Error("react-stack-top-frame") : K,
        l ? H(m(e)) : W
      );
    };
  })()), S;
}
var ee;
function Re() {
  return ee || (ee = 1, process.env.NODE_ENV === "production" ? M.exports = _e() : M.exports = be()), M.exports;
}
var n = Re();
const re = 1 / 60, te = 2, ne = (r) => r.reduce((f, o) => f + o, 0), je = (r, f, o, { k: m, b: c, others: a, ki: h, krandom: d, fcap: E }) => {
  const w = -m * (r - o), R = -c * f, _ = ne(a.map((T) => Math.sign(r - T) * h / Math.max(Math.pow(r - T, 2), 1e-11))), j = ne(a.map((T) => Math.abs(r - T))), v = (Math.random() - 0.5) * d / Math.max(Math.pow(j, 2), 1e-13), g = w + R + _ + v, p = Math.sign(g) * Math.min(Math.abs(g), E), u = f + p * re, x = r + u * re;
  return Math.abs(u) < te && Math.abs(x - o) < te ? { newX: o, newV: 0, done: !0 } : { newX: x, newV: u, done: !1 };
}, y = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 139.64 193.46", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M9.92,118.31,118.81,0H132.7L51.34,87.06l88.3,106.4H126.49L44.89,94l-35,37.46v62H0V0H9.92Z" }) }), oe = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 152.29 195.94", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M0,129.23V0H10.17V131c0,33.49,15.13,55.81,66,55.81s66-22.32,66-55.81V0h10.17V129.23c0,40.68-18.85,66.72-76.15,66.72S0,169.9,0,129.23Z" }) }), se = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 139.14 193.46", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M38.69,58.53,8.93,11.9l.74,67.47V193.46H0V0H12.15l88.3,134.93,29.76,46.63-.74-67.46V0h9.67V193.46H127Z" }) }), F = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 141.87 198.43", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M0,152l10.17-1.49c3.47,25,16.87,38.94,60.77,38.94,27,0,60.77-9.92,60.77-45.14,0-29.52-11.16-40.43-58.53-45.64C32,94.25,6.7,87.55,6.7,51.34,6.7,14.14,37.95,0,71.18,0c47.87,0,65.73,17.86,69.2,44.65l-10.17,1.49c-3.47-24.31-19.84-37.2-59-37.2-18.85,0-54.07,5.7-54.07,42.41,0,25.3,11.66,33.49,56.8,38.2,47.13,5,68,15.38,68,54.82,0,38.44-34,54.07-70.94,54.07C20.09,198.43,3.72,179.33,0,152Z" }) }), ce = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 141.38 193.46", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M75.65,193.46H65.73V8.93H0V0H141.38V8.93H75.65Z" }) }), le = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 174.11 193.45", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M26,58.78,8.93,17.11l.75,62.25V193.45H0V0H11.91l57,138.15L87.05,183l18.1-44.89L162.2,0h11.9V193.45h-9.67V79.37l.75-62.25L148.07,58.78,92.51,193.45H81.59Z" }) }), U = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 9.92 193.45", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M9.92,193.45H0V0H9.92Z" }) }), ie = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 151.3 193.46", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M63.74,193.46H0V0H63.74C120,0,151.3,21.33,151.3,96.73S120,193.46,63.74,193.46Zm2.73-8.93c52.34,0,74.41-20.84,74.41-87.81S118.81,8.93,66.47,8.93H9.92V184.54Z" }) }), ue = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 133.94 193.46", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M129,0V8.93H9.92V89.79H119.05v8.93H9.92v85.82h124v8.93H0V0Z" }) }), Oe = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 154.77 198.43", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M144.85,165V101.2H95.24V92.27h59.53v76.28c-17.35,21.07-40.16,29.88-72.92,29.88C24.8,198.43,0,160,0,99.21S24.8,0,81.85,0c46.88,0,66.72,21.33,72.43,50.6l-10.42,1.49c-5-27-23.56-43.66-62-43.16C31.5,9.67,10.42,42.66,10.42,99.21S31.49,189.5,81.85,189.5C113.1,189.5,131.72,180.06,144.85,165Z" }) }), Ae = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 141.87 193.46", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M56.8,96.73,4.96,0H18.11l44.89,82.32L107.89,0h13.15L69.2,96.73l51.84,96.73H107.89L62.75,111.14,17.61,193.46H4.46Z" }) }), Se = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M40,0V40H80V0Z" }) }), V = Object.freeze({
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
}), ke = Object.freeze({
  KUNST: "KUNST",
  MUSIKK: "MUSIKK",
  DESIGN: "DESIGN",
  DEFAULT: "DEFAULT"
}), Me = Object.freeze({
  K: "K",
  M: "M",
  D: "D",
  EXIT: "EXIT",
  DEFAULT: "DEFAULT"
}), fe = Object.freeze({
  BLACK: "black",
  WHITE: "white"
}), Ve = V, Le = {
  k: 234,
  b: 18,
  ki: 389,
  krandom: 1992700730,
  fcap: 15036
}, ae = 57, L = 81, pe = ({ letters: r, targetAnchors: f, width: o, direction: m, color: c, constants: a, style: h, href: d }) => {
  const E = m === V.VERTICAL, [w, R] = z(
    () => f.map((p) => p * (o - ae))
  ), [_, j] = z(
    () => r.map(() => 0)
  ), v = X(null), g = X(null), b = Te(() => {
    v.current = requestAnimationFrame(() => {
      const p = r.map((u, x) => {
        const T = {
          ...Le,
          ...a,
          others: w.filter((Y, P) => P !== x)
        };
        return je(
          w[x],
          _[x],
          f[x] * (o - ae),
          T
        );
      });
      R(p.map((u) => u.newX)), j(p.map((u) => u.newV)), p.every((u) => u.done) || g.current?.();
    });
  }, [w, _, o, a, f, r]);
  return q(() => {
    g.current = b;
  }, [b]), q(() => (v.current !== null && cancelAnimationFrame(v.current), b(), () => {
    v.current !== null && cancelAnimationFrame(v.current);
  }), [o, m, a, b]), E ? /* @__PURE__ */ n.jsx(
    "a",
    {
      style: { position: "relative", display: "block", width: L, height: o, ...h },
      href: d,
      title: "Til forsiden",
      children: /* @__PURE__ */ n.jsx("div", { style: {
        position: "absolute",
        width: o,
        height: L,
        transform: `translateX(${L}px) rotate(90deg)`,
        transformOrigin: "0 0"
      }, children: r.map((p, u) => /* @__PURE__ */ n.jsx(
        p,
        {
          fill: c,
          style: { position: "absolute", left: w[u] }
        },
        u
      )) })
    }
  ) : /* @__PURE__ */ n.jsx(
    "a",
    {
      style: { position: "relative", display: "block", height: L, width: o, ...h },
      href: d,
      title: "Til forsiden",
      children: r.map((p, u) => /* @__PURE__ */ n.jsx(
        p,
        {
          fill: c,
          style: { position: "absolute", left: w[u] }
        },
        u
      ))
    }
  );
}, Pe = ({
  width: r = 420,
  mode: f = ke.DEFAULT,
  direction: o = V.HORIZONTAL,
  color: m = fe.WHITE,
  constants: c,
  style: a,
  href: h
}) => {
  const d = [y, oe, se, F, ce, le, oe, F, U, y, y, ie, ue, F, U, Oe, se], E = {
    KUNST: [0, 0.11859929846017954, 0.24794251789945726, 0.3661171554513721, 0.48661044156241245, 0.6066875599833533, 0.6559793671420038, 0.6990937736217631, 0.7392582023254431, 0.747728771908964, 0.7872618713956905, 0.826794970882417, 0.8696291011627215, 0.9075484891980421, 0.9477129179017221, 0.9561834874852431, 1],
    MUSIKK: [0, 0.03816833536967032, 0.0797943436298185, 0.11782601208682172, 0.15660388188698735, 0.19524781811273922, 0.33801827509956184, 0.46289629988000636, 0.5792299092805033, 0.6037643534425029, 0.7182693595515138, 0.8327743656605249, 0.8741297734335922, 0.9107401059988575, 0.9495179757990231, 0.9576961238530229, 1],
    DESIGN: [0, 0.041969349511149036, 0.08774070612138168, 0.12955977867209262, 0.17219936342679554, 0.21469167676026912, 0.2670211199240199, 0.3127924765342526, 0.35543206128895555, 0.3644246346015707, 0.4063939841127197, 0.4483633336238687, 0.5847847583095644, 0.705553334796029, 0.8334720890601378, 0.8604498089979833, 1],
    DEFAULT: [0, 0.0663817569012973, 0.13877704305496794, 0.2049211110530094, 0.2723629604628279, 0.3395718747474556, 0.42233990463921206, 0.49473519079288264, 0.5621770402027011, 0.576400344173532, 0.6427821010748294, 0.7091638579761266, 0.7810885201013505, 0.8447606235055309, 0.9122024729153494, 0.9264257768861802, 1]
  };
  return /* @__PURE__ */ n.jsx(
    pe,
    {
      letters: d,
      targetAnchors: E[f] ?? E.DEFAULT,
      width: r,
      direction: o,
      color: m,
      constants: c,
      style: a,
      href: h
    }
  );
}, De = ({
  width: r = 420,
  mode: f = Me.DEFAULT,
  direction: o = V.HORIZONTAL,
  color: m = fe.WHITE,
  constants: c,
  style: a,
  href: h
}) => {
  const d = [y, le, ie, ue, Ae, U, ce, Se], E = {
    K: [0, 0.1836, 0.3427, 0.4783, 0.616, 0.7619, 0.7721, 0.9176, 1],
    M: [0, 0.1636, 0.3827, 0.4983, 0.616, 0.7619, 0.7721, 0.9176, 1],
    D: [0, 0.1236, 0.3427, 0.5183, 0.646, 0.7219, 0.7721, 0.9176, 1],
    EXIT: [0, 0.1436, 0.3227, 0.4783, 0.616, 0.7619, 0.7721, 0.9176, 1],
    DEFAULT: [0, 0.1436, 0.3227, 0.4783, 0.616, 0.7619, 0.7721, 0.9176, 1]
  };
  return /* @__PURE__ */ n.jsx(
    pe,
    {
      letters: d,
      targetAnchors: E[f] ?? E.DEFAULT,
      width: r,
      direction: o,
      color: m,
      constants: c,
      style: a,
      href: h
    }
  );
};
export {
  Se as Block,
  ie as D,
  ue as E,
  Oe as G,
  U as I,
  y as K,
  De as KMDExitLogo,
  Pe as KMDLogo,
  Ve as KMDLogoDirection,
  Me as KMD_EXIT_LOGO_MODE,
  ke as KMD_LOGO_MODE,
  fe as LOGO_COLOR,
  V as LOGO_DIRECTION,
  le as M,
  se as N,
  F as S,
  ce as T,
  oe as U,
  Ae as X
};
