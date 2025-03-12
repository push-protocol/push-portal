import { B as l, g as m, s as y, d as w, i as k, c as O, a as E, e as L, H as h, b as x } from "./index-BzP8POtn.js";
class R extends l {
  constructor({ callbackSelector: a, cause: e, data: n, extraData: o, sender: c, urls: r }) {
    var _a;
    super(e.shortMessage || "An error occurred while fetching for an offchain result.", { cause: e, metaMessages: [...e.metaMessages || [], ((_a = e.metaMessages) == null ? void 0 : _a.length) ? "" : [], "Offchain Gateway Call:", r && ["  Gateway URL(s):", ...r.map((u) => `    ${m(u)}`)], `  Sender: ${c}`, `  Data: ${n}`, `  Callback selector: ${a}`, `  Extra data: ${o}`].flat() }), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "OffchainLookupError" });
  }
}
class M extends l {
  constructor({ result: a, url: e }) {
    super("Offchain gateway response is malformed. Response data must be a hex value.", { metaMessages: [`Gateway URL: ${m(e)}`, `Response: ${y(a)}`] }), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "OffchainLookupResponseMalformedError" });
  }
}
class $ extends l {
  constructor({ sender: a, to: e }) {
    super("Reverted sender address does not match target contract address (`to`).", { metaMessages: [`Contract address: ${e}`, `OffchainLookup sender address: ${a}`] }), Object.defineProperty(this, "name", { enumerable: true, configurable: true, writable: true, value: "OffchainLookupSenderMismatchError" });
  }
}
const j = "0x556f1830", S = { name: "OffchainLookup", type: "error", inputs: [{ name: "sender", type: "address" }, { name: "urls", type: "string[]" }, { name: "callData", type: "bytes" }, { name: "callbackFunction", type: "bytes4" }, { name: "extraData", type: "bytes" }] };
async function v(i, { blockNumber: a, blockTag: e, data: n, to: o }) {
  const { args: c } = w({ data: n, abi: [S] }), [r, u, t, s, p] = c, { ccipRead: d } = i, b = d && typeof (d == null ? void 0 : d.request) == "function" ? d.request : q;
  try {
    if (!k(o, r)) throw new $({ sender: r, to: o });
    const f = await b({ data: t, sender: r, urls: u }), { data: g } = await O(i, { blockNumber: a, blockTag: e, data: E([s, L([{ type: "bytes" }, { type: "bytes" }], [f, p])]), to: o });
    return g;
  } catch (f) {
    throw new R({ callbackSelector: s, cause: f, data: n, extraData: p, sender: r, urls: u });
  }
}
async function q({ data: i, sender: a, urls: e }) {
  var _a;
  let n = new Error("An unknown error occurred.");
  for (let o = 0; o < e.length; o++) {
    const c = e[o], r = c.includes("{data}") ? "GET" : "POST", u = r === "POST" ? { data: i, sender: a } : void 0;
    try {
      const t = await fetch(c.replace("{sender}", a).replace("{data}", i), { body: JSON.stringify(u), method: r });
      let s;
      if (((_a = t.headers.get("Content-Type")) == null ? void 0 : _a.startsWith("application/json")) ? s = (await t.json()).data : s = await t.text(), !t.ok) {
        n = new h({ body: u, details: (s == null ? void 0 : s.error) ? y(s.error) : t.statusText, headers: t.headers, status: t.status, url: c });
        continue;
      }
      if (!x(s)) {
        n = new M({ result: s, url: c });
        continue;
      }
      return s;
    } catch (t) {
      n = new h({ body: u, details: t.message, url: c });
    }
  }
  throw n;
}
export {
  q as ccipRequest,
  v as offchainLookup,
  S as offchainLookupAbiItem,
  j as offchainLookupSignature
};
