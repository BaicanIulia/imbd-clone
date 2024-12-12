import { PaginationSection } from '@/components/PaginationSection';
import { MoviesGrid } from '@/features/MoviesGrid';
import { searchMovies } from '@/services/movies';

const POSTS_PER_PAGE = 8;

type Props = {
  params: Record<string, string>;
  searchParams: Record<string, string>;
};

export const SearchPage = async ({ params, searchParams }: Props) => {
  const page = parseInt(searchParams?.page || '1', 10);
  const search = params?.searchTerm;

  const data = await searchMovies(search, page);

  return (
    <div>
      {data.results && data.results.length === 0 && (
        <h1 className="text-center pt-6 ">No results found.</h1>
      )}
      <MoviesGrid movies={data.results} />
      <PaginationSection
        totalPosts={data.results?.length ?? 0}
        postsPerPage={POSTS_PER_PAGE}
        currentPage={page}
        firstLabel={'First'}
        lastLabel={'Last'}
      />
    </div>
  );
};

export default SearchPage;
