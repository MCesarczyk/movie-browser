import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    movie: [],
    genres: [],
    details: [],
    page: 1,
    totalPages: 1,
    state: "loading",
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, { payload: movies }) => {
            state.movies = movies;
        },
        setMovie: (state, { payload: movie }) => {
            state.movie = movie;
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
        setTotalPages: (state, { payload: totalPages }) => {
            state.totalPages = totalPages;
        },
        setState: (state, { payload: stateName }) => {
            state.state = stateName;
        },
    },
});

export const {
    setMovies,
    setMovie,
    setGenres,
    setAppendMovieDetails,
    setPage,
    setTotalPages,
    setState,
} = moviesSlice.actions;

export const selectMovieList = state => state.movies.movies;
export const selectGenres = state => state.movies.genres.genres;
export const selectMoviesDetails = state => state.movies.details;
export const selectMovieDetails = state => state.movies.movie;
export const selectPage = state => state.movies.page;
export const selectTotalPages = state => state.movies.totalPages;
export const selectMoviesState = state => state.movies.state;

export default moviesSlice.reducer;