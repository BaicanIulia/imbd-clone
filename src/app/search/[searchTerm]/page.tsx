import { PaginationSection } from '@/components/PaginationSection';
import { MoviesGrid } from '@/features/MoviesGrid';

const POSTS_PER_PAGE = 8;
type Props = {
  params: Record<string, string>;
  searchParams: Record<string, string>;
};
export const SearchPage = async ({ params, searchParams }: Props) => {
  const page = parseInt(searchParams?.page || '1', 10);
  const search = params?.searchTerm;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${search}&language=en_US&page=1&include_adult=false&page=${page}`,
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

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
