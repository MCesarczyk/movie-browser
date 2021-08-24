import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    genres: [],
    details: [],
    state: "loading"
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, { payload: movies }) => {
            state.movies = movies;
        },
        setMoviesState: (state, { payload: stateName }) => {
            state.state = stateName;
        },
        setGenres: (state, { payload: genres }) => {
            state.genres = genres;
        },
        setMovieDetails: (state, {payload: details}) => {
            state.details = details;
        },
    },
});

export const {
    fetchPopularMovies,
    setMovies,
    setMoviesState,
    setGenres,
    setMovieDetails,
} = moviesSlice.actions;

export const selectMovies = state => state.movies;
export const selectMoviesState = state => state.movies.state;
export const selectGenres = state => state.movies.genres;
export const selectMovieDetails = state => state.movies.details;

export default moviesSlice.reducer;