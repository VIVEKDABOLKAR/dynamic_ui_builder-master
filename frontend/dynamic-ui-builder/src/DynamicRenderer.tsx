import React from 'react'
import {DynamicPageRenderEngine} from './dynamicPageRender/DynamicPageRenderEngine'
import type { DynamicPageSchema } from './dynamicPageRender/types/JsonSchema'
import { ContextSchema } from './dynamicPageRender/types/Context';

export interface DynamicRendererProps {
  schema: DynamicPageSchema;
  context: ContextSchema
  // data?: Record<string, any>;
}

export function DynamicRenderer({
  schema,
  context
}: DynamicRendererProps) {
  return (
    <DynamicPageRenderEngine
      jsonSchema={schema}
      context={context}
    />
  );
}
