import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    movie: [],
    credits: [],
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
        setMovie: (state, { payload: movie }) => {
            state.movie = movie;
        },
        setCredits: (state, {payload: credits}) => {
            state.credits = credits;
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
        setState: (state, { payload: stateName }) => {
            state.state = stateName;
        },
    },
});

export const {
    setMovies,
    setMovie,
    setCredits,
    setGenres,
    setAppendMovieDetails,
    setPage,
    setState,
} = moviesSlice.actions;

export const selectMovieList = state => state.movies.movies;
export const selectGenres = state => state.movies.genres.genres;
export const selectMoviesDetails = state => state.movies.details;
export const selectMovieDetails = state => state.movies.movie;
export const selectMovieCast = state => state.movies.credits.cast;
export const selectMovieCrew = state => state.movies.credits.crew;
export const selectPage = state => state.movies.page;
export const selectMoviesState = state => state.movies.state;

export default moviesSlice.reducer;