(() => {
        let M = window !== window.parent && !window.opener,
        o = M
                ? parent
                : window,
        p = document
                    .currentScript
                    ?
                    .getAttribute("source-url"),
        h = ["smarttip", "hint", "button", "tooltip"];
        var e,
        t = new URL(document.currentScript.src),
        t = new URLSearchParams(t.search).get("launcherUrl");
        let m = null;
        t && (
            (e = document.createElement("script")).src = t + "?testing=1",
            e.crossOrigin = "",
            document.head.appendChild(e)
        ),
        window.addEventListener("message", async function (e) {
                if (e.data.dst === p) {
                    var t = location.pathname;
                    switch (e.data.cmd) {
                        case "_udap_addSmartTip":
                            e.data.frameInfo && 0 < e.data.frameInfo.value.length && !$(
                                t,
                                e.data.frameInfo.operator,
                                e.data.frameInfo.value
                            ) || ((e, o) => {
                                if (
                                    f || ((f = introJs()).onsmarttipadded(e => {
                                        e.display_on_startup && e
                                            .element
                                            .onclick(),
                                        e.display_when_hover
                                            ? e
                                                .element
                                                .setAttribute("openonhover", "true")
                                            : e
                                                .element
                                                .setAttribute("openonhover", "")
                                    }), f.onshowtooltip(function (t) {
                                        setTimeout(() => {
                                            var e;
                                            "tooltip" === t
                                                ?.onclick_trigger && (
                                                    e = document.querySelector(".introjs-smarttipReference .introjs-tooltip"),
                                                    b(t, e)
                                                )
                                        }, 0)
                                    })),
                                    "object" == typeof e[0].element
                                ) {
                                    var t = k(e[0].element);
                                    if (!t) 
                                        return;
                                    t.snapshotLength
                                        ? e[0].element = t.snapshotItem(0)
                                        : e[0].element = t[0]
                                }
                                w(f),
                                f.setOptions({smarttips: e}),
                                o && f.onsmarttipclick((e, t, n) => {
                                    if (t) 
                                        switch (t.onclick_trigger) {
                                            case "popup":
                                            case "workflow":
                                                E(o)
                                        }
                                    }),
                                f.addSmartTips()
                            })(e.data.data, e.data.trigger_content);
                            break;
                        case "_udap_addHint": e.data.frameInfo && 0 < e.data.frameInfo.value.length && !$(
                                t,
                                e.data.frameInfo.operator,
                                e.data.frameInfo.value
                            ) || ((e, o) => {
                                if (f || (
                                    (f = introJs()).onhintadded(e => {
                                        e.display_on_startup && e
                                            .element
                                            .onclick(),
                                        e.display_when_hover && e
                                            .element
                                            .setAttribute("openonhover", "true")
                                    }),
                                    f.onhintclose(function (e) {}),
                                    f.onshowtooltip(function (e, t, n) {
                                        "tooltip" === e
                                            ?.onclick_trigger && b(e, n)
                                    })
                                ), w(f), "object" == typeof e[0].element) {
                                    var t = k(e[0].element);
                                    if (!t) 
                                        return;
                                    t.snapshotLength
                                        ? e[0].element = t.snapshotItem(0)
                                        : e[0].element = t[0]
                                }
                                f.setOptions({hints: e}),
                                o && f.onhintclick((e, t, n) => {
                                    if (t) 
                                        switch (t.onclick_trigger) {
                                            case "popup":
                                            case "workflow":
                                                E(o)
                                        }
                                    }),
                                f.addHints()
                            })(e.data.data, e.data.trigger_content);
                            break;
                        case "_udap_addCustomContent": if (!(e.data.frameInfo && 0 < e.data.frameInfo.value.length) || $(t, e.data.frameInfo.operator, e.data.frameInfo.value)) {
                                var n,
                                    o = e
                                        .data
                                        .data[0];
                                if ("object" == typeof o.element) {
                                    let e = k(o.element);
                                    (e = e && (
                                        e.snapshotLength
                                            ? e.snapshotItem(0)
                                            : e[0]
                                    )) && (
                                        n = "_udap_content_" + o.content_id,
                                        e.classList.contains(n) || e.classList.add(n),
                                        ((e, t) => {
                                            let n = document.querySelector("#" + e);
                                            n || (
                                                (n = document.createElement("style")).id = e,
                                                document.head.appendChild(n)
                                            ),
                                            n.textContent = t
                                        })("dap_customContent", o.css)
                                    )
                                }
                            }
                            break;
                        case "_udap_applyCustomStyle": n = e.data.data.elementType,
                            o = e.data.data.cssText,
                            h.includes(n)
                                ? (async (e, t, n) => {
                                    A("introjs_ext_DAPCustomStyle");
                                    let o = t.querySelector(`#introjs_${n}_CustomStyle`);
                                    o
                                        ? (o.disabled = !1, o.textContent = e)
                                        : (
                                            (o = t.createElement("style")).id = `introjs_${n}_CustomStyle`,
                                            o.textContent = e,
                                            t.head.appendChild(o)
                                        )
                                })(o, document, n)
                                : (async (t, e) => {
                                        A("introjs_ext_CustomStyle");
                                        let n = e.querySelector("#introjs_CustomStyle");
                                        if (n) {
                                            let e = n.textContent;
                                            var o,
                                                a = (e => {
                                                    var t,
                                                        n = new DOMParser,
                                                        o = window
                                                            .trustedTypes
                                                            .createPolicy("forceInner", {
                                                                createHTML: e => e
                                                            }),
                                                        o = (
                                                            n = n.parseFromString(o.createHTML("<style>" + e + "</style>"), "text/html")
                                                        )
                                                            .querySelector("style")
                                                            .sheet,
                                                        a = {};
                                                    for (t of o.cssRules) 
                                                        if (t.type === CSSRule.STYLE_RULE) {
                                                            var r = t.selectorText,
                                                                i = t
                                                                    .cssText
                                                                    .indexOf("{");
                                                            let e = "";
                                                            -1 !== i && (e = t.cssText.substring(i)),
                                                            a[r] = e
                                                        }
                                                    else if (t.type === CSSRule.KEYFRAMES_RULE) {
                                                        i = t
                                                            .cssText
                                                            .indexOf("{");
                                                        let e = "";
                                                        -1 !== i && (e = t.cssText.substring(i)),
                                                        a["@keyframes " + t.name] = e
                                                    }
                                                    return a
                                                })(t);
                                            for (o in a) 
                                                e = ((e, t, n) => {
                                                    let o = new DOMParser,
                                                        a = window
                                                            .trustedTypes
                                                            .createPolicy("forceInner", {
                                                                createHTML: e => e
                                                            }),
                                                        r = o.parseFromString(a.createHTML("<style>" + e + "</style>"), "text/html"),
                                                        i = r
                                                            .querySelector("style")
                                                            .sheet,
                                                        l = "",
                                                        s = !1;
                                                    for (var u of i.cssRules) 
                                                        u.type === CSSRule.STYLE_RULE && u
                                                            .selectorText
                                                            .trim() === t || u
                                                            .type === CSSRule
                                                            .KEYFRAMES_RULE && t === "@keyframes " + u.name
                                                                ? (l += t + `  ${n} `, s = !0)
                                                                : l += u.cssText + " ";
                                                    return s || (l += t + ` ${n} `),
                                                    l.trim()
                                                })(e, o, a[o]);
                                            n.textContent = e
                                        } else 
                                            (n = e.createElement("style")).id = "introjs_CustomStyle",
                                            n.textContent = t,
                                            e
                                                .head
                                                .appendChild(n)
                                        }
                                    )(o, document);
                                    break;
                                    case "_udap_unapplyCustomStyle"
                                    : H("introjs_ext_DAPCustomStyle"), h.forEach(e => {
                                        e = document.querySelector(`#introjs_${e}_CustomStyle`);
                                        e && e.remove()
                                    });
                                    var a = document.querySelector("#introjs_CustomStyle");
                                    a && a.remove(), document.getElementById("introjs_ext_CustomStyle") && H(
                                        "introjs_ext_CustomStyle"
                                    );
                                    break;
                                    case "_udap_addButton"
                                    : e.data.frameInfo && 0 < e.data.frameInfo.value.length && !$(
                                        t,
                                        e.data.frameInfo.operator,
                                        e.data.frameInfo.value
                                    ) || ((e, o) => {
                                        if (
                                            w(f = f || introJs()),
                                            f.onbuttonclick((e, t, n) => {
                                                if (t) 
                                                    switch (t.onclick_trigger) {
                                                        case "popup":
                                                        case "workflow":
                                                            E(o)
                                                    }
                                                }),
                                            f.onbuttonadded(function (t) {
                                                if ("tooltip" === t.onclick_trigger) {
                                                    o.element = t.element;
                                                    t = [o];
                                                    if (f || (f = introJs()).ontooltipadded(e => {
                                                        e.display_on_startup && (
                                                            "undefined" != typeof MouseEvent
                                                                ? e.element.dispatchEvent(new MouseEvent("mouseover", {
                                                                    bubbles: !0,
                                                                    cancelable: !1
                                                                }))
                                                                : e.element.dispatchEvent(new Event("mouseover", {
                                                                    bubbles: !0,
                                                                    cancelable: !1
                                                                }))
                                                        )
                                                    }), t[0].templateDetail) {
                                                        let e = document.querySelector("#introjs_tooltip_CustomStyle");
                                                        if (!e) 
                                                            return void(
                                                                (e = document.createElement("style")).id = "introjs_tooltip_CustomStyle",
                                                                e.textContent = t[0].templateDetail,
                                                                document.head.appendChild(e)
                                                            );
                                                        e.disabled = !1,
                                                        e.textContent = t[0].templateDetail
                                                    }
                                                    f.onshowtooltip(function (t) {
                                                        setTimeout(() => {
                                                            var e = document.querySelector(
                                                                ".introjs-tooltipReferenceLayer .introjs-tooltip"
                                                            );
                                                            b(t, e)
                                                        }, 0)
                                                    }),
                                                    f.setOptions({tooltips: t}),
                                                    f.removeToolTips(),
                                                    f.addToolTips()
                                                }
                                            }),
                                            "object" == typeof e[0].element
                                        ) {
                                            var t = k(e[0].element);
                                            if (!t) 
                                                return;
                                            t.snapshotLength
                                                ? e[0].element = t.snapshotItem(0)
                                                : e[0].element = t[0]
                                        }
                                        f.setOptions({buttons: e}),
                                        f.addButtons()
                                    })(e.data.data, e.data.trigger_content);
                                    break;
                                    case "_udap_addWorkflow"
                                    : e.data.frameInfo && 0 < e.data.frameInfo.value.length && !$(
                                        t,
                                        e.data.frameInfo.operator,
                                        e.data.frameInfo.value
                                    ) || E(e.data.data);
                                    break;
                                    case "_udap_addPopup"
                                    : if (!(e.data.frameInfo && 0 < e.data.frameInfo.value.length) || $(t, e.data.frameInfo.operator, e.data.frameInfo.value)) 
                                        if ("outer" === e.data.data[0].popup_type) {
                                            a = e
                                                .data
                                                .data[0];
                                            var r = null,
                                                i = 600,
                                                l = 400,
                                                s = "new_window" === a.window_type
                                                    ? "no"
                                                    : "yes";
                                            s = `directories=${s},titlebar=${s},toolbar=${s},location=${s},status=${s},menubar=${s},scrollbars=yes,popup=${ "popup" === a.window_type
                                                ? "yes"
                                                : "no"},resizable=${s},`;
                                            let n = a.title;
                                            if ("link" === a.content_type) {
                                                r = a.external_url[0] || a.external_url[1] || "",
                                                i = a.popup_size
                                                    ?.width || 600,
                                                l = a.popup_size
                                                    ?.height || 400;
                                                var {
                                                    left
                                                    : u,
                                                    top: d
                                                } = L(a.floatingPos, {
                                                    width: i,
                                                    height: l
                                                });
                                                s += `width=${i},height=${l},top=${d},left=` + u,
                                                y = window.open(
                                                    r,
                                                    n,
                                                    "new_tab" === a.window_type
                                                        ? null
                                                        : s
                                                )
                                            } else {
                                                r = "chrome-extension://" + p + "/apps/Studio/template/frame/frame.html";
                                                let e = a.intro,
                                                    t = a.css;
                                                a.editor_content
                                                    ?.height && (l = a.editor_content.height + 25),
                                                a.editor_content
                                                    ?.width && (i = a.editor_content.width + 35);
                                                var {
                                                    left
                                                    : d,
                                                    top: u
                                                } = L(a.floatingPos, {
                                                    width: i,
                                                    height: l
                                                });
                                                s += `width=${i},height=${l},top=${u},left=` + d,
                                                y = window.open(r, n, s),
                                                setTimeout(() => {
                                                    y.postMessage({
                                                        cmd: "_udap_initiate_content",
                                                        data: {
                                                            content: e,
                                                            css: t,
                                                            title: n
                                                        },
                                                        dst: p
                                                    }, new URL(r).origin)
                                                }, 500)
                                            }
                                        }
                                    else {
                                        i = e.data.data;
                                        w(f = f || introJs(), !1),
                                        f.onbeforechange(async function (e, t, n) {
                                            let o = this._introItems[t],
                                                a = o.intro;
                                            if ("string" == typeof a) 
                                                if (
                                                    o.intro = document.createElement("iframe"),
                                                    o.intro.style.border = "none",
                                                    "link" === o.content_type
                                                ) 
                                                    o.intro.style.width = (
                                                        o.popup_size
                                                            ?.width || 600
                                                    ) + "px",
                                                    o.intro.style.height = (
                                                        o.popup_size
                                                            ?.height || 400
                                                    ) + "px",
                                                    o.intro.src = o.external_url[0] || o.external_url[1] || "";
                                                else {
                                                    o.editor_content
                                                        ?.height && (o.intro.style.height = o.editor_content.height + 25 + "px"),
                                                    o.editor_content
                                                        ?.width && (o.intro.style.width = o.editor_content.width + 35 + "px");
                                                    let t,
                                                        n = (
                                                            o
                                                                ?.editor_content && (t = {
                                                                    ...o
                                                                        ?.editor_content,
                                                                    current_language_id: o
                                                                        ?.current_language_id
                                                                }),
                                                            o.intro.src = "chrome-extension://" + p + "/apps/Studio/template/frame/frame.ht" +
                                                                    "ml",
                                                            o.css
                                                        );
                                                    o.intro.onload = function () {
                                                        var e = localStorage.getItem("uniDap-language");
                                                        o
                                                            .intro
                                                            .contentWindow
                                                            .postMessage({
                                                                cmd: "_udap_initiate_content",
                                                                data: {
                                                                    content: a,
                                                                    css: n,
                                                                    step_id: o.step_id,
                                                                    lang: e,
                                                                    multiLanguageContent: o
                                                                        ?.multiLanguageContent
                                                                            ?.internal,
                                                                    content_editor: t,
                                                                    hideTabBar: o
                                                                        ?.hideTabBar
                                                                },
                                                                dst: p
                                                            }, "*")
                                                    }
                                                }
                                            return !0
                                        }),
                                        f.setOptions({
                                            steps: i,
                                            showProgress: !1,
                                            showBullets: !1,
                                            showButtons: void 0 === i[0].showButtons || i[0].showButtons
                                        }),
                                        f.start()
                                    }
                                    break;
                                    case "_udap_addTooltip": e.data.frameInfo && 0 < e.data.frameInfo.value.length && !$(
                                        t,
                                        e.data.frameInfo.operator,
                                        e.data.frameInfo.value
                                    ) || (e => {
                                        if (
                                            f || (f = introJs()).ontooltipadded(e => {
                                                var t;
                                                e.display_on_startup && (t = q("mouseover", {
                                                    bubbles: !0,
                                                    cancelable: !1
                                                })) && e
                                                    .element
                                                    .dispatchEvent(t)
                                            }),
                                            f.onshowtooltip(function (t) {
                                                setTimeout(() => {
                                                    var e = document.querySelector(
                                                        ".introjs-tooltipReferenceLayer .introjs-tooltip"
                                                    );
                                                    b(t, e)
                                                }, 0)
                                            }),
                                            "object" == typeof e[0].element
                                        ) {
                                            var t = k(e[0].element);
                                            if (!t) 
                                                return;
                                            t.snapshotLength
                                                ? e[0].element = t.snapshotItem(0)
                                                : e[0].element = t[0]
                                        }
                                        w(f),
                                        f.setOptions({tooltips: e}),
                                        f.addToolTips()
                                    })(e.data.data);
                                    break;
                                    case "_udap_download_file": (async (e, t) => {
                                        var n = document.location.href,
                                            t = {
                                                suggestedName: t
                                            },
                                            t = await window.showSaveFilePicker(t);
                                        writable = await t.createWritable();
                                        let o = 0,
                                            a = 0;
                                        fetch(e, {referrer: n})
                                            .then(e => {
                                                if (e.ok) 
                                                    return a = e
                                                        .headers
                                                        .get("Content-Length"),
                                                    e.arrayBuffer();
                                                throw new Error("HTTP error, status = " + e.status)
                                            })
                                            .then(async e => {
                                                if (await writable.write(e), (o += e.byteLength) >= a) 
                                                    throw new Error("Reached max_len")
                                            })
                                            .catch(function (e) {
                                                writable.close(),
                                                alert("File downloaded")
                                            })
                                        })(e.data.url, e.data.file_name);
                                    break;
                                    case "_udap_inspect": _ = e.data.source, v = e.data.source_id, T = !1 | e.data.allow_multiple_eles, e.data.isChild || (
                                        m = null
                                    );
                                    l = e.data.tabId;
                                    x = l, document.body.removeEventListener("mouseover", D, !0), document.body.addEventListener(
                                        "mouseover",
                                        D,
                                        !0
                                    ), document.body.removeEventListener("click", N, !0), document.body.addEventListener(
                                        "click",
                                        N,
                                        !0
                                    ), (g = document.querySelector("div._udap_cover")) || (
                                        (g = document.createElement("div")).className = "_udap_cover",
                                        g.style = "border: solid 2px red;display: none;position: fixed;left: 0;top:0;width: 0;hei" +
                                                "ght:0;pointer-events:none;z-index: 999998;",
                                        document.body.appendChild(g)
                                    ), g.style.display = "block";
                                    break;
                                    case "_udap_find": if (!(e.data.frameInfo && 0 < e.data.frameInfo.value.length) || $(location.pathname, e.data.frameInfo.operator, e.data.frameInfo.value)) {
                                        s = e.data.data;
                                        if (document.querySelectorAll("div._udap_cover_selected").forEach(e => {
                                            e.remove()
                                        }), s) {
                                            let o = [];
                                            s.forEach(e => {
                                                var t = k(e);
                                                if (t) 
                                                    if (t instanceof XPathResult) 
                                                        if (1 < t.snapshotLength) 
                                                            for (var n = 0; n < t.snapshotLength; n++) 
                                                                I([t.snapshotItem(n)]);
                                            else 
                                                    for (n = 0; n < t.snapshotLength; n++) 
                                                        o.push(t.snapshotItem(n));
                                            else 
                                                    t instanceof NodeList && (
                                                        1 < t.length
                                                            ? t.forEach(e => {
                                                                I([e])
                                                            })
                                                            : t.forEach(e => {
                                                                o.push(e)
                                                            })
                                                    )
                                            }),
                                            I(o)
                                        }
                                    }
                                    break;
                                    case "_udap_stopinspection": _ = null, C();
                                    break;
                                    case "_udap_setLang": localStorage.setItem("uniDap-language", e.data.lang);
                                    break;
                                    case "_udap_resize": var c = document.querySelector(
                                        `.content-${e.data.step_id} iframe`
                                    );
                                    c && (c.style.height = e.data.height);
                                    break;
                                    case "_udap_set_current_selector": e.data.frameInfo && 0 < e.data.frameInfo.value.length && !$(
                                        location.pathname,
                                        e.data.frameInfo.operator,
                                        e.data.frameInfo.value
                                    ) || (m = e.data.currentlySelectedElement)
                                }
                        }
                }
            );
            var f = null;
            let g = null, _ = null, v = null, y = null;
            function w(e, t) {
                1 < arguments.length && void 0 !== t && !t || (
                    e.removeSmartTips(),
                    e.removeHints(),
                    e.removeButtons(),
                    e.removeToolTips()
                )
            }
            let b = function (a, r) {
                    let i = a
                        ?.current_language_id;
                    localStorage.getItem("uniDap-language") && 0 < a
                        ?.multiLanguageContent
                            ?.[localStorage.getItem("uniDap-language")]
                                ?.length && (i = localStorage.getItem("uniDap-language"));
                    if (
                        1 < Object.keys(
                                a
                                    ?.multiLanguageContent
                            )
                            ?.length
                    ) {
                        let e = "";
                        for (
                            var t in e += '<div class="uniDap-language-tooltip">',
                            a.multiLanguageContent
                        ) 
                            e += `<span class="uniDap-lang-text" data-lang="${t}">${t
                                ?.toUpperCase()}</span>`;
                        e = (e += "</div>") +
                                `<div class="uniDap-tooltip-content">${a
                            ?.multiLanguageContent
                                ?.[i]}</div>`;
                        var n = r.querySelector(".introjs-tooltiptext");
                        n
                            .querySelector("p:first-child")
                            .remove(),
                        n.insertAdjacentHTML("afterbegin", e);
                        {
                            let o = r.querySelectorAll(".uniDap-lang-text");
                            for (let n = 0; n < o.length; n++) {
                                let e = o[n].getAttribute("data-lang"),
                                    t = r.querySelector(".uniDap-tooltip-content");
                                e === i && (
                                    o[n]
                                        ?.classList.add("uniDap-language-active"),
                                    t.innerHTML = a
                                        ?.multiLanguageContent
                                            ?.[e]
                                ),
                                o[n].addEventListener("click", function () {
                                    localStorage.setItem("uniDap-language", e);
                                    for (let e = 0; e < o.length; e++) 
                                        o[e]
                                            ?
                                                .classList
                                                .remove("uniDap-language-active");
                                    o[n]
                                        ?
                                            .classList
                                            .add("uniDap-language-active"),
                                    t.innerHTML = a
                                        ?.multiLanguageContent
                                            ?.[e]
                                })
                            }
                        }
                    }
                }, O = function (r, i) {
                    if (
                        r
                            ?.multiLanguageContent
                                ?.content
                    ) {
                        let a = r
                            ?.current_language_id;
                        if (
                            r
                                ?.multiLanguageContent
                                    ?.content
                        ) {
                            localStorage.getItem("uniDap-language") && 0 < r
                                ?.multiLanguageContent
                                    ?.content
                                        ?.[localStorage.getItem("uniDap-language")]
                                            ?.length && (a = localStorage.getItem("uniDap-language"));
                            if (
                                1 < Object.keys(
                                        r
                                            ?.multiLanguageContent
                                                ?.content
                                    )
                                    ?.length
                            ) {
                                let e = "";
                                for (
                                    var n in e += '<div class="uniDap-language-tooltip">',
                                    r
                                        ?.multiLanguageContent
                                            ?.content
                                ) 
                                    e += `<span class="uniDap-lang-text" data-lang="${n}">${n
                                        ?.toUpperCase()}</span>`;
                                e = (e += "</div>") +
                                        `<div class="uniDap-tooltip-content">${r
                                    ?.multiLanguageContent
                                        ?.content
                                            ?.[a]}</div>`;
                                let t = i.querySelector(".introjs-tooltiptext");
                                var o = (
                                    t = !t && i.classList.contains("introjs-tooltiptext")
                                        ? i
                                        : t
                                ).querySelectorAll("p");
                                for (
                                    let e = 0; e < o
                                        ?.length; e++
                                ) 
                                    o[e]
                                        .parentNode
                                        .removeChild(o[e]);
                                t.insertAdjacentHTML("afterbegin", e);
                                {
                                    let o = i.querySelectorAll(".uniDap-lang-text");
                                    for (let n = 0; n < o.length; n++) {
                                        let e = o[n].getAttribute("data-lang"),
                                            t = i.querySelector(".uniDap-tooltip-content");
                                        e === a && (
                                            o[n]
                                                ?.classList.add("uniDap-language-active"),
                                            t.innerHTML = r
                                                ?.multiLanguageContent
                                                    ?.content
                                                        ?.[e]
                                        ),
                                        o[n].addEventListener("click", function () {
                                            localStorage.setItem("uniDap-language", e);
                                            for (let e = 0; e < o.length; e++) 
                                                o[e]
                                                    ?
                                                        .classList
                                                        .remove("uniDap-language-active");
                                            o[n]
                                                ?
                                                    .classList
                                                    .add("uniDap-language-active"),
                                            t.innerHTML = r
                                                ?.multiLanguageContent
                                                    ?.content
                                                        ?.[e]
                                        })
                                    }
                                }
                            }
                        }
                    }
                };
            async function S(t, e) {
                var n = !(1 < arguments.length && void 0 !== e) || e;
                if (t && "automated" === t.completion_method) {
                    var o = t.element[0];
                    let e;
                    switch (t.completion_rule) {
                        case "hover":
                            (e = q("mouseover", {
                                bubbles: !0,
                                cancelable: !1
                            })) && (o.dispatchEvent(e), n) && await i(500);
                            break;
                        case "click":
                            if ("A" === o.tagName) 
                                o.click();
                            else 
                                for (var a = [
                                    "mouseover", "mousedown", "mouseup", "click"
                                ], r = 0; r < a.length; r++) 
                                    (e = q(a[r], {
                                        bubbles: !0,
                                        cancelable: !1
                                    })) && (o.dispatchEvent(e), n) && await i(200)
                        }
                }
            }
            var x, n = null;
            function E(e) {
                var t = "";
                (
                    e = "string" == typeof e
                        ? JSON.parse(e)
                        : e
                ).forEach(e => {
                    e.css && 0 != e.css.length && (
                        t += ` .introjs-tooltip.content-${e.step_id} { ${e.css} }`
                    )
                }),
                n || (
                    n = document.createElement("style"),
                    (document.head || document.getElementsByTagName("head")[0]).appendChild(n)
                ),
                n.type = "text/css",
                n.styleSheet
                    ? n.styleSheet.cssText = t
                    : (n.innerHTML = "", n.appendChild(document.createTextNode(t))),
                w(f = f || introJs(), !1),
                f.onchange(function (e) {
                    var t;
                    return (e => {
                        if (!e || 0 == e.length) 
                            return 1;
                        for (var t = !0, n = 0; n < e.length; n++) {
                            var o = e[n],
                                a = (e => {
                                    if (!e) 
                                        return !0;
                                    for (var t = [
                                        [
                                            "uri", B
                                        ],
                                        [
                                            "user_attr", U
                                        ],
                                        [
                                            "css", W
                                        ],
                                        [
                                            "xpath", z
                                        ],
                                        [
                                            "value_validation",
                                            function () {
                                                return !0
                                            }
                                        ]
                                    ], n = 0; n < t.length; n++) {
                                        var o = t[n];
                                        if (e.method === o[0] && o[1]) 
                                            return o[1](e.key, e.operator, e.value)
                                    }
                                    return !1
                                })(o);
                            t = o.connector && "and" !== o.connector
                                ? t || a
                                : t && a
                        }
                        return t
                    })(
                        (t = e.where)
                            ? Object.values(t).map(e => e)
                            : null
                    )
                        ? !(e._skip = !1)
                        : (e._skip = !0, this.nextStep(), !1)
                }),
                f.onbeforechange(async function (e, t, n) {
                    0 < t && ((o = this._introItems[t - 1])._skip || await S(o));
                    var o,
                        a,
                        r,
                        i = [];
                    for ([a, r] of Object.entries(e)) 
                        if (r instanceof HTMLElement) 
                            i.push(r);
                        else {
                            var l,
                                s,
                                u = [];
                            for ([l, s] of Object.entries(r)) 
                                u.push(s);
                            var d,
                                c = k(u);
                            c instanceof XPathResult
                                ? c.snapshotLength && (d = c.snapshotItem(0))
                                : c instanceof NodeList && (d = c[0]),
                            d && i.push(d)
                        }
                    return 0 != i.length && (this._introItems[t].element = i, !0)
                }),
                f.oncomplete(async e => {
                    S(f._introItems[e], !1)
                }),
                f.setOptions({
                    steps: e,
                    showProgress: 0 == t.length,
                    showButtons: void 0 === e[0].showButtons || e[0].showButtons,
                    showBullets: !1
                }),
                f.onshowtooltip(function (e, t, n) {
                    O(e, n),
                    e.hideTabBar && document
                        .querySelectorAll("input[id^='unidap_popup_tab_']")
                        .forEach(e => {
                            e = document.querySelector(`label[for="${e.id}"]`);
                            e && e.remove()
                        })
                }),
                f._currentStepNumber = 1,
                f.start()
            }
            function L(e, t) {
                let n = 0,
                    o = 0;
                switch (e) {
                    case "top_left":
                        n = 0,
                        o = 0;
                        break;
                    case "top_middle":
                        n = Math.round((window.innerWidth - t.width) / 2),
                        o = 0;
                        break;
                    case "top_right":
                        n = window.innerWidth - t.width,
                        o = 0;
                        break;
                    case "bottom_left":
                        n = 0,
                        o = window.innerHeight - t.height;
                        break;
                    case "bottom_middle":
                        n = Math.round((window.innerWidth - t.width) / 2),
                        o = window.innerHeight - t.height;
                        break;
                    case "bottom_right":
                        n = window.innerWidth - t.width,
                        o = window.innerHeight - t.height;
                        break;
                    case "middle_right":
                        n = window.innerWidth - t.width,
                        o = Math.round((window.innerHeight - t.height) / 2);
                        break;
                    case "middle_left":
                        n = 0,
                        o = (window.innerHeight - t.height) / 2;
                        break;
                    case "center":
                        n = Math.round((window.innerWidth - t.width) / 2),
                        o = Math.round((window.innerHeight - t.height) / 2)
                }
                return {left: n, top: o}
            }
            async function i(n) {
                await new Promise((e, t) => {
                    setTimeout(() => {
                        e("foo")
                    }, n)
                })
            }
            function k(e) {
                var r = document.body,
                    i = !1;
                return e.forEach(e => {
                    if (!i) {
                        let o = r === document.body
                            ? r
                            : r[0];
                        var t,
                            a;
                        o = o.shadowRoot || o,
                        e.xpath
                            ? r = document.evaluate(
                                e.selector,
                                o,
                                null,
                                XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
                                null
                            )
                            : 1 === (t = (" " + e.selector).split(" slot")).length
                                ? r = o.querySelectorAll(e.selector)
                                : (a = !1, t.forEach(e => {
                                    var t,
                                        n;
                                    i || (
                                        0 === e.length
                                            ? (r = (
                                                a
                                                    ? o[0]
                                                    : o
                                            ).querySelector("slot"), o = (r || o).assignedNodes(), a = !0)
                                            : (
                                                n = 0,
                                                (t = (e = e.split(" > "))[0].split(":nth-child"))[1] && (
                                                    n = t[1].match(/\d+/)[0] - 1
                                                ),
                                                o[n].localName !== t[0]
                                                    ? i = !0
                                                    : (
                                                        r = o[n],
                                                        1 < e.length && (r = r.querySelectorAll(e.shift().join(" > "))),
                                                        o = r.assignedNodes()[0]
                                                    )
                                            )
                                    )
                                }))
                    }
                }),
                i
                    ? null
                    : r
            }
            function I(e) {
                if (e && 0 != e.length) {
                    let t = -1,
                        n = -1,
                        o = -1,
                        a = -1;
                    e.forEach(e => {
                        e = e.getBoundingClientRect();
                        (-1 == t || e.left < t) && (t = e.left),
                        (-1 == n || e.top < n) && (n = e.top),
                        (-1 == o || e.right > o) && (o = e.right),
                        (-1 == a || e.bottom > a) && (a = e.bottom)
                    });
                    e = document.createElement("div");
                    e.style = "border: solid 2px #00ff04;display: none;position: fixed;left: 0;top:0;width: 0" +
                            ";height:0;pointer-events:none;z-index: 999998;",
                    e.className = "_udap_cover_selected",
                    e.style.left = t + "px",
                    e.style.top = n + "px",
                    e.style.width = o - t + "px",
                    e.style.height = a - n + "px",
                    e.style.display = "block",
                    document
                        .body
                        .appendChild(e)
                }
            }
            function C() {
                document
                    .body
                    .removeEventListener("mouseover", D, !0),
                document
                    .body
                    .removeEventListener("click", N, !0),
                r = null,
                g
                    ?.remove(),
                g = null
            }
            var r = null, l = null, T = !1;
            function D(e) {
                var t,
                    n,
                    o,
                    a;
                g && (
                    e.ctrlKey || (e.stopPropagation(), e.preventDefault()),
                    T && (
                        r = e.shiftKey
                            ? r || l
                            : null
                    ),
                    l = e.path
                        ? e.path[0]
                        : e.target,
                    t = n = o = a = -1,
                    [r, l].forEach(e => {
                        e && (
                            e = e.getBoundingClientRect(),
                            t = -1 == t || e.left < t
                                ? e.left
                                : t,
                            n = -1 == n || e.top < n
                                ? e.top
                                : n,
                            o = -1 == o || e.right > o
                                ? e.right
                                : o,
                            a = -1 == a || e.bottom > a
                                ? e.bottom
                                : a
                        )
                    }),
                    g.style.left = t + "px",
                    g.style.top = n + "px",
                    g.style.width = o - t + "px",
                    g.style.height = a - n + "px"
                )
            }
            function N(e) {
                var t,
                    n;
                e.ctrlKey || (
                    (t = e).stopPropagation(),
                    t.preventDefault(),
                    n = !(t = []),
                    e.path
                        ? (r && (t.push(a(r)), n = d(r)), t.push(a(e.path)), n |= d(e.path))
                        : (
                            r && (t.push(s(r)), n = d(r)),
                            t.push(s(e.target, document.querySelector(m))),
                            n |= d(e.target)
                        ),
                    C(),
                    o.postMessage({
                        cmd: "_udap_stopinspection",
                        dst: p
                    }, "*"),
                    o.postMessage({
                        cmd: "_udap_selectedelement",
                        tabId: x,
                        data: t,
                        hasScrollParent: n,
                        source: _,
                        source_id: v,
                        url: {
                            origin: location.origin,
                            path: location.pathname
                        },
                        dst: p
                    }, "*")
                )
            }
            function a(e, t) {
                var n = 1 < arguments.length && void 0 !== t
                    ? t
                    : document.body;
                if (!e) 
                    return null;
                for (var o = [], a = [], r = 0; r < e.length; r++) {
                    var i = e[r];
                    if (11 == i.nodeType) 
                        o.unshift(a),
                        a = [];
                    else {
                        for (var l, s = [], u = 0, d = i.attributes, c = d.length; u < c; u++) 
                            "class" !== d[u].nodeName && s.push({key: d[u].nodeName, value: d[u].value});
                        var p = [];
                        for (u = 0, c = (l = i.classList).length; u < c; u++) 
                            p.push({key: l[u]});
                        if (a.unshift({
                            tag_name: i.localName,
                            child: R(i),
                            index: P(i),
                            classes: p,
                            text: j(i)
                                .substring(0, 50)
                                .trim(),
                            attributes: s
                        }), i === n || i === document.body) 
                            break
                    }
                }
                return 0 < o.length && (o[0].child = null, o[0].index = null),
                o
            }
            function s(e, t) {
                for (
                    var n = 1 < arguments.length && void 0 !== t
                        ? t
                        : document.body,
                    o = []; e.tagName;
                ) {
                    for (var a, r = [], i = 0, l = e.attributes, s = l.length; i < s; i++) 
                        "class" !== l[i].nodeName && r.push({key: l[i].nodeName, value: l[i].value});
                    var u = [];
                    for (i = 0, s = (a = e.classList).length; i < s; i++) 
                        u.push({key: a[i]});
                    if (o.unshift({
                        tag_name: e.localName,
                        child: R(e),
                        index: P(e),
                        classes: u,
                        text: j(e)
                            .substring(0, 50)
                            .trim(),
                        attributes: r
                    }), e === n || e === document.body) 
                        break;
                    e = e.parentNode
                }
                return 0 < o.length && (o[0].child = null, o[0].index = null),
                [o]
            }
            function j(e) {
                return 0 < e.childNodes.length && e
                    .childNodes[0]
                    .nodeType === Node.TEXT_NODE
                        ? e
                            .childNodes[0]
                            .textContent
                        : ""
            }
            function R(e) {
                let t = 0;
                if (!e.parentNode) 
                    return null;
                for (var n = e.parentNode.children; t < n.length && n[t] !== e;) 
                    t++;
                return t || t + 1 != n.length
                    ? t + 1
                    : null
            }
            function P(e) {
                var t,
                    n = 1;
                if (e.nodeType == Node.ATTRIBUTE_NODE) 
                    return null;
                for (t = e.previousSibling; t; t = t.previousSibling) 
                    t.nodeName == e.nodeName && ++n;
                return n
            }
            let u = [
                [
                    ["exist"],
                    function (e, t) {
                        return void 0 !== e && null != e
                    }
                ],
                [
                    ["not_exist"],
                    function (e, t) {
                        return void 0 === e || null == e
                    }
                ],
                [
                    ["empty"],
                    function (e, t) {
                        return 0 == e.length
                    }
                ],
                [
                    [
                        "equal", "equals"
                    ],
                    function (e, t) {
                        return e == t
                    }
                ],
                [
                    ["less_than"],
                    function (e, t) {
                        return e < t
                    }
                ],
                [
                    ["greater_than"],
                    function (e, t) {
                        return t < e
                    }
                ],
                [
                    [
                        "contain", "contains"
                    ],
                    function (e, t) {
                        return e.includes(t)
                    }
                ],
                [
                    [
                        "start_with", "starts_with"
                    ],
                    function (e, t) {
                        return e.startsWith(t)
                    }
                ],
                [
                    [
                        "endswith", "ends_with"
                    ],
                    function (e, t) {
                        return e.endsWith(t)
                    }
                ],
                [
                    ["regex"],
                    function (e, t) {
                        return new RegExp(t).test(e)
                    }
                ],
                [
                    ["wildcard"],
                    function (e, t) {
                        return new RegExp("^" + t.replace(/\?/g, ".").replace(/\*/g, ".*") + "$").test(
                            e
                        )
                    }
                ],
                [
                    ["not_empty"],
                    function (e, t) {
                        return 0 < e.length
                    }
                ],
                [
                    [
                        "not_equal", "not_equals"
                    ],
                    function (e, t) {
                        return e != t
                    }
                ],
                [
                    ["not_less_than"],
                    function (e, t) {
                        return !(e < t)
                    }
                ],
                [
                    ["not_greater_than"],
                    function (e, t) {
                        return !(t < e)
                    }
                ],
                [
                    [
                        "not_contain", "not_contains"
                    ],
                    function (e, t) {
                        return !e.includes(t)
                    }
                ],
                [
                    [
                        "not_start_with", "not_starts_with"
                    ],
                    function (e, t) {
                        return !e.startsWith(t)
                    }
                ],
                [
                    [
                        "not_endswith", "not_ends_with"
                    ],
                    function (e, t) {
                        return !e.endsWith(t)
                    }
                ],
                [
                    ["not_regex"],
                    function (e, t) {
                        return !new RegExp(t).test(e)
                    }
                ],
                [
                    ["not_wildcard"],
                    function (e, t) {
                        return !new RegExp("^" + t.replace(/\?/g, ".").replace(/\*/g, ".*") + "$").test(
                            e
                        )
                    }
                ],
                [
                    ["date_greater_than"],
                    function (e, t) {
                        return t < e
                    }
                ],
                [
                    ["date_less_than"],
                    function (e, t) {
                        return e < t
                    }
                ],
                [
                    ["date_equals"],
                    function (e, t) {
                        return e == t
                    }
                ]
            ];
            function A(e) {
                e = document.getElementById(e);
                e && (e.disabled = !0)
            }
            function H(e) {
                e = document.getElementById(e);
                e && (e.disabled = !1)
            }
            function d(t) {
                var n = window.getComputedStyle(t);
                if ("fixed" !== n.position) {
                    var o = "absolute" === n.position,
                        a = /(auto|scroll)/;
                    for (let e = t; e = e.parentElement;) 
                        if (n = window.getComputedStyle(e), (!o || "static" !== n.position) && a.test(
                            n.overflow + n.overflowY + n.overflowX
                        )) 
                            return !0
                }
                return !1
            }
            function c(e) {
                if (void 0 !== e) 
                    try {
                        return -1 < e
                            .toString()
                            .indexOf("[native code]")
                    } catch (e) {}
                }
            function q(e, t) {
                return c(MouseEvent)
                    ? new MouseEvent(e, t)
                    : c(UIEvent)
                        ? new UIEvent(e, t)
                        : c(Event)
                            ? new Event(e, t)
                            : null
            }
            function $(e, t, n) {
                for (var o = 0; o < u.length; o++) 
                    if (u[o][0].includes(t)) 
                        return u[o][1](e, n);
            return !1
            }
            function B(e, t, n) {
                var o = null;
                switch (e) {
                    case "para":
                        o = location.search;
                        break;
                    case "hash":
                        o = location.hash
                }
                return null != o && $(o, t, n)
            }
            function U(e, t, n) {
                return !(!_udap_global.user || !_udap_global.user[e]) && $(
                    _udap_global.user[e],
                    t,
                    n
                )
            }
            function W(e, t, n) {
                return $(
                    document.querySelector(e)
                        ?.innerText.trim(),
                    t,
                    n
                )
            }
            function z(e, t, n) {
                return $(
                    document.evaluate(e, document.body, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null)
                        ?.singleNodeValue
                            ?.textContent
                                ?.trim(),
                    t,
                    n
                )
            }
        }
    )();