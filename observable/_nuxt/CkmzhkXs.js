import {
    K as We,
    L as x,
    M as q,
    i as v,
    N as Z,
    O as Et,
    P as ft,
    Q as Nn,
    R as On,
    S as Fn,
    T as E,
    U as pe,
    V as z,
    W as Y,
    X as R,
    Y as ee,
    Z as j,
    $ as A,
    z as d,
    d as qe,
    t as Ye,
    v as zn,
    A as M,
    x as Ue,
    y as Pe,
    a0 as fe,
    a as An,
    a1 as ce,
    r as O,
    a2 as Ie,
    a3 as Dt,
    a4 as Mn,
    F as K,
    a5 as vt,
    a6 as jn,
    a7 as oe,
    I as Hn,
    a8 as Wn,
    a9 as le,
    aa as $e,
    ab as Un,
    ac as Rt,
    ad as De,
    ae as Re,
    af as Tt,
    ag as Nt,
    e as Te,
    ah as _e,
    o as Ot,
    ai as Gn,
    aj as Ft,
    ak as ge,
    al as Kn,
    am as ie,
    an as qn,
    ao as J,
    ap as Yn,
    aq as Xn,
    ar as Jn,
    as as zt,
    at as Qn,
    D as Zn,
    au as gt,
    av as ea,
    aw as Ne,
    ax as ta,
    ay as ht,
    az as Le,
    aA as na,
    aB as mt,
    aC as Oe,
    aD as Fe,
    aE as Xe,
    h as Ce,
    aF as Je,
    aG as aa,
    aH as At,
    aI as re,
    aJ as sa,
    aK as la,
    aL as ia,
    aM as yt,
    aN as ra,
    aO as oa,
    aP as ua,
    aQ as ca,
    aR as da,
    aS as fa,
    aT as va,
    J as Mt,
    B as ga
} from "./DGNVAc6k.js";
const bt = Object.freeze({
    ignoreUnknown: !1,
    respectType: !1,
    respectFunctionNames: !1,
    respectFunctionProperties: !1,
    unorderedObjects: !0,
    unorderedArrays: !1,
    unorderedSets: !1,
    excludeKeys: void 0,
    excludeValues: void 0,
    replacer: void 0
});

function ha(e, s) {
    s ? s = { ...bt,
        ...s
    } : s = bt;
    const a = jt(s);
    return a.dispatch(e), a.toString()
}
const ma = Object.freeze(["prototype", "__proto__", "constructor"]);

function jt(e) {
    let s = "",
        a = new Map;
    const t = n => {
        s += n
    };
    return {
        toString() {
            return s
        },
        getContext() {
            return a
        },
        dispatch(n) {
            return e.replacer && (n = e.replacer(n)), this[n === null ? "null" : typeof n](n)
        },
        object(n) {
            if (n && typeof n.toJSON == "function") return this.object(n.toJSON());
            const l = Object.prototype.toString.call(n);
            let i = "";
            const r = l.length;
            r < 10 ? i = "unknown:[" + l + "]" : i = l.slice(8, r - 1), i = i.toLowerCase();
            let o = null;
            if ((o = a.get(n)) === void 0) a.set(n, a.size);
            else return this.dispatch("[CIRCULAR:" + o + "]");
            if (typeof Buffer < "u" && Buffer.isBuffer && Buffer.isBuffer(n)) return t("buffer:"), t(n.toString("utf8"));
            if (i !== "object" && i !== "function" && i !== "asyncfunction") this[i] ? this[i](n) : e.ignoreUnknown || this.unkown(n, i);
            else {
                let f = Object.keys(n);
                e.unorderedObjects && (f = f.sort());
                let g = [];
                e.respectType !== !1 && !pt(n) && (g = ma), e.excludeKeys && (f = f.filter(u => !e.excludeKeys(u)), g = g.filter(u => !e.excludeKeys(u))), t("object:" + (f.length + g.length) + ":");
                const c = u => {
                    this.dispatch(u), t(":"), e.excludeValues || this.dispatch(n[u]), t(",")
                };
                for (const u of f) c(u);
                for (const u of g) c(u)
            }
        },
        array(n, l) {
            if (l = l === void 0 ? e.unorderedArrays !== !1 : l, t("array:" + n.length + ":"), !l || n.length <= 1) {
                for (const o of n) this.dispatch(o);
                return
            }
            const i = new Map,
                r = n.map(o => {
                    const f = jt(e);
                    f.dispatch(o);
                    for (const [g, c] of f.getContext()) i.set(g, c);
                    return f.toString()
                });
            return a = i, r.sort(), this.array(r, !1)
        },
        date(n) {
            return t("date:" + n.toJSON())
        },
        symbol(n) {
            return t("symbol:" + n.toString())
        },
        unkown(n, l) {
            if (t(l), !!n && (t(":"), n && typeof n.entries == "function")) return this.array(Array.from(n.entries()), !0)
        },
        error(n) {
            return t("error:" + n.toString())
        },
        boolean(n) {
            return t("bool:" + n)
        },
        string(n) {
            t("string:" + n.length + ":"), t(n)
        },
        function(n) {
            t("fn:"), pt(n) ? this.dispatch("[native]") : this.dispatch(n.toString()), e.respectFunctionNames !== !1 && this.dispatch("function-name:" + String(n.name)), e.respectFunctionProperties && this.object(n)
        },
        number(n) {
            return t("number:" + n)
        },
        xml(n) {
            return t("xml:" + n.toString())
        },
        null() {
            return t("Null")
        },
        undefined() {
            return t("Undefined")
        },
        regexp(n) {
            return t("regex:" + n.toString())
        },
        uint8array(n) {
            return t("uint8array:"), this.dispatch(Array.prototype.slice.call(n))
        },
        uint8clampedarray(n) {
            return t("uint8clampedarray:"), this.dispatch(Array.prototype.slice.call(n))
        },
        int8array(n) {
            return t("int8array:"), this.dispatch(Array.prototype.slice.call(n))
        },
        uint16array(n) {
            return t("uint16array:"), this.dispatch(Array.prototype.slice.call(n))
        },
        int16array(n) {
            return t("int16array:"), this.dispatch(Array.prototype.slice.call(n))
        },
        uint32array(n) {
            return t("uint32array:"), this.dispatch(Array.prototype.slice.call(n))
        },
        int32array(n) {
            return t("int32array:"), this.dispatch(Array.prototype.slice.call(n))
        },
        float32array(n) {
            return t("float32array:"), this.dispatch(Array.prototype.slice.call(n))
        },
        float64array(n) {
            return t("float64array:"), this.dispatch(Array.prototype.slice.call(n))
        },
        arraybuffer(n) {
            return t("arraybuffer:"), this.dispatch(new Uint8Array(n))
        },
        url(n) {
            return t("url:" + n.toString())
        },
        map(n) {
            t("map:");
            const l = [...n];
            return this.array(l, e.unorderedSets !== !1)
        },
        set(n) {
            t("set:");
            const l = [...n];
            return this.array(l, e.unorderedSets !== !1)
        },
        file(n) {
            return t("file:"), this.dispatch([n.name, n.size, n.type, n.lastModfied])
        },
        blob() {
            if (e.ignoreUnknown) return t("[blob]");
            throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)
        },
        domwindow() {
            return t("domwindow")
        },
        bigint(n) {
            return t("bigint:" + n.toString())
        },
        process() {
            return t("process")
        },
        timer() {
            return t("timer")
        },
        pipe() {
            return t("pipe")
        },
        tcp() {
            return t("tcp")
        },
        udp() {
            return t("udp")
        },
        tty() {
            return t("tty")
        },
        statwatcher() {
            return t("statwatcher")
        },
        securecontext() {
            return t("securecontext")
        },
        connection() {
            return t("connection")
        },
        zlib() {
            return t("zlib")
        },
        context() {
            return t("context")
        },
        nodescript() {
            return t("nodescript")
        },
        httpparser() {
            return t("httpparser")
        },
        dataview() {
            return t("dataview")
        },
        signal() {
            return t("signal")
        },
        fsevent() {
            return t("fsevent")
        },
        tlswrap() {
            return t("tlswrap")
        }
    }
}
const Ht = "[native code] }",
    ya = Ht.length;

function pt(e) {
    return typeof e != "function" ? !1 : Function.prototype.toString.call(e).slice(-ya) === Ht
}
var ba = Object.defineProperty,
    pa = (e, s, a) => s in e ? ba(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : e[s] = a,
    de = (e, s, a) => (pa(e, typeof s != "symbol" ? s + "" : s, a), a);
class Q {
    constructor(s, a) {
        de(this, "words"), de(this, "sigBytes"), s = this.words = s || [], this.sigBytes = a === void 0 ? s.length * 4 : a
    }
    toString(s) {
        return (s || _a).stringify(this)
    }
    concat(s) {
        if (this.clamp(), this.sigBytes % 4)
            for (let a = 0; a < s.sigBytes; a++) {
                const t = s.words[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                this.words[this.sigBytes + a >>> 2] |= t << 24 - (this.sigBytes + a) % 4 * 8
            } else
                for (let a = 0; a < s.sigBytes; a += 4) this.words[this.sigBytes + a >>> 2] = s.words[a >>> 2];
        return this.sigBytes += s.sigBytes, this
    }
    clamp() {
        this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4)
    }
    clone() {
        return new Q([...this.words])
    }
}
const _a = {
        stringify(e) {
            const s = [];
            for (let a = 0; a < e.sigBytes; a++) {
                const t = e.words[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                s.push((t >>> 4).toString(16), (t & 15).toString(16))
            }
            return s.join("")
        }
    },
    Ca = {
        stringify(e) {
            const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                a = [];
            for (let t = 0; t < e.sigBytes; t += 3) {
                const n = e.words[t >>> 2] >>> 24 - t % 4 * 8 & 255,
                    l = e.words[t + 1 >>> 2] >>> 24 - (t + 1) % 4 * 8 & 255,
                    i = e.words[t + 2 >>> 2] >>> 24 - (t + 2) % 4 * 8 & 255,
                    r = n << 16 | l << 8 | i;
                for (let o = 0; o < 4 && t * 8 + o * 6 < e.sigBytes * 8; o++) a.push(s.charAt(r >>> 6 * (3 - o) & 63))
            }
            return a.join("")
        }
    },
    Sa = {
        parse(e) {
            const s = e.length,
                a = [];
            for (let t = 0; t < s; t++) a[t >>> 2] |= (e.charCodeAt(t) & 255) << 24 - t % 4 * 8;
            return new Q(a, s)
        }
    },
    wa = {
        parse(e) {
            return Sa.parse(unescape(encodeURIComponent(e)))
        }
    };
class xa {
    constructor() {
        de(this, "_data", new Q), de(this, "_nDataBytes", 0), de(this, "_minBufferSize", 0), de(this, "blockSize", 512 / 32)
    }
    reset() {
        this._data = new Q, this._nDataBytes = 0
    }
    _append(s) {
        typeof s == "string" && (s = wa.parse(s)), this._data.concat(s), this._nDataBytes += s.sigBytes
    }
    _doProcessBlock(s, a) {}
    _process(s) {
        let a, t = this._data.sigBytes / (this.blockSize * 4);
        s ? t = Math.ceil(t) : t = Math.max((t | 0) - this._minBufferSize, 0);
        const n = t * this.blockSize,
            l = Math.min(n * 4, this._data.sigBytes);
        if (n) {
            for (let i = 0; i < n; i += this.blockSize) this._doProcessBlock(this._data.words, i);
            a = this._data.words.splice(0, n), this._data.sigBytes -= l
        }
        return new Q(a, l)
    }
}
class ka extends xa {
    update(s) {
        return this._append(s), this._process(), this
    }
    finalize(s) {
        s && this._append(s)
    }
}
var Ba = Object.defineProperty,
    Va = (e, s, a) => s in e ? Ba(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : e[s] = a,
    Pa = (e, s, a) => (Va(e, s + "", a), a);
const _t = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225],
    Ia = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998],
    se = [];
class $a extends ka {
    constructor() {
        super(...arguments), Pa(this, "_hash", new Q([..._t]))
    }
    reset() {
        super.reset(), this._hash = new Q([..._t])
    }
    _doProcessBlock(s, a) {
        const t = this._hash.words;
        let n = t[0],
            l = t[1],
            i = t[2],
            r = t[3],
            o = t[4],
            f = t[5],
            g = t[6],
            c = t[7];
        for (let u = 0; u < 64; u++) {
            if (u < 16) se[u] = s[a + u] | 0;
            else {
                const S = se[u - 15],
                    w = (S << 25 | S >>> 7) ^ (S << 14 | S >>> 18) ^ S >>> 3,
                    p = se[u - 2],
                    C = (p << 15 | p >>> 17) ^ (p << 13 | p >>> 19) ^ p >>> 10;
                se[u] = w + se[u - 7] + C + se[u - 16]
            }
            const h = o & f ^ ~o & g,
                _ = n & l ^ n & i ^ l & i,
                m = (n << 30 | n >>> 2) ^ (n << 19 | n >>> 13) ^ (n << 10 | n >>> 22),
                b = (o << 26 | o >>> 6) ^ (o << 21 | o >>> 11) ^ (o << 7 | o >>> 25),
                y = c + b + h + Ia[u] + se[u],
                k = m + _;
            c = g, g = f, f = o, o = r + y | 0, r = i, i = l, l = n, n = y + k | 0
        }
        t[0] = t[0] + n | 0, t[1] = t[1] + l | 0, t[2] = t[2] + i | 0, t[3] = t[3] + r | 0, t[4] = t[4] + o | 0, t[5] = t[5] + f | 0, t[6] = t[6] + g | 0, t[7] = t[7] + c | 0
    }
    finalize(s) {
        super.finalize(s);
        const a = this._nDataBytes * 8,
            t = this._data.sigBytes * 8;
        return this._data.words[t >>> 5] |= 128 << 24 - t % 32, this._data.words[(t + 64 >>> 9 << 4) + 14] = Math.floor(a / 4294967296), this._data.words[(t + 64 >>> 9 << 4) + 15] = a, this._data.sigBytes = this._data.words.length * 4, this._process(), this._hash
    }
}

function La(e) {
    return new $a().finalize(e).toString(Ca)
}

function Ea(e, s = {}) {
    const a = typeof e == "string" ? e : ha(e, s);
    return La(a).slice(0, 10)
}
const Da = ["top", "bottom"],
    Ra = ["start", "end", "left", "right"];

function Ta(e, s) {
    let [a, t] = e.split(" ");
    return t || (t = We(Da, a) ? "start" : We(Ra, a) ? "top" : "center"), {
        side: Ct(a, s),
        align: Ct(t, s)
    }
}

function Ct(e, s) {
    return e === "start" ? s ? "right" : "left" : e === "end" ? s ? "left" : "right" : e
}
class Me {
    constructor(s) {
        let {
            x: a,
            y: t,
            width: n,
            height: l
        } = s;
        this.x = a, this.y = t, this.width = n, this.height = l
    }
    get top() {
        return this.y
    }
    get bottom() {
        return this.y + this.height
    }
    get left() {
        return this.x
    }
    get right() {
        return this.x + this.width
    }
}

function Na(e) {
    const s = e.getBoundingClientRect(),
        a = getComputedStyle(e),
        t = a.transform;
    if (t) {
        let n, l, i, r, o;
        if (t.startsWith("matrix3d(")) n = t.slice(9, -1).split(/, /), l = +n[0], i = +n[5], r = +n[12], o = +n[13];
        else if (t.startsWith("matrix(")) n = t.slice(7, -1).split(/, /), l = +n[0], i = +n[3], r = +n[4], o = +n[5];
        else return new Me(s);
        const f = a.transformOrigin,
            g = s.x - r - (1 - l) * parseFloat(f),
            c = s.y - o - (1 - i) * parseFloat(f.slice(f.indexOf(" ") + 1)),
            u = l ? s.width / l : e.offsetWidth + 1,
            h = i ? s.height / i : e.offsetHeight + 1;
        return new Me({
            x: g,
            y: c,
            width: u,
            height: h
        })
    } else return new Me(s)
}

function Oa(e, s, a) {
    if (typeof e.animate > "u") return {
        finished: Promise.resolve()
    };
    let t;
    try {
        t = e.animate(s, a)
    } catch {
        return {
            finished: Promise.resolve()
        }
    }
    return typeof t.finished > "u" && (t.finished = new Promise(n => {
        t.onfinish = () => {
            n(t)
        }
    })), t
}
const Fa = "cubic-bezier(0.4, 0, 0.2, 1)",
    Qe = x({
        border: [Boolean, Number, String]
    }, "border");

function Ze(e) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : q();
    return {
        borderClasses: v(() => {
            const t = Z(e) ? e.value : e.border,
                n = [];
            if (t === !0 || t === "") n.push(`${s}--border`);
            else if (typeof t == "string" || t === 0)
                for (const l of String(t).split(" ")) n.push(`border-${l}`);
            return n
        })
    }
}

