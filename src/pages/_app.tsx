import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import MainLayout from '@/components/layout/main-layout';
import { Toaster } from "@/components/ui/toaster";
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      <MainLayout>
        <Component {...pageProps} />
        <Toaster />
      </MainLayout>
    </ThemeProvider>
  );
}