import {j as e} from "./jsx-runtime-Cw0GR0a5.js";
import {r as _} from "./MantineThemeProvider-3M_stbLm.js";
import "./index-CTjT7uj6.js";
import {
    f as D,
    u as y,
    b as P,
    B as p,
    c as C,
    p as E,
    U as O,
    e as R,
    h as G,
    g as V
} from "./UnstyledButton-BCeARHkQ.js";
import {T as q, L as A} from "./Loader-RyomCy-s.js";
var h = {
    root: "m_77c9d27d",
    inner: "m_80f1301b",
    label: "m_811560b9",
    section: "m_a74036a",
    loader: "m_a25b86ee",
    group: "m_80d6d844"
};
const N = {
        orientation: "horizontal"
    },
    H = C((r, {borderWidth: a}) => ({
        group: {
            "--button-border-width": _(a)
        }
    })),
    f = D((r, a) => {
        const t = y("ButtonGroup", N, r), {
                className: d,
                style: s,
                classNames: o,
                styles: m,
                unstyled: i,
                orientation: n,
                vars: u,
                borderWidth: b,
                variant: g,
                mod: v,
                ...B
            } = y("ButtonGroup", N, r),
            c = P({
                name: "ButtonGroup",
                props: t,
                classes: h,
                className: d,
                style: s,
                classNames: o,
                styles: m,
                unstyled: i,
                vars: u,
                varsResolver: H,
                rootSelector: "group"
            });
        return e.jsx(p, {
            ...c("group"),
            ref: a,
            variant: g,
            mod: [
                {
                    "data-orientation": n
                },
                v
            ],
            role: "group",
            ...B
        })
    });
f.classes = h;
f.displayName = "@mantine/core/ButtonGroup";
const I = { in: {
            opacity: 1,
            transform: `translate(-50%, calc(-50% + ${_(1)}))`
        },
        out: {
            opacity: 0,
            transform: "translate(-50%, -200%)"
        },
        common: {
            transformOrigin: "center"
        },
        transitionProperty: "transform, opacity"
    },
    J = {},
    K = C((r, {
        radius: a,
        color: t,
        gradient: d,
        variant: s,
        size: o,
        justify: m,
        autoContrast: i
    }) => {
        const n = r.variantColorResolver({
            color: t || r.primaryColor,
            theme: r,
            gradient: d,
            variant: s || "filled",
            autoContrast: i
        });
        return {
            root: {
                "--button-justify": m,
                "--button-height": R(o, "button-height"),
                "--button-padding-x": R(o, "button-padding-x"),
                "--button-fz": o != null && o.includes("compact")
                    ? G(o.replace("compact-", ""))
                    : G(o),
                "--button-radius": a === void 0
                    ? void 0
                    : V(a),
                "--button-bg": t || s
                    ? n.background
                    : void 0,
                "--button-hover": t || s
                    ? n.hover
                    : void 0,
                "--button-color": n.color,
                "--button-bd": t || s
                    ? n.border
                    : void 0,
                "--button-hover-color": t || s
                    ? n.hoverColor
                    : void 0
            }
        }
    }),
    x = E((r, a) => {
        const t = y("Button", J, r), {
                style: d,
                vars: s,
                className: o,
                color: m,
                disabled: i,
                children: n,
                leftSection: u,
                rightSection: b,
                fullWidth: g,
                variant: v,
                radius: B,
                loading: c,
                loaderProps: w,
                gradient: M,
                classNames: L,
                styles: T,
                unstyled: j,
                "data-disabled": S,
                autoContrast: Q,
                mod: $,
                ...k
            } = t,
            l = P({
                name: "Button",
                props: t,
                classes: h,
                className: o,
                style: d,
                classNames: L,
                styles: T,
                unstyled: j,
                vars: s,
                varsResolver: K
            }),
            F = !!u,
            U = !!b;
        return e.jsxs(O, {
            ref: a,
            ...l("root", {
                active: !i && !c && !S
            }),
            unstyled: j,
            variant: v,
            disabled: i || c,
            mod: [
                {
                    disabled: i || S,
                    loading: c,
                    block: g,
                    "with-left-section": F,
                    "with-right-section": U
                },
                $
            ],
            ...k,
            children: [
                e.jsx(q, {
                    mounted: !!c,
                    transition: I,
                    duration: 150,
                    children: W => e.jsx(p, {
                        component: "span",
                        ...l("loader", {style: W}),
                        "aria-hidden": !0,
                        children: e.jsx(A, {
                            color: "var(--button-color)",
                            size: "calc(var(--button-height) / 1.8)",
                            ...w
                        })
                    })
                }),
                e.jsxs("span", {
                    ...l("inner"),
                    children: [
                        u && e.jsx(p, {
                            component: "span",
                            ...l("section"),
                            mod: {
                                position: "left"
                            },
                            children: u
                        }),
                        e.jsx(p, {
                            component: "span",
                            mod: {
                                loading: c
                            },
                            ...l("label"),
                            children: n
                        }),
                        b && e.jsx(p, {
                            component: "span",
                            ...l("section"),
                            mod: {
                                position: "right"
                            },
                            children: b
                        })
                    ]
                })
            ]
        })
    });
x.classes = h;
x.displayName = "@mantine/core/Button";
x.Group = f;
export {
    x as B
};
