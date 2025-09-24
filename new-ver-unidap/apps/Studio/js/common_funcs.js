function getRandomStr() {
    for (
        var e = 0 < arguments.length && void 0 !== arguments[0]
            ? arguments[0]
            : 4,
        t = "",
        r = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        n = r.length,
        s = 0; s < e; s++
    ) 
        t += r.charAt(Math.floor(Math.random() * n));
    return t + getUnixTime()
}
function getUnixTime() {
    return Math.round(+new Date / 1e3)
}
function addItem(e, t, r) {
    let n = t.cloneNode(!0);
    n
        .classList
        .remove("template"),
    n.style.display = "block";
    t = n.querySelector(".remove_item button.remove");
    return t
        ? (t.addEventListener("click", () => {
            r && r(),
            n.remove()
        }), e.appendChild(n))
        : e.appendChild(n),
    n
}
function hideAllElements(e, t, r) {
    let n = 3 < arguments.length && void 0 !== arguments[3]
        ? arguments[3]
        : null;
    for (var s = t; s < r.length; s++) 
        e
            .querySelectorAll(r[s])
            .forEach(e => {
                var t = e.style.display;
                "none" !== t && (e.setAttribute("org_display", t), n) && e.dispatchEvent(
                    new Event(n)
                ),
                e.style.display = "none"
            })
    }
