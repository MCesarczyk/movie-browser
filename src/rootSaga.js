import { all } from "redux-saga/effects";
import { globalSaga } from "./globalSaga";
import { moviesSaga } from "./features/movies/moviesSaga";
import { movieSaga } from "./features/movie/movieSaga";
import { peopleSaga } from "./features/people/peopleSaga";
import { personSaga } from "./features/people/personSaga";

export default function* rootSaga() {
    yield all([
        globalSaga(),
        moviesSaga(),
        movieSaga(),
        peopleSaga(),
        personSaga(),
    ]);
}