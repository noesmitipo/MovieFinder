import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Movie } from "../interfaces/movie";
import { MovieListItem } from "./movie-item";

describe("Test MovieListItem component", () => {
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

  it("Renders movie item", () => {
    const movie: Movie = {
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
    };

    render(<MovieListItem movie={movie} />, { wrapper: MemoryRouter });

    const linkElement1 = screen.getByText(/movie 1/i);
    const linkElement2 = screen.getByText(/2023/i);
    expect(linkElement1).toBeInTheDocument();
    expect(linkElement2).toBeInTheDocument();
  });
});
