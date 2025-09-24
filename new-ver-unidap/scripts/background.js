var uniDAPConf = {},
    X_XSRF_TOKEN = null,
    apiBaseURl = null,
    apiSSOURl = null;
importScripts("./testing_mode.js"),
fetch(chrome.runtime.getURL("resources/database.json"))
    .then(e => e.json())
    .then(e => {
        (uniDAPConf = e).db = null,
        apiBaseURl = uniDAPConf.settings.endpoint,
        apiSSOURl = uniDAPConf.settings.ssoEndpoint
    }),
chrome
    .runtime
    .onInstalled
    .addListener(() => {
        chrome
            .contextMenus
            .create({
                id: "unidap_studio_" + chrome.runtime.id,
                title: "UniDAP Studio",
                contexts: ["all"]
            })
    }),
chrome
    .contextMenus
    .onClicked
    .addListener(async (e, t) => {
        e.menuItemId === "unidap_studio_" + chrome.runtime.id && chrome
            .tabs
            .sendMessage(t.id, {
                cmd: "_udap_showStudio",
                injection_only: !1,
                tabId: t.id,
                dst: chrome.runtime.id
            })
    }),
chrome
    .sidePanel
    .setPanelBehavior({
        openPanelOnActionClick: !1
    })
    .catch(e => console.log(e)),
chrome
    .tabs
    .onUpdated
    .addListener(async (e, t, n) => {
        "complete" === t.status && n
            .url
            .startsWith("https://") && (await chrome.sidePanel.setOptions({
            tabId: e,
            path: chrome
                .runtime
                .getURL("apps/Studio/index.html?tabId=" + n.id),
            enabled: !0
        }).catch(e => console.log(e)), chrome.tabs.sendMessage(e, {
            cmd: "_udap_showStudio",
            injection_only: !0,
            tabId: n.id,
            dst: chrome.runtime.id
        }))
    });
