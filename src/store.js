import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./globalSlice";
import moviesReducer from "./features/movies/moviesSlice";
import peopleReducer from "./features/people/peopleSlice";

const store = configureStore({
    reducer: {
        global: globalReducer,
        movies: moviesReducer,
        people: peopleReducer,
    },
});

export default store;