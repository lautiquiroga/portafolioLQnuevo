/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper) }(this, (function (t) { "use strict"; function e(t) { const e = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } }); if (t) for (const i in t) if ("default" !== i) { const s = Object.getOwnPropertyDescriptor(t, i); Object.defineProperty(e, i, s.get ? s : { enumerable: !0, get: () => t[i] }) } return e.default = t, Object.freeze(e) } const i = e(t), s = new Map, n = { set(t, e, i) { s.has(t) || s.set(t, new Map); const n = s.get(t); n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`) }, get: (t, e) => s.has(t) && s.get(t).get(e) || null, remove(t, e) { if (!s.has(t)) return; const i = s.get(t); i.delete(e), 0 === i.size && s.delete(t) } }, o = "transitionend", r = t => (t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, ((t, e) => `#${CSS.escape(e)}`))), t), a = t => { t.dispatchEvent(new Event(o)) }, l = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType), c = t => l(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(r(t)) : null, h = t => { if (!l(t) || 0 === t.getClientRects().length) return !1; const e = "visible" === getComputedStyle(t).getPropertyValue("visibility"), i = t.closest("details:not([open])"); if (!i) return e; if (i !== t) { const e = t.closest("summary"); if (e && e.parentNode !== i) return !1; if (null === e) return !1 } return e }, d = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")), u = t => { if (!document.documentElement.attachShadow) return null; if ("function" == typeof t.getRootNode) { const e = t.getRootNode(); return e instanceof ShadowRoot ? e : null } return t instanceof ShadowRoot ? t : t.parentNode ? u(t.parentNode) : null }, _ = () => { }, g = t => { t.offsetHeight }, f = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, m = [], p = () => "rtl" === document.documentElement.dir, b = t => { var e; e = () => { const e = f(); if (e) { const i = t.NAME, s = e.fn[i]; e.fn[i] = t.jQueryInterface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = s, t.jQueryInterface) } }, "loading" === document.readyState ? (m.length || document.addEventListener("DOMContentLoaded", (() => { for (const t of m) t() })), m.push(e)) : e() }, v = (t, e = [], i = t) => "function" == typeof t ? t(...e) : i, y = (t, e, i = !0) => { if (!i) return void v(t); const s = (t => { if (!t) return 0; let { transitionDuration: e, transitionDelay: i } = window.getComputedStyle(t); const s = Number.parseFloat(e), n = Number.parseFloat(i); return s || n ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0 })(e) + 5; let n = !1; const r = ({ target: i }) => { i === e && (n = !0, e.removeEventListener(o, r), v(t)) }; e.addEventListener(o, r), setTimeout((() => { n || a(e) }), s) }, w = (t, e, i, s) => { const n = t.length; let o = t.indexOf(e); return -1 === o ? !i && s ? t[n - 1] : t[0] : (o += i ? 1 : -1, s && (o = (o + n) % n), t[Math.max(0, Math.min(o, n - 1))]) }, A = /[^.]*(?=\..*)\.|.*/, E = /\..*/, C = /::\d+$/, T = {}; let k = 1; const $ = { mouseenter: "mouseover", mouseleave: "mouseout" }, S = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]); function L(t, e) { return e && `${e}::${k++}` || t.uidEvent || k++ } function O(t) { const e = L(t); return t.uidEvent = e, T[e] = T[e] || {}, T[e] } function I(t, e, i = null) { return Object.values(t).find((t => t.callable === e && t.delegationSelector === i)) } function D(t, e, i) { const s = "string" == typeof e, n = s ? i : e || i; let o = M(t); return S.has(o) || (o = t), [s, n, o] } function N(t, e, i, s, n) { if ("string" != typeof e || !t) return; let [o, r, a] = D(e, i, s); if (e in $) { const t = t => function (e) { if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e) }; r = t(r) } const l = O(t), c = l[a] || (l[a] = {}), h = I(c, r, o ? i : null); if (h) return void (h.oneOff = h.oneOff && n); const d = L(r, e.replace(A, "")), u = o ? function (t, e, i) { return function s(n) { const o = t.querySelectorAll(e); for (let { target: r } = n; r && r !== this; r = r.parentNode)for (const a of o) if (a === r) return F(n, { delegateTarget: r }), s.oneOff && j.off(t, n.type, e, i), i.apply(r, [n]) } }(t, i, r) : function (t, e) { return function i(s) { return F(s, { delegateTarget: t }), i.oneOff && j.off(t, s.type, e), e.apply(t, [s]) } }(t, r); u.delegationSelector = o ? i : null, u.callable = r, u.oneOff = n, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o) } function P(t, e, i, s, n) { const o = I(e[i], s, n); o && (t.removeEventListener(i, o, Boolean(n)), delete e[i][o.uidEvent]) } function x(t, e, i, s) { const n = e[i] || {}; for (const [o, r] of Object.entries(n)) o.includes(s) && P(t, e, i, r.callable, r.delegationSelector) } function M(t) { return t = t.replace(E, ""), $[t] || t } const j = { on(t, e, i, s) { N(t, e, i, s, !1) }, one(t, e, i, s) { N(t, e, i, s, !0) }, off(t, e, i, s) { if ("string" != typeof e || !t) return; const [n, o, r] = D(e, i, s), a = r !== e, l = O(t), c = l[r] || {}, h = e.startsWith("."); if (void 0 === o) { if (h) for (const i of Object.keys(l)) x(t, l, i, e.slice(1)); for (const [i, s] of Object.entries(c)) { const n = i.replace(C, ""); a && !e.includes(n) || P(t, l, r, s.callable, s.delegationSelector) } } else { if (!Object.keys(c).length) return; P(t, l, r, o, n ? i : null) } }, trigger(t, e, i) { if ("string" != typeof e || !t) return null; const s = f(); let n = null, o = !0, r = !0, a = !1; e !== M(e) && s && (n = s.Event(e, i), s(t).trigger(n), o = !n.isPropagationStopped(), r = !n.isImmediatePropagationStopped(), a = n.isDefaultPrevented()); const l = F(new Event(e, { bubbles: o, cancelable: !0 }), i); return a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && n && n.preventDefault(), l } }; function F(t, e = {}) { for (const [i, s] of Object.entries(e)) try { t[i] = s } catch (e) { Object.defineProperty(t, i, { configurable: !0, get: () => s }) } return t } function z(t) { if ("true" === t) return !0; if ("false" === t) return !1; if (t === Number(t).toString()) return Number(t); if ("" === t || "null" === t) return null; if ("string" != typeof t) return t; try { return JSON.parse(decodeURIComponent(t)) } catch (e) { return t } } function H(t) { return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`)) } const B = { setDataAttribute(t, e, i) { t.setAttribute(`data-bs-${H(e)}`, i) }, removeDataAttribute(t, e) { t.removeAttribute(`data-bs-${H(e)}`) }, getDataAttributes(t) { if (!t) return {}; const e = {}, i = Object.keys(t.dataset).filter((t => t.startsWith("bs") && !t.startsWith("bsConfig"))); for (const s of i) { let i = s.replace(/^bs/, ""); i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = z(t.dataset[s]) } return e }, getDataAttribute: (t, e) => z(t.getAttribute(`data-bs-${H(e)}`)) }; class q { static get Default() { return {} } static get DefaultType() { return {} } static get NAME() { throw new Error('You have to implement the static method "NAME", for each component!') } _getConfig(t) { return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t } _configAfterMerge(t) { return t } _mergeConfigObj(t, e) { const i = l(e) ? B.getDataAttribute(e, "config") : {}; return { ...this.constructor.Default, ..."object" == typeof i ? i : {}, ...l(e) ? B.getDataAttributes(e) : {}, ..."object" == typeof t ? t : {} } } _typeCheckConfig(t, e = this.constructor.DefaultType) { for (const [s, n] of Object.entries(e)) { const e = t[s], o = l(e) ? "element" : null == (i = e) ? `${i}` : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase(); if (!new RegExp(n).test(o)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${n}".`) } var i } } class W extends q { constructor(t, e) { super(), (t = c(t)) && (this._element = t, this._config = this._getConfig(e), n.set(this._element, this.constructor.DATA_KEY, this)) } dispose() { n.remove(this._element, this.constructor.DATA_KEY), j.off(this._element, this.constructor.EVENT_KEY); for (const t of Object.getOwnPropertyNames(this)) this[t] = null } _queueCallback(t, e, i = !0) { y(t, e, i) } _getConfig(t) { return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t } static getInstance(t) { return n.get(c(t), this.DATA_KEY) } static getOrCreateInstance(t, e = {}) { return this.getInstance(t) || new this(t, "object" == typeof e ? e : null) } static get VERSION() { return "5.3.3" } static get DATA_KEY() { return `bs.${this.NAME}` } static get EVENT_KEY() { return `.${this.DATA_KEY}` } static eventName(t) { return `${t}${this.EVENT_KEY}` } } const R = t => { let e = t.getAttribute("data-bs-target"); if (!e || "#" === e) { let i = t.getAttribute("href"); if (!i || !i.includes("#") && !i.startsWith(".")) return null; i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null } return e ? e.split(",").map((t => r(t))).join(",") : null }, K = { find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)), findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t), children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))), parents(t, e) { const i = []; let s = t.parentNode.closest(e); for (; s;)i.push(s), s = s.parentNode.closest(e); return i }, prev(t, e) { let i = t.previousElementSibling; for (; i;) { if (i.matches(e)) return [i]; i = i.previousElementSibling } return [] }, next(t, e) { let i = t.nextElementSibling; for (; i;) { if (i.matches(e)) return [i]; i = i.nextElementSibling } return [] }, focusableChildren(t) { const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t => `${t}:not([tabindex^="-"])`)).join(","); return this.find(e, t).filter((t => !d(t) && h(t))) }, getSelectorFromElement(t) { const e = R(t); return e && K.findOne(e) ? e : null }, getElementFromSelector(t) { const e = R(t); return e ? K.findOne(e) : null }, getMultipleElementsFromSelector(t) { const e = R(t); return e ? K.find(e) : [] } }, V = (t, e = "hide") => { const i = `click.dismiss${t.EVENT_KEY}`, s = t.NAME; j.on(document, i, `[data-bs-dismiss="${s}"]`, (function (i) { if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), d(this)) return; const n = K.getElementFromSelector(this) || this.closest(`.${s}`); t.getOrCreateInstance(n)[e]() })) }, Q = ".bs.alert", X = `close${Q}`, Y = `closed${Q}`; class U extends W { static get NAME() { return "alert" } close() { if (j.trigger(this._element, X).defaultPrevented) return; this._element.classList.remove("show"); const t = this._element.classList.contains("fade"); this._queueCallback((() => this._destroyElement()), this._element, t) } _destroyElement() { this._element.remove(), j.trigger(this._element, Y), this.dispose() } static jQueryInterface(t) { return this.each((function () { const e = U.getOrCreateInstance(this); if ("string" == typeof t) { if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`); e[t](this) } })) } } V(U, "close"), b(U); const G = '[data-bs-toggle="button"]'; class J extends W { static get NAME() { return "button" } toggle() { this._element.setAttribute("aria-pressed", this._element.classList.toggle("active")) } static jQueryInterface(t) { return this.each((function () { const e = J.getOrCreateInstance(this); "toggle" === t && e[t]() })) } } j.on(document, "click.bs.button.data-api", G, (t => { t.preventDefault(); const e = t.target.closest(G); J.getOrCreateInstance(e).toggle() })), b(J); const Z = ".bs.swipe", tt = `touchstart${Z}`, et = `touchmove${Z}`, it = `touchend${Z}`, st = `pointerdown${Z}`, nt = `pointerup${Z}`, ot = { endCallback: null, leftCallback: null, rightCallback: null }, rt = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" }; class at extends q { constructor(t, e) { super(), this._element = t, t && at.isSupported() && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents()) } static get Default() { return ot } static get DefaultType() { return rt } static get NAME() { return "swipe" } dispose() { j.off(this._element, Z) } _start(t) { this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX } _end(t) { this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), v(this._config.endCallback) } _move(t) { this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX } _handleSwipe() { const t = Math.abs(this._deltaX); if (t <= 40) return; const e = t / this._deltaX; this._deltaX = 0, e && v(e > 0 ? this._config.rightCallback : this._config.leftCallback) } _initEvents() { this._supportPointerEvents ? (j.on(this._element, st, (t => this._start(t))), j.on(this._element, nt, (t => this._end(t))), this._element.classList.add("pointer-event")) : (j.on(this._element, tt, (t => this._start(t))), j.on(this._element, et, (t => this._move(t))), j.on(this._element, it, (t => this._end(t)))) } _eventIsPointerPenTouch(t) { return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType) } static isSupported() { return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0 } } const lt = ".bs.carousel", ct = ".data-api", ht = "next", dt = "prev", ut = "left", _t = "right", gt = `slide${lt}`, ft = `slid${lt}`, mt = `keydown${lt}`, pt = `mouseenter${lt}`, bt = `mouseleave${lt}`, vt = `dragstart${lt}`, yt = `load${lt}${ct}`, wt = `click${lt}${ct}`, At = "carousel", Et = "active", Ct = ".active", Tt = ".carousel-item", kt = Ct + Tt, $t = { ArrowLeft: _t, ArrowRight: ut }, St = { interval: 5e3, keyboard: !0, pause: "hover", ride: !1, touch: !0, wrap: !0 }, Lt = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" }; class Ot extends W { constructor(t, e) { super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = K.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === At && this.cycle() } static get Default() { return St } static get DefaultType() { return Lt } static get NAME() { return "carousel" } next() { this._slide(ht) } nextWhenVisible() { !document.hidden && h(this._element) && this.next() } prev() { this._slide(dt) } pause() { this._isSliding && a(this._element), this._clearInterval() } cycle() { this._clearInterval(), this._updateInterval(), this._interval = setInterval((() => this.nextWhenVisible()), this._config.interval) } _maybeEnableCycle() { this._config.ride && (this._isSliding ? j.one(this._element, ft, (() => this.cycle())) : this.cycle()) } to(t) { const e = this._getItems(); if (t > e.length - 1 || t < 0) return; if (this._isSliding) return void j.one(this._element, ft, (() => this.to(t))); const i = this._getItemIndex(this._getActive()); if (i === t) return; const s = t > i ? ht : dt; this._slide(s, e[t]) } dispose() { this._swipeHelper && this._swipeHelper.dispose(), super.dispose() } _configAfterMerge(t) { return t.defaultInterval = t.interval, t } _addEventListeners() { this._config.keyboard && j.on(this._element, mt, (t => this._keydown(t))), "hover" === this._config.pause && (j.on(this._element, pt, (() => this.pause())), j.on(this._element, bt, (() => this._maybeEnableCycle()))), this._config.touch && at.isSupported() && this._addTouchEventListeners() } _addTouchEventListeners() { for (const t of K.find(".carousel-item img", this._element)) j.on(t, vt, (t => t.preventDefault())); const t = { leftCallback: () => this._slide(this._directionToOrder(ut)), rightCallback: () => this._slide(this._directionToOrder(_t)), endCallback: () => { "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((() => this._maybeEnableCycle()), 500 + this._config.interval)) } }; this._swipeHelper = new at(this._element, t) } _keydown(t) { if (/input|textarea/i.test(t.target.tagName)) return; const e = $t[t.key]; e && (t.preventDefault(), this._slide(this._directionToOrder(e))) } _getItemIndex(t) { return this._getItems().indexOf(t) } _setActiveIndicatorElement(t) { if (!this._indicatorsElement) return; const e = K.findOne(Ct, this._indicatorsElement); e.classList.remove(Et), e.removeAttribute("aria-current"); const i = K.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement); i && (i.classList.add(Et), i.setAttribute("aria-current", "true")) } _updateInterval() { const t = this._activeElement || this._getActive(); if (!t) return; const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10); this._config.interval = e || this._config.defaultInterval } _slide(t, e = null) { if (this._isSliding) return; const i = this._getActive(), s = t === ht, n = e || w(this._getItems(), i, s, this._config.wrap); if (n === i) return; const o = this._getItemIndex(n), r = e => j.trigger(this._element, e, { relatedTarget: n, direction: this._orderToDirection(t), from: this._getItemIndex(i), to: o }); if (r(gt).defaultPrevented) return; if (!i || !n) return; const a = Boolean(this._interval); this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = n; const l = s ? "carousel-item-start" : "carousel-item-end", c = s ? "carousel-item-next" : "carousel-item-prev"; n.classList.add(c), g(n), i.classList.add(l), n.classList.add(l), this._queueCallback((() => { n.classList.remove(l, c), n.classList.add(Et), i.classList.remove(Et, c, l), this._isSliding = !1, r(ft) }), i, this._isAnimated()), a && this.cycle() } _isAnimated() { return this._element.classList.contains("slide") } _getActive() { return K.findOne(kt, this._element) } _getItems() { return K.find(Tt, this._element) } _clearInterval() { this._interval && (clearInterval(this._interval), this._interval = null) } _directionToOrder(t) { return p() ? t === ut ? dt : ht : t === ut ? ht : dt } _orderToDirection(t) { return p() ? t === dt ? ut : _t : t === dt ? _t : ut } static jQueryInterface(t) { return this.each((function () { const e = Ot.getOrCreateInstance(this, t); if ("number" != typeof t) { if ("string" == typeof t) { if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`); e[t]() } } else e.to(t) })) } } j.on(document, wt, "[data-bs-slide], [data-bs-slide-to]", (function (t) { const e = K.getElementFromSelector(this); if (!e || !e.classList.contains(At)) return; t.preventDefault(); const i = Ot.getOrCreateInstance(e), s = this.getAttribute("data-bs-slide-to"); return s ? (i.to(s), void i._maybeEnableCycle()) : "next" === B.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle()) })), j.on(window, yt, (() => { const t = K.find('[data-bs-ride="carousel"]'); for (const e of t) Ot.getOrCreateInstance(e) })), b(Ot); const It = ".bs.collapse", Dt = `show${It}`, Nt = `shown${It}`, Pt = `hide${It}`, xt = `hidden${It}`, Mt = `click${It}.data-api`, jt = "show", Ft = "collapse", zt = "collapsing", Ht = `:scope .${Ft} .${Ft}`, Bt = '[data-bs-toggle="collapse"]', qt = { parent: null, toggle: !0 }, Wt = { parent: "(null|element)", toggle: "boolean" }; class Rt extends W { constructor(t, e) { super(t, e), this._isTransitioning = !1, this._triggerArray = []; const i = K.find(Bt); for (const t of i) { const e = K.getSelectorFromElement(t), i = K.find(e).filter((t => t === this._element)); null !== e && i.length && this._triggerArray.push(t) } this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle() } static get Default() { return qt } static get DefaultType() { return Wt } static get NAME() { return "collapse" } toggle() { this._isShown() ? this.hide() : this.show() } show() { if (this._isTransitioning || this._isShown()) return; let t = []; if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t => t !== this._element)).map((t => Rt.getOrCreateInstance(t, { toggle: !1 })))), t.length && t[0]._isTransitioning) return; if (j.trigger(this._element, Dt).defaultPrevented) return; for (const e of t) e.hide(); const e = this._getDimension(); this._element.classList.remove(Ft), this._element.classList.add(zt), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0; const i = `scroll${e[0].toUpperCase() + e.slice(1)}`; this._queueCallback((() => { this._isTransitioning = !1, this._element.classList.remove(zt), this._element.classList.add(Ft, jt), this._element.style[e] = "", j.trigger(this._element, Nt) }), this._element, !0), this._element.style[e] = `${this._element[i]}px` } hide() { if (this._isTransitioning || !this._isShown()) return; if (j.trigger(this._element, Pt).defaultPrevented) return; const t = this._getDimension(); this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, g(this._element), this._element.classList.add(zt), this._element.classList.remove(Ft, jt); for (const t of this._triggerArray) { const e = K.getElementFromSelector(t); e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1) } this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback((() => { this._isTransitioning = !1, this._element.classList.remove(zt), this._element.classList.add(Ft), j.trigger(this._element, xt) }), this._element, !0) } _isShown(t = this._element) { return t.classList.contains(jt) } _configAfterMerge(t) { return t.toggle = Boolean(t.toggle), t.parent = c(t.parent), t } _getDimension() { return this._element.classList.contains("collapse-horizontal") ? "width" : "height" } _initializeChildren() { if (!this._config.parent) return; const t = this._getFirstLevelChildren(Bt); for (const e of t) { const t = K.getElementFromSelector(e); t && this._addAriaAndCollapsedClass([e], this._isShown(t)) } } _getFirstLevelChildren(t) { const e = K.find(Ht, this._config.parent); return K.find(t, this._config.parent).filter((t => !e.includes(t))) } _addAriaAndCollapsedClass(t, e) { if (t.length) for (const i of t) i.classList.toggle("collapsed", !e), i.setAttribute("aria-expanded", e) } static jQueryInterface(t) { const e = {}; return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each((function () { const i = Rt.getOrCreateInstance(this, e); if ("string" == typeof t) { if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`); i[t]() } })) } } j.on(document, Mt, Bt, (function (t) { ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault(); for (const t of K.getMultipleElementsFromSelector(this)) Rt.getOrCreateInstance(t, { toggle: !1 }).toggle() })), b(Rt); const Kt = "dropdown", Vt = ".bs.dropdown", Qt = ".data-api", Xt = "ArrowUp", Yt = "ArrowDown", Ut = `hide${Vt}`, Gt = `hidden${Vt}`, Jt = `show${Vt}`, Zt = `shown${Vt}`, te = `click${Vt}${Qt}`, ee = `keydown${Vt}${Qt}`, ie = `keyup${Vt}${Qt}`, se = "show", ne = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', oe = `${ne}.${se}`, re = ".dropdown-menu", ae = p() ? "top-end" : "top-start", le = p() ? "top-start" : "top-end", ce = p() ? "bottom-end" : "bottom-start", he = p() ? "bottom-start" : "bottom-end", de = p() ? "left-start" : "right-start", ue = p() ? "right-start" : "left-start", _e = { autoClose: !0, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" }, ge = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" }; class fe extends W { constructor(t, e) { super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = K.next(this._element, re)[0] || K.prev(this._element, re)[0] || K.findOne(re, this._parent), this._inNavbar = this._detectNavbar() } static get Default() { return _e } static get DefaultType() { return ge } static get NAME() { return Kt } toggle() { return this._isShown() ? this.hide() : this.show() } show() { if (d(this._element) || this._isShown()) return; const t = { relatedTarget: this._element }; if (!j.trigger(this._element, Jt, t).defaultPrevented) { if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) for (const t of [].concat(...document.body.children)) j.on(t, "mouseover", _); this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(se), this._element.classList.add(se), j.trigger(this._element, Zt, t) } } hide() { if (d(this._element) || !this._isShown()) return; const t = { relatedTarget: this._element }; this._completeHide(t) } dispose() { this._popper && this._popper.destroy(), super.dispose() } update() { this._inNavbar = this._detectNavbar(), this._popper && this._popper.update() } _completeHide(t) { if (!j.trigger(this._element, Ut, t).defaultPrevented) { if ("ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children)) j.off(t, "mouseover", _); this._popper && this._popper.destroy(), this._menu.classList.remove(se), this._element.classList.remove(se), this._element.setAttribute("aria-expanded", "false"), B.removeDataAttribute(this._menu, "popper"), j.trigger(this._element, Gt, t) } } _getConfig(t) { if ("object" == typeof (t = super._getConfig(t)).reference && !l(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${Kt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`); return t } _createPopper() { if (void 0 === i) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)"); let t = this._element; "parent" === this._config.reference ? t = this._parent : l(this._config.reference) ? t = c(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference); const e = this._getPopperConfig(); this._popper = i.createPopper(t, this._menu, e) } _isShown() { return this._menu.classList.contains(se) } _getPlacement() { const t = this._parent; if (t.classList.contains("dropend")) return de; if (t.classList.contains("dropstart")) return ue; if (t.classList.contains("dropup-center")) return "top"; if (t.classList.contains("dropdown-center")) return "bottom"; const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim(); return t.classList.contains("dropup") ? e ? le : ae : e ? he : ce } _detectNavbar() { return null !== this._element.closest(".navbar") } _getOffset() { const { offset: t } = this._config; return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t } _getPopperConfig() { const t = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] }; return (this._inNavbar || "static" === this._config.display) && (B.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{ name: "applyStyles", enabled: !1 }]), { ...t, ...v(this._config.popperConfig, [t]) } } _selectMenuItem({ key: t, target: e }) { const i = K.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t => h(t))); i.length && w(i, e, t === Yt, !i.includes(e)).focus() } static jQueryInterface(t) { return this.each((function () { const e = fe.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t]() } })) } static clearMenus(t) { if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return; const e = K.find(oe); for (const i of e) { const e = fe.getInstance(i); if (!e || !1 === e._config.autoClose) continue; const s = t.composedPath(), n = s.includes(e._menu); if (s.includes(e._element) || "inside" === e._config.autoClose && !n || "outside" === e._config.autoClose && n) continue; if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue; const o = { relatedTarget: e._element }; "click" === t.type && (o.clickEvent = t), e._completeHide(o) } } static dataApiKeydownHandler(t) { const e = /input|textarea/i.test(t.target.tagName), i = "Escape" === t.key, s = [Xt, Yt].includes(t.key); if (!s && !i) return; if (e && !i) return; t.preventDefault(); const n = this.matches(ne) ? this : K.prev(this, ne)[0] || K.next(this, ne)[0] || K.findOne(ne, t.delegateTarget.parentNode), o = fe.getOrCreateInstance(n); if (s) return t.stopPropagation(), o.show(), void o._selectMenuItem(t); o._isShown() && (t.stopPropagation(), o.hide(), n.focus()) } } j.on(document, ee, ne, fe.dataApiKeydownHandler), j.on(document, ee, re, fe.dataApiKeydownHandler), j.on(document, te, fe.clearMenus), j.on(document, ie, fe.clearMenus), j.on(document, te, ne, (function (t) { t.preventDefault(), fe.getOrCreateInstance(this).toggle() })), b(fe); const me = "backdrop", pe = "show", be = `mousedown.bs.${me}`, ve = { className: "modal-backdrop", clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: "body" }, ye = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" }; class we extends q { constructor(t) { super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null } static get Default() { return ve } static get DefaultType() { return ye } static get NAME() { return me } show(t) { if (!this._config.isVisible) return void v(t); this._append(); const e = this._getElement(); this._config.isAnimated && g(e), e.classList.add(pe), this._emulateAnimation((() => { v(t) })) } hide(t) { this._config.isVisible ? (this._getElement().classList.remove(pe), this._emulateAnimation((() => { this.dispose(), v(t) }))) : v(t) } dispose() { this._isAppended && (j.off(this._element, be), this._element.remove(), this._isAppended = !1) } _getElement() { if (!this._element) { const t = document.createElement("div"); t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t } return this._element } _configAfterMerge(t) { return t.rootElement = c(t.rootElement), t } _append() { if (this._isAppended) return; const t = this._getElement(); this._config.rootElement.append(t), j.on(t, be, (() => { v(this._config.clickCallback) })), this._isAppended = !0 } _emulateAnimation(t) { y(t, this._getElement(), this._config.isAnimated) } } const Ae = ".bs.focustrap", Ee = `focusin${Ae}`, Ce = `keydown.tab${Ae}`, Te = "backward", ke = { autofocus: !0, trapElement: null }, $e = { autofocus: "boolean", trapElement: "element" }; class Se extends q { constructor(t) { super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null } static get Default() { return ke } static get DefaultType() { return $e } static get NAME() { return "focustrap" } activate() { this._isActive || (this._config.autofocus && this._config.trapElement.focus(), j.off(document, Ae), j.on(document, Ee, (t => this._handleFocusin(t))), j.on(document, Ce, (t => this._handleKeydown(t))), this._isActive = !0) } deactivate() { this._isActive && (this._isActive = !1, j.off(document, Ae)) } _handleFocusin(t) { const { trapElement: e } = this._config; if (t.target === document || t.target === e || e.contains(t.target)) return; const i = K.focusableChildren(e); 0 === i.length ? e.focus() : this._lastTabNavDirection === Te ? i[i.length - 1].focus() : i[0].focus() } _handleKeydown(t) { "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Te : "forward") } } const Le = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Oe = ".sticky-top", Ie = "padding-right", De = "margin-right"; class Ne { constructor() { this._element = document.body } getWidth() { const t = document.documentElement.clientWidth; return Math.abs(window.innerWidth - t) } hide() { const t = this.getWidth(); this._disableOverFlow(), this._setElementAttributes(this._element, Ie, (e => e + t)), this._setElementAttributes(Le, Ie, (e => e + t)), this._setElementAttributes(Oe, De, (e => e - t)) } reset() { this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, Ie), this._resetElementAttributes(Le, Ie), this._resetElementAttributes(Oe, De) } isOverflowing() { return this.getWidth() > 0 } _disableOverFlow() { this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden" } _setElementAttributes(t, e, i) { const s = this.getWidth(); this._applyManipulationCallback(t, (t => { if (t !== this._element && window.innerWidth > t.clientWidth + s) return; this._saveInitialAttribute(t, e); const n = window.getComputedStyle(t).getPropertyValue(e); t.style.setProperty(e, `${i(Number.parseFloat(n))}px`) })) } _saveInitialAttribute(t, e) { const i = t.style.getPropertyValue(e); i && B.setDataAttribute(t, e, i) } _resetElementAttributes(t, e) { this._applyManipulationCallback(t, (t => { const i = B.getDataAttribute(t, e); null !== i ? (B.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e) })) } _applyManipulationCallback(t, e) { if (l(t)) e(t); else for (const i of K.find(t, this._element)) e(i) } } const Pe = ".bs.modal", xe = `hide${Pe}`, Me = `hidePrevented${Pe}`, je = `hidden${Pe}`, Fe = `show${Pe}`, ze = `shown${Pe}`, He = `resize${Pe}`, Be = `click.dismiss${Pe}`, qe = `mousedown.dismiss${Pe}`, We = `keydown.dismiss${Pe}`, Re = `click${Pe}.data-api`, Ke = "modal-open", Ve = "show", Qe = "modal-static", Xe = { backdrop: !0, focus: !0, keyboard: !0 }, Ye = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" }; class Ue extends W { constructor(t, e) { super(t, e), this._dialog = K.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Ne, this._addEventListeners() } static get Default() { return Xe } static get DefaultType() { return Ye } static get NAME() { return "modal" } toggle(t) { return this._isShown ? this.hide() : this.show(t) } show(t) { this._isShown || this._isTransitioning || j.trigger(this._element, Fe, { relatedTarget: t }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Ke), this._adjustDialog(), this._backdrop.show((() => this._showElement(t)))) } hide() { this._isShown && !this._isTransitioning && (j.trigger(this._element, xe).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Ve), this._queueCallback((() => this._hideModal()), this._element, this._isAnimated()))) } dispose() { j.off(window, Pe), j.off(this._dialog, Pe), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose() } handleUpdate() { this._adjustDialog() } _initializeBackDrop() { return new we({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() }) } _initializeFocusTrap() { return new Se({ trapElement: this._element }) } _showElement(t) { document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0; const e = K.findOne(".modal-body", this._dialog); e && (e.scrollTop = 0), g(this._element), this._element.classList.add(Ve), this._queueCallback((() => { this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, j.trigger(this._element, ze, { relatedTarget: t }) }), this._dialog, this._isAnimated()) } _addEventListeners() { j.on(this._element, We, (t => { "Escape" === t.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition()) })), j.on(window, He, (() => { this._isShown && !this._isTransitioning && this._adjustDialog() })), j.on(this._element, qe, (t => { j.one(this._element, Be, (e => { this._element === t.target && this._element === e.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition()) })) })) } _hideModal() { this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => { document.body.classList.remove(Ke), this._resetAdjustments(), this._scrollBar.reset(), j.trigger(this._element, je) })) } _isAnimated() { return this._element.classList.contains("fade") } _triggerBackdropTransition() { if (j.trigger(this._element, Me).defaultPrevented) return; const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._element.style.overflowY; "hidden" === e || this._element.classList.contains(Qe) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(Qe), this._queueCallback((() => { this._element.classList.remove(Qe), this._queueCallback((() => { this._element.style.overflowY = e }), this._dialog) }), this._dialog), this._element.focus()) } _adjustDialog() { const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), i = e > 0; if (i && !t) { const t = p() ? "paddingLeft" : "paddingRight"; this._element.style[t] = `${e}px` } if (!i && t) { const t = p() ? "paddingRight" : "paddingLeft"; this._element.style[t] = `${e}px` } } _resetAdjustments() { this._element.style.paddingLeft = "", this._element.style.paddingRight = "" } static jQueryInterface(t, e) { return this.each((function () { const i = Ue.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`); i[t](e) } })) } } j.on(document, Re, '[data-bs-toggle="modal"]', (function (t) { const e = K.getElementFromSelector(this);["A", "AREA"].includes(this.tagName) && t.preventDefault(), j.one(e, Fe, (t => { t.defaultPrevented || j.one(e, je, (() => { h(this) && this.focus() })) })); const i = K.findOne(".modal.show"); i && Ue.getInstance(i).hide(), Ue.getOrCreateInstance(e).toggle(this) })), V(Ue), b(Ue); const Ge = ".bs.offcanvas", Je = ".data-api", Ze = `load${Ge}${Je}`, ti = "show", ei = "showing", ii = "hiding", si = ".offcanvas.show", ni = `show${Ge}`, oi = `shown${Ge}`, ri = `hide${Ge}`, ai = `hidePrevented${Ge}`, li = `hidden${Ge}`, ci = `resize${Ge}`, hi = `click${Ge}${Je}`, di = `keydown.dismiss${Ge}`, ui = { backdrop: !0, keyboard: !0, scroll: !1 }, _i = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" }; class gi extends W { constructor(t, e) { super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners() } static get Default() { return ui } static get DefaultType() { return _i } static get NAME() { return "offcanvas" } toggle(t) { return this._isShown ? this.hide() : this.show(t) } show(t) { this._isShown || j.trigger(this._element, ni, { relatedTarget: t }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new Ne).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(ei), this._queueCallback((() => { this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(ti), this._element.classList.remove(ei), j.trigger(this._element, oi, { relatedTarget: t }) }), this._element, !0)) } hide() { this._isShown && (j.trigger(this._element, ri).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(ii), this._backdrop.hide(), this._queueCallback((() => { this._element.classList.remove(ti, ii), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new Ne).reset(), j.trigger(this._element, li) }), this._element, !0))) } dispose() { this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose() } _initializeBackDrop() { const t = Boolean(this._config.backdrop); return new we({ className: "offcanvas-backdrop", isVisible: t, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: t ? () => { "static" !== this._config.backdrop ? this.hide() : j.trigger(this._element, ai) } : null }) } _initializeFocusTrap() { return new Se({ trapElement: this._element }) } _addEventListeners() { j.on(this._element, di, (t => { "Escape" === t.key && (this._config.keyboard ? this.hide() : j.trigger(this._element, ai)) })) } static jQueryInterface(t) { return this.each((function () { const e = gi.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`); e[t](this) } })) } } j.on(document, hi, '[data-bs-toggle="offcanvas"]', (function (t) { const e = K.getElementFromSelector(this); if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this)) return; j.one(e, li, (() => { h(this) && this.focus() })); const i = K.findOne(si); i && i !== e && gi.getInstance(i).hide(), gi.getOrCreateInstance(e).toggle(this) })), j.on(window, Ze, (() => { for (const t of K.find(si)) gi.getOrCreateInstance(t).show() })), j.on(window, ci, (() => { for (const t of K.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t).position && gi.getOrCreateInstance(t).hide() })), V(gi), b(gi); const fi = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], dd: [], div: [], dl: [], dt: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, mi = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), pi = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, bi = (t, e) => { const i = t.nodeName.toLowerCase(); return e.includes(i) ? !mi.has(i) || Boolean(pi.test(t.nodeValue)) : e.filter((t => t instanceof RegExp)).some((t => t.test(i))) }, vi = { allowList: fi, content: {}, extraClass: "", html: !1, sanitize: !0, sanitizeFn: null, template: "<div></div>" }, yi = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" }, wi = { entry: "(string|element|function|null)", selector: "(string|element)" }; class Ai extends q { constructor(t) { super(), this._config = this._getConfig(t) } static get Default() { return vi } static get DefaultType() { return yi } static get NAME() { return "TemplateFactory" } getContent() { return Object.values(this._config.content).map((t => this._resolvePossibleFunction(t))).filter(Boolean) } hasContent() { return this.getContent().length > 0 } changeContent(t) { return this._checkContent(t), this._config.content = { ...this._config.content, ...t }, this } toHtml() { const t = document.createElement("div"); t.innerHTML = this._maybeSanitize(this._config.template); for (const [e, i] of Object.entries(this._config.content)) this._setContent(t, i, e); const e = t.children[0], i = this._resolvePossibleFunction(this._config.extraClass); return i && e.classList.add(...i.split(" ")), e } _typeCheckConfig(t) { super._typeCheckConfig(t), this._checkContent(t.content) } _checkContent(t) { for (const [e, i] of Object.entries(t)) super._typeCheckConfig({ selector: e, entry: i }, wi) } _setContent(t, e, i) { const s = K.findOne(i, t); s && ((e = this._resolvePossibleFunction(e)) ? l(e) ? this._putElementInTemplate(c(e), s) : this._config.html ? s.innerHTML = this._maybeSanitize(e) : s.textContent = e : s.remove()) } _maybeSanitize(t) { return this._config.sanitize ? function (t, e, i) { if (!t.length) return t; if (i && "function" == typeof i) return i(t); const s = (new window.DOMParser).parseFromString(t, "text/html"), n = [].concat(...s.body.querySelectorAll("*")); for (const t of n) { const i = t.nodeName.toLowerCase(); if (!Object.keys(e).includes(i)) { t.remove(); continue } const s = [].concat(...t.attributes), n = [].concat(e["*"] || [], e[i] || []); for (const e of s) bi(e, n) || t.removeAttribute(e.nodeName) } return s.body.innerHTML }(t, this._config.allowList, this._config.sanitizeFn) : t } _resolvePossibleFunction(t) { return v(t, [this]) } _putElementInTemplate(t, e) { if (this._config.html) return e.innerHTML = "", void e.append(t); e.textContent = t.textContent } } const Ei = new Set(["sanitize", "allowList", "sanitizeFn"]), Ci = "fade", Ti = "show", ki = ".modal", $i = "hide.bs.modal", Si = "hover", Li = "focus", Oi = { AUTO: "auto", TOP: "top", RIGHT: p() ? "left" : "right", BOTTOM: "bottom", LEFT: p() ? "right" : "left" }, Ii = { allowList: fi, animation: !0, boundary: "clippingParents", container: !1, customClass: "", delay: 0, fallbackPlacements: ["top", "right", "bottom", "left"], html: !1, offset: [0, 6], placement: "top", popperConfig: null, sanitize: !0, sanitizeFn: null, selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', title: "", trigger: "hover focus" }, Di = { allowList: "object", animation: "boolean", boundary: "(string|element)", container: "(string|element|boolean)", customClass: "(string|function)", delay: "(number|object)", fallbackPlacements: "array", html: "boolean", offset: "(array|string|function)", placement: "(string|function)", popperConfig: "(null|object|function)", sanitize: "boolean", sanitizeFn: "(null|function)", selector: "(string|boolean)", template: "string", title: "(string|element|function)", trigger: "string" }; class Ni extends W { constructor(t, e) { if (void 0 === i) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)"); super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle() } static get Default() { return Ii } static get DefaultType() { return Di } static get NAME() { return "tooltip" } enable() { this._isEnabled = !0 } disable() { this._isEnabled = !1 } toggleEnabled() { this._isEnabled = !this._isEnabled } toggle() { this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter()) } dispose() { clearTimeout(this._timeout), j.off(this._element.closest(ki), $i, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose() } show() { if ("none" === this._element.style.display) throw new Error("Please use show on visible elements"); if (!this._isWithContent() || !this._isEnabled) return; const t = j.trigger(this._element, this.constructor.eventName("show")), e = (u(this._element) || this._element.ownerDocument.documentElement).contains(this._element); if (t.defaultPrevented || !e) return; this._disposePopper(); const i = this._getTipElement(); this._element.setAttribute("aria-describedby", i.getAttribute("id")); const { container: s } = this._config; if (this._element.ownerDocument.documentElement.contains(this.tip) || (s.append(i), j.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i), i.classList.add(Ti), "ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children)) j.on(t, "mouseover", _); this._queueCallback((() => { j.trigger(this._element, this.constructor.eventName("shown")), !1 === this._isHovered && this._leave(), this._isHovered = !1 }), this.tip, this._isAnimated()) } hide() { if (this._isShown() && !j.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) { if (this._getTipElement().classList.remove(Ti), "ontouchstart" in document.documentElement) for (const t of [].concat(...document.body.children)) j.off(t, "mouseover", _); this._activeTrigger.click = !1, this._activeTrigger[Li] = !1, this._activeTrigger[Si] = !1, this._isHovered = null, this._queueCallback((() => { this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), j.trigger(this._element, this.constructor.eventName("hidden"))) }), this.tip, this._isAnimated()) } } update() { this._popper && this._popper.update() } _isWithContent() { return Boolean(this._getTitle()) } _getTipElement() { return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip } _createTipElement(t) { const e = this._getTemplateFactory(t).toHtml(); if (!e) return null; e.classList.remove(Ci, Ti), e.classList.add(`bs-${this.constructor.NAME}-auto`); const i = (t => { do { t += Math.floor(1e6 * Math.random()) } while (document.getElementById(t)); return t })(this.constructor.NAME).toString(); return e.setAttribute("id", i), this._isAnimated() && e.classList.add(Ci), e } setContent(t) { this._newContent = t, this._isShown() && (this._disposePopper(), this.show()) } _getTemplateFactory(t) { return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Ai({ ...this._config, content: t, extraClass: this._resolvePossibleFunction(this._config.customClass) }), this._templateFactory } _getContentForTemplate() { return { ".tooltip-inner": this._getTitle() } } _getTitle() { return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title") } _initializeOnDelegatedTarget(t) { return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig()) } _isAnimated() { return this._config.animation || this.tip && this.tip.classList.contains(Ci) } _isShown() { return this.tip && this.tip.classList.contains(Ti) } _createPopper(t) { const e = v(this._config.placement, [this, t, this._element]), s = Oi[e.toUpperCase()]; return i.createPopper(this._element, t, this._getPopperConfig(s)) } _getOffset() { const { offset: t } = this._config; return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t } _resolvePossibleFunction(t) { return v(t, [this._element]) } _getPopperConfig(t) { const e = { placement: t, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "preSetPlacement", enabled: !0, phase: "beforeMain", fn: t => { this._getTipElement().setAttribute("data-popper-placement", t.state.placement) } }] }; return { ...e, ...v(this._config.popperConfig, [e]) } } _setListeners() { const t = this._config.trigger.split(" "); for (const e of t) if ("click" === e) j.on(this._element, this.constructor.eventName("click"), this._config.selector, (t => { this._initializeOnDelegatedTarget(t).toggle() })); else if ("manual" !== e) { const t = e === Si ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), i = e === Si ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout"); j.on(this._element, t, this._config.selector, (t => { const e = this._initializeOnDelegatedTarget(t); e._activeTrigger["focusin" === t.type ? Li : Si] = !0, e._enter() })), j.on(this._element, i, this._config.selector, (t => { const e = this._initializeOnDelegatedTarget(t); e._activeTrigger["focusout" === t.type ? Li : Si] = e._element.contains(t.relatedTarget), e._leave() })) } this._hideModalHandler = () => { this._element && this.hide() }, j.on(this._element.closest(ki), $i, this._hideModalHandler) } _fixTitle() { const t = this._element.getAttribute("title"); t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title")) } _enter() { this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout((() => { this._isHovered && this.show() }), this._config.delay.show)) } _leave() { this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout((() => { this._isHovered || this.hide() }), this._config.delay.hide)) } _setTimeout(t, e) { clearTimeout(this._timeout), this._timeout = setTimeout(t, e) } _isWithActiveTrigger() { return Object.values(this._activeTrigger).includes(!0) } _getConfig(t) { const e = B.getDataAttributes(this._element); for (const t of Object.keys(e)) Ei.has(t) && delete e[t]; return t = { ...e, ..."object" == typeof t && t ? t : {} }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t } _configAfterMerge(t) { return t.container = !1 === t.container ? document.body : c(t.container), "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t } _getDelegateConfig() { const t = {}; for (const [e, i] of Object.entries(this._config)) this.constructor.Default[e] !== i && (t[e] = i); return t.selector = !1, t.trigger = "manual", t } _disposePopper() { this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null) } static jQueryInterface(t) { return this.each((function () { const e = Ni.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t]() } })) } } b(Ni); const Pi = { ...Ni.Default, content: "", offset: [0, 8], placement: "right", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>', trigger: "click" }, xi = { ...Ni.DefaultType, content: "(null|string|element|function)" }; class Mi extends Ni { static get Default() { return Pi } static get DefaultType() { return xi } static get NAME() { return "popover" } _isWithContent() { return this._getTitle() || this._getContent() } _getContentForTemplate() { return { ".popover-header": this._getTitle(), ".popover-body": this._getContent() } } _getContent() { return this._resolvePossibleFunction(this._config.content) } static jQueryInterface(t) { return this.each((function () { const e = Mi.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t]() } })) } } b(Mi); const ji = ".bs.scrollspy", Fi = `activate${ji}`, zi = `click${ji}`, Hi = `load${ji}.data-api`, Bi = "active", qi = "[href]", Wi = ".nav-link", Ri = `${Wi}, .nav-item > ${Wi}, .list-group-item`, Ki = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: !1, target: null, threshold: [.1, .5, 1] }, Vi = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" }; class Qi extends W { constructor(t, e) { super(t, e), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }, this.refresh() } static get Default() { return Ki } static get DefaultType() { return Vi } static get NAME() { return "scrollspy" } refresh() { this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver(); for (const t of this._observableSections.values()) this._observer.observe(t) } dispose() { this._observer.disconnect(), super.dispose() } _configAfterMerge(t) { return t.target = c(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map((t => Number.parseFloat(t)))), t } _maybeEnableSmoothScroll() { this._config.smoothScroll && (j.off(this._config.target, zi), j.on(this._config.target, zi, qi, (t => { const e = this._observableSections.get(t.target.hash); if (e) { t.preventDefault(); const i = this._rootElement || window, s = e.offsetTop - this._element.offsetTop; if (i.scrollTo) return void i.scrollTo({ top: s, behavior: "smooth" }); i.scrollTop = s } }))) } _getNewObserver() { const t = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin }; return new IntersectionObserver((t => this._observerCallback(t)), t) } _observerCallback(t) { const e = t => this._targetLinks.get(`#${t.target.id}`), i = t => { this._previousScrollData.visibleEntryTop = t.target.offsetTop, this._process(e(t)) }, s = (this._rootElement || document.documentElement).scrollTop, n = s >= this._previousScrollData.parentScrollTop; this._previousScrollData.parentScrollTop = s; for (const o of t) { if (!o.isIntersecting) { this._activeTarget = null, this._clearActiveClass(e(o)); continue } const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop; if (n && t) { if (i(o), !s) return } else n || t || i(o) } } _initializeTargetsAndObservables() { this._targetLinks = new Map, this._observableSections = new Map; const t = K.find(qi, this._config.target); for (const e of t) { if (!e.hash || d(e)) continue; const t = K.findOne(decodeURI(e.hash), this._element); h(t) && (this._targetLinks.set(decodeURI(e.hash), e), this._observableSections.set(e.hash, t)) } } _process(t) { this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(Bi), this._activateParents(t), j.trigger(this._element, Fi, { relatedTarget: t })) } _activateParents(t) { if (t.classList.contains("dropdown-item")) K.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(Bi); else for (const e of K.parents(t, ".nav, .list-group")) for (const t of K.prev(e, Ri)) t.classList.add(Bi) } _clearActiveClass(t) { t.classList.remove(Bi); const e = K.find(`${qi}.${Bi}`, t); for (const t of e) t.classList.remove(Bi) } static jQueryInterface(t) { return this.each((function () { const e = Qi.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`); e[t]() } })) } } j.on(window, Hi, (() => { for (const t of K.find('[data-bs-spy="scroll"]')) Qi.getOrCreateInstance(t) })), b(Qi); const Xi = ".bs.tab", Yi = `hide${Xi}`, Ui = `hidden${Xi}`, Gi = `show${Xi}`, Ji = `shown${Xi}`, Zi = `click${Xi}`, ts = `keydown${Xi}`, es = `load${Xi}`, is = "ArrowLeft", ss = "ArrowRight", ns = "ArrowUp", os = "ArrowDown", rs = "Home", as = "End", ls = "active", cs = "fade", hs = "show", ds = ".dropdown-toggle", us = `:not(${ds})`, _s = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', gs = `.nav-link${us}, .list-group-item${us}, [role="tab"]${us}, ${_s}`, fs = `.${ls}[data-bs-toggle="tab"], .${ls}[data-bs-toggle="pill"], .${ls}[data-bs-toggle="list"]`; class ms extends W { constructor(t) { super(t), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), j.on(this._element, ts, (t => this._keydown(t)))) } static get NAME() { return "tab" } show() { const t = this._element; if (this._elemIsActive(t)) return; const e = this._getActiveElem(), i = e ? j.trigger(e, Yi, { relatedTarget: t }) : null; j.trigger(t, Gi, { relatedTarget: e }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e)) } _activate(t, e) { t && (t.classList.add(ls), this._activate(K.getElementFromSelector(t)), this._queueCallback((() => { "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), j.trigger(t, Ji, { relatedTarget: e })) : t.classList.add(hs) }), t, t.classList.contains(cs))) } _deactivate(t, e) { t && (t.classList.remove(ls), t.blur(), this._deactivate(K.getElementFromSelector(t)), this._queueCallback((() => { "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), j.trigger(t, Ui, { relatedTarget: e })) : t.classList.remove(hs) }), t, t.classList.contains(cs))) } _keydown(t) { if (![is, ss, ns, os, rs, as].includes(t.key)) return; t.stopPropagation(), t.preventDefault(); const e = this._getChildren().filter((t => !d(t))); let i; if ([rs, as].includes(t.key)) i = e[t.key === rs ? 0 : e.length - 1]; else { const s = [ss, os].includes(t.key); i = w(e, t.target, s, !0) } i && (i.focus({ preventScroll: !0 }), ms.getOrCreateInstance(i).show()) } _getChildren() { return K.find(gs, this._parent) } _getActiveElem() { return this._getChildren().find((t => this._elemIsActive(t))) || null } _setInitialAttributes(t, e) { this._setAttributeIfNotExists(t, "role", "tablist"); for (const t of e) this._setInitialAttributesOnChild(t) } _setInitialAttributesOnChild(t) { t = this._getInnerElement(t); const e = this._elemIsActive(t), i = this._getOuterElement(t); t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t) } _setInitialAttributesOnTargetPanel(t) { const e = K.getElementFromSelector(t); e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`)) } _toggleDropDown(t, e) { const i = this._getOuterElement(t); if (!i.classList.contains("dropdown")) return; const s = (t, s) => { const n = K.findOne(t, i); n && n.classList.toggle(s, e) }; s(ds, ls), s(".dropdown-menu", hs), i.setAttribute("aria-expanded", e) } _setAttributeIfNotExists(t, e, i) { t.hasAttribute(e) || t.setAttribute(e, i) } _elemIsActive(t) { return t.classList.contains(ls) } _getInnerElement(t) { return t.matches(gs) ? t : K.findOne(gs, t) } _getOuterElement(t) { return t.closest(".nav-item, .list-group-item") || t } static jQueryInterface(t) { return this.each((function () { const e = ms.getOrCreateInstance(this); if ("string" == typeof t) { if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`); e[t]() } })) } } j.on(document, Zi, _s, (function (t) { ["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this) || ms.getOrCreateInstance(this).show() })), j.on(window, es, (() => { for (const t of K.find(fs)) ms.getOrCreateInstance(t) })), b(ms); const ps = ".bs.toast", bs = `mouseover${ps}`, vs = `mouseout${ps}`, ys = `focusin${ps}`, ws = `focusout${ps}`, As = `hide${ps}`, Es = `hidden${ps}`, Cs = `show${ps}`, Ts = `shown${ps}`, ks = "hide", $s = "show", Ss = "showing", Ls = { animation: "boolean", autohide: "boolean", delay: "number" }, Os = { animation: !0, autohide: !0, delay: 5e3 }; class Is extends W { constructor(t, e) { super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners() } static get Default() { return Os } static get DefaultType() { return Ls } static get NAME() { return "toast" } show() { j.trigger(this._element, Cs).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(ks), g(this._element), this._element.classList.add($s, Ss), this._queueCallback((() => { this._element.classList.remove(Ss), j.trigger(this._element, Ts), this._maybeScheduleHide() }), this._element, this._config.animation)) } hide() { this.isShown() && (j.trigger(this._element, As).defaultPrevented || (this._element.classList.add(Ss), this._queueCallback((() => { this._element.classList.add(ks), this._element.classList.remove(Ss, $s), j.trigger(this._element, Es) }), this._element, this._config.animation))) } dispose() { this._clearTimeout(), this.isShown() && this._element.classList.remove($s), super.dispose() } isShown() { return this._element.classList.contains($s) } _maybeScheduleHide() { this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => { this.hide() }), this._config.delay))) } _onInteraction(t, e) { switch (t.type) { case "mouseover": case "mouseout": this._hasMouseInteraction = e; break; case "focusin": case "focusout": this._hasKeyboardInteraction = e }if (e) return void this._clearTimeout(); const i = t.relatedTarget; this._element === i || this._element.contains(i) || this._maybeScheduleHide() } _setListeners() { j.on(this._element, bs, (t => this._onInteraction(t, !0))), j.on(this._element, vs, (t => this._onInteraction(t, !1))), j.on(this._element, ys, (t => this._onInteraction(t, !0))), j.on(this._element, ws, (t => this._onInteraction(t, !1))) } _clearTimeout() { clearTimeout(this._timeout), this._timeout = null } static jQueryInterface(t) { return this.each((function () { const e = Is.getOrCreateInstance(this, t); if ("string" == typeof t) { if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`); e[t](this) } })) } } return V(Is), b(Is), { Alert: U, Button: J, Carousel: Ot, Collapse: Rt, Dropdown: fe, Modal: Ue, Offcanvas: gi, Popover: Mi, ScrollSpy: Qi, Tab: ms, Toast: Is, Tooltip: Ni } }));
//# sourceMappingURL=bootstrap.min.js.map

import { Application } from '@splinetool/runtime';

document.addEventListener('DOMContentLoaded', function () {

    // if (pantallaAncho > 1200) {
    // setTimeout(function () {
    //     document.querySelector(".loader").style.display = "none";
    //     document.querySelector(".contenedor__animacion").style.display = "block";
    // }, 3000);
    // }


    // Animación de los números en la sección 8:
    const counters = document.querySelectorAll('.stat-number');
    const duration = 1000;

    const formatNumber = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const increment = target / (duration / 10);
        let current = 0;
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = `+${formatNumber(Math.ceil(current))}`;
                setTimeout(updateCounter, 10);
            } else {
                counter.textContent = `+${formatNumber(target)}`;
            }
        };
        updateCounter();
    };

    // Configuración de Intersection Observer
    const observerOptions = {
        root: null,
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });


    ////// SPLINE //////

    /// Spline del planeta

    agregarSpline();

    function agregarSpline() {

        const contenedorPadrePC = document.querySelector(".contenedorSpline-pc");
        const contenedorPadreMobile = document.querySelector(".contenedorSpline-mobile");

        const splineContainerPC = contenedorPadrePC.querySelector(".splineContainer");
        const splineContainerMobile = contenedorPadreMobile.querySelector(".splineContainer");

        if (window.innerWidth > 1200) {
            if (splineContainerMobile) {
                splineContainerMobile.remove();
            }

            if (!splineContainerPC) {
                const divElemento = document.createElement("div");
                divElemento.classList.add("splineContainer");
                const canvasElemento = document.createElement("canvas");
                canvasElemento.id = "canvas3d";
                divElemento.appendChild(canvasElemento);
                contenedorPadrePC.appendChild(divElemento);
                crearSplinePC();
            }
        } else {
            if (splineContainerPC) {
                splineContainerPC.remove();
            }

            if (!splineContainerMobile) {
                const divElemento = document.createElement("div");
                divElemento.classList.add("splineContainer");
                const canvasElemento = document.createElement("canvas");
                canvasElemento.id = "canvas3d";
                divElemento.appendChild(canvasElemento);
                contenedorPadreMobile.appendChild(divElemento);
                crearSplineMobile();
            }
        }
    }

    function crearSplinePC() {
        const canvas = document.getElementById('canvas3d');
        const app = new Application(canvas);
        app.load('https://prod.spline.design/NZdRNBMIvCemhcFR/scene.splinecode');
    }

    function crearSplineMobile() {
        const canvas = document.getElementById('canvas3d');
        const app = new Application(canvas);
        app.load('https://prod.spline.design/fIHzAOLsqkF9L5qI/scene.splinecode');
    }

    function ocultarSpline() {
        var tecnologias = document.getElementById('tecnologias');
        var contacto = document.getElementById('wordpress');
        var splineContainer = document.querySelector('.splineContainer');
        var splineContainerMobile = document.querySelector('.splineContainerMobile');
        var splineContainerPC = document.querySelector('.splineContainerPC');

        // Obtener las coordenadas de la sección de tecnologias
        var tecnologiasRect = tecnologias.getBoundingClientRect();
        var contactoRect = contacto.getBoundingClientRect();

        // Verificar si la parte superior de la sección de tecnologias está en la parte superior de la ventana
        if (tecnologiasRect.top <= 0) {
            // alert(tecnologiasRect.top)
            splineContainer.style.display = 'none';
        } else {
            splineContainer.style.display = 'block';
        }

        if (splineContainerMobile) {
            if (contactoRect.top <= 0) {
                console.log('wp');
                splineContainerMobile.style.display = 'block';
            } else {
                splineContainerMobile.style.display = 'none';
            }
        }

        if (splineContainerPC) {
            if (contactoRect.top <= 0) {
                console.log('wp');
                splineContainerPC.style.display = 'block';
            } else {
                splineContainerPC.style.display = 'none';
            }
        }


    }

    ocultarSpline();

    /// Spline del astronauta

    agregarSpline2();

    function agregarSpline2() {
        const contenedorPadre2 = document.querySelector(".contenedorSpline2");

        const splineContainerPC = document.querySelector(".splineContainerPC");
        const splineContainerMobile = document.querySelector(".splineContainerMobile");

        // Determina el contenedor padre según el tamaño de la pantalla
        if (window.innerWidth > 1200) {
            // if (splineContainerMobile) {
            //     splineContainerMobile.remove();
            // }

            if (!splineContainerPC) {
                const divElemento = document.createElement("div");
                divElemento.classList.add("splineContainerPC");
                const canvasElemento = document.createElement("canvas");
                canvasElemento.id = "canvas3d2";
                divElemento.appendChild(canvasElemento);
                contenedorPadre2.appendChild(divElemento);
                crearSpline2PC();
            }
        } else {
            if (splineContainerPC) {
                splineContainerPC.remove();
            }

            if (!splineContainerMobile) {
                const divElemento = document.createElement("div");
                divElemento.classList.add("splineContainerMobile");
                const canvasElemento = document.createElement("canvas");
                canvasElemento.id = "canvas3d2";
                divElemento.appendChild(canvasElemento);
                contenedorPadre2.appendChild(divElemento);
                crearSpline2Mobile();
            }
        }
    }

    function crearSpline2PC() {
        const canvas = document.getElementById('canvas3d2');
        const app = new Application(canvas);

        // Astronauta con planeta 3D
        // app.load('https://prod.spline.design/DtZm9UqylFzQkmEq/scene.splinecode');

        // Astronauta solo, con Hover, para PC
        app.load('https://prod.spline.design/UgvYS8cR5XgbippE/scene.splinecode');
    }

    function crearSpline2Mobile() {
        const canvas = document.getElementById('canvas3d2');
        const app = new Application(canvas);
        app.load('https://prod.spline.design/Miyin8xZVsgPs6vr/scene.splinecode');
    }



    ///// Header /////

    var navbarToggler = document.querySelector('.navbar-toggler');
    var header = document.querySelector('header');

    highlightNavLink();
    headerBackground();

    // Función para agregar o quitar la clase 'active' según la posición de la ventana
    function highlightNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');

        sections.forEach(section => {
            const top = section.offsetTop - 100;
            const bottom = top + section.clientHeight;
            const id = section.getAttribute('id');

            if (window.scrollY >= top && window.scrollY <= bottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').slice(1) === id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    function headerBackground() {
        var ariaExpanded = navbarToggler.getAttribute('aria-expanded');
        if (window.scrollY === 0 && ariaExpanded === "false") {
            header.classList.remove('headerBlack');
        } else {
            header.classList.add('headerBlack');
        }
    }

    navbarToggler.addEventListener('click', function () {
        if (window.scrollY === 0) {
            if (!navbarToggler.classList.contains('collapsed')) {
                header.classList.add('headerBlack');
            } else {
                header.classList.remove('headerBlack');
            }
        }
    });



    ///// Gif de swiper /////

    const swipeElements = document.querySelectorAll('.swipe');

    function hideSwipeAfterDelay(element) {
        var rect = element.getBoundingClientRect();
        var bottomEdgeOfViewport = window.innerHeight || document.documentElement.clientHeight;

        if (rect.bottom <= bottomEdgeOfViewport) {
            setTimeout(function () {
                element.classList.add('hidden');
                setTimeout(function () {
                    element.style.display = 'none';
                }, 1000);
            }, 3000);
        }

    }


    ///// Event Listeners /////

    window.addEventListener('resize', function () {
        ejecutarGsap();
        highlightNavLink();
        agregarSpline();
        agregarSpline2();
        if (window.innerWidth > 1200) {
            location.reload();
        }
    });

    window.addEventListener('scroll', function () {
        highlightNavLink();
        headerBackground();
        ocultarSpline();
        swipeElements.forEach(function (swipeElement) {
            if (swipeElement.style.display !== 'none')
                hideSwipeAfterDelay(swipeElement);
        });
    });


    ///// Gsap //////

    gsap.registerPlugin(ScrollTrigger);

    const naveFuego = document.querySelector(".nave-fuego");

    ejecutarGsap();

    // Desktop
    function ejecutarGsap() {
        if (window.matchMedia("(min-width: 1200px)").matches) {
            const tlPC = gsap.timeline({
                scrollTrigger: {
                    trigger: ".contenedor__animacion",
                    start: "top top",
                    end: "100% 100%",
                    scrub: 0.5,
                },
            });

            // El evento con la mayor duración es el que marca el ritmo de la timeline. Todos los demás eventos se ajustan dependiendo de este evento con mayor duración. Esto significa que mientras mayor sea el número del evento con la duracion más grande, más rápidos serán los demás eventos. Porque por ejemplo, si el evento mayor tiene una duración de 7, los demás deben ajustarse para que el mayor tarde 7. Si un evento tiene la duracion de 1, su duración total será de 1/7 (poca duracion = más velocidad), mientras que el que tiene la duracion de 7, va a tener una duracion total de 7/7 (el más lento)

            // CONCLUSIÓN: Mientras más larga sea la página (porque tiene más contenido), más grande deberá ser el valor del duration del evento más lento (en este caso el último).

            // Movimiento
            tlPC.to(naveFuego, {
                y: 2000,
                duration: 1.5,
                scale: .8
            }, 0); // Inicia en el segundo 0

            // Rotar
            tlPC.to(naveFuego, {
                rotation: 90,
                duration: 2,
            }, 0.5); // Empieza en el segundo 0.5

            // Movimiento
            tlPC.to(naveFuego, {
                duration: 2,
                scale: 2,
                x: -1800,
            }, 1.5); // Empieza en el segundo 1.5

            // Rotar
            tlPC.to(naveFuego, {
                rotation: -10,
                duration: 2,
            }, 2.2); // Empieza en el segundo 2

            // Movimiento
            tlPC.to(naveFuego, {
                duration: 4,
                y: 4600,
            }, 3); // Empieza en el segundo 3
        }
    }




    // Tablet
    // if (window.matchMedia("(min-width: 768px) and (max-width: 1199px)").matches) {
    //     const tlTablet = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".contenedor__animacion",
    //             // pin: true,
    //             // markers: true,
    //             start: "top top", // start toma como referencia al contenedor seleccionado
    //             end: "100% 100%", // end toma como referencia al contenedor padre del contenedor seleccionado
    //             scrub: true,
    //         },
    //     });

    //     tlTablet.to(naveFuego, {
    //         scale: 2,
    //         y: "4000px",
    //         duration: 8,
    //     });
    // }

    // // Mobile
    // if (window.matchMedia("(max-width: 767px)").matches) {
    //     const tlMobile = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".contenedor__animacion",
    //             // pin: true,
    //             // markers: true,
    //             start: "top top", // start toma como referencia al contenedor seleccionado
    //             end: "100% 100%", // end toma como referencia al contenedor padre del contenedor seleccionado
    //             scrub: true,
    //         },
    //     });

    //     tlMobile.to(naveFuego, {
    //         scale: 2,
    //         y: "5000px",
    //         duration: 8,
    //     });
    // }
})