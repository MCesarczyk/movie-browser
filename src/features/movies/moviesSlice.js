import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies: [],
        genres: [],
        state: "idle"
    },
    reducers: {
        applicationStart: (state) => {
            state.state = "loading";
        },
        fetchPopularMovies: () => { },
        setMovies: (state, { payload: movies }) => {
            state.movies = movies;
        },
        setGenres: (state, { payload: genres }) => {
            state.genres = genres;
        },
        setState: (state, { payload: stateName }) => {
            state.state = stateName;
        },
    },
});

export const {
    applicationStart,
    fetchPopularMovies,
    setMovies,
    setGenres,
    setState,
} = moviesSlice.actions;

export const selectMovies = state => state.movies;
export const selectState = state => state.movies.state;
export const selectGenres = state => state.movies.genres;

export default moviesSlice.reducer;