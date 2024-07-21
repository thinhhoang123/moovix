import { ReactNode } from 'react';
import AppHeader from './app-header';
import ScrollOnTop from './scroll-on-top';
import AppFooter from './app-footer';

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <ScrollOnTop />
      <AppHeader />
      <main className="flex flex-1 flex-col bg-muted/40 md:gap-8 pb-10">
        {children}
      </main>
      <AppFooter />
    </div>
  );
}
