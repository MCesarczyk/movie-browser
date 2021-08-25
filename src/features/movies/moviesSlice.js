import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    genres: [],
    details: [],
    page: 1,
    state: "loading"
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, { payload: movies }) => {
            state.movies = movies;
        },
        setGenres: (state, { payload: genres }) => {
            state.genres = genres;
        },
        setAppendMovieDetails: (state, { payload: details }) => {
            state.details.push(details);
        },
        setPage: (state, { payload: page }) => {
            state.page = page;
        },
        setStatus: (state, { payload: stateName }) => {
            state.state = stateName;
        },
    },
});

export const {
    setMovies,
    setGenres,
    setAppendMovieDetails,
    setPage,
    setStatus,
} = moviesSlice.actions;

export const selectMovieList = state => state.movies.movies;
export const selectGenres = state => state.movies.genres.genres;
export const selectMoviesDetails = state => state.movies.details;
export const selectMoviesState = state => state.movies.state;
export const selectPage = state => state.movies.page;

export default moviesSlice.reducer;