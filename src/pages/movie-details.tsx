import { Image, Space } from "antd";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useApi } from "../hooks/use-api";
import { MovieDetails } from "../interfaces/movie-details";

const IMAGE_PATH = import.meta.env.VITE_IMAGE_PATH;

export const MovieDetail = () => {
  const params = useParams();
  const id = params.movieId;
  const api = useApi();
  const [movie, setMovie] = useState<MovieDetails>();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (id === undefined) {
      setError(true);
      return;
    }

    const fetchMovie = async () => {
      try {
        const movie = await api.getMovieDetails(id);
        setMovie(movie);
        setError(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchMovie();
  }, []);

  return (
    <>
      {error && <div>Movie not found</div>}
      {!error && (
        <Space direction="vertical">
          <Image width={300} src={IMAGE_PATH + movie?.poster_path}></Image>
          <div
            style={{ fontWeight: "bold" }}
          >{`${movie?.title} (${movie?.release_date})`}</div>
          <div>{movie?.overview}</div>
          <div>
            Genres:{" "}
            {movie?.genres.map(
              (genre, index) =>
                genre.name + (index < movie.genres.length - 1 ? ", " : "")
            )}
          </div>
        </Space>
      )}
    </>
  );
};
