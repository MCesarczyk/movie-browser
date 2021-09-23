import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    people: [],
    totalResults: 10_000,
    totalPages: 500,
};

const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        fetchPeopleList: () => { },
        setPeopleList: (state, { payload: people }) => {
            state.people = people;
        },
        clearPeopleList: () => { },
        setTotalResults: (state, { payload: totalResults }) => {
            state.totalResults = totalResults;
        },
        setTotalPages: (state, { payload: totalPages }) => {
            state.totalPages = totalPages;
        },
    },
});

export const {
    fetchPeopleList,
    setPeopleList,
    clearPeopleList,
    setTotalResults,
    setTotalPages,
} = peopleSlice.actions;

const selectPeopleState = state => state.people;

export const selectPeopleList = state => selectPeopleState(state).people;
export const selectTotalResults = state => selectPeopleState(state).totalResults;
export const selectTotalPages = state => selectPeopleState(state).totalPages;

export default peopleSlice.reducer;