import { ActionRegistry, ComponentSchema } from "../dynamicPageRender/types/JsonSchema";
import { FormilyFieldSchema } from "../dynamicPageRender/types/JsonSchemaFormily";

/**
 * it is type defination of the component to formily field schema convert 
 */
export type ComponentConverter = (
  component: ComponentSchema,
  actionRegistry: ActionRegistry
) => FormilyFieldSchema | null;

/**
 * to store convert function based on the component type
 */
const registry = new Map<string, ComponentConverter>();

/**
 * function to register convert to some component type
 * use to support custom component
 * @param type 
 * @param converter 
 */
export function registerComponent(
  type: string,
  converter: ComponentConverter
) {
  registry.set(type, converter);
}

/**
 * function to get convert from register based on  component type
 * use to support custom component
 * @param type 
 * @returns 
 */
export function getComponentConverter(
  type: string
) {
  return registry.get(type);
}