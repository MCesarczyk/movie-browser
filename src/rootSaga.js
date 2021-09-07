import { all } from "redux-saga/effects";
import { moviesSaga } from "./features/movies/moviesSaga";
import { peopleSaga } from "./features/people/peopleSaga";
import { globalSaga } from "./globalSaga";

export default function* rootSaga() {
    yield all([
        moviesSaga(),
        peopleSaga(),
        globalSaga(),
    ]);
}