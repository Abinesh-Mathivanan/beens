import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_B2GGS4-m.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_Cbj-jED2.mjs';
export { renderers } from '../renderers.mjs';

const experiences = [
	{
		title: "Machine Learning Engineer",
		description: [
			"Built a lot of stuff around CV using YOLO and OpenCV.",
			"Implemented Hybrid model such as SVM + HMM for text detection systems."
		],
		startDate: " Apr 2023",
		endDate: "Sep 2023",
		company: "Artizence"
	},
	{
		title: "Deep Learning Engineer",
		description: [
			"Designed and implemented deep learning models using Pytorch and Keras for brain-inspired hardware interface for emotional understanding in robots. Initially developed with 200k parameters, and later scaled."
		],
		startDate: "May 2022",
		endDate: "Nov 2022",
		company: "Neurala Vox AI"
	},
	{
		title: "Software Engineering Intern",
		description: [
			"Contributed to simulating 3D models of the cube-sat and programmed the basic propulsion system using C++, resulting in 43% increased efficiency and programmed analytical systems in Julia and simulation graphs in Python Matplotlib."
		],
		startDate: "Nov 2021",
		endDate: "Apr 2022",
		company: "Helix Space Organization"
	}
];
const projects = [
	{
		name: "Siphus Cosmo-classifier",
		description: "Lambda Cosmology classifier using Cosmology Inspired Neural Networks. Built a duplicated dataset of 70,000 samples using ReACT cosmo software on 5 different cosmology models and trained using 250k parameters",
		image: "/siphus-cosmo.png"
	},
	{
		name: "In-love.js",
		description: "In-love.js, a lightweight JavaScript library that adds delightful interactive animations to your web pages. Impress your CS crush the way nobody had done before.",
		image: "/in-love.js.png",
		github: "https://abinesh-mathivanan.github.io/inlove-docs.io/#/"
	},
	{
		name: "Julia Snippets",
		description: "Efficiently write and navigate through code with ease using this comprehensive collection of code snippets for Julia.",
		image: "/julia.jfif",
		github: "https://marketplace.visualstudio.com/items?itemName=beens.julia-snippets"
	},
	{
		name: "TemplateHub",
		description: "Templatehub is a platform that hosts meme templates from movies for free.",
		image: "/th-interface.png",
		github: "https://github.com/Abinesh-Mathivanan/Templatehub"
	}
];
const stack = [
	{
		src: "/logos/astro.svg",
		alt: "AstroJS Logo"
	},
	{
		src: "/logos/vercel.svg",
		alt: "Vercel Logo"
	},
	{
		src: "/logos/tailwindcss.svg",
		alt: "TailwindCSS Logo"
	},
	{
		src: "/logos/typescript.svg",
		alt: "TypeScript Logo"
	},
	{
		src: "/logos/css.svg",
		alt: "CSS Logo"
	},
	{
		src: "/logos/html5.svg",
		alt: "HTML Logo"
	},
	{
		src: "/logos/astro.svg",
		alt: "AstroJS Logo"
	},
	{
		src: "/logos/vercel.svg",
		alt: "Vercel Logo"
	},
	{
		src: "/logos/tailwindcss.svg",
		alt: "TailwindCSS Logo"
	},
	{
		src: "/logos/typescript.svg",
		alt: "TypeScript Logo"
	},
	{
		src: "/logos/css.svg",
		alt: "CSS Logo"
	},
	{
		src: "/logos/html5.svg",
		alt: "HTML Logo"
	}
];
const data = {
	experiences: experiences,
	projects: projects,
	stack: stack
};

const $$About = createComponent(($$result, $$props, $$slots) => {
  const meta = {
    title: "About"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$Base, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-10 space-y-6"> <div class="flex items-center justify-between"> <h1 class="title">About</h1> <button class="rounded-sm border px-4 py-2" onclick="window.open('/src/data/abinesh_resume.pdf', '_blank')" style="border-color: var(--theme-heading);"> My Resume </button> </div> <div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-2"> ${data.experiences.map((experience) => renderTemplate`<div class="rounded-lg border p-4 shadow-md" style="border-color: var(--theme-heading);"> <h2 class="text-lg font-semibold mb-1">${experience.title}</h2> <p class="mt-1 text-base font-medium text-accent mb-1"> ${experience.company} </p> <p class="mt-1 text-sm mb-3"> ${experience.startDate} - ${experience.endDate} </p> <ul class="mt-2 list-inside list-disc text-sm"> ${Array.isArray(experience.description) ? experience.description.map((point) => renderTemplate`<li>${point}</li>`) : renderTemplate`<li>${experience.description}</li>`} </ul> </div>`)} </div> </div> <div class="space-y-6"> <h1 class="title" style="color: var(--theme-heading);">Projects</h1> <div class="flex flex-row gap-4 overflow-x-auto p-4"> <div class="flex flex-row gap-4"> ${data.projects.map((projects) => renderTemplate`<div class="min-w-[400px] max-w-[500px] rounded-lg border p-4 shadow-md" style="border-color: var(--theme-heading);"> <h2 class="text-lg font-semibold text-accent">${projects.name} </h2> <p class="mt-4 text-sm">${projects.description}</p> <a class="mt-4 inline-block w-fit rounded border px-3 py-1"${addAttribute(projects.github, "href")} rel="noopener noreferrer" style="border-color: var(--theme-heading);" target="_blank">
GitHub
</a> <img${addAttribute(projects.name, "alt")} class="w-50 mx-auto mt-4 h-40 rounded-lg object-cover"${addAttribute(projects.image, "src")}> </div>`)} </div> </div> </div> ` })}`;
}, "D:/forked-projs/beens/src/pages/about.astro", void 0);

const $$file = "D:/forked-projs/beens/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
