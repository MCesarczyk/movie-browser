import React from 'react';
import { HashRouter, Switch, Route, Redirect, NavLink } from "react-router-dom";
import { MovieList } from './features/movies/MoviesPage/MovieList';
import PeopleList from './features/people/PeoplePage/PeopleList';
import { Navigation } from './features/Navigation';

function App() {

  return (
    <HashRouter>
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
    </HashRouter>
  )
}

export default App;