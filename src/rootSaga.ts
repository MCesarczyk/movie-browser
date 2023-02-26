import { all } from "redux-saga/effects";
import { commonSaga } from "./commonSaga";

export default function* rootSaga() {
    yield all([
        commonSaga(),
    ]);
}