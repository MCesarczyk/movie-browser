import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    movie: [],
    credits: [],
    genres: [],
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
        setMovieCredits: (state, { payload: credits }) => {
            state.credits = credits;
        },
        setGenres: (state, { payload: genres }) => {
            state.genres = genres;
        },
    },
});

export const {
    setMovies,
    setMovie,
    setMovieCredits,
    setGenres,
} = moviesSlice.actions;

export const selectMovieList = state => state.movies.movies;
export const selectGenres = state => state.movies.genres.genres;
export const selectGenresList = state => state.movies.movie.genres;
export const selectMovieDetails = state => state.movies.movie;
export const selectMoviesDetails = state => state.movies.details;
export const selectMovieCast = state => state.movies.credits.cast;
export const selectMovieCrew = state => state.movies.credits.crew;

export default moviesSlice.reducer;