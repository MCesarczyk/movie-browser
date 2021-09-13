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

export const selectPeople = state => state.people;
export const selectPeopleList = state => state.people.people;
export const selectGenres = state => state.people.genres.genres;
export const selectGenresList = state => state.people.person.genres;
export const selectPersonDetails = state => state.people.person;
export const selectPeopleDetails = state => state.people.details;
export const selectPersonCast = state => state.people.credits.cast;
export const selectPersonCrew = state => state.people.credits.crew;

export default peopleSlice.reducer;