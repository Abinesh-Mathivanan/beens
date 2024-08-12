const id = "cover-image/index.md";
						const collection = "post";
						const slug = "cover-image";
						const body = "";
						const data = {coverImage:{alt:"Astro build wallpaper",src:
						new Proxy({"src":"/_astro/cover.C1CigIB6.png","width":1440,"height":810,"format":"png","fsPath":"D:/forked-projs/beens/src/content/post/cover-image/cover.png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/forked-projs/beens/src/content/post/cover-image/cover.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/forked-projs/beens/src/content/post/cover-image/cover.png");
							return target[name];
						}
					})
					},description:"This post is an example of how to add a cover/hero image",draft:false,previewImages:[],publishDate:new Date(1688409000000),tags:["test","image"],title:"Example Cover Image",updatedDate:new Date(1691951400000)};
						const _internal = {
							type: 'content',
							filePath: "D:/forked-projs/beens/src/content/post/cover-image/index.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
