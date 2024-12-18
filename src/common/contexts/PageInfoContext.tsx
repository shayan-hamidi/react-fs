import { createContext, PropsWithChildren, useContext, useState } from 'react';

interface FsPageContextProps {
  title: string;
  setTitle: (v: string) => void;
  suffix: string;
  setSuffix: (v: string) => void;
  prefix: string;
  setPrefix: (v: string) => void;
}

const FsPageInfoContext = createContext<FsPageContextProps | undefined>(
  undefined
);

export const usePageInfo = () => {
  const context = useContext(FsPageInfoContext);
  if (!context) {
    throw new Error('usePageInfo must be used within a FsUserContextProvider');
  }
  return context;
};

const PageInfoContext = ({ children }: PropsWithChildren) => {
  const [title, setTitle] = useState('');
  const [suffix, setSuffix] = useState('');
  const [prefix, setPrefix] = useState('');

  return (
    <FsPageInfoContext.Provider
      value={{ prefix, setPrefix, setSuffix, setTitle, suffix, title }}
    >
      {children}
    </FsPageInfoContext.Provider>
  );
};

export default PageInfoContext;
