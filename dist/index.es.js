import ve, { useState as W, useRef as we, useCallback as xe, useEffect as ge } from "react";
var O = { exports: {} }, A = {};
var z;
function Ee() {
  if (z) return A;
  z = 1;
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), u = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(m, a, l) {
    var d = null;
    if (l !== void 0 && (d = "" + l), a.key !== void 0 && (d = "" + a.key), "key" in a) {
      l = {};
      for (var f in a)
        f !== "key" && (l[f] = a[f]);
    } else l = a;
    return a = l.ref, {
      $$typeof: r,
      type: m,
      key: d,
      ref: a !== void 0 ? a : null,
      props: l
    };
  }
  return A.Fragment = u, A.jsx = o, A.jsxs = o, A;
}
var S = {};
var q;
function _e() {
  return q || (q = 1, process.env.NODE_ENV !== "production" && (function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === he ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case g:
          return "Fragment";
        case k:
          return "Profiler";
        case b:
          return "StrictMode";
        case ie:
          return "Suspense";
        case ue:
          return "SuspenseList";
        case pe:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case h:
            return "Portal";
          case le:
            return e.displayName || "Context";
          case E:
            return (e._context.displayName || "Context") + ".Consumer";
          case ce:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case fe:
            return t = e.displayName || null, t !== null ? t : r(e.type) || "Memo";
          case V:
            t = e._payload, e = e._init;
            try {
              return r(e(t));
            } catch {
            }
        }
      return null;
    }
    function u(e) {
      return "" + e;
    }
    function o(e) {
      try {
        u(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var s = t.error, c = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          c
        ), u(e);
      }
    }
    function m(e) {
      if (e === g) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === V)
        return "<...>";
      try {
        var t = r(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = H.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (Y.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function f(e, t) {
      function s() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      s.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: s,
        configurable: !0
      });
    }
    function v() {
      var e = r(this.type);
      return U[e] || (U[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function j(e, t, s, c, y, C) {
      var i = s.ref;
      return e = {
        $$typeof: p,
        type: e,
        key: t,
        props: s,
        _owner: c
      }, (i !== void 0 ? i : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: v
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
        value: y
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: C
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function _(e, t, s, c, y, C) {
      var i = t.children;
      if (i !== void 0)
        if (c)
          if (me(i)) {
            for (c = 0; c < i.length; c++)
              R(i[c]);
            Object.freeze && Object.freeze(i);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else R(i);
      if (Y.call(t, "key")) {
        i = r(e);
        var T = Object.keys(t).filter(function(de) {
          return de !== "key";
        });
        c = 0 < T.length ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}", Z[i + c] || (T = 0 < T.length ? "{" + T.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          c,
          i,
          T,
          i
        ), Z[i + c] = !0);
      }
      if (i = null, s !== void 0 && (o(s), i = "" + s), d(t) && (o(t.key), i = "" + t.key), "key" in t) {
        s = {};
        for (var F in t)
          F !== "key" && (s[F] = t[F]);
      } else s = t;
      return i && f(
        s,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), j(
        e,
        i,
        s,
        a(),
        y,
        C
      );
    }
    function R(e) {
      w(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === V && (e._payload.status === "fulfilled" ? w(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function w(e) {
      return typeof e == "object" && e !== null && e.$$typeof === p;
    }
    var x = ve, p = /* @__PURE__ */ Symbol.for("react.transitional.element"), h = /* @__PURE__ */ Symbol.for("react.portal"), g = /* @__PURE__ */ Symbol.for("react.fragment"), b = /* @__PURE__ */ Symbol.for("react.strict_mode"), k = /* @__PURE__ */ Symbol.for("react.profiler"), E = /* @__PURE__ */ Symbol.for("react.consumer"), le = /* @__PURE__ */ Symbol.for("react.context"), ce = /* @__PURE__ */ Symbol.for("react.forward_ref"), ie = /* @__PURE__ */ Symbol.for("react.suspense"), ue = /* @__PURE__ */ Symbol.for("react.suspense_list"), fe = /* @__PURE__ */ Symbol.for("react.memo"), V = /* @__PURE__ */ Symbol.for("react.lazy"), pe = /* @__PURE__ */ Symbol.for("react.activity"), he = /* @__PURE__ */ Symbol.for("react.client.reference"), H = x.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Y = Object.prototype.hasOwnProperty, me = Array.isArray, N = console.createTask ? console.createTask : function() {
      return null;
    };
    x = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var I, U = {}, $ = x.react_stack_bottom_frame.bind(
      x,
      l
    )(), B = N(m(l)), Z = {};
    S.Fragment = g, S.jsx = function(e, t, s) {
      var c = 1e4 > H.recentlyCreatedOwnerStacks++;
      return _(
        e,
        t,
        s,
        !1,
        c ? Error("react-stack-top-frame") : $,
        c ? N(m(e)) : B
      );
    }, S.jsxs = function(e, t, s) {
      var c = 1e4 > H.recentlyCreatedOwnerStacks++;
      return _(
        e,
        t,
        s,
        !0,
        c ? Error("react-stack-top-frame") : $,
        c ? N(m(e)) : B
      );
    };
  })()), S;
}
var X;
function be() {
  return X || (X = 1, process.env.NODE_ENV === "production" ? O.exports = Ee() : O.exports = _e()), O.exports;
}
var n = be();
const G = 1 / 60, J = 2, K = (r) => r.reduce((u, o) => u + o, 0), Re = (r, u, o, { k: m, b: a, others: l, ki: d, krandom: f, fcap: v }) => {
  const j = -m * (r - o), _ = -a * u, R = K(l.map((E) => Math.sign(r - E) * d / Math.max(Math.pow(r - E, 2), 1e-11))), w = K(l.map((E) => Math.abs(r - E))), x = (Math.random() - 0.5) * f / Math.max(Math.pow(w, 2), 1e-13), p = j + _ + R + x, g = Math.sign(p) * Math.min(Math.abs(p), v), b = u + g * G, k = r + b * G;
  return Math.abs(b) < J && Math.abs(k - o) < J ? {
    newX: o,
    newV: 0,
    done: !0
  } : {
    newX: k,
    newV: b,
    done: !1
  };
}, P = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 139.64 193.46", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M9.92,118.31,118.81,0H132.7L51.34,87.06l88.3,106.4H126.49L44.89,94l-35,37.46v62H0V0H9.92Z" }) }), Q = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 152.29 195.94", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M0,129.23V0H10.17V131c0,33.49,15.13,55.81,66,55.81s66-22.32,66-55.81V0h10.17V129.23c0,40.68-18.85,66.72-76.15,66.72S0,169.9,0,129.23Z" }) }), ee = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 139.14 193.46", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M38.69,58.53,8.93,11.9l.74,67.47V193.46H0V0H12.15l88.3,134.93,29.76,46.63-.74-67.46V0h9.67V193.46H127Z" }) }), L = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 141.87 198.43", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M0,152l10.17-1.49c3.47,25,16.87,38.94,60.77,38.94,27,0,60.77-9.92,60.77-45.14,0-29.52-11.16-40.43-58.53-45.64C32,94.25,6.7,87.55,6.7,51.34,6.7,14.14,37.95,0,71.18,0c47.87,0,65.73,17.86,69.2,44.65l-10.17,1.49c-3.47-24.31-19.84-37.2-59-37.2-18.85,0-54.07,5.7-54.07,42.41,0,25.3,11.66,33.49,56.8,38.2,47.13,5,68,15.38,68,54.82,0,38.44-34,54.07-70.94,54.07C20.09,198.43,3.72,179.33,0,152Z" }) }), te = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 141.38 193.46", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M75.65,193.46H65.73V8.93H0V0H141.38V8.93H75.65Z" }) }), ne = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 174.11 193.45", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M26,58.78,8.93,17.11l.75,62.25V193.45H0V0H11.91l57,138.15L87.05,183l18.1-44.89L162.2,0h11.9V193.45h-9.67V79.37l.75-62.25L148.07,58.78,92.51,193.45H81.59Z" }) }), D = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 9.92 193.45", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M9.92,193.45H0V0H9.92Z" }) }), oe = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 151.3 193.46", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M63.74,193.46H0V0H63.74C120,0,151.3,21.33,151.3,96.73S120,193.46,63.74,193.46Zm2.73-8.93c52.34,0,74.41-20.84,74.41-87.81S118.81,8.93,66.47,8.93H9.92V184.54Z" }) }), se = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 133.94 193.46", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M129,0V8.93H9.92V89.79H119.05v8.93H9.92v85.82h124v8.93H0V0Z" }) }), Te = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 154.77 198.43", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M144.85,165V101.2H95.24V92.27h59.53v76.28c-17.35,21.07-40.16,29.88-72.92,29.88C24.8,198.43,0,160,0,99.21S24.8,0,81.85,0c46.88,0,66.72,21.33,72.43,50.6l-10.42,1.49c-5-27-23.56-43.66-62-43.16C31.5,9.67,10.42,42.66,10.42,99.21S31.49,189.5,81.85,189.5C113.1,189.5,131.72,180.06,144.85,165Z" }) }), je = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 141.87 193.46", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M56.8,96.73,4.96,0H18.11l44.89,82.32L107.89,0h13.15L69.2,96.73l51.84,96.73H107.89L62.75,111.14,17.61,193.46H4.46Z" }) }), ke = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M40,0V40H80V0Z" }) }), re = 57, M = 81, Ae = {
  k: 234,
  b: 18,
  ki: 389,
  krandom: 1992700730,
  fcap: 15036
}, ae = ({ letters: r, targetAnchors: u, width: o = 400, direction: m = "horizontal", constants: a, style: l, mainPage: d }) => {
  const f = m === "vertical", [v, j] = W(
    () => u.map((p) => p * (o - re))
  ), [_, R] = W(
    () => r.map(() => 0)
  ), w = we(null), x = xe(() => {
    w.current = requestAnimationFrame(() => {
      const p = r.map((h, g) => {
        const b = {
          ...Ae,
          ...a,
          others: v.filter((k, E) => E !== g)
        };
        return Re(
          v[g],
          _[g],
          u[g] * (o - re),
          b
        );
      });
      j(p.map((h) => h.newX)), R(p.map((h) => h.newV)), p.every((h) => h.done) || x();
    });
  }, [v, _, o, a, u, r]);
  return ge(() => (w.current !== null && cancelAnimationFrame(w.current), x(), () => {
    w.current !== null && cancelAnimationFrame(w.current);
  }), [o, m, a, x]), f ? /* @__PURE__ */ n.jsx(
    "a",
    {
      style: { ...l, position: "relative", display: "block", width: M, height: o },
      href: d,
      title: "Til forsiden",
      children: /* @__PURE__ */ n.jsx("div", { style: {
        position: "absolute",
        width: o,
        height: M,
        transform: `translateX(${M}px) rotate(90deg)`,
        transformOrigin: "0 0"
      }, children: r.map((p, h) => /* @__PURE__ */ n.jsx(
        p,
        {
          style: { position: "absolute", left: v[h] }
        },
        h
      )) })
    }
  ) : /* @__PURE__ */ n.jsx(
    "a",
    {
      style: { ...l, position: "relative", display: "block", height: M, width: o },
      href: d,
      title: "Til forsiden",
      children: r.map((p, h) => /* @__PURE__ */ n.jsx(
        p,
        {
          style: { position: "absolute", left: v[h] }
        },
        h
      ))
    }
  );
}, ye = ({ width: r = 420, mode: u = "DEFAULT", direction: o = "horizontal", constants: m, style: a, mainPage: l }) => {
  const d = [P, Q, ee, L, te, ne, Q, L, D, P, P, oe, se, L, D, Te, ee], f = {
    KUNST: [0, 0.11859929846017954, 0.24794251789945726, 0.3661171554513721, 0.48661044156241245, 0.6066875599833533, 0.6559793671420038, 0.6990937736217631, 0.7392582023254431, 0.747728771908964, 0.7872618713956905, 0.826794970882417, 0.8696291011627215, 0.9075484891980421, 0.9477129179017221, 0.9561834874852431, 1],
    MUSIKK: [0, 0.03816833536967032, 0.0797943436298185, 0.11782601208682172, 0.15660388188698735, 0.19524781811273922, 0.33801827509956184, 0.46289629988000636, 0.5792299092805033, 0.6037643534425029, 0.7182693595515138, 0.8327743656605249, 0.8741297734335922, 0.9107401059988575, 0.9495179757990231, 0.9576961238530229, 1],
    DESIGN: [0, 0.041969349511149036, 0.08774070612138168, 0.12955977867209262, 0.17219936342679554, 0.21469167676026912, 0.2670211199240199, 0.3127924765342526, 0.35543206128895555, 0.3644246346015707, 0.4063939841127197, 0.4483633336238687, 0.5847847583095644, 0.705553334796029, 0.8334720890601378, 0.8604498089979833, 1],
    DEFAULT: [0, 0.0663817569012973, 0.13877704305496794, 0.2049211110530094, 0.2723629604628279, 0.3395718747474556, 0.42233990463921206, 0.49473519079288264, 0.5621770402027011, 0.576400344173532, 0.6427821010748294, 0.7091638579761266, 0.7810885201013505, 0.8447606235055309, 0.9122024729153494, 0.9264257768861802, 1]
  }, v = f[u] || f.DEFAULT;
  return /* @__PURE__ */ n.jsx(
    ae,
    {
      letters: d,
      targetAnchors: v,
      width: r,
      direction: o,
      constants: m,
      style: a,
      mainPage: l
    }
  );
}, Oe = ({ width: r = 420, mode: u = "DEFAULT", direction: o = "horizontal", constants: m, style: a, mainPage: l }) => {
  const d = [P, ne, oe, se, je, D, te, ke], f = {
    K: [0, 0.1836, 0.3427, 0.4783, 0.616, 0.7619, 0.7721, 0.9176, 1],
    M: [0, 0.1636, 0.3827, 0.4983, 0.616, 0.7619, 0.7721, 0.9176, 1],
    D: [0, 0.1236, 0.3427, 0.5183, 0.646, 0.7219, 0.7721, 0.9176, 1],
    EXIT: [0, 0.1436, 0.3227, 0.4783, 0.616, 0.7619, 0.7721, 0.9176, 1],
    DEFAULT: [0, 0.1436, 0.3227, 0.4783, 0.616, 0.7619, 0.7721, 0.9176, 1]
  }, v = f[u] || f.DEFAULT;
  return /* @__PURE__ */ n.jsx(
    ae,
    {
      letters: d,
      targetAnchors: v,
      width: r,
      direction: o,
      constants: m,
      style: a,
      mainPage: l
    }
  );
};
export {
  ke as Block,
  oe as D,
  se as E,
  Te as G,
  D as I,
  P as K,
  Oe as KMDExitLogo,
  ye as KMDLogo,
  ne as M,
  ee as N,
  L as S,
  te as T,
  Q as U,
  je as X
};
