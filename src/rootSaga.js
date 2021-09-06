import { all } from "redux-saga/effects";
import { moviesSaga } from "./features/movies/moviesSaga";
import { globalSaga } from "./globalSaga";

export default function* rootSaga() {
    yield all([
        moviesSaga(),
        globalSaga(),
    ]);
}