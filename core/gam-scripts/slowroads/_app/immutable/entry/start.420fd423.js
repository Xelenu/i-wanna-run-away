import {
  o as me,
  t as we
} from "/core/gam-scripts/slowroads/_app/immutable/chunks/scheduler.6cda8fd7.js";
import {
  S as Ge,
  a as Je,
  I as M,
  g as Ce,
  f as De,
  b as ye,
  c as le,
  s as te,
  i as _e,
  d as B,
  e as q,
  o as Fe,
  P as Me,
  h as Ze
} from "/core/gam-scripts/slowroads/_app/immutable/chunks/singletons.9f85c147.js";

function Qe(t, r) {
  return t === "/" || r === "ignore" ? t : r === "never" ? t.endsWith("/") ? t.slice(0, -1) : t : r === "always" && !t.endsWith("/") ? t + "/" : t
}

function et(t) {
  return t.split("%25").map(decodeURI).join("%25")
}

function tt(t) {
  for (const r in t) t[r] = decodeURIComponent(t[r]);
  return t
}
const nt = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];

function at(t, r) {
  const f = new URL(t);
  for (const i of nt) Object.defineProperty(f, i, {
    get() {
      return r(), t[i]
    },
    enumerable: !0,
    configurable: !0
  });
  return rt(f), f
}

function rt(t) {
  Object.defineProperty(t, "hash", {
    get() {
      throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")
    }
  })
}
const ot = "/__data.json";

function it(t) {
  return t.replace(/\/$/, "") + ot
}

function st(...t) {
  let r = 5381;
  for (const f of t)
    if (typeof f == "string") {
      let i = f.length;
      for (; i;) r = r * 33 ^ f.charCodeAt(--i)
    } else if (ArrayBuffer.isView(f)) {
    const i = new Uint8Array(f.buffer, f.byteOffset, f.byteLength);
    let h = i.length;
    for (; h;) r = r * 33 ^ i[--h]
  } else throw new TypeError("value must be a string or TypedArray");
  return (r >>> 0).toString(36)
}
const Ke = window.fetch;
window.fetch = (t, r) => ((t instanceof Request ? t.method : (r == null ? void 0 : r.method) || "GET") !== "GET" && ae.delete(Se(t)), Ke(t, r));
const ae = new Map;

function ct(t) {
  const r = atob(t),
    f = new Uint8Array(r.length);
  for (let i = 0; i < r.length; i++) f[i] = r.charCodeAt(i);
  return f.buffer
}

function lt(t, r) {
  const f = Se(t, r),
    i = document.querySelector(f);
  if (i != null && i.textContent) {
    let {
      body: h,
      ...u
    } = JSON.parse(i.textContent);
    const E = i.getAttribute("data-ttl");
    return E && ae.set(f, {
      body: h,
      init: u,
      ttl: 1e3 * Number(E)
    }), i.getAttribute("data-b64") !== null && (h = ct(h)), Promise.resolve(new Response(h, u))
  }
  return window.fetch(t, r)
}

function ft(t, r, f) {
  if (ae.size > 0) {
    const i = Se(t, f),
      h = ae.get(i);
    if (h) {
      if (performance.now() < h.ttl && ["default", "force-cache", "only-if-cached", void 0].includes(f == null ? void 0 : f.cache)) return new Response(h.body, h.init);
      ae.delete(i)
    }
  }
  return window.fetch(r, f)
}

