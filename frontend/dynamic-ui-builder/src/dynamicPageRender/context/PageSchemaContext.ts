import { createContext } from 'react';
import type { ISchema } from '@formily/json-schema';

export const PageSchemaContext = createContext<ISchema | null>(null);