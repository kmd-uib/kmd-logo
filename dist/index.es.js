import be, { useMemo as ne, useRef as A, useState as ie, useCallback as te, useEffect as Re, useLayoutEffect as je } from "react";
var q = { exports: {} }, I = {};
var ue;
function Oe() {
  if (ue) return I;
  ue = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), a = /* @__PURE__ */ Symbol.for("react.fragment");
  function c(s, o, u) {
    var d = null;
    if (u !== void 0 && (d = "" + u), o.key !== void 0 && (d = "" + o.key), "key" in o) {
      u = {};
      for (var m in o)
        m !== "key" && (u[m] = o[m]);
    } else u = o;
    return o = u.ref, {
      $$typeof: t,
      type: s,
      key: d,
      ref: o !== void 0 ? o : null,
      props: u
    };
  }
  return I.Fragment = a, I.jsx = c, I.jsxs = c, I;
}
var U = {};
var fe;
function Ae() {
  return fe || (fe = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Z ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case O:
          return "Fragment";
        case N:
          return "Profiler";
        case j:
          return "StrictMode";
        case K:
          return "Suspense";
        case B:
          return "SuspenseList";
        case X:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case y:
            return "Portal";
          case P:
            return e.displayName || "Context";
          case v:
            return (e._context.displayName || "Context") + ".Consumer";
          case M:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case $:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case C:
            r = e._payload, e = e._init;
            try {
              return t(e(r));
            } catch {
            }
        }
      return null;
    }
    function a(e) {
      return "" + e;
    }
    function c(e) {
      try {
        a(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var l = r.error, p = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          p
        ), a(e);
      }
    }
    function s(e) {
      if (e === O) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === C)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = L.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, r) {
      function l() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: l,
        configurable: !0
      });
    }
    function x() {
      var e = t(this.type);
      return G[e] || (G[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function R(e, r, l, p, S, g) {
      var i = l.ref;
      return e = {
        $$typeof: T,
        type: e,
        key: r,
        props: l,
        _owner: p
      }, (i !== void 0 ? i : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: x
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
        value: S
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: g
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function _(e, r, l, p, S, g) {
      var i = r.children;
      if (i !== void 0)
        if (p)
          if (z(i)) {
            for (p = 0; p < i.length; p++)
              w(i[p]);
            Object.freeze && Object.freeze(i);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(i);
      if (V.call(r, "key")) {
        i = t(e);
        var k = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        p = 0 < k.length ? "{key: someKey, " + k.join(": ..., ") + ": ...}" : "{key: someKey}", E[i + p] || (k = 0 < k.length ? "{" + k.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          p,
          i,
          k,
          i
        ), E[i + p] = !0);
      }
      if (i = null, l !== void 0 && (c(l), i = "" + l), d(r) && (c(r.key), i = "" + r.key), "key" in r) {
        l = {};
        for (var W in r)
          W !== "key" && (l[W] = r[W]);
      } else l = r;
      return i && m(
        l,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), R(
        e,
        i,
        l,
        o(),
        S,
        g
      );
    }
    function w(e) {
      h(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === C && (e._payload.status === "fulfilled" ? h(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function h(e) {
      return typeof e == "object" && e !== null && e.$$typeof === T;
    }
    var b = be, T = /* @__PURE__ */ Symbol.for("react.transitional.element"), y = /* @__PURE__ */ Symbol.for("react.portal"), O = /* @__PURE__ */ Symbol.for("react.fragment"), j = /* @__PURE__ */ Symbol.for("react.strict_mode"), N = /* @__PURE__ */ Symbol.for("react.profiler"), v = /* @__PURE__ */ Symbol.for("react.consumer"), P = /* @__PURE__ */ Symbol.for("react.context"), M = /* @__PURE__ */ Symbol.for("react.forward_ref"), K = /* @__PURE__ */ Symbol.for("react.suspense"), B = /* @__PURE__ */ Symbol.for("react.suspense_list"), $ = /* @__PURE__ */ Symbol.for("react.memo"), C = /* @__PURE__ */ Symbol.for("react.lazy"), X = /* @__PURE__ */ Symbol.for("react.activity"), Z = /* @__PURE__ */ Symbol.for("react.client.reference"), L = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = Object.prototype.hasOwnProperty, z = Array.isArray, D = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var F, G = {}, H = b.react_stack_bottom_frame.bind(
      b,
      u
    )(), f = D(s(u)), E = {};
    U.Fragment = O, U.jsx = function(e, r, l) {
      var p = 1e4 > L.recentlyCreatedOwnerStacks++;
      return _(
        e,
        r,
        l,
        !1,
        p ? Error("react-stack-top-frame") : H,
        p ? D(s(e)) : f
      );
    }, U.jsxs = function(e, r, l) {
      var p = 1e4 > L.recentlyCreatedOwnerStacks++;
      return _(
        e,
        r,
        l,
        !0,
        p ? Error("react-stack-top-frame") : H,
        p ? D(s(e)) : f
      );
    };
  })()), U;
}
var pe;
function Me() {
  return pe || (pe = 1, process.env.NODE_ENV === "production" ? q.exports = Oe() : q.exports = Ae()), q.exports;
}
var n = Me();
const de = 1 / 60, me = 2, ve = (t) => t.reduce((a, c) => a + c, 0), Le = (t, a, c, { k: s, b: o, others: u, ki: d, krandom: m, fcap: x }) => {
  const R = -s * (t - c), _ = -o * a, w = ve(u.map((v) => Math.sign(t - v) * d / Math.max(Math.pow(t - v, 2), 1e-11))), h = ve(u.map((v) => Math.abs(t - v))), b = (Math.random() - 0.5) * m / Math.max(Math.pow(h, 2), 1e-13), T = R + _ + w + b, O = Math.sign(T) * Math.min(Math.abs(T), x), j = a + O * de, N = t + j * de;
  return Math.abs(j) < me && Math.abs(N - c) < me ? { newX: c, newV: 0, done: !0 } : { newX: N, newV: j, done: !1 };
}, Y = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 139.64 193.46", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M9.92,118.31,118.81,0H132.7L51.34,87.06l88.3,106.4H126.49L44.89,94l-35,37.46v62H0V0H9.92Z" }) }), Ee = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 152.29 195.94", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M0,129.23V0H10.17V131c0,33.49,15.13,55.81,66,55.81s66-22.32,66-55.81V0h10.17V129.23c0,40.68-18.85,66.72-76.15,66.72S0,169.9,0,129.23Z" }) }), he = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 139.14 193.46", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M38.69,58.53,8.93,11.9l.74,67.47V193.46H0V0H12.15l88.3,134.93,29.76,46.63-.74-67.46V0h9.67V193.46H127Z" }) }), re = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 141.87 198.43", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M0,152l10.17-1.49c3.47,25,16.87,38.94,60.77,38.94,27,0,60.77-9.92,60.77-45.14,0-29.52-11.16-40.43-58.53-45.64C32,94.25,6.7,87.55,6.7,51.34,6.7,14.14,37.95,0,71.18,0c47.87,0,65.73,17.86,69.2,44.65l-10.17,1.49c-3.47-24.31-19.84-37.2-59-37.2-18.85,0-54.07,5.7-54.07,42.41,0,25.3,11.66,33.49,56.8,38.2,47.13,5,68,15.38,68,54.82,0,38.44-34,54.07-70.94,54.07C20.09,198.43,3.72,179.33,0,152Z" }) }), oe = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 141.38 193.46", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M75.65,193.46H65.73V8.93H0V0H141.38V8.93H75.65Z" }) }), se = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 174.11 193.45", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M26,58.78,8.93,17.11l.75,62.25V193.45H0V0H11.91l57,138.15L87.05,183l18.1-44.89L162.2,0h11.9V193.45h-9.67V79.37l.75-62.25L148.07,58.78,92.51,193.45H81.59Z" }) }), J = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 9.92 193.45", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M9.92,193.45H0V0H9.92Z" }) }), ae = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 151.3 193.46", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M63.74,193.46H0V0H63.74C120,0,151.3,21.33,151.3,96.73S120,193.46,63.74,193.46Zm2.73-8.93c52.34,0,74.41-20.84,74.41-87.81S118.81,8.93,66.47,8.93H9.92V184.54Z" }) }), ce = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 133.94 193.46", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M129,0V8.93H9.92V89.79H119.05v8.93H9.92v85.82h124v8.93H0V0Z" }) }), Se = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 154.77 198.43", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M144.85,165V101.2H95.24V92.27h59.53v76.28c-17.35,21.07-40.16,29.88-72.92,29.88C24.8,198.43,0,160,0,99.21S24.8,0,81.85,0c46.88,0,66.72,21.33,72.43,50.6l-10.42,1.49c-5-27-23.56-43.66-62-43.16C31.5,9.67,10.42,42.66,10.42,99.21S31.49,189.5,81.85,189.5C113.1,189.5,131.72,180.06,144.85,165Z" }) }), xe = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 141.87 193.46", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M56.8,96.73,4.96,0H18.11l44.89,82.32L107.89,0h13.15L69.2,96.73l51.84,96.73H107.89L62.75,111.14,17.61,193.46H4.46Z" }) }), ke = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M40,0V40H80V0Z" }) }), ye = typeof window < "u" ? je : Re, Q = Object.freeze({
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
}), Ne = Object.freeze({
  KUNST: "KUNST",
  MUSIKK: "MUSIKK",
  DESIGN: "DESIGN",
  DEFAULT: "DEFAULT"
}), Pe = Object.freeze({
  K: "K",
  M: "M",
  D: "D",
  EXIT: "EXIT",
  DEFAULT: "DEFAULT"
}), _e = Object.freeze({
  BLACK: "black",
  WHITE: "white"
}), Ie = Q, Ce = {
  k: 234,
  b: 18,
  ki: 389,
  krandom: 1992700730,
  fcap: 15036
}, le = Object.freeze({
  N: 139.14 / 193.46,
  T: 141.38 / 193.46,
  BLOCK: 80 / 80
}), De = 10, Ve = 80, we = (t, a, c, s) => {
  const o = t + 30, u = s / 2, d = a - o, m = c - u, x = Math.sqrt(d * d + m * m);
  if (x === 0) return 0;
  const R = De * Math.exp(-x / Ve);
  return -(d / x) * R;
}, ge = ({
  id: t,
  letters: a,
  targetAnchors: c,
  width: s,
  height: o = 81,
  lastLetterAspectRatio: u,
  direction: d,
  color: m,
  constants: x,
  style: R,
  href: _,
  link: w,
  antimagnet: h
}) => {
  const b = d === Q.VERTICAL, T = u * o, y = A(
    c.map((f) => f * (s - T))
  ), O = A(a.map(() => 0)), [j, N] = ie(
    () => c.map((f) => f * (s - T))
  ), v = A(null), P = A(null), [M, K] = ie(
    null
  ), B = A(s), $ = A(T), C = A(x), X = A(c), Z = A(a.length), L = te(() => {
    v.current !== null && (cancelAnimationFrame(v.current), v.current = null);
    const f = () => {
      const E = B.current, e = $.current, r = y.current, l = O.current, p = X.current, S = r.map((g, i) => {
        const k = {
          ...Ce,
          ...C.current,
          others: r.filter((W, ee) => ee !== i)
        };
        return Le(g, l[i], p[i] * (E - e), k);
      });
      y.current = S.map((g) => g.newX), O.current = S.map((g) => g.newV), N([...y.current]), S.every((g) => g.done) ? v.current = null : v.current = requestAnimationFrame(f);
    };
    v.current = requestAnimationFrame(f);
  }, []);
  Re(() => {
    C.current = x, v.current === null && L();
  }, [x, L]), ye(() => {
    B.current = s, $.current = T, X.current = c;
    const f = c.map(
      (e) => e * (s - T)
    ), E = a.length !== Z.current;
    return E && (Z.current = a.length), y.current = f, O.current = a.map(() => 0), N([...f]), (v.current === null || E) && L(), () => {
      v.current !== null && (cancelAnimationFrame(v.current), v.current = null);
    };
  }, [
    s,
    o,
    T,
    d,
    c,
    a,
    L
  ]);
  const V = te((f) => {
    if (!P.current) return;
    const E = P.current.getBoundingClientRect();
    K({ x: f.clientX - E.left, y: f.clientY - E.top });
  }, []), z = te(() => {
    K(null);
  }, []), D = w?.fontSize ?? 10, F = w ? D + 20 : 0, G = (f) => /^(https?:)?\/\/|^mailto:/.test(f), H = w ? /* @__PURE__ */ n.jsxs(
    "a",
    {
      href: w.url,
      className: "kmd-logo-link",
      ...G(w.url) ? { target: "_blank", rel: "noopener noreferrer" } : {},
      style: {
        position: "absolute",
        color: m,
        fontSize: D,
        lineHeight: 1,
        textDecoration: "none",
        whiteSpace: "nowrap"
      },
      children: [
        "→ ",
        w.name
      ]
    }
  ) : null;
  return b ? /* @__PURE__ */ n.jsxs(
    "div",
    {
      id: t,
      ref: P,
      onMouseMove: h ? V : void 0,
      onMouseLeave: h ? z : void 0,
      style: {
        position: "relative",
        display: "block",
        width: o,
        height: s + F,
        ...R
      },
      children: [
        /* @__PURE__ */ n.jsx(
          "a",
          {
            href: _,
            title: "Til forsiden",
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: o,
              height: s
            },
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                style: {
                  position: "absolute",
                  width: s,
                  height: o,
                  transform: `translateX(${o}px) rotate(90deg)`,
                  transformOrigin: "0 0"
                },
                children: a.map((f, E) => {
                  const e = h && M ? we(
                    j[E],
                    M.y,
                    M.x,
                    o
                  ) : 0;
                  return /* @__PURE__ */ n.jsx(
                    f,
                    {
                      fill: m,
                      height: o,
                      style: {
                        position: "absolute",
                        left: j[E],
                        transform: e !== 0 ? `translateX(${e}px)` : void 0
                      }
                    },
                    E
                  );
                })
              }
            )
          }
        ),
        H
      ]
    }
  ) : /* @__PURE__ */ n.jsxs(
    "div",
    {
      id: t,
      ref: P,
      onMouseMove: h ? V : void 0,
      onMouseLeave: h ? z : void 0,
      style: {
        position: "relative",
        display: "inline-block",
        height: o + F,
        width: s,
        ...R
      },
      children: [
        /* @__PURE__ */ n.jsx(
          "a",
          {
            href: _,
            title: "Til forsiden",
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: s,
              height: o
            },
            children: a.map((f, E) => {
              const e = h && M ? we(
                j[E],
                M.x,
                M.y,
                o
              ) : 0;
              return /* @__PURE__ */ n.jsx(
                f,
                {
                  fill: m,
                  height: o,
                  style: {
                    position: "absolute",
                    left: j[E],
                    transform: e !== 0 ? `translateX(${e}px)` : void 0
                  }
                },
                E
              );
            })
          }
        ),
        H
      ]
    }
  );
}, Fe = [
  Y,
  Ee,
  he,
  re,
  oe,
  se,
  Ee,
  re,
  J,
  Y,
  Y,
  ae,
  ce,
  re,
  J,
  Se,
  he
], Te = {
  KUNST: [
    0,
    0.11859929846017954,
    0.24794251789945726,
    0.3661171554513721,
    0.48661044156241245,
    0.6066875599833533,
    0.6559793671420038,
    0.6990937736217631,
    0.7392582023254431,
    0.747728771908964,
    0.7872618713956905,
    0.826794970882417,
    0.8696291011627215,
    0.9075484891980421,
    0.9477129179017221,
    0.9561834874852431,
    1
  ],
  MUSIKK: [
    0,
    0.03816833536967032,
    0.0797943436298185,
    0.11782601208682172,
    0.15660388188698735,
    0.19524781811273922,
    0.33801827509956184,
    0.46289629988000636,
    0.5792299092805033,
    0.6037643534425029,
    0.7182693595515138,
    0.8327743656605249,
    0.8741297734335922,
    0.9107401059988575,
    0.9495179757990231,
    0.9576961238530229,
    1
  ],
  DESIGN: [
    0,
    0.041969349511149036,
    0.08774070612138168,
    0.12955977867209262,
    0.17219936342679554,
    0.21469167676026912,
    0.2670211199240199,
    0.3127924765342526,
    0.35543206128895555,
    0.3644246346015707,
    0.4063939841127197,
    0.4483633336238687,
    0.5847847583095644,
    0.705553334796029,
    0.8334720890601378,
    0.8604498089979833,
    1
  ],
  DEFAULT: [
    0,
    0.0663817569012973,
    0.13877704305496794,
    0.2049211110530094,
    0.2723629604628279,
    0.3395718747474556,
    0.42233990463921206,
    0.49473519079288264,
    0.5621770402027011,
    0.576400344173532,
    0.6427821010748294,
    0.7091638579761266,
    0.7810885201013505,
    0.8447606235055309,
    0.9122024729153494,
    0.9264257768861802,
    1
  ]
}, Ue = ({
  id: t,
  width: a = 420,
  height: c = 81,
  mode: s = Ne.DEFAULT,
  direction: o = Q.HORIZONTAL,
  color: u = _e.WHITE,
  constants: d,
  style: m,
  href: x,
  link: R,
  antimagnet: _
}) => {
  const w = Fe, h = ne(
    () => Te[s] ?? Te.DEFAULT,
    [s]
  );
  return /* @__PURE__ */ n.jsx(
    ge,
    {
      id: t,
      letters: w,
      targetAnchors: h,
      width: a,
      height: c,
      lastLetterAspectRatio: le.N,
      direction: o,
      color: u,
      constants: d,
      style: m,
      href: x,
      link: R,
      antimagnet: _
    }
  );
}, Ye = ({
  id: t,
  width: a = 420,
  height: c = 81,
  mode: s = Pe.DEFAULT,
  direction: o = Q.HORIZONTAL,
  color: u = _e.WHITE,
  block: d = !0,
  constants: m,
  style: x,
  href: R,
  link: _,
  antimagnet: w
}) => {
  const h = ne(
    () => d ? [Y, se, ae, ce, xe, J, oe, ke] : [Y, se, ae, ce, xe, J, oe],
    [d]
  ), b = ne(() => {
    const T = {
      K: [0, 0.35, 0.58, 0.66, 0.74, 0.83, 0.85, 1],
      M: [0, 0.3, 0.65, 0.73, 0.81, 0.88, 0.9, 1],
      D: [0, 0.1, 0.4, 0.65, 0.7, 0.82, 0.84, 1],
      EXIT: [0, 0.09, 0.17, 0.4, 0.57, 0.81, 0.88, 1],
      DEFAULT: [0, 0.1436, 0.3227, 0.4783, 0.616, 0.7619, 0.7721, 0.9176]
    };
    return (T[s] ?? T.DEFAULT).slice(0, h.length);
  }, [s, h.length]);
  return /* @__PURE__ */ n.jsx(
    ge,
    {
      id: t,
      letters: h,
      targetAnchors: b,
      width: a,
      height: c,
      lastLetterAspectRatio: d ? le.BLOCK : le.T,
      direction: o,
      color: u,
      constants: m,
      style: x,
      href: R,
      link: _,
      antimagnet: w
    }
  );
};
export {
  ke as Block,
  ae as D,
  ce as E,
  Se as G,
  J as I,
  Y as K,
  Ye as KMDExitLogo,
  Ue as KMDLogo,
  Ie as KMDLogoDirection,
  Pe as KMD_EXIT_LOGO_MODE,
  Ne as KMD_LOGO_MODE,
  _e as LOGO_COLOR,
  Q as LOGO_DIRECTION,
  se as M,
  he as N,
  re as S,
  oe as T,
  Ee as U,
  xe as X
};
