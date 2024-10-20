const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["./GMPzSvSR.js", "./CkmzhkXs.js", "./FooterCore.D2wF6-UP.css", "./DvFcil3-.js", "./Bejkl4PY.js", "./DjqnOkMY.js", "./CmgSrMk8.js", "./FULHLRpo.js", "./error-404.DqfNFWMs.css", "./BVfxdEYM.js", "./error-500.B4a2Auxj.css"]))) => i.map(i => d[i]);
/**
 * @vue/shared v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
/*! #__NO_SIDE_EFFECTS__ */
function To(e) {
    const t = Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return n => n in t
}
const ue = {},
    pn = [],
    ft = () => {},
    Ku = () => !1,
    nr = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    Co = e => e.startsWith("onUpdate:"),
    ve = Object.assign,
    So = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    },
    Gu = Object.prototype.hasOwnProperty,
    ae = (e, t) => Gu.call(e, t),
    J = Array.isArray,
    gn = e => rr(e) === "[object Map]",
    ll = e => rr(e) === "[object Set]",
    qu = e => rr(e) === "[object RegExp]",
    z = e => typeof e == "function",
    me = e => typeof e == "string",
    Ft = e => typeof e == "symbol",
    he = e => e !== null && typeof e == "object",
    ko = e => (he(e) || z(e)) && z(e.then) && z(e.catch),
    cl = Object.prototype.toString,
    rr = e => cl.call(e),
    Yu = e => rr(e).slice(8, -1),
    ul = e => rr(e) === "[object Object]",
    Ro = e => me(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    mn = To(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    es = e => {
        const t = Object.create(null);
        return n => t[n] || (t[n] = e(n))
    },
    zu = /-(\w)/g,
    Je = es(e => e.replace(zu, (t, n) => n ? n.toUpperCase() : "")),
    Ju = /\B([A-Z])/g,
    tn = es(e => e.replace(Ju, "-$1").toLowerCase()),
    sr = es(e => e.charAt(0).toUpperCase() + e.slice(1)),
    ys = es(e => e ? `on${sr(e)}` : ""),
    Ht = (e, t) => !Object.is(e, t),
    Nn = (e, ...t) => {
        for (let n = 0; n < e.length; n++) e[n](...t)
    },
    fl = (e, t, n, r = !1) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            writable: r,
            value: n
        })
    },
    Zu = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    },
    dl = e => {
        const t = me(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t
    };
let fi;
const ts = () => fi || (fi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function ns(e) {
    if (J(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n],
                s = me(r) ? tf(r) : ns(r);
            if (s)
                for (const o in s) t[o] = s[o]
        }
        return t
    } else if (me(e) || he(e)) return e
}
const Qu = /;(?![^(]*\))/g,
    Xu = /:([^]+)/,
    ef = /\/\*[^]*?\*\//g;

function tf(e) {
    const t = {};
    return e.replace(ef, "").split(Qu).forEach(n => {
        if (n) {
            const r = n.split(Xu);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }), t
}

function rs(e) {
    let t = "";
    if (me(e)) t = e;
    else if (J(e))
        for (let n = 0; n < e.length; n++) {
            const r = rs(e[n]);
            r && (t += r + " ")
        } else if (he(e))
            for (const n in e) e[n] && (t += n + " ");
    return t.trim()
}

function nf(e) {
    if (!e) return null;
    let {
        class: t,
        style: n
    } = e;
    return t && !me(t) && (e.class = rs(t)), n && (e.style = ns(n)), e
}
const rf = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    sf = To(rf);

function hl(e) {
    return !!e || e === ""
}
const pl = e => !!(e && e.__v_isRef === !0),
    of = e => me(e) ? e : e == null ? "" : J(e) || he(e) && (e.toString === cl || !z(e.toString)) ? pl(e) ? of (e.value) : JSON.stringify(e, gl, 2) : String(e),
    gl = (e, t) => pl(t) ? gl(e, t.value) : gn(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, s], o) => (n[vs(r, o) + " =>"] = s, n), {})
    } : ll(t) ? {
        [`Set(${t.size})`]: [...t.values()].map(n => vs(n))
    } : Ft(t) ? vs(t) : he(t) && !J(t) && !ul(t) ? String(t) : t,
    vs = (e, t = "") => {
        var n;
        return Ft(e) ? `Symbol(${(n=e.description)!=null?n:t})` : e
    };
/**
 * @vue/reactivity v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let Pe;
class ml {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Pe, !t && Pe && (this.index = (Pe.scopes || (Pe.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes)
                for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes)
                for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
        }
    }
    run(t) {
        if (this._active) {
            const n = Pe;
            try {
                return Pe = this, t()
            } finally {
                Pe = n
            }
        }
    }
    on() {
        Pe = this
    }
    off() {
        Pe = this.parent
    }
    stop(t) {
        if (this._active) {
            let n, r;
            for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
            for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
            if (this.scopes)
                for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const s = this.parent.scopes.pop();
                s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index)
            }
            this.parent = void 0, this._active = !1
        }
    }
}

function yl(e) {
    return new ml(e)
}

function vl() {
    return Pe
}

function af(e, t = !1) {
    Pe && Pe.cleanups.push(e)
}
let de;
const bs = new WeakSet;
class bl {
    constructor(t) {
        this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Pe && Pe.active && Pe.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65, bs.has(this) && (bs.delete(this), this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || wl(this)
    }
    run() {
        if (!(this.flags & 1)) return this.fn();
        this.flags |= 2, di(this), El(this);
        const t = de,
            n = tt;
        de = this, tt = !0;
        try {
            return this.fn()
        } finally {
            Tl(this), de = t, tt = n, this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep) Po(t);
            this.deps = this.depsTail = void 0, di(this), this.onStop && this.onStop(), this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? bs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        js(this) && this.run()
    }
    get dirty() {
        return js(this)
    }
}
let _l = 0,
    jn, Bn;

function wl(e, t = !1) {
    if (e.flags |= 8, t) {
        e.next = Bn, Bn = e;
        return
    }
    e.next = jn, jn = e
}

function xo() {
    _l++
}

function Ao() {
    if (--_l > 0) return;
    if (Bn) {
        let t = Bn;
        for (Bn = void 0; t;) {
            const n = t.next;
            t.next = void 0, t.flags &= -9, t = n
        }
    }
    let e;
    for (; jn;) {
        let t = jn;
        for (jn = void 0; t;) {
            const n = t.next;
            if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
                t.trigger()
            } catch (r) {
                e || (e = r)
            }
            t = n
        }
    }
    if (e) throw e
}

function El(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t
}

function Tl(e) {
    let t, n = e.depsTail,
        r = n;
    for (; r;) {
        const s = r.prevDep;
        r.version === -1 ? (r === n && (n = s), Po(r), lf(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s
    }
    e.deps = t, e.depsTail = n
}

function js(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || t.dep.computed && (Cl(t.dep.computed) || t.dep.version !== t.version)) return !0;
    return !!e._dirty
}

function Cl(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Yn)) return;
    e.globalVersion = Yn;
    const t = e.dep;
    if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !js(e)) {
        e.flags &= -3;
        return
    }
    const n = de,
        r = tt;
    de = e, tt = !0;
    try {
        El(e);
        const s = e.fn(e._value);
        (t.version === 0 || Ht(s, e._value)) && (e._value = s, t.version++)
    } catch (s) {
        throw t.version++, s
    } finally {
        de = n, tt = r, Tl(e), e.flags &= -3
    }
}

function Po(e, t = !1) {
    const {
        dep: n,
        prevSub: r,
        nextSub: s
    } = e;
    if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
        n.computed.flags &= -5;
        for (let o = n.computed.deps; o; o = o.nextDep) Po(o, !0)
    }!t && !--n.sc && n.map && n.map.delete(n.key)
}

function lf(e) {
    const {
        prevDep: t,
        nextDep: n
    } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0)
}
let tt = !0;
const Sl = [];

function Nt() {
    Sl.push(tt), tt = !1
}

function jt() {
    const e = Sl.pop();
    tt = e === void 0 ? !0 : e
}

function di(e) {
    const {
        cleanup: t
    } = e;
    if (e.cleanup = void 0, t) {
        const n = de;
        de = void 0;
        try {
            t()
        } finally {
            de = n
        }
    }
}
let Yn = 0;
class cf {
    constructor(t, n) {
        this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class Oo {
    constructor(t) {
        this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0
    }
    track(t) {
        if (!de || !tt || de === this.computed) return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== de) n = this.activeLink = new cf(de, this), de.deps ? (n.prevDep = de.depsTail, de.depsTail.nextDep = n, de.depsTail = n) : de.deps = de.depsTail = n, kl(n);
        else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
            const r = n.nextDep;
            r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = de.depsTail, n.nextDep = void 0, de.depsTail.nextDep = n, de.depsTail = n, de.deps === n && (de.deps = r)
        }
        return n
    }
    trigger(t) {
        this.version++, Yn++, this.notify(t)
    }
    notify(t) {
        xo();
        try {
            for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
        } finally {
            Ao()
        }
    }
}

function kl(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let r = t.deps; r; r = r.nextDep) kl(r)
        }
        const n = e.dep.subs;
        n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e
    }
}
const Pr = new WeakMap,
    zt = Symbol(""),
    Bs = Symbol(""),
    zn = Symbol("");

function Re(e, t, n) {
    if (tt && de) {
        let r = Pr.get(e);
        r || Pr.set(e, r = new Map);
        let s = r.get(n);
        s || (r.set(n, s = new Oo), s.map = r, s.key = n), s.track()
    }
}

function vt(e, t, n, r, s, o) {
    const i = Pr.get(e);
    if (!i) {
        Yn++;
        return
    }
    const a = l => {
        l && l.trigger()
    };
    if (xo(), t === "clear") i.forEach(a);
    else {
        const l = J(e),
            f = l && Ro(n);
        if (l && n === "length") {
            const c = Number(r);
            i.forEach((u, d) => {
                (d === "length" || d === zn || !Ft(d) && d >= c) && a(u)
            })
        } else switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), f && a(i.get(zn)), t) {
            case "add":
                l ? f && a(i.get("length")) : (a(i.get(zt)), gn(e) && a(i.get(Bs)));
                break;
            case "delete":
                l || (a(i.get(zt)), gn(e) && a(i.get(Bs)));
                break;
            case "set":
                gn(e) && a(i.get(zt));
                break
        }
    }
    Ao()
}

function uf(e, t) {
    const n = Pr.get(e);
    return n && n.get(t)
}

function sn(e) {
    const t = ne(e);
    return t === e ? t : (Re(t, "iterate", zn), nt(e) ? t : t.map(Oe))
}

function Mo(e) {
    return Re(e = ne(e), "iterate", zn), e
}
const ff = {
    __proto__: null,
    [Symbol.iterator]() {
        return _s(this, Symbol.iterator, Oe)
    },
    concat(...e) {
        return sn(this).concat(...e.map(t => J(t) ? sn(t) : t))
    },
    entries() {
        return _s(this, "entries", e => (e[1] = Oe(e[1]), e))
    },
    every(e, t) {
        return ht(this, "every", e, t, void 0, arguments)
    },
    filter(e, t) {
        return ht(this, "filter", e, t, n => n.map(Oe), arguments)
    },
    find(e, t) {
        return ht(this, "find", e, t, Oe, arguments)
    },
    findIndex(e, t) {
        return ht(this, "findIndex", e, t, void 0, arguments)
    },
    findLast(e, t) {
        return ht(this, "findLast", e, t, Oe, arguments)
    },
    findLastIndex(e, t) {
        return ht(this, "findLastIndex", e, t, void 0, arguments)
    },
    forEach(e, t) {
        return ht(this, "forEach", e, t, void 0, arguments)
    },
    includes(...e) {
        return ws(this, "includes", e)
    },
    indexOf(...e) {
        return ws(this, "indexOf", e)
    },
    join(e) {
        return sn(this).join(e)
    },
    lastIndexOf(...e) {
        return ws(this, "lastIndexOf", e)
    },
    map(e, t) {
        return ht(this, "map", e, t, void 0, arguments)
    },
    pop() {
        return Mn(this, "pop")
    },
    push(...e) {
        return Mn(this, "push", e)
    },
    reduce(e, ...t) {
        return hi(this, "reduce", e, t)
    },
    reduceRight(e, ...t) {
        return hi(this, "reduceRight", e, t)
    },
    shift() {
        return Mn(this, "shift")
    },
    some(e, t) {
        return ht(this, "some", e, t, void 0, arguments)
    },
    splice(...e) {
        return Mn(this, "splice", e)
    },
    toReversed() {
        return sn(this).toReversed()
    },
    toSorted(e) {
        return sn(this).toSorted(e)
    },
    toSpliced(...e) {
        return sn(this).toSpliced(...e)
    },
    unshift(...e) {
        return Mn(this, "unshift", e)
    },
    values() {
        return _s(this, "values", Oe)
    }
};

function _s(e, t, n) {
    const r = Mo(e),
        s = r[t]();
    return r !== e && !nt(e) && (s._next = s.next, s.next = () => {
        const o = s._next();
        return o.value && (o.value = n(o.value)), o
    }), s
}
const df = Array.prototype;

function ht(e, t, n, r, s, o) {
    const i = Mo(e),
        a = i !== e && !nt(e),
        l = i[t];
    if (l !== df[t]) {
        const u = l.apply(e, o);
        return a ? Oe(u) : u
    }
    let f = n;
    i !== e && (a ? f = function(u, d) {
        return n.call(this, Oe(u), d, e)
    } : n.length > 2 && (f = function(u, d) {
        return n.call(this, u, d, e)
    }));
    const c = l.call(i, f, r);
    return a && s ? s(c) : c
}

function hi(e, t, n, r) {
    const s = Mo(e);
    let o = n;
    return s !== e && (nt(e) ? n.length > 3 && (o = function(i, a, l) {
        return n.call(this, i, a, l, e)
    }) : o = function(i, a, l) {
        return n.call(this, i, Oe(a), l, e)
    }), s[t](o, ...r)
}

function ws(e, t, n) {
    const r = ne(e);
    Re(r, "iterate", zn);
    const s = r[t](...n);
    return (s === -1 || s === !1) && Lo(n[0]) ? (n[0] = ne(n[0]), r[t](...n)) : s
}

function Mn(e, t, n = []) {
    Nt(), xo();
    const r = ne(e)[t].apply(e, n);
    return Ao(), jt(), r
}
const hf = To("__proto__,__v_isRef,__isVue"),
    Rl = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Ft));

function pf(e) {
    Ft(e) || (e = String(e));
    const t = ne(this);
    return Re(t, "has", e), t.hasOwnProperty(e)
}
class xl {
    constructor(t = !1, n = !1) {
        this._isReadonly = t, this._isShallow = n
    }
    get(t, n, r) {
        const s = this._isReadonly,
            o = this._isShallow;
        if (n === "__v_isReactive") return !s;
        if (n === "__v_isReadonly") return s;
        if (n === "__v_isShallow") return o;
        if (n === "__v_raw") return r === (s ? o ? Cf : Ml : o ? Ol : Pl).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
        const i = J(t);
        if (!s) {
            let l;
            if (i && (l = ff[n])) return l;
            if (n === "hasOwnProperty") return pf
        }
        const a = Reflect.get(t, n, Ee(t) ? t : r);
        return (Ft(n) ? Rl.has(n) : hf(n)) || (s || Re(t, "get", n), o) ? a : Ee(a) ? i && Ro(n) ? a : a.value : he(a) ? s ? Do(a) : Se(a) : a
    }
}
class Al extends xl {
    constructor(t = !1) {
        super(!1, t)
    }
    set(t, n, r, s) {
        let o = t[n];
        if (!this._isShallow) {
            const l = Lt(o);
            if (!nt(r) && !Lt(r) && (o = ne(o), r = ne(r)), !J(t) && Ee(o) && !Ee(r)) return l ? !1 : (o.value = r, !0)
        }
        const i = J(t) && Ro(n) ? Number(n) < t.length : ae(t, n),
            a = Reflect.set(t, n, r, Ee(t) ? t : s);
        return t === ne(s) && (i ? Ht(r, o) && vt(t, "set", n, r) : vt(t, "add", n, r)), a
    }
    deleteProperty(t, n) {
        const r = ae(t, n);
        t[n];
        const s = Reflect.deleteProperty(t, n);
        return s && r && vt(t, "delete", n, void 0), s
    }
    has(t, n) {
        const r = Reflect.has(t, n);
        return (!Ft(n) || !Rl.has(n)) && Re(t, "has", n), r
    }
    ownKeys(t) {
        return Re(t, "iterate", J(t) ? "length" : zt), Reflect.ownKeys(t)
    }
}
class gf extends xl {
    constructor(t = !1) {
        super(!0, t)
    }
    set(t, n) {
        return !0
    }
    deleteProperty(t, n) {
        return !0
    }
}
const mf = new Al,
    yf = new gf,
    vf = new Al(!0);
const Us = e => e,
    cr = e => Reflect.getPrototypeOf(e);

function bf(e, t, n) {
    return function(...r) {
        const s = this.__v_raw,
            o = ne(s),
            i = gn(o),
            a = e === "entries" || e === Symbol.iterator && i,
            l = e === "keys" && i,
            f = s[e](...r),
            c = n ? Us : t ? Ws : Oe;
        return !t && Re(o, "iterate", l ? Bs : zt), {
            next() {
                const {
                    value: u,
                    done: d
                } = f.next();
                return d ? {
                    value: u,
                    done: d
                } : {
                    value: a ? [c(u[0]), c(u[1])] : c(u),
                    done: d
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}

function ur(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}

function _f(e, t) {
    const n = {
        get(s) {
            const o = this.__v_raw,
                i = ne(o),
                a = ne(s);
            e || (Ht(s, a) && Re(i, "get", s), Re(i, "get", a));
            const {
                has: l
            } = cr(i), f = t ? Us : e ? Ws : Oe;
            if (l.call(i, s)) return f(o.get(s));
            if (l.call(i, a)) return f(o.get(a));
            o !== i && o.get(s)
        },
        get size() {
            const s = this.__v_raw;
            return !e && Re(ne(s), "iterate", zt), Reflect.get(s, "size", s)
        },
        has(s) {
            const o = this.__v_raw,
                i = ne(o),
                a = ne(s);
            return e || (Ht(s, a) && Re(i, "has", s), Re(i, "has", a)), s === a ? o.has(s) : o.has(s) || o.has(a)
        },
        forEach(s, o) {
            const i = this,
                a = i.__v_raw,
                l = ne(a),
                f = t ? Us : e ? Ws : Oe;
            return !e && Re(l, "iterate", zt), a.forEach((c, u) => s.call(o, f(c), f(u), i))
        }
    };
    return ve(n, e ? {
        add: ur("add"),
        set: ur("set"),
        delete: ur("delete"),
        clear: ur("clear")
    } : {
        add(s) {
            !t && !nt(s) && !Lt(s) && (s = ne(s));
            const o = ne(this);
            return cr(o).has.call(o, s) || (o.add(s), vt(o, "add", s, s)), this
        },
        set(s, o) {
            !t && !nt(o) && !Lt(o) && (o = ne(o));
            const i = ne(this),
                {
                    has: a,
                    get: l
                } = cr(i);
            let f = a.call(i, s);
            f || (s = ne(s), f = a.call(i, s));
            const c = l.call(i, s);
            return i.set(s, o), f ? Ht(o, c) && vt(i, "set", s, o) : vt(i, "add", s, o), this
        },
        delete(s) {
            const o = ne(this),
                {
                    has: i,
                    get: a
                } = cr(o);
            let l = i.call(o, s);
            l || (s = ne(s), l = i.call(o, s)), a && a.call(o, s);
            const f = o.delete(s);
            return l && vt(o, "delete", s, void 0), f
        },
        clear() {
            const s = ne(this),
                o = s.size !== 0,
                i = s.clear();
            return o && vt(s, "clear", void 0, void 0), i
        }
    }), ["keys", "values", "entries", Symbol.iterator].forEach(s => {
        n[s] = bf(s, e, t)
    }), n
}

function Io(e, t) {
    const n = _f(e, t);
    return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(ae(n, s) && s in r ? n : r, s, o)
}
const wf = {
        get: Io(!1, !1)
    },
    Ef = {
        get: Io(!1, !0)
    },
    Tf = {
        get: Io(!0, !1)
    };
const Pl = new WeakMap,
    Ol = new WeakMap,
    Ml = new WeakMap,
    Cf = new WeakMap;

function Sf(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}

function kf(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Sf(Yu(e))
}

function Se(e) {
    return Lt(e) ? e : Ho(e, !1, mf, wf, Pl)
}

function _t(e) {
    return Ho(e, !1, vf, Ef, Ol)
}

function Do(e) {
    return Ho(e, !0, yf, Tf, Ml)
}

function Ho(e, t, n, r, s) {
    if (!he(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const o = s.get(e);
    if (o) return o;
    const i = kf(e);
    if (i === 0) return e;
    const a = new Proxy(e, i === 2 ? r : n);
    return s.set(e, a), a
}

function yn(e) {
    return Lt(e) ? yn(e.__v_raw) : !!(e && e.__v_isReactive)
}

function Lt(e) {
    return !!(e && e.__v_isReadonly)
}

function nt(e) {
    return !!(e && e.__v_isShallow)
}

function Lo(e) {
    return e ? !!e.__v_raw : !1
}

function ne(e) {
    const t = e && e.__v_raw;
    return t ? ne(t) : e
}

function Rf(e) {
    return !ae(e, "__v_skip") && Object.isExtensible(e) && fl(e, "__v_skip", !0), e
}
const Oe = e => he(e) ? Se(e) : e,
    Ws = e => he(e) ? Do(e) : e;

function Ee(e) {
    return e ? e.__v_isRef === !0 : !1
}

function Te(e) {
    return Il(e, !1)
}

function Ve(e) {
    return Il(e, !0)
}

function Il(e, t) {
    return Ee(e) ? e : new xf(e, t)
}
class xf {
    constructor(t, n) {
        this.dep = new Oo, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : ne(t), this._value = n ? t : Oe(t), this.__v_isShallow = n
    }
    get value() {
        return this.dep.track(), this._value
    }
    set value(t) {
        const n = this._rawValue,
            r = this.__v_isShallow || nt(t) || Lt(t);
        t = r ? t : ne(t), Ht(t, n) && (this._rawValue = t, this._value = r ? t : Oe(t), this.dep.trigger())
    }
}

function se(e) {
    return Ee(e) ? e.value : e
}

function N0(e) {
    return z(e) ? e() : se(e)
}
const Af = {
    get: (e, t, n) => t === "__v_raw" ? e : se(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
        const s = e[t];
        return Ee(s) && !Ee(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r)
    }
};

function Dl(e) {
    return yn(e) ? e : new Proxy(e, Af)
}

function Hl(e) {
    const t = J(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = Ll(e, n);
    return t
}
class Pf {
    constructor(t, n, r) {
        this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0, this._value = void 0
    }
    get value() {
        const t = this._object[this._key];
        return this._value = t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return uf(ne(this._object), this._key)
    }
}
class Of {
    constructor(t) {
        this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0
    }
    get value() {
        return this._value = this._getter()
    }
}

function Mf(e, t, n) {
    return Ee(e) ? e : z(e) ? new Of(e) : he(e) && arguments.length > 1 ? Ll(e, t, n) : Te(e)
}

function Ll(e, t, n) {
    const r = e[t];
    return Ee(r) ? r : new Pf(e, t, n)
}
class If {
    constructor(t, n, r) {
        this.fn = t, this.setter = n, this._value = void 0, this.dep = new Oo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Yn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r
    }
    notify() {
        if (this.flags |= 16, !(this.flags & 8) && de !== this) return wl(this, !0), !0
    }
    get value() {
        const t = this.dep.track();
        return Cl(this), t && (t.version = this.dep.version), this._value
    }
    set value(t) {
        this.setter && this.setter(t)
    }
}

function Df(e, t, n = !1) {
    let r, s;
    return z(e) ? r = e : (r = e.get, s = e.set), new If(r, s, n)
}
const fr = {},
    Or = new WeakMap;
let Gt;

function Hf(e, t = !1, n = Gt) {
    if (n) {
        let r = Or.get(n);
        r || Or.set(n, r = []), r.push(e)
    }
}

function Lf(e, t, n = ue) {
    const {
        immediate: r,
        deep: s,
        once: o,
        scheduler: i,
        augmentJob: a,
        call: l
    } = n, f = b => s ? b : nt(b) || s === !1 || s === 0 ? bt(b, 1) : bt(b);
    let c, u, d, h, y = !1,
        v = !1;
    if (Ee(e) ? (u = () => e.value, y = nt(e)) : yn(e) ? (u = () => f(e), y = !0) : J(e) ? (v = !0, y = e.some(b => yn(b) || nt(b)), u = () => e.map(b => {
            if (Ee(b)) return b.value;
            if (yn(b)) return f(b);
            if (z(b)) return l ? l(b, 2) : b()
        })) : z(e) ? t ? u = l ? () => l(e, 2) : e : u = () => {
            if (d) {
                Nt();
                try {
                    d()
                } finally {
                    jt()
                }
            }
            const b = Gt;
            Gt = c;
            try {
                return l ? l(e, 3, [h]) : e(h)
            } finally {
                Gt = b
            }
        } : u = ft, t && s) {
        const b = u,
            E = s === !0 ? 1 / 0 : s;
        u = () => bt(b(), E)
    }
    const T = vl(),
        C = () => {
            c.stop(), T && So(T.effects, c)
        };
    if (o && t) {
        const b = t;
        t = (...E) => {
            b(...E), C()
        }
    }
    let _ = v ? new Array(e.length).fill(fr) : fr;
    const g = b => {
        if (!(!(c.flags & 1) || !c.dirty && !b))
            if (t) {
                const E = c.run();
                if (s || y || (v ? E.some((S, A) => Ht(S, _[A])) : Ht(E, _))) {
                    d && d();
                    const S = Gt;
                    Gt = c;
                    try {
                        const A = [E, _ === fr ? void 0 : v && _[0] === fr ? [] : _, h];
                        l ? l(t, 3, A) : t(...A), _ = E
                    } finally {
                        Gt = S
                    }
                }
            } else c.run()
    };
    return a && a(g), c = new bl(u), c.scheduler = i ? () => i(g, !1) : g, h = b => Hf(b, !1, c), d = c.onStop = () => {
        const b = Or.get(c);
        if (b) {
            if (l) l(b, 4);
            else
                for (const E of b) E();
            Or.delete(c)
        }
    }, t ? r ? g(!0) : _ = c.run() : i ? i(g.bind(null, !0), !0) : c.run(), C.pause = c.pause.bind(c), C.resume = c.resume.bind(c), C.stop = C, C
}

function bt(e, t = 1 / 0, n) {
    if (t <= 0 || !he(e) || e.__v_skip || (n = n || new Set, n.has(e))) return e;
    if (n.add(e), t--, Ee(e)) bt(e.value, t, n);
    else if (J(e))
        for (let r = 0; r < e.length; r++) bt(e[r], t, n);
    else if (ll(e) || gn(e)) e.forEach(r => {
        bt(r, t, n)
    });
    else if (ul(e)) {
        for (const r in e) bt(e[r], t, n);
        for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && bt(e[r], t, n)
    }
    return e
}
/**
 * @vue/runtime-core v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
function or(e, t, n, r) {
    try {
        return r ? e(...r) : e()
    } catch (s) {
        xn(s, t, n)
    }
}

function st(e, t, n, r) {
    if (z(e)) {
        const s = or(e, t, n, r);
        return s && ko(s) && s.catch(o => {
            xn(o, t, n)
        }), s
    }
    if (J(e)) {
        const s = [];
        for (let o = 0; o < e.length; o++) s.push(st(e[o], t, n, r));
        return s
    }
}

function xn(e, t, n, r = !0) {
    const s = t ? t.vnode : null,
        {
            errorHandler: o,
            throwUnhandledErrorInProduction: i
        } = t && t.appContext.config || ue;
    if (t) {
        let a = t.parent;
        const l = t.proxy,
            f = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; a;) {
            const c = a.ec;
            if (c) {
                for (let u = 0; u < c.length; u++)
                    if (c[u](e, l, f) === !1) return
            }
            a = a.parent
        }
        if (o) {
            Nt(), or(o, null, 10, [e, l, f]), jt();
            return
        }
    }
    $f(e, n, s, r, i)
}

function $f(e, t, n, r = !0, s = !1) {
    if (s) throw e;
    console.error(e)
}
const Me = [];
let ct = -1;
const vn = [];
let At = null,
    cn = 0;
const $l = Promise.resolve();
let Mr = null;

function nn(e) {
    const t = Mr || $l;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function Ff(e) {
    let t = ct + 1,
        n = Me.length;
    for (; t < n;) {
        const r = t + n >>> 1,
            s = Me[r],
            o = Jn(s);
        o < e || o === e && s.flags & 2 ? t = r + 1 : n = r
    }
    return t
}

function $o(e) {
    if (!(e.flags & 1)) {
        const t = Jn(e),
            n = Me[Me.length - 1];
        !n || !(e.flags & 2) && t >= Jn(n) ? Me.push(e) : Me.splice(Ff(t), 0, e), e.flags |= 1, Fl()
    }
}

function Fl() {
    Mr || (Mr = $l.then(Nl))
}

function Vs(e) {
    J(e) ? vn.push(...e) : At && e.id === -1 ? At.splice(cn + 1, 0, e) : e.flags & 1 || (vn.push(e), e.flags |= 1), Fl()
}

function pi(e, t, n = ct + 1) {
    for (; n < Me.length; n++) {
        const r = Me[n];
        if (r && r.flags & 2) {
            if (e && r.id !== e.uid) continue;
            Me.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2)
        }
    }
}

function Ir(e) {
    if (vn.length) {
        const t = [...new Set(vn)].sort((n, r) => Jn(n) - Jn(r));
        if (vn.length = 0, At) {
            At.push(...t);
            return
        }
        for (At = t, cn = 0; cn < At.length; cn++) {
            const n = At[cn];
            n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2
        }
        At = null, cn = 0
    }
}
const Jn = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;

function Nl(e) {
    try {
        for (ct = 0; ct < Me.length; ct++) {
            const t = Me[ct];
            t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), or(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2))
        }
    } finally {
        for (; ct < Me.length; ct++) {
            const t = Me[ct];
            t && (t.flags &= -2)
        }
        ct = -1, Me.length = 0, Ir(), Mr = null, (Me.length || vn.length) && Nl()
    }
}
let De = null,
    jl = null;

function Dr(e) {
    const t = De;
    return De = e, jl = e && e.type.__scopeId || null, t
}

function Hr(e, t = De, n) {
    if (!t || e._n) return e;
    const r = (...s) => {
        r._d && Ri(-1);
        const o = Dr(t);
        let i;
        try {
            i = e(...s)
        } finally {
            Dr(o), r._d && Ri(1)
        }
        return i
    };
    return r._n = !0, r._c = !0, r._d = !0, r
}

function j0(e, t) {
    if (De === null) return e;
    const n = cs(De),
        r = e.dirs || (e.dirs = []);
    for (let s = 0; s < t.length; s++) {
        let [o, i, a, l = ue] = t[s];
        o && (z(o) && (o = {
            mounted: o,
            updated: o
        }), o.deep && bt(i), r.push({
            dir: o,
            instance: n,
            value: i,
            oldValue: void 0,
            arg: a,
            modifiers: l
        }))
    }
    return e
}

function ut(e, t, n, r) {
    const s = e.dirs,
        o = t && t.dirs;
    for (let i = 0; i < s.length; i++) {
        const a = s[i];
        o && (a.oldValue = o[i].value);
        let l = a.dir[r];
        l && (Nt(), st(l, n, 8, [e.el, a, e, t]), jt())
    }
}
const Nf = Symbol("_vte"),
    Bl = e => e.__isTeleport,
    Pt = Symbol("_leaveCb"),
    dr = Symbol("_enterCb");

function Ul() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return os(() => {
        e.isMounted = !0
    }), is(() => {
        e.isUnmounting = !0
    }), e
}
const qe = [Function, Array],
    Wl = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: qe,
        onEnter: qe,
        onAfterEnter: qe,
        onEnterCancelled: qe,
        onBeforeLeave: qe,
        onLeave: qe,
        onAfterLeave: qe,
        onLeaveCancelled: qe,
        onBeforeAppear: qe,
        onAppear: qe,
        onAfterAppear: qe,
        onAppearCancelled: qe
    },
    Vl = e => {
        const t = e.subTree;
        return t.component ? Vl(t.component) : t
    },
    jf = {
        name: "BaseTransition",
        props: Wl,
        setup(e, {
            slots: t
        }) {
            const n = An(),
                r = Ul();
            return () => {
                const s = t.default && Fo(t.default(), !0);
                if (!s || !s.length) return;
                const o = Kl(s),
                    i = ne(e),
                    {
                        mode: a
                    } = i;
                if (r.isLeaving) return Es(o);
                const l = gi(o);
                if (!l) return Es(o);
                let f = Zn(l, i, r, n, d => f = d);
                l.type !== xe && $t(l, f);
                const c = n.subTree,
                    u = c && gi(c);
                if (u && u.type !== xe && !et(l, u) && Vl(n).type !== xe) {
                    const d = Zn(u, i, r, n);
                    if ($t(u, d), a === "out-in" && l.type !== xe) return r.isLeaving = !0, d.afterLeave = () => {
                        r.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave
                    }, Es(o);
                    a === "in-out" && l.type !== xe && (d.delayLeave = (h, y, v) => {
                        const T = Gl(r, u);
                        T[String(u.key)] = u, h[Pt] = () => {
                            y(), h[Pt] = void 0, delete f.delayedLeave
                        }, f.delayedLeave = v
                    })
                }
                return o
            }
        }
    };

function Kl(e) {
    let t = e[0];
    if (e.length > 1) {
        for (const n of e)
            if (n.type !== xe) {
                t = n;
                break
            }
    }
    return t
}
const Bf = jf;

function Gl(e, t) {
    const {
        leavingVNodes: n
    } = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null), n.set(t.type, r)), r
}

function Zn(e, t, n, r, s) {
    const {
        appear: o,
        mode: i,
        persisted: a = !1,
        onBeforeEnter: l,
        onEnter: f,
        onAfterEnter: c,
        onEnterCancelled: u,
        onBeforeLeave: d,
        onLeave: h,
        onAfterLeave: y,
        onLeaveCancelled: v,
        onBeforeAppear: T,
        onAppear: C,
        onAfterAppear: _,
        onAppearCancelled: g
    } = t, b = String(e.key), E = Gl(n, e), S = (O, x) => {
        O && st(O, r, 9, x)
    }, A = (O, x) => {
        const U = x[1];
        S(O, x), J(O) ? O.every(M => M.length <= 1) && U() : O.length <= 1 && U()
    }, H = {
        mode: i,
        persisted: a,
        beforeEnter(O) {
            let x = l;
            if (!n.isMounted)
                if (o) x = T || l;
                else return;
            O[Pt] && O[Pt](!0);
            const U = E[b];
            U && et(e, U) && U.el[Pt] && U.el[Pt](), S(x, [O])
        },
        enter(O) {
            let x = f,
                U = c,
                M = u;
            if (!n.isMounted)
                if (o) x = C || f, U = _ || c, M = g || u;
                else return;
            let W = !1;
            const ee = O[dr] = oe => {
                W || (W = !0, oe ? S(M, [O]) : S(U, [O]), H.delayedLeave && H.delayedLeave(), O[dr] = void 0)
            };
            x ? A(x, [O, ee]) : ee()
        },
        leave(O, x) {
            const U = String(e.key);
            if (O[dr] && O[dr](!0), n.isUnmounting) return x();
            S(d, [O]);
            let M = !1;
            const W = O[Pt] = ee => {
                M || (M = !0, x(), ee ? S(v, [O]) : S(y, [O]), O[Pt] = void 0, E[U] === e && delete E[U])
            };
            E[U] = e, h ? A(h, [O, W]) : W()
        },
        clone(O) {
            const x = Zn(O, t, n, r, s);
            return s && s(x), x
        }
    };
    return H
}

function Es(e) {
    if (ir(e)) return e = Et(e), e.children = null, e
}

function gi(e) {
    if (!ir(e)) return Bl(e.type) && e.children ? Kl(e.children) : e;
    const {
        shapeFlag: t,
        children: n
    } = e;
    if (n) {
        if (t & 16) return n[0];
        if (t & 32 && z(n.default)) return n.default()
    }
}

function $t(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, $t(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function Fo(e, t = !1, n) {
    let r = [],
        s = 0;
    for (let o = 0; o < e.length; o++) {
        let i = e[o];
        const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
        i.type === Ie ? (i.patchFlag & 128 && s++, r = r.concat(Fo(i.children, t, a))) : (t || i.type !== xe) && r.push(a != null ? Et(i, {
            key: a
        }) : i)
    }
    if (s > 1)
        for (let o = 0; o < r.length; o++) r[o].patchFlag = -2;
    return r
} /*! #__NO_SIDE_EFFECTS__ */
function Tt(e, t) {
    return z(e) ? ve({
        name: e.name
    }, t, {
        setup: e
    }) : e
}

function No(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}

function Lr(e, t, n, r, s = !1) {
    if (J(e)) {
        e.forEach((y, v) => Lr(y, t && (J(t) ? t[v] : t), n, r, s));
        return
    }
    if (Jt(r) && !s) return;
    const o = r.shapeFlag & 4 ? cs(r.component) : r.el,
        i = s ? null : o,
        {
            i: a,
            r: l
        } = e,
        f = t && t.r,
        c = a.refs === ue ? a.refs = {} : a.refs,
        u = a.setupState,
        d = ne(u),
        h = u === ue ? () => !1 : y => ae(d, y);
    if (f != null && f !== l && (me(f) ? (c[f] = null, h(f) && (u[f] = null)) : Ee(f) && (f.value = null)), z(l)) or(l, a, 12, [i, c]);
    else {
        const y = me(l),
            v = Ee(l);
        if (y || v) {
            const T = () => {
                if (e.f) {
                    const C = y ? h(l) ? u[l] : c[l] : l.value;
                    s ? J(C) && So(C, o) : J(C) ? C.includes(o) || C.push(o) : y ? (c[l] = [o], h(l) && (u[l] = c[l])) : (l.value = [o], e.k && (c[e.k] = l.value))
                } else y ? (c[l] = i, h(l) && (u[l] = i)) : v && (l.value = i, e.k && (c[e.k] = i))
            };
            i ? (T.id = -1, Ce(T, n)) : T()
        }
    }
}
let mi = !1;
const on = () => {
        mi || (console.error("Hydration completed but contains mismatches."), mi = !0)
    },
    Uf = e => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject",
    Wf = e => e.namespaceURI.includes("MathML"),
    hr = e => {
        if (e.nodeType === 1) {
            if (Uf(e)) return "svg";
            if (Wf(e)) return "mathml"
        }
    },
    fn = e => e.nodeType === 8;

function Vf(e) {
    const {
        mt: t,
        p: n,
        o: {
            patchProp: r,
            createText: s,
            nextSibling: o,
            parentNode: i,
            remove: a,
            insert: l,
            createComment: f
        }
    } = e, c = (g, b) => {
        if (!b.hasChildNodes()) {
            n(null, g, b), Ir(), b._vnode = g;
            return
        }
        u(b.firstChild, g, null, null, null), Ir(), b._vnode = g
    }, u = (g, b, E, S, A, H = !1) => {
        H = H || !!b.dynamicChildren;
        const O = fn(g) && g.data === "[",
            x = () => v(g, b, E, S, A, O),
            {
                type: U,
                ref: M,
                shapeFlag: W,
                patchFlag: ee
            } = b;
        let oe = g.nodeType;
        b.el = g, ee === -2 && (H = !1, b.dynamicChildren = null);
        let V = null;
        switch (U) {
            case Qt:
                oe !== 3 ? b.children === "" ? (l(b.el = s(""), i(g), g), V = g) : V = x() : (g.data !== b.children && (on(), g.data = b.children), V = o(g));
                break;
            case xe:
                _(g) ? (V = o(g), C(b.el = g.content.firstChild, g, E)) : oe !== 8 || O ? V = x() : V = o(g);
                break;
            case Tr:
                if (O && (g = o(g), oe = g.nodeType), oe === 1 || oe === 3) {
                    V = g;
                    const Z = !b.children.length;
                    for (let K = 0; K < b.staticCount; K++) Z && (b.children += V.nodeType === 1 ? V.outerHTML : V.data), K === b.staticCount - 1 && (b.anchor = V), V = o(V);
                    return O ? o(V) : V
                } else x();
                break;
            case Ie:
                O ? V = y(g, b, E, S, A, H) : V = x();
                break;
            default:
                if (W & 1)(oe !== 1 || b.type.toLowerCase() !== g.tagName.toLowerCase()) && !_(g) ? V = x() : V = d(g, b, E, S, A, H);
                else if (W & 6) {
                    b.slotScopeIds = A;
                    const Z = i(g);
                    if (O ? V = T(g) : fn(g) && g.data === "teleport start" ? V = T(g, g.data, "teleport end") : V = o(g), t(b, Z, null, E, S, hr(Z), H), Jt(b)) {
                        let K;
                        O ? (K = re(Ie), K.anchor = V ? V.previousSibling : Z.lastChild) : K = g.nodeType === 3 ? Ec("") : re("div"), K.el = g, b.component.subTree = K
                    }
                } else W & 64 ? oe !== 8 ? V = x() : V = b.type.hydrate(g, b, E, S, A, H, e, h) : W & 128 && (V = b.type.hydrate(g, b, E, S, hr(i(g)), A, H, e, u))
        }
        return M != null && Lr(M, null, S, b), V
    }, d = (g, b, E, S, A, H) => {
        H = H || !!b.dynamicChildren;
        const {
            type: O,
            props: x,
            patchFlag: U,
            shapeFlag: M,
            dirs: W,
            transition: ee
        } = b, oe = O === "input" || O === "option";
        if (oe || U !== -1) {
            W && ut(b, null, E, "created");
            let V = !1;
            if (_(g)) {
                V = uc(null, ee) && E && E.vnode.props && E.vnode.props.appear;
                const K = g.content.firstChild;
                V && ee.beforeEnter(K), C(K, g, E), b.el = g = K
            }
            if (M & 16 && !(x && (x.innerHTML || x.textContent))) {
                let K = h(g.firstChild, b, g, E, S, A, H);
                for (; K;) {
                    pr(g, 1) || on();
                    const ge = K;
                    K = K.nextSibling, a(ge)
                }
            } else if (M & 8) {
                let K = b.children;
                K[0] === `
` && (g.tagName === "PRE" || g.tagName === "TEXTAREA") && (K = K.slice(1)), g.textContent !== K && (pr(g, 0) || on(), g.textContent = b.children)
            }
            if (x) {
                if (oe || !H || U & 48) {
                    const K = g.tagName.includes("-");
                    for (const ge in x)(oe && (ge.endsWith("value") || ge === "indeterminate") || nr(ge) && !mn(ge) || ge[0] === "." || K) && r(g, ge, null, x[ge], void 0, E)
                } else if (x.onClick) r(g, "onClick", null, x.onClick, void 0, E);
                else if (U & 4 && yn(x.style))
                    for (const K in x.style) x.style[K]
            }
            let Z;
            (Z = x && x.onVnodeBeforeMount) && $e(Z, E, b), W && ut(b, null, E, "beforeMount"), ((Z = x && x.onVnodeMounted) || W || V) && mc(() => {
                Z && $e(Z, E, b), V && ee.enter(g), W && ut(b, null, E, "mounted")
            }, S)
        }
        return g.nextSibling
    }, h = (g, b, E, S, A, H, O) => {
        O = O || !!b.dynamicChildren;
        const x = b.children,
            U = x.length;
        for (let M = 0; M < U; M++) {
            const W = O ? x[M] : x[M] = Ue(x[M]),
                ee = W.type === Qt;
            g ? (ee && !O && M + 1 < U && Ue(x[M + 1]).type === Qt && (l(s(g.data.slice(W.children.length)), E, o(g)), g.data = W.children), g = u(g, W, S, A, H, O)) : ee && !W.children ? l(W.el = s(""), E) : (pr(E, 1) || on(), n(null, W, E, null, S, A, hr(E), H))
        }
        return g
    }, y = (g, b, E, S, A, H) => {
        const {
            slotScopeIds: O
        } = b;
        O && (A = A ? A.concat(O) : O);
        const x = i(g),
            U = h(o(g), b, x, E, S, A, H);
        return U && fn(U) && U.data === "]" ? o(b.anchor = U) : (on(), l(b.anchor = f("]"), x, U), U)
    }, v = (g, b, E, S, A, H) => {
        if (pr(g.parentElement, 1) || on(), b.el = null, H) {
            const U = T(g);
            for (;;) {
                const M = o(g);
                if (M && M !== U) a(M);
                else break
            }
        }
        const O = o(g),
            x = i(g);
        return a(g), n(null, b, x, O, E, S, hr(x), A), O
    }, T = (g, b = "[", E = "]") => {
        let S = 0;
        for (; g;)
            if (g = o(g), g && fn(g) && (g.data === b && S++, g.data === E)) {
                if (S === 0) return o(g);
                S--
            }
        return g
    }, C = (g, b, E) => {
        const S = b.parentNode;
        S && S.replaceChild(g, b);
        let A = E;
        for (; A;) A.vnode.el === b && (A.vnode.el = A.subTree.el = g), A = A.parent
    }, _ = g => g.nodeType === 1 && g.tagName === "TEMPLATE";
    return [c, u]
}
const yi = "data-allow-mismatch",
    Kf = {
        0: "text",
        1: "children",
        2: "class",
        3: "style",
        4: "attribute"
    };

function pr(e, t) {
    if (t === 0 || t === 1)
        for (; e && !e.hasAttribute(yi);) e = e.parentElement;
    const n = e && e.getAttribute(yi);
    if (n == null) return !1;
    if (n === "") return !0; {
        const r = n.split(",");
        return t === 0 && r.includes("children") ? !0 : n.split(",").includes(Kf[t])
    }
}
ts().requestIdleCallback;
ts().cancelIdleCallback;

function Gf(e, t) {
    if (fn(e) && e.data === "[") {
        let n = 1,
            r = e.nextSibling;
        for (; r;) {
            if (r.nodeType === 1) {
                if (t(r) === !1) break
            } else if (fn(r))
                if (r.data === "]") {
                    if (--n === 0) break
                } else r.data === "[" && n++;
            r = r.nextSibling
        }
    } else t(e)
}
const Jt = e => !!e.type.__asyncLoader; /*! #__NO_SIDE_EFFECTS__ */
function vi(e) {
    z(e) && (e = {
        loader: e
    });
    const {
        loader: t,
        loadingComponent: n,
        errorComponent: r,
        delay: s = 200,
        hydrate: o,
        timeout: i,
        suspensible: a = !0,
        onError: l
    } = e;
    let f = null,
        c, u = 0;
    const d = () => (u++, f = null, h()),
        h = () => {
            let y;
            return f || (y = f = t().catch(v => {
                if (v = v instanceof Error ? v : new Error(String(v)), l) return new Promise((T, C) => {
                    l(v, () => T(d()), () => C(v), u + 1)
                });
                throw v
            }).then(v => y !== f && f ? f : (v && (v.__esModule || v[Symbol.toStringTag] === "Module") && (v = v.default), c = v, v)))
        };
    return Tt({
        name: "AsyncComponentWrapper",
        __asyncLoader: h,
        __asyncHydrate(y, v, T) {
            const C = o ? () => {
                const _ = o(T, g => Gf(y, g));
                _ && (v.bum || (v.bum = [])).push(_)
            } : T;
            c ? C() : h().then(() => !v.isUnmounted && C())
        },
        get __asyncResolved() {
            return c
        },
        setup() {
            const y = we;
            if (No(y), c) return () => Ts(c, y);
            const v = g => {
                f = null, xn(g, y, 13, !r)
            };
            if (a && y.suspense || Tn) return h().then(g => () => Ts(g, y)).catch(g => (v(g), () => r ? re(r, {
                error: g
            }) : null));
            const T = Te(!1),
                C = Te(),
                _ = Te(!!s);
            return s && setTimeout(() => {
                _.value = !1
            }, s), i != null && setTimeout(() => {
                if (!T.value && !C.value) {
                    const g = new Error(`Async component timed out after ${i}ms.`);
                    v(g), C.value = g
                }
            }, i), h().then(() => {
                T.value = !0, y.parent && ir(y.parent.vnode) && y.parent.update()
            }).catch(g => {
                v(g), C.value = g
            }), () => {
                if (T.value && c) return Ts(c, y);
                if (C.value && r) return re(r, {
                    error: C.value
                });
                if (n && !_.value) return re(n)
            }
        }
    })
}

function Ts(e, t) {
    const {
        ref: n,
        props: r,
        children: s,
        ce: o
    } = t.vnode, i = re(e, r, s);
    return i.ref = n, i.ce = o, delete t.vnode.ce, i
}
const ir = e => e.type.__isKeepAlive,
    qf = {
        name: "KeepAlive",
        __isKeepAlive: !0,
        props: {
            include: [String, RegExp, Array],
            exclude: [String, RegExp, Array],
            max: [String, Number]
        },
        setup(e, {
            slots: t
        }) {
            const n = An(),
                r = n.ctx;
            if (!r.renderer) return () => {
                const _ = t.default && t.default();
                return _ && _.length === 1 ? _[0] : _
            };
            const s = new Map,
                o = new Set;
            let i = null;
            const a = n.suspense,
                {
                    renderer: {
                        p: l,
                        m: f,
                        um: c,
                        o: {
                            createElement: u
                        }
                    }
                } = r,
                d = u("div");
            r.activate = (_, g, b, E, S) => {
                const A = _.component;
                f(_, g, b, 0, a), l(A.vnode, _, g, b, A, a, E, _.slotScopeIds, S), Ce(() => {
                    A.isDeactivated = !1, A.a && Nn(A.a);
                    const H = _.props && _.props.onVnodeMounted;
                    H && $e(H, A.parent, _)
                }, a)
            }, r.deactivate = _ => {
                const g = _.component;
                Fr(g.m), Fr(g.a), f(_, d, null, 1, a), Ce(() => {
                    g.da && Nn(g.da);
                    const b = _.props && _.props.onVnodeUnmounted;
                    b && $e(b, g.parent, _), g.isDeactivated = !0
                }, a)
            };

            function h(_) {
                Cs(_), c(_, n, a, !0)
            }

            function y(_) {
                s.forEach((g, b) => {
                    const E = Xs(g.type);
                    E && !_(E) && v(b)
                })
            }

            function v(_) {
                const g = s.get(_);
                g && (!i || !et(g, i)) ? h(g) : i && Cs(i), s.delete(_), o.delete(_)
            }
            Ke(() => [e.include, e.exclude], ([_, g]) => {
                _ && y(b => Ln(_, b)), g && y(b => !Ln(g, b))
            }, {
                flush: "post",
                deep: !0
            });
            let T = null;
            const C = () => {
                T != null && (Nr(n.subTree.type) ? Ce(() => {
                    s.set(T, gr(n.subTree))
                }, n.subTree.suspense) : s.set(T, gr(n.subTree)))
            };
            return os(C), jo(C), is(() => {
                s.forEach(_ => {
                    const {
                        subTree: g,
                        suspense: b
                    } = n, E = gr(g);
                    if (_.type === E.type && _.key === E.key) {
                        Cs(E);
                        const S = E.component.da;
                        S && Ce(S, b);
                        return
                    }
                    h(_)
                })
            }), () => {
                if (T = null, !t.default) return i = null;
                const _ = t.default(),
                    g = _[0];
                if (_.length > 1) return i = null, _;
                if (!En(g) || !(g.shapeFlag & 4) && !(g.shapeFlag & 128)) return i = null, g;
                let b = gr(g);
                if (b.type === xe) return i = null, b;
                const E = b.type,
                    S = Xs(Jt(b) ? b.type.__asyncResolved || {} : E),
                    {
                        include: A,
                        exclude: H,
                        max: O
                    } = e;
                if (A && (!S || !Ln(A, S)) || H && S && Ln(H, S)) return b.shapeFlag &= -257, i = b, g;
                const x = b.key == null ? E : b.key,
                    U = s.get(x);
                return b.el && (b = Et(b), g.shapeFlag & 128 && (g.ssContent = b)), T = x, U ? (b.el = U.el, b.component = U.component, b.transition && $t(b, b.transition), b.shapeFlag |= 512, o.delete(x), o.add(x)) : (o.add(x), O && o.size > parseInt(O, 10) && v(o.values().next().value)), b.shapeFlag |= 256, i = b, Nr(g.type) ? g : b
            }
        }
    },
    Yf = qf;

function Ln(e, t) {
    return J(e) ? e.some(n => Ln(n, t)) : me(e) ? e.split(",").includes(t) : qu(e) ? (e.lastIndex = 0, e.test(t)) : !1
}

function zf(e, t) {
    ql(e, "a", t)
}

function Jf(e, t) {
    ql(e, "da", t)
}

function ql(e, t, n = we) {
    const r = e.__wdc || (e.__wdc = () => {
        let s = n;
        for (; s;) {
            if (s.isDeactivated) return;
            s = s.parent
        }
        return e()
    });
    if (ss(t, r, n), n) {
        let s = n.parent;
        for (; s && s.parent;) ir(s.parent.vnode) && Zf(r, t, n, s), s = s.parent
    }
}

function Zf(e, t, n, r) {
    const s = ss(t, e, r, !0);
    Yl(() => {
        So(r[t], s)
    }, n)
}

function Cs(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513
}

function gr(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}

function ss(e, t, n = we, r = !1) {
    if (n) {
        const s = n[e] || (n[e] = []),
            o = t.__weh || (t.__weh = (...i) => {
                Nt();
                const a = en(n),
                    l = st(t, n, e, i);
                return a(), jt(), l
            });
        return r ? s.unshift(o) : s.push(o), o
    }
}
const Ct = e => (t, n = we) => {
        (!Tn || e === "sp") && ss(e, (...r) => t(...r), n)
    },
    Qf = Ct("bm"),
    os = Ct("m"),
    Xf = Ct("bu"),
    jo = Ct("u"),
    is = Ct("bum"),
    Yl = Ct("um"),
    ed = Ct("sp"),
    td = Ct("rtg"),
    nd = Ct("rtc");

function zl(e, t = we) {
    ss("ec", e, t)
}
const Bo = "components",
    rd = "directives";

function B0(e, t) {
    return Uo(Bo, e, !0, t) || e
}
const Jl = Symbol.for("v-ndc");

function sd(e) {
    return me(e) ? Uo(Bo, e, !1) || e : e || Jl
}

function U0(e) {
    return Uo(rd, e)
}

function Uo(e, t, n = !0, r = !1) {
    const s = De || we;
    if (s) {
        const o = s.type;
        if (e === Bo) {
            const a = Xs(o, !1);
            if (a && (a === t || a === Je(t) || a === sr(Je(t)))) return o
        }
        const i = bi(s[e] || o[e], t) || bi(s.appContext[e], t);
        return !i && r ? o : i
    }
}

function bi(e, t) {
    return e && (e[t] || e[Je(t)] || e[sr(Je(t))])
}
const Ks = e => e ? Tc(e) ? cs(e) : Ks(e.parent) : null,
    Un = ve(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => Ks(e.parent),
        $root: e => Ks(e.root),
        $host: e => e.ce,
        $emit: e => e.emit,
        $options: e => Wo(e),
        $forceUpdate: e => e.f || (e.f = () => {
            $o(e.update)
        }),
        $nextTick: e => e.n || (e.n = nn.bind(e.proxy)),
        $watch: e => Cd.bind(e)
    }),
    Ss = (e, t) => e !== ue && !e.__isScriptSetup && ae(e, t),
    od = {
        get({
            _: e
        }, t) {
            if (t === "__v_skip") return !0;
            const {
                ctx: n,
                setupState: r,
                data: s,
                props: o,
                accessCache: i,
                type: a,
                appContext: l
            } = e;
            let f;
            if (t[0] !== "$") {
                const h = i[t];
                if (h !== void 0) switch (h) {
                    case 1:
                        return r[t];
                    case 2:
                        return s[t];
                    case 4:
                        return n[t];
                    case 3:
                        return o[t]
                } else {
                    if (Ss(r, t)) return i[t] = 1, r[t];
                    if (s !== ue && ae(s, t)) return i[t] = 2, s[t];
                    if ((f = e.propsOptions[0]) && ae(f, t)) return i[t] = 3, o[t];
                    if (n !== ue && ae(n, t)) return i[t] = 4, n[t];
                    Gs && (i[t] = 0)
                }
            }
            const c = Un[t];
            let u, d;
            if (c) return t === "$attrs" && Re(e.attrs, "get", ""), c(e);
            if ((u = a.__cssModules) && (u = u[t])) return u;
            if (n !== ue && ae(n, t)) return i[t] = 4, n[t];
            if (d = l.config.globalProperties, ae(d, t)) return d[t]
        },
        set({
            _: e
        }, t, n) {
            const {
                data: r,
                setupState: s,
                ctx: o
            } = e;
            return Ss(s, t) ? (s[t] = n, !0) : r !== ue && ae(r, t) ? (r[t] = n, !0) : ae(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0)
        },
        has({
            _: {
                data: e,
                setupState: t,
                accessCache: n,
                ctx: r,
                appContext: s,
                propsOptions: o
            }
        }, i) {
            let a;
            return !!n[i] || e !== ue && ae(e, i) || Ss(t, i) || (a = o[0]) && ae(a, i) || ae(r, i) || ae(Un, i) || ae(s.config.globalProperties, i)
        },
        defineProperty(e, t, n) {
            return n.get != null ? e._.accessCache[t] = 0 : ae(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
        }
    };

function _i(e) {
    return J(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}

function W0(e) {
    const t = An();
    let n = e();
    return Zs(), ko(n) && (n = n.catch(r => {
        throw en(t), r
    })), [n, () => en(t)]
}
let Gs = !0;

function id(e) {
    const t = Wo(e),
        n = e.proxy,
        r = e.ctx;
    Gs = !1, t.beforeCreate && wi(t.beforeCreate, e, "bc");
    const {
        data: s,
        computed: o,
        methods: i,
        watch: a,
        provide: l,
        inject: f,
        created: c,
        beforeMount: u,
        mounted: d,
        beforeUpdate: h,
        updated: y,
        activated: v,
        deactivated: T,
        beforeDestroy: C,
        beforeUnmount: _,
        destroyed: g,
        unmounted: b,
        render: E,
        renderTracked: S,
        renderTriggered: A,
        errorCaptured: H,
        serverPrefetch: O,
        expose: x,
        inheritAttrs: U,
        components: M,
        directives: W,
        filters: ee
    } = t;
    if (f && ad(f, r, null), i)
        for (const Z in i) {
            const K = i[Z];
            z(K) && (r[Z] = K.bind(n))
        }
    if (s) {
        const Z = s.call(n, n);
        he(Z) && (e.data = Se(Z))
    }
    if (Gs = !0, o)
        for (const Z in o) {
            const K = o[Z],
                ge = z(K) ? K.bind(n, n) : z(K.get) ? K.get.bind(n, n) : ft,
                it = !z(K) && z(K.set) ? K.set.bind(n) : ft,
                Ge = X({
                    get: ge,
                    set: it
                });
            Object.defineProperty(r, Z, {
                enumerable: !0,
                configurable: !0,
                get: () => Ge.value,
                set: _e => Ge.value = _e
            })
        }
    if (a)
        for (const Z in a) Zl(a[Z], r, n, Z);
    if (l) {
        const Z = z(l) ? l.call(n) : l;
        Reflect.ownKeys(Z).forEach(K => {
            rt(K, Z[K])
        })
    }
    c && wi(c, e, "c");

    function V(Z, K) {
        J(K) ? K.forEach(ge => Z(ge.bind(n))) : K && Z(K.bind(n))
    }
    if (V(Qf, u), V(os, d), V(Xf, h), V(jo, y), V(zf, v), V(Jf, T), V(zl, H), V(nd, S), V(td, A), V(is, _), V(Yl, b), V(ed, O), J(x))
        if (x.length) {
            const Z = e.exposed || (e.exposed = {});
            x.forEach(K => {
                Object.defineProperty(Z, K, {
                    get: () => n[K],
                    set: ge => n[K] = ge
                })
            })
        } else e.exposed || (e.exposed = {});
    E && e.render === ft && (e.render = E), U != null && (e.inheritAttrs = U), M && (e.components = M), W && (e.directives = W), O && No(e)
}

function ad(e, t, n = ft) {
    J(e) && (e = qs(e));
    for (const r in e) {
        const s = e[r];
        let o;
        he(s) ? "default" in s ? o = ye(s.from || r, s.default, !0) : o = ye(s.from || r) : o = ye(s), Ee(o) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: i => o.value = i
        }) : t[r] = o
    }
}

function wi(e, t, n) {
    st(J(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function Zl(e, t, n, r) {
    let s = r.includes(".") ? hc(n, r) : () => n[r];
    if (me(e)) {
        const o = t[e];
        z(o) && Ke(s, o)
    } else if (z(e)) Ke(s, e.bind(n));
    else if (he(e))
        if (J(e)) e.forEach(o => Zl(o, t, n, r));
        else {
            const o = z(e.handler) ? e.handler.bind(n) : t[e.handler];
            z(o) && Ke(s, o, e)
        }
}

function Wo(e) {
    const t = e.type,
        {
            mixins: n,
            extends: r
        } = t,
        {
            mixins: s,
            optionsCache: o,
            config: {
                optionMergeStrategies: i
            }
        } = e.appContext,
        a = o.get(t);
    let l;
    return a ? l = a : !s.length && !n && !r ? l = t : (l = {}, s.length && s.forEach(f => $r(l, f, i, !0)), $r(l, t, i)), he(t) && o.set(t, l), l
}

function $r(e, t, n, r = !1) {
    const {
        mixins: s,
        extends: o
    } = t;
    o && $r(e, o, n, !0), s && s.forEach(i => $r(e, i, n, !0));
    for (const i in t)
        if (!(r && i === "expose")) {
            const a = ld[i] || n && n[i];
            e[i] = a ? a(e[i], t[i]) : t[i]
        }
    return e
}
const ld = {
    data: Ei,
    props: Ti,
    emits: Ti,
    methods: $n,
    computed: $n,
    beforeCreate: Ae,
    created: Ae,
    beforeMount: Ae,
    mounted: Ae,
    beforeUpdate: Ae,
    updated: Ae,
    beforeDestroy: Ae,
    beforeUnmount: Ae,
    destroyed: Ae,
    unmounted: Ae,
    activated: Ae,
    deactivated: Ae,
    errorCaptured: Ae,
    serverPrefetch: Ae,
    components: $n,
    directives: $n,
    watch: ud,
    provide: Ei,
    inject: cd
};

function Ei(e, t) {
    return t ? e ? function() {
        return ve(z(e) ? e.call(this, this) : e, z(t) ? t.call(this, this) : t)
    } : t : e
}

function cd(e, t) {
    return $n(qs(e), qs(t))
}

function qs(e) {
    if (J(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t
    }
    return e
}

function Ae(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function $n(e, t) {
    return e ? ve(Object.create(null), e, t) : t
}

function Ti(e, t) {
    return e ? J(e) && J(t) ? [...new Set([...e, ...t])] : ve(Object.create(null), _i(e), _i(t ? ? {})) : t
}

function ud(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = ve(Object.create(null), e);
    for (const r in t) n[r] = Ae(e[r], t[r]);
    return n
}

function Ql() {
    return {
        app: null,
        config: {
            isNativeTag: Ku,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let fd = 0;

function dd(e, t) {
    return function(r, s = null) {
        z(r) || (r = ve({}, r)), s != null && !he(s) && (s = null);
        const o = Ql(),
            i = new WeakSet,
            a = [];
        let l = !1;
        const f = o.app = {
            _uid: fd++,
            _component: r,
            _props: s,
            _container: null,
            _context: o,
            _instance: null,
            version: Sc,
            get config() {
                return o.config
            },
            set config(c) {},
            use(c, ...u) {
                return i.has(c) || (c && z(c.install) ? (i.add(c), c.install(f, ...u)) : z(c) && (i.add(c), c(f, ...u))), f
            },
            mixin(c) {
                return o.mixins.includes(c) || o.mixins.push(c), f
            },
            component(c, u) {
                return u ? (o.components[c] = u, f) : o.components[c]
            },
            directive(c, u) {
                return u ? (o.directives[c] = u, f) : o.directives[c]
            },
            mount(c, u, d) {
                if (!l) {
                    const h = f._ceVNode || re(r, s);
                    return h.appContext = o, d === !0 ? d = "svg" : d === !1 && (d = void 0), u && t ? t(h, c) : e(h, c, d), l = !0, f._container = c, c.__vue_app__ = f, cs(h.component)
                }
            },
            onUnmount(c) {
                a.push(c)
            },
            unmount() {
                l && (st(a, f._instance, 16), e(null, f._container), delete f._container.__vue_app__)
            },
            provide(c, u) {
                return o.provides[c] = u, f
            },
            runWithContext(c) {
                const u = Zt;
                Zt = f;
                try {
                    return c()
                } finally {
                    Zt = u
                }
            }
        };
        return f
    }
}
let Zt = null;

function rt(e, t) {
    if (we) {
        let n = we.provides;
        const r = we.parent && we.parent.provides;
        r === n && (n = we.provides = Object.create(r)), n[e] = t
    }
}

function ye(e, t, n = !1) {
    const r = we || De;
    if (r || Zt) {
        const s = Zt ? Zt._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
        if (s && e in s) return s[e];
        if (arguments.length > 1) return n && z(t) ? t.call(r && r.proxy) : t
    }
}

function Xl() {
    return !!(we || De || Zt)
}
const ec = {},
    tc = () => Object.create(ec),
    nc = e => Object.getPrototypeOf(e) === ec;

function hd(e, t, n, r = !1) {
    const s = {},
        o = tc();
    e.propsDefaults = Object.create(null), rc(e, t, s, o);
    for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
    n ? e.props = r ? s : _t(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o
}

function pd(e, t, n, r) {
    const {
        props: s,
        attrs: o,
        vnode: {
            patchFlag: i
        }
    } = e, a = ne(s), [l] = e.propsOptions;
    let f = !1;
    if ((r || i > 0) && !(i & 16)) {
        if (i & 8) {
            const c = e.vnode.dynamicProps;
            for (let u = 0; u < c.length; u++) {
                let d = c[u];
                if (ls(e.emitsOptions, d)) continue;
                const h = t[d];
                if (l)
                    if (ae(o, d)) h !== o[d] && (o[d] = h, f = !0);
                    else {
                        const y = Je(d);
                        s[y] = Ys(l, a, y, h, e, !1)
                    }
                else h !== o[d] && (o[d] = h, f = !0)
            }
        }
    } else {
        rc(e, t, s, o) && (f = !0);
        let c;
        for (const u in a)(!t || !ae(t, u) && ((c = tn(u)) === u || !ae(t, c))) && (l ? n && (n[u] !== void 0 || n[c] !== void 0) && (s[u] = Ys(l, a, u, void 0, e, !0)) : delete s[u]);
        if (o !== a)
            for (const u in o)(!t || !ae(t, u)) && (delete o[u], f = !0)
    }
    f && vt(e.attrs, "set", "")
}

function rc(e, t, n, r) {
    const [s, o] = e.propsOptions;
    let i = !1,
        a;
    if (t)
        for (let l in t) {
            if (mn(l)) continue;
            const f = t[l];
            let c;
            s && ae(s, c = Je(l)) ? !o || !o.includes(c) ? n[c] = f : (a || (a = {}))[c] = f : ls(e.emitsOptions, l) || (!(l in r) || f !== r[l]) && (r[l] = f, i = !0)
        }
    if (o) {
        const l = ne(n),
            f = a || ue;
        for (let c = 0; c < o.length; c++) {
            const u = o[c];
            n[u] = Ys(s, l, u, f[u], e, !ae(f, u))
        }
    }
    return i
}

function Ys(e, t, n, r, s, o) {
    const i = e[n];
    if (i != null) {
        const a = ae(i, "default");
        if (a && r === void 0) {
            const l = i.default;
            if (i.type !== Function && !i.skipFactory && z(l)) {
                const {
                    propsDefaults: f
                } = s;
                if (n in f) r = f[n];
                else {
                    const c = en(s);
                    r = f[n] = l.call(null, t), c()
                }
            } else r = l;
            s.ce && s.ce._setProp(n, r)
        }
        i[0] && (o && !a ? r = !1 : i[1] && (r === "" || r === tn(n)) && (r = !0))
    }
    return r
}
const gd = new WeakMap;

function sc(e, t, n = !1) {
    const r = n ? gd : t.propsCache,
        s = r.get(e);
    if (s) return s;
    const o = e.props,
        i = {},
        a = [];
    let l = !1;
    if (!z(e)) {
        const c = u => {
            l = !0;
            const [d, h] = sc(u, t, !0);
            ve(i, d), h && a.push(...h)
        };
        !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c)
    }
    if (!o && !l) return he(e) && r.set(e, pn), pn;
    if (J(o))
        for (let c = 0; c < o.length; c++) {
            const u = Je(o[c]);
            Ci(u) && (i[u] = ue)
        } else if (o)
            for (const c in o) {
                const u = Je(c);
                if (Ci(u)) {
                    const d = o[c],
                        h = i[u] = J(d) || z(d) ? {
                            type: d
                        } : ve({}, d),
                        y = h.type;
                    let v = !1,
                        T = !0;
                    if (J(y))
                        for (let C = 0; C < y.length; ++C) {
                            const _ = y[C],
                                g = z(_) && _.name;
                            if (g === "Boolean") {
                                v = !0;
                                break
                            } else g === "String" && (T = !1)
                        } else v = z(y) && y.name === "Boolean";
                    h[0] = v, h[1] = T, (v || ae(h, "default")) && a.push(u)
                }
            }
    const f = [i, a];
    return he(e) && r.set(e, f), f
}

function Ci(e) {
    return e[0] !== "$" && !mn(e)
}
const oc = e => e[0] === "_" || e === "$stable",
    Vo = e => J(e) ? e.map(Ue) : [Ue(e)],
    md = (e, t, n) => {
        if (t._n) return t;
        const r = Hr((...s) => Vo(t(...s)), n);
        return r._c = !1, r
    },
    ic = (e, t, n) => {
        const r = e._ctx;
        for (const s in e) {
            if (oc(s)) continue;
            const o = e[s];
            if (z(o)) t[s] = md(s, o, r);
            else if (o != null) {
                const i = Vo(o);
                t[s] = () => i
            }
        }
    },
    ac = (e, t) => {
        const n = Vo(t);
        e.slots.default = () => n
    },
    lc = (e, t, n) => {
        for (const r in t)(n || r !== "_") && (e[r] = t[r])
    },
    yd = (e, t, n) => {
        const r = e.slots = tc();
        if (e.vnode.shapeFlag & 32) {
            const s = t._;
            s ? (lc(r, t, n), n && fl(r, "_", s, !0)) : ic(t, r)
        } else t && ac(e, t)
    },
    vd = (e, t, n) => {
        const {
            vnode: r,
            slots: s
        } = e;
        let o = !0,
            i = ue;
        if (r.shapeFlag & 32) {
            const a = t._;
            a ? n && a === 1 ? o = !1 : lc(s, t, n) : (o = !t.$stable, ic(t, s)), i = t
        } else t && (ac(e, t), i = {
            default: 1
        });
        if (o)
            for (const a in s) !oc(a) && i[a] == null && delete s[a]
    },
    Ce = mc;

function bd(e) {
    return cc(e)
}

function _d(e) {
    return cc(e, Vf)
}

function cc(e, t) {
    const n = ts();
    n.__VUE__ = !0;
    const {
        insert: r,
        remove: s,
        patchProp: o,
        createElement: i,
        createText: a,
        createComment: l,
        setText: f,
        setElementText: c,
        parentNode: u,
        nextSibling: d,
        setScopeId: h = ft,
        insertStaticContent: y
    } = e, v = (p, m, w, P = null, k = null, I = null, j = void 0, $ = null, L = !!m.dynamicChildren) => {
        if (p === m) return;
        p && !et(p, m) && (P = R(p), _e(p, k, I, !0), p = null), m.patchFlag === -2 && (L = !1, m.dynamicChildren = null);
        const {
            type: D,
            ref: Y,
            shapeFlag: B
        } = m;
        switch (D) {
            case Qt:
                T(p, m, w, P);
                break;
            case xe:
                C(p, m, w, P);
                break;
            case Tr:
                p == null && _(m, w, P, j);
                break;
            case Ie:
                M(p, m, w, P, k, I, j, $, L);
                break;
            default:
                B & 1 ? E(p, m, w, P, k, I, j, $, L) : B & 6 ? W(p, m, w, P, k, I, j, $, L) : (B & 64 || B & 128) && D.process(p, m, w, P, k, I, j, $, L, G)
        }
        Y != null && k && Lr(Y, p && p.ref, I, m || p, !m)
    }, T = (p, m, w, P) => {
        if (p == null) r(m.el = a(m.children), w, P);
        else {
            const k = m.el = p.el;
            m.children !== p.children && f(k, m.children)
        }
    }, C = (p, m, w, P) => {
        p == null ? r(m.el = l(m.children || ""), w, P) : m.el = p.el
    }, _ = (p, m, w, P) => {
        [p.el, p.anchor] = y(p.children, m, w, P, p.el, p.anchor)
    }, g = ({
        el: p,
        anchor: m
    }, w, P) => {
        let k;
        for (; p && p !== m;) k = d(p), r(p, w, P), p = k;
        r(m, w, P)
    }, b = ({
        el: p,
        anchor: m
    }) => {
        let w;
        for (; p && p !== m;) w = d(p), s(p), p = w;
        s(m)
    }, E = (p, m, w, P, k, I, j, $, L) => {
        m.type === "svg" ? j = "svg" : m.type === "math" && (j = "mathml"), p == null ? S(m, w, P, k, I, j, $, L) : O(p, m, k, I, j, $, L)
    }, S = (p, m, w, P, k, I, j, $) => {
        let L, D;
        const {
            props: Y,
            shapeFlag: B,
            transition: q,
            dirs: Q
        } = p;
        if (L = p.el = i(p.type, I, Y && Y.is, Y), B & 8 ? c(L, p.children) : B & 16 && H(p.children, L, null, P, k, ks(p, I), j, $), Q && ut(p, null, P, "created"), A(L, p, p.scopeId, j, P), Y) {
            for (const fe in Y) fe !== "value" && !mn(fe) && o(L, fe, null, Y[fe], I, P);
            "value" in Y && o(L, "value", null, Y.value, I), (D = Y.onVnodeBeforeMount) && $e(D, P, p)
        }
        Q && ut(p, null, P, "beforeMount");
        const te = uc(k, q);
        te && q.beforeEnter(L), r(L, m, w), ((D = Y && Y.onVnodeMounted) || te || Q) && Ce(() => {
            D && $e(D, P, p), te && q.enter(L), Q && ut(p, null, P, "mounted")
        }, k)
    }, A = (p, m, w, P, k) => {
        if (w && h(p, w), P)
            for (let I = 0; I < P.length; I++) h(p, P[I]);
        if (k) {
            let I = k.subTree;
            if (m === I || Nr(I.type) && (I.ssContent === m || I.ssFallback === m)) {
                const j = k.vnode;
                A(p, j, j.scopeId, j.slotScopeIds, k.parent)
            }
        }
    }, H = (p, m, w, P, k, I, j, $, L = 0) => {
        for (let D = L; D < p.length; D++) {
            const Y = p[D] = $ ? Ot(p[D]) : Ue(p[D]);
            v(null, Y, m, w, P, k, I, j, $)
        }
    }, O = (p, m, w, P, k, I, j) => {
        const $ = m.el = p.el;
        let {
            patchFlag: L,
            dynamicChildren: D,
            dirs: Y
        } = m;
        L |= p.patchFlag & 16;
        const B = p.props || ue,
            q = m.props || ue;
        let Q;
        if (w && Ut(w, !1), (Q = q.onVnodeBeforeUpdate) && $e(Q, w, m, p), Y && ut(m, p, w, "beforeUpdate"), w && Ut(w, !0), (B.innerHTML && q.innerHTML == null || B.textContent && q.textContent == null) && c($, ""), D ? x(p.dynamicChildren, D, $, w, P, ks(m, k), I) : j || K(p, m, $, null, w, P, ks(m, k), I, !1), L > 0) {
            if (L & 16) U($, B, q, w, k);
            else if (L & 2 && B.class !== q.class && o($, "class", null, q.class, k), L & 4 && o($, "style", B.style, q.style, k), L & 8) {
                const te = m.dynamicProps;
                for (let fe = 0; fe < te.length; fe++) {
                    const le = te[fe],
                        Ne = B[le],
                        ke = q[le];
                    (ke !== Ne || le === "value") && o($, le, Ne, ke, k, w)
                }
            }
            L & 1 && p.children !== m.children && c($, m.children)
        } else !j && D == null && U($, B, q, w, k);
        ((Q = q.onVnodeUpdated) || Y) && Ce(() => {
            Q && $e(Q, w, m, p), Y && ut(m, p, w, "updated")
        }, P)
    }, x = (p, m, w, P, k, I, j) => {
        for (let $ = 0; $ < m.length; $++) {
            const L = p[$],
                D = m[$],
                Y = L.el && (L.type === Ie || !et(L, D) || L.shapeFlag & 70) ? u(L.el) : w;
            v(L, D, Y, null, P, k, I, j, !0)
        }
    }, U = (p, m, w, P, k) => {
        if (m !== w) {
            if (m !== ue)
                for (const I in m) !mn(I) && !(I in w) && o(p, I, m[I], null, k, P);
            for (const I in w) {
                if (mn(I)) continue;
                const j = w[I],
                    $ = m[I];
                j !== $ && I !== "value" && o(p, I, $, j, k, P)
            }
            "value" in w && o(p, "value", m.value, w.value, k)
        }
    }, M = (p, m, w, P, k, I, j, $, L) => {
        const D = m.el = p ? p.el : a(""),
            Y = m.anchor = p ? p.anchor : a("");
        let {
            patchFlag: B,
            dynamicChildren: q,
            slotScopeIds: Q
        } = m;
        Q && ($ = $ ? $.concat(Q) : Q), p == null ? (r(D, w, P), r(Y, w, P), H(m.children || [], w, Y, k, I, j, $, L)) : B > 0 && B & 64 && q && p.dynamicChildren ? (x(p.dynamicChildren, q, w, k, I, j, $), (m.key != null || k && m === k.subTree) && fc(p, m, !0)) : K(p, m, w, Y, k, I, j, $, L)
    }, W = (p, m, w, P, k, I, j, $, L) => {
        m.slotScopeIds = $, p == null ? m.shapeFlag & 512 ? k.ctx.activate(m, w, P, j, L) : ee(m, w, P, k, I, j, L) : oe(p, m, L)
    }, ee = (p, m, w, P, k, I, j) => {
        const $ = p.component = Bd(p, P, k);
        if (ir(p) && ($.ctx.renderer = G), Ud($, !1, j), $.asyncDep) {
            if (k && k.registerDep($, V, j), !p.el) {
                const L = $.subTree = re(xe);
                C(null, L, m, w)
            }
        } else V($, p, m, w, k, I, j)
    }, oe = (p, m, w) => {
        const P = m.component = p.component;
        if (Pd(p, m, w))
            if (P.asyncDep && !P.asyncResolved) {
                Z(P, m, w);
                return
            } else P.next = m, P.update();
        else m.el = p.el, P.vnode = m
    }, V = (p, m, w, P, k, I, j) => {
        const $ = () => {
            if (p.isMounted) {
                let {
                    next: B,
                    bu: q,
                    u: Q,
                    parent: te,
                    vnode: fe
                } = p; {
                    const je = dc(p);
                    if (je) {
                        B && (B.el = fe.el, Z(p, B, j)), je.asyncDep.then(() => {
                            p.isUnmounted || $()
                        });
                        return
                    }
                }
                let le = B,
                    Ne;
                Ut(p, !1), B ? (B.el = fe.el, Z(p, B, j)) : B = fe, q && Nn(q), (Ne = B.props && B.props.onVnodeBeforeUpdate) && $e(Ne, te, B, fe), Ut(p, !0);
                const ke = Rs(p),
                    Qe = p.subTree;
                p.subTree = ke, v(Qe, ke, u(Qe.el), R(Qe), p, k, I), B.el = ke.el, le === null && Go(p, ke.el), Q && Ce(Q, k), (Ne = B.props && B.props.onVnodeUpdated) && Ce(() => $e(Ne, te, B, fe), k)
            } else {
                let B;
                const {
                    el: q,
                    props: Q
                } = m, {
                    bm: te,
                    m: fe,
                    parent: le,
                    root: Ne,
                    type: ke
                } = p, Qe = Jt(m);
                if (Ut(p, !1), te && Nn(te), !Qe && (B = Q && Q.onVnodeBeforeMount) && $e(B, le, m), Ut(p, !0), q && pe) {
                    const je = () => {
                        p.subTree = Rs(p), pe(q, p.subTree, p, k, null)
                    };
                    Qe && ke.__asyncHydrate ? ke.__asyncHydrate(q, p, je) : je()
                } else {
                    Ne.ce && Ne.ce._injectChildStyle(ke);
                    const je = p.subTree = Rs(p);
                    v(null, je, w, P, p, k, I), m.el = je.el
                }
                if (fe && Ce(fe, k), !Qe && (B = Q && Q.onVnodeMounted)) {
                    const je = m;
                    Ce(() => $e(B, le, je), k)
                }(m.shapeFlag & 256 || le && Jt(le.vnode) && le.vnode.shapeFlag & 256) && p.a && Ce(p.a, k), p.isMounted = !0, m = w = P = null
            }
        };
        p.scope.on();
        const L = p.effect = new bl($);
        p.scope.off();
        const D = p.update = L.run.bind(L),
            Y = p.job = L.runIfDirty.bind(L);
        Y.i = p, Y.id = p.uid, L.scheduler = () => $o(Y), Ut(p, !0), D()
    }, Z = (p, m, w) => {
        m.component = p;
        const P = p.vnode.props;
        p.vnode = m, p.next = null, pd(p, m.props, P, w), vd(p, m.children, w), Nt(), pi(p), jt()
    }, K = (p, m, w, P, k, I, j, $, L = !1) => {
        const D = p && p.children,
            Y = p ? p.shapeFlag : 0,
            B = m.children,
            {
                patchFlag: q,
                shapeFlag: Q
            } = m;
        if (q > 0) {
            if (q & 128) {
                it(D, B, w, P, k, I, j, $, L);
                return
            } else if (q & 256) {
                ge(D, B, w, P, k, I, j, $, L);
                return
            }
        }
        Q & 8 ? (Y & 16 && Le(D, k, I), B !== D && c(w, B)) : Y & 16 ? Q & 16 ? it(D, B, w, P, k, I, j, $, L) : Le(D, k, I, !0) : (Y & 8 && c(w, ""), Q & 16 && H(B, w, P, k, I, j, $, L))
    }, ge = (p, m, w, P, k, I, j, $, L) => {
        p = p || pn, m = m || pn;
        const D = p.length,
            Y = m.length,
            B = Math.min(D, Y);
        let q;
        for (q = 0; q < B; q++) {
            const Q = m[q] = L ? Ot(m[q]) : Ue(m[q]);
            v(p[q], Q, w, null, k, I, j, $, L)
        }
        D > Y ? Le(p, k, I, !0, !1, B) : H(m, w, P, k, I, j, $, L, B)
    }, it = (p, m, w, P, k, I, j, $, L) => {
        let D = 0;
        const Y = m.length;
        let B = p.length - 1,
            q = Y - 1;
        for (; D <= B && D <= q;) {
            const Q = p[D],
                te = m[D] = L ? Ot(m[D]) : Ue(m[D]);
            if (et(Q, te)) v(Q, te, w, null, k, I, j, $, L);
            else break;
            D++
        }
        for (; D <= B && D <= q;) {
            const Q = p[B],
                te = m[q] = L ? Ot(m[q]) : Ue(m[q]);
            if (et(Q, te)) v(Q, te, w, null, k, I, j, $, L);
            else break;
            B--, q--
        }
        if (D > B) {
            if (D <= q) {
                const Q = q + 1,
                    te = Q < Y ? m[Q].el : P;
                for (; D <= q;) v(null, m[D] = L ? Ot(m[D]) : Ue(m[D]), w, te, k, I, j, $, L), D++
            }
        } else if (D > q)
            for (; D <= B;) _e(p[D], k, I, !0), D++;
        else {
            const Q = D,
                te = D,
                fe = new Map;
            for (D = te; D <= q; D++) {
                const Be = m[D] = L ? Ot(m[D]) : Ue(m[D]);
                Be.key != null && fe.set(Be.key, D)
            }
            let le, Ne = 0;
            const ke = q - te + 1;
            let Qe = !1,
                je = 0;
            const On = new Array(ke);
            for (D = 0; D < ke; D++) On[D] = 0;
            for (D = Q; D <= B; D++) {
                const Be = p[D];
                if (Ne >= ke) {
                    _e(Be, k, I, !0);
                    continue
                }
                let lt;
                if (Be.key != null) lt = fe.get(Be.key);
                else
                    for (le = te; le <= q; le++)
                        if (On[le - te] === 0 && et(Be, m[le])) {
                            lt = le;
                            break
                        }
                lt === void 0 ? _e(Be, k, I, !0) : (On[lt - te] = D + 1, lt >= je ? je = lt : Qe = !0, v(Be, m[lt], w, null, k, I, j, $, L), Ne++)
            }
            const ci = Qe ? wd(On) : pn;
            for (le = ci.length - 1, D = ke - 1; D >= 0; D--) {
                const Be = te + D,
                    lt = m[Be],
                    ui = Be + 1 < Y ? m[Be + 1].el : P;
                On[D] === 0 ? v(null, lt, w, ui, k, I, j, $, L) : Qe && (le < 0 || D !== ci[le] ? Ge(lt, w, ui, 2) : le--)
            }
        }
    }, Ge = (p, m, w, P, k = null) => {
        const {
            el: I,
            type: j,
            transition: $,
            children: L,
            shapeFlag: D
        } = p;
        if (D & 6) {
            Ge(p.component.subTree, m, w, P);
            return
        }
        if (D & 128) {
            p.suspense.move(m, w, P);
            return
        }
        if (D & 64) {
            j.move(p, m, w, G);
            return
        }
        if (j === Ie) {
            r(I, m, w);
            for (let B = 0; B < L.length; B++) Ge(L[B], m, w, P);
            r(p.anchor, m, w);
            return
        }
        if (j === Tr) {
            g(p, m, w);
            return
        }
        if (P !== 2 && D & 1 && $)
            if (P === 0) $.beforeEnter(I), r(I, m, w), Ce(() => $.enter(I), k);
            else {
                const {
                    leave: B,
                    delayLeave: q,
                    afterLeave: Q
                } = $, te = () => r(I, m, w), fe = () => {
                    B(I, () => {
                        te(), Q && Q()
                    })
                };
                q ? q(I, te, fe) : fe()
            }
        else r(I, m, w)
    }, _e = (p, m, w, P = !1, k = !1) => {
        const {
            type: I,
            props: j,
            ref: $,
            children: L,
            dynamicChildren: D,
            shapeFlag: Y,
            patchFlag: B,
            dirs: q,
            cacheIndex: Q
        } = p;
        if (B === -2 && (k = !1), $ != null && Lr($, null, w, p, !0), Q != null && (m.renderCache[Q] = void 0), Y & 256) {
            m.ctx.deactivate(p);
            return
        }
        const te = Y & 1 && q,
            fe = !Jt(p);
        let le;
        if (fe && (le = j && j.onVnodeBeforeUnmount) && $e(le, m, p), Y & 6) kt(p.component, w, P);
        else {
            if (Y & 128) {
                p.suspense.unmount(w, P);
                return
            }
            te && ut(p, null, m, "beforeUnmount"), Y & 64 ? p.type.remove(p, m, w, G, P) : D && !D.hasOnce && (I !== Ie || B > 0 && B & 64) ? Le(D, m, w, !1, !0) : (I === Ie && B & 384 || !k && Y & 16) && Le(L, m, w), P && at(p)
        }(fe && (le = j && j.onVnodeUnmounted) || te) && Ce(() => {
            le && $e(le, m, p), te && ut(p, null, m, "unmounted")
        }, w)
    }, at = p => {
        const {
            type: m,
            el: w,
            anchor: P,
            transition: k
        } = p;
        if (m === Ie) {
            St(w, P);
            return
        }
        if (m === Tr) {
            b(p);
            return
        }
        const I = () => {
            s(w), k && !k.persisted && k.afterLeave && k.afterLeave()
        };
        if (p.shapeFlag & 1 && k && !k.persisted) {
            const {
                leave: j,
                delayLeave: $
            } = k, L = () => j(w, I);
            $ ? $(p.el, I, L) : L()
        } else I()
    }, St = (p, m) => {
        let w;
        for (; p !== m;) w = d(p), s(p), p = w;
        s(m)
    }, kt = (p, m, w) => {
        const {
            bum: P,
            scope: k,
            job: I,
            subTree: j,
            um: $,
            m: L,
            a: D
        } = p;
        Fr(L), Fr(D), P && Nn(P), k.stop(), I && (I.flags |= 8, _e(j, p, m, w)), $ && Ce($, m), Ce(() => {
            p.isUnmounted = !0
        }, m), m && m.pendingBranch && !m.isUnmounted && p.asyncDep && !p.asyncResolved && p.suspenseId === m.pendingId && (m.deps--, m.deps === 0 && m.resolve())
    }, Le = (p, m, w, P = !1, k = !1, I = 0) => {
        for (let j = I; j < p.length; j++) _e(p[j], m, w, P, k)
    }, R = p => {
        if (p.shapeFlag & 6) return R(p.component.subTree);
        if (p.shapeFlag & 128) return p.suspense.next();
        const m = d(p.anchor || p.el),
            w = m && m[Nf];
        return w ? d(w) : m
    };
    let F = !1;
    const N = (p, m, w) => {
            p == null ? m._vnode && _e(m._vnode, null, null, !0) : v(m._vnode || null, p, m, null, null, null, w), m._vnode = p, F || (F = !0, pi(), Ir(), F = !1)
        },
        G = {
            p: v,
            um: _e,
            m: Ge,
            r: at,
            mt: ee,
            mc: H,
            pc: K,
            pbc: x,
            n: R,
            o: e
        };
    let ie, pe;
    return t && ([ie, pe] = t(G)), {
        render: N,
        hydrate: ie,
        createApp: dd(N, ie)
    }
}

function ks({
    type: e,
    props: t
}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}

function Ut({
    effect: e,
    job: t
}, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5)
}

function uc(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function fc(e, t, n = !1) {
    const r = e.children,
        s = t.children;
    if (J(r) && J(s))
        for (let o = 0; o < r.length; o++) {
            const i = r[o];
            let a = s[o];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[o] = Ot(s[o]), a.el = i.el), !n && a.patchFlag !== -2 && fc(i, a)), a.type === Qt && (a.el = i.el)
        }
}

function wd(e) {
    const t = e.slice(),
        n = [0];
    let r, s, o, i, a;
    const l = e.length;
    for (r = 0; r < l; r++) {
        const f = e[r];
        if (f !== 0) {
            if (s = n[n.length - 1], e[s] < f) {
                t[r] = s, n.push(r);
                continue
            }
            for (o = 0, i = n.length - 1; o < i;) a = o + i >> 1, e[n[a]] < f ? o = a + 1 : i = a;
            f < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r)
        }
    }
    for (o = n.length, i = n[o - 1]; o-- > 0;) n[o] = i, i = t[i];
    return n
}

function dc(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : dc(t)
}

function Fr(e) {
    if (e)
        for (let t = 0; t < e.length; t++) e[t].flags |= 8
}
const Ed = Symbol.for("v-scx"),
    Td = () => ye(Ed);

function as(e, t) {
    return Ko(e, null, t)
}

function Ke(e, t, n) {
    return Ko(e, t, n)
}

function Ko(e, t, n = ue) {
    const {
        immediate: r,
        deep: s,
        flush: o,
        once: i
    } = n, a = ve({}, n), l = t && r || !t && o !== "post";
    let f;
    if (Tn) {
        if (o === "sync") {
            const h = Td();
            f = h.__watcherHandles || (h.__watcherHandles = [])
        } else if (!l) {
            const h = () => {};
            return h.stop = ft, h.resume = ft, h.pause = ft, h
        }
    }
    const c = we;
    a.call = (h, y, v) => st(h, c, y, v);
    let u = !1;
    o === "post" ? a.scheduler = h => {
        Ce(h, c && c.suspense)
    } : o !== "sync" && (u = !0, a.scheduler = (h, y) => {
        y ? h() : $o(h)
    }), a.augmentJob = h => {
        t && (h.flags |= 4), u && (h.flags |= 2, c && (h.id = c.uid, h.i = c))
    };
    const d = Lf(e, t, a);
    return Tn && (f ? f.push(d) : l && d()), d
}

function Cd(e, t, n) {
    const r = this.proxy,
        s = me(e) ? e.includes(".") ? hc(r, e) : () => r[e] : e.bind(r, r);
    let o;
    z(t) ? o = t : (o = t.handler, n = t);
    const i = en(this),
        a = Ko(s, o.bind(r), n);
    return i(), a
}

function hc(e, t) {
    const n = t.split(".");
    return () => {
        let r = e;
        for (let s = 0; s < n.length && r; s++) r = r[n[s]];
        return r
    }
}
const Sd = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Je(t)}Modifiers`] || e[`${tn(t)}Modifiers`];

function kd(e, t, ...n) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || ue;
    let s = n;
    const o = t.startsWith("update:"),
        i = o && Sd(r, t.slice(7));
    i && (i.trim && (s = n.map(c => me(c) ? c.trim() : c)), i.number && (s = n.map(Zu)));
    let a, l = r[a = ys(t)] || r[a = ys(Je(t))];
    !l && o && (l = r[a = ys(tn(t))]), l && st(l, e, 6, s);
    const f = r[a + "Once"];
    if (f) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[a]) return;
        e.emitted[a] = !0, st(f, e, 6, s)
    }
}

function pc(e, t, n = !1) {
    const r = t.emitsCache,
        s = r.get(e);
    if (s !== void 0) return s;
    const o = e.emits;
    let i = {},
        a = !1;
    if (!z(e)) {
        const l = f => {
            const c = pc(f, t, !0);
            c && (a = !0, ve(i, c))
        };
        !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l)
    }
    return !o && !a ? (he(e) && r.set(e, null), null) : (J(o) ? o.forEach(l => i[l] = null) : ve(i, o), he(e) && r.set(e, i), i)
}

function ls(e, t) {
    return !e || !nr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ae(e, t[0].toLowerCase() + t.slice(1)) || ae(e, tn(t)) || ae(e, t))
}

function Rs(e) {
    const {
        type: t,
        vnode: n,
        proxy: r,
        withProxy: s,
        propsOptions: [o],
        slots: i,
        attrs: a,
        emit: l,
        render: f,
        renderCache: c,
        props: u,
        data: d,
        setupState: h,
        ctx: y,
        inheritAttrs: v
    } = e, T = Dr(e);
    let C, _;
    try {
        if (n.shapeFlag & 4) {
            const b = s || r,
                E = b;
            C = Ue(f.call(E, b, c, u, h, d, y)), _ = a
        } else {
            const b = t;
            C = Ue(b.length > 1 ? b(u, {
                attrs: a,
                slots: i,
                emit: l
            }) : b(u, null)), _ = t.props ? a : xd(a)
        }
    } catch (b) {
        Wn.length = 0, xn(b, e, 1), C = re(xe)
    }
    let g = C;
    if (_ && v !== !1) {
        const b = Object.keys(_),
            {
                shapeFlag: E
            } = g;
        b.length && E & 7 && (o && b.some(Co) && (_ = Ad(_, o)), g = Et(g, _, !1, !0))
    }
    return n.dirs && (g = Et(g, null, !1, !0), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition && $t(g, n.transition), C = g, Dr(T), C
}

function Rd(e, t = !0) {
    let n;
    for (let r = 0; r < e.length; r++) {
        const s = e[r];
        if (En(s)) {
            if (s.type !== xe || s.children === "v-if") {
                if (n) return;
                n = s
            }
        } else return
    }
    return n
}
const xd = e => {
        let t;
        for (const n in e)(n === "class" || n === "style" || nr(n)) && ((t || (t = {}))[n] = e[n]);
        return t
    },
    Ad = (e, t) => {
        const n = {};
        for (const r in e)(!Co(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
        return n
    };

function Pd(e, t, n) {
    const {
        props: r,
        children: s,
        component: o
    } = e, {
        props: i,
        children: a,
        patchFlag: l
    } = t, f = o.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && l >= 0) {
        if (l & 1024) return !0;
        if (l & 16) return r ? Si(r, i, f) : !!i;
        if (l & 8) {
            const c = t.dynamicProps;
            for (let u = 0; u < c.length; u++) {
                const d = c[u];
                if (i[d] !== r[d] && !ls(f, d)) return !0
            }
        }
    } else return (s || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? i ? Si(r, i, f) : !0 : !!i;
    return !1
}

function Si(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return !0;
    for (let s = 0; s < r.length; s++) {
        const o = r[s];
        if (t[o] !== e[o] && !ls(n, o)) return !0
    }
    return !1
}

function Go({
    vnode: e,
    parent: t
}, n) {
    for (; t;) {
        const r = t.subTree;
        if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e)(e = t.vnode).el = n, t = t.parent;
        else break
    }
}
const Nr = e => e.__isSuspense;
let zs = 0;
const Od = {
        name: "Suspense",
        __isSuspense: !0,
        process(e, t, n, r, s, o, i, a, l, f) {
            if (e == null) Md(t, n, r, s, o, i, a, l, f);
            else {
                if (o && o.deps > 0 && !e.suspense.isInFallback) {
                    t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
                    return
                }
                Id(e, t, n, r, s, i, a, l, f)
            }
        },
        hydrate: Dd,
        normalize: Hd
    },
    qo = Od;

function Qn(e, t) {
    const n = e.props && e.props[t];
    z(n) && n()
}

function Md(e, t, n, r, s, o, i, a, l) {
    const {
        p: f,
        o: {
            createElement: c
        }
    } = l, u = c("div"), d = e.suspense = gc(e, s, r, t, u, n, o, i, a, l);
    f(null, d.pendingBranch = e.ssContent, u, null, r, d, o, i), d.deps > 0 ? (Qn(e, "onPending"), Qn(e, "onFallback"), f(null, e.ssFallback, t, n, r, null, o, i), bn(d, e.ssFallback)) : d.resolve(!1, !0)
}

function Id(e, t, n, r, s, o, i, a, {
    p: l,
    um: f,
    o: {
        createElement: c
    }
}) {
    const u = t.suspense = e.suspense;
    u.vnode = t, t.el = e.el;
    const d = t.ssContent,
        h = t.ssFallback,
        {
            activeBranch: y,
            pendingBranch: v,
            isInFallback: T,
            isHydrating: C
        } = u;
    if (v) u.pendingBranch = d, et(d, v) ? (l(v, d, u.hiddenContainer, null, s, u, o, i, a), u.deps <= 0 ? u.resolve() : T && (C || (l(y, h, n, r, s, null, o, i, a), bn(u, h)))) : (u.pendingId = zs++, C ? (u.isHydrating = !1, u.activeBranch = v) : f(v, s, u), u.deps = 0, u.effects.length = 0, u.hiddenContainer = c("div"), T ? (l(null, d, u.hiddenContainer, null, s, u, o, i, a), u.deps <= 0 ? u.resolve() : (l(y, h, n, r, s, null, o, i, a), bn(u, h))) : y && et(d, y) ? (l(y, d, n, r, s, u, o, i, a), u.resolve(!0)) : (l(null, d, u.hiddenContainer, null, s, u, o, i, a), u.deps <= 0 && u.resolve()));
    else if (y && et(d, y)) l(y, d, n, r, s, u, o, i, a), bn(u, d);
    else if (Qn(t, "onPending"), u.pendingBranch = d, d.shapeFlag & 512 ? u.pendingId = d.component.suspenseId : u.pendingId = zs++, l(null, d, u.hiddenContainer, null, s, u, o, i, a), u.deps <= 0) u.resolve();
    else {
        const {
            timeout: _,
            pendingId: g
        } = u;
        _ > 0 ? setTimeout(() => {
            u.pendingId === g && u.fallback(h)
        }, _) : _ === 0 && u.fallback(h)
    }
}

function gc(e, t, n, r, s, o, i, a, l, f, c = !1) {
    const {
        p: u,
        m: d,
        um: h,
        n: y,
        o: {
            parentNode: v,
            remove: T
        }
    } = f;
    let C;
    const _ = Ld(e);
    _ && t && t.pendingBranch && (C = t.pendingId, t.deps++);
    const g = e.props ? dl(e.props.timeout) : void 0,
        b = o,
        E = {
            vnode: e,
            parent: t,
            parentComponent: n,
            namespace: i,
            container: r,
            hiddenContainer: s,
            deps: 0,
            pendingId: zs++,
            timeout: typeof g == "number" ? g : -1,
            activeBranch: null,
            pendingBranch: null,
            isInFallback: !c,
            isHydrating: c,
            isUnmounted: !1,
            effects: [],
            resolve(S = !1, A = !1) {
                const {
                    vnode: H,
                    activeBranch: O,
                    pendingBranch: x,
                    pendingId: U,
                    effects: M,
                    parentComponent: W,
                    container: ee
                } = E;
                let oe = !1;
                E.isHydrating ? E.isHydrating = !1 : S || (oe = O && x.transition && x.transition.mode === "out-in", oe && (O.transition.afterLeave = () => {
                    U === E.pendingId && (d(x, ee, o === b ? y(O) : o, 0), Vs(M))
                }), O && (v(O.el) === ee && (o = y(O)), h(O, W, E, !0)), oe || d(x, ee, o, 0)), bn(E, x), E.pendingBranch = null, E.isInFallback = !1;
                let V = E.parent,
                    Z = !1;
                for (; V;) {
                    if (V.pendingBranch) {
                        V.effects.push(...M), Z = !0;
                        break
                    }
                    V = V.parent
                }!Z && !oe && Vs(M), E.effects = [], _ && t && t.pendingBranch && C === t.pendingId && (t.deps--, t.deps === 0 && !A && t.resolve()), Qn(H, "onResolve")
            },
            fallback(S) {
                if (!E.pendingBranch) return;
                const {
                    vnode: A,
                    activeBranch: H,
                    parentComponent: O,
                    container: x,
                    namespace: U
                } = E;
                Qn(A, "onFallback");
                const M = y(H),
                    W = () => {
                        E.isInFallback && (u(null, S, x, M, O, null, U, a, l), bn(E, S))
                    },
                    ee = S.transition && S.transition.mode === "out-in";
                ee && (H.transition.afterLeave = W), E.isInFallback = !0, h(H, O, null, !0), ee || W()
            },
            move(S, A, H) {
                E.activeBranch && d(E.activeBranch, S, A, H), E.container = S
            },
            next() {
                return E.activeBranch && y(E.activeBranch)
            },
            registerDep(S, A, H) {
                const O = !!E.pendingBranch;
                O && E.deps++;
                const x = S.vnode.el;
                S.asyncDep.catch(U => {
                    xn(U, S, 0)
                }).then(U => {
                    if (S.isUnmounted || E.isUnmounted || E.pendingId !== S.suspenseId) return;
                    S.asyncResolved = !0;
                    const {
                        vnode: M
                    } = S;
                    Qs(S, U, !1), x && (M.el = x);
                    const W = !x && S.subTree.el;
                    A(S, M, v(x || S.subTree.el), x ? null : y(S.subTree), E, i, H), W && T(W), Go(S, M.el), O && --E.deps === 0 && E.resolve()
                })
            },
            unmount(S, A) {
                E.isUnmounted = !0, E.activeBranch && h(E.activeBranch, n, S, A), E.pendingBranch && h(E.pendingBranch, n, S, A)
            }
        };
    return E
}

function Dd(e, t, n, r, s, o, i, a, l) {
    const f = t.suspense = gc(t, r, n, e.parentNode, document.createElement("div"), null, s, o, i, a, !0),
        c = l(e, f.pendingBranch = t.ssContent, n, f, o, i);
    return f.deps === 0 && f.resolve(!1, !0), c
}

function Hd(e) {
    const {
        shapeFlag: t,
        children: n
    } = e, r = t & 32;
    e.ssContent = ki(r ? n.default : n), e.ssFallback = r ? ki(n.fallback) : re(xe)
}

function ki(e) {
    let t;
    if (z(e)) {
        const n = wn && e._c;
        n && (e._d = !1, yt()), e = e(), n && (e._d = !0, t = Fe, yc())
    }
    return J(e) && (e = Rd(e)), e = Ue(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n => n !== e)), e
}

function mc(e, t) {
    t && t.pendingBranch ? J(e) ? t.effects.push(...e) : t.effects.push(e) : Vs(e)
}

function bn(e, t) {
    e.activeBranch = t;
    const {
        vnode: n,
        parentComponent: r
    } = e;
    let s = t.el;
    for (; !s && t.component;) t = t.component.subTree, s = t.el;
    n.el = s, r && r.subTree === n && (r.vnode.el = s, Go(r, s))
}

function Ld(e) {
    const t = e.props && e.props.suspensible;
    return t != null && t !== !1
}
const Ie = Symbol.for("v-fgt"),
    Qt = Symbol.for("v-txt"),
    xe = Symbol.for("v-cmt"),
    Tr = Symbol.for("v-stc"),
    Wn = [];
let Fe = null;

function yt(e = !1) {
    Wn.push(Fe = e ? null : [])
}

function yc() {
    Wn.pop(), Fe = Wn[Wn.length - 1] || null
}
let wn = 1;

function Ri(e) {
    wn += e, e < 0 && Fe && (Fe.hasOnce = !0)
}

function vc(e) {
    return e.dynamicChildren = wn > 0 ? Fe || pn : null, yc(), wn > 0 && Fe && Fe.push(e), e
}

function $d(e, t, n, r, s, o) {
    return vc(_c(e, t, n, r, s, o, !0))
}

function Yt(e, t, n, r, s) {
    return vc(re(e, t, n, r, s, !0))
}

function En(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function et(e, t) {
    return e.type === t.type && e.key === t.key
}
const bc = ({
        key: e
    }) => e ? ? null,
    Cr = ({
        ref: e,
        ref_key: t,
        ref_for: n
    }) => (typeof e == "number" && (e = "" + e), e != null ? me(e) || Ee(e) || z(e) ? {
        i: De,
        r: e,
        k: t,
        f: !!n
    } : e : null);

function _c(e, t = null, n = null, r = 0, s = null, o = e === Ie ? 0 : 1, i = !1, a = !1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && bc(t),
        ref: t && Cr(t),
        scopeId: jl,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: o,
        patchFlag: r,
        dynamicProps: s,
        dynamicChildren: null,
        appContext: null,
        ctx: De
    };
    return a ? (Yo(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= me(n) ? 8 : 16), wn > 0 && !i && Fe && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && Fe.push(l), l
}
const re = Fd;

function Fd(e, t = null, n = null, r = 0, s = null, o = !1) {
    if ((!e || e === Jl) && (e = xe), En(e)) {
        const a = Et(e, t, !0);
        return n && Yo(a, n), wn > 0 && !o && Fe && (a.shapeFlag & 6 ? Fe[Fe.indexOf(e)] = a : Fe.push(a)), a.patchFlag = -2, a
    }
    if (Gd(e) && (e = e.__vccOpts), t) {
        t = wc(t);
        let {
            class: a,
            style: l
        } = t;
        a && !me(a) && (t.class = rs(a)), he(l) && (Lo(l) && !J(l) && (l = ve({}, l)), t.style = ns(l))
    }
    const i = me(e) ? 1 : Nr(e) ? 128 : Bl(e) ? 64 : he(e) ? 4 : z(e) ? 2 : 0;
    return _c(e, t, n, r, s, i, o, !0)
}

function wc(e) {
    return e ? Lo(e) || nc(e) ? ve({}, e) : e : null
}

function Et(e, t, n = !1, r = !1) {
    const {
        props: s,
        ref: o,
        patchFlag: i,
        children: a,
        transition: l
    } = e, f = t ? zo(s || {}, t) : s, c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: f,
        key: f && bc(f),
        ref: t && t.ref ? n && o ? J(o) ? o.concat(Cr(t)) : [o, Cr(t)] : Cr(t) : o,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: a,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Ie ? i === -1 ? 16 : i | 16 : i,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: l,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Et(e.ssContent),
        ssFallback: e.ssFallback && Et(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return l && r && $t(c, l.clone(c)), c
}

function Ec(e = " ", t = 0) {
    return re(Qt, null, e, t)
}

function Ue(e) {
    return e == null || typeof e == "boolean" ? re(xe) : J(e) ? re(Ie, null, e.slice()) : En(e) ? Ot(e) : re(Qt, null, String(e))
}

function Ot(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Et(e)
}

function Yo(e, t) {
    let n = 0;
    const {
        shapeFlag: r
    } = e;
    if (t == null) t = null;
    else if (J(t)) n = 16;
    else if (typeof t == "object")
        if (r & 65) {
            const s = t.default;
            s && (s._c && (s._d = !1), Yo(e, s()), s._c && (s._d = !0));
            return
        } else {
            n = 32;
            const s = t._;
            !s && !nc(t) ? t._ctx = De : s === 3 && De && (De.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
        }
    else z(t) ? (t = {
        default: t,
        _ctx: De
    }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Ec(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n
}

function zo(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const s in r)
            if (s === "class") t.class !== r.class && (t.class = rs([t.class, r.class]));
            else if (s === "style") t.style = ns([t.style, r.style]);
        else if (nr(s)) {
            const o = t[s],
                i = r[s];
            i && o !== i && !(J(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i)
        } else s !== "" && (t[s] = r[s])
    }
    return t
}

function $e(e, t, n, r = null) {
    st(e, t, 7, [n, r])
}
const Nd = Ql();
let jd = 0;

function Bd(e, t, n) {
    const r = e.type,
        s = (t ? t.appContext : e.appContext) || Nd,
        o = {
            uid: jd++,
            vnode: e,
            type: r,
            parent: t,
            appContext: s,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            job: null,
            scope: new ml(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(s.provides),
            ids: t ? t.ids : ["", 0, 0],
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: sc(r, s),
            emitsOptions: pc(r, s),
            emit: null,
            emitted: null,
            propsDefaults: ue,
            inheritAttrs: r.inheritAttrs,
            ctx: ue,
            data: ue,
            props: ue,
            attrs: ue,
            slots: ue,
            refs: ue,
            setupState: ue,
            setupContext: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
    return o.ctx = {
        _: o
    }, o.root = t ? t.root : o, o.emit = kd.bind(null, o), e.ce && e.ce(o), o
}
let we = null;
const An = () => we || De;
let jr, Js; {
    const e = ts(),
        t = (n, r) => {
            let s;
            return (s = e[n]) || (s = e[n] = []), s.push(r), o => {
                s.length > 1 ? s.forEach(i => i(o)) : s[0](o)
            }
        };
    jr = t("__VUE_INSTANCE_SETTERS__", n => we = n), Js = t("__VUE_SSR_SETTERS__", n => Tn = n)
}
const en = e => {
        const t = we;
        return jr(e), e.scope.on(), () => {
            e.scope.off(), jr(t)
        }
    },
    Zs = () => {
        we && we.scope.off(), jr(null)
    };

function Tc(e) {
    return e.vnode.shapeFlag & 4
}
let Tn = !1;

function Ud(e, t = !1, n = !1) {
    t && Js(t);
    const {
        props: r,
        children: s
    } = e.vnode, o = Tc(e);
    hd(e, r, o, t), yd(e, s, n);
    const i = o ? Wd(e, t) : void 0;
    return t && Js(!1), i
}

function Wd(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, od);
    const {
        setup: r
    } = n;
    if (r) {
        Nt();
        const s = e.setupContext = r.length > 1 ? Kd(e) : null,
            o = en(e),
            i = or(r, e, 0, [e.props, s]),
            a = ko(i);
        if (jt(), o(), (a || e.sp) && !Jt(e) && No(e), a) {
            if (i.then(Zs, Zs), t) return i.then(l => {
                Qs(e, l, t)
            }).catch(l => {
                xn(l, e, 0)
            });
            e.asyncDep = i
        } else Qs(e, i, t)
    } else Cc(e, t)
}

function Qs(e, t, n) {
    z(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : he(t) && (e.setupState = Dl(t)), Cc(e, n)
}
let xi;

function Cc(e, t, n) {
    const r = e.type;
    if (!e.render) {
        if (!t && xi && !r.render) {
            const s = r.template || Wo(e).template;
            if (s) {
                const {
                    isCustomElement: o,
                    compilerOptions: i
                } = e.appContext.config, {
                    delimiters: a,
                    compilerOptions: l
                } = r, f = ve(ve({
                    isCustomElement: o,
                    delimiters: a
                }, i), l);
                r.render = xi(s, f)
            }
        }
        e.render = r.render || ft
    } {
        const s = en(e);
        Nt();
        try {
            id(e)
        } finally {
            jt(), s()
        }
    }
}
const Vd = {
    get(e, t) {
        return Re(e, "get", ""), e[t]
    }
};

function Kd(e) {
    const t = n => {
        e.exposed = n || {}
    };
    return {
        attrs: new Proxy(e.attrs, Vd),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}

function cs(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Dl(Rf(e.exposed)), {
        get(t, n) {
            if (n in t) return t[n];
            if (n in Un) return Un[n](e)
        },
        has(t, n) {
            return n in t || n in Un
        }
    })) : e.proxy
}

function Xs(e, t = !0) {
    return z(e) ? e.displayName || e.name : e.name || t && e.__name
}

function Gd(e) {
    return z(e) && "__vccOpts" in e
}
const X = (e, t) => Df(e, t, Tn);

function He(e, t, n) {
    const r = arguments.length;
    return r === 2 ? he(t) && !J(t) ? En(t) ? re(e, null, [t]) : re(e, t) : re(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && En(n) && (n = [n]), re(e, t, n))
}
const Sc = "3.5.12";
/**
 * @vue/runtime-dom v3.5.12
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
let eo;
const Ai = typeof window < "u" && window.trustedTypes;
if (Ai) try {
    eo = Ai.createPolicy("vue", {
        createHTML: e => e
    })
} catch {}
const kc = eo ? e => eo.createHTML(e) : e => e,
    qd = "http://www.w3.org/2000/svg",
    Yd = "http://www.w3.org/1998/Math/MathML",
    mt = typeof document < "u" ? document : null,
    Pi = mt && mt.createElement("template"),
    zd = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, n, r) => {
            const s = t === "svg" ? mt.createElementNS(qd, e) : t === "mathml" ? mt.createElementNS(Yd, e) : n ? mt.createElement(e, {
                is: n
            }) : mt.createElement(e);
            return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s
        },
        createText: e => mt.createTextNode(e),
        createComment: e => mt.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => mt.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, n, r, s, o) {
            const i = n ? n.previousSibling : t.lastChild;
            if (s && (s === o || s.nextSibling))
                for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling)););
            else {
                Pi.innerHTML = kc(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
                const a = Pi.content;
                if (r === "svg" || r === "mathml") {
                    const l = a.firstChild;
                    for (; l.firstChild;) a.appendChild(l.firstChild);
                    a.removeChild(l)
                }
                t.insertBefore(a, n)
            }
            return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
        }
    },
    Rt = "transition",
    In = "animation",
    Cn = Symbol("_vtc"),
    Rc = {
        name: String,
        type: String,
        css: {
            type: Boolean,
            default: !0
        },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
    },
    xc = ve({}, Wl, Rc),
    Jd = e => (e.displayName = "Transition", e.props = xc, e),
    Ac = Jd((e, {
        slots: t
    }) => He(Bf, Pc(e), t)),
    Wt = (e, t = []) => {
        J(e) ? e.forEach(n => n(...t)) : e && e(...t)
    },
    Oi = e => e ? J(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function Pc(e) {
    const t = {};
    for (const M in e) M in Rc || (t[M] = e[M]);
    if (e.css === !1) return t;
    const {
        name: n = "v",
        type: r,
        duration: s,
        enterFromClass: o = `${n}-enter-from`,
        enterActiveClass: i = `${n}-enter-active`,
        enterToClass: a = `${n}-enter-to`,
        appearFromClass: l = o,
        appearActiveClass: f = i,
        appearToClass: c = a,
        leaveFromClass: u = `${n}-leave-from`,
        leaveActiveClass: d = `${n}-leave-active`,
        leaveToClass: h = `${n}-leave-to`
    } = e, y = Zd(s), v = y && y[0], T = y && y[1], {
        onBeforeEnter: C,
        onEnter: _,
        onEnterCancelled: g,
        onLeave: b,
        onLeaveCancelled: E,
        onBeforeAppear: S = C,
        onAppear: A = _,
        onAppearCancelled: H = g
    } = t, O = (M, W, ee) => {
        xt(M, W ? c : a), xt(M, W ? f : i), ee && ee()
    }, x = (M, W) => {
        M._isLeaving = !1, xt(M, u), xt(M, h), xt(M, d), W && W()
    }, U = M => (W, ee) => {
        const oe = M ? A : _,
            V = () => O(W, M, ee);
        Wt(oe, [W, V]), Mi(() => {
            xt(W, M ? l : o), gt(W, M ? c : a), Oi(oe) || Ii(W, r, v, V)
        })
    };
    return ve(t, {
        onBeforeEnter(M) {
            Wt(C, [M]), gt(M, o), gt(M, i)
        },
        onBeforeAppear(M) {
            Wt(S, [M]), gt(M, l), gt(M, f)
        },
        onEnter: U(!1),
        onAppear: U(!0),
        onLeave(M, W) {
            M._isLeaving = !0;
            const ee = () => x(M, W);
            gt(M, u), gt(M, d), Mc(), Mi(() => {
                M._isLeaving && (xt(M, u), gt(M, h), Oi(b) || Ii(M, r, T, ee))
            }), Wt(b, [M, ee])
        },
        onEnterCancelled(M) {
            O(M, !1), Wt(g, [M])
        },
        onAppearCancelled(M) {
            O(M, !0), Wt(H, [M])
        },
        onLeaveCancelled(M) {
            x(M), Wt(E, [M])
        }
    })
}

function Zd(e) {
    if (e == null) return null;
    if (he(e)) return [xs(e.enter), xs(e.leave)]; {
        const t = xs(e);
        return [t, t]
    }
}

function xs(e) {
    return dl(e)
}

function gt(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e[Cn] || (e[Cn] = new Set)).add(t)
}

function xt(e, t) {
    t.split(/\s+/).forEach(r => r && e.classList.remove(r));
    const n = e[Cn];
    n && (n.delete(t), n.size || (e[Cn] = void 0))
}

function Mi(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e)
    })
}
let Qd = 0;

function Ii(e, t, n, r) {
    const s = e._endId = ++Qd,
        o = () => {
            s === e._endId && r()
        };
    if (n != null) return setTimeout(o, n);
    const {
        type: i,
        timeout: a,
        propCount: l
    } = Oc(e, t);
    if (!i) return r();
    const f = i + "end";
    let c = 0;
    const u = () => {
            e.removeEventListener(f, d), o()
        },
        d = h => {
            h.target === e && ++c >= l && u()
        };
    setTimeout(() => {
        c < l && u()
    }, a + 1), e.addEventListener(f, d)
}

function Oc(e, t) {
    const n = window.getComputedStyle(e),
        r = y => (n[y] || "").split(", "),
        s = r(`${Rt}Delay`),
        o = r(`${Rt}Duration`),
        i = Di(s, o),
        a = r(`${In}Delay`),
        l = r(`${In}Duration`),
        f = Di(a, l);
    let c = null,
        u = 0,
        d = 0;
    t === Rt ? i > 0 && (c = Rt, u = i, d = o.length) : t === In ? f > 0 && (c = In, u = f, d = l.length) : (u = Math.max(i, f), c = u > 0 ? i > f ? Rt : In : null, d = c ? c === Rt ? o.length : l.length : 0);
    const h = c === Rt && /\b(transform|all)(,|$)/.test(r(`${Rt}Property`).toString());
    return {
        type: c,
        timeout: u,
        propCount: d,
        hasTransform: h
    }
}

function Di(e, t) {
    for (; e.length < t.length;) e = e.concat(e);
    return Math.max(...t.map((n, r) => Hi(n) + Hi(e[r])))
}

function Hi(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function Mc() {
    return document.body.offsetHeight
}

function Xd(e, t, n) {
    const r = e[Cn];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}
const Br = Symbol("_vod"),
    Ic = Symbol("_vsh"),
    V0 = {
        beforeMount(e, {
            value: t
        }, {
            transition: n
        }) {
            e[Br] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Dn(e, t)
        },
        mounted(e, {
            value: t
        }, {
            transition: n
        }) {
            n && t && n.enter(e)
        },
        updated(e, {
            value: t,
            oldValue: n
        }, {
            transition: r
        }) {
            !t != !n && (r ? t ? (r.beforeEnter(e), Dn(e, !0), r.enter(e)) : r.leave(e, () => {
                Dn(e, !1)
            }) : Dn(e, t))
        },
        beforeUnmount(e, {
            value: t
        }) {
            Dn(e, t)
        }
    };

function Dn(e, t) {
    e.style.display = t ? e[Br] : "none", e[Ic] = !t
}
const eh = Symbol(""),
    th = /(^|;)\s*display\s*:/;

function nh(e, t, n) {
    const r = e.style,
        s = me(n);
    let o = !1;
    if (n && !s) {
        if (t)
            if (me(t))
                for (const i of t.split(";")) {
                    const a = i.slice(0, i.indexOf(":")).trim();
                    n[a] == null && Sr(r, a, "")
                } else
                    for (const i in t) n[i] == null && Sr(r, i, "");
        for (const i in n) i === "display" && (o = !0), Sr(r, i, n[i])
    } else if (s) {
        if (t !== n) {
            const i = r[eh];
            i && (n += ";" + i), r.cssText = n, o = th.test(n)
        }
    } else t && e.removeAttribute("style");
    Br in e && (e[Br] = o ? r.display : "", e[Ic] && (r.display = "none"))
}
const Li = /\s*!important$/;

function Sr(e, t, n) {
    if (J(n)) n.forEach(r => Sr(e, t, r));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
        const r = rh(e, t);
        Li.test(n) ? e.setProperty(tn(r), n.replace(Li, ""), "important") : e[r] = n
    }
}
const $i = ["Webkit", "Moz", "ms"],
    As = {};

function rh(e, t) {
    const n = As[t];
    if (n) return n;
    let r = Je(t);
    if (r !== "filter" && r in e) return As[t] = r;
    r = sr(r);
    for (let s = 0; s < $i.length; s++) {
        const o = $i[s] + r;
        if (o in e) return As[t] = o
    }
    return t
}
const Fi = "http://www.w3.org/1999/xlink";

function Ni(e, t, n, r, s, o = sf(t)) {
    r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Fi, t.slice(6, t.length)) : e.setAttributeNS(Fi, t, n) : n == null || o && !hl(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : Ft(n) ? String(n) : n)
}

function ji(e, t, n, r, s) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? kc(n) : n);
        return
    }
    const o = e.tagName;
    if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
        const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value,
            l = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
        (a !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
        return
    }
    let i = !1;
    if (n === "" || n == null) {
        const a = typeof e[t];
        a === "boolean" ? n = hl(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0)
    }
    try {
        e[t] = n
    } catch {}
    i && e.removeAttribute(s || t)
}

function sh(e, t, n, r) {
    e.addEventListener(t, n, r)
}

function oh(e, t, n, r) {
    e.removeEventListener(t, n, r)
}
const Bi = Symbol("_vei");

function ih(e, t, n, r, s = null) {
    const o = e[Bi] || (e[Bi] = {}),
        i = o[t];
    if (r && i) i.value = r;
    else {
        const [a, l] = ah(t);
        if (r) {
            const f = o[t] = uh(r, s);
            sh(e, a, f, l)
        } else i && (oh(e, a, i, l), o[t] = void 0)
    }
}
const Ui = /(?:Once|Passive|Capture)$/;

function ah(e) {
    let t;
    if (Ui.test(e)) {
        t = {};
        let r;
        for (; r = e.match(Ui);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : tn(e.slice(2)), t]
}
let Ps = 0;
const lh = Promise.resolve(),
    ch = () => Ps || (lh.then(() => Ps = 0), Ps = Date.now());

function uh(e, t) {
    const n = r => {
        if (!r._vts) r._vts = Date.now();
        else if (r._vts <= n.attached) return;
        st(fh(r, n.value), t, 5, [r])
    };
    return n.value = e, n.attached = ch(), n
}

function fh(e, t) {
    if (J(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e), e._stopped = !0
        }, t.map(r => s => !s._stopped && r && r(s))
    } else return t
}
const Wi = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    dh = (e, t, n, r, s, o) => {
        const i = s === "svg";
        t === "class" ? Xd(e, r, i) : t === "style" ? nh(e, n, r) : nr(t) ? Co(t) || ih(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : hh(e, t, r, i)) ? (ji(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ni(e, t, r, i, o, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !me(r)) ? ji(e, Je(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ni(e, t, r, i))
    };

function hh(e, t, n, r) {
    if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Wi(t) && z(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
    if (t === "width" || t === "height") {
        const s = e.tagName;
        if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE") return !1
    }
    return Wi(t) && me(n) ? !1 : t in e
}
const Dc = new WeakMap,
    Hc = new WeakMap,
    Ur = Symbol("_moveCb"),
    Vi = Symbol("_enterCb"),
    ph = e => (delete e.props.mode, e),
    gh = ph({
        name: "TransitionGroup",
        props: ve({}, xc, {
            tag: String,
            moveClass: String
        }),
        setup(e, {
            slots: t
        }) {
            const n = An(),
                r = Ul();
            let s, o;
            return jo(() => {
                if (!s.length) return;
                const i = e.moveClass || `${e.name||"v"}-move`;
                if (!bh(s[0].el, n.vnode.el, i)) return;
                s.forEach(mh), s.forEach(yh);
                const a = s.filter(vh);
                Mc(), a.forEach(l => {
                    const f = l.el,
                        c = f.style;
                    gt(f, i), c.transform = c.webkitTransform = c.transitionDuration = "";
                    const u = f[Ur] = d => {
                        d && d.target !== f || (!d || /transform$/.test(d.propertyName)) && (f.removeEventListener("transitionend", u), f[Ur] = null, xt(f, i))
                    };
                    f.addEventListener("transitionend", u)
                })
            }), () => {
                const i = ne(e),
                    a = Pc(i);
                let l = i.tag || Ie;
                if (s = [], o)
                    for (let f = 0; f < o.length; f++) {
                        const c = o[f];
                        c.el && c.el instanceof Element && (s.push(c), $t(c, Zn(c, a, r, n)), Dc.set(c, c.el.getBoundingClientRect()))
                    }
                o = t.default ? Fo(t.default()) : [];
                for (let f = 0; f < o.length; f++) {
                    const c = o[f];
                    c.key != null && $t(c, Zn(c, a, r, n))
                }
                return re(l, null, o)
            }
        }
    }),
    K0 = gh;

function mh(e) {
    const t = e.el;
    t[Ur] && t[Ur](), t[Vi] && t[Vi]()
}

function yh(e) {
    Hc.set(e, e.el.getBoundingClientRect())
}

function vh(e) {
    const t = Dc.get(e),
        n = Hc.get(e),
        r = t.left - n.left,
        s = t.top - n.top;
    if (r || s) {
        const o = e.el.style;
        return o.transform = o.webkitTransform = `translate(${r}px,${s}px)`, o.transitionDuration = "0s", e
    }
}

function bh(e, t, n) {
    const r = e.cloneNode(),
        s = e[Cn];
    s && s.forEach(a => {
        a.split(/\s+/).forEach(l => l && r.classList.remove(l))
    }), n.split(/\s+/).forEach(a => a && r.classList.add(a)), r.style.display = "none";
    const o = t.nodeType === 1 ? t : t.parentNode;
    o.appendChild(r);
    const {
        hasTransform: i
    } = Oc(r);
    return o.removeChild(r), i
}
const Lc = ve({
    patchProp: dh
}, zd);
let Vn, Ki = !1;

function _h() {
    return Vn || (Vn = bd(Lc))
}

function wh() {
    return Vn = Ki ? Vn : _d(Lc), Ki = !0, Vn
}
const Eh = (...e) => {
        const t = _h().createApp(...e),
            {
                mount: n
            } = t;
        return t.mount = r => {
            const s = Fc(r);
            if (!s) return;
            const o = t._component;
            !z(o) && !o.render && !o.template && (o.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
            const i = n(s, !1, $c(s));
            return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i
        }, t
    },
    Th = (...e) => {
        const t = wh().createApp(...e),
            {
                mount: n
            } = t;
        return t.mount = r => {
            const s = Fc(r);
            if (s) return n(s, !0, $c(s))
        }, t
    };

function $c(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function Fc(e) {
    return me(e) ? document.querySelector(e) : e
}
const Ch = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
    Sh = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
    kh = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

function Rh(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype" in t) {
        xh(e);
        return
    }
    return t
}

function xh(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}

function Wr(e, t = {}) {
    if (typeof e != "string") return e;
    const n = e.trim();
    if (e[0] === '"' && e.endsWith('"') && !e.includes("\\")) return n.slice(1, -1);
    if (n.length <= 9) {
        const r = n.toLowerCase();
        if (r === "true") return !0;
        if (r === "false") return !1;
        if (r === "undefined") return;
        if (r === "null") return null;
        if (r === "nan") return Number.NaN;
        if (r === "infinity") return Number.POSITIVE_INFINITY;
        if (r === "-infinity") return Number.NEGATIVE_INFINITY
    }
    if (!kh.test(e)) {
        if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
        return e
    }
    try {
        if (Ch.test(e) || Sh.test(e)) {
            if (t.strict) throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(e, Rh)
        }
        return JSON.parse(e)
    } catch (r) {
        if (t.strict) throw r;
        return e
    }
}
const Ah = /#/g,
    Ph = /&/g,
    Oh = /\//g,
    Mh = /=/g,
    Jo = /\+/g,
    Ih = /%5e/gi,
    Dh = /%60/gi,
    Hh = /%7c/gi,
    Lh = /%20/gi;

function $h(e) {
    return encodeURI("" + e).replace(Hh, "|")
}

function to(e) {
    return $h(typeof e == "string" ? e : JSON.stringify(e)).replace(Jo, "%2B").replace(Lh, "+").replace(Ah, "%23").replace(Ph, "%26").replace(Dh, "`").replace(Ih, "^").replace(Oh, "%2F")
}

function Os(e) {
    return to(e).replace(Mh, "%3D")
}

function Vr(e = "") {
    try {
        return decodeURIComponent("" + e)
    } catch {
        return "" + e
    }
}

function Fh(e) {
    return Vr(e.replace(Jo, " "))
}

function Nh(e) {
    return Vr(e.replace(Jo, " "))
}

function jh(e = "") {
    const t = {};
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
        const r = n.match(/([^=]+)=?(.*)/) || [];
        if (r.length < 2) continue;
        const s = Fh(r[1]);
        if (s === "__proto__" || s === "constructor") continue;
        const o = Nh(r[2] || "");
        t[s] === void 0 ? t[s] = o : Array.isArray(t[s]) ? t[s].push(o) : t[s] = [t[s], o]
    }
    return t
}

function Bh(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)), t ? Array.isArray(t) ? t.map(n => `${Os(e)}=${to(n)}`).join("&") : `${Os(e)}=${to(t)}` : Os(e)
}

function Uh(e) {
    return Object.keys(e).filter(t => e[t] !== void 0).map(t => Bh(t, e[t])).filter(Boolean).join("&")
}
const Wh = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
    Vh = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
    Kh = /^([/\\]\s*){2,}[^/\\]/,
    Gh = /^[\s\0]*(blob|data|javascript|vbscript):$/i,
    qh = /\/$|\/\?|\/#/,
    Yh = /^\.?\//;

function rn(e, t = {}) {
    return typeof t == "boolean" && (t = {
        acceptRelative: t
    }), t.strict ? Wh.test(e) : Vh.test(e) || (t.acceptRelative ? Kh.test(e) : !1)
}

function zh(e) {
    return !!e && Gh.test(e)
}

function no(e = "", t) {
    return t ? qh.test(e) : e.endsWith("/")
}

function Zo(e = "", t) {
    if (!t) return (no(e) ? e.slice(0, -1) : e) || "/";
    if (!no(e, !0)) return e || "/";
    let n = e,
        r = "";
    const s = e.indexOf("#");
    s >= 0 && (n = e.slice(0, s), r = e.slice(s));
    const [o, ...i] = n.split("?");
    return ((o.endsWith("/") ? o.slice(0, -1) : o) || "/") + (i.length > 0 ? `?${i.join("?")}` : "") + r
}

function ro(e = "", t) {
    if (!t) return e.endsWith("/") ? e : e + "/";
    if (no(e, !0)) return e || "/";
    let n = e,
        r = "";
    const s = e.indexOf("#");
    if (s >= 0 && (n = e.slice(0, s), r = e.slice(s), !n)) return r;
    const [o, ...i] = n.split("?");
    return o + "/" + (i.length > 0 ? `?${i.join("?")}` : "") + r
}

function Jh(e = "") {
    return e.startsWith("/")
}

function Gi(e = "") {
    return Jh(e) ? e : "/" + e
}

function Zh(e, t) {
    if (jc(t) || rn(e)) return e;
    const n = Zo(t);
    return e.startsWith(n) ? e : Qo(n, e)
}

function qi(e, t) {
    if (jc(t)) return e;
    const n = Zo(t);
    if (!e.startsWith(n)) return e;
    const r = e.slice(n.length);
    return r[0] === "/" ? r : "/" + r
}

function Nc(e, t) {
    const n = ep(e),
        r = { ...jh(n.search),
            ...t
        };
    return n.search = Uh(r), tp(n)
}

function jc(e) {
    return !e || e === "/"
}

function Qh(e) {
    return e && e !== "/"
}

function Qo(e, ...t) {
    let n = e || "";
    for (const r of t.filter(s => Qh(s)))
        if (n) {
            const s = r.replace(Yh, "");
            n = ro(n) + s
        } else n = r;
    return n
}

function Bc(...e) {
    var i, a, l, f;
    const t = /\/(?!\/)/,
        n = e.filter(Boolean),
        r = [];
    let s = 0;
    for (const c of n)
        if (!(!c || c === "/")) {
            for (const [u, d] of c.split(t).entries())
                if (!(!d || d === ".")) {
                    if (d === "..") {
                        if (r.length === 1 && rn(r[0])) continue;
                        r.pop(), s--;
                        continue
                    }
                    if (u === 1 && ((i = r[r.length - 1]) != null && i.endsWith(":/"))) {
                        r[r.length - 1] += "/" + d;
                        continue
                    }
                    r.push(d), s++
                }
        }
    let o = r.join("/");
    return s >= 0 ? (a = n[0]) != null && a.startsWith("/") && !o.startsWith("/") ? o = "/" + o : (l = n[0]) != null && l.startsWith("./") && !o.startsWith("./") && (o = "./" + o) : o = "../".repeat(-1 * s) + o, (f = n[n.length - 1]) != null && f.endsWith("/") && !o.endsWith("/") && (o += "/"), o
}

function Xh(e, t, n = {}) {
    return n.trailingSlash || (e = ro(e), t = ro(t)), n.leadingSlash || (e = Gi(e), t = Gi(t)), n.encoding || (e = Vr(e), t = Vr(t)), e === t
}
const Uc = Symbol.for("ufo:protocolRelative");

function ep(e = "", t) {
    const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
    if (n) {
        const [, u, d = ""] = n;
        return {
            protocol: u.toLowerCase(),
            pathname: d,
            href: u + d,
            auth: "",
            host: "",
            search: "",
            hash: ""
        }
    }
    if (!rn(e, {
            acceptRelative: !0
        })) return Yi(e);
    const [, r = "", s, o = ""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
    let [, i = "", a = ""] = o.match(/([^#/?]*)(.*)?/) || [];
    r === "file:" && (a = a.replace(/\/(?=[A-Za-z]:)/, ""));
    const {
        pathname: l,
        search: f,
        hash: c
    } = Yi(a);
    return {
        protocol: r.toLowerCase(),
        auth: s ? s.slice(0, Math.max(0, s.length - 1)) : "",
        host: i,
        pathname: l,
        search: f,
        hash: c,
        [Uc]: !r
    }
}

function Yi(e = "") {
    const [t = "", n = "", r = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: t,
        search: n,
        hash: r
    }
}

function tp(e) {
    const t = e.pathname || "",
        n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "",
        r = e.hash || "",
        s = e.auth ? e.auth + "@" : "",
        o = e.host || "";
    return (e.protocol || e[Uc] ? (e.protocol || "") + "//" : "") + s + o + t + n + r
}
class np extends Error {
    constructor(t, n) {
        super(t, n), this.name = "FetchError", n != null && n.cause && !this.cause && (this.cause = n.cause)
    }
}

function rp(e) {
    var l, f, c, u, d;
    const t = ((l = e.error) == null ? void 0 : l.message) || ((f = e.error) == null ? void 0 : f.toString()) || "",
        n = ((c = e.request) == null ? void 0 : c.method) || ((u = e.options) == null ? void 0 : u.method) || "GET",
        r = ((d = e.request) == null ? void 0 : d.url) || String(e.request) || "/",
        s = `[${n}] ${JSON.stringify(r)}`,
        o = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>",
        i = `${s}: ${o}${t?` ${t}`:""}`,
        a = new np(i, e.error ? {
            cause: e.error
        } : void 0);
    for (const h of ["request", "options", "response"]) Object.defineProperty(a, h, {
        get() {
            return e[h]
        }
    });
    for (const [h, y] of [
            ["data", "_data"],
            ["status", "status"],
            ["statusCode", "status"],
            ["statusText", "statusText"],
            ["statusMessage", "statusText"]
        ]) Object.defineProperty(a, h, {
        get() {
            return e.response && e.response[y]
        }
    });
    return a
}
const sp = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));

function zi(e = "GET") {
    return sp.has(e.toUpperCase())
}

function op(e) {
    if (e === void 0) return !1;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.buffer ? !1 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function"
}
const ip = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]),
    ap = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;

function lp(e = "") {
    if (!e) return "json";
    const t = e.split(";").shift() || "";
    return ap.test(t) ? "json" : ip.has(t) || t.startsWith("text/") ? "text" : "blob"
}

function cp(e, t, n, r) {
    const s = up((t == null ? void 0 : t.headers) ? ? (e == null ? void 0 : e.headers), n == null ? void 0 : n.headers, r);
    let o;
    return (n != null && n.query || n != null && n.params || t != null && t.params || t != null && t.query) && (o = { ...n == null ? void 0 : n.params,
        ...n == null ? void 0 : n.query,
        ...t == null ? void 0 : t.params,
        ...t == null ? void 0 : t.query
    }), { ...n,
        ...t,
        query: o,
        params: o,
        headers: s
    }
}

function up(e, t, n) {
    if (!t) return new n(e);
    const r = new n(t);
    if (e)
        for (const [s, o] of Symbol.iterator in e || Array.isArray(e) ? e : new n(e)) r.set(s, o);
    return r
}
async function mr(e, t) {
    if (t)
        if (Array.isArray(t))
            for (const n of t) await n(e);
        else await t(e)
}
const fp = new Set([408, 409, 425, 429, 500, 502, 503, 504]),
    dp = new Set([101, 204, 205, 304]);

function Wc(e = {}) {
    const {
        fetch: t = globalThis.fetch,
        Headers: n = globalThis.Headers,
        AbortController: r = globalThis.AbortController
    } = e;
    async function s(a) {
        const l = a.error && a.error.name === "AbortError" && !a.options.timeout || !1;
        if (a.options.retry !== !1 && !l) {
            let c;
            typeof a.options.retry == "number" ? c = a.options.retry : c = zi(a.options.method) ? 0 : 1;
            const u = a.response && a.response.status || 500;
            if (c > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(u) : fp.has(u))) {
                const d = typeof a.options.retryDelay == "function" ? a.options.retryDelay(a) : a.options.retryDelay || 0;
                return d > 0 && await new Promise(h => setTimeout(h, d)), o(a.request, { ...a.options,
                    retry: c - 1
                })
            }
        }
        const f = rp(a);
        throw Error.captureStackTrace && Error.captureStackTrace(f, o), f
    }
    const o = async function(l, f = {}) {
            const c = {
                request: l,
                options: cp(l, f, e.defaults, n),
                response: void 0,
                error: void 0
            };
            c.options.method && (c.options.method = c.options.method.toUpperCase()), c.options.onRequest && await mr(c, c.options.onRequest), typeof c.request == "string" && (c.options.baseURL && (c.request = Zh(c.request, c.options.baseURL)), c.options.query && (c.request = Nc(c.request, c.options.query), delete c.options.query), "query" in c.options && delete c.options.query, "params" in c.options && delete c.options.params), c.options.body && zi(c.options.method) && (op(c.options.body) ? (c.options.body = typeof c.options.body == "string" ? c.options.body : JSON.stringify(c.options.body), c.options.headers = new n(c.options.headers || {}), c.options.headers.has("content-type") || c.options.headers.set("content-type", "application/json"), c.options.headers.has("accept") || c.options.headers.set("accept", "application/json")) : ("pipeTo" in c.options.body && typeof c.options.body.pipeTo == "function" || typeof c.options.body.pipe == "function") && ("duplex" in c.options || (c.options.duplex = "half")));
            let u;
            if (!c.options.signal && c.options.timeout) {
                const h = new r;
                u = setTimeout(() => {
                    const y = new Error("[TimeoutError]: The operation was aborted due to timeout");
                    y.name = "TimeoutError", y.code = 23, h.abort(y)
                }, c.options.timeout), c.options.signal = h.signal
            }
            try {
                c.response = await t(c.request, c.options)
            } catch (h) {
                return c.error = h, c.options.onRequestError && await mr(c, c.options.onRequestError), await s(c)
            } finally {
                u && clearTimeout(u)
            }
            if ((c.response.body || c.response._bodyInit) && !dp.has(c.response.status) && c.options.method !== "HEAD") {
                const h = (c.options.parseResponse ? "json" : c.options.responseType) || lp(c.response.headers.get("content-type") || "");
                switch (h) {
                    case "json":
                        {
                            const y = await c.response.text(),
                                v = c.options.parseResponse || Wr;c.response._data = v(y);
                            break
                        }
                    case "stream":
                        {
                            c.response._data = c.response.body || c.response._bodyInit;
                            break
                        }
                    default:
                        c.response._data = await c.response[h]()
                }
            }
            return c.options.onResponse && await mr(c, c.options.onResponse), !c.options.ignoreResponseError && c.response.status >= 400 && c.response.status < 600 ? (c.options.onResponseError && await mr(c, c.options.onResponseError), await s(c)) : c.response
        },
        i = async function(l, f) {
            return (await o(l, f))._data
        };
    return i.raw = o, i.native = (...a) => t(...a), i.create = (a = {}, l = {}) => Wc({ ...e,
        ...l,
        defaults: { ...e.defaults,
            ...l.defaults,
            ...a
        }
    }), i
}
const Kr = function() {
        if (typeof globalThis < "u") return globalThis;
        if (typeof self < "u") return self;
        if (typeof window < "u") return window;
        if (typeof global < "u") return global;
        throw new Error("unable to locate global object")
    }(),
    hp = Kr.fetch ? (...e) => Kr.fetch(...e) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!")),
    pp = Kr.Headers,
    gp = Kr.AbortController,
    mp = Wc({
        fetch: hp,
        Headers: pp,
        AbortController: gp
    }),
    yp = mp,
    vp = () => {
        var e;
        return ((e = window == null ? void 0 : window.__NUXT__) == null ? void 0 : e.config) || {}
    },
    Gr = vp().app,
    bp = () => Gr.baseURL,
    _p = () => Gr.buildAssetsDir,
    Xo = (...e) => Bc(Vc(), _p(), ...e),
    Vc = (...e) => {
        const t = Gr.cdnURL || Gr.baseURL;
        return e.length ? Bc(t, ...e) : t
    };
globalThis.__buildAssetsURL = Xo, globalThis.__publicAssetsURL = Vc;
globalThis.$fetch || (globalThis.$fetch = yp.create({
    baseURL: bp()
}));

function so(e, t = {}, n) {
    for (const r in e) {
        const s = e[r],
            o = n ? `${n}:${r}` : r;
        typeof s == "object" && s !== null ? so(s, t, o) : typeof s == "function" && (t[o] = s)
    }
    return t
}
const wp = {
        run: e => e()
    },
    Ep = () => wp,
    Kc = typeof console.createTask < "u" ? console.createTask : Ep;

function Tp(e, t) {
    const n = t.shift(),
        r = Kc(n);
    return e.reduce((s, o) => s.then(() => r.run(() => o(...t))), Promise.resolve())
}

function Cp(e, t) {
    const n = t.shift(),
        r = Kc(n);
    return Promise.all(e.map(s => r.run(() => s(...t))))
}

function Ms(e, t) {
    for (const n of [...e]) n(t)
}
class Sp {
    constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this)
    }
    hook(t, n, r = {}) {
        if (!t || typeof n != "function") return () => {};
        const s = t;
        let o;
        for (; this._deprecatedHooks[t];) o = this._deprecatedHooks[t], t = o.to;
        if (o && !r.allowDeprecated) {
            let i = o.message;
            i || (i = `${s} hook has been deprecated` + (o.to ? `, please use ${o.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = new Set), this._deprecatedMessages.has(i) || (console.warn(i), this._deprecatedMessages.add(i))
        }
        if (!n.name) try {
            Object.defineProperty(n, "name", {
                get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
                configurable: !0
            })
        } catch {}
        return this._hooks[t] = this._hooks[t] || [], this._hooks[t].push(n), () => {
            n && (this.removeHook(t, n), n = void 0)
        }
    }
    hookOnce(t, n) {
        let r, s = (...o) => (typeof r == "function" && r(), r = void 0, s = void 0, n(...o));
        return r = this.hook(t, s), r
    }
    removeHook(t, n) {
        if (this._hooks[t]) {
            const r = this._hooks[t].indexOf(n);
            r !== -1 && this._hooks[t].splice(r, 1), this._hooks[t].length === 0 && delete this._hooks[t]
        }
    }
    deprecateHook(t, n) {
        this._deprecatedHooks[t] = typeof n == "string" ? {
            to: n
        } : n;
        const r = this._hooks[t] || [];
        delete this._hooks[t];
        for (const s of r) this.hook(t, s)
    }
    deprecateHooks(t) {
        Object.assign(this._deprecatedHooks, t);
        for (const n in t) this.deprecateHook(n, t[n])
    }
    addHooks(t) {
        const n = so(t),
            r = Object.keys(n).map(s => this.hook(s, n[s]));
        return () => {
            for (const s of r.splice(0, r.length)) s()
        }
    }
    removeHooks(t) {
        const n = so(t);
        for (const r in n) this.removeHook(r, n[r])
    }
    removeAllHooks() {
        for (const t in this._hooks) delete this._hooks[t]
    }
    callHook(t, ...n) {
        return n.unshift(t), this.callHookWith(Tp, t, ...n)
    }
    callHookParallel(t, ...n) {
        return n.unshift(t), this.callHookWith(Cp, t, ...n)
    }
    callHookWith(t, n, ...r) {
        const s = this._before || this._after ? {
            name: n,
            args: r,
            context: {}
        } : void 0;
        this._before && Ms(this._before, s);
        const o = t(n in this._hooks ? [...this._hooks[n]] : [], r);
        return o instanceof Promise ? o.finally(() => {
            this._after && s && Ms(this._after, s)
        }) : (this._after && s && Ms(this._after, s), o)
    }
    beforeEach(t) {
        return this._before = this._before || [], this._before.push(t), () => {
            if (this._before !== void 0) {
                const n = this._before.indexOf(t);
                n !== -1 && this._before.splice(n, 1)
            }
        }
    }
    afterEach(t) {
        return this._after = this._after || [], this._after.push(t), () => {
            if (this._after !== void 0) {
                const n = this._after.indexOf(t);
                n !== -1 && this._after.splice(n, 1)
            }
        }
    }
}

function Gc() {
    return new Sp
}

function kp(e = {}) {
    let t, n = !1;
    const r = i => {
        if (t && t !== i) throw new Error("Context conflict")
    };
    let s;
    if (e.asyncContext) {
        const i = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
        i ? s = new i : console.warn("[unctx] `AsyncLocalStorage` is not provided.")
    }
    const o = () => {
        if (s && t === void 0) {
            const i = s.getStore();
            if (i !== void 0) return i
        }
        return t
    };
    return {
        use: () => {
            const i = o();
            if (i === void 0) throw new Error("Context is not available");
            return i
        },
        tryUse: () => o(),
        set: (i, a) => {
            a || r(i), t = i, n = !0
        },
        unset: () => {
            t = void 0, n = !1
        },
        call: (i, a) => {
            r(i), t = i;
            try {
                return s ? s.run(i, a) : a()
            } finally {
                n || (t = void 0)
            }
        },
        async callAsync(i, a) {
            t = i;
            const l = () => {
                    t = i
                },
                f = () => t === i ? l : void 0;
            oo.add(f);
            try {
                const c = s ? s.run(i, a) : a();
                return n || (t = void 0), await c
            } finally {
                oo.delete(f)
            }
        }
    }
}

function Rp(e = {}) {
    const t = {};
    return {
        get(n, r = {}) {
            return t[n] || (t[n] = kp({ ...e,
                ...r
            })), t[n], t[n]
        }
    }
}
const qr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {},
    Ji = "__unctx__",
    xp = qr[Ji] || (qr[Ji] = Rp()),
    Ap = (e, t = {}) => xp.get(e, t),
    Zi = "__unctx_async_handlers__",
    oo = qr[Zi] || (qr[Zi] = new Set);

function _n(e) {
    const t = [];
    for (const s of oo) {
        const o = s();
        o && t.push(o)
    }
    const n = () => {
        for (const s of t) s()
    };
    let r = e();
    return r && typeof r == "object" && "catch" in r && (r = r.catch(s => {
        throw n(), s
    })), [r, n]
}
const Pp = !1,
    io = !1,
    Op = !1,
    G0 = {
        componentName: "NuxtLink",
        prefetch: !0,
        prefetchOn: {
            visibility: !0
        }
    },
    q0 = {
        deep: !1
    },
    Mp = void 0,
    Y0 = {},
    Ip = "#__nuxt",
    qc = "nuxt-app",
    Qi = 36e5,
    Dp = "vite:preloadError";

function Yc(e = qc) {
    return Ap(e, {
        asyncContext: !1
    })
}
const Hp = "__nuxt_plugin";

function Lp(e) {
    var s;
    let t = 0;
    const n = {
        _id: e.id || qc || "nuxt-app",
        _scope: yl(),
        provide: void 0,
        globalName: "nuxt",
        versions: {
            get nuxt() {
                return "3.13.2"
            },
            get vue() {
                return n.vueApp.version
            }
        },
        payload: _t({ ...((s = e.ssrContext) == null ? void 0 : s.payload) || {},
            data: _t({}),
            state: Se({}),
            once: new Set,
            _errors: _t({})
        }),
        static: {
            data: {}
        },
        runWithContext(o) {
            return n._scope.active && !vl() ? n._scope.run(() => Xi(n, o)) : Xi(n, o)
        },
        isHydrating: !0,
        deferHydration() {
            if (!n.isHydrating) return () => {};
            t++;
            let o = !1;
            return () => {
                if (!o && (o = !0, t--, t === 0)) return n.isHydrating = !1, n.callHook("app:suspense:resolve")
            }
        },
        _asyncDataPromises: {},
        _asyncData: _t({}),
        _payloadRevivers: {},
        ...e
    }; {
        const o = window.__NUXT__;
        if (o)
            for (const i in o) switch (i) {
                case "data":
                case "state":
                case "_errors":
                    Object.assign(n.payload[i], o[i]);
                    break;
                default:
                    n.payload[i] = o[i]
            }
    }
    n.hooks = Gc(), n.hook = n.hooks.hook, n.callHook = n.hooks.callHook, n.provide = (o, i) => {
        const a = "$" + o;
        yr(n, a, i), yr(n.vueApp.config.globalProperties, a, i)
    }, yr(n.vueApp, "$nuxt", n), yr(n.vueApp.config.globalProperties, "$nuxt", n); {
        window.addEventListener(Dp, i => {
            n.callHook("app:chunkError", {
                error: i.payload
            }), (n.isHydrating || i.payload.message.includes("Unable to preload CSS")) && i.preventDefault()
        }), window.useNuxtApp = window.useNuxtApp || be;
        const o = n.hook("app:error", (...i) => {
            console.error("[nuxt] error caught during app initialization", ...i)
        });
        n.hook("app:mounted", o)
    }
    const r = n.payload.config;
    return n.provide("config", r), n
}

function $p(e, t) {
    t.hooks && e.hooks.addHooks(t.hooks)
}
async function Fp(e, t) {
    if (typeof t == "function") {
        const {
            provide: n
        } = await e.runWithContext(() => t(e)) || {};
        if (n && typeof n == "object")
            for (const r in n) e.provide(r, n[r])
    }
}
async function Np(e, t) {
    const n = [],
        r = [],
        s = [],
        o = [];
    let i = 0;
    async function a(l) {
        var c;
        const f = ((c = l.dependsOn) == null ? void 0 : c.filter(u => t.some(d => d._name === u) && !n.includes(u))) ? ? [];
        if (f.length > 0) r.push([new Set(f), l]);
        else {
            const u = Fp(e, l).then(async () => {
                l._name && (n.push(l._name), await Promise.all(r.map(async ([d, h]) => {
                    d.has(l._name) && (d.delete(l._name), d.size === 0 && (i++, await a(h)))
                })))
            });
            l.parallel ? s.push(u.catch(d => o.push(d))) : await u
        }
    }
    for (const l of t) $p(e, l);
    for (const l of t) await a(l);
    if (await Promise.all(s), i)
        for (let l = 0; l < i; l++) await Promise.all(s);
    if (o.length) throw o[0]
}

function dt(e) {
    if (typeof e == "function") return e;
    const t = e._name || e.name;
    return delete e.name, Object.assign(e.setup || (() => {}), e, {
        [Hp]: !0,
        _name: t
    })
}

function Xi(e, t, n) {
    const r = () => t();
    return Yc(e._id).set(e), e.vueApp.runWithContext(r)
}

function jp(e) {
    var n;
    let t;
    return Xl() && (t = (n = An()) == null ? void 0 : n.appContext.app.$nuxt), t = t || Yc(e).tryUse(), t || null
}

function be(e) {
    const t = jp(e);
    if (!t) throw new Error("[nuxt] instance unavailable");
    return t
}

function us(e) {
    return be().$config
}

function yr(e, t, n) {
    Object.defineProperty(e, t, {
        get: () => n
    })
}

function Bp(e, t) {
    return {
        ctx: {
            table: e
        },
        matchAll: n => Jc(n, e)
    }
}

function zc(e) {
    const t = {};
    for (const n in e) t[n] = n === "dynamic" ? new Map(Object.entries(e[n]).map(([r, s]) => [r, zc(s)])) : new Map(Object.entries(e[n]));
    return t
}

function Up(e) {
    return Bp(zc(e))
}

function Jc(e, t, n) {
    e.endsWith("/") && (e = e.slice(0, -1) || "/");
    const r = [];
    for (const [o, i] of ea(t.wildcard))(e === o || e.startsWith(o + "/")) && r.push(i);
    for (const [o, i] of ea(t.dynamic))
        if (e.startsWith(o + "/")) {
            const a = "/" + e.slice(o.length).split("/").splice(2).join("/");
            r.push(...Jc(a, i))
        }
    const s = t.static.get(e);
    return s && r.push(s), r.filter(Boolean)
}

function ea(e) {
    return [...e.entries()].sort((t, n) => t[0].length - n[0].length)
}

function Is(e) {
    if (e === null || typeof e != "object") return !1;
    const t = Object.getPrototypeOf(e);
    return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0
}

function ao(e, t, n = ".", r) {
    if (!Is(t)) return ao(e, {}, n, r);
    const s = Object.assign({}, t);
    for (const o in e) {
        if (o === "__proto__" || o === "constructor") continue;
        const i = e[o];
        i != null && (r && r(s, o, i, n) || (Array.isArray(i) && Array.isArray(s[o]) ? s[o] = [...i, ...s[o]] : Is(i) && Is(s[o]) ? s[o] = ao(i, s[o], (n ? `${n}.` : "") + o.toString(), r) : s[o] = i))
    }
    return s
}

function Wp(e) {
    return (...t) => t.reduce((n, r) => ao(n, r, "", e), {})
}
const Zc = Wp();

function Vp(e, t) {
    try {
        return t in e
    } catch {
        return !1
    }
}
var Kp = Object.defineProperty,
    Gp = (e, t, n) => t in e ? Kp(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    qt = (e, t, n) => (Gp(e, typeof t != "symbol" ? t + "" : t, n), n);
class lo extends Error {
    constructor(t, n = {}) {
        super(t, n), qt(this, "statusCode", 500), qt(this, "fatal", !1), qt(this, "unhandled", !1), qt(this, "statusMessage"), qt(this, "data"), qt(this, "cause"), n.cause && !this.cause && (this.cause = n.cause)
    }
    toJSON() {
        const t = {
            message: this.message,
            statusCode: uo(this.statusCode, 500)
        };
        return this.statusMessage && (t.statusMessage = Qc(this.statusMessage)), this.data !== void 0 && (t.data = this.data), t
    }
}
qt(lo, "__h3_error__", !0);

function co(e) {
    if (typeof e == "string") return new lo(e);
    if (qp(e)) return e;
    const t = new lo(e.message ? ? e.statusMessage ? ? "", {
        cause: e.cause || e
    });
    if (Vp(e, "stack")) try {
        Object.defineProperty(t, "stack", {
            get() {
                return e.stack
            }
        })
    } catch {
        try {
            t.stack = e.stack
        } catch {}
    }
    if (e.data && (t.data = e.data), e.statusCode ? t.statusCode = uo(e.statusCode, t.statusCode) : e.status && (t.statusCode = uo(e.status, t.statusCode)), e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText), t.statusMessage) {
        const n = t.statusMessage;
        Qc(t.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
    }
    return e.fatal !== void 0 && (t.fatal = e.fatal), e.unhandled !== void 0 && (t.unhandled = e.unhandled), t
}

function qp(e) {
    var t;
    return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.__h3_error__) === !0
}
const Yp = /[^\u0009\u0020-\u007E]/g;

function Qc(e = "") {
    return e.replace(Yp, "")
}

function uo(e, t = 200) {
    return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)), e < 100 || e > 999) ? t : e
}
const Xc = Symbol("layout-meta"),
    ar = Symbol("route"),
    Ze = () => {
        var e;
        return (e = be()) == null ? void 0 : e.$router
    },
    ei = () => Xl() ? ye(ar, be()._route) : be()._route;
const zp = () => {
        try {
            if (be()._processingMiddleware) return !0
        } catch {
            return !1
        }
        return !1
    },
    z0 = (e, t) => {
        e || (e = "/");
        const n = typeof e == "string" ? e : "path" in e ? Jp(e) : Ze().resolve(e).href;
        if (t != null && t.open) {
            const {
                target: l = "_blank",
                windowFeatures: f = {}
            } = t.open, c = Object.entries(f).filter(([u, d]) => d !== void 0).map(([u, d]) => `${u.toLowerCase()}=${d}`).join(", ");
            return open(n, l, c), Promise.resolve()
        }
        const r = rn(n, {
                acceptRelative: !0
            }),
            s = (t == null ? void 0 : t.external) || r;
        if (s) {
            if (!(t != null && t.external)) throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
            const {
                protocol: l
            } = new URL(n, window.location.href);
            if (l && zh(l)) throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)
        }
        const o = zp();
        if (!s && o) return e;
        const i = Ze(),
            a = be();
        return s ? (a._scope.stop(), t != null && t.replace ? location.replace(n) : location.href = n, o ? a.isHydrating ? new Promise(() => {}) : !1 : Promise.resolve()) : t != null && t.replace ? i.replace(e) : i.push(e)
    };

function Jp(e) {
    return Nc(e.path || "", e.query || {}) + (e.hash || "")
}
const eu = "__nuxt_error",
    fs = () => Mf(be().payload, "error"),
    dn = e => {
        const t = ds(e);
        try {
            const n = be(),
                r = fs();
            n.hooks.callHook("app:error", t), r.value = r.value || t
        } catch {
            throw t
        }
        return t
    },
    Zp = async (e = {}) => {
        const t = be(),
            n = fs();
        t.callHook("app:error:cleared", e), e.redirect && await Ze().replace(e.redirect), n.value = Mp
    },
    Qp = e => !!e && typeof e == "object" && eu in e,
    ds = e => {
        const t = co(e);
        return Object.defineProperty(t, eu, {
            value: !0,
            configurable: !1,
            writable: !1
        }), t
    };

function ta(e) {
    const t = eg(e),
        n = new ArrayBuffer(t.length),
        r = new DataView(n);
    for (let s = 0; s < n.byteLength; s++) r.setUint8(s, t.charCodeAt(s));
    return n
}
const Xp = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function eg(e) {
    e.length % 4 === 0 && (e = e.replace(/==?$/, ""));
    let t = "",
        n = 0,
        r = 0;
    for (let s = 0; s < e.length; s++) n <<= 6, n |= Xp.indexOf(e[s]), r += 6, r === 24 && (t += String.fromCharCode((n & 16711680) >> 16), t += String.fromCharCode((n & 65280) >> 8), t += String.fromCharCode(n & 255), n = r = 0);
    return r === 12 ? (n >>= 4, t += String.fromCharCode(n)) : r === 18 && (n >>= 2, t += String.fromCharCode((n & 65280) >> 8), t += String.fromCharCode(n & 255)), t
}
const tg = -1,
    ng = -2,
    rg = -3,
    sg = -4,
    og = -5,
    ig = -6;

function ag(e, t) {
    return lg(JSON.parse(e), t)
}

function lg(e, t) {
    if (typeof e == "number") return s(e, !0);
    if (!Array.isArray(e) || e.length === 0) throw new Error("Invalid input");
    const n = e,
        r = Array(n.length);

    function s(o, i = !1) {
        if (o === tg) return;
        if (o === rg) return NaN;
        if (o === sg) return 1 / 0;
        if (o === og) return -1 / 0;
        if (o === ig) return -0;
        if (i) throw new Error("Invalid input");
        if (o in r) return r[o];
        const a = n[o];
        if (!a || typeof a != "object") r[o] = a;
        else if (Array.isArray(a))
            if (typeof a[0] == "string") {
                const l = a[0],
                    f = t == null ? void 0 : t[l];
                if (f) return r[o] = f(s(a[1]));
                switch (l) {
                    case "Date":
                        r[o] = new Date(a[1]);
                        break;
                    case "Set":
                        const c = new Set;
                        r[o] = c;
                        for (let h = 1; h < a.length; h += 1) c.add(s(a[h]));
                        break;
                    case "Map":
                        const u = new Map;
                        r[o] = u;
                        for (let h = 1; h < a.length; h += 2) u.set(s(a[h]), s(a[h + 1]));
                        break;
                    case "RegExp":
                        r[o] = new RegExp(a[1], a[2]);
                        break;
                    case "Object":
                        r[o] = Object(a[1]);
                        break;
                    case "BigInt":
                        r[o] = BigInt(a[1]);
                        break;
                    case "null":
                        const d = Object.create(null);
                        r[o] = d;
                        for (let h = 1; h < a.length; h += 2) d[a[h]] = s(a[h + 1]);
                        break;
                    case "Int8Array":
                    case "Uint8Array":
                    case "Uint8ClampedArray":
                    case "Int16Array":
                    case "Uint16Array":
                    case "Int32Array":
                    case "Uint32Array":
                    case "Float32Array":
                    case "Float64Array":
                    case "BigInt64Array":
                    case "BigUint64Array":
                        {
                            const h = globalThis[l],
                                y = a[1],
                                v = ta(y),
                                T = new h(v);r[o] = T;
                            break
                        }
                    case "ArrayBuffer":
                        {
                            const h = a[1],
                                y = ta(h);r[o] = y;
                            break
                        }
                    default:
                        throw new Error(`Unknown type ${l}`)
                }
            } else {
                const l = new Array(a.length);
                r[o] = l;
                for (let f = 0; f < a.length; f += 1) {
                    const c = a[f];
                    c !== ng && (l[f] = s(c))
                }
            }
        else {
            const l = {};
            r[o] = l;
            for (const f in a) {
                const c = a[f];
                l[f] = s(c)
            }
        }
        return r[o]
    }
    return s(0)
}
const cg = new Set(["title", "titleTemplate", "script", "style", "noscript"]),
    kr = new Set(["base", "meta", "link", "style", "script", "noscript"]),
    ug = new Set(["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"]),
    fg = new Set(["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"]),
    tu = new Set(["tagPosition", "tagPriority", "tagDuplicateStrategy", "children", "innerHTML", "textContent", "processTemplateParams"]),
    dg = typeof window < "u";

function Yr(e) {
    let t = 9;
    for (let n = 0; n < e.length;) t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
    return ((t ^ t >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase()
}

function fo(e) {
    if (e._h) return e._h;
    if (e._d) return Yr(e._d);
    let t = `${e.tag}:${e.textContent||e.innerHTML||""}:`;
    for (const n in e.props) t += `${n}:${String(e.props[n])},`;
    return Yr(t)
}

function hg(e, t) {
    return e instanceof Promise ? e.then(t) : t(e)
}

function ho(e, t, n, r) {
    const s = r || ru(typeof t == "object" && typeof t != "function" && !(t instanceof Promise) ? { ...t
    } : {
        [e === "script" || e === "noscript" || e === "style" ? "innerHTML" : "textContent"]: t
    }, e === "templateParams" || e === "titleTemplate");
    if (s instanceof Promise) return s.then(i => ho(e, t, n, i));
    const o = {
        tag: e,
        props: s
    };
    for (const i of tu) {
        const a = o.props[i] !== void 0 ? o.props[i] : n[i];
        a !== void 0 && ((!(i === "innerHTML" || i === "textContent" || i === "children") || cg.has(o.tag)) && (o[i === "children" ? "innerHTML" : i] = a), delete o.props[i])
    }
    return o.props.body && (o.tagPosition = "bodyClose", delete o.props.body), o.tag === "script" && typeof o.innerHTML == "object" && (o.innerHTML = JSON.stringify(o.innerHTML), o.props.type = o.props.type || "application/json"), Array.isArray(o.props.content) ? o.props.content.map(i => ({ ...o,
        props: { ...o.props,
            content: i
        }
    })) : o
}

function pg(e, t) {
    var r;
    const n = e === "class" ? " " : ";";
    return t && typeof t == "object" && !Array.isArray(t) && (t = Object.entries(t).filter(([, s]) => s).map(([s, o]) => e === "style" ? `${s}:${o}` : s)), (r = String(Array.isArray(t) ? t.join(n) : t)) == null ? void 0 : r.split(n).filter(s => !!s.trim()).join(n)
}

function nu(e, t, n, r) {
    for (let s = r; s < n.length; s += 1) {
        const o = n[s];
        if (o === "class" || o === "style") {
            e[o] = pg(o, e[o]);
            continue
        }
        if (e[o] instanceof Promise) return e[o].then(i => (e[o] = i, nu(e, t, n, s)));
        if (!t && !tu.has(o)) {
            const i = String(e[o]),
                a = o.startsWith("data-");
            i === "true" || i === "" ? e[o] = a ? "true" : !0 : e[o] || (a && i === "false" ? e[o] = "false" : delete e[o])
        }
    }
}

function ru(e, t = !1) {
    const n = nu(e, t, Object.keys(e), 0);
    return n instanceof Promise ? n.then(() => e) : e
}
const gg = 10;

function su(e, t, n) {
    for (let r = n; r < t.length; r += 1) {
        const s = t[r];
        if (s instanceof Promise) return s.then(o => (t[r] = o, su(e, t, r)));
        Array.isArray(s) ? e.push(...s) : e.push(s)
    }
}

function mg(e) {
    const t = [],
        n = e.resolvedInput;
    for (const s in n) {
        if (!Object.prototype.hasOwnProperty.call(n, s)) continue;
        const o = n[s];
        if (!(o === void 0 || !ug.has(s))) {
            if (Array.isArray(o)) {
                for (const i of o) t.push(ho(s, i, e));
                continue
            }
            t.push(ho(s, o, e))
        }
    }
    if (t.length === 0) return [];
    const r = [];
    return hg(su(r, t, 0), () => r.map((s, o) => (s._e = e._i, e.mode && (s._m = e.mode), s._p = (e._i << gg) + o, s)))
}
const na = new Set(["onload", "onerror", "onabort", "onprogress", "onloadstart"]),
    ra = {
        base: -10,
        title: 10
    },
    sa = {
        critical: -80,
        high: -10,
        low: 20
    };

function zr(e) {
    const t = e.tagPriority;
    if (typeof t == "number") return t;
    let n = 100;
    return e.tag === "meta" ? e.props["http-equiv"] === "content-security-policy" ? n = -30 : e.props.charset ? n = -20 : e.props.name === "viewport" && (n = -15) : e.tag === "link" && e.props.rel === "preconnect" ? n = 20 : e.tag in ra && (n = ra[e.tag]), t && t in sa ? n + sa[t] : n
}
const yg = [{
        prefix: "before:",
        offset: -1
    }, {
        prefix: "after:",
        offset: 1
    }],
    vg = ["name", "property", "http-equiv"];

function ou(e) {
    const {
        props: t,
        tag: n
    } = e;
    if (fg.has(n)) return n;
    if (n === "link" && t.rel === "canonical") return "canonical";
    if (t.charset) return "charset";
    if (t.id) return `${n}:id:${t.id}`;
    for (const r of vg)
        if (t[r] !== void 0) return `${n}:${r}:${t[r]}`;
    return !1
}
const Mt = "%separator";

function bg(e, t) {
    var r;
    let n;
    if (t === "s" || t === "pageTitle") n = e.pageTitle;
    else if (t.includes(".")) {
        const s = t.indexOf(".");
        n = (r = e[t.substring(0, s)]) == null ? void 0 : r[t.substring(s + 1)]
    } else n = e[t];
    return n !== void 0 ? (n || "").replace(/"/g, '\\"') : void 0
}
const _g = new RegExp(`${Mt}(?:\\s*${Mt})*`, "g");

function vr(e, t, n) {
    if (typeof e != "string" || !e.includes("%")) return e;
    let r = e;
    try {
        r = decodeURI(e)
    } catch {}
    const s = r.match(/%\w+(?:\.\w+)?/g);
    if (!s) return e;
    const o = e.includes(Mt);
    return e = e.replace(/%\w+(?:\.\w+)?/g, i => {
        if (i === Mt || !s.includes(i)) return i;
        const a = bg(t, i.slice(1));
        return a !== void 0 ? a : i
    }).trim(), o && (e.endsWith(Mt) && (e = e.slice(0, -Mt.length)), e.startsWith(Mt) && (e = e.slice(Mt.length)), e = e.replace(_g, n).trim()), e
}

function oa(e, t) {
    return e == null ? t || null : typeof e == "function" ? e(t) : e
}
async function iu(e, t = {}) {
    const n = t.document || e.resolvedOptions.document;
    if (!n || !e.dirty) return;
    const r = {
        shouldRender: !0,
        tags: []
    };
    if (await e.hooks.callHook("dom:beforeRender", r), !!r.shouldRender) return e._domUpdatePromise || (e._domUpdatePromise = new Promise(async s => {
        var u;
        const o = (await e.resolveTags()).map(d => ({
            tag: d,
            id: kr.has(d.tag) ? fo(d) : d.tag,
            shouldRender: !0
        }));
        let i = e._dom;
        if (!i) {
            i = {
                elMap: {
                    htmlAttrs: n.documentElement,
                    bodyAttrs: n.body
                }
            };
            const d = new Set;
            for (const h of ["body", "head"]) {
                const y = (u = n[h]) == null ? void 0 : u.children;
                for (const v of y) {
                    const T = v.tagName.toLowerCase();
                    if (!kr.has(T)) continue;
                    const C = {
                            tag: T,
                            props: await ru(v.getAttributeNames().reduce((E, S) => ({ ...E,
                                [S]: v.getAttribute(S)
                            }), {})),
                            innerHTML: v.innerHTML
                        },
                        _ = ou(C);
                    let g = _,
                        b = 1;
                    for (; g && d.has(g);) g = `${_}:${b++}`;
                    g && (C._d = g, d.add(g)), i.elMap[v.getAttribute("data-hid") || fo(C)] = v
                }
            }
        }
        i.pendingSideEffects = { ...i.sideEffects
        }, i.sideEffects = {};

        function a(d, h, y) {
            const v = `${d}:${h}`;
            i.sideEffects[v] = y, delete i.pendingSideEffects[v]
        }

        function l({
            id: d,
            $el: h,
            tag: y
        }) {
            const v = y.tag.endsWith("Attrs");
            if (i.elMap[d] = h, v || (y.textContent && y.textContent !== h.textContent && (h.textContent = y.textContent), y.innerHTML && y.innerHTML !== h.innerHTML && (h.innerHTML = y.innerHTML), a(d, "el", () => {
                    var T;
                    (T = i.elMap[d]) == null || T.remove(), delete i.elMap[d]
                })), y._eventHandlers)
                for (const T in y._eventHandlers) Object.prototype.hasOwnProperty.call(y._eventHandlers, T) && h.getAttribute(`data-${T}`) !== "" && ((y.tag === "bodyAttrs" ? n.defaultView : h).addEventListener(T.substring(2), y._eventHandlers[T].bind(h)), h.setAttribute(`data-${T}`, ""));
            for (const T in y.props) {
                if (!Object.prototype.hasOwnProperty.call(y.props, T)) continue;
                const C = y.props[T],
                    _ = `attr:${T}`;
                if (T === "class") {
                    if (!C) continue;
                    for (const g of C.split(" ")) v && a(d, `${_}:${g}`, () => h.classList.remove(g)), !h.classList.contains(g) && h.classList.add(g)
                } else if (T === "style") {
                    if (!C) continue;
                    for (const g of C.split(";")) {
                        const b = g.indexOf(":"),
                            E = g.substring(0, b).trim(),
                            S = g.substring(b + 1).trim();
                        a(d, `${_}:${E}`, () => {
                            h.style.removeProperty(E)
                        }), h.style.setProperty(E, S)
                    }
                } else h.getAttribute(T) !== C && h.setAttribute(T, C === !0 ? "" : String(C)), v && a(d, _, () => h.removeAttribute(T))
            }
        }
        const f = [],
            c = {
                bodyClose: void 0,
                bodyOpen: void 0,
                head: void 0
            };
        for (const d of o) {
            const {
                tag: h,
                shouldRender: y,
                id: v
            } = d;
            if (y) {
                if (h.tag === "title") {
                    n.title = h.textContent;
                    continue
                }
                d.$el = d.$el || i.elMap[v], d.$el ? l(d) : kr.has(h.tag) && f.push(d)
            }
        }
        for (const d of f) {
            const h = d.tag.tagPosition || "head";
            d.$el = n.createElement(d.tag.tag), l(d), c[h] = c[h] || n.createDocumentFragment(), c[h].appendChild(d.$el)
        }
        for (const d of o) await e.hooks.callHook("dom:renderTag", d, n, a);
        c.head && n.head.appendChild(c.head), c.bodyOpen && n.body.insertBefore(c.bodyOpen, n.body.firstChild), c.bodyClose && n.body.appendChild(c.bodyClose);
        for (const d in i.pendingSideEffects) i.pendingSideEffects[d]();
        e._dom = i, await e.hooks.callHook("dom:rendered", {
            renders: o
        }), s()
    }).finally(() => {
        e._domUpdatePromise = void 0, e.dirty = !1
    })), e._domUpdatePromise
}

function wg(e, t = {}) {
    const n = t.delayFn || (r => setTimeout(r, 10));
    return e._domDebouncedUpdatePromise = e._domDebouncedUpdatePromise || new Promise(r => n(() => iu(e, t).then(() => {
        delete e._domDebouncedUpdatePromise, r()
    })))
}

function Eg(e) {
    return t => {
        var r, s;
        const n = ((s = (r = t.resolvedOptions.document) == null ? void 0 : r.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : s.innerHTML) || !1;
        return n && t.push(JSON.parse(n)), {
            mode: "client",
            hooks: {
                "entries:updated": o => {
                    wg(o, e)
                }
            }
        }
    }
}
const Tg = new Set(["templateParams", "htmlAttrs", "bodyAttrs"]),
    Cg = {
        hooks: {
            "tag:normalise": ({
                tag: e
            }) => {
                e.props.hid && (e.key = e.props.hid, delete e.props.hid), e.props.vmid && (e.key = e.props.vmid, delete e.props.vmid), e.props.key && (e.key = e.props.key, delete e.props.key);
                const t = ou(e);
                t && !t.startsWith("meta:og:") && !t.startsWith("meta:twitter:") && delete e.key;
                const n = t || (e.key ? `${e.tag}:${e.key}` : !1);
                n && (e._d = n)
            },
            "tags:resolve": e => {
                const t = Object.create(null);
                for (const r of e.tags) {
                    const s = (r.key ? `${r.tag}:${r.key}` : r._d) || fo(r),
                        o = t[s];
                    if (o) {
                        let a = r == null ? void 0 : r.tagDuplicateStrategy;
                        if (!a && Tg.has(r.tag) && (a = "merge"), a === "merge") {
                            const l = o.props;
                            l.style && r.props.style && (l.style[l.style.length - 1] !== ";" && (l.style += ";"), r.props.style = `${l.style} ${r.props.style}`), l.class && r.props.class ? r.props.class = `${l.class} ${r.props.class}` : l.class && (r.props.class = l.class), t[s].props = { ...l,
                                ...r.props
                            };
                            continue
                        } else if (r._e === o._e) {
                            o._duped = o._duped || [], r._d = `${o._d}:${o._duped.length+1}`, o._duped.push(r);
                            continue
                        } else if (zr(r) > zr(o)) continue
                    }
                    if (!(r.innerHTML || r.textContent || Object.keys(r.props).length !== 0) && kr.has(r.tag)) {
                        delete t[s];
                        continue
                    }
                    t[s] = r
                }
                const n = [];
                for (const r in t) {
                    const s = t[r],
                        o = s._duped;
                    n.push(s), o && (delete s._duped, n.push(...o))
                }
                e.tags = n, e.tags = e.tags.filter(r => !(r.tag === "meta" && (r.props.name || r.props.property) && !r.props.content))
            }
        }
    },
    Sg = new Set(["script", "link", "bodyAttrs"]),
    kg = e => ({
        hooks: {
            "tags:resolve": t => {
                for (const n of t.tags) {
                    if (!Sg.has(n.tag)) continue;
                    const r = n.props;
                    for (const s in r) {
                        if (s[0] !== "o" || s[1] !== "n" || !Object.prototype.hasOwnProperty.call(r, s)) continue;
                        const o = r[s];
                        typeof o == "function" && (e.ssr && na.has(s) ? r[s] = `this.dataset.${s}fired = true` : delete r[s], n._eventHandlers = n._eventHandlers || {}, n._eventHandlers[s] = o)
                    }
                    e.ssr && n._eventHandlers && (n.props.src || n.props.href) && (n.key = n.key || Yr(n.props.src || n.props.href))
                }
            },
            "dom:renderTag": ({
                $el: t,
                tag: n
            }) => {
                var s, o;
                const r = t == null ? void 0 : t.dataset;
                if (r)
                    for (const i in r) {
                        if (!i.endsWith("fired")) continue;
                        const a = i.slice(0, -5);
                        na.has(a) && ((o = (s = n._eventHandlers) == null ? void 0 : s[a]) == null || o.call(t, new Event(a.substring(2))))
                    }
            }
        }
    }),
    Rg = new Set(["link", "style", "script", "noscript"]),
    xg = {
        hooks: {
            "tag:normalise": ({
                tag: e
            }) => {
                e.key && Rg.has(e.tag) && (e.props["data-hid"] = e._h = Yr(e.key))
            }
        }
    },
    Ag = {
        mode: "server",
        hooks: {
            "tags:beforeResolve": e => {
                const t = {};
                let n = !1;
                for (const r of e.tags) r._m !== "server" || r.tag !== "titleTemplate" && r.tag !== "templateParams" && r.tag !== "title" || (t[r.tag] = r.tag === "title" || r.tag === "titleTemplate" ? r.textContent : r.props, n = !0);
                n && e.tags.push({
                    tag: "script",
                    innerHTML: JSON.stringify(t),
                    props: {
                        id: "unhead:payload",
                        type: "application/json"
                    }
                })
            }
        }
    },
    Pg = {
        hooks: {
            "tags:resolve": e => {
                var t;
                for (const n of e.tags)
                    if (typeof n.tagPriority == "string")
                        for (const {
                                prefix: r,
                                offset: s
                            } of yg) {
                            if (!n.tagPriority.startsWith(r)) continue;
                            const o = n.tagPriority.substring(r.length),
                                i = (t = e.tags.find(a => a._d === o)) == null ? void 0 : t._p;
                            if (i !== void 0) {
                                n._p = i + s;
                                break
                            }
                        }
                e.tags.sort((n, r) => {
                    const s = zr(n),
                        o = zr(r);
                    return s < o ? -1 : s > o ? 1 : n._p - r._p
                })
            }
        }
    },
    Og = {
        meta: "content",
        link: "href",
        htmlAttrs: "lang"
    },
    Mg = ["innerHTML", "textContent"],
    Ig = e => ({
        hooks: {
            "tags:resolve": t => {
                var i;
                const {
                    tags: n
                } = t;
                let r;
                for (let a = 0; a < n.length; a += 1) n[a].tag === "templateParams" && (r = t.tags.splice(a, 1)[0].props, a -= 1);
                const s = r || {},
                    o = s.separator || "|";
                delete s.separator, s.pageTitle = vr(s.pageTitle || ((i = n.find(a => a.tag === "title")) == null ? void 0 : i.textContent) || "", s, o);
                for (const a of n) {
                    if (a.processTemplateParams === !1) continue;
                    const l = Og[a.tag];
                    if (l && typeof a.props[l] == "string") a.props[l] = vr(a.props[l], s, o);
                    else if (a.processTemplateParams || a.tag === "titleTemplate" || a.tag === "title")
                        for (const f of Mg) typeof a[f] == "string" && (a[f] = vr(a[f], s, o))
                }
                e._templateParams = s, e._separator = o
            },
            "tags:afterResolve": ({
                tags: t
            }) => {
                let n;
                for (let r = 0; r < t.length; r += 1) {
                    const s = t[r];
                    s.tag === "title" && s.processTemplateParams !== !1 && (n = s)
                }
                n != null && n.textContent && (n.textContent = vr(n.textContent, e._templateParams, e._separator))
            }
        }
    }),
    Dg = {
        hooks: {
            "tags:resolve": e => {
                const {
                    tags: t
                } = e;
                let n, r;
                for (let s = 0; s < t.length; s += 1) {
                    const o = t[s];
                    o.tag === "title" ? n = o : o.tag === "titleTemplate" && (r = o)
                }
                if (r && n) {
                    const s = oa(r.textContent, n.textContent);
                    s !== null ? n.textContent = s || n.textContent : e.tags.splice(e.tags.indexOf(n), 1)
                } else if (r) {
                    const s = oa(r.textContent);
                    s !== null && (r.textContent = s, r.tag = "title", r = void 0)
                }
                r && e.tags.splice(e.tags.indexOf(r), 1)
            }
        }
    },
    Hg = {
        hooks: {
            "tags:afterResolve": e => {
                for (const t of e.tags) typeof t.innerHTML == "string" && (t.innerHTML && (t.props.type === "application/ld+json" || t.props.type === "application/json") ? t.innerHTML = t.innerHTML.replace(/</g, "\\u003C") : t.innerHTML = t.innerHTML.replace(new RegExp(`</${t.tag}`, "g"), `<\\/${t.tag}`))
            }
        }
    };
let au;

function Lg(e = {}) {
    const t = $g(e);
    return t.use(Eg()), au = t
}

function ia(e, t) {
    return !e || e === "server" && t || e === "client" && !t
}

function $g(e = {}) {
    const t = Gc();
    t.addHooks(e.hooks || {}), e.document = e.document || (dg ? document : void 0);
    const n = !e.document,
        r = () => {
            a.dirty = !0, t.callHook("entries:updated", a)
        };
    let s = 0,
        o = [];
    const i = [],
        a = {
            plugins: i,
            dirty: !1,
            resolvedOptions: e,
            hooks: t,
            headEntries() {
                return o
            },
            use(l) {
                const f = typeof l == "function" ? l(a) : l;
                (!f.key || !i.some(c => c.key === f.key)) && (i.push(f), ia(f.mode, n) && t.addHooks(f.hooks || {}))
            },
            push(l, f) {
                f == null || delete f.head;
                const c = {
                    _i: s++,
                    input: l,
                    ...f
                };
                return ia(c.mode, n) && (o.push(c), r()), {
                    dispose() {
                        o = o.filter(u => u._i !== c._i), r()
                    },
                    patch(u) {
                        for (const d of o) d._i === c._i && (d.input = c.input = u);
                        r()
                    }
                }
            },
            async resolveTags() {
                const l = {
                    tags: [],
                    entries: [...o]
                };
                await t.callHook("entries:resolve", l);
                for (const f of l.entries) {
                    const c = f.resolvedInput || f.input;
                    if (f.resolvedInput = await (f.transform ? f.transform(c) : c), f.resolvedInput)
                        for (const u of await mg(f)) {
                            const d = {
                                tag: u,
                                entry: f,
                                resolvedOptions: a.resolvedOptions
                            };
                            await t.callHook("tag:normalise", d), l.tags.push(d.tag)
                        }
                }
                return await t.callHook("tags:beforeResolve", l), await t.callHook("tags:resolve", l), await t.callHook("tags:afterResolve", l), l.tags
            },
            ssr: n
        };
    return [Cg, Ag, kg, xg, Pg, Ig, Dg, Hg, ...(e == null ? void 0 : e.plugins) || []].forEach(l => a.use(l)), a.hooks.callHook("init", a), a
}

function Fg() {
    return au
}
const Ng = Sc[0] === "3";

function jg(e) {
    return typeof e == "function" ? e() : se(e)
}

function po(e) {
    if (e instanceof Promise || e instanceof Date || e instanceof RegExp) return e;
    const t = jg(e);
    if (!e || !t) return t;
    if (Array.isArray(t)) return t.map(n => po(n));
    if (typeof t == "object") {
        const n = {};
        for (const r in t)
            if (Object.prototype.hasOwnProperty.call(t, r)) {
                if (r === "titleTemplate" || r[0] === "o" && r[1] === "n") {
                    n[r] = se(t[r]);
                    continue
                }
                n[r] = po(t[r])
            }
        return n
    }
    return t
}
const Bg = {
        hooks: {
            "entries:resolve": e => {
                for (const t of e.entries) t.resolvedInput = po(t.input)
            }
        }
    },
    lu = "usehead";

function Ug(e) {
    return {
        install(n) {
            Ng && (n.config.globalProperties.$unhead = e, n.config.globalProperties.$head = e, n.provide(lu, e))
        }
    }.install
}

function Wg(e = {}) {
    e.domDelayFn = e.domDelayFn || (n => nn(() => setTimeout(() => n(), 0)));
    const t = Lg(e);
    return t.use(Bg), t.install = Ug(t), t
}
const go = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
    mo = "__unhead_injection_handler__";

function Vg(e) {
    go[mo] = e
}

function J0() {
    if (mo in go) return go[mo]();
    const e = ye(lu);
    return e || Fg()
}
let Rr, xr;

function Kg() {
    return Rr = $fetch(Xo(`builds/meta/${us().app.buildId}.json`), {
        responseType: "json"
    }), Rr.then(e => {
        xr = Up(e.matcher)
    }).catch(e => {
        console.error("[nuxt] Error fetching app manifest.", e)
    }), Rr
}

function hs() {
    return Rr || Kg()
}
async function ti(e) {
    if (await hs(), !xr) return console.error("[nuxt] Error creating app manifest matcher.", xr), {};
    try {
        return Zc({}, ...xr.matchAll(e).reverse())
    } catch (t) {
        return console.error("[nuxt] Error matching route rules.", t), {}
    }
}
async function aa(e, t = {}) {
    const n = await qg(e, t),
        r = be(),
        s = r._payloadCache = r._payloadCache || {};
    return n in s || (s[n] = uu(e).then(o => o ? cu(n).then(i => i || (delete s[n], null)) : (s[n] = null, null))), s[n]
}
const Gg = "_payload.json";
async function qg(e, t = {}) {
    const n = new URL(e, "http://localhost");
    if (n.host !== "localhost" || rn(n.pathname, {
            acceptRelative: !0
        })) throw new Error("Payload URL must not include hostname: " + e);
    const r = us(),
        s = t.hash || (t.fresh ? Date.now() : r.app.buildId),
        o = r.app.cdnURL,
        i = o && await uu(e) ? o : r.app.baseURL;
    return Qo(i, n.pathname, Gg + (s ? `?${s}` : ""))
}
async function cu(e) {
    const t = fetch(e).then(n => n.text().then(fu));
    try {
        return await t
    } catch (n) {
        console.warn("[nuxt] Cannot load payload ", e, n)
    }
    return null
}
async function uu(e = ei().path) {
    if (e = Zo(e), (await hs()).prerendered.includes(e)) return !0;
    const n = await ti(e);
    return !!n.prerender && !n.redirect
}
let Vt = null;
async function Yg() {
    var r;
    if (Vt) return Vt;
    const e = document.getElementById("__NUXT_DATA__");
    if (!e) return {};
    const t = await fu(e.textContent || ""),
        n = e.dataset.src ? await cu(e.dataset.src) : void 0;
    return Vt = { ...t,
        ...n,
        ...window.__NUXT__
    }, (r = Vt.config) != null && r.public && (Vt.config.public = Se(Vt.config.public)), Vt
}
async function fu(e) {
    return await ag(e, be()._payloadRevivers)
}

function zg(e, t) {
    be()._payloadRevivers[e] = t
}
const la = {
        NuxtError: e => ds(e),
        EmptyShallowRef: e => Ve(e === "_" ? void 0 : e === "0n" ? BigInt(0) : Wr(e)),
        EmptyRef: e => Te(e === "_" ? void 0 : e === "0n" ? BigInt(0) : Wr(e)),
        ShallowRef: e => Ve(e),
        ShallowReactive: e => _t(e),
        Ref: e => Te(e),
        Reactive: e => Se(e)
    },
    Jg = dt({
        name: "nuxt:revive-payload:client",
        order: -30,
        async setup(e) {
            let t, n;
            for (const r in la) zg(r, la[r]);
            Object.assign(e.payload, ([t, n] = _n(() => e.runWithContext(Yg)), t = await t, n(), t)), window.__NUXT__ = e.payload
        }
    }),
    Zg = [],
    Qg = dt({
        name: "nuxt:head",
        enforce: "pre",
        setup(e) {
            const t = Wg({
                plugins: Zg
            });
            Vg(() => be().vueApp._context.provides.usehead), e.vueApp.use(t); {
                let n = !0;
                const r = async () => {
                    n = !1, await iu(t)
                };
                t.hooks.hook("dom:beforeRender", s => {
                    s.shouldRender = !n
                }), e.hooks.hook("page:start", () => {
                    n = !0
                }), e.hooks.hook("page:finish", () => {
                    e.isHydrating || r()
                }), e.hooks.hook("app:error", r), e.hooks.hook("app:suspense:resolve", r)
            }
        }
    });
/*!
 * vue-router v4.4.5
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */
const un = typeof document < "u";

function du(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function Xg(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && du(e.default)
}
const ce = Object.assign;

function Ds(e, t) {
    const n = {};
    for (const r in t) {
        const s = t[r];
        n[r] = ot(s) ? s.map(e) : e(s)
    }
    return n
}
const Kn = () => {},
    ot = Array.isArray,
    hu = /#/g,
    em = /&/g,
    tm = /\//g,
    nm = /=/g,
    rm = /\?/g,
    pu = /\+/g,
    sm = /%5B/g,
    om = /%5D/g,
    gu = /%5E/g,
    im = /%60/g,
    mu = /%7B/g,
    am = /%7C/g,
    yu = /%7D/g,
    lm = /%20/g;

function ni(e) {
    return encodeURI("" + e).replace(am, "|").replace(sm, "[").replace(om, "]")
}

function cm(e) {
    return ni(e).replace(mu, "{").replace(yu, "}").replace(gu, "^")
}

function yo(e) {
    return ni(e).replace(pu, "%2B").replace(lm, "+").replace(hu, "%23").replace(em, "%26").replace(im, "`").replace(mu, "{").replace(yu, "}").replace(gu, "^")
}

function um(e) {
    return yo(e).replace(nm, "%3D")
}

function fm(e) {
    return ni(e).replace(hu, "%23").replace(rm, "%3F")
}

function dm(e) {
    return e == null ? "" : fm(e).replace(tm, "%2F")
}

function Xn(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}
const hm = /\/$/,
    pm = e => e.replace(hm, "");

function Hs(e, t, n = "/") {
    let r, s = {},
        o = "",
        i = "";
    const a = t.indexOf("#");
    let l = t.indexOf("?");
    return a < l && a >= 0 && (l = -1), l > -1 && (r = t.slice(0, l), o = t.slice(l + 1, a > -1 ? a : t.length), s = e(o)), a > -1 && (r = r || t.slice(0, a), i = t.slice(a, t.length)), r = vm(r ? ? t, n), {
        fullPath: r + (o && "?") + o + i,
        path: r,
        query: s,
        hash: Xn(i)
    }
}

function gm(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}

function ca(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function mm(e, t, n) {
    const r = t.matched.length - 1,
        s = n.matched.length - 1;
    return r > -1 && r === s && Sn(t.matched[r], n.matched[s]) && vu(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}

function Sn(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}

function vu(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e)
        if (!ym(e[n], t[n])) return !1;
    return !0
}

function ym(e, t) {
    return ot(e) ? ua(e, t) : ot(t) ? ua(t, e) : e === t
}

function ua(e, t) {
    return ot(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t
}

function vm(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"),
        r = e.split("/"),
        s = r[r.length - 1];
    (s === ".." || s === ".") && r.push("");
    let o = n.length - 1,
        i, a;
    for (i = 0; i < r.length; i++)
        if (a = r[i], a !== ".")
            if (a === "..") o > 1 && o--;
            else break;
    return n.slice(0, o).join("/") + "/" + r.slice(i).join("/")
}
const Xe = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
};
var er;
(function(e) {
    e.pop = "pop", e.push = "push"
})(er || (er = {}));
var Gn;
(function(e) {
    e.back = "back", e.forward = "forward", e.unknown = ""
})(Gn || (Gn = {}));

function bm(e) {
    if (!e)
        if (un) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), pm(e)
}
const _m = /^[^#]+#/;

function wm(e, t) {
    return e.replace(_m, "#") + t
}

function Em(e, t) {
    const n = document.documentElement.getBoundingClientRect(),
        r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const ps = () => ({
    left: window.scrollX,
    top: window.scrollY
});

function Tm(e) {
    let t;
    if ("el" in e) {
        const n = e.el,
            r = typeof n == "string" && n.startsWith("#"),
            s = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!s) return;
        t = Em(s, e)
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY)
}

function fa(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const vo = new Map;

function Cm(e, t) {
    vo.set(e, t)
}

function Sm(e) {
    const t = vo.get(e);
    return vo.delete(e), t
}
let km = () => location.protocol + "//" + location.host;

function bu(e, t) {
    const {
        pathname: n,
        search: r,
        hash: s
    } = t, o = e.indexOf("#");
    if (o > -1) {
        let a = s.includes(e.slice(o)) ? e.slice(o).length : 1,
            l = s.slice(a);
        return l[0] !== "/" && (l = "/" + l), ca(l, "")
    }
    return ca(n, e) + r + s
}

function Rm(e, t, n, r) {
    let s = [],
        o = [],
        i = null;
    const a = ({
        state: d
    }) => {
        const h = bu(e, location),
            y = n.value,
            v = t.value;
        let T = 0;
        if (d) {
            if (n.value = h, t.value = d, i && i === y) {
                i = null;
                return
            }
            T = v ? d.position - v.position : 0
        } else r(h);
        s.forEach(C => {
            C(n.value, y, {
                delta: T,
                type: er.pop,
                direction: T ? T > 0 ? Gn.forward : Gn.back : Gn.unknown
            })
        })
    };

    function l() {
        i = n.value
    }

    function f(d) {
        s.push(d);
        const h = () => {
            const y = s.indexOf(d);
            y > -1 && s.splice(y, 1)
        };
        return o.push(h), h
    }

    function c() {
        const {
            history: d
        } = window;
        d.state && d.replaceState(ce({}, d.state, {
            scroll: ps()
        }), "")
    }

    function u() {
        for (const d of o) d();
        o = [], window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", c)
    }
    return window.addEventListener("popstate", a), window.addEventListener("beforeunload", c, {
        passive: !0
    }), {
        pauseListeners: l,
        listen: f,
        destroy: u
    }
}

function da(e, t, n, r = !1, s = !1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: s ? ps() : null
    }
}

function xm(e) {
    const {
        history: t,
        location: n
    } = window, r = {
        value: bu(e, n)
    }, s = {
        value: t.state
    };
    s.value || o(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);

    function o(l, f, c) {
        const u = e.indexOf("#"),
            d = u > -1 ? (n.host && document.querySelector("base") ? e : e.slice(u)) + l : km() + e + l;
        try {
            t[c ? "replaceState" : "pushState"](f, "", d), s.value = f
        } catch (h) {
            console.error(h), n[c ? "replace" : "assign"](d)
        }
    }

    function i(l, f) {
        const c = ce({}, t.state, da(s.value.back, l, s.value.forward, !0), f, {
            position: s.value.position
        });
        o(l, c, !0), r.value = l
    }

    function a(l, f) {
        const c = ce({}, s.value, t.state, {
            forward: l,
            scroll: ps()
        });
        o(c.current, c, !0);
        const u = ce({}, da(r.value, l, null), {
            position: c.position + 1
        }, f);
        o(l, u, !1), r.value = l
    }
    return {
        location: r,
        state: s,
        push: a,
        replace: i
    }
}

function _u(e) {
    e = bm(e);
    const t = xm(e),
        n = Rm(e, t.state, t.location, t.replace);

    function r(o, i = !0) {
        i || n.pauseListeners(), history.go(o)
    }
    const s = ce({
        location: "",
        base: e,
        go: r,
        createHref: wm.bind(null, e)
    }, t, n);
    return Object.defineProperty(s, "location", {
        enumerable: !0,
        get: () => t.location.value
    }), Object.defineProperty(s, "state", {
        enumerable: !0,
        get: () => t.state.value
    }), s
}

function Am(e) {
    return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), _u(e)
}

function Pm(e) {
    return typeof e == "string" || e && typeof e == "object"
}

function wu(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const Eu = Symbol("");
var ha;
(function(e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
})(ha || (ha = {}));

function kn(e, t) {
    return ce(new Error, {
        type: e,
        [Eu]: !0
    }, t)
}

function pt(e, t) {
    return e instanceof Error && Eu in e && (t == null || !!(e.type & t))
}
const pa = "[^/]+?",
    Om = {
        sensitive: !1,
        strict: !1,
        start: !0,
        end: !0
    },
    Mm = /[.+*?^${}()[\]/\\]/g;

function Im(e, t) {
    const n = ce({}, Om, t),
        r = [];
    let s = n.start ? "^" : "";
    const o = [];
    for (const f of e) {
        const c = f.length ? [] : [90];
        n.strict && !f.length && (s += "/");
        for (let u = 0; u < f.length; u++) {
            const d = f[u];
            let h = 40 + (n.sensitive ? .25 : 0);
            if (d.type === 0) u || (s += "/"), s += d.value.replace(Mm, "\\$&"), h += 40;
            else if (d.type === 1) {
                const {
                    value: y,
                    repeatable: v,
                    optional: T,
                    regexp: C
                } = d;
                o.push({
                    name: y,
                    repeatable: v,
                    optional: T
                });
                const _ = C || pa;
                if (_ !== pa) {
                    h += 10;
                    try {
                        new RegExp(`(${_})`)
                    } catch (b) {
                        throw new Error(`Invalid custom RegExp for param "${y}" (${_}): ` + b.message)
                    }
                }
                let g = v ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
                u || (g = T && f.length < 2 ? `(?:/${g})` : "/" + g), T && (g += "?"), s += g, h += 20, T && (h += -8), v && (h += -20), _ === ".*" && (h += -50)
            }
            c.push(h)
        }
        r.push(c)
    }
    if (n.strict && n.end) {
        const f = r.length - 1;
        r[f][r[f].length - 1] += .7000000000000001
    }
    n.strict || (s += "/?"), n.end ? s += "$" : n.strict && (s += "(?:/|$)");
    const i = new RegExp(s, n.sensitive ? "" : "i");

    function a(f) {
        const c = f.match(i),
            u = {};
        if (!c) return null;
        for (let d = 1; d < c.length; d++) {
            const h = c[d] || "",
                y = o[d - 1];
            u[y.name] = h && y.repeatable ? h.split("/") : h
        }
        return u
    }

    function l(f) {
        let c = "",
            u = !1;
        for (const d of e) {
            (!u || !c.endsWith("/")) && (c += "/"), u = !1;
            for (const h of d)
                if (h.type === 0) c += h.value;
                else if (h.type === 1) {
                const {
                    value: y,
                    repeatable: v,
                    optional: T
                } = h, C = y in f ? f[y] : "";
                if (ot(C) && !v) throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);
                const _ = ot(C) ? C.join("/") : C;
                if (!_)
                    if (T) d.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : u = !0);
                    else throw new Error(`Missing required param "${y}"`);
                c += _
            }
        }
        return c || "/"
    }
    return {
        re: i,
        score: r,
        keys: o,
        parse: a,
        stringify: l
    }
}

function Dm(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length;) {
        const r = t[n] - e[n];
        if (r) return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0
}

function Tu(e, t) {
    let n = 0;
    const r = e.score,
        s = t.score;
    for (; n < r.length && n < s.length;) {
        const o = Dm(r[n], s[n]);
        if (o) return o;
        n++
    }
    if (Math.abs(s.length - r.length) === 1) {
        if (ga(r)) return 1;
        if (ga(s)) return -1
    }
    return s.length - r.length
}

function ga(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const Hm = {
        type: 0,
        value: ""
    },
    Lm = /[a-zA-Z0-9_]/;

function $m(e) {
    if (!e) return [
        []
    ];
    if (e === "/") return [
        [Hm]
    ];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

    function t(h) {
        throw new Error(`ERR (${n})/"${f}": ${h}`)
    }
    let n = 0,
        r = n;
    const s = [];
    let o;

    function i() {
        o && s.push(o), o = []
    }
    let a = 0,
        l, f = "",
        c = "";

    function u() {
        f && (n === 0 ? o.push({
            type: 0,
            value: f
        }) : n === 1 || n === 2 || n === 3 ? (o.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`), o.push({
            type: 1,
            value: f,
            regexp: c,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?"
        })) : t("Invalid state to consume buffer"), f = "")
    }

    function d() {
        f += l
    }
    for (; a < e.length;) {
        if (l = e[a++], l === "\\" && n !== 2) {
            r = n, n = 4;
            continue
        }
        switch (n) {
            case 0:
                l === "/" ? (f && u(), i()) : l === ":" ? (u(), n = 1) : d();
                break;
            case 4:
                d(), n = r;
                break;
            case 1:
                l === "(" ? n = 2 : Lm.test(l) ? d() : (u(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--);
                break;
            case 2:
                l === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + l : n = 3 : c += l;
                break;
            case 3:
                u(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--, c = "";
                break;
            default:
                t("Unknown state");
                break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${f}"`), u(), i(), s
}

function Fm(e, t, n) {
    const r = Im($m(e.path), n),
        s = ce(r, {
            record: e,
            parent: t,
            children: [],
            alias: []
        });
    return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s
}

function Nm(e, t) {
    const n = [],
        r = new Map;
    t = ba({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);

    function s(u) {
        return r.get(u)
    }

    function o(u, d, h) {
        const y = !h,
            v = ya(u);
        v.aliasOf = h && h.record;
        const T = ba(t, u),
            C = [v];
        if ("alias" in u) {
            const b = typeof u.alias == "string" ? [u.alias] : u.alias;
            for (const E of b) C.push(ya(ce({}, v, {
                components: h ? h.record.components : v.components,
                path: E,
                aliasOf: h ? h.record : v
            })))
        }
        let _, g;
        for (const b of C) {
            const {
                path: E
            } = b;
            if (d && E[0] !== "/") {
                const S = d.record.path,
                    A = S[S.length - 1] === "/" ? "" : "/";
                b.path = d.record.path + (E && A + E)
            }
            if (_ = Fm(b, d, T), h ? h.alias.push(_) : (g = g || _, g !== _ && g.alias.push(_), y && u.name && !va(_) && i(u.name)), Cu(_) && l(_), v.children) {
                const S = v.children;
                for (let A = 0; A < S.length; A++) o(S[A], _, h && h.children[A])
            }
            h = h || _
        }
        return g ? () => {
            i(g)
        } : Kn
    }

    function i(u) {
        if (wu(u)) {
            const d = r.get(u);
            d && (r.delete(u), n.splice(n.indexOf(d), 1), d.children.forEach(i), d.alias.forEach(i))
        } else {
            const d = n.indexOf(u);
            d > -1 && (n.splice(d, 1), u.record.name && r.delete(u.record.name), u.children.forEach(i), u.alias.forEach(i))
        }
    }

    function a() {
        return n
    }

    function l(u) {
        const d = Um(u, n);
        n.splice(d, 0, u), u.record.name && !va(u) && r.set(u.record.name, u)
    }

    function f(u, d) {
        let h, y = {},
            v, T;
        if ("name" in u && u.name) {
            if (h = r.get(u.name), !h) throw kn(1, {
                location: u
            });
            T = h.record.name, y = ce(ma(d.params, h.keys.filter(g => !g.optional).concat(h.parent ? h.parent.keys.filter(g => g.optional) : []).map(g => g.name)), u.params && ma(u.params, h.keys.map(g => g.name))), v = h.stringify(y)
        } else if (u.path != null) v = u.path, h = n.find(g => g.re.test(v)), h && (y = h.parse(v), T = h.record.name);
        else {
            if (h = d.name ? r.get(d.name) : n.find(g => g.re.test(d.path)), !h) throw kn(1, {
                location: u,
                currentLocation: d
            });
            T = h.record.name, y = ce({}, d.params, u.params), v = h.stringify(y)
        }
        const C = [];
        let _ = h;
        for (; _;) C.unshift(_.record), _ = _.parent;
        return {
            name: T,
            path: v,
            params: y,
            matched: C,
            meta: Bm(C)
        }
    }
    e.forEach(u => o(u));

    function c() {
        n.length = 0, r.clear()
    }
    return {
        addRoute: o,
        resolve: f,
        removeRoute: i,
        clearRoutes: c,
        getRoutes: a,
        getRecordMatcher: s
    }
}

function ma(e, t) {
    const n = {};
    for (const r of t) r in e && (n[r] = e[r]);
    return n
}

function ya(e) {
    const t = {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: e.aliasOf,
        beforeEnter: e.beforeEnter,
        props: jm(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in e ? e.components || null : e.component && {
            default: e.component
        }
    };
    return Object.defineProperty(t, "mods", {
        value: {}
    }), t
}

function jm(e) {
    const t = {},
        n = e.props || !1;
    if ("component" in e) t.default = n;
    else
        for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
    return t
}

function va(e) {
    for (; e;) {
        if (e.record.aliasOf) return !0;
        e = e.parent
    }
    return !1
}

function Bm(e) {
    return e.reduce((t, n) => ce(t, n.meta), {})
}

function ba(e, t) {
    const n = {};
    for (const r in e) n[r] = r in t ? t[r] : e[r];
    return n
}

function Um(e, t) {
    let n = 0,
        r = t.length;
    for (; n !== r;) {
        const o = n + r >> 1;
        Tu(e, t[o]) < 0 ? r = o : n = o + 1
    }
    const s = Wm(e);
    return s && (r = t.lastIndexOf(s, r - 1)), r
}

function Wm(e) {
    let t = e;
    for (; t = t.parent;)
        if (Cu(t) && Tu(e, t) === 0) return t
}

function Cu({
    record: e
}) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect)
}

function Vm(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let s = 0; s < r.length; ++s) {
        const o = r[s].replace(pu, " "),
            i = o.indexOf("="),
            a = Xn(i < 0 ? o : o.slice(0, i)),
            l = i < 0 ? null : Xn(o.slice(i + 1));
        if (a in t) {
            let f = t[a];
            ot(f) || (f = t[a] = [f]), f.push(l)
        } else t[a] = l
    }
    return t
}

function _a(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = um(n), r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }(ot(r) ? r.map(o => o && yo(o)) : [r && yo(r)]).forEach(o => {
            o !== void 0 && (t += (t.length ? "&" : "") + n, o != null && (t += "=" + o))
        })
    }
    return t
}

function Km(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = ot(r) ? r.map(s => s == null ? null : "" + s) : r == null ? r : "" + r)
    }
    return t
}
const Gm = Symbol(""),
    wa = Symbol(""),
    ri = Symbol(""),
    si = Symbol(""),
    bo = Symbol("");

function Hn() {
    let e = [];

    function t(r) {
        return e.push(r), () => {
            const s = e.indexOf(r);
            s > -1 && e.splice(s, 1)
        }
    }

    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e.slice(),
        reset: n
    }
}

function It(e, t, n, r, s, o = i => i()) {
    const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
    return () => new Promise((a, l) => {
        const f = d => {
                d === !1 ? l(kn(4, {
                    from: n,
                    to: t
                })) : d instanceof Error ? l(d) : Pm(d) ? l(kn(2, {
                    from: t,
                    to: d
                })) : (i && r.enterCallbacks[s] === i && typeof d == "function" && i.push(d), a())
            },
            c = o(() => e.call(r && r.instances[s], t, n, f));
        let u = Promise.resolve(c);
        e.length < 3 && (u = u.then(f)), u.catch(d => l(d))
    })
}

function Ls(e, t, n, r, s = o => o()) {
    const o = [];
    for (const i of e)
        for (const a in i.components) {
            let l = i.components[a];
            if (!(t !== "beforeRouteEnter" && !i.instances[a]))
                if (du(l)) {
                    const c = (l.__vccOpts || l)[t];
                    c && o.push(It(c, n, r, i, a, s))
                } else {
                    let f = l();
                    o.push(() => f.then(c => {
                        if (!c) throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
                        const u = Xg(c) ? c.default : c;
                        i.mods[a] = c, i.components[a] = u;
                        const h = (u.__vccOpts || u)[t];
                        return h && It(h, n, r, i, a, s)()
                    }))
                }
        }
    return o
}

function Ea(e) {
    const t = ye(ri),
        n = ye(si),
        r = X(() => {
            const l = se(e.to);
            return t.resolve(l)
        }),
        s = X(() => {
            const {
                matched: l
            } = r.value, {
                length: f
            } = l, c = l[f - 1], u = n.matched;
            if (!c || !u.length) return -1;
            const d = u.findIndex(Sn.bind(null, c));
            if (d > -1) return d;
            const h = Ta(l[f - 2]);
            return f > 1 && Ta(c) === h && u[u.length - 1].path !== h ? u.findIndex(Sn.bind(null, l[f - 2])) : d
        }),
        o = X(() => s.value > -1 && Jm(n.params, r.value.params)),
        i = X(() => s.value > -1 && s.value === n.matched.length - 1 && vu(n.params, r.value.params));

    function a(l = {}) {
        return zm(l) ? t[se(e.replace) ? "replace" : "push"](se(e.to)).catch(Kn) : Promise.resolve()
    }
    return {
        route: r,
        href: X(() => r.value.href),
        isActive: o,
        isExactActive: i,
        navigate: a
    }
}
const qm = Tt({
        name: "RouterLink",
        compatConfig: {
            MODE: 3
        },
        props: {
            to: {
                type: [String, Object],
                required: !0
            },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: {
                type: String,
                default: "page"
            }
        },
        useLink: Ea,
        setup(e, {
            slots: t
        }) {
            const n = Se(Ea(e)),
                {
                    options: r
                } = ye(ri),
                s = X(() => ({
                    [Ca(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
                    [Ca(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
                }));
            return () => {
                const o = t.default && t.default(n);
                return e.custom ? o : He("a", {
                    "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                    href: n.href,
                    onClick: n.navigate,
                    class: s.value
                }, o)
            }
        }
    }),
    Ym = qm;

function zm(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t)) return
        }
        return e.preventDefault && e.preventDefault(), !0
    }
}

function Jm(e, t) {
    for (const n in t) {
        const r = t[n],
            s = e[n];
        if (typeof r == "string") {
            if (r !== s) return !1
        } else if (!ot(s) || s.length !== r.length || r.some((o, i) => o !== s[i])) return !1
    }
    return !0
}

function Ta(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const Ca = (e, t, n) => e ? ? t ? ? n,
    Zm = Tt({
        name: "RouterView",
        inheritAttrs: !1,
        props: {
            name: {
                type: String,
                default: "default"
            },
            route: Object
        },
        compatConfig: {
            MODE: 3
        },
        setup(e, {
            attrs: t,
            slots: n
        }) {
            const r = ye(bo),
                s = X(() => e.route || r.value),
                o = ye(wa, 0),
                i = X(() => {
                    let f = se(o);
                    const {
                        matched: c
                    } = s.value;
                    let u;
                    for (;
                        (u = c[f]) && !u.components;) f++;
                    return f
                }),
                a = X(() => s.value.matched[i.value]);
            rt(wa, X(() => i.value + 1)), rt(Gm, a), rt(bo, s);
            const l = Te();
            return Ke(() => [l.value, a.value, e.name], ([f, c, u], [d, h, y]) => {
                c && (c.instances[u] = f, h && h !== c && f && f === d && (c.leaveGuards.size || (c.leaveGuards = h.leaveGuards), c.updateGuards.size || (c.updateGuards = h.updateGuards))), f && c && (!h || !Sn(c, h) || !d) && (c.enterCallbacks[u] || []).forEach(v => v(f))
            }, {
                flush: "post"
            }), () => {
                const f = s.value,
                    c = e.name,
                    u = a.value,
                    d = u && u.components[c];
                if (!d) return Sa(n.default, {
                    Component: d,
                    route: f
                });
                const h = u.props[c],
                    y = h ? h === !0 ? f.params : typeof h == "function" ? h(f) : h : null,
                    T = He(d, ce({}, y, t, {
                        onVnodeUnmounted: C => {
                            C.component.isUnmounted && (u.instances[c] = null)
                        },
                        ref: l
                    }));
                return Sa(n.default, {
                    Component: T,
                    route: f
                }) || T
            }
        }
    });

function Sa(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const Su = Zm;

function Qm(e) {
    const t = Nm(e.routes, e),
        n = e.parseQuery || Vm,
        r = e.stringifyQuery || _a,
        s = e.history,
        o = Hn(),
        i = Hn(),
        a = Hn(),
        l = Ve(Xe);
    let f = Xe;
    un && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const c = Ds.bind(null, R => "" + R),
        u = Ds.bind(null, dm),
        d = Ds.bind(null, Xn);

    function h(R, F) {
        let N, G;
        return wu(R) ? (N = t.getRecordMatcher(R), G = F) : G = R, t.addRoute(G, N)
    }

    function y(R) {
        const F = t.getRecordMatcher(R);
        F && t.removeRoute(F)
    }

    function v() {
        return t.getRoutes().map(R => R.record)
    }

    function T(R) {
        return !!t.getRecordMatcher(R)
    }

    function C(R, F) {
        if (F = ce({}, F || l.value), typeof R == "string") {
            const m = Hs(n, R, F.path),
                w = t.resolve({
                    path: m.path
                }, F),
                P = s.createHref(m.fullPath);
            return ce(m, w, {
                params: d(w.params),
                hash: Xn(m.hash),
                redirectedFrom: void 0,
                href: P
            })
        }
        let N;
        if (R.path != null) N = ce({}, R, {
            path: Hs(n, R.path, F.path).path
        });
        else {
            const m = ce({}, R.params);
            for (const w in m) m[w] == null && delete m[w];
            N = ce({}, R, {
                params: u(m)
            }), F.params = u(F.params)
        }
        const G = t.resolve(N, F),
            ie = R.hash || "";
        G.params = c(d(G.params));
        const pe = gm(r, ce({}, R, {
                hash: cm(ie),
                path: G.path
            })),
            p = s.createHref(pe);
        return ce({
            fullPath: pe,
            hash: ie,
            query: r === _a ? Km(R.query) : R.query || {}
        }, G, {
            redirectedFrom: void 0,
            href: p
        })
    }

    function _(R) {
        return typeof R == "string" ? Hs(n, R, l.value.path) : ce({}, R)
    }

    function g(R, F) {
        if (f !== R) return kn(8, {
            from: F,
            to: R
        })
    }

    function b(R) {
        return A(R)
    }

    function E(R) {
        return b(ce(_(R), {
            replace: !0
        }))
    }

    function S(R) {
        const F = R.matched[R.matched.length - 1];
        if (F && F.redirect) {
            const {
                redirect: N
            } = F;
            let G = typeof N == "function" ? N(R) : N;
            return typeof G == "string" && (G = G.includes("?") || G.includes("#") ? G = _(G) : {
                path: G
            }, G.params = {}), ce({
                query: R.query,
                hash: R.hash,
                params: G.path != null ? {} : R.params
            }, G)
        }
    }

    function A(R, F) {
        const N = f = C(R),
            G = l.value,
            ie = R.state,
            pe = R.force,
            p = R.replace === !0,
            m = S(N);
        if (m) return A(ce(_(m), {
            state: typeof m == "object" ? ce({}, ie, m.state) : ie,
            force: pe,
            replace: p
        }), F || N);
        const w = N;
        w.redirectedFrom = F;
        let P;
        return !pe && mm(r, G, N) && (P = kn(16, {
            to: w,
            from: G
        }), Ge(G, G, !0, !1)), (P ? Promise.resolve(P) : x(w, G)).catch(k => pt(k) ? pt(k, 2) ? k : it(k) : K(k, w, G)).then(k => {
            if (k) {
                if (pt(k, 2)) return A(ce({
                    replace: p
                }, _(k.to), {
                    state: typeof k.to == "object" ? ce({}, ie, k.to.state) : ie,
                    force: pe
                }), F || w)
            } else k = M(w, G, !0, p, ie);
            return U(w, G, k), k
        })
    }

    function H(R, F) {
        const N = g(R, F);
        return N ? Promise.reject(N) : Promise.resolve()
    }

    function O(R) {
        const F = St.values().next().value;
        return F && typeof F.runWithContext == "function" ? F.runWithContext(R) : R()
    }

    function x(R, F) {
        let N;
        const [G, ie, pe] = Xm(R, F);
        N = Ls(G.reverse(), "beforeRouteLeave", R, F);
        for (const m of G) m.leaveGuards.forEach(w => {
            N.push(It(w, R, F))
        });
        const p = H.bind(null, R, F);
        return N.push(p), Le(N).then(() => {
            N = [];
            for (const m of o.list()) N.push(It(m, R, F));
            return N.push(p), Le(N)
        }).then(() => {
            N = Ls(ie, "beforeRouteUpdate", R, F);
            for (const m of ie) m.updateGuards.forEach(w => {
                N.push(It(w, R, F))
            });
            return N.push(p), Le(N)
        }).then(() => {
            N = [];
            for (const m of pe)
                if (m.beforeEnter)
                    if (ot(m.beforeEnter))
                        for (const w of m.beforeEnter) N.push(It(w, R, F));
                    else N.push(It(m.beforeEnter, R, F));
            return N.push(p), Le(N)
        }).then(() => (R.matched.forEach(m => m.enterCallbacks = {}), N = Ls(pe, "beforeRouteEnter", R, F, O), N.push(p), Le(N))).then(() => {
            N = [];
            for (const m of i.list()) N.push(It(m, R, F));
            return N.push(p), Le(N)
        }).catch(m => pt(m, 8) ? m : Promise.reject(m))
    }

    function U(R, F, N) {
        a.list().forEach(G => O(() => G(R, F, N)))
    }

    function M(R, F, N, G, ie) {
        const pe = g(R, F);
        if (pe) return pe;
        const p = F === Xe,
            m = un ? history.state : {};
        N && (G || p ? s.replace(R.fullPath, ce({
            scroll: p && m && m.scroll
        }, ie)) : s.push(R.fullPath, ie)), l.value = R, Ge(R, F, N, p), it()
    }
    let W;

    function ee() {
        W || (W = s.listen((R, F, N) => {
            if (!kt.listening) return;
            const G = C(R),
                ie = S(G);
            if (ie) {
                A(ce(ie, {
                    replace: !0
                }), G).catch(Kn);
                return
            }
            f = G;
            const pe = l.value;
            un && Cm(fa(pe.fullPath, N.delta), ps()), x(G, pe).catch(p => pt(p, 12) ? p : pt(p, 2) ? (A(p.to, G).then(m => {
                pt(m, 20) && !N.delta && N.type === er.pop && s.go(-1, !1)
            }).catch(Kn), Promise.reject()) : (N.delta && s.go(-N.delta, !1), K(p, G, pe))).then(p => {
                p = p || M(G, pe, !1), p && (N.delta && !pt(p, 8) ? s.go(-N.delta, !1) : N.type === er.pop && pt(p, 20) && s.go(-1, !1)), U(G, pe, p)
            }).catch(Kn)
        }))
    }
    let oe = Hn(),
        V = Hn(),
        Z;

    function K(R, F, N) {
        it(R);
        const G = V.list();
        return G.length ? G.forEach(ie => ie(R, F, N)) : console.error(R), Promise.reject(R)
    }

    function ge() {
        return Z && l.value !== Xe ? Promise.resolve() : new Promise((R, F) => {
            oe.add([R, F])
        })
    }

    function it(R) {
        return Z || (Z = !R, ee(), oe.list().forEach(([F, N]) => R ? N(R) : F()), oe.reset()), R
    }

    function Ge(R, F, N, G) {
        const {
            scrollBehavior: ie
        } = e;
        if (!un || !ie) return Promise.resolve();
        const pe = !N && Sm(fa(R.fullPath, 0)) || (G || !N) && history.state && history.state.scroll || null;
        return nn().then(() => ie(R, F, pe)).then(p => p && Tm(p)).catch(p => K(p, R, F))
    }
    const _e = R => s.go(R);
    let at;
    const St = new Set,
        kt = {
            currentRoute: l,
            listening: !0,
            addRoute: h,
            removeRoute: y,
            clearRoutes: t.clearRoutes,
            hasRoute: T,
            getRoutes: v,
            resolve: C,
            options: e,
            push: b,
            replace: E,
            go: _e,
            back: () => _e(-1),
            forward: () => _e(1),
            beforeEach: o.add,
            beforeResolve: i.add,
            afterEach: a.add,
            onError: V.add,
            isReady: ge,
            install(R) {
                const F = this;
                R.component("RouterLink", Ym), R.component("RouterView", Su), R.config.globalProperties.$router = F, Object.defineProperty(R.config.globalProperties, "$route", {
                    enumerable: !0,
                    get: () => se(l)
                }), un && !at && l.value === Xe && (at = !0, b(s.location).catch(ie => {}));
                const N = {};
                for (const ie in Xe) Object.defineProperty(N, ie, {
                    get: () => l.value[ie],
                    enumerable: !0
                });
                R.provide(ri, F), R.provide(si, _t(N)), R.provide(bo, l);
                const G = R.unmount;
                St.add(R), R.unmount = function() {
                    St.delete(R), St.size < 1 && (f = Xe, W && W(), W = null, l.value = Xe, at = !1, Z = !1), G()
                }
            }
        };

    function Le(R) {
        return R.reduce((F, N) => F.then(() => O(N)), Promise.resolve())
    }
    return kt
}

function Xm(e, t) {
    const n = [],
        r = [],
        s = [],
        o = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < o; i++) {
        const a = t.matched[i];
        a && (e.matched.find(f => Sn(f, a)) ? r.push(a) : n.push(a));
        const l = e.matched[i];
        l && (t.matched.find(f => Sn(f, l)) || s.push(l))
    }
    return [n, r, s]
}

function ey(e) {
    return ye(si)
}
const ty = (e, t) => t.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n => {
        var r;
        return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
    }),
    _o = (e, t) => {
        const n = e.route.matched.find(s => {
                var o;
                return ((o = s.components) == null ? void 0 : o.default) === e.Component.type
            }),
            r = t ? ? (n == null ? void 0 : n.meta.key) ? ? (n && ty(e.route, n));
        return typeof r == "function" ? r(e.route) : r
    },
    ny = (e, t) => ({
        default: () => e ? He(Yf, e === !0 ? {} : e, t) : t
    });

function oi(e) {
    return Array.isArray(e) ? e : [e]
}
const ry = "modulepreload",
    sy = function(e, t) {
        return new URL(e, t).href
    },
    ka = {},
    hn = function(t, n, r) {
        let s = Promise.resolve();
        if (n && n.length > 0) {
            const i = document.getElementsByTagName("link"),
                a = document.querySelector("meta[property=csp-nonce]"),
                l = (a == null ? void 0 : a.nonce) || (a == null ? void 0 : a.getAttribute("nonce"));
            s = Promise.allSettled(n.map(f => {
                if (f = sy(f, r), f in ka) return;
                ka[f] = !0;
                const c = f.endsWith(".css"),
                    u = c ? '[rel="stylesheet"]' : "";
                if (!!r)
                    for (let y = i.length - 1; y >= 0; y--) {
                        const v = i[y];
                        if (v.href === f && (!c || v.rel === "stylesheet")) return
                    } else if (document.querySelector(`link[href="${f}"]${u}`)) return;
                const h = document.createElement("link");
                if (h.rel = c ? "stylesheet" : ry, c || (h.as = "script"), h.crossOrigin = "", h.href = f, l && h.setAttribute("nonce", l), document.head.appendChild(h), c) return new Promise((y, v) => {
                    h.addEventListener("load", y), h.addEventListener("error", () => v(new Error(`Unable to preload CSS for ${f}`)))
                })
            }))
        }

        function o(i) {
            const a = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (a.payload = i, window.dispatchEvent(a), !a.defaultPrevented) throw i
        }
        return s.then(i => {
            for (const a of i || []) a.status === "rejected" && o(a.reason);
            return t().catch(o)
        })
    },
    $s = [{
        name: "ar-id",
        path: "/ar/:id()",
        component: () => hn(() =>
            import ("./GMPzSvSR.js"), __vite__mapDeps([0, 1, 2]),
            import.meta.url)
    }, {
        name: "en-id",
        path: "/en/:id()",
        component: () => hn(() =>
            import ("./DvFcil3-.js"), __vite__mapDeps([3, 1, 2]),
            import.meta.url)
    }, {
        name: "fr-id",
        path: "/fr/:id()",
        component: () => hn(() =>
            import ("./Bejkl4PY.js"), __vite__mapDeps([4, 1, 2]),
            import.meta.url)
    }, {
        name: "index",
        path: "/",
        component: () => hn(() =>
            import ("./DjqnOkMY.js"), __vite__mapDeps([5, 1, 2]),
            import.meta.url)
    }],
    ku = (e, t, n) => (t = t === !0 ? {} : t, {
        default: () => {
            var r;
            return t ? He(e, t, n) : (r = n.default) == null ? void 0 : r.call(n)
        }
    });

function Ra(e) {
    const t = (e == null ? void 0 : e.meta.key) ? ? e.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n => {
        var r;
        return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
    });
    return typeof t == "function" ? t(e) : t
}

function oy(e, t) {
    return e === t || t === Xe ? !1 : Ra(e) !== Ra(t) ? !0 : !e.matched.every((r, s) => {
        var o, i;
        return r.components && r.components.default === ((i = (o = t.matched[s]) == null ? void 0 : o.components) == null ? void 0 : i.default)
    })
}
const iy = {
    scrollBehavior(e, t, n) {
        var f;
        const r = be(),
            s = ((f = Ze().options) == null ? void 0 : f.scrollBehaviorType) ? ? "auto";
        let o = n || void 0;
        const i = typeof e.meta.scrollToTop == "function" ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop;
        if (!o && t && e && i !== !1 && oy(e, t) && (o = {
                left: 0,
                top: 0
            }), e.path === t.path) return t.hash && !e.hash ? {
            left: 0,
            top: 0
        } : e.hash ? {
            el: e.hash,
            top: xa(e.hash),
            behavior: s
        } : !1;
        const a = c => !!(c.meta.pageTransition ? ? io),
            l = a(t) && a(e) ? "page:transition:finish" : "page:finish";
        return new Promise(c => {
            r.hooks.hookOnce(l, async () => {
                await new Promise(u => setTimeout(u, 0)), e.hash && (o = {
                    el: e.hash,
                    top: xa(e.hash),
                    behavior: s
                }), c(o)
            })
        })
    }
};

function xa(e) {
    try {
        const t = document.querySelector(e);
        if (t) return (Number.parseFloat(getComputedStyle(t).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0)
    } catch {}
    return 0
}
const ay = {
        hashMode: !1,
        scrollBehaviorType: "auto"
    },
    Ye = { ...ay,
        ...iy
    },
    ly = async e => {
        var l;
        let t, n;
        if (!((l = e.meta) != null && l.validate)) return;
        const r = be(),
            s = Ze(),
            o = ([t, n] = _n(() => Promise.resolve(e.meta.validate(e))), t = await t, n(), t);
        if (o === !0) return;
        const i = ds({
                statusCode: o && o.statusCode || 404,
                statusMessage: o && o.statusMessage || `Page Not Found: ${e.fullPath}`,
                data: {
                    path: e.fullPath
                }
            }),
            a = s.beforeResolve(f => {
                if (a(), f === e) {
                    const c = s.afterEach(async () => {
                        c(), await r.runWithContext(() => dn(i)), window == null || window.history.pushState({}, "", e.fullPath)
                    });
                    return !1
                }
            })
    },
    cy = async e => {
        let t, n;
        const r = ([t, n] = _n(() => ti(e.path)), t = await t, n(), t);
        if (r.redirect) return rn(r.redirect, {
            acceptRelative: !0
        }) ? (window.location.href = r.redirect, !1) : r.redirect
    },
    uy = [ly, cy],
    qn = {};

function fy(e, t, n) {
    const {
        pathname: r,
        search: s,
        hash: o
    } = t, i = e.indexOf("#");
    if (i > -1) {
        const f = o.includes(e.slice(i)) ? e.slice(i).length : 1;
        let c = o.slice(f);
        return c[0] !== "/" && (c = "/" + c), qi(c, "")
    }
    const a = qi(r, e),
        l = !n || Xh(a, n, {
            trailingSlash: !0
        }) ? a : n;
    return l + (l.includes("?") ? "" : s) + o
}
const dy = dt({
        name: "nuxt:router",
        enforce: "pre",
        async setup(e) {
            var T;
            let t, n, r = us().app.baseURL;
            Ye.hashMode && !r.includes("#") && (r += "#");
            const s = ((T = Ye.history) == null ? void 0 : T.call(Ye, r)) ? ? (Ye.hashMode ? Am(r) : _u(r)),
                o = Ye.routes ? ([t, n] = _n(() => Ye.routes($s)), t = await t, n(), t ? ? $s) : $s;
            let i;
            const a = Qm({ ...Ye,
                scrollBehavior: (C, _, g) => {
                    if (_ === Xe) {
                        i = g;
                        return
                    }
                    if (Ye.scrollBehavior) {
                        if (a.options.scrollBehavior = Ye.scrollBehavior, "scrollRestoration" in window.history) {
                            const b = a.beforeEach(() => {
                                b(), window.history.scrollRestoration = "manual"
                            })
                        }
                        return Ye.scrollBehavior(C, Xe, i || g)
                    }
                },
                history: s,
                routes: o
            });
            "scrollRestoration" in window.history && (window.history.scrollRestoration = "auto"), e.vueApp.use(a);
            const l = Ve(a.currentRoute.value);
            a.afterEach((C, _) => {
                l.value = _
            }), Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
                get: () => l.value
            });
            const f = fy(r, window.location, e.payload.path),
                c = Ve(a.currentRoute.value),
                u = () => {
                    c.value = a.currentRoute.value
                };
            e.hook("page:finish", u), a.afterEach((C, _) => {
                var g, b, E, S;
                ((b = (g = C.matched[0]) == null ? void 0 : g.components) == null ? void 0 : b.default) === ((S = (E = _.matched[0]) == null ? void 0 : E.components) == null ? void 0 : S.default) && u()
            });
            const d = {};
            for (const C in c.value) Object.defineProperty(d, C, {
                get: () => c.value[C],
                enumerable: !0
            });
            e._route = _t(d), e._middleware = e._middleware || {
                global: [],
                named: {}
            };
            const h = fs();
            a.afterEach(async (C, _, g) => {
                delete e._processingMiddleware, !e.isHydrating && h.value && await e.runWithContext(Zp), g && await e.callHook("page:loading:end"), C.matched.length === 0 && await e.runWithContext(() => dn(co({
                    statusCode: 404,
                    fatal: !1,
                    statusMessage: `Page not found: ${C.fullPath}`,
                    data: {
                        path: C.fullPath
                    }
                })))
            });
            try {
                [t, n] = _n(() => a.isReady()), await t, n()
            } catch (C) {
                [t, n] = _n(() => e.runWithContext(() => dn(C))), await t, n()
            }
            const y = f !== a.currentRoute.value.fullPath ? a.resolve(f) : a.currentRoute.value;
            u();
            const v = e.payload.state._layout;
            return a.beforeEach(async (C, _) => {
                var g;
                await e.callHook("page:loading:start"), C.meta = Se(C.meta), e.isHydrating && v && !Lt(C.meta.layout) && (C.meta.layout = v), e._processingMiddleware = !0; {
                    const b = new Set([...uy, ...e._middleware.global]);
                    for (const E of C.matched) {
                        const S = E.meta.middleware;
                        if (S)
                            for (const A of oi(S)) b.add(A)
                    } {
                        const E = await e.runWithContext(() => ti(C.path));
                        if (E.appMiddleware)
                            for (const S in E.appMiddleware) E.appMiddleware[S] ? b.add(S) : b.delete(S)
                    }
                    for (const E of b) {
                        const S = typeof E == "string" ? e._middleware.named[E] || await ((g = qn[E]) == null ? void 0 : g.call(qn).then(H => H.default || H)) : E;
                        if (!S) throw new Error(`Unknown route middleware: '${E}'.`);
                        const A = await e.runWithContext(() => S(C, _));
                        if (!e.payload.serverRendered && e.isHydrating && (A === !1 || A instanceof Error)) {
                            const H = A || co({
                                statusCode: 404,
                                statusMessage: `Page Not Found: ${f}`
                            });
                            return await e.runWithContext(() => dn(H)), !1
                        }
                        if (A !== !0 && (A || A === !1)) return A
                    }
                }
            }), a.onError(async () => {
                delete e._processingMiddleware, await e.callHook("page:loading:end")
            }), e.hooks.hookOnce("app:created", async () => {
                try {
                    "name" in y && (y.name = void 0), await a.replace({ ...y,
                        force: !0
                    }), a.options.scrollBehavior = Ye.scrollBehavior
                } catch (C) {
                    await e.runWithContext(() => dn(C))
                }
            }), {
                provide: {
                    router: a
                }
            }
        }
    }),
    Aa = globalThis.requestIdleCallback || (e => {
        const t = Date.now(),
            n = {
                didTimeout: !1,
                timeRemaining: () => Math.max(0, 50 - (Date.now() - t))
            };
        return setTimeout(() => {
            e(n)
        }, 1)
    }),
    Z0 = globalThis.cancelIdleCallback || (e => {
        clearTimeout(e)
    }),
    ii = e => {
        const t = be();
        t.isHydrating ? t.hooks.hookOnce("app:suspense:resolve", () => {
            Aa(() => e())
        }) : Aa(() => e())
    },
    hy = dt({
        name: "nuxt:payload",
        setup(e) {
            Ze().beforeResolve(async (t, n) => {
                if (t.path === n.path) return;
                const r = await aa(t.path);
                r && Object.assign(e.static.data, r.data)
            }), ii(() => {
                var t;
                e.hooks.hook("link:prefetch", async n => {
                    const {
                        hostname: r
                    } = new URL(n, window.location.href);
                    r === window.location.hostname && await aa(n)
                }), ((t = navigator.connection) == null ? void 0 : t.effectiveType) !== "slow-2g" && setTimeout(hs, 1e3)
            })
        }
    }),
    py = dt(() => {
        const e = Ze();
        ii(() => {
            e.beforeResolve(async () => {
                await new Promise(t => {
                    setTimeout(t, 100), requestAnimationFrame(() => {
                        setTimeout(t, 0)
                    })
                })
            })
        })
    }),
    gy = dt(e => {
        let t;
        async function n() {
            const r = await hs();
            t && clearTimeout(t), t = setTimeout(n, Qi);
            try {
                const s = await $fetch(Xo("builds/latest.json") + `?${Date.now()}`);
                s.id !== r.id && e.hooks.callHook("app:manifest:update", s)
            } catch {}
        }
        ii(() => {
            t = setTimeout(n, Qi)
        })
    });

function my(e = {}) {
    const t = e.path || window.location.pathname;
    let n = {};
    try {
        n = Wr(sessionStorage.getItem("nuxt:reload") || "{}")
    } catch {}
    if (e.force || (n == null ? void 0 : n.path) !== t || (n == null ? void 0 : n.expires) < Date.now()) {
        try {
            sessionStorage.setItem("nuxt:reload", JSON.stringify({
                path: t,
                expires: Date.now() + (e.ttl ? ? 1e4)
            }))
        } catch {}
        if (e.persistState) try {
            sessionStorage.setItem("nuxt:reload:state", JSON.stringify({
                state: be().payload.state
            }))
        } catch {}
        window.location.pathname !== t ? window.location.href = t : window.location.reload()
    }
}
const yy = dt({
        name: "nuxt:chunk-reload",
        setup(e) {
            const t = Ze(),
                n = us(),
                r = new Set;
            t.beforeEach(() => {
                r.clear()
            }), e.hook("app:chunkError", ({
                error: o
            }) => {
                r.add(o)
            });

            function s(o) {
                const a = "href" in o && o.href[0] === "#" ? n.app.baseURL + o.href : Qo(n.app.baseURL, o.fullPath);
                my({
                    path: a,
                    persistState: !0
                })
            }
            e.hook("app:manifest:update", () => {
                t.beforeResolve(s)
            }), t.onError((o, i) => {
                r.has(o) && s(i)
            })
        }
    }),
    vy = dt({
        name: "nuxt:global-components"
    }),
    Dt = {},
    by = dt({
        name: "nuxt:prefetch",
        setup(e) {
            const t = Ze();
            e.hooks.hook("app:mounted", () => {
                t.beforeEach(async n => {
                    var s;
                    const r = (s = n == null ? void 0 : n.meta) == null ? void 0 : s.layout;
                    r && typeof Dt[r] == "function" && await Dt[r]()
                })
            }), e.hooks.hook("link:prefetch", n => {
                if (rn(n)) return;
                const r = t.resolve(n);
                if (!r) return;
                const s = r.meta.layout;
                let o = oi(r.meta.middleware);
                o = o.filter(i => typeof i == "string");
                for (const i of o) typeof qn[i] == "function" && qn[i]();
                s && typeof Dt[s] == "function" && Dt[s]()
            })
        }
    });

function _y(e, t) {
    let n;

    function r() {
        n = yl(), n.run(() => t.length ? t(() => {
            n == null || n.stop(), r()
        }) : t())
    }
    Ke(e, s => {
        s && !n ? r() : s || (n == null || n.stop(), n = void 0)
    }, {
        immediate: !0
    }), af(() => {
        n == null || n.stop()
    })
}
const ze = typeof window < "u",
    Q0 = ze && "IntersectionObserver" in window,
    wy = ze && ("ontouchstart" in window || window.navigator.maxTouchPoints > 0);

function Ey(e, t, n) {
    const r = t.length - 1;
    if (r < 0) return e === void 0 ? n : e;
    for (let s = 0; s < r; s++) {
        if (e == null) return n;
        e = e[t[s]]
    }
    return e == null || e[t[r]] === void 0 ? n : e[t[r]]
}

function Ty(e, t) {
    if (e === t) return !0;
    if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t)) return !1;
    const n = Object.keys(e);
    return n.length !== Object.keys(t).length ? !1 : n.every(r => Ty(e[r], t[r]))
}

function Pa(e, t, n) {
    return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), Ey(e, t.split("."), n))
}

function Ru(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return Array.from({
        length: e
    }, (n, r) => t + r)
}

function br(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
    if (!(e == null || e === "")) return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0
}

function X0(e) {
    return e !== null && typeof e == "object" && !Array.isArray(e)
}

function Oa(e) {
    let t;
    return e !== null && typeof e == "object" && ((t = Object.getPrototypeOf(e)) === Object.prototype || t === null)
}

function Cy(e) {
    if (e && "$el" in e) {
        const t = e.$el;
        return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t
    }
    return e
}
const eb = Object.freeze({
    enter: 13,
    tab: 9,
    delete: 46,
    esc: 27,
    space: 32,
    up: 38,
    down: 40,
    left: 37,
    right: 39,
    end: 35,
    home: 36,
    del: 46,
    backspace: 8,
    insert: 45,
    pageup: 33,
    pagedown: 34,
    shift: 16
});

function Fs(e, t) {
    return t.every(n => e.hasOwnProperty(n))
}

function Sy(e, t) {
    const n = {},
        r = new Set(Object.keys(e));
    for (const s of t) r.has(s) && (n[s] = e[s]);
    return n
}

function Ma(e, t, n) {
    const r = Object.create(null),
        s = Object.create(null);
    for (const o in e) t.some(i => i instanceof RegExp ? i.test(o) : i === o) && !(n != null && n.some(i => i === o)) ? r[o] = e[o] : s[o] = e[o];
    return [r, s]
}

function ky(e, t) {
    const n = { ...e
    };
    return t.forEach(r => delete n[r]), n
}

function tb(e, t) {
    const n = {};
    return t.forEach(r => n[r] = e[r]), n
}
const xu = /^on[^a-z]/,
    nb = e => xu.test(e),
    Ry = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];

function rb(e) {
    const [t, n] = Ma(e, [xu]), r = ky(t, Ry), [s, o] = Ma(n, ["class", "style", "id", /^data-/]);
    return Object.assign(s, t), Object.assign(o, r), [s, o]
}

function sb(e) {
    return e == null ? [] : Array.isArray(e) ? e : [e]
}

function xy(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
        n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
    return Math.max(t, Math.min(n, e))
}

function Ia(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
    return e + n.repeat(Math.max(0, t - e.length))
}

function Da(e, t) {
    return (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length)) + e
}

function Ay(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    const n = [];
    let r = 0;
    for (; r < e.length;) n.push(e.substr(r, t)), r += t;
    return n
}

function We() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        n = arguments.length > 2 ? arguments[2] : void 0;
    const r = {};
    for (const s in e) r[s] = e[s];
    for (const s in t) {
        const o = e[s],
            i = t[s];
        if (Oa(o) && Oa(i)) {
            r[s] = We(o, i, n);
            continue
        }
        if (n && Array.isArray(o) && Array.isArray(i)) {
            r[s] = n(o, i);
            continue
        }
        r[s] = i
    }
    return r
}

function Py(e) {
    return e.map(t => t.type === Ie ? Py(t.children) : t).flat()
}

function Xt() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    if (Xt.cache.has(e)) return Xt.cache.get(e);
    const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
    return Xt.cache.set(e, t), t
}
Xt.cache = new Map;

function Fn(e, t) {
    if (!t || typeof t != "object") return [];
    if (Array.isArray(t)) return t.map(n => Fn(e, n)).flat(1);
    if (t.suspense) return Fn(e, t.ssContent);
    if (Array.isArray(t.children)) return t.children.map(n => Fn(e, n)).flat(1);
    if (t.component) {
        if (Object.getOwnPropertySymbols(t.component.provides).includes(e)) return [t.component];
        if (t.component.subTree) return Fn(e, t.component.subTree).flat(1)
    }
    return []
}

function ob(e) {
    const t = Se({}),
        n = X(e);
    return as(() => {
        for (const r in n.value) t[r] = n.value[r]
    }, {
        flush: "sync"
    }), Hl(t)
}

function ib(e, t) {
    return e.includes(t)
}
const ab = () => [Function, Array];

function lb(e, t) {
    return t = "on" + sr(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`])
}

function cb(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    if (Array.isArray(e))
        for (const s of e) s(...n);
    else typeof e == "function" && e(...n)
}

function Oy() {
    const e = Ve(),
        t = n => {
            e.value = n
        };
    return Object.defineProperty(t, "value", {
        enumerable: !0,
        get: () => e.value,
        set: n => e.value = n
    }), Object.defineProperty(t, "el", {
        enumerable: !0,
        get: () => Cy(e.value)
    }), t
}
const an = 2.4,
    Ha = .2126729,
    La = .7151522,
    $a = .072175,
    My = .55,
    Iy = .58,
    Dy = .57,
    Hy = .62,
    _r = .03,
    Fa = 1.45,
    Ly = 5e-4,
    $y = 1.25,
    Fy = 1.25,
    Na = .078,
    ja = 12.82051282051282,
    wr = .06,
    Ba = .001;

function Ua(e, t) {
    const n = (e.r / 255) ** an,
        r = (e.g / 255) ** an,
        s = (e.b / 255) ** an,
        o = (t.r / 255) ** an,
        i = (t.g / 255) ** an,
        a = (t.b / 255) ** an;
    let l = n * Ha + r * La + s * $a,
        f = o * Ha + i * La + a * $a;
    if (l <= _r && (l += (_r - l) ** Fa), f <= _r && (f += (_r - f) ** Fa), Math.abs(f - l) < Ly) return 0;
    let c;
    if (f > l) {
        const u = (f ** My - l ** Iy) * $y;
        c = u < Ba ? 0 : u < Na ? u - u * ja * wr : u - wr
    } else {
        const u = (f ** Hy - l ** Dy) * Fy;
        c = u > -Ba ? 0 : u > -Na ? u - u * ja * wr : u + wr
    }
    return c * 100
}
const Jr = .20689655172413793,
    Ny = e => e > Jr ** 3 ? Math.cbrt(e) : e / (3 * Jr ** 2) + 4 / 29,
    jy = e => e > Jr ? e ** 3 : 3 * Jr ** 2 * (e - 4 / 29);

function Au(e) {
    const t = Ny,
        n = t(e[1]);
    return [116 * n - 16, 500 * (t(e[0] / .95047) - n), 200 * (n - t(e[2] / 1.08883))]
}

function Pu(e) {
    const t = jy,
        n = (e[0] + 16) / 116;
    return [t(n + e[1] / 500) * .95047, t(n), t(n - e[2] / 200) * 1.08883]
}
const By = [
        [3.2406, -1.5372, -.4986],
        [-.9689, 1.8758, .0415],
        [.0557, -.204, 1.057]
    ],
    Uy = e => e <= .0031308 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - .055,
    Wy = [
        [.4124, .3576, .1805],
        [.2126, .7152, .0722],
        [.0193, .1192, .9505]
    ],
    Vy = e => e <= .04045 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4;

function Ou(e) {
    const t = Array(3),
        n = Uy,
        r = By;
    for (let s = 0; s < 3; ++s) t[s] = Math.round(xy(n(r[s][0] * e[0] + r[s][1] * e[1] + r[s][2] * e[2])) * 255);
    return {
        r: t[0],
        g: t[1],
        b: t[2]
    }
}

function ai(e) {
    let {
        r: t,
        g: n,
        b: r
    } = e;
    const s = [0, 0, 0],
        o = Vy,
        i = Wy;
    t = o(t / 255), n = o(n / 255), r = o(r / 255);
    for (let a = 0; a < 3; ++a) s[a] = i[a][0] * t + i[a][1] * n + i[a][2] * r;
    return s
}

function Ky(e) {
    return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e)
}

function ub(e) {
    return Ky(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e)
}
const Wa = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,
    Gy = {
        rgb: (e, t, n, r) => ({
            r: e,
            g: t,
            b: n,
            a: r
        }),
        rgba: (e, t, n, r) => ({
            r: e,
            g: t,
            b: n,
            a: r
        }),
        hsl: (e, t, n, r) => Va({
            h: e,
            s: t,
            l: n,
            a: r
        }),
        hsla: (e, t, n, r) => Va({
            h: e,
            s: t,
            l: n,
            a: r
        }),
        hsv: (e, t, n, r) => tr({
            h: e,
            s: t,
            v: n,
            a: r
        }),
        hsva: (e, t, n, r) => tr({
            h: e,
            s: t,
            v: n,
            a: r
        })
    };

function wt(e) {
    if (typeof e == "number") return {
        r: (e & 16711680) >> 16,
        g: (e & 65280) >> 8,
        b: e & 255
    };
    if (typeof e == "string" && Wa.test(e)) {
        const {
            groups: t
        } = e.match(Wa), {
            fn: n,
            values: r
        } = t, s = r.split(/,\s*/).map(o => o.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(o) / 100 : parseFloat(o));
        return Gy[n](...s)
    } else if (typeof e == "string") {
        let t = e.startsWith("#") ? e.slice(1) : e;
        return [3, 4].includes(t.length) ? t = t.split("").map(n => n + n).join("") : [6, 8].includes(t.length), Yy(t)
    } else if (typeof e == "object") {
        if (Fs(e, ["r", "g", "b"])) return e;
        if (Fs(e, ["h", "s", "l"])) return tr(Mu(e));
        if (Fs(e, ["h", "s", "v"])) return tr(e)
    }
    throw new TypeError(`Invalid color: ${e==null?e:String(e)||e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)
}

function tr(e) {
    const {
        h: t,
        s: n,
        v: r,
        a: s
    } = e, o = a => {
        const l = (a + t / 60) % 6;
        return r - r * n * Math.max(Math.min(l, 4 - l, 1), 0)
    }, i = [o(5), o(3), o(1)].map(a => Math.round(a * 255));
    return {
        r: i[0],
        g: i[1],
        b: i[2],
        a: s
    }
}

function Va(e) {
    return tr(Mu(e))
}

function Mu(e) {
    const {
        h: t,
        s: n,
        l: r,
        a: s
    } = e, o = r + n * Math.min(r, 1 - r), i = o === 0 ? 0 : 2 - 2 * r / o;
    return {
        h: t,
        s: i,
        v: o,
        a: s
    }
}

function Er(e) {
    const t = Math.round(e).toString(16);
    return ("00".substr(0, 2 - t.length) + t).toUpperCase()
}

function qy(e) {
    let {
        r: t,
        g: n,
        b: r,
        a: s
    } = e;
    return `#${[Er(t),Er(n),Er(r),s!==void 0?Er(Math.round(s*255)):""].join("")}`
}

function Yy(e) {
    e = zy(e);
    let [t, n, r, s] = Ay(e, 2).map(o => parseInt(o, 16));
    return s = s === void 0 ? s : s / 255, {
        r: t,
        g: n,
        b: r,
        a: s
    }
}

function zy(e) {
    return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map(t => t + t).join("")), e.length !== 6 && (e = Ia(Ia(e, 6), 8, "F")), e
}

function Jy(e, t) {
    const n = Au(ai(e));
    return n[0] = n[0] + t * 10, Ou(Pu(n))
}

function Zy(e, t) {
    const n = Au(ai(e));
    return n[0] = n[0] - t * 10, Ou(Pu(n))
}

function Qy(e) {
    const t = wt(e);
    return ai(t)[1]
}

function Xy(e) {
    const t = Math.abs(Ua(wt(0), wt(e)));
    return Math.abs(Ua(wt(16777215), wt(e))) > Math.min(t, 50) ? "#fff" : "#000"
}

function Pn(e, t) {
    return n => Object.keys(e).reduce((r, s) => {
        const i = typeof e[s] == "object" && e[s] != null && !Array.isArray(e[s]) ? e[s] : {
            type: e[s]
        };
        return n && s in n ? r[s] = { ...i,
            default: n[s]
        } : r[s] = i, t && !r[s].source && (r[s].source = t), r
    }, {})
}
const ev = Pn({
    class: [String, Array, Object],
    style: {
        type: [String, Array, Object],
        default: null
    }
}, "component");

function Bt(e, t) {
    const n = An();
    if (!n) throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);
    return n
}

function fb() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
    const t = Bt(e).type;
    return Xt((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name))
}
let Iu = 0,
    Ar = new WeakMap;

function Du() {
    const e = Bt("getUid");
    if (Ar.has(e)) return Ar.get(e); {
        const t = Iu++;
        return Ar.set(e, t), t
    }
}
Du.reset = () => {
    Iu = 0, Ar = new WeakMap
};

function tv(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Bt("injectSelf");
    const {
        provides: n
    } = t;
    if (n && e in n) return n[e]
}
const Rn = Symbol.for("vuetify:defaults");

function nv(e) {
    return Te(e)
}

function li() {
    const e = ye(Rn);
    if (!e) throw new Error("[Vuetify] Could not find defaults instance");
    return e
}

function db(e, t) {
    const n = li(),
        r = Te(e),
        s = X(() => {
            if (se(t == null ? void 0 : t.disabled)) return n.value;
            const i = se(t == null ? void 0 : t.scoped),
                a = se(t == null ? void 0 : t.reset),
                l = se(t == null ? void 0 : t.root);
            if (r.value == null && !(i || a || l)) return n.value;
            let f = We(r.value, {
                prev: n.value
            });
            if (i) return f;
            if (a || l) {
                const c = Number(a || 1 / 0);
                for (let u = 0; u <= c && !(!f || !("prev" in f)); u++) f = f.prev;
                return f && typeof l == "string" && l in f && (f = We(We(f, {
                    prev: f
                }), f[l])), f
            }
            return f.prev ? We(f.prev, f) : f
        });
    return rt(Rn, s), s
}

function rv(e, t) {
    var n, r;
    return typeof((n = e.props) == null ? void 0 : n[t]) < "u" || typeof((r = e.props) == null ? void 0 : r[Xt(t)]) < "u"
}

function sv() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        t = arguments.length > 1 ? arguments[1] : void 0,
        n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : li();
    const r = Bt("useDefaults");
    if (t = t ? ? r.type.name ? ? r.type.__name, !t) throw new Error("[Vuetify] Could not determine component name");
    const s = X(() => {
            var l;
            return (l = n.value) == null ? void 0 : l[e._as ? ? t]
        }),
        o = new Proxy(e, {
            get(l, f) {
                var u, d, h, y, v, T, C;
                const c = Reflect.get(l, f);
                return f === "class" || f === "style" ? [(u = s.value) == null ? void 0 : u[f], c].filter(_ => _ != null) : typeof f == "string" && !rv(r.vnode, f) ? ((d = s.value) == null ? void 0 : d[f]) !== void 0 ? (h = s.value) == null ? void 0 : h[f] : ((v = (y = n.value) == null ? void 0 : y.global) == null ? void 0 : v[f]) !== void 0 ? (C = (T = n.value) == null ? void 0 : T.global) == null ? void 0 : C[f] : c : c
            }
        }),
        i = Ve();
    as(() => {
        if (s.value) {
            const l = Object.entries(s.value).filter(f => {
                let [c] = f;
                return c.startsWith(c[0].toUpperCase())
            });
            i.value = l.length ? Object.fromEntries(l) : void 0
        } else i.value = void 0
    });

    function a() {
        const l = tv(Rn, r);
        rt(Rn, X(() => i.value ? We((l == null ? void 0 : l.value) ? ? {}, i.value) : l == null ? void 0 : l.value))
    }
    return {
        props: o,
        provideSubDefaults: a
    }
}

function lr(e) {
    if (e._setup = e._setup ? ? e.setup, !e.name) return e;
    if (e._setup) {
        e.props = Pn(e.props ? ? {}, e.name)();
        const t = Object.keys(e.props).filter(n => n !== "class" && n !== "style");
        e.filterProps = function(r) {
            return Sy(r, t)
        }, e.props._as = String, e.setup = function(r, s) {
            const o = li();
            if (!o.value) return e._setup(r, s);
            const {
                props: i,
                provideSubDefaults: a
            } = sv(r, r._as ? ? e.name, o), l = e._setup(i, s);
            return a(), l
        }
    }
    return e
}

function Hu() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    return t => (e ? lr : Tt)(t)
}

function ov(e) {
    const t = Bt("useRender");
    t.render = e
}

function iv(e, t, n) {
    let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : u => u,
        s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : u => u;
    const o = Bt("useProxiedModel"),
        i = Te(e[t] !== void 0 ? e[t] : n),
        a = Xt(t),
        f = X(a !== t ? () => {
            var u, d, h, y;
            return e[t], !!(((u = o.vnode.props) != null && u.hasOwnProperty(t) || (d = o.vnode.props) != null && d.hasOwnProperty(a)) && ((h = o.vnode.props) != null && h.hasOwnProperty(`onUpdate:${t}`) || (y = o.vnode.props) != null && y.hasOwnProperty(`onUpdate:${a}`)))
        } : () => {
            var u, d;
            return e[t], !!((u = o.vnode.props) != null && u.hasOwnProperty(t) && ((d = o.vnode.props) != null && d.hasOwnProperty(`onUpdate:${t}`)))
        });
    _y(() => !f.value, () => {
        Ke(() => e[t], u => {
            i.value = u
        })
    });
    const c = X({
        get() {
            const u = e[t];
            return r(f.value ? u : i.value)
        },
        set(u) {
            const d = s(u),
                h = ne(f.value ? e[t] : i.value);
            h === d || r(h) === u || (i.value = d, o == null || o.emit(`update:${t}`, d))
        }
    });
    return Object.defineProperty(c, "externalValue", {
        get: () => f.value ? e[t] : i.value
    }), c
}
const av = {
        badge: "Badge",
        open: "Open",
        close: "Close",
        dismiss: "Dismiss",
        confirmEdit: {
            ok: "OK",
            cancel: "Cancel"
        },
        dataIterator: {
            noResultsText: "No matching records found",
            loadingText: "Loading items..."
        },
        dataTable: {
            itemsPerPageText: "Rows per page:",
            ariaLabel: {
                sortDescending: "Sorted descending.",
                sortAscending: "Sorted ascending.",
                sortNone: "Not sorted.",
                activateNone: "Activate to remove sorting.",
                activateDescending: "Activate to sort descending.",
                activateAscending: "Activate to sort ascending."
            },
            sortBy: "Sort by"
        },
        dataFooter: {
            itemsPerPageText: "Items per page:",
            itemsPerPageAll: "All",
            nextPage: "Next page",
            prevPage: "Previous page",
            firstPage: "First page",
            lastPage: "Last page",
            pageText: "{0}-{1} of {2}"
        },
        dateRangeInput: {
            divider: "to"
        },
        datePicker: {
            itemsSelected: "{0} selected",
            range: {
                title: "Select dates",
                header: "Enter dates"
            },
            title: "Select date",
            header: "Enter date",
            input: {
                placeholder: "Enter date"
            }
        },
        noDataText: "No data available",
        carousel: {
            prev: "Previous visual",
            next: "Next visual",
            ariaLabel: {
                delimiter: "Carousel slide {0} of {1}"
            }
        },
        calendar: {
            moreEvents: "{0} more",
            today: "Today"
        },
        input: {
            clear: "Clear {0}",
            prependAction: "{0} prepended action",
            appendAction: "{0} appended action",
            otp: "Please enter OTP character {0}"
        },
        fileInput: {
            counter: "{0} files",
            counterSize: "{0} files ({1} in total)"
        },
        timePicker: {
            am: "AM",
            pm: "PM",
            title: "Select Time"
        },
        pagination: {
            ariaLabel: {
                root: "Pagination Navigation",
                next: "Next page",
                previous: "Previous page",
                page: "Go to page {0}",
                currentPage: "Page {0}, Current page",
                first: "First page",
                last: "Last page"
            }
        },
        stepper: {
            next: "Next",
            prev: "Previous"
        },
        rating: {
            ariaLabel: {
                item: "Rating {0} of {1}"
            }
        },
        loading: "Loading...",
        infiniteScroll: {
            loadMore: "Load more",
            empty: "No more"
        }
    },
    Ka = "$vuetify.",
    Ga = (e, t) => e.replace(/\{(\d+)\}/g, (n, r) => String(t[+r])),
    Lu = (e, t, n) => function(r) {
        for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), i = 1; i < s; i++) o[i - 1] = arguments[i];
        if (!r.startsWith(Ka)) return Ga(r, o);
        const a = r.replace(Ka, ""),
            l = e.value && n.value[e.value],
            f = t.value && n.value[t.value];
        let c = Pa(l, a, null);
        return c || (`${r}${e.value}`, c = Pa(f, a, null)), c || (c = r), typeof c != "string" && (c = r), Ga(c, o)
    };

function $u(e, t) {
    return (n, r) => new Intl.NumberFormat([e.value, t.value], r).format(n)
}

function Ns(e, t, n) {
    const r = iv(e, t, e[t] ? ? n.value);
    return r.value = e[t] ? ? n.value, Ke(n, s => {
        e[t] == null && (r.value = n.value)
    }), r
}

function Fu(e) {
    return t => {
        const n = Ns(t, "locale", e.current),
            r = Ns(t, "fallback", e.fallback),
            s = Ns(t, "messages", e.messages);
        return {
            name: "vuetify",
            current: n,
            fallback: r,
            messages: s,
            t: Lu(n, r, s),
            n: $u(n, r),
            provide: Fu({
                current: n,
                fallback: r,
                messages: s
            })
        }
    }
}

function lv(e) {
    const t = Ve((e == null ? void 0 : e.locale) ? ? "en"),
        n = Ve((e == null ? void 0 : e.fallback) ? ? "en"),
        r = Te({
            en: av,
            ...e == null ? void 0 : e.messages
        });
    return {
        name: "vuetify",
        current: t,
        fallback: n,
        messages: r,
        t: Lu(t, n, r),
        n: $u(t, n),
        provide: Fu({
            current: t,
            fallback: n,
            messages: r
        })
    }
}
const Zr = Symbol.for("vuetify:locale");

function cv(e) {
    return e.name != null
}

function uv(e) {
    const t = e != null && e.adapter && cv(e == null ? void 0 : e.adapter) ? e == null ? void 0 : e.adapter : lv(e),
        n = dv(t, e);
    return { ...t,
        ...n
    }
}

function hb() {
    const e = ye(Zr);
    if (!e) throw new Error("[Vuetify] Could not find injected locale instance");
    return e
}

function fv() {
    return {
        af: !1,
        ar: !0,
        bg: !1,
        ca: !1,
        ckb: !1,
        cs: !1,
        de: !1,
        el: !1,
        en: !1,
        es: !1,
        et: !1,
        fa: !0,
        fi: !1,
        fr: !1,
        hr: !1,
        hu: !1,
        he: !0,
        id: !1,
        it: !1,
        ja: !1,
        km: !1,
        ko: !1,
        lv: !1,
        lt: !1,
        nl: !1,
        no: !1,
        pl: !1,
        pt: !1,
        ro: !1,
        ru: !1,
        sk: !1,
        sl: !1,
        srCyrl: !1,
        srLatn: !1,
        sv: !1,
        th: !1,
        tr: !1,
        az: !1,
        uk: !1,
        vi: !1,
        zhHans: !1,
        zhHant: !1
    }
}

function dv(e, t) {
    const n = Te((t == null ? void 0 : t.rtl) ? ? fv()),
        r = X(() => n.value[e.current.value] ? ? !1);
    return {
        isRtl: r,
        rtl: n,
        rtlClasses: X(() => `v-locale--is-${r.value?"rtl":"ltr"}`)
    }
}

function hv() {
    const e = ye(Zr);
    if (!e) throw new Error("[Vuetify] Could not find injected rtl instance");
    return {
        isRtl: e.isRtl,
        rtlClasses: e.rtlClasses
    }
}
const gs = {
    "001": 1,
    AD: 1,
    AE: 6,
    AF: 6,
    AG: 0,
    AI: 1,
    AL: 1,
    AM: 1,
    AN: 1,
    AR: 1,
    AS: 0,
    AT: 1,
    AU: 1,
    AX: 1,
    AZ: 1,
    BA: 1,
    BD: 0,
    BE: 1,
    BG: 1,
    BH: 6,
    BM: 1,
    BN: 1,
    BR: 0,
    BS: 0,
    BT: 0,
    BW: 0,
    BY: 1,
    BZ: 0,
    CA: 0,
    CH: 1,
    CL: 1,
    CM: 1,
    CN: 1,
    CO: 0,
    CR: 1,
    CY: 1,
    CZ: 1,
    DE: 1,
    DJ: 6,
    DK: 1,
    DM: 0,
    DO: 0,
    DZ: 6,
    EC: 1,
    EE: 1,
    EG: 6,
    ES: 1,
    ET: 0,
    FI: 1,
    FJ: 1,
    FO: 1,
    FR: 1,
    GB: 1,
    "GB-alt-variant": 0,
    GE: 1,
    GF: 1,
    GP: 1,
    GR: 1,
    GT: 0,
    GU: 0,
    HK: 0,
    HN: 0,
    HR: 1,
    HU: 1,
    ID: 0,
    IE: 1,
    IL: 0,
    IN: 0,
    IQ: 6,
    IR: 6,
    IS: 1,
    IT: 1,
    JM: 0,
    JO: 6,
    JP: 0,
    KE: 0,
    KG: 1,
    KH: 0,
    KR: 0,
    KW: 6,
    KZ: 1,
    LA: 0,
    LB: 1,
    LI: 1,
    LK: 1,
    LT: 1,
    LU: 1,
    LV: 1,
    LY: 6,
    MC: 1,
    MD: 1,
    ME: 1,
    MH: 0,
    MK: 1,
    MM: 0,
    MN: 1,
    MO: 0,
    MQ: 1,
    MT: 0,
    MV: 5,
    MX: 0,
    MY: 1,
    MZ: 0,
    NI: 0,
    NL: 1,
    NO: 1,
    NP: 0,
    NZ: 1,
    OM: 6,
    PA: 0,
    PE: 0,
    PH: 0,
    PK: 0,
    PL: 1,
    PR: 0,
    PT: 0,
    PY: 0,
    QA: 6,
    RE: 1,
    RO: 1,
    RS: 1,
    RU: 1,
    SA: 0,
    SD: 6,
    SE: 1,
    SG: 0,
    SI: 1,
    SK: 1,
    SM: 1,
    SV: 0,
    SY: 6,
    TH: 0,
    TJ: 1,
    TM: 1,
    TR: 1,
    TT: 0,
    TW: 0,
    UA: 1,
    UM: 0,
    US: 0,
    UY: 1,
    UZ: 1,
    VA: 1,
    VE: 0,
    VI: 0,
    VN: 1,
    WS: 0,
    XK: 1,
    YE: 0,
    ZA: 0,
    ZW: 0
};

function pv(e, t, n) {
    const r = [];
    let s = [];
    const o = Nu(e),
        i = ju(e),
        a = n ? ? gs[t.slice(-2).toUpperCase()] ? ? 0,
        l = (o.getDay() - a + 7) % 7,
        f = (i.getDay() - a + 7) % 7;
    for (let c = 0; c < l; c++) {
        const u = new Date(o);
        u.setDate(u.getDate() - (l - c)), s.push(u)
    }
    for (let c = 1; c <= i.getDate(); c++) {
        const u = new Date(e.getFullYear(), e.getMonth(), c);
        s.push(u), s.length === 7 && (r.push(s), s = [])
    }
    for (let c = 1; c < 7 - f; c++) {
        const u = new Date(i);
        u.setDate(u.getDate() + c), s.push(u)
    }
    return s.length > 0 && r.push(s), r
}

function gv(e, t, n) {
    const r = n ? ? gs[t.slice(-2).toUpperCase()] ? ? 0,
        s = new Date(e);
    for (; s.getDay() !== r;) s.setDate(s.getDate() - 1);
    return s
}

function mv(e, t) {
    const n = new Date(e),
        r = ((gs[t.slice(-2).toUpperCase()] ? ? 0) + 6) % 7;
    for (; n.getDay() !== r;) n.setDate(n.getDate() + 1);
    return n
}

function Nu(e) {
    return new Date(e.getFullYear(), e.getMonth(), 1)
}

function ju(e) {
    return new Date(e.getFullYear(), e.getMonth() + 1, 0)
}

function yv(e) {
    const t = e.split("-").map(Number);
    return new Date(t[0], t[1] - 1, t[2])
}
const vv = /^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;

function Bu(e) {
    if (e == null) return new Date;
    if (e instanceof Date) return e;
    if (typeof e == "string") {
        let t;
        if (vv.test(e)) return yv(e);
        if (t = Date.parse(e), !isNaN(t)) return new Date(t)
    }
    return null
}
const qa = new Date(2e3, 0, 2);

function bv(e, t) {
    const n = t ? ? gs[e.slice(-2).toUpperCase()] ? ? 0;
    return Ru(7).map(r => {
        const s = new Date(qa);
        return s.setDate(qa.getDate() + n + r), new Intl.DateTimeFormat(e, {
            weekday: "narrow"
        }).format(s)
    })
}

function _v(e, t, n, r) {
    const s = Bu(e) ? ? new Date,
        o = r == null ? void 0 : r[t];
    if (typeof o == "function") return o(s, t, n);
    let i = {};
    switch (t) {
        case "fullDate":
            i = {
                year: "numeric",
                month: "long",
                day: "numeric"
            };
            break;
        case "fullDateWithWeekday":
            i = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            };
            break;
        case "normalDate":
            const a = s.getDate(),
                l = new Intl.DateTimeFormat(n, {
                    month: "long"
                }).format(s);
            return `${a} ${l}`;
        case "normalDateWithWeekday":
            i = {
                weekday: "short",
                day: "numeric",
                month: "short"
            };
            break;
        case "shortDate":
            i = {
                month: "short",
                day: "numeric"
            };
            break;
        case "year":
            i = {
                year: "numeric"
            };
            break;
        case "month":
            i = {
                month: "long"
            };
            break;
        case "monthShort":
            i = {
                month: "short"
            };
            break;
        case "monthAndYear":
            i = {
                month: "long",
                year: "numeric"
            };
            break;
        case "monthAndDate":
            i = {
                month: "long",
                day: "numeric"
            };
            break;
        case "weekday":
            i = {
                weekday: "long"
            };
            break;
        case "weekdayShort":
            i = {
                weekday: "short"
            };
            break;
        case "dayOfMonth":
            return new Intl.NumberFormat(n).format(s.getDate());
        case "hours12h":
            i = {
                hour: "numeric",
                hour12: !0
            };
            break;
        case "hours24h":
            i = {
                hour: "numeric",
                hour12: !1
            };
            break;
        case "minutes":
            i = {
                minute: "numeric"
            };
            break;
        case "seconds":
            i = {
                second: "numeric"
            };
            break;
        case "fullTime":
            i = {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: !0
            };
            break;
        case "fullTime12h":
            i = {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: !0
            };
            break;
        case "fullTime24h":
            i = {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: !1
            };
            break;
        case "fullDateTime":
            i = {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: !0
            };
            break;
        case "fullDateTime12h":
            i = {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: !0
            };
            break;
        case "fullDateTime24h":
            i = {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: !1
            };
            break;
        case "keyboardDate":
            i = {
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
            };
            break;
        case "keyboardDateTime":
            i = {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: !1
            };
            break;
        case "keyboardDateTime12h":
            i = {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: !0
            };
            break;
        case "keyboardDateTime24h":
            i = {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: !1
            };
            break;
        default:
            i = o ? ? {
                timeZone: "UTC",
                timeZoneName: "short"
            }
    }
    return new Intl.DateTimeFormat(n, i).format(s)
}

function wv(e, t) {
    const n = e.toJsDate(t),
        r = n.getFullYear(),
        s = Da(String(n.getMonth() + 1), 2, "0"),
        o = Da(String(n.getDate()), 2, "0");
    return `${r}-${s}-${o}`
}

function Ev(e) {
    const [t, n, r] = e.split("-").map(Number);
    return new Date(t, n - 1, r)
}

function Tv(e, t) {
    const n = new Date(e);
    return n.setMinutes(n.getMinutes() + t), n
}

function Cv(e, t) {
    const n = new Date(e);
    return n.setHours(n.getHours() + t), n
}

function Sv(e, t) {
    const n = new Date(e);
    return n.setDate(n.getDate() + t), n
}

function kv(e, t) {
    const n = new Date(e);
    return n.setDate(n.getDate() + t * 7), n
}

function Rv(e, t) {
    const n = new Date(e);
    return n.setDate(1), n.setMonth(n.getMonth() + t), n
}

function xv(e) {
    return e.getFullYear()
}

function Av(e) {
    return e.getMonth()
}

function Pv(e) {
    return e.getDate()
}

function Ov(e) {
    return new Date(e.getFullYear(), e.getMonth() + 1, 1)
}

function Mv(e) {
    return new Date(e.getFullYear(), e.getMonth() - 1, 1)
}

function Iv(e) {
    return e.getHours()
}

function Dv(e) {
    return e.getMinutes()
}

function Hv(e) {
    return new Date(e.getFullYear(), 0, 1)
}

function Lv(e) {
    return new Date(e.getFullYear(), 11, 31)
}

function $v(e, t) {
    return Qr(e, t[0]) && jv(e, t[1])
}

function Fv(e) {
    const t = new Date(e);
    return t instanceof Date && !isNaN(t.getTime())
}

function Qr(e, t) {
    return e.getTime() > t.getTime()
}

function Nv(e, t) {
    return Qr(wo(e), wo(t))
}

function jv(e, t) {
    return e.getTime() < t.getTime()
}

function Ya(e, t) {
    return e.getTime() === t.getTime()
}

function Bv(e, t) {
    return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear()
}

function Uv(e, t) {
    return e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear()
}

function Wv(e, t) {
    return e.getFullYear() === t.getFullYear()
}

function Vv(e, t, n) {
    const r = new Date(e),
        s = new Date(t);
    switch (n) {
        case "years":
            return r.getFullYear() - s.getFullYear();
        case "quarters":
            return Math.floor((r.getMonth() - s.getMonth() + (r.getFullYear() - s.getFullYear()) * 12) / 4);
        case "months":
            return r.getMonth() - s.getMonth() + (r.getFullYear() - s.getFullYear()) * 12;
        case "weeks":
            return Math.floor((r.getTime() - s.getTime()) / (1e3 * 60 * 60 * 24 * 7));
        case "days":
            return Math.floor((r.getTime() - s.getTime()) / (1e3 * 60 * 60 * 24));
        case "hours":
            return Math.floor((r.getTime() - s.getTime()) / (1e3 * 60 * 60));
        case "minutes":
            return Math.floor((r.getTime() - s.getTime()) / (1e3 * 60));
        case "seconds":
            return Math.floor((r.getTime() - s.getTime()) / 1e3);
        default:
            return r.getTime() - s.getTime()
    }
}

function Kv(e, t) {
    const n = new Date(e);
    return n.setHours(t), n
}

function Gv(e, t) {
    const n = new Date(e);
    return n.setMinutes(t), n
}

function qv(e, t) {
    const n = new Date(e);
    return n.setMonth(t), n
}

function Yv(e, t) {
    const n = new Date(e);
    return n.setDate(t), n
}

function zv(e, t) {
    const n = new Date(e);
    return n.setFullYear(t), n
}

function wo(e) {
    return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0)
}

function Jv(e) {
    return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 23, 59, 59, 999)
}
class Zv {
    constructor(t) {
        this.locale = t.locale, this.formats = t.formats
    }
    date(t) {
        return Bu(t)
    }
    toJsDate(t) {
        return t
    }
    toISO(t) {
        return wv(this, t)
    }
    parseISO(t) {
        return Ev(t)
    }
    addMinutes(t, n) {
        return Tv(t, n)
    }
    addHours(t, n) {
        return Cv(t, n)
    }
    addDays(t, n) {
        return Sv(t, n)
    }
    addWeeks(t, n) {
        return kv(t, n)
    }
    addMonths(t, n) {
        return Rv(t, n)
    }
    getWeekArray(t, n) {
        return pv(t, this.locale, n ? Number(n) : void 0)
    }
    startOfWeek(t, n) {
        return gv(t, this.locale, n ? Number(n) : void 0)
    }
    endOfWeek(t) {
        return mv(t, this.locale)
    }
    startOfMonth(t) {
        return Nu(t)
    }
    endOfMonth(t) {
        return ju(t)
    }
    format(t, n) {
        return _v(t, n, this.locale, this.formats)
    }
    isEqual(t, n) {
        return Ya(t, n)
    }
    isValid(t) {
        return Fv(t)
    }
    isWithinRange(t, n) {
        return $v(t, n)
    }
    isAfter(t, n) {
        return Qr(t, n)
    }
    isAfterDay(t, n) {
        return Nv(t, n)
    }
    isBefore(t, n) {
        return !Qr(t, n) && !Ya(t, n)
    }
    isSameDay(t, n) {
        return Bv(t, n)
    }
    isSameMonth(t, n) {
        return Uv(t, n)
    }
    isSameYear(t, n) {
        return Wv(t, n)
    }
    setMinutes(t, n) {
        return Gv(t, n)
    }
    setHours(t, n) {
        return Kv(t, n)
    }
    setMonth(t, n) {
        return qv(t, n)
    }
    setDate(t, n) {
        return Yv(t, n)
    }
    setYear(t, n) {
        return zv(t, n)
    }
    getDiff(t, n, r) {
        return Vv(t, n, r)
    }
    getWeekdays(t) {
        return bv(this.locale, t ? Number(t) : void 0)
    }
    getYear(t) {
        return xv(t)
    }
    getMonth(t) {
        return Av(t)
    }
    getDate(t) {
        return Pv(t)
    }
    getNextMonth(t) {
        return Ov(t)
    }
    getPreviousMonth(t) {
        return Mv(t)
    }
    getHours(t) {
        return Iv(t)
    }
    getMinutes(t) {
        return Dv(t)
    }
    startOfDay(t) {
        return wo(t)
    }
    endOfDay(t) {
        return Jv(t)
    }
    startOfYear(t) {
        return Hv(t)
    }
    endOfYear(t) {
        return Lv(t)
    }
}
const Qv = Symbol.for("vuetify:date-options"),
    za = Symbol.for("vuetify:date-adapter");

function Xv(e, t) {
    const n = We({
        adapter: Zv,
        locale: {
            af: "af-ZA",
            bg: "bg-BG",
            ca: "ca-ES",
            ckb: "",
            cs: "cs-CZ",
            de: "de-DE",
            el: "el-GR",
            en: "en-US",
            et: "et-EE",
            fa: "fa-IR",
            fi: "fi-FI",
            hr: "hr-HR",
            hu: "hu-HU",
            he: "he-IL",
            id: "id-ID",
            it: "it-IT",
            ja: "ja-JP",
            ko: "ko-KR",
            lv: "lv-LV",
            lt: "lt-LT",
            nl: "nl-NL",
            no: "no-NO",
            pl: "pl-PL",
            pt: "pt-PT",
            ro: "ro-RO",
            ru: "ru-RU",
            sk: "sk-SK",
            sl: "sl-SI",
            srCyrl: "sr-SP",
            srLatn: "sr-SP",
            sv: "sv-SE",
            th: "th-TH",
            tr: "tr-TR",
            az: "az-AZ",
            uk: "uk-UA",
            vi: "vi-VN",
            zhHans: "zh-CN",
            zhHant: "zh-TW"
        }
    }, e);
    return {
        options: n,
        instance: e0(n, t)
    }
}

function e0(e, t) {
    const n = Se(typeof e.adapter == "function" ? new e.adapter({
        locale: e.locale[t.current.value] ? ? t.current.value,
        formats: e.formats
    }) : e.adapter);
    return Ke(t.current, r => {
        n.locale = e.locale[r] ? ? r ? ? n.locale
    }), n
}
const pb = ["sm", "md", "lg", "xl", "xxl"],
    Ja = Symbol.for("vuetify:display"),
    Za = {
        mobileBreakpoint: "lg",
        thresholds: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
            xxl: 2560
        }
    },
    t0 = function() {
        let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Za;
        return We(Za, e)
    };

function Qa(e) {
    return ze && !e ? window.innerWidth : typeof e == "object" && e.clientWidth || 0
}

function Xa(e) {
    return ze && !e ? window.innerHeight : typeof e == "object" && e.clientHeight || 0
}

function el(e) {
    const t = ze && !e ? window.navigator.userAgent : "ssr";

    function n(y) {
        return !!t.match(y)
    }
    const r = n(/android/i),
        s = n(/iphone|ipad|ipod/i),
        o = n(/cordova/i),
        i = n(/electron/i),
        a = n(/chrome/i),
        l = n(/edge/i),
        f = n(/firefox/i),
        c = n(/opera/i),
        u = n(/win/i),
        d = n(/mac/i),
        h = n(/linux/i);
    return {
        android: r,
        ios: s,
        cordova: o,
        electron: i,
        chrome: a,
        edge: l,
        firefox: f,
        opera: c,
        win: u,
        mac: d,
        linux: h,
        touch: wy,
        ssr: t === "ssr"
    }
}

function n0(e, t) {
    const {
        thresholds: n,
        mobileBreakpoint: r
    } = t0(e), s = Ve(Xa(t)), o = Ve(el(t)), i = Se({}), a = Ve(Qa(t));

    function l() {
        s.value = Xa(), a.value = Qa()
    }

    function f() {
        l(), o.value = el()
    }
    return as(() => {
        const c = a.value < n.sm,
            u = a.value < n.md && !c,
            d = a.value < n.lg && !(u || c),
            h = a.value < n.xl && !(d || u || c),
            y = a.value < n.xxl && !(h || d || u || c),
            v = a.value >= n.xxl,
            T = c ? "xs" : u ? "sm" : d ? "md" : h ? "lg" : y ? "xl" : "xxl",
            C = typeof r == "number" ? r : n[r],
            _ = a.value < C;
        i.xs = c, i.sm = u, i.md = d, i.lg = h, i.xl = y, i.xxl = v, i.smAndUp = !c, i.mdAndUp = !(c || u), i.lgAndUp = !(c || u || d), i.xlAndUp = !(c || u || d || h), i.smAndDown = !(d || h || y || v), i.mdAndDown = !(h || y || v), i.lgAndDown = !(y || v), i.xlAndDown = !v, i.name = T, i.height = s.value, i.width = a.value, i.mobile = _, i.mobileBreakpoint = r, i.platform = o.value, i.thresholds = n
    }), ze && window.addEventListener("resize", l, {
        passive: !0
    }), { ...Hl(i),
        update: f,
        ssr: !!t
    }
}
const r0 = Symbol.for("vuetify:goto");

function s0() {
    return {
        container: void 0,
        duration: 300,
        layout: !1,
        offset: 0,
        easing: "easeInOutCubic",
        patterns: {
            linear: e => e,
            easeInQuad: e => e ** 2,
            easeOutQuad: e => e * (2 - e),
            easeInOutQuad: e => e < .5 ? 2 * e ** 2 : -1 + (4 - 2 * e) * e,
            easeInCubic: e => e ** 3,
            easeOutCubic: e => --e ** 3 + 1,
            easeInOutCubic: e => e < .5 ? 4 * e ** 3 : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1,
            easeInQuart: e => e ** 4,
            easeOutQuart: e => 1 - --e ** 4,
            easeInOutQuart: e => e < .5 ? 8 * e ** 4 : 1 - 8 * --e ** 4,
            easeInQuint: e => e ** 5,
            easeOutQuint: e => 1 + --e ** 5,
            easeInOutQuint: e => e < .5 ? 16 * e ** 5 : 1 + 16 * --e ** 5
        }
    }
}

function o0(e, t) {
    return {
        rtl: t.isRtl,
        options: We(s0(), e)
    }
}
const i0 = {
        collapse: "mdi-chevron-up",
        complete: "mdi-check",
        cancel: "mdi-close-circle",
        close: "mdi-close",
        delete: "mdi-close-circle",
        clear: "mdi-close-circle",
        success: "mdi-check-circle",
        info: "mdi-information",
        warning: "mdi-alert-circle",
        error: "mdi-close-circle",
        prev: "mdi-chevron-left",
        next: "mdi-chevron-right",
        checkboxOn: "mdi-checkbox-marked",
        checkboxOff: "mdi-checkbox-blank-outline",
        checkboxIndeterminate: "mdi-minus-box",
        delimiter: "mdi-circle",
        sortAsc: "mdi-arrow-up",
        sortDesc: "mdi-arrow-down",
        expand: "mdi-chevron-down",
        menu: "mdi-menu",
        subgroup: "mdi-menu-down",
        dropdown: "mdi-menu-down",
        radioOn: "mdi-radiobox-marked",
        radioOff: "mdi-radiobox-blank",
        edit: "mdi-pencil",
        ratingEmpty: "mdi-star-outline",
        ratingFull: "mdi-star",
        ratingHalf: "mdi-star-half-full",
        loading: "mdi-cached",
        first: "mdi-page-first",
        last: "mdi-page-last",
        unfold: "mdi-unfold-more-horizontal",
        file: "mdi-paperclip",
        plus: "mdi-plus",
        minus: "mdi-minus",
        calendar: "mdi-calendar",
        treeviewCollapse: "mdi-menu-down",
        treeviewExpand: "mdi-menu-right",
        eyeDropper: "mdi-eyedropper"
    },
    a0 = {
        component: e => He(Wu, { ...e,
            class: "mdi"
        })
    },
    l0 = [String, Function, Object, Array],
    Eo = Symbol.for("vuetify:icons"),
    ms = Pn({
        icon: {
            type: l0
        },
        tag: {
            type: String,
            required: !0
        }
    }, "icon"),
    tl = Hu()({
        name: "VComponentIcon",
        props: ms(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            return () => {
                const r = e.icon;
                return re(e.tag, null, {
                    default: () => {
                        var s;
                        return [e.icon ? re(r, null, null) : (s = n.default) == null ? void 0 : s.call(n)]
                    }
                })
            }
        }
    }),
    Uu = lr({
        name: "VSvgIcon",
        inheritAttrs: !1,
        props: ms(),
        setup(e, t) {
            let {
                attrs: n
            } = t;
            return () => re(e.tag, zo(n, {
                style: null
            }), {
                default: () => [re("svg", {
                    class: "v-icon__svg",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    role: "img",
                    "aria-hidden": "true"
                }, [Array.isArray(e.icon) ? e.icon.map(r => Array.isArray(r) ? re("path", {
                    d: r[0],
                    "fill-opacity": r[1]
                }, null) : re("path", {
                    d: r
                }, null)) : re("path", {
                    d: e.icon
                }, null)])]
            })
        }
    });
lr({
    name: "VLigatureIcon",
    props: ms(),
    setup(e) {
        return () => re(e.tag, null, {
            default: () => [e.icon]
        })
    }
});
const Wu = lr({
    name: "VClassIcon",
    props: ms(),
    setup(e) {
        return () => re(e.tag, {
            class: e.icon
        }, null)
    }
});

function c0() {
    return {
        svg: {
            component: Uu
        },
        class: {
            component: Wu
        }
    }
}

function u0(e) {
    const t = c0(),
        n = (e == null ? void 0 : e.defaultSet) ? ? "mdi";
    return n === "mdi" && !t.mdi && (t.mdi = a0), We({
        defaultSet: n,
        sets: t,
        aliases: { ...i0,
            vuetify: ["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z", ["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z", .6]],
            "vuetify-outline": "svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z",
            "vuetify-play": ["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z", ["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z", .6]]
        }
    }, e)
}
const gb = e => {
        const t = ye(Eo);
        if (!t) throw new Error("Missing Vuetify Icons provide!");
        return {
            iconData: X(() => {
                var l;
                const r = se(e);
                if (!r) return {
                    component: tl
                };
                let s = r;
                if (typeof s == "string" && (s = s.trim(), s.startsWith("$") && (s = (l = t.aliases) == null ? void 0 : l[s.slice(1)])), Array.isArray(s)) return {
                    component: Uu,
                    icon: s
                };
                if (typeof s != "string") return {
                    component: tl,
                    icon: s
                };
                const o = Object.keys(t.sets).find(f => typeof s == "string" && s.startsWith(`${f}:`)),
                    i = o ? s.slice(o.length + 1) : s;
                return {
                    component: t.sets[o ? ? t.defaultSet].component,
                    icon: i
                }
            })
        }
    },
    Xr = Symbol.for("vuetify:theme"),
    f0 = Pn({
        theme: String
    }, "theme");

function nl() {
    return {
        defaultTheme: "light",
        variations: {
            colors: [],
            lighten: 0,
            darken: 0
        },
        themes: {
            light: {
                dark: !1,
                colors: {
                    background: "#FFFFFF",
                    surface: "#FFFFFF",
                    "surface-bright": "#FFFFFF",
                    "surface-light": "#EEEEEE",
                    "surface-variant": "#424242",
                    "on-surface-variant": "#EEEEEE",
                    primary: "#1867C0",
                    "primary-darken-1": "#1F5592",
                    secondary: "#48A9A6",
                    "secondary-darken-1": "#018786",
                    error: "#B00020",
                    info: "#2196F3",
                    success: "#4CAF50",
                    warning: "#FB8C00"
                },
                variables: {
                    "border-color": "#000000",
                    "border-opacity": .12,
                    "high-emphasis-opacity": .87,
                    "medium-emphasis-opacity": .6,
                    "disabled-opacity": .38,
                    "idle-opacity": .04,
                    "hover-opacity": .04,
                    "focus-opacity": .12,
                    "selected-opacity": .08,
                    "activated-opacity": .12,
                    "pressed-opacity": .12,
                    "dragged-opacity": .08,
                    "theme-kbd": "#212529",
                    "theme-on-kbd": "#FFFFFF",
                    "theme-code": "#F5F5F5",
                    "theme-on-code": "#000000"
                }
            },
            dark: {
                dark: !0,
                colors: {
                    background: "#121212",
                    surface: "#212121",
                    "surface-bright": "#ccbfd6",
                    "surface-light": "#424242",
                    "surface-variant": "#a3a3a3",
                    "on-surface-variant": "#424242",
                    primary: "#2196F3",
                    "primary-darken-1": "#277CC1",
                    secondary: "#54B6B2",
                    "secondary-darken-1": "#48A9A6",
                    error: "#CF6679",
                    info: "#2196F3",
                    success: "#4CAF50",
                    warning: "#FB8C00"
                },
                variables: {
                    "border-color": "#FFFFFF",
                    "border-opacity": .12,
                    "high-emphasis-opacity": 1,
                    "medium-emphasis-opacity": .7,
                    "disabled-opacity": .5,
                    "idle-opacity": .1,
                    "hover-opacity": .04,
                    "focus-opacity": .12,
                    "selected-opacity": .08,
                    "activated-opacity": .12,
                    "pressed-opacity": .16,
                    "dragged-opacity": .08,
                    "theme-kbd": "#212529",
                    "theme-on-kbd": "#FFFFFF",
                    "theme-code": "#343434",
                    "theme-on-code": "#CCCCCC"
                }
            }
        }
    }
}

function d0() {
    var r, s;
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : nl();
    const t = nl();
    if (!e) return { ...t,
        isDisabled: !0
    };
    const n = {};
    for (const [o, i] of Object.entries(e.themes ? ? {})) {
        const a = i.dark || o === "dark" ? (r = t.themes) == null ? void 0 : r.dark : (s = t.themes) == null ? void 0 : s.light;
        n[o] = We(a, i)
    }
    return We(t, { ...e,
        themes: n
    })
}

function h0(e) {
    const t = d0(e),
        n = Te(t.defaultTheme),
        r = Te(t.themes),
        s = X(() => {
            const c = {};
            for (const [u, d] of Object.entries(r.value)) {
                const h = c[u] = { ...d,
                    colors: { ...d.colors
                    }
                };
                if (t.variations)
                    for (const y of t.variations.colors) {
                        const v = h.colors[y];
                        if (v)
                            for (const T of ["lighten", "darken"]) {
                                const C = T === "lighten" ? Jy : Zy;
                                for (const _ of Ru(t.variations[T], 1)) h.colors[`${y}-${T}-${_}`] = qy(C(wt(v), _))
                            }
                    }
                for (const y of Object.keys(h.colors)) {
                    if (/^on-[a-z]/.test(y) || h.colors[`on-${y}`]) continue;
                    const v = `on-${y}`,
                        T = wt(h.colors[y]);
                    h.colors[v] = Xy(T)
                }
            }
            return c
        }),
        o = X(() => s.value[n.value]),
        i = X(() => {
            var y;
            const c = [];
            (y = o.value) != null && y.dark && Kt(c, ":root", ["color-scheme: dark"]), Kt(c, ":root", rl(o.value));
            for (const [v, T] of Object.entries(s.value)) Kt(c, `.v-theme--${v}`, [`color-scheme: ${T.dark?"dark":"normal"}`, ...rl(T)]);
            const u = [],
                d = [],
                h = new Set(Object.values(s.value).flatMap(v => Object.keys(v.colors)));
            for (const v of h) /^on-[a-z]/.test(v) ? Kt(d, `.${v}`, [`color: rgb(var(--v-theme-${v})) !important`]) : (Kt(u, `.bg-${v}`, [`--v-theme-overlay-multiplier: var(--v-theme-${v}-overlay-multiplier)`, `background-color: rgb(var(--v-theme-${v})) !important`, `color: rgb(var(--v-theme-on-${v})) !important`]), Kt(d, `.text-${v}`, [`color: rgb(var(--v-theme-${v})) !important`]), Kt(d, `.border-${v}`, [`--v-border-color: var(--v-theme-${v})`]));
            return c.push(...u, ...d), c.map((v, T) => T === 0 ? v : `    ${v}`).join("")
        });

    function a() {
        return {
            style: [{
                children: i.value,
                id: "vuetify-theme-stylesheet",
                nonce: t.cspNonce || !1
            }]
        }
    }

    function l(c) {
        if (t.isDisabled) return;
        const u = c._context.provides.usehead;
        if (u)
            if (u.push) {
                const d = u.push(a);
                ze && Ke(i, () => {
                    d.patch(a)
                })
            } else ze ? (u.addHeadObjs(X(a)), as(() => u.updateDOM())) : u.addHeadObjs(a());
        else {
            let h = function() {
                    if (typeof document < "u" && !d) {
                        const y = document.createElement("style");
                        y.type = "text/css", y.id = "vuetify-theme-stylesheet", t.cspNonce && y.setAttribute("nonce", t.cspNonce), d = y, document.head.appendChild(d)
                    }
                    d && (d.innerHTML = i.value)
                },
                d = ze ? document.getElementById("vuetify-theme-stylesheet") : null;
            ze ? Ke(i, h, {
                immediate: !0
            }) : h()
        }
    }
    const f = X(() => t.isDisabled ? void 0 : `v-theme--${n.value}`);
    return {
        install: l,
        isDisabled: t.isDisabled,
        name: n,
        themes: r,
        current: o,
        computedThemes: s,
        themeClasses: f,
        styles: i,
        global: {
            name: n,
            current: o
        }
    }
}

function p0(e) {
    Bt("provideTheme");
    const t = ye(Xr, null);
    if (!t) throw new Error("Could not find Vuetify theme injection");
    const n = X(() => e.theme ? ? t.name.value),
        r = X(() => t.themes.value[n.value]),
        s = X(() => t.isDisabled ? void 0 : `v-theme--${n.value}`),
        o = { ...t,
            name: n,
            current: r,
            themeClasses: s
        };
    return rt(Xr, o), o
}

function Kt(e, t, n) {
    e.push(`${t} {
`, ...n.map(r => `  ${r};
`), `}
`)
}

function rl(e) {
    const t = e.dark ? 2 : 1,
        n = e.dark ? 1 : 2,
        r = [];
    for (const [s, o] of Object.entries(e.colors)) {
        const i = wt(o);
        r.push(`--v-theme-${s}: ${i.r},${i.g},${i.b}`), s.startsWith("on-") || r.push(`--v-theme-${s}-overlay-multiplier: ${Qy(o)>.18?t:n}`)
    }
    for (const [s, o] of Object.entries(e.variables)) {
        const i = typeof o == "string" && o.startsWith("#") ? wt(o) : void 0,
            a = i ? `${i.r}, ${i.g}, ${i.b}` : void 0;
        r.push(`--v-${s}: ${a??o}`)
    }
    return r
}

function g0(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
    const n = Oy(),
        r = Te();
    if (ze) {
        const s = new ResizeObserver(o => {
            o.length && (t === "content" ? r.value = o[0].contentRect : r.value = o[0].target.getBoundingClientRect())
        });
        is(() => {
            s.disconnect()
        }), Ke(() => n.el, (o, i) => {
            i && (s.unobserve(i), r.value = void 0), o && s.observe(o)
        }, {
            flush: "post"
        })
    }
    return {
        resizeRef: n,
        contentRect: Do(r)
    }
}
const sl = Symbol.for("vuetify:layout"),
    m0 = Symbol.for("vuetify:layout-item"),
    ol = 1e3,
    y0 = Pn({
        overlaps: {
            type: Array,
            default: () => []
        },
        fullHeight: Boolean
    }, "layout"),
    v0 = (e, t, n, r) => {
        let s = {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        };
        const o = [{
            id: "",
            layer: { ...s
            }
        }];
        for (const i of e) {
            const a = t.get(i),
                l = n.get(i),
                f = r.get(i);
            if (!a || !l || !f) continue;
            const c = { ...s,
                [a.value]: parseInt(s[a.value], 10) + (f.value ? parseInt(l.value, 10) : 0)
            };
            o.push({
                id: i,
                layer: c
            }), s = c
        }
        return o
    };

function b0(e) {
    const t = ye(sl, null),
        n = X(() => t ? t.rootZIndex.value - 100 : ol),
        r = Te([]),
        s = Se(new Map),
        o = Se(new Map),
        i = Se(new Map),
        a = Se(new Map),
        l = Se(new Map),
        {
            resizeRef: f,
            contentRect: c
        } = g0(),
        u = X(() => {
            const S = new Map,
                A = e.overlaps ? ? [];
            for (const H of A.filter(O => O.includes(":"))) {
                const [O, x] = H.split(":");
                if (!r.value.includes(O) || !r.value.includes(x)) continue;
                const U = s.get(O),
                    M = s.get(x),
                    W = o.get(O),
                    ee = o.get(x);
                !U || !M || !W || !ee || (S.set(x, {
                    position: U.value,
                    amount: parseInt(W.value, 10)
                }), S.set(O, {
                    position: M.value,
                    amount: -parseInt(ee.value, 10)
                }))
            }
            return S
        }),
        d = X(() => {
            const S = [...new Set([...i.values()].map(H => H.value))].sort((H, O) => H - O),
                A = [];
            for (const H of S) {
                const O = r.value.filter(x => {
                    var U;
                    return ((U = i.get(x)) == null ? void 0 : U.value) === H
                });
                A.push(...O)
            }
            return v0(A, s, o, a)
        }),
        h = X(() => !Array.from(l.values()).some(S => S.value)),
        y = X(() => d.value[d.value.length - 1].layer),
        v = X(() => ({
            "--v-layout-left": br(y.value.left),
            "--v-layout-right": br(y.value.right),
            "--v-layout-top": br(y.value.top),
            "--v-layout-bottom": br(y.value.bottom),
            ...h.value ? void 0 : {
                transition: "none"
            }
        })),
        T = X(() => d.value.slice(1).map((S, A) => {
            let {
                id: H
            } = S;
            const {
                layer: O
            } = d.value[A], x = o.get(H), U = s.get(H);
            return {
                id: H,
                ...O,
                size: Number(x.value),
                position: U.value
            }
        })),
        C = S => T.value.find(A => A.id === S),
        _ = Bt("createLayout"),
        g = Ve(!1);
    os(() => {
        g.value = !0
    }), rt(sl, {
        register: (S, A) => {
            let {
                id: H,
                order: O,
                position: x,
                layoutSize: U,
                elementSize: M,
                active: W,
                disableTransitions: ee,
                absolute: oe
            } = A;
            i.set(H, O), s.set(H, x), o.set(H, U), a.set(H, W), ee && l.set(H, ee);
            const Z = Fn(m0, _ == null ? void 0 : _.vnode).indexOf(S);
            Z > -1 ? r.value.splice(Z, 0, H) : r.value.push(H);
            const K = X(() => T.value.findIndex(_e => _e.id === H)),
                ge = X(() => n.value + d.value.length * 2 - K.value * 2),
                it = X(() => {
                    const _e = x.value === "left" || x.value === "right",
                        at = x.value === "right",
                        St = x.value === "bottom",
                        kt = M.value ? ? U.value,
                        Le = kt === 0 ? "%" : "px",
                        R = {
                            [x.value]: 0,
                            zIndex: ge.value,
                            transform: `translate${_e?"X":"Y"}(${(W.value?0:-(kt===0?100:kt))*(at||St?-1:1)}${Le})`,
                            position: oe.value || n.value !== ol ? "absolute" : "fixed",
                            ...h.value ? void 0 : {
                                transition: "none"
                            }
                        };
                    if (!g.value) return R;
                    const F = T.value[K.value];
                    if (!F) throw new Error(`[Vuetify] Could not find layout item "${H}"`);
                    const N = u.value.get(H);
                    return N && (F[N.position] += N.amount), { ...R,
                        height: _e ? `calc(100% - ${F.top}px - ${F.bottom}px)` : M.value ? `${M.value}px` : void 0,
                        left: at ? void 0 : `${F.left}px`,
                        right: at ? `${F.right}px` : void 0,
                        top: x.value !== "bottom" ? `${F.top}px` : void 0,
                        bottom: x.value !== "top" ? `${F.bottom}px` : void 0,
                        width: _e ? M.value ? `${M.value}px` : void 0 : `calc(100% - ${F.left}px - ${F.right}px)`
                    }
                }),
                Ge = X(() => ({
                    zIndex: ge.value - 1
                }));
            return {
                layoutItemStyles: it,
                layoutItemScrimStyles: Ge,
                zIndex: ge
            }
        },
        unregister: S => {
            i.delete(S), s.delete(S), o.delete(S), a.delete(S), l.delete(S), r.value = r.value.filter(A => A !== S)
        },
        mainRect: y,
        mainStyles: v,
        getLayoutItem: C,
        items: T,
        layoutRect: c,
        rootZIndex: n
    });
    const b = X(() => ["v-layout", {
            "v-layout--full-height": e.fullHeight
        }]),
        E = X(() => ({
            zIndex: t ? n.value : void 0,
            position: t ? "relative" : void 0,
            overflow: t ? "hidden" : void 0
        }));
    return {
        layoutClasses: b,
        layoutStyles: E,
        getLayoutItem: C,
        items: T,
        layoutRect: c,
        layoutRef: f
    }
}

function Vu() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
        blueprint: t,
        ...n
    } = e, r = We(t, n), {
        aliases: s = {},
        components: o = {},
        directives: i = {}
    } = r, a = nv(r.defaults), l = n0(r.display, r.ssr), f = h0(r.theme), c = u0(r.icons), u = uv(r.locale), d = Xv(r.date, u), h = o0(r.goTo, u);
    return {
        install: v => {
            for (const T in i) v.directive(T, i[T]);
            for (const T in o) v.component(T, o[T]);
            for (const T in s) v.component(T, lr({ ...s[T],
                name: T,
                aliasName: s[T].name
            }));
            if (f.install(v), v.provide(Rn, a), v.provide(Ja, l), v.provide(Xr, f), v.provide(Eo, c), v.provide(Zr, u), v.provide(Qv, d.options), v.provide(za, d.instance), v.provide(r0, h), ze && r.ssr)
                if (v.$nuxt) v.$nuxt.hook("app:suspense:resolve", () => {
                    l.update()
                });
                else {
                    const {
                        mount: T
                    } = v;
                    v.mount = function() {
                        const C = T(...arguments);
                        return nn(() => l.update()), v.mount = T, C
                    }
                }
            Du.reset(), v.mixin({
                computed: {
                    $vuetify() {
                        return Se({
                            defaults: ln.call(this, Rn),
                            display: ln.call(this, Ja),
                            theme: ln.call(this, Xr),
                            icons: ln.call(this, Eo),
                            locale: ln.call(this, Zr),
                            date: ln.call(this, za)
                        })
                    }
                }
            })
        },
        defaults: a,
        display: l,
        theme: f,
        icons: c,
        locale: u,
        date: d,
        goTo: h
    }
}
const _0 = "3.7.2";
Vu.version = _0;

function ln(e) {
    var r, s;
    const t = this.$,
        n = ((r = t.parent) == null ? void 0 : r.provides) ? ? ((s = t.vnode.appContext) == null ? void 0 : s.provides);
    if (n && e in n) return n[e]
}
const w0 = dt(e => {
        const t = Vu({});
        e.vueApp.use(t)
    }),
    E0 = [Jg, Qg, dy, hy, py, gy, yy, vy, by, w0],
    T0 = Tt({
        props: {
            vnode: {
                type: Object,
                required: !0
            },
            route: {
                type: Object,
                required: !0
            },
            vnodeRef: Object,
            renderKey: String,
            trackRootNodes: Boolean
        },
        setup(e) {
            const t = e.renderKey,
                n = e.route,
                r = {};
            for (const s in e.route) Object.defineProperty(r, s, {
                get: () => t === e.renderKey ? e.route[s] : n[s],
                enumerable: !0
            });
            return rt(ar, _t(r)), () => He(e.vnode, {
                ref: e.vnodeRef
            })
        }
    }),
    C0 = Tt({
        name: "NuxtPage",
        inheritAttrs: !1,
        props: {
            name: {
                type: String
            },
            transition: {
                type: [Boolean, Object],
                default: void 0
            },
            keepalive: {
                type: [Boolean, Object],
                default: void 0
            },
            route: {
                type: Object
            },
            pageKey: {
                type: [Function, String],
                default: null
            }
        },
        setup(e, {
            attrs: t,
            slots: n,
            expose: r
        }) {
            const s = be(),
                o = Te(),
                i = ye(ar, null);
            let a;
            r({
                pageRef: o
            });
            const l = ye(Xc, null);
            let f;
            const c = s.deferHydration();
            if (s.isHydrating) {
                const u = s.hooks.hookOnce("app:error", c);
                Ze().beforeEach(u)
            }
            return e.pageKey && Ke(() => e.pageKey, (u, d) => {
                u !== d && s.callHook("page:loading:start")
            }), () => He(Su, {
                name: e.name,
                route: e.route,
                ...t
            }, {
                default: u => {
                    const d = k0(i, u.route, u.Component),
                        h = i && i.matched.length === u.route.matched.length;
                    if (!u.Component) {
                        if (f && !h) return f;
                        c();
                        return
                    }
                    if (f && l && !l.isCurrent(u.route)) return f;
                    if (d && i && (!l || l != null && l.isCurrent(i))) return h ? f : null;
                    const y = _o(u, e.pageKey);
                    !s.isHydrating && !R0(i, u.route, u.Component) && a === y && s.callHook("page:loading:end"), a = y;
                    const v = !!(e.transition ? ? u.route.meta.pageTransition ? ? io),
                        T = v && S0([e.transition, u.route.meta.pageTransition, io, {
                            onAfterLeave: () => {
                                s.callHook("page:transition:finish", u.Component)
                            }
                        }].filter(Boolean)),
                        C = e.keepalive ? ? u.route.meta.keepalive ? ? Op;
                    return f = ku(Ac, v && T, ny(C, He(qo, {
                        suspensible: !0,
                        onPending: () => s.callHook("page:start", u.Component),
                        onResolve: () => {
                            nn(() => s.callHook("page:finish", u.Component).then(() => s.callHook("page:loading:end")).finally(c))
                        }
                    }, {
                        default: () => {
                            const _ = He(T0, {
                                key: y || void 0,
                                vnode: n.default ? He(Ie, void 0, n.default(u)) : u.Component,
                                route: u.route,
                                renderKey: y || void 0,
                                trackRootNodes: v,
                                vnodeRef: o
                            });
                            return C && (_.type.name = u.Component.type.name || u.Component.type.__name || "RouteProvider"), _
                        }
                    }))).default(), f
                }
            })
        }
    });

function S0(e) {
    const t = e.map(n => ({ ...n,
        onAfterLeave: n.onAfterLeave ? oi(n.onAfterLeave) : void 0
    }));
    return Zc(...t)
}

function k0(e, t, n) {
    if (!e) return !1;
    const r = t.matched.findIndex(s => {
        var o;
        return ((o = s.components) == null ? void 0 : o.default) === (n == null ? void 0 : n.type)
    });
    return !r || r === -1 ? !1 : t.matched.slice(0, r).some((s, o) => {
        var i, a, l;
        return ((i = s.components) == null ? void 0 : i.default) !== ((l = (a = e.matched[o]) == null ? void 0 : a.components) == null ? void 0 : l.default)
    }) || n && _o({
        route: t,
        Component: n
    }) !== _o({
        route: e,
        Component: n
    })
}

function R0(e, t, n) {
    return e ? t.matched.findIndex(s => {
        var o;
        return ((o = s.components) == null ? void 0 : o.default) === (n == null ? void 0 : n.type)
    }) < t.matched.length - 1 : !1
}
const x0 = Tt({
        name: "LayoutLoader",
        inheritAttrs: !1,
        props: {
            name: String,
            layoutProps: Object
        },
        async setup(e, t) {
            const n = await Dt[e.name]().then(r => r.default || r);
            return () => He(n, e.layoutProps, t.slots)
        }
    }),
    A0 = Tt({
        name: "NuxtLayout",
        inheritAttrs: !1,
        props: {
            name: {
                type: [String, Boolean, Object],
                default: null
            },
            fallback: {
                type: [String, Object],
                default: null
            }
        },
        setup(e, t) {
            const n = be(),
                r = ye(ar),
                s = r === ei() ? ey() : r,
                o = X(() => {
                    let l = se(e.name) ? ? s.meta.layout ? ? "default";
                    return l && !(l in Dt) && e.fallback && (l = se(e.fallback)), l
                }),
                i = Te();
            t.expose({
                layoutRef: i
            });
            const a = n.deferHydration();
            if (n.isHydrating) {
                const l = n.hooks.hookOnce("app:error", a);
                Ze().beforeEach(l)
            }
            return () => {
                const l = o.value && o.value in Dt,
                    f = s.meta.layoutTransition ? ? Pp;
                return ku(Ac, l && f, {
                    default: () => He(qo, {
                        suspensible: !0,
                        onResolve: () => {
                            nn(a)
                        }
                    }, {
                        default: () => He(P0, {
                            layoutProps: zo(t.attrs, {
                                ref: i
                            }),
                            key: o.value || void 0,
                            name: o.value,
                            shouldProvide: !e.name,
                            hasTransition: !!f
                        }, t.slots)
                    })
                }).default()
            }
        }
    }),
    P0 = Tt({
        name: "NuxtLayoutProvider",
        inheritAttrs: !1,
        props: {
            name: {
                type: [String, Boolean]
            },
            layoutProps: {
                type: Object
            },
            hasTransition: {
                type: Boolean
            },
            shouldProvide: {
                type: Boolean
            }
        },
        setup(e, t) {
            const n = e.name;
            return e.shouldProvide && rt(Xc, {
                isCurrent: r => n === (r.meta.layout ? ? "default")
            }), () => {
                var r, s;
                return !n || typeof n == "string" && !(n in Dt) ? (s = (r = t.slots).default) == null ? void 0 : s.call(r) : He(x0, {
                    key: n,
                    layoutProps: e.layoutProps,
                    name: n
                }, t.slots)
            }
        }
    }),
    O0 = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [r, s] of t) n[r] = s;
        return n
    },
    M0 = Pn({ ...ev(),
        ...y0({
            fullHeight: !0
        }),
        ...f0()
    }, "VApp"),
    I0 = Hu()({
        name: "VApp",
        props: M0(),
        setup(e, t) {
            let {
                slots: n
            } = t;
            const r = p0(e),
                {
                    layoutClasses: s,
                    getLayoutItem: o,
                    items: i,
                    layoutRef: a
                } = b0(e),
                {
                    rtlClasses: l
                } = hv();
            return ov(() => {
                var f;
                return re("div", {
                    ref: a,
                    class: ["v-application", r.themeClasses.value, s.value, l.value, e.class],
                    style: [e.style]
                }, [re("div", {
                    class: "v-application__wrap"
                }, [(f = n.default) == null ? void 0 : f.call(n)])])
            }), {
                getLayoutItem: o,
                items: i,
                theme: r
            }
        }
    }),
    D0 = {};

function H0(e, t) {
    const n = C0,
        r = A0;
    return yt(), Yt(r, null, {
        default: Hr(() => [re(I0, {
            class: "bg-grey-lighten-3"
        }, {
            default: Hr(() => [re(n)]),
            _: 1
        })]),
        _: 1
    })
}
const L0 = O0(D0, [
        ["render", H0]
    ]),
    $0 = {
        __name: "nuxt-error-page",
        props: {
            error: Object
        },
        setup(e) {
            const n = e.error;
            n.stack && n.stack.split(`
`).splice(1).map(u => ({
                text: u.replace("webpack:/", "").replace(".vue", ".js").trim(),
                internal: u.includes("node_modules") && !u.includes(".cache") || u.includes("internal") || u.includes("new Promise")
            })).map(u => `<span class="stack${u.internal?" internal":""}">${u.text}</span>`).join(`
`);
            const r = Number(n.statusCode || 500),
                s = r === 404,
                o = n.statusMessage ? ? (s ? "Page Not Found" : "Internal Server Error"),
                i = n.message || n.toString(),
                a = void 0,
                c = s ? vi(() => hn(() =>
                    import ("./CmgSrMk8.js"), __vite__mapDeps([6, 7, 8]),
                    import.meta.url)) : vi(() => hn(() =>
                    import ("./BVfxdEYM.js"), __vite__mapDeps([9, 7, 10]),
                    import.meta.url));
            return (u, d) => (yt(), Yt(se(c), nf(wc({
                statusCode: se(r),
                statusMessage: se(o),
                description: se(i),
                stack: se(a)
            })), null, 16))
        }
    },
    F0 = {
        key: 0
    },
    il = {
        __name: "nuxt-root",
        setup(e) {
            const t = () => null,
                n = be(),
                r = n.deferHydration();
            if (n.isHydrating) {
                const l = n.hooks.hookOnce("app:error", r);
                Ze().beforeEach(l)
            }
            const s = !1;
            rt(ar, ei()), n.hooks.callHookWith(l => l.map(f => f()), "vue:setup");
            const o = fs(),
                i = !1;
            zl((l, f, c) => {
                if (n.hooks.callHook("vue:error", l, f, c).catch(u => console.error("[nuxt] Error in `vue:error` hook", u)), Qp(l) && (l.fatal || l.unhandled)) return n.runWithContext(() => dn(l)), !1
            });
            const a = !1;
            return (l, f) => (yt(), Yt(qo, {
                onResolve: se(r)
            }, {
                default: Hr(() => [se(i) ? (yt(), $d("div", F0)) : se(o) ? (yt(), Yt(se($0), {
                    key: 1,
                    error: se(o)
                }, null, 8, ["error"])) : se(a) ? (yt(), Yt(se(t), {
                    key: 2,
                    context: se(a)
                }, null, 8, ["context"])) : se(s) ? (yt(), Yt(sd(se(s)), {
                    key: 3
                })) : (yt(), Yt(se(L0), {
                    key: 4
                }))]),
                _: 1
            }, 8, ["onResolve"]))
        }
    };
let al; {
    let e;
    al = async function() {
        var i, a;
        if (e) return e;
        const r = !!(((i = window.__NUXT__) == null ? void 0 : i.serverRendered) ? ? ((a = document.getElementById("__NUXT_DATA__")) == null ? void 0 : a.dataset.ssr) === "true") ? Th(il) : Eh(il),
            s = Lp({
                vueApp: r
            });
        async function o(l) {
            await s.callHook("app:error", l), s.payload.error = s.payload.error || ds(l)
        }
        r.config.errorHandler = o;
        try {
            await Np(s, E0)
        } catch (l) {
            o(l)
        }
        try {
            await s.hooks.callHook("app:created", r), await s.hooks.callHook("app:beforeMount", r), r.mount(Ip), await s.hooks.callHook("app:mounted", r), await nn()
        } catch (l) {
            o(l)
        }
        return r.config.errorHandler === o && (r.config.errorHandler = void 0), r
    }, e = al().catch(t => {
        throw console.error("Error while mounting app:", t), t
    })
}
export {
    ov as $, Hr as A, Ec as B, J0 as C, as as D, po as E, Ke as F, Jf as G, zf as H, An as I, Yt as J, ib as K, Pn as L, fb as M, Ee as N, ob as O, Ky as P, ub as Q, wt as R, Xy as S, br as T, hv as U, ev as V, f0 as W, Hu as X, p0 as Y, Mf as Z, O0 as _, be as a, Ie as a0, q0 as a1, Ve as a2, Qf as a3, Yl as a4, af as a5, ds as a6, se as a7, vl as a8, N0 as a9, X0 as aA, eb as aB, j0 as aC, pb as aD, sr as aE, K0 as aF, Je as aG, V0 as aH, ab as aI, hb as aJ, nb as aK, Sy as aL, _y as aM, tb as aN, rb as aO, U0 as aP, Et as aQ, cb as aR, ei as aS, W0 as aT, Se as aa, Y0 as ab, db as ac, Bt as ad, Du as ae, rt as af, ye as ag, iv as ah, jo as ai, Ty as aj, sb as ak, Fn as al, zo as am, Hl as an, l0 as ao, gb as ap, Py as aq, Qt as ar, Q0 as as, g0 as at, xy as au, ze as av, Ac as aw, sd as ax, lb as ay, nn as az, ii as b, Aa as c, Tt as d, is as e, Z0 as f, B0 as g, He as h, X as i, rn as j, Jp as k, Qo as l, z0 as m, G0 as n, os as o, jh as p, us as q, Te as r, Zo as s, yt as t, Ze as u, $d as v, ro as w, _c as x, of as y, re as z
};