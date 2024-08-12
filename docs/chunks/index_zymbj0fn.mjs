import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_B2GGS4-m.mjs';
import { g as getImage } from './_astro_assets_C9PO0lmX.mjs';
import { A as Astro__Z1USaxp } from './about-astro_CGwt8ZRH.mjs';
import 'clsx';

const Astro__Z25LIRO = new Proxy({"src":"/_astro/logo.DMXfm6vf.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/forked-projs/beens/src/content/post/markdown-elements/logo.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/forked-projs/beens/src/content/post/markdown-elements/logo.png");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./logo\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./logo.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z25LIRO, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "@/assets/about-astro\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "@/assets/about-astro.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z1USaxp, ...props});
													occurrenceCounter++;
											}
									}
					return imageSources;
			};

			async function updateImageReferences(html) {
				return images(html).then((imageSources) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
								const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));
		
								// Use the 'index' property for each image occurrence
								const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;
		
								if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
										imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
								}
		
								const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		
								return spreadAttributes({
										src: imageSources[srcKey].src,
										...attributesWithoutIndex,
								});
						});
				});
		}
		

		// NOTE: This causes a top-level await to appear in the user's code, which can break very easily due to a Rollup
	  // bug and certain adapters not supporting it correctly. See: https://github.com/rollup/rollup/issues/4708
	  // Tread carefully!
			const html = await updateImageReferences("<h2 id=\"this-is-a-h2-heading\">This is a H2 Heading</h2>\n<h3 id=\"this-is-a-h3-heading\">This is a H3 Heading</h3>\n<h4 id=\"this-is-a-h4-heading\">This is a H4 Heading</h4>\n<h5 id=\"this-is-a-h5-heading\">This is a H5 Heading</h5>\n<h6 id=\"this-is-a-h6-heading\">This is a H6 Heading</h6>\n<h2 id=\"horizontal-rules\">Horizontal Rules</h2>\n<hr>\n<hr>\n<hr>\n<h2 id=\"emphasis\">Emphasis</h2>\n<p><strong>This is bold text</strong></p>\n<p><em>This is italic text</em></p>\n<p><del>Strikethrough</del></p>\n<h2 id=\"quotes\">Quotes</h2>\n<p>“Double quotes” and ‘single quotes’</p>\n<h2 id=\"blockquotes\">Blockquotes</h2>\n<blockquote>\n<p>Blockquotes can also be nested…</p>\n<blockquote>\n<p>…by using additional greater-than signs right next to each other…</p>\n</blockquote>\n</blockquote>\n<h2 id=\"references\">References</h2>\n<p>An example containing a clickable reference<sup><a href=\"#user-content-fn-1\" id=\"user-content-fnref-1\" data-footnote-ref=\"\" aria-describedby=\"footnote-label\">1</a></sup> with a link to the source.</p>\n<p>Second example containing a reference<sup><a href=\"#user-content-fn-2\" id=\"user-content-fnref-2\" data-footnote-ref=\"\" aria-describedby=\"footnote-label\">2</a></sup> with a link to the source.</p>\n<p>If you check out this example in <code>src/content/post/markdown-elements/index.md</code>, you’ll notice that the references and the heading “Footnotes” are added to the bottom of the page via the <a href=\"https://github.com/remarkjs/remark-rehype#options\">remark-rehype</a> plugin.</p>\n<h2 id=\"lists\">Lists</h2>\n<p>Unordered</p>\n<ul>\n<li>Create a list by starting a line with <code>+</code>, <code>-</code>, or <code>*</code></li>\n<li>Sub-lists are made by indenting 2 spaces:\n<ul>\n<li>Marker character change forces new list start:\n<ul>\n<li>Ac tristique libero volutpat at</li>\n<li>Facilisis in pretium nisl aliquet</li>\n<li>Nulla volutpat aliquam velit</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Very easy!</li>\n</ul>\n<p>Ordered</p>\n<ol>\n<li>\n<p>Lorem ipsum dolor sit amet</p>\n</li>\n<li>\n<p>Consectetur adipiscing elit</p>\n</li>\n<li>\n<p>Integer molestie lorem at massa</p>\n</li>\n<li>\n<p>You can use sequential numbers…</p>\n</li>\n<li>\n<p>…or keep all the numbers as <code>1.</code></p>\n</li>\n</ol>\n<p>Start numbering with offset:</p>\n<ol start=\"57\">\n<li>foo</li>\n<li>bar</li>\n</ol>\n<h2 id=\"code\">Code</h2>\n<p>Inline <code>code</code></p>\n<p>Indented code</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>// Some comments</span></span>\n<span class=\"line\"><span>line 1 of code</span></span>\n<span class=\"line\"><span>line 2 of code</span></span>\n<span class=\"line\"><span>line 3 of code</span></span>\n<span class=\"line\"><span></span></span></code></pre>\n<p>Block code “fences”</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>Sample text here...</span></span>\n<span class=\"line\"><span></span></span></code></pre>\n<p>Syntax highlighting</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"js\"><code><span class=\"line\"><span style=\"color:#F97583\">var</span><span style=\"color:#B392F0\"> foo</span><span style=\"color:#F97583\"> =</span><span style=\"color:#F97583\"> function</span><span style=\"color:#E1E4E8\"> (</span><span style=\"color:#FFAB70\">bar</span><span style=\"color:#E1E4E8\">) {</span></span>\n<span class=\"line\"><span style=\"color:#F97583\">\treturn</span><span style=\"color:#E1E4E8\"> bar</span><span style=\"color:#F97583\">++</span><span style=\"color:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">};</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">console.</span><span style=\"color:#B392F0\">log</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#B392F0\">foo</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#79B8FF\">5</span><span style=\"color:#E1E4E8\">));</span></span>\n<span class=\"line\"></span></code></pre>\n<h3 id=\"expressive-code-examples\">Expressive code examples</h3>\n<p>Adding a title</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"js\"><code><span class=\"line\"><span style=\"color:#E1E4E8\">console.</span><span style=\"color:#B392F0\">log</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"Title example\"</span><span style=\"color:#E1E4E8\">);</span></span>\n<span class=\"line\"></span></code></pre>\n<p>A bash terminal</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#79B8FF\">echo</span><span style=\"color:#9ECBFF\"> \"A base terminal example\"</span></span>\n<span class=\"line\"></span></code></pre>\n<p>Highlighting code lines</p>\n<pre class=\"astro-code github-dark\" style=\"background-color:#24292e;color:#e1e4e8; overflow-x: auto;\" tabindex=\"0\" data-language=\"js\"><code><span class=\"line\"><span style=\"color:#F97583\">function</span><span style=\"color:#B392F0\"> demo</span><span style=\"color:#E1E4E8\">() {</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\tconsole.</span><span style=\"color:#B392F0\">log</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"this line is marked as deleted\"</span><span style=\"color:#E1E4E8\">);</span></span>\n<span class=\"line\"><span style=\"color:#6A737D\">\t// This line and the next one are marked as inserted</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">\tconsole.</span><span style=\"color:#B392F0\">log</span><span style=\"color:#E1E4E8\">(</span><span style=\"color:#9ECBFF\">\"this is the second inserted line\"</span><span style=\"color:#E1E4E8\">);</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#F97583\">\treturn</span><span style=\"color:#9ECBFF\"> \"this line uses the neutral default marker type\"</span><span style=\"color:#E1E4E8\">;</span></span>\n<span class=\"line\"><span style=\"color:#E1E4E8\">}</span></span>\n<span class=\"line\"></span></code></pre>\n<p><a href=\"https://expressive-code.com/\">Expressive Code</a> can do a ton more than shown here, and includes a lot of <a href=\"https://expressive-code.com/reference/configuration/\">customisation</a>.</p>\n<h2 id=\"tables\">Tables</h2>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Option</th><th>Description</th></tr></thead><tbody><tr><td>data</td><td>path to data files to supply the data that will be passed into templates.</td></tr><tr><td>engine</td><td>engine to be used for processing templates. Handlebars is the default.</td></tr><tr><td>ext</td><td>extension to be used for dest files.</td></tr></tbody></table>\n<p>Right aligned columns</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th align=\"right\">Option</th><th align=\"right\">Description</th></tr></thead><tbody><tr><td align=\"right\">data</td><td align=\"right\">path to data files to supply the data that will be passed into templates.</td></tr><tr><td align=\"right\">engine</td><td align=\"right\">engine to be used for processing templates. Handlebars is the default.</td></tr><tr><td align=\"right\">ext</td><td align=\"right\">extension to be used for dest files.</td></tr></tbody></table>\n<h2 id=\"images\">Images</h2>\n<p>Image in the same folder: <code>src/content/post/markdown-elements/logo.png</code></p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./logo.png&#x22;,&#x22;alt&#x22;:&#x22;Astro theme cactus logo&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Image in the aliased assets folder: <code>src/assets/about-astro.png</code></p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;@/assets/about-astro.png&#x22;,&#x22;alt&#x22;:&#x22;A cartoon cactus looking at the Astro.build logo&#x22;,&#x22;index&#x22;:0}\"></p>\n<h2 id=\"links\">Links</h2>\n<p><a href=\"https://markdown-it.github.io/\">Content from markdown-it</a></p>\n<section data-footnotes=\"\" class=\"footnotes\"><h2 class=\"sr-only\" id=\"footnote-label\">Footnotes</h2>\n<ol>\n<li id=\"user-content-fn-1\">\n<p>Reference first footnote with a return to content link. <a href=\"#user-content-fnref-1\" data-footnote-backref=\"\" aria-label=\"Back to reference 1\" class=\"data-footnote-backref\">↩</a></p>\n</li>\n<li id=\"user-content-fn-2\">\n<p>Second reference with a link. <a href=\"#user-content-fnref-2\" data-footnote-backref=\"\" aria-label=\"Back to reference 2\" class=\"data-footnote-backref\">↩</a></p>\n</li>\n</ol>\n</section>");
	

				const frontmatter = {"title":"A post of Markdown elements","description":"This post is for testing and listing a number of different markdown elements","publishDate":"22 Feb 2023","updatedDate":"22 Jan 2024","tags":["test","markdown"]};
				const file = "D:/forked-projs/beens/src/content/post/markdown-elements/index.md";
				const url = undefined;
				function rawContent() {
					return "\n## This is a H2 Heading\n\n### This is a H3 Heading\n\n#### This is a H4 Heading\n\n##### This is a H5 Heading\n\n###### This is a H6 Heading\n\n## Horizontal Rules\n\n---\n\n---\n\n---\n\n## Emphasis\n\n**This is bold text**\n\n_This is italic text_\n\n~~Strikethrough~~\n\n## Quotes\n\n\"Double quotes\" and 'single quotes'\n\n## Blockquotes\n\n> Blockquotes can also be nested...\n>\n> > ...by using additional greater-than signs right next to each other...\n\n## References\n\nAn example containing a clickable reference[^1] with a link to the source.\n\nSecond example containing a reference[^2] with a link to the source.\n\n[^1]: Reference first footnote with a return to content link.\n[^2]: Second reference with a link.\n\nIf you check out this example in `src/content/post/markdown-elements/index.md`, you'll notice that the references and the heading \"Footnotes\" are added to the bottom of the page via the [remark-rehype](https://github.com/remarkjs/remark-rehype#options) plugin.\n\n## Lists\n\nUnordered\n\n- Create a list by starting a line with `+`, `-`, or `*`\n- Sub-lists are made by indenting 2 spaces:\n  - Marker character change forces new list start:\n    - Ac tristique libero volutpat at\n    - Facilisis in pretium nisl aliquet\n    - Nulla volutpat aliquam velit\n- Very easy!\n\nOrdered\n\n1. Lorem ipsum dolor sit amet\n2. Consectetur adipiscing elit\n3. Integer molestie lorem at massa\n\n4. You can use sequential numbers...\n5. ...or keep all the numbers as `1.`\n\nStart numbering with offset:\n\n57. foo\n1. bar\n\n## Code\n\nInline `code`\n\nIndented code\n\n    // Some comments\n    line 1 of code\n    line 2 of code\n    line 3 of code\n\nBlock code \"fences\"\n\n```\nSample text here...\n```\n\nSyntax highlighting\n\n```js\nvar foo = function (bar) {\n\treturn bar++;\n};\n\nconsole.log(foo(5));\n```\n\n### Expressive code examples\n\nAdding a title\n\n```js title=\"file.js\"\nconsole.log(\"Title example\");\n```\n\nA bash terminal\n\n```bash\necho \"A base terminal example\"\n```\n\nHighlighting code lines\n\n```js title=\"line-markers.js\" del={2} ins={3-4} {6}\nfunction demo() {\n\tconsole.log(\"this line is marked as deleted\");\n\t// This line and the next one are marked as inserted\n\tconsole.log(\"this is the second inserted line\");\n\n\treturn \"this line uses the neutral default marker type\";\n}\n```\n\n[Expressive Code](https://expressive-code.com/) can do a ton more than shown here, and includes a lot of [customisation](https://expressive-code.com/reference/configuration/).\n\n## Tables\n\n| Option | Description                                                               |\n| ------ | ------------------------------------------------------------------------- |\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default.    |\n| ext    | extension to be used for dest files.                                      |\n\nRight aligned columns\n\n| Option |                                                               Description |\n| -----: | ------------------------------------------------------------------------: |\n|   data | path to data files to supply the data that will be passed into templates. |\n| engine |    engine to be used for processing templates. Handlebars is the default. |\n|    ext |                                      extension to be used for dest files. |\n\n## Images\n\nImage in the same folder: `src/content/post/markdown-elements/logo.png`\n\n![Astro theme cactus logo](./logo.png)\n\nImage in the aliased assets folder: `src/assets/about-astro.png`\n\n![A cartoon cactus looking at the Astro.build logo](@/assets/about-astro.png)\n\n## Links\n\n[Content from markdown-it](https://markdown-it.github.io/)\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"this-is-a-h2-heading","text":"This is a H2 Heading"},{"depth":3,"slug":"this-is-a-h3-heading","text":"This is a H3 Heading"},{"depth":4,"slug":"this-is-a-h4-heading","text":"This is a H4 Heading"},{"depth":5,"slug":"this-is-a-h5-heading","text":"This is a H5 Heading"},{"depth":6,"slug":"this-is-a-h6-heading","text":"This is a H6 Heading"},{"depth":2,"slug":"horizontal-rules","text":"Horizontal Rules"},{"depth":2,"slug":"emphasis","text":"Emphasis"},{"depth":2,"slug":"quotes","text":"Quotes"},{"depth":2,"slug":"blockquotes","text":"Blockquotes"},{"depth":2,"slug":"references","text":"References"},{"depth":2,"slug":"lists","text":"Lists"},{"depth":2,"slug":"code","text":"Code"},{"depth":3,"slug":"expressive-code-examples","text":"Expressive code examples"},{"depth":2,"slug":"tables","text":"Tables"},{"depth":2,"slug":"images","text":"Images"},{"depth":2,"slug":"links","text":"Links"},{"depth":2,"slug":"footnote-label","text":"Footnotes"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
