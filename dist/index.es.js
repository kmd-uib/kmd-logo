import be, { useMemo as oe, useRef as A, useState as ie, useCallback as re, useLayoutEffect as je, useEffect as Oe } from "react";
var W = { exports: {} }, C = {};
var ue;
function Me() {
  if (ue) return C;
  ue = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(a, i, s) {
    var h = null;
    if (s !== void 0 && (h = "" + s), i.key !== void 0 && (h = "" + i.key), "key" in i) {
      s = {};
      for (var d in i)
        d !== "key" && (s[d] = i[d]);
    } else s = i;
    return i = s.ref, {
      $$typeof: t,
      type: a,
      key: h,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return C.Fragment = c, C.jsx = o, C.jsxs = o, C;
}
var V = {};
var fe;
function Ae() {
  return fe || (fe = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === B ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case v:
          return "Fragment";
        case b:
          return "Profiler";
        case O:
          return "StrictMode";
        case U:
          return "Suspense";
        case Y:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case D:
            return "Portal";
          case H:
            return e.displayName || "Context";
          case M:
            return (e._context.displayName || "Context") + ".Consumer";
          case I:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case $:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case L:
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
    function o(e) {
      try {
        c(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var l = r.error, f = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          f
        ), c(e);
      }
    }
    function a(e) {
      if (e === v) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === L)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var e = k.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function h(e) {
      if (X.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, r) {
      function l() {
        m || (m = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: l,
        configurable: !0
      });
    }
    function T() {
      var e = t(this.type);
      return g[e] || (g[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function x(e, r, l, f, N, ee) {
      var p = l.ref;
      return e = {
        $$typeof: j,
        type: e,
        key: r,
        props: l,
        _owner: f
      }, (p !== void 0 ? p : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: T
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
        value: N
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ee
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function E(e, r, l, f, N, ee) {
      var p = r.children;
      if (p !== void 0)
        if (f)
          if (Z(p)) {
            for (f = 0; f < p.length; f++)
              _(p[f]);
            Object.freeze && Object.freeze(p);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else _(p);
      if (X.call(r, "key")) {
        p = t(e);
        var P = Object.keys(r).filter(function(Re) {
          return Re !== "key";
        });
        f = 0 < P.length ? "{key: someKey, " + P.join(": ..., ") + ": ...}" : "{key: someKey}", y[p + f] || (P = 0 < P.length ? "{" + P.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          f,
          p,
          P,
          p
        ), y[p + f] = !0);
      }
      if (p = null, l !== void 0 && (o(l), p = "" + l), h(r) && (o(r.key), p = "" + r.key), "key" in r) {
        l = {};
        for (var te in r)
          te !== "key" && (l[te] = r[te]);
      } else l = r;
      return p && d(
        l,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), x(
        e,
        p,
        l,
        i(),
        N,
        ee
      );
    }
    function _(e) {
      R(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === L && (e._payload.status === "fulfilled" ? R(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function R(e) {
      return typeof e == "object" && e !== null && e.$$typeof === j;
    }
    var w = be, j = /* @__PURE__ */ Symbol.for("react.transitional.element"), D = /* @__PURE__ */ Symbol.for("react.portal"), v = /* @__PURE__ */ Symbol.for("react.fragment"), O = /* @__PURE__ */ Symbol.for("react.strict_mode"), b = /* @__PURE__ */ Symbol.for("react.profiler"), M = /* @__PURE__ */ Symbol.for("react.consumer"), H = /* @__PURE__ */ Symbol.for("react.context"), I = /* @__PURE__ */ Symbol.for("react.forward_ref"), U = /* @__PURE__ */ Symbol.for("react.suspense"), Y = /* @__PURE__ */ Symbol.for("react.suspense_list"), $ = /* @__PURE__ */ Symbol.for("react.memo"), L = /* @__PURE__ */ Symbol.for("react.lazy"), K = /* @__PURE__ */ Symbol.for("react.activity"), B = /* @__PURE__ */ Symbol.for("react.client.reference"), k = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = Object.prototype.hasOwnProperty, Z = Array.isArray, u = console.createTask ? console.createTask : function() {
      return null;
    };
    w = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var m, g = {}, G = w.react_stack_bottom_frame.bind(
      w,
      s
    )(), z = u(a(s)), y = {};
    V.Fragment = v, V.jsx = function(e, r, l) {
      var f = 1e4 > k.recentlyCreatedOwnerStacks++;
      return E(
        e,
        r,
        l,
        !1,
        f ? Error("react-stack-top-frame") : G,
        f ? u(a(e)) : z
      );
    }, V.jsxs = function(e, r, l) {
      var f = 1e4 > k.recentlyCreatedOwnerStacks++;
      return E(
        e,
        r,
        l,
        !0,
        f ? Error("react-stack-top-frame") : G,
        f ? u(a(e)) : z
      );
    };
  })()), V;
}
var pe;
function Se() {
  return pe || (pe = 1, process.env.NODE_ENV === "production" ? W.exports = Me() : W.exports = Ae()), W.exports;
}
var n = Se();
const he = 1 / 60, de = 2, me = (t) => t.reduce((c, o) => c + o, 0), Le = (t, c, o, { k: a, b: i, others: s, ki: h, krandom: d, fcap: T }) => {
  const x = -a * (t - o), E = -i * c, _ = me(s.map((M) => Math.sign(t - M) * h / Math.max(Math.pow(t - M, 2), 1e-11))), R = me(s.map((M) => Math.abs(t - M))), w = (Math.random() - 0.5) * d / Math.max(Math.pow(R, 2), 1e-13), j = x + E + _ + w, v = Math.sign(j) * Math.min(Math.abs(j), T), O = c + v * he, b = t + O * he;
  return Math.abs(O) < de && Math.abs(b - o) < de ? { newX: o, newV: 0, done: !0 } : { newX: b, newV: O, done: !1 };
}, F = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 139.64 193.46", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M9.92,118.31,118.81,0H132.7L51.34,87.06l88.3,106.4H126.49L44.89,94l-35,37.46v62H0V0H9.92Z" }) }), ve = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 152.29 195.94", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M0,129.23V0H10.17V131c0,33.49,15.13,55.81,66,55.81s66-22.32,66-55.81V0h10.17V129.23c0,40.68-18.85,66.72-76.15,66.72S0,169.9,0,129.23Z" }) }), Ee = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 139.14 193.46", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M38.69,58.53,8.93,11.9l.74,67.47V193.46H0V0H12.15l88.3,134.93,29.76,46.63-.74-67.46V0h9.67V193.46H127Z" }) }), ne = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 141.87 198.43", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M0,152l10.17-1.49c3.47,25,16.87,38.94,60.77,38.94,27,0,60.77-9.92,60.77-45.14,0-29.52-11.16-40.43-58.53-45.64C32,94.25,6.7,87.55,6.7,51.34,6.7,14.14,37.95,0,71.18,0c47.87,0,65.73,17.86,69.2,44.65l-10.17,1.49c-3.47-24.31-19.84-37.2-59-37.2-18.85,0-54.07,5.7-54.07,42.41,0,25.3,11.66,33.49,56.8,38.2,47.13,5,68,15.38,68,54.82,0,38.44-34,54.07-70.94,54.07C20.09,198.43,3.72,179.33,0,152Z" }) }), se = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 141.38 193.46", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M75.65,193.46H65.73V8.93H0V0H141.38V8.93H75.65Z" }) }), ae = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 174.11 193.45", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M26,58.78,8.93,17.11l.75,62.25V193.45H0V0H11.91l57,138.15L87.05,183l18.1-44.89L162.2,0h11.9V193.45h-9.67V79.37l.75-62.25L148.07,58.78,92.51,193.45H81.59Z" }) }), J = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 9.92 193.45", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M9.92,193.45H0V0H9.92Z" }) }), ce = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 151.3 193.46", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M63.74,193.46H0V0H63.74C120,0,151.3,21.33,151.3,96.73S120,193.46,63.74,193.46Zm2.73-8.93c52.34,0,74.41-20.84,74.41-87.81S118.81,8.93,66.47,8.93H9.92V184.54Z" }) }), le = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 133.94 193.46", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M129,0V8.93H9.92V89.79H119.05v8.93H9.92v85.82h124v8.93H0V0Z" }) }), ke = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 154.77 198.43", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M144.85,165V101.2H95.24V92.27h59.53v76.28c-17.35,21.07-40.16,29.88-72.92,29.88C24.8,198.43,0,160,0,99.21S24.8,0,81.85,0c46.88,0,66.72,21.33,72.43,50.6l-10.42,1.49c-5-27-23.56-43.66-62-43.16C31.5,9.67,10.42,42.66,10.42,99.21S31.49,189.5,81.85,189.5C113.1,189.5,131.72,180.06,144.85,165Z" }) }), xe = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 141.87 193.46", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M56.8,96.73,4.96,0H18.11l44.89,82.32L107.89,0h13.15L69.2,96.73l51.84,96.73H107.89L62.75,111.14,17.61,193.46H4.46Z" }) }), ye = (t) => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", height: "79px", ...t, children: /* @__PURE__ */ n.jsx("path", { d: "M40,0V40H80V0Z" }) }), Ne = typeof window < "u" ? je : Oe, Q = Object.freeze({
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
}), Pe = Object.freeze({
  KUNST: "KUNST",
  MUSIKK: "MUSIKK",
  DESIGN: "DESIGN",
  DEFAULT: "DEFAULT"
}), De = Object.freeze({
  K: "K",
  M: "M",
  D: "D",
  EXIT: "EXIT",
  DEFAULT: "DEFAULT"
}), Te = Object.freeze({
  BLACK: "black",
  WHITE: "white"
}), Ue = Q, Ce = {
  k: 234,
  b: 18,
  ki: 389,
  krandom: 1992700730,
  fcap: 15036
}, q = 57, S = 81, Ve = 10, Fe = 80, we = (t, c, o) => {
  const a = t + 30, i = S / 2, s = c - a, h = o - i, d = Math.sqrt(s * s + h * h);
  if (d === 0) return 0;
  const T = Ve * Math.exp(-d / Fe);
  return -(s / d) * T;
}, _e = ({
  id: t,
  letters: c,
  targetAnchors: o,
  width: a,
  direction: i,
  color: s,
  constants: h,
  style: d,
  href: T,
  link: x,
  antimagnet: E
}) => {
  const _ = i === Q.VERTICAL, R = A(o.map((u) => u * (a - q))), w = A(c.map(() => 0)), [j, D] = ie(
    () => o.map((u) => u * (a - q))
  ), v = A(null), O = A(null), [b, M] = ie(null), H = A(a), I = A(h), U = A(o), Y = A(c.length), $ = re(() => {
    v.current !== null && (cancelAnimationFrame(v.current), v.current = null);
    const u = () => {
      const m = H.current, g = R.current, G = w.current, z = U.current, y = g.map((e, r) => {
        const l = {
          ...Ce,
          ...I.current,
          others: g.filter((f, N) => N !== r)
        };
        return Le(e, G[r], z[r] * (m - q), l);
      });
      R.current = y.map((e) => e.newX), w.current = y.map((e) => e.newV), D([...R.current]), y.every((e) => e.done) ? v.current = null : v.current = requestAnimationFrame(u);
    };
    v.current = requestAnimationFrame(u);
  }, []);
  Ne(() => {
    H.current = a, I.current = h, U.current = o;
    const u = o.map((g) => g * (a - q)), m = c.length !== Y.current;
    return m && (Y.current = c.length), R.current = u, w.current = c.map(() => 0), D([...u]), (v.current === null || m) && $(), () => {
      v.current !== null && (cancelAnimationFrame(v.current), v.current = null);
    };
  }, [a, i, o, c, h, $]);
  const L = re((u) => {
    if (!O.current) return;
    const m = O.current.getBoundingClientRect();
    M({ x: u.clientX - m.left, y: u.clientY - m.top });
  }, []), K = re(() => {
    M(null);
  }, []), B = x?.fontSize ?? 10, k = x ? B + 20 : 0, X = (u) => /^(https?:)?\/\/|^mailto:/.test(u), Z = x ? /* @__PURE__ */ n.jsxs(
    "a",
    {
      href: x.url,
      className: "kmd-logo-link",
      ...X(x.url) ? { target: "_blank", rel: "noopener noreferrer" } : {},
      style: {
        position: "absolute",
        bottom: 0,
        left: 0,
        color: s,
        fontSize: B,
        lineHeight: 1,
        textDecoration: "none",
        whiteSpace: "nowrap"
      },
      children: [
        "→ ",
        x.name
      ]
    }
  ) : null;
  return _ ? /* @__PURE__ */ n.jsxs(
    "div",
    {
      id: t,
      ref: O,
      onMouseMove: E ? L : void 0,
      onMouseLeave: E ? K : void 0,
      style: {
        position: "relative",
        display: "block",
        width: S,
        height: a + k,
        ...d
      },
      children: [
        /* @__PURE__ */ n.jsx(
          "a",
          {
            href: T,
            title: "Til forsiden",
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: S,
              height: a
            },
            children: /* @__PURE__ */ n.jsx(
              "div",
              {
                style: {
                  position: "absolute",
                  width: a,
                  height: S,
                  transform: `translateX(${S}px) rotate(90deg)`,
                  transformOrigin: "0 0"
                },
                children: c.map((u, m) => {
                  const g = E && b ? we(j[m], b.y, b.x) : 0;
                  return /* @__PURE__ */ n.jsx(
                    u,
                    {
                      fill: s,
                      style: {
                        position: "absolute",
                        left: j[m],
                        transform: g !== 0 ? `translateX(${g}px)` : void 0
                      }
                    },
                    m
                  );
                })
              }
            )
          }
        ),
        Z
      ]
    }
  ) : /* @__PURE__ */ n.jsxs(
    "div",
    {
      id: t,
      ref: O,
      onMouseMove: E ? L : void 0,
      onMouseLeave: E ? K : void 0,
      style: {
        position: "relative",
        display: "inline-block",
        height: S + k,
        width: a,
        ...d
      },
      children: [
        /* @__PURE__ */ n.jsx(
          "a",
          {
            href: T,
            title: "Til forsiden",
            style: {
              position: "absolute",
              top: 0,
              left: 0,
              width: a,
              height: S
            },
            children: c.map((u, m) => {
              const g = E && b ? we(j[m], b.x, b.y) : 0;
              return /* @__PURE__ */ n.jsx(
                u,
                {
                  fill: s,
                  style: {
                    position: "absolute",
                    left: j[m],
                    transform: g !== 0 ? `translateX(${g}px)` : void 0
                  }
                },
                m
              );
            })
          }
        ),
        Z
      ]
    }
  );
}, He = [F, ve, Ee, ne, se, ae, ve, ne, J, F, F, ce, le, ne, J, ke, Ee], ge = {
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
}, Ye = ({
  id: t,
  width: c = 420,
  mode: o = Pe.DEFAULT,
  direction: a = Q.HORIZONTAL,
  color: i = Te.WHITE,
  constants: s,
  style: h,
  href: d,
  link: T,
  antimagnet: x
}) => {
  const E = He, _ = oe(
    () => ge[o] ?? ge.DEFAULT,
    [o]
  );
  return /* @__PURE__ */ n.jsx(
    _e,
    {
      id: t,
      letters: E,
      targetAnchors: _,
      width: c,
      direction: a,
      color: i,
      constants: s,
      style: h,
      href: d,
      link: T,
      antimagnet: x
    }
  );
}, $e = ({
  id: t,
  width: c = 420,
  mode: o = De.DEFAULT,
  direction: a = Q.HORIZONTAL,
  color: i = Te.WHITE,
  block: s = !0,
  constants: h,
  style: d,
  href: T,
  link: x,
  antimagnet: E
}) => {
  const _ = oe(
    () => s ? [F, ae, ce, le, xe, J, se, ye] : [F, ae, ce, le, xe, J, se],
    [s]
  ), R = oe(() => {
    const w = {
      K: [0, 0.35, 0.58, 0.66, 0.74, 0.83, 0.85, 1],
      M: [0, 0.3, 0.65, 0.73, 0.81, 0.88, 0.9, 1],
      D: [0, 0.1, 0.4, 0.65, 0.7, 0.82, 0.84, 1],
      EXIT: [0, 0.09, 0.17, 0.4, 0.57, 0.81, 0.88, 1],
      DEFAULT: [0, 0.1436, 0.3227, 0.4783, 0.616, 0.7619, 0.7721, 0.9176]
    };
    return (w[o] ?? w.DEFAULT).slice(0, _.length);
  }, [o, _.length]);
  return /* @__PURE__ */ n.jsx(
    _e,
    {
      id: t,
      letters: _,
      targetAnchors: R,
      width: c,
      direction: a,
      color: i,
      constants: h,
      style: d,
      href: T,
      link: x,
      antimagnet: E
    }
  );
};
export {
  ye as Block,
  ce as D,
  le as E,
  ke as G,
  J as I,
  F as K,
  $e as KMDExitLogo,
  Ye as KMDLogo,
  Ue as KMDLogoDirection,
  De as KMD_EXIT_LOGO_MODE,
  Pe as KMD_LOGO_MODE,
  Te as LOGO_COLOR,
  Q as LOGO_DIRECTION,
  ae as M,
  Ee as N,
  ne as S,
  se as T,
  ve as U,
  xe as X
};
