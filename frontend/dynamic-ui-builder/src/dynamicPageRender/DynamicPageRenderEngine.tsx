import React, { useMemo } from 'react';
import { FormProvider } from '@formily/react';
import type { ISchema } from '@formily/react';

import { convertToFormilySchema } from './JsonConvert';
import { createForm } from '@formily/core';

import { SchemaField } from './formily/SchemaField';
import { PageSchemaContext } from './context/PageSchemaContext';
import type { DynamicPageSchema } from './types/JsonSchema';
import { ContextSchema, LibraryContext } from './types/Context';


import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface DynamicPageRenderEngineProps {
    jsonSchema: DynamicPageSchema;
    context: ContextSchema
    data?: Record<string, any>;
}

export function DynamicPageRenderEngine({
    jsonSchema,
    context,
    data,
}: DynamicPageRenderEngineProps): any {
    const formilySchema = useMemo(
        () => convertToFormilySchema(jsonSchema),
        [jsonSchema]
    );

    const form = useMemo(() => createForm(), []);

    return (
        <LibraryContext.Provider value={context}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div className="bg-white text-black m-2 p-2">
                    <FormProvider form={form}>
                        <PageSchemaContext.Provider value={formilySchema as any}>
                            <SchemaField schema={formilySchema as any} />
                        </PageSchemaContext.Provider>
                    </FormProvider>
                </div>
            </LocalizationProvider>
        </LibraryContext.Provider>
    );
}