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
        setAppendMovieDetails: (state, {payload: details}) => {
            state.details.push(details);
        },
    },
});

export const {
    fetchPopularMovies,
    setMovies,
    setMoviesState,
    setGenres,
    setAppendMovieDetails,
} = moviesSlice.actions;

export const selectMoviesState = state => state.movies.state;
export const selectGenres = state => state.movies.genres.genres;
export const selectMoviesDetails = state => state.movies.details;
export const selectMovieList = state => state.movies.movies;

export default moviesSlice.reducer;