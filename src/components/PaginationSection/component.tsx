'use client';

import {
  Pagination,
  PaginationContent,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/Pagination';
import { PaginationPages } from './components/PaginationPages';

// Starts from 1
const iterationArray = (length: number) =>
  Array.from({ length }, (_, i) => i + 1);

export function PaginationSection({
  totalPosts,
  postsPerPage,
  currentPage,
  firstLabel = 'First',
  lastLabel = 'Last',
  maxPageNum = 3,
}: Readonly<{
  totalPosts: number;
  postsPerPage: number;
  currentPage: number;
  firstLabel?: string;
  lastLabel?: string;
  maxPageNum?: number;
}>) {
  const pageNumbers = iterationArray(Math.ceil(totalPosts / postsPerPage));

  const pageNumLimit = Math.floor(maxPageNum / 2); // Current page should be in the middle if possible

  const activePages = pageNumbers.slice(
    Math.max(0, currentPage - 1 - pageNumLimit),
    Math.min(currentPage - 1 + pageNumLimit + 1, pageNumbers.length),
  );

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem className="mr-auto">
          <PaginationFirst
            label={firstLabel}
            href={`?${new URLSearchParams({ page: `${pageNumbers[0]}` })}`}
            disabled={currentPage === activePages[0]}
            scroll={false}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationPrevious
            href={`?${new URLSearchParams({ page: `${currentPage - 1}` })}`}
            disabled={currentPage === activePages[0]}
            scroll={false}
          />
        </PaginationItem>

        <PaginationPages
          startEllipsis={activePages[0] > 1}
          endEllipsis={activePages[activePages.length - 1] < pageNumbers.length}
          pages={activePages.map((page) => ({
            isActive: currentPage === page,
            number: page,
            href: `?${new URLSearchParams({ page: `${page}` })}`,
          }))}
        />

        <PaginationItem>
          <PaginationNext
            href={`?${new URLSearchParams({ page: `${currentPage + 1}` })}`}
            disabled={currentPage === activePages[activePages.length - 1]}
            scroll={false}
          />
        </PaginationItem>

        <PaginationItem className="ml-auto">
          <PaginationLast
            label={lastLabel}
            href={`?${new URLSearchParams({ page: `${pageNumbers[pageNumbers.length - 1]}` })}`}
            disabled={currentPage === activePages[activePages.length - 1]}
            scroll={false}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
