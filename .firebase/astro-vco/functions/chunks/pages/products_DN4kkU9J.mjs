/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent } from '../astro_CZSHEZIv.mjs';
import 'kleur/colors';
import { $ as $$LayoutSidebar } from './DragDrop_DSOKBkIl.mjs';
import { b as $$CrudProducts } from './kitchen-sink_CSHJSWQR.mjs';

const $$Astro = createAstro();
const $$Products = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Products;
  return renderTemplate`${renderComponent($$result, "LayoutSidebar", $$LayoutSidebar, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CrudProducts", $$CrudProducts, {})} ` })}`;
}, "D:/vco2024/web/astro-node/src/pages/crud/products.astro", void 0);

const $$file = "D:/vco2024/web/astro-node/src/pages/crud/products.astro";
const $$url = "/crud/products";

export { $$Products as default, $$file as file, $$url as url };
