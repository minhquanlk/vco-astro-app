/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent } from '../astro_CZSHEZIv.mjs';
import 'kleur/colors';
import { $ as $$LayoutStacked } from './404_nhHVIpbh.mjs';
import { $ as $$ErrorMaintenance } from './kitchen-sink_CSHJSWQR.mjs';

const $$Astro = createAstro();
const $$Maintenance = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Maintenance;
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ErrorMaintenance", $$ErrorMaintenance, {})} ` })}`;
}, "D:/vco2024/web/astro-node/src/pages/pages/maintenance.astro", void 0);

const $$file = "D:/vco2024/web/astro-node/src/pages/pages/maintenance.astro";
const $$url = "/pages/maintenance";

export { $$Maintenance as default, $$file as file, $$url as url };
