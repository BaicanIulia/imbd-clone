import * as React from 'react';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';

export const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<'span'>) => (
  <span
    aria-hidden
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <DotsHorizontalIcon className="h-4 w-4" />
  </span>
);
PaginationEllipsis.displayName = 'PaginationEllipsis';
