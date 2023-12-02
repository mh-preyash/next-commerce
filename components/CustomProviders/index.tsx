'use client';
import { NextUIProvider } from '@nextui-org/react';

export const CustomProviders = ({ children }: any) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
