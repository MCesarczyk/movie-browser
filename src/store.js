import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/movies/moviesSlice";
import globalReducer from "./globalSlice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        global: globalReducer,
    },
});

export default store;