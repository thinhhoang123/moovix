'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ModeToggle } from '../mode-toggle';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import useScroll from '@/hooks/useScroll';
import SearchInput from './_components/search-input';

const headerItem = [
  {
    href: '/movie',
    item: 'Movies',
  },
  {
    href: '/tv',
    item: 'TV Shows',
  },
  {
    href: '/people',
    item: 'People',
  },
  {
    href: '#',
    item: 'Settings',
  },
];

export default function AppHeader() {
  const activeItem = 'text-primary font-semibold';
  const pathname = usePathname();
  const isScroll = useScroll();

  return (
    <header
      className={cn(
        'fixed top-0 flex h-16 items-center gap-4 z-50 px-4 md:px-6 w-full transition ease-in-out delay-150',
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
          <Image src="/moovix.svg" height={100} width={300} alt="moovix logo" />
        </Link>
        {headerItem.map((item) => {
          return (
            <Link
              href={item.href}
              key={item.item}
              className={cn(
                ' transition-colors hover:text-primary drop-shadow-2xl text-nowrap',
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
              href="/"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <Image
                src="/moovix.svg"
                height={100}
                width={200}
                alt="moovix logo"
              />
            </Link>

            {headerItem.map((item) => {
              return (
                <Link
                  href={item.href}
                  key={item.item}
                  className={cn(
                    'text-muted-foreground transition-colors hover:text-foreground',
                    pathname.includes(item.href) ? activeItem : ''
                  )}
                >
                  {item.item}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>

      {/* Right in header */}
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <SearchInput />
        <ModeToggle />
      </div>
    </header>
  );
}
