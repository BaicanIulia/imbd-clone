import { PaginationSection } from '@/components/PaginationSection';
import { MoviesGrid } from '@/features/MoviesGrid';
import { getMovies } from '@/services/movies';

const API_KEY = process.env.API_KEY;
const POSTS_PER_PAGE = 20;

const HomePage = async ({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) => {
  const genre = searchParams.genre || 'fetchTrending';
  const page = parseInt(searchParams?.page || '1', 10);

  const data = await getMovies(genre, page);

  return (
    <div>
      <MoviesGrid movies={data.results} />
      <PaginationSection
        totalPosts={data.total_results}
        postsPerPage={POSTS_PER_PAGE}
        currentPage={page}
        firstLabel={'First'}
        lastLabel={'Last'}
      />
    </div>
  );
};

export default HomePage;
