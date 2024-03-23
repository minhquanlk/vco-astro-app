/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent } from '../astro_CIO9HP5M.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$LayoutStacked } from './404_DMj2KnKL.mjs';
import { $ as $$DashBoard } from './index22_DM6Iqq1-.mjs';

const $$Astro = createAstro("https://courses.vcogroup.vn");
const $$Stacked = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Stacked;
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DashBoard", $$DashBoard, {})} ` })}`;
}, "D:/vco2024/web/astro-node/src/pages/layouts/stacked.astro", void 0);

const $$file = "D:/vco2024/web/astro-node/src/pages/layouts/stacked.astro";
const $$url = "/layouts/stacked";

export { $$Stacked as default, $$file as file, $$url as url };