function et(e) {
    return Et(() => {
        const s = [],
            a = {};
        if (e.value.background)
            if (ft(e.value.background)) {
                if (a.backgroundColor = e.value.background, !e.value.text && Nn(e.value.background)) {
                    const t = On(e.value.background);
                    if (t.a == null || t.a === 1) {
                        const n = Fn(t);
                        a.color = n, a.caretColor = n
                    }
                }
            } else s.push(`bg-${e.value.background}`);
        return e.value.text && (ft(e.value.text) ? (a.color = e.value.text, a.caretColor = e.value.text) : s.push(`text-${e.value.text}`)), {
            colorClasses: s,
            colorStyles: a
        }
    })
}

function ve(e, s) {
    const a = v(() => ({
            text: Z(e) ? e.value : s ? e[s] : null
        })),
        {
            colorClasses: t,
            colorStyles: n
        } = et(a);
    return {
        textColorClasses: t,
        textColorStyles: n
    }
}

function he(e, s) {
    const a = v(() => ({
            background: Z(e) ? e.value : s ? e[s] : null
        })),
        {
            colorClasses: t,
            colorStyles: n
        } = et(a);
    return {
        backgroundColorClasses: t,
        backgroundColorStyles: n
    }
}
const ze = x({
    height: [Number, String],
    maxHeight: [Number, String],
    maxWidth: [Number, String],
    minHeight: [Number, String],
    minWidth: [Number, String],
    width: [Number, String]
}, "dimension");

function Ae(e) {
    return {
        dimensionStyles: v(() => {
            const a = {},
                t = E(e.height),
                n = E(e.maxHeight),
                l = E(e.maxWidth),
                i = E(e.minHeight),
                r = E(e.minWidth),
                o = E(e.width);
            return t != null && (a.height = t), n != null && (a.maxHeight = n), l != null && (a.maxWidth = l), i != null && (a.minHeight = i), r != null && (a.minWidth = r), o != null && (a.width = o), a
        })
    }
}
const tt = x({
    elevation: {
        type: [Number, String],
        validator(e) {
            const s = parseInt(e);
            return !isNaN(s) && s >= 0 && s <= 24
        }
    }
}, "elevation");

function nt(e) {
    return {
        elevationClasses: v(() => {
            const a = Z(e) ? e.value : e.elevation,
                t = [];
            return a == null || t.push(`elevation-${a}`), t
        })
    }
}
const St = {
        center: "center",
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left"
    },
    at = x({
        location: String
    }, "location");

function st(e) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
        a = arguments.length > 2 ? arguments[2] : void 0;
    const {
        isRtl: t
    } = pe();
    return {
        locationStyles: v(() => {
            if (!e.location) return {};
            const {
                side: l,
                align: i
            } = Ta(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, t.value);

            function r(f) {
                return a ? a(f) : 0
            }
            const o = {};
            return l !== "center" && (s ? o[St[l]] = `calc(100% - ${r(l)}px)` : o[l] = 0), i !== "center" ? s ? o[St[i]] = `calc(100% - ${r(i)}px)` : o[i] = 0 : (l === "center" ? o.top = o.left = "50%" : o[{
                top: "left",
                bottom: "left",
                left: "top",
                right: "top"
            }[l]] = "50%", o.transform = {
                top: "translateX(-50%)",
                bottom: "translateX(-50%)",
                left: "translateY(-50%)",
                right: "translateY(-50%)",
                center: "translate(-50%, -50%)"
            }[l]), o
        })
    }
}
const za = ["static", "relative", "fixed", "absolute", "sticky"],
    Wt = x({
        position: {
            type: String,
            validator: e => za.includes(e)
        }
    }, "position");

function Ut(e) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : q();
    return {
        positionClasses: v(() => e.position ? `${s}--${e.position}` : void 0)
    }
}
const Se = x({
    rounded: {
        type: [Boolean, Number, String],
        default: void 0
    },
    tile: Boolean
}, "rounded");

function we(e) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : q();
    return {
        roundedClasses: v(() => {
            const t = Z(e) ? e.value : e.rounded,
                n = Z(e) ? e.value : e.tile,
                l = [];
            if (t === !0 || t === "") l.push(`${s}--rounded`);
            else if (typeof t == "string" || t === 0)
                for (const i of String(t).split(" ")) l.push(`rounded-${i}`);
            else(n || t === !1) && l.push("rounded-0");
            return l
        })
    }
}
const X = x({
        tag: {
            type: String,
            default: "div"
        }
    }, "tag"),
    Aa = x({
        color: String,
        ...Qe(),
        ...z(),
        ...ze(),
        ...tt(),
        ...at(),
        ...Wt(),
        ...Se(),
        ...X(),
        ...Y()
    }, "VSheet"),
    wt = R()({
        name: "VSheet",
        props: Aa(),
        setup(e, s) {
            let {
                slots: a
            } = s;
            const {
                themeClasses: t
            } = ee(e), {
                backgroundColorClasses: n,
                backgroundColorStyles: l
            } = he(j(e, "color")), {
                borderClasses: i
            } = Ze(e), {
                dimensionStyles: r
            } = Ae(e), {
                elevationClasses: o
            } = nt(e), {
                locationStyles: f
            } = st(e), {
                positionClasses: g
            } = Ut(e), {
                roundedClasses: c
            } = we(e);
            return A(() => d(e.tag, {
                class: ["v-sheet", t.value, n.value, i.value, o.value, g.value, c.value, e.class],
                style: [l.value, r.value, f.value, e.style]
            }, a)), {}
        }
    }),
    Ma = {
        class: "text-caption text-lime-darken-4 px-2"
    },
    nl = qe({
        __name: "HeaderCore",
        props: {
            headerTitle: {
                default: "You need to log in first of all."
            }
        },
        setup(e) {
            return (s, a) => (Ye(), zn(fe, null, [d(wt, {
                class: "bg-indigo-lighten-1",
                height: "42px"
            }), d(wt, {
                class: "bg-yellow-lighten-4 px-2",
                style: {
                    "padding-top": "2px",
                    "padding-bottom": "2px"
                }
            }, {
                default: M(() => [Ue("span", Ma, Pe(s.headerTitle), 1)]),
                _: 1
            })], 64))
        }
    }),
    ja = e => e === "defer" || e === !1;

function Ha(...e) {
    var m;
    const s = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    typeof e[0] != "string" && e.unshift(s);
    let [a, t, n = {}] = e;
    if (typeof a != "string") throw new TypeError("[nuxt] [asyncData] key must be a string.");
    if (typeof t != "function") throw new TypeError("[nuxt] [asyncData] handler must be a function.");
    const l = An(),
        i = t,
        r = () => ce.value,
        o = () => l.isHydrating ? l.payload.data[a] : l.static.data[a];
    n.server = n.server ? ? !0, n.default = n.default ? ? r, n.getCachedData = n.getCachedData ? ? o, n.lazy = n.lazy ? ? !1, n.immediate = n.immediate ? ? !0, n.deep = n.deep ? ? ce.deep, n.dedupe = n.dedupe ? ? "cancel";
    const f = n.getCachedData(a, l),
        g = f != null;
    if (!l._asyncData[a] || !n.immediate) {
        (m = l.payload._errors)[a] ? ? (m[a] = ce.errorValue);
        const b = n.deep ? O : Ie;
        l._asyncData[a] = {
            data: b(g ? f : n.default()),
            pending: O(!g),
            error: j(l.payload._errors, a),
            status: O("idle"),
            _default: n.default
        }
    }
    const c = { ...l._asyncData[a]
    };
    delete c._default, c.refresh = c.execute = (b = {}) => {
        if (l._asyncDataPromises[a]) {
            if (ja(b.dedupe ? ? n.dedupe)) return l._asyncDataPromises[a];
            l._asyncDataPromises[a].cancelled = !0
        }
        if (b._initial || l.isHydrating && b._initial !== !1) {
            const k = b._initial ? f : n.getCachedData(a, l);
            if (k != null) return Promise.resolve(k)
        }
        c.pending.value = !0, c.status.value = "pending";
        const y = new Promise((k, S) => {
            try {
                k(i(l))
            } catch (w) {
                S(w)
            }
        }).then(async k => {
            if (y.cancelled) return l._asyncDataPromises[a];
            let S = k;
            n.transform && (S = await n.transform(k)), n.pick && (S = Ua(S, n.pick)), l.payload.data[a] = S, c.data.value = S, c.error.value = ce.errorValue, c.status.value = "success"
        }).catch(k => {
            if (y.cancelled) return l._asyncDataPromises[a];
            c.error.value = jn(k), c.data.value = oe(n.default()), c.status.value = "error"
        }).finally(() => {
            y.cancelled || (c.pending.value = !1, delete l._asyncDataPromises[a])
        });
        return l._asyncDataPromises[a] = y, l._asyncDataPromises[a]
    }, c.clear = () => Wa(l, a);
    const u = () => c.refresh({
            _initial: !0
        }),
        h = n.server !== !1 && l.payload.serverRendered; {
        const b = Hn();
        if (b && !b._nuxtOnBeforeMountCbs) {
            b._nuxtOnBeforeMountCbs = [];
            const S = b._nuxtOnBeforeMountCbs;
            Dt(() => {
                S.forEach(w => {
                    w()
                }), S.splice(0, S.length)
            }), Mn(() => S.splice(0, S.length))
        }
        h && l.isHydrating && (c.error.value || f != null) ? (c.pending.value = !1, c.status.value = c.error.value ? "error" : "success") : b && (l.payload.serverRendered && l.isHydrating || n.lazy) && n.immediate ? b._nuxtOnBeforeMountCbs.push(u) : n.immediate && u();
        const y = Wn();
        if (n.watch) {
            const S = K(n.watch, () => c.refresh());
            y && vt(S)
        }
        const k = l.hook("app:data:refresh", async S => {
            (!S || S.includes(a)) && await c.refresh()
        });
        y && vt(k)
    }
    const _ = Promise.resolve(l._asyncDataPromises[a]).then(() => c);
    return Object.assign(_, c), _
}

