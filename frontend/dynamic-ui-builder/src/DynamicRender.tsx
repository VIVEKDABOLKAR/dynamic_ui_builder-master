import React from 'react'
import {DynamicPageRenderEngine} from './dynamicPageRender/DynamicPageRenderEngine'
import { DynamicPageSchema } from './dynamicPageRender/types/JsonSchema'

export interface DynamicRendererProps {
  schema: DynamicPageSchema;
  data?: Record<string, any>;
}

export function DynamicRenderer({
  schema,
  data
}: DynamicRendererProps) {
  return (
    <DynamicPageRenderEngine
      jsonSchema={schema}
    //   data={data}
    />
  );
}
