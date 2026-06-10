import { registerBuiltins }
    from "./registry/registerBuiltins";

//init component convert registery
registerBuiltins();

export { DynamicRenderer }
    from "./DynamicRenderer";
export type { DynamicRendererProps }
    from "./DynamicRenderer";

export type { ComponentSchema, DynamicPageSchema }
    from "./dynamicPageRender/types/JsonSchema";

export { registerComponent }
    from "./registry/componentRegistry";