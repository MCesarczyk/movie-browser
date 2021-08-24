import React from 'react';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Container } from './common/Container';
import Navigation from './features/Navigation';
import MoviesPage from './features/movies/MoviesPage';
import PeopleList from './features/people/PeoplePage';
import ErrorPage from './common/ErrorPage';

function App() {
  return (
    <HashRouter>
        <ErrorPage />
      <Container>
        <Navigation
          moviesPath={"/movies"}
          peoplePath={"/people"}
        />
        <Switch>
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