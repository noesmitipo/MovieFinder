import { Image, Space } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/use-api";
import { MovieDetails } from "../interfaces/movie-details";
import { getImagePath } from "../utils";

const IMAGE_PATH = getImagePath();

export const MovieDetail = () => {
  const [movie, setMovie] = useState<MovieDetails>();
  const [error, setError] = useState(false);
  const api = useApi();

  const params = useParams();
  const id = params.movieId;

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
