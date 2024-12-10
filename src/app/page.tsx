import { PaginationSection } from '@/components/PaginationSection';
import { MoviesGrid } from '@/features/MoviesGrid';

const API_KEY = process.env.API_KEY;
const POSTS_PER_PAGE = 20;

const HomePage = async ({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) => {
  const genre = searchParams.genre || 'fetchTrending';
  const page = parseInt(searchParams?.page || '1', 10);

  const res = await fetch(
    `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'}?api_key=${API_KEY}&language=en_US&page=${page}`,
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

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
