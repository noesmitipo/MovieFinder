import React from "react";
import { List } from "antd";
import { Movie } from "../interfaces/movie";
import { MovieListItem } from "./movie-item";

interface MovieListProps {
  movies: Movie[];
}

export const MovieList = (props: MovieListProps) => {
  const { movies } = props;

  return (
    <List
      header={
        <div>
          <b>Movies</b>
        </div>
      }
      bordered
      style={{ maxWidth: 600 }}
      dataSource={movies}
      renderItem={(movie) => {
        return <MovieListItem movie={movie} />;
      }}
    />
  );
};
