let cspConfig = {
        sites: {},
        directives: [
            "connect-src",
            "script-src",
            "font-src",
            "img-src",
            "style-src",
            "frame-src"
        ],
        values: ["'unsafe-inline'", "https://unidap.fsoft.com.vn", "https://unidap-dev.fsoft.com.vn"]
    },
    cspContent = {},
    LEGACY_LAUNCHER_RULE = 99,
    ruleId = LEGACY_LAUNCHER_RULE + 1;
function getLauncherUrl(e) {
    for (var s in cspConfig.sites) 
        if (e.startsWith("https://" + s)) 
            return cspConfig
                .sites[s]
                .launcherUrl;
    return null
}
function getLauncherSites(e) {
    var s,
        t = {};
    for (s in cspConfig.sites) 
        cspConfig
            .sites[s]
            .siteId === e && (t[s] = cspConfig.sites[s].launcherUrl);
    return t
}
function switchLauncher(t, i, e) {
    unregisterAllRules(cspContent),
    cspContent = {},
    cspConfig.sites = {};
    let s = [];
    if (0 < i.length) {
        let s = [],
            e = (i.forEach(e => {
                s.push(e.host),
                cspConfig.sites[e.host] = {
                    launcherUrl: e.launcherUrl,
                    siteId: t
                }
            }), [
                {
                    id: LEGACY_LAUNCHER_RULE,
                    priority: 1,
                    action: {
                        type: "block"
                    },
                    condition: {
                        urlFilter: "*//unidap*.fsoft.com.vn/*/unidap_launcher.js|",
                        initiatorDomains: s,
                        resourceTypes: ["script"]
                    }
                }
            ]);
        chrome
            .declarativeNetRequest
            .updateDynamicRules({addRules: e})
    }
    chrome
        .storage
        .local
        .set({cspConfigSites: cspConfig.sites}),
    e(!0)
}
function unregisterAllRules(e) {
    let s = [];
    Object
        .values(e)
        .forEach(e => {
            e.paths && Object
                .values(e.paths)
                .forEach(e => {
                    s.push(e)
                })
        }),
    0 < s.length && (
        s.push(LEGACY_LAUNCHER_RULE),
        chrome.declarativeNetRequest.updateDynamicRules({removeRuleIds: s})
    )
}
function getUrl(s) {
    for (let e = 0; e < s.length; e++) 
        if ("Location" === s[e].name) 
            return new URL(s[e].value);
return null
}
function buildCSPValue(e, s) {
    let t = {},
        i = !1,
        n = ["frame-ancestors", "sandbox", "report-uri"];
    for (var r = 0; r < e.length; r++) 
        "Content-Security-Policy" === e[r].name && (
            i = !0,
            e[r].value.split(";").forEach(e => {
                var e = e
                        .trim()
                        .split(" "),
                    s = e[0].trim();
                n.includes(s) || (
                    e = e.slice(1),
                    t[s]
                        ? t[s] = mergeUniqueArrays(t[s], e)
                        : t[s] = e
                )
            })
        );
    if (!i) 
        return null;
    s
        .directives
        .forEach(e => {
            !t[e] || t[e].includes("'none'")
                ? t[e] = [
                    "'self'", ...s.values
                ]
                : t[e] = mergeUniqueArrays(t[e], s.values)
        }),
    t["default-src"] && t["default-src"].includes("'none'") && (
        t["default-src"] = [
            "'self'", ...s.values
        ]
    );
    let c = "";
    return Object
        .keys(t)
        .forEach(e => {
            c += `${e} ${t[e].join(" ")};`
        }),
    c
}
function buildCSPHeaderRule(e, s, t) {
    return [
        {
            id: ruleId,
            condition: {
                initiatorDomains: [e],
                urlFilter: "*//" + s + "*",
                resourceTypes: ["main_frame", "sub_frame"]
            },
            action: {
                type: "modifyHeaders",
                responseHeaders: [
                    {
                        header: "Content-Security-Policy",
                        operation: "set",
                        value: t
                    }
                ]
            }
        }
    ]
}
function stringifyDirectives(s) {
    Object
        .keys(s)
        .forEach(e => {
            s[e].stringified = JSON.stringify(s[e].directives)
        })
}
function mergeUniqueArrays(e, s) {
    e = [
        ...e,
        ...s
    ];
    return [...new Set(e)]
}
cspConfig.stringified = JSON.stringify(
    [cspConfig.directives, cspConfig.values]
),
chrome
    .storage
    .local
    .get({cspConfigSites: {}})
    .then(e => {
        cspConfig.sites = e.cspConfigSites
    }),
chrome
    .webRequest
    .onHeadersReceived
    .addListener(async function (e) {
        if (void 0 !== cspConfig.sites) {
            var t = getUrl(e.responseHeaders) ?? new URL(e.url);
            if (t && cspConfig.sites[t.host] && ["main_frame", "sub_frame"].includes(e.type)) {
                let s = [];
                var i = cspContent[t.host];
                if (i) 
                    if (i.stringified === cspConfig.stringified) {
                        if (i.paths[t.pathname]) 
                            return
                    } else 
                        i.paths && Object
                            .values(i.paths)
                            .forEach(e => {
                                s.push(e)
                            }),
                        i.paths = {};
            i = buildCSPValue(e.responseHeaders, cspConfig);
                i && (
                    e = buildCSPHeaderRule(t.host, t.host + t.pathname, i),
                    t.host,
                    t.pathname,
                    s.includes(ruleId) || s.push(ruleId),
                    chrome.declarativeNetRequest.updateDynamicRules({removeRuleIds: s, addRules: e}),
                    cspContent[t.host] ??= {
                        paths: {}
                    },
                    cspContent[t.host].paths[t.pathname] = ruleId,
                    cspContent[t.host].directives = cspConfig.directives,
                    cspContent[t.host].values = cspConfig.values,
                    cspContent[t.host].stringified = cspConfig.stringified,
                    ruleId++,
                    chrome.storage.local.set({cspContent: cspContent})
                )
            }
        }
    }, {
        urls: ["<all_urls>"]
    }, ["responseHeaders"]);