/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../astro_CIO9HP5M.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as asset, u as url, $ as $$LayoutStacked } from './404_DMj2KnKL.mjs';
import { jsxs, jsx } from 'preact/jsx-runtime';
import { useState } from 'preact/hooks';

function Form() {
  const [responseMessage, setResponseMessage] = useState("");
  async function submit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    var object = JSON.stringify(Object.fromEntries(formData));
    const dataPost = new URLSearchParams(object).toString();
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      body: dataPost,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });
    if (response.status === 200) {
      window.location.href = "/authentication/sign-in";
      return;
    }
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
    }
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "w-full flex flex-col items-center justify-center px-6 pt-8 mx-auto pt:mt-0 dark:bg-zinc-900",
      children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#",
            className: "flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white",
            children: /* @__PURE__ */ jsx("img", { src: asset("logo.svg"), alt: "VCO GROUP logo", className: "h-11" })
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-zinc-800",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: "Create a Free Account" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm font-normal text-primary-500", children: responseMessage && /* @__PURE__ */ jsx("p", { children: responseMessage }) }),
              /* @__PURE__ */ jsxs("form", { className: "mt-8 space-y-6", onSubmit: submit, children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(
                    "label",
                    {
                      htmlFor: "fname",
                      className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                      children: "First Name"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      name: "fname",
                      id: "fname",
                      className: "bg-zinc-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                      placeholder: "Ex: Hoang",
                      required: true
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(
                    "label",
                    {
                      htmlFor: "lname",
                      className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                      children: "Last Name"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      name: "lname",
                      id: "lname",
                      className: "bg-zinc-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                      placeholder: "Ex: Dung",
                      required: true
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(
                    "label",
                    {
                      htmlFor: "email",
                      className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                      children: "Your email"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "email",
                      name: "email",
                      id: "email",
                      className: "bg-zinc-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                      placeholder: "name@company.com",
                      required: true
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(
                    "label",
                    {
                      htmlFor: "password",
                      className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                      children: "Your password"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "password",
                      name: "password",
                      id: "password",
                      placeholder: "••••••••",
                      className: "bg-zinc-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                      required: true
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(
                    "label",
                    {
                      htmlFor: "confirmPassword",
                      className: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
                      children: "Confirm password"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "password",
                      name: "confirmPassword",
                      id: "confirmPassword",
                      placeholder: "••••••••",
                      className: "bg-zinc-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-zinc-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                      required: true
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "submit",
                    className: "w-full px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800",
                    children: "Create account"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "text-sm font-medium text-gray-500 dark:text-gray-400", children: [
                  "Already have an account? ",
                  /* @__PURE__ */ jsx(
                    "a",
                    {
                      href: url("authentication/sign-in"),
                      className: "text-primary-700 hover:underline dark:text-primary-500",
                      children: "Login here"
                    }
                  )
                ] })
              ] })
            ]
          }
        )
      ]
    }
  );
}

const $$Astro = createAstro("https://courses.vcogroup.vn");
const $$SignUp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SignUp;
  return renderTemplate`${renderComponent($$result, "LayoutStacked", $$LayoutStacked, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen align-middle flex pb-[12vh]"> ${renderComponent($$result2, "FormSignUp", Form, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/vco2024/web/astro-node/src/modules/FormSignUp", "client:component-export": "default" })} </div> ` })}`;
}, "D:/vco2024/web/astro-node/src/pages/authentication/sign-up.astro", void 0);

const $$file = "D:/vco2024/web/astro-node/src/pages/authentication/sign-up.astro";
const $$url = "/authentication/sign-up";

export { $$SignUp as default, $$file as file, $$url as url };
