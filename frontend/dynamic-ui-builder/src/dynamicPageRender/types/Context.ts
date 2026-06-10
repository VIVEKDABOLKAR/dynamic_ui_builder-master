import { createContext, useContext } from 'react';

export interface ContextSchema {
    onNavigate?: (path: string) => void;
}


export const LibraryContext = createContext<ContextSchema>({});

export const useLibraryContext = () => useContext(LibraryContext);