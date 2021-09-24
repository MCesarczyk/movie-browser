import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
};

const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        fetchPeopleList: () => { },
        setPeopleList: (state, { payload: people }) => {
            state.list = people;
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

export const selectPeopleList = state => selectPeopleState(state).list;

export default peopleSlice.reducer;