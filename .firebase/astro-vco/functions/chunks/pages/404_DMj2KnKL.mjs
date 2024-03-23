/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, f as renderScript, g as renderSlot, h as addAttribute, i as renderHead } from '../astro_CIO9HP5M.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro$6 = createAstro("https://courses.vcogroup.vn");
const $$CopyrightNotice = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CopyrightNotice;
  return renderTemplate`${maybeRenderHead()}<p class="my-10 text-sm text-center text-gray-500">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} —
<a href="https://vcogroup.vn" class="hover:underline" target="_blank">vcogroup.vn</a> </p>`;
}, "D:/vco2024/web/astro-node/src/components/CopyrightNotice.astro", void 0);

const $$Astro$5 = createAstro("https://courses.vcogroup.vn");
const $$FooterStacked = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$FooterStacked;
  return renderTemplate`${maybeRenderHead()}<footer class="md:flex md:items-center md:justify-between px-4 2xl:px-0 py-6 md:py-10"> ${renderComponent($$result, "CopyrightNotice", $$CopyrightNotice, {})} <ul class="flex flex-wrap items-center justify-center"></ul> </footer>`;
}, "D:/vco2024/web/astro-node/src/app/FooterStacked.astro", void 0);

const description = "VCO GROUP is a company specializing in young talents solutions consultancy &amp; delivery for enterprises and education. VCO GROUP is proud of being a crucial part of partners' success and globalization";
const keywords = [
	"tailwind",
	"vco",
	"vcogroup",
	"vco test",
	"admin dashboard",
	"html",
	"css",
	"astro"
];
const author = "Bergside Inc.";
const name = "vco-test";
const type = "module";
const version = "0.0.1";
const scripts = {
	dev: "astro dev",
	start: "astro dev",
	build: "astro build",
	preview: "astro preview",
	astro: "astro",
	info: "info"
};
const dependencies = {
	"@astrojs/netlify": "^5.1.3",
	"@astrojs/node": "^8.2.3",
	"@astrojs/preact": "^3.1.1",
	"@astrojs/react": "^3.1.0",
	"@astrojs/sitemap": "^3.1.1",
	"@astrojs/tailwind": "^5.1.0",
	"@astrojs/vercel": "^7.3.6",
	"@edge-runtime/cookies": "^4.0.3",
	"@faker-js/faker": "^8.4.1",
	"@types/bcrypt": "^5.0.2",
	"@types/react": "^18.2.63",
	"@types/react-dom": "^18.2.19",
	apexcharts: "^3.46.0",
	astro: "^4.5.5",
	astrocors: "^0.1.4",
	bcrypt: "^5.1.1",
	"body-parser": "^1.20.2",
	"cookie-parser": "^1.4.6",
	cors: "^2.8.5",
	dotenv: "^16.4.5",
	express: "^4.18.2",
	"firebase-tools": "^13.4.0",
	flowbite: "^2.3.0",
	"flowbite-typography": "^1.0.3",
	helmet: "^7.1.0",
	"html-minifier": "^4.0.0",
	"http-errors": "^2.0.0",
	jose: "^5.2.2",
	jsonwebtoken: "^9.0.2",
	mongodb: "^6.4.0",
	mongoose: "^8.2.0",
	morgan: "^1.10.0",
	preact: "^10.19.6",
	react: "^18.2.0",
	"react-dom": "^18.2.0",
	"react-sortablejs": "^6.1.4",
	shiki: "^1.1.7",
	sitemap: "^7.1.1",
	"tailwind-scrollbar": "^3.1.0",
	tailwindcss: "^3.4.1",
	"ts-node-dev": "^2.0.0",
	vite: "^5.1.4"
};
const devDependencies = {
	"@types/eslint": "^8.21.1",
	"@types/jquery": "^3.5.29",
	"@types/mongoose": "^5.11.97",
	"@typescript-eslint/eslint-plugin": "^5.54.1",
	"@typescript-eslint/parser": "^5.54.1",
	"astro-eslint-parser": "^0.11.0",
	eslint: "^8.35.0",
	"eslint-config-airbnb-base": "^15.0.0",
	"eslint-config-airbnb-typescript": "^17.0.0",
	"eslint-config-prettier": "^8.7.0",
	"eslint-import-resolver-typescript": "^3.5.3",
	"eslint-plugin-astro": "^0.23.0",
	"eslint-plugin-import": "^2.27.5",
	"eslint-plugin-prettier": "^4.2.1",
	"eslint-plugin-tsdoc": "^0.2.17",
	nodemon: "^3.1.0",
	"ts-node": "^10.9.2",
	typescript: "^5.3.3",
	"util.promisify": "^1.1.2"
};
const pkg = {
	"private": "true",
	description: description,
	keywords: keywords,
	author: author,
	name: name,
	type: type,
	version: version,
	scripts: scripts,
	dependencies: dependencies,
	devDependencies: devDependencies
};

