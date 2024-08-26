import { AxiosInstance } from 'axios';
import { type ReactNode } from 'react';
import { getInstance } from '../http/getInstance';
import { PageContext } from './Context';

type PageProviderProps = {
  children: ReactNode;
  httpService: Array<(axios: AxiosInstance) => Record<string, any>>;
  entityName: string;
};

const PageProvider = ({
  children,
  entityName,
  httpService,
}: PageProviderProps) => {
  const { instance } = getInstance();
  const services = httpService.reduce(
    (acc, service) => ({ ...acc, ...service(instance) }),
    {}
  );
  return (
    <PageContext.Provider value={{ httpService: services, entityName }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;
