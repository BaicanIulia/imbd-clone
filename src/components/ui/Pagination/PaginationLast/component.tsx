import * as React from 'react';
import { ChevronsRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PaginationLink } from '../PaginationLink';

interface PaginationLastProps
  extends React.ComponentProps<typeof PaginationLink> {
  label?: string;
}

export const PaginationLast = ({
  className,
  label = 'Last',
  ...props
}: PaginationLastProps) => (
  <PaginationLink
    aria-label="Go to last page"
    size="lg"
    className={cn('gap-2.5 bg-transparent p-0 hover:bg-transparent', className)}
    {...props}
  >
    <span className="uppercase">{label}</span>
    <ChevronsRightIcon
      className="h-5 w-5"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeWidth={3}
    />
  </PaginationLink>
);
PaginationLast.displayName = 'PaginationLast';
