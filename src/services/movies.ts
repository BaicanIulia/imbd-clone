const API_KEY = process.env.API_KEY;
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en_US&page=1&include_adult=false`;
const GET_URL = `https://api.themoviedb.org/3`;

export async function getMovies(genre: string, page: number) {
  const response = await fetch(
    `${GET_URL}${genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'}?api_key=${API_KEY}&language=en_US&page=${page}`,
  );
  const data = response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return data;
}

export async function searchMovies(search: string, page: number) {
  const response = await fetch(`${SEARCH_URL}&query=${search}&page=${page}`);
  const data = response.json();

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return data;
}
