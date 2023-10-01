'use client';

import Link from 'next/link';
import { Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ModeToggle } from '../mode-toggle';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const headerItem = [
  {
    href: '#',
    item: 'Movies',
  },
  {
    href: '#',
    item: 'Products',
  },
  {
    href: '#',
    item: 'Customers',
  },
  {
    href: '#',
    item: 'Settings',
  },
];
export default function AppHeader() {
  const activeItem = 'text-primary font-semibold';
  const pathname = usePathname();
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 flex h-16 items-center gap-4 z-10 px-4 md:px-6 w-full transition ease-in-out delay-150',
        isScroll
          ? 'backdrop-blur bg-background/50 supports-[backdrop-filter]:bg-black/60'
          : ' bg-gradient-to-b from-black'
      )}
    >
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <div className="mx-auto grid w-full max-w-6xl gap-2">
            <h1 className="text-2xl font-bold text-white">Moovix</h1>
          </div>
        </Link>
        {headerItem.map((item) => {
          return (
            <Link
              href={item.href}
              key={item.href}
              className={cn(
                ' transition-colors hover:text-primary drop-shadow-2xl',
                pathname.includes(item.href) ? activeItem : 'text-white'
              )}
            >
              {item.item}
            </Link>
          );
        })}
      </nav>

      {/* Mobile view */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <div className="mx-auto grid w-full max-w-6xl gap-2">
                <h1 className="text-2xl font-bold">Moovix</h1>
              </div>
            </Link>

            {headerItem.map((item) => {
              return (
                <Link
                  href={item.href}
                  key={item.href}
                  className={cn(
                    'text-muted-foreground transition-colors hover:text-foreground',
                    pathname.includes(item.href) ? activeItem : 'text-white'
                  )}
                >
                  {item.item}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <ModeToggle />
      </div>
    </header>
  );
}