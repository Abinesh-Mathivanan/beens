import pLimit from 'p-limit';
import { A as AstroError, U as UnknownContentCollectionError } from './astro/assets-service_D1OlwPvN.mjs';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import { a as createComponent, g as renderUniqueStylesheet, h as renderScriptElement, i as createHeadAndContent, r as renderTemplate, b as renderComponent, u as unescapeHTML } from './astro/server_B2GGS4-m.mjs';
import 'kleur/colors';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://beens.github.io", "ASSETS_PREFIX": undefined}, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/post/cover-image/index.md": () => import('./index_DJahx1RL.mjs'),"/src/content/post/draft-post.md": () => import('./draft-post_Bqd7jT5k.mjs'),"/src/content/post/long-title.md": () => import('./long-title_DhlM6cj2.mjs'),"/src/content/post/markdown-elements/index.md": () => import('./index_DHKpXL58.mjs'),"/src/content/post/missing-content.md": () => import('./missing-content_DtKsYhDx.mjs'),"/src/content/post/social-image.md": () => import('./social-image_DD62tDht.mjs'),"/src/content/post/unique-tags.md": () => import('./unique-tags_DlZedqyc.mjs'),"/src/content/post/webmentions/index.md": () => import('./index_CH4Q3_Ez.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"post":{"type":"content","entries":{"draft-post":"/src/content/post/draft-post.md","long-title":"/src/content/post/long-title.md","missing-content":"/src/content/post/missing-content.md","social-image":"/src/content/post/social-image.md","unique-tags":"/src/content/post/unique-tags.md","cover-image":"/src/content/post/cover-image/index.md","markdown-elements":"/src/content/post/markdown-elements/index.md","webmentions":"/src/content/post/webmentions/index.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/post/cover-image/index.md": () => import('./index_BUoldzQz.mjs'),"/src/content/post/draft-post.md": () => import('./draft-post_DZRx60Xm.mjs'),"/src/content/post/long-title.md": () => import('./long-title_BM8iA2qp.mjs'),"/src/content/post/markdown-elements/index.md": () => import('./index_BQVdwI1K.mjs'),"/src/content/post/missing-content.md": () => import('./missing-content_ByNUzXGY.mjs'),"/src/content/post/social-image.md": () => import('./social-image_CJGMXX4V.mjs'),"/src/content/post/unique-tags.md": () => import('./unique-tags_BXruXGL3.mjs'),"/src/content/post/webmentions/index.md": () => import('./index_DU0W8lSO.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

async function getAllPosts() {
  return await getCollection("post", ({ data }) => {
    return !data.draft ;
  });
}
function getPostSortDate(post) {
  return new Date(post.data.publishDate);
}
function sortMDByDate(posts) {
  return posts.sort((a, b) => {
    const aDate = getPostSortDate(a).valueOf();
    const bDate = getPostSortDate(b).valueOf();
    return bDate - aDate;
  });
}
function groupPostsByYear(posts) {
  return posts.reduce((acc, post) => {
    const year = getPostSortDate(post).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year]?.push(post);
    return acc;
  }, {});
}
function getAllTags(posts) {
  return posts.flatMap((post) => [...post.data.tags]);
}
function getUniqueTags(posts) {
  return [...new Set(getAllTags(posts))];
}
function getUniqueTagsWithCount(posts) {
  return [
    ...getAllTags(posts).reduce(
      (acc, t) => acc.set(t, (acc.get(t) ?? 0) + 1),
      /* @__PURE__ */ new Map()
    )
  ].sort((a, b) => b[1] - a[1]);
}

export { groupPostsByYear as a, getUniqueTags as b, getUniqueTagsWithCount as c, getPostSortDate as d, getAllPosts as g, sortMDByDate as s };
