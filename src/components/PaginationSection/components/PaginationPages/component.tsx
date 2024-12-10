import {
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from '@/components/ui/Pagination';
import { cn } from '@/lib/utils';

export const PaginationPages = ({
  startEllipsis,
  endEllipsis,
  pages,
}: {
  startEllipsis: boolean;
  endEllipsis: boolean;
  pages: {
    number: number;
    isActive: boolean;
    href: string;
  }[];
}) => {
  return (
    <>
      {startEllipsis && (
        <PaginationItem className="hidden md:block">
          <PaginationEllipsis key="ellipsis-start" />
        </PaginationItem>
      )}
      {pages.map(({ number, isActive, href }) => (
        <PaginationItem
          key={number}
          className={cn('hidden md:block', isActive && 'block text-amber-500')}
        >
          <PaginationLink href={href} isActive={isActive} scroll={false}>
            {number}
          </PaginationLink>
        </PaginationItem>
      ))}
      {endEllipsis && (
        <PaginationItem className="hidden md:block">
          <PaginationEllipsis key="ellipsis-end" />
        </PaginationItem>
      )}
    </>
  );
};
