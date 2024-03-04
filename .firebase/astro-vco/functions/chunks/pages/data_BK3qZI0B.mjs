/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, u as unescapeHTML, F as Fragment, m as maybeRenderHead } from '../astro_CZSHEZIv.mjs';
import 'kleur/colors';
import { bundledLanguages } from 'shikiji/langs';
import { createShikiHighlighter } from '@astrojs/markdown-remark';
import { $ as $$LayoutSidebar } from './DragDrop_DSOKBkIl.mjs';
import { g as getProducts, a as getUsers } from './__HpFDxl0F.mjs';
/* empty css                         */

const cachedHighlighters = /* @__PURE__ */ new Map();
function getCachedHighlighter(opts) {
  const key = JSON.stringify(opts, Object.keys(opts).sort());
  if (cachedHighlighters.has(key)) {
    return cachedHighlighters.get(key);
  }
  const highlighter = createShikiHighlighter(opts);
  cachedHighlighters.set(key, highlighter);
  return highlighter;
}

const $$Astro$1 = createAstro();
const $$Code = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Code;
  const {
    code,
    lang = "plaintext",
    theme = "github-dark",
    experimentalThemes = {},
    wrap = false,
    inline = false
  } = Astro2.props;
  if (typeof lang === "object") {
    if (lang.id) {
      lang.name = lang.id;
    }
    if (lang.grammar) {
      Object.assign(lang, lang.grammar);
    }
  }
  const highlighter = await getCachedHighlighter({
    langs: [
      typeof lang === "string" ? Object.keys(bundledLanguages).includes(lang) ? lang : "plaintext" : lang
    ],
    theme,
    experimentalThemes,
    wrap
  });
  const html = highlighter.highlight(code, typeof lang === "string" ? lang : lang.name, {
    inline
  });
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(html)}` })}`;
}, "D:/vco2024/web/astro-node/node_modules/astro/components/Code.astro", void 0);

const $$Astro = createAstro();
const $$Data = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Data;
  const products = JSON.stringify(getProducts(), null, 2);
  const users = JSON.stringify(getUsers(), null, 2);
  return renderTemplate`${renderComponent($$result, "LayoutSidebar", $$LayoutSidebar, { "class": "bg-slate-800 text-slate-100" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="playground p-16"> <h1 class="text-3xl ml-8 lg:text-4xl xl:text-6xl font-bold dark:text-slate-100">
🕹&nbsp;Playground — API data
</h1> <div class="mt-24 mb-8"> <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onclick="location.reload()">Refresh</button> </div> <div class="mb-16"> <a href="/api/products" target="_blank"> <h1 class="text-6xl font-bold mb-8 dark:text-slate-100">Products</h1> </a> ${renderComponent($$result2, "Code", $$Code, { "code": products, "lang": "json" })} </div> <div class="mb-16"> <a href="/api/users" target="_blank"> <h1 class="text-6xl font-bold mb-8 dark:text-slate-100">Users</h1> </a> ${renderComponent($$result2, "Code", $$Code, { "code": users, "lang": "json" })} </div> </div> ` })} `;
}, "D:/vco2024/web/astro-node/src/pages/playground/data.astro", void 0);

const $$file = "D:/vco2024/web/astro-node/src/pages/playground/data.astro";
const $$url = "/playground/data";

export { $$Data as default, $$file as file, $$url as url };
