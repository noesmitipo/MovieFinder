import { Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/main-page";
import { MovieDetail } from "./pages/movie-details";
import { NotFound } from "./pages/not-found";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/movies/:movieId" element={<MovieDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
