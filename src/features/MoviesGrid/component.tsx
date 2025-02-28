import { Card } from '@/components/Card';
import { Movie } from '@/types';

type MoviesGridProps = {
  movies: Movie[];
};

export const MoviesGrid = ({ movies }: MoviesGridProps) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-7xl mx-auto py-4">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
