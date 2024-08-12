import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from './astro/server_B2GGS4-m.mjs';
import 'kleur/colors';
import { d as getPostSortDate } from './post_Cze9_F3X.mjs';
import { $ as $$FormattedDate } from './FormattedDate_HycTZapW.mjs';
/* empty css                         */

const $$Astro = createAstro("https://beens.github.io");
const $$PostPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostPreview;
  const { as: Tag = "div", post, withDesc = false } = Astro2.props;
  const postDate = getPostSortDate(post);
  const previewImages = post.data.previewImages || [];
  const firstTwoImages = previewImages.slice(0, 2);
  return renderTemplate`${renderComponent($$result, "FormattedDate", $$FormattedDate, { "class": "min-w-[120px] text-gray-600 dark:text-gray-400", "date": postDate, "data-astro-cid-f2bql6hi": true })} ${renderComponent($$result, "Tag", Tag, { "data-astro-cid-f2bql6hi": true }, { "default": ($$result2) => renderTemplate`${post.data.draft && renderTemplate`${maybeRenderHead()}<span class="text-red-500" data-astro-cid-f2bql6hi>(Draft) </span>`}<a class="cactus-link" data-astro-prefetch${addAttribute(`/posts/${post.slug}/`, "href")} data-astro-cid-f2bql6hi> ${post.data.title} </a> ${firstTwoImages.length > 0 && renderTemplate`<div class="flex gap-2 mt-2" data-astro-cid-f2bql6hi> ${firstTwoImages.map((image, index) => renderTemplate`<img${addAttribute(image.alt || `Preview image ${index + 1}`, "alt")} class="w-29 h-24 object-cover rounded"${addAttribute(image.src, "src")} data-astro-cid-f2bql6hi>`)} </div>`}` })} ${withDesc && renderTemplate`<q class="line-clamp-3 italic" data-astro-cid-f2bql6hi>${post.data.description}</q>`} `;
}, "D:/forked-projs/beens/src/components/blog/PostPreview.astro", void 0);

export { $$PostPreview as $ };
