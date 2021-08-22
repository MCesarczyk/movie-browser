import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    state: "idle"
};

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
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
export const selectMoviesState = state => state.movies.state;

export default moviesSlice.reducer;