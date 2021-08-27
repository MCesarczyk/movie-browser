import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    genres: [],
    state: "idle"
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        applicationStart: (state) => {
            state.state = "loading";
        },
        setMovies: (state, { payload: movies }) => {
            state.movies = movies;
        },
        setGenres: (state, { payload: genres }) => {
            state.genres = genres;
        },
        setMoviesState: (state, { payload: stateName }) => {
            state.state = stateName;
        },
    },
});

export const {
    applicationStart,
    setMovies,
    setGenres,
    setMoviesState,
} = moviesSlice.actions;

export const selectMovies = state => state.movies;
export const selectState = state => state.movies.state;
export const selectGenres = state => state.movies.genres;

export default moviesSlice.reducer;