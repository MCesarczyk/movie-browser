import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { getDataFromApi } from "../../utils/getDataFromApi";
import { buildRequestUrl } from "../../utils/buildRequestUrl";
import {
    setError,
} from "../../commonSlice";
import {
    setPersonDetails,
    setPersonCredits,
    setPersonId,
    selectPersonId,
    setPersonState,
} from "./personSlice";

function* fetchPersonDetailsHandler() {
    try {
        yield put(setPersonState("loading"));
        const id = yield select(selectPersonId);
        const path = `person/${id}`;
        const apiURL = buildRequestUrl(path);
        const person = yield call(getDataFromApi, apiURL);
        yield put(setPersonDetails(person));
        yield call(fetchPersonCreditsHandler);
        yield delay(500);
        yield put(setPersonState("success"));
    } catch (error) {
        yield call(setError(error));
    }
};

function* fetchPersonCreditsHandler() {
    try {
        const id = yield select(selectPersonId);
        const path = `person/${id}/movie_credits`;
        const apiURL = buildRequestUrl(path);
        const credits = yield call(getDataFromApi, apiURL);
        yield put(setPersonCredits(credits));
    } catch (error) {
        yield call(setError(error));
    }
};

export function* personSaga() {
    yield takeLatest(setPersonId.type, fetchPersonDetailsHandler);
};