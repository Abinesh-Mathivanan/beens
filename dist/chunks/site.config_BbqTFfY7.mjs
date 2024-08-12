const siteConfig = {
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: "Me and the Internet",
  // Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
  date: {
    locale: "en-GB",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric"
    }
  },
  // Meta property used as the default description meta property
  description: "None",
  // HTML lang property, found in src/layouts/Base.astro L:18
  lang: "en-GB",
  // Meta property, found in src/components/BaseHead.astro L:42
  ogLocale: "en_GB",
  // Option to sort posts by updatedDate if set to true (if property exists). Default (false) will sort by publishDate
  sortPostsByUpdatedDate: false,
  // Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
  title: "Beens Portfolio"
};
const menuLinks = [
  {
    path: "/",
    title: "Home"
  },
  {
    path: "/about/",
    title: "About Me"
  },
  {
    path: "/posts/",
    title: "Blog"
  }
];

export { menuLinks as m, siteConfig as s };
