import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Movie } from "../interfaces/movie";
import { MovieList } from "./movie-list";

describe("Test MovieList component", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it("Renders movie list page correctly", () => {
    render(<MovieList movies={[]} />);
    const linkElement = screen.getByText(/movies/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("Renders all movies in the list", () => {
    const movies: Movie[] = [
      {
        title: "Movie 1",
        release_date: "2023/01/01",
        adult: false,
        genre_ids: [],
        id: 1,
        original_language: "esp",
        original_title: "Movie 1",
        overview: "Overview",
        popularity: 1,
        video: false,
        vote_average: 1,
        vote_count: 1,
        poster_path: "",
      },
      {
        title: "Movie 2",
        release_date: "2023/01/02",
        adult: false,
        genre_ids: [],
        id: 1,
        original_language: "esp",
        original_title: "Movie 2",
        overview: "Overview",
        popularity: 1,
        video: false,
        vote_average: 1,
        vote_count: 1,
        poster_path: "",
      },
    ];

    render(<MovieList movies={movies} />, { wrapper: MemoryRouter });

    const linkElement1 = screen.getByText(/movie 1/i);
    const linkElement2 = screen.getByText(/movie 2/i);
    expect(linkElement1).toBeInTheDocument();
    expect(linkElement2).toBeInTheDocument();
  });
});
