import { g as getAllPosts } from '../../chunks/post_Cze9_F3X.mjs';
import { s as siteConfig } from '../../chunks/site.config_BbqTFfY7.mjs';
import { g as getFormattedDate } from '../../chunks/webmentions__NQzYERb.mjs';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { html } from 'satori-html';
export { renderers } from '../../renderers.mjs';

const RobotoMonoBold = "/_astro/roboto-mono-700.CAZppuP3.ttf";

const RobotoMono = "/_astro/roboto-mono-regular.Ceay284C.ttf";

const ogOptions = {
  // debug: true,
  fonts: [
    {
      data: Buffer.from(RobotoMono),
      name: "Roboto Mono",
      style: "normal",
      weight: 400
    },
    {
      data: Buffer.from(RobotoMonoBold),
      name: "Roboto Mono",
      style: "normal",
      weight: 700
    }
  ],
  height: 630,
  width: 1200
};
const markup = (title, pubDate) => html`<div tw="flex flex-col w-full h-full bg-[#1d1f21] text-[#c9cacc]">
		<div tw="flex flex-col flex-1 w-full p-10 justify-center">
			<p tw="text-2xl mb-6">${pubDate}</p>
			<h1 tw="text-6xl font-bold leading-snug text-white">${title}</h1>
		</div>
		<div tw="flex items-center justify-between w-full p-10 border-t border-[#2bbc89] text-xl">
			<div tw="flex items-center">
				<svg height="60" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 480">
					<path
						d="M181.334 93.333v-40L226.667 80v40l-45.333-26.667ZM136.001 53.333 90.667 26.667v426.666L136.001 480V53.333Z"
						fill="#B04304"
					></path>
					<path
						d="m136.001 119.944 45.333-26.667 45.333 26.667-45.333 26.667-45.333-26.667ZM90.667 26.667 136.001 0l45.333 26.667-45.333 26.666-45.334-26.666ZM181.334 53.277l45.333-26.666L272 53.277l-45.333 26.667-45.333-26.667ZM0 213.277l45.333-26.667 45.334 26.667-45.334 26.667L0 213.277ZM136 239.944l-45.333-26.667v53.333L136 239.944Z"
						fill="#FF5D01"
					></path>
					<path
						d="m136 53.333 45.333-26.666v120L226.667 120V80L272 53.333V160l-90.667 53.333v240L136 480V306.667L45.334 360V240l45.333-26.667v53.334L136 240V53.333Z"
						fill="#53C68C"
					></path>
					<path d="M45.334 240 0 213.334v120L45.334 360V240Z" fill="#B04304"></path>
				</svg>
				<p tw="ml-3 font-semibold">${siteConfig.title}</p>
			</div>
			<p>by ${siteConfig.author}</p>
		</div>
	</div>`;
async function GET(context) {
  const { pubDate, title } = context.props;
  const postDate = getFormattedDate(pubDate, {
    month: "long",
    weekday: "long"
  });
  const svg = await satori(markup(title, postDate), ogOptions);
  const png = new Resvg(svg).render().asPng();
  return new Response(png, {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Type": "image/png"
    }
  });
}
async function getStaticPaths() {
  const posts = await getAllPosts();
  return posts.filter(({ data }) => !data.ogImage).map((post) => ({
    params: { slug: post.slug },
    props: {
      pubDate: post.data.updatedDate ?? post.data.publishDate,
      title: post.data.title
    }
  }));
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	getStaticPaths
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
