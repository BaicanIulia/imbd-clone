import * as React from 'react';
import { ChevronRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PaginationLink } from '../PaginationLink/component';

type PaginationNextProps = {
  disabled?: boolean;
} & React.ComponentProps<typeof PaginationLink>;

export const PaginationNext = ({
  className,
  disabled,
  ...props
}: PaginationNextProps) => (
  <PaginationLink
    aria-label="Go to next page"
    className={cn('gap-1', className)}
    disabled={disabled}
    {...props}
  >
    <ChevronRightIcon
      className="h-5 w-5"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeWidth={3}
    />
  </PaginationLink>
);
PaginationNext.displayName = 'PaginationNext';
