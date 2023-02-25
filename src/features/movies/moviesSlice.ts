import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "store";
import { MovieResult } from "./interfaces";


interface InitialStateProps {
    page: string;
    results: MovieResult[],
    total_pages: number | null;
    total_results: number | null;
    state: string;
    query: string | null;
};

const initialState: InitialStateProps = {
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

const selectMovies = (state: RootState) => state.movies;

export const selectMoviesPage = (state: RootState): string => selectMovies(state).page;
export const selectMoviesQuery = (state: RootState): string | null => selectMovies(state).query;
export const selectMoviesState = (state: RootState):string => selectMovies(state).state;
export const selectMoviesResults = (state: RootState):MovieResult[] => selectMovies(state).results;
export const selectMoviesTotalPages = (state: RootState):number | null => selectMovies(state).total_pages;
export const selectMoviesTotalResults = (state: RootState):number | null => selectMovies(state).total_results;

export default moviesSlice.reducer;