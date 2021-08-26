import React from 'react';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Container } from './common/Container';
import Navigation from './features/Navigation';
import MoviesPage from './features/movies/MoviesPage';
import PeopleList from './features/people/PeoplePage';
import MoviePage from './features/movies/MoviePage';

function App() {
  return (
    <HashRouter>
      <Container>
        <Navigation />
        <Switch>
          <Route path="/movies/:id">
            <MoviePage />
          </Route>
          <Route path="/movies">
            <MoviesPage />
          </Route>
          <Route path="/people">
            <PeopleList />
          </Route>
          <Route path="/">
            <Redirect to="/movies" />
          </Route>
        </Switch>
      </Container>
    </HashRouter>
  );
};

export default App;