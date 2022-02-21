var markerClusterer = function (t) {
    "use strict";

    function e(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function n(t, e, n) {
        return e && r(t.prototype, e), n && r(t, n), t
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && s(t, e)
    }

    function i(t) {
        return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function s(t, e) {
        return (s = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function a(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function u(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var r, n = i(t);
            if (e) {
                var o = i(this).constructor;
                r = Reflect.construct(n, arguments, o)
            } else r = n.apply(this, arguments);
            return a(this, r)
        }
    }

    function c(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
            var r = [],
                n = !0,
                o = !1,
                i = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done) && (r.push(s.value), !e || r.length !== e); n = !0);
            } catch (t) {
                o = !0, i = t
            } finally {
                try {
                    n || null == a.return || a.return()
                } finally {
                    if (o) throw i
                }
            }
            return r
        }(t, e) || h(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function f(t) {
        return function (t) {
            if (Array.isArray(t)) return l(t)
        }(t) || function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
        }(t) || h(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function h(t, e) {
        if (t) {
            if ("string" == typeof t) return l(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? l(t, e) : void 0
        }
    }

    function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }
    var p = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
        d = function (t) {
            return t && t.Math == Math && t
        },
        m = d("object" == typeof globalThis && globalThis) || d("object" == typeof window && window) || d("object" == typeof self && self) || d("object" == typeof p && p) || function () {
            return this
        }() || Function("return this")(),
        g = {},
        v = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        },
        y = !v((function () {
            return 7 != Object.defineProperty({}, 1, {
                get: function () {
                    return 7
                }
            })[1]
        })),
        b = Function.prototype.call,
        _ = b.bind ? b.bind(b) : function () {
            return b.apply(b, arguments)
        },
        w = {},
        k = {}.propertyIsEnumerable,
        x = Object.getOwnPropertyDescriptor,
        M = x && !k.call({
            1: 2
        }, 1);
    w.f = M ? function (t) {
        var e = x(this, t);
        return !!e && e.enumerable
    } : k;
    var P, O, S = function (t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        },
        E = Function.prototype,
        C = E.bind,
        j = E.call,
        L = C && C.bind(j),
        A = C ? function (t) {
            return t && L(j, t)
        } : function (t) {
            return t && function () {
                return j.apply(t, arguments)
            }
        },
        T = A,
        I = T({}.toString),
        N = T("".slice),
        F = function (t) {
            return N(I(t), 8, -1)
        },
        D = A,
        z = v,
        R = F,
        q = m.Object,
        Z = D("".split),
        G = z((function () {
            return !q("z").propertyIsEnumerable(0)
        })) ? function (t) {
            return "String" == R(t) ? Z(t, "") : q(t)
        } : q,
        B = m.TypeError,
        V = function (t) {
            if (null == t) throw B("Can't call method on " + t);
            return t
        },
        U = G,
        W = V,
        Q = function (t) {
            return U(W(t))
        },
        X = function (t) {
            return "function" == typeof t
        },
        H = X,
        J = function (t) {
            return "object" == typeof t ? null !== t : H(t)
        },
        K = m,
        $ = X,
        Y = function (t) {
            return $(t) ? t : void 0
        },
        tt = function (t, e) {
            return arguments.length < 2 ? Y(K[t]) : K[t] && K[t][e]
        },
        et = A({}.isPrototypeOf),
        rt = m,
        nt = tt("navigator", "userAgent") || "",
        ot = rt.process,
        it = rt.Deno,
        st = ot && ot.versions || it && it.version,
        at = st && st.v8;
    at && (O = (P = at.split("."))[0] > 0 && P[0] < 4 ? 1 : +(P[0] + P[1])), !O && nt && (!(P = nt.match(/Edge\/(\d+)/)) || P[1] >= 74) && (P = nt.match(/Chrome\/(\d+)/)) && (O = +P[1]);
    var ut = O,
        ct = ut,
        ft = v,
        ht = !!Object.getOwnPropertySymbols && !ft((function () {
            var t = Symbol();
            return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && ct && ct < 41
        })),
        lt = ht && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        pt = tt,
        dt = X,
        mt = et,
        gt = lt,
        vt = m.Object,
        yt = gt ? function (t) {
            return "symbol" == typeof t
        } : function (t) {
            var e = pt("Symbol");
            return dt(e) && mt(e.prototype, vt(t))
        },
        bt = m.String,
        _t = X,
        wt = function (t) {
            try {
                return bt(t)
            } catch (t) {
                return "Object"
            }
        },
        kt = m.TypeError,
        xt = function (t) {
            if (_t(t)) return t;
            throw kt(wt(t) + " is not a function")
        },
        Mt = xt,
        Pt = _,
        Ot = X,
        St = J,
        Et = m.TypeError,
        Ct = {
            exports: {}
        },
        jt = m,
        Lt = Object.defineProperty,
        At = function (t, e) {
            try {
                Lt(jt, t, {
                    value: e,
                    configurable: !0,
                    writable: !0
                })
            } catch (r) {
                jt[t] = e
            }
            return e
        },
        Tt = At,
        It = "__core-js_shared__",
        Nt = m[It] || Tt(It, {}),
        Ft = Nt;
    (Ct.exports = function (t, e) {
        return Ft[t] || (Ft[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: "3.19.1",
        mode: "global",
        copyright: "© 2021 Denis Pushkarev (zloirock.ru)"
    });
    var Dt = V,
        zt = m.Object,
        Rt = function (t) {
            return zt(Dt(t))
        },
        qt = Rt,
        Zt = A({}.hasOwnProperty),
        Gt = Object.hasOwn || function (t, e) {
            return Zt(qt(t), e)
        },
        Bt = A,
        Vt = 0,
        Ut = Math.random(),
        Wt = Bt(1..toString),
        Qt = function (t) {
            return "Symbol(" + (void 0 === t ? "" : t) + ")_" + Wt(++Vt + Ut, 36)
        },
        Xt = m,
        Ht = Ct.exports,
        Jt = Gt,
        Kt = Qt,
        $t = ht,
        Yt = lt,
        te = Ht("wks"),
        ee = Xt.Symbol,
        re = ee && ee.for,
        ne = Yt ? ee : ee && ee.withoutSetter || Kt,
        oe = function (t) {
            if (!Jt(te, t) || !$t && "string" != typeof te[t]) {
                var e = "Symbol." + t;
                $t && Jt(ee, t) ? te[t] = ee[t] : te[t] = Yt && re ? re(e) : ne(e)
            }
            return te[t]
        },
        ie = _,
        se = J,
        ae = yt,
        ue = function (t, e) {
            var r = t[e];
            return null == r ? void 0 : Mt(r)
        },
        ce = function (t, e) {
            var r, n;
            if ("string" === e && Ot(r = t.toString) && !St(n = Pt(r, t))) return n;
            if (Ot(r = t.valueOf) && !St(n = Pt(r, t))) return n;
            if ("string" !== e && Ot(r = t.toString) && !St(n = Pt(r, t))) return n;
            throw Et("Can't convert object to primitive value")
        },
        fe = oe,
        he = m.TypeError,
        le = fe("toPrimitive"),
        pe = function (t, e) {
            if (!se(t) || ae(t)) return t;
            var r, n = ue(t, le);
            if (n) {
                if (void 0 === e && (e = "default"), r = ie(n, t, e), !se(r) || ae(r)) return r;
                throw he("Can't convert object to primitive value")
            }
            return void 0 === e && (e = "number"), ce(t, e)
        },
        de = pe,
        me = yt,
        ge = function (t) {
            var e = de(t, "string");
            return me(e) ? e : e + ""
        },
        ve = J,
        ye = m.document,
        be = ve(ye) && ve(ye.createElement),
        _e = function (t) {
            return be ? ye.createElement(t) : {}
        },
        we = _e,
        ke = !y && !v((function () {
            return 7 != Object.defineProperty(we("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })),
        xe = y,
        Me = _,
        Pe = w,
        Oe = S,
        Se = Q,
        Ee = ge,
        Ce = Gt,
        je = ke,
        Le = Object.getOwnPropertyDescriptor;
    g.f = xe ? Le : function (t, e) {
        if (t = Se(t), e = Ee(e), je) try {
            return Le(t, e)
        } catch (t) {}
        if (Ce(t, e)) return Oe(!Me(Pe.f, t, e), t[e])
    };
    var Ae = {},
        Te = m,
        Ie = J,
        Ne = Te.String,
        Fe = Te.TypeError,
        De = function (t) {
            if (Ie(t)) return t;
            throw Fe(Ne(t) + " is not an object")
        },
        ze = y,
        Re = ke,
        qe = De,
        Ze = ge,
        Ge = m.TypeError,
        Be = Object.defineProperty;
    Ae.f = ze ? Be : function (t, e, r) {
        if (qe(t), e = Ze(e), qe(r), Re) try {
            return Be(t, e, r)
        } catch (t) {}
        if ("get" in r || "set" in r) throw Ge("Accessors not supported");
        return "value" in r && (t[e] = r.value), t
    };
    var Ve = Ae,
        Ue = S,
        We = y ? function (t, e, r) {
            return Ve.f(t, e, Ue(1, r))
        } : function (t, e, r) {
            return t[e] = r, t
        },
        Qe = {
            exports: {}
        },
        Xe = X,
        He = Nt,
        Je = A(Function.toString);
    Xe(He.inspectSource) || (He.inspectSource = function (t) {
        return Je(t)
    });
    var Ke, $e, Ye, tr = He.inspectSource,
        er = X,
        rr = tr,
        nr = m.WeakMap,
        or = er(nr) && /native code/.test(rr(nr)),
        ir = Ct.exports,
        sr = Qt,
        ar = ir("keys"),
        ur = function (t) {
            return ar[t] || (ar[t] = sr(t))
        },
        cr = {},
        fr = or,
        hr = m,
        lr = A,
        pr = J,
        dr = We,
        mr = Gt,
        gr = Nt,
        vr = ur,
        yr = cr,
        br = "Object already initialized",
        _r = hr.TypeError,
        wr = hr.WeakMap;
    if (fr || gr.state) {
        var kr = gr.state || (gr.state = new wr),
            xr = lr(kr.get),
            Mr = lr(kr.has),
            Pr = lr(kr.set);
        Ke = function (t, e) {
            if (Mr(kr, t)) throw new _r(br);
            return e.facade = t, Pr(kr, t, e), e
        }, $e = function (t) {
            return xr(kr, t) || {}
        }, Ye = function (t) {
            return Mr(kr, t)
        }
    } else {
        var Or = vr("state");
        yr[Or] = !0, Ke = function (t, e) {
            if (mr(t, Or)) throw new _r(br);
            return e.facade = t, dr(t, Or, e), e
        }, $e = function (t) {
            return mr(t, Or) ? t[Or] : {}
        }, Ye = function (t) {
            return mr(t, Or)
        }
    }
    var Sr = {
            set: Ke,
            get: $e,
            has: Ye,
            enforce: function (t) {
                return Ye(t) ? $e(t) : Ke(t, {})
            },
            getterFor: function (t) {
                return function (e) {
                    var r;
                    if (!pr(e) || (r = $e(e)).type !== t) throw _r("Incompatible receiver, " + t + " required");
                    return r
                }
            }
        },
        Er = y,
        Cr = Gt,
        jr = Function.prototype,
        Lr = Er && Object.getOwnPropertyDescriptor,
        Ar = Cr(jr, "name"),
        Tr = Ar && "something" === function () {}.name,
        Ir = Ar && (!Er || Er && Lr(jr, "name").configurable),
        Nr = m,
        Fr = X,
        Dr = Gt,
        zr = We,
        Rr = At,
        qr = tr,
        Zr = {
            EXISTS: Ar,
            PROPER: Tr,
            CONFIGURABLE: Ir
        }.CONFIGURABLE,
        Gr = Sr.get,
        Br = Sr.enforce,
        Vr = String(String).split("String");
    (Qe.exports = function (t, e, r, n) {
        var o, i = !!n && !!n.unsafe,
            s = !!n && !!n.enumerable,
            a = !!n && !!n.noTargetGet,
            u = n && void 0 !== n.name ? n.name : e;
        Fr(r) && ("Symbol(" === String(u).slice(0, 7) && (u = "[" + String(u).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!Dr(r, "name") || Zr && r.name !== u) && zr(r, "name", u), (o = Br(r)).source || (o.source = Vr.join("string" == typeof u ? u : ""))), t !== Nr ? (i ? !a && t[e] && (s = !0) : delete t[e], s ? t[e] = r : zr(t, e, r)) : s ? t[e] = r : Rr(e, r)
    })(Function.prototype, "toString", (function () {
        return Fr(this) && Gr(this).source || qr(this)
    }));
    var Ur = {},
        Wr = Math.ceil,
        Qr = Math.floor,
        Xr = function (t) {
            var e = +t;
            return e != e || 0 === e ? 0 : (e > 0 ? Qr : Wr)(e)
        },
        Hr = Xr,
        Jr = Math.max,
        Kr = Math.min,
        $r = function (t, e) {
            var r = Hr(t);
            return r < 0 ? Jr(r + e, 0) : Kr(r, e)
        },
        Yr = Xr,
        tn = Math.min,
        en = function (t) {
            return t > 0 ? tn(Yr(t), 9007199254740991) : 0
        },
        rn = function (t) {
            return en(t.length)
        },
        nn = Q,
        on = $r,
        sn = rn,
        an = function (t) {
            return function (e, r, n) {
                var o, i = nn(e),
                    s = sn(i),
                    a = on(n, s);
                if (t && r != r) {
                    for (; s > a;)
                        if ((o = i[a++]) != o) return !0
                } else
                    for (; s > a; a++)
                        if ((t || a in i) && i[a] === r) return t || a || 0;
                return !t && -1
            }
        },
        un = {
            includes: an(!0),
            indexOf: an(!1)
        },
        cn = Gt,
        fn = Q,
        hn = un.indexOf,
        ln = cr,
        pn = A([].push),
        dn = function (t, e) {
            var r, n = fn(t),
                o = 0,
                i = [];
            for (r in n) !cn(ln, r) && cn(n, r) && pn(i, r);
            for (; e.length > o;) cn(n, r = e[o++]) && (~hn(i, r) || pn(i, r));
            return i
        },
        mn = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        gn = dn,
        vn = mn.concat("length", "prototype");
    Ur.f = Object.getOwnPropertyNames || function (t) {
        return gn(t, vn)
    };
    var yn = {};
    yn.f = Object.getOwnPropertySymbols;
    var bn = tt,
        _n = Ur,
        wn = yn,
        kn = De,
        xn = A([].concat),
        Mn = bn("Reflect", "ownKeys") || function (t) {
            var e = _n.f(kn(t)),
                r = wn.f;
            return r ? xn(e, r(t)) : e
        },
        Pn = Gt,
        On = Mn,
        Sn = g,
        En = Ae,
        Cn = v,
        jn = X,
        Ln = /#|\.prototype\./,
        An = function (t, e) {
            var r = In[Tn(t)];
            return r == Fn || r != Nn && (jn(e) ? Cn(e) : !!e)
        },
        Tn = An.normalize = function (t) {
            return String(t).replace(Ln, ".").toLowerCase()
        },
        In = An.data = {},
        Nn = An.NATIVE = "N",
        Fn = An.POLYFILL = "P",
        Dn = An,
        zn = m,
        Rn = g.f,
        qn = We,
        Zn = Qe.exports,
        Gn = At,
        Bn = function (t, e) {
            for (var r = On(e), n = En.f, o = Sn.f, i = 0; i < r.length; i++) {
                var s = r[i];
                Pn(t, s) || n(t, s, o(e, s))
            }
        },
        Vn = Dn,
        Un = function (t, e) {
            var r, n, o, i, s, a = t.target,
                u = t.global,
                c = t.stat;
            if (r = u ? zn : c ? zn[a] || Gn(a, {}) : (zn[a] || {}).prototype)
                for (n in e) {
                    if (i = e[n], o = t.noTargetGet ? (s = Rn(r, n)) && s.value : r[n], !Vn(u ? n : a + (c ? "." : "#") + n, t.forced) && void 0 !== o) {
                        if (typeof i == typeof o) continue;
                        Bn(i, o)
                    }(t.sham || o && o.sham) && qn(i, "sham", !0), Zn(r, n, i, t)
                }
        },
        Wn = xt,
        Qn = A(A.bind),
        Xn = F,
        Hn = Array.isArray || function (t) {
            return "Array" == Xn(t)
        },
        Jn = {};
    Jn[oe("toStringTag")] = "z";
    var Kn = "[object z]" === String(Jn),
        $n = m,
        Yn = Kn,
        to = X,
        eo = F,
        ro = oe("toStringTag"),
        no = $n.Object,
        oo = "Arguments" == eo(function () {
            return arguments
        }()),
        io = Yn ? eo : function (t) {
            var e, r, n;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function (t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(e = no(t), ro)) ? r : oo ? eo(e) : "Object" == (n = eo(e)) && to(e.callee) ? "Arguments" : n
        },
        so = A,
        ao = v,
        uo = X,
        co = io,
        fo = tr,
        ho = function () {},
        lo = [],
        po = tt("Reflect", "construct"),
        mo = /^\s*(?:class|function)\b/,
        go = so(mo.exec),
        vo = !mo.exec(ho),
        yo = function (t) {
            if (!uo(t)) return !1;
            try {
                return po(ho, lo, t), !0
            } catch (t) {
                return !1
            }
        },
        bo = !po || ao((function () {
            var t;
            return yo(yo.call) || !yo(Object) || !yo((function () {
                t = !0
            })) || t
        })) ? function (t) {
            if (!uo(t)) return !1;
            switch (co(t)) {
                case "AsyncFunction":
                case "GeneratorFunction":
                case "AsyncGeneratorFunction":
                    return !1
            }
            return vo || !!go(mo, fo(t))
        } : yo,
        _o = m,
        wo = Hn,
        ko = bo,
        xo = J,
        Mo = oe("species"),
        Po = _o.Array,
        Oo = function (t) {
            var e;
            return wo(t) && (e = t.constructor, (ko(e) && (e === Po || wo(e.prototype)) || xo(e) && null === (e = e[Mo])) && (e = void 0)), void 0 === e ? Po : e
        },
        So = function (t, e) {
            return new(Oo(t))(0 === e ? 0 : e)
        },
        Eo = function (t, e) {
            return Wn(t), void 0 === e ? t : Qn ? Qn(t, e) : function () {
                return t.apply(e, arguments)
            }
        },
        Co = G,
        jo = Rt,
        Lo = rn,
        Ao = So,
        To = A([].push),
        Io = function (t) {
            var e = 1 == t,
                r = 2 == t,
                n = 3 == t,
                o = 4 == t,
                i = 6 == t,
                s = 7 == t,
                a = 5 == t || i;
            return function (u, c, f, h) {
                for (var l, p, d = jo(u), m = Co(d), g = Eo(c, f), v = Lo(m), y = 0, b = h || Ao, _ = e ? b(u, v) : r || s ? b(u, 0) : void 0; v > y; y++)
                    if ((a || y in m) && (p = g(l = m[y], y, d), t))
                        if (e) _[y] = p;
                        else if (p) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return l;
                    case 6:
                        return y;
                    case 2:
                        To(_, l)
                } else switch (t) {
                    case 4:
                        return !1;
                    case 7:
                        To(_, l)
                }
                return i ? -1 : n || o ? o : _
            }
        },
        No = {
            forEach: Io(0),
            map: Io(1),
            filter: Io(2),
            some: Io(3),
            every: Io(4),
            find: Io(5),
            findIndex: Io(6),
            filterReject: Io(7)
        },
        Fo = v,
        Do = ut,
        zo = oe("species"),
        Ro = function (t) {
            return Do >= 51 || !Fo((function () {
                var e = [];
                return (e.constructor = {})[zo] = function () {
                    return {
                        foo: 1
                    }
                }, 1 !== e[t](Boolean).foo
            }))
        },
        qo = No.map;

    function Zo(t, e) {
        var r = {};
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (n = Object.getOwnPropertySymbols(t); o < n.length; o++) e.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]])
        }
        return r
    }
    Un({
        target: "Array",
        proto: !0,
        forced: !Ro("map")
    }, {
        map: function (t) {
            return qo(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Go = io,
        Bo = Kn ? {}.toString : function () {
            return "[object " + Go(this) + "]"
        },
        Vo = Kn,
        Uo = Qe.exports,
        Wo = Bo;
    Vo || Uo(Object.prototype, "toString", Wo, {
        unsafe: !0
    });
    var Qo = No.filter;
    Un({
        target: "Array",
        proto: !0,
        forced: !Ro("filter")
    }, {
        filter: function (t) {
            return Qo(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Xo = function () {
            function t(r) {
                var n = r.markers,
                    o = r.position;
                e(this, t), this.markers = n, o && (o instanceof google.maps.LatLng ? this._position = o : this._position = new google.maps.LatLng(o))
            }
            return n(t, [{
                key: "bounds",
                get: function () {
                    if (0 !== this.markers.length || this._position) return this.markers.reduce((function (t, e) {
                        return t.extend(e.getPosition())
                    }), new google.maps.LatLngBounds(this._position, this._position))
                }
            }, {
                key: "position",
                get: function () {
                    return this._position || this.bounds.getCenter()
                }
            }, {
                key: "count",
                get: function () {
                    return this.markers.filter((function (t) {
                        return t.getVisible()
                    })).length
                }
            }, {
                key: "push",
                value: function (t) {
                    this.markers.push(t)
                }
            }, {
                key: "delete",
                value: function () {
                    this.marker && (this.marker.setMap(null), delete this.marker), this.markers.length = 0
                }
            }]), t
        }(),
        Ho = function (t, e, r, n) {
            var o = Jo(t.getBounds(), e, n);
            return r.filter((function (t) {
                return o.contains(t.getPosition())
            }))
        },
        Jo = function (t, e, r) {
            var n = $o(t, e),
                o = n.northEast,
                i = n.southWest,
                s = Yo({
                    northEast: o,
                    southWest: i
                }, r);
            return ti(s, e)
        },
        Ko = function (t, e) {
            var r = (e.lat - t.lat) * Math.PI / 180,
                n = (e.lng - t.lng) * Math.PI / 180,
                o = Math.sin(r / 2) * Math.sin(r / 2) + Math.cos(t.lat * Math.PI / 180) * Math.cos(e.lat * Math.PI / 180) * Math.sin(n / 2) * Math.sin(n / 2);
            return 6371 * (2 * Math.atan2(Math.sqrt(o), Math.sqrt(1 - o)))
        },
        $o = function (t, e) {
            return {
                northEast: e.fromLatLngToDivPixel(t.getNorthEast()),
                southWest: e.fromLatLngToDivPixel(t.getSouthWest())
            }
        },
        Yo = function (t, e) {
            var r = t.northEast,
                n = t.southWest;
            return r.x += e, r.y -= e, n.x -= e, n.y += e, {
                northEast: r,
                southWest: n
            }
        },
        ti = function (t, e) {
            var r = t.northEast,
                n = t.southWest,
                o = new google.maps.LatLngBounds;
            return o.extend(e.fromDivPixelToLatLng(r)), o.extend(e.fromDivPixelToLatLng(n)), o
        },
        ei = function () {
            function t(r) {
                var n = r.maxZoom,
                    o = void 0 === n ? 16 : n;
                e(this, t), this.maxZoom = o
            }
            return n(t, [{
                key: "noop",
                value: function (t) {
                    var e = t.markers;
                    return ni(e)
                }
            }]), t
        }(),
        ri = function (t) {
            o(i, t);
            var r = u(i);

            function i(t) {
                var n;
                e(this, i);
                var o = t.viewportPadding,
                    s = void 0 === o ? 60 : o,
                    a = Zo(t, ["viewportPadding"]);
                return (n = r.call(this, a)).viewportPadding = 60, n.viewportPadding = s, n
            }
            return n(i, [{
                key: "calculate",
                value: function (t) {
                    var e = t.markers,
                        r = t.map,
                        n = t.mapCanvasProjection;
                    return r.getZoom() >= this.maxZoom ? {
                        clusters: this.noop({
                            markers: e,
                            map: r,
                            mapCanvasProjection: n
                        }),
                        changed: !1
                    } : {
                        clusters: this.cluster({
                            markers: Ho(r, n, e, this.viewportPadding),
                            map: r,
                            mapCanvasProjection: n
                        })
                    }
                }
            }]), i
        }(ei),
        ni = function (t) {
            return t.map((function (t) {
                return new Xo({
                    position: t.getPosition(),
                    markers: [t]
                })
            }))
        },
        oi = _e("span").classList,
        ii = oi && oi.constructor && oi.constructor.prototype,
        si = ii === Object.prototype ? void 0 : ii,
        ai = v,
        ui = No.forEach,
        ci = m,
        fi = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        },
        hi = si,
        li = function (t, e) {
            var r = [][t];
            return !!r && ai((function () {
                r.call(null, e || function () {
                    throw 1
                }, 1)
            }))
        }("forEach") ? [].forEach : function (t) {
            return ui(this, t, arguments.length > 1 ? arguments[1] : void 0)
        },
        pi = We,
        di = function (t) {
            if (t && t.forEach !== li) try {
                pi(t, "forEach", li)
            } catch (e) {
                t.forEach = li
            }
        };
    for (var mi in fi) fi[mi] && di(ci[mi] && ci[mi].prototype);
    di(hi);
    var gi = _;
    Un({
        target: "URL",
        proto: !0,
        enumerable: !0
    }, {
        toJSON: function () {
            return gi(URL.prototype.toString, this)
        }
    });
    var vi = function (t) {
            o(i, t);
            var r = u(i);

            function i(t) {
                var n;
                e(this, i);
                var o = t.maxDistance,
                    s = void 0 === o ? 4e4 : o,
                    a = t.gridSize,
                    u = void 0 === a ? 40 : a,
                    c = Zo(t, ["maxDistance", "gridSize"]);
                return (n = r.call(this, c)).clusters = [], n.maxDistance = s, n.gridSize = u, n
            }
            return n(i, [{
                key: "cluster",
                value: function (t) {
                    var e = this,
                        r = t.markers,
                        n = t.map,
                        o = t.mapCanvasProjection;
                    return this.clusters = [], r.forEach((function (t) {
                        e.addToClosestCluster(t, n, o)
                    })), this.clusters
                }
            }, {
                key: "addToClosestCluster",
                value: function (t, e, r) {
                    for (var n = this.maxDistance, o = null, i = 0; i < this.clusters.length; i++) {
                        var s = this.clusters[i],
                            a = Ko(s.bounds.getCenter().toJSON(), t.getPosition().toJSON());
                        a < n && (n = a, o = s)
                    }
                    if (o && Jo(o.bounds, r, this.gridSize).contains(t.getPosition())) o.push(t);
                    else {
                        var u = new Xo({
                            markers: [t]
                        });
                        this.clusters.push(u)
                    }
                }
            }]), i
        }(ri),
        yi = function (t) {
            o(i, t);
            var r = u(i);

            function i(t) {
                e(this, i);
                var n = Zo(t, []);
                return r.call(this, n)
            }
            return n(i, [{
                key: "calculate",
                value: function (t) {
                    var e = t.markers,
                        r = t.map,
                        n = t.mapCanvasProjection;
                    return {
                        clusters: this.cluster({
                            markers: e,
                            map: r,
                            mapCanvasProjection: n
                        }),
                        changed: !1
                    }
                }
            }, {
                key: "cluster",
                value: function (t) {
                    return this.noop(t)
                }
            }]), i
        }(ei),
        bi = 6371008.8,
        _i = {
            centimeters: 637100880,
            centimetres: 637100880,
            degrees: 57.22891354143274,
            feet: 20902260.511392,
            inches: 39.37 * bi,
            kilometers: 6371.0088,
            kilometres: 6371.0088,
            meters: bi,
            metres: bi,
            miles: 3958.761333810546,
            millimeters: 6371008800,
            millimetres: 6371008800,
            nauticalmiles: bi / 1852,
            radians: 1,
            yards: 6967335.223679999
        };

    function wi(t, e, r) {
        if (void 0 === r && (r = {}), !t) throw new Error("coordinates is required");
        if (!Array.isArray(t)) throw new Error("coordinates must be an Array");
        if (t.length < 2) throw new Error("coordinates must be at least 2 numbers long");
        if (!Oi(t[0]) || !Oi(t[1])) throw new Error("coordinates must contain numbers");
        return function (t, e, r) {
            void 0 === r && (r = {});
            var n = {
                type: "Feature"
            };
            return (0 === r.id || r.id) && (n.id = r.id), r.bbox && (n.bbox = r.bbox), n.properties = e || {}, n.geometry = t, n
        }({
            type: "Point",
            coordinates: t
        }, e, r)
    }

    function ki(t, e) {
        void 0 === e && (e = {});
        var r = {
            type: "FeatureCollection"
        };
        return e.id && (r.id = e.id), e.bbox && (r.bbox = e.bbox), r.features = t, r
    }

    function xi(t, e) {
        void 0 === e && (e = "kilometers");
        var r = _i[e];
        if (!r) throw new Error(e + " units is invalid");
        return t * r
    }

    function Mi(t) {
        return t % 360 * Math.PI / 180
    }

    function Pi(t, e, r) {
        if (void 0 === e && (e = "kilometers"), void 0 === r && (r = "kilometers"), !(t >= 0)) throw new Error("length must be a positive number");
        return xi(function (t, e) {
            void 0 === e && (e = "kilometers");
            var r = _i[e];
            if (!r) throw new Error(e + " units is invalid");
            return t / r
        }(t, e), r)
    }

    function Oi(t) {
        return !isNaN(t) && null !== t && !Array.isArray(t)
    }

    function Si(t) {
        if (!t) throw new Error("geojson is required");
        switch (t.type) {
            case "Feature":
                return Ei(t);
            case "FeatureCollection":
                return function (t) {
                    var e = {
                        type: "FeatureCollection"
                    };
                    return Object.keys(t).forEach((function (r) {
                        switch (r) {
                            case "type":
                            case "features":
                                return;
                            default:
                                e[r] = t[r]
                        }
                    })), e.features = t.features.map((function (t) {
                        return Ei(t)
                    })), e
                }(t);
            case "Point":
            case "LineString":
            case "Polygon":
            case "MultiPoint":
            case "MultiLineString":
            case "MultiPolygon":
            case "GeometryCollection":
                return ji(t);
            default:
                throw new Error("unknown GeoJSON type")
        }
    }

    function Ei(t) {
        var e = {
            type: "Feature"
        };
        return Object.keys(t).forEach((function (r) {
            switch (r) {
                case "type":
                case "properties":
                case "geometry":
                    return;
                default:
                    e[r] = t[r]
            }
        })), e.properties = Ci(t.properties), e.geometry = ji(t.geometry), e
    }

    function Ci(t) {
        var e = {};
        return t ? (Object.keys(t).forEach((function (r) {
            var n = t[r];
            "object" == typeof n ? null === n ? e[r] = null : Array.isArray(n) ? e[r] = n.map((function (t) {
                return t
            })) : e[r] = Ci(n) : e[r] = n
        })), e) : e
    }

    function ji(t) {
        var e = {
            type: t.type
        };
        return t.bbox && (e.bbox = t.bbox), "GeometryCollection" === t.type ? (e.geometries = t.geometries.map((function (t) {
            return ji(t)
        })), e) : (e.coordinates = Li(t.coordinates), e)
    }

    function Li(t) {
        var e = t;
        return "object" != typeof e[0] ? e.slice() : e.map((function (t) {
            return Li(t)
        }))
    }

    function Ai(t, e, r) {
        if (null !== t)
            for (var n, o, i, s, a, u, c, f, h = 0, l = 0, p = t.type, d = "FeatureCollection" === p, m = "Feature" === p, g = d ? t.features.length : 1, v = 0; v < g; v++) {
                a = (f = !!(c = d ? t.features[v].geometry : m ? t.geometry : t) && "GeometryCollection" === c.type) ? c.geometries.length : 1;
                for (var y = 0; y < a; y++) {
                    var b = 0,
                        _ = 0;
                    if (null !== (s = f ? c.geometries[y] : c)) {
                        u = s.coordinates;
                        var w = s.type;
                        switch (h = !r || "Polygon" !== w && "MultiPolygon" !== w ? 0 : 1, w) {
                            case null:
                                break;
                            case "Point":
                                if (!1 === e(u, l, v, b, _)) return !1;
                                l++, b++;
                                break;
                            case "LineString":
                            case "MultiPoint":
                                for (n = 0; n < u.length; n++) {
                                    if (!1 === e(u[n], l, v, b, _)) return !1;
                                    l++, "MultiPoint" === w && b++
                                }
                                "LineString" === w && b++;
                                break;
                            case "Polygon":
                            case "MultiLineString":
                                for (n = 0; n < u.length; n++) {
                                    for (o = 0; o < u[n].length - h; o++) {
                                        if (!1 === e(u[n][o], l, v, b, _)) return !1;
                                        l++
                                    }
                                    "MultiLineString" === w && b++, "Polygon" === w && _++
                                }
                                "Polygon" === w && b++;
                                break;
                            case "MultiPolygon":
                                for (n = 0; n < u.length; n++) {
                                    for (_ = 0, o = 0; o < u[n].length; o++) {
                                        for (i = 0; i < u[n][o].length - h; i++) {
                                            if (!1 === e(u[n][o][i], l, v, b, _)) return !1;
                                            l++
                                        }
                                        _++
                                    }
                                    b++
                                }
                                break;
                            case "GeometryCollection":
                                for (n = 0; n < s.geometries.length; n++)
                                    if (!1 === Ai(s.geometries[n], e, r)) return !1;
                                break;
                            default:
                                throw new Error("Unknown Geometry Type")
                        }
                    }
                }
            }
    }

    function Ti(t) {
        var e = [];
        return Ai(t, (function (t) {
            e.push(t)
        })), e
    }
    var Ii = {
            eudist: function (t, e, r) {
                for (var n = t.length, o = 0, i = 0; i < n; i++) {
                    var s = (t[i] || 0) - (e[i] || 0);
                    o += s * s
                }
                return r ? Math.sqrt(o) : o
            },
            mandist: function (t, e, r) {
                for (var n = t.length, o = 0, i = 0; i < n; i++) o += Math.abs((t[i] || 0) - (e[i] || 0));
                return r ? Math.sqrt(o) : o
            },
            dist: function (t, e, r) {
                var n = Math.abs(t - e);
                return r ? n : n * n
            }
        },
        Ni = Ii.eudist,
        Fi = Ii.dist,
        Di = {
            kmrand: function (t, e) {
                for (var r = {}, n = [], o = e << 2, i = t.length, s = t[0].length > 0; n.length < e && o-- > 0;) {
                    var a = t[Math.floor(Math.random() * i)],
                        u = s ? a.join("_") : "" + a;
                    r[u] || (r[u] = !0, n.push(a))
                }
                if (n.length < e) throw new Error("Error initializating clusters");
                return n
            },
            kmpp: function (t, e) {
                var r = t[0].length ? Ni : Fi,
                    n = [],
                    o = t.length,
                    i = t[0].length > 0,
                    s = t[Math.floor(Math.random() * o)];
                i && s.join("_");
                for (n.push(s); n.length < e;) {
                    for (var a = [], u = n.length, c = 0, f = [], h = 0; h < o; h++) {
                        for (var l = 1 / 0, p = 0; p < u; p++) {
                            var d = r(t[h], n[p]);
                            d <= l && (l = d)
                        }
                        a[h] = l
                    }
                    for (var m = 0; m < o; m++) c += a[m];
                    for (var g = 0; g < o; g++) f[g] = {
                        i: g,
                        v: t[g],
                        pr: a[g] / c,
                        cs: 0
                    };
                    f.sort((function (t, e) {
                        return t.pr - e.pr
                    })), f[0].cs = f[0].pr;
                    for (var v = 1; v < o; v++) f[v].cs = f[v - 1].cs + f[v].pr;
                    for (var y = Math.random(), b = 0; b < o - 1 && f[b++].cs < y;);
                    n.push(f[b - 1].v)
                }
                return n
            }
        },
        zi = Ii.eudist,
        Ri = Di.kmrand,
        qi = Di.kmpp;

    function Zi(t, e, r) {
        r = r || [];
        for (var n = 0; n < t; n++) r[n] = e;
        return r
    }
    var Gi = function (t, e, r, n) {
        var o = [],
            i = [],
            s = [],
            a = [],
            u = !1,
            c = n || 1e4,
            f = t.length,
            h = t[0].length,
            l = h > 0,
            p = [];
        if (r) o = "kmrand" == r ? Ri(t, e) : "kmpp" == r ? qi(t, e) : r;
        else
            for (var d = {}; o.length < e;) {
                var m = Math.floor(Math.random() * f);
                d[m] || (d[m] = !0, o.push(t[m]))
            }
        do {
            Zi(e, 0, p);
            for (var g = 0; g < f; g++) {
                for (var v = 1 / 0, y = 0, b = 0; b < e; b++) {
                    (a = l ? zi(t[g], o[b]) : Math.abs(t[g] - o[b])) <= v && (v = a, y = b)
                }
                s[g] = y, p[y]++
            }
            for (var _ = [], w = (i = [], 0); w < e; w++) _[w] = l ? Zi(h, 0, _[w]) : 0, i[w] = o[w];
            if (l) {
                for (var k = 0; k < e; k++) o[k] = [];
                for (var x = 0; x < f; x++)
                    for (var M = _[s[x]], P = t[x], O = 0; O < h; O++) M[O] += P[O];
                u = !0;
                for (var S = 0; S < e; S++) {
                    for (var E = o[S], C = _[S], j = i[S], L = p[S], A = 0; A < h; A++) E[A] = C[A] / L || 0;
                    if (u)
                        for (var T = 0; T < h; T++)
                            if (j[T] != E[T]) {
                                u = !1;
                                break
                            }
                }
            } else {
                for (var I = 0; I < f; I++) {
                    _[s[I]] += t[I]
                }
                for (var N = 0; N < e; N++) o[N] = _[N] / p[N] || 0;
                u = !0;
                for (var F = 0; F < e; F++)
                    if (i[F] != o[F]) {
                        u = !1;
                        break
                    }
            }
            u = u || --c <= 0
        } while (!u);
        return {
            it: 1e4 - c,
            k: e,
            idxs: s,
            centroids: o
        }
    };
    var Bi = function (t) {
            o(i, t);
            var r = u(i);

            function i(t) {
                var n;
                e(this, i);
                var o = t.numberOfClusters,
                    s = Zo(t, ["numberOfClusters"]);
                return (n = r.call(this, s)).numberOfClusters = o, n
            }
            return n(i, [{
                key: "cluster",
                value: function (t) {
                    var e = t.markers,
                        r = t.map,
                        n = [];
                    return 0 === e.length || function (t, e) {
                        void 0 === e && (e = {});
                        var r = t.features.length;
                        e.numberOfClusters = e.numberOfClusters || Math.round(Math.sqrt(r / 2)), e.numberOfClusters > r && (e.numberOfClusters = r), !0 !== e.mutate && (t = Si(t));
                        var n = Ti(t),
                            o = n.slice(0, e.numberOfClusters),
                            i = Gi(n, e.numberOfClusters, o),
                            s = {};
                        return i.centroids.forEach((function (t, e) {
                                s[e] = t
                            })),
                            function (t, e) {
                                if ("Feature" === t.type) e(t, 0);
                                else if ("FeatureCollection" === t.type)
                                    for (var r = 0; r < t.features.length && !1 !== e(t.features[r], r); r++);
                            }(t, (function (t, e) {
                                var r = i.idxs[e];
                                t.properties.cluster = r, t.properties.centroid = s[r]
                            })), t
                    }(ki(e.map((function (t) {
                        return wi([t.getPosition().lng(), t.getPosition().lat()])
                    }))), {
                        numberOfClusters: this.numberOfClusters instanceof Function ? this.numberOfClusters(e.length, r.getZoom()) : this.numberOfClusters
                    }).features.forEach((function (t, r) {
                        n[t.properties.cluster] || (n[t.properties.cluster] = new Xo({
                            position: {
                                lng: t.properties.centroid[0],
                                lat: t.properties.centroid[1]
                            },
                            markers: []
                        })), n[t.properties.cluster].push(e[r])
                    })), n
                }
            }]), i
        }(ri),
        Vi = dn,
        Ui = mn,
        Wi = Object.keys || function (t) {
            return Vi(t, Ui)
        },
        Qi = y,
        Xi = A,
        Hi = _,
        Ji = v,
        Ki = Wi,
        $i = yn,
        Yi = w,
        ts = Rt,
        es = G,
        rs = Object.assign,
        ns = Object.defineProperty,
        os = Xi([].concat),
        is = !rs || Ji((function () {
            if (Qi && 1 !== rs({
                    b: 1
                }, rs(ns({}, "a", {
                    enumerable: !0,
                    get: function () {
                        ns(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b) return !0;
            var t = {},
                e = {},
                r = Symbol(),
                n = "abcdefghijklmnopqrst";
            return t[r] = 7, n.split("").forEach((function (t) {
                e[t] = t
            })), 7 != rs({}, t)[r] || Ki(rs({}, e)).join("") != n
        })) ? function (t, e) {
            for (var r = ts(t), n = arguments.length, o = 1, i = $i.f, s = Yi.f; n > o;)
                for (var a, u = es(arguments[o++]), c = i ? os(Ki(u), i(u)) : Ki(u), f = c.length, h = 0; f > h;) a = c[h++], Qi && !Hi(s, u, a) || (r[a] = u[a]);
            return r
        } : rs;

    function ss(t) {
        if (!t) throw new Error("coord is required");
        if (!Array.isArray(t)) {
            if ("Feature" === t.type && null !== t.geometry && "Point" === t.geometry.type) return t.geometry.coordinates;
            if ("Point" === t.type) return t.coordinates
        }
        if (Array.isArray(t) && t.length >= 2 && !Array.isArray(t[0]) && !Array.isArray(t[1])) return t;
        throw new Error("coord must be GeoJSON Point or an Array of numbers")
    }

    function as(t, e, r) {
        void 0 === r && (r = {});
        var n = ss(t),
            o = ss(e),
            i = Mi(o[1] - n[1]),
            s = Mi(o[0] - n[0]),
            a = Mi(n[1]),
            u = Mi(o[1]),
            c = Math.pow(Math.sin(i / 2), 2) + Math.pow(Math.sin(s / 2), 2) * Math.cos(a) * Math.cos(u);
        return xi(2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c)), r.units)
    }
    Un({
        target: "Object",
        stat: !0,
        forced: Object.assign !== is
    }, {
        assign: is
    });
    var us = {
            exports: {}
        },
        cs = {
            exports: {}
        };
    ! function (t) {
        function e(t, e, r, n) {
            this.dataset = [], this.epsilon = 1, this.minPts = 2, this.distance = this._euclideanDistance, this.clusters = [], this.noise = [], this._visited = [], this._assigned = [], this._datasetLength = 0, this._init(t, e, r, n)
        }
        e.prototype.run = function (t, e, r, n) {
            this._init(t, e, r, n);
            for (var o = 0; o < this._datasetLength; o++)
                if (1 !== this._visited[o]) {
                    this._visited[o] = 1;
                    var i = this._regionQuery(o);
                    if (i.length < this.minPts) this.noise.push(o);
                    else {
                        var s = this.clusters.length;
                        this.clusters.push([]), this._addToCluster(o, s), this._expandCluster(s, i)
                    }
                } return this.clusters
        }, e.prototype._init = function (t, e, r, n) {
            if (t) {
                if (!(t instanceof Array)) throw Error("Dataset must be of type array, " + typeof t + " given");
                this.dataset = t, this.clusters = [], this.noise = [], this._datasetLength = t.length, this._visited = new Array(this._datasetLength), this._assigned = new Array(this._datasetLength)
            }
            e && (this.epsilon = e), r && (this.minPts = r), n && (this.distance = n)
        }, e.prototype._expandCluster = function (t, e) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r];
                if (1 !== this._visited[n]) {
                    this._visited[n] = 1;
                    var o = this._regionQuery(n);
                    o.length >= this.minPts && (e = this._mergeArrays(e, o))
                }
                1 !== this._assigned[n] && this._addToCluster(n, t)
            }
        }, e.prototype._addToCluster = function (t, e) {
            this.clusters[e].push(t), this._assigned[t] = 1
        }, e.prototype._regionQuery = function (t) {
            for (var e = [], r = 0; r < this._datasetLength; r++) {
                this.distance(this.dataset[t], this.dataset[r]) < this.epsilon && e.push(r)
            }
            return e
        }, e.prototype._mergeArrays = function (t, e) {
            for (var r = e.length, n = 0; n < r; n++) {
                var o = e[n];
                t.indexOf(o) < 0 && t.push(o)
            }
            return t
        }, e.prototype._euclideanDistance = function (t, e) {
            for (var r = 0, n = Math.min(t.length, e.length); n--;) r += (t[n] - e[n]) * (t[n] - e[n]);
            return Math.sqrt(r)
        }, t.exports && (t.exports = e)
    }(cs);
    var fs = {
        exports: {}
    };
    ! function (t) {
        function e(t, e, r) {
            this.k = 3, this.dataset = [], this.assignments = [], this.centroids = [], this.init(t, e, r)
        }
        e.prototype.init = function (t, e, r) {
            this.assignments = [], this.centroids = [], void 0 !== t && (this.dataset = t), void 0 !== e && (this.k = e), void 0 !== r && (this.distance = r)
        }, e.prototype.run = function (t, e) {
            this.init(t, e);
            for (var r = this.dataset.length, n = 0; n < this.k; n++) this.centroids[n] = this.randomCentroid();
            for (var o = !0; o;) {
                o = this.assign();
                for (var i = 0; i < this.k; i++) {
                    for (var s = new Array(f), a = 0, u = 0; u < f; u++) s[u] = 0;
                    for (var c = 0; c < r; c++) {
                        var f = this.dataset[c].length;
                        if (i === this.assignments[c]) {
                            for (u = 0; u < f; u++) s[u] += this.dataset[c][u];
                            a++
                        }
                    }
                    if (a > 0) {
                        for (u = 0; u < f; u++) s[u] /= a;
                        this.centroids[i] = s
                    } else this.centroids[i] = this.randomCentroid(), o = !0
                }
            }
            return this.getClusters()
        }, e.prototype.randomCentroid = function () {
            var t, e, r = this.dataset.length - 1;
            do {
                e = Math.round(Math.random() * r), t = this.dataset[e]
            } while (this.centroids.indexOf(t) >= 0);
            return t
        }, e.prototype.assign = function () {
            for (var t, e = !1, r = this.dataset.length, n = 0; n < r; n++)(t = this.argmin(this.dataset[n], this.centroids, this.distance)) != this.assignments[n] && (this.assignments[n] = t, e = !0);
            return e
        }, e.prototype.getClusters = function () {
            for (var t, e = new Array(this.k), r = 0; r < this.assignments.length; r++) void 0 === e[t = this.assignments[r]] && (e[t] = []), e[t].push(r);
            return e
        }, e.prototype.argmin = function (t, e, r) {
            for (var n, o = Number.MAX_VALUE, i = 0, s = e.length, a = 0; a < s; a++)(n = r(t, e[a])) < o && (o = n, i = a);
            return i
        }, e.prototype.distance = function (t, e) {
            for (var r = 0, n = Math.min(t.length, e.length); n--;) {
                var o = t[n] - e[n];
                r += o * o
            }
            return Math.sqrt(r)
        }, t.exports && (t.exports = e)
    }(fs);
    var hs, ls = {
            exports: {}
        },
        ps = {
            exports: {}
        };
    ! function (t) {
        function e(t, e, r) {
            this._queue = [], this._priorities = [], this._sorting = "desc", this._init(t, e, r)
        }
        e.prototype.insert = function (t, e) {
            for (var r = this._queue.length, n = r; n--;) {
                var o = this._priorities[n];
                "desc" === this._sorting ? e > o && (r = n) : e < o && (r = n)
            }
            this._insertAt(t, e, r)
        }, e.prototype.remove = function (t) {
            for (var e = this._queue.length; e--;) {
                if (t === this._queue[e]) {
                    this._queue.splice(e, 1), this._priorities.splice(e, 1);
                    break
                }
            }
        }, e.prototype.forEach = function (t) {
            this._queue.forEach(t)
        }, e.prototype.getElements = function () {
            return this._queue
        }, e.prototype.getElementPriority = function (t) {
            return this._priorities[t]
        }, e.prototype.getPriorities = function () {
            return this._priorities
        }, e.prototype.getElementsWithPriorities = function () {
            for (var t = [], e = 0, r = this._queue.length; e < r; e++) t.push([this._queue[e], this._priorities[e]]);
            return t
        }, e.prototype._init = function (t, e, r) {
            if (t && e) {
                if (this._queue = [], this._priorities = [], t.length !== e.length) throw new Error("Arrays must have the same length");
                for (var n = 0; n < t.length; n++) this.insert(t[n], e[n])
            }
            r && (this._sorting = r)
        }, e.prototype._insertAt = function (t, e, r) {
            this._queue.length === r ? (this._queue.push(t), this._priorities.push(e)) : (this._queue.splice(r, 0, t), this._priorities.splice(r, 0, e))
        }, t.exports && (t.exports = e)
    }(ps),
    function (t) {
        if (t.exports) var e = ps.exports;

        function r(t, e, r, n) {
            this.epsilon = 1, this.minPts = 1, this.distance = this._euclideanDistance, this._reachability = [], this._processed = [], this._coreDistance = 0, this._orderedList = [], this._init(t, e, r, n)
        }
        r.prototype.run = function (t, r, n, o) {
            this._init(t, r, n, o);
            for (var i = 0, s = this.dataset.length; i < s; i++)
                if (1 !== this._processed[i]) {
                    this._processed[i] = 1, this.clusters.push([i]);
                    var a = this.clusters.length - 1;
                    this._orderedList.push(i);
                    var u = new e(null, null, "asc"),
                        c = this._regionQuery(i);
                    void 0 !== this._distanceToCore(i) && (this._updateQueue(i, c, u), this._expandCluster(a, u))
                } return this.clusters
        }, r.prototype.getReachabilityPlot = function () {
            for (var t = [], e = 0, r = this._orderedList.length; e < r; e++) {
                var n = this._orderedList[e],
                    o = this._reachability[n];
                t.push([n, o])
            }
            return t
        }, r.prototype._init = function (t, e, r, n) {
            if (t) {
                if (!(t instanceof Array)) throw Error("Dataset must be of type array, " + typeof t + " given");
                this.dataset = t, this.clusters = [], this._reachability = new Array(this.dataset.length), this._processed = new Array(this.dataset.length), this._coreDistance = 0, this._orderedList = []
            }
            e && (this.epsilon = e), r && (this.minPts = r), n && (this.distance = n)
        }, r.prototype._updateQueue = function (t, e, r) {
            var n = this;
            this._coreDistance = this._distanceToCore(t), e.forEach((function (e) {
                if (void 0 === n._processed[e]) {
                    var o = n.distance(n.dataset[t], n.dataset[e]),
                        i = Math.max(n._coreDistance, o);
                    void 0 === n._reachability[e] ? (n._reachability[e] = i, r.insert(e, i)) : i < n._reachability[e] && (n._reachability[e] = i, r.remove(e), r.insert(e, i))
                }
            }))
        }, r.prototype._expandCluster = function (t, e) {
            for (var r = e.getElements(), n = 0, o = r.length; n < o; n++) {
                var i = r[n];
                if (void 0 === this._processed[i]) {
                    var s = this._regionQuery(i);
                    this._processed[i] = 1, this.clusters[t].push(i), this._orderedList.push(i), void 0 !== this._distanceToCore(i) && (this._updateQueue(i, s, e), this._expandCluster(t, e))
                }
            }
        }, r.prototype._distanceToCore = function (t) {
            for (var e = this.epsilon, r = 0; r < e; r++) {
                if (this._regionQuery(t, r).length >= this.minPts) return r
            }
        }, r.prototype._regionQuery = function (t, e) {
            e = e || this.epsilon;
            for (var r = [], n = 0, o = this.dataset.length; n < o; n++) this.distance(this.dataset[t], this.dataset[n]) < e && r.push(n);
            return r
        }, r.prototype._euclideanDistance = function (t, e) {
            for (var r = 0, n = Math.min(t.length, e.length); n--;) r += (t[n] - e[n]) * (t[n] - e[n]);
            return Math.sqrt(r)
        }, t.exports && (t.exports = r)
    }(ls), (hs = us).exports && (hs.exports = {
        DBSCAN: cs.exports,
        KMEANS: fs.exports,
        OPTICS: ls.exports,
        PriorityQueue: ps.exports
    });
    var ds = us.exports;
    var ms = {
            units: "kilometers",
            mutate: !1,
            minPoints: 1
        },
        gs = function (t) {
            o(i, t);
            var r = u(i);

            function i(t) {
                var n;
                e(this, i);
                var o = t.maxDistance,
                    s = void 0 === o ? 200 : o,
                    a = t.minPoints,
                    u = void 0 === a ? ms.minPoints : a,
                    c = Zo(t, ["maxDistance", "minPoints"]);
                return (n = r.call(this, c)).maxDistance = s, n.options = Object.assign(Object.assign({}, ms), {
                    minPoints: u
                }), n
            }
            return n(i, [{
                key: "cluster",
                value: function (t) {
                    var e = t.markers,
                        r = t.mapCanvasProjection,
                        n = ki(e.map((function (t) {
                            var e = r.fromLatLngToContainerPixel(t.getPosition());
                            return wi([e.x, e.y])
                        }))),
                        o = [];
                    return function (t, e, r) {
                        void 0 === r && (r = {}), !0 !== r.mutate && (t = Si(t)), r.minPoints = r.minPoints || 3;
                        var n = new ds.DBSCAN,
                            o = n.run(Ti(t), Pi(e, r.units), r.minPoints, as),
                            i = -1;
                        return o.forEach((function (e) {
                            i++, e.forEach((function (e) {
                                var r = t.features[e];
                                r.properties || (r.properties = {}), r.properties.cluster = i, r.properties.dbscan = "core"
                            }))
                        })), n.noise.forEach((function (e) {
                            var r = t.features[e];
                            r.properties || (r.properties = {}), r.properties.cluster ? r.properties.dbscan = "edge" : r.properties.dbscan = "noise"
                        })), t
                    }(n, this.maxDistance, this.options).features.forEach((function (t, r) {
                        o[t.properties.cluster] || (o[t.properties.cluster] = []), o[t.properties.cluster].push(e[r])
                    })), o.map((function (t) {
                        return new Xo({
                            markers: t
                        })
                    }))
                }
            }]), i
        }(ri),
        vs = {
            exports: {}
        };
    ! function (t, e) {
        t.exports = function () {
            function t(r, n, o, i, s, a) {
                if (!(s - i <= o)) {
                    var u = i + s >> 1;
                    e(r, n, u, i, s, a % 2), t(r, n, o, i, u - 1, a + 1), t(r, n, o, u + 1, s, a + 1)
                }
            }

            function e(t, n, o, i, s, a) {
                for (; s > i;) {
                    if (s - i > 600) {
                        var u = s - i + 1,
                            c = o - i + 1,
                            f = Math.log(u),
                            h = .5 * Math.exp(2 * f / 3),
                            l = .5 * Math.sqrt(f * h * (u - h) / u) * (c - u / 2 < 0 ? -1 : 1);
                        e(t, n, o, Math.max(i, Math.floor(o - c * h / u + l)), Math.min(s, Math.floor(o + (u - c) * h / u + l)), a)
                    }
                    var p = n[2 * o + a],
                        d = i,
                        m = s;
                    for (r(t, n, i, o), n[2 * s + a] > p && r(t, n, i, s); d < m;) {
                        for (r(t, n, d, m), d++, m--; n[2 * d + a] < p;) d++;
                        for (; n[2 * m + a] > p;) m--
                    }
                    n[2 * i + a] === p ? r(t, n, i, m) : r(t, n, ++m, s), m <= o && (i = m + 1), o <= m && (s = m - 1)
                }
            }

            function r(t, e, r, o) {
                n(t, r, o), n(e, 2 * r, 2 * o), n(e, 2 * r + 1, 2 * o + 1)
            }

            function n(t, e, r) {
                var n = t[e];
                t[e] = t[r], t[r] = n
            }

            function o(t, e, r, n, o, i, s) {
                for (var a, u, c = [0, t.length - 1, 0], f = []; c.length;) {
                    var h = c.pop(),
                        l = c.pop(),
                        p = c.pop();
                    if (l - p <= s)
                        for (var d = p; d <= l; d++) a = e[2 * d], u = e[2 * d + 1], a >= r && a <= o && u >= n && u <= i && f.push(t[d]);
                    else {
                        var m = Math.floor((p + l) / 2);
                        a = e[2 * m], u = e[2 * m + 1], a >= r && a <= o && u >= n && u <= i && f.push(t[m]);
                        var g = (h + 1) % 2;
                        (0 === h ? r <= a : n <= u) && (c.push(p), c.push(m - 1), c.push(g)), (0 === h ? o >= a : i >= u) && (c.push(m + 1), c.push(l), c.push(g))
                    }
                }
                return f
            }

            function i(t, e, r, n, o, i) {
                for (var a = [0, t.length - 1, 0], u = [], c = o * o; a.length;) {
                    var f = a.pop(),
                        h = a.pop(),
                        l = a.pop();
                    if (h - l <= i)
                        for (var p = l; p <= h; p++) s(e[2 * p], e[2 * p + 1], r, n) <= c && u.push(t[p]);
                    else {
                        var d = Math.floor((l + h) / 2),
                            m = e[2 * d],
                            g = e[2 * d + 1];
                        s(m, g, r, n) <= c && u.push(t[d]);
                        var v = (f + 1) % 2;
                        (0 === f ? r - o <= m : n - o <= g) && (a.push(l), a.push(d - 1), a.push(v)), (0 === f ? r + o >= m : n + o >= g) && (a.push(d + 1), a.push(h), a.push(v))
                    }
                }
                return u
            }

            function s(t, e, r, n) {
                var o = t - r,
                    i = e - n;
                return o * o + i * i
            }
            var a = function (t) {
                    return t[0]
                },
                u = function (t) {
                    return t[1]
                },
                c = function (e, r, n, o, i) {
                    void 0 === r && (r = a), void 0 === n && (n = u), void 0 === o && (o = 64), void 0 === i && (i = Float64Array), this.nodeSize = o, this.points = e;
                    for (var s = e.length < 65536 ? Uint16Array : Uint32Array, c = this.ids = new s(e.length), f = this.coords = new i(2 * e.length), h = 0; h < e.length; h++) c[h] = h, f[2 * h] = r(e[h]), f[2 * h + 1] = n(e[h]);
                    t(c, f, o, 0, c.length - 1, 0)
                };
            return c.prototype.range = function (t, e, r, n) {
                return o(this.ids, this.coords, t, e, r, n, this.nodeSize)
            }, c.prototype.within = function (t, e, r) {
                return i(this.ids, this.coords, t, e, r, this.nodeSize)
            }, c
        }()
    }(vs);
    var ys = vs.exports;
    const bs = {
            minZoom: 0,
            maxZoom: 16,
            minPoints: 2,
            radius: 40,
            extent: 512,
            nodeSize: 64,
            log: !1,
            generateId: !1,
            reduce: null,
            map: t => t
        },
        _s = Math.fround || (ws = new Float32Array(1), t => (ws[0] = +t, ws[0]));
    var ws;
    class ks {
        constructor(t) {
            this.options = js(Object.create(bs), t), this.trees = new Array(this.options.maxZoom + 1)
        }
        load(t) {
            const {
                log: e,
                minZoom: r,
                maxZoom: n,
                nodeSize: o
            } = this.options;
            e && console.time("total time");
            const i = `prepare ${t.length} points`;
            e && console.time(i), this.points = t;
            let s = [];
            for (let e = 0; e < t.length; e++) t[e].geometry && s.push(Ms(t[e], e));
            this.trees[n + 1] = new ys(s, Ls, As, o, Float32Array), e && console.timeEnd(i);
            for (let t = n; t >= r; t--) {
                const r = +Date.now();
                s = this._cluster(s, t), this.trees[t] = new ys(s, Ls, As, o, Float32Array), e && console.log("z%d: %d clusters in %dms", t, s.length, +Date.now() - r)
            }
            return e && console.timeEnd("total time"), this
        }
        getClusters(t, e) {
            let r = ((t[0] + 180) % 360 + 360) % 360 - 180;
            const n = Math.max(-90, Math.min(90, t[1]));
            let o = 180 === t[2] ? 180 : ((t[2] + 180) % 360 + 360) % 360 - 180;
            const i = Math.max(-90, Math.min(90, t[3]));
            if (t[2] - t[0] >= 360) r = -180, o = 180;
            else if (r > o) {
                const t = this.getClusters([r, n, 180, i], e),
                    s = this.getClusters([-180, n, o, i], e);
                return t.concat(s)
            }
            const s = this.trees[this._limitZoom(e)],
                a = s.range(Ss(r), Es(i), Ss(o), Es(n)),
                u = [];
            for (const t of a) {
                const e = s.points[t];
                u.push(e.numPoints ? Ps(e) : this.points[e.index])
            }
            return u
        }
        getChildren(t) {
            const e = this._getOriginId(t),
                r = this._getOriginZoom(t),
                n = "No cluster with the specified id.",
                o = this.trees[r];
            if (!o) throw new Error(n);
            const i = o.points[e];
            if (!i) throw new Error(n);
            const s = this.options.radius / (this.options.extent * Math.pow(2, r - 1)),
                a = o.within(i.x, i.y, s),
                u = [];
            for (const e of a) {
                const r = o.points[e];
                r.parentId === t && u.push(r.numPoints ? Ps(r) : this.points[r.index])
            }
            if (0 === u.length) throw new Error(n);
            return u
        }
        getLeaves(t, e, r) {
            e = e || 10, r = r || 0;
            const n = [];
            return this._appendLeaves(n, t, e, r, 0), n
        }
        getTile(t, e, r) {
            const n = this.trees[this._limitZoom(t)],
                o = Math.pow(2, t),
                {
                    extent: i,
                    radius: s
                } = this.options,
                a = s / i,
                u = (r - a) / o,
                c = (r + 1 + a) / o,
                f = {
                    features: []
                };
            return this._addTileFeatures(n.range((e - a) / o, u, (e + 1 + a) / o, c), n.points, e, r, o, f), 0 === e && this._addTileFeatures(n.range(1 - a / o, u, 1, c), n.points, o, r, o, f), e === o - 1 && this._addTileFeatures(n.range(0, u, a / o, c), n.points, -1, r, o, f), f.features.length ? f : null
        }
        getClusterExpansionZoom(t) {
            let e = this._getOriginZoom(t) - 1;
            for (; e <= this.options.maxZoom;) {
                const r = this.getChildren(t);
                if (e++, 1 !== r.length) break;
                t = r[0].properties.cluster_id
            }
            return e
        }
        _appendLeaves(t, e, r, n, o) {
            const i = this.getChildren(e);
            for (const e of i) {
                const i = e.properties;
                if (i && i.cluster ? o + i.point_count <= n ? o += i.point_count : o = this._appendLeaves(t, i.cluster_id, r, n, o) : o < n ? o++ : t.push(e), t.length === r) break
            }
            return o
        }
        _addTileFeatures(t, e, r, n, o, i) {
            for (const s of t) {
                const t = e[s],
                    a = t.numPoints;
                let u, c, f;
                if (a) u = Os(t), c = t.x, f = t.y;
                else {
                    const e = this.points[t.index];
                    u = e.properties, c = Ss(e.geometry.coordinates[0]), f = Es(e.geometry.coordinates[1])
                }
                const h = {
                    type: 1,
                    geometry: [[Math.round(this.options.extent * (c * o - r)), Math.round(this.options.extent * (f * o - n))]],
                    tags: u
                };
                let l;
                a ? l = t.id : this.options.generateId ? l = t.index : this.points[t.index].id && (l = this.points[t.index].id), void 0 !== l && (h.id = l), i.features.push(h)
            }
        }
        _limitZoom(t) {
            return Math.max(this.options.minZoom, Math.min(+t, this.options.maxZoom + 1))
        }
        _cluster(t, e) {
            const r = [],
                {
                    radius: n,
                    extent: o,
                    reduce: i,
                    minPoints: s
                } = this.options,
                a = n / (o * Math.pow(2, e));
            for (let n = 0; n < t.length; n++) {
                const o = t[n];
                if (o.zoom <= e) continue;
                o.zoom = e;
                const u = this.trees[e + 1],
                    c = u.within(o.x, o.y, a),
                    f = o.numPoints || 1;
                let h = f;
                for (const t of c) {
                    const r = u.points[t];
                    r.zoom > e && (h += r.numPoints || 1)
                }
                if (h > f && h >= s) {
                    let t = o.x * f,
                        s = o.y * f,
                        a = i && f > 1 ? this._map(o, !0) : null;
                    const l = (n << 5) + (e + 1) + this.points.length;
                    for (const r of c) {
                        const n = u.points[r];
                        if (n.zoom <= e) continue;
                        n.zoom = e;
                        const c = n.numPoints || 1;
                        t += n.x * c, s += n.y * c, n.parentId = l, i && (a || (a = this._map(o, !0)), i(a, this._map(n)))
                    }
                    o.parentId = l, r.push(xs(t / h, s / h, l, h, a))
                } else if (r.push(o), h > 1)
                    for (const t of c) {
                        const n = u.points[t];
                        n.zoom <= e || (n.zoom = e, r.push(n))
                    }
            }
            return r
        }
        _getOriginId(t) {
            return t - this.points.length >> 5
        }
        _getOriginZoom(t) {
            return (t - this.points.length) % 32
        }
        _map(t, e) {
            if (t.numPoints) return e ? js({}, t.properties) : t.properties;
            const r = this.points[t.index].properties,
                n = this.options.map(r);
            return e && n === r ? js({}, n) : n
        }
    }

    function xs(t, e, r, n, o) {
        return {
            x: _s(t),
            y: _s(e),
            zoom: 1 / 0,
            id: r,
            parentId: -1,
            numPoints: n,
            properties: o
        }
    }

    function Ms(t, e) {
        const [r, n] = t.geometry.coordinates;
        return {
            x: _s(Ss(r)),
            y: _s(Es(n)),
            zoom: 1 / 0,
            index: e,
            parentId: -1
        }
    }

    function Ps(t) {
        return {
            type: "Feature",
            id: t.id,
            properties: Os(t),
            geometry: {
                type: "Point",
                coordinates: [(e = t.x, 360 * (e - .5)), Cs(t.y)]
            }
        };
        var e
    }

    function Os(t) {
        const e = t.numPoints,
            r = e >= 1e4 ? Math.round(e / 1e3) + "k" : e >= 1e3 ? Math.round(e / 100) / 10 + "k" : e;
        return js(js({}, t.properties), {
            cluster: !0,
            cluster_id: t.id,
            point_count: e,
            point_count_abbreviated: r
        })
    }

    function Ss(t) {
        return t / 360 + .5
    }

    function Es(t) {
        const e = Math.sin(t * Math.PI / 180),
            r = .5 - .25 * Math.log((1 + e) / (1 - e)) / Math.PI;
        return r < 0 ? 0 : r > 1 ? 1 : r
    }

    function Cs(t) {
        const e = (180 - 360 * t) * Math.PI / 180;
        return 360 * Math.atan(Math.exp(e)) / Math.PI - 90
    }

    function js(t, e) {
        for (const r in e) t[r] = e[r];
        return t
    }

    function Ls(t) {
        return t.x
    }

    function As(t) {
        return t.y
    }
    var Ts, Is = function t(e, r) {
            if (e === r) return !0;
            if (e && r && "object" == typeof e && "object" == typeof r) {
                if (e.constructor !== r.constructor) return !1;
                var n, o, i;
                if (Array.isArray(e)) {
                    if ((n = e.length) != r.length) return !1;
                    for (o = n; 0 != o--;)
                        if (!t(e[o], r[o])) return !1;
                    return !0
                }
                if (e instanceof Map && r instanceof Map) {
                    if (e.size !== r.size) return !1;
                    for (o of e.entries())
                        if (!r.has(o[0])) return !1;
                    for (o of e.entries())
                        if (!t(o[1], r.get(o[0]))) return !1;
                    return !0
                }
                if (e instanceof Set && r instanceof Set) {
                    if (e.size !== r.size) return !1;
                    for (o of e.entries())
                        if (!r.has(o[0])) return !1;
                    return !0
                }
                if (ArrayBuffer.isView(e) && ArrayBuffer.isView(r)) {
                    if ((n = e.length) != r.length) return !1;
                    for (o = n; 0 != o--;)
                        if (e[o] !== r[o]) return !1;
                    return !0
                }
                if (e.constructor === RegExp) return e.source === r.source && e.flags === r.flags;
                if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === r.valueOf();
                if (e.toString !== Object.prototype.toString) return e.toString() === r.toString();
                if ((n = (i = Object.keys(e)).length) !== Object.keys(r).length) return !1;
                for (o = n; 0 != o--;)
                    if (!Object.prototype.hasOwnProperty.call(r, i[o])) return !1;
                for (o = n; 0 != o--;) {
                    var s = i[o];
                    if (!t(e[s], r[s])) return !1
                }
                return !0
            }
            return e != e && r != r
        },
        Ns = function (t) {
            o(i, t);
            var r = u(i);

            function i(t) {
                var n;
                e(this, i);
                var o = t.maxZoom,
                    s = t.radius,
                    a = void 0 === s ? 60 : s,
                    u = Zo(t, ["maxZoom", "radius"]);
                return (n = r.call(this, {
                    maxZoom: o
                })).superCluster = new ks(Object.assign({
                    maxZoom: n.maxZoom,
                    radius: a
                }, u)), n.state = {
                    zoom: null
                }, n
            }
            return n(i, [{
                key: "calculate",
                value: function (t) {
                    var e = !1;
                    if (!Is(t.markers, this.markers)) {
                        e = !0, this.markers = f(t.markers);
                        var r = this.markers.map((function (t) {
                            return {
                                type: "Feature",
                                geometry: {
                                    type: "Point",
                                    coordinates: [t.getPosition().lng(), t.getPosition().lat()]
                                },
                                properties: {
                                    marker: t
                                }
                            }
                        }));
                        this.superCluster.load(r)
                    }
                    var n = {
                        zoom: t.map.getZoom()
                    };
                    return e || this.state.zoom > this.maxZoom && n.zoom > this.maxZoom || (e = e || !Is(this.state, n)), this.state = n, e && (this.clusters = this.cluster(t)), {
                        clusters: this.clusters,
                        changed: e
                    }
                }
            }, {
                key: "cluster",
                value: function (t) {
                    var e = t.map;
                    return this.superCluster.getClusters([-180, -90, 180, 90], Math.round(e.getZoom())).map(this.transformCluster.bind(this))
                }
            }, {
                key: "transformCluster",
                value: function (t) {
                    var e = c(t.geometry.coordinates, 2),
                        r = e[0],
                        n = e[1],
                        o = t.properties;
                    if (o.cluster) return new Xo({
                        markers: this.superCluster.getLeaves(o.cluster_id, 1 / 0).map((function (t) {
                            return t.properties.marker
                        })),
                        position: new google.maps.LatLng({
                            lat: n,
                            lng: r
                        })
                    });
                    var i = o.marker;
                    return new Xo({
                        markers: [i],
                        position: i.getPosition()
                    })
                }
            }]), i
        }(ei),
        Fs = Ae,
        Ds = De,
        zs = Q,
        Rs = Wi,
        qs = y ? Object.defineProperties : function (t, e) {
            Ds(t);
            for (var r, n = zs(e), o = Rs(e), i = o.length, s = 0; i > s;) Fs.f(t, r = o[s++], n[r]);
            return t
        },
        Zs = tt("document", "documentElement"),
        Gs = De,
        Bs = qs,
        Vs = mn,
        Us = cr,
        Ws = Zs,
        Qs = _e,
        Xs = ur("IE_PROTO"),
        Hs = function () {},
        Js = function (t) {
            return "<script>" + t + "</" + "script>"
        },
        Ks = function (t) {
            t.write(Js("")), t.close();
            var e = t.parentWindow.Object;
            return t = null, e
        },
        $s = function () {
            try {
                Ts = new ActiveXObject("htmlfile")
            } catch (t) {}
            var t, e;
            $s = "undefined" != typeof document ? document.domain && Ts ? Ks(Ts) : ((e = Qs("iframe")).style.display = "none", Ws.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(Js("document.F=Object")), t.close(), t.F) : Ks(Ts);
            for (var r = Vs.length; r--;) delete $s.prototype[Vs[r]];
            return $s()
        };
    Us[Xs] = !0;
    var Ys = Object.create || function (t, e) {
            var r;
            return null !== t ? (Hs.prototype = Gs(t), r = new Hs, Hs.prototype = null, r[Xs] = t) : r = $s(), void 0 === e ? r : Bs(r, e)
        },
        ta = Ae,
        ea = oe("unscopables"),
        ra = Array.prototype;
    null == ra[ea] && ta.f(ra, ea, {
        configurable: !0,
        value: Ys(null)
    });
    var na = un.includes,
        oa = function (t) {
            ra[ea][t] = !0
        };
    Un({
        target: "Array",
        proto: !0
    }, {
        includes: function (t) {
            return na(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), oa("includes");
    var ia = J,
        sa = F,
        aa = oe("match"),
        ua = function (t) {
            var e;
            return ia(t) && (void 0 !== (e = t[aa]) ? !!e : "RegExp" == sa(t))
        },
        ca = m.TypeError,
        fa = io,
        ha = m.String,
        la = function (t) {
            if ("Symbol" === fa(t)) throw TypeError("Cannot convert a Symbol value to a string");
            return ha(t)
        },
        pa = oe("match"),
        da = Un,
        ma = function (t) {
            if (ua(t)) throw ca("The method doesn't accept regular expressions");
            return t
        },
        ga = V,
        va = la,
        ya = function (t) {
            var e = /./;
            try {
                "/./" [t](e)
            } catch (r) {
                try {
                    return e[pa] = !1, "/./" [t](e)
                } catch (t) {}
            }
            return !1
        },
        ba = A("".indexOf);
    da({
        target: "String",
        proto: !0,
        forced: !ya("includes")
    }, {
        includes: function (t) {
            return !!~ba(va(ga(this)), va(ma(t)), arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var _a = ge,
        wa = Ae,
        ka = S,
        xa = Un,
        Ma = m,
        Pa = $r,
        Oa = Xr,
        Sa = rn,
        Ea = Rt,
        Ca = So,
        ja = function (t, e, r) {
            var n = _a(e);
            n in t ? wa.f(t, n, ka(0, r)) : t[n] = r
        },
        La = Ro("splice"),
        Aa = Ma.TypeError,
        Ta = Math.max,
        Ia = Math.min,
        Na = 9007199254740991,
        Fa = "Maximum allowed length exceeded";
    xa({
        target: "Array",
        proto: !0,
        forced: !La
    }, {
        splice: function (t, e) {
            var r, n, o, i, s, a, u = Ea(this),
                c = Sa(u),
                f = Pa(t, c),
                h = arguments.length;
            if (0 === h ? r = n = 0 : 1 === h ? (r = 0, n = c - f) : (r = h - 2, n = Ia(Ta(Oa(e), 0), c - f)), c + r - n > Na) throw Aa(Fa);
            for (o = Ca(u, n), i = 0; i < n; i++)(s = f + i) in u && ja(o, i, u[s]);
            if (o.length = n, r < n) {
                for (i = f; i < c - n; i++) a = i + r, (s = i + n) in u ? u[a] = u[s] : delete u[a];
                for (i = c; i > c - n + r; i--) delete u[i - 1]
            } else if (r > n)
                for (i = c - n; i > f; i--) a = i + r - 1, (s = i + n - 1) in u ? u[a] = u[s] : delete u[a];
            for (i = 0; i < r; i++) u[i + f] = arguments[i + 2];
            return u.length = c - n + r, o
        }
    });
    var Da = m,
        za = X,
        Ra = Da.String,
        qa = Da.TypeError,
        Za = A,
        Ga = De,
        Ba = function (t) {
            if ("object" == typeof t || za(t)) return t;
            throw qa("Can't set " + Ra(t) + " as a prototype")
        },
        Va = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var t, e = !1,
                r = {};
            try {
                (t = Za(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(r, []), e = r instanceof Array
            } catch (t) {}
            return function (r, n) {
                return Ga(r), Ba(n), e ? t(r, n) : r.__proto__ = n, r
            }
        }() : void 0),
        Ua = X,
        Wa = J,
        Qa = Va,
        Xa = A(1..valueOf),
        Ha = V,
        Ja = la,
        Ka = A("".replace),
        $a = "[\t\n\v\f\r                　\u2028\u2029\ufeff]",
        Ya = RegExp("^" + $a + $a + "*"),
        tu = RegExp($a + $a + "*$"),
        eu = function (t) {
            return function (e) {
                var r = Ja(Ha(e));
                return 1 & t && (r = Ka(r, Ya, "")), 2 & t && (r = Ka(r, tu, "")), r
            }
        },
        ru = {
            start: eu(1),
            end: eu(2),
            trim: eu(3)
        },
        nu = y,
        ou = m,
        iu = A,
        su = Dn,
        au = Qe.exports,
        uu = Gt,
        cu = function (t, e, r) {
            var n, o;
            return Qa && Ua(n = e.constructor) && n !== r && Wa(o = n.prototype) && o !== r.prototype && Qa(t, o), t
        },
        fu = et,
        hu = yt,
        lu = pe,
        pu = v,
        du = Ur.f,
        mu = g.f,
        gu = Ae.f,
        vu = Xa,
        yu = ru.trim,
        bu = "Number",
        _u = ou.Number,
        wu = _u.prototype,
        ku = ou.TypeError,
        xu = iu("".slice),
        Mu = iu("".charCodeAt),
        Pu = function (t) {
            var e = lu(t, "number");
            return "bigint" == typeof e ? e : Ou(e)
        },
        Ou = function (t) {
            var e, r, n, o, i, s, a, u, c = lu(t, "number");
            if (hu(c)) throw ku("Cannot convert a Symbol value to a number");
            if ("string" == typeof c && c.length > 2)
                if (c = yu(c), 43 === (e = Mu(c, 0)) || 45 === e) {
                    if (88 === (r = Mu(c, 2)) || 120 === r) return NaN
                } else if (48 === e) {
                switch (Mu(c, 1)) {
                    case 66:
                    case 98:
                        n = 2, o = 49;
                        break;
                    case 79:
                    case 111:
                        n = 8, o = 55;
                        break;
                    default:
                        return +c
                }
                for (s = (i = xu(c, 2)).length, a = 0; a < s; a++)
                    if ((u = Mu(i, a)) < 48 || u > o) return NaN;
                return parseInt(i, n)
            }
            return +c
        };
    if (su(bu, !_u(" 0o1") || !_u("0b1") || _u("+0x1"))) {
        for (var Su, Eu = function (t) {
                var e = arguments.length < 1 ? 0 : _u(Pu(t)),
                    r = this;
                return fu(wu, r) && pu((function () {
                    vu(r)
                })) ? cu(Object(e), r, Eu) : e
            }, Cu = nu ? du(_u) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), ju = 0; Cu.length > ju; ju++) uu(_u, Su = Cu[ju]) && !uu(Eu, Su) && gu(Eu, Su, mu(_u, Su));
        Eu.prototype = wu, wu.constructor = Eu, au(ou, bu, Eu)
    }
    var Lu = function t(r, n) {
            e(this, t), this.markers = {
                sum: r.length
            };
            var o = n.map((function (t) {
                    return t.count
                })),
                i = o.reduce((function (t, e) {
                    return t + e
                }), 0);
            this.clusters = {
                count: n.length,
                markers: {
                    mean: i / n.length,
                    sum: i,
                    min: Math.min.apply(Math, f(o)),
                    max: Math.max.apply(Math, f(o))
                }
            }
        },
        Au = function () {
            function t() {
                e(this, t)
            }
            return n(t, [{
                key: "render",
                value: function (t, e) {
                    var r = t.count,
                        n = t.position,
                        o = r > Math.max(10, e.clusters.markers.mean) ? "#E75755" : "#1B67B4",
                        i = window.btoa('\n  <svg fill="'.concat(o, '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">\n    <circle cx="120" cy="120" opacity="1.0" r="70" />\n    <circle cx="120" cy="120" opacity=".3" r="90" />\n    <circle cx="120" cy="120" opacity=".2" r="110" />\n  </svg>'));
                    return new google.maps.Marker({
                        position: n,
                        icon: {
                            url: "data:image/svg+xml;base64,".concat(i),
                            scaledSize: new google.maps.Size(55, 55)
                        },
                        label: {
                            text: String(r),
                            color: "rgba(255,255,255,1.0)",
                            fontSize: "16px"
                        },
                        zIndex: Number(google.maps.Marker.MAX_ZINDEX) + r
                    })
                }
            }]), t
        }();
    var Tu, Iu = function t() {
        e(this, t),
            function (t, e) {
                for (var r in e.prototype) t.prototype[r] = e.prototype[r]
            }(t, google.maps.OverlayView)
    };
    t.MarkerClustererEvents = void 0, (Tu = t.MarkerClustererEvents || (t.MarkerClustererEvents = {})).CLUSTERING_BEGIN = "clusteringbegin", Tu.CLUSTERING_END = "clusteringend", Tu.CLUSTER_CLICK = "click";
    var Nu = function (t, e, r) {
            r.fitBounds(e.bounds)
        },
        Fu = function (r) {
            o(s, r);
            var i = u(s);

            function s(t) {
                var r, n = t.map,
                    o = t.markers,
                    a = void 0 === o ? [] : o,
                    u = t.algorithm,
                    c = void 0 === u ? new Ns({}) : u,
                    h = t.renderer,
                    l = void 0 === h ? new Au : h,
                    p = t.onClusterClick,
                    d = void 0 === p ? Nu : p;
                return e(this, s), (r = i.call(this)).markers = f(a), r.clusters = [], r.algorithm = c, r.renderer = l, r.onClusterClick = d, n && r.setMap(n), r
            }
            return n(s, [{
                key: "addMarker",
                value: function (t, e) {
                    this.markers.includes(t) || (this.markers.push(t), e || this.render())
                }
            }, {
                key: "addMarkers",
                value: function (t, e) {
                    var r = this;
                    t.forEach((function (t) {
                        r.addMarker(t, !0)
                    })), e || this.render()
                }
            }, {
                key: "removeMarker",
                value: function (t, e) {
                    var r = this.markers.indexOf(t);
                    return -1 !== r && (t.setMap(null), this.markers.splice(r, 1), e || this.render(), !0)
                }
            }, {
                key: "removeMarkers",
                value: function (t, e) {
                    var r = this,
                        n = !1;
                    return t.forEach((function (t) {
                        n = r.removeMarker(t, !0) || n
                    })), n && !e && this.render(), n
                }
            }, {
                key: "clearMarkers",
                value: function (t) {
                    this.markers.length = 0, t || this.render()
                }
            }, {
                key: "render",
                value: function () {
                    var e = this.getMap();
                    if (e instanceof google.maps.Map && this.getProjection()) {
                        google.maps.event.trigger(this, t.MarkerClustererEvents.CLUSTERING_BEGIN, this);
                        var r = this.algorithm.calculate({
                                markers: this.markers,
                                map: e,
                                mapCanvasProjection: this.getProjection()
                            }),
                            n = r.clusters,
                            o = r.changed;
                        (o || null == o) && (this.reset(), this.clusters = n, this.renderClusters()), google.maps.event.trigger(this, t.MarkerClustererEvents.CLUSTERING_END, this)
                    }
                }
            }, {
                key: "onAdd",
                value: function () {
                    this.idleListener = this.getMap().addListener("idle", this.render.bind(this)), this.render()
                }
            }, {
                key: "onRemove",
                value: function () {
                    google.maps.event.removeListener(this.idleListener), this.reset()
                }
            }, {
                key: "reset",
                value: function () {
                    this.markers.forEach((function (t) {
                        return t.setMap(null)
                    })), this.clusters.forEach((function (t) {
                        return t.delete()
                    })), this.clusters = []
                }
            }, {
                key: "renderClusters",
                value: function () {
                    var e = this,
                        r = new Lu(this.markers, this.clusters),
                        n = this.getMap();
                    this.clusters.forEach((function (o) {
                        1 === o.markers.length ? o.marker = o.markers[0] : (o.marker = e.renderer.render(o, r), e.onClusterClick && o.marker.addListener("click", (function (r) {
                            google.maps.event.trigger(e, t.MarkerClustererEvents.CLUSTER_CLICK, o), e.onClusterClick(r, o, n)
                        }))), o.marker.setMap(n)
                    }))
                }
            }]), s
        }(Iu);
    return t.AbstractAlgorithm = ei, t.AbstractViewportAlgorithm = ri, t.Cluster = Xo, t.ClusterStats = Lu, t.DBScanAlgorithm = gs, t.DefaultRenderer = Au, t.GridAlgorithm = vi, t.KmeansAlgorithm = Bi, t.MarkerClusterer = Fu, t.NoopAlgorithm = yi, t.SuperClusterAlgorithm = Ns, t.defaultOnClusterClickHandler = Nu, t.distanceBetweenPoints = Ko, t.extendBoundsToPaddedViewport = Jo, t.extendPixelBounds = Yo, t.filterMarkersToPaddedViewport = Ho, t.noop = ni, t.pixelBoundsToLatLngBounds = ti, Object.defineProperty(t, "__esModule", {
        value: !0
    }), t
}({});
//# sourceMappingURL=index.min.js.map