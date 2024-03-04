/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_CZSHEZIv.mjs';
import 'kleur/colors';
import { $ as $$LayoutStacked } from './404_nhHVIpbh.mjs';
import { g as $$FormSignUp } from './kitchen-sink_CSHJSWQR.mjs';

const $$Astro = createAstro();
const $$SignUp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SignUp;
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen align-middle flex pb-[12vh]"> ${renderComponent($$result2, "FormSignUp", $$FormSignUp, {})} </div> ` })}`;
}, "D:/vco2024/web/astro-node/src/pages/authentication/sign-up.astro", void 0);

const $$file = "D:/vco2024/web/astro-node/src/pages/authentication/sign-up.astro";
const $$url = "/authentication/sign-up";

export { $$SignUp as default, $$file as file, $$url as url };
