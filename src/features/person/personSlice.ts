import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "store";
import { 
    ActingMovieDetailed,
    PersonCredits, 
    PersonDetails, 
} from "./interfaces";


const initialState: any = {
    id: null,
    details: {
        genres: [],
        profile_path: null,
        name: null,
        birthday: null,
        place_of_birth: null,
        biography: null,
    },
    credits: {
        cast: [],
        crew: [],
    },
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

const selectPerson = (state: RootState) => state.person;
const selectPersonCredits = (state: RootState): PersonCredits => selectPerson(state).credits;

export const selectPersonId = (state: RootState): string | null => selectPerson(state).id;
export const selectPersonState = (state: RootState): string => selectPerson(state).state;
export const selectPersonDetails = (state: RootState): PersonDetails => selectPerson(state).details;
export const selectPersonCast = (state: RootState): ActingMovieDetailed[] | [] => selectPersonCredits(state).cast;
export const selectPersonCrew = (state: RootState): ActingMovieDetailed[] | [] => selectPersonCredits(state).crew;

export default personSlice.reducer;