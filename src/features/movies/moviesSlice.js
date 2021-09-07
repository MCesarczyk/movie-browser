import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    movie: [],
    genres: [],
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
        fetchMovieDetails: () => { },
        setMovieDetails: (state, { payload: movie }) => {
            state.movie = movie;
        },
        fetchMovieGenres: () => { },
        setMovieGenres: (state, { payload: genres }) => {
            state.genres = genres;
        },
        setMovieCredits: (state, { payload: credits }) => {
            state.credits = credits;
        },
    },
});

export const {
    fetchPopularMovies,
    setPopularMovies,
    fetchMovieDetails,
    setMovieDetails,
    setMovieCredits,
    fetchMovieGenres,
    setMovieGenres,
} = moviesSlice.actions;

export const selectMovies = state => state.movies;
export const selectMovieList = state => state.movies.movies;
export const selectMovieDetails = state => state.movies.movie;
export const selectMoviesDetails = state => state.movies.details;
export const selectGenres = state => state.movies.genres.genres;
export const selectGenresList = state => state.movies.movie.genres;
export const selectMovieCast = state => state.movies.credits.cast;
export const selectMovieCrew = state => state.movies.credits.crew;

export default moviesSlice.reducer;