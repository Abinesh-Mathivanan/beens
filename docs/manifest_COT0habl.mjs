import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro/server_B2GGS4-m.mjs';
import 'clsx';
import 'html-escaper';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///D:/forked-projs/beens/","adapterName":"","routes":[{"file":"file:///D:/forked-projs/beens/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/forked-projs/beens/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/forked-projs/beens/dist/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.ts","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/forked-projs/beens/dist/tags/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///D:/forked-projs/beens/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://beens.github.io","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/forked-projs/beens/src/pages/posts/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["D:/forked-projs/beens/src/pages/404.astro",{"propagation":"none","containsHead":true}],["D:/forked-projs/beens/src/pages/about.astro",{"propagation":"none","containsHead":true}],["D:/forked-projs/beens/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["D:/forked-projs/beens/src/pages/posts/[...page].astro",{"propagation":"in-tree","containsHead":true}],["D:/forked-projs/beens/src/pages/tags/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["D:/forked-projs/beens/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["D:/forked-projs/beens/src/data/post.ts",{"propagation":"in-tree","containsHead":false}],["D:/forked-projs/beens/src/components/blog/PostPreview.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/posts/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/forked-projs/beens/src/pages/og-image/[slug].png.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/og-image/[slug].png@_@ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/posts/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["D:/forked-projs/beens/src/pages/rss.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/og-image/[slug].png@_@ts":"pages/og-image/_slug_.png.astro.mjs","\u0000@astro-page:src/pages/posts/[...page]@_@astro":"pages/posts/_---page_.astro.mjs","\u0000@astro-page:src/pages/posts/[...slug]@_@astro":"pages/posts/_---slug_.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@ts":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/tags/[tag]/[...page]@_@astro":"pages/tags/_tag_/_---page_.astro.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"pages/tags.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_COT0habl.mjs","D:/forked-projs/beens/src/content/post/cover-image/index.md?astroContentCollectionEntry=true":"chunks/index_DJahx1RL.mjs","D:/forked-projs/beens/src/content/post/draft-post.md?astroContentCollectionEntry=true":"chunks/draft-post_Bqd7jT5k.mjs","D:/forked-projs/beens/src/content/post/long-title.md?astroContentCollectionEntry=true":"chunks/long-title_DhlM6cj2.mjs","D:/forked-projs/beens/src/content/post/markdown-elements/index.md?astroContentCollectionEntry=true":"chunks/index_DHKpXL58.mjs","D:/forked-projs/beens/src/content/post/missing-content.md?astroContentCollectionEntry=true":"chunks/missing-content_DtKsYhDx.mjs","D:/forked-projs/beens/src/content/post/social-image.md?astroContentCollectionEntry=true":"chunks/social-image_DD62tDht.mjs","D:/forked-projs/beens/src/content/post/unique-tags.md?astroContentCollectionEntry=true":"chunks/unique-tags_DlZedqyc.mjs","D:/forked-projs/beens/src/content/post/webmentions/index.md?astroContentCollectionEntry=true":"chunks/index_CH4Q3_Ez.mjs","D:/forked-projs/beens/src/content/post/cover-image/index.md?astroPropagatedAssets":"chunks/index_BUoldzQz.mjs","D:/forked-projs/beens/src/content/post/draft-post.md?astroPropagatedAssets":"chunks/draft-post_DZRx60Xm.mjs","D:/forked-projs/beens/src/content/post/long-title.md?astroPropagatedAssets":"chunks/long-title_BM8iA2qp.mjs","D:/forked-projs/beens/src/content/post/markdown-elements/index.md?astroPropagatedAssets":"chunks/index_BQVdwI1K.mjs","D:/forked-projs/beens/src/content/post/missing-content.md?astroPropagatedAssets":"chunks/missing-content_ByNUzXGY.mjs","D:/forked-projs/beens/src/content/post/social-image.md?astroPropagatedAssets":"chunks/social-image_CJGMXX4V.mjs","D:/forked-projs/beens/src/content/post/unique-tags.md?astroPropagatedAssets":"chunks/unique-tags_BXruXGL3.mjs","D:/forked-projs/beens/src/content/post/webmentions/index.md?astroPropagatedAssets":"chunks/index_DU0W8lSO.mjs","D:/forked-projs/beens/src/content/post/cover-image/index.md":"chunks/index_CbRT_Dcq.mjs","D:/forked-projs/beens/src/content/post/draft-post.md":"chunks/draft-post_CJTM7hC1.mjs","D:/forked-projs/beens/src/content/post/long-title.md":"chunks/long-title_Ch-FplK8.mjs","D:/forked-projs/beens/src/content/post/markdown-elements/index.md":"chunks/index_zymbj0fn.mjs","D:/forked-projs/beens/src/content/post/missing-content.md":"chunks/missing-content_CJrW9pcH.mjs","D:/forked-projs/beens/src/content/post/social-image.md":"chunks/social-image_C7kJzKzy.mjs","D:/forked-projs/beens/src/content/post/unique-tags.md":"chunks/unique-tags_C2c-klyo.mjs","D:/forked-projs/beens/src/content/post/webmentions/index.md":"chunks/index_DjMCzsr_.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.D5anhwiA.js","/astro/hoisted.js?q=1":"_astro/hoisted.DGJftss2.js","D:/forked-projs/beens/node_modules/.pnpm/@pagefind+default-ui@1.1.0/node_modules/@pagefind/default-ui/npm_dist/mjs/ui-core.mjs":"_astro/ui-core.Y1gBY0HD.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///D:/forked-projs/beens/dist/404.html","/file:///D:/forked-projs/beens/dist/about/index.html","/file:///D:/forked-projs/beens/dist/rss.xml","/file:///D:/forked-projs/beens/dist/tags/index.html","/file:///D:/forked-projs/beens/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { manifest };
