import {
  s as l,
  c as r,
  u as i,
  g as u,
  d as f
} from "../chunks/scheduler.6cda8fd7.js";
import {
  S as _,
  i as c,
  d as p,
  t as d
} from "../chunks/index.f66a2b2d.js";
const m = !1,
  $ = !1,
  v = Object.freeze(Object.defineProperty({
    __proto__: null,
    prerender: $,
    ssr: m
  }, Symbol.toStringTag, {
    value: "Module"
  }));

function g(n) {
  let s;
  const a = n[1].default,
    t = r(a, n, n[0], null);
  return {
    c() {
      t && t.c()
    },
    l(e) {
      t && t.l(e)
    },
    m(e, o) {
      t && t.m(e, o), s = !0
    },
    p(e, [o]) {
      t && t.p && (!s || o & 1) && i(t, a, e, e[0], s ? f(a, e[0], o, null) : u(e[0]), null)
    },
    i(e) {
      s || (p(t, e), s = !0)
    },
    o(e) {
      d(t, e), s = !1
    },
    d(e) {
      t && t.d(e)
    }
  }
}

function b(n, s, a) {
  let {
    $$slots: t = {},
    $$scope: e
  } = s;
  return n.$$set = o => {
    "$$scope" in o && a(0, e = o.$$scope)
  }, [e, t]
}
class h extends _ {
  constructor(s) {
    super(), c(this, s, b, g, l, {})
  }
}
export {
  h as component, v as universal
};