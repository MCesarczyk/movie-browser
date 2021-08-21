import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import moviesReducer from "./features/movies/moviesSlice";
import { moviesSaga } from "./features/movies/moviesSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(moviesSaga);

export default store;