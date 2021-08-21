import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        state: "loading",
    },
    reducers: {
        fetchPopularMovies: () => { },
        setMovies: (state, { payload: movies }) => {
            state.movies = movies;
        },
        setMoviesState: (state, { payload: stateName }) => {
            state.state = stateName;
        }
    },
});

export const {
    setMovies,
    setMoviesState,
    fetchPopularMovies,
} = moviesSlice.actions;

export const selectMovies = state => state.movies;

export default moviesSlice.reducer;