let forwarder = [
        "_udap_getAccount",
        "_udap_getTenantList",
        "_udap_getSites",
        "_udap_getSitePaths",
        "_udap_getContents",
        "_udap_updateContentPos",
        "_udap_updateContentStatus",
        "_udap_insertPath",
        "_udap_removePath",
        "_udap_getContent",
        "_udap_getLanguages",
        "_udap_insertContent",
        "_udap_updateContent",
        "_udap_removeContent",
        "_udap_cloneContent",
        "_udap_publishContent",
        "_udap_insertLanguage",
        "_udap_removeLanguage",
        "_udap_updateLanguage",
        "_udap_getVariables",
        "_udap_getVariable",
        "_udap_updateVariable",
        "_udap_insertVariable",
        "_udap_removeVariable",
        "_udap_removeProfile",
        "_udap_updateProfile",
        "_udap_getProfile",
        "_udap_getVarGroupNames",
        "_udap_insertVarGroup",
        "_udap_updateVarGroup",
        "_udap_removeVarGroup",
        "_udap_insertStyle",
        "_udap_updateStyle",
        "_udap_getStyle",
        "_udap_getStyleList",
        "_udap_removeStyle",
        "_udap_getCustomizableContentTypes",
        "_udap_getTags",
        "_udap_getUserAttributes",
        "_udap_getStaticResources",
        "_udap_getStaticResourceDetail",
        "_udap_getLanguageOptions"
    ],
    apiCmdMapper = [
        {
            cmd: "_udap_getAccount",
            endpoint: "/api/account",
            method: "GET"
        }, {
            cmd: "_udap_getTenantList",
            endpoint: "/services/unidap_dap_microservice/api/users/logged-in",
            method: "GET"
        }, {
            cmd: "_udap_getSites",
            endpoint: "/services/unidap_dap_microservice/api/sites",
            method: "GET"
        }, {
            cmd: "_udap_getSitePaths",
            endpoint: "/services/unidap_dap_microservice/api/sub-paths",
            method: "GET"
        }, {
            cmd: "_udap_getContents",
            endpoint: "/services/unidap_dap_microservice/api/contents",
            method: "GET"
        }, {
            cmd: "_udap_getContent",
            endpoint: "/services/unidap_dap_microservice/api/contents/",
            method: "GET"
        }, {
            cmd: "_udap_insertPath",
            endpoint: "/services/unidap_dap_microservice/api/sub-paths",
            method: "POST"
        }, {
            cmd: "_udap_removePath",
            endpoint: "/services/unidap_dap_microservice/api/sub-paths",
            method: "PUT"
        }, {
            cmd: "_udap_insertContent",
            endpoint: "/services/unidap_dap_microservice/api/contents",
            method: "POST"
        }, {
            cmd: "_udap_updateContent",
            endpoint: "/services/unidap_dap_microservice/api/contents",
            method: "PUT"
        }, {
            cmd: "_udap_removeContent",
            endpoint: "/services/unidap_dap_microservice/api/contents",
            method: "DELETE"
        }, {
            cmd: "_udap_cloneContent",
            endpoint: "/services/unidap_dap_microservice/api/contents/clone/",
            method: "GET"
        }, {
            cmd: "_udap_publishContent",
            endpoint: "/services/unidap_dap_microservice/api/contents/publish",
            method: "PUT"
        }, {
            cmd: "_udap_updateContentPos",
            endpoint: "/services/unidap_dap_microservice/api/contents/update-pos",
            method: "PUT"
        }, {
            cmd: "_udap_getCustomizableContentTypes",
            endpoint: "/services/unidap_dap_microservice/api/style-types",
            method: "GET"
        }, {
            cmd: "_udap_getStyleList",
            endpoint: "/services/unidap_dap_microservice/api/templates",
            method: "GET"
        }, {
            cmd: "_udap_getStyle",
            endpoint: "/services/unidap_dap_microservice/api/templates/",
            method: "GET"
        }, {
            cmd: "_udap_insertStyle",
            endpoint: "/services/unidap_dap_microservice/api/templates",
            method: "POST"
        }, {
            cmd: "_udap_updateStyle",
            endpoint: "/services/unidap_dap_microservice/api/templates",
            method: "PUT"
        }, {
            cmd: "_udap_removeStyle",
            endpoint: "/services/unidap_dap_microservice/api/templates/",
            method: "DELETE"
        }, {
            cmd: "_udap_getTags",
            endpoint: "/services/unidap_dap_microservice/api/tags",
            method: "GET"
        }, {
            cmd: "_udap_getUserAttributes",
            endpoint: "/services/unidap_dap_microservice/api/user-attributes",
            method: "GET"
        }, {
            cmd: "_udap_getStaticResources",
            endpoint: "/services/unidap_dap_microservice/api/files",
            method: "GET"
        }, {
            cmd: "_udap_getStaticResourceDetail",
            endpoint: "/services/unidap_dap_microservice/api/files/",
            method: "GET"
        }, {
            cmd: "_udap_getLanguages",
            endpoint: "/services/unidap_dap_microservice/api/language-managements",
            method: "GET"
        }, {
            cmd: "_udap_getVarGroupNames",
            endpoint: "/services/unidap_dap_microservice/api/function-groups",
            method: "GET"
        }, {
            cmd: "_udap_insertVarGroup",
            endpoint: "/services/unidap_dap_microservice/api/function-groups",
            method: "POST"
        }, {
            cmd: "_udap_updateVarGroup",
            endpoint: "/services/unidap_dap_microservice/api/function-groups",
            method: "PUT"
        }, {
            cmd: "_udap_removeVarGroup",
            endpoint: "/services/unidap_dap_microservice/api/function-groups/",
            method: "DELETE"
        }, {
            cmd: "_udap_getVariables",
            endpoint: "/services/unidap_dap_microservice/api/custom-functions",
            method: "GET"
        }, {
            cmd: "_udap_getVariable",
            endpoint: "/services/unidap_dap_microservice/api/custom-functions/",
            method: "GET"
        }, {
            cmd: "_udap_updateVariable",
            endpoint: "/services/unidap_dap_microservice/api/custom-functions",
            method: "PUT"
        }, {
            cmd: "_udap_insertVariable",
            endpoint: "/services/unidap_dap_microservice/api/custom-functions",
            method: "POST"
        }, {
            cmd: "_udap_removeVariable",
            endpoint: "/services/unidap_dap_microservice/api/custom-functions/",
            method: "DELETE"
        }
    ];