const REMOTE_ASSETS_BASE_URL = `${"https://courses.vcogroup.vn"}${"/"}`;
const SITE_TITLE = "VCO GROUP - VIWW";

function url(path = "") {
  return `${"https://courses.vcogroup.vn"}${"/"}${path}`;
}
function asset(path) {
  return `${REMOTE_ASSETS_BASE_URL}${path}`;
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro("https://courses.vcogroup.vn");
const $$LayoutCommon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$LayoutCommon;
  const { class: clazz } = Astro2.props;
  Astro2.request.headers.get("cookie");
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>', '</title><meta name="generator"', '><meta name="description"', '><meta name=""', '><link rel="icon" type="image/svg+xml"', '><link rel="sitemap" type="application/xml"', `><meta name="author" content="Andy MinQ & Astro's Team"><meta name="copyright" content="MIT"><!-- Google Tag Manager --><script>
			(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
				new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
				j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
				'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
				})(window,document,'script','dataLayer','GTM-W92BHBV');
		<\/script><!-- End Google Tag Manager --><script>
			if (
				localStorage.getItem('color-theme') === 'dark' ||
				(!('color-theme' in localStorage) &&
					window.matchMedia('(prefers-color-scheme: dark)').matches)
			) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		<\/script><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet">`, "</head> <body", "> ", " ", " </body></html>"])), SITE_TITLE, addAttribute(Astro2.generator, "content"), addAttribute(pkg.description, "content"), addAttribute(pkg.description, "content"), addAttribute(url("favicon.svg"), "href"), addAttribute(url("sitemap-index.xml"), "href"), renderHead(), addAttribute([
    //
    clazz,
    "bg-zinc-50 dark:bg-zinc-800",
    "scrollbar scrollbar-w-3 scrollbar-thumb-rounded-[0.25rem]",
    "scrollbar-track-slate-200  scrollbar-thumb-gray-400",
    "dark:scrollbar-track-gray-900 dark:scrollbar-thumb-gray-700"
  ], "class:list"), renderSlot($$result, $$slots["default"]), renderScript($$result, "D:/vco2024/web/astro-node/src/app/LayoutCommon.astro?astro&type=script&index=0&lang.ts"));
}, "D:/vco2024/web/astro-node/src/app/LayoutCommon.astro", void 0);

