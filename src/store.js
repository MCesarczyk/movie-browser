import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import commonReducer from "./commonSlice";
import moviesReducer from "./features/movies/moviesSlice";
import movieReducer from "./features/movie/movieSlice";
import peopleReducer from "./features/people/peopleSlice";
import personReducer from "./features/person/personSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
        reducer: {
                common: commonReducer,
                movies: moviesReducer,
                movie: movieReducer,
                people: peopleReducer,
                person: personReducer,
        },
        middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;