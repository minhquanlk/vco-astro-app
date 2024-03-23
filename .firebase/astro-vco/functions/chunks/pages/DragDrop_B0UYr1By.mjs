/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, f as renderScript, h as addAttribute, g as renderSlot } from '../astro_CIO9HP5M.mjs';
import 'kleur/colors';
import 'html-escaper';
import { b as $$CopyrightNotice, a as asset, u as url, c as $$LayoutCommon } from './404_DMj2KnKL.mjs';
import 'clsx';
import { jsxs, jsx } from 'preact/jsx-runtime';
import { useState } from 'react';
import sortable from 'react-sortablejs';

const $$Astro$5 = createAstro("https://courses.vcogroup.vn");
const $$FooterSidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$FooterSidebar;
  return renderTemplate`${maybeRenderHead()}<footer class="p-4 my-6 mx-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 xl:p-8 dark:bg-zinc-800"> <ul class="flex flex-wrap items-center mb-6 space-y-1 md:mb-0"> <li> <a href="#" class="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Terms and conditions</a> </li> <li> <a href="#" class="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Privacy Policy</a> </li> <li> <a href="#" class="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Licensing</a> </li> <li> <a href="#" class="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Cookie Policy</a> </li> <li> <a href="#" class="text-sm font-normal text-gray-500 hover:underline dark:text-gray-400">Contact</a> </li> </ul> <div class="flex space-x-6 sm:justify-center"> <a href="#" class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path> </svg> </a> <a href="#" class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path> </svg> </a> <a href="#" class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path> </svg> </a> <a href="#" class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path> </svg> </a> <a href="#" class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"> <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd"></path> </svg> </a> </div> </footer> ${renderComponent($$result, "CopyrightNotice", $$CopyrightNotice, {})}`;
}, "D:/vco2024/web/astro-node/src/app/FooterSidebar.astro", void 0);

const $$Astro$4 = createAstro("https://courses.vcogroup.vn");
const $$ColorModeSwitcher = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ColorModeSwitcher;
  return renderTemplate`${maybeRenderHead()}<button id="theme-toggle" data-tooltip-target="tooltip-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-zinc-100 dark:hover:bg-zinc-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"> <svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg> <svg id="theme-toggle-light-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg> </button> <div id="tooltip-toggle" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-zinc-900 rounded-lg shadow-sm opacity-0 tooltip">
Toggle dark mode
<div class="tooltip-arrow" data-popper-arrow></div> </div> ${renderScript($$result, "D:/vco2024/web/astro-node/src/components/ColorModeSwitcher.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/vco2024/web/astro-node/src/components/ColorModeSwitcher.astro", void 0);

const $$Astro$3 = createAstro("https://courses.vcogroup.vn");
const $$NavBarSidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$NavBarSidebar;
  return renderTemplate`${maybeRenderHead()}<nav class="fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-zinc-800 dark:border-gray-700"> <div class="px-3 py-3 lg:px-5 lg:pl-3"> <div class="flex items-center justify-between"> <div class="flex items-center justify-start"> <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-zinc-100 focus:bg-zinc-100 dark:focus:bg-zinc-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-zinc-700 dark:hover:text-white"> <svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg> <svg id="toggleSidebarMobileClose" class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> </button> <a href="/" class="flex ml-2 md:mr-24"> <img${addAttribute(asset("logo.svg"), "src")} class="h-8 mr-3" alt="FlowBite Logo"> <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Test Center</span> </a> </div> <div class="flex items-center"> <!-- Dropdown menu --> <div id="dropdownNavbar" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-zinc-700 dark:divide-gray-600"> <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownNavbarButton"> <li> <a href="#" class="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white">Dashboard</a> </li> <li> <a href="#" class="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white">Settings</a> </li> <li> <a href="#" class="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:hover:text-white">Earnings</a> </li> </ul> <div class="py-2"> <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:text-gray-400 dark:hover:text-white">Sign out</a> </div> </div> <!-- Notifications --> <button type="button" data-dropdown-toggle="notification-dropdown" class="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-zinc-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-zinc-700"> <span class="sr-only">View notifications</span> <!-- Bell icon --> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg> </button> <!-- Dropdown menu --> <div class="z-20 z-50 hidden max-w-sm my-4 overflow-hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg dark:divide-gray-600 dark:bg-zinc-700" id="notification-dropdown"> <div class="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-zinc-50 dark:bg-zinc-700 dark:text-gray-400">