function registerValuesAndTools(t, e, r, l) {
    e.forEach(e => {
        t
            .querySelectorAll(e)
            .forEach(s => {
                var e = s.getAttribute("tools"),
                    e = (e && e.split(",").forEach(e => {
                        let n = window._global_tools[e.trim()];
                        n && n.getInstance(s, t.querySelector(".tool"), l, {
                            input: () => s.value,
                            output: e => {
                                var t,
                                    r;
                                "path_builder" === n.comName && (
                                    {frameInfo: t, selectors: r, selectorStr: e} = e,
                                    s.value = e
                                )
                            }
                        }, !1, null, r)
                    }), s.getAttribute("values"));
                e && (e = window._global_values[e.trim()]) && e.getInstance(s, r)
            })
    })
}
function registerParentChildEvent(r, n) {
    let s = 2 < arguments.length && void 0 !== arguments[2]
            ? arguments[2]
            : "inline",
        l = 3 < arguments.length && void 0 !== arguments[3]
            ? arguments[3]
            : null;
    for (var o = 0; o < n.length; o++) {
        var e = r.querySelectorAll(n[o]);
        if (!e.length) 
            return;
        e.forEach(t => {
            if ("select" === t.localName) {
                let e = o;
                t.addEventListener("change", function () {
                    hideAllElements(
                        r,
                        e + 1,
                        n,
                        l
                            ?.hide
                    ),
                    showChilds(
                        r,
                        t,
                        e,
                        n,
                        s,
                        null,
                        l
                            ?.show
                    )
                })
            }
        })
    }
}
function showChilds(r, e, n, s, l, t) {
    let o = 6 < arguments.length && void 0 !== arguments[6]
        ? arguments[6]
        : null;
    if (n != s.length) {
        var a = t;
        if (
            "select" === e
                ?.localName
        ) {
            if (!e.value || 0 == e.value.length) 
                return;
            a = e.value
        }
        t = null;
        try {
            t = r.querySelectorAll(s[n + 1] + "." + a)
        } catch (e) {}
        t
            ?.forEach(e => {
                var t = e.getAttribute("org_display");
                t && (l = t),
                e.style.display = l,
                showChilds(r, e, n + 1, s, l, a, o),
                o && e.dispatchEvent(new Event(o))
            }),
        0 == t
            ?.length && showChilds(r, null, n + 1, s, l, a, o)
    }
}
function renderValue(r, e) {
    r && e.forEach(e => {
        var t = r.querySelector(e[0]);
        t && (
            "input" === t.localName && "checkbox" === t.getAttribute("type")
                ? t.checked = e[1]
                : e[1] && 0 != e[1].length && (t.value = e[1])
        )
    })
}
async function getBrowserURL(e) {
    e = await _udap_sendMessage({cmd: "_udap_getCurrentURL", tabId: e});
    return e
        ? new URL(e)
        : null
}
function _parent_postMessage(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1]
        ? arguments[1]
        : null;
    e.dst = chrome.runtime.id,
    t
        ? chrome
            .tabs
            .sendMessage(t, e)
        : parent.postMessage(e, "*")
}
function sendMessageToBackground(e) {
    return new Promise((t, r) => {
        chrome
            .runtime
            .sendMessage(e, e => {
                chrome.runtime.lastError
                    ? r(chrome.runtime.lastError)
                    : t(e)
            })
    })
}
function _udap_sendMessage(e) {
    if (0 != (!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1])) 
        return new Promise((t, r) => {
            chrome
                .runtime
                .sendMessage(e, e => {
                    void 0 !== e
                        ? (401 === e.statusCode && chrome.runtime.sendMessage({
                            cmd: "_udap_removeAuthCookies"
                        }, async e => {
                            await sendMessageToBackground({cmd: "_udap_openAuthWindow"})
                        }), t(e))
                        : r(!1)
                })
        });
    chrome
        .runtime
        .sendMessage(e)
}
function includeHTML() {
    for (
        var e,
        t,
        r,
        n = document.getElementsByTagName("*"),
        s = 0;
        s < n.length;
        s++
    ) 
        if (t = (e = n[s]).getAttribute("_udap_src")) 
            return (r = new XMLHttpRequest).onreadystatechange = function () {
                4 == this.readyState && (
                    200 == this.status && (e.innerHTML = this.responseText),
                    404 == this.status && (e.innerHTML = "Page not found."),
                    e.removeAttribute("_udap_src"),
                    includeHTML()
                )
            }
        ,
    r.open("GET", t, !0),
    void r.send()
}
let cssUrls = [];
function loadCssFile(e) {
    var t;
    cssUrls.includes(e) || (
        cssUrls.push(e),
        (t = document.createElement("link")).href = e,
        t.rel = "stylesheet",
        document.head.append(t)
    )
}
function injectHTML(n, s) {
    return new Promise((e, t) => {
        var r = new XMLHttpRequest;
        r.onreadystatechange = function () {
            4 == this.readyState && (
                200 == this.status && (n.innerHTML = this.responseText, e()),
                404 == this.status
            ) && (n.innerHTML = "Page not found.", t())
        },
        r.open("GET", s, !0),
        r.send()
    })
}
function elementInViewport(e) {
    e = e.getBoundingClientRect();
    return 0 <= e.top && 0 <= e.left && e.bottom + 80 <= window.innerHeight && e.right <= window.innerWidth
}
let operator_processing = [
    [
        "equals",
        (e, t) => e == t
    ],
    [
        "contains",
        (e, t) => e.includes(t)
    ],
    [
        "not_contain",
        (e, t) => !e.includes(t)
    ],
    [
        "starts_with",
        (e, t) => e.startsWith(t)
    ],
    [
        "ends_with",
        (e, t) => e.endsWith(t)
    ],
    [
        "regex",
        (e, t) => new RegExp(t).test(e)
    ],
    [
        "wildcard",
        (e, t) => new RegExp("^" + t.replace(/\?/g, ".").replace(/\*/g, ".*") + "$").test(
            e
        )
    ]
];
function matching(e, t, r) {
    for (var n = 0; n < operator_processing.length; n++) 
        if (operator_processing[n][0] === t) 
            return operator_processing[n][1](e, r);
return !1
}
function replaceRule(e, t, r) {
    var n,
        s = new DOMParser,
        l = window
            .trustedTypes
            .createPolicy("forceInner", {
                createHTML: e => e
            });
    let o = "",
        a = !1;
    for (
        n of s.parseFromString(l.createHTML("<style>" + e + "</style>"), "text/html").querySelector("style").sheet.cssRules
    ) 
        n.type === CSSRule.STYLE_RULE && n
            .selectorText
            .trim() === t || n
            .type === CSSRule
            .KEYFRAMES_RULE && t === "@keyframes " + n.name
                ? (o += t + `  ${r} `, a = !0)
                : o += n.cssText + " ";
    return a || (o += t + ` ${r} `),
    o.trim()
}
function disableStyleElement(e) {
    e = document.getElementById(e);
    e && (e.disabled = !0)
}
function enableStyleElement(e) {
    e = document.getElementById(e);
    e && (e.disabled = !1)
}
function parseCSS(e) {
    var t,
        r = new DOMParser,
        n = window
            .trustedTypes
            .createPolicy("forceInner", {
                createHTML: e => e
            }),
        s = {};
    for (
        t of r.parseFromString(n.createHTML("<style>" + e + "</style>"), "text/html").querySelector("style").sheet.cssRules
    ) 
        if (t.type === CSSRule.STYLE_RULE) {
            var l = t.selectorText,
                o = t
                    .cssText
                    .indexOf("{");
            let e = "";
            -1 !== o && (e = t.cssText.substring(o)),
            s[l] = e
        }
    else if (t.type === CSSRule.KEYFRAMES_RULE) {
        o = t
            .cssText
            .indexOf("{");
        let e = "";
        -1 !== o && (e = t.cssText.substring(o)),
        s["@keyframes " + t.name] = e
    }
    return s
}
function extractCSSRuleValueFromText(e, t) {
    var e = (new DOMParser)
            .parseFromString(
                "<style>" + e + "</style>",
                "text/html"
            )
            .querySelector("style")
            .sheet,
        r = e.cssRules || e.rules;
    for (let e = 0; e < r.length; e++) {
        var n = r[e];
        if (n.type === CSSRule.STYLE_RULE) {
            n = n
                .style
                .getPropertyValue(t);
            if (n) 
                return n
        }
    }
    return null
}
function updateCSSRule(e) {
    var t,
        r,
        n = 1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : "",
        s = 2 < arguments.length
            ? arguments[2]
            : void 0,
        l = 3 < arguments.length
            ? arguments[3]
            : void 0;
    let o = "";
    for (
        t of(new DOMParser).parseFromString("<style>" + e + "</style>", "text/html").querySelector("style").sheet.cssRules
    ) 
        t.type === CSSRule.STYLE_RULE && (
            r = t.selectorText,
            ("" === n || r.includes(
                ":" + n
            )) && t.style.getPropertyValue(s) && (r = "important" === t.style.getPropertyPriority(s), t.style.setProperty(
                s,
                l,
                r
                    ? "important"
                    : ""
            )),
            o += t.cssText + " "
        );
    return o.trim()
}
function updateCSSKeyframeRule(e, t, r, n, s) {
    var l;
    let o = "";
    for (
        l of(new DOMParser).parseFromString("<style>" + e + "</style>", "text/html").querySelector("style").sheet.cssRules
    ) {
        if (l.type === CSSRule.KEYFRAMES_RULE && l.name === t) 
            for (var a of l.cssRules) 
                a.keyText === r && a
                    .style
                    .setProperty(n, s);
        o += l.cssText + " "
    }
    return o.trim()
}
function cssColorToRgba(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : 1,
        r = document.createElement("div"),
        e = (
            r.style.color = e,
            document.body.appendChild(r),
            window.getComputedStyle(r).color
        ),
        r = (document.body.removeChild(r), e.match(/\d+/g).map(Number));
    return `rgba(${r[0]}, ${r[1]}, ${r[2]}, ${t})`
}
async function minifyCSS(t) {
    try {
        return (await less.render(t))
            .css
            .trim()
    } catch (e) {
        return console.warn(
            "LESS minify failed, fallback to manual minify:",
            e.message
        ),
        t
            .replace(/\/\*[\s\S]*?\*\//g, "")
            .replace(/\s*([{}:;,])\s*/g, "$1")
            .replace(/\s+/g, " ")
            .replace(/\n/g, "")
            .trim()
    }
}
function unwrapCss(e, t) {
    t = new RegExp(`^\\.${t}\\s*\\{([\\s\\S]*)\\}$`),
    t = e.match(t);
    return t
        ? t[1].trim()
        : e
}
function getTemplateId(e) {
    e = e.querySelector("select.style_templates");
    return !e || "" === e.value
        ? void 0
        : e.value
}
function generateClassName(e) {
    return e + "-" + Math
        .random()
        .toString(36)
        .substring(2, 8)
}
async function getClassNameFromExisting(e, t, r) {
    if (e && "string" == typeof e) 
        return (e = e.match(new RegExp(`\\.${t}-[a-z0-9]{6}`, "g")))
            ? e[0].replace(".", "")
            : void 0;
    if (r) {
        e = await _udap_sendMessage({cmd: "_udap_getStyle", endpoint: r});
        if (
            e.result && e.data
                ?.css
        ) 
            return (r = e.data.css.match(new RegExp(`\\.${t}-[a-z0-9]{6}`, "g")))
                ? r[0].replace(".", "")
                : void 0
        }
}