function getCookie() {
    return new Promise(t => {
        var e = uniDAPConf.settings.endpoint;
        let n = setTimeout(() => {
            t(null)
        }, 3e3);
        chrome
            .cookies
            .get({
                url: e,
                name: "XSRF-TOKEN"
            }, e => {
                clearTimeout(n),
                chrome.runtime.lastError
                    ? (console.error("getCookie error:", chrome.runtime.lastError), t(null))
                    : e && e.value
                        ? (console.debug("getCookie:", e.value), t(e.value))
                        : (console.info("getCookie: không tìm thấy cookie"), t(null))
            })
    })
}
async function downloadSiteContent(e, t, a, i) {
    try {
        var o = await getCookie();
        if (!o) 
            return void i({
                result: !1,
                reason: "Session expired. Please login again."
            });
        var s = apiBaseURl + "/services/unidap_dap_microservice/api/file-content-versio" +
                    "ns/download/latest",
            d = JSON.stringify({siteId: e.id, status: t, tenantId: a}),
            r = `udap_content_${e
                .name
                .replace(/ /g, "_")}_${t}__${a}_${e
                .externalId}_seg.js`;
        let n = await chrome
            .downloads
            .download({
                url: s,
                method: "POST",
                headers: [
                    {
                        name: "Content-Type",
                        value: "application/json"
                    }, {
                        name: "X-XSRF-TOKEN",
                        value: o
                    }
                ],
                body: d,
                filename: r,
                saveAs: !0,
                conflictAction: "uniquify"
            });
        chrome
            .downloads
            .onChanged
            .addListener(function e(t) {
                t.id === n && (
                    t.state && "complete" === t.state.current && (chrome.downloads.onChanged.removeListener(e), i({
                        result: !0,
                        downloadId: n
                    })),
                    t.state
                ) && "interrupted" === t.state.current && (
                    chrome.downloads.onChanged.removeListener(e),
                    i({
                        result: !0,
                        reason: "File content not found."
                    })
                )
            })
    } catch (e) {
        i({
            result: !1,
            reason: e instanceof Error
                ? e.message
                : String(e)
        })
    }
    return !0
}
async function openAuthWindow(o) {
    var e = uniDAPConf.settings.ssoEndpoint + "?response_type=code&client_id=unidap" +
            "_v1_web_app&scope=openid%20profile%20email&redirect_uri=" + uniDAPConf.settings.endpoint;
    let s = 0;
    chrome
        .windows
        .create({
            url: e,
            type: "popup",
            width: 800,
            height: 600,
            left: 200,
            top: 100
        }, n => {
            let a = 5,
                i = async function () {
                    let t = null;
                    var e;
                    await areCookiesPresent(
                        uniDAPConf.settings.endpoint,
                        uniDAPConf.settings.authCookies,
                        e => {
                            t = e
                        }
                    ),
                    t.loggedIn
                        ? (
                            s = 0,
                            chrome.windows.remove(n.id),
                            (e = await updateServer({cmd: "_udap_getAccount"})).result || 401 !== e.statusCode
                                ? o(t)
                                : o({
                                    loggedIn: !1,
                                    reason: "Unauthorized"
                                })
                        )
                        : s < a
                            ? (s++, setTimeout(i, 2e3))
                            : (s = 0, chrome.windows.remove(n.id), o({
                                loggedIn: !1,
                                reason: "timeout or max attempts"
                            }))
                };
            setTimeout(i, 2e3)
        })
}
async function areCookiesPresent(e, o, t) {
    t({
        loggedIn: await new Promise(n => {
            let a = 0,
                i = !1;
            o.forEach(t => {
                chrome
                    .cookies
                    .get({
                        url: e,
                        name: t
                    }, e => {
                        a++,
                        e && "XSRF-TOKEN" === t && (X_XSRF_TOKEN = e.value),
                        e || (i = !0),
                        a === o.length && n(!i)
                    })
            })
        })
    })
}
function removeCookies(a, i, o) {
    return new Promise(t => {
        if (!i.length) 
            return t(!0);
        let n = 0;
        i.forEach(e => {
            chrome
                .cookies
                .remove({
                    url: a,
                    name: e
                }, e => {
                    ++n === i.length && (o && o(!0), t(!0))
                })
        })
    })
}
function openContentInNewTab(o) {
    chrome
        .tabs
        .create({
            url: o.href
        }, function (i) {
            chrome
                .tabs
                .onUpdated
                .addListener(function e(t, n, a) {
                    if (i.id !== t) 
                        return;
                    n.status && "complete" == n.status && a.url === o.href && (
                        chrome.tabs.sendMessage(a.id, {
                            cmd: "_udap_showContent",
                            data: o,
                            tabId: t,
                            dst: chrome.runtime.id
                        }),
                        chrome.tabs.onUpdated.removeListener(e)
                    )
                })
        })
}
async function verifyJS(e, t) {
    t({
        result: !0
    })
}
async function forwardRequest(e, t) {
    e(await updateServer(t))
}
async function get_ApiEndpoints(e) {
    apiBaseURl = (
        apiBaseURl = apiBaseURl || await readLocalStorage("_udap_endpoint")
    ) || uniDAPConf.settings.endpoint,
    apiSSOURl = (
        apiSSOURl = apiSSOURl || await readLocalStorage("_udap_ssoEndpoint")
    ) || uniDAPConf.settings.endpoint,
    e({
        result: !0,
        endpoint: apiBaseURl,
        ssoEndpoint: apiSSOURl
    })
}
async function publish_Content(e, t, n, a, i) {
    i({
        result: !0
    })
}
function save_APIEndpoints(e, t, n) {
    chrome
        .storage
        .local
        .set({_udap_endpoint: e}),
    uniDAPConf.settings.endpoint = e,
    apiBaseURl = e,
    chrome
        .storage
        .local
        .set({_udap_ssoEndpoint: t}),
    uniDAPConf.settings.ssoEndpoint = t,
    apiSSOURl = t,
    n({
        result: !0
    })
}
async function updateServer(t) {
    var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
        n = apiCmdMapper.find(e => e.cmd === t.cmd);
    if (!n) 
        return {
            result: !1,
            reason: "API Command not found."
        };
    var a = t.data;
    let i = null,
        o = !1;
    if (await new Promise(t => {
        chrome
            .cookies
            .get({
                url: uniDAPConf.settings.endpoint,
                name: "XSRF-TOKEN"
            }, e => {
                e && (i = e.value, o = !0),
                t()
            })
    }), !o) {
        let t = "Session expired or cookie not found.";
        try {
            new URL(uniDAPConf.settings.endpoint)
        } catch (e) {
            t = "Invalid URL for cookie retrieval."
        }
        return {
            result: !1,
            reason: t
        }
    }
    if (!i) 
        return {
            result: !1,
            reason: "Session expired. Please login again.",
            statusCode: 401
        };
    var s = {
            method: n.method,
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
                "X-XSRF-TOKEN": i
            }
        },
        a = (
            a && ["POST", "PUT", "PATCH", "DELETE"].includes(n.method) && (s.body = JSON.stringify(a)),
            null
        ),
        n = apiBaseURl + n.endpoint + (
            t
                ?.endpoint || ""
        );
    if (e) {
        a = await fetchWithTimeout(n, s);
        let t;
        try {
            t = await a.json()
        } catch (e) {
            t = {}
        }
        return {result: a.ok, data: t, statusCode: a.status}
    }
    fetch(n, s)
}
async function fetchWithTimeout(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : {}, {
            timeout: n = 8e3
        } = t;
    let a = new AbortController;
    n = setTimeout(() => a.abort(), n),
    e = await fetch(e, {
        ...t,
        signal: a.signal
    });
    return clearTimeout(n),
    e
}
chrome
    .runtime
    .onMessage
    .addListener(function (e, t, n) {
        var a;
        if (forwarder.includes(e.cmd)) 
            return forwardRequest(n, e),
            !0;
        switch (e.cmd) {
            case "_udap_getCurrentURL":
                if (a = parseInt(e.tabId, 10), !isNaN(a)) 
                    return chrome
                        .tabs
                        .get(a, e => {
                            n(e.url)
                        }),
                    !0;
                n(t.tab.url);
                break;
            case "_udap_openContentInNewTab":
                return openContentInNewTab(e.data),
                !1;
            case "_udap_setAPIEndpoints":
                return save_APIEndpoints(e.data.endpoint, e.data.ssoEndpoint, n),
                !1;
            case "_udap_getAPIEndpoints":
                return get_ApiEndpoints(n),
                !0;
            case "_udap_publish":
                return publish_Content(
                    e.data.host,
                    e.data.content,
                    e.data.filename,
                    e.data.env,
                    n
                ),
                !0;
            case "_udap_launcherMode":
                return switchLauncher(e.siteId, e.hosts, n),
                !0;
            case "_udap_getLauncherUrl":
                return n(getLauncherUrl(t.tab.url)),
                !1;
            case "_udap_getLauncherSites":
                return n(getLauncherSites(e.siteId)),
                !1;
            case "_udap_verifyJS":
                return verifyJS(e.data.content, n),
                !0;
            case "_udap_getRelatingURLs":
                return getRelatingURLs(e.data.siteId, n),
                !0;
            case "_udap_setRelatingURLs":
                return setRelatingURLs(e.data.siteId, e.data.custom_url, n),
                !0;
            case "_udap_checkAuthCookies":
                return areCookiesPresent(
                    uniDAPConf.settings.endpoint,
                    uniDAPConf.settings.authCookies,
                    n
                ),
                !0;
            case "_udap_removeAuthCookies":
                return removeCookies(
                    uniDAPConf.settings.endpoint,
                    uniDAPConf.settings.authCookies,
                    n
                ),
                !0;
            case "_udap_openAuthWindow":
                return openAuthWindow(n),
                !0;
            case "_udap_downloadSiteContent":
                return downloadSiteContent(e.site, e.status, e.tenantId, n),
                !0
        }
        return e.cmd = "",
        !1
    }),
