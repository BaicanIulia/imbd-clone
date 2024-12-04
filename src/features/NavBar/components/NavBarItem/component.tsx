'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

type NavBarItemProps = {
  title: string;
  param: string;
};

const getSelectedLinkClasses = (genre: string | null, param: string) => {
  if (genre === param) {
    return 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg';
  }
};

export const NavBarItem = ({ title, param }: NavBarItemProps) => {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');

  return (
    <div>
      <Link
        className={cn(
          'hover:text-amber-600 font-semibold',
          getSelectedLinkClasses(genre, param),
        )}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
};
