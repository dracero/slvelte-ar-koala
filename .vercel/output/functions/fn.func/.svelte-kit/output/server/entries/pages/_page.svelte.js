import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const styles = "";
const ARpp_svelte_svelte_type_style_lang = "";
const css = {
  code: "#my-canvas.svelte-1fmz11a{width:100%;height:100%}",
  map: null
};
const ARpp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<canvas id="${"my-canvas"}" class="${"svelte-1fmz11a"}"></canvas>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(ARpp, "ARpp").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
