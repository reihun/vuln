import {j as c} from "./jsx-runtime-Cw0GR0a5.js";
import "./index-CTjT7uj6.js";
import {
    f as B,
    u as b,
    b as R,
    B as g,
    c as G,
    p as w,
    U as L,
    e as T,
    g as U
} from "./UnstyledButton-BCeARHkQ.js";
import {T as $, L as k} from "./Loader-RyomCy-s.js";
import {r as D} from "./MantineThemeProvider-3M_stbLm.js";
var l = {
    root: "m_8d3f4000",
    icon: "m_8d3afb97",
    loader: "m_302b9fb1",
    group: "m_1a0f1b21"
};
const z = {
        orientation: "horizontal"
    },
    E = G((o, {borderWidth: e}) => ({
        group: {
            "--ai-border-width": D(e)
        }
    })),
    f = B((o, e) => {
        const t = b("ActionIconGroup", z, o), {
                className: s,
                style: n,
                classNames: r,
                styles: d,
                unstyled: a,
                orientation: p,
                vars: i,
                borderWidth: x,
                variant: m,
                mod: A,
                ...I
            } = b("ActionIconGroup", z, o),
            u = R({
                name: "ActionIconGroup",
                props: t,
                classes: l,
                className: s,
                style: n,
                classNames: r,
                styles: d,
                unstyled: a,
                vars: i,
                varsResolver: E,
                rootSelector: "group"
            });
        return c.jsx(g, {
            ...u("group"),
            ref: e,
            variant: m,
            mod: [
                {
                    "data-orientation": p
                },
                A
            ],
            role: "group",
            ...I
        })
    });
f.classes = l;
f.displayName = "@mantine/core/ActionIconGroup";
const F = {},
    V = G((o, {
        size: e,
        radius: t,
        variant: s,
        gradient: n,
        color: r,
        autoContrast: d
    }) => {
        const a = o.variantColorResolver({
            color: r || o.primaryColor,
            theme: o,
            gradient: n,
            variant: s || "filled",
            autoContrast: d
        });
        return {
            root: {
                "--ai-size": T(e, "ai-size"),
                "--ai-radius": t === void 0
                    ? void 0
                    : U(t),
                "--ai-bg": r || s
                    ? a.background
                    : void 0,
                "--ai-hover": r || s
                    ? a.hover
                    : void 0,
                "--ai-hover-color": r || s
                    ? a.hoverColor
                    : void 0,
                "--ai-color": a.color,
                "--ai-bd": r || s
                    ? a.border
                    : void 0
            }
        }
    }),
    h = w((o, e) => {
        const t = b("ActionIcon", F, o), {
                className: s,
                unstyled: n,
                variant: r,
                classNames: d,
                styles: a,
                style: p,
                loading: i,
                loaderProps: x,
                size: m,
                color: A,
                radius: I,
                __staticSelector: u,
                gradient: W,
                vars: N,
                children: S,
                disabled: v,
                "data-disabled": j,
                autoContrast: q,
                mod: _,
                ...C
            } = t,
            y = R({
                name: [
                    "ActionIcon", u
                ],
                props: t,
                className: s,
                style: p,
                classes: l,
                classNames: d,
                styles: a,
                unstyled: n,
                vars: N,
                varsResolver: V
            });
        return c.jsxs(L, {
            ...y("root", {
                active: !v && !i && !j
            }),
            ...C,
            unstyled: n,
            variant: r,
            size: m,
            disabled: v || i,
            ref: e,
            mod: [
                {
                    loading: i,
                    disabled: v || j
                },
                _
            ],
            children: [
                c.jsx($, {
                    mounted: !!i,
                    transition: "slide-down",
                    duration: 150,
                    children: P => c.jsx(g, {
                        component: "span",
                        ...y("loader", {style: P}),
                        "aria-hidden": !0,
                        children: c.jsx(k, {
                            color: "var(--ai-color)",
                            size: "calc(var(--ai-size) * 0.55)",
                            ...x
                        })
                    })
                }),
                c.jsx(g, {
                    component: "span",
                    mod: {
                        loading: i
                    },
                    ...y("icon"),
                    children: S
                })
            ]
        })
    });
h.classes = l;
h.displayName = "@mantine/core/ActionIcon";
h.Group = f;
export {
    h as A
};
