import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    people: [],
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
    },
});

export const {
    fetchPeopleList,
    setPeopleList,
    clearPeopleList,
} = peopleSlice.actions;

const selectPeopleState = state => state.people;

export const selectPeopleList = state => selectPeopleState(state).people;

export default peopleSlice.reducer;