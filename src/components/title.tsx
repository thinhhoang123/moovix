import { cn } from '@/lib/utils';
import { Typography } from './typo';

export default function Title({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <div className={cn('grid w-full max-w-6xl gap-2 my-2', className)}>
      <Typography level="h3">{title}</Typography>
    </div>
  );
}
