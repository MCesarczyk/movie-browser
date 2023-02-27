import { ErrorBoundary } from "react-error-boundary";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";

import { Fallback } from "core/CorePage/ErrorPage/Fallback";
import { Navbar } from 'core/Navbar';
import { MoviesPage } from 'features/movies/MoviesPage';
import { MoviePage } from 'features/movie/MoviePage';
import { PeoplePage } from "features/people/PeoplePage";
import { PersonPage } from "features/person/PersonPage";


export const App = () => (
  <HashRouter>
    <Navbar
      moviesPath={"/movies"}
      peoplePath={"/people"}
    />
    <ErrorBoundary FallbackComponent={Fallback}>
      <Routes>
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/movies/:page" element={<MoviesPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/person/:id" element={<PersonPage />} />
        <Route path="/people/:page" element={<PeoplePage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/" element={<Navigate to="/movies" />} />
      </Routes>
    </ErrorBoundary>
  </HashRouter >
);
