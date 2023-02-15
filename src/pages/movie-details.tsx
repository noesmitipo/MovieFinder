import { Image, Space } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/use-api";
import { MovieDetails } from "../interfaces/movie-details";

const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";

export const MovieDetail = () => {
  const params = useParams();
  const id = params.movieId;
  const api = useApi();
  const [movie, setMovie] = useState<MovieDetails>();

  useEffect(() => {
    if (id === undefined) return;

    const fetchMovie = async () => {
      const movie = await api.getMovieDetails(id);
      setMovie(movie);
    };

    fetchMovie();
  }, []);

  return (
    <Space direction="vertical">
      <Image width={300} src={IMAGE_PATH + movie?.poster_path}></Image>
      <div
        style={{ fontWeight: "bold" }}
      >{`${movie?.title} (${movie?.release_date})`}</div>
      <div>{movie?.overview}</div>
      <div>Genres: {movie?.genres.map((genre) => genre.name + " ")}</div>
    </Space>
  );
};
