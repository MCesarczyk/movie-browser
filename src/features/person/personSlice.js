import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    details: [],
    credits: [],
};

const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        fetchPersonDetails: () => { },
        setPersonDetails: (state, { payload: details }) => {
            state.details = details;
        },
        clearPersonDetails: () => { },
        setPersonCredits: (state, { payload: credits }) => {
            state.credits = credits;
        },
    },
});

export const {
    fetchPersonDetails,
    setPersonDetails,
    clearPersonDetails,
    setPersonCredits,
} = personSlice.actions;

const selectPersonState = state => state.person;
export const selectPersonDetails = state => selectPersonState(state).details;
export const selectGenresList = state => selectPersonDetails(state).genres;

const selectPersonCredits = state => selectPersonState(state).credits;
export const selectPersonCast = state => selectPersonCredits(state).cast;
export const selectPersonCrew = state => selectPersonCredits(state).crew;

export default personSlice.reducer;