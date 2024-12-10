import { MoviesGrid } from '@/features/MoviesGrid';

const API_KEY = process.env.API_KEY;

const HomePage = async ({
  searchParams,
}: {
  searchParams: { genre: string };
}) => {
  const genre = searchParams.genre || 'fetchTrending';

  const res = await fetch(
    `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'}?api_key=${API_KEY}&language=en_US&page=1`,
  );

  const data = await res.json();
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return (
    <div>
      <MoviesGrid movies={data.results} />
    </div>
  );
};

export default HomePage;
