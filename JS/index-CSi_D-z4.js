import {
    b as M,
    c as E,
    p as D,
    d as A,
    w as k,
    s as F
} from "./state-TybVoYdV.js";
import {r as o, R as N} from "./index-CTjT7uj6.js";
import {u as W} from "./index-CYvhTU0u.js";
import {j as R} from "./components-CiY56KLq.js";
import {u as I} from "./use-window-event-CSnPM9MK.js";
function x(e, c = "use-local-storage") {
    try {
        return JSON.stringify(e)
    } catch  {
        throw new Error(`@mantine/hooks ${c}: Failed to serialize the value`)
    }
}
function y(e) {
    try {
        return e && JSON.parse(e)
    } catch  {
        return e
    }
}
function J(e) {
    return {
        getItem: s => {
            try {
                return window[e].getItem(s)
            } catch  {
                return console.warn(
                    "use-local-storage: Failed to get value from storage, localStorage is blocked"
                ),
                null
            }
        },
        setItem: (s, u) => {
            try {
                window[e].setItem(s, u)
            } catch  {
                console.warn(
                    "use-local-storage: Failed to set value to storage, localStorage is blocked"
                )
            }
        },
        removeItem: s => {
            try {
                window[e].removeItem(s)
            } catch  {
                console.warn(
                    "use-local-storage: Failed to remove value from storage, localStorage is blocke" +
                    "d"
                )
            }
        }
    }
}
function L(e, c) {
    const n = "mantine-local-storage", {
            getItem: i,
            setItem: s,
            removeItem: u
        } = J(e);
    return function ({
        key: r,
        defaultValue: a,
        getInitialValueInEffect: l = !0,
        deserialize: d = y,
        serialize: h = g => x(g, c)
    }) {
        const g = o.useCallback(t => {
                let m;
                try {
                    m = typeof window > "u" || !(e in window) || window[e] === null || !!t
                } catch  {
                    m = !0
                }
                if (m) 
                    return a;
                const w = i(r);
                return w !== null
                    ? d(w)
                    : a
            }, [r, a]),
            [S, p] = o.useState(g(l)),
            v = o.useCallback(t => {
                t instanceof Function
                    ? p(m => {
                        const w = t(m);
                        return s(r, h(w)),
                        window.dispatchEvent(new CustomEvent(n, {
                            detail: {
                                key: r,
                                value: t(m)
                            }
                        })),
                        w
                    })
                    : (s(r, h(t)), window.dispatchEvent(new CustomEvent(n, {
                        detail: {
                            key: r,
                            value: t
                        }
                    })), p(t))
            }, [r]),
            C = o.useCallback(() => {
                u(r),
                window.dispatchEvent(new CustomEvent(n, {
                    detail: {
                        key: r,
                        value: a
                    }
                }))
            }, []);
        return I("storage", t => {
            t.storageArea === window[e] && t.key === r && p(d(t.newValue ?? void 0))
        }),
        I(n, t => {
            t.detail.key === r && p(t.detail.value)
        }),
        o.useEffect(() => {
            a !== void 0 && S === void 0 && v(a)
        }, [a, S, v]),
        o.useEffect(() => {
            const t = g();
            t !== void 0 && v(t)
        }, []),
        [
            S === void 0
                ? a
                : S,
            v,
            C
        ]
    }
}
function O(e) {
    return L("localStorage", "use-local-storage")(e)
}
var U = {
    BASE_URL: "/",
    MODE: "production",
    DEV: !1,
    PROD: !0,
    SSR: !1
};
const {use: b} = N, {useSyncExternalStore: $} = W,
    B = (e, c) => {
        const n = o.useRef();
        o.useEffect(() => {
            n.current = k(e, c)
        }),
        o.useDebugValue(n.current)
    },
    P = new WeakMap;
function V(e, c) {
    const i = o.useRef(),
        s = o.useRef();
    let u = !0;
    const f = $(o.useCallback(l => {
        const d = M(e, l);
        return l(),
        d
    }, [e, void 0]), () => {
        const l = E(e, b);
        try {
            if (!u && i.current && s.current && !D(i.current, l, s.current, new WeakMap)) 
                return i.current
        } catch  {}
        return l
    }, () => E(e, b));
    u = !1;
    const r = new WeakMap;
    o.useEffect(() => {
        i.current = f,
        s.current = r
    }),
    (
        U
            ? "production"
            : void 0
    ) !== "production" && B(f, r);
    const a = o.useMemo(() => new WeakMap, []);
    return A(f, r, a, P)
}
const T = () => V(F);
function X() {
    return R("routes/(main)+/c.$category.$id/_$id")
}
const _ = () => R("routes/(main)+/_layout/_layout");
function Y() {
    const e = _();
    return {
        isAdmin: e == null
            ? void 0
            : e.isAdmin,
        isMember: e == null
            ? void 0
            : e.isMember,
        userId: e == null
            ? void 0
            : e.userId,
        userEmail: e == null
            ? void 0
            : e.userEmail
    }
}
function Z() {
    const [e, c, n] = O({key: "userProfile"});
    return {user: e, setUser: c, removeUser: n}
}
export {
    T as a,
    X as b,
    Z as c,
    V as d,
    Y as u
};
