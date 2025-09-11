import He, { useState as Ve, useRef as hr, useCallback as gr, useEffect as mr } from "react";
var ie = { exports: {} }, W = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function wr() {
  if (Fe) return W;
  Fe = 1;
  var a = He, p = Symbol.for("react.element"), m = Symbol.for("react.fragment"), S = Object.prototype.hasOwnProperty, V = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, P = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(_, c, C) {
    var h, R = {}, w = null, O = null;
    C !== void 0 && (w = "" + C), c.key !== void 0 && (w = "" + c.key), c.ref !== void 0 && (O = c.ref);
    for (h in c) S.call(c, h) && !P.hasOwnProperty(h) && (R[h] = c[h]);
    if (_ && _.defaultProps) for (h in c = _.defaultProps, c) R[h] === void 0 && (R[h] = c[h]);
    return { $$typeof: p, type: _, key: w, ref: O, props: R, _owner: V.current };
  }
  return W.Fragment = m, W.jsx = y, W.jsxs = y, W;
}
var B = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function Er() {
  return Me || (Me = 1, process.env.NODE_ENV !== "production" && function() {
    var a = He, p = Symbol.for("react.element"), m = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), V = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), _ = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), M = Symbol.iterator, j = "@@iterator";
    function x(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = M && e[M] || e[j];
      return typeof r == "function" ? r : null;
    }
    var g = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        k("error", e, t);
      }
    }
    function k(e, r, t) {
      {
        var n = g.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var G = !1, q = !1, I = !1, J = !1, Le = !1, se;
    se = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === S || e === P || Le || e === V || e === C || e === h || J || e === O || G || q || I || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === R || e.$$typeof === y || e.$$typeof === _ || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === se || e.getModuleId !== void 0));
    }
    function Ue(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case S:
          return "Fragment";
        case m:
          return "Portal";
        case P:
          return "Profiler";
        case V:
          return "StrictMode";
        case C:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return ue(r) + ".Consumer";
          case y:
            var t = e;
            return ue(t._context) + ".Provider";
          case c:
            return Ue(e, e.render, "ForwardRef");
          case R:
            var n = e.displayName || null;
            return n !== null ? n : F(e.type) || "Memo";
          case w: {
            var s = e, u = s._payload, i = s._init;
            try {
              return F(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, $ = 0, le, ce, fe, ve, de, pe, he;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function We() {
      {
        if ($ === 0) {
          le = console.log, ce = console.info, fe = console.warn, ve = console.error, de = console.group, pe = console.groupCollapsed, he = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        $++;
      }
    }
    function Be() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: le
            }),
            info: D({}, e, {
              value: ce
            }),
            warn: D({}, e, {
              value: fe
            }),
            error: D({}, e, {
              value: ve
            }),
            group: D({}, e, {
              value: de
            }),
            groupCollapsed: D({}, e, {
              value: pe
            }),
            groupEnd: D({}, e, {
              value: he
            })
          });
        }
        $ < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = g.ReactCurrentDispatcher, z;
    function Y(e, r, t) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            z = n && n[1] || "";
          }
        return `
` + z + e;
      }
    }
    var Q = !1, N;
    {
      var Ye = typeof WeakMap == "function" ? WeakMap : Map;
      N = new Ye();
    }
    function me(e, r) {
      if (!e || Q)
        return "";
      {
        var t = N.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Q = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = X.current, X.current = null, We();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (b) {
              n = b;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (b) {
              n = b;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            n = b;
          }
          e();
        }
      } catch (b) {
        if (b && n && typeof b.stack == "string") {
          for (var o = b.stack.split(`
`), E = n.stack.split(`
`), v = o.length - 1, d = E.length - 1; v >= 1 && d >= 0 && o[v] !== E[d]; )
            d--;
          for (; v >= 1 && d >= 0; v--, d--)
            if (o[v] !== E[d]) {
              if (v !== 1 || d !== 1)
                do
                  if (v--, d--, d < 0 || o[v] !== E[d]) {
                    var T = `
` + o[v].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, T), T;
                  }
                while (v >= 1 && d >= 0);
              break;
            }
        }
      } finally {
        Q = !1, X.current = u, Be(), Error.prepareStackTrace = s;
      }
      var L = e ? e.displayName || e.name : "", A = L ? Y(L) : "";
      return typeof e == "function" && N.set(e, A), A;
    }
    function Ne(e, r, t) {
      return me(e, !1);
    }
    function Ke(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function K(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return me(e, Ke(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case C:
          return Y("Suspense");
        case h:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ne(e.render);
          case R:
            return K(e.type, r, t);
          case w: {
            var n = e, s = n._payload, u = n._init;
            try {
              return K(u(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, we = {}, Ee = g.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        Ee.setExtraStackFrame(t);
      } else
        Ee.setExtraStackFrame(null);
    }
    function Ze(e, r, t, n, s) {
      {
        var u = Function.call.bind(U);
        for (var i in e)
          if (u(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var E = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              o = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (v) {
              o = v;
            }
            o && !(o instanceof Error) && (Z(s), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof o), Z(null)), o instanceof Error && !(o.message in we) && (we[o.message] = !0, Z(s), f("Failed %s type: %s", t, o.message), Z(null));
          }
      }
    }
    var Ge = Array.isArray;
    function ee(e) {
      return Ge(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Je(e) {
      try {
        return be(e), !1;
      } catch {
        return !0;
      }
    }
    function be(e) {
      return "" + e;
    }
    function ye(e) {
      if (Je(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), be(e);
    }
    var _e = g.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, xe;
    function ze(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      typeof e.ref == "string" && _e.current;
    }
    function rr(e, r) {
      {
        var t = function() {
          Re || (Re = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          xe || (xe = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var nr = function(e, r, t, n, s, u, i) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function ar(e, r, t, n, s) {
      {
        var u, i = {}, o = null, E = null;
        t !== void 0 && (ye(t), o = "" + t), Qe(r) && (ye(r.key), o = "" + r.key), ze(r) && (E = r.ref, er(r, s));
        for (u in r)
          U.call(r, u) && !Xe.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (u in v)
            i[u] === void 0 && (i[u] = v[u]);
        }
        if (o || E) {
          var d = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && rr(i, d), E && tr(i, d);
        }
        return nr(e, o, E, s, n, _e.current, i);
      }
    }
    var re = g.ReactCurrentOwner, Se = g.ReactDebugCurrentFrame;
    function H(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        Se.setExtraStackFrame(t);
      } else
        Se.setExtraStackFrame(null);
    }
    var te;
    te = !1;
    function ne(e) {
      return typeof e == "object" && e !== null && e.$$typeof === p;
    }
    function je() {
      {
        if (re.current) {
          var e = F(re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      return "";
    }
    var Te = {};
    function ir(e) {
      {
        var r = je();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ce(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (Te[t])
          return;
        Te[t] = !0;
        var n = "";
        e && e._owner && e._owner !== re.current && (n = " It was passed a child from " + F(e._owner.type) + "."), H(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), H(null);
      }
    }
    function Oe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ee(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ne(n) && Ce(n, r);
          }
        else if (ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = x(e);
          if (typeof s == "function" && s !== e.entries)
            for (var u = s.call(e), i; !(i = u.next()).done; )
              ne(i.value) && Ce(i.value, r);
        }
      }
    }
    function sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = F(r);
          Ze(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !te) {
          te = !0;
          var s = F(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            H(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), H(null);
            break;
          }
        }
        e.ref !== null && (H(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), H(null));
      }
    }
    var Pe = {};
    function ke(e, r, t, n, s, u) {
      {
        var i = $e(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = or();
          E ? o += E : o += je();
          var v;
          e === null ? v = "null" : ee(e) ? v = "array" : e !== void 0 && e.$$typeof === p ? (v = "<" + (F(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : v = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", v, o);
        }
        var d = ar(e, r, t, s, u);
        if (d == null)
          return d;
        if (i) {
          var T = r.children;
          if (T !== void 0)
            if (n)
              if (ee(T)) {
                for (var L = 0; L < T.length; L++)
                  Oe(T[L], e);
                Object.freeze && Object.freeze(T);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oe(T, e);
        }
        if (U.call(r, "key")) {
          var A = F(e), b = Object.keys(r).filter(function(pr) {
            return pr !== "key";
          }), ae = b.length > 0 ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pe[A + ae]) {
            var dr = b.length > 0 ? "{" + b.join(": ..., ") + ": ...}" : "{}";
            f(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ae, A, dr, A), Pe[A + ae] = !0;
          }
        }
        return e === S ? ur(d) : sr(d), d;
      }
    }
    function lr(e, r, t) {
      return ke(e, r, t, !0);
    }
    function cr(e, r, t) {
      return ke(e, r, t, !1);
    }
    var fr = cr, vr = lr;
    B.Fragment = S, B.jsx = fr, B.jsxs = vr;
  }()), B;
}
process.env.NODE_ENV === "production" ? ie.exports = wr() : ie.exports = Er();
var l = ie.exports;
const De = 1 / 60, Ae = 2, Ie = (a) => a.reduce((p, m) => p + m, 0), br = (a, p, m, { k: S, b: V, others: P, ki: y, krandom: _, fcap: c }) => {
  const C = -S * (a - m), h = -V * p, R = Ie(P.map((k) => Math.sign(a - k) * y / Math.max(Math.pow(a - k, 2), 1e-11))), w = Ie(P.map((k) => Math.abs(a - k))), O = (Math.random() - 0.5) * _ / Math.max(Math.pow(w, 2), 1e-13), M = C + h + R + O, x = Math.sign(M) * Math.min(Math.abs(M), c), g = p + x * De, f = a + g * De;
  return Math.abs(g) < Ae && Math.abs(f - m) < Ae ? {
    newX: m,
    newV: 0,
    done: !0
  } : {
    newX: f,
    newV: g,
    done: !1
  };
}, yr = (a) => /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 139.64 193.46", height: "79px", ...a, children: /* @__PURE__ */ l.jsx("path", { d: "M9.92,118.31,118.81,0H132.7L51.34,87.06l88.3,106.4H126.49L44.89,94l-35,37.46v62H0V0H9.92Z" }) }), _r = (a) => /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 152.29 195.94", height: "79px", ...a, children: /* @__PURE__ */ l.jsx("path", { d: "M0,129.23V0H10.17V131c0,33.49,15.13,55.81,66,55.81s66-22.32,66-55.81V0h10.17V129.23c0,40.68-18.85,66.72-76.15,66.72S0,169.9,0,129.23Z" }) }), Rr = (a) => /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 139.14 193.46", height: "79px", ...a, children: /* @__PURE__ */ l.jsx("path", { d: "M38.69,58.53,8.93,11.9l.74,67.47V193.46H0V0H12.15l88.3,134.93,29.76,46.63-.74-67.46V0h9.67V193.46H127Z" }) }), xr = (a) => /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 141.87 198.43", height: "79px", ...a, children: /* @__PURE__ */ l.jsx("path", { d: "M0,152l10.17-1.49c3.47,25,16.87,38.94,60.77,38.94,27,0,60.77-9.92,60.77-45.14,0-29.52-11.16-40.43-58.53-45.64C32,94.25,6.7,87.55,6.7,51.34,6.7,14.14,37.95,0,71.18,0c47.87,0,65.73,17.86,69.2,44.65l-10.17,1.49c-3.47-24.31-19.84-37.2-59-37.2-18.85,0-54.07,5.7-54.07,42.41,0,25.3,11.66,33.49,56.8,38.2,47.13,5,68,15.38,68,54.82,0,38.44-34,54.07-70.94,54.07C20.09,198.43,3.72,179.33,0,152Z" }) }), Sr = (a) => /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 141.38 193.46", height: "79px", ...a, children: /* @__PURE__ */ l.jsx("path", { d: "M75.65,193.46H65.73V8.93H0V0H141.38V8.93H75.65Z" }) }), jr = (a) => /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 174.11 193.45", height: "79px", ...a, children: /* @__PURE__ */ l.jsx("path", { d: "M26,58.78,8.93,17.11l.75,62.25V193.45H0V0H11.91l57,138.15L87.05,183l18.1-44.89L162.2,0h11.9V193.45h-9.67V79.37l.75-62.25L148.07,58.78,92.51,193.45H81.59Z" }) }), Tr = (a) => /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 9.92 193.45", height: "79px", ...a, children: /* @__PURE__ */ l.jsx("path", { d: "M9.92,193.45H0V0H9.92Z" }) }), Cr = (a) => /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 151.3 193.46", height: "79px", ...a, children: /* @__PURE__ */ l.jsx("path", { d: "M63.74,193.46H0V0H63.74C120,0,151.3,21.33,151.3,96.73S120,193.46,63.74,193.46Zm2.73-8.93c52.34,0,74.41-20.84,74.41-87.81S118.81,8.93,66.47,8.93H9.92V184.54Z" }) }), Or = (a) => /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 133.94 193.46", height: "79px", ...a, children: /* @__PURE__ */ l.jsx("path", { d: "M129,0V8.93H9.92V89.79H119.05v8.93H9.92v85.82h124v8.93H0V0Z" }) }), Pr = (a) => /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 154.77 198.43", height: "79px", ...a, children: /* @__PURE__ */ l.jsx("path", { d: "M144.85,165V101.2H95.24V92.27h59.53v76.28c-17.35,21.07-40.16,29.88-72.92,29.88C24.8,198.43,0,160,0,99.21S24.8,0,81.85,0c46.88,0,66.72,21.33,72.43,50.6l-10.42,1.49c-5-27-23.56-43.66-62-43.16C31.5,9.67,10.42,42.66,10.42,99.21S31.49,189.5,81.85,189.5C113.1,189.5,131.72,180.06,144.85,165Z" }) }), kr = (a) => /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 141.87 193.46", height: "79px", ...a, children: /* @__PURE__ */ l.jsx("path", { d: "M56.8,96.73,4.96,0H18.11l44.89,82.32L107.89,0h13.15L69.2,96.73l51.84,96.73H107.89L62.75,111.14,17.61,193.46H4.46Z" }) }), Vr = (a) => /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 80 80", height: "79px", ...a, children: /* @__PURE__ */ l.jsx("path", { d: "M0,0V80H80V0Z" }) }), Fr = {
  K: yr,
  U: _r,
  N: Rr,
  S: xr,
  T: Sr,
  M: jr,
  I: Tr,
  D: Cr,
  E: Or,
  G: Pr,
  X: kr,
  "▝": Vr
}, oe = 57, Mr = (a) => {
  const p = [];
  for (let m = 0; m < a; m++)
    p.push(m / (a - 1));
  return p;
}, Dr = {
  KUNST: [0, 0.11859929846017954, 0.24794251789945726, 0.3661171554513721, 0.48661044156241245],
  MUSIKK: [0, 0.03816833536967032, 0.0797943436298185, 0.11782601208682172, 0.15660388188698735, 0.19524781811273922],
  DESIGN: [0, 0.041969349511149036, 0.08774070612138168, 0.12955977867209262, 0.17219936342679554, 0.21469167676026912],
  KUNSTMUSIKKDESIGN: [0, 0.0663817569012973, 0.13877704305496794, 0.2049211110530094, 0.2723629604628279, 0.3395718747474556, 0.42233990463921206, 0.49473519079288264, 0.5621770402027011, 0.576400344173532, 0.6427821010748294, 0.7091638579761266, 0.7810885201013505, 0.8447606235055309, 0.9122024729153494, 0.9264257768861802, 1]
}, Ir = ({
  width: a = 400,
  text: p = "KUNSTMUSIKKDESIGN",
  anchors: m = [],
  constants: S,
  style: V,
  mainPage: P
}) => {
  const y = p.split("").map((j) => Fr[j]).filter(Boolean), _ = Dr[p] || Mr(y.length), [c, C] = Ve(
    () => _.map((j) => j * (a - oe))
  ), [h, R] = Ve(
    () => y.map(() => 0)
  ), w = hr(null), O = gr(() => {
    w.current = requestAnimationFrame(() => {
      const j = y.map((x, g) => {
        const f = {
          ...S,
          others: c.filter((I, J) => J !== g),
          width: a - oe
        }, k = m.some(
          (I) => g >= I.start && g < I.start + I.length
        ), G = k ? 2 : 1, q = {
          ...f,
          k: f.k * G,
          ki: f.ki * (k ? 1.5 : 1)
        };
        return br(
          c[g],
          h[g],
          _[g] * (a - oe),
          q
        );
      });
      C(j.map((x) => x.newX)), R(j.map((x) => x.newV)), j.every((x) => x.done) || O();
    });
  }, [c, h, p, a, S, _, m, y]);
  mr(() => (w.current !== null && cancelAnimationFrame(w.current), O(), () => {
    w.current !== null && cancelAnimationFrame(w.current);
  }), [p, a, S, O]);
  const M = {
    ...V,
    position: "relative",
    display: "block",
    height: 81,
    width: a
  };
  return /* @__PURE__ */ l.jsx("a", { style: M, href: P, title: "Til forsiden", children: y.map((j, x) => /* @__PURE__ */ l.jsx(
    j,
    {
      style: { position: "absolute", left: c[x] }
    },
    x
  )) });
};
export {
  Vr as Block,
  Cr as D,
  Or as E,
  Pr as G,
  Tr as I,
  yr as K,
  Ir as Logo,
  jr as M,
  Rr as N,
  xr as S,
  Sr as T,
  _r as U,
  kr as X
};
