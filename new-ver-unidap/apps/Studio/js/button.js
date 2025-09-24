class CContentButton {
    #doc = null;
    #parent_doc = null;
    static name = "button";
    #html_url = "content_button.html";
    #isInitiated = !1;
    #currentLanguage;
    #tabId;
    #buttonContent = {};
    #templateId;
    #contentEditor;
    constructor() {
        var t = 0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            e = 1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : null;
        t && (
            this.#parent_doc = t,
            this.#doc = document.createElement("div"),
            this.#doc.className = "control_pannel " + this.name,
            t.appendChild(this.#doc),
            this.#tabId = e
        )
    }
    static getInstance() {
        var t = 0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            e = 1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : null;
        return new CContentButton(t, e)
    }
    get element() {
        return this.#doc
    }
    get name() {
        return CContentButton.name
    }
    get isInitiated() {
        return this.#isInitiated
    }
    async initiate() {
        var t;
        this.#isInitiated || (
            this.#isInitiated = !0,
            await injectHTML(this.#doc, this.#html_url),
            t = this.#doc.querySelector(".line.button_content"),
            this.#contentEditor = new CContentEditor(t, this.name + "_editor"),
            await this.registerEvents()
        )
    }
    setTemplateId() {
        return this.#templateId
            ? (
                this.#doc.querySelector("select.style_templates").value = this.#templateId,
                parseInt(this.#templateId, 10)
            )
            : null
    }
    async registerEvents() {
        this
            .#doc
            .querySelector(".position_type")
            .addEventListener("change", async t => {
                this
                    .#doc
                    .querySelector(".position_area")
                    .setAttribute("type", t.target.value)
            }),
        this
            .#doc
            .querySelector(".position_type")
            .dispatchEvent(new Event("change"));
        var t = this
                .#doc
                .querySelectorAll(".position_area .position"),
            n = null;
        t.forEach(e => {
            e.addEventListener("click", t => {
                (n = n || this.#doc.querySelector(".position_area .position." + this.name)) && n
                    .classList
                    .remove(this.name),
                (n = e)
                    .classList
                    .add(this.name)
            })
        });
        registerParentChildEvent(this.#doc, [".key", ".value"]),
        this
            .#doc
            .querySelector(".trigger")
            .addEventListener("change", async t => {
                "none" !== t.target.value && this.#fillTriggerOptions(t.target.value)
            }),
        this
            .#doc
            .querySelectorAll(".position")
            .forEach(t => {
                t.addEventListener("click", t => {
                    this
                        .#parent_doc
                        .querySelector("button.preview")
                        .dispatchEvent(new Event("click"))
                })
            }),
        this
            .#doc
            .querySelectorAll(
                ":is(select, input[type='number'], , input[type='checkbox'])"
            )
            .forEach(t => {
                t.addEventListener("change", t => {
                    this
                        .#parent_doc
                        .querySelector("button.preview")
                        .dispatchEvent(new Event("click"))
                })
            }),
        this.#fillLanguageOptions()
    }
    async#fillLanguageOptions() {
        var t = window
                ._udap_supported_languages
                ?
                .find(t => "en" === t.id);
        this.#currentLanguage = t || window._udap_supported_languages[0];
        let n = this
            .#doc
            .querySelector("#button_language_selector");
        n && !n.hasChildNodes() && window._udap_supported_languages
            ?.length && (
                window._udap_supported_languages.forEach(t => {
                    var e = document.createElement("option");
                    e.value = t.id,
                    e.innerText = t.name,
                    n.appendChild(e)
                }),
                n.value = this.#currentLanguage.id,
                n.addEventListener("change", async e => {
                    this.#buttonContent[this.#currentLanguage.id] = this
                        .#contentEditor
                        .getContent(),
                    this.#currentLanguage = window
                        ._udap_supported_languages
                        .find(t => t.id === e.target.value),
                    this.#buttonContent[this.#currentLanguage.id] || (
                        this.#buttonContent[this.#currentLanguage.id] = ""
                    ),
                    this
                        .#contentEditor
                        .setCurrentLanguage(this.#currentLanguage)
                })
            ),
        this
            .#contentEditor
            .setupLanguageAndContent(this.#currentLanguage, this.#buttonContent, "<p></p>")
    }
    async#fillTriggerOptions(t) {
        await CContentList.getList(
            status,
            tenantId,
            siteId,
            origin_pathname,
            origin_pathoperator,
            t,
            this.#doc.querySelector(`.${t}.value`)
        )
    }
    async data() {
        var t = this
            .#doc
            .querySelector(".trigger")
            .value;
        if ("none" === t) 
            return null;
        var e = this
            .#doc
            .querySelector(`.${t}.value`)
            .value;
        if ("none" === e) 
            return null;
        this.#buttonContent[this.#currentLanguage.id] = this
            .#contentEditor
            .getContent();
        var n = this.removeEmptyContent(this.#buttonContent),
            i = this.#currentLanguage.id,
            o = (
                n[i] || (i = Object.keys(n)[0] || "en"),
                this.#doc.querySelector(".btn_height").value
            ),
            a = this
                .#doc
                .querySelector(".btn_width")
                .value,
            r = getTemplateId(this.#doc);
        return {
            content_id: udap_obj.secondaryId || "testing",
            positionType: this
                .#doc
                .querySelector(".position_type")
                .value,
            buttonHtml: n[i] || "",
            buttonPosition: this
                .#doc
                .querySelector(".position_area .position." + this.name)
                .getAttribute("pos"),
            buttonPositionInsideElement: "yes" === this
                .#doc
                .querySelector(".position_area .position." + this.name)
                .getAttribute("inside"),
            buttonZIndex: this
                .#doc
                .querySelector(".zindex")
                .value,
            buttonStickOnAnElement: "parent" === this
                .#doc
                .querySelector(".view_port")
                .value,
            buttonRepositionTop: this
                .#doc
                .querySelector(".reposition.top")
                .value,
            buttonRepositionLeft: this
                .#doc
                .querySelector(".reposition.left")
                .value,
            button_height: o,
            button_width: a,
            onclick_trigger: t,
            onclick_content: e,
            multiLanguageContent: n,
            current_language_id: i,
            customClass: await getClassNameFromExisting(null, this.name, r),
            templateId: r
        }
    }
    static async exportData(t) {
        return t
    }
    async renderContent(e) {
        if (
            this.#isInitiated || await this.initiate(),
            this.#templateId = e.templateId,
            e && e.current_language_id && window._udap_supported_languages
        ) {
            let t;
            (
                t = window._udap_current_language && window._udap_current_language.id && e && e.multiLanguageContent && window._udap_current_language.id in e.multiLanguageContent
                    ? window._udap_current_language
                    : window._udap_supported_languages.find(t => t.id === e.current_language_id)
            ) && (this.#currentLanguage = t),
            this
                .#doc
                .querySelector("#button_language_selector")
                .value = this.#currentLanguage.id
        }
        e && e.multiLanguageContent
            ? this.#buttonContent = 0 == e.multiLanguageContent.length || "object" != typeof e.multiLanguageContent
                ? {}
                : e.multiLanguageContent
            : e && e.buttonHtml && (
                this.#buttonContent[this.#currentLanguage.id] = e.buttonHtml
            ),
        this
            .#doc
            .querySelector(".btn_height")
            .value = e.button_height,
        this
            .#doc
            .querySelector(".btn_width")
            .value = e.button_width;
        var t = [
            [
                ".position_type", e.positionType || "absolute"
            ],
            [
                ".zindex", e.buttonZIndex
            ],
            [
                ".view_port", e.buttonStickOnAnElement
                    ? "parent"
                    : "window"
            ],
            [
                ".reposition.top", e.buttonRepositionTop
            ],
            [
                ".reposition.left", e.buttonRepositionLeft
            ],
            [
                ".trigger", e.onclick_trigger
            ],
            [
                `.${e.onclick_trigger}.value`, e.onclick_content
            ]
        ];
        await this.#fillTriggerOptions("popup"),
        await this.#fillTriggerOptions("workflow"),
        await this.#fillTriggerOptions("tooltip"),
        renderValue(this.#doc, t),
        this
            .#doc
            .querySelector(`.${e.onclick_trigger}.value`)
            .style
            .display = "inline",
        this
            .#doc
            .querySelectorAll(".position_area .position")
            .forEach(t => {
                t.getAttribute("pos") === e.buttonPosition && t.getAttribute("inside") === (
                    e.buttonPositionInsideElement
                        ? "yes"
                        : "no"
                )
                    ? t
                        .classList
                        .contains(this.name) || t
                        .classList
                        .add(this.name)
                    : t
                        .classList
                        .contains(this.name) && t
                        .classList
                        .remove(this.name)
            }),
        this
            .#doc
            .querySelector(".position_type")
            .dispatchEvent(new Event("change")),
        this
            .#contentEditor
            .setupLanguageAndContent(this.#currentLanguage, this.#buttonContent, "<p></p>")
    }
    async preview() {
        if (0 != udap_obj.selector.length) {
            var t = await this.data();
            if (t) {
                t = JSON.parse(JSON.stringify(t)),
                t = await CContentButton.exportData(t);
                if (["popup", "workflow", "tooltip"].includes(t.onclick_trigger) && "none" !== t.onclick_content && t.onclick_content) {
                    var e = null;
                    if (
                        (e = CContentList.getContent(t.onclick_trigger, origin_pathname, origin_pathoperator, t.onclick_content))
                            ?.templateId
                    ) {
                        var n = await _udap_sendMessage(
                            {cmd: "_udap_getStyle", endpoint: e.templateId}
                        );
                        if (!n.result) 
                            return void studio_alert(
                                "Issues on loading Customizable Content Template Detail. " + (
                                    n.reason
                                        ? "Reason: " + n.reason
                                        : ""
                                )
                            );
                        e.templateDetail = n.data.css
                    }
                    t.element = udap_obj.selector,
                    _parent_postMessage({
                        cmd: "_udap_addButton",
                        data: [t],
                        trigger_content: e,
                        frameInfo: udap_obj.frameInfo
                    }, this.#tabId)
                }
            }
        }
    }
    removeEmptyContent(t) {
        for (var e in t) 
            t[e] || delete t[e];
        return t
    }
}
window._global_content_classes ??= {},
window._global_content_classes[CContentButton.name] = CContentButton;