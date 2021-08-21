import React from 'react';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { MovieList } from './features/movies/MoviesPage/MovieList';
import { Container } from './common/Container';
import PeopleList from './features/people/PeoplePage/PeopleList';
import { Navigation } from './features/Navigation';

function App() {
  return (
    <HashRouter>
      <Container>  
        <Navigation />
          <Switch>
          <Route path="/movies">
            <MovieList/>
          </Route>
          <Route path="/people">
            <PeopleList/>
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