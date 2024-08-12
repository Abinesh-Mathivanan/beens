import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B2GGS4-m.mjs';
import 'kleur/colors';
import { A as Astro__Z1USaxp } from '../chunks/about-astro_CGwt8ZRH.mjs';
import { $ as $$Base } from '../chunks/Base_Cbj-jED2.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_C9PO0lmX.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://beens.github.io");
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const meta = {
    title: "Oops! You found a missing page!"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$Base, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="title mb-6">404 | Oops something went wrong</h1> <p class="mb-8">Please use the navigation to find your way back</p> <div class="my-4 grid justify-center"> ${renderComponent($$result2, "Image", $$Image, { "alt": "A cartoon cactus looking at the 'Astro.build' logo", "class": "rotate-180", "loading": "eager", "src": Astro__Z1USaxp })} </div> ` })}`;
}, "D:/forked-projs/beens/src/pages/404.astro", void 0);

const $$file = "D:/forked-projs/beens/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
