import React from 'react';
import { HashRouter, Switch, Route, Redirect, NavLink } from "react-router-dom";
import { Header } from './features/Header';
import { MovieList } from './features/movies/MoviesPage/MovieList';
import PeopleList from './features/people/PeoplePage/PeopleList';

function App() {

  return (
    <HashRouter>
      <Header />
      <nav>
        <ul>
          <li>
            <NavLink to="/movies">
              Movies
              </NavLink>
          </li>
          <li>
            <NavLink to="/people">
              People
              </NavLink>
          </li>
        </ul>
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
      </nav>
    </HashRouter>
  )
}

export default App;