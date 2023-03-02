export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","models/koala.glb"]),
	mimeTypes: {".png":"image/png",".glb":"model/gltf-binary"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.8a7ca408.js","imports":["_app/immutable/entry/start.8a7ca408.js","_app/immutable/chunks/index.f98f3a93.js","_app/immutable/chunks/singletons.cabb284f.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.7deff75d.js","imports":["_app/immutable/entry/app.7deff75d.js","_app/immutable/chunks/index.f98f3a93.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