chrome
    .action
    .onClicked
    .addListener(async t => {
        await chrome
            .sidePanel
            .open({tabId: t.id})
            .catch(e => {
                chrome
                    .tabs
                    .sendMessage(t.id, {
                        cmd: "_udap_showStudio",
                        injection_only: !1,
                        tabId: t.id,
                        dst: chrome.runtime.id
                    })
            })
        });
let readLocalStorage = async n => new Promise((t, e) => {
    chrome
        .storage
        .local
        .get([n], function (e) {
            void 0 === e[n]
                ? t("")
                : t(e[n])
        })
});
async function getRelatingURLs(e, n) {
    e = await readLocalStorage("_udap_relatingURLs_" + e);
    if (e) {
        e = JSON.parse(e);
        let t = [];
        Object
            .keys(e)
            .forEach(e => {
                t.push(e)
            }),
        n(t)
    } else 
        n([])
}
async function setRelatingURLs(e, t, n) {
    let a;
    try {
        a = JSON.parse(await readLocalStorage("_udap_relatingURLs_" + e))
    } catch (e) {
        a = {}
    }
    a[t] = 1;
    t = {};
    t["_udap_relatingURLs_" + e] = JSON.stringify(a),
    chrome
        .storage
        .local
        .set(t),
    n({
        result: !0
    })
}