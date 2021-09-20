import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
    genres: [],
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        fetchMoviesList: () => { },
        setMoviesList: (state, { payload: list }) => {
            state.list = list;
        },
        clearMoviesList: () => { },
        setMovieGenres: (state, { payload: genres }) => {
            state.genres = genres;
        },
    },
});

export const {
    fetchMoviesList,
    setMoviesList,
    clearMoviesList,
    setMovieGenres,
} = moviesSlice.actions;

const selectMoviesState = state => state.movies;

export const selectMoviesList = state => selectMoviesState(state).list;
export const selectMoviesGenres = state => selectMoviesState(state).genres;

export default moviesSlice.reducer;