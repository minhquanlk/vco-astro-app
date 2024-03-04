/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_CZSHEZIv.mjs';
import 'kleur/colors';
import { $ as $$LayoutStacked } from './404_nhHVIpbh.mjs';
import { $ as $$DashBoard } from './index_ChqOTTWa.mjs';

const $$Astro$1 = createAstro();
const $$Stacked$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Stacked$1;
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DashBoard", $$DashBoard, {})} ` })}`;
}, "D:/vco2024/web/astro-node/src/pages/layouts/stacked.astro", void 0);

const $$file$1 = "D:/vco2024/web/astro-node/src/pages/layouts/stacked.astro";
const $$url$1 = "/layouts/stacked";

const stacked$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Stacked$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Stacked = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Stacked;
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:px-0 xl:gap-4 dark:bg-gray-900"> <div class="mb-4 col-span-full xl:mb-2"> <nav class="flex mb-5" aria-label="Breadcrumb"> <ol class="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2"> <li class="inline-flex items-center"> <a href="#" class="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500"> <svg class="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
Home
</a> </li> <li> <div class="flex items-center"> <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg> <a href="#" class="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-primary-500">Pages</a> </div> </li> <li> <div class="flex items-center"> <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg> <span class="ml-1 text-gray-400 md:ml-2 dark:text-gray-500" aria-current="page">Playground</span> </div> </li> </ol> </nav> <h1 class="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
Create something awesome here
</h1> </div> <!-- Right Content --> <div class="col-span-full xl:col-auto"> <div class="p-4 mb-4 space-y-6 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"> <div class="px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600"> <h3>Card header</h3> </div> <div class="h-32 px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600"> <h3>Card body</h3> </div> <div class="px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600"> <h3>Card footer</h3> </div> </div> <div class="p-4 mb-4 space-y-6 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"> <div class="px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600"> <h3>Card header</h3> </div> <div class="h-32 px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600"> <h3>Card body</h3> </div> <div class="px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600"> <h3>Card footer</h3> </div> </div> </div> <div class="col-span-2"> <div class="p-4 mb-4 space-y-6 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"> <div class="px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600"> <h3>Card header</h3> </div> <div class="h-32 px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600"> <h3>Card body</h3> </div> <div class="px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600"> <h3>Card footer</h3> </div> </div> <div class="p-4 mb-4 space-y-6 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800"> <div class="px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600"> <h3>Card header</h3> </div> <div class="h-32 px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600"> <h3>Card body</h3> </div> <div class="px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600"> <h3>Card footer</h3> </div> </div> </div> </div> <div class="grid gap-4 px-4 mb-4 md:grid-cols-2 xl:grid-cols-4 xl:px-0"> <div class="p-4 space-y-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800"> <div class="px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600"> <h3>Card header</h3> </div> <div class="h-16 px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600"> <h3>Card body</h3> </div> <div class="px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600"> <h3>Card footer</h3> </div> </div> <div class="p-4 space-y-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800"> <div class="px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600"> <h3>Card header</h3> </div> <div class="h-16 px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600"> <h3>Card body</h3> </div> <div class="px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600"> <h3>Card footer</h3> </div> </div> <div class="p-4 space-y-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800"> <div class="px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600"> <h3>Card header</h3> </div> <div class="h-16 px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600"> <h3>Card body</h3> </div> <div class="px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600"> <h3>Card footer</h3> </div> </div> <div class="p-4 space-y-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800"> <div class="px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600"> <h3>Card header</h3> </div> <div class="h-16 px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600"> <h3>Card body</h3> </div> <div class="px-4 py-2 text-gray-400 border border-gray-200 border-dashed rounded dark:border-gray-600"> <h3>Card footer</h3> </div> </div> </div> ` })}`;
}, "D:/vco2024/web/astro-node/src/pages/playground/stacked.astro", void 0);

const $$file = "D:/vco2024/web/astro-node/src/pages/playground/stacked.astro";
const $$url = "/playground/stacked";

const stacked = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Stacked,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { stacked as a, stacked$1 as s };
