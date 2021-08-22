import React from 'react';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectMovies } from './features/movies/moviesSlice';
import { Container } from './common/Container';
import Navigation from './features/Navigation';
import MovieList from './features/movies/MoviesPage/MovieList';
import PeopleList from './features/people/PeoplePage/PeopleList';

function App() {
  const movies = useSelector(selectMovies);
  
  return (
    <HashRouter>
      <Container>
        <Navigation
          moviesPath={"/movies"}
          peoplePath={"/people"}
        />
        <Switch>
          <Route path="/movies">
            <MovieList />
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