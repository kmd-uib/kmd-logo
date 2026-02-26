import we, { useState as G, useRef as Ee, useCallback as xe, useEffect as ge } from "react";
var M = { exports: {} }, A = {};
var W;
function Te() {
  if (W) return A;
  W = 1;
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), u = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(m, a, c) {
    var d = null;
    if (c !== void 0 && (d = "" + c), a.key !== void 0 && (d = "" + a.key), "key" in a) {
      c = {};
      for (var f in a)
        f !== "key" && (c[f] = a[f]);
    } else c = a;
    return a = c.ref, {
      $$typeof: r,
      type: m,
      key: d,
      ref: a !== void 0 ? a : null,
      props: c
    };
  }
  return A.Fragment = u, A.jsx = o, A.jsxs = o, A;
}
var S = {};
var X;
function _e() {
  return X || (X = 1, process.env.NODE_ENV !== "production" && (function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === me ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case x:
          return "Fragment";
        case O:
          return "Profiler";
        case _:
          return "StrictMode";
        case ue:
          return "Suspense";
        case fe:
          return "SuspenseList";
        case he:
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
          case g:
            return (e._context.displayName || "Context") + ".Consumer";
          case ie:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case pe:
            return t = e.displayName || null, t !== null ? t : r(e.type) || "Memo";
          case N:
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
        var s = t.error, l = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return s.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          l
        ), u(e);
      }
    }
    function m(e) {
      if (e === x) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === N)
        return "<...>";
      try {
        var t = r(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = P.A;
      return e === null ? null : e.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (U.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function f(e, t) {
      function s() {
        Y || (Y = !0, console.error(
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
      return Z[e] || (Z[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function j(e, t, s, l, k, H) {
      var i = s.ref;
      return e = {
        $$typeof: p,
        type: e,
        key: t,
        props: s,
        _owner: l
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
        value: k
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: H
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function T(e, t, s, l, k, H) {
      var i = t.children;
      if (i !== void 0)
        if (l)
          if (de(i)) {
            for (l = 0; l < i.length; l++)
              b(i[l]);
            Object.freeze && Object.freeze(i);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(i);
      if (U.call(t, "key")) {
        i = r(e);
        var R = Object.keys(t).filter(function(ve) {
          return ve !== "key";
        });
        l = 0 < R.length ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}", K[i + l] || (R = 0 < R.length ? "{" + R.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          l,
          i,
          R,
          i
        ), K[i + l] = !0);
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
        k,
        H
      );
    }
    function b(e) {
      w(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === N && (e._payload.status === "fulfilled" ? w(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function w(e) {
      return typeof e == "object" && e !== null && e.$$typeof === p;
    }
    var E = we, p = /* @__PURE__ */ Symbol.for("react.transitional.element"), h = /* @__PURE__ */ Symbol.for("react.portal"), x = /* @__PURE__ */ Symbol.for("react.fragment"), _ = /* @__PURE__ */ Symbol.for("react.strict_mode"), O = /* @__PURE__ */ Symbol.for("react.profiler"), g = /* @__PURE__ */ Symbol.for("react.consumer"), le = /* @__PURE__ */ Symbol.for("react.context"), ie = /* @__PURE__ */ Symbol.for("react.forward_ref"), ue = /* @__PURE__ */ Symbol.for("react.suspense"), fe = /* @__PURE__ */ Symbol.for("react.suspense_list"), pe = /* @__PURE__ */ Symbol.for("react.memo"), N = /* @__PURE__ */ Symbol.for("react.lazy"), he = /* @__PURE__ */ Symbol.for("react.activity"), me = /* @__PURE__ */ Symbol.for("react.client.reference"), P = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, de = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var Y, Z = {}, $ = E.react_stack_bottom_frame.bind(
      E,
      c
    )(), B = D(m(c)), K = {};
    S.Fragment = x, S.jsx = function(e, t, s) {
      var l = 1e4 > P.recentlyCreatedOwnerStacks++;
      return T(
        e,
        t,
        s,
        !1,
        l ? Error("react-stack-top-frame") : $,
        l ? D(m(e)) : B
      );
    }, S.jsxs = function(e, t, s) {
      var l = 1e4 > P.recentlyCreatedOwnerStacks++;
      return T(
        e,
        t,
        s,
        !0,
        l ? Error("react-stack-top-frame") : $,
        l ? D(m(e)) : B
      );
    };
  })()), S;
}
var z;
function be() {
  return z || (z = 1, process.env.NODE_ENV === "production" ? M.exports = Te() : M.exports = _e()), M.exports;
}
var n = be();
const q = 1 / 60, J = 2, Q = (r) => r.reduce((u, o) => u + o, 0), Re = (r, u, o, { k: m, b: a, others: c, ki: d, krandom: f, fcap: v }) => {
  const j = -m * (r - o), T = -a * u, b = Q(c.map((g) => Math.sign(r - g) * d / Math.max(Math.pow(r - g, 2), 1e-11))), w = Q(c.map((g) => Math.abs(r - g))), E = (Math.random() - 0.5) * f / Math.max(Math.pow(w, 2), 1e-13), p = j + T + b + E, x = Math.sign(p) * Math.min(Math.abs(p), v), _ = u + x * q, O = r + _ * q;
  return Math.abs(_) < J && Math.abs(O - o) < J ? {
    newX: o,
    newV: 0,
    done: !0
  } : {
    newX: O,
    newV: _,
    done: !1
  };
}, L = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 139.64 193.46", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M9.92,118.31,118.81,0H132.7L51.34,87.06l88.3,106.4H126.49L44.89,94l-35,37.46v62H0V0H9.92Z" }) }), ee = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 152.29 195.94", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M0,129.23V0H10.17V131c0,33.49,15.13,55.81,66,55.81s66-22.32,66-55.81V0h10.17V129.23c0,40.68-18.85,66.72-76.15,66.72S0,169.9,0,129.23Z" }) }), re = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 139.14 193.46", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M38.69,58.53,8.93,11.9l.74,67.47V193.46H0V0H12.15l88.3,134.93,29.76,46.63-.74-67.46V0h9.67V193.46H127Z" }) }), C = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 141.87 198.43", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M0,152l10.17-1.49c3.47,25,16.87,38.94,60.77,38.94,27,0,60.77-9.92,60.77-45.14,0-29.52-11.16-40.43-58.53-45.64C32,94.25,6.7,87.55,6.7,51.34,6.7,14.14,37.95,0,71.18,0c47.87,0,65.73,17.86,69.2,44.65l-10.17,1.49c-3.47-24.31-19.84-37.2-59-37.2-18.85,0-54.07,5.7-54.07,42.41,0,25.3,11.66,33.49,56.8,38.2,47.13,5,68,15.38,68,54.82,0,38.44-34,54.07-70.94,54.07C20.09,198.43,3.72,179.33,0,152Z" }) }), ne = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 141.38 193.46", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M75.65,193.46H65.73V8.93H0V0H141.38V8.93H75.65Z" }) }), oe = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 174.11 193.45", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M26,58.78,8.93,17.11l.75,62.25V193.45H0V0H11.91l57,138.15L87.05,183l18.1-44.89L162.2,0h11.9V193.45h-9.67V79.37l.75-62.25L148.07,58.78,92.51,193.45H81.59Z" }) }), I = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 9.92 193.45", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M9.92,193.45H0V0H9.92Z" }) }), se = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 151.3 193.46", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M63.74,193.46H0V0H63.74C120,0,151.3,21.33,151.3,96.73S120,193.46,63.74,193.46Zm2.73-8.93c52.34,0,74.41-20.84,74.41-87.81S118.81,8.93,66.47,8.93H9.92V184.54Z" }) }), ae = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 133.94 193.46", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M129,0V8.93H9.92V89.79H119.05v8.93H9.92v85.82h124v8.93H0V0Z" }) }), je = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 154.77 198.43", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M144.85,165V101.2H95.24V92.27h59.53v76.28c-17.35,21.07-40.16,29.88-72.92,29.88C24.8,198.43,0,160,0,99.21S24.8,0,81.85,0c46.88,0,66.72,21.33,72.43,50.6l-10.42,1.49c-5-27-23.56-43.66-62-43.16C31.5,9.67,10.42,42.66,10.42,99.21S31.49,189.5,81.85,189.5C113.1,189.5,131.72,180.06,144.85,165Z" }) }), Oe = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 141.87 193.46", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M56.8,96.73,4.96,0H18.11l44.89,82.32L107.89,0h13.15L69.2,96.73l51.84,96.73H107.89L62.75,111.14,17.61,193.46H4.46Z" }) }), Ae = (r) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", height: "79px", ...r, children: /* @__PURE__ */ n.jsx("path", { d: "M40,0V40H80V0Z" }) }), V = Object.freeze({
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
}), Se = Object.freeze({
  KUNST: "KUNST",
  MUSIKK: "MUSIKK",
  DESIGN: "DESIGN",
  DEFAULT: "DEFAULT"
}), ke = Object.freeze({
  K: "K",
  M: "M",
  D: "D",
  EXIT: "EXIT",
  DEFAULT: "DEFAULT"
}), te = 57, y = 81, Me = {
  k: 234,
  b: 18,
  ki: 389,
  krandom: 1992700730,
  fcap: 15036
}, ce = ({ letters: r, targetAnchors: u, width: o = 400, direction: m = V.HORIZONTAL, constants: a, style: c, mainPage: d }) => {
  const f = m === V.VERTICAL, [v, j] = G(
    () => u.map((p) => p * (o - te))
  ), [T, b] = G(
    () => r.map(() => 0)
  ), w = Ee(null), E = xe(() => {
    w.current = requestAnimationFrame(() => {
      const p = r.map((h, x) => {
        const _ = {
          ...Me,
          ...a,
          others: v.filter((O, g) => g !== x)
        };
        return Re(
          v[x],
          T[x],
          u[x] * (o - te),
          _
        );
      });
      j(p.map((h) => h.newX)), b(p.map((h) => h.newV)), p.every((h) => h.done) || E();
    });
  }, [v, T, o, a, u, r]);
  return ge(() => (w.current !== null && cancelAnimationFrame(w.current), E(), () => {
    w.current !== null && cancelAnimationFrame(w.current);
  }), [o, m, a, E]), f ? /* @__PURE__ */ n.jsx(
    "a",
    {
      style: { position: "relative", display: "block", width: y, height: o, ...c },
      href: d,
      title: "Til forsiden",
      children: /* @__PURE__ */ n.jsx("div", { style: {
        position: "absolute",
        width: o,
        height: y,
        transform: `translateX(${y}px) rotate(90deg)`,
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
      style: { position: "relative", display: "block", height: y, width: o, ...c },
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
}, Le = ({ width: r = 420, mode: u = Se.DEFAULT, direction: o = V.HORIZONTAL, constants: m, style: a, mainPage: c }) => {
  const d = [L, ee, re, C, ne, oe, ee, C, I, L, L, se, ae, C, I, je, re], f = {
    KUNST: [0, 0.11859929846017954, 0.24794251789945726, 0.3661171554513721, 0.48661044156241245, 0.6066875599833533, 0.6559793671420038, 0.6990937736217631, 0.7392582023254431, 0.747728771908964, 0.7872618713956905, 0.826794970882417, 0.8696291011627215, 0.9075484891980421, 0.9477129179017221, 0.9561834874852431, 1],
    MUSIKK: [0, 0.03816833536967032, 0.0797943436298185, 0.11782601208682172, 0.15660388188698735, 0.19524781811273922, 0.33801827509956184, 0.46289629988000636, 0.5792299092805033, 0.6037643534425029, 0.7182693595515138, 0.8327743656605249, 0.8741297734335922, 0.9107401059988575, 0.9495179757990231, 0.9576961238530229, 1],
    DESIGN: [0, 0.041969349511149036, 0.08774070612138168, 0.12955977867209262, 0.17219936342679554, 0.21469167676026912, 0.2670211199240199, 0.3127924765342526, 0.35543206128895555, 0.3644246346015707, 0.4063939841127197, 0.4483633336238687, 0.5847847583095644, 0.705553334796029, 0.8334720890601378, 0.8604498089979833, 1],
    DEFAULT: [0, 0.0663817569012973, 0.13877704305496794, 0.2049211110530094, 0.2723629604628279, 0.3395718747474556, 0.42233990463921206, 0.49473519079288264, 0.5621770402027011, 0.576400344173532, 0.6427821010748294, 0.7091638579761266, 0.7810885201013505, 0.8447606235055309, 0.9122024729153494, 0.9264257768861802, 1]
  }, v = f[u] || f.DEFAULT;
  return /* @__PURE__ */ n.jsx(
    ce,
    {
      letters: d,
      targetAnchors: v,
      width: r,
      direction: o,
      constants: m,
      style: a,
      mainPage: c
    }
  );
}, Ve = ({ width: r = 420, mode: u = ke.DEFAULT, direction: o = V.HORIZONTAL, constants: m, style: a, mainPage: c }) => {
  const d = [L, oe, se, ae, Oe, I, ne, Ae], f = {
    K: [0, 0.1836, 0.3427, 0.4783, 0.616, 0.7619, 0.7721, 0.9176, 1],
    M: [0, 0.1636, 0.3827, 0.4983, 0.616, 0.7619, 0.7721, 0.9176, 1],
    D: [0, 0.1236, 0.3427, 0.5183, 0.646, 0.7219, 0.7721, 0.9176, 1],
    EXIT: [0, 0.1436, 0.3227, 0.4783, 0.616, 0.7619, 0.7721, 0.9176, 1],
    DEFAULT: [0, 0.1436, 0.3227, 0.4783, 0.616, 0.7619, 0.7721, 0.9176, 1]
  }, v = f[u] || f.DEFAULT;
  return /* @__PURE__ */ n.jsx(
    ce,
    {
      letters: d,
      targetAnchors: v,
      width: r,
      direction: o,
      constants: m,
      style: a,
      mainPage: c
    }
  );
};
export {
  Ae as Block,
  se as D,
  ae as E,
  je as G,
  I,
  L as K,
  Ve as KMDExitLogo,
  Le as KMDLogo,
  ke as KMD_EXIT_LOGO_MODE,
  Se as KMD_LOGO_MODE,
  V as LOGO_DIRECTION,
  oe as M,
  re as N,
  C as S,
  ne as T,
  ee as U,
  Oe as X
};
