_udap_runUniDAP();
let tabId,
    source_url = chrome.runtime.id;
async function _udap_runUniDAP() {
    var e = document.createElement("link");
    e.setAttribute("rel", "stylesheet"),
    e.setAttribute(
        "href",
        chrome.runtime.getURL("apps/Studio/css/fonts/font-awesome.min.css")
    ),
    e.setAttribute("type", "text/css"),
    document
        .head
        .appendChild(e),
    chrome
        .runtime
        .onMessage
        .addListener((e, t, a) => {
            if (e.dst === source_url) {
                var s;
                switch (e.cmd) {
                    case "_udap_showStudio":
                        e.injection_only || (tabId = e.tabId, showStudio());
                        break;
                    case "_udap_showContent":
                        tabId = e.tabId,
                        showContent(e.data, e.tab);
                        break;
                    case "_udap_inspect":
                        s = {
                            cmd: "_udap_inspect",
                            tabId: tabId ?? e.tabId,
                            source: e.source,
                            source_id: e.source_id,
                            allow_multiple_eles: !1 | e.allow_multiple_eles,
                            isChild: e.isChild,
                            dst: source_url
                        },
                        window.postMessage(s, "*"),
                        processInFrame(e => {
                            e.postMessage(s, "*")
                        });
                        break;
                    case "_udap_set_current_selector":
                        s = {
                            cmd: "_udap_set_current_selector",
                            tabId: tabId ?? e.tabId,
                            source: e.source,
                            currentlySelectedElement: e.currentlySelectedElement,
                            frameInfo: e.frameInfo,
                            dst: source_url
                        },
                        window.postMessage(s, "*"),
                        processInFrame(e => {
                            e.postMessage(s, "*")
                        });
                        break;
                    case "_udap_find":
                        s = {
                            cmd: "_udap_find",
                            tabId: tabId,
                            data: e.data,
                            frameInfo: e.frameInfo,
                            dst: source_url
                        },
                        window.postMessage(s, "*"),
                        processInFrame(e => {
                            e.postMessage(s, "*")
                        });
                        break;
                    case "_udap_stopinspection":
                        s = {
                            cmd: "_udap_stopinspection",
                            tabId: tabId,
                            source: e.source,
                            dst: source_url
                        },
                        window.postMessage(s, "*"),
                        processInFrame(e => {
                            e.postMessage(s, "*")
                        });
                        break;
                    case "_udap_getFrames":
                        let t = [];
                        processInFrame(e => {
                            try {
                                t.push(e.location.pathname)
                            } catch (e) {}
                        }),
                        _studio_postMessage({
                            cmd: "_udap_setFrames",
                            data: t,
                            dst: source_url
                        }, tabId);
                        break;
                    case "_udap_addSmartTip":
                        s = {
                            cmd: "_udap_addSmartTip",
                            tabId: tabId,
                            data: e.data,
                            trigger_content: e.trigger_content,
                            frameInfo: e.frameInfo,
                            dst: source_url
                        },
                        window.postMessage(s, "*"),
                        processInFrame(e => {
                            e.postMessage(s, "*")
                        });
                        break;
                    case "_udap_addHint":
                        s = {
                            cmd: "_udap_addHint",
                            tabId: tabId,
                            data: e.data,
                            trigger_content: e.trigger_content,
                            frameInfo: e.frameInfo,
                            dst: source_url
                        },
                        window.postMessage(s, "*"),
                        processInFrame(e => {
                            e.postMessage(s, "*")
                        });
                        break;
                    case "_udap_addCustomContent":
                        s = {
                            cmd: "_udap_addCustomContent",
                            tabId: tabId,
                            data: e.data,
                            frameInfo: e.frameInfo,
                            dst: source_url
                        },
                        window.postMessage(s, "*"),
                        processInFrame(e => {
                            e.postMessage(s, "*")
                        });
                        break;
                    case "_udap_applyCustomStyle":
                        s = {
                            cmd: "_udap_applyCustomStyle",
                            tabId: tabId,
                            data: e.data,
                            dst: source_url
                        },
                        window.postMessage(s, "*"),
                        processInFrame(e => {
                            e.postMessage(s, "*")
                        });
                        break;
                    case "_udap_unapplyCustomStyle":
                        s = {
                            cmd: "_udap_unapplyCustomStyle",
                            tabId: tabId,
                            data: e.data,
                            dst: source_url
                        },
                        window.postMessage(s, "*"),
                        processInFrame(e => {
                            e.postMessage(s, "*")
                        });
                        break;
                    case "_udap_addButton":
                        s = {
                            cmd: "_udap_addButton",
                            tabId: tabId,
                            data: e.data,
                            trigger_content: e.trigger_content,
                            frameInfo: e.frameInfo,
                            dst: source_url
                        },
                        window.postMessage(s, "*"),
                        processInFrame(e => {
                            e.postMessage(s, "*")
                        });
                        break;
                    case "_udap_addWorkflow":
                        s = {
                            cmd: "_udap_addWorkflow",
                            tabId: tabId,
                            data: e.data,
                            frameInfo: e.frameInfo,
                            dst: source_url
                        },
                        window.postMessage(s, "*"),
                        processInFrame(e => {
                            e.postMessage(s, "*")
                        });
                        break;
                    case "_udap_addPopup":
                        s = {
                            cmd: "_udap_addPopup",
                            tabId: tabId,
                            data: e.data,
                            frameInfo: e.frameInfo,
                            dst: source_url
                        },
                        window.postMessage(s, "*"),
                        processInFrame(e => {
                            e.postMessage(s, "*")
                        });
                        break;
                    case "_udap_addTooltip":
                        s = {
                            cmd: "_udap_addTooltip",
                            tabId: tabId,
                            data: e.data,
                            frameInfo: e.frameInfo,
                            dst: source_url
                        },
                        window.postMessage(s, "*"),
                        processInFrame(e => {
                            e.postMessage(s, "*")
                        })
                }
                return !1
            }
        }),
    window.addEventListener("message", function (t) {
        if (t.data.dst === source_url) 
            switch (t.data.cmd) {
                case "_udap_selectedelement":
                    _studio_postMessage({
                        cmd: "_udap_selectedelement",
                        data: t.data.data,
                        source: t.data.source,
                        source_id: t.data.source_id,
                        hasScrollParent: t.data.hasScrollParent,
                        url: 0 < window.frames.length
                            ? t.data.url
                            : null
                    }, t.data.tabId);
                    break;
                case "_udap_stopinspection":
                    t.data.tabId || processInFrame(e => {
                        e.postMessage({
                            cmd: "_udap_stopinspection",
                            source: t.data.source,
                            dst: source_url
                        }, "*")
                    });
                    break;
                case "_udap_redirectAfterLogin":
                    window
                        ._udap_page
                        .studio_iframe
                        .setAttribute("src", chrome.runtime.getURL(
                            `apps/Studio/index.html?tabId=${tabId}&source_url=` + source_url
                        ))
            }
        })
}
function showContent(e) {
    showStudio(
        chrome.runtime.getURL("apps/Studio/inspection.html") + ("?" + e.searchPara)
    )
}
function showStudio() {
    var e = 0 < arguments.length && void 0 !== arguments[0]
        ? arguments[0]
        : null;
    if (!document.getElementById("_udap_studio")) {
        let a = document.createElement("div");
        a.setAttribute("id", "_udap_studio");
        var t = document.createElement("div"),
            s = (t.className = "_udap_header", document.createElement("span")),
            s = (
                s.innerText = `UniDAP Studio (${chrome.runtime.getManifest().version})`,
                t.appendChild(s),
                document.createElement("div")
            ),
            d = (
                s.innerHTML = "<button class='close_btn'>X</button>",
                s.className = "_udap_home",
                s.title = "Home",
                t.appendChild(s),
                document.createElement("div")
            ),
            o = (
                d.className = "_udap_mini",
                d.title = "Minimize",
                t.appendChild(d),
                window._udap_page.studio_iframe = document.createElement("iframe"),
                window._udap_page.studio_iframe.className = "_udap_frame",
                window._udap_page.studio_iframe.setAttribute("allow", "clipboard-read; clipboard-write"),
                window._udap_page.studio_iframe.setAttribute("src", e || chrome.runtime.getURL(
                    `apps/Studio/login.html?origin_host=${location.href}&tabId=${tabId}&source_url=` +
                    source_url
                )),
                a.appendChild(t),
                a.appendChild(window._udap_page.studio_iframe),
                document.documentElement.appendChild(a),
                d.addEventListener("click", () => {
                    a
                        .classList
                        .contains("minimized")
                            ? a
                                .classList
                                .remove("minimized")
                            : a
                                .classList
                                .add("minimized")
                }),
                s.addEventListener("click", () => {
                    a.remove()
                }),
                !1
            ),
            n = 0,
            r = 0;
        t.addEventListener("mousedown", function (e) {
            a
                .classList
                .contains("minimized") || (
                    o = !0,
                    n = a.offsetLeft - e.clientX,
                    r = a.offsetTop - e.clientY,
                    e.preventDefault()
                )
        }, !0),
        document.addEventListener("mouseup", function (e) {
            var t;
            o && (
                o = !1,
                (t = a.getBoundingClientRect()).right < 150
                    ? a.style.left = 0
                    : t.left >= window.innerWidth - 100 && (
                        a.style.left = window.innerWidth - 200 + "px"
                    ),
                t.top < 0
                    ? a.style.top = 0
                    : t.top >= window.innerHeight && (a.style.top = window.innerHeight - 50 + "px"),
                0
            )
        }, !0),
        document.addEventListener("mousemove", function (e) {
            o && (
                a.style.left = e.clientX + n + "px",
                a.style.top = e.clientY + r + "px",
                0
            )
        }, !0)
    }
}
function processInFrame(e) {
    for (var t = 0; t < window.frames.length; t++) 
        try {
            window._udap_page.studio_iframe
                ?.contentWindow !== window.frames[t] && e(window.frames[t])
        } catch (e) {
            continue
        }
    }
function _studio_postMessage(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1]
        ? arguments[1]
        : null;
    e.dst = source_url,
    t && (e.tabId = t, chrome.runtime.sendMessage(e))
}