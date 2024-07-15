'use client';
import { ArrowUp } from 'lucide-react';
import { Button } from '../ui/button';
import useScroll from '@/hooks/useScroll';
import { cn } from '@/lib/utils';

export default function ScrollOnTop() {
  const isScroll = useScroll();
  return (
    <div
      className={cn(
        'fixed z-50 bottom-6 right-6 drop-shadow-2xl transition-opacity duration-300',
        isScroll ? 'show' : 'hidden'
      )}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={() => window.scrollTo(0, 0)}
      >
        <ArrowUp />
      </Button>
    </div>
  );
}
