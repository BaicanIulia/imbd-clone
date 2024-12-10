import { MoviesGrid } from '@/features/MoviesGrid';

type Props = {
  params: {
    searchTerm: string;
  };
};

export const SearchPage = async ({ params }: Props) => {
  const searchTerm = params.searchTerm;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en_US&page=1&include_adult=false`,
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
    </div>
  );
};

export default SearchPage;