Notifications
</div> <div> <!-- <a
							href="#"
							class="flex px-4 py-3 border-b hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:border-gray-600"
						>
							<div class="flex-shrink-0">
								<img
									class="rounded-full w-11 h-11"
									src={asset('images/users/bonnie-green.png')}
									alt="Jese image"
								/>
								<div
									class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 border border-white rounded-full bg-primary-700 dark:border-gray-700"
								>
									<svg
										class="w-3 h-3 text-white"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
										><path
											d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
										></path><path
											d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
										></path></svg
									>
								</div>
							</div>
							<div class="w-full pl-3">
								<div
									class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
								>
									New message from <span
										class="font-semibold text-gray-900 dark:text-white"
										>Bonnie Green</span
									>: "Hey, what's up? All set for the presentation?"
								</div>
								<div
									class="text-xs font-medium text-primary-700 dark:text-primary-400"
								>
									a few moments ago
								</div>
							</div>
						</a>
						<a
							href="#"
							class="flex px-4 py-3 border-b hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:border-gray-600"
						>
							<div class="flex-shrink-0">
								<img
									class="rounded-full w-11 h-11"
									src={asset('images/users/jese-leos.png')}
									alt="Jese image"
								/>
								<div
									class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-zinc-900 border border-white rounded-full dark:border-gray-700"
								>
									<svg
										class="w-3 h-3 text-white"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
										><path
											d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
										></path></svg
									>
								</div>
							</div>
							<div class="w-full pl-3">
								<div
									class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
								>
									<span class="font-semibold text-gray-900 dark:text-white"
										>Jese leos</span
									> and <span class="font-medium text-gray-900 dark:text-white"
										>5 others</span
									> started following you.
								</div>
								<div
									class="text-xs font-medium text-primary-700 dark:text-primary-400"
								>
									10 minutes ago
								</div>
							</div>
						</a>
						<a
							href="#"
							class="flex px-4 py-3 border-b hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:border-gray-600"
						>
							<div class="flex-shrink-0">
								<img
									class="rounded-full w-11 h-11"
									src={asset('images/users/joseph-mcfall.png')}
									alt="Joseph image"
								/>
								<div
									class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-700"
								>
									<svg
										class="w-3 h-3 text-white"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
										><path
											fill-rule="evenodd"
											d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
											clip-rule="evenodd"></path></svg
									>
								</div>
							</div>
							<div class="w-full pl-3">
								<div
									class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
								>
									<span class="font-semibold text-gray-900 dark:text-white"
										>Joseph Mcfall</span
									> and <span class="font-medium text-gray-900 dark:text-white"
										>141 others</span
									> love your story. See it and view more stories.
								</div>
								<div
									class="text-xs font-medium text-primary-700 dark:text-primary-400"
								>
									44 minutes ago
								</div>
							</div>
						</a>
						<a
							href="#"
							class="flex px-4 py-3 border-b hover:bg-zinc-100 dark:hover:bg-zinc-600 dark:border-gray-600"
						>
							<div class="flex-shrink-0">
								<img
									class="rounded-full w-11 h-11"
									src={asset('images/users/leslie-livingston.png')}
									alt="Leslie image"
								/>
								<div
									class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-green-400 border border-white rounded-full dark:border-gray-700"
								>
									<svg
										class="w-3 h-3 text-white"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
										><path
											fill-rule="evenodd"
											d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
											clip-rule="evenodd"></path></svg
									>
								</div>
							</div>
							<div class="w-full pl-3">
								<div
									class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
								>
									<span class="font-semibold text-gray-900 dark:text-white"
										>Leslie Livingston</span
									> mentioned you in a comment: <span
										class="font-medium text-primary-700 dark:text-primary-500"
										>@bonnie.green</span
									> what do you say?
								</div>
								<div
									class="text-xs font-medium text-primary-700 dark:text-primary-400"
								>
									1 hour ago
								</div>
							</div>
						</a>
						<a
							href="#"
							class="flex px-4 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-600"
						>
							<div class="flex-shrink-0">
								<img
									class="rounded-full w-11 h-11"
									src={asset('images/users/robert-brown.png')}
									alt="Robert image"
								/>
								<div
									class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-purple-500 border border-white rounded-full dark:border-gray-700"
								>
									<svg
										class="w-3 h-3 text-white"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
										><path
											d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
										></path></svg
									>
								</div>
							</div>
							<div class="w-full pl-3">
								<div
									class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400"
								>
									<span class="font-semibold text-gray-900 dark:text-white"
										>Robert Brown</span
									> posted a new video: Glassmorphism - learn how to implement the
									new design trend.
								</div>
								<div
									class="text-xs font-medium text-primary-700 dark:text-primary-400"
								>
									3 hours ago
								</div>
							</div>
						</a> --> </div> <a href="#" class="block py-2 text-base font-normal text-center text-gray-900 bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-700 dark:text-white dark:hover:underline"> <div class="inline-flex items-center"> <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
