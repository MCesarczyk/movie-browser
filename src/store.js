import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import globalReducer from "./globalSlice";
import moviesReducer from "./features/movies/moviesSlice";
import peopleReducer from "./features/people/peopleSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
        reducer: {
                global: globalReducer,
                movies: moviesReducer,
                people: peopleReducer,
        },
        middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;