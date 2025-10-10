var gt = Object.defineProperty;
var Et = (e, t, r) => t in e ? gt(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var Y = (e, t, r) => Et(e, typeof t != "symbol" ? t + "" : t, r);
import {r as l, a as Me} from "./index-CTjT7uj6.js";
import {a as St} from "./index-Ab3reo-t.js";
import {b as U, u as Je, D as we, g as te, R as bt, h as Rt, N as W, s as $, i as ge, j as re, k as fe, l as Be, n as F, I as xt, o as Lt, p as _t, q as Pt, r as Tt, t as Ce, v as kt, A as Ct, w as Ot, x as We, E as q, y as At, z as Nt, m as Ye, B as Dt, C as Ft, F as It, G as $t} from "./index-D3Di-s2P.js";
/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function A() {
    return A = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    A.apply(this, arguments)
}
 
    if (e == null)
        return {};
    var r = {}, n = Object.keys(e), a, i;
    for (i = 0; i < n.length; i++)
        a = n[i],
        !(t.indexOf(a) >= 0) && (r[a] = e[a]);
    return r

const Z = "get"
  , se = "application/x-www-form-urlencoded";
function ne(e) {
    return e != null && typeof e.tagName == "string"
}
function jt(e) {
    return ne(e) && e.tagName.toLowerCase() === "button"
}
function Ut(e) {
    return ne(e) && e.tagName.toLowerCase() === "form"
}
function Ht(e) {
    return ne(e) && e.tagName.toLowerCase() === "input"
}
function Mt(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function Jt(e, t) {
    return e.button === 0 && (!t || t === "_self") && !Mt(e)
}
function he(e) {
    return e === void 0 && (e = ""),
    new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce( (t, r) => {
        let n = e[r];
        return t.concat(Array.isArray(n) ? n.map(a => [r, a]) : [[r, n]])
    }
    , []))
}
function Bt(e, t) {
    let r = he(e);
    return t && t.forEach( (n, a) => {
        r.has(a) || t.getAll(a).forEach(i => {
            r.append(a, i)
        }
        )
    }
    ),
    r
}
let z = null;
function Wt() {
    if (z === null)
        try {
            new FormData(document.createElement("form"),0),
            z = !1
        } catch {
            z = !0
        }
    return z
}
const Yt = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function ue(e) {
    return e != null && !Yt.has(e) ? null : e
}
function zt(e, t) {
    let r, n, a, i, s;
    if (Ut(e)) {
        let o = e.getAttribute("action");
        n = o ? $(o, t) : null,
        r = e.getAttribute("method") || Z,
        a = ue(e.getAttribute("enctype")) || se,
        i = new FormData(e)
    } else if (jt(e) || Ht(e) && (e.type === "submit" || e.type === "image")) {
        let o = e.form;
        if (o == null)
            throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let u = e.getAttribute("formaction") || o.getAttribute("action");
        if (n = u ? $(u, t) : null,
        r = e.getAttribute("formmethod") || o.getAttribute("method") || Z,
        a = ue(e.getAttribute("formenctype")) || ue(o.getAttribute("enctype")) || se,
        i = new FormData(o,e),
        !Wt()) {
            let {name: c, type: d, value: f} = e;
            if (d === "image") {
                let h = c ? c + "." : "";
                i.append(h + "x", "0"),
                i.append(h + "y", "0")
            } else
                c && i.append(c, f)
        }
    } else {
        if (ne(e))
            throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        r = Z,
        n = null,
        a = se,
        s = e
    }
    return i && a === "text/plain" && (s = i,
    i = void 0),
    {
        action: n,
        method: r.toLowerCase(),
        encType: a,
        formData: i,
        body: s
    }
}
const Vt = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"]
  , Kt = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"]
  , Xt = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"]
  , Gt = "6";
try {
    window.__reactRouterVersion = Gt
} catch {}
const ze = l.createContext({
    isTransitioning: !1
})
  , Ve = l.createContext(new Map)
  , Zt = "startTransition"
  , Oe = Me[Zt]
  , Qt = "flushSync"
  , Ae = St[Qt]
  , qt = "useId"
  , Ne = Me[qt];
function er(e) {
    Oe ? Oe(e) : e()
}
function J(e) {
    Ae ? Ae(e) : e()
}
let tr = class {
    constructor() {
        this.status = "pending",
        this.promise = new Promise( (t, r) => {
            this.resolve = n => {
                this.status === "pending" && (this.status = "resolved",
                t(n))
            }
            ,
            this.reject = n => {
                this.status === "pending" && (this.status = "rejected",
                r(n))
            }
        }
        )
    }
}
;
function Cn(e) {
    let {fallbackElement: t, router: r, future: n} = e
      , [a,i] = l.useState(r.state)
      , [s,o] = l.useState()
      , [u,c] = l.useState({
        isTransitioning: !1
    })
      , [d,f] = l.useState()
      , [h,p] = l.useState()
      , [m,w] = l.useState()
      , S = l.useRef(new Map)
      , {v7_startTransition: R} = n || {}
      , y = l.useCallback(E => {
        R ? er(E) : E()
    }
    , [R])
      , g = l.useCallback( (E, x) => {
        let {deletedFetchers: _, unstable_flushSync: k, unstable_viewTransitionOpts: T} = x;
        _.forEach(N => S.current.delete(N)),
        E.fetchers.forEach( (N, oe) => {
            N.data !== void 0 && S.current.set(oe, N.data)
        }
        );
        let O = r.window == null || r.window.document == null || typeof r.window.document.startViewTransition != "function";
        if (!T || O) {
            k ? J( () => i(E)) : y( () => i(E));
            return
        }
        if (k) {
            J( () => {
                h && (d && d.resolve(),
                h.skipTransition()),
                c({
                    isTransitioning: !0,
                    flushSync: !0,
                    currentLocation: T.currentLocation,
                    nextLocation: T.nextLocation
                })
            }
            );
            let N = r.window.document.startViewTransition( () => {
                J( () => i(E))
            }
            );
            N.finished.finally( () => {
                J( () => {
                    f(void 0),
                    p(void 0),
                    o(void 0),
                    c({
                        isTransitioning: !1
                    })
                }
                )
            }
            ),
            J( () => p(N));
            return
        }
        h ? (d && d.resolve(),
        h.skipTransition(),
        w({
            state: E,
            currentLocation: T.currentLocation,
            nextLocation: T.nextLocation
        })) : (o(E),
        c({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: T.currentLocation,
            nextLocation: T.nextLocation
        }))
    }
    , [r.window, h, d, S, y]);
    l.useLayoutEffect( () => r.subscribe(g), [r, g]),
    l.useEffect( () => {
        u.isTransitioning && !u.flushSync && f(new tr)
    }
    , [u]),
    l.useEffect( () => {
        if (d && s && r.window) {
            let E = s
              , x = d.promise
              , _ = r.window.document.startViewTransition(async () => {
                y( () => i(E)),
                await x
            }
            );
            _.finished.finally( () => {
                f(void 0),
                p(void 0),
                o(void 0),
                c({
                    isTransitioning: !1
                })
            }
            ),
            p(_)
        }
    }
    , [y, s, d, r.window]),
    l.useEffect( () => {
        d && s && a.location.key === s.location.key && d.resolve()
    }
    , [d, h, a.location, s]),
    l.useEffect( () => {
        !u.isTransitioning && m && (o(m.state),
        c({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: m.currentLocation,
            nextLocation: m.nextLocation
        }),
        w(void 0))
    }
    , [u.isTransitioning, m]),
    l.useEffect( () => {}
    , []);
    let v = l.useMemo( () => ({
        createHref: r.createHref,
        encodeLocation: r.encodeLocation,
        go: E => r.navigate(E),
        push: (E, x, _) => r.navigate(E, {
            state: x,
            preventScrollReset: _ == null ? void 0 : _.preventScrollReset
        }),
        replace: (E, x, _) => r.navigate(E, {
            replace: !0,
            state: x,
            preventScrollReset: _ == null ? void 0 : _.preventScrollReset
        })
    }), [r])
      , L = r.basename || "/"
      , b = l.useMemo( () => ({
        router: r,
        navigator: v,
        static: !1,
        basename: L
    }), [r, v, L]);
    return l.createElement(l.Fragment, null, l.createElement(we.Provider, {
        value: b
    }, l.createElement(te.Provider, {
        value: a
    }, l.createElement(Ve.Provider, {
        value: S.current
    }, l.createElement(ze.Provider, {
        value: u
    }, l.createElement(bt, {
        basename: L,
        location: a.location,
        navigationType: a.historyAction,
        navigator: v,
        future: {
            v7_relativeSplatPath: r.future.v7_relativeSplatPath
        }
    }, a.initialized || r.future.v7_partialHydration ? l.createElement(rr, {
        routes: r.routes,
        future: r.future,
        state: a
    }) : t))))), null)
}
function rr(e) {
    let {routes: t, future: r, state: n} = e;
    return Rt(t, void 0, n, r)
}
const nr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , ar = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , Ke = l.forwardRef(function(t, r) {
    let {onClick: n, relative: a, reloadDocument: i, replace: s, state: o, target: u, to: c, preventScrollReset: d, unstable_viewTransition: f} = t, h = Ee(t, Vt), {basename: p} = l.useContext(W), m, w = !1;
    if (typeof c == "string" && ar.test(c) && (m = c,
    nr))
        try {
            let g = new URL(window.location.href)
              , v = c.startsWith("//") ? new URL(g.protocol + c) : new URL(c)
              , L = $(v.pathname, p);
            v.origin === g.origin && L != null ? c = L + v.search + v.hash : w = !0
        } catch {}
    let S = ge(c, {
        relative: a
    })
      , R = or(c, {
        replace: s,
        state: o,
        target: u,
        preventScrollReset: d,
        relative: a,
        unstable_viewTransition: f
    });
    function y(g) {
        n && n(g),
        g.defaultPrevented || R(g)
    }
    return l.createElement("a", A({}, h, {
        href: m || S,
        onClick: w || i ? n : y,
        ref: r,
        target: u
    }))
})
  , ir = l.forwardRef(function(t, r) {
    let {"aria-current": n="page", caseSensitive: a=!1, className: i="", end: s=!1, style: o, to: u, unstable_viewTransition: c, children: d} = t
      , f = Ee(t, Kt)
      , h = re(u, {
        relative: f.relative
    })
      , p = U()
      , m = l.useContext(te)
      , {navigator: w, basename: S} = l.useContext(W)
      , R = m != null && fr(h) && c === !0
      , y = w.encodeLocation ? w.encodeLocation(h).pathname : h.pathname
      , g = p.pathname
      , v = m && m.navigation && m.navigation.location ? m.navigation.location.pathname : null;
    a || (g = g.toLowerCase(),
    v = v ? v.toLowerCase() : null,
    y = y.toLowerCase()),
    v && S && (v = $(v, S) || v);
    const L = y !== "/" && y.endsWith("/") ? y.length - 1 : y.length;
    let b = g === y || !s && g.startsWith(y) && g.charAt(L) === "/", E = v != null && (v === y || !s && v.startsWith(y) && v.charAt(y.length) === "/"), x = {
        isActive: b,
        isPending: E,
        isTransitioning: R
    }, _ = b ? n : void 0, k;
    typeof i == "function" ? k = i(x) : k = [i, b ? "active" : null, E ? "pending" : null, R ? "transitioning" : null].filter(Boolean).join(" ");
    let T = typeof o == "function" ? o(x) : o;
    return l.createElement(Ke, A({}, f, {
        "aria-current": _,
        className: k,
        ref: r,
        style: T,
        to: u,
        unstable_viewTransition: c
    }), typeof d == "function" ? d(x) : d)
})
  , Xe = l.forwardRef( (e, t) => {
    let {fetcherKey: r, navigate: n, reloadDocument: a, replace: i, state: s, method: o=Z, action: u, onSubmit: c, relative: d, preventScrollReset: f, unstable_viewTransition: h} = e
      , p = Ee(e, Xt)
      , m = Qe()
      , w = ur(u, {
        relative: d
    })
      , S = o.toLowerCase() === "get" ? "get" : "post"
      , R = y => {
        if (c && c(y),
        y.defaultPrevented)
            return;
        y.preventDefault();
        let g = y.nativeEvent.submitter
          , v = (g == null ? void 0 : g.getAttribute("formmethod")) || o;
        m(g || y.currentTarget, {
            fetcherKey: r,
            method: v,
            navigate: n,
            replace: i,
            state: s,
            relative: d,
            preventScrollReset: f,
            unstable_viewTransition: h
        })
    }
    ;
    return l.createElement("form", A({
        ref: t,
        method: S,
        action: w,
        onSubmit: a ? c : R
    }, p))
}
);
var H;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration",
    e.UseSubmit = "useSubmit",
    e.UseSubmitFetcher = "useSubmitFetcher",
    e.UseFetcher = "useFetcher",
    e.useViewTransitionState = "useViewTransitionState"
}
)(H || (H = {}));
var ee;
(function(e) {
    e.UseFetcher = "useFetcher",
    e.UseFetchers = "useFetchers",
    e.UseScrollRestoration = "useScrollRestoration"
}
)(ee || (ee = {}));
function ae(e) {
    let t = l.useContext(we);
    return t || F(!1),
    t
}
function Ge(e) {
    let t = l.useContext(te);
    return t || F(!1),
    t
}
function or(e, t) {
    let {target: r, replace: n, state: a, preventScrollReset: i, relative: s, unstable_viewTransition: o} = t === void 0 ? {} : t
      , u = Je()
      , c = U()
      , d = re(e, {
        relative: s
    });
    return l.useCallback(f => {
        if (Jt(f, r)) {
            f.preventDefault();
            let h = n !== void 0 ? n : fe(c) === fe(d);
            u(e, {
                replace: h,
                state: a,
                preventScrollReset: i,
                relative: s,
                unstable_viewTransition: o
            })
        }
    }
    , [c, u, d, n, a, r, e, i, s, o])
}
function On(e) {
    let t = l.useRef(he(e))
      , r = l.useRef(!1)
      , n = U()
      , a = l.useMemo( () => Bt(n.search, r.current ? null : t.current), [n.search])
      , i = Je()
      , s = l.useCallback( (o, u) => {
        const c = he(typeof o == "function" ? o(a) : o);
        r.current = !0,
        i("?" + c, u)
    }
    , [i, a]);
    return [a, s]
}
function lr() {
    if (typeof document > "u")
        throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")
}
let sr = 0
  , Ze = () => "__" + String(++sr) + "__";
