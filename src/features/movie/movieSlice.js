import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    details: [],
    credits: [],
    state: "idle",
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovieId: (state, { payload: newId }) => {
            state.id = newId;
        },
        setMovieDetails: (state, { payload: details }) => {
            state.details = details;
        },
        setMovieCredits: (state, { payload: credits }) => {
            state.credits = credits;
        },
        setMovieState: (state, { payload: newState }) => {
            state.state = newState;
        },
        clearMovieData: () => initialState,
    },
});

export const {
    setMovieId,
    setMovieDetails,
    setMovieCredits,
    setMovieState,
    clearMovieData,
} = movieSlice.actions;

const selectMovie = state => state.movie;
const selectMovieCredits = state => selectMovie(state).credits

export const selectMovieId = state => selectMovie(state).id;
export const selectMovieState = state => selectMovie(state).state;
export const selectMovieDetails = state => selectMovie(state).details;
export const selectGenresList = state => selectMovie(state).genres;
export const selectMovieCast = state => selectMovieCredits(state).cast;
export const selectMovieCrew = state => selectMovieCredits(state).crew;

export default movieSlice.reducer;