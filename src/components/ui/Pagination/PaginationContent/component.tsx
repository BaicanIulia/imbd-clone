import * as React from 'react';
import { cn } from '@/lib/utils';

export const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      'flex flex-1 flex-row items-center justify-center gap-4 md:gap-6',
      className,
    )}
    {...props}
  />
));
PaginationContent.displayName = 'PaginationContent';
