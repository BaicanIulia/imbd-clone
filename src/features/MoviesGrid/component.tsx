import { Movie } from '@/types';

type MoviesGridProps = {
  movies: Movie[];
};

export const MoviesGrid = ({ movies }: MoviesGridProps) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
        </div>
      ))}
    </div>
  );
};
