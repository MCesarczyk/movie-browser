import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: null,
    details: [],
    credits: [],
    state: "idle",
};

const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        setPersonId: (state, { payload: newId }) => {
            state.id = newId;
        },
        setPersonDetails: (state, { payload: details }) => {
            state.details = details;
        },
        setPersonCredits: (state, { payload: credits }) => {
            state.credits = credits;
        },
        setPersonState: (state, { payload: newState }) => {
            state.state = newState;
        },
        clearPersonData: () => initialState,
    },
});

export const {
    setPersonId,
    setPersonDetails,
    setPersonCredits,
    setPersonState,
    clearPersonData,
} = personSlice.actions;

const selectPerson = state => state.person;
const selectPersonCredits = state => selectPerson(state).credits;

export const selectPersonId = state => selectPerson(state).id;
export const selectPersonState = state => selectPerson(state).state;
export const selectPersonDetails = state => selectPerson(state).details;
export const selectGenresList = state => selectPersonDetails(state).genres;
export const selectPersonCast = state => selectPersonCredits(state).cast;
export const selectPersonCrew = state => selectPersonCredits(state).crew;

export default personSlice.reducer;