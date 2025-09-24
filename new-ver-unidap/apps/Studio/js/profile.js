let queryString = window.location.search,
    urlParams = new URLSearchParams(queryString),
    tabId = urlParams.get("tabId"),
    origin_pathname = urlParams.get("origin_pathname"),
    pathId = urlParams.get("pathId"),
    siteId = urlParams.get("siteId");
var profile_id = null;
function initiate() {
    initExistingVars(),
    renderProfile()
}
async function renderProfile() {
    document
        .querySelector("body > .header .cancel")
        .addEventListener("click", e => {
            location.href = `index.html?origin_pathname=${origin_pathname}&tabId=` +
                    tabId
        });
    let r = document.querySelector(".items .content textarea");
    document
        .querySelector("body > .header .save")
        .addEventListener("click", async e => {
            r.value = r
                .value
                .trim();
            let t = document
                .querySelector(".cross_domain")
                .checked;
            var a;
            if (profile_id) 
                if (0 != r.value.length || t) {
                    0 == (a = r.value.trim()).length && (a = null);
                    let e = document
                        .querySelector(".cross_domain")
                        .checked;
                    var n = await _udap_sendMessage({
                        cmd: "_udap_updateProfile",
                        data: {
                            id: profile_id,
                            content: a,
                            cross_domain: e
                        }
                    });
                    n.result
                        ? studio_alert("Data updated successfully", !1)
                        : studio_alert("Could not update data." + (
                            n.reason
                                ? " Reason: " + n.reason
                                : ""
                        ))
                }
            else {
                var n = await _udap_sendMessage({
                    cmd: "_udap_removeProfile",
                    data: {
                        id: profile_id
                    }
                });
                n.result
                    ? (profile_id = null, studio_alert("Deleted record", !1))
                    : studio_alert("Operation failed." + (
                        n.reason
                            ? " Reason: " + n.reason
                            : ""
                    ))
            } else 
                0 == (a = r.value.trim()).length && !t || (
                    0 == a.length && (a = null),
                    (n = await _udap_sendMessage({
                        cmd: "_udap_insertProfile",
                        data: {
                            pathId: pathId,
                            content: a,
                            cross_domain: t
                        }
                    })).result
                        ? (profile_id = n.data.id, studio_alert("Data created successfully", !1))
                        : studio_alert("Could not add new data." + (
                            n.reason
                                ? " Reason: " + n.reason
                                : ""
                        ))
                )
        }),
    document
        .querySelector(".items button.verify")
        .addEventListener("click", async () => {
            var e = r
                .value
                .trim();
            0 != e.length && (
                (e = await _udap_sendMessage({
                    cmd: "_udap_verifyJS",
                    data: {
                        content: `(async function(){ ${e} })();`
                    }
                })).result
                    ? studio_alert(e.content, !1)
                    : studio_popup("Something went wrong." + (
                        e.reason
                            ? ` Reason:
` + e.reason
                            : ""
                    ))
            )
        }),
    r.addEventListener("keydown", function (e) {
        var t;
        "Tab" == e.key && (
            e.preventDefault(),
            e = this.selectionStart,
            t = this.selectionEnd,
            this.value = this.value.substring(0, e) + "  " + this.value.substring(t),
            this.selectionStart = this.selectionEnd = e + 2
        )
    });
    var e = await _udap_sendMessage({
        cmd: "_udap_getProfile",
        data: {
            pathId: pathId
        }
    });
    e.result && e.data && e.data.id && (
        profile_id = e.data.id,
        document.querySelector(".items .content textarea").value = e.data.content,
        document.querySelector(".cross_domain").checked = e.data.cross_domain
    )
}
async function initExistingVars() {
    let r = document.querySelector(".items .existing_vargroups"),
        s = document.querySelector(".items .existing_vars");
    var e = await _udap_sendMessage({
        cmd: "_udap_getVarGroupNames",
        data: {
            siteId: siteId
        }
    });
    e.result
        ? (
            e.data.forEach(e => {
                var t = document.createElement("option");
                t.innerText = e.name,
                t.value = e.name,
                t.setAttribute("group_id", e.id),
                r.appendChild(t)
            }),
            r.addEventListener("change", async function (e) {
                var t;
                s.innerHTML = "",
                "none" !== this.value && (
                    (t = await _udap_sendMessage({
                        cmd: "_udap_getVariables",
                        data: {
                            groupId: r
                                .options[r.selectedIndex]
                                .getAttribute("group_id")
                        }
                    })).result
                        ? t.data.forEach(e => {
                            var t = document.createElement("option");
                            t.value = e.name,
                            t.innerText = e.name,
                            s.appendChild(t)
                        })
                        : studio_alert("Operation _udap_getVariables failed." + (
                            t.reason
                                ? " Reason: " + t.reason
                                : ""
                        ))
                )
            }),
            document.querySelector(".items .insert_existing_var").addEventListener("click", () => {
                var e,
                    t,
                    a,
                    n = r
                        .options[r.selectedIndex]
                        .text;
                "None" !== n && (
                    t = (e = document.querySelector(".items .content textarea")).selectionStart,
                    a = e.selectionEnd,
                    e.value = e.value.substring(0, t) + `{{${n}.${s.value}}}` + e.value.substring(a),
                    e.selectionStart = e.selectionEnd = t + 1
                )
            })
        )
        : studio_alert("Operation _udap_getVarGroupNames failed." + (
            e.reason
                ? " Reason: " + e.reason
                : ""
        ))
}
function sendMessageToBackground(e) {
    return new Promise((t, a) => {
        chrome
            .runtime
            .sendMessage(e, e => {
                chrome.runtime.lastError
                    ? a(chrome.runtime.lastError)
                    : t(e)
            })
    })
}
function _udap_sendMessage(e) {
    if (0 != (!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1])) 
        return new Promise((t, a) => {
            chrome
                .runtime
                .sendMessage(e, e => {
                    void 0 !== e
                        ? (401 === e.statusCode && chrome.runtime.sendMessage({
                            cmd: "_udap_removeAuthCookies"
                        }, async e => {
                            await sendMessageToBackground({cmd: "_udap_openAuthWindow"})
                        }), t(e))
                        : a(!1)
                })
        });
    chrome
        .runtime
        .sendMessage(e)
}
document.addEventListener("contextmenu", e => e.preventDefault()),
initiate();