import { all } from "redux-saga/effects";
import { moviesSaga } from "./features/movies/moviesSaga";
import { peopleSaga } from "./features/movies/peopleSaga";

export default function* rootSaga() {
    yield all([
        moviesSaga(),
    ]);
}