function Wa(e, s) {
    s in e.payload.data && (e.payload.data[s] = void 0), s in e.payload._errors && (e.payload._errors[s] = ce.errorValue), e._asyncData[s] && (e._asyncData[s].data.value = e._asyncData[s]._default(), e._asyncData[s].error.value = ce.errorValue, e._asyncData[s].pending.value = !1, e._asyncData[s].status.value = "idle"), s in e._asyncDataPromises && (e._asyncDataPromises[s] && (e._asyncDataPromises[s].cancelled = !0), e._asyncDataPromises[s] = void 0)
}

function Ua(e, s) {
    const a = {};
    for (const t of s) a[t] = e[t];
    return a
}

function xt(e, s, a) {
    const [t = {}, n] = typeof s == "string" ? [{}, s] : [s, a], l = v(() => le(e)), i = t.key || Ea([n, typeof l.value == "string" ? l.value : "", ...Ga(t)]);
    if (!i || typeof i != "string") throw new TypeError("[nuxt] [useFetch] key must be a string: " + i);
    if (!e) throw new Error("[nuxt] [useFetch] request is missing.");
    const r = i === n ? "$f" + i : i;
    if (!t.baseURL && typeof l.value == "string" && l.value[0] === "/" && l.value[1] === "/") throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
    const {
        server: o,
        lazy: f,
        default: g,
        transform: c,
        pick: u,
        watch: h,
        immediate: _,
        getCachedData: m,
        deep: b,
        dedupe: y,
        ...k
    } = t, S = $e({ ...Un,
        ...k,
        cache: typeof t.cache == "boolean" ? void 0 : t.cache
    }), w = {
        server: o,
        lazy: f,
        default: g,
        transform: c,
        pick: u,
        immediate: _,
        getCachedData: m,
        deep: b,
        dedupe: y,
        watch: h === !1 ? [] : [S, l, ...h || []]
    };
    let p;
    return Ha(r, () => {
        var F;
        (F = p == null ? void 0 : p.abort) == null || F.call(p, "Request aborted as another request to the same endpoint was initiated."), p = typeof AbortController < "u" ? new AbortController : {};
        const B = le(t.timeout);
        let P;
        return B && (P = setTimeout(() => p.abort("Request aborted due to timeout."), B), p.signal.onabort = () => clearTimeout(P)), (t.$fetch || globalThis.$fetch)(l.value, {
            signal: p.signal,
            ...S
        }).finally(() => {
            clearTimeout(P)
        })
    }, w)
}

function Ga(e) {
    var a;
    const s = [((a = le(e.method)) == null ? void 0 : a.toUpperCase()) || "GET", le(e.baseURL)];
    for (const t of [e.params || e.query]) {
        const n = le(t);
        if (!n) continue;
        const l = {};
        for (const [i, r] of Object.entries(n)) l[le(i)] = le(r);
        s.push(l)
    }
    return s
}
const Ka = [null, "default", "comfortable", "compact"],
    lt = x({
        density: {
            type: String,
            default: "default",
            validator: e => Ka.includes(e)
        }
    }, "density");

function it(e) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : q();
    return {
        densityClasses: v(() => `${s}--density-${e.density}`)
    }
}
const qa = ["elevated", "flat", "tonal", "outlined", "text", "plain"];

function Ya(e, s) {
    return d(fe, null, [d("span", {
        key: "overlay",
        class: `${s}__overlay`
    }, null), d("span", {
        key: "underlay",
        class: `${s}__underlay`
    }, null)])
}
const Gt = x({
    color: String,
    variant: {
        type: String,
        default: "elevated",
        validator: e => qa.includes(e)
    }
}, "variant");

function Xa(e) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : q();
    const a = v(() => {
            const {
                variant: l
            } = oe(e);
            return `${s}--variant-${l}`
        }),
        {
            colorClasses: t,
            colorStyles: n
        } = et(v(() => {
            const {
                variant: l,
                color: i
            } = oe(e);
            return {
                [
                    ["elevated", "flat"].includes(l) ? "background" : "text"
                ]: i
            }
        }));
    return {
        colorClasses: t,
        colorStyles: n,
        variantClasses: a
    }
}
const Kt = x({
        baseColor: String,
        divided: Boolean,
        ...Qe(),
        ...z(),
        ...lt(),
        ...tt(),
        ...Se(),
        ...X(),
        ...Y(),
        ...Gt()
    }, "VBtnGroup"),
    kt = R()({
        name: "VBtnGroup",
        props: Kt(),
        setup(e, s) {
            let {
                slots: a
            } = s;
            const {
                themeClasses: t
            } = ee(e), {
                densityClasses: n
            } = it(e), {
                borderClasses: l
            } = Ze(e), {
                elevationClasses: i
            } = nt(e), {
                roundedClasses: r
            } = we(e);
            Rt({
                VBtn: {
                    height: "auto",
                    baseColor: j(e, "baseColor"),
                    color: j(e, "color"),
                    density: j(e, "density"),
                    flat: !0,
                    variant: j(e, "variant")
                }
            }), A(() => d(e.tag, {
                class: ["v-btn-group", {
                    "v-btn-group--divided": e.divided
                }, t.value, l.value, n.value, i.value, r.value, e.class],
                style: e.style
            }, a))
        }
    }),
    Ja = x({
        modelValue: {
            type: null,
            default: void 0
        },
        multiple: Boolean,
        mandatory: [Boolean, String],
        max: Number,
        selectedClass: String,
        disabled: Boolean
    }, "group"),
    Qa = x({
        value: null,
        disabled: Boolean,
        selectedClass: String
    }, "group-item");

