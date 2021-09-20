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
    },
});

export const {
    fetchMoviesList,
    setMoviesList,
    clearMoviesList,
} = moviesSlice.actions;

const selectMoviesState = state => state.movies;

export const selectMoviesList = state => selectMoviesState(state).list;

export default moviesSlice.reducer;