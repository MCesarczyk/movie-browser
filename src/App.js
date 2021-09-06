import React, { useEffect } from 'react';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { Container } from './common/Container';
import Navigation from './features/Navigation';
import MoviesPage from './features/movies/MoviesPage';
import { useDispatch } from 'react-redux';
import { fetchConfiguration } from './globalSlice';
// import PeopleList from './features/people/PeoplePage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchConfiguration());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HashRouter>
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
            {/* <PeopleList /> */}
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