const $$Astro$3 = createAstro("https://courses.vcogroup.vn");
const $$NavBarStacked = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$NavBarStacked;
  return renderTemplate`${maybeRenderHead()}<nav class="fixed z-50 w-full bg-white border-b border-gray-200 sm:py-2 dark:bg-zinc-800 dark:border-gray-700"> <div class="container py-3 mx-auto"> <div class="flex items-center justify-between"> <div class="flex items-center justify-start"> <a${addAttribute(url(), "href")} class="flex mr-4"> <img${addAttribute(asset("logo.svg"), "src")} class="h-8 mr-3" alt="VCO GROUP logo"> <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Test Center</span> </a> </div> <!-- <div>
				<a
					href="#"
					class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
				>
					<svg
						class="w-5 h-5 mr-2 -ml-1"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
						></path>
					</svg>
					Login/Register
				</a>
				
			</div> --> </div> </div> <!-- Mobile menu --> <div class="hidden sm:hidden" id="mobile-menu"> <ul class="pt-2"> <li> <a href="#" class="block py-2 pl-3 pr-4 text-base font-normal text-gray-900 bg-zinc-100 dark:bg-zinc-700 dark:text-white">Dashboard</a> </li> <li> <a href="#" class="block px-3 py-2 text-base font-normal text-gray-600 border-b border-gray-100 hover:bg-zinc-50 hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:hover:bg-zinc-700 dark:text-gray-400 dark:hover:text-white">Team</a> </li> <li> <a href="#" class="block px-3 py-2 text-base font-normal text-gray-600 border-b border-gray-100 hover:bg-zinc-50 hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:hover:bg-zinc-700 dark:text-gray-400 dark:hover:text-white">Projects</a> </li> <li> <a href="#" class="block px-3 py-2 text-base font-normal text-gray-600 border-b border-gray-100 hover:bg-zinc-50 hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:hover:bg-zinc-700 dark:text-gray-400 dark:hover:text-white">Calendar
</a> </li> <li class="block"> <a href="#" class="inline-flex items-center w-full px-3 py-2 text-base font-normal text-gray-600 hover:bg-zinc-50 hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:hover:bg-zinc-700 dark:text-gray-400 dark:hover:text-white"> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path> </svg>
Login/Register
</a> </li> </ul> </div> </nav>`;
}, "D:/vco2024/web/astro-node/src/app/NavBarStacked.astro", void 0);

const $$Astro$2 = createAstro("https://courses.vcogroup.vn");
const $$LayoutStacked = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LayoutStacked;
  return renderTemplate`${renderComponent($$result, "LayoutCommon", $$LayoutCommon, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NavBarStacked", $$NavBarStacked, {})} ${maybeRenderHead()}<div class="flex pt-16 overflow-hidden bg-zinc-50 dark:bg-zinc-900"> <div id="main-content" class="relative w-full h-full overflow-y-auto bg-zinc-50 dark:bg-zinc-900 min-h-screen"> <div class="px-4 2xl:px-0"> ${renderSlot($$result2, $$slots["default"])} </div> ${renderComponent($$result2, "FooterStacked", $$FooterStacked, {})} </div> </div> ` })}`;
}, "D:/vco2024/web/astro-node/src/app/LayoutStacked.astro", void 0);

const $$Astro$1 = createAstro("https://courses.vcogroup.vn");
const $$ErrorNotFound = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ErrorNotFound;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-zinc-900"> <div class="block md:max-w-lg"> <img${addAttribute(asset("images/illustrations/404.svg"), "src")} alt="astronaut image"> </div> <div class="text-center xl:max-w-4xl"> <h1 class="mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
Page not found
</h1> <p class="mb-5 text-base font-normal text-gray-500 md:text-lg dark:text-gray-400">
Oops! Looks like you followed a bad link. If you think this is a problem
			with us, please tell us.
</p> <a${addAttribute(url(""), "href")} class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"> <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
Go back home
</a> </div> </div>`;
}, "D:/vco2024/web/astro-node/src/modules/ErrorNotFound.astro", void 0);

const $$Astro = createAstro("https://courses.vcogroup.vn");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ErrorNotFound", $$ErrorNotFound, {})} ` })}`;
}, "D:/vco2024/web/astro-node/src/pages/404.astro", void 0);

const $$file = "D:/vco2024/web/astro-node/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$LayoutStacked as $, _404 as _, asset as a, $$CopyrightNotice as b, $$LayoutCommon as c, url as u };
