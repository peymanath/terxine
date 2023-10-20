import React from 'react';

const IsClientCtx = React.createContext(false);

export const IsClientCtxProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isClient, setIsClient] = React.useState(false);
  React.useEffect(() => setIsClient(true), []);
  return <IsClientCtx.Provider value={isClient}>{children}</IsClientCtx.Provider>;
};

export const useIsClient = () => {
  return React.useContext(IsClientCtx);
};
