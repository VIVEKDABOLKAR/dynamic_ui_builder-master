import React, { useMemo } from 'react';
import { FormProvider } from '@formily/react';

import { convertToFormilySchema } from './JsonConvert';
import { createForm } from '@formily/core';

import { SchemaField } from './formily/SchemaField';
import { PageSchemaContext } from './context/PageSchemaContext';
import { DynamicPageSchema } from './types/JsonSchema';

interface DynamicPageRenderEngineProps {
  jsonSchema: DynamicPageSchema;
}

export function DynamicPageRenderEngine({
  jsonSchema,
}: DynamicPageRenderEngineProps): any {
  const formilySchema = useMemo(
    () => convertToFormilySchema(jsonSchema),
    [jsonSchema]
  );

  const form = useMemo(() => createForm(), []);

  return (
    <div className="bg-white text-black m-2 p-2">
      <FormProvider form={form}>
        <PageSchemaContext.Provider value={formilySchema}>
          <SchemaField schema={formilySchema} />
        </PageSchemaContext.Provider>
      </FormProvider>
    </div>
  );
}