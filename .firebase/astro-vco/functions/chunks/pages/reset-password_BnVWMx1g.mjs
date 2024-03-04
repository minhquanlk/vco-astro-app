/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_CZSHEZIv.mjs';
import 'kleur/colors';
import { $ as $$LayoutStacked } from './404_nhHVIpbh.mjs';
import { d as $$FormResetPassword } from './kitchen-sink_CSHJSWQR.mjs';

const $$Astro = createAstro();
const $$ResetPassword = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResetPassword;
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen align-middle flex pb-[12vh]"> ${renderComponent($$result2, "FormResetPassword", $$FormResetPassword, {})} </div> ` })}`;
}, "D:/vco2024/web/astro-node/src/pages/authentication/reset-password.astro", void 0);

const $$file = "D:/vco2024/web/astro-node/src/pages/authentication/reset-password.astro";
const $$url = "/authentication/reset-password";

export { $$ResetPassword as default, $$file as file, $$url as url };
