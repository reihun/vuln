(() => {
    var p,
        e = window.location.search,
        e = new URLSearchParams(e);
    let S = e.get("tabId");
    var _ = e.get("siteId"),
        f = e.get("origin_pathname"),
        v = e.get("origin_pathoperator"),
        t = null,
        a = null,
        g = null,
        b = e.get("status"),
        b = [CONTENT_STATUS.DRAFT, CONTENT_STATUS.PUBLISHED].includes(b)
            ? b
            : null,
        l = null,
        s = null;
    let w,
        q;
    document.addEventListener("contextmenu", e => e.preventDefault()),
    (async () => {
        var e = await C({cmd: "_udap_getCurrentURL", tabId: S});
        e && (w = new URL(e));
        {
            let e = document.querySelector("body > .filter"),
                t = (
                    e.style.display = "none",
                    document.querySelector("body > .tenant select.tenant_select")
                ),
                n = (
                    t.addEventListener("change", function () {
                        this.value && (
                            e.style.display = "block",
                            g = this.value,
                            chrome.storage.local.set({_udap_selectedTenantID: g}),
                            r()
                        )
                    }),
                    document.querySelector("body > .tenant select.content_mode_select")
                ),
                a = (
                    n.addEventListener("change", function () {
                        this.value && (b = this.value, r())
                    }),
                    document.querySelector("body > .header button.token").addEventListener("click", () => {
                        (async () => {
                            let e = document
                                    .querySelector(".popup_template .server_conf")
                                    .cloneNode(!0),
                                t = await C({cmd: "_udap_getAPIEndpoints"}),
                                n = e.querySelector(".endpoint"),
                                a = (n.value = t.endpoint, e.querySelector(".ssoEndpoint"));
                            a.value = t.ssoEndpoint,
                            displayPopup(!0, "Configuration", e, [
                                {
                                    text: "OK",
                                    func: async function () {
                                        await C({
                                            cmd: "_udap_setAPIEndpoints",
                                            data: {
                                                endpoint: n
                                                    .value
                                                    .trim(),
                                                ssoEndpoint: a
                                                    .value
                                                    .trim()
                                            }
                                        }),
                                        v = p = null,
                                        r()
                                    }
                                }, {
                                    text: "Close",
                                    func: studio_closePopup
                                }
                            ])
                        })()
                    }),
                    document.querySelector("body > .header button.refresh").addEventListener("click", () => {
                        T()
                    }),
                    document.querySelector("body > .filter select.site_select")
                ),
                o = (
                    a.addEventListener("change", function () {
                        l = this.value,
                        i()
                    }),
                    document.querySelector("body > .filter select.content")
                );
            o.addEventListener("change", function () {
                s = this.value,
                L()
            })
        }
        await n() && (
            e = document.querySelector("body > .tenant select.tenant_select"),
            g = e.value,
            e = document.querySelector("body > .tenant select.content_mode_select"),
            b ??= e.value,
            e = document.querySelector("body > .filter select.site_select"),
            l = e.value,
            e = document.querySelector("body > .filter select.content"),
            s = e.value,
            e = document.querySelector("#_udap_context-menu"),
            insertContextButton(e, [
                {
                    innerHTML: "<i class='fa fa-video-camera' aria-hidden='true'></i>Video URL Scan",
                    onClick: () => {
                        location.href = "video_urls.html?tabId=" + S
                    }
                }
            ])
        )
    })();
    let o = [
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
    function E(e, t, n) {
        if (e) 
            for (var a = 0; a < o.length; a++) 
                if (o[a][0] === t) 
                    return o[a][1](e, n)
    }
    function i() {
        var e;
        "all" === l
            ? document
                .querySelectorAll(".listing .domain")
                .forEach(e => {
                    e.style.display = "block",
                    e
                        .querySelectorAll(".listing .pathname")
                        .forEach(e => {
                            e.style.display = "block"
                        })
                })
            : "this_site" === l
                ? (
                    document.querySelectorAll(".listing .domain").forEach(e => {
                        e.style.display = "none"
                    }),
                    (e = document.querySelector(".listing .domain.this_site")) && (
                        e.style.display = "block",
                        e.querySelectorAll(".listing .pathname").forEach(e => {
                            e.style.display = "block"
                        })
                    )
                )
                : "this_page" === l && (
                    document.querySelectorAll(".listing .domain").forEach(e => {
                        e.style.display = "none"
                    }),
                    document.querySelectorAll(".listing .pathname").forEach(e => {
                        e.style.display = "none"
                    }),
                    document.querySelectorAll(".listing .pathname.this_page").forEach(e => {
                        e.style.display = "block"
                    }),
                    e = document.querySelector(".listing .domain.this_site")
                ) && (e.style.display = "block")
    }
    function L() {
        "all" === s
            ? document
                .querySelectorAll(".listing .pathname .contents .type")
                .forEach(e => {
                    e.style.display = "block"
                })
            : (
                document.querySelectorAll(".listing .pathname .contents .type").forEach(e => {
                    e.style.display = "none"
                }),
                document.querySelectorAll(".listing .pathname .contents .type." + s).forEach(e => {
                    e.style.display = "block"
                })
            )
    }
    async function m(d, u, p, m, h) {
        var e = await C(
            {cmd: "_udap_getSitePaths", endpoint: `?siteId.in=${u}&size=1000`}
        );
        if (e.result) {
            var y = document.querySelector(".template .domain");
            let r,
                c = m.join("\n");
            e
                .data
                .forEach(async t => {
                    let n = t.path,
                        a = t.operator,
                        e = t.id,
                        o = y
                            .querySelector(".pathname")
                            .cloneNode(!0),
                        l = o.querySelector(".contents");
                    (span = document.createElement("span")).innerText = n,
                    span.title = n;
                    var s = o.querySelector(".header.lv2"),
                        i = (s.insertAdjacentElement("afterbegin", span), !0);
                    if (
                        "equals" !== a && (
                            (span = document.createElement("span")).innerText = "{...}",
                            span.title = a,
                            span.className = "path_operator",
                            s.insertAdjacentElement("afterbegin", span)
                        ),
                        "/*" === n && "wildcard" === a && (i = !1),
                        t.countByType && 0 < Object.keys(t.countByType).length && (i = !1),
                        l.innerHTML = "",
                        d.appendChild(o),
                        s.addEventListener("click", () => {
                            l
                                .classList
                                .contains("collapsed")
                                    ? 0 == l.innerHTML.length && !(async (o, e, l, t, n, a, s, i) => {
                                        var r = b ?? document
                                                .querySelector(
                                                    "body > .tenant select.content_mode_select"
                                                )
                                                .value,
                                            c = await C({
                                                cmd: "_udap_getContents",
                                                endpoint: `?page=0&size=1000${r = r
                                                    ? "&status.equals=" + r
                                                    : ""}&tenantId.in=${g}&contentSubSiteId.equals=${e}&sort=pos,asc`
                                            });
                                        if (!c.result) 
                                            return studio_alert("Operation getContentNames failed."),
                                            !1;
                                        var d = t
                                                .querySelector(".contents .type")
                                                .cloneNode(!0),
                                            u = t
                                                .querySelector(".contents .type .data .item")
                                                .cloneNode(!0),
                                            p = (d.querySelector(".data").innerHTML = "", {
                                                smarttip_content: null,
                                                hint_content: null,
                                                button_content: null,
                                                useraction_content: null,
                                                workflow_content: null,
                                                popup_content: null,
                                                tooltip_content: null,
                                                no_content: null,
                                                custom_content: null
                                            });
                                        q = c.data;
                                        for (var m = 0; m < c.data.length; m++) 
                                            ((c, d, e, t, u, p, m, h, y, _, f) => {
                                                var n = null;
                                                switch (d.type || (d.type = "none"), d.type) {
                                                    case "none":
                                                        n = e.no_content = e.no_content || t.cloneNode(!0);
                                                        break;
                                                    case "smarttip":
                                                        n = e.smarttip_content = e.smarttip_content || t.cloneNode(!0);
                                                        break;
                                                    case "user_action":
                                                        n = e.useraction_content = e.useraction_content || t.cloneNode(!0);
                                                        break;
                                                    case "button":
                                                        n = e.button_content = e.button_content || t.cloneNode(!0);
                                                        break;
                                                    case "hint":
                                                        n = e.hint_content = e.hint_content || t.cloneNode(!0);
                                                        break;
                                                    case "workflow":
                                                        n = e.workflow_content = e.workflow_content || t.cloneNode(!0);
                                                        break;
                                                    case "popup":
                                                        n = e.popup_content = e.popup_content || t.cloneNode(!0);
                                                        break;
                                                    case "tooltip":
                                                        n = e.tooltip_content = e.tooltip_content || t.cloneNode(!0);
                                                        break;
                                                    case "custom_content":
                                                        n = e.custom_content = e.custom_content || t.cloneNode(!0)
                                                }
                                                if (n) {
                                                    let o = n.querySelector(".data"),
                                                        l = u.cloneNode(!0),
                                                        s = (
                                                            l.setAttribute("index", c),
                                                            l.setAttribute("content_id", d.id),
                                                            l.querySelector(".row1 .index").innerText = o.querySelectorAll(".item").length +
                                                                1,
                                                            l.querySelector(".row1 .name").innerText = d.name,
                                                            l.querySelector(".row2 .active").checked = d.active,
                                                            o.appendChild(l),
                                                            d.id
                                                        ),
                                                        i = d.href,
                                                        r = l.querySelector(".row2");
                                                    if (r) {
                                                        u = `contentId=${s}&siteName=${m}&domains=${h.join("\n")}&origin_pathname=${y}&origin_pathoperator=${_}&tabId=${S}&siteId=${p}&tenantId=` +
                                                                g;
                                                        let e = new URLSearchParams(u + "&status=" + d.status),
                                                            t = new URLSearchParams(u + "&status=" + CONTENT_STATUS.CLONED);
                                                        r
                                                            .querySelector(".button button.up")
                                                            .addEventListener("click", async () => {
                                                                var e = f(d, "up");
                                                                if (!(await C({cmd: "_udap_updateContentPos", domains: h, data: e})).result) 
                                                                    return studio_alert("Reorder content operation failed."),
                                                                    !1;
                                                                v(e),
                                                                o.insertBefore(l, l.previousSibling)
                                                            }),
                                                        r
                                                            .querySelector(".button button.down")
                                                            .addEventListener("click", async () => {
                                                                var e = f(d, "down");
                                                                if (!(await C({cmd: "_udap_updateContentPos", domains: h, data: e})).result) 
                                                                    return studio_alert("Reorder content operation failed."),
                                                                    !1;
                                                                v(e),
                                                                l
                                                                    .nextSibling
                                                                    .insertAdjacentElement("afterend", l)
                                                            }),
                                                        r
                                                            .querySelector(".button button.open_link")
                                                            .addEventListener("click", async () => {
                                                                C({
                                                                    cmd: "_udap_openContentInNewTab",
                                                                    data: {
                                                                        href: i,
                                                                        searchPara: e.toString()
                                                                    }
                                                                }, !1)
                                                            });
                                                        c = r.querySelector(".button button.publish_content");
                                                        if (c && d.status === CONTENT_STATUS.DRAFT) {
                                                            c.style.display = "inline-block";
                                                            let e = {
                                                                selectedIds: [d.id],
                                                                subSiteId: d.contentSubSiteId
                                                            };
                                                            c.addEventListener("click", async () => {
                                                                try {
                                                                    (await C({cmd: "_udap_publishContent", data: e}))
                                                                        ?.result
                                                                            ? (studio_popup("Content published successfully.", !1), T())
                                                                            : studio_alert("Publish content failed.")
                                                                } catch (e) {
                                                                    studio_alert("API Publish error.")
                                                                }
                                                            })
                                                        }
                                                        r
                                                            .querySelector(".button button.edit")
                                                            .addEventListener("click", () => {
                                                                location.href = "inspection.html?" + e.toString()
                                                            }),
                                                        r
                                                            .querySelector(".button button.clone")
                                                            .addEventListener("click", () => {
                                                                studio_confirm(
                                                                    "Are your sure to clone this content as a new one?",
                                                                    async () => {
                                                                        location.href = "inspection.html?" + t.toString()
                                                                    }
                                                                )
                                                            });
                                                        let n = r.querySelector(".active"),
                                                            a = n.checked;
                                                        function v(e) {
                                                            e.forEach(t => {
                                                                var e = q.findIndex(e => e.id === t.id);
                                                                q[e].pos = t.pos
                                                            }),
                                                            q.sort((e, t) => e.pos - t.pos)
                                                        }
                                                        n.addEventListener("change", async () => {
                                                            var e,
                                                                t = await C({cmd: "_udap_getContent", domains: h, endpoint: s});
                                                            t.result && (
                                                                e = n.checked,
                                                                (await C({
                                                                    cmd: "_udap_updateContent",
                                                                    data: {
                                                                        ...t.data,
                                                                        active: e,
                                                                        status: CONTENT_STATUS.DRAFT
                                                                    }
                                                                })).result
                                                                    ? a = e
                                                                    : (studio_alert("Active operation failed."), n.checked = a)
                                                            )
                                                        }),
                                                        r
                                                            .querySelector(".button button.remove")
                                                            .addEventListener("click", async () => {
                                                                studio_confirm("Are you sure to delete this content?", async () => {
                                                                    s && (
                                                                        (await C({
                                                                            cmd: "_udap_removeContent",
                                                                            endpoint: "/" + s
                                                                        })).result
                                                                            ? (l.remove(), studio_popup("Content deleted successfully.", !1))
                                                                            : studio_alert("Delete operation failed.")
                                                                    )
                                                                })
                                                            }),
                                                        l
                                                                .querySelector(".row1")
                                                                ?
                                                                .addEventListener("click", e => {
                                                                    "block" !== r.style.display
                                                                        ? r.style.display = "block"
                                                                        : r.style.display = "none"
                                                                })
                                                    }
                                                }
                                            })(m, c.data[m], p, d, u, o, n, a, s, i, (s => function (t, e) {
                                                var n = s.findIndex(e => e.id === t.id);
                                                if (-1 === n || "up" !== e && "down" !== e) 
                                                    return [];
                                                var a = s.filter(e => e.type === t.type),
                                                    o = a.findIndex(e => e.id === t.id);
                                                if (-1 === o) 
                                                    return [];
                                                e = "up" === e
                                                    ? o - 1
                                                    : o + 1;
                                                if (e < 0 || e >= a.length) 
                                                    return [];
                                                let l = a[e].id;
                                                o = s.findIndex(e => e.id === l),
                                                a = s[n],
                                                e = s[o];
                                                return [
                                                    {
                                                        id: a.id,
                                                        pos: e.pos
                                                    }, {
                                                        id: e.id,
                                                        pos: a.pos
                                                    }
                                                ]
                                            })(c.data));
                                        return [
                                            [
                                                p.no_content, "none", "No Content"
                                            ],
                                            [
                                                p.useraction_content, "user_action", "User Action"
                                            ],
                                            [
                                                p.smarttip_content, "smarttip", "Smart Tip"
                                            ],
                                            [
                                                p.hint_content, "hint", "Hint"
                                            ],
                                            [
                                                p.button_content, "button", "Button"
                                            ],
                                            [
                                                p.workflow_content, "workflow", "Workflow"
                                            ],
                                            [
                                                p.popup_content, "popup", "Popup"
                                            ],
                                            [
                                                p.tooltip_content, "tooltip", "ToolTip"
                                            ],
                                            [
                                                p.custom_content, "custom_content", "Custom Content"
                                            ]
                                        ].forEach(t => {
                                            if (t[0]) {
                                                t[0]
                                                    .classList
                                                    .add(t[1]);
                                                var n = document.createElement("span"),
                                                    a = (n.innerText = t[2], t[0].querySelector(".header"));
                                                a.insertAdjacentElement("afterbegin", n),
                                                l.appendChild(t[0]);
                                                let e = t[0].querySelector(".data");
                                                a.addEventListener("click", () => {
                                                    e
                                                        .classList
                                                        .contains("collapsed")
                                                            ? (
                                                                e.classList.remove("collapsed"),
                                                                e.classList.add("expanded"),
                                                                _ = o,
                                                                f = s,
                                                                v = i
                                                            )
                                                            : (e.classList.remove("expanded"), e.classList.add("collapsed"))
                                                })
                                            }
                                        }),
                                        !0
                                    })(u, e, l, y, p, m, n, a) || (
                                        l.classList.remove("collapsed"),
                                        l.classList.add("expanded"),
                                        _ = u,
                                        f = n,
                                        v = a
                                    )
                                    : (l.classList.remove("expanded"), l.classList.add("collapsed"))
                        }),
                        h && ((
                            v
                                ? f === n & v === a
                                : E(f, a, n)
                        ) || k(w.host, m) && E(w.pathname, a, n)) && (o.classList.add("this_page"), r = o, s.dispatchEvent(new Event("click"))),
                        b === CONTENT_STATUS.DRAFT
                    ) {
                        s = [];
                        i && s.push({
                            innerHTML: "<i class='fa fa-trash-o' aria-hidden='true'></i>Delete Path",
                            onClick: () => {
                                studio_confirm(`Are you sure to this path '[${a}']${n}?`, async () => {
                                    var e = await C({
                                        cmd: "_udap_removePath",
                                        domains: m,
                                        data: {
                                            ...t,
                                            active: !1
                                        }
                                    });
                                    e.result
                                        ? o.remove()
                                        : studio_alert("Operation failed." + (
                                            e.reason
                                                ? " Reason: " + e.reason
                                                : ""
                                        ))
                                })
                            }
                        });
                        let e = new URLSearchParams(
                            `type=new&siteName=${p}&domains=${c}&origin_pathname=${n}&origin_pathoperator=${a}&tabId=${S}&siteId=${u}&tenantId=` +
                            g
                        );
                        s.push({
                            innerHTML: "<i class='fa fa-plus-circle' aria-hidden='true'></i>New Content",
                            onClick: () => {
                                location.href = "inspection.html?" + e.toString()
                            }
                        }),
                        insertContextButton(o.querySelector(".header.lv2 .buttons"), s)
                    }
                }),
            r
                ?.scrollIntoView(),
            i(),
            L(),
            document
                .querySelector("body > .tenant select.content_mode_select")
                .value = b
        } else 
            studio_alert("Issues on loading Paths. ")
    }
    async function r() {
        if (
            _ || p || w && (e = new URL(w), p = e.host, f = e.pathname),
            document.querySelector(".listing").innerHTML = "",
            g
        ) {
            var e = b ?? document
                    .querySelector(
                        "body > .tenant select.content_mode_select"
                    )
                    .value,
                t = await C({
                    cmd: "_udap_getSites",
                    endpoint: `?page=0&size=1000&tenantId.equals=${g}${e
                        ? "&status.equals=" + e
                        : ""}&sort=lastModifiedDate,desc&sort=id`
                });
            if (t.result) {
                for (
                    var l = document.querySelector(".template .domain"),
                    s = (urls_dic = {}, null),
                    n = 0;
                    n < t.data.length;
                    n++
                ) {
                    let o = t.data[n];
                    if (o.domains && 0 !== o.domains.length) {
                        let t = o.id;
                        o;
                        let e = l.cloneNode(!0),
                            n = (
                                e.querySelector(".pathname").remove(),
                                (c = document.createElement("span")).innerText = o.name,
                                o.domains.map(e => e.url)
                            );
                        var i = n.join("\n"),
                            r = document.createElement("i"),
                            r = (
                                r.innerText = o.domains.length + " url(s)",
                                r.title = i,
                                c.innerText += " ",
                                c.appendChild(r),
                                e.querySelector(".header.lv1")
                            ),
                            c = (r.insertAdjacentElement("afterbegin", c), [
                                {
                                    innerHTML: "<i class='fa fa-eye' aria-hidden='true'></i>Test Launcher Mode",
                                    onClick: () => {
                                        (async e => {
                                            let t = document
                                                    .querySelector(".popup_template .launcher_mode")
                                                    .cloneNode(!0),
                                                o = t.querySelector("input.custom_url"),
                                                n = e
                                                    .domains[0]
                                                    .url
                                                    .startsWith("https://")
                                                        ? e
                                                            .domains[0]
                                                            .url
                                                        : "https://" + e
                                                            .domains[0]
                                                            .url,
                                                a = new URL(n).host,
                                                l = (o.value = a, t.querySelector(".domains")),
                                                s = await(async (e, r) => {
                                                    let t = await C({
                                                            cmd: "_udap_getRelatingURLs",
                                                            data: {
                                                                siteId: e.id
                                                            }
                                                        }),
                                                        c = await C({cmd: "_udap_getLauncherSites", siteId: e.id});
                                                    return t && t.forEach(e => {
                                                        for (
                                                            var t = document.createElement("div"),
                                                            n = (t.className = "item", document.createElement("select")),
                                                            a = [
                                                                {
                                                                    text: "---None---",
                                                                    value: "none"
                                                                }, {
                                                                    text: "PROD FSO",
                                                                    value: "https://unidap.fsoft.com.vn/files/storage/fso/apps/unidap_launcher.js"
                                                                }, {
                                                                    text: "PROD FDI",
                                                                    value: "https://unidap.fsoft.com.vn/files/storage/fdi/apps/unidap_launcher.js"
                                                                }, {
                                                                    text: "DEV FSOFT",
                                                                    value: "https://unidap-dev.fsoft.com.vn/files/storage/fsoft/apps/unidap_launcher.js"
                                                                }
                                                            ],
                                                            o = 0;
                                                            o < a.length;
                                                            o++
                                                        ) {
                                                            var l = a[o],
                                                                s = document.createElement("option");
                                                            s.innerText = l.text,
                                                            s.value = l.value,
                                                            n.appendChild(s)
                                                        }
                                                        c[e] && (n.value = c[e]);
                                                        var i = document.createElement("span");
                                                        i.className = "custom_url",
                                                        i.innerText = e,
                                                        t.appendChild(i),
                                                        t.appendChild(n),
                                                        r.appendChild(t)
                                                    }),
                                                    c
                                                })(e, l);
                                            s[a] && (o.nextElementSibling.value = s[a]),
                                            displayPopup(!1, "Switch on/off Launcher mode", t, [
                                                {
                                                    text: "Switch",
                                                    func: () => {
                                                        (async (e, t, n) => {
                                                            t !== o.value && C({
                                                                cmd: "_udap_setRelatingURLs",
                                                                data: {
                                                                    siteId: e.id,
                                                                    custom_url: o.value
                                                                }
                                                            });
                                                            let a = [];
                                                            n
                                                                .querySelectorAll(".item")
                                                                .forEach(e => {
                                                                    var t = e
                                                                        .querySelector("select")
                                                                        .value;
                                                                    "none" !== t && (
                                                                        e = "text" === (e = e.querySelector(".custom_url")).type
                                                                            ? e.value
                                                                            : e.innerText,
                                                                        a.push({host: e, launcherUrl: t})
                                                                    )
                                                                }),
                                                            await C({cmd: "_udap_launcherMode", siteId: e.id, hosts: a}),
                                                            studio_alert("Please refresh the page and observe the change.", !1)
                                                        })(e, a, l)
                                                    }
                                                }, {
                                                    text: "Close",
                                                    func: studio_closePopup
                                                }
                                            ])
                                        })(o)
                                    }
                                }, {
                                    innerHTML: "<i class='fa fa-download' aria-hidden='true'></i>Download",
                                    onClick: () => {
                                        (async (e, t, n) => {
                                            if (!(e = await C({cmd: "_udap_downloadSiteContent", site: e, status: t, tenantId: n})).result) 
                                                e.reason
                                                    ? studio_alert(e.reason)
                                                    : studio_alert("Download content operation failed.")
                                            })(o, b, g)
                                    }
                                }
                            ]),
                            d = r.querySelector(".buttons .new_content");
                        if (b === CONTENT_STATUS.DRAFT) {
                            let e = new URLSearchParams(
                                `type=new&siteName=${o.name}&domains=${i}&tabId=${S}&siteId=${t}&tenantId=` +
                                g
                            );
                            d.addEventListener("click", () => {
                                location.href = "inspection.html?" + e.toString()
                            }),
                            c.push({
                                innerHTML: "<i class='fa fa-paint-brush' aria-hidden='true'></i>Custom Style",
                                onClick: () => {
                                    location.href = `style.html?siteId=${t}&tabId=${S}&tenantId=` + g
                                }
                            }),
                            c.push({
                                innerHTML: "<i class='fa fa-plus-circle' aria-hidden='true'></i>New Content",
                                onClick: () => {
                                    location.href = "inspection.html?" + e.toString()
                                }
                            })
                        } else 
                            d.remove();
                        insertContextButton(r.querySelector(".buttons"), c),
                        document
                            .querySelector(".listing")
                            .appendChild(e);
                        var u = !1;
                        let a = e.querySelector(".pathNames");
                        r.addEventListener("click", () => {
                            a
                                .classList
                                .contains("collapsed")
                                    ? (
                                        a.classList.remove("collapsed"),
                                        a.classList.add("expanded"),
                                        _ = t,
                                        0 === e.querySelectorAll(".pathname").length && m(a, t, o.name, n, u)
                                    )
                                    : (a.classList.remove("expanded"), a.classList.add("collapsed"))
                        }),
                        (_ == t || !_ && k(p, n)) && (
                            u = !0,
                            e.classList.add("this_site"),
                            s = e,
                            r.dispatchEvent(new Event("click"))
                        )
                    }
                }
                s
                    ?.scrollIntoView()
            } else 
                studio_alert(t.reason || "Issues on loading sites.")
        }
    }
    async function n() {
        if (g && 0 != g.length) 
            r();
        else {
            if (e = await C({cmd: "_udap_getAccount"}), (
                t = e
                    ?.data
            ) && t.email && (
                e = await C({
                    cmd: "_udap_getTenantList",
                    endpoint: "/" + t.email
                }),
                a = e.result
                    ? e
                        ?.data
                        : null
            ), !await(!(
                !a
                    ?.tenants || 0 === a.tenants.length
            ) || (studio_alert("Issues on loading tenantInfo."), !1))) 
                return !1;
            
            {
                let n = document.querySelector("body > .tenant select.tenant_select");
                n.innerHTML = "",
                a.tenants
                    ?.length && a
                        ?
                            .tenants
                            .forEach(e => {
                                var t = document.createElement("option");
                                t.value = e.id,
                                t.textContent = e
                                    .name
                                    .toUpperCase(),
                                n.appendChild(t)
                            })
            }
            chrome
                .storage
                .local
                .get("_udap_selectedTenantID", function (e) {
                    let t = e._udap_selectedTenantID;
                    var e = a
                            .tenants
                            .find(e => e.id == t),
                        n = e || a.tenants[0],
                        e = (
                            e || chrome.storage.local.set({_udap_selectedTenantID: n.id}),
                            document.querySelector("body > .tenant select.tenant_select")
                        );
                    e.value = n.id,
                    e.dispatchEvent(new Event("change", {
                        bubbles: !0
                    }))
                })
        }
        var e;
        return !0
    }
    function T() {
        v = p = null,
        n()
    }
    function k(t, n) {
        if ("string" == typeof n) 
            return c(t, n);
        for (let e = 0; e < n.length; e++) 
            if (c(t, n[e])) 
                return 1
    }
    function c(t, n) {
        try {
            return new URL(
                t.startsWith("http")
                    ? t
                    : "https://" + t
            ).host === new URL(
                n.startsWith("http")
                    ? n
                    : "https://" + n
            ).host
        } catch (e) {
            return t === n
        }
    }
    function C(e, t) {
        if (0 != (!(1 < arguments.length && void 0 !== t) || t)) 
            return new Promise((t, n) => {
                chrome
                    .runtime
                    .sendMessage(e, e => {
                        e
                            ? (401 === e.statusCode && chrome.runtime.sendMessage({
                                cmd: "_udap_removeAuthCookies"
                            }, async e => {
                                a = {
                                    cmd: "_udap_openAuthWindow"
                                };
                                var a,
                                    t = await new Promise((t, n) => {
                                        chrome
                                            .runtime
                                            .sendMessage(a, e => {
                                                chrome.runtime.lastError
                                                    ? n(chrome.runtime.lastError)
                                                    : t(e)
                                            })
                                    });
                                t.loggedIn
                                    ? window
                                        .location
                                        .reload()
                                    : studio_alert(t.reason || "")
                            }), t(e))
                            : n(!1)
                    })
            });
        chrome
            .runtime
            .sendMessage(e)
    }
})();