import { createContext, useContext } from 'react';
import { AxiosPromise } from 'axios';

type PageContextType = {
  httpService: Record<string, AxiosPromise> | null;
  entityName: string | null;
};

export const PageContext = createContext<PageContextType>({
  httpService: null,
  entityName: null,
});

export const usePageContext = () => useContext(PageContext);
