import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    people: [],
    genres: [],
    person: [],
    credits: [],
};

const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        fetchPeopleList: () => { },
        setPeopleList: (state, { payload: people }) => {
            state.people = people;
        },
        setMovieGenres: (state, { payload: genres }) => {
            state.genres = genres;
        },
        fetchPersonDetails: () => { },
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
    setPeopleList,
    setMovieGenres,
    fetchPersonDetails,
    setPersonDetails,
    setPersonCredits,
} = peopleSlice.actions;

const selectPeopleState = state => state.people;
const selectPeopleCredits = state => selectPeopleState(state).credits;

export const selectPeopleList = state => selectPeopleState(state).people;
export const selectGenres = state => selectPeopleState(state).genres.genres;
export const selectGenresList = state => selectPersonDetails(state).genres;
export const selectPersonDetails = state => selectPeopleState(state).person;
export const selectPersonCast = state => selectPeopleCredits(state).cast;
export const selectPersonCrew = state => selectPeopleCredits(state).crew;

export default peopleSlice.reducer;