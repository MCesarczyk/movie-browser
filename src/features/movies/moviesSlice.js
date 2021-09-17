import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    genres: [],
    movie: [],
    credits: [],
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        fetchMoviesList: () => { },
        clearMoviesList: () => { },
        setMoviesList: (state, { payload: movies }) => {
            state.movies = movies;
        },
        setMovieGenres: (state, { payload: genres }) => {
            state.genres = genres;
        },
        fetchMovieDetails: () => { },
        setMovieDetails: (state, { payload: movie }) => {
            state.movie = movie;
        },
        setMovieCredits: (state, { payload: credits }) => {
            state.credits = credits;
        },
    },
});

export const {
    fetchMoviesList,
    clearMoviesList,
    setMoviesList,
    setMovieCredits,
    fetchMovieDetails,
    setMovieDetails,
    setMovieGenres,
} = moviesSlice.actions;

const selectMoviesState = state => state.movies;
const selectMovieCredits = state => selectMoviesState(state).credits

export const selectMoviesList = state => selectMoviesState(state).movies;
export const selectGenres = state => selectMoviesState(state).genres.genres;
export const selectGenresList = state => selectMovieDetails(state).genres;
export const selectMovieDetails = state => selectMoviesState(state).movie;
export const selectMovieCast = state => selectMovieCredits(state).cast;
export const selectMovieCrew = state => selectMovieCredits(state).crew;

export default moviesSlice.reducer;