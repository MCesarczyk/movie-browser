import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    details: [],
    credits: [],
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        fetchMovieDetails: () => { },
        setMovieDetails: (state, { payload: details }) => {
            state.details = details;
        },
        clearMovieDetails: () => { },
        setMovieCredits: (state, { payload: credits }) => {
            state.credits = credits;
        },
    },
});

export const {
    fetchMovieDetails,
    setMovieDetails,
    clearMovieDetails,
    setMovieCredits,
} = movieSlice.actions;

const selectMovieState = state => state.movie;
const selectMovieCredits = state => selectMovieState(state).credits

export const selectMovieDetails = state => selectMovieState(state).details;
export const selectGenresList = state => selectMovieState(state).genres;
export const selectMovieCast = state => selectMovieCredits(state).cast;
export const selectMovieCrew = state => selectMovieCredits(state).crew;

export default movieSlice.reducer;