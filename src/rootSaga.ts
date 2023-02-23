import { all } from "redux-saga/effects";
import { commonSaga } from "./commonSaga";
import { moviesSaga } from "./features/movies/moviesSaga";
import { movieSaga } from "./features/movie/movieSaga";
import { peopleSaga } from "./features/people/peopleSaga";
import { personSaga } from "./features/person/personSaga";

export default function* rootSaga() {
    yield all([
        commonSaga(),
        moviesSaga(),
        movieSaga(),
        peopleSaga(),
        personSaga(),
    ]);
}