function Qe() {
    let {router: e} = ae(H.UseSubmit)
      , {basename: t} = l.useContext(W)
      , r = Pt();
    return l.useCallback(function(n, a) {
        a === void 0 && (a = {}),
        lr();
        let {action: i, method: s, encType: o, formData: u, body: c} = zt(n, t);
        if (a.navigate === !1) {
            let d = a.fetcherKey || Ze();
            e.fetch(d, r, a.action || i, {
                preventScrollReset: a.preventScrollReset,
                formData: u,
                body: c,
                formMethod: a.method || s,
                formEncType: a.encType || o,
                unstable_flushSync: a.unstable_flushSync
            })
        } else
            e.navigate(a.action || i, {
                preventScrollReset: a.preventScrollReset,
                formData: u,
                body: c,
                formMethod: a.method || s,
                formEncType: a.encType || o,
                replace: a.replace,
                state: a.state,
                fromRouteId: r,
                unstable_flushSync: a.unstable_flushSync,
                unstable_viewTransition: a.unstable_viewTransition
            })
    }, [e, t, r])
}
function ur(e, t) {
    let {relative: r} = t === void 0 ? {} : t
      , {basename: n} = l.useContext(W)
      , a = l.useContext(Be);
    a || F(!1);
    let[i] = a.matches.slice(-1)
      , s = A({}, re(e || ".", {
        relative: r
    }))
      , o = U();
    if (e == null) {
        s.search = o.search;
        let u = new URLSearchParams(s.search);
        u.has("index") && u.get("index") === "" && (u.delete("index"),
        s.search = u.toString() ? "?" + u.toString() : "")
    }
    return (!e || e === ".") && i.route.index && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"),
    n !== "/" && (s.pathname = s.pathname === "/" ? n : Tt([n, s.pathname])),
    fe(s)
}
function cr(e) {
    var t;
    let {key: r} = e === void 0 ? {} : e
      , {router: n} = ae(H.UseFetcher)
      , a = Ge(ee.UseFetcher)
      , i = l.useContext(Ve)
      , s = l.useContext(Be)
      , o = (t = s.matches[s.matches.length - 1]) == null ? void 0 : t.route.id;
    i || F(!1),
    s || F(!1),
    o == null && F(!1);
    let u = Ne ? Ne() : ""
      , [c,d] = l.useState(r || u);
    r && r !== c ? d(r) : c || d(Ze()),
    l.useEffect( () => (n.getFetcher(c),
    () => {
        n.deleteFetcher(c)
    }
    ), [n, c]);
    let f = l.useCallback( (y, g) => {
        o || F(!1),
        n.fetch(c, o, y, g)
    }
    , [c, o, n])
      , h = Qe()
      , p = l.useCallback( (y, g) => {
        h(y, A({}, g, {
            navigate: !1,
            fetcherKey: c
        }))
    }
    , [c, h])
      , m = l.useMemo( () => l.forwardRef( (g, v) => l.createElement(Xe, A({}, g, {
        navigate: !1,
        fetcherKey: c,
        ref: v
    }))), [c])
      , w = a.fetchers.get(c) || xt
      , S = i.get(c);
    return l.useMemo( () => A({
        Form: m,
        submit: p,
        load: f
    }, w, {
        data: S
    }), [m, p, f, w, S])
}
const De = "react-router-scroll-positions";
let V = {};
function An(e) {
    let {getKey: t, storageKey: r} = e === void 0 ? {} : e
      , {router: n} = ae(H.UseScrollRestoration)
      , {restoreScrollPosition: a, preventScrollReset: i} = Ge(ee.UseScrollRestoration)
      , {basename: s} = l.useContext(W)
      , o = U()
      , u = Lt()
      , c = _t();
    l.useEffect( () => (window.history.scrollRestoration = "manual",
    () => {
        window.history.scrollRestoration = "auto"
    }
    ), []),
    dr(l.useCallback( () => {
        if (c.state === "idle") {
            let d = (t ? t(o, u) : null) || o.key;
            V[d] = window.scrollY
        }
        try {
            sessionStorage.setItem(r || De, JSON.stringify(V))
        } catch {}
        window.history.scrollRestoration = "auto"
    }
    , [r, t, c.state, o, u])),
    typeof document < "u" && (l.useLayoutEffect( () => {
        try {
            let d = sessionStorage.getItem(r || De);
            d && (V = JSON.parse(d))
        } catch {}
    }
    , [r]),
    l.useLayoutEffect( () => {
        let d = t && s !== "/" ? (h, p) => t(A({}, h, {
            pathname: $(h.pathname, s) || h.pathname
        }), p) : t
          , f = n == null ? void 0 : n.enableScrollRestoration(V, () => window.scrollY, d);
        return () => f && f()
    }
    , [n, s, t]),
    l.useLayoutEffect( () => {
        if (a !== !1) {
            if (typeof a == "number") {
                window.scrollTo(0, a);
                return
            }
            if (o.hash) {
                let d = document.getElementById(decodeURIComponent(o.hash.slice(1)));
                if (d) {
                    d.scrollIntoView();
                    return
                }
            }
            i !== !0 && window.scrollTo(0, 0)
        }
    }
    , [o, a, i]))
}
function dr(e, t) {
    let {capture: r} = {};
    l.useEffect( () => {
        let n = r != null ? {
            capture: r
        } : void 0;
        return window.addEventListener("pagehide", e, n),
        () => {
            window.removeEventListener("pagehide", e, n)
        }
    }
    , [e, r])
}
function fr(e, t) {
    t === void 0 && (t = {});
    let r = l.useContext(ze);
    r == null && F(!1);
    let {basename: n} = ae(H.useViewTransitionState)
      , a = re(e, {
        relative: t.relative
    });
    if (!r.isTransitioning)
        return !1;
    let i = $(r.currentLocation.pathname, n) || r.currentLocation.pathname
      , s = $(r.nextLocation.pathname, n) || r.nextLocation.pathname;
    return Ce(a.pathname, s) != null || Ce(a.pathname, i) != null
}
var hr = -1
  , mr = -2
  , pr = -3
  , yr = -4
  , vr = -5
  , wr = -6
  , gr = -7
  , Er = "B"
  , Sr = "D"
  , qe = "E"
  , br = "M"
  , Rr = "N"
  , et = "P"
  , xr = "R"
  , Lr = "S"
  , _r = "Y"
  , Pr = "U"
  , Tr = "Z"
  , tt = class {
    constructor() {
        Y(this, "promise");
        Y(this, "resolve");
        Y(this, "reject");
        this.promise = new Promise( (e, t) => {
            this.resolve = e,
            this.reject = t
        }
        )
    }
}
;
function kr() {
    const e = new TextDecoder;
    let t = "";
    return new TransformStream({
        transform(r, n) {
            const a = e.decode(r, {
                stream: !0
            })
              , i = (t + a).split(`
`);
            t = i.pop() || "";
            for (const s of i)
                n.enqueue(s)
        },
        flush(r) {
            t && r.enqueue(t)
        }
    })
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var ce = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : void 0;
function me(e) {
    const {hydrated: t, values: r} = this;
    if (typeof e == "number")
        return C.call(this, e);
    if (!Array.isArray(e) || !e.length)
        throw new SyntaxError;
    const n = r.length;
    return r.push(...e),
    t.length = r.length,
    C.call(this, n)
}
function C(e) {
    const {hydrated: t, values: r, deferred: n, plugins: a} = this;
    switch (e) {
    case gr:
        return;
    case vr:
        return null;
    case mr:
        return NaN;
    case wr:
        return 1 / 0;
    case pr:
        return -1 / 0;
    case yr:
        return -0
    }
    if (t[e])
        return t[e];
    const i = r[e];
    if (!i || typeof i != "object")
        return t[e] = i;
    if (Array.isArray(i))
        if (typeof i[0] == "string") {
            const [s,o,u] = i;
            switch (s) {
            case Sr:
                return t[e] = new Date(o);
            case Pr:
                return t[e] = new URL(o);
            case Er:
                return t[e] = BigInt(o);
            case xr:
                return t[e] = new RegExp(o,u);
            case _r:
                return t[e] = Symbol.for(o);
            case Lr:
                const c = new Set;
                t[e] = c;
                for (let w = 1; w < i.length; w++)
                    c.add(C.call(this, i[w]));
                return c;
            case br:
                const d = new Map;
                t[e] = d;
                for (let w = 1; w < i.length; w += 2)
                    d.set(C.call(this, i[w]), C.call(this, i[w + 1]));
                return d;
            case Rr:
                const f = Object.create(null);
                t[e] = f;
                for (const w in o)
                    f[C.call(this, Number(w))] = C.call(this, o[w]);
                return f;
            case et:
                if (t[o])
                    return t[e] = t[o];
                {
                    const w = new tt;
                    return n[o] = w,
                    t[e] = w.promise
                }
            case qe:
                const [,h,p] = i;
                let m = p && ce && ce[p] ? new ce[p](h) : new Error(h);
                return t[e] = m,
                m;
            case Tr:
                return C.call(this, o);
            default:
                if (Array.isArray(a)) {
                    const w = i.slice(1).map(S => C.call(this, S));
                    for (const S of a) {
                        const R = S(i[0], ...w);
                        if (R)
                            return t[e] = R.value
                    }
                }
                throw new SyntaxError
            }
        } else {
            const s = [];
            t[e] = s;
            for (let o = 0; o < i.length; o++) {
                const u = i[o];
                u !== hr && (s[o] = C.call(this, u))
            }
            return s
        }
    else {
        const s = {};
        t[e] = s;
        for (const o in i)
            s[C.call(this, Number(o))] = C.call(this, i[o]);
        return s
    }
}
async function Cr(e, t) {
    const {plugins: r} = t ?? {}
      , n = new tt
      , a = e.pipeThrough(kr()).getReader()
      , i = {
        values: [],
        hydrated: [],
        deferred: {},
        plugins: r
    }
      , s = await Or.call(i, a);
    let o = n.promise;
    return s.done ? n.resolve() : o = Ar.call(i, a).then(n.resolve).catch(u => {
        for (const c of Object.values(i.deferred))
            c.reject(u);
        n.reject(u)
    }
    ),
    {
        done: o.then( () => a.closed),
        value: s.value
    }
}
async function Or(e) {
    const t = await e.read();
    if (!t.value)
        throw new SyntaxError;
    let r;
    try {
        r = JSON.parse(t.value)
    } catch {
        throw new SyntaxError
    }
    return {
        done: t.done,
        value: me.call(this, r)
    }
}
async function Ar(e) {
    let t = await e.read();
    for (; !t.done; ) {
        if (!t.value)
            continue;
        const r = t.value;
        switch (r[0]) {
        case et:
            {
                const n = r.indexOf(":")
                  , a = Number(r.slice(1, n))
                  , i = this.deferred[a];
                if (!i)
                    throw new Error(`Deferred ID ${a} not found in stream`);
                const s = r.slice(n + 1);
                let o;
                try {
                    o = JSON.parse(s)
                } catch {
                    throw new SyntaxError
                }
                const u = me.call(this, o);
                i.resolve(u);
                break
            }
        case qe:
            {
                const n = r.indexOf(":")
                  , a = Number(r.slice(1, n))
                  , i = this.deferred[a];
                if (!i)
                    throw new Error(`Deferred ID ${a} not found in stream`);
                const s = r.slice(n + 1);
                let o;
                try {
                    o = JSON.parse(s)
                } catch {
                    throw new SyntaxError
                }
                const u = me.call(this, o);
                i.reject(u);
                break
            }
        default:
            throw new SyntaxError
        }
        t = await e.read()
    }
}
/**
 * @remix-run/server-runtime v2.10.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const rt = Symbol("SingleFetchRedirect");
/**
 * @remix-run/react v2.10.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function P() {
    return P = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
        }
        return e
    }
    ,
    P.apply(this, arguments)
}
/**
 * @remix-run/react v2.10.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function j(e, t) {
    if (e === !1 || e === null || typeof e > "u")
        throw new Error(t)
}
/**
 * @remix-run/react v2.10.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
async function nt(e, t) {
    if (e.id in t)
        return t[e.id];
    try {
        let r = await import(e.module);
        return t[e.id] = r,
        r
    } catch {
        return window.__remixContext.isSpaMode,
        window.location.reload(),
        new Promise( () => {}
        )
    }
}
/**
 * @remix-run/react v2.10.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Nr(e, t, r) {
    let n = e.map(i => {
        var s;
        let o = t[i.route.id]
          , u = r.routes[i.route.id];
        return [u.css ? u.css.map(c => ({
            rel: "stylesheet",
            href: c
        })) : [], (o == null || (s = o.links) === null || s === void 0 ? void 0 : s.call(o)) || []]
    }
    ).flat(2)
      , a = Ur(e, r);
    return it(n, a)
}
async function at(e, t) {
    var r, n;
    if (!e.css && !t.links || !Mr())
        return;
    let a = [((r = e.css) === null || r === void 0 ? void 0 : r.map(o => ({
        rel: "stylesheet",
        href: o
    }))) ?? [], ((n = t.links) === null || n === void 0 ? void 0 : n.call(t)) ?? []].flat(1);
    if (a.length === 0)
        return;
    let i = [];
    for (let o of a)
        !Se(o) && o.rel === "stylesheet" && i.push({
            ...o,
            rel: "preload",
            as: "style"
        });
    let s = i.filter(o => (!o.media || window.matchMedia(o.media).matches) && !document.querySelector(`link[rel="stylesheet"][href="${o.href}"]`));
    await Promise.all(s.map(Dr))
}
async function Dr(e) {
    return new Promise(t => {
        let r = document.createElement("link");
        Object.assign(r, e);
        function n() {
            document.head.contains(r) && document.head.removeChild(r)
        }
        r.onload = () => {
            n(),
            t()
        }
        ,
        r.onerror = () => {
            n(),
            t()
        }
        ,
        document.head.appendChild(r)
    }
    )
}
function Se(e) {
    return e != null && typeof e.page == "string"
}
function Fr(e) {
    return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string"
}
async function Ir(e, t, r) {
    let n = await Promise.all(e.map(async a => {
        let i = await nt(t.routes[a.route.id], r);
        return i.links ? i.links() : []
    }
    ));
    return it(n.flat(1).filter(Fr).filter(a => a.rel === "stylesheet" || a.rel === "preload").map(a => a.rel === "stylesheet" ? {
        ...a,
        rel: "prefetch",
        as: "style"
    } : {
        ...a,
        rel: "prefetch"
    }))
}
function Fe(e, t, r, n, a, i) {
    let s = ot(e)
      , o = (d, f) => r[f] ? d.route.id !== r[f].route.id : !0
      , u = (d, f) => {
        var h;
        return r[f].pathname !== d.pathname || ((h = r[f].route.path) === null || h === void 0 ? void 0 : h.endsWith("*")) && r[f].params["*"] !== d.params["*"]
    }
    ;
    return i === "data" && a.search !== s.search ? t.filter( (d, f) => {
        if (!n.routes[d.route.id].hasLoader)
            return !1;
        if (o(d, f) || u(d, f))
            return !0;
        if (d.route.shouldRevalidate) {
            var p;
            let m = d.route.shouldRevalidate({
                currentUrl: new URL(a.pathname + a.search + a.hash,window.origin),
                currentParams: ((p = r[0]) === null || p === void 0 ? void 0 : p.params) || {},
                nextUrl: new URL(e,window.origin),
                nextParams: d.params,
                defaultShouldRevalidate: !0
            });
            if (typeof m == "boolean")
                return m
        }
        return !0
    }
    ) : t.filter( (d, f) => {
        let h = n.routes[d.route.id];
        return (i === "assets" || h.hasLoader) && (o(d, f) || u(d, f))
    }
    )
}
function $r(e, t, r) {
    let n = ot(e);
    return be(t.filter(a => r.routes[a.route.id].hasLoader && !r.routes[a.route.id].hasClientLoader).map(a => {
        let {pathname: i, search: s} = n
          , o = new URLSearchParams(s);
        return o.set("_data", a.route.id),
        `${i}?${o}`
    }
    ))
}
function jr(e, t) {
    return be(e.map(r => {
        let n = t.routes[r.route.id]
          , a = [n.module];
        return n.imports && (a = a.concat(n.imports)),
        a
    }
    ).flat(1))
}
function Ur(e, t) {
    return be(e.map(r => {
        let n = t.routes[r.route.id]
          , a = [n.module];
        return n.imports && (a = a.concat(n.imports)),
        a
    }
    ).flat(1))
}
function be(e) {
    return [...new Set(e)]
}
function Hr(e) {
    let t = {}
      , r = Object.keys(e).sort();
    for (let n of r)
        t[n] = e[n];
    return t
}
function it(e, t) {
    let r = new Set
      , n = new Set(t);
    return e.reduce( (a, i) => {
        if (t && !Se(i) && i.as === "script" && i.href && n.has(i.href))
            return a;
        let o = JSON.stringify(Hr(i));
        return r.has(o) || (r.add(o),
        a.push({
            key: o,
            link: i
        })),
        a
    }
    , [])
}
function ot(e) {
    let t = kt(e);
    return t.search === void 0 && (t.search = ""),
    t
}
let K;
function Mr() {
    if (K !== void 0)
        return K;
    let e = document.createElement("link");
    return K = e.relList.supports("preload"),
    e = null,
    K
}
/**
 * @remix-run/react v2.10.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const Jr = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
}
  , Br = /[&><\u2028\u2029]/g;
function X(e) {
    return e.replace(Br, t => Jr[t])
}
function Ie(e) {
    return {
        __html: e
    }
}
/**
 * @remix-run/react v2.10.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Wr(e) {
    return e.headers.get("X-Remix-Catch") != null
}
function Yr(e) {
    return e.headers.get("X-Remix-Error") != null
}
function zr(e) {
    return lt(e) && e.status >= 400 && e.headers.get("X-Remix-Error") == null && e.headers.get("X-Remix-Catch") == null && e.headers.get("X-Remix-Response") == null
}
function Vr(e) {
    return e.headers.get("X-Remix-Redirect") != null
}
function Kr(e) {
    var t;
    return !!((t = e.headers.get("Content-Type")) !== null && t !== void 0 && t.match(/text\/remix-deferred/))
}
function lt(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u"
}
function Xr(e) {
    let t = e;
    return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function"
}
async function st(e, t, r=0) {
    let n = new URL(e.url);
    n.searchParams.set("_data", t),
    r > 0 && await new Promise(o => setTimeout(o, 5 ** r * 10));
    let a = await ut(e)
      , i = window.__remixRevalidation
      , s = await fetch(n.href, a).catch(o => {
        if (typeof i == "number" && i === window.__remixRevalidation && (o == null ? void 0 : o.name) === "TypeError" && r < 3)
            return st(e, t, r + 1);
        throw o
    }
    );
    if (Yr(s)) {
        let o = await s.json()
          , u = new Error(o.message);
        return u.stack = o.stack,
        u
    }
    if (zr(s)) {
        let o = await s.text()
          , u = new Error(o);
        return u.stack = void 0,
        u
    }
    return s
}
async function ut(e) {
    let t = {
        signal: e.signal
    };
    if (e.method !== "GET") {
        t.method = e.method;
        let r = e.headers.get("Content-Type");
        r && /\bapplication\/json\b/.test(r) ? (t.headers = {
            "Content-Type": r
        },
        t.body = JSON.stringify(await e.json())) : r && /\btext\/plain\b/.test(r) ? (t.headers = {
            "Content-Type": r
        },
        t.body = await e.text()) : r && /\bapplication\/x-www-form-urlencoded\b/.test(r) ? t.body = new URLSearchParams(await e.text()) : t.body = await e.formData()
    }
    return t
}
const Gr = "__deferred_promise:";
async function Zr(e) {
    if (!e)
        throw new Error("parseDeferredReadableStream requires stream argument");
    let t, r = {};
    try {
        let n = Qr(e)
          , i = (await n.next()).value;
        if (!i)
            throw new Error("no critical data");
        let s = JSON.parse(i);
        if (typeof s == "object" && s !== null)
            for (let[o,u] of Object.entries(s))
                typeof u != "string" || !u.startsWith(Gr) || (t = t || {},
                t[o] = new Promise( (c, d) => {
                    r[o] = {
                        resolve: f => {
                            c(f),
                            delete r[o]
                        }
                        ,
                        reject: f => {
                            d(f),
                            delete r[o]
                        }
                    }
                }
                ));
        return (async () => {
            try {
                for await(let o of n) {
                    let[u,...c] = o.split(":")
                      , d = c.join(":")
                      , f = JSON.parse(d);
                    if (u === "data")
                        for (let[h,p] of Object.entries(f))
                            r[h] && r[h].resolve(p);
                    else if (u === "error")
                        for (let[h,p] of Object.entries(f)) {
                            let m = new Error(p.message);
                            m.stack = p.stack,
                            r[h] && r[h].reject(m)
                        }
                }
                for (let[o,u] of Object.entries(r))
                    u.reject(new Ct(`Deferred ${o} will never be resolved`))
            } catch (o) {
                for (let u of Object.values(r))
                    u.reject(o)
            }
        }
        )(),
        new Ot({
            ...s,
            ...t
        })
    } catch (n) {
        for (let a of Object.values(r))
            a.reject(n);
        throw n
    }
}
async function *Qr(e) {
    let t = e.getReader()
      , r = []
      , n = []
      , a = !1
      , i = new TextEncoder
      , s = new TextDecoder
      , o = async () => {
        if (n.length > 0)
            return n.shift();
        for (; !a && n.length === 0; ) {
            let c = await t.read();
            if (c.done) {
                a = !0;
                break
            }
            r.push(c.value);
            try {
                let f = s.decode($e(...r)).split(`

`);
                if (f.length >= 2 && (n.push(...f.slice(0, -1)),
                r = [i.encode(f.slice(-1).join(`

`))]),
                n.length > 0)
                    break
            } catch {
                continue
            }
        }
        return n.length > 0 || r.length > 0 && (n = s.decode($e(...r)).split(`

`).filter(d => d),
        r = []),
        n.shift()
    }
      , u = await o();
    for (; u; )
        yield u,
        u = await o()
}
function $e(...e) {
    let t = new Uint8Array(e.reduce( (n, a) => n + a.length, 0))
      , r = 0;
    for (let n of e)
        t.set(n, r),
        r += n.length;
    return t
}
/**
 * @remix-run/react v2.10.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Nn(e, t) {
    return async ({request: r, matches: n}) => r.method !== "GET" ? qr(r, n) : en(e, t, r, n)
}
function qr(e, t) {
    return Promise.all(t.map(async r => {
        let n;
        return {
            ...await r.resolve(async i => ({
                type: "data",
                result: await i(async () => {
                    let o = Re(e.url)
                      , u = await ut(e)
                      , {data: c, status: d} = await pe(o, u);
                    return n = d,
                    ye(c, r.route.id)
                }
                ),
                status: n
            })),
            status: n
        }
    }
    ))
}
function en(e, t, r, n) {
    let a;
    return Promise.all(n.map(async i => i.resolve(async s => {
        let o, u = tn(Re(r.url));
        return e.routes[i.route.id].hasClientLoader ? o = await s(async () => {
            u.searchParams.set("_routes", i.route.id);
            let {data: c} = await pe(u);
            return je(c, i.route.id)
        }
        ) : o = await s(async () => {
            a || (u = ct(e, t, n.map(d => d.route), n.filter(d => d.shouldLoad).map(d => d.route), u),
            a = pe(u).then( ({data: d}) => d));
            let c = await a;
            return je(c, i.route.id)
        }
        ),
        {
            type: "data",
            result: o
        }
    }
    )))
}
function tn(e) {
    let t = e.searchParams.getAll("index");
    e.searchParams.delete("index");
    let r = [];
    for (let n of t)
        n && r.push(n);
    for (let n of r)
        e.searchParams.append("index", n);
    return e
}
function ct(e, t, r, n, a) {
    let i = c => c.filter(d => e.routes[d].hasLoader).join(",");
    if (!r.some(c => {
        var d, f;
        return ((d = t[c.id]) === null || d === void 0 ? void 0 : d.shouldRevalidate) || ((f = e.routes[c.id]) === null || f === void 0 ? void 0 : f.hasClientLoader)
    }
    ))
        return a;
    let o = i(r.map(c => c.id))
      , u = i(n.filter(c => {
        var d;
        return !((d = e.routes[c.id]) !== null && d !== void 0 && d.hasClientLoader)
    }
    ).map(c => c.id));
    return o !== u && a.searchParams.set("_routes", u),
    a
}
function Re(e) {
    let t = typeof e == "string" ? new URL(e,window.location.origin) : e;
    return t.pathname = `${t.pathname === "/" ? "_root" : t.pathname}.data`,
    t
}
async function pe(e, t) {
    let r = await fetch(e, t);
    j(r.body, "No response body to decode");
    try {
        let n = await rn(r.body, window);
        return {
            status: r.status,
            data: n.value
        }
    } catch (n) {
        throw console.error(n),
        new Error(`Unable to decode turbo-stream response from URL: ${e.toString()}`)
    }
}
function rn(e, t) {
    return Cr(e, {
        plugins: [ (r, ...n) => {
            if (r === "SanitizedError") {
                let[a,i,s] = n
                  , o = Error;
                a && a in t && typeof t[a] == "function" && (o = t[a]);
                let u = new o(i);
                return u.stack = s,
                {
                    value: u
                }
            }
            if (r === "ErrorResponse") {
                let[a,i,s] = n;
                return {
                    value: new q(i,s,a)
                }
            }
            if (r === "SingleFetchRedirect")
                return {
                    value: {
                        [rt]: n[0]
                    }
                }
        }
        ]
    })
}
function je(e, t) {
    let r = e[rt];
    return r ? ye(r, t) : e[t] !== void 0 ? ye(e[t], t) : null
}
function ye(e, t) {
    if ("error"in e)
        throw e.error;
    if ("redirect"in e) {
        let r = {};
        return e.revalidate && (r["X-Remix-Revalidate"] = "yes"),
        e.reload && (r["X-Remix-Reload-Document"] = "yes"),
        We(e.redirect, {
            status: e.status,
            headers: r
        })
    } else {
        if ("data"in e)
            return e.data;
        throw new Error(`No response found for routeId "${t}"`)
    }
}
/**
 * @remix-run/react v2.10.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
class Dn extends l.Component {
    constructor(t) {
        super(t),
        this.state = {
            error: t.error || null,
            location: t.location
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, r) {
        return r.location !== t.location ? {
            error: t.error || null,
            location: t.location
        } : {
            error: t.error || r.error,
            location: r.location
        }
    }
    render() {
        return this.state.error ? l.createElement(dt, {
            error: this.state.error,
            isOutsideRemixApp: !0
        }) : this.props.children
    }
}
function dt({error: e, isOutsideRemixApp: t}) {
    console.error(e);
    let r = l.createElement("script", {
        dangerouslySetInnerHTML: {
            __html: `
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
        );
      `
        }
    });
    if (At(e))
        return l.createElement(ve, {
            title: "Unhandled Thrown Response!"
        }, l.createElement("h1", {
            style: {
                fontSize: "24px"
            }
        }, e.status, " ", e.statusText), r);
    let n;
    if (e instanceof Error)
        n = e;
    else {
        let a = e == null ? "Unknown Error" : typeof e == "object" && "toString"in e ? e.toString() : JSON.stringify(e);
        n = new Error(a)
    }
    return l.createElement(ve, {
        title: "Application Error!",
        isOutsideRemixApp: t
    }, l.createElement("h1", {
        style: {
            fontSize: "24px"
        }
    }, "Application Error"), l.createElement("pre", {
        style: {
            padding: "2rem",
            background: "hsla(10, 50%, 50%, 0.1)",
            color: "red",
            overflow: "auto"
        }
    }, n.stack), r)
}
function ve({title: e, renderScripts: t, isOutsideRemixApp: r, children: n}) {
    var a;
    let {routeModules: i} = M();
    return (a = i.root) !== null && a !== void 0 && a.Layout && !r ? n : l.createElement("html", {
        lang: "en"
    }, l.createElement("head", null, l.createElement("meta", {
        charSet: "utf-8"
    }), l.createElement("meta", {
        name: "viewport",
        content: "width=device-width,initial-scale=1,viewport-fit=cover"
    }), l.createElement("title", null, e)), l.createElement("body", null, l.createElement("main", {
        style: {
            fontFamily: "system-ui, sans-serif",
            padding: "2rem"
        }
    }, n, t ? l.createElement(bn, null) : null)))
}
/**
 * @remix-run/react v2.10.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function nn() {
    return l.createElement(ve, {
        title: "Loading...",
        renderScripts: !0
    }, l.createElement("script", {
        dangerouslySetInnerHTML: {
            __html: `
              console.log(
                "💿 Hey developer 👋. You can provide a way better UX than this " +
                "when your app is running \`clientLoader\` functions on hydration. " +
                "Check out https://remix.run/route/hydrate-fallback for more information."
              );
            `
        }
    }))
}
/**
 * @remix-run/react v2.10.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ft(e) {
    let t = {};
    return Object.values(e).forEach(r => {
        let n = r.parentId || "";
        t[n] || (t[n] = []),
        t[n].push(r)
    }
    ),
    t
}
function an(e, t, r) {
    let n = ht(t)
      , a = t.HydrateFallback && (!r || e.id === "root") ? t.HydrateFallback : e.id === "root" ? nn : void 0
      , i = t.ErrorBoundary ? t.ErrorBoundary : e.id === "root" ? () => l.createElement(dt, {
        error: Nt()
    }) : void 0;
    return e.id === "root" && t.Layout ? {
        ...n ? {
            element: l.createElement(t.Layout, null, l.createElement(n, null))
        } : {
            Component: n
        },
        ...i ? {
            errorElement: l.createElement(t.Layout, null, l.createElement(i, null))
        } : {
            ErrorBoundary: i
        },
        ...a ? {
            hydrateFallbackElement: l.createElement(t.Layout, null, l.createElement(a, null))
        } : {
            HydrateFallback: a
        }
    } : {
        Component: n,
        ErrorBoundary: i,
        HydrateFallback: a
    }
}
function Fn(e, t, r, n, a, i) {
    return xe(t, r, n, a, i, "", ft(t), e)
}
function G(e, t, r) {
    if (r) {
        let s = `You cannot call ${e === "action" ? "serverAction()" : "serverLoader()"} in SPA Mode (routeId: "${t.id}")`;
        throw console.error(s),
        new q(400,"Bad Request",new Error(s),!0)
    }
    let a = `You are trying to call ${e === "action" ? "serverAction()" : "serverLoader()"} on a route that does not have a server ${e} (routeId: "${t.id}")`;
    if (e === "loader" && !t.hasLoader || e === "action" && !t.hasAction)
        throw console.error(a),
        new q(400,"Bad Request",new Error(a),!0)
}
function de(e, t) {
    let r = e === "clientAction" ? "a" : "an"
      , n = `Route "${t}" does not have ${r} ${e}, but you are trying to submit to it. To fix this, please add ${r} \`${e}\` function to the route`;
    throw console.error(n),
    new q(405,"Method Not Allowed",new Error(n),!0)
}
function xe(e, t, r, n, a, i="", s=ft(e), o) {
    return (s[i] || []).map(u => {
        let c = t[u.id];
        async function d(g, v, L) {
            if (typeof L == "function")
                return await L();
            let b = await ln(g, u);
            return v ? sn(b) : b
        }
        function f(g, v, L) {
            return u.hasLoader ? d(g, v, L) : Promise.resolve(null)
        }
        function h(g, v, L) {
            if (!u.hasAction)
                throw de("action", u.id);
            return d(g, v, L)
        }
        async function p(g) {
            let v = t[u.id]
              , L = v ? at(u, v) : Promise.resolve();
            try {
                return g()
            } finally {
                await L
            }
        }
        let m = {
            id: u.id,
            index: u.index,
            path: u.path
        };
        if (c) {
            var w, S, R;
            Object.assign(m, {
                ...m,
                ...an(u, c, a),
                handle: c.handle,
                shouldRevalidate: o ? Ue(u.id, c.shouldRevalidate, o) : c.shouldRevalidate
            });
            let g = r == null || (w = r.loaderData) === null || w === void 0 ? void 0 : w[u.id]
              , v = r == null || (S = r.errors) === null || S === void 0 ? void 0 : S[u.id]
              , L = o == null && (((R = c.clientLoader) === null || R === void 0 ? void 0 : R.hydrate) === !0 || !u.hasLoader);
            m.loader = async ({request: b, params: E}, x) => {
                try {
                    return await p(async () => (j(c, "No `routeModule` available for critical-route loader"),
                    c.clientLoader ? c.clientLoader({
                        request: b,
                        params: E,
                        async serverLoader() {
                            if (G("loader", u, a),
                            L) {
                                if (v !== void 0)
                                    throw v;
                                return g
                            }
                            return f(b, !0, x)
                        }
                    }) : a ? null : f(b, !1, x)))
                } finally {
                    L = !1
                }
            }
            ,
            m.loader.hydrate = cn(u, c, a),
            m.action = ({request: b, params: E}, x) => p(async () => {
                if (j(c, "No `routeModule` available for critical-route action"),
                !c.clientAction) {
                    if (a)
                        throw de("clientAction", u.id);
                    return h(b, !1, x)
                }
                return c.clientAction({
                    request: b,
                    params: E,
                    async serverAction() {
                        return G("action", u, a),
                        h(b, !0, x)
                    }
                })
            }
            )
        } else
            u.hasClientLoader || (m.loader = ({request: g}, v) => p( () => a ? Promise.resolve(null) : f(g, !1, v))),
            u.hasClientAction || (m.action = ({request: g}, v) => p( () => {
                if (a)
                    throw de("clientAction", u.id);
                return h(g, !1, v)
            }
            )),
            m.lazy = async () => {
                let g = await on(u, t)
                  , v = {
                    ...g
                };
                if (g.clientLoader) {
                    let L = g.clientLoader;
                    v.loader = (b, E) => L({
                        ...b,
                        async serverLoader() {
                            return G("loader", u, a),
                            f(b.request, !0, E)
                        }
                    })
                }
                if (g.clientAction) {
                    let L = g.clientAction;
                    v.action = (b, E) => L({
                        ...b,
                        async serverAction() {
                            return G("action", u, a),
                            h(b.request, !0, E)
                        }
                    })
                }
                return o && (v.shouldRevalidate = Ue(u.id, g.shouldRevalidate, o)),
                {
                    ...v.loader ? {
                        loader: v.loader
                    } : {},
                    ...v.action ? {
                        action: v.action
                    } : {},
                    hasErrorBoundary: v.hasErrorBoundary,
                    shouldRevalidate: v.shouldRevalidate,
                    handle: v.handle,
                    Component: v.Component,
                    ErrorBoundary: v.ErrorBoundary
                }
            }
            ;
        let y = xe(e, t, r, n, a, u.id, s, o);
        return y.length > 0 && (m.children = y),
        m
    }
    )
}
function Ue(e, t, r) {
    let n = !1;
    return a => n ? t ? t(a) : a.defaultShouldRevalidate : (n = !0,
    r.has(e))
}
async function on(e, t) {
    let r = await nt(e, t);
    return await at(e, r),
    {
        Component: ht(r),
        ErrorBoundary: r.ErrorBoundary,
        clientAction: r.clientAction,
        clientLoader: r.clientLoader,
        handle: r.handle,
        links: r.links,
        meta: r.meta,
        shouldRevalidate: r.shouldRevalidate
    }
}
async function ln(e, t) {
    let r = await st(e, t.id);
    if (r instanceof Error)
        throw r;
    if (Vr(r))
        throw un(r);
    if (Wr(r))
        throw r;
    return Kr(r) && r.body ? await Zr(r.body) : r
}
function sn(e) {
    if (Xr(e))
        return e.data;
    if (lt(e)) {
        let t = e.headers.get("Content-Type");
        return t && /\bapplication\/json\b/.test(t) ? e.json() : e.text()
    }
    return e
}
function un(e) {
    let t = parseInt(e.headers.get("X-Remix-Status"), 10) || 302
      , r = e.headers.get("X-Remix-Redirect")
      , n = {}
      , a = e.headers.get("X-Remix-Revalidate");
    a && (n["X-Remix-Revalidate"] = a);
    let i = e.headers.get("X-Remix-Reload-Document");
    return i && (n["X-Remix-Reload-Document"] = i),
    We(r, {
        status: t,
        headers: n
    })
}
function ht(e) {
    if (e.default == null)
        return;
    if (!(typeof e.default == "object" && Object.keys(e.default).length === 0))
        return e.default
}
function cn(e, t, r) {
    return r && e.id !== "root" || t.clientLoader != null && (t.clientLoader.hydrate === !0 || e.hasLoader !== !0)
}
/**
 * @remix-run/react v2.10.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const dn = 7680;
let I = null;
function Le(e, t) {
    return e.unstable_fogOfWar === !0 && !t
}
function fn(e, t) {
    let r = new Set(t.state.matches.map(s => s.route.id))
      , n = t.state.location.pathname.split("/").filter(Boolean)
      , a = ["/"];
    for (n.pop(); n.length > 0; )
        a.push(`/${n.join("/")}`),
        n.pop();
    a.forEach(s => {
        let o = Ye(t.routes, s, t.basename);
        o && o.forEach(u => r.add(u.route.id))
    }
    );
    let i = [...r].reduce( (s, o) => Object.assign(s, {
        [o]: e.routes[o]
    }), {});
    return {
        ...e,
        routes: i
    }
}
function In(e, t, r, n, a) {
    return Le(r, n) ? (I = {
        nextPaths: new Set,
        knownGoodPaths: new Set,
        known404Paths: new Set
    },
    {
        enabled: !0,
        patchRoutesOnMiss: async ({path: i, patch: s}) => {
            I.known404Paths.has(i) || I.knownGoodPaths.has(i) || await mt([i], I, e, t, r, n, a, s)
        }
    }) : {
        enabled: !1
    }
}
function $n(e, t, r, n, a) {
    l.useEffect( () => {
        var i;
        if (!Le(n, a) || ((i = navigator.connection) === null || i === void 0 ? void 0 : i.saveData) === !0)
            return;
        function s(f) {
            let h = f.tagName === "FORM" ? f.getAttribute("action") : f.getAttribute("href");
            if (!h)
                return;
            let p = new URL(h,window.location.origin)
              , {knownGoodPaths: m, known404Paths: w, nextPaths: S} = I;
            m.has(p.pathname) || w.has(p.pathname) || S.add(p.pathname)
        }
        async function o() {
            let f = hn(I);
            if (f.length !== 0)
                try {
                    await mt(f, I, t, r, n, a, e.basename, e.patchRoutes)
                } catch (h) {
                    console.error("Failed to fetch manifest patches", h)
                }
        }
        document.body.querySelectorAll("a[data-discover], form[data-discover]").forEach(f => s(f)),
        o();
        let u = mn(o, 100);
        function c(f) {
            return f.nodeType === Node.ELEMENT_NODE
        }
        let d = new MutationObserver(f => {
            let h = new Set;
            f.forEach(p => {
                [p.target, ...p.addedNodes].forEach(m => {
                    c(m) && ((m.tagName === "A" && m.getAttribute("data-discover") || m.tagName === "FORM" && m.getAttribute("data-discover")) && h.add(m),
                    m.tagName !== "A" && m.querySelectorAll("a[data-discover], form[data-discover]").forEach(w => h.add(w)))
                }
                )
            }
            ),
            h.forEach(p => s(p)),
            u()
        }
        );
        return d.observe(document.documentElement, {
            subtree: !0,
            childList: !0,
            attributes: !0,
            attributeFilter: ["data-discover", "href", "action"]
        }),
        () => d.disconnect()
    }
    , [n, a, t, r, e])
}
function hn(e, t) {
    let {knownGoodPaths: r, known404Paths: n, nextPaths: a} = e;
    return Array.from(a.keys()).filter(i => r.has(i) || n.has(i) ? (a.delete(i),
    !1) : !0)
}
async function mt(e, t, r, n, a, i, s, o) {
    let {nextPaths: u, knownGoodPaths: c, known404Paths: d} = t
      , f = `${s ?? "/"}/__manifest`.replace(/\/+/g, "/")
      , h = new URL(f,window.location.origin);
    if (h.searchParams.set("version", r.version),
    e.forEach(y => h.searchParams.append("p", y)),
    h.toString().length > dn) {
        u.clear();
        return
    }
    let p = await fetch(h);
    if (p.ok) {
        if (p.status >= 400)
            throw new Error(await p.text())
    } else
        throw new Error(`${p.status} ${p.statusText}`);
    let m = await p.json()
      , w = new Set(Object.keys(r.routes))
      , S = Object.values(m.patches).reduce( (y, g) => w.has(g.id) ? y : Object.assign(y, {
        [g.id]: g
    }), {});
    Object.assign(r.routes, S),
    m.notFoundPaths.forEach(y => d.add(y)),
    e.forEach(y => c.add(y));
    let R = new Set;
    Object.values(S).forEach(y => {
        (!y.parentId || !S[y.parentId]) && R.add(y.parentId)
    }
    ),
    R.forEach(y => o(y || null, xe(S, n, null, a, i, y)))
}
function mn(e, t) {
    let r;
    return (...n) => {
        window.clearTimeout(r),
        r = window.setTimeout( () => e(...n), t)
    }
}
/**
 * @remix-run/react v2.10.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function pt() {
    let e = l.useContext(we);
    return j(e, "You must render this element inside a <DataRouterContext.Provider> element"),
    e
}
function ie() {
    let e = l.useContext(te);
    return j(e, "You must render this element inside a <DataRouterStateContext.Provider> element"),
    e
}
const yt = l.createContext(void 0);
yt.displayName = "Remix";
function M() {
    let e = l.useContext(yt);
    return j(e, "You must render this element inside a <Remix> element"),
    e
}
function vt(e, t) {
    let[r,n] = l.useState(!1)
      , [a,i] = l.useState(!1)
      , {onFocus: s, onBlur: o, onMouseEnter: u, onMouseLeave: c, onTouchStart: d} = t
      , f = l.useRef(null);
    l.useEffect( () => {
        if (e === "render" && i(!0),
        e === "viewport") {
            let m = S => {
                S.forEach(R => {
                    i(R.isIntersecting)
                }
                )
            }
              , w = new IntersectionObserver(m,{
                threshold: .5
            });
            return f.current && w.observe(f.current),
            () => {
                w.disconnect()
            }
        }
    }
    , [e]);
    let h = () => {
        e === "intent" && n(!0)
    }
      , p = () => {
        e === "intent" && (n(!1),
        i(!1))
    }
    ;
    return l.useEffect( () => {
        if (r) {
            let m = setTimeout( () => {
                i(!0)
            }
            , 100);
            return () => {
                clearTimeout(m)
            }
        }
    }
    , [r]),
    [a, f, {
        onFocus: B(s, h),
        onBlur: B(o, p),
        onMouseEnter: B(u, h),
        onMouseLeave: B(c, p),
        onTouchStart: B(d, h)
    }]
}
const _e = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Pe(e, t, r) {
    return e === "render" && !t && !r ? "true" : void 0
}
let pn = l.forwardRef( ({to: e, prefetch: t="none", discover: r="render", ...n}, a) => {
    let i = typeof e == "string" && _e.test(e)
      , s = ge(e)
      , [o,u,c] = vt(t, n);
    return l.createElement(l.Fragment, null, l.createElement(ir, P({}, n, c, {
        ref: wt(a, u),
        to: e,
        "data-discover": Pe(r, i, n.reloadDocument)
    })), o && !i ? l.createElement(ke, {
        page: s
    }) : null)
}
);
pn.displayName = "NavLink";
let yn = l.forwardRef( ({to: e, prefetch: t="none", discover: r="render", ...n}, a) => {
    let i = typeof e == "string" && _e.test(e)
      , s = ge(e)
      , [o,u,c] = vt(t, n);
    return l.createElement(l.Fragment, null, l.createElement(Ke, P({}, n, c, {
        ref: wt(a, u),
        to: e,
        "data-discover": Pe(r, i, n.reloadDocument)
    })), o && !i ? l.createElement(ke, {
        page: s
    }) : null)
}
);
yn.displayName = "Link";
let vn = l.forwardRef( ({discover: e="render", ...t}, r) => {
    let n = typeof t.action == "string" && _e.test(t.action);
    return l.createElement(Xe, P({}, t, {
        ref: r,
        "data-discover": Pe(e, n, t.reloadDocument)
    }))
}
);
vn.displayName = "Form";
function B(e, t) {
    return r => {
        e && e(r),
        r.defaultPrevented || t(r)
    }
}
function Te(e, t, r) {
    if (r && !Q)
        return [e[0]];
    if (t) {
        let n = e.findIndex(a => t[a.route.id] !== void 0);
        return e.slice(0, n + 1)
    }
    return e
}
function jn() {
    let {isSpaMode: e, manifest: t, routeModules: r, criticalCss: n} = M()
      , {errors: a, matches: i} = ie()
      , s = Te(i, a, e)
      , o = l.useMemo( () => Nr(s, r, t), [s, r, t]);
    return l.createElement(l.Fragment, null, n ? l.createElement("style", {
        dangerouslySetInnerHTML: {
            __html: n
        }
    }) : null, o.map( ({key: u, link: c}) => Se(c) ? l.createElement(ke, P({
        key: u
    }, c)) : l.createElement("link", P({
        key: u
    }, c))))
}
function ke({page: e, ...t}) {
    let {router: r} = pt()
      , n = l.useMemo( () => Ye(r.routes, e, r.basename), [r.routes, e, r.basename]);
    return n ? l.createElement(gn, P({
        page: e,
        matches: n
    }, t)) : (console.warn(`Tried to prefetch ${e} but no routes matched.`),
    null)
}
function wn(e) {
    let {manifest: t, routeModules: r} = M()
      , [n,a] = l.useState([]);
    return l.useEffect( () => {
        let i = !1;
        return Ir(e, t, r).then(s => {
            i || a(s)
        }
        ),
        () => {
            i = !0
        }
    }
    , [e, t, r]),
    n
}
function gn({page: e, matches: t, ...r}) {
    let n = U()
      , {future: a, manifest: i, routeModules: s} = M()
      , {matches: o} = ie()
      , u = l.useMemo( () => Fe(e, t, o, i, n, "data"), [e, t, o, i, n])
      , c = l.useMemo( () => Fe(e, t, o, i, n, "assets"), [e, t, o, i, n])
      , d = l.useMemo( () => $r(e, u, i), [u, e, i])
      , f = l.useMemo( () => jr(c, i), [c, i])
      , h = wn(c)
      , p = null;
    if (!a.unstable_singleFetch)
        p = d.map(m => l.createElement("link", P({
            key: m,
            rel: "prefetch",
            as: "fetch",
            href: m
        }, r)));
    else if (u.length > 0) {
        let m = ct(i, s, t.map(w => w.route), u.map(w => w.route), Re(e));
        m.searchParams.get("_routes") !== "" && (p = l.createElement("link", P({
            key: m.pathname + m.search,
            rel: "prefetch",
            as: "fetch",
            href: m.pathname + m.search
        }, r)))
    }
    return l.createElement(l.Fragment, null, p, f.map(m => l.createElement("link", P({
        key: m,
        rel: "modulepreload",
        href: m
    }, r))), h.map( ({key: m, link: w}) => l.createElement("link", P({
        key: m
    }, w))))
}
function Un() {
    let {isSpaMode: e, routeModules: t} = M()
      , {errors: r, matches: n, loaderData: a} = ie()
      , i = U()
      , s = Te(n, r, e)
      , o = null;
    r && (o = r[s[s.length - 1].route.id]);
    let u = []
      , c = null
      , d = [];
    for (let f = 0; f < s.length; f++) {
        let h = s[f]
          , p = h.route.id
          , m = a[p]
          , w = h.params
          , S = t[p]
          , R = []
          , y = {
            id: p,
            data: m,
            meta: [],
            params: h.params,
            pathname: h.pathname,
            handle: h.route.handle,
            error: o
        };
        if (d[f] = y,
        S != null && S.meta ? R = typeof S.meta == "function" ? S.meta({
            data: m,
            params: w,
            location: i,
            matches: d,
            error: o
        }) : Array.isArray(S.meta) ? [...S.meta] : S.meta : c && (R = [...c]),
        R = R || [],
        !Array.isArray(R))
            throw new Error("The route at " + h.route.path + ` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://remix.run/route/meta`);
        y.meta = R,
        d[f] = y,
        u = [...R],
        c = u
    }
    return l.createElement(l.Fragment, null, u.flat().map(f => {
        if (!f)
            return null;
        if ("tagName"in f) {
            let {tagName: h, ...p} = f;
            if (!En(h))
                return console.warn(`A meta object uses an invalid tagName: ${h}. Expected either 'link' or 'meta'`),
                null;
            let m = h;
            return l.createElement(m, P({
                key: JSON.stringify(p)
            }, p))
        }
        if ("title"in f)
            return l.createElement("title", {
                key: "title"
            }, String(f.title));
        if ("charset"in f && (f.charSet ?? (f.charSet = f.charset),
        delete f.charset),
        "charSet"in f && f.charSet != null)
            return typeof f.charSet == "string" ? l.createElement("meta", {
                key: "charSet",
                charSet: f.charSet
            }) : null;
        if ("script:ld+json"in f)
            try {
                let h = JSON.stringify(f["script:ld+json"]);
                return l.createElement("script", {
                    key: `script:ld+json:${h}`,
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: h
                    }
                })
            } catch {
                return null
            }
        return l.createElement("meta", P({
            key: JSON.stringify(f)
        }, f))
    }
    ))
}
function En(e) {
    return typeof e == "string" && /^(meta|link)$/.test(e)
}
function Sn(e) {
    return l.createElement($t, e)
}
let Q = !1;
function bn(e) {
    let {manifest: t, serverHandoffString: r, abortDelay: n, serializeError: a, isSpaMode: i, future: s, renderMeta: o} = M()
      , {router: u, static: c, staticContext: d} = pt()
      , {matches: f} = ie()
      , h = Le(s, i);
    o && (o.didRenderScripts = !0);
    let p = Te(f, null, i);
    l.useEffect( () => {
        Q = !0
    }
    , []);
    let m = (b, E) => {
        let x;
        return a && E instanceof Error ? x = a(E) : x = E,
        `${JSON.stringify(b)}:__remixContext.p(!1, ${X(JSON.stringify(x))})`
    }
      , w = (b, E, x) => {
        let _;
        try {
            _ = JSON.stringify(x)
        } catch (k) {
            return m(E, k)
        }
        return `${JSON.stringify(E)}:__remixContext.p(${X(_)})`
    }
      , S = (b, E, x) => {
        let _;
        return a && x instanceof Error ? _ = a(x) : _ = x,
        `__remixContext.r(${JSON.stringify(b)}, ${JSON.stringify(E)}, !1, ${X(JSON.stringify(_))})`
    }
      , R = (b, E, x) => {
        let _;
        try {
            _ = JSON.stringify(x)
        } catch (k) {
            return S(b, E, k)
        }
        return `__remixContext.r(${JSON.stringify(b)}, ${JSON.stringify(E)}, ${X(_)})`
    }
      , y = []
      , g = l.useMemo( () => {
        var b;
        let E = s.unstable_singleFetch ? "window.__remixContext.stream = new ReadableStream({start(controller){window.__remixContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());" : ""
          , x = d ? `window.__remixContext = ${r};${E}` : " "
          , _ = s.unstable_singleFetch || d == null ? void 0 : d.activeDeferreds;
        x += _ ? ["__remixContext.p = function(v,e,p,x) {", "  if (typeof e !== 'undefined') {", `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`, "    p=Promise.reject(x);", "  } else {", "    p=Promise.resolve(v);", "  }", "  return p;", "};", "__remixContext.n = function(i,k) {", "  __remixContext.t = __remixContext.t || {};", "  __remixContext.t[i] = __remixContext.t[i] || {};", "  let p = new Promise((r, e) => {__remixContext.t[i][k] = {r:(v)=>{r(v);},e:(v)=>{e(v);}};});", typeof n == "number" ? `setTimeout(() => {if(typeof p._error !== "undefined" || typeof p._data !== "undefined"){return;} __remixContext.t[i][k].e(new Error("Server timeout."))}, ${n});` : "", "  return p;", "};", "__remixContext.r = function(i,k,v,e,p,x) {", "  p = __remixContext.t[i][k];", "  if (typeof e !== 'undefined') {", `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`, "    p.e(x);", "  } else {", "    p.r(v);", "  }", "};"].join(`
`) + Object.entries(_).map( ([T,O]) => {
            let N = new Set(O.pendingKeys)
              , oe = O.deferredKeys.map(D => {
                if (N.has(D))
                    return y.push(l.createElement(He, {
                        key: `${T} | ${D}`,
                        deferredData: O,
                        routeId: T,
                        dataKey: D,
                        scriptProps: e,
                        serializeData: R,
                        serializeError: S
                    })),
                    `${JSON.stringify(D)}:__remixContext.n(${JSON.stringify(T)}, ${JSON.stringify(D)})`;
                {
                    let le = O.data[D];
                    return typeof le._error < "u" ? m(D, le._error) : w(T, D, le._data)
                }
            }
            ).join(`,
`);
            return `Object.assign(__remixContext.state.loaderData[${JSON.stringify(T)}], {${oe}});`
        }
        ).join(`
`) + (y.length > 0 ? `__remixContext.a=${y.length};` : "") : "";
        let k = c ? `${(b = t.hmr) !== null && b !== void 0 && b.runtime ? `import ${JSON.stringify(t.hmr.runtime)};` : ""}${h ? "" : `import ${JSON.stringify(t.url)}`};
${p.map( (T, O) => `import * as route${O} from ${JSON.stringify(t.routes[T.route.id].module)};`).join(`
`)}
${h ? `window.__remixManifest = ${JSON.stringify(fn(t, u), null, 2)};` : ""}
window.__remixRouteModules = {${p.map( (T, O) => `${JSON.stringify(T.route.id)}:route${O}`).join(",")}};

import(${JSON.stringify(t.entry.module)});` : " ";
        return l.createElement(l.Fragment, null, l.createElement("script", P({}, e, {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: Ie(x),
            type: void 0
        })), l.createElement("script", P({}, e, {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: Ie(k),
            type: "module",
            async: !0
        })))
    }
    , []);
    if (!c && typeof __remixContext == "object" && __remixContext.a)
        for (let b = 0; b < __remixContext.a; b++)
            y.push(l.createElement(He, {
                key: b,
                scriptProps: e,
                serializeData: R,
                serializeError: S
            }));
    let v = p.map(b => {
        let E = t.routes[b.route.id];
        return (E.imports || []).concat([E.module])
    }
    ).flat(1)
      , L = Q ? [] : t.entry.imports.concat(v);
    return Q ? null : l.createElement(l.Fragment, null, h ? null : l.createElement("link", {
        rel: "modulepreload",
        href: t.url,
        crossOrigin: e.crossOrigin
    }), l.createElement("link", {
        rel: "modulepreload",
        href: t.entry.module,
        crossOrigin: e.crossOrigin
    }), xn(L).map(b => l.createElement("link", {
        key: b,
        rel: "modulepreload",
        href: b,
        crossOrigin: e.crossOrigin
    })), g, y)
}
function He({dataKey: e, deferredData: t, routeId: r, scriptProps: n, serializeData: a, serializeError: i}) {
    return typeof document > "u" && t && e && r && j(t.pendingKeys.includes(e), `Deferred data for route ${r} with key ${e} was not pending but tried to render a script for it.`),
    l.createElement(l.Suspense, {
        fallback: typeof document > "u" && t && e && r ? null : l.createElement("script", P({}, n, {
            async: !0,
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
                __html: " "
            }
        }))
    }, typeof document > "u" && t && e && r ? l.createElement(Sn, {
        resolve: t.data[e],
        errorElement: l.createElement(Rn, {
            dataKey: e,
            routeId: r,
            scriptProps: n,
            serializeError: i
        }),
        children: s => l.createElement("script", P({}, n, {
            async: !0,
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
                __html: a(r, e, s)
            }
        }))
    }) : l.createElement("script", P({}, n, {
        async: !0,
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: {
            __html: " "
        }
    })))
}
function Rn({dataKey: e, routeId: t, scriptProps: r, serializeError: n}) {
    let a = Dt();
    return l.createElement("script", P({}, r, {
        suppressHydrationWarning: !0,
        dangerouslySetInnerHTML: {
            __html: n(t, e, a)
        }
    }))
}
function xn(e) {
    return [...new Set(e)]
}
function Hn() {
    return Ft()
}
function Mn(e) {
    return It(e)
}
function Jn(e={}) {
    return cr(e)
}
function wt(...e) {
    return t => {
        e.forEach(r => {
            typeof r == "function" ? r(t) : r != null && (r.current = t)
        }
        )
    }
}
export {yn as L, Un as M, yt as R, bn as S, P as _, xe as a, In as b, Fn as c, rn as d, $n as e, Dn as f, Nn as g, Cn as h, j as i, Mn as j, Hn as k, Jn as l, M as m, An as n, jn as o, cn as s, On as u};
