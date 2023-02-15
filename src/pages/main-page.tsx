import { Input, Space } from "antd";
import { useCallback, useState } from "react";
import { MovieList } from "../components/movie-list";
import { useApi } from "../hooks/use-api";
import { Movie } from "../interfaces/movie";

const { Search } = Input;

export const MainPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const api = useApi();

  const onSearch = useCallback(
    async (value: string) => {
      const foundMovies = await api.searchMovies(value);
      setMovies(foundMovies);
    },
    [api]
  );

  return (
    <Space direction="vertical">
      <Search
        placeholder="Type a movie title"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
      <MovieList movies={movies} />
    </Space>
  );
};