View all
</div> </a> </div> ${renderComponent($$result, "ColorModeSwitcher", $$ColorModeSwitcher, {})} <!-- Profile --> <div class="flex items-center ml-3"> <div> <button type="button" class="flex text-sm bg-zinc-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button-2" aria-expanded="false" data-dropdown-toggle="dropdown-2"> <span class="sr-only">Open user menu</span> <img class="w-8 h-8 rounded-full"${addAttribute(asset("user.png"), "src")} alt="user photo"> </button> </div> <!-- Dropdown menu --> <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-zinc-700 dark:divide-gray-600" id="dropdown-2"> <div class="px-4 py-3" role="none"> <p class="text-sm text-gray-900 dark:text-white" role="none"> <!-- {user.name} --> </p> <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none"> <!-- {user.email} --> </p> </div> <ul class="py-1" role="none"> <li> <form action="/api/auth/logout" method="POST"> <button class="block px-4 py-2 text-sm text-gray-700 hover:bg-zinc-100 dark:text-gray-300 dark:hover:bg-zinc-600 dark:hover:text-white" role="menuitem" type="submit">Sign out</button> </form> </li> </ul> </div> </div> </div> </div> </div> </nav>`;
}, "D:/vco2024/web/astro-node/src/app/NavBarSidebar.astro", void 0);

const $$Astro$2 = createAstro("https://courses.vcogroup.vn");
const $$SideBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SideBar;
  return renderTemplate`<!-- TODO: Dynamic dropdowns -->${maybeRenderHead()}<aside id="sidebar" class="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 hidden w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width" aria-label="Sidebar"> <div class="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-zinc-800 dark:border-gray-700"> <div${addAttribute([
    "flex flex-col flex-1 pt-5 pb-28 overflow-y-auto",
    "scrollbar scrollbar-w-2 scrollbar-thumb-rounded-[0.1667rem]",
    "scrollbar-thumb-slate-200 scrollbar-track-gray-400",
    "dark:scrollbar-thumb-slate-900 dark:scrollbar-track-gray-800"
  ], "class:list")}> <div class="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-zinc-800 dark:divide-gray-700"> <ul class="pb-2 space-y-2"> <li> <a${addAttribute(url(""), "href")} class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-zinc-100 group dark:text-gray-200 dark:hover:bg-zinc-700"> <svg class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg> <span class="ml-3" sidebar-toggle-item>Dashboard</span> </a> </li> <li> <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-zinc-100 dark:text-gray-200 dark:hover:bg-zinc-700" aria-controls="dropdown-crud" data-collapse-toggle="dropdown-crud"> <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <path clip-rule="evenodd" fill-rule="evenodd" d="M.99 5.24A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25l.01 9.5A2.25 2.25 0 0116.76 17H3.26A2.267 2.267 0 011 14.74l-.01-9.5zm8.26 9.52v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.615c0 .414.336.75.75.75h5.373a.75.75 0 00.627-.74zm1.5 0a.75.75 0 00.627.74h5.373a.75.75 0 00.75-.75v-.615a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625zm6.75-3.63v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zm-8.25 0v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75H8.5a.75.75 0 00.75-.75zM17.5 7.5v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75V7.5c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zm-8.25 0v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75V7.5c0 .414.336.75.75.75H8.5a.75.75 0 00.75-.75z"></path> </svg> <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Your Courses</span> <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> </button> <ul id="dropdown-crud" class="hidden space-y-2 py-2"> <!-- if not (eq .Params.group crud) }}hidden {{ end }} --> <li> <!-- {{ if eq $page_slug "products" }} --> <!-- bg-zinc-100 dark:bg-zinc-700 --> <a${addAttribute(url("crud/products"), "href")} class="text-base text-gray-900 rounded-lg flex items-center p-2 group hover:bg-zinc-100 transition duration-75 pl-11 dark:text-gray-200 dark:hover:bg-zinc-700">Products</a> </li> <li> <!--  {{ if eq $page_slug "users" }} --> <!-- bg-zinc-100 dark:bg-zinc-700 --> <a${addAttribute(url("crud/users"), "href")} class="text-base text-gray-900 rounded-lg flex items-center p-2 group hover:bg-zinc-100 transition duration-75 pl-11 dark:text-gray-200 dark:hover:bg-zinc-700">Users</a> </li> </ul> </li> <li> <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-zinc-100 dark:text-gray-200 dark:hover:bg-zinc-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages"> <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clip-rule="evenodd"></path></svg> <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>History</span> <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> </button> <ul id="dropdown-pages" class="hidden py-2 space-y-2"> <li> <a${addAttribute(url("pages/pricing"), "href")} class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-zinc-100 dark:text-gray-200 dark:hover:bg-zinc-700">Pricing</a> </li> <li> <a${addAttribute(url("pages/maintenance"), "href")} class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-zinc-100 dark:text-gray-200 dark:hover:bg-zinc-700">Maintenance</a> </li> <li> <a${addAttribute(url("pages/404"), "href")} class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-zinc-100 dark:text-gray-200 dark:hover:bg-zinc-700">404 not found</a> </li> <li> <a${addAttribute(url("pages/500"), "href")} class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-zinc-100 dark:text-gray-200 dark:hover:bg-zinc-700">500 server error</a> </li> </ul> </li> <li> <!-- {{ if eq $page_slug "settings" }} --> <a${addAttribute(url("settings"), "href")} class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-zinc-100 group dark:text-gray-200 dark:hover:bg-zinc-700"> <svg class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"> <path clip-rule="evenodd" fill-rule="evenodd" d="M8.34 1.804A1 1 0 019.32 1h1.36a1 1 0 01.98.804l.295 1.473c.497.144.971.342 1.416.587l1.25-.834a1 1 0 011.262.125l.962.962a1 1 0 01.125 1.262l-.834 1.25c.245.445.443.919.587 1.416l1.473.294a1 1 0 01.804.98v1.361a1 1 0 01-.804.98l-1.473.295a6.95 6.95 0 01-.587 1.416l.834 1.25a1 1 0 01-.125 1.262l-.962.962a1 1 0 01-1.262.125l-1.25-.834a6.953 6.953 0 01-1.416.587l-.294 1.473a1 1 0 01-.98.804H9.32a1 1 0 01-.98-.804l-.295-1.473a6.957 6.957 0 01-1.416-.587l-1.25.834a1 1 0 01-1.262-.125l-.962-.962a1 1 0 01-.125-1.262l.834-1.25a6.957 6.957 0 01-.587-1.416l-1.473-.294A1 1 0 011 10.68V9.32a1 1 0 01.804-.98l1.473-.295c.144-.497.342-.971.587-1.416l-.834-1.25a1 1 0 01.125-1.262l.962-.962A1 1 0 015.38 3.03l1.25.834a6.957 6.957 0 011.416-.587l.294-1.473zM13 10a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <span class="ml-3" sidebar-toggle-item>Profile</span> </a> </li> <!-- <li>
						<button
							type="button"
							class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-zinc-100 dark:text-gray-200 dark:hover:bg-zinc-700"
							aria-controls="dropdown-auth"
							data-collapse-toggle="dropdown-auth"
						>
							<svg
								class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
									clip-rule="evenodd"></path></svg
							>
							<span
								class="flex-1 ml-3 text-left whitespace-nowrap"
								sidebar-toggle-item>Authentication</span
							>
							<svg
								sidebar-toggle-item
								class="w-6 h-6"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clip-rule="evenodd"></path></svg
							>
						</button>
						<ul id="dropdown-auth" class="hidden py-2 space-y-2">
							<li>
								<a
									href={url('authentication/sign-in')}
									class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-zinc-100 dark:text-gray-200 dark:hover:bg-zinc-700"
									>Sign in</a
								>
							</li>
							<li>
								<a
									href={url('authentication/sign-up')}
									class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-zinc-100 dark:text-gray-200 dark:hover:bg-zinc-700"
									>Sign up</a
								>
							</li>
							<li>
								<a
									href={url('authentication/forgot-password')}
									class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-zinc-100 dark:text-gray-200 dark:hover:bg-zinc-700"
									>Forgot password</a
								>
							</li>
							<li>
								<a
									href={url('authentication/reset-password')}
									class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-zinc-100 dark:text-gray-200 dark:hover:bg-zinc-700"
									>Reset password</a
								>
							</li>
							<li>
								<a
									href={url('authentication/profile-lock')}
									class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-zinc-100 dark:text-gray-200 dark:hover:bg-zinc-700"
									>Profile lock</a
								>
							</li>
						</ul>
					</li>
					<li>
						<button
							type="button"
							class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-zinc-100 dark:text-gray-200 dark:hover:bg-zinc-700"
							aria-controls="dropdown-playground"
							data-collapse-toggle="dropdown-playground"
						>
							<svg
								class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									clip-rule="evenodd"
									fill-rule="evenodd"
									d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
								></path>
							</svg>
							<span
								class="flex-1 ml-3 text-left whitespace-nowrap"
								sidebar-toggle-item>Playground</span
							>
							<svg
								sidebar-toggle-item
								class="w-6 h-6"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><path
									fill-rule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clip-rule="evenodd"></path></svg
							>
						</button>
						
					</li> --> </ul> <div class="pt-2 space-y-2"> <a href="https://github.com/themesberg/flowbite-astro-admin-dashboard/issues" target="_blank" class="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-zinc-100 group dark:text-gray-200 dark:hover:bg-zinc-700"> <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd"></path></svg> <span class="ml-3" sidebar-toggle-item>Support</span> </a> </div> </div> </div> <div class="absolute bottom-0 left-0 justify-center hidden w-full p-4 space-x-4 bg-white lg:flex dark:bg-zinc-800" sidebar-bottom-menu> <a href="#" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-zinc-100 dark:hover:bg-zinc-700 dark:hover:text-white"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path></svg> </a> <a href="/settings/" data-tooltip-target="tooltip-settings" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-zinc-100 dark:hover:bg-zinc-700 dark:hover:text-white"> <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg> </a> <div id="tooltip-settings" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-zinc-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-zinc-700">
