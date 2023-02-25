import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import commonReducer from "./commonSlice";
import movieReducer from "./features/movie/movieSlice";
import peopleReducer from "./features/people/peopleSlice";
import personReducer from "./features/person/personSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
        reducer: {
                common: commonReducer,
                movie: movieReducer,
                people: peopleReducer,
                person: personReducer,
        },
        middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
