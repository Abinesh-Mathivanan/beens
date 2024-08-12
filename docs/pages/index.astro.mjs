import { a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent } from '../chunks/astro/server_B2GGS4-m.mjs';
import 'kleur/colors';
import { $ as $$Icon } from '../chunks/Icon_Bnajr7Zh.mjs';
import { $ as $$PostPreview } from '../chunks/PostPreview_CcnI1ZPp.mjs';
import { g as getAllPosts, s as sortMDByDate } from '../chunks/post_Cze9_F3X.mjs';
import { $ as $$Base } from '../chunks/Base_Cbj-jED2.mjs';
export { renderers } from '../renderers.mjs';

const $$SocialList = createComponent(($$result, $$props, $$slots) => {
  const socialLinks = [
    {
      friendlyName: "Github",
      link: "https://github.com/Abinesh-Mathivanan",
      name: "mdi:github"
    },
    {
      friendlyName: "LinkedIn",
      link: "https://www.linkedin.com/in/abineshmathivanan/",
      name: "mdi:linkedin"
    },
    {
      friendlyName: "Twitter",
      link: "https://x.com/dirctd_by_beens",
      name: "mdi:twitter"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap items-end gap-x-2"> <p>Find me on</p> <ul class="flex flex-1 items-center gap-x-2 sm:flex-initial"> ${socialLinks.map(({ friendlyName, isWebmention, link, name }) => renderTemplate`<li class="flex"> <a class="inline-block p-1 sm:hover:text-link"${addAttribute(link, "href")}${addAttribute(`noopener noreferrer ${isWebmention ? "me authn" : ""}`, "rel")} target="_blank"> ${renderComponent($$result, "Icon", $$Icon, { "aria-hidden": "true", "class": "h-6 w-6", "focusable": "false", "name": name })} <span class="sr-only">${friendlyName}</span> </a> </li>`)} </ul> </div>`;
}, "D:/forked-projs/beens/src/components/SocialList.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const MAX_POSTS = 5;
  const allPosts = await getAllPosts();
  const allPostsByDate = sortMDByDate(allPosts).slice(0, MAX_POSTS);
  return renderTemplate`${renderComponent($$result, "PageLayout", $$Base, { "meta": { title: "Home" } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <h1 class="title mb-6">Hello Folks!</h1> <p class="mb-4">
I don't play chess, but recently trying to. Would like to have funny or technical conversations (sometimes), and generally avoids cringy discussions.
			Prefers to avoid dramas and unnecessary motivational talks. If something's needed, I would do that, it's that simple.
			Speaks common sense a lot.
</p> ${renderComponent($$result2, "SocialList", $$SocialList, {})} </section> <section aria-label="Blog post list" class="mt-16"> <h2 class="title mb-4 text-xl">Posts</h2> <ul class="space-y-4"> ${allPostsByDate.map((p) => renderTemplate`<li class="grid gap-2 sm:grid-cols-[auto_1fr] sm:[&_q]:col-start-2"> ${renderComponent($$result2, "PostPreview", $$PostPreview, { "post": p })} </li>`)} </ul> </section> ` })}`;
}, "D:/forked-projs/beens/src/pages/index.astro", void 0);

const $$file = "D:/forked-projs/beens/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
