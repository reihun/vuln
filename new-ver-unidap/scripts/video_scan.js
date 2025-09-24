(() => {
    function r() {
        for (var t = [], e = document.documentElement.outerHTML, i = [
            "mp4",
            "mov",
            "m4v",
            "webm",
            "mpg",
            "m4s",
            "ts",
            "flv"
        ], r = 0; r < i.length; r++) 
            for (var a = i[r], n = 0;;) {
                var d = ((t, e, i) => {
                    for (;;) {
                        var r = t.indexOf(e, i);
                        if (r < 0) 
                            return !1;
                        i = r + e.length;
                        var a = t.indexOf('"', r),
                            n = t.indexOf("'", r),
                            d = !1;
                        if (r < a && r < n) 
                            d = n < a
                                ? "'"
                                : '"',
                            n < a && (a = n);
                        else if (r < a) 
                            d = '"';
                        else {
                            if (!(r < n)) 
                                continue;
                            d = "'",
                            a = n
                        }
                        r = 600 < a
                            ? a - 600
                            : 0,
                        r = t.substr(r, a - r);
                        if (!((n = r.lastIndexOf(d)) < 0)) {
                            if (0 == (r = r.substr(n + 1)).indexOf("http://") || 0 == r.indexOf("https://")) 
                                return {mp4: r, start: a};
                            if (0 == r.indexOf("http:\\/\\/") || 0 == r.indexOf("https:\\/\\/")) 
                                return {
                                    mp4: r = r.replace(/\\\//g, "/"),
                                    start: a
                                };
                            d = document.location.protocol + "//" + document.location.hostname;
                            if (0 == r.indexOf("/")) 
                                return {
                                    mp4: d + r,
                                    start: a
                                };
                            if (0 == r.indexOf("\\/")) 
                                return r = r.replace(/\\\//g, "/"), {
                                    mp4: d + r,
                                    start: a
                                }
                            }
                    }
                })(e, "." + a, n);
                if (!d || !d.start) 
                    break;
                n = d.start,
                -1 != (s = {
                    url: d.mp4,
                    title: m(d.mp4, document.title),
                    type: "m3u8" == a || "m4s" == a
                        ? a
                        : "video"
                })
                    .url
                    .indexOf(".m4s") && (s.noDL = "m4s"),
                s.mime = "video/" + a,
                h(t, s)
            }
        for (var s, n = 0; n < document.links.length; n++) 
            (f = g((u = document.links[n]).href)) && (c = l = "", h(t, s = {
                url: f,
                title: l = (l = (
                    l = !(
                        l = u.hasAttribute("title")
                            ? p(u.getAttribute("title"))
                            : l
                    ) && u.hasAttribute("alt")
                        ? p(u.getAttribute("alt"))
                        : l
                ) || p(u.innerText)) || m(f, document.title),
                class: c = u.hasAttribute("class")
                    ? p(u.getAttribute("class"))
                    : c,
                id: u.id || "",
                value: "",
                type: "extern"
            }));
        type = "video";
        for (var o = document.getElementsByTagName("video"), n = 0; n < o.length; n++) {
            var u,
                l,
                c,
                f = !1;
            (f = g(
                f = !(
                    f = (u = o[n]).src
                        ? u.src
                        : f
                ) && u.hasAttribute("data-thumb") && -1 == (f = p(u.getAttribute("data-thumb"))).indexOf("http")
                    ? "http:" + f
                    : f
            )) && (
                l = "",
                u.hasAttribute("alt")
                    ? l = p(u.getAttribute("alt"))
                    : u.hasAttribute("title") && (l = p(u.getAttribute("title"))),
                l = l || m(f, document.title),
                c = "",
                u.hasAttribute("class") && (c = p(u.getAttribute("class"))),
                h(t, {
                    url: f,
                    title: l,
                    type: type
                })
            )
        }
        return t
    }
    function m(t, e) {
        var i = t.indexOf("?");
        return t = (
            t = "videoplayback" == (t = (
                t = 0 <= (i = (t = (
                    t = 0 <= i
                        ? t.substr(0, i)
                        : t
                ).trim("/ ")).lastIndexOf("/"))
                    ? t.substr(i + 1)
                    : t
            ).replace(/%20/g, " ")) || t.length < 4
                ? e
                : t
        ).trim("\n \t\r<>")
    }
    function p(t) {
        return t
            ? t
                .replace(/^[\s_]+|[\s_]+$/gi, "")
                .replace(/(_){2,}/g, "_")
            : ""
    }
    function g(t) {
        var e;
        return !(
            !t || !t.toLowerCase || -1 != t.toLowerCase().indexOf("javascript:") || -1 != t.toLowerCase().indexOf("javascript :") || -1 != t.toLowerCase().indexOf("mailto:") || -1 != t.toLowerCase().indexOf("mailto :") || -1 != t.indexOf("data:image") || -1 == t.indexOf(".mp4") && -1 == t.indexOf(".flv") && -1 == t.indexOf(".mov") && (e = t, !new RegExp(
                "^https://fpt.workplace.com/*/videos/*".replace(/\?/g, ".").replace(/\*/g, ".*") +
                "$"
            ).test(e))
        ) && t
    }
    function h(t, e) {
        for (var i = 0; i < t.length; i++) 
            if (t[i].url == e.url) 
                return void(t[i].len < e.len && (t[i] = e));
    t.push(e)
    }
    function a(t, e, i) {
        let r = 2 < arguments.length && void 0 !== i
                ? i
                : null,
            a = document.location.href;
        fetch(t, {referrer: a}).then(t => {
            t
                .body
                .getReader();
            n({
                cmd: "_udap_setVideoSize",
                data: {
                    contentLength: +t
                        .headers
                        .get("Content-Length"),
                    id: e
                }
            }, r)
        })
    }
    function n(t, e) {
        e = 1 < arguments.length && void 0 !== e
            ? e
            : null;
        t.dst = source_url,
        window._udap_page.studio_iframe
            ?
                    .contentWindow
                    ?
                    .postMessage(t, "*"),
        e && (t.tabId = e, chrome.runtime.sendMessage(t))
    }
    chrome
        .runtime
        .onMessage
        .addListener((t, e, i) => {
            if (t.dst === chrome.runtime.id) 
                switch (t.cmd) {
                    case "_udap_getVideoURLs":
                        n({
                            cmd: "_udap_setVideoURLs",
                            data: r()
                        }, t.tabId);
                        break;
                    case "_udap_getVideoSize":
                        a(t.url, t.id, t.tabId);
                        break;
                    case "_udap_download_file":
                        window.postMessage(t, "*")
                }
            }),
    window.addEventListener("message", function (t) {
        if (t.data.dst === chrome.runtime.id) 
            switch (t.data.cmd) {
                case "_udap_getVideoURLs":
                    n({cmd: "_udap_setVideoURLs", data: r()});
                    break;
                case "_udap_getVideoSize":
                    a(t.data.url, t.data.id)
            }
        })
})();