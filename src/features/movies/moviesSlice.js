import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    page: "1",
    results: [],
    total_pages: null,
    total_results: null,
    state: "idle",
    query: null,
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMoviesPage: (state, { payload: newPage }) => {
            state.page = newPage;
        },
        setMoviesQuery: (state, { payload: newQuery }) => {
            state.query = newQuery;
        },
        setMoviesList: (state, { payload: { results, total_pages, total_results, newState } }) => {
            state.results = results;
            state.total_pages = total_pages;
            state.total_results = total_results;
            state.state = newState;
        },
        setMoviesState: (state, { payload: newState }) => {
            state.state = newState;
        },
        clearMoviesList: () => initialState,
    },
});

export const {
    setMoviesPage,
    setMoviesQuery,
    setMoviesList,
    setMoviesState,
    clearMoviesList,
} = moviesSlice.actions;

const selectMovies = state => state.movies;

export const selectMoviesPage = state => selectMovies(state).page;
export const selectMoviesQuery = state => selectMovies(state).query;
export const selectMoviesState = state => selectMovies(state).state;
export const selectMoviesResults = state => selectMovies(state).results;
export const selectMoviesTotalPages = state => selectMovies(state).total_pages;
export const selectMoviesTotalResults = state => selectMovies(state).total_results;

export default moviesSlice.reducer;