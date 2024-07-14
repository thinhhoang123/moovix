import { cn } from '@/lib/utils';

export function Typography({
  children,
  level = 'p',
  className,
}: {
  children: React.ReactNode;
  level?: string;
  className?: string;
}) {
  switch (level) {
    case 'h1':
      return (
        <h1
          className={cn(
            'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
            className ? className : null
          )}
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          className={cn(
            'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
            className ? className : null
          )}
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          className={cn(
            'scroll-m-20 text-2xl font-semibold tracking-tight',
            className ? className : null
          )}
        >
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4
          className={cn(
            'scroll-m-20 text-xl font-semibold tracking-tight',
            className ? className : null
          )}
        >
          {children}
        </h4>
      );
    case 'blockquote':
      return (
        <blockquote
          className={cn(
            'mt-6 border-l-2 pl-6 italic',
            className ? className : null
          )}
        >
          {children}
        </blockquote>
      );
    case 'code':
      return (
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          {children}
        </code>
      );
    case 'lead':
      return (
        <p
          className={cn(
            'text-xl text-muted-foreground',
            className ? className : null
          )}
        >
          {children}
        </p>
      );
    case 'large':
      return (
        <div
          className={cn('text-lg font-semibold', className ? className : null)}
        >
          {children}
        </div>
      );
    case 'small':
      return (
        <small
          className={cn(
            'text-sm font-medium leading-none',
            className ? className : null
          )}
        >
          {children}
        </small>
      );
    case 'muted':
      return (
        <p
          className={cn(
            'text-sm text-muted-foreground',
            className ? className : null
          )}
        >
          {children}
        </p>
      );
    default:
      return (
        <p className={cn('leading-7', className ? className : null)}>
          {children}
        </p>
      );
  }
}
