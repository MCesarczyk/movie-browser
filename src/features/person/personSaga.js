import { call, all, delay, put, select, takeLatest } from "redux-saga/effects";
import { getDataFromApi } from "../../utils/getDataFromApi";
import { buildRequestUrl } from "../../utils/buildRequestUrl";
import {
    selectId,
    setError,
    setState,
} from "../../commonSlice";
import {
    fetchPersonDetails,
    setPersonDetails,
    clearPersonDetails,
    setPersonCredits,
} from "./personSlice";

function* fetchPersonDetailsHandler() {
    try {
        yield put(setState("loading"));
        const id = yield select(selectId);
        const path = `person/${id}`;
        const apiURL = buildRequestUrl(path);
        const person = yield call(getDataFromApi, apiURL);
        yield put(setPersonDetails(person));
        yield call(fetchPersonCreditsHandler);
        yield delay(500);
        yield put(setState("success"));
    } catch (error) {
        yield call(setError(error));
    }
};

function* fetchPersonCreditsHandler() {
    try {
        const id = yield select(selectId);
        const path = `person/${id}/movie_credits`;
        const apiURL = buildRequestUrl(path);
        const credits = yield call(getDataFromApi, apiURL);
        yield put(setPersonCredits(credits));
    } catch (error) {
        yield call(setError(error));
    }
};

function* clearPersonDetailsDataHandler() {
    yield all([
        put(setPersonDetails([])),
        put(setPersonCredits([])),
    ]);
    yield put(setState("idle"));
};

export function* personSaga() {
    yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsHandler);
    yield takeLatest(clearPersonDetails.type, clearPersonDetailsDataHandler);
};