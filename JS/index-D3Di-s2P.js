import {r as w} from "./index-CTjT7uj6.js";/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function k() {
    return k = Object.assign
        ? Object
            .assign
            .bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) 
                    Object
                        .prototype
                        .hasOwnProperty
                        .call(r, n) && (e[n] = r[n])
                }
            return e
        },
    k.apply(this, arguments)
}
var $;
(function (e) {
    e.Pop = "POP",
    e.Push = "PUSH",
    e.Replace = "REPLACE"
})($ || ($ = {}));
const Wt = "popstate";
function ea(e) {
    e === void 0 && (e = {});
    function t(n, a) {
        let {pathname: s, search: i, hash: c} = n.location;
        return Ye("", {
            pathname: s,
            search: i,
            hash: c
        }, a.state && a.state.usr || null, a.state && a.state.key || "default")
    }
    function r(n, a) {
        return typeof a == "string"
            ? a
            : Xe(a)
    }
    return kr(t, r, null, e)
}
function L(e, t) {
    if (e === !1 || e === null || typeof e > "u") 
        throw new Error(t)
}
function Ae(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch  {}
    }
}
function zr() {
    return Math
        .random()
        .toString(36)
        .substr(2, 8)
}
function $t(e, t) {
    return {usr: e.state, key: e.key, idx: t}
}
function Ye(e, t, r, n) {
    return r === void 0 && (r = null),
    k(
        {
            pathname: typeof e == "string"
                ? e
                : e.pathname,
            search: "",
            hash: ""
        },
        typeof t == "string"
            ? Ee(t)
            : t,
        {
            state: r,
            key: t && t.key || n || zr()
        }
    )
}
function Xe(e) {
    let {
        pathname: t = "/",
        search: r = "",
        hash: n = ""
    } = e;
    return r && r !== "?" && (
        t += r.charAt(0) === "?"
            ? r
            : "?" + r
    ),
    n && n !== "#" && (
        t += n.charAt(0) === "#"
            ? n
            : "#" + n
    ),
    t
}
function Ee(e) {
    let t = {};
    if (e) {
        let r = e.indexOf("#");
        r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
        let n = e.indexOf("?");
        n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)),
        e && (t.pathname = e)
    }
    return t
}
function kr(e, t, r, n) {
    n === void 0 && (n = {});
    let {
            window: a = document.defaultView,
            v5Compat: s = !1
        } = n,
        i = a.history,
        c = $.Pop,
        d = null,
        g = p();
    g == null && (g = 0, i.replaceState(k({}, i.state, {idx: g}), ""));
    function p() {
        return (i.state || {
            idx: null
        }).idx
    }
    function f() {
        c = $.Pop;
        let M = p(),
            z = M == null
                ? null
                : M - g;
        g = M,
        d && d({action: c, location: E.location, delta: z})
    }
    function v(M, z) {
        c = $.Push;
        let F = Ye(E.location, M, z);
        g = p() + 1;
        let Y = $t(F, g),
            Z = E.createHref(F);
        try {
            i.pushState(Y, "", Z)
        } catch (re) {
            if (re instanceof DOMException && re.name === "DataCloneError") 
                throw re;
            a
                .location
                .assign(Z)
        }
        s && d && d({action: c, location: E.location, delta: 1})
    }
    function U(M, z) {
        c = $.Replace;
        let F = Ye(E.location, M, z);
        g = p();
        let Y = $t(F, g),
            Z = E.createHref(F);
        i.replaceState(Y, "", Z),
        s && d && d({action: c, location: E.location, delta: 0})
    }
    function S(M) {
        let z = a.location.origin !== "null"
                ? a.location.origin
                : a.location.href,
            F = typeof M == "string"
                ? M
                : Xe(M);
        return F = F.replace(/ $/, "%20"),
        L(z, "No window.location.(origin|href) available to create URL for href: " + F),
        new URL(F, z)
    }
    let E = {
        get action() {
            return c
        },
        get location() {
            return e(a, i)
        },
        listen(M) {
            if (d) 
                throw new Error("A history only accepts one active listener");
            return a.addEventListener(Wt, f),
            d = M,
            () => {
                a.removeEventListener(Wt, f),
                d = null
            }
        },
        createHref(M) {
            return t(a, M)
        },
        createURL: S,
        encodeLocation(M) {
            let z = S(M);
            return {pathname: z.pathname, search: z.search, hash: z.hash}
        },
        push: v,
        replace: U,
        go(M) {
            return i.go(M)
        }
    };
    return E
}
var B;
(function (e) {
    e.data = "data",
    e.deferred = "deferred",
    e.redirect = "redirect",
    e.error = "error"
})(B || (B = {}));
const Hr = new Set([
    "lazy",
    "caseSensitive",
    "path",
    "id",
    "index",
    "children"
]);
function Kr(e) {
    return e.index === !0
}
function Ge(e, t, r, n) {
    return r === void 0 && (r = []),
    n === void 0 && (n = {}),
    e.map((a, s) => {
        let i = [
                ...r,
                String(s)
            ],
            c = typeof a.id == "string"
                ? a.id
                : i.join("-");
        if (
            L(a.index !== !0 || !a.children, "Cannot specify children on an index route"),
            L(
                !n[c],
                'Found a route id collision on id "' + c +
                        `".  Route id's must be globally unique within Data Router usages`
            ),
            Kr(a)
        ) {
            let d = k({}, a, t(a), {id: c});
            return n[c] = d,
            d
        } else {
            let d = k({}, a, t(a), {
                id: c,
                children: void 0
            });
            return n[c] = d,
            a.children && (d.children = Ge(a.children, t, i, n)),
            d
        }
    })
}
function De(e, t, r) {
    return r === void 0 && (r = "/"),
    st(e, t, r, !1)
}
function st(e, t, r, n) {
    let a = typeof t == "string"
            ? Ee(t)
            : t,
        s = Qe(a.pathname || "/", r);
    if (s == null) 
        return null;
    let i = sr(e);
    Wr(i);
    let c = null;
    for (let d = 0; c == null && d < i.length; ++d) {
        let g = tn(s);
        c = qr(i[d], g, n)
    }
    return c
}
function lr(e, t) {
    let {route: r, pathname: n, params: a} = e;
    return {
        id: r.id,
        pathname: n,
        params: a,
        data: t[r.id],
        handle: r.handle
    }
}
function sr(e, t, r, n) {
    t === void 0 && (t = []),
    r === void 0 && (r = []),
    n === void 0 && (n = "");
    let a = (s, i, c) => {
        let d = {
            relativePath: c === void 0
                ? s.path || ""
                : c,
            caseSensitive: s.caseSensitive === !0,
            childrenIndex: i,
            route: s
        };
        d
            .relativePath
            .startsWith("/") && (L(
            d.relativePath.startsWith(n),
            'Absolute route path "' + d.relativePath + '" nested under path ' + (
                '"' + n + '" is not valid. An absolute child route path '
            ) + "must start with the combined path of all its parent routes."
        ), d.relativePath = d.relativePath.slice(n.length));
        let g = pe([n, d.relativePath]),
            p = r.concat(d);
        s.children && s.children.length > 0 && (
            L(s.index !== !0, "Index routes must not have child routes. Please remove " + (
                'all child routes from route path "' + g + '".'
            )),
            sr(s.children, t, p, g)
        ),
        !(s.path == null && !s.index) && t.push({
            path: g,
            score: Qr(g, s.index),
            routesMeta: p
        })
    };
    return e.forEach((s, i) => {
        var c;
        if (s.path === "" || !((c = s.path) != null && c.includes("?"))) 
            a(s, i);
        else 
            for (let d of ur(s.path)) 
                a(s, i, d)
    }),
    t
}
function ur(e) {
    let t = e.split("/");
    if (t.length === 0) 
        return [];
    let [
            r, ...n
        ] = t,
        a = r.endsWith("?"),
        s = r.replace(/\?$/, "");
    if (n.length === 0) 
        return a
            ? [s, ""]
            : [s];
    let i = ur(n.join("/")),
        c = [];
    return c.push(...i.map(
        d => d === ""
            ? s
            : [s, d].join("/")
    )),
    a && c.push(...i),
    c.map(
        d => e.startsWith("/") && d === ""
            ? "/"
            : d
    )
}
function Wr(e) {
    e.sort(
        (t, r) => t.score !== r.score
            ? r.score - t.score
            : Zr(
                t.routesMeta.map(n => n.childrenIndex),
                r.routesMeta.map(n => n.childrenIndex)
            )
    )
}
const $r = /^:[\w-]+$/,
    Vr = 3,
    Jr = 2,
    Yr = 1,
    Gr = 10,
    Xr = -2,
    Vt = e => e === "*";
function Qr(e, t) {
    let r = e.split("/"),
        n = r.length;
    return r.some(Vt) && (n += Xr),
    t && (n += Jr),
    r
        .filter(a => !Vt(a))
        .reduce((a, s) => a + (
            $r.test(s)
                ? Vr
                : s === ""
                    ? Yr
                    : Gr
        ), n)
}
function Zr(e, t) {
    return e.length === t.length && e
        .slice(0, -1)
        .every((n, a) => n === t[a])
            ? e[e.length - 1] - t[t.length - 1]
            : 0
}
function qr(e, t, r) {
    r === void 0 && (r = !1);
    let {routesMeta: n} = e,
        a = {},
        s = "/",
        i = [];
    for (let c = 0; c < n.length; ++c) {
        let d = n[c],
            g = c === n.length - 1,
            p = s === "/"
                ? t
                : t.slice(s.length) || "/",
            f = Jt({
                path: d.relativePath,
                caseSensitive: d.caseSensitive,
                end: g
            }, p),
            v = d.route;
        if (!f && g && r && !n[n.length - 1].route.index && (f = Jt({
            path: d.relativePath,
            caseSensitive: d.caseSensitive,
            end: !1
        }, p)), !f) 
            return null;
        Object.assign(a, f.params),
        i.push({
            params: a,
            pathname: pe([s, f.pathname]),
            pathnameBase: an(pe([s, f.pathnameBase])),
            route: v
        }),
        f.pathnameBase !== "/" && (s = pe([s, f.pathnameBase]))
    }
    return i
}
function Jt(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [r, n] = en(e.path, e.caseSensitive, e.end),
        a = t.match(r);
    if (!a) 
        return null;
    let s = a[0],
        i = s.replace(/(.)\/+$/, "$1"),
        c = a.slice(1);
    return {
        params: n.reduce((g, p, f) => {
            let {paramName: v, isOptional: U} = p;
            if (v === "*") {
                let E = c[f] || "";
                i = s
                    .slice(0, s.length - E.length)
                    .replace(/(.)\/+$/, "$1")
            }
            const S = c[f];
            return U && !S
                ? g[v] = void 0
                : g[v] = (S || "").replace(/%2F/g, "/"),
            g
        }, {}),
        pathname: s,
        pathnameBase: i,
        pattern: e
    }
}
function en(e, t, r) {
    t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    Ae(
        e === "*" || !e.endsWith("*") || e.endsWith("/*"),
        'Route path "' + e + '" will be treated as if it were ' + (
            '"' + e.replace(/\*$/, "/*") + '" because the `*` character must '
        ) + "always follow a `/` in the pattern. To get rid of this warning, " + (
            'please change the route path to "' + e.replace(/\*$/, "/*") + '".'
        )
    );
    let n = [],
        a = "^" + e
            .replace(/\/*\*?$/, "")
            .replace(/^\/*/, "/")
            .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
            .replace(/\/:([\w-]+)(\?)?/g, (i, c, d) => (
                n.push({
                    paramName: c,
                    isOptional: d != null
                }),
                d
                    ? "/?([^\\/]+)?"
                    : "/([^\\/]+)"
            ));
    return e.endsWith("*")
        ? (
            n.push({paramName: "*"}),
            a += e === "*" || e === "/*"
                ? "(.*)$"
                : "(?:\\/(.+)|\\/*)$"
        )
        : r
            ? a += "\\/*$"
            : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"),
    [
        new RegExp(
            a,
            t
                ? void 0
                : "i"
        ),
        n
    ]
}
function tn(e) {
    try {
        return e
            .split("/")
            .map(t => decodeURIComponent(t).replace(/\//g, "%2F"))
            .join("/")
    } catch (t) {
        return Ae(
            !1,
            'The URL path "' + e + '" could not be decoded because it is is a malformed URL' +
                    ' segment. This is probably due to a bad percent ' + (
                "encoding (" + t + ")."
            )
        ),
        e
    }
}
function Qe(e, t) {
    if (t === "/") 
        return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) 
        return null;
    let r = t.endsWith("/")
            ? t.length - 1
            : t.length,
        n = e.charAt(r);
    return n && n !== "/"
        ? null
        : e.slice(r) || "/"
}
function rn(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: r,
        search: n = "",
        hash: a = ""
    } = typeof e == "string"
        ? Ee(e)
        : e;
    return {
        pathname: r
            ? r.startsWith("/")
                ? r
                : nn(r, t)
            : t,
        search: on(n),
        hash: ln(a)
    }
}
function nn(e, t) {
    let r = t
        .replace(/\/+$/, "")
        .split("/");
    return e
        .split("/")
        .forEach(a => {
            a === ".."
                ? r.length > 1 && r.pop()
                : a !== "." && r.push(a)
        }),
    r.length > 1
        ? r.join("/")
        : "/"
}
function yt(e, t, r, n) {
    return "Cannot include a '" + e + "' character in a manually specified " + (
        "`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to t" +
        "he "
    ) + ("`to." + r + "` field. Alternatively you may provide the full path as ") +
            'a string in <Link to="..."> and the router will parse it for you.'
}
function dr(e) {
    return e.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0)
}
function Pt(e, t) {
    let r = dr(e);
    return t
        ? r.map(
            (n, a) => a === r.length - 1
                ? n.pathname
                : n.pathnameBase
        )
        : r.map(n => n.pathnameBase)
}
function Dt(e, t, r, n) {
    n === void 0 && (n = !1);
    let a;
    typeof e == "string"
        ? a = Ee(e)
        : (
            a = k({}, e),
            L(!a.pathname || !a.pathname.includes("?"), yt("?", "pathname", "search", a)),
            L(!a.pathname || !a.pathname.includes("#"), yt("#", "pathname", "hash", a)),
            L(!a.search || !a.search.includes("#"), yt("#", "search", "hash", a))
        );
    let s = e === "" || a.pathname === "",
        i = s
            ? "/"
            : a.pathname,
        c;
    if (i == null) 
        c = r;
    else {
        let f = t.length - 1;
        if (!n && i.startsWith("..")) {
            let v = i.split("/");
            for (; v[0] === "..";) 
                v.shift(),
                f -= 1;
            a.pathname = v.join("/")
        }
        c = f >= 0
            ? t[f]
            : "/"
    }
    let d = rn(a, c),
        g = i && i !== "/" && i.endsWith("/"),
        p = (s || i === ".") && r.endsWith("/");
    return !d
        .pathname
        .endsWith("/") && (g || p) && (d.pathname += "/"),
    d
}
const pe = e => e
        .join("/")
        .replace(/\/\/+/g, "/"),
    an = e => e
        .replace(/\/+$/, "")
        .replace(/^\/*/, "/"),
    on = e => !e || e === "?"
        ? ""
        : e.startsWith("?")
            ? e
            : "?" + e,
    ln = e => !e || e === "#"
        ? ""
        : e.startsWith("#")
            ? e
            : "#" + e;
class Et extends Error {}
class ta {
    constructor(t, r) {
        this.pendingKeysSet = new Set,
        this.subscribers = new Set,
        this.deferredKeys = [],
        L(
            t && typeof t == "object" && !Array.isArray(t),
            "defer() only accepts plain objects"
        );
        let n;
        this.abortPromise = new Promise((s, i) => n = i),
        this.controller = new AbortController;
        let a = () => n(new Et("Deferred data aborted"));
        this.unlistenAbortSignal = () => this
            .controller
            .signal
            .removeEventListener("abort", a),
        this
            .controller
            .signal
            .addEventListener("abort", a),
        this.data = Object
            .entries(t)
            .reduce((s, i) => {
                let [c, d] = i;
                return Object.assign(s, {
                    [c]: this.trackPromise(c, d)
                })
            }, {}),
        this.done && this.unlistenAbortSignal(),
        this.init = r
    }
    trackPromise(t, r) {
        if (!(r instanceof Promise)) 
            return r;
        this
            .deferredKeys
            .push(t),
        this
            .pendingKeysSet
            .add(t);
        let n = Promise
            .race([r, this.abortPromise])
            .then(a => this.onSettle(n, t, void 0, a), a => this.onSettle(n, t, a));
        return n.catch(() => {}),
        Object.defineProperty(n, "_tracked", {
            get: () => !0
        }),
        n
    }
    onSettle(t, r, n, a) {
        if (this.controller.signal.aborted && n instanceof Et) 
            return this.unlistenAbortSignal(),
            Object.defineProperty(t, "_error", {
                get: () => n
            }),
            Promise.reject(n);
        if (
            this.pendingKeysSet.delete(r),
            this.done && this.unlistenAbortSignal(),
            n === void 0 && a === void 0
        ) {
            let s = new Error(
                'Deferred data for key "' + r + '" resolved/rejected with `undefined`, you must' +
                ' resolve/reject with a value or `null`.'
            );
            return Object.defineProperty(t, "_error", {
                get: () => s
            }),
            this.emit(!1, r),
            Promise.reject(s)
        }
        return a === void 0
            ? (Object.defineProperty(t, "_error", {
                get: () => n
            }), this.emit(!1, r), Promise.reject(n))
            : (Object.defineProperty(t, "_data", {
                get: () => a
            }), this.emit(!1, r), a)
    }
    emit(t, r) {
        this
            .subscribers
            .forEach(n => n(t, r))
    }
    subscribe(t) {
        return this
            .subscribers
            .add(t),
        () => this
            .subscribers
            .delete(t)
    }
    cancel() {
        this
            .controller
            .abort(),
        this
            .pendingKeysSet
            .forEach((t, r) => this.pendingKeysSet.delete(r)),
        this.emit(!0)
    }
    async resolveData(t) {
        let r = !1;
        if (!this.done) {
            let n = () => this.cancel();
            t.addEventListener("abort", n),
            r = await new Promise(a => {
                this.subscribe(s => {
                    t.removeEventListener("abort", n),
                    (s || this.done) && a(s)
                })
            })
        }
        return r
    }
    get done() {
        return this.pendingKeysSet.size === 0
    }
    get unwrappedData() {
        return L(
            this.data !== null && this.done,
            "Can only unwrap data on initialized and settled deferreds"
        ),
        Object
            .entries(this.data)
            .reduce((t, r) => {
                let [n, a] = r;
                return Object.assign(t, {[n]: un(a)})
            }, {})
    }
    get pendingKeys() {
        return Array.from(this.pendingKeysSet)
    }
}
function sn(e) {
    return e instanceof Promise && e._tracked === !0
}
function un(e) {
    if (!sn(e)) 
        return e;
    if (e._error) 
        throw e._error;
    return e._data
}
const ra = function (t, r) {
    r === void 0 && (r = 302);
    let n = r;
    typeof n == "number"
        ? n = {
            status: n
        }
        : typeof n.status > "u" && (n.status = 302);
    let a = new Headers(n.headers);
    return a.set("Location", t),
    new Response(null, k({}, n, {headers: a}))
};
class cr {
    constructor(t, r, n, a) {
        a === void 0 && (a = !1),
        this.status = t,
        this.statusText = r || "",
        this.internal = a,
        n instanceof Error
            ? (this.data = n.toString(), this.error = n)
            : this.data = n
    }
}
function ct(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const fr = [
        "post", "put", "patch", "delete"
    ],
    dn = new Set(fr),
    cn = [
        "get", ...fr
    ],
    fn = new Set(cn),
    hn = new Set([301, 302, 303, 307, 308]),
    mn = new Set([307, 308]),
    bt = {
        state: "idle",
        location: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    },
    pn = {
        state: "idle",
        data: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    },
    We = {
        state: "unblocked",
        proceed: void 0,
        reset: void 0,
        location: void 0
    },
    St = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    gn = e => ({
        hasErrorBoundary: !!e.hasErrorBoundary
    }),
    hr = "remix-router-transitions";
function na(e) {
    const t = e.window
            ? e.window
            : typeof window < "u"
                ? window
                : void 0,
        r = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u",
        n = !r;
    L(
        e.routes.length > 0,
        "You must provide a non-empty routes array to createRouter"
    );
    let a;
    if (e.mapRouteProperties) 
        a = e.mapRouteProperties;
    else if (e.detectErrorBoundary) {
        let o = e.detectErrorBoundary;
        a = l => ({hasErrorBoundary: o(l)})
    } else 
        a = gn;
    let s = {},
        i = Ge(e.routes, a, void 0, s),
        c,
        d = e.basename || "/",
        g = e.unstable_dataStrategy || En,
        p = e.unstable_patchRoutesOnMiss,
        f = k({
            v7_fetcherPersist: !1,
            v7_normalizeFormMethod: !1,
            v7_partialHydration: !1,
            v7_prependBasename: !1,
            v7_relativeSplatPath: !1,
            unstable_skipActionErrorRevalidation: !1
        }, e.future),
        v = null,
        U = new Set,
        S = null,
        E = null,
        M = null,
        z = e.hydrationData != null,
        F = De(i, e.history.location, d),
        Y = null;
    if (F == null && !p) {
        let o = Q(404, {pathname: e.history.location.pathname}), {
                matches: l,
                route: u
            } = nr(i);
        F = l,
        Y = {
            [u.id]: o
        }
    }
    F && p && vt(F, i, e.history.location.pathname).active && (F = null);
    let Z;
    if (!F) 
        Z = !1,
        F = [];
    else if (F.some(o => o.route.lazy)) 
        Z = !1;
    else if (!F.some(o => o.route.loader)) 
        Z = !0;
    else if (f.v7_partialHydration) {
        let o = e.hydrationData
                ? e.hydrationData.loaderData
                : null,
            l = e.hydrationData
                ? e.hydrationData.errors
                : null,
            u = h => h.route.loader
                ? typeof h.route.loader == "function" && h.route.loader.hydrate === !0
                    ? !1
                    : o && o[h.route.id] !== void 0 || l && l[h.route.id] !== void 0
                : !0;
        if (l) {
            let h = F.findIndex(b => l[b.route.id] !== void 0);
            Z = F
                .slice(0, h + 1)
                .every(u)
        } else 
            Z = F.every(u)
    } else 
        Z = e.hydrationData != null;
    let re,
        m = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: F,
            initialized: Z,
            navigation: bt,
            restoreScrollPosition: e.hydrationData != null
                ? !1
                : null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: e.hydrationData && e.hydrationData.loaderData || {},
            actionData: e.hydrationData && e.hydrationData.actionData || null,
            errors: e.hydrationData && e.hydrationData.errors || Y,
            fetchers: new Map,
            blockers: new Map
        },
        ne = $.Pop,
        le = !1,
        O,
        q = !1,
        V = new Map,
        se = null,
        ue = !1,
        G = !1,
        Ce = [],
        qe = [],
        K = new Map,
        et = 0,
        Be = -1,
        Le = new Map,
        ce = new Set,
        je = new Map,
        ze = new Map,
        fe = new Set,
        Re = new Map,
        xe = new Map,
        Rr = new Map,
        ht = !1;
    function xr() {
        if (v = e.history.listen(o => {
            let {action: l, location: u, delta: h} = o;
            if (ht) {
                ht = !1;
                return
            }
            Ae(
                xe.size === 0 || h != null,
                "You are trying to use a blocker on a POP navigation to a location that was not" +
                        " created by @remix-run/router. This will fail silently in production. This can" +
                        " happen if you are navigating outside the router via `window.history.pushState" +
                        "`/`window.location.hash` instead of using router navigation APIs.  This can al" +
                        "so happen if you are using createHashRouter and the user manually changes the " +
                        "URL."
            );
            let b = zt({currentLocation: m.location, nextLocation: u, historyAction: l});
            if (b && h != null) {
                ht = !0,
                e
                    .history
                    .go(h * -1),
                rt(b, {
                    state: "blocked",
                    location: u,
                    proceed() {
                        rt(b, {
                            state: "proceeding",
                            proceed: void 0,
                            reset: void 0,
                            location: u
                        }),
                        e
                            .history
                            .go(h)
                    },
                    reset() {
                        let R = new Map(m.blockers);
                        R.set(b, We),
                        X({blockers: R})
                    }
                });
                return
            }
            return Pe(l, u)
        }), r) {
            On(t, V);
            let o = () => Tn(t, V);
            t.addEventListener("pagehide", o),
            se = () => t.removeEventListener("pagehide", o)
        }
        return m.initialized || Pe($.Pop, m.location, {
            initialHydration: !0
        }),
        re
    }
    function Pr() {
        v && v(),
        se && se(),
        U.clear(),
        O && O.abort(),
        m
            .fetchers
            .forEach((o, l) => tt(l)),
        m
            .blockers
            .forEach((o, l) => Bt(l))
    }
    function Dr(o) {
        return U.add(o),
        () => U.delete(o)
    }
    function X(o, l) {
        l === void 0 && (l = {}),
        m = k({}, m, o);
        let u = [],
            h = [];
        f.v7_fetcherPersist && m
            .fetchers
            .forEach((b, R) => {
                b.state === "idle" && (
                    fe.has(R)
                        ? h.push(R)
                        : u.push(R)
                )
            }),
        [...U].forEach(b => b(m, {
            deletedFetchers: h,
            unstable_viewTransitionOpts: l.viewTransitionOpts,
            unstable_flushSync: l.flushSync === !0
        })),
        f.v7_fetcherPersist && (
            u.forEach(b => m.fetchers.delete(b)),
            h.forEach(b => tt(b))
        )
    }
    function Ue(o, l, u) {
        var h,
            b;
        let {flushSync: R} = u === void 0
                ? {}
                : u,
            D = m.actionData != null && m.navigation.formMethod != null && oe(
                m.navigation.formMethod
            ) && m.navigation.state === "loading" && (
                (h = o.state) == null
                    ? void 0
                    : h._isRedirect
            ) !== !0,
            y;
        l.actionData
            ? Object
                .keys(l.actionData)
                .length > 0
                    ? y = l.actionData
                    : y = null
            : D
                ? y = m.actionData
                : y = null;
        let C = l.loaderData
                ? tr(m.loaderData, l.loaderData, l.matches || [], l.errors)
                : m.loaderData,
            x = m.blockers;
        x.size > 0 && (x = new Map(x), x.forEach((_, N) => x.set(N, We)));
        let P = le === !0 || m.navigation.formMethod != null && oe(
            m.navigation.formMethod
        ) && (
            (b = o.state) == null
                ? void 0
                : b._isRedirect
        ) !== !0;
        c && (i = c, c = void 0),
        ue || ne === $.Pop || (
            ne === $.Push
                ? e.history.push(o, o.state)
                : ne === $.Replace && e.history.replace(o, o.state)
        );
        let A;
        if (ne === $.Pop) {
            let _ = V.get(m.location.pathname);
            _ && _.has(o.pathname)
                ? A = {
                    currentLocation: m.location,
                    nextLocation: o
                }
                : V.has(o.pathname) && (A = {
                    currentLocation: o,
                    nextLocation: m.location
                })
        } else if (q) {
            let _ = V.get(m.location.pathname);
            _
                ? _.add(o.pathname)
                : (_ = new Set([o.pathname]), V.set(m.location.pathname, _)),
            A = {
                currentLocation: m.location,
                nextLocation: o
            }
        }
        X(k({}, l, {
            actionData: y,
            loaderData: C,
            historyAction: ne,
            location: o,
            initialized: !0,
            navigation: bt,
            revalidation: "idle",
            restoreScrollPosition: Ht(o, l.matches || m.matches),
            preventScrollReset: P,
            blockers: x
        }), {
            viewTransitionOpts: A,
            flushSync: R === !0
        }),
        ne = $.Pop,
        le = !1,
        q = !1,
        ue = !1,
        G = !1,
        Ce = [],
        qe = []
    }
    async function Ft(o, l) {
        if (typeof o == "number") {
            e
                .history
                .go(o);
            return
        }
        let u = Rt(
                m.location,
                m.matches,
                d,
                f.v7_prependBasename,
                o,
                f.v7_relativeSplatPath,
                l == null
                    ? void 0
                    : l.fromRouteId,
                l == null
                    ? void 0
                    : l.relative
            ), {
                path: h,
                submission: b,
                error: R
            } = Yt(f.v7_normalizeFormMethod, !1, u, l),
            D = m.location,
            y = Ye(m.location, h, l && l.state);
        y = k({}, y, e.history.encodeLocation(y));
        let C = l && l.replace != null
                ? l.replace
                : void 0,
            x = $.Push;
        C === !0
            ? x = $.Replace
            : C === !1 || b != null && oe(b.formMethod) && b.formAction === m.location.pathname + m.location.search && (
                x = $.Replace
            );
        let P = l && "preventScrollReset" in l
                ? l.preventScrollReset === !0
                : void 0,
            A = (l && l.unstable_flushSync) === !0,
            _ = zt({currentLocation: D, nextLocation: y, historyAction: x});
        if (_) {
            rt(_, {
                state: "blocked",
                location: y,
                proceed() {
                    rt(_, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: y
                    }),
                    Ft(o, l)
                },
                reset() {
                    let N = new Map(m.blockers);
                    N.set(_, We),
                    X({blockers: N})
                }
            });
            return
        }
        return await Pe(x, y, {
            submission: b,
            pendingError: R,
            preventScrollReset: P,
            replace: l && l.replace,
            enableViewTransition: l && l.unstable_viewTransition,
            flushSync: A
        })
    }
    function Sr() {
        if (mt(), X({revalidation: "loading"}), m.navigation.state !== "submitting") {
            if (m.navigation.state === "idle") {
                Pe(m.historyAction, m.location, {
                    startUninterruptedRevalidation: !0
                });
                return
            }
            Pe(
                ne || m.historyAction,
                m.navigation.location,
                {overrideNavigation: m.navigation}
            )
        }
    }
    async function Pe(o, l, u) {
        O && O.abort(),
        O = null,
        ne = o,
        ue = (u && u.startUninterruptedRevalidation) === !0,
        Ar(m.location, m.matches),
        le = (u && u.preventScrollReset) === !0,
        q = (u && u.enableViewTransition) === !0;
        let h = c || i,
            b = u && u.overrideNavigation,
            R = De(h, l, d),
            D = (u && u.flushSync) === !0,
            y = vt(R, h, l.pathname);
        if (y.active && y.matches && (R = y.matches), !R) {
            let {error: T, notFoundMatches: J, route: W} = pt(l.pathname);
            Ue(l, {
                matches: J,
                loaderData: {},
                errors: {
                    [W.id]: T
                }
            }, {flushSync: D});
            return
        }
        if (m.initialized && !G && Mn(m.location, l) && !(u && u.submission && oe(u.submission.formMethod))) {
            Ue(l, {
                matches: R
            }, {flushSync: D});
            return
        }
        O = new AbortController;
        let C = Te(e.history, l, O.signal, u && u.submission),
            x;
        if (u && u.pendingError) 
            x = [
                Je(R).route.id, {
                    type: B.error,
                    error: u.pendingError
                }
            ];
        else if (u && u.submission && oe(u.submission.formMethod)) {
            let T = await Mr(C, l, u.submission, R, y.active, {
                replace: u.replace,
                flushSync: D
            });
            if (T.shortCircuited) 
                return;
            if (T.pendingActionResult) {
                let [J, W] = T.pendingActionResult;
                if (te(W) && ct(W.error) && W.error.status === 404) {
                    O = null,
                    Ue(l, {
                        matches: T.matches,
                        loaderData: {},
                        errors: {
                            [J]: W.error
                        }
                    });
                    return
                }
            }
            R = T.matches || R,
            x = T.pendingActionResult,
            b = wt(l, u.submission),
            D = !1,
            y.active = !1,
            C = Te(e.history, C.url, C.signal)
        }
        let {shortCircuited: P, matches: A, loaderData: _, errors: N} = await Cr(
            C,
            l,
            R,
            y.active,
            b,
            u && u.submission,
            u && u.fetcherSubmission,
            u && u.replace,
            u && u.initialHydration === !0,
            D,
            x
        );
        P || (O = null, Ue(l, k({
            matches: A || R
        }, rr(x), {
            loaderData: _,
            errors: N
        })))
    }
    async function Mr(o, l, u, h, b, R) {
        R === void 0 && (R = {}),
        mt();
        let D = Fn(l, u);
        if (X({
            navigation: D
        }, {
            flushSync: R.flushSync === !0
        }), b) {
            let x = await at(h, l.pathname, o.signal);
            if (x.type === "aborted") 
                return {
                    shortCircuited: !0
                };
            if (x.type === "error") {
                let {error: P, notFoundMatches: A, route: _} = nt(l.pathname, x);
                return {
                    matches: A,
                    pendingActionResult: [
                        _.id, {
                            type: B.error,
                            error: P
                        }
                    ]
                }
            } else if (x.matches) 
                h = x.matches;
            else {
                let {notFoundMatches: P, error: A, route: _} = pt(l.pathname);
                return {
                    matches: P,
                    pendingActionResult: [
                        _.id, {
                            type: B.error,
                            error: A
                        }
                    ]
                }
            }
        }
        let y,
            C = Ve(h, l);
        if (!C.route.action && !C.route.lazy) 
            y = {
                type: B.error,
                error: Q(405, {
                    method: o.method,
                    pathname: l.pathname,
                    routeId: C.route.id
                })
            };
        else if (y = (await He("action", o, [C], h))[0], o.signal.aborted) 
            return {
                shortCircuited: !0
            };
        if (Me(y)) {
            let x;
            return R && R.replace != null
                ? x = R.replace
                : x = Zt(y.response.headers.get("Location"), new URL(o.url), d) === m.location.pathname + m.location.search,
            await ke(o, y, {
                submission: u,
                replace: x
            }), {
                shortCircuited: !0
            }
        }
        if (Se(y)) 
            throw Q(400, {type: "defer-action"});
        if (te(y)) {
            let x = Je(h, C.route.id);
            return (R && R.replace) !== !0 && (ne = $.Push), {
                matches: h,
                pendingActionResult: [x.route.id, y]
            }
        }
        return {
            matches: h,
            pendingActionResult: [C.route.id, y]
        }
    }
    async function Cr(o, l, u, h, b, R, D, y, C, x, P) {
        let A = b || wt(l, R),
            _ = R || D || ir(A),
            N = !ue && (!f.v7_partialHydration || !C);
        if (h) {
            if (N) {
                let H = _t(P);
                X(k(
                    {
                        navigation: A
                    },
                    H !== void 0
                        ? {
                            actionData: H
                        }
                        : {}
                ), {flushSync: x})
            }
            let j = await at(u, l.pathname, o.signal);
            if (j.type === "aborted") 
                return {
                    shortCircuited: !0
                };
            if (j.type === "error") {
                let {error: H, notFoundMatches: ee, route: I} = nt(l.pathname, j);
                return {
                    matches: ee,
                    loaderData: {},
                    errors: {
                        [I.id]: H
                    }
                }
            } else if (j.matches) 
                u = j.matches;
            else {
                let {error: H, notFoundMatches: ee, route: I} = pt(l.pathname);
                return {
                    matches: ee,
                    loaderData: {},
                    errors: {
                        [I.id]: H
                    }
                }
            }
        }
        let T = c || i,
            [J, W] = Gt(
                e.history,
                m,
                u,
                _,
                l,
                f.v7_partialHydration && C === !0,
                f.unstable_skipActionErrorRevalidation,
                G,
                Ce,
                qe,
                fe,
                je,
                ce,
                T,
                d,
                P
            );
        if (
            gt(j => !(u && u.some(H => H.route.id === j)) || J && J.some(H => H.route.id === j)),
            Be = ++et,
            J.length === 0 && W.length === 0
        ) {
            let j = Nt();
            return Ue(l, k(
                {
                    matches: u,
                    loaderData: {},
                    errors: P && te(P[1])
                        ? {
                            [P[0]]: P[1].error
                        }
                        : null
                },
                rr(P),
                j
                    ? {
                        fetchers: new Map(m.fetchers)
                    }
                    : {}
            ), {flushSync: x}), {
                shortCircuited: !0
            }
        }
        if (N) {
            let j = {};
            if (!h) {
                j.navigation = A;
                let H = _t(P);
                H !== void 0 && (j.actionData = H)
            }
            W.length > 0 && (j.fetchers = Lr(W)),
            X(j, {flushSync: x})
        }
        W.forEach(j => {
            K.has(j.key) && ye(j.key),
            j.controller && K.set(j.key, j.controller)
        });
        let Ke = () => W.forEach(j => ye(j.key));
        O && O
            .signal
            .addEventListener("abort", Ke);
        let {loaderResults: be, fetcherResults: Fe} = await Ot(m.matches, u, J, W, o);
        if (o.signal.aborted) 
            return {
                shortCircuited: !0
            };
        O && O
            .signal
            .removeEventListener("abort", Ke),
        W.forEach(j => K.delete(j.key));
        let _e = ar([
            ...be,
            ...Fe
        ]);
        if (_e) {
            if (_e.idx >= J.length) {
                let j = W[_e.idx - J.length].key;
                ce.add(j)
            }
            return await ke(o, _e.result, {replace: y}), {
                shortCircuited: !0
            }
        }
        let {loaderData: Oe, errors: de} = er(m, u, J, be, P, W, Fe, Re);
        Re.forEach((j, H) => {
            j.subscribe(ee => {
                (ee || j.done) && Re.delete(H)
            })
        }),
        f.v7_partialHydration && C && m.errors && Object
            .entries(m.errors)
            .filter(j => {
                let [H] = j;
                return !J.some(ee => ee.route.id === H)
            })
            .forEach(j => {
                let [H, ee] = j;
                de = Object.assign(de || {}, {[H]: ee})
            });
        let ot = Nt(),
            it = It(Be),
            lt = ot || it || W.length > 0;
        return k(
            {
                matches: u,
                loaderData: Oe,
                errors: de
            },
            lt
                ? {
                    fetchers: new Map(m.fetchers)
                }
                : {}
        )
    }
    function _t(o) {
        if (o && !te(o[1])) 
            return {
                [o[0]]: o[1].data
            };
        if (m.actionData) 
            return Object
                .keys(m.actionData)
                .length === 0
                    ? null
                    : m.actionData
            }
    function Lr(o) {
        return o.forEach(l => {
            let u = m
                    .fetchers
                    .get(l.key),
                h = $e(
                    void 0,
                    u
                        ? u.data
                        : void 0
                );
            m
                .fetchers
                .set(l.key, h)
        }),
        new Map(m.fetchers)
    }
    function jr(o, l, u, h) {
        if (n) 
            throw new Error(
                "router.fetch() was called during the server render, but it shouldn't be. You a" +
                "re likely calling a useFetcher() method in the body of your component. Try mov" +
                "ing it to a useEffect or a callback."
            );
        K.has(o) && ye(o);
        let b = (h && h.unstable_flushSync) === !0,
            R = c || i,
            D = Rt(
                m.location,
                m.matches,
                d,
                f.v7_prependBasename,
                u,
                f.v7_relativeSplatPath,
                l,
                h == null
                    ? void 0
                    : h.relative
            ),
            y = De(R, D, d),
            C = vt(y, R, D);
        if (C.active && C.matches && (y = C.matches), !y) {
            he(o, l, Q(404, {pathname: D}), {flushSync: b});
            return
        }
        let {path: x, submission: P, error: A} = Yt(f.v7_normalizeFormMethod, !0, D, h);
        if (A) {
            he(o, l, A, {flushSync: b});
            return
        }
        let _ = Ve(y, x);
        if (le = (h && h.preventScrollReset) === !0, P && oe(P.formMethod)) {
            Ur(o, l, x, _, y, C.active, b, P);
            return
        }
        je.set(o, {
            routeId: l,
            path: x
        }),
        Fr(o, l, x, _, y, C.active, b, P)
    }
    async function Ur(o, l, u, h, b, R, D, y) {
        mt(),
        je.delete(o);
        function C(I) {
            if (!I.route.action && !I.route.lazy) {
                let me = Q(405, {
                    method: y.formMethod,
                    pathname: u,
                    routeId: l
                });
                return he(o, l, me, {flushSync: D}),
                !0
            }
            return !1
        }
        if (!R && C(h)) 
            return;
        let x = m
            .fetchers
            .get(o);
        ve(o, _n(y, x), {flushSync: D});
        let P = new AbortController,
            A = Te(e.history, u, P.signal, y);
        if (R) {
            let I = await at(b, u, A.signal);
            if (I.type === "aborted") 
                return;
            if (I.type === "error") {
                let {error: me} = nt(u, I);
                he(o, l, me, {flushSync: D});
                return
            } else if (I.matches) {
                if (b = I.matches, h = Ve(b, u), C(h)) 
                    return
            } else {
                he(o, l, Q(404, {pathname: u}), {flushSync: D});
                return
            }
        }
        K.set(o, P);
        let _ = et,
            T = (await He("action", A, [h], b))[0];
        if (A.signal.aborted) {
            K.get(o) === P && K.delete(o);
            return
        }
        if (f.v7_fetcherPersist && fe.has(o)) {
            if (Me(T) || te(T)) {
                ve(o, we(void 0));
                return
            }
        } else {
            if (Me(T)) 
                if (K.delete(o), Be > _) {
                    ve(o, we(void 0));
                    return
                } else 
                    return ce.add(o),
                    ve(o, $e(y)),
                    ke(A, T, {fetcherSubmission: y});
        if (te(T)) {
                he(o, l, T.error);
                return
            }
        }
        if (Se(T)) 
            throw Q(400, {type: "defer-action"});
        let J = m.navigation.location || m.location,
            W = Te(e.history, J, P.signal),
            Ke = c || i,
            be = m.navigation.state !== "idle"
                ? De(Ke, m.navigation.location, d)
                : m.matches;
        L(be, "Didn't find any matches after fetcher action");
        let Fe = ++et;
        Le.set(o, Fe);
        let _e = $e(y, T.data);
        m
            .fetchers
            .set(o, _e);
        let [Oe, de] = Gt(
            e.history,
            m,
            be,
            y,
            J,
            !1,
            f.unstable_skipActionErrorRevalidation,
            G,
            Ce,
            qe,
            fe,
            je,
            ce,
            Ke,
            d,
            [h.route.id, T]
        );
        de
            .filter(I => I.key !== o)
            .forEach(I => {
                let me = I.key,
                    Kt = m
                        .fetchers
                        .get(me),
                    Br = $e(
                        void 0,
                        Kt
                            ? Kt.data
                            : void 0
                    );
                m
                    .fetchers
                    .set(me, Br),
                K.has(me) && ye(me),
                I.controller && K.set(me, I.controller)
            }),
        X({
            fetchers: new Map(m.fetchers)
        });
        let ot = () => de.forEach(I => ye(I.key));
        P
            .signal
            .addEventListener("abort", ot);
        let {loaderResults: it, fetcherResults: lt} = await Ot(
            m.matches,
            be,
            Oe,
            de,
            W
        );
        if (P.signal.aborted) 
            return;
        P
            .signal
            .removeEventListener("abort", ot),
        Le.delete(o),
        K.delete(o),
        de.forEach(I => K.delete(I.key));
        let j = ar([
            ...it,
            ...lt
        ]);
        if (j) {
            if (j.idx >= Oe.length) {
                let I = de[j.idx - Oe.length].key;
                ce.add(I)
            }
            return ke(W, j.result)
        }
        let {loaderData: H, errors: ee} = er(m, m.matches, Oe, it, void 0, de, lt, Re);
        if (m.fetchers.has(o)) {
            let I = we(T.data);
            m
                .fetchers
                .set(o, I)
        }
        It(Fe),
        m.navigation.state === "loading" && Fe > Be
            ? (
                L(ne, "Expected pending action"),
                O && O.abort(),
                Ue(m.navigation.location, {
                    matches: be,
                    loaderData: H,
                    errors: ee,
                    fetchers: new Map(m.fetchers)
                })
            )
            : (X({
                errors: ee,
                loaderData: tr(m.loaderData, H, be, ee),
                fetchers: new Map(m.fetchers)
            }), G = !1)
    }
    async function Fr(o, l, u, h, b, R, D, y) {
        let C = m
            .fetchers
            .get(o);
        ve(o, $e(
            y,
            C
                ? C.data
                : void 0
        ), {flushSync: D});
        let x = new AbortController,
            P = Te(e.history, u, x.signal);
        if (R) {
            let T = await at(b, u, P.signal);
            if (T.type === "aborted") 
                return;
            if (T.type === "error") {
                let {error: J} = nt(u, T);
                he(o, l, J, {flushSync: D});
                return
            } else if (T.matches) 
                b = T.matches,
                h = Ve(b, u);
            else {
                he(o, l, Q(404, {pathname: u}), {flushSync: D});
                return
            }
        }
        K.set(o, x);
        let A = et,
            N = (await He("loader", P, [h], b))[0];
        if (
            Se(N) && (N = await yr(N, P.signal, !0) || N),
            K.get(o) === x && K.delete(o),
            !P.signal.aborted
        ) {
            if (fe.has(o)) {
                ve(o, we(void 0));
                return
            }
            if (Me(N)) 
                if (Be > A) {
                    ve(o, we(void 0));
                    return
                }
            else {
                ce.add(o),
                await ke(P, N);
                return
            }
            if (te(N)) {
                he(o, l, N.error);
                return
            }
            L(!Se(N), "Unhandled fetcher deferred data"),
            ve(o, we(N.data))
        }
    }
    async function ke(o, l, u) {
        let {submission: h, fetcherSubmission: b, replace: R} = u === void 0
            ? {}
            : u;
        l
            .response
            .headers
            .has("X-Remix-Revalidate") && (G = !0);
        let D = l
            .response
            .headers
            .get("Location");
        L(D, "Expected a Location header on the redirect Response"),
        D = Zt(D, new URL(o.url), d);
        let y = Ye(m.location, D, {
            _isRedirect: !0
        });
        if (r) {
            let N = !1;
            if (l.response.headers.has("X-Remix-Reload-Document")) 
                N = !0;
            else if (St.test(D)) {
                const T = e
                    .history
                    .createURL(D);
                N = T.origin !== t.location.origin || Qe(T.pathname, d) == null
            }
            if (N) {
                R
                    ? t
                        .location
                        .replace(D)
                    : t
                        .location
                        .assign(D);
                return
            }
        }
        O = null;
        let C = R === !0
                ? $.Replace
                : $.Push, {
                formMethod: x,
                formAction: P,
                formEncType: A
            } = m.navigation;
        !h && !b && x && P && A && (h = ir(m.navigation));
        let _ = h || b;
        if (mn.has(l.response.status) && _ && oe(_.formMethod)) 
            await Pe(C, y, {
                submission: k({}, _, {formAction: D}),
                preventScrollReset: le
            });
        else {
            let N = wt(y, h);
            await Pe(C, y, {
                overrideNavigation: N,
                fetcherSubmission: b,
                preventScrollReset: le
            })
        }
    }
    async function He(o, l, u, h) {
        try {
            let b = await Rn(g, o, l, u, h, s, a);
            return await Promise.all(b.map((R, D) => {
                if (Ln(R)) {
                    let y = R.result;
                    return {
                        type: B.redirect,
                        response: Dn(y, l, u[D].route.id, h, d, f.v7_relativeSplatPath)
                    }
                }
                return Pn(R)
            }))
        } catch (b) {
            return u.map(() => ({type: B.error, error: b}))
        }
    }
    async function Ot(o, l, u, h, b) {
        let [
            R, ...D
        ] = await Promise.all([
            u.length
                ? He("loader", b, u, l)
                : [],
            ...h.map(y => {
                if (y.matches && y.match && y.controller) {
                    let C = Te(e.history, y.path, y.controller.signal);
                    return He("loader", C, [y.match], y.matches).then(x => x[0])
                } else 
                    return Promise.resolve({
                        type: B.error,
                        error: Q(404, {pathname: y.path})
                    })
            })
        ]);
        return await Promise.all([
            or(o, u, R, R.map(() => b.signal), !1, m.loaderData),
            or(o, h.map(y => y.match), D, h.map(
                y => y.controller
                    ? y.controller.signal
                    : null
            ), !0)
        ]), {
            loaderResults: R,
            fetcherResults: D
        }
    }
    function mt() {
        G = !0,
        Ce.push(...gt()),
        je.forEach((o, l) => {
            K.has(l) && (qe.push(l), ye(l))
        })
    }
    function ve(o, l, u) {
        u === void 0 && (u = {}),
        m
            .fetchers
            .set(o, l),
        X({
            fetchers: new Map(m.fetchers)
        }, {
            flushSync: (u && u.flushSync) === !0
        })
    }
    function he(o, l, u, h) {
        h === void 0 && (h = {});
        let b = Je(m.matches, l);
        tt(o),
        X({
            errors: {
                [b.route.id]: u
            },
            fetchers: new Map(m.fetchers)
        }, {
            flushSync: (h && h.flushSync) === !0
        })
    }
    function Tt(o) {
        return f.v7_fetcherPersist && (
            ze.set(o, (ze.get(o) || 0) + 1),
            fe.has(o) && fe.delete(o)
        ),
        m
            .fetchers
            .get(o) || pn
    }
    function tt(o) {
        let l = m
            .fetchers
            .get(o);
        K.has(o) && !(l && l.state === "loading" && Le.has(o)) && ye(o),
        je.delete(o),
        Le.delete(o),
        ce.delete(o),
        fe.delete(o),
        m
            .fetchers
            .delete(o)
    }
    function _r(o) {
        if (f.v7_fetcherPersist) {
            let l = (ze.get(o) || 0) - 1;
            l <= 0
                ? (ze.delete(o), fe.add(o))
                : ze.set(o, l)
        } else 
            tt(o);
        X({
            fetchers: new Map(m.fetchers)
        })
    }
    function ye(o) {
        let l = K.get(o);
        L(l, "Expected fetch controller: " + o),
        l.abort(),
        K.delete(o)
    }
    function At(o) {
        for (let l of o) {
            let u = Tt(l),
                h = we(u.data);
            m
                .fetchers
                .set(l, h)
        }
    }
    function Nt() {
        let o = [],
            l = !1;
        for (let u of ce) {
            let h = m
                .fetchers
                .get(u);
            L(h, "Expected fetcher: " + u),
            h.state === "loading" && (ce.delete(u), o.push(u), l = !0)
        }
        return At(o),
        l
    }
    function It(o) {
        let l = [];
        for (let [u, h] of Le) 
            if (h < o) {
                let b = m
                    .fetchers
                    .get(u);
                L(b, "Expected fetcher: " + u),
                b.state === "loading" && (ye(u), Le.delete(u), l.push(u))
            }
        return At(l),
        l.length > 0
    }
    function Or(o, l) {
        let u = m
            .blockers
            .get(o) || We;
        return xe.get(o) !== l && xe.set(o, l),
        u
    }
    function Bt(o) {
        m
            .blockers
            .delete(o),
        xe.delete(o)
    }
    function rt(o, l) {
        let u = m
            .blockers
            .get(o) || We;
        L(
            u.state === "unblocked" && l.state === "blocked" || u.state === "blocked" && l.state === "blocked" || u.state === "blocked" && l.state === "proceeding" || u.state === "blocked" && l.state === "unblocked" || u.state === "proceeding" && l.state === "unblocked",
            "Invalid blocker state transition: " + u.state + " -> " + l.state
        );
        let h = new Map(m.blockers);
        h.set(o, l),
        X({blockers: h})
    }
    function zt(o) {
        let {currentLocation: l, nextLocation: u, historyAction: h} = o;
        if (xe.size === 0) 
            return;
        xe.size > 1 && Ae(!1, "A router only supports one blocker at a time");
        let b = Array.from(xe.entries()),
            [R, D] = b[b.length - 1],
            y = m
                .blockers
                .get(R);
        if (!(y && y.state === "proceeding") && D({currentLocation: l, nextLocation: u, historyAction: h})) 
            return R
    }
    function pt(o) {
        let l = Q(404, {pathname: o}),
            u = c || i, {
                matches: h,
                route: b
            } = nr(u);
        return gt(), {
            notFoundMatches: h,
            route: b,
            error: l
        }
    }
    function nt(o, l) {
        let u = l.partialMatches,
            h = u[u.length - 1].route,
            b = Q(400, {
                type: "route-discovery",
                routeId: h.id,
                pathname: o,
                message: l.error != null && "message" in l.error
                    ? l.error
                    : String(l.error)
            });
        return {notFoundMatches: u, route: h, error: b}
    }
    function gt(o) {
        let l = [];
        return Re.forEach((u, h) => {
            (!o || o(h)) && (u.cancel(), l.push(h), Re.delete(h))
        }),
        l
    }
    function Tr(o, l, u) {
        if (S = o, M = l, E = u || null, !z && m.navigation === bt) {
            z = !0;
            let h = Ht(m.location, m.matches);
            h != null && X({restoreScrollPosition: h})
        }
        return() => {
            S = null,
            M = null,
            E = null
        }
    }
    function kt(o, l) {
        return E && E(o, l.map(h => lr(h, m.loaderData))) || o.key
    }
    function Ar(o, l) {
        if (S && M) {
            let u = kt(o, l);
            S[u] = M()
        }
    }
    function Ht(o, l) {
        if (S) {
            let u = kt(o, l),
                h = S[u];
            if (typeof h == "number") 
                return h
        }
        return null
    }
    function vt(o, l, u) {
        if (p) 
            if (o) {
                let h = o[o.length - 1].route;
                if (h.path && (h.path === "*" || h.path.endsWith("/*"))) 
                    return {
                        active: !0,
                        matches: st(l, u, d, !0)
                    }
                } else 
                return {
                    active: !0,
                    matches: st(l, u, d, !0) || []
                };
    return {
            active: !1,
            matches: null
        }
    }
    async function at(o, l, u) {
        let h = o,
            b = h.length > 0
                ? h[h.length - 1].route
                : null;
        for (;;) {
            let R = c == null,
                D = c || i;
            try {
                await wn(p, l, h, D, s, a, Rr, u)
            } catch (P) {
                return {type: "error", error: P, partialMatches: h}
            } finally {
                R && (i = [...i])
            }
            if (u.aborted) 
                return {type: "aborted"};
            let y = De(D, l, d),
                C = !1;
            if (y) {
                let P = y[y.length - 1].route;
                if (P.index) 
                    return {type: "success", matches: y};
                if (P.path && P.path.length > 0) 
                    if (P.path === "*") 
                        C = !0;
                    else 
                        return {type: "success", matches: y}
                    }
            let x = st(D, l, d, !0);
            if (!x || h.map(P => P.route.id).join("-") === x.map(P => P.route.id).join("-")) 
                return {
                    type: "success",
                    matches: C
                        ? y
                        : null
                };
            if (h = x, b = h[h.length - 1].route, b.path === "*") 
                return {type: "success", matches: h}
            }
    }
    function Nr(o) {
        s = {},
        c = Ge(o, a, void 0, s)
    }
    function Ir(o, l) {
        let u = c == null;
        pr(o, l, c || i, s, a),
        u && (i = [...i], X({}))
    }
    return re = {
        get basename() {
            return d
        },
        get future() {
            return f
        },
        get state() {
            return m
        },
        get routes() {
            return i
        },
        get window() {
            return t
        },
        initialize: xr,
        subscribe: Dr,
        enableScrollRestoration: Tr,
        navigate: Ft,
        fetch: jr,
        revalidate: Sr,
        createHref: o => e
            .history
            .createHref(o),
        encodeLocation: o => e
            .history
            .encodeLocation(o),
        getFetcher: Tt,
        deleteFetcher: _r,
        dispose: Pr,
        getBlocker: Or,
        deleteBlocker: Bt,
        patchRoutes: Ir,
        _internalFetchControllers: K,
        _internalActiveDeferreds: Re,
        _internalSetRoutes: Nr
    },
    re
}
function vn(e) {
    return e != null && (
        "formData" in e && e.formData != null || "body" in e && e.body !== void 0
    )
}
function Rt(e, t, r, n, a, s, i, c) {
    let d,
        g;
    if (i) {
        d = [];
        for (let f of t) 
            if (d.push(f), f.route.id === i) {
                g = f;
                break
            }
        } else 
        d = t,
        g = t[t.length - 1];
    let p = Dt(a || ".", Pt(d, s), Qe(e.pathname, r) || e.pathname, c === "path");
    return a == null && (p.search = e.search, p.hash = e.hash),
    (a == null || a === "" || a === ".") && g && g.route.index && !Mt(p.search) && (
        p.search = p.search
            ? p.search.replace(/^\?/, "?index&")
            : "?index"
    ),
    n && r !== "/" && (
        p.pathname = p.pathname === "/"
            ? r
            : pe([r, p.pathname])
    ),
    Xe(p)
}
function Yt(e, t, r, n) {
    if (!n || !vn(n)) 
        return {path: r};
    if (n.formMethod && !Un(n.formMethod)) 
        return {
            path: r,
            error: Q(405, {method: n.formMethod})
        };
    let a = () => ({
            path: r,
            error: Q(400, {type: "invalid-body"})
        }),
        s = n.formMethod || "get",
        i = e
            ? s.toUpperCase()
            : s.toLowerCase(),
        c = gr(r);
    if (n.body !== void 0) {
        if (n.formEncType === "text/plain") {
            if (!oe(i)) 
                return a();
            let v = typeof n.body == "string"
                ? n.body
                : n.body instanceof FormData || n.body instanceof URLSearchParams
                    ? Array
                        .from(n.body.entries())
                        .reduce((U, S) => {
                            let [E, M] = S;
                            return "" + U + E + "=" + M + `
`
                        }, "")
                    : String(n.body);
            return {
                path: r,
                submission: {
                    formMethod: i,
                    formAction: c,
                    formEncType: n.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: v
                }
            }
        } else if (n.formEncType === "application/json") {
            if (!oe(i)) 
                return a();
            try {
                let v = typeof n.body == "string"
                    ? JSON.parse(n.body)
                    : n.body;
                return {
                    path: r,
                    submission: {
                        formMethod: i,
                        formAction: c,
                        formEncType: n.formEncType,
                        formData: void 0,
                        json: v,
                        text: void 0
                    }
                }
            } catch  {
                return a()
            }
        }
    }
    L(
        typeof FormData == "function",
        "FormData is not available in this environment"
    );
    let d,
        g;
    if (n.formData) 
        d = xt(n.formData),
        g = n.formData;
    else if (n.body instanceof FormData) 
        d = xt(n.body),
        g = n.body;
    else if (n.body instanceof URLSearchParams) 
        d = n.body,
        g = qt(d);
    else if (n.body == null) 
        d = new URLSearchParams,
        g = new FormData;
    else 
        try {
            d = new URLSearchParams(n.body),
            g = qt(d)
        } catch  {
            return a()
        }
    let p = {
        formMethod: i,
        formAction: c,
        formEncType: n && n.formEncType || "application/x-www-form-urlencoded",
        formData: g,
        json: void 0,
        text: void 0
    };
    if (oe(p.formMethod)) 
        return {path: r, submission: p};
    let f = Ee(r);
    return t && f.search && Mt(f.search) && d.append("index", ""),
    f.search = "?" + d, {
        path: Xe(f),
        submission: p
    }
}
function yn(e, t) {
    let r = e;
    if (t) {
        let n = e.findIndex(a => a.route.id === t);
        n >= 0 && (r = e.slice(0, n))
    }
    return r
}
function Gt(e, t, r, n, a, s, i, c, d, g, p, f, v, U, S, E) {
    let M = E
            ? te(E[1])
                ? E[1].error
                : E[1].data
            : void 0,
        z = e.createURL(t.location),
        F = e.createURL(a),
        Y = E && te(E[1])
            ? E[0]
            : void 0,
        Z = Y
            ? yn(r, Y)
            : r,
        re = E
            ? E[1].statusCode
            : void 0,
        m = i && re && re >= 400,
        ne = Z.filter((O, q) => {
            let {route: V} = O;
            if (V.lazy) 
                return !0;
            if (V.loader == null) 
                return !1;
            if (s) 
                return typeof V.loader != "function" || V.loader.hydrate
                    ? !0
                    : t.loaderData[V.id] === void 0 && (!t.errors || t.errors[V.id] === void 0);
            if (bn(t.loaderData, t.matches[q], O) || d.some(G => G === O.route.id)) 
                return !0;
            let se = t.matches[q],
                ue = O;
            return Xt(O, k({
                currentUrl: z,
                currentParams: se.params,
                nextUrl: F,
                nextParams: ue.params
            }, n, {
                actionResult: M,
                unstable_actionStatus: re,
                defaultShouldRevalidate: m
                    ? !1
                    : c || z.pathname + z.search === F.pathname + F.search || z.search !== F.search || mr(
                        se,
                        ue
                    )
            }))
        }),
        le = [];
    return f.forEach((O, q) => {
        if (s || !r.some(Ce => Ce.route.id === O.routeId) || p.has(q)) 
            return;
        let V = De(U, O.path, S);
        if (!V) {
            le.push({
                key: q,
                routeId: O.routeId,
                path: O.path,
                matches: null,
                match: null,
                controller: null
            });
            return
        }
        let se = t
                .fetchers
                .get(q),
            ue = Ve(V, O.path),
            G = !1;
        v.has(q)
            ? G = !1
            : g.includes(q)
                ? G = !0
                : se && se.state !== "idle" && se.data === void 0
                    ? G = c
                    : G = Xt(ue, k({
                        currentUrl: z,
                        currentParams: t
                            .matches[t.matches.length - 1]
                            .params,
                        nextUrl: F,
                        nextParams: r[r.length - 1].params
                    }, n, {
                        actionResult: M,
                        unstable_actionStatus: re,
                        defaultShouldRevalidate: m
                            ? !1
                            : c
                    })),
        G && le.push({
            key: q,
            routeId: O.routeId,
            path: O.path,
            matches: V,
            match: ue,
            controller: new AbortController
        })
    }),
    [ne, le]
}
function bn(e, t, r) {
    let n = !t || r.route.id !== t.route.id,
        a = e[r.route.id] === void 0;
    return n || a
}
function mr(e, t) {
    let r = e.route.path;
    return e.pathname !== t.pathname || r != null && r.endsWith("*") && e.params["*"] !== t.params["*"]
}
function Xt(e, t) {
    if (e.route.shouldRevalidate) {
        let r = e
            .route
            .shouldRevalidate(t);
        if (typeof r == "boolean") 
            return r
    }
    return t.defaultShouldRevalidate
}
async function wn(e, t, r, n, a, s, i, c) {
    let d = [
        t, ...r.map(g => g.route.id)
    ].join("-");
    try {
        let g = i.get(d);
        g || (g = e({
            path: t,
            matches: r,
            patch: (p, f) => {
                c.aborted || pr(p, f, n, a, s)
            }
        }), i.set(d, g)),
        g && Cn(g) && await g
    } finally {
        i.delete(d)
    }
}
function pr(e, t, r, n, a) {
    if (e) {
        var s;
        let i = n[e];
        L(i, "No route found to patch children into: routeId = " + e);
        let c = Ge(t, a, [
            e,
            "patch",
            String((
                (s = i.children) == null
                    ? void 0
                    : s.length
            ) || "0")
        ], n);
        i.children
            ? i
                .children
                .push(...c)
            : i.children = c
    } else {
        let i = Ge(t, a, [
            "patch",
            String(r.length || "0")
        ], n);
        r.push(...i)
    }
}
async function Qt(e, t, r) {
    if (!e.lazy) 
        return;
    let n = await e.lazy();
    if (!e.lazy) 
        return;
    let a = r[e.id];
    L(a, "No route found in manifest");
    let s = {};
    for (let i in n) {
        let d = a[i] !== void 0 && i !== "hasErrorBoundary";
        Ae(
            !d,
            'Route "' + a.id + '" has a static property "' + i + '" defined but its lazy fu' +
                    'nction is also returning a value for this property. ' + (
                'The lazy route property "' + i + '" will be ignored.'
            )
        ),
        !d && !Hr.has(i) && (s[i] = n[i])
    }
    Object.assign(a, s),
    Object.assign(a, k({}, t(a), {lazy: void 0}))
}
function En(e) {
    return Promise.all(e.matches.map(t => t.resolve()))
}
async function Rn(e, t, r, n, a, s, i, c) {
    let d = n.reduce((f, v) => f.add(v.route.id), new Set),
        g = new Set,
        p = await e({
            matches: a.map(f => {
                let v = d.has(f.route.id);
                return k({}, f, {
                    shouldLoad: v,
                    resolve: S => (
                        g.add(f.route.id),
                        v
                            ? xn(t, r, f, s, i, S, c)
                            : Promise.resolve({type: B.data, result: void 0})
                    )
                })
            }),
            request: r,
            params: a[0].params,
            context: c
        });
    return a.forEach(f => L(
        g.has(f.route.id),
        '`match.resolve()` was not called for route id "' + f.route.id + '". You must c' +
                'all `match.resolve()` on every match passed to `dataStrategy` to ensure all ro' +
                'utes are properly loaded.'
    )),
    p.filter((f, v) => d.has(a[v].route.id))
}
async function xn(e, t, r, n, a, s, i) {
    let c,
        d,
        g = p => {
            let f,
                v = new Promise((E, M) => f = M);
            d = () => f(),
            t
                .signal
                .addEventListener("abort", d);
            let U = E => typeof p != "function"
                    ? Promise.reject(new Error(
                        "You cannot call the handler for a route which defines a boolean " + (
                            '"' + e + '" [routeId: ' + r.route.id + "]"
                        )
                    ))
                    : p(
                        {
                            request: t,
                            params: r.params,
                            context: i
                        },
                        ...E !== void 0
                            ? [E]
                            : []
                    ),
                S;
            return s
                ? S = s(E => U(E))
                : S = (async () => {
                    try {
                        return {type: "data", result: await U()}
                    } catch (E) {
                        return {type: "error", result: E}
                    }
                })(),
            Promise.race([S, v])
        };
    try {
        let p = r.route[e];
        if (r.route.lazy) 
            if (p) {
                let f,
                    [v] = await Promise.all([
                        g(p).catch(U => {
                            f = U
                        }),
                        Qt(r.route, a, n)
                    ]);
                if (f !== void 0) 
                    throw f;
                c = v
            }
        else if (await Qt(r.route, a, n), p = r.route[e], p) 
            c = await g(p);
        else if (e === "action") {
            let f = new URL(t.url),
                v = f.pathname + f.search;
            throw Q(405, {
                method: t.method,
                pathname: v,
                routeId: r.route.id
            })
        } else 
            return {type: B.data, result: void 0};
        else if (p) 
            c = await g(p);
        else {
            let f = new URL(t.url),
                v = f.pathname + f.search;
            throw Q(404, {pathname: v})
        }
        L(
            c.result !== void 0,
            "You defined " + (
                e === "action"
                    ? "an action"
                    : "a loader"
            ) + " for route " + (
                '"' + r.route.id + "\" but didn't return anything from your `" + e + "` "
            ) + "function. Please return a value or `null`."
        )
    } catch (p) {
        return {type: B.error, result: p}
    } finally {
        d && t
            .signal
            .removeEventListener("abort", d)
    }
    return c
}
async function Pn(e) {
    let {result: t, type: r, status: n} = e;
    if (vr(t)) {
        let i;
        try {
            let c = t
                .headers
                .get("Content-Type");
            c && /\bapplication\/json\b/.test(c)
                ? t.body == null
                    ? i = null
                    : i = await t.json()
                : i = await t.text()
        } catch (c) {
            return {type: B.error, error: c}
        }
        return r === B.error
            ? {
                type: B.error,
                error: new cr(t.status, t.statusText, i),
                statusCode: t.status,
                headers: t.headers
            }
            : {
                type: B.data,
                data: i,
                statusCode: t.status,
                headers: t.headers
            }
    }
    if (r === B.error) 
        return {
            type: B.error,
            error: t,
            statusCode: ct(t)
                ? t.status
                : n
        };
    if (jn(t)) {
        var a,
            s;
        return {
            type: B.deferred,
            deferredData: t,
            statusCode: (a = t.init) == null
                ? void 0
                : a.status,
            headers: (
                (s = t.init) == null
                    ? void 0
                    : s.headers
            ) && new Headers(t.init.headers)
        }
    }
    return {type: B.data, data: t, statusCode: n}
}
function Dn(e, t, r, n, a, s) {
    let i = e
        .headers
        .get("Location");
    if (L(
        i,
        "Redirects returned/thrown from loaders/actions must have a Location header"
    ), !St.test(i)) {
        let c = n.slice(0, n.findIndex(d => d.route.id === r) + 1);
        i = Rt(new URL(t.url), c, a, !0, i, s),
        e
            .headers
            .set("Location", i)
    }
    return e
}
function Zt(e, t, r) {
    if (St.test(e)) {
        let n = e,
            a = n.startsWith("//")
                ? new URL(t.protocol + n)
                : new URL(n),
            s = Qe(a.pathname, r) != null;
        if (a.origin === t.origin && s) 
            return a.pathname + a.search + a.hash
    }
    return e
}
function Te(e, t, r, n) {
    let a = e
            .createURL(gr(t))
            .toString(),
        s = {
            signal: r
        };
    if (n && oe(n.formMethod)) {
        let {formMethod: i, formEncType: c} = n;
        s.method = i.toUpperCase(),
        c === "application/json"
            ? (
                s.headers = new Headers({"Content-Type": c}),
                s.body = JSON.stringify(n.json)
            )
            : c === "text/plain"
                ? s.body = n.text
                : c === "application/x-www-form-urlencoded" && n.formData
                    ? s.body = xt(n.formData)
                    : s.body = n.formData
    }
    return new Request(a, s)
}
function xt(e) {
    let t = new URLSearchParams;
    for (let [r, n] of e.entries()) 
        t.append(
            r,
            typeof n == "string"
                ? n
                : n.name
        );
    return t
}
function qt(e) {
    let t = new FormData;
    for (let [r, n] of e.entries()) 
        t.append(r, n);
    return t
}
function Sn(e, t, r, n, a, s) {
    let i = {},
        c = null,
        d,
        g = !1,
        p = {},
        f = n && te(n[1])
            ? n[1].error
            : void 0;
    return r.forEach((v, U) => {
        let S = t[U].route.id;
        if (L(!Me(v), "Cannot handle redirect results in processLoaderData"), te(v)) {
            let E = v.error;
            f !== void 0 && (E = f, f = void 0),
            c = c || {};
            {
                let M = Je(e, S);
                c[M.route.id] == null && (c[M.route.id] = E)
            }
            i[S] = void 0,
            g || (
                g = !0,
                d = ct(v.error)
                    ? v.error.status
                    : 500
            ),
            v.headers && (p[S] = v.headers)
        } else 
            Se(v)
                ? (
                    a.set(S, v.deferredData),
                    i[S] = v.deferredData.data,
                    v.statusCode != null && v.statusCode !== 200 && !g && (d = v.statusCode),
                    v.headers && (p[S] = v.headers)
                )
                : (
                    i[S] = v.data,
                    v.statusCode && v.statusCode !== 200 && !g && (d = v.statusCode),
                    v.headers && (p[S] = v.headers)
                )
        }),
    f !== void 0 && n && (c = {
        [n[0]]: f
    }, i[n[0]] = void 0), {
        loaderData: i,
        errors: c,
        statusCode: d || 200,
        loaderHeaders: p
    }
}
function er(e, t, r, n, a, s, i, c) {
    let {loaderData: d, errors: g} = Sn(t, r, n, a, c);
    for (let p = 0; p < s.length; p++) {
        let {key: f, match: v, controller: U} = s[p];
        L(i !== void 0 && i[p] !== void 0, "Did not find corresponding fetcher result");
        let S = i[p];
        if (!(U && U.signal.aborted)) 
            if (te(S)) {
                let E = Je(
                    e.matches,
                    v == null
                        ? void 0
                        : v.route.id
                );
                g && g[E.route.id] || (g = k({}, g, {
                    [E.route.id]: S.error
                })),
                e
                    .fetchers
                    .delete(f)
            }
        else if (Me(S)) 
            L(!1, "Unhandled fetcher revalidation redirect");
        else if (Se(S)) 
            L(!1, "Unhandled fetcher deferred data");
        else {
            let E = we(S.data);
            e
                .fetchers
                .set(f, E)
        }
    }
    return {loaderData: d, errors: g}
}
function tr(e, t, r, n) {
    let a = k({}, t);
    for (let s of r) {
        let i = s.route.id;
        if (
            t.hasOwnProperty(i)
                ? t[i] !== void 0 && (a[i] = t[i])
                : e[i] !== void 0 && s.route.loader && (a[i] = e[i]),
            n && n.hasOwnProperty(i)
        ) 
            break
    }
    return a
}
function rr(e) {
    return e
        ? te(e[1])
            ? {
                actionData: {}
            }
            : {
                actionData: {
                    [e[0]]: e[1].data
                }
            }
        : {}
}
function Je(e, t) {
    return (
        t
            ? e.slice(0, e.findIndex(n => n.route.id === t) + 1)
            : [...e]
    )
        .reverse()
        .find(n => n.route.hasErrorBoundary === !0) || e[0]
}
function nr(e) {
    let t = e.length === 1
        ? e[0]
        : e.find(r => r.index || !r.path || r.path === "/") || {
            id: "__shim-error-route__"
        };
    return {
        matches: [
            {
                params: {},
                pathname: "",
                pathnameBase: "",
                route: t
            }
        ],
        route: t
    }
}
function Q(e, t) {
    let {pathname: r, routeId: n, method: a, type: s, message: i} = t === void 0
            ? {}
            : t,
        c = "Unknown Server Error",
        d = "Unknown @remix-run/router error";
    return e === 400
        ? (
            c = "Bad Request",
            s === "route-discovery"
                ? d = 'Unable to match URL "' + r + '" - the `children()` function for ' + (
                    "route `" + n + "` threw the following error:\n" + i
                )
                : a && r && n
                    ? d = "You made a " + a + ' request to "' + r + '" but ' + (
                        'did not provide a `loader` for route "' + n + '", '
                    ) + "so there is no way to handle the request."
                    : s === "defer-action"
                        ? d = "defer() is not supported in actions"
                        : s === "invalid-body" && (d = "Unable to encode submission body")
        )
        : e === 403
            ? (c = "Forbidden", d = 'Route "' + n + '" does not match URL "' + r + '"')
            : e === 404
                ? (c = "Not Found", d = 'No route matches URL "' + r + '"')
                : e === 405 && (
                    c = "Method Not Allowed",
                    a && r && n
                        ? d = "You made a " + a.toUpperCase() + ' request to "' + r + '" but ' + (
                            'did not provide an `action` for route "' + n + '", '
                        ) + "so there is no way to handle the request."
                        : a && (d = 'Invalid request method "' + a.toUpperCase() + '"')
                ),
    new cr(e || 500, c, new Error(d), !0)
}
function ar(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let r = e[t];
        if (Me(r)) 
            return {result: r, idx: t}
        }
}
function gr(e) {
    let t = typeof e == "string"
        ? Ee(e)
        : e;
    return Xe(k({}, t, {hash: ""}))
}
function Mn(e, t) {
    return e.pathname !== t.pathname || e.search !== t.search
        ? !1
        : e.hash === ""
            ? t.hash !== ""
            : e.hash === t.hash
                ? !0
                : t.hash !== ""
}
function Cn(e) {
    return typeof e == "object" && e != null && "then" in e
}
function Ln(e) {
    return vr(e.result) && hn.has(e.result.status)
}
function Se(e) {
    return e.type === B.deferred
}
function te(e) {
    return e.type === B.error
}
function Me(e) {
    return (e && e.type) === B.redirect
}
function jn(e) {
    let t = e;
    return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function"
}
function vr(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u"
}
function Un(e) {
    return fn.has(e.toLowerCase())
}
function oe(e) {
    return dn.has(e.toLowerCase())
}
async function or(e, t, r, n, a, s) {
    for (let i = 0; i < r.length; i++) {
        let c = r[i],
            d = t[i];
        if (!d) 
            continue;
        let g = e.find(f => f.route.id === d.route.id),
            p = g != null && !mr(g, d) && (s && s[d.route.id]) !== void 0;
        if (Se(c) && (a || p)) {
            let f = n[i];
            L(f, "Expected an AbortSignal for revalidating fetcher deferred result"),
            await yr(c, f, a).then(v => {
                v && (r[i] = v || r[i])
            })
        }
    }
}
async function yr(e, t, r) {
    if (r === void 0 && (r = !1), !await e.deferredData.resolveData(t)) {
        if (r) 
            try {
                return {type: B.data, data: e.deferredData.unwrappedData}
            } catch (a) {
                return {type: B.error, error: a}
            }
        return {type: B.data, data: e.deferredData.data}
    }
}
function Mt(e) {
    return new URLSearchParams(e)
        .getAll("index")
        .some(t => t === "")
}
function Ve(e, t) {
    let r = typeof t == "string"
        ? Ee(t).search
        : t.search;
    if (e[e.length - 1].route.index && Mt(r || "")) 
        return e[e.length - 1];
    let n = dr(e);
    return n[n.length - 1]
}
function ir(e) {
    let {
        formMethod: t,
        formAction: r,
        formEncType: n,
        text: a,
        formData: s,
        json: i
    } = e;
    if (!(!t || !r || !n)) {
        if (a != null) 
            return {
                formMethod: t,
                formAction: r,
                formEncType: n,
                formData: void 0,
                json: void 0,
                text: a
            };
        if (s != null) 
            return {
                formMethod: t,
                formAction: r,
                formEncType: n,
                formData: s,
                json: void 0,
                text: void 0
            };
        if (i !== void 0) 
            return {
                formMethod: t,
                formAction: r,
                formEncType: n,
                formData: void 0,
                json: i,
                text: void 0
            }
        }
}
function wt(e, t) {
    return t
        ? {
            state: "loading",
            location: e,
            formMethod: t.formMethod,
            formAction: t.formAction,
            formEncType: t.formEncType,
            formData: t.formData,
            json: t.json,
            text: t.text
        }
        : {
            state: "loading",
            location: e,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            json: void 0,
            text: void 0
        }
}
function Fn(e, t) {
    return {
        state: "submitting",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    }
}
function $e(e, t) {
    return e
        ? {
            state: "loading",
            formMethod: e.formMethod,
            formAction: e.formAction,
            formEncType: e.formEncType,
            formData: e.formData,
            json: e.json,
            text: e.text,
            data: t
        }
        : {
            state: "loading",
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            json: void 0,
            text: void 0,
            data: t
        }
}
function _n(e, t) {
    return {
        state: "submitting",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t
            ? t.data
            : void 0
    }
}
function we(e) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e
    }
}
function On(e, t) {
    try {
        let r = e
            .sessionStorage
            .getItem(hr);
        if (r) {
            let n = JSON.parse(r);
            for (let [a, s] of Object.entries(n || {})) 
                s && Array.isArray(s) && t.set(a, new Set(s || []))
        }
    } catch  {}
}
function Tn(e, t) {
    if (t.size > 0) {
        let r = {};
        for (let [n, a] of t) 
            r[n] = [...a];
        try {
            e
                .sessionStorage
                .setItem(hr, JSON.stringify(r))
        } catch (n) {
            Ae(
                !1,
                "Failed to save applied view transitions in sessionStorage (" + n + ")."
            )
        }
    }
}/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ut() {
    return ut = Object.assign
        ? Object
            .assign
            .bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) 
                    Object
                        .prototype
                        .hasOwnProperty
                        .call(r, n) && (e[n] = r[n])
                }
            return e
        },
    ut.apply(this, arguments)
}
const Ct = w.createContext(null),
    An = w.createContext(null),
    dt = w.createContext(null),
    Ne = w.createContext(null),
    Lt = w.createContext(null),
    ge = w.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    br = w.createContext(null);
function aa(e, t) {
    let {relative: r} = t === void 0
        ? {}
        : t;
    Ze() || L(!1);
    let {basename: n, navigator: a} = w.useContext(Ne), {
            hash: s,
            pathname: i,
            search: c
        } = zn(e, {relative: r}),
        d = i;
    return n !== "/" && (
        d = i === "/"
            ? n
            : pe([n, i])
    ),
    a.createHref({pathname: d, search: c, hash: s})
}
function Ze() {
    return w.useContext(Lt) != null
}
function jt() {
    return Ze() || L(!1),
    w
        .useContext(Lt)
        .location
}
function wr(e) {
    w
        .useContext(Ne)
        .static || w.useLayoutEffect(e)
}
function oa() {
    let {isDataRoute: e} = w.useContext(ge);
    return e
        ? Gn()
        : Nn()
}
function Nn() {
    Ze() || L(!1);
    let e = w.useContext(Ct), {
            basename: t,
            future: r,
            navigator: n
        } = w.useContext(Ne), {matches: a} = w.useContext(ge), {pathname: s} = jt(),
        i = JSON.stringify(Pt(a, r.v7_relativeSplatPath)),
        c = w.useRef(!1);
    return wr(() => {
        c.current = !0
    }),
    w.useCallback(function (g, p) {
        if (p === void 0 && (p = {}), !c.current) 
            return;
        if (typeof g == "number") {
            n.go(g);
            return
        }
        let f = Dt(g, JSON.parse(i), s, p.relative === "path");
        e == null && t !== "/" && (
            f.pathname = f.pathname === "/"
                ? t
                : pe([t, f.pathname])
        ),
        (
            p.replace
                ? n.replace
                : n.push
        )(f, p.state, p)
    }, [t, n, i, s, e])
}
const In = w.createContext(null);
function Bn(e) {
    let t = w
        .useContext(ge)
        .outlet;
    return t && w.createElement(In.Provider, {
        value: e
    }, t)
}
function ia() {
    let {matches: e} = w.useContext(ge),
        t = e[e.length - 1];
    return t
        ? t.params
        : {}
}
function zn(e, t) {
    let {relative: r} = t === void 0
            ? {}
            : t, {future: n} = w.useContext(Ne), {matches: a} = w.useContext(ge), {pathname: s} = jt(),
        i = JSON.stringify(Pt(a, n.v7_relativeSplatPath));
    return w.useMemo(() => Dt(e, JSON.parse(i), s, r === "path"), [e, i, s, r])
}
function la(e, t, r, n) {
    Ze() || L(!1);
    let {navigator: a} = w.useContext(Ne), {matches: s} = w.useContext(ge),
        i = s[s.length - 1],
        c = i
            ? i.params
            : {};
    i && i.pathname;
    let d = i
        ? i.pathnameBase
        : "/";
    i && i.route;
    let g = jt(),
        p;
    p = g;
    let f = p.pathname || "/",
        v = f;
    if (d !== "/") {
        let E = d
            .replace(/^\//, "")
            .split("/");
        v = "/" + f
            .replace(/^\//, "")
            .split("/")
            .slice(E.length)
            .join("/")
    }
    let U = De(e, {pathname: v});
    return $n(U && U.map(E => Object.assign({}, E, {
        params: Object.assign({}, c, E.params),
        pathname: pe([
            d, a.encodeLocation
                ? a
                    .encodeLocation(E.pathname)
                    .pathname
                : E.pathname
        ]),
        pathnameBase: E.pathnameBase === "/"
            ? d
            : pe([
                d, a.encodeLocation
                    ? a
                        .encodeLocation(E.pathnameBase)
                        .pathname
                    : E.pathnameBase
            ])
    })), s, r, n)
}
function kn() {
    let e = Jn(),
        t = ct(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
                ? e.message
                : JSON.stringify(e),
        r = e instanceof Error
            ? e.stack
            : null,
        a = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
    return w.createElement(
        w.Fragment,
        null,
        w.createElement("h2", null, "Unexpected Application Error!"),
        w.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, t),
        r
            ? w.createElement("pre", {
                style: a
            }, r)
            : null,
        null
    )
}
const Hn = w.createElement(kn, null);
class Kn extends w.Component {
    constructor(t) {
        super(t),
        this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {error: t}
    }
    static getDerivedStateFromProps(t, r) {
        return r.location !== t.location || r.revalidation !== "idle" && t.revalidation === "idle"
            ? {
                error: t.error,
                location: t.location,
                revalidation: t.revalidation
            }
            : {
                error: t.error !== void 0
                    ? t.error
                    : r.error,
                location: r.location,
                revalidation: t.revalidation || r.revalidation
            }
    }
    componentDidCatch(t, r) {
        console.error("React Router caught the following error during render", t, r)
    }
    render() {
        return this.state.error !== void 0
            ? w.createElement(ge.Provider, {
                value: this.props.routeContext
            }, w.createElement(br.Provider, {
                value: this.state.error,
                children: this.props.component
            }))
            : this.props.children
    }
}
function Wn(e) {
    let {routeContext: t, match: r, children: n} = e,
        a = w.useContext(Ct);
    return a && a.static && a.staticContext && (
        r.route.errorElement || r.route.ErrorBoundary
    ) && (a.staticContext._deepestRenderedBoundaryId = r.route.id),
    w.createElement(ge.Provider, {
        value: t
    }, n)
}
function $n(e, t, r, n) {
    var a;
    if (
        t === void 0 && (t = []),
        r === void 0 && (r = null),
        n === void 0 && (n = null),
        e == null
    ) {
        var s;
        if ((s = r) != null && s.errors) 
            e = r.matches;
        else 
            return null
    }
    let i = e,
        c = (a = r) == null
            ? void 0
            : a.errors;
    if (c != null) {
        let p = i.findIndex(f => f.route.id && (
            c == null
                ? void 0
                : c[f.route.id]
        ) !== void 0);
        p >= 0 || L(!1),
        i = i.slice(0, Math.min(i.length, p + 1))
    }
    let d = !1,
        g = -1;
    if (r && n && n.v7_partialHydration) 
        for (let p = 0; p < i.length; p++) {
            let f = i[p];
            if (
                (f.route.HydrateFallback || f.route.hydrateFallbackElement) && (g = p),
                f.route.id
            ) {
                let {loaderData: v, errors: U} = r,
                    S = f.route.loader && v[f.route.id] === void 0 && (
                        !U || U[f.route.id] === void 0
                    );
                if (f.route.lazy || S) {
                    d = !0,
                    g >= 0
                        ? i = i.slice(0, g + 1)
                        : i = [i[0]];
                    break
                }
            }
        }
    return i.reduceRight((p, f, v) => {
        let U,
            S = !1,
            E = null,
            M = null;
        r && (
            U = c && f.route.id
                ? c[f.route.id]
                : void 0,
            E = f.route.errorElement || Hn,
            d && (
                g < 0 && v === 0
                    ? (S = !0, M = null)
                    : g === v && (S = !0, M = f.route.hydrateFallbackElement || null)
            )
        );
        let z = t.concat(i.slice(0, v + 1)),
            F = () => {
                let Y;
                return U
                    ? Y = E
                    : S
                        ? Y = M
                        : f.route.Component
                            ? Y = w.createElement(f.route.Component, null)
                            : f.route.element
                                ? Y = f.route.element
                                : Y = p,
                w.createElement(Wn, {
                    match: f,
                    routeContext: {
                        outlet: p,
                        matches: z,
                        isDataRoute: r != null
                    },
                    children: Y
                })
            };
        return r && (f.route.ErrorBoundary || f.route.errorElement || v === 0)
            ? w.createElement(Kn, {
                location: r.location,
                revalidation: r.revalidation,
                component: E,
                error: U,
                children: F(),
                routeContext: {
                    outlet: null,
                    matches: z,
                    isDataRoute: !0
                }
            })
            : F()
    }, null)
}
var Ut = function (e) {
        return e.UseBlocker = "useBlocker",
        e.UseRevalidator = "useRevalidator",
        e.UseNavigateStable = "useNavigate",
        e
    }(Ut || {}),
    ie = function (e) {
        return e.UseBlocker = "useBlocker",
        e.UseLoaderData = "useLoaderData",
        e.UseActionData = "useActionData",
        e.UseRouteError = "useRouteError",
        e.UseNavigation = "useNavigation",
        e.UseRouteLoaderData = "useRouteLoaderData",
        e.UseMatches = "useMatches",
        e.UseRevalidator = "useRevalidator",
        e.UseNavigateStable = "useNavigate",
        e.UseRouteId = "useRouteId",
        e
    }(ie || {});
function Er(e) {
    let t = w.useContext(Ct);
    return t || L(!1),
    t
}
function Ie(e) {
    let t = w.useContext(An);
    return t || L(!1),
    t
}
function Vn(e) {
    let t = w.useContext(ge);
    return t || L(!1),
    t
}
function ft(e) {
    let t = Vn(),
        r = t.matches[t.matches.length - 1];
    return r.route.id || L(!1),
    r.route.id
}
function sa() {
    return ft(ie.UseRouteId)
}
function ua() {
    return Ie(ie.UseNavigation).navigation
}
function da() {
    let e = Er(Ut.UseRevalidator),
        t = Ie(ie.UseRevalidator);
    return w.useMemo(
        () => ({revalidate: e.router.revalidate, state: t.revalidation}),
        [e.router.revalidate, t.revalidation]
    )
}
function ca() {
    let {matches: e, loaderData: t} = Ie(ie.UseMatches);
    return w.useMemo(() => e.map(r => lr(r, t)), [e, t])
}
function fa() {
    let e = Ie(ie.UseLoaderData),
        t = ft(ie.UseLoaderData);
    if (e.errors && e.errors[t] != null) {
        console.error(
            "You cannot `useLoaderData` in an errorElement (routeId: " + t + ")"
        );
        return
    }
    return e.loaderData[t]
}
function ha(e) {
    return Ie(ie.UseRouteLoaderData).loaderData[e]
}
function Jn() {
    var e;
    let t = w.useContext(br),
        r = Ie(ie.UseRouteError),
        n = ft(ie.UseRouteError);
    return t !== void 0
        ? t
        : (e = r.errors) == null
            ? void 0
            : e[n]
}
function Yn() {
    let e = w.useContext(dt);
    return e == null
        ? void 0
        : e._data
}
function ma() {
    let e = w.useContext(dt);
    return e == null
        ? void 0
        : e._error
}
function Gn() {
    let {router: e} = Er(Ut.UseNavigateStable),
        t = ft(ie.UseNavigateStable),
        r = w.useRef(!1);
    return wr(() => {
        r.current = !0
    }),
    w.useCallback(function (a, s) {
        s === void 0 && (s = {}),
        r.current && (
            typeof a == "number"
                ? e.navigate(a)
                : e.navigate(a, ut({
                    fromRouteId: t
                }, s))
        )
    }, [e, t])
}
function pa(e) {
    return Bn(e.context)
}
function ga(e) {
    let {
        basename: t = "/",
        children: r = null,
        location: n,
        navigationType: a = $.Pop,
        navigator: s,
        static: i = !1,
        future: c
    } = e;
    Ze() && L(!1);
    let d = t.replace(/^\/*/, "/"),
        g = w.useMemo(() => ({
            basename: d,
            navigator: s,
            static: i,
            future: ut({
                v7_relativeSplatPath: !1
            }, c)
        }), [d, c, s, i]);
    typeof n == "string" && (n = Ee(n));
    let {
            pathname: p = "/",
            search: f = "",
            hash: v = "",
            state: U = null,
            key: S = "default"
        } = n,
        E = w.useMemo(() => {
            let M = Qe(p, d);
            return M == null
                ? null
                : {
                    location: {
                        pathname: M,
                        search: f,
                        hash: v,
                        state: U,
                        key: S
                    },
                    navigationType: a
                }
        }, [
            d,
            p,
            f,
            v,
            U,
            S,
            a
        ]);
    return E == null
        ? null
        : w.createElement(Ne.Provider, {
            value: g
        }, w.createElement(Lt.Provider, {
            children: r,
            value: E
        }))
}
function va(e) {
    let {children: t, errorElement: r, resolve: n} = e;
    return w.createElement(Qn, {
        resolve: n,
        errorElement: r
    }, w.createElement(Zn, null, t))
}
var ae = function (e) {
    return e[e.pending = 0] = "pending",
    e[e.success = 1] = "success",
    e[e.error = 2] = "error",
    e
}(ae || {});
const Xn = new Promise(() => {});
class Qn extends w.Component {
    constructor(t) {
        super(t),
        this.state = {
            error: null
        }
    }
    static getDerivedStateFromError(t) {
        return {error: t}
    }
    componentDidCatch(t, r) {
        console.error("<Await> caught the following error during render", t, r)
    }
    render() {
        let {children: t, errorElement: r, resolve: n} = this.props,
            a = null,
            s = ae.pending;
        if (!(n instanceof Promise)) 
            s = ae.success,
            a = Promise.resolve(),
            Object.defineProperty(a, "_tracked", {
                get: () => !0
            }),
            Object.defineProperty(a, "_data", {
                get: () => n
            });
        else if (this.state.error) {
            s = ae.error;
            let i = this.state.error;
            a = Promise
                .reject()
                .catch(() => {}),
            Object.defineProperty(a, "_tracked", {
                get: () => !0
            }),
            Object.defineProperty(a, "_error", {
                get: () => i
            })
        } else 
            n._tracked
                ? (
                    a = n,
                    s = "_error" in a
                        ? ae.error
                        : "_data" in a
                            ? ae.success
                            : ae.pending
                )
                : (s = ae.pending, Object.defineProperty(n, "_tracked", {
                    get: () => !0
                }), a = n.then(i => Object.defineProperty(n, "_data", {
                    get: () => i
                }), i => Object.defineProperty(n, "_error", {
                    get: () => i
                })));
        if (s === ae.error && a._error instanceof Et) 
            throw Xn;
        if (s === ae.error && !r) 
            throw a._error;
        if (s === ae.error) 
            return w.createElement(dt.Provider, {
                value: a,
                children: r
            });
        if (s === ae.success) 
            return w.createElement(dt.Provider, {
                value: a,
                children: t
            });
        throw a
    }
}
function Zn(e) {
    let {children: t} = e,
        r = Yn(),
        n = typeof t == "function"
            ? t(r)
            : t;
    return w.createElement(w.Fragment, null, n)
}
function ya(e) {
    let t = {
        hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
    };
    return e.Component && Object.assign(t, {
        element: w.createElement(e.Component),
        Component: void 0
    }),
    e.HydrateFallback && Object.assign(t, {
        hydrateFallbackElement: w.createElement(e.HydrateFallback),
        HydrateFallback: void 0
    }),
    e.ErrorBoundary && Object.assign(t, {
        errorElement: w.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0
    }),
    t
}
export {
    Et as A,
    ma as B,
    fa as C,
    Ct as D,
    cr as E,
    ha as F,
    va as G,
    pn as I,
    Ne as N,
    pa as O,
    ga as R,
    ia as a,
    jt as b,
    da as c,
    na as d,
    ea as e,
    ya as f,
    An as g,
    la as h,
    aa as i,
    zn as j,
    Xe as k,
    ge as l,
    De as m,
    L as n,
    ca as o,
    ua as p,
    sa as q,
    pe as r,
    Qe as s,
    Jt as t,
    oa as u,
    Ee as v,
    ta as w,
    ra as x,
    ct as y,
    Jn as z
};