function Se(t, r) {
  let i = `script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;
  if (r != null && r.headers || r != null && r.body) {
    const h = [];
    r.headers && h.push([...new Headers(r.headers)].join(",")), r.body && (typeof r.body == "string" || ArrayBuffer.isView(r.body)) && h.push(r.body), i += `[data-hash="${st(...h)}"]`
  }
  return i
}
const ut = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;

function dt(t) {
  const r = [];
  return {
    pattern: t === "/" ? /^\/$/ : new RegExp(`^${pt(t).map(i=>{const h=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(i);if(h)return r.push({name:h[1],matcher:h[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(i);if(u)return r.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!i)return;const E=i.split(/\[(.+?)\](?!\])/);return"/"+E.map((g,m)=>{if(m%2){if(g.startsWith("x+"))return ve(String.fromCharCode(parseInt(g.slice(2),16)));if(g.startsWith("u+"))return ve(String.fromCharCode(...g.slice(2).split("-").map(U=>parseInt(U,16))));const d=ut.exec(g);if(!d)throw new Error(`
      Invalid param: $ {
        g
      }.Params and matcher names can only have underscores and alphanumeric characters.
      `);const[,N,T,R,D]=d;return r.push({name:R,matcher:D,optional:!!N,rest:!!T,chained:T?m===1&&E[0]==="":!1}),T?"(.*?)":N?"([^/]*)?":"([^/]+?)"}return ve(g)}).join("")}).join("")}/?$`),
    params: r
  }
}

function ht(t) {
  return !/^\([^)]+\)$/.test(t)
}

function pt(t) {
  return t.slice(1).split("/").filter(ht)
}

function gt(t, r, f) {
  const i = {},
    h = t.slice(1),
    u = h.filter(l => l !== void 0);
  let E = 0;
  for (let l = 0; l < r.length; l += 1) {
    const g = r[l];
    let m = h[l - E];
    if (g.chained && g.rest && E && (m = h.slice(l - E, l + 1).filter(d => d).join("/"), E = 0), m === void 0) {
      g.rest && (i[g.name] = "");
      continue
    }
    if (!g.matcher || f[g.matcher](m)) {
      i[g.name] = m;
      const d = r[l + 1],
        N = h[l + 1];
      d && !d.rest && d.optional && N && g.chained && (E = 0), !d && !N && Object.keys(i).length === u.length && (E = 0);
      continue
    }
    if (g.optional && g.chained) {
      E++;
      continue
    }
    return
  }
  if (!E) return i
}

function ve(t) {
  return t.normalize().replace(/[[\]]/g, "\\$&").replace(/%/g, "%25").replace(/\//g, "%2[Ff]").replace(/\?/g, "%3[Ff]").replace(/#/g, "%23").replace(/[.*+?^${}()|\\]/g, "\\$&")
}

function mt({
  nodes: t,
  server_loads: r,
  dictionary: f,
  matchers: i
}) {
  const h = new Set(r);
  return Object.entries(f).map(([l, [g, m, d]]) => {
    const {
      pattern: N,
      params: T
    } = dt(l), R = {
      id: l,
      exec: D => {
        const U = N.exec(D);
        if (U) return gt(U, T, i)
      },
      errors: [1, ...d || []].map(D => t[D]),
      layouts: [0, ...m || []].map(E),
      leaf: u(g)
    };
    return R.errors.length = R.layouts.length = Math.max(R.errors.length, R.layouts.length), R
  });

  function u(l) {
    const g = l < 0;
    return g && (l = ~l), [g, t[l]]
  }

  function E(l) {
    return l === void 0 ? l : [h.has(l), t[l]]
  }
}

function ze(t) {
  try {
    return JSON.parse(sessionStorage[t])
  } catch {}
}

function Ve(t, r) {
  const f = JSON.stringify(r);
  try {
    sessionStorage[t] = f
  } catch {}
}
const wt = -1,
  yt = -2,
  _t = -3,
  vt = -4,
  bt = -5,
  Et = -6;

function St(t, r) {
  if (typeof t == "number") return h(t, !0);
  if (!Array.isArray(t) || t.length === 0) throw new Error("Invalid input");
  const f = t,
    i = Array(f.length);

  function h(u, E = !1) {
    if (u === wt) return;
    if (u === _t) return NaN;
    if (u === vt) return 1 / 0;
    if (u === bt) return -1 / 0;
    if (u === Et) return -0;
    if (E) throw new Error("Invalid input");
    if (u in i) return i[u];
    const l = f[u];
    if (!l || typeof l != "object") i[u] = l;
    else if (Array.isArray(l))
      if (typeof l[0] == "string") {
        const g = l[0],
          m = r == null ? void 0 : r[g];
        if (m) return i[u] = m(h(l[1]));
        switch (g) {
          case "Date":
            i[u] = new Date(l[1]);
            break;
          case "Set":
            const d = new Set;
            i[u] = d;
            for (let R = 1; R < l.length; R += 1) d.add(h(l[R]));
            break;
          case "Map":
            const N = new Map;
            i[u] = N;
            for (let R = 1; R < l.length; R += 2) N.set(h(l[R]), h(l[R + 1]));
            break;
          case "RegExp":
            i[u] = new RegExp(l[1], l[2]);
            break;
          case "Object":
            i[u] = Object(l[1]);
            break;
          case "BigInt":
            i[u] = BigInt(l[1]);
            break;
          case "null":
            const T = Object.create(null);
            i[u] = T;
            for (let R = 1; R < l.length; R += 2) T[l[R]] = h(l[R + 1]);
            break;
          default:
            throw new Error(`Unknown type ${g}`)
        }
      } else {
        const g = new Array(l.length);
        i[u] = g;
        for (let m = 0; m < l.length; m += 1) {
          const d = l[m];
          d !== yt && (g[m] = h(d))
        }
      }
    else {
      const g = {};
      i[u] = g;
      for (const m in l) {
        const d = l[m];
        g[m] = h(d)
      }
    }
    return i[u]
  }
  return h(0)
}

function kt(t) {
  return t.filter(r => r != null)
}
const We = new Set(["load", "prerender", "csr", "ssr", "trailingSlash", "config"]);
[...We];
const Rt = new Set([...We]);
[...Rt];
async function At(t, r) {
  var f;
  for (const i in t)
    if (typeof((f = t[i]) == null ? void 0 : f.then) == "function") return Object.fromEntries(await Promise.all(Object.entries(t).map(async ([h, u]) => [h, await u])));
  return t
}
class ne {
  constructor(r, f) {
    this.status = r, typeof f == "string" ? this.body = {
      message: f
    } : f ? this.body = f : this.body = {
      message: `Error: ${r}`
    }
  }
  toString() {
    return JSON.stringify(this.body)
  }
}
class qe {
  constructor(r, f) {
    this.status = r, this.location = f
  }
}
class It extends Error {
  constructor(r) {
    super(), this.status = 404, this.message = `Not found: ${r}`
  }
}
const Lt = "x-sveltekit-invalidated",
  Pt = "x-sveltekit-trailing-slash",
  J = ze(Ge) ?? {},
  ee = ze(Je) ?? {};

function be(t) {
  J[t] = te()
}

function K(t) {
  return location.href = t.href, new Promise(() => {})
}

function Ot(t, r) {
  var je;
  const f = mt(t),
    i = t.nodes[0],
    h = t.nodes[1];
  i(), h();
  const u = document.documentElement,
    E = [],
    l = [];
  let g = null;
  const m = {
    before_navigate: [],
    on_navigate: [],
    after_navigate: []
  };
  let d = {
      branch: [],
      error: null,
      url: null
    },
    N = !1,
    T = !1,
    R = !0,
    D = !1,
    U = !1,
    C = !1,
    z = !1,
    V, x = (je = history.state) == null ? void 0 : je[M];
  x || (x = Date.now(), history.replaceState({
    ...history.state,
    [M]: x
  }, "", location.href));
  const fe = J[x];
  fe && (history.scrollRestoration = "manual", scrollTo(fe.x, fe.y));
  let H, W, Y;
  async function ke() {
    if (Y = Y || Promise.resolve(), await Y, !Y) return;
    Y = null;
    const e = new URL(location.href),
      s = Z(e, !0);
    g = null;
    const n = W = {},
      o = s && await he(s);
    if (n === W && o) {
      if (o.type === "redirect") return re(new URL(o.location, e).href, {}, 1, n);
      o.props.page !== void 0 && (H = o.props.page), V.$set(o.props)
    }
  }

  function Re(e) {
    l.some(s => s == null ? void 0 : s.snapshot) && (ee[e] = l.map(s => {
      var n;
      return (n = s == null ? void 0 : s.snapshot) == null ? void 0 : n.capture()
    }))
  }

  function Ae(e) {
    var s;
    (s = ee[e]) == null || s.forEach((n, o) => {
      var a, c;
      (c = (a = l[o]) == null ? void 0 : a.snapshot) == null || c.restore(n)
    })
  }

  function Ie() {
    be(x), Ve(Ge, J), Re(x), Ve(Je, ee)
  }
  async function re(e, {
    noScroll: s = !1,
    replaceState: n = !1,
    keepFocus: o = !1,
    state: a = {},
    invalidateAll: c = !1
  }, p, _) {
    return typeof e == "string" && (e = new URL(e, Ce(document))), ce({
      url: e,
      scroll: s ? te() : null,
      keepfocus: o,
      redirect_count: p,
      details: {
        state: a,
        replaceState: n
      },
      nav_token: _,
      accepted: () => {
        c && (z = !0)
      },
      blocked: () => {},
      type: "goto"
    })
  }
  async function Le(e) {
    return g = {
      id: e.id,
      promise: he(e).then(s => (s.type === "loaded" && s.state.error && (g = null), s))
    }, g.promise
  }
  async function oe(...e) {
    const n = f.filter(o => e.some(a => o.exec(a))).map(o => Promise.all([...o.layouts, o.leaf].map(a => a == null ? void 0 : a[1]())));
    await Promise.all(n)
  }

  function Pe(e) {
    var o;
    d = e.state;
    const s = document.querySelector("style[data-sveltekit]");
    s && s.remove(), H = e.props.page, V = new t.root({
      target: r,
      props: {
        ...e.props,
        stores: B,
        components: l
      },
      hydrate: !0
    }), Ae(x);
    const n = {
      from: null,
      to: {
        params: d.params,
        route: {
          id: ((o = d.route) == null ? void 0 : o.id) ?? null
        },
        url: new URL(location.href)
      },
      willUnload: !1,
      type: "enter",
      complete: Promise.resolve()
    };
    m.after_navigate.forEach(a => a(n)), T = !0
  }
  async function X({
    url: e,
    params: s,
    branch: n,
    status: o,
    error: a,
    route: c,
    form: p
  }) {
    let _ = "never";
    for (const y of n)(y == null ? void 0 : y.slash) !== void 0 && (_ = y.slash);
    e.pathname = Qe(e.pathname, _), e.search = e.search;
    const b = {
      type: "loaded",
      state: {
        url: e,
        params: s,
        branch: n,
        error: a,
        route: c
      },
      props: {
        constructors: kt(n).map(y => y.node.component)
      }
    };
    p !== void 0 && (b.props.form = p);
    let v = {},
      L = !H,
      A = 0;
    for (let y = 0; y < Math.max(n.length, d.branch.length); y += 1) {
      const w = n[y],
        O = d.branch[y];
      (w == null ? void 0 : w.data) !== (O == null ? void 0 : O.data) && (L = !0), w && (v = {
        ...v,
        ...w.data
      }, L && (b.props[`data_${A}`] = v), A += 1)
    }
    return (!d.url || e.href !== d.url.href || d.error !== a || p !== void 0 && p !== H.form || L) && (b.props.page = {
      error: a,
      params: s,
      route: {
        id: (c == null ? void 0 : c.id) ?? null
      },
      status: o,
      url: new URL(e),
      form: p ?? null,
      data: L ? v : H.data
    }), b
  }
  async function ue({
    loader: e,
    parent: s,
    url: n,
    params: o,
    route: a,
    server_data_node: c
  }) {
    var v, L, A;
    let p = null;
    const _ = {
        dependencies: new Set,
        params: new Set,
        parent: !1,
        route: !1,
        url: !1
      },
      b = await e();
    if ((v = b.universal) != null && v.load) {
      let P = function(...w) {
        for (const O of w) {
          const {
            href: j
          } = new URL(O, n);
          _.dependencies.add(j)
        }
      };
      const y = {
        route: new Proxy(a, {
          get: (w, O) => (_.route = !0, w[O])
        }),
        params: new Proxy(o, {
          get: (w, O) => (_.params.add(O), w[O])
        }),
        data: (c == null ? void 0 : c.data) ?? null,
        url: at(n, () => {
          _.url = !0
        }),
        async fetch(w, O) {
          let j;
          w instanceof Request ? (j = w.url, O = {
            body: w.method === "GET" || w.method === "HEAD" ? void 0 : await w.blob(),
            cache: w.cache,
            credentials: w.credentials,
            headers: w.headers,
            integrity: w.integrity,
            keepalive: w.keepalive,
            method: w.method,
            mode: w.mode,
            redirect: w.redirect,
            referrer: w.referrer,
            referrerPolicy: w.referrerPolicy,
            signal: w.signal,
            ...O
          }) : j = w;
          const F = new URL(j, n);
          return P(F.href), F.origin === n.origin && (j = F.href.slice(n.origin.length)), T ? ft(j, F.href, O) : lt(j, O)
        },
        setHeaders: () => {},
        depends: P,
        parent() {
          return _.parent = !0, s()
        }
      };
      p = await b.universal.load.call(null, y) ?? null, p = p ? await At(p, a.id) : null
    }
    return {
      node: b,
      loader: e,
      server: c,
      universal: (L = b.universal) != null && L.load ? {
        type: "data",
        data: p,
        uses: _
      } : null,
      data: p ?? (c == null ? void 0 : c.data) ?? null,
      slash: n.pathname === q || n.pathname === q + "/" ? "always" : ((A = b.universal) == null ? void 0 : A.trailingSlash) ?? (c == null ? void 0 : c.slash)
    }
  }

  function Oe(e, s, n, o, a) {
    if (z) return !0;
    if (!o) return !1;
    if (o.parent && e || o.route && s || o.url && n) return !0;
    for (const c of o.params)
      if (a[c] !== d.params[c]) return !0;
    for (const c of o.dependencies)
      if (E.some(p => p(new URL(c)))) return !0;
    return !1
  }

  function de(e, s) {
    return (e == null ? void 0 : e.type) === "data" ? e : (e == null ? void 0 : e.type) === "skip" ? s ?? null : null
  }
  async function he({
    id: e,
    invalidating: s,
    url: n,
    params: o,
    route: a
  }) {
    if ((g == null ? void 0 : g.id) === e) return g.promise;
    const {
      errors: c,
      layouts: p,
      leaf: _
    } = a, b = [...p, _];
    c.forEach(S => S == null ? void 0 : S().catch(() => {})), b.forEach(S => S == null ? void 0 : S[1]().catch(() => {}));
    let v = null;
    const L = d.url ? e !== d.url.pathname + d.url.search : !1,
      A = d.route ? a.id !== d.route.id : !1;
    let P = !1;
    const y = b.map((S, I) => {
      var G;
      const k = d.branch[I],
        $ = !!(S != null && S[0]) && ((k == null ? void 0 : k.loader) !== S[1] || Oe(P, A, L, (G = k.server) == null ? void 0 : G.uses, o));
      return $ && (P = !0), $
    });
    if (y.some(Boolean)) {
      try {
        v = await He(n, y)
      } catch (S) {
        return ie({
          status: S instanceof ne ? S.status : 500,
          error: await Q(S, {
            url: n,
            params: o,
            route: {
              id: a.id
            }
          }),
          url: n,
          route: a
        })
      }
      if (v.type === "redirect") return v
    }
    const w = v == null ? void 0 : v.nodes;
    let O = !1;
    const j = b.map(async (S, I) => {
      var pe;
      if (!S) return;
      const k = d.branch[I],
        $ = w == null ? void 0 : w[I];
      if ((!$ || $.type === "skip") && S[1] === (k == null ? void 0 : k.loader) && !Oe(O, A, L, (pe = k.universal) == null ? void 0 : pe.uses, o)) return k;
      if (O = !0, ($ == null ? void 0 : $.type) === "error") throw $;
      return ue({
        loader: S[1],
        url: n,
        params: o,
        route: a,
        parent: async () => {
          var Te;
          const $e = {};
          for (let ge = 0; ge < I; ge += 1) Object.assign($e, (Te = await j[ge]) == null ? void 0 : Te.data);
          return $e
        },
        server_data_node: de($ === void 0 && S[0] ? {
          type: "skip"
        } : $ ?? null, S[0] ? k == null ? void 0 : k.server : void 0)
      })
    });
    for (const S of j) S.catch(() => {});
    const F = [];
    for (let S = 0; S < b.length; S += 1)
      if (b[S]) try {
        F.push(await j[S])
      } catch (I) {
        if (I instanceof qe) return {
          type: "redirect",
          location: I.location
        };
        let k = 500,
          $;
        if (w != null && w.includes(I)) k = I.status ?? k, $ = I.error;
        else if (I instanceof ne) k = I.status, $ = I.body;
        else {
          if (await B.updated.check()) return await K(n);
          $ = await Q(I, {
            params: o,
            url: n,
            route: {
              id: a.id
            }
          })
        }
        const G = await xe(S, F, c);
        return G ? await X({
          url: n,
          params: o,
          branch: F.slice(0, G.idx).concat(G.node),
          status: k,
          error: $,
          route: a
        }) : await Ne(n, {
          id: a.id
        }, $, k)
      } else F.push(void 0);
    return await X({
      url: n,
      params: o,
      branch: F,
      status: 200,
      error: null,
      route: a,
      form: s ? void 0 : null
    })
  }
  async function xe(e, s, n) {
    for (; e--;)
      if (n[e]) {
        let o = e;
        for (; !s[o];) o -= 1;
        try {
          return {
            idx: o + 1,
            node: {
              node: await n[e](),
              loader: n[e],
              data: {},
              server: null,
              universal: null
            }
          }
        } catch {
          continue
        }
      }
  }
  async function ie({
    status: e,
    error: s,
    url: n,
    route: o
  }) {
    const a = {};
    let c = null;
    if (t.server_loads[0] === 0) try {
      const v = await He(n, [!0]);
      if (v.type !== "data" || v.nodes[0] && v.nodes[0].type !== "data") throw 0;
      c = v.nodes[0] ?? null
    } catch {
      (n.origin !== Fe || n.pathname !== location.pathname || N) && await K(n)
    }
    const _ = await ue({
        loader: i,
        url: n,
        params: a,
        route: o,
        parent: () => Promise.resolve({}),
        server_data_node: de(c)
      }),
      b = {
        node: await h(),
        loader: h,
        universal: null,
        server: null,
        data: null
      };
    return await X({
      url: n,
      params: a,
      branch: [_, b],
      status: e,
      error: s,
      route: null
    })
  }

  function Z(e, s) {
    if (_e(e, q)) return;
    const n = se(e);
    for (const o of f) {
      const a = o.exec(n);
      if (a) return {
        id: e.pathname + e.search,
        invalidating: s,
        route: o,
        params: tt(a),
        url: e
      }
    }
  }

  function se(e) {
    return et(e.pathname.slice(q.length) || "/")
  }

  function Ue({
    url: e,
    type: s,
    intent: n,
    delta: o
  }) {
    let a = !1;
    const c = Be(d, n, e, s);
    o !== void 0 && (c.navigation.delta = o);
    const p = {
      ...c.navigation,
      cancel: () => {
        a = !0, c.reject(new Error("navigation was cancelled"))
      }
    };
    return U || m.before_navigate.forEach(_ => _(p)), a ? null : c
  }
  async function ce({
    url: e,
    scroll: s,
    keepfocus: n,
    redirect_count: o,
    details: a,
    type: c,
    delta: p,
    nav_token: _ = {},
    accepted: b,
    blocked: v
  }) {
    var j, F, S;
    const L = Z(e, !1),
      A = Ue({
        url: e,
        type: c,
        delta: p,
        intent: L
      });
    if (!A) {
      v();
      return
    }
    const P = x;
    b(), U = !0, T && B.navigating.set(A.navigation), W = _;
    let y = L && await he(L);
    if (!y) {
      if (_e(e, q)) return await K(e);
      y = await Ne(e, {
        id: null
      }, await Q(new Error(`Not found: ${e.pathname}`), {
        url: e,
        params: {},
        route: {
          id: null
        }
      }), 404)
    }
    if (e = (L == null ? void 0 : L.url) || e, W !== _) return A.reject(new Error("navigation was aborted")), !1;
    if (y.type === "redirect")
      if (o >= 20) y = await ie({
        status: 500,
        error: await Q(new Error("Redirect loop"), {
          url: e,
          params: {},
          route: {
            id: null
          }
        }),
        url: e,
        route: {
          id: null
        }
      });
      else return re(new URL(y.location, e).href, {}, o + 1, _), !1;
    else((j = y.props.page) == null ? void 0 : j.status) >= 400 && await B.updated.check() && await K(e);
    if (E.length = 0, z = !1, D = !0, be(P), Re(P), (F = y.props.page) != null && F.url && y.props.page.url.pathname !== e.pathname && (e.pathname = (S = y.props.page) == null ? void 0 : S.url.pathname), a) {
      const I = a.replaceState ? 0 : 1;
      if (a.state[M] = x += I, history[a.replaceState ? "replaceState" : "pushState"](a.state, "", e), !a.replaceState) {
        let k = x + 1;
        for (; ee[k] || J[k];) delete ee[k], delete J[k], k += 1
      }
    }
    if (g = null, T) {
      d = y.state, y.props.page && (y.props.page.url = e);
      const I = (await Promise.all(m.on_navigate.map(k => k(A.navigation)))).filter(k => typeof k == "function");
      if (I.length > 0) {
        let k = function() {
          m.after_navigate = m.after_navigate.filter($ => !I.includes($))
        };
        I.push(k), m.after_navigate.push(...I)
      }
      V.$set(y.props)
    } else Pe(y);
    const {
      activeElement: w
    } = document;
    if (await we(), R) {
      const I = e.hash && document.getElementById(decodeURIComponent(e.hash.slice(1)));
      s ? scrollTo(s.x, s.y) : I ? I.scrollIntoView() : scrollTo(0, 0)
    }
    const O = document.activeElement !== w && document.activeElement !== document.body;
    !n && !O && Ee(), R = !0, y.props.page && (H = y.props.page), U = !1, c === "popstate" && Ae(x), A.fulfil(void 0), m.after_navigate.forEach(I => I(A.navigation)), B.navigating.set(null), D = !1
  }
  async function Ne(e, s, n, o) {
    return e.origin === Fe && e.pathname === location.pathname && !N ? await ie({
      status: o,
      error: n,
      url: e,
      route: s
    }) : await K(e)
  }

  function Xe() {
    let e;
    u.addEventListener("mousemove", c => {
      const p = c.target;
      clearTimeout(e), e = setTimeout(() => {
        o(p, 2)
      }, 20)
    });

    function s(c) {
      o(c.composedPath()[0], 1)
    }
    u.addEventListener("mousedown", s), u.addEventListener("touchstart", s, {
      passive: !0
    });
    const n = new IntersectionObserver(c => {
      for (const p of c) p.isIntersecting && (oe(se(new URL(p.target.href))), n.unobserve(p.target))
    }, {
      threshold: 0
    });

    function o(c, p) {
      const _ = De(c, u);
      if (!_) return;
      const {
        url: b,
        external: v,
        download: L
      } = ye(_, q);
      if (v || L) return;
      const A = le(_);
      if (!A.reload)
        if (p <= A.preload_data) {
          const P = Z(b, !1);
          P && Le(P)
        } else p <= A.preload_code && oe(se(b))
    }

    function a() {
      n.disconnect();
      for (const c of u.querySelectorAll("a")) {
        const {
          url: p,
          external: _,
          download: b
        } = ye(c, q);
        if (_ || b) continue;
        const v = le(c);
        v.reload || (v.preload_code === Me.viewport && n.observe(c), v.preload_code === Me.eager && oe(se(p)))
      }
    }
    m.after_navigate.push(a), a()
  }

  function Q(e, s) {
    return e instanceof ne ? e.body : t.hooks.handleError({
      error: e,
      event: s
    }) ?? {
      message: s.route.id === null && e instanceof It ? "Not Found" : "Internal Error"
    }
  }
  return {
    after_navigate: e => {
      me(() => (m.after_navigate.push(e), () => {
        const s = m.after_navigate.indexOf(e);
        m.after_navigate.splice(s, 1)
      }))
    },
    before_navigate: e => {
      me(() => (m.before_navigate.push(e), () => {
        const s = m.before_navigate.indexOf(e);
        m.before_navigate.splice(s, 1)
      }))
    },
    on_navigate: e => {
      me(() => (m.on_navigate.push(e), () => {
        const s = m.on_navigate.indexOf(e);
        m.on_navigate.splice(s, 1)
      }))
    },
    disable_scroll_handling: () => {
      (D || !T) && (R = !1)
    },
    goto: (e, s = {}) => re(e, s, 0),
    invalidate: e => {
      if (typeof e == "function") E.push(e);
      else {
        const {
          href: s
        } = new URL(e, location.href);
        E.push(n => n.href === s)
      }
      return ke()
    },
    invalidate_all: () => (z = !0, ke()),
    preload_data: async e => {
      const s = new URL(e, Ce(document)),
        n = Z(s, !1);
      if (!n) throw new Error(`Attempted to preload a URL that does not belong to this app: ${s}`);
      await Le(n)
    },
    preload_code: oe,
    apply_action: async e => {
      if (e.type === "error") {
        const s = new URL(location.href),
          {
            branch: n,
            route: o
          } = d;
        if (!o) return;
        const a = await xe(d.branch.length, n, o.errors);
        if (a) {
          const c = await X({
            url: s,
            params: d.params,
            branch: n.slice(0, a.idx).concat(a.node),
            status: e.status ?? 500,
            error: e.error,
            route: o
          });
          d = c.state, V.$set(c.props), we().then(Ee)
        }
      } else e.type === "redirect" ? re(e.location, {
        invalidateAll: !0
      }, 0) : (V.$set({
        form: null,
        page: {
          ...H,
          form: e.data,
          status: e.status
        }
      }), await we(), V.$set({
        form: e.data
      }), e.type === "success" && Ee())
    },
    _start_router: () => {
      var s;
      history.scrollRestoration = "manual", addEventListener("beforeunload", n => {
        let o = !1;
        if (Ie(), !U) {
          const a = Be(d, void 0, null, "leave"),
            c = {
              ...a.navigation,
              cancel: () => {
                o = !0, a.reject(new Error("navigation was cancelled"))
              }
            };
          m.before_navigate.forEach(p => p(c))
        }
        o ? (n.preventDefault(), n.returnValue = "") : history.scrollRestoration = "auto"
      }), addEventListener("visibilitychange", () => {
        document.visibilityState === "hidden" && Ie()
      }), (s = navigator.connection) != null && s.saveData || Xe(), u.addEventListener("click", n => {
        var P;
        if (n.button || n.which !== 1 || n.metaKey || n.ctrlKey || n.shiftKey || n.altKey || n.defaultPrevented) return;
        const o = De(n.composedPath()[0], u);
        if (!o) return;
        const {
          url: a,
          external: c,
          target: p,
          download: _
        } = ye(o, q);
        if (!a) return;
        if (p === "_parent" || p === "_top") {
          if (window.parent !== window) return
        } else if (p && p !== "_self") return;
        const b = le(o);
        if (!(o instanceof SVGAElement) && a.protocol !== location.protocol && !(a.protocol === "https:" || a.protocol === "http:") || _) return;
        if (c || b.reload) {
          Ue({
            url: a,
            type: "link"
          }) ? U = !0 : n.preventDefault();
          return
        }
        const [L, A] = a.href.split("#");
        if (A !== void 0 && L === location.href.split("#")[0]) {
          if (d.url.hash === a.hash) {
            n.preventDefault(), (P = o.ownerDocument.getElementById(A)) == null || P.scrollIntoView();
            return
          }
          if (C = !0, be(x), e(a), !b.replace_state) return;
          C = !1, n.preventDefault()
        }
        ce({
          url: a,
          scroll: b.noscroll ? te() : null,
          keepfocus: b.keep_focus ?? !1,
          redirect_count: 0,
          details: {
            state: {},
            replaceState: b.replace_state ?? a.href === location.href
          },
          accepted: () => n.preventDefault(),
          blocked: () => n.preventDefault(),
          type: "link"
        })
      }), u.addEventListener("submit", n => {
        if (n.defaultPrevented) return;
        const o = HTMLFormElement.prototype.cloneNode.call(n.target),
          a = n.submitter;
        if (((a == null ? void 0 : a.formMethod) || o.method) !== "get") return;
        const p = new URL((a == null ? void 0 : a.hasAttribute("formaction")) && (a == null ? void 0 : a.formAction) || o.action);
        if (_e(p, q)) return;
        const _ = n.target,
          {
            keep_focus: b,
            noscroll: v,
            reload: L,
            replace_state: A
          } = le(_);
        if (L) return;
        n.preventDefault(), n.stopPropagation();
        const P = new FormData(_),
          y = a == null ? void 0 : a.getAttribute("name");
        y && P.append(y, (a == null ? void 0 : a.getAttribute("value")) ?? ""), p.search = new URLSearchParams(P).toString(), ce({
          url: p,
          scroll: v ? te() : null,
          keepfocus: b ?? !1,
          redirect_count: 0,
          details: {
            state: {},
            replaceState: A ?? p.href === location.href
          },
          nav_token: {},
          accepted: () => {},
          blocked: () => {},
          type: "form"
        })
      }), addEventListener("popstate", async n => {
        var o, a;
        if (W = {}, (o = n.state) != null && o[M]) {
          if (n.state[M] === x) return;
          const c = J[n.state[M]],
            p = new URL(location.href);
          if (((a = d.url) == null ? void 0 : a.href.split("#")[0]) === location.href.split("#")[0]) {
            e(p), J[x] = te(), x = n.state[M], scrollTo(c.x, c.y);
            return
          }
          const _ = n.state[M] - x;
          await ce({
            url: p,
            scroll: c,
            keepfocus: !1,
            redirect_count: 0,
            details: null,
            accepted: () => {
              x = n.state[M]
            },
            blocked: () => {
              history.go(-_)
            },
            type: "popstate",
            delta: _,
            nav_token: W
          })
        } else if (!C) {
          const c = new URL(location.href);
          e(c)
        }
      }), addEventListener("hashchange", () => {
        C && (C = !1, history.replaceState({
          ...history.state,
          [M]: ++x
        }, "", location.href))
      });
      for (const n of document.querySelectorAll("link")) n.rel === "icon" && (n.href = n.href);
      addEventListener("pageshow", n => {
        n.persisted && B.navigating.set(null)
      });

      function e(n) {
        d.url = n, B.page.set({
          ...H,
          url: n
        }), B.page.notify()
      }
    },
    _hydrate: async ({
      status: e = 200,
      error: s,
      node_ids: n,
      params: o,
      route: a,
      data: c,
      form: p
    }) => {
      N = !0;
      const _ = new URL(location.href);
      ({
        params: o = {},
        route: a = {
          id: null
        }
      } = Z(_, !1) || {});
      let b;
      try {
        const v = n.map(async (P, y) => {
            const w = c[y];
            return w != null && w.uses && (w.uses = Ye(w.uses)), ue({
              loader: t.nodes[P],
              url: _,
              params: o,
              route: a,
              parent: async () => {
                const O = {};
                for (let j = 0; j < y; j += 1) Object.assign(O, (await v[j]).data);
                return O
              },
              server_data_node: de(w)
            })
          }),
          L = await Promise.all(v),
          A = f.find(({
            id: P
          }) => P === a.id);
        if (A) {
          const P = A.layouts;
          for (let y = 0; y < P.length; y++) P[y] || L.splice(y, 0, void 0)
        }
        b = await X({
          url: _,
          params: o,
          branch: L,
          status: e,
          error: s,
          form: p,
          route: A ?? null
        })
      } catch (v) {
        if (v instanceof qe) {
          await K(new URL(v.location, location.href));
          return
        }
        b = await ie({
          status: v instanceof ne ? v.status : 500,
          error: await Q(v, {
            url: _,
            params: o,
            route: a
          }),
          url: _,
          route: a
        })
      }
      Pe(b)
    }
  }
}
async function He(t, r) {
  var h;
  const f = new URL(t);
  f.pathname = it(t.pathname), t.pathname.endsWith("/") && f.searchParams.append(Pt, "1"), f.searchParams.append(Lt, r.map(u => u ? "1" : "0").join(""));
  const i = await Ke(f.href);
  if ((h = i.headers.get("content-type")) != null && h.includes("text/html") && await K(t), !i.ok) throw new ne(i.status, await i.json());
  return new Promise(async u => {
    var N;
    const E = new Map,
      l = i.body.getReader(),
      g = new TextDecoder;

    function m(T) {
      return St(T, {
        Promise: R => new Promise((D, U) => {
          E.set(R, {
            fulfil: D,
            reject: U
          })
        })
      })
    }
    let d = "";
    for (;;) {
      const {
        done: T,
        value: R
      } = await l.read();
      if (T && !d) break;
      for (d += !R && d ? `
` : g.decode(R);;) {
        const D = d.indexOf(`
`);
        if (D === -1) break;
        const U = JSON.parse(d.slice(0, D));
        if (d = d.slice(D + 1), U.type === "redirect") return u(U);
        if (U.type === "data")(N = U.nodes) == null || N.forEach(C => {
          (C == null ? void 0 : C.type) === "data" && (C.uses = Ye(C.uses), C.data = m(C.data))
        }), u(U);
        else if (U.type === "chunk") {
          const {
            id: C,
            data: z,
            error: V
          } = U, x = E.get(C);
          E.delete(C), V ? x.reject(m(V)) : x.fulfil(m(z))
        }
      }
    }
  })
}

function Ye(t) {
  return {
    dependencies: new Set((t == null ? void 0 : t.dependencies) ?? []),
    params: new Set((t == null ? void 0 : t.params) ?? []),
    parent: !!(t != null && t.parent),
    route: !!(t != null && t.route),
    url: !!(t != null && t.url)
  }
}

function Ee() {
  const t = document.querySelector("[autofocus]");
  if (t) t.focus();
  else {
    const r = document.body,
      f = r.getAttribute("tabindex");
    r.tabIndex = -1, r.focus({
      preventScroll: !0,
      focusVisible: !1
    }), f !== null ? r.setAttribute("tabindex", f) : r.removeAttribute("tabindex");
    const i = getSelection();
    if (i && i.type !== "None") {
      const h = [];
      for (let u = 0; u < i.rangeCount; u += 1) h.push(i.getRangeAt(u));
      setTimeout(() => {
        if (i.rangeCount === h.length) {
          for (let u = 0; u < i.rangeCount; u += 1) {
            const E = h[u],
              l = i.getRangeAt(u);
            if (E.commonAncestorContainer !== l.commonAncestorContainer || E.startContainer !== l.startContainer || E.endContainer !== l.endContainer || E.startOffset !== l.startOffset || E.endOffset !== l.endOffset) return
          }
          i.removeAllRanges()
        }
      })
    }
  }
}

function Be(t, r, f, i) {
  var g, m;
  let h, u;
  const E = new Promise((d, N) => {
    h = d, u = N
  });
  return E.catch(() => {}), {
    navigation: {
      from: {
        params: t.params,
        route: {
          id: ((g = t.route) == null ? void 0 : g.id) ?? null
        },
        url: t.url
      },
      to: f && {
        params: (r == null ? void 0 : r.params) ?? null,
        route: {
          id: ((m = r == null ? void 0 : r.route) == null ? void 0 : m.id) ?? null
        },
        url: f
      },
      willUnload: !r,
      type: i,
      complete: E
    },
    fulfil: h,
    reject: u
  }
}
async function Nt(t, r, f) {
  const i = Ot(t, r);
  Ze({
    client: i
  }), f ? await i._hydrate(f) : i.goto(location.href, {
    replaceState: !0
  }), i._start_router()
}
export {
  Nt as start
};