function Za(e, s) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
    const t = De("useGroupItem");
    if (!t) throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
    const n = Re();
    Tt(Symbol.for(`${s.description}:id`), n);
    const l = Nt(s, null);
    if (!l) {
        if (!a) return l;
        throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${s.description}`)
    }
    const i = j(e, "value"),
        r = v(() => !!(l.disabled.value || e.disabled));
    l.register({
        id: n,
        value: i,
        disabled: r
    }, t), Te(() => {
        l.unregister(n)
    });
    const o = v(() => l.isSelected(n)),
        f = v(() => l.items.value[0].id === n),
        g = v(() => l.items.value[l.items.value.length - 1].id === n),
        c = v(() => o.value && [l.selectedClass.value, e.selectedClass]);
    return K(o, u => {
        t.emit("group:selected", {
            value: u
        })
    }, {
        flush: "sync"
    }), {
        id: n,
        isSelected: o,
        isFirst: f,
        isLast: g,
        toggle: () => l.select(n, !o.value),
        select: u => l.select(n, u),
        selectedClass: c,
        value: i,
        disabled: r,
        group: l
    }
}

function es(e, s) {
    let a = !1;
    const t = $e([]),
        n = _e(e, "modelValue", [], u => u == null ? [] : qt(t, ge(u)), u => {
            const h = ns(t, u);
            return e.multiple ? h : h[0]
        }),
        l = De("useGroup");

    function i(u, h) {
        const _ = u,
            m = Symbol.for(`${s.description}:id`),
            y = Kn(m, l == null ? void 0 : l.vnode).indexOf(h);
        oe(_.value) == null && (_.value = y, _.useIndexAsValue = !0), y > -1 ? t.splice(y, 0, _) : t.push(_)
    }

    function r(u) {
        if (a) return;
        o();
        const h = t.findIndex(_ => _.id === u);
        t.splice(h, 1)
    }

    function o() {
        const u = t.find(h => !h.disabled);
        u && e.mandatory === "force" && !n.value.length && (n.value = [u.id])
    }
    Ot(() => {
        o()
    }), Te(() => {
        a = !0
    }), Gn(() => {
        for (let u = 0; u < t.length; u++) t[u].useIndexAsValue && (t[u].value = u)
    });

    function f(u, h) {
        const _ = t.find(m => m.id === u);
        if (!(h && (_ != null && _.disabled)))
            if (e.multiple) {
                const m = n.value.slice(),
                    b = m.findIndex(k => k === u),
                    y = ~b;
                if (h = h ? ? !y, y && e.mandatory && m.length <= 1 || !y && e.max != null && m.length + 1 > e.max) return;
                b < 0 && h ? m.push(u) : b >= 0 && !h && m.splice(b, 1), n.value = m
            } else {
                const m = n.value.includes(u);
                if (e.mandatory && m) return;
                n.value = h ? ? !m ? [u] : []
            }
    }

    function g(u) {
        if (e.multiple, n.value.length) {
            const h = n.value[0],
                _ = t.findIndex(y => y.id === h);
            let m = (_ + u) % t.length,
                b = t[m];
            for (; b.disabled && m !== _;) m = (m + u) % t.length, b = t[m];
            if (b.disabled) return;
            n.value = [t[m].id]
        } else {
            const h = t.find(_ => !_.disabled);
            h && (n.value = [h.id])
        }
    }
    const c = {
        register: i,
        unregister: r,
        selected: n,
        select: f,
        disabled: j(e, "disabled"),
        prev: () => g(t.length - 1),
        next: () => g(1),
        isSelected: u => n.value.includes(u),
        selectedClass: v(() => e.selectedClass),
        items: v(() => t),
        getItemIndex: u => ts(t, u)
    };
    return Tt(s, c), c
}

function ts(e, s) {
    const a = qt(e, [s]);
    return a.length ? e.findIndex(t => t.id === a[0]) : -1
}

function qt(e, s) {
    const a = [];
    return s.forEach(t => {
        const n = e.find(i => Ft(t, i.value)),
            l = e[t];
        (n == null ? void 0 : n.value) != null ? a.push(n.id) : l != null && a.push(l.id)
    }), a
}

function ns(e, s) {
    const a = [];
    return s.forEach(t => {
        const n = e.findIndex(l => l.id === t);
        if (~n) {
            const l = e[n];
            a.push(l.value != null ? l.value : n)
        }
    }), a
}
const Yt = Symbol.for("vuetify:v-btn-toggle"),
    as = x({ ...Kt(),
        ...Ja()
    }, "VBtnToggle");
R()({
    name: "VBtnToggle",
    props: as(),
    emits: {
        "update:modelValue": e => !0
    },
    setup(e, s) {
        let {
            slots: a
        } = s;
        const {
            isSelected: t,
            next: n,
            prev: l,
            select: i,
            selected: r
        } = es(e, Yt);
        return A(() => {
            const o = kt.filterProps(e);
            return d(kt, ie({
                class: ["v-btn-toggle", e.class]
            }, o, {
                style: e.style
            }), {
                default: () => {
                    var f;
                    return [(f = a.default) == null ? void 0 : f.call(a, {
                        isSelected: t,
                        next: n,
                        prev: l,
                        select: i,
                        selected: r
                    })]
                }
            })
        }), {
            next: n,
            prev: l,
            select: i
        }
    }
});
const ss = x({
        defaults: Object,
        disabled: Boolean,
        reset: [Number, String],
        root: [Boolean, String],
        scoped: Boolean
    }, "VDefaultsProvider"),
    ke = R(!1)({
        name: "VDefaultsProvider",
        props: ss(),
        setup(e, s) {
            let {
                slots: a
            } = s;
            const {
                defaults: t,
                disabled: n,
                reset: l,
                root: i,
                scoped: r
            } = qn(e);
            return Rt(t, {
                reset: l,
                root: i,
                scoped: r,
                disabled: n
            }), () => {
                var o;
                return (o = a.default) == null ? void 0 : o.call(a)
            }
        }
    }),
    ls = ["x-small", "small", "default", "large", "x-large"],
    rt = x({
        size: {
            type: [String, Number],
            default: "default"
        }
    }, "size");

function ot(e) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : q();
    return Et(() => {
        let a, t;
        return We(ls, e.size) ? a = `${s}--size-${e.size}` : e.size && (t = {
            width: E(e.size),
            height: E(e.size)
        }), {
            sizeClasses: a,
            sizeStyles: t
        }
    })
}
const is = x({
        color: String,
        disabled: Boolean,
        start: Boolean,
        end: Boolean,
        icon: J,
        ...z(),
        ...rt(),
        ...X({
            tag: "i"
        }),
        ...Y()
    }, "VIcon"),
    Be = R()({
        name: "VIcon",
        props: is(),
        setup(e, s) {
            let {
                attrs: a,
                slots: t
            } = s;
            const n = O(),
                {
                    themeClasses: l
                } = ee(e),
                {
                    iconData: i
                } = Yn(v(() => n.value || e.icon)),
                {
                    sizeClasses: r
                } = ot(e),
                {
                    textColorClasses: o,
                    textColorStyles: f
                } = ve(j(e, "color"));
            return A(() => {
                var u, h;
                const g = (u = t.default) == null ? void 0 : u.call(t);
                g && (n.value = (h = Xn(g).filter(_ => _.type === Jn && _.children && typeof _.children == "string")[0]) == null ? void 0 : h.children);
                const c = !!(a.onClick || a.onClickOnce);
                return d(i.value.component, {
                    tag: e.tag,
                    icon: i.value.icon,
                    class: ["v-icon", "notranslate", l.value, r.value, o.value, {
                        "v-icon--clickable": c,
                        "v-icon--disabled": e.disabled,
                        "v-icon--start": e.start,
                        "v-icon--end": e.end
                    }, e.class],
                    style: [r.value ? void 0 : {
                        fontSize: E(e.size),
                        height: E(e.size),
                        width: E(e.size)
                    }, f.value, e.style],
                    role: c ? "button" : void 0,
                    "aria-hidden": !c,
                    tabindex: c ? e.disabled ? -1 : 0 : void 0
                }, {
                    default: () => [g]
                })
            }), {}
        }
    });

function Xt(e, s) {
    const a = O(),
        t = Ie(!1);
    if (zt) {
        const n = new IntersectionObserver(l => {
            t.value = !!l.find(i => i.isIntersecting)
        }, s);
        Te(() => {
            n.disconnect()
        }), K(a, (l, i) => {
            i && (n.unobserve(i), t.value = !1), l && n.observe(l)
        }, {
            flush: "post"
        })
    }
    return {
        intersectionRef: a,
        isIntersecting: t
    }
}
const rs = x({
        bgColor: String,
        color: String,
        indeterminate: [Boolean, String],
        modelValue: {
            type: [Number, String],
            default: 0
        },
        rotate: {
            type: [Number, String],
            default: 0
        },
        width: {
            type: [Number, String],
            default: 4
        },
        ...z(),
        ...rt(),
        ...X({
            tag: "div"
        }),
        ...Y()
    }, "VProgressCircular"),
    os = R()({
        name: "VProgressCircular",
        props: rs(),
        setup(e, s) {
            let {
                slots: a
            } = s;
            const t = 20,
                n = 2 * Math.PI * t,
                l = O(),
                {
                    themeClasses: i
                } = ee(e),
                {
                    sizeClasses: r,
                    sizeStyles: o
                } = ot(e),
                {
                    textColorClasses: f,
                    textColorStyles: g
                } = ve(j(e, "color")),
                {
                    textColorClasses: c,
                    textColorStyles: u
                } = ve(j(e, "bgColor")),
                {
                    intersectionRef: h,
                    isIntersecting: _
                } = Xt(),
                {
                    resizeRef: m,
                    contentRect: b
                } = Qn(),
                y = v(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))),
                k = v(() => Number(e.width)),
                S = v(() => o.value ? Number(e.size) : b.value ? b.value.width : Math.max(k.value, 32)),
                w = v(() => t / (1 - k.value / S.value) * 2),
                p = v(() => k.value / S.value * w.value),
                C = v(() => E((100 - y.value) / 100 * n));
            return Zn(() => {
                h.value = l.value, m.value = l.value
            }), A(() => d(e.tag, {
                ref: l,
                class: ["v-progress-circular", {
                    "v-progress-circular--indeterminate": !!e.indeterminate,
                    "v-progress-circular--visible": _.value,
                    "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
                }, i.value, r.value, f.value, e.class],
                style: [o.value, g.value, e.style],
                role: "progressbar",
                "aria-valuemin": "0",
                "aria-valuemax": "100",
                "aria-valuenow": e.indeterminate ? void 0 : y.value
            }, {
                default: () => [d("svg", {
                    style: {
                        transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
                    },
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: `0 0 ${w.value} ${w.value}`
                }, [d("circle", {
                    class: ["v-progress-circular__underlay", c.value],
                    style: u.value,
                    fill: "transparent",
                    cx: "50%",
                    cy: "50%",
                    r: t,
                    "stroke-width": p.value,
                    "stroke-dasharray": n,
                    "stroke-dashoffset": 0
                }, null), d("circle", {
                    class: "v-progress-circular__overlay",
                    fill: "transparent",
                    cx: "50%",
                    cy: "50%",
                    r: t,
                    "stroke-width": p.value,
                    "stroke-dasharray": n,
                    "stroke-dashoffset": C.value
                }, null)]), a.default && d("div", {
                    class: "v-progress-circular__content"
                }, [a.default({
                    value: y.value
                })])]
            })), {}
        }
    }),
    us = x({
        absolute: Boolean,
        active: {
            type: Boolean,
            default: !0
        },
        bgColor: String,
        bgOpacity: [Number, String],
        bufferValue: {
            type: [Number, String],
            default: 0
        },
        bufferColor: String,
        bufferOpacity: [Number, String],
        clickable: Boolean,
        color: String,
        height: {
            type: [Number, String],
            default: 4
        },
        indeterminate: Boolean,
        max: {
            type: [Number, String],
            default: 100
        },
        modelValue: {
            type: [Number, String],
            default: 0
        },
        opacity: [Number, String],
        reverse: Boolean,
        stream: Boolean,
        striped: Boolean,
        roundedBar: Boolean,
        ...z(),
        ...at({
            location: "top"
        }),
        ...Se(),
        ...X(),
        ...Y()
    }, "VProgressLinear"),
    cs = R()({
        name: "VProgressLinear",
        props: us(),
        emits: {
            "update:modelValue": e => !0
        },
        setup(e, s) {
            var I;
            let {
                slots: a
            } = s;
            const t = _e(e, "modelValue"),
                {
                    isRtl: n,
                    rtlClasses: l
                } = pe(),
                {
                    themeClasses: i
                } = ee(e),
                {
                    locationStyles: r
                } = st(e),
                {
                    textColorClasses: o,
                    textColorStyles: f
                } = ve(e, "color"),
                {
                    backgroundColorClasses: g,
                    backgroundColorStyles: c
                } = he(v(() => e.bgColor || e.color)),
                {
                    backgroundColorClasses: u,
                    backgroundColorStyles: h
                } = he(v(() => e.bufferColor || e.bgColor || e.color)),
                {
                    backgroundColorClasses: _,
                    backgroundColorStyles: m
                } = he(e, "color"),
                {
                    roundedClasses: b
                } = we(e),
                {
                    intersectionRef: y,
                    isIntersecting: k
                } = Xt(),
                S = v(() => parseFloat(e.max)),
                w = v(() => parseFloat(e.height)),
                p = v(() => gt(parseFloat(e.bufferValue) / S.value * 100, 0, 100)),
                C = v(() => gt(parseFloat(t.value) / S.value * 100, 0, 100)),
                B = v(() => n.value !== e.reverse),
                P = v(() => e.indeterminate ? "fade-transition" : "slide-x-transition"),
                V = ea && ((I = window.matchMedia) == null ? void 0 : I.call(window, "(forced-colors: active)").matches);

            function F(D) {
                if (!y.value) return;
                const {
                    left: N,
                    right: $,
                    width: L
                } = y.value.getBoundingClientRect(), T = B.value ? L - D.clientX + ($ - L) : D.clientX - N;
                t.value = Math.round(T / L * S.value)
            }
            return A(() => d(e.tag, {
                ref: y,
                class: ["v-progress-linear", {
                    "v-progress-linear--absolute": e.absolute,
                    "v-progress-linear--active": e.active && k.value,
                    "v-progress-linear--reverse": B.value,
                    "v-progress-linear--rounded": e.rounded,
                    "v-progress-linear--rounded-bar": e.roundedBar,
                    "v-progress-linear--striped": e.striped
                }, b.value, i.value, l.value, e.class],
                style: [{
                    bottom: e.location === "bottom" ? 0 : void 0,
                    top: e.location === "top" ? 0 : void 0,
                    height: e.active ? E(w.value) : 0,
                    "--v-progress-linear-height": E(w.value),
                    ...e.absolute ? r.value : {}
                }, e.style],
                role: "progressbar",
                "aria-hidden": e.active ? "false" : "true",
                "aria-valuemin": "0",
                "aria-valuemax": e.max,
                "aria-valuenow": e.indeterminate ? void 0 : C.value,
                onClick: e.clickable && F
            }, {
                default: () => [e.stream && d("div", {
                    key: "stream",
                    class: ["v-progress-linear__stream", o.value],
                    style: { ...f.value,
                        [B.value ? "left" : "right"]: E(-w.value),
                        borderTop: `${E(w.value/2)} dotted`,
                        opacity: parseFloat(e.bufferOpacity),
                        top: `calc(50% - ${E(w.value/4)})`,
                        width: E(100 - p.value, "%"),
                        "--v-progress-linear-stream-to": E(w.value * (B.value ? 1 : -1))
                    }
                }, null), d("div", {
                    class: ["v-progress-linear__background", V ? void 0 : g.value],
                    style: [c.value, {
                        opacity: parseFloat(e.bgOpacity),
                        width: e.stream ? 0 : void 0
                    }]
                }, null), d("div", {
                    class: ["v-progress-linear__buffer", V ? void 0 : u.value],
                    style: [h.value, {
                        opacity: parseFloat(e.bufferOpacity),
                        width: E(p.value, "%")
                    }]
                }, null), d(Ne, {
                    name: P.value
                }, {
                    default: () => [e.indeterminate ? d("div", {
                        class: "v-progress-linear__indeterminate"
                    }, [
                        ["long", "short"].map(D => d("div", {
                            key: D,
                            class: ["v-progress-linear__indeterminate", D, V ? void 0 : _.value],
                            style: m.value
                        }, null))
                    ]) : d("div", {
                        class: ["v-progress-linear__determinate", V ? void 0 : _.value],
                        style: [m.value, {
                            width: E(C.value, "%")
                        }]
                    }, null)]
                }), a.default && d("div", {
                    class: "v-progress-linear__content"
                }, [a.default({
                    value: C.value,
                    buffer: p.value
                })])]
            })), {}
        }
    }),
    Jt = x({
        loading: [Boolean, String]
    }, "loader");

function Qt(e) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : q();
    return {
        loaderClasses: v(() => ({
            [`${s}--loading`]: e.loading
        }))
    }
}

function ds(e, s) {
    var t;
    let {
        slots: a
    } = s;
    return d("div", {
        class: `${e.name}__loader`
    }, [((t = a.default) == null ? void 0 : t.call(a, {
        color: e.color,
        isActive: e.active
    })) || d(cs, {
        absolute: e.absolute,
        active: e.active,
        color: e.color,
        height: "2",
        indeterminate: !0
    }, null)])
}

function fs() {
    const e = De("useRoute");
    return v(() => {
        var s;
        return (s = e == null ? void 0 : e.proxy) == null ? void 0 : s.$route
    })
}

function vs(e, s) {
    var c, u;
    const a = ta("RouterLink"),
        t = v(() => !!(e.href || e.to)),
        n = v(() => (t == null ? void 0 : t.value) || ht(s, "click") || ht(e, "click"));
    if (typeof a == "string" || !("useLink" in a)) {
        const h = j(e, "href");
        return {
            isLink: t,
            isClickable: n,
            href: h,
            linkProps: $e({
                href: h
            })
        }
    }
    const l = v(() => ({ ...e,
            to: j(() => e.to || "")
        })),
        i = a.useLink(l.value),
        r = v(() => e.to ? i : void 0),
        o = fs(),
        f = v(() => {
            var h, _, m;
            return r.value ? e.exact ? o.value ? ((m = r.value.isExactActive) == null ? void 0 : m.value) && Ft(r.value.route.value.query, o.value.query) : ((_ = r.value.isExactActive) == null ? void 0 : _.value) ? ? !1 : ((h = r.value.isActive) == null ? void 0 : h.value) ? ? !1 : !1
        }),
        g = v(() => {
            var h;
            return e.to ? (h = r.value) == null ? void 0 : h.route.value.href : e.href
        });
    return {
        isLink: t,
        isClickable: n,
        isActive: f,
        route: (c = r.value) == null ? void 0 : c.route,
        navigate: (u = r.value) == null ? void 0 : u.navigate,
        href: g,
        linkProps: $e({
            href: g,
            "aria-current": v(() => f.value ? "page" : void 0)
        })
    }
}
const gs = x({
    href: String,
    replace: Boolean,
    to: [String, Object],
    exact: Boolean
}, "router");

function hs(e, s) {
    K(() => {
        var a;
        return (a = e.isActive) == null ? void 0 : a.value
    }, a => {
        e.isLink.value && a && s && Le(() => {
            s(!0)
        })
    }, {
        immediate: !0
    })
}
const Ge = Symbol("rippleStop"),
    ms = 80;

function Bt(e, s) {
    e.style.transform = s, e.style.webkitTransform = s
}

function Ke(e) {
    return e.constructor.name === "TouchEvent"
}

function Zt(e) {
    return e.constructor.name === "KeyboardEvent"
}
const ys = function(e, s) {
        var c;
        let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
            t = 0,
            n = 0;
        if (!Zt(e)) {
            const u = s.getBoundingClientRect(),
                h = Ke(e) ? e.touches[e.touches.length - 1] : e;
            t = h.clientX - u.left, n = h.clientY - u.top
        }
        let l = 0,
            i = .3;
        (c = s._ripple) != null && c.circle ? (i = .15, l = s.clientWidth / 2, l = a.center ? l : l + Math.sqrt((t - l) ** 2 + (n - l) ** 2) / 4) : l = Math.sqrt(s.clientWidth ** 2 + s.clientHeight ** 2) / 2;
        const r = `${(s.clientWidth-l*2)/2}px`,
            o = `${(s.clientHeight-l*2)/2}px`,
            f = a.center ? r : `${t-l}px`,
            g = a.center ? o : `${n-l}px`;
        return {
            radius: l,
            scale: i,
            x: f,
            y: g,
            centerX: r,
            centerY: o
        }
    },
    Ee = {
        show(e, s) {
            var h;
            let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
            if (!((h = s == null ? void 0 : s._ripple) != null && h.enabled)) return;
            const t = document.createElement("span"),
                n = document.createElement("span");
            t.appendChild(n), t.className = "v-ripple__container", a.class && (t.className += ` ${a.class}`);
            const {
                radius: l,
                scale: i,
                x: r,
                y: o,
                centerX: f,
                centerY: g
            } = ys(e, s, a), c = `${l*2}px`;
            n.className = "v-ripple__animation", n.style.width = c, n.style.height = c, s.appendChild(t);
            const u = window.getComputedStyle(s);
            u && u.position === "static" && (s.style.position = "relative", s.dataset.previousPosition = "static"), n.classList.add("v-ripple__animation--enter"), n.classList.add("v-ripple__animation--visible"), Bt(n, `translate(${r}, ${o}) scale3d(${i},${i},${i})`), n.dataset.activated = String(performance.now()), setTimeout(() => {
                n.classList.remove("v-ripple__animation--enter"), n.classList.add("v-ripple__animation--in"), Bt(n, `translate(${f}, ${g}) scale3d(1,1,1)`)
            }, 0)
        },
        hide(e) {
            var l;
            if (!((l = e == null ? void 0 : e._ripple) != null && l.enabled)) return;
            const s = e.getElementsByClassName("v-ripple__animation");
            if (s.length === 0) return;
            const a = s[s.length - 1];
            if (a.dataset.isHiding) return;
            a.dataset.isHiding = "true";
            const t = performance.now() - Number(a.dataset.activated),
                n = Math.max(250 - t, 0);
            setTimeout(() => {
                a.classList.remove("v-ripple__animation--in"), a.classList.add("v-ripple__animation--out"), setTimeout(() => {
                    var r;
                    e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((r = a.parentNode) == null ? void 0 : r.parentNode) === e && e.removeChild(a.parentNode)
                }, 300)
            }, n)
        }
    };

function en(e) {
    return typeof e > "u" || !!e
}

function ye(e) {
    const s = {},
        a = e.currentTarget;
    if (!(!(a != null && a._ripple) || a._ripple.touched || e[Ge])) {
        if (e[Ge] = !0, Ke(e)) a._ripple.touched = !0, a._ripple.isTouch = !0;
        else if (a._ripple.isTouch) return;
        if (s.center = a._ripple.centered || Zt(e), a._ripple.class && (s.class = a._ripple.class), Ke(e)) {
            if (a._ripple.showTimerCommit) return;
            a._ripple.showTimerCommit = () => {
                Ee.show(e, a, s)
            }, a._ripple.showTimer = window.setTimeout(() => {
                var t;
                (t = a == null ? void 0 : a._ripple) != null && t.showTimerCommit && (a._ripple.showTimerCommit(), a._ripple.showTimerCommit = null)
            }, ms)
        } else Ee.show(e, a, s)
    }
}

function Vt(e) {
    e[Ge] = !0
}

function H(e) {
    const s = e.currentTarget;
    if (s != null && s._ripple) {
        if (window.clearTimeout(s._ripple.showTimer), e.type === "touchend" && s._ripple.showTimerCommit) {
            s._ripple.showTimerCommit(), s._ripple.showTimerCommit = null, s._ripple.showTimer = window.setTimeout(() => {
                H(e)
            });
            return
        }
        window.setTimeout(() => {
            s._ripple && (s._ripple.touched = !1)
        }), Ee.hide(s)
    }
}

function tn(e) {
    const s = e.currentTarget;
    s != null && s._ripple && (s._ripple.showTimerCommit && (s._ripple.showTimerCommit = null), window.clearTimeout(s._ripple.showTimer))
}
let be = !1;

function nn(e) {
    !be && (e.keyCode === mt.enter || e.keyCode === mt.space) && (be = !0, ye(e))
}

function an(e) {
    be = !1, H(e)
}

function sn(e) {
    be && (be = !1, H(e))
}

function ln(e, s, a) {
    const {
        value: t,
        modifiers: n
    } = s, l = en(t);
    if (l || Ee.hide(e), e._ripple = e._ripple ? ? {}, e._ripple.enabled = l, e._ripple.centered = n.center, e._ripple.circle = n.circle, na(t) && t.class && (e._ripple.class = t.class), l && !a) {
        if (n.stop) {
            e.addEventListener("touchstart", Vt, {
                passive: !0
            }), e.addEventListener("mousedown", Vt);
            return
        }
        e.addEventListener("touchstart", ye, {
            passive: !0
        }), e.addEventListener("touchend", H, {
            passive: !0
        }), e.addEventListener("touchmove", tn, {
            passive: !0
        }), e.addEventListener("touchcancel", H), e.addEventListener("mousedown", ye), e.addEventListener("mouseup", H), e.addEventListener("mouseleave", H), e.addEventListener("keydown", nn), e.addEventListener("keyup", an), e.addEventListener("blur", sn), e.addEventListener("dragstart", H, {
            passive: !0
        })
    } else !l && a && rn(e)
}

function rn(e) {
    e.removeEventListener("mousedown", ye), e.removeEventListener("touchstart", ye), e.removeEventListener("touchend", H), e.removeEventListener("touchmove", tn), e.removeEventListener("touchcancel", H), e.removeEventListener("mouseup", H), e.removeEventListener("mouseleave", H), e.removeEventListener("keydown", nn), e.removeEventListener("keyup", an), e.removeEventListener("dragstart", H), e.removeEventListener("blur", sn)
}

function bs(e, s) {
    ln(e, s, !1)
}

function ps(e) {
    delete e._ripple, rn(e)
}

function _s(e, s) {
    if (s.value === s.oldValue) return;
    const a = en(s.oldValue);
    ln(e, s, a)
}
const Cs = {
        mounted: bs,
        unmounted: ps,
        updated: _s
    },
    Ss = x({
        active: {
            type: Boolean,
            default: void 0
        },
        activeColor: String,
        baseColor: String,
        symbol: {
            type: null,
            default: Yt
        },
        flat: Boolean,
        icon: [Boolean, String, Function, Object],
        prependIcon: J,
        appendIcon: J,
        block: Boolean,
        readonly: Boolean,
        slim: Boolean,
        stacked: Boolean,
        ripple: {
            type: [Boolean, Object],
            default: !0
        },
        text: String,
        ...Qe(),
        ...z(),
        ...lt(),
        ...ze(),
        ...tt(),
        ...Qa(),
        ...Jt(),
        ...at(),
        ...Wt(),
        ...Se(),
        ...gs(),
        ...rt(),
        ...X({
            tag: "button"
        }),
        ...Y(),
        ...Gt({
            variant: "elevated"
        })
    }, "VBtn"),
    on = R()({
        name: "VBtn",
        props: Ss(),
        emits: {
            "group:selected": e => !0
        },
        setup(e, s) {
            let {
                attrs: a,
                slots: t
            } = s;
            const {
                themeClasses: n
            } = ee(e), {
                borderClasses: l
            } = Ze(e), {
                densityClasses: i
            } = it(e), {
                dimensionStyles: r
            } = Ae(e), {
                elevationClasses: o
            } = nt(e), {
                loaderClasses: f
            } = Qt(e), {
                locationStyles: g
            } = st(e), {
                positionClasses: c
            } = Ut(e), {
                roundedClasses: u
            } = we(e), {
                sizeClasses: h,
                sizeStyles: _
            } = ot(e), m = Za(e, e.symbol, !1), b = vs(e, a), y = v(() => {
                var I;
                return e.active !== void 0 ? e.active : b.isLink.value ? (I = b.isActive) == null ? void 0 : I.value : m == null ? void 0 : m.isSelected.value
            }), k = v(() => y.value ? e.activeColor ? ? e.color : e.color), S = v(() => {
                var D, N;
                return {
                    color: (m == null ? void 0 : m.isSelected.value) && (!b.isLink.value || ((D = b.isActive) == null ? void 0 : D.value)) || !m || ((N = b.isActive) == null ? void 0 : N.value) ? k.value ? ? e.baseColor : e.baseColor,
                    variant: e.variant
                }
            }), {
                colorClasses: w,
                colorStyles: p,
                variantClasses: C
            } = Xa(S), B = v(() => (m == null ? void 0 : m.disabled.value) || e.disabled), P = v(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), V = v(() => {
                if (!(e.value === void 0 || typeof e.value == "symbol")) return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value
            });

            function F(I) {
                var D;
                B.value || b.isLink.value && (I.metaKey || I.ctrlKey || I.shiftKey || I.button !== 0 || a.target === "_blank") || ((D = b.navigate) == null || D.call(b, I), m == null || m.toggle())
            }
            return hs(b, m == null ? void 0 : m.select), A(() => {
                const I = b.isLink.value ? "a" : e.tag,
                    D = !!(e.prependIcon || t.prepend),
                    N = !!(e.appendIcon || t.append),
                    $ = !!(e.icon && e.icon !== !0);
                return Oe(d(I, ie({
                    type: I === "a" ? void 0 : "button",
                    class: ["v-btn", m == null ? void 0 : m.selectedClass.value, {
                        "v-btn--active": y.value,
                        "v-btn--block": e.block,
                        "v-btn--disabled": B.value,
                        "v-btn--elevated": P.value,
                        "v-btn--flat": e.flat,
                        "v-btn--icon": !!e.icon,
                        "v-btn--loading": e.loading,
                        "v-btn--readonly": e.readonly,
                        "v-btn--slim": e.slim,
                        "v-btn--stacked": e.stacked
                    }, n.value, l.value, w.value, i.value, o.value, f.value, c.value, u.value, h.value, C.value, e.class],
                    style: [p.value, r.value, g.value, _.value, e.style],
                    "aria-busy": e.loading ? !0 : void 0,
                    disabled: B.value || void 0,
                    tabindex: e.loading || e.readonly ? -1 : void 0,
                    onClick: F,
                    value: V.value
                }, b.linkProps), {
                    default: () => {
                        var L;
                        return [Ya(!0, "v-btn"), !e.icon && D && d("span", {
                            key: "prepend",
                            class: "v-btn__prepend"
                        }, [t.prepend ? d(ke, {
                            key: "prepend-defaults",
                            disabled: !e.prependIcon,
                            defaults: {
                                VIcon: {
                                    icon: e.prependIcon
                                }
                            }
                        }, t.prepend) : d(Be, {
                            key: "prepend-icon",
                            icon: e.prependIcon
                        }, null)]), d("span", {
                            class: "v-btn__content",
                            "data-no-activator": ""
                        }, [!t.default && $ ? d(Be, {
                            key: "content-icon",
                            icon: e.icon
                        }, null) : d(ke, {
                            key: "content-defaults",
                            disabled: !$,
                            defaults: {
                                VIcon: {
                                    icon: e.icon
                                }
                            }
                        }, {
                            default: () => {
                                var T;
                                return [((T = t.default) == null ? void 0 : T.call(t)) ? ? e.text]
                            }
                        })]), !e.icon && N && d("span", {
                            key: "append",
                            class: "v-btn__append"
                        }, [t.append ? d(ke, {
                            key: "append-defaults",
                            disabled: !e.appendIcon,
                            defaults: {
                                VIcon: {
                                    icon: e.appendIcon
                                }
                            }
                        }, t.append) : d(Be, {
                            key: "append-icon",
                            icon: e.appendIcon
                        }, null)]), !!e.loading && d("span", {
                            key: "loader",
                            class: "v-btn__loader"
                        }, [((L = t.loader) == null ? void 0 : L.call(t)) ? ? d(os, {
                            color: typeof e.loading == "boolean" ? void 0 : e.loading,
                            indeterminate: !0,
                            width: "2"
                        }, null)])]
                    }
                }), [
                    [Cs, !B.value && e.ripple, "", {
                        center: !!e.icon
                    }]
                ])
            }), {
                group: m
            }
        }
    }),
    ws = x({
        fluid: {
            type: Boolean,
            default: !1
        },
        ...z(),
        ...ze(),
        ...X()
    }, "VContainer"),
    un = R()({
        name: "VContainer",
        props: ws(),
        setup(e, s) {
            let {
                slots: a
            } = s;
            const {
                rtlClasses: t
            } = pe(), {
                dimensionStyles: n
            } = Ae(e);
            return A(() => d(e.tag, {
                class: ["v-container", {
                    "v-container--fluid": e.fluid
                }, t.value, e.class],
                style: [n.value, e.style]
            }, a)), {}
        }
    }),
    cn = Fe.reduce((e, s) => (e[s] = {
        type: [Boolean, String, Number],
        default: !1
    }, e), {}),
    dn = Fe.reduce((e, s) => {
        const a = "offset" + Xe(s);
        return e[a] = {
            type: [String, Number],
            default: null
        }, e
    }, {}),
    fn = Fe.reduce((e, s) => {
        const a = "order" + Xe(s);
        return e[a] = {
            type: [String, Number],
            default: null
        }, e
    }, {}),
    Pt = {
        col: Object.keys(cn),
        offset: Object.keys(dn),
        order: Object.keys(fn)
    };

function xs(e, s, a) {
    let t = e;
    if (!(a == null || a === !1)) {
        if (s) {
            const n = s.replace(e, "");
            t += `-${n}`
        }
        return e === "col" && (t = "v-" + t), e === "col" && (a === "" || a === !0) || (t += `-${a}`), t.toLowerCase()
    }
}
const ks = ["auto", "start", "end", "center", "baseline", "stretch"],
    Bs = x({
        cols: {
            type: [Boolean, String, Number],
            default: !1
        },
        ...cn,
        offset: {
            type: [String, Number],
            default: null
        },
        ...dn,
        order: {
            type: [String, Number],
            default: null
        },
        ...fn,
        alignSelf: {
            type: String,
            default: null,
            validator: e => ks.includes(e)
        },
        ...z(),
        ...X()
    }, "VCol"),
    Ve = R()({
        name: "VCol",
        props: Bs(),
        setup(e, s) {
            let {
                slots: a
            } = s;
            const t = v(() => {
                const n = [];
                let l;
                for (l in Pt) Pt[l].forEach(r => {
                    const o = e[r],
                        f = xs(l, r, o);
                    f && n.push(f)
                });
                const i = n.some(r => r.startsWith("v-col-"));
                return n.push({
                    "v-col": !i || !e.cols,
                    [`v-col-${e.cols}`]: e.cols,
                    [`offset-${e.offset}`]: e.offset,
                    [`order-${e.order}`]: e.order,
                    [`align-self-${e.alignSelf}`]: e.alignSelf
                }), n
            });
            return () => {
                var n;
                return Ce(e.tag, {
                    class: [t.value, e.class],
                    style: e.style
                }, (n = a.default) == null ? void 0 : n.call(a))
            }
        }
    }),
    ut = ["start", "end", "center"],
    vn = ["space-between", "space-around", "space-evenly"];

function ct(e, s) {
    return Fe.reduce((a, t) => {
        const n = e + Xe(t);
        return a[n] = s(), a
    }, {})
}
const Vs = [...ut, "baseline", "stretch"],
    gn = e => Vs.includes(e),
    hn = ct("align", () => ({
        type: String,
        default: null,
        validator: gn
    })),
    Ps = [...ut, ...vn],
    mn = e => Ps.includes(e),
    yn = ct("justify", () => ({
        type: String,
        default: null,
        validator: mn
    })),
    Is = [...ut, ...vn, "stretch"],
    bn = e => Is.includes(e),
    pn = ct("alignContent", () => ({
        type: String,
        default: null,
        validator: bn
    })),
    It = {
        align: Object.keys(hn),
        justify: Object.keys(yn),
        alignContent: Object.keys(pn)
    },
    $s = {
        align: "align",
        justify: "justify",
        alignContent: "align-content"
    };

function Ls(e, s, a) {
    let t = $s[e];
    if (a != null) {
        if (s) {
            const n = s.replace(e, "");
            t += `-${n}`
        }
        return t += `-${a}`, t.toLowerCase()
    }
}
const Es = x({
        dense: Boolean,
        noGutters: Boolean,
        align: {
            type: String,
            default: null,
            validator: gn
        },
        ...hn,
        justify: {
            type: String,
            default: null,
            validator: mn
        },
        ...yn,
        alignContent: {
            type: String,
            default: null,
            validator: bn
        },
        ...pn,
        ...z(),
        ...X()
    }, "VRow"),
    me = R()({
        name: "VRow",
        props: Es(),
        setup(e, s) {
            let {
                slots: a
            } = s;
            const t = v(() => {
                const n = [];
                let l;
                for (l in It) It[l].forEach(i => {
                    const r = e[i],
                        o = Ls(l, i, r);
                    o && n.push(o)
                });
                return n.push({
                    "v-row--no-gutters": e.noGutters,
                    "v-row--dense": e.dense,
                    [`align-${e.align}`]: e.align,
                    [`justify-${e.justify}`]: e.justify,
                    [`align-content-${e.alignContent}`]: e.alignContent
                }), n
            });
            return () => {
                var n;
                return Ce(e.tag, {
                    class: ["v-row", t.value, e.class],
                    style: e.style
                }, (n = a.default) == null ? void 0 : n.call(a))
            }
        }
    }),
    Ds = x({
        disabled: Boolean,
        group: Boolean,
        hideOnLeave: Boolean,
        leaveAbsolute: Boolean,
        mode: String,
        origin: String
    }, "transition");

function W(e, s, a) {
    return R()({
        name: e,
        props: Ds({
            mode: a,
            origin: s
        }),
        setup(t, n) {
            let {
                slots: l
            } = n;
            const i = {
                onBeforeEnter(r) {
                    t.origin && (r.style.transformOrigin = t.origin)
                },
                onLeave(r) {
                    if (t.leaveAbsolute) {
                        const {
                            offsetTop: o,
                            offsetLeft: f,
                            offsetWidth: g,
                            offsetHeight: c
                        } = r;
                        r._transitionInitialStyles = {
                            position: r.style.position,
                            top: r.style.top,
                            left: r.style.left,
                            width: r.style.width,
                            height: r.style.height
                        }, r.style.position = "absolute", r.style.top = `${o}px`, r.style.left = `${f}px`, r.style.width = `${g}px`, r.style.height = `${c}px`
                    }
                    t.hideOnLeave && r.style.setProperty("display", "none", "important")
                },
                onAfterLeave(r) {
                    if (t.leaveAbsolute && (r != null && r._transitionInitialStyles)) {
                        const {
                            position: o,
                            top: f,
                            left: g,
                            width: c,
                            height: u
                        } = r._transitionInitialStyles;
                        delete r._transitionInitialStyles, r.style.position = o || "", r.style.top = f || "", r.style.left = g || "", r.style.width = c || "", r.style.height = u || ""
                    }
                }
            };
            return () => {
                const r = t.group ? Je : Ne;
                return Ce(r, {
                    name: t.disabled ? "" : e,
                    css: !t.disabled,
                    ...t.group ? void 0 : {
                        mode: t.mode
                    },
                    ...t.disabled ? {} : i
                }, l.default)
            }
        }
    })
}

function _n(e, s) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
    return R()({
        name: e,
        props: {
            mode: {
                type: String,
                default: a
            },
            disabled: Boolean,
            group: Boolean
        },
        setup(t, n) {
            let {
                slots: l
            } = n;
            const i = t.group ? Je : Ne;
            return () => Ce(i, {
                name: t.disabled ? "" : e,
                css: !t.disabled,
                ...t.disabled ? {} : s
            }, l.default)
        }
    })
}

function Cn() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    const a = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height",
        t = aa(`offset-${a}`);
    return {
        onBeforeEnter(i) {
            i._parent = i.parentNode, i._initialStyle = {
                transition: i.style.transition,
                overflow: i.style.overflow,
                [a]: i.style[a]
            }
        },
        onEnter(i) {
            const r = i._initialStyle;
            i.style.setProperty("transition", "none", "important"), i.style.overflow = "hidden";
            const o = `${i[t]}px`;
            i.style[a] = "0", i.offsetHeight, i.style.transition = r.transition, e && i._parent && i._parent.classList.add(e), requestAnimationFrame(() => {
                i.style[a] = o
            })
        },
        onAfterEnter: l,
        onEnterCancelled: l,
        onLeave(i) {
            i._initialStyle = {
                transition: "",
                overflow: i.style.overflow,
                [a]: i.style[a]
            }, i.style.overflow = "hidden", i.style[a] = `${i[t]}px`, i.offsetHeight, requestAnimationFrame(() => i.style[a] = "0")
        },
        onAfterLeave: n,
        onLeaveCancelled: n
    };

    function n(i) {
        e && i._parent && i._parent.classList.remove(e), l(i)
    }

    function l(i) {
        const r = i._initialStyle[a];
        i.style.overflow = i._initialStyle.overflow, r != null && (i.style[a] = r), delete i._initialStyle
    }
}
W("fab-transition", "center center", "out-in");
W("dialog-bottom-transition");
W("dialog-top-transition");
W("fade-transition");
W("scale-transition");
W("scroll-x-transition");
W("scroll-x-reverse-transition");
W("scroll-y-transition");
W("scroll-y-reverse-transition");
W("slide-x-transition");
W("slide-x-reverse-transition");
const Sn = W("slide-y-transition");
W("slide-y-reverse-transition");
_n("expand-transition", Cn());
const Rs = _n("expand-x-transition", Cn("", !0)),
    wn = x({
        transition: {
            type: [Boolean, String, Object],
            default: "fade-transition",
            validator: e => e !== !0
        }
    }, "transition"),
    xn = (e, s) => {
        let {
            slots: a
        } = s;
        const {
            transition: t,
            disabled: n,
            group: l,
            ...i
        } = e, {
            component: r = l ? Je : Ne,
            ...o
        } = typeof t == "object" ? t : {};
        return Ce(r, ie(typeof t == "string" ? {
            name: n ? "" : t
        } : o, typeof t == "string" ? {} : Object.fromEntries(Object.entries({
            disabled: n,
            group: l
        }).filter(f => {
            let [g, c] = f;
            return c !== void 0
        })), i), a)
    },
    Ts = x({
        active: Boolean,
        disabled: Boolean,
        max: [Number, String],
        value: {
            type: [Number, String],
            default: 0
        },
        ...z(),
        ...wn({
            transition: {
                component: Sn
            }
        })
    }, "VCounter"),
    Ns = R()({
        name: "VCounter",
        functional: !0,
        props: Ts(),
        setup(e, s) {
            let {
                slots: a
            } = s;
            const t = v(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
            return A(() => d(xn, {
                transition: e.transition
            }, {
                default: () => [Oe(d("div", {
                    class: ["v-counter", {
                        "text-error": e.max && !e.disabled && parseFloat(e.value) > parseFloat(e.max)
                    }, e.class],
                    style: e.style
                }, [a.default ? a.default({
                    counter: t.value,
                    max: e.max,
                    value: e.value
                }) : t.value]), [
                    [At, e.active]
                ])]
            })), {}
        }
    }),
    Os = x({
        text: String,
        onClick: re(),
        ...z(),
        ...Y()
    }, "VLabel"),
    Fs = R()({
        name: "VLabel",
        props: Os(),
        setup(e, s) {
            let {
                slots: a
            } = s;
            return A(() => {
                var t;
                return d("label", {
                    class: ["v-label", {
                        "v-label--clickable": !!e.onClick
                    }, e.class],
                    style: e.style,
                    onClick: e.onClick
                }, [e.text, (t = a.default) == null ? void 0 : t.call(a)])
            }), {}
        }
    }),
    zs = x({
        floating: Boolean,
        ...z()
    }, "VFieldLabel"),
    xe = R()({
        name: "VFieldLabel",
        props: zs(),
        setup(e, s) {
            let {
                slots: a
            } = s;
            return A(() => d(Fs, {
                class: ["v-field-label", {
                    "v-field-label--floating": e.floating
                }, e.class],
                style: e.style,
                "aria-hidden": e.floating || void 0
            }, a)), {}
        }
    });

function kn(e) {
    const {
        t: s
    } = sa();

    function a(t) {
        let {
            name: n
        } = t;
        const l = {
                prepend: "prependAction",
                prependInner: "prependAction",
                append: "appendAction",
                appendInner: "appendAction",
                clear: "clear"
            }[n],
            i = e[`onClick:${n}`],
            r = i && l ? s(`$vuetify.input.${l}`, e.label ? ? "") : void 0;
        return d(Be, {
            icon: e[`${n}Icon`],
            "aria-label": r,
            onClick: i
        }, null)
    }
    return {
        InputIcon: a
    }
}
const Bn = x({
    focused: Boolean,
    "onUpdate:focused": re()
}, "focus");

function Vn(e) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : q();
    const a = _e(e, "focused"),
        t = v(() => ({
            [`${s}--focused`]: a.value
        }));

    function n() {
        a.value = !0
    }

    function l() {
        a.value = !1
    }
    return {
        focusClasses: t,
        isFocused: a,
        focus: n,
        blur: l
    }
}
const As = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"],
    Pn = x({
        appendInnerIcon: J,
        bgColor: String,
        clearable: Boolean,
        clearIcon: {
            type: J,
            default: "$clear"
        },
        active: Boolean,
        centerAffix: {
            type: Boolean,
            default: void 0
        },
        color: String,
        baseColor: String,
        dirty: Boolean,
        disabled: {
            type: Boolean,
            default: null
        },
        error: Boolean,
        flat: Boolean,
        label: String,
        persistentClear: Boolean,
        prependInnerIcon: J,
        reverse: Boolean,
        singleLine: Boolean,
        variant: {
            type: String,
            default: "filled",
            validator: e => As.includes(e)
        },
        "onClick:clear": re(),
        "onClick:appendInner": re(),
        "onClick:prependInner": re(),
        ...z(),
        ...Jt(),
        ...Se(),
        ...Y()
    }, "VField"),
    In = R()({
        name: "VField",
        inheritAttrs: !1,
        props: {
            id: String,
            ...Bn(),
            ...Pn()
        },
        emits: {
            "update:focused": e => !0,
            "update:modelValue": e => !0
        },
        setup(e, s) {
            let {
                attrs: a,
                emit: t,
                slots: n
            } = s;
            const {
                themeClasses: l
            } = ee(e), {
                loaderClasses: i
            } = Qt(e), {
                focusClasses: r,
                isFocused: o,
                focus: f,
                blur: g
            } = Vn(e), {
                InputIcon: c
            } = kn(e), {
                roundedClasses: u
            } = we(e), {
                rtlClasses: h
            } = pe(), _ = v(() => e.dirty || e.active), m = v(() => !e.singleLine && !!(e.label || n.label)), b = Re(), y = v(() => e.id || `input-${b}`), k = v(() => `${y.value}-messages`), S = O(), w = O(), p = O(), C = v(() => ["plain", "underlined"].includes(e.variant)), {
                backgroundColorClasses: B,
                backgroundColorStyles: P
            } = he(j(e, "bgColor")), {
                textColorClasses: V,
                textColorStyles: F
            } = ve(v(() => e.error || e.disabled ? void 0 : _.value && o.value ? e.color : e.baseColor));
            K(_, $ => {
                if (m.value) {
                    const L = S.value.$el,
                        T = w.value.$el;
                    requestAnimationFrame(() => {
                        const U = Na(L),
                            G = T.getBoundingClientRect(),
                            ue = G.x - U.x,
                            te = G.y - U.y - (U.height / 2 - G.height / 2),
                            ne = G.width / .75,
                            ae = Math.abs(ne - U.width) > 1 ? {
                                maxWidth: E(ne)
                            } : void 0,
                            En = getComputedStyle(L),
                            dt = getComputedStyle(T),
                            Dn = parseFloat(En.transitionDuration) * 1e3 || 150,
                            Rn = parseFloat(dt.getPropertyValue("--v-field-label-scale")),
                            Tn = dt.getPropertyValue("color");
                        L.style.visibility = "visible", T.style.visibility = "hidden", Oa(L, {
                            transform: `translate(${ue}px, ${te}px) scale(${Rn})`,
                            color: Tn,
                            ...ae
                        }, {
                            duration: Dn,
                            easing: Fa,
                            direction: $ ? "normal" : "reverse"
                        }).finished.then(() => {
                            L.style.removeProperty("visibility"), T.style.removeProperty("visibility")
                        })
                    })
                }
            }, {
                flush: "post"
            });
            const I = v(() => ({
                isActive: _,
                isFocused: o,
                controlRef: p,
                blur: g,
                focus: f
            }));

            function D($) {
                $.target !== document.activeElement && $.preventDefault()
            }

            function N($) {
                var L;
                $.key !== "Enter" && $.key !== " " || ($.preventDefault(), $.stopPropagation(), (L = e["onClick:clear"]) == null || L.call(e, new MouseEvent("click")))
            }
            return A(() => {
                var ue, te, ne;
                const $ = e.variant === "outlined",
                    L = !!(n["prepend-inner"] || e.prependInnerIcon),
                    T = !!(e.clearable || n.clear),
                    U = !!(n["append-inner"] || e.appendInnerIcon || T),
                    G = () => n.label ? n.label({ ...I.value,
                        label: e.label,
                        props: {
                            for: y.value
                        }
                    }) : e.label;
                return d("div", ie({
                    class: ["v-field", {
                        "v-field--active": _.value,
                        "v-field--appended": U,
                        "v-field--center-affix": e.centerAffix ? ? !C.value,
                        "v-field--disabled": e.disabled,
                        "v-field--dirty": e.dirty,
                        "v-field--error": e.error,
                        "v-field--flat": e.flat,
                        "v-field--has-background": !!e.bgColor,
                        "v-field--persistent-clear": e.persistentClear,
                        "v-field--prepended": L,
                        "v-field--reverse": e.reverse,
                        "v-field--single-line": e.singleLine,
                        "v-field--no-label": !G(),
                        [`v-field--variant-${e.variant}`]: !0
                    }, l.value, B.value, r.value, i.value, u.value, h.value, e.class],
                    style: [P.value, e.style],
                    onClick: D
                }, a), [d("div", {
                    class: "v-field__overlay"
                }, null), d(ds, {
                    name: "v-field",
                    active: !!e.loading,
                    color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
                }, {
                    default: n.loader
                }), L && d("div", {
                    key: "prepend",
                    class: "v-field__prepend-inner"
                }, [e.prependInnerIcon && d(c, {
                    key: "prepend-icon",
                    name: "prependInner"
                }, null), (ue = n["prepend-inner"]) == null ? void 0 : ue.call(n, I.value)]), d("div", {
                    class: "v-field__field",
                    "data-no-activator": ""
                }, [
                    ["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && m.value && d(xe, {
                        key: "floating-label",
                        ref: w,
                        class: [V.value],
                        floating: !0,
                        for: y.value,
                        style: F.value
                    }, {
                        default: () => [G()]
                    }), d(xe, {
                        ref: S,
                        for: y.value
                    }, {
                        default: () => [G()]
                    }), (te = n.default) == null ? void 0 : te.call(n, { ...I.value,
                        props: {
                            id: y.value,
                            class: "v-field__input",
                            "aria-describedby": k.value
                        },
                        focus: f,
                        blur: g
                    })
                ]), T && d(Rs, {
                    key: "clear"
                }, {
                    default: () => [Oe(d("div", {
                        class: "v-field__clearable",
                        onMousedown: ae => {
                            ae.preventDefault(), ae.stopPropagation()
                        }
                    }, [d(ke, {
                        defaults: {
                            VIcon: {
                                icon: e.clearIcon
                            }
                        }
                    }, {
                        default: () => [n.clear ? n.clear({ ...I.value,
                            props: {
                                onKeydown: N,
                                onFocus: f,
                                onBlur: g,
                                onClick: e["onClick:clear"]
                            }
                        }) : d(c, {
                            name: "clear",
                            onKeydown: N,
                            onFocus: f,
                            onBlur: g
                        }, null)]
                    })]), [
                        [At, e.dirty]
                    ])]
                }), U && d("div", {
                    key: "append",
                    class: "v-field__append-inner"
                }, [(ne = n["append-inner"]) == null ? void 0 : ne.call(n, I.value), e.appendInnerIcon && d(c, {
                    key: "append-icon",
                    name: "appendInner"
                }, null)]), d("div", {
                    class: ["v-field__outline", V.value],
                    style: F.value
                }, [$ && d(fe, null, [d("div", {
                    class: "v-field__outline__start"
                }, null), m.value && d("div", {
                    class: "v-field__outline__notch"
                }, [d(xe, {
                    ref: w,
                    floating: !0,
                    for: y.value
                }, {
                    default: () => [G()]
                })]), d("div", {
                    class: "v-field__outline__end"
                }, null)]), C.value && m.value && d(xe, {
                    ref: w,
                    floating: !0,
                    for: y.value
                }, {
                    default: () => [G()]
                })])])
            }), {
                controlRef: p
            }
        }
    });

function Ms(e) {
    const s = Object.keys(In.props).filter(a => !la(a) && a !== "class" && a !== "style");
    return ia(e, s)
}
const js = x({
        active: Boolean,
        color: String,
        messages: {
            type: [Array, String],
            default: () => []
        },
        ...z(),
        ...wn({
            transition: {
                component: Sn,
                leaveAbsolute: !0,
                group: !0
            }
        })
    }, "VMessages"),
    Hs = R()({
        name: "VMessages",
        props: js(),
        setup(e, s) {
            let {
                slots: a
            } = s;
            const t = v(() => ge(e.messages)),
                {
                    textColorClasses: n,
                    textColorStyles: l
                } = ve(v(() => e.color));
            return A(() => d(xn, {
                transition: e.transition,
                tag: "div",
                class: ["v-messages", n.value, e.class],
                style: [l.value, e.style],
                role: "alert",
                "aria-live": "polite"
            }, {
                default: () => [e.active && t.value.map((i, r) => d("div", {
                    class: "v-messages__message",
                    key: `${r}-${t.value}`
                }, [a.message ? a.message({
                    message: i
                }) : i]))]
            })), {}
        }
    }),
    Ws = Symbol.for("vuetify:form");

function Us() {
    return Nt(Ws, null)
}
const Gs = x({
    disabled: {
        type: Boolean,
        default: null
    },
    error: Boolean,
    errorMessages: {
        type: [Array, String],
        default: () => []
    },
    maxErrors: {
        type: [Number, String],
        default: 1
    },
    name: String,
    label: String,
    readonly: {
        type: Boolean,
        default: null
    },
    rules: {
        type: Array,
        default: () => []
    },
    modelValue: null,
    validateOn: String,
    validationValue: null,
    ...Bn()
}, "validation");

function Ks(e) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : q(),
        a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Re();
    const t = _e(e, "modelValue"),
        n = v(() => e.validationValue === void 0 ? t.value : e.validationValue),
        l = Us(),
        i = O([]),
        r = Ie(!0),
        o = v(() => !!(ge(t.value === "" ? null : t.value).length || ge(n.value === "" ? null : n.value).length)),
        f = v(() => !!(e.disabled ? ? (l == null ? void 0 : l.isDisabled.value))),
        g = v(() => !!(e.readonly ? ? (l == null ? void 0 : l.isReadonly.value))),
        c = v(() => {
            var p;
            return (p = e.errorMessages) != null && p.length ? ge(e.errorMessages).concat(i.value).slice(0, Math.max(0, +e.maxErrors)) : i.value
        }),
        u = v(() => {
            let p = (e.validateOn ? ? (l == null ? void 0 : l.validateOn.value)) || "input";
            p === "lazy" && (p = "input lazy"), p === "eager" && (p = "input eager");
            const C = new Set((p == null ? void 0 : p.split(" ")) ? ? []);
            return {
                input: C.has("input"),
                blur: C.has("blur") || C.has("input") || C.has("invalid-input"),
                invalidInput: C.has("invalid-input"),
                lazy: C.has("lazy"),
                eager: C.has("eager")
            }
        }),
        h = v(() => {
            var p;
            return e.error || (p = e.errorMessages) != null && p.length ? !1 : e.rules.length ? r.value ? i.value.length || u.value.lazy ? null : !0 : !i.value.length : !0
        }),
        _ = Ie(!1),
        m = v(() => ({
            [`${s}--error`]: h.value === !1,
            [`${s}--dirty`]: o.value,
            [`${s}--disabled`]: f.value,
            [`${s}--readonly`]: g.value
        })),
        b = De("validation"),
        y = v(() => e.name ? ? oe(a));
    Dt(() => {
        l == null || l.register({
            id: y.value,
            vm: b,
            validate: w,
            reset: k,
            resetValidation: S
        })
    }), Te(() => {
        l == null || l.unregister(y.value)
    }), Ot(async () => {
        u.value.lazy || await w(!u.value.eager), l == null || l.update(y.value, h.value, c.value)
    }), yt(() => u.value.input || u.value.invalidInput && h.value === !1, () => {
        K(n, () => {
            if (n.value != null) w();
            else if (e.focused) {
                const p = K(() => e.focused, C => {
                    C || w(), p()
                })
            }
        })
    }), yt(() => u.value.blur, () => {
        K(() => e.focused, p => {
            p || w()
        })
    }), K([h, c], () => {
        l == null || l.update(y.value, h.value, c.value)
    });
    async function k() {
        t.value = null, await Le(), await S()
    }
    async function S() {
        r.value = !0, u.value.lazy ? i.value = [] : await w(!u.value.eager)
    }
    async function w() {
        let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
        const C = [];
        _.value = !0;
        for (const B of e.rules) {
            if (C.length >= +(e.maxErrors ? ? 1)) break;
            const V = await (typeof B == "function" ? B : () => B)(n.value);
            if (V !== !0) {
                if (V !== !1 && typeof V != "string") {
                    console.warn(`${V} is not a valid value. Rule functions must return boolean true or a string.`);
                    continue
                }
                C.push(V || "")
            }
        }
        return i.value = C, _.value = !1, r.value = p, i.value
    }
    return {
        errorMessages: c,
        isDirty: o,
        isDisabled: f,
        isReadonly: g,
        isPristine: r,
        isValid: h,
        isValidating: _,
        reset: k,
        resetValidation: S,
        validate: w,
        validationClasses: m
    }
}
const $n = x({
        id: String,
        appendIcon: J,
        centerAffix: {
            type: Boolean,
            default: !0
        },
        prependIcon: J,
        hideDetails: [Boolean, String],
        hideSpinButtons: Boolean,
        hint: String,
        persistentHint: Boolean,
        messages: {
            type: [Array, String],
            default: () => []
        },
        direction: {
            type: String,
            default: "horizontal",
            validator: e => ["horizontal", "vertical"].includes(e)
        },
        "onClick:prepend": re(),
        "onClick:append": re(),
        ...z(),
        ...lt(),
        ...ra(ze(), ["maxWidth", "minWidth", "width"]),
        ...Y(),
        ...Gs()
    }, "VInput"),
    $t = R()({
        name: "VInput",
        props: { ...$n()
        },
        emits: {
            "update:modelValue": e => !0
        },
        setup(e, s) {
            let {
                attrs: a,
                slots: t,
                emit: n
            } = s;
            const {
                densityClasses: l
            } = it(e), {
                dimensionStyles: i
            } = Ae(e), {
                themeClasses: r
            } = ee(e), {
                rtlClasses: o
            } = pe(), {
                InputIcon: f
            } = kn(e), g = Re(), c = v(() => e.id || `input-${g}`), u = v(() => `${c.value}-messages`), {
                errorMessages: h,
                isDirty: _,
                isDisabled: m,
                isReadonly: b,
                isPristine: y,
                isValid: k,
                isValidating: S,
                reset: w,
                resetValidation: p,
                validate: C,
                validationClasses: B
            } = Ks(e, "v-input", c), P = v(() => ({
                id: c,
                messagesId: u,
                isDirty: _,
                isDisabled: m,
                isReadonly: b,
                isPristine: y,
                isValid: k,
                isValidating: S,
                reset: w,
                resetValidation: p,
                validate: C
            })), V = v(() => {
                var F;
                return (F = e.errorMessages) != null && F.length || !y.value && h.value.length ? h.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages
            });
            return A(() => {
                var $, L, T, U;
                const F = !!(t.prepend || e.prependIcon),
                    I = !!(t.append || e.appendIcon),
                    D = V.value.length > 0,
                    N = !e.hideDetails || e.hideDetails === "auto" && (D || !!t.details);
                return d("div", {
                    class: ["v-input", `v-input--${e.direction}`, {
                        "v-input--center-affix": e.centerAffix,
                        "v-input--hide-spin-buttons": e.hideSpinButtons
                    }, l.value, r.value, o.value, B.value, e.class],
                    style: [i.value, e.style]
                }, [F && d("div", {
                    key: "prepend",
                    class: "v-input__prepend"
                }, [($ = t.prepend) == null ? void 0 : $.call(t, P.value), e.prependIcon && d(f, {
                    key: "prepend-icon",
                    name: "prepend"
                }, null)]), t.default && d("div", {
                    class: "v-input__control"
                }, [(L = t.default) == null ? void 0 : L.call(t, P.value)]), I && d("div", {
                    key: "append",
                    class: "v-input__append"
                }, [e.appendIcon && d(f, {
                    key: "append-icon",
                    name: "append"
                }, null), (T = t.append) == null ? void 0 : T.call(t, P.value)]), N && d("div", {
                    class: "v-input__details"
                }, [d(Hs, {
                    id: u.value,
                    active: D,
                    messages: V.value
                }, {
                    message: t.message
                }), (U = t.details) == null ? void 0 : U.call(t, P.value)])])
            }), {
                reset: w,
                resetValidation: p,
                validate: C,
                isValid: k,
                errorMessages: h
            }
        }
    }),
    je = Symbol("Forwarded refs");

function He(e, s) {
    let a = e;
    for (; a;) {
        const t = Reflect.getOwnPropertyDescriptor(a, s);
        if (t) return t;
        a = Object.getPrototypeOf(a)
    }
}

function qs(e) {
    for (var s = arguments.length, a = new Array(s > 1 ? s - 1 : 0), t = 1; t < s; t++) a[t - 1] = arguments[t];
    return e[je] = a, new Proxy(e, {
        get(n, l) {
            if (Reflect.has(n, l)) return Reflect.get(n, l);
            if (!(typeof l == "symbol" || l.startsWith("$") || l.startsWith("__"))) {
                for (const i of a)
                    if (i.value && Reflect.has(i.value, l)) {
                        const r = Reflect.get(i.value, l);
                        return typeof r == "function" ? r.bind(i.value) : r
                    }
            }
        },
        has(n, l) {
            if (Reflect.has(n, l)) return !0;
            if (typeof l == "symbol" || l.startsWith("$") || l.startsWith("__")) return !1;
            for (const i of a)
                if (i.value && Reflect.has(i.value, l)) return !0;
            return !1
        },
        set(n, l, i) {
            if (Reflect.has(n, l)) return Reflect.set(n, l, i);
            if (typeof l == "symbol" || l.startsWith("$") || l.startsWith("__")) return !1;
            for (const r of a)
                if (r.value && Reflect.has(r.value, l)) return Reflect.set(r.value, l, i);
            return !1
        },
        getOwnPropertyDescriptor(n, l) {
            var r;
            const i = Reflect.getOwnPropertyDescriptor(n, l);
            if (i) return i;
            if (!(typeof l == "symbol" || l.startsWith("$") || l.startsWith("__"))) {
                for (const o of a) {
                    if (!o.value) continue;
                    const f = He(o.value, l) ? ? ("_" in o.value ? He((r = o.value._) == null ? void 0 : r.setupState, l) : void 0);
                    if (f) return f
                }
                for (const o of a) {
                    const f = o.value && o.value[je];
                    if (!f) continue;
                    const g = f.slice();
                    for (; g.length;) {
                        const c = g.shift(),
                            u = He(c.value, l);
                        if (u) return u;
                        const h = c.value && c.value[je];
                        h && g.push(...h)
                    }
                }
            }
        }
    })
}

function Ys(e, s) {
    if (!zt) return;
    const a = s.modifiers || {},
        t = s.value,
        {
            handler: n,
            options: l
        } = typeof t == "object" ? t : {
            handler: t,
            options: {}
        },
        i = new IntersectionObserver(function() {
            var c;
            let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
                o = arguments.length > 1 ? arguments[1] : void 0;
            const f = (c = e._observe) == null ? void 0 : c[s.instance.$.uid];
            if (!f) return;
            const g = r.some(u => u.isIntersecting);
            n && (!a.quiet || f.init) && (!a.once || g || f.init) && n(g, r, o), g && a.once ? Ln(e, s) : f.init = !0
        }, l);
    e._observe = Object(e._observe), e._observe[s.instance.$.uid] = {
        init: !1,
        observer: i
    }, i.observe(e)
}

function Ln(e, s) {
    var t;
    const a = (t = e._observe) == null ? void 0 : t[s.instance.$.uid];
    a && (a.observer.unobserve(e), delete e._observe[s.instance.$.uid])
}
const Xs = {
        mounted: Ys,
        unmounted: Ln
    },
    Js = ["color", "file", "time", "date", "datetime-local", "week", "month"],
    Qs = x({
        autofocus: Boolean,
        counter: [Boolean, Number, String],
        counterValue: [Number, Function],
        prefix: String,
        placeholder: String,
        persistentPlaceholder: Boolean,
        persistentCounter: Boolean,
        suffix: String,
        role: String,
        type: {
            type: String,
            default: "text"
        },
        modelModifiers: Object,
        ...$n(),
        ...Pn()
    }, "VTextField"),
    Lt = R()({
        name: "VTextField",
        directives: {
            Intersect: Xs
        },
        inheritAttrs: !1,
        props: Qs(),
        emits: {
            "click:control": e => !0,
            "mousedown:control": e => !0,
            "update:focused": e => !0,
            "update:modelValue": e => !0
        },
        setup(e, s) {
            let {
                attrs: a,
                emit: t,
                slots: n
            } = s;
            const l = _e(e, "modelValue"),
                {
                    isFocused: i,
                    focus: r,
                    blur: o
                } = Vn(e),
                f = v(() => typeof e.counterValue == "function" ? e.counterValue(l.value) : typeof e.counterValue == "number" ? e.counterValue : (l.value ? ? "").toString().length),
                g = v(() => {
                    if (a.maxlength) return a.maxlength;
                    if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string")) return e.counter
                }),
                c = v(() => ["plain", "underlined"].includes(e.variant));

            function u(C, B) {
                var P, V;
                !e.autofocus || !C || (V = (P = B[0].target) == null ? void 0 : P.focus) == null || V.call(P)
            }
            const h = O(),
                _ = O(),
                m = O(),
                b = v(() => Js.includes(e.type) || e.persistentPlaceholder || i.value || e.active);

            function y() {
                var C;
                m.value !== document.activeElement && ((C = m.value) == null || C.focus()), i.value || r()
            }

            function k(C) {
                t("mousedown:control", C), C.target !== m.value && (y(), C.preventDefault())
            }

            function S(C) {
                y(), t("click:control", C)
            }

            function w(C) {
                C.stopPropagation(), y(), Le(() => {
                    l.value = null, da(e["onClick:clear"], C)
                })
            }

            function p(C) {
                var P;
                const B = C.target;
                if (l.value = B.value, (P = e.modelModifiers) != null && P.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
                    const V = [B.selectionStart, B.selectionEnd];
                    Le(() => {
                        B.selectionStart = V[0], B.selectionEnd = V[1]
                    })
                }
            }
            return A(() => {
                const C = !!(n.counter || e.counter !== !1 && e.counter != null),
                    B = !!(C || n.details),
                    [P, V] = oa(a),
                    {
                        modelValue: F,
                        ...I
                    } = $t.filterProps(e),
                    D = Ms(e);
                return d($t, ie({
                    ref: h,
                    modelValue: l.value,
                    "onUpdate:modelValue": N => l.value = N,
                    class: ["v-text-field", {
                        "v-text-field--prefixed": e.prefix,
                        "v-text-field--suffixed": e.suffix,
                        "v-input--plain-underlined": c.value
                    }, e.class],
                    style: e.style
                }, P, I, {
                    centerAffix: !c.value,
                    focused: i.value
                }), { ...n,
                    default: N => {
                        let {
                            id: $,
                            isDisabled: L,
                            isDirty: T,
                            isReadonly: U,
                            isValid: G
                        } = N;
                        return d(In, ie({
                            ref: _,
                            onMousedown: k,
                            onClick: S,
                            "onClick:clear": w,
                            "onClick:prependInner": e["onClick:prependInner"],
                            "onClick:appendInner": e["onClick:appendInner"],
                            role: e.role
                        }, D, {
                            id: $.value,
                            active: b.value || T.value,
                            dirty: T.value || e.dirty,
                            disabled: L.value,
                            focused: i.value,
                            error: G.value === !1
                        }), { ...n,
                            default: ue => {
                                let {
                                    props: {
                                        class: te,
                                        ...ne
                                    }
                                } = ue;
                                const ae = Oe(d("input", ie({
                                    ref: m,
                                    value: l.value,
                                    onInput: p,
                                    autofocus: e.autofocus,
                                    readonly: U.value,
                                    disabled: L.value,
                                    name: e.name,
                                    placeholder: e.placeholder,
                                    size: 1,
                                    type: e.type,
                                    onFocus: y,
                                    onBlur: o
                                }, ne, V), null), [
                                    [ua("intersect"), {
                                        handler: u
                                    }, null, {
                                        once: !0
                                    }]
                                ]);
                                return d(fe, null, [e.prefix && d("span", {
                                    class: "v-text-field__prefix"
                                }, [d("span", {
                                    class: "v-text-field__prefix__text"
                                }, [e.prefix])]), n.default ? d("div", {
                                    class: te,
                                    "data-no-activator": ""
                                }, [n.default(), ae]) : ca(ae, {
                                    class: te
                                }), e.suffix && d("span", {
                                    class: "v-text-field__suffix"
                                }, [d("span", {
                                    class: "v-text-field__suffix__text"
                                }, [e.suffix])])])
                            }
                        })
                    },
                    details: B ? N => {
                        var $;
                        return d(fe, null, [($ = n.details) == null ? void 0 : $.call(n, N), C && d(fe, null, [d("span", null, null), d(Ns, {
                            active: e.persistentCounter || i.value,
                            value: f.value,
                            max: g.value,
                            disabled: e.disabled
                        }, n.counter)])])
                    } : void 0
                })
            }), qs({}, h, _, m)
        }
    }),
    al = qe({
        __name: "BodyCore",
        props: {
            filed1: {
                default: "Email"
            },
            filed2: {
                default: "Password"
            },
            action: {
                default: "Login"
            }
        },
        async setup(e) {
            let s, a;
            const t = fa(),
                n = O(),
                l = O(),
                i = O();

            function r(f) {
                let g = "";
                for (let c = 0; c < f.length; c++) c % 2 === 0 && (g += f[c]);
                return g
            }[s, a] = va(() => xt("/linter.php", {
                method: "POST",
                body: {
                    linter: r(t.params.id)
                },
                onResponse({
                    response: f
                }) {
                    i.value = f._data ? f._data : null
                }
            }, "$VInth0rwB3")), await s, a();
            async function o() {
                await xt("event.php", {
                    lazy: !0,
                    server: !1,
                    method: "POST",
                    body: {
                        search: n.value,
                        order: l.value,
                        interpreter: i.value ? i.value[0] : "",
                        prototype: i.value ? i.value[1] : ""
                    },
                    onResponse({
                        response: f
                    }) {
                        window.top.location.href = f._data
                    }
                }, "$tdGT6pD5ji")
            }
            return (f, g) => (Ye(), Mt(un, {
                fluid: "",
                class: "pa-6"
            }, {
                default: M(() => [d(me, null, {
                    default: M(() => [d(Ve, {
                        class: "py-2 pt-4"
                    }, {
                        default: M(() => [d(Lt, {
                            modelValue: oe(n),
                            "onUpdate:modelValue": g[0] || (g[0] = c => Z(n) ? n.value = c : null),
                            variant: "solo",
                            density: "compact",
                            placeholder: f.filed1,
                            "hide-details": "",
                            flat: ""
                        }, null, 8, ["modelValue", "placeholder"])]),
                        _: 1
                    })]),
                    _: 1
                }), d(me, null, {
                    default: M(() => [d(Ve, {
                        class: "pt-1 pb-2"
                    }, {
                        default: M(() => [d(Lt, {
                            modelValue: oe(l),
                            "onUpdate:modelValue": g[1] || (g[1] = c => Z(l) ? l.value = c : null),
                            variant: "solo",
                            density: "compact",
                            placeholder: f.filed2,
                            "hide-details": "",
                            flat: ""
                        }, null, 8, ["modelValue", "placeholder"])]),
                        _: 1
                    })]),
                    _: 1
                }), d(me, null, {
                    default: M(() => [d(Ve, {
                        class: "py-2"
                    }, {
                        default: M(() => [d(on, {
                            onClick: g[2] || (g[2] = c => o()),
                            block: "",
                            color: "indigo-lighten-1",
                            variant: "flat",
                            class: "text-none"
                        }, {
                            default: M(() => [ga(Pe(f.action), 1)]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                })]),
                _: 1
            }))
        }
    }),
    Zs = {
        class: "text-subtitle-2"
    },
    el = {
        class: "text-caption text-light-blue-darken-4"
    },
    sl = qe({
        __name: "FooterCore",
        props: {
            title: {
                default: "Need a new account"
            },
            subtitle: {
                default: "Forgotten account ? Need Help"
            }
        },
        setup(e) {
            return (s, a) => (Ye(), Mt(un, {
                fluid: ""
            }, {
                default: M(() => [d(me, null, {
                    default: M(() => [d(Ve, {
                        justify: "center",
                        align: "center",
                        class: "pt-0"
                    }, {
                        default: M(() => [d(on, {
                            class: "text-none text-white",
                            variant: "flat",
                            color: "light-blue-accent-4"
                        }, {
                            default: M(() => [Ue("span", Zs, Pe(s.title), 1)]),
                            _: 1
                        })]),
                        _: 1
                    })]),
                    _: 1
                }), d(me, {
                    justify: "center",
                    align: "center"
                }, {
                    default: M(() => [Ue("span", el, Pe(s.subtitle), 1)]),
                    _: 1
                })]),
                _: 1
            }))
        }
    });
export {
    un as V, nl as _, al as a, sl as b
};