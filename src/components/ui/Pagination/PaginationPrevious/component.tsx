import * as React from 'react';
import { ChevronLeftIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PaginationLink } from '../PaginationLink';

type PaginationPreviousProps = {
  disabled?: boolean;
} & React.ComponentProps<typeof PaginationLink>;

export const PaginationPrevious = ({
  className,
  disabled,
  ...props
}: PaginationPreviousProps) => (
  <PaginationLink
    aria-label="Go to previous page"
    className={cn('gap-1', className)}
    disabled={disabled}
    {...props}
  >
    <ChevronLeftIcon
      className="h-5 w-5"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeWidth={3}
    />
  </PaginationLink>
);
PaginationPrevious.displayName = 'PaginationPrevious';