Settings page
<div class="tooltip-arrow" data-popper-arrow></div> </div> <button type="button" data-dropdown-toggle="language-dropdown" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-zinc-100 dark:hover:bg-zinc-700 dark:hover:text-white"> <svg class="h-5 w-5 rounded-full mt-0.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z"></path><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300"></path><path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"></path><use xlink:href="#a" y="420"></use><use xlink:href="#a" y="840"></use><use xlink:href="#a" y="1260"></use></g><use xlink:href="#a" y="1680"></use></g><use xlink:href="#b" x="247" y="210"></use></g><use xlink:href="#c" x="494"></use></g><use xlink:href="#d" x="988"></use><use xlink:href="#c" x="1976"></use><use xlink:href="#e" x="2470"></use></g></svg> </button> <!-- Dropdown --> <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-zinc-700" id="language-dropdown"> <ul class="py-1" role="none"> <li> <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-zinc-100 dark:text-gray-400 dark:hover:bg-zinc-600 dark:hover:text-white" role="menuitem"> <div class="inline-flex items-center"> <svg class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512"> <g fill-rule="evenodd"> <g stroke-width="1pt"> <path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"></path> <path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"></path> </g> <path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"></path> <path fill="#fff" d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z" transform="scale(3.9385)"></path> </g> </svg>
English (US)
</div> </a> </li> <li> <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-zinc-100 dark:text-gray-400 dark:hover:bg-zinc-600 dark:hover:text-white" role="menuitem"> <div class="inline-flex items-center"> <svg class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-de" viewBox="0 0 512 512"> <path fill="#ffce00" d="M0 341.3h512V512H0z"></path> <path d="M0 0h512v170.7H0z"></path> <path fill="#d00" d="M0 170.7h512v170.6H0z"></path> </svg>
Deutsch
</div> </a> </li> <li> <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-zinc-100 dark:text-gray-400 dark:hover:bg-zinc-600 dark:hover:text-white" role="menuitem"> <div class="inline-flex items-center"> <svg class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512"> <g fill-rule="evenodd" stroke-width="1pt"> <path fill="#fff" d="M0 0h512v512H0z"></path> <path fill="#009246" d="M0 0h170.7v512H0z"></path> <path fill="#ce2b37" d="M341.3 0H512v512H341.3z"></path> </g> </svg>
Italiano
</div> </a> </li> <li> <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-zinc-100 dark:text-gray-400 dark:hover:bg-zinc-600 dark:hover:text-white" role="menuitem"> <div class="inline-flex items-center"> <svg class="h-3.5 w-3.5 rounded-full mr-2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="flag-icon-css-cn" viewBox="0 0 512 512"> <defs> <path id="a" fill="#ffde00" d="M1-.3L-.7.8 0-1 .6.8-1-.3z"></path> </defs> <path fill="#de2910" d="M0 0h512v512H0z"></path> <use width="30" height="20" transform="matrix(76.8 0 0 76.8 128 128)" xlink:href="#a"></use> <use width="30" height="20" transform="rotate(-121 142.6 -47) scale(25.5827)" xlink:href="#a"></use> <use width="30" height="20" transform="rotate(-98.1 198 -82) scale(25.6)" xlink:href="#a"></use> <use width="30" height="20" transform="rotate(-74 272.4 -114) scale(25.6137)" xlink:href="#a"></use> <use width="30" height="20" transform="matrix(16 -19.968 19.968 16 256 230.4)" xlink:href="#a"></use> </svg>
中文 (繁體)
</div> </a> </li> </ul> </div> </div> </div> </aside> <div class="fixed inset-0 z-10 hidden bg-zinc-900/50 dark:bg-zinc-900/90" id="sidebarBackdrop"></div> ${renderScript($$result, "D:/vco2024/web/astro-node/src/app/SideBar.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/vco2024/web/astro-node/src/app/SideBar.astro", void 0);

const $$Astro$1 = createAstro("https://courses.vcogroup.vn");
const $$LayoutSidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LayoutSidebar;
  return renderTemplate`${renderComponent($$result, "LayoutCommon", $$LayoutCommon, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBarSidebar", $$NavBarSidebar, {})} ${renderComponent($$result2, "SideBar", $$SideBar, {})} ${maybeRenderHead()}<div class="flex pt-16 overflow-hidden bg-zinc-50 dark:bg-zinc-900"> <div id="main-content" class="relative w-full h-full overflow-y-auto bg-zinc-50 lg:ml-64 dark:bg-zinc-900 min-h-screen"> ${renderSlot($$result2, $$slots["default"])} ${renderComponent($$result2, "FooterSidebar", $$FooterSidebar, {})} </div> </div> ` })}`;
}, "D:/vco2024/web/astro-node/src/app/LayoutSidebar.astro", void 0);

const items1 = [
  {
    id: 1,
    text: "Need to be approved",
    name: "Kelly Young"
  },
  {
    id: 2,
    text: "Meeting with client",
    name: "Andy King"
  },
  {
    id: 3,
    text: "Project Detail",
    name: "Judy Holmes"
  },
  {
    id: 4,
    text: "Edited Post Apporval",
    name: "Vincent Carpenter"
  },
  {
    id: 5,
    text: "Project Lead Pickup",
    name: "Mary McDonald"
  }
];
const items2 = [
  {
    id: 6,
    text: "Need to be approved",
    name: "Kelly Young"
  },
  {
    id: 7,
    text: "Meeting with client",
    name: "Andy King"
  },
  {
    id: 8,
    text: "Project Detail",
    name: "Judy Holmes"
  },
  {
    id: 9,
    text: "Edited Post Apporval",
    name: "Vincent Carpenter"
  },
  {
    id: 10,
    text: "Project Lead Pickup",
    name: "Mary McDonald"
  }
];
const items3 = [
  {
    id: 2,
    text: "Meeting with client",
    name: "Andy King"
  },
  {
    id: 1,
    text: "Need to be approved",
    name: "Kelly Young"
  },
  {
    id: 3,
    text: "Project Detail",
    name: "Judy Holmes"
  },
  {
    id: 4,
    text: "Edited Post Apporval",
    name: "Vincent Carpenter"
  }
];
const items4 = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" },
  { id: 6, name: "Item 6" },
  { id: 7, name: "Item 7" },
  { id: 8, name: "Item 8" },
  { id: 9, name: "Item 9" },
  { id: 10, name: "Item 10" },
  { id: 11, name: "Item 11" },
  { id: 12, name: "Item 12" }
];
const DragAndDrop = () => {
  const [sortable1, setSortable1] = useState(items1);
  const [sortable2, setSortable2] = useState(items2);
  const [iconChange1, setIconChange1] = useState(items1);
  const [iconChange2, setIconChange2] = useState(items2);
  const [handler1, setHandler1] = useState(items1);
  const [handler2, setHandler2] = useState(items2);
  const [newsFeed, setNewsFeed] = useState(items3);
  const [delete1, setDelete1] = useState(items1);
  const [delete2, setDelete2] = useState(items2);
  const [gridDrag, setGridDrag] = useState(items4);
  const [swap, setSwap] = useState([...items1, ...items2]);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("ul", { className: "flex space-x-2 rtl:space-x-reverse mb-6", children: /* @__PURE__ */ jsx("li", { className: "before:content-['/'] ltr:before:mr-2 rtl:before:ml-2", children: /* @__PURE__ */ jsx("span", { children: "Drag & Drop" }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "dragndrop space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap", children: [
        /* @__PURE__ */ jsx("div", { className: "ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3" }),
        /* @__PURE__ */ jsx("span", { className: "ltr:mr-3 rtl:ml-3", children: "Documentation: " }),
        /* @__PURE__ */ jsx("a", { href: "https://www.npmjs.com/package/react-sortablejs", target: "_blank", className: "block hover:underline", rel: "noreferrer", children: "https://www.npmjs.com/package/react-sortablejs" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "panel", children: [
        /* @__PURE__ */ jsx("div", { className: "font-semibold text-lg mb-5", children: "Sortable" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-x-12", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("ul", { id: "example1", children: /* @__PURE__ */ jsx(sortable.ReactSortable, { list: sortable1, setList: setSortable1, animation: 200, delay: 2, ghostClass: "gu-transit", group: "shared", children: sortable1.map((item) => {
            return /* @__PURE__ */ jsx("li", { className: "mb-2.5 cursor-grab", children: /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-[#1b2e4b] rounded-md border border-white-light dark:border-dark px-6 py-3.5 flex md:flex-row flex-col ltr:md:text-left rtl:md:text-right text-center items-md-center", children: [
              /* @__PURE__ */ jsx("div", { className: "ltr:sm:mr-4 rtl:sm:ml-4", children: /* @__PURE__ */ jsx("img", { alt: "avatar", src: `/assets/images/profile-${item.id}.jpeg`, className: "w-11 h-11 rounded-full mx-auto" }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex md:flex-row flex-col justify-between items-center flex-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "font-semibold md:my-0 my-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-dark dark:text-[#bfc9d4] text-base", children: item.text }),
                  /* @__PURE__ */ jsx("div", { className: "text-white-dark text-xs", children: item.name })
                ] }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("button", { type: "button", className: "btn btn-secondary btn-sm px-5 py-2", children: "View" }) })
              ] })
            ] }) }, item.id);
          }) }) }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("ul", { id: "example2", children: /* @__PURE__ */ jsx(sortable.ReactSortable, { list: sortable2, setList: setSortable2, animation: 200, delay: 2, ghostClass: "gu-transit", group: "shared", children: sortable2.map((item) => {
            return /* @__PURE__ */ jsx("li", { className: "mb-2.5 cursor-grab", children: /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-[#1b2e4b] rounded-md border border-white-light dark:border-dark px-6 py-3.5 flex md:flex-row flex-col ltr:md:text-left rtl:md:text-right text-center items-md-center", children: [
              /* @__PURE__ */ jsx("div", { className: "ltr:sm:mr-4 rtl:sm:ml-4", children: /* @__PURE__ */ jsx("img", { alt: "avatar", src: `/assets/images/profile-${item.id}.jpeg`, className: "w-11 h-11 rounded-full mx-auto" }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex md:flex-row flex-col justify-between items-center flex-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "font-semibold md:my-0 my-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-dark dark:text-[#bfc9d4] text-base", children: item.text }),
                  /* @__PURE__ */ jsx("div", { className: "text-white-dark text-xs", children: item.name })
                ] }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("button", { type: "button", className: "btn btn-secondary btn-sm px-5 py-2", children: "View" }) })
              ] })
            ] }) }, item.id);
          }) }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "panel", children: [
        /* @__PURE__ */ jsx("div", { className: "font-semibold text-lg dark:text-white mb-5", children: "Icon Change" }),
        /* @__PURE__ */ jsxs("div", { className: "icon-change grid grid-cols-1 sm:grid-cols-2 gap-x-12", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("ul", { id: "example3", className: "left", children: /* @__PURE__ */ jsx(sortable.ReactSortable, { list: iconChange1, setList: setIconChange1, animation: 200, ghostClass: "gu-transit", group: "icon", children: iconChange1.map((item) => {
            return /* @__PURE__ */ jsx("li", { className: "mb-2.5 cursor-grab", children: /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-[#1b2e4b] rounded-md border border-white-light dark:border-dark px-6 py-3.5 flex md:flex-row flex-col ltr:text-left rtl:text-right items-md-center", children: [
              /* @__PURE__ */ jsx("div", { className: "ltr:sm:mr-4 rtl:sm:ml-4", children: /* @__PURE__ */ jsx("img", { alt: "avatar", src: `/assets/images/profile-${item.id}.jpeg`, className: "w-11 h-11 rounded-full" }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center flex-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "font-semibold md:my-0 my-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-dark dark:text-[#bfc9d4] text-base", children: item.text }),
                  /* @__PURE__ */ jsx("div", { className: "text-white-dark text-xs", children: item.name })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-white-dark" })
              ] })
            ] }) }, item.id);
          }) }) }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("ul", { id: "example4", className: "right", children: /* @__PURE__ */ jsx(sortable.ReactSortable, { list: iconChange2, setList: setIconChange2, animation: 200, ghostClass: "gu-transit", group: "icon", children: iconChange2.map((item) => {
            return /* @__PURE__ */ jsx("li", { className: "mb-2.5 cursor-grab", children: /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-[#1b2e4b] rounded-md border border-white-light dark:border-dark px-6 py-3.5 flex md:flex-row flex-col ltr:text-left rtl:text-right items-md-center", children: [
              /* @__PURE__ */ jsx("div", { className: "ltr:sm:mr-4 rtl:sm:ml-4", children: /* @__PURE__ */ jsx("img", { alt: "avatar", src: `/assets/images/profile-${item.id}.jpeg`, className: "w-11 h-11 rounded-full" }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center flex-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "font-semibold md:my-0 my-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-dark dark:text-[#bfc9d4] text-base", children: item.text }),
                  /* @__PURE__ */ jsx("div", { className: "text-white-dark text-xs", children: item.name })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-white-dark" })
              ] })
            ] }) }, item.id);
          }) }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "panel", children: [
        /* @__PURE__ */ jsx("div", { className: "font-semibold text-lg dark:text-white mb-5", children: "Handler" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-x-12", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("ul", { id: "example5", children: /* @__PURE__ */ jsx(sortable.ReactSortable, { list: handler1, setList: setHandler1, animation: 200, handle: ".handle", group: "handler", ghostClass: "gu-transit", children: handler1.map((item) => {
            return /* @__PURE__ */ jsx("li", { className: "mb-2.5 cursor-grab", children: /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-[#1b2e4b] rounded-md border border-white-light dark:border-dark px-6 py-3.5 flex md:flex-row flex-col ltr:text-left rtl:text-right items-md-center", children: [
              /* @__PURE__ */ jsx("div", { className: "ltr:sm:mr-4 rtl:sm:ml-4", children: /* @__PURE__ */ jsx("img", { alt: "avatar", src: `/assets/images/profile-${item.id}.jpeg`, className: "w-11 h-11 rounded-full mx-auto" }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex md:flex-row flex-col justify-between items-center flex-1 text-center md:text-left", children: [
                /* @__PURE__ */ jsxs("div", { className: "font-semibold md:my-0 my-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-dark dark:text-[#bfc9d4] text-base", children: item.text }),
                  /* @__PURE__ */ jsx("div", { className: "text-white-dark text-xs", children: item.name })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-white-dark", children: /* @__PURE__ */ jsx("span", { className: "handle px-2 ltr:mr-1 rtl:ml-1 bg-[#ebedf2] dark:bg-black rounded cursor-move", children: "+" }) })
              ] })
            ] }) }, item.id);
          }) }) }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("ul", { id: "example6", children: /* @__PURE__ */ jsx(sortable.ReactSortable, { list: handler2, setList: setHandler2, animation: 200, handle: ".handle", group: "handler", ghostClass: "gu-transit", children: handler2.map((item) => {
            return /* @__PURE__ */ jsx("li", { className: "mb-2.5 cursor-grab", children: /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-[#1b2e4b] rounded-md border border-white-light dark:border-dark px-6 py-3.5 flex md:flex-row flex-col ltr:text-left rtl:text-right items-md-center", children: [
              /* @__PURE__ */ jsx("div", { className: "ltr:sm:mr-4 rtl:sm:ml-4", children: /* @__PURE__ */ jsx("img", { alt: "avatar", src: `/assets/images/profile-${item.id}.jpeg`, className: "w-11 h-11 rounded-full mx-auto" }) }),
              /* @__PURE__ */ jsxs("div", { className: "sm:flex block justify-between items-center flex-1 text-center md:text-left", children: [
                /* @__PURE__ */ jsxs("div", { className: "font-semibold md:my-0 my-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-dark dark:text-[#bfc9d4] text-base", children: item.text }),
                  /* @__PURE__ */ jsx("div", { className: "text-white-dark text-xs", children: item.name })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-white-dark", children: /* @__PURE__ */ jsx("span", { className: "handle px-2 ltr:mr-1 rtl:ml-1 bg-[#ebedf2] dark:bg-black rounded cursor-move", children: "+" }) })
              ] })
            ] }) }, item.id);
          }) }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "panel", children: [
        /* @__PURE__ */ jsx("div", { className: "font-semibold text-lg dark:text-white mb-5", children: "News Feed" }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { id: "example12", children: /* @__PURE__ */ jsx(sortable.ReactSortable, { list: newsFeed, setList: setNewsFeed, animation: 200, className: "grid grid-cols-1 sm:grid-cols-2 gap-x-12", children: newsFeed.map((item) => {
          return /* @__PURE__ */ jsx("div", { className: "mb-2.5", children: /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-[#1b2e4b] rounded-md border border-white-light dark:border-dark px-6 py-3.5", children: [
            /* @__PURE__ */ jsxs("div", { className: "py-sm-2.5 sm:flex block ltr:md:text-left rtl:md:text-right text-center items-md-center", children: [
              /* @__PURE__ */ jsx("div", { className: "ltr:sm:mr-4 rtl:sm:ml-4", children: /* @__PURE__ */ jsx("img", { alt: "avatar", src: `/assets/images/profile-${item.id + 1}.jpeg`, className: "w-11 h-11 rounded-lg mx-auto" }) }),
              /* @__PURE__ */ jsx("div", { className: "flex md:flex-row flex-col justify-between items-center flex-1", children: /* @__PURE__ */ jsxs("div", { className: "font-semibold md:my-0 my-3", children: [
                /* @__PURE__ */ jsx("div", { className: "text-dark dark:text-[#bfc9d4] text-base", children: item.name }),
                /* @__PURE__ */ jsx("div", { className: "text-white-dark text-xs", children: "11 hours ago" })
              ] }) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "py-5 border-b border-b-[#f1f2f3] dark:border-b-dark mb-4", children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation." }),
            /* @__PURE__ */ jsxs("div", { className: "md:flex items-center flex-wrap", children: [
              /* @__PURE__ */ jsx("div", { className: "ltr:md:text-left rtl:md:text-right text-center xl:flex-1", children: /* @__PURE__ */ jsxs("div", { className: "flex md:justify-start justify-center -space-x-2 rtl:space-x-reverse text-white", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    className: "w-10 h-10 rounded-full object-cover ring-2 ring-white dark:ring-white-dark",
                    src: "/assets/images/profile-6.jpeg",
                    alt: "avatar"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    className: "w-10 h-10 rounded-full object-cover ring-2 ring-white dark:ring-white-dark",
                    src: "/assets/images/profile-7.jpeg",
                    alt: "avatar"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    className: "w-10 h-10 rounded-full object-cover ring-2 ring-white dark:ring-white-dark",
                    src: "/assets/images/profile-8.jpeg",
                    alt: "avatar"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    className: "w-10 h-10 rounded-full object-cover ring-2 ring-white dark:ring-white-dark",
                    src: "/assets/images/profile-10.jpeg",
                    alt: "avatar"
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsx("div", { className: "ltr:md:text-right rtl:md:text-left text-center", children: /* @__PURE__ */ jsxs("span", { className: "text-xs text-white-dark lg:pt-0 pt-2 block", children: [
                /* @__PURE__ */ jsx("button", { className: "text-danger dark:text-primary font-semibold text-sm mr-1", children: "Vincent, Mary" }),
                "and 19 other like this"
              ] }) })
            ] })
          ] }) }, item.id);
        }) }) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "panel", children: [
        /* @__PURE__ */ jsx("div", { className: "font-semibold text-lg dark:text-white mb-5", children: "Delete User" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-x-12", children: [
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("ul", { id: "example7", children: /* @__PURE__ */ jsx(
            sortable.ReactSortable,
            {
              list: delete1,
              setList: setDelete1,
              animation: 200,
              group: "delete",
              removeOnSpill: true,
              onSpill: (evt) => {
                const toRemoved = delete1[evt.oldIndex];
                setDelete1(delete1.filter((item) => item !== toRemoved));
              },
              className: "min-h-[200px]",
              children: delete1.map((item) => {
                return /* @__PURE__ */ jsx("li", { className: "mb-2.5 cursor-grab", children: /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-[#1b2e4b] rounded-md border border-white-light dark:border-dark px-6 py-3.5 flex md:flex-row flex-col ltr:text-left rtl:text-right items-md-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "ltr:sm:mr-4 rtl:sm:ml-4", children: /* @__PURE__ */ jsx("img", { alt: "avatar", src: `/assets/images/profile-${item.id}.jpeg`, className: "w-11 h-11 rounded-full mx-auto" }) }),
                  /* @__PURE__ */ jsx("div", { className: "flex md:flex-row flex-col justify-between items-center flex-1 text-center md:text-left", children: /* @__PURE__ */ jsxs("div", { className: "font-semibold md:my-0 my-3", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-dark dark:text-[#bfc9d4] text-base", children: item.text }),
                    /* @__PURE__ */ jsx("div", { className: "text-white-dark text-xs", children: item.name })
                  ] }) })
                ] }) }, item.id);
              })
            }
          ) }) }),
          /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("ul", { id: "example8", children: /* @__PURE__ */ jsx(
            sortable.ReactSortable,
            {
              list: delete2,
              setList: setDelete2,
              animation: 200,
              group: "delete",
              removeOnSpill: true,
              onSpill: (evt) => {
                const toRemoved = delete2[evt.oldIndex];
                setDelete2(delete2.filter((item) => item !== toRemoved));
              },
              className: "min-h-[200px]",
              children: delete2.map((item) => {
                return /* @__PURE__ */ jsx("li", { className: "mb-2.5 cursor-grab", children: /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-[#1b2e4b] rounded-md border border-white-light dark:border-dark px-6 py-3.5 flex md:flex-row flex-col ltr:text-left rtl:text-right items-md-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "ltr:sm:mr-4 rtl:sm:ml-4", children: /* @__PURE__ */ jsx("img", { alt: "avatar", src: `/assets/images/profile-${item.id}.jpeg`, className: "w-11 h-11 rounded-full mx-auto" }) }),
                  /* @__PURE__ */ jsx("div", { className: "flex md:flex-row flex-col justify-between items-center flex-1 text-center md:text-left", children: /* @__PURE__ */ jsxs("div", { className: "font-semibold md:my-0 my-3", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-dark dark:text-[#bfc9d4] text-base", children: item.text }),
                    /* @__PURE__ */ jsx("div", { className: "text-white-dark text-xs", children: item.name })
                  ] }) })
                ] }) }, item.id);
              })
            }
          ) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "dragndrop space-y-8", children: /* @__PURE__ */ jsxs("div", { className: "panel", children: [
        /* @__PURE__ */ jsx("div", { className: "font-semibold text-lg dark:text-white mb-5", children: "Grid drag" }),
        /* @__PURE__ */ jsx("div", { id: "example11", children: /* @__PURE__ */ jsx(sortable.ReactSortable, { list: gridDrag, setList: setGridDrag, animation: 200, className: "grid grid-cols-2 xs sm:grid-cols-4 md:grid-cols-8 gap-8 place-items-center", children: gridDrag.map((item) => {
          return /* @__PURE__ */ jsx(
            "div",
            {
              className: "w-24 h-24 border border-white-light rounded-md shadow dark:border-dark flex items-center justify-center font-semibold cursor-grab",
              children: item.name
            },
            item.id
          );
        }) }) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "panel", children: [
        /* @__PURE__ */ jsx("div", { className: "font-semibold text-lg dark:text-white mb-5", children: "Swap" }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("ul", { id: "example7", children: /* @__PURE__ */ jsx(sortable.ReactSortable, { list: swap, setList: setSwap, animation: 200, swap: true, swapThreshold: 1, className: "grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2.5", children: swap.map((item) => {
          return /* @__PURE__ */ jsx("li", { className: " cursor-grab", children: /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-[#1b2e4b] rounded-md border border-white-light dark:border-dark px-6 py-3.5 flex md:flex-row flex-col ltr:text-left rtl:text-right items-md-center", children: [
            /* @__PURE__ */ jsx("div", { className: "ltr:sm:mr-4 rtl:sm:ml-4", children: /* @__PURE__ */ jsx("img", { alt: "avatar", src: `/assets/images/profile-${item.id}.jpeg`, className: "w-11 h-11 rounded-full mx-auto" }) }),
            /* @__PURE__ */ jsx("div", { className: "flex md:flex-row flex-col justify-between items-center flex-1 text-center md:text-left", children: /* @__PURE__ */ jsxs("div", { className: "font-semibold md:my-0 my-3", children: [
              /* @__PURE__ */ jsx("div", { className: "text-dark dark:text-[#bfc9d4] text-base", children: item.text }),
              /* @__PURE__ */ jsx("div", { className: "text-white-dark text-xs", children: item.name })
            ] }) })
          ] }) }, item.id);
        }) }) }) }) })
      ] })
    ] })
  ] });
};

const $$Astro = createAstro("https://courses.vcogroup.vn");
const $$DragDrop = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DragDrop;
  return renderTemplate`${renderComponent($$result, "LayoutSidebar", $$LayoutSidebar, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DragAndDrop", DragAndDrop, {})} ` })}`;
}, "D:/vco2024/web/astro-node/src/pages/DragDrop.astro", void 0);

const $$file = "D:/vco2024/web/astro-node/src/pages/DragDrop.astro";
const $$url = "/DragDrop";

const DragDrop = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$DragDrop,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$LayoutSidebar as $, DragDrop as D };
