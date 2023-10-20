import React from 'react';
import { IsClientCtxProvider } from '@/hooks/useClientCtx';

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <IsClientCtxProvider>{children}</IsClientCtxProvider>;
};

export default Providers;
