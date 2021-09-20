import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    people: [],
    person: [],
    credits: [],
};

const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        fetchPeopleList: () => { },
        clearPeopleList: () => { },
        setPeopleList: (state, { payload: people }) => {
            state.people = people;
        },
        fetchPersonDetails: () => { },
        clearPersonDetails: () => { },
        setPersonDetails: (state, { payload: person }) => {
            state.person = person;
        },
        setPersonCredits: (state, { payload: credits }) => {
            state.credits = credits;
        },
    },
});

export const {
    fetchPeopleList,
    clearPeopleList,
    setPeopleList,
    fetchPersonDetails,
    clearPersonDetails,
    setPersonDetails,
    setPersonCredits,
} = peopleSlice.actions;

const selectPeopleState = state => state.people;
const selectPeopleCredits = state => selectPeopleState(state).credits;

export const selectPeopleList = state => selectPeopleState(state).people;
export const selectGenresList = state => selectPersonDetails(state).genres;
export const selectPersonDetails = state => selectPeopleState(state).person;
export const selectPersonCast = state => selectPeopleCredits(state).cast;
export const selectPersonCrew = state => selectPeopleCredits(state).crew;

export default peopleSlice.reducer;