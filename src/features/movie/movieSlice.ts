import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "store";
import { Actor, Genre, MovieApiResponse, MovieCredits, MovieDetails, StaffMember } from "types";

interface MovieCreditsInitialState {
    cast: [];
    crew: [];
};

interface InitialStateProps extends MovieApiResponse {
    id: number | null;
    details: MovieDetails | {};
    genres: Genre[] | [];
    credits: MovieCredits | MovieCreditsInitialState;
    state: string;
};

const initialState: InitialStateProps = {
    id: null,
    details: {},
    genres: [],
    credits: {
        cast: [],
        crew: [],
    },
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

const selectMovie = (state: RootState) => state.movie;
const selectMovieCredits = (state: RootState): MovieCredits | MovieCreditsInitialState => selectMovie(state).credits

export const selectMovieId = (state: RootState): number | null => selectMovie(state).id;
export const selectMovieState = (state: RootState): string => selectMovie(state).state;
export const selectMovieDetails = (state: RootState): MovieDetails | {} => selectMovie(state).details;
export const selectGenresList = (state: RootState): Genre[] | [] => selectMovie(state).genres;
export const selectMovieCast = (state: RootState): Actor[] => selectMovieCredits(state).cast;
export const selectMovieCrew = (state: RootState): StaffMember[] => selectMovieCredits(state).crew;

export default movieSlice.reducer;
