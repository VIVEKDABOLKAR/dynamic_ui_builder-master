import { registerBuiltins } from "./registry/registerBuiltins";

//init component convert registery
registerBuiltins();

export { DynamicRenderer } from "./DynamicRenderer.js";



export type {
  DynamicRendererProps
} from "./DynamicRenderer.tsx";

export type {
  ComponentSchema,
  DynamicPageSchema
} from "./dynamicPageRender/types/JsonSchema";

export { registerComponent }
  from "./registry/componentRegistry";