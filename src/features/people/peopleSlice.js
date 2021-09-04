import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    people: [],
    person: [],
    credits: [],
    genres: [],
};

const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        setPeople: (state, { payload: people }) => {
            state.people = people;
        },
        setPerson: (state, { payload: person }) => {
            state.person = person;
        },
        setPersonCredits: (state, { payload: credits }) => {
            state.credits = credits;
        },
        setGenres: (state, { payload: genres }) => {
            state.genres = genres;
        },
    },
});

export const {
    setPeople,
    setPerson,
    setPersonCredits,
    setGenres,
} = peopleSlice.actions;

export const selectPeopleList = state => state.people.people;
export const selectGenres = state => state.people.genres.genres;
export const selectGenresList = state => state.people.person.genres;
export const selectPersonDetails = state => state.people.person;
export const selectPeopleDetails = state => state.people.details;
export const selectPersonCast = state => state.people.credits.cast;
export const selectPersonCrew = state => state.people.credits.crew;

export default peopleSlice.reducer;