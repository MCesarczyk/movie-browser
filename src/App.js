import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from './features/Navigation';
import MoviesPage from './features/movies/MoviesPage';
import MoviePage from './features/movies/MoviePage';
import PeoplePage from "./features/people/PeoplePage";
import PersonPage from "./features/people/PersonPage";

function App() {
  return (
    <HashRouter>
      <Navigation
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