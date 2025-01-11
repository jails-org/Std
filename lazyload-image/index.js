const _ = typeof window != "undefined", S = _ && !("onscroll" in window) || typeof navigator != "undefined" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), J = _ && window.devicePixelRatio > 1, be = { elements_selector: ".lazy", container: S || _ ? document : null, threshold: 300, thresholds: null, data_src: "src", data_srcset: "srcset", data_sizes: "sizes", data_bg: "bg", data_bg_hidpi: "bg-hidpi", data_bg_multi: "bg-multi", data_bg_multi_hidpi: "bg-multi-hidpi", data_bg_set: "bg-set", data_poster: "poster", class_applied: "applied", class_loading: "loading", class_loaded: "loaded", class_error: "error", class_entered: "entered", class_exited: "exited", unobserve_completed: !0, unobserve_entered: !1, cancel_on_exit: !0, callback_enter: null, callback_exit: null, callback_applied: null, callback_loading: null, callback_loaded: null, callback_error: null, callback_finish: null, callback_cancel: null, use_native: !1, restore_on_error: !1 }, P = (e) => Object.assign({}, be, e), H = function(e, t) {
  let n;
  const s = "LazyLoad::Initialized", a = new e(t);
  try {
    n = new CustomEvent(s, { detail: { instance: a } });
  } catch (l) {
    n = document.createEvent("CustomEvent"), n.initCustomEvent(s, !1, !1, { instance: a });
  }
  window.dispatchEvent(n);
}, he = (e, t) => {
  if (t) if (t.length) for (let n, s = 0; n = t[s]; s += 1) H(e, n);
  else H(e, t);
}, r = "src", O = "srcset", C = "sizes", U = "poster", p = "llOriginalAttrs", q = "data", M = "loading", K = "loaded", Q = "applied", me = "entered", z = "error", W = "native", X = "data-", Y = "ll-status", o = (e, t) => e.getAttribute(X + t), fe = (e, t, n) => {
  const s = X + t;
  n !== null ? e.setAttribute(s, n) : e.removeAttribute(s);
}, v = (e) => o(e, Y), $ = (e, t) => fe(e, Y, t), I = (e) => $(e, null), N = (e) => v(e) === null, pe = (e) => v(e) === M, ve = (e) => v(e) === z, R = (e) => v(e) === W, Ee = [M, K, Q, z], Ie = (e) => Ee.indexOf(v(e)) >= 0, u = (e, t, n, s) => {
  e && typeof e == "function" && (s === void 0 ? n === void 0 ? e(t) : e(t, n) : e(t, n, s));
}, h = (e, t) => {
  _ && t !== "" && e.classList.add(t);
}, c = (e, t) => {
  _ && t !== "" && e.classList.remove(t);
}, ke = (e) => {
  e.llTempImage = document.createElement("IMG");
}, Ae = (e) => {
  delete e.llTempImage;
}, Z = (e) => e.llTempImage, k = (e, t) => {
  if (!t) return;
  const n = t._observer;
  n && n.unobserve(e);
}, ye = (e) => {
  e.disconnect();
}, Le = (e, t, n) => {
  t.unobserve_entered && k(e, n);
}, T = (e, t) => {
  e && (e.loadingCount += t);
}, we = (e) => {
  e && (e.toLoadCount -= 1);
}, ee = (e, t) => {
  e && (e.toLoadCount = t);
}, xe = (e) => e.loadingCount > 0, Oe = (e) => e.toLoadCount > 0, te = (e) => {
  let t = [];
  for (let n, s = 0; n = e.children[s]; s += 1) n.tagName === "SOURCE" && t.push(n);
  return t;
}, D = (e, t) => {
  const n = e.parentNode;
  n && n.tagName === "PICTURE" && te(n).forEach(t);
}, ne = (e, t) => {
  te(e).forEach(t);
}, A = [r], se = [r, U], f = [r, O, C], ae = [q], y = (e) => !!e[p], le = (e) => e[p], oe = (e) => delete e[p], b = (e, t) => {
  if (y(e)) return;
  const n = {};
  t.forEach((s) => {
    n[s] = e.getAttribute(s);
  }), e[p] = n;
}, Ce = (e) => {
  y(e) || (e[p] = { backgroundImage: e.style.backgroundImage });
}, g = (e, t) => {
  if (!y(e)) return;
  const n = le(e);
  t.forEach((s) => {
    ((a, l, i) => {
      i ? a.setAttribute(l, i) : a.removeAttribute(l);
    })(e, s, n[s]);
  });
}, Me = (e) => {
  if (!y(e)) return;
  const t = le(e);
  e.style.backgroundImage = t.backgroundImage;
}, ce = (e, t, n) => {
  h(e, t.class_applied), $(e, Q), n && (t.unobserve_completed && k(e, t), u(t.callback_applied, e, n));
}, re = (e, t, n) => {
  h(e, t.class_loading), $(e, M), n && (T(n, 1), u(t.callback_loading, e, n));
}, d = (e, t, n) => {
  n && e.setAttribute(t, n);
}, V = (e, t) => {
  d(e, C, o(e, t.data_sizes)), d(e, O, o(e, t.data_srcset)), d(e, r, o(e, t.data_src));
}, ze = (e, t) => {
  D(e, (n) => {
    b(n, f), V(n, t);
  }), b(e, f), V(e, t);
}, Ne = (e, t) => {
  b(e, A), d(e, r, o(e, t.data_src));
}, Re = (e, t) => {
  ne(e, (n) => {
    b(n, A), d(n, r, o(n, t.data_src));
  }), b(e, se), d(e, U, o(e, t.data_poster)), d(e, r, o(e, t.data_src)), e.load();
}, Te = (e, t) => {
  b(e, ae), d(e, q, o(e, t.data_src));
}, De = (e, t, n) => {
  const s = o(e, t.data_bg), a = o(e, t.data_bg_hidpi), l = J && a ? a : s;
  l && (e.style.backgroundImage = `url("${l}")`, Z(e).setAttribute(r, l), re(e, t, n));
}, Ge = (e, t, n) => {
  const s = o(e, t.data_bg_multi), a = o(e, t.data_bg_multi_hidpi), l = J && a ? a : s;
  l && (e.style.backgroundImage = l, ce(e, t, n));
}, He = (e, t, n) => {
  const s = o(e, t.data_bg_set);
  if (!s) return;
  let a = s.split("|").map((l) => `image-set(${l})`);
  e.style.backgroundImage = a.join(), ce(e, t, n);
}, ie = { IMG: ze, IFRAME: Ne, VIDEO: Re, OBJECT: Te }, Ve = (e, t) => {
  const n = ie[e.tagName];
  n && n(e, t);
}, je = (e, t, n) => {
  const s = ie[e.tagName];
  s && (s(e, t), re(e, t, n));
}, Be = ["IMG", "IFRAME", "VIDEO", "OBJECT"], Fe = (e) => Be.indexOf(e.tagName) > -1, de = (e, t) => {
  !t || xe(t) || Oe(t) || u(e.callback_finish, t);
}, j = (e, t, n) => {
  e.addEventListener(t, n), e.llEvLisnrs[t] = n;
}, Se = (e, t, n) => {
  e.removeEventListener(t, n);
}, G = (e) => !!e.llEvLisnrs, Je = (e, t, n) => {
  G(e) || (e.llEvLisnrs = {});
  const s = e.tagName === "VIDEO" ? "loadeddata" : "load";
  j(e, s, t), j(e, "error", n);
}, L = (e) => {
  if (!G(e)) return;
  const t = e.llEvLisnrs;
  for (let n in t) {
    const s = t[n];
    Se(e, n, s);
  }
  delete e.llEvLisnrs;
}, _e = (e, t, n) => {
  Ae(e), T(n, -1), we(n), c(e, t.class_loading), t.unobserve_completed && k(e, n);
}, Pe = (e, t, n, s) => {
  const a = R(t);
  _e(t, n, s), h(t, n.class_loaded), $(t, K), u(n.callback_loaded, t, s), a || de(n, s);
}, Ue = (e, t, n, s) => {
  const a = R(t);
  _e(t, n, s), h(t, n.class_error), $(t, z), u(n.callback_error, t, s), n.restore_on_error && g(t, f), a || de(n, s);
}, w = (e, t, n) => {
  const s = Z(e) || e;
  G(s) || Je(s, (a) => {
    Pe(0, e, t, n), L(s);
  }, (a) => {
    Ue(0, e, t, n), L(s);
  });
}, x = (e, t, n) => {
  Fe(e) ? ((s, a, l) => {
    w(s, a, l), je(s, a, l);
  })(e, t, n) : ((s, a, l) => {
    ke(s), w(s, a, l), Ce(s), De(s, a, l), Ge(s, a, l), He(s, a, l);
  })(e, t, n);
}, qe = (e, t, n) => {
  e.setAttribute("loading", "lazy"), w(e, t, n), Ve(e, t), $(e, W);
}, B = (e) => {
  e.removeAttribute(r), e.removeAttribute(O), e.removeAttribute(C);
}, Ke = (e) => {
  D(e, (t) => {
    B(t);
  }), B(e);
}, ue = (e) => {
  D(e, (t) => {
    g(t, f);
  }), g(e, f);
}, Qe = (e) => {
  ne(e, (t) => {
    g(t, A);
  }), g(e, se), e.load();
}, We = (e) => {
  g(e, A);
}, Xe = (e) => {
  g(e, ae);
}, Ye = { IMG: ue, IFRAME: We, VIDEO: Qe, OBJECT: Xe }, Ze = (e, t) => {
  ((n) => {
    const s = Ye[n.tagName];
    s ? s(n) : Me(n);
  })(e), ((n, s) => {
    N(n) || R(n) || (c(n, s.class_entered), c(n, s.class_exited), c(n, s.class_applied), c(n, s.class_loading), c(n, s.class_loaded), c(n, s.class_error));
  })(e, t), I(e), oe(e);
}, et = (e, t, n, s) => {
  n.cancel_on_exit && pe(e) && e.tagName === "IMG" && (L(e), Ke(e), ue(e), c(e, n.class_loading), T(s, -1), I(e), u(n.callback_cancel, e, t, s));
}, tt = (e, t, n, s) => {
  const a = Ie(e);
  $(e, me), h(e, n.class_entered), c(e, n.class_exited), Le(e, n, s), u(n.callback_enter, e, t, s), a || x(e, n, s);
}, nt = (e, t, n, s) => {
  N(e) || (h(e, n.class_exited), et(e, t, n, s), u(n.callback_exit, e, t, s));
}, st = ["IMG", "IFRAME", "VIDEO"], ge = (e) => e.use_native && "loading" in HTMLImageElement.prototype, at = (e, t, n) => {
  e.forEach((s) => {
    st.indexOf(s.tagName) !== -1 && qe(s, t, n);
  }), ee(n, 0);
}, lt = (e) => e.isIntersecting || e.intersectionRatio > 0, ot = (e, t) => {
  t.forEach((n) => {
    e.observe(n);
  });
}, ct = (e, t) => {
  ye(e), ot(e, t);
}, rt = (e, t) => {
  ge(e) || (t._observer = new IntersectionObserver((n) => {
    ((s, a, l) => {
      s.forEach((i) => lt(i) ? tt(i.target, i, a, l) : nt(i.target, i, a, l));
    })(n, e, t);
  }, ((n) => ({ root: n.container === document ? null : n.container, rootMargin: n.thresholds || n.threshold + "px" }))(e)));
}, $e = (e) => Array.prototype.slice.call(e), E = (e) => e.container.querySelectorAll(e.elements_selector), it = (e) => $e(e).filter(N), dt = (e) => ve(e), _t = (e) => $e(e).filter(dt), F = (e, t) => it(e || E(t)), ut = (e, t) => {
  _t(E(e)).forEach((n) => {
    c(n, e.class_error), I(n);
  }), t.update();
}, gt = (e, t) => {
  _ && (t._onlineHandler = () => {
    ut(e, t);
  }, window.addEventListener("online", t._onlineHandler));
}, $t = (e) => {
  _ && window.removeEventListener("online", e._onlineHandler);
}, m = function(e, t) {
  const n = P(e);
  this._settings = n, this.loadingCount = 0, rt(n, this), gt(n, this), this.update(t);
};
m.prototype = { update: function(e) {
  const t = this._settings, n = F(e, t);
  ee(this, n.length), S ? this.loadAll(n) : ge(t) ? at(n, t, this) : ct(this._observer, n);
}, destroy: function() {
  this._observer && this._observer.disconnect(), $t(this), E(this._settings).forEach((e) => {
    oe(e);
  }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
}, loadAll: function(e) {
  const t = this._settings;
  F(e, t).forEach((n) => {
    k(n, this), x(n, t, this);
  });
}, restoreAll: function() {
  const e = this._settings;
  E(e).forEach((t) => {
    Ze(t, e);
  });
} }, m.load = (e, t) => {
  const n = P(t);
  x(e, n);
}, m.resetStatus = (e) => {
  I(e);
}, _ && he(m, window.lazyLoadOptions);
const bt = m;
export {
  bt as Lazyload
};
