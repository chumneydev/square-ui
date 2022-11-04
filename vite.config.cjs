/** @type {import('vite').UserConfig} */
export default {
	// ...
	root: "src",
	build: {
		outDir: "../dist",
		// Build out only the files that are needed for the app to run => square.js and square.css
		// Rename the files to be more descriptive
		// Minify css with no hashing or sourcemaps
		rollupOptions: {
			input: {
				square: resolve(__dirname, "src/square.js"),
			},
			output: {
				entryFileNames: "[name].js",
				chunkFileNames: "[name].js",
				assetFileNames: "[name].[ext]",
				manualChunks(id) {
					if (id.includes("node_modules")) {
						return "vendor";
					}
				},
			},
		},
	},
};
