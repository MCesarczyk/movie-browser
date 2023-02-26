import { all } from "redux-saga/effects";
import { commonSaga } from "./commonSaga";
import { movieSaga } from "./features/movie/movieSaga";

export default function* rootSaga() {
    yield all([
        commonSaga(),
        movieSaga(),
    ]);
}