/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent } from '../astro_CZSHEZIv.mjs';
import 'kleur/colors';
import { $ as $$LayoutStacked } from './404_nhHVIpbh.mjs';
import { a as $$PricingPlan } from './kitchen-sink_CSHJSWQR.mjs';

const $$Astro = createAstro();
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pricing;
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PricingPlan", $$PricingPlan, {})} ` })}`;
}, "D:/vco2024/web/astro-node/src/pages/pages/pricing.astro", void 0);

const $$file = "D:/vco2024/web/astro-node/src/pages/pages/pricing.astro";
const $$url = "/pages/pricing";

export { $$Pricing as default, $$file as file, $$url as url };
