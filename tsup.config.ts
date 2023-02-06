import { defineConfig } from "tsup";

export default defineConfig([
	{
		entry: ["./src/index.ts"],
		format: ["cjs", "esm"],
		outDir: "dist",
		outExtension({ format }) {
			return {
				js: `.${format === "cjs" ? "node.cjs" : "node.mjs"}`,
			};
		},
		target: "node16",
	},
	{
		entry: ["./src/index.ts"],
		format: ["iife"],
		outDir: "dist",
		outExtension() {
			return {
				js: ".browser.js",
			};
		},
		target: ["es2020", "chrome80", "edge80", "firefox79", "safari15"],
	},
]);
