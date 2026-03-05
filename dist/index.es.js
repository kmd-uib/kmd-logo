import ge, { useState as Q, useRef as ee, useCallback as Te, useEffect as te } from "react";
var N = { exports: {} }, y = {};
var re;
function _e() {
  if (re) return y;
  re = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.fragment");
  function i(s, l, a) {
    var p = null;
    if (a !== void 0 && (p = "" + a), l.key !== void 0 && (p = "" + l.key), "key" in l) {
      a = {};
      for (var h in l)
        h !== "key" && (a[h] = l[h]);
    } else a = l;
    return l = a.ref, {
      $$typeof: t,
      type: s,
      key: p,
      ref: l !== void 0 ? l : null,
      props: a
    };
  }
  return y.Fragment = c, y.jsx = i, y.jsxs = i, y;
}
var L = {};
var ne;
function be() {
  return ne || (ne = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Ee ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case j:
          return "Fragment";
        case A:
          return "Profiler";
        case T:
          return "StrictMode";
        case m:
          return "Suspense";
        case S:
          return "SuspenseList";
        case I:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case R:
            return "Portal";
          case P:
            return e.displayName || "Context";
          case b:
            return (e._context.displayName || "Context") + ".Consumer";
          case x:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case F:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case V:
            r = e._payload, e = e._init;
            try {
              return t(e(r));
            } catch {
            }
        }
      return null;
    }
    function c(e) {
      return "" + e;
    }
    function i(e) {
      try {
        c(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var o = r.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), c(e);
      }
    }
    function s(e) {
      if (e === j) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === V)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var e = U.A;
      return e === null ? null : e.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function p(e) {
      if (z.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function h(e, r) {
      function o() {
        W || (W = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      o.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: o,
        configurable: !0
      });
    }
    function g() {
      var e = t(this.type);
      return G[e] || (G[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function d(e, r, o, u, D, Z) {
      var f = o.ref;
      return e = {
        $$typeof: O,
        type: e,
        key: r,
        props: o,
        _owner: u
      }, (f !== void 0 ? f : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: g
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
        value: D
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function E(e, r, o, u, D, Z) {
      var f = r.children;
      if (f !== void 0)
        if (u)
          if (we(f)) {
            for (u = 0; u < f.length; u++)
              v(f[u]);
            Object.freeze && Object.freeze(f);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else v(f);
      if (z.call(r, "key")) {
        f = t(e);
        var k = Object.keys(r).filter(function(xe) {
          return xe !== "key";
        });
        u = 0 < k.length ? "{key: someKey, " + k.join(": ..., ") + ": ...}" : "{key: someKey}", J[f + u] || (k = 0 < k.length ? "{" + k.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          f,
          k,
          f
        ), J[f + u] = !0);
      }
      if (f = null, o !== void 0 && (i(o), f = "" + o), p(r) && (i(r.key), f = "" + r.key), "key" in r) {
        o = {};
        for (var $ in r)
          $ !== "key" && (o[$] = r[$]);
      } else o = r;
      return f && h(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), d(
        e,
        f,
        o,
        l(),
        D,
        Z
      );
    }
    function v(e) {
      _(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === V && (e._payload.status === "fulfilled" ? _(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function _(e) {
      return typeof e == "object" && e !== null && e.$$typeof === O;
    }
    var w = ge, O = /* @__PURE__ */ Symbol.for("react.transitional.element"), R = /* @__PURE__ */ Symbol.for("react.portal"), j = /* @__PURE__ */ Symbol.for("react.fragment"), T = /* @__PURE__ */ Symbol.for("react.strict_mode"), A = /* @__PURE__ */ Symbol.for("react.profiler"), b = /* @__PURE__ */ Symbol.for("react.consumer"), P = /* @__PURE__ */ Symbol.for("react.context"), x = /* @__PURE__ */ Symbol.for("react.forward_ref"), m = /* @__PURE__ */ Symbol.for("react.suspense"), S = /* @__PURE__ */ Symbol.for("react.suspense_list"), F = /* @__PURE__ */ Symbol.for("react.memo"), V = /* @__PURE__ */ Symbol.for("react.lazy"), I = /* @__PURE__ */ Symbol.for("react.activity"), Ee = /* @__PURE__ */ Symbol.for("react.client.reference"), U = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = Object.prototype.hasOwnProperty, we = Array.isArray, Y = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var W, G = {}, X = w.react_stack_bottom_frame.bind(
      w,
      a
    )(), q = Y(s(a)), J = {};
    L.Fragment = j, L.jsx = function(e, r, o) {
      var u = 1e4 > U.recentlyCreatedOwnerStacks++;
      return E(
        e,
        r,
        o,
        !1,
        u ? Error("react-stack-top-frame") : X,
        u ? Y(s(e)) : q
      );
    }, L.jsxs = function(e, r, o) {
      var u = 1e4 > U.recentlyCreatedOwnerStacks++;
      return E(
        e,
        r,
        o,
        !0,
        u ? Error("react-stack-top-frame") : X,
        u ? Y(s(e)) : q
      );
    };
  })()), L;
}
var oe;
function Re() {
  return oe || (oe = 1, process.env.NODE_ENV === "production" ? N.exports = _e() : N.exports = be()), N.exports;
}
var n = Re();
const se = 1 / 60, ae = 2, le = (t) => t.reduce((c, i) => c + i, 0), je = (t, c, i, { k: s, b: l, others: a, ki: p, krandom: h, fcap: g }) => {
  const d = -s * (t - i), E = -l * c, v = le(a.map((b) => Math.sign(t - b) * p / Math.max(Math.pow(t - b, 2), 1e-11))), _ = le(a.map((b) => Math.abs(t - b))), w = (Math.random() - 0.5) * h / Math.max(Math.pow(_, 2), 1e-13), O = d + E + v + w, j = Math.sign(O) * Math.min(Math.abs(O), g), T = c + j * se, A = t + T * se;
  return Math.abs(T) < ae && Math.abs(A - i) < ae ? { newX: i, newV: 0, done: !0 } : { newX: A, newV: T, done: !1 };
}, H = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 139.64 193.46", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M9.92,118.31,118.81,0H132.7L51.34,87.06l88.3,106.4H126.49L44.89,94l-35,37.46v62H0V0H9.92Z" }) }), ce = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 152.29 195.94", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M0,129.23V0H10.17V131c0,33.49,15.13,55.81,66,55.81s66-22.32,66-55.81V0h10.17V129.23c0,40.68-18.85,66.72-76.15,66.72S0,169.9,0,129.23Z" }) }), ie = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 139.14 193.46", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M38.69,58.53,8.93,11.9l.74,67.47V193.46H0V0H12.15l88.3,134.93,29.76,46.63-.74-67.46V0h9.67V193.46H127Z" }) }), B = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 141.87 198.43", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M0,152l10.17-1.49c3.47,25,16.87,38.94,60.77,38.94,27,0,60.77-9.92,60.77-45.14,0-29.52-11.16-40.43-58.53-45.64C32,94.25,6.7,87.55,6.7,51.34,6.7,14.14,37.95,0,71.18,0c47.87,0,65.73,17.86,69.2,44.65l-10.17,1.49c-3.47-24.31-19.84-37.2-59-37.2-18.85,0-54.07,5.7-54.07,42.41,0,25.3,11.66,33.49,56.8,38.2,47.13,5,68,15.38,68,54.82,0,38.44-34,54.07-70.94,54.07C20.09,198.43,3.72,179.33,0,152Z" }) }), fe = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 141.38 193.46", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M75.65,193.46H65.73V8.93H0V0H141.38V8.93H75.65Z" }) }), pe = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 174.11 193.45", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M26,58.78,8.93,17.11l.75,62.25V193.45H0V0H11.91l57,138.15L87.05,183l18.1-44.89L162.2,0h11.9V193.45h-9.67V79.37l.75-62.25L148.07,58.78,92.51,193.45H81.59Z" }) }), K = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 9.92 193.45", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M9.92,193.45H0V0H9.92Z" }) }), he = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 151.3 193.46", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M63.74,193.46H0V0H63.74C120,0,151.3,21.33,151.3,96.73S120,193.46,63.74,193.46Zm2.73-8.93c52.34,0,74.41-20.84,74.41-87.81S118.81,8.93,66.47,8.93H9.92V184.54Z" }) }), me = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 133.94 193.46", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M129,0V8.93H9.92V89.79H119.05v8.93H9.92v85.82h124v8.93H0V0Z" }) }), Oe = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 154.77 198.43", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M144.85,165V101.2H95.24V92.27h59.53v76.28c-17.35,21.07-40.16,29.88-72.92,29.88C24.8,198.43,0,160,0,99.21S24.8,0,81.85,0c46.88,0,66.72,21.33,72.43,50.6l-10.42,1.49c-5-27-23.56-43.66-62-43.16C31.5,9.67,10.42,42.66,10.42,99.21S31.49,189.5,81.85,189.5C113.1,189.5,131.72,180.06,144.85,165Z" }) }), Ae = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 141.87 193.46", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M56.8,96.73,4.96,0H18.11l44.89,82.32L107.89,0h13.15L69.2,96.73l51.84,96.73H107.89L62.75,111.14,17.61,193.46H4.46Z" }) }), Se = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M40,0V40H80V0Z" }) }), C = Object.freeze({
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
}), de = Object.freeze({
  BLACK: "black",
  WHITE: "white"
}), Pe = C, ye = {
  k: 234,
  b: 18,
  ki: 389,
  krandom: 1992700730,
  fcap: 15036
}, ue = 57, M = 81, ve = ({ id: t, letters: c, targetAnchors: i, width: s, direction: l, color: a, constants: p, style: h, href: g, link: d }) => {
  const E = l === C.VERTICAL, [v, _] = Q(
    () => i.map((x) => x * (s - ue))
  ), [w, O] = Q(
    () => c.map(() => 0)
  ), R = ee(null), j = ee(null), T = Te(() => {
    R.current = requestAnimationFrame(() => {
      const x = c.map((m, S) => {
        const F = {
          ...ye,
          ...p,
          others: v.filter((V, I) => I !== S)
        };
        return je(
          v[S],
          w[S],
          i[S] * (s - ue),
          F
        );
      });
      _(x.map((m) => m.newX)), O(x.map((m) => m.newV)), x.every((m) => m.done) || j.current?.();
    });
  }, [v, w, s, p, i, c]);
  te(() => {
    j.current = T;
  }, [T]), te(() => (R.current !== null && cancelAnimationFrame(R.current), T(), () => {
    R.current !== null && cancelAnimationFrame(R.current);
  }), [s, l, p, T]);
  const A = d?.fontSize ?? 10, b = d ? A + 4 : 0, P = d ? /* @__PURE__ */ n.jsx(
    "a",
    {
      href: d.url,
      style: { position: "absolute", bottom: 0, left: 0, color: a, fontSize: A, lineHeight: 1, textDecoration: "none", whiteSpace: "nowrap" },
      children: d.name
    }
  ) : null;
  return E ? /* @__PURE__ */ n.jsxs(
    "div",
    {
      id: t,
      style: { position: "relative", display: "block", width: M, height: s + b, ...h },
      children: [
        /* @__PURE__ */ n.jsx(
          "a",
          {
            href: g,
            title: "Til forsiden",
            style: { position: "absolute", top: 0, left: 0, width: M, height: s },
            children: /* @__PURE__ */ n.jsx("div", { style: {
              position: "absolute",
              width: s,
              height: M,
              transform: `translateX(${M}px) rotate(90deg)`,
              transformOrigin: "0 0"
            }, children: c.map((x, m) => /* @__PURE__ */ n.jsx(
              x,
              {
                fill: a,
                style: { position: "absolute", left: v[m] }
              },
              m
            )) })
          }
        ),
        P
      ]
    }
  ) : /* @__PURE__ */ n.jsxs(
    "div",
    {
      id: t,
      style: { position: "relative", display: "inline-block", height: M + b, width: s, ...h },
      children: [
        /* @__PURE__ */ n.jsx(
          "a",
          {
            href: g,
            title: "Til forsiden",
            style: { position: "absolute", top: 0, left: 0, width: s, height: M },
            children: c.map((x, m) => /* @__PURE__ */ n.jsx(
              x,
              {
                fill: a,
                style: { position: "absolute", left: v[m] }
              },
              m
            ))
          }
        ),
        P
      ]
    }
  );
}, Ve = ({
  id: t,
  width: c = 420,
  mode: i = ke.DEFAULT,
  direction: s = C.HORIZONTAL,
  color: l = de.WHITE,
  constants: a,
  style: p,
  href: h,
  link: g
}) => {
  const d = [H, ce, ie, B, fe, pe, ce, B, K, H, H, he, me, B, K, Oe, ie], E = {
    KUNST: [0, 0.11859929846017954, 0.24794251789945726, 0.3661171554513721, 0.48661044156241245, 0.6066875599833533, 0.6559793671420038, 0.6990937736217631, 0.7392582023254431, 0.747728771908964, 0.7872618713956905, 0.826794970882417, 0.8696291011627215, 0.9075484891980421, 0.9477129179017221, 0.9561834874852431, 1],
    MUSIKK: [0, 0.03816833536967032, 0.0797943436298185, 0.11782601208682172, 0.15660388188698735, 0.19524781811273922, 0.33801827509956184, 0.46289629988000636, 0.5792299092805033, 0.6037643534425029, 0.7182693595515138, 0.8327743656605249, 0.8741297734335922, 0.9107401059988575, 0.9495179757990231, 0.9576961238530229, 1],
    DESIGN: [0, 0.041969349511149036, 0.08774070612138168, 0.12955977867209262, 0.17219936342679554, 0.21469167676026912, 0.2670211199240199, 0.3127924765342526, 0.35543206128895555, 0.3644246346015707, 0.4063939841127197, 0.4483633336238687, 0.5847847583095644, 0.705553334796029, 0.8334720890601378, 0.8604498089979833, 1],
    DEFAULT: [0, 0.0663817569012973, 0.13877704305496794, 0.2049211110530094, 0.2723629604628279, 0.3395718747474556, 0.42233990463921206, 0.49473519079288264, 0.5621770402027011, 0.576400344173532, 0.6427821010748294, 0.7091638579761266, 0.7810885201013505, 0.8447606235055309, 0.9122024729153494, 0.9264257768861802, 1]
  };
  return /* @__PURE__ */ n.jsx(
    ve,
    {
      id: t,
      letters: d,
      targetAnchors: E[i] ?? E.DEFAULT,
      width: c,
      direction: s,
      color: l,
      constants: a,
      style: p,
      href: h,
      link: g
    }
  );
}, De = ({
  id: t,
  width: c = 420,
  mode: i = Me.DEFAULT,
  direction: s = C.HORIZONTAL,
  color: l = de.WHITE,
  block: a = !0,
  constants: p,
  style: h,
  href: g,
  link: d
}) => {
  const E = [H, pe, he, me, Ae, K, fe, Se], v = a ? E : E.slice(0, 7), _ = {
    K: [0, 0.5, 0.58, 0.66, 0.74, 0.83, 0.85, 1],
    M: [0, 0.35, 0.65, 0.73, 0.81, 0.88, 0.9, 1],
    D: [0, 0.08, 0.16, 0.55, 0.68, 0.8, 0.82, 1],
    EXIT: [0, 0.09, 0.17, 0.38, 0.55, 0.72, 0.86, 1],
    DEFAULT: [0, 0.1436, 0.3227, 0.4783, 0.616, 0.7619, 0.7721, 0.9176]
  }, w = (_[i] ?? _.DEFAULT).slice(0, v.length);
  return /* @__PURE__ */ n.jsx(
    ve,
    {
      id: t,
      letters: v,
      targetAnchors: w,
      width: c,
      direction: s,
      color: l,
      constants: p,
      style: h,
      href: g,
      link: d
    }
  );
};
export {
  Se as Block,
  he as D,
  me as E,
  Oe as G,
  K as I,
  H as K,
  De as KMDExitLogo,
  Ve as KMDLogo,
  Pe as KMDLogoDirection,
  Me as KMD_EXIT_LOGO_MODE,
  ke as KMD_LOGO_MODE,
  de as LOGO_COLOR,
  C as LOGO_DIRECTION,
  pe as M,
  ie as N,
  B as S,
  fe as T,
  ce as U,
  Ae as X
};
