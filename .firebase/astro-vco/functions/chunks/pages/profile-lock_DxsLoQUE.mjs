/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_CZSHEZIv.mjs';
import 'kleur/colors';
import { $ as $$LayoutStacked } from './404_nhHVIpbh.mjs';
import { c as $$FormProfileLock } from './kitchen-sink_CSHJSWQR.mjs';

const $$Astro = createAstro();
const $$ProfileLock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProfileLock;
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen align-middle flex pb-[12vh]"> ${renderComponent($$result2, "FormProfileLock", $$FormProfileLock, {})} </div> ` })}`;
}, "D:/vco2024/web/astro-node/src/pages/authentication/profile-lock.astro", void 0);

const $$file = "D:/vco2024/web/astro-node/src/pages/authentication/profile-lock.astro";
const $$url = "/authentication/profile-lock";

export { $$ProfileLock as default, $$file as file, $$url as url };
