/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, e as renderComponent } from '../astro_CIO9HP5M.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as asset, $ as $$LayoutStacked } from './404_DMj2KnKL.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://courses.vcogroup.vn");
const $$FormResetPassword = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FormResetPassword;
  return renderTemplate`${maybeRenderHead()}<div class="w-full flex flex-col items-center justify-center px-6 pt-8 mx-auto pt:mt-0 dark:bg-zinc-900"> <a href="#" class="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white"> <img${addAttribute(asset("logo.svg"), "src")} alt="VCO GROUP logo" class="h-11"> </a> <!-- Card --> <div class="w-full max-w-xl p-6 space-y-8 bg-white rounded-lg shadow sm:p-8 dark:bg-zinc-800"> <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
Reset your password
</h2> <form class="mt-8 space-y-6" action="#"> <div> <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label> <input type="email" name="email" id="email" class="bg-zinc-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name@company.com" required> </div> <div> <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New password</label> <input type="password" name="password" id="password" placeholder="••••••••" class="bg-zinc-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required> </div> <div> <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm New Password</label> <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" class="bg-zinc-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required> </div> <div class="flex items-start"> <div class="flex items-center h-5"> <input id="remember" aria-describedby="remember" name="remember" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-zinc-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-zinc-700 dark:border-gray-600" required> </div> <div class="ml-3 text-sm"> <label for="remember" class="font-medium text-gray-900 dark:text-white">I accept the <a href="#" class="text-primary-700 hover:underline dark:text-primary-500">Terms and Conditions</a></label> </div> </div> <button type="submit" class="w-full px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Reset password</button> </form> </div> </div>`;
}, "D:/vco2024/web/astro-node/src/modules/FormResetPassword.astro", void 0);

const $$Astro = createAstro("https://courses.vcogroup.vn");
const $$ResetPassword = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResetPassword;
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen align-middle flex pb-[12vh]"> ${renderComponent($$result2, "FormResetPassword", $$FormResetPassword, {})} </div> ` })}`;
}, "D:/vco2024/web/astro-node/src/pages/authentication/reset-password.astro", void 0);

const $$file = "D:/vco2024/web/astro-node/src/pages/authentication/reset-password.astro";
const $$url = "/authentication/reset-password";

export { $$ResetPassword as default, $$file as file, $$url as url };
