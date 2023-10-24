import React from 'react';

export const Badge: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='bg-error-exLight text-error text-caption-sm px-1 rounded-full'>{children}</div>
  );
};
