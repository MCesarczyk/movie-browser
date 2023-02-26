import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { Fallback } from "core/CorePage/ErrorPage/Fallback";
import { fetchConfiguration } from 'commonSlice';
import { Navbar } from 'core/Navbar';
import { MoviesPage } from 'features/movies/MoviesPage';
import { MoviePage } from 'features/movie/MoviePage';
import { PeoplePage } from "features/people/PeoplePage";
import { PersonPage } from "features/person/PersonPage";
import { useImageSizesService } from "services/imageSizesService";


export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchConfiguration());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { images } = useImageSizesService();

  return (
    <HashRouter>
      <Navbar
        moviesPath={"/movies"}
        peoplePath={"/people"}
      />
      <ErrorBoundary FallbackComponent={Fallback}>
        <Switch>
          <Route path="/movie/:id">
            <MoviePage images={images} />
          </Route>
          <Route path="/movies/:page">
            <MoviesPage />
          </Route>
          <Route path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/person/:id">
            <PersonPage />
          </Route>
          <Route path="/people/:page">
            <PeoplePage />
          </Route>
          <Route path="/people">
            <PeoplePage />
          </Route>
          <Route path="/">
            <Redirect to="/movies" />
          </Route>
        </Switch>
      </ErrorBoundary>
    </HashRouter>
  );
};
