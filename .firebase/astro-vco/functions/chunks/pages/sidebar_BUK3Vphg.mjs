/* empty css                             */
import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent } from '../astro_CIO9HP5M.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$LayoutSidebar } from './DragDrop_B0UYr1By.mjs';
import { $ as $$DashBoard } from './index22_DM6Iqq1-.mjs';

const $$Astro = createAstro("https://courses.vcogroup.vn");
const $$Sidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sidebar;
  return renderTemplate`${renderComponent($$result, "LayoutSidebar", $$LayoutSidebar, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DashBoard", $$DashBoard, {})} ` })}`;
}, "D:/vco2024/web/astro-node/src/pages/layouts/sidebar.astro", void 0);

const $$file = "D:/vco2024/web/astro-node/src/pages/layouts/sidebar.astro";
const $$url = "/layouts/sidebar";

export { $$Sidebar as default, $$file as file, $$url as url };
