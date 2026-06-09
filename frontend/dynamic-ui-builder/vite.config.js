import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    dts()
  ],

  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "DynamicUIBuilder",
      fileName: "index",
      formats: ["es", "cjs"]
    },

    rollupOptions: {
      external: [
        "react",
        "react-dom"
      ],

      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  }
});