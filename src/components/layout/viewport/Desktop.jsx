import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 768px)',
  });
  return <>{isDesktop && children}</>;
};
