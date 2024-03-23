/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, e as renderComponent } from '../astro_CIO9HP5M.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as asset, u as url, $ as $$LayoutStacked } from './404_DMj2KnKL.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://courses.vcogroup.vn");
const $$ErrorServer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ErrorServer;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-zinc-900"> <div class="block md:max-w-lg"> <img${addAttribute(asset("images/illustrations/500.svg"), "src")} alt="astronaut image"> </div> <div class="text-center xl:max-w-4xl"> <h1 class="mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
Something has gone seriously wrong
</h1> <p class="mb-5 text-base font-normal text-gray-500 md:text-lg dark:text-gray-400">
It's always time for a coffee break. We should be back by the time you
			finish your coffee.
</p> <a${addAttribute(url(""), "href")} class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"> <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
Go back home
</a> </div> </div>`;
}, "D:/vco2024/web/astro-node/src/modules/ErrorServer.astro", void 0);

const $$Astro = createAstro("https://courses.vcogroup.vn");
const $$500 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$500;
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ErrorServer", $$ErrorServer, {})} ` })}`;
}, "D:/vco2024/web/astro-node/src/pages/pages/500.astro", void 0);

const $$file = "D:/vco2024/web/astro-node/src/pages/pages/500.astro";
const $$url = "/pages/500";

export { $$500 as default, $$file as file, $$url as url };
