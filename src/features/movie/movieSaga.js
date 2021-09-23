import { call, all, delay, put, select, takeLatest } from "redux-saga/effects";
import { getDataFromApi } from "../../getDataFromApi";
import { buildRequestUrl } from "../../utils/buildRequestUrl";
import {
    selectId,
    setError,
    setState,
} from "../../globalSlice";
import {
    fetchMovieDetails,
    clearMovieDetails,
    setMovieDetails,
    setMovieCredits,
} from "./movieSlice";

function* fetchMovieDetailsHandler() {
    try {
        yield put(setState("loading"));
        const id = yield select(selectId);
        const path = `movie/${id}`;
        const apiURL = buildRequestUrl(path);
        const details = yield call(getDataFromApi, apiURL);
        yield put(setMovieDetails(details));
        yield call(fetchMovieCreditsHandler);
        yield delay(500);
        yield put(setState("success"));
    } catch (error) {
        yield call(setError(error));
    }
};

function* fetchMovieCreditsHandler() {
    try {
        const id = yield select(selectId);
        const path = `movie/${id}/credits`;
        const apiURL = buildRequestUrl(path);
        const credits = yield call(getDataFromApi, apiURL);
        yield put(setMovieCredits(credits));
    } catch (error) {
        yield call(setError(error));
    }
};

function* clearMovieDetailsDataHandler() {
    yield all([
        put(setMovieDetails([])),
        put(setMovieCredits([])),
    ]);
    yield put(setState("idle"));
};

export function* movieSaga() {
    yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
    yield takeLatest(clearMovieDetails.type, clearMovieDetailsDataHandler);
};