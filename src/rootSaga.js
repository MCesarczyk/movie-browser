import { all } from "redux-saga/effects";
import { moviesSaga } from "./features/movies/moviesSaga";

export default function* rootSaga() {
    yield all([
        moviesSaga(),
    ]);
}