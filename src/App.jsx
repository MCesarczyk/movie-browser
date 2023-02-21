import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { fetchConfiguration } from './commonSlice';
import Navbar from './core/Navbar';
import MoviesPage from './features/movies/MoviesPage';
import MoviePage from './features/movie/MoviePage';
import PeoplePage from "./features/people/PeoplePage";
import PersonPage from "./features/person/PersonPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchConfiguration());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HashRouter>
      <Navbar
        moviesPath={"/movies"}
        peoplePath={"/people"}
      />
      <Switch>
        <Route path="/movie/:id">
          <MoviePage />
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
    </HashRouter>
  );
};

export default App;