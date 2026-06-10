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
      outDir: "dist"
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

        "@formily/core",
        "@formily/react",

        "@mui/material",
        "@mui/x-date-pickers",

        "@emotion/react",
        "@emotion/styled",

        "ag-grid-react",

        "react-router-dom",

        "axios",
        "dayjs"
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