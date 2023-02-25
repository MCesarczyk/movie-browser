import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "store";
import { PeopleApiResponse, Person } from "types";


const initialState: PeopleApiResponse = {
    page: null,
    results: [],
    total_pages: null,
    total_results: null,
    state: "idle",
    query: null
};

const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        setPeoplePage: (state, { payload: newPage }) => {
            state.page = newPage;
        },
        setPeopleQuery: (state, { payload: newQuery }) => {
            state.query = newQuery;
        },
        setPeopleList: (state, { payload: { results, total_pages, total_results, newState } }) => {
            state.results = results;
            state.total_pages = total_pages;
            state.total_results = total_results;
            state.state = newState;
        },
        setPeopleState: (state, { payload: newState }) => {
            state.state = newState;
        },
        clearPeopleList: () => initialState,
    },
});

export const {
    setPeoplePage,
    setPeopleQuery,
    setPeopleList,
    setPeopleState,
    clearPeopleList,
} = peopleSlice.actions;

const selectPeople = (state: RootState) => state.people;

export const selectPeoplePage = (state: RootState): number | null => selectPeople(state).page;
export const selectPeopleQuery = (state: RootState): string | null => selectPeople(state).query;
export const selectPeopleState = (state: RootState): string => selectPeople(state).state;
export const selectPeopleResults = (state: RootState): Person[] | [] => selectPeople(state).results;
export const selectPeopleTotalPages = (state: RootState): number | null => selectPeople(state).total_pages;
export const selectPeopleTotalResults = (state: RootState): number | null => selectPeople(state).total_results;

export default peopleSlice.reducer;
