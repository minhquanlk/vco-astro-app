/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, e as renderComponent } from '../astro_CIO9HP5M.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as asset, $ as $$LayoutStacked } from './404_DMj2KnKL.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://courses.vcogroup.vn");
const $$FormProfileLock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FormProfileLock;
  return renderTemplate`${maybeRenderHead()}<div class="w-full flex flex-col items-center justify-center px-6 pt-8 mx-auto pt:mt-0 dark:bg-zinc-900"> <a href="#" class="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white"> <img${addAttribute(asset("logo.svg"), "src")} alt="VCO GROUP logo" class="h-11"> </a> <!-- Card --> <div class="w-full max-w-md bg-white rounded-lg shadow md:mt-0 xl:p-0 dark:bg-zinc-800"> <div class="w-full p-6 sm:p-8"> <div class="flex space-x-4"> <img class="w-8 h-8 rounded-full"${addAttribute(asset("images/users/bonnie-green.png"), "src")} alt="Bonnie image"> <h2 class="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
Bonnie Green
</h2> </div> <p class="text-base font-normal text-gray-500 dark:text-gray-400">
Better to be safe than sorry.
</p> <form class="mt-8 space-y-6" action="#"> <div> <label for="profile-lock" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label> <input type="password" name="profile-lock" id="profile-lock" class="bg-zinc-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="••••••••" required> </div> <div class="flex items-start"> <div class="flex items-center h-5"> <input id="remember" aria-describedby="remember" name="remember" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-zinc-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-zinc-700 dark:border-gray-600" required> </div> <div class="ml-3 text-sm"> <label for="remember" class="font-medium text-gray-900 dark:text-white">I accept the <a href="#" class="text-primary-700 hover:underline dark:text-primary-500">Terms and Conditions</a></label> </div> </div> <button type="submit" class="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"> <svg class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"></path></svg>
Unlock
</button> </form> </div> </div> </div>`;
}, "D:/vco2024/web/astro-node/src/modules/FormProfileLock.astro", void 0);

const $$Astro = createAstro("https://courses.vcogroup.vn");
const $$ProfileLock = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProfileLock;
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen align-middle flex pb-[12vh]"> ${renderComponent($$result2, "FormProfileLock", $$FormProfileLock, {})} </div> ` })}`;
}, "D:/vco2024/web/astro-node/src/pages/authentication/profile-lock.astro", void 0);

const $$file = "D:/vco2024/web/astro-node/src/pages/authentication/profile-lock.astro";
const $$url = "/authentication/profile-lock";

export { $$ProfileLock as default, $$file as file, $$url as url };