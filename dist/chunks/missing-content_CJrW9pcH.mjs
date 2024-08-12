import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_B2GGS4-m.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"This post doesn't have any content","description":"This post is purely for testing the table of content, which should not be rendered","publishDate":"22 Feb 2023","tags":["test","toc"],"previewImages":[{"src":"/src/content/post/cover-image/cover.png","alt":"Placeholder Image 1"},{"src":"/src/content/post/cover-image/cover.png","alt":"Placeholder Image 2"}]};
				const file = "D:/forked-projs/beens/src/content/post/missing-content.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
