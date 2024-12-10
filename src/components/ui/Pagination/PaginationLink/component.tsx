import * as React from 'react';
import { cn } from '@/lib/utils';
import { ButtonProps, buttonVariants } from '@/components/ui/Button';
import Link from 'next/link';

type PaginationLinkProps = {
  isActive?: boolean;
  disabled?: boolean;
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<typeof Link>;

export const PaginationLink = ({
  className,
  isActive,
  disabled,
  size = 'icon',
  ...props
}: PaginationLinkProps) => (
  <Link
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      buttonVariants({
        variant: disabled ? 'disabled' : 'ghost',
        size,
      }),
      className,
      isActive && 'bg-accent-foreground text-accent',
    )}
    {...props}
  />
);
PaginationLink.displayName = 'PaginationLink';
