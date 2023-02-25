import { all } from "redux-saga/effects";
import { commonSaga } from "./commonSaga";
import { movieSaga } from "./features/movie/movieSaga";
import { peopleSaga } from "./features/people/peopleSaga";
import { personSaga } from "./features/person/personSaga";

export default function* rootSaga() {
    yield all([
        commonSaga(),
        movieSaga(),
        peopleSaga(),
        personSaga(),
    ]);
}