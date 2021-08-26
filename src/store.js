import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./features/movies/moviesSlice";
import configReducer from "./configSlice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        config: configReducer,
    },
});

export default store;