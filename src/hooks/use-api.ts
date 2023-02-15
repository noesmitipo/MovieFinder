import { Movie } from "../interfaces/movie";
import { MovieDetails } from "../interfaces/movie-details";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

interface SearchMoviesResponse {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export const useApi = () => {
  const searchMovies = async (text: string): Promise<Movie[]> => {
    const response = await fetch(
      `${API_URL}search/movie?api_key=${API_KEY}&query=${text}`
    );

    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    return (data as SearchMoviesResponse).results;
  };

  const getMovieDetails = async (id: string): Promise<MovieDetails> => {
    const response = await fetch(`${API_URL}movie/${id}?api_key=${API_KEY}`);
    console.log(response);
    if (!response.ok) {
      throw Error("Movie not found");
    }

    const data = await response.json();
    return data as MovieDetails;
  };

  return {
    searchMovies,
    getMovieDetails,
  };
};
