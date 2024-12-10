import * as React from 'react';
import { ChevronsLeftIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PaginationLink } from '../PaginationLink';

interface PaginationFirstProps
  extends React.ComponentProps<typeof PaginationLink> {
  label?: string;
}

export const PaginationFirst = ({
  className,
  label = 'First',
  ...props
}: PaginationFirstProps) => (
  <PaginationLink
    aria-label="Go to first page"
    size="lg"
    className={cn('gap-2.5 bg-transparent p-0 hover:bg-transparent', className)}
    {...props}
  >
    <ChevronsLeftIcon
      className="h-5 w-5"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeWidth={3}
    />
    <span className="uppercase">{label}</span>
  </PaginationLink>
);
PaginationFirst.displayName = 'PaginationFirst';
