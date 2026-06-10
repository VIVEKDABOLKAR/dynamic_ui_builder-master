import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
      outDir: "dist",
      entryRoot: "src",
      tsconfigPath: "./tsconfig.json"


    })
  ],

  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "DynamicUIBuilder",
      formats: ["es"],
      fileName: () => "index.js"
    },

    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",

        "@formily/core",
        "@formily/react",

        "@mui/material",
        "@mui/x-date-pickers",

        "@emotion/react",
        "@emotion/styled",

        "ag-grid-react",
        "ag-grid-community",

        "react-router-dom",
      ],

      output: {
        preserveModules: false,
        exports: "named"
      }
    },

    sourcemap: false,
    emptyOutDir: true,
    minify: true
  }
});