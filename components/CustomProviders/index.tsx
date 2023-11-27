'use client';
import { NextUIProvider } from '@nextui-org/react';

export const CustomProviders = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
