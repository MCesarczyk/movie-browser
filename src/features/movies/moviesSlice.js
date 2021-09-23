import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    results: [],
    total_pages: null,
    total_results: null,
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        fetchMoviesList: () => { },
        setMoviesList: (state,
            {
                payload: {
                    results,
                    total_pages,
                    total_results,
                }
            }) => {
            state.results = results;
            state.total_pages = total_pages;
            state.total_results = total_results;
        },
        clearMoviesList: () => { },
    },
});

export const {
    fetchMoviesList,
    setMoviesList,
    clearMoviesList,
    setState,
} = moviesSlice.actions;

const selectMovies = state => state.movies;

export const selectMoviesList = state => selectMovies(state).results;
export const selectTotalPages = state => selectMovies(state).total_pages;
export const selectTotalResults = state => selectMovies(state).total_results;

export default moviesSlice.reducer;