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
        fetchPopularMovies: () => { },
        setPopularMovies: (state, { payload: movies }) => {
            state.movies = movies;
        },
        fetchMovieGenres: () => { },
        setMovieGenres: (state, { payload: genres }) => {
            state.genres = genres;
        },
        fetchMovieDetails: () => { },
        setMovieDetails: (state, { payload: movie }) => {
            state.movie = movie;
        },
        fetchMovieCredits: () => { },
        setMovieCredits: (state, { payload: credits }) => {
            state.credits = credits;
        },
    },
});

export const {
    fetchPopularMovies,
    setPopularMovies,
    fetchMovieCredits,
    setMovieCredits,
    fetchMovieDetails,
    setMovieDetails,
    fetchMovieGenres,
    setMovieGenres,
} = moviesSlice.actions;

export const selectMovies = state => state.movies;
export const selectMovieList = state => state.movies.movies;
export const selectGenres = state => state.movies.genres.genres;
export const selectGenresList = state => state.movies.movie.genres;
export const selectMovieDetails = state => state.movies.movie;
export const selectMoviesDetails = state => state.movies.details;
export const selectMovieCast = state => state.movies.credits.cast;
export const selectMovieCrew = state => state.movies.credits.crew;

export default moviesSlice.reducer;