import type { Plugin } from 'vite'; // Type-only import

export default function cheerioFixPlugin(): Plugin {
  return {
    name: 'cheerio-fix-plugin',
    resolveId(id) {
      if (id === 'cheerio') {
        return '\0cheerio';
      }
      return null;
    },
    load(id) {
      if (id === '\0cheerio') {
        return `import * as cheerio from 'cheerio'; export default cheerio;`;
      }
      return null;
    },
  };
}
