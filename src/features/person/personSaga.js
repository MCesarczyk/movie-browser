import { call, all, delay, put, select, takeLatest } from "redux-saga/effects";
import { getDataFromApi } from "../../getDataFromApi";
import {
    selectId,
    setError,
    setState,
} from "../../globalSlice";
import {
    fetchPersonDetails,
    setPersonDetails,
    clearPersonDetails,
    setPersonCredits,
} from "./personSlice";

const buildRequestUrl = (path, page, query) => {
    const apiBaseUrl = "https://api.themoviedb.org/3/";
    const apiKey = "?api_key=768f7875782193f5e4797762314da0b7";
    const apiLang = "&language=en-US";
    const apiAdult = "&include_adult=false";

    return `${apiBaseUrl}${path}${apiKey}${page ? `&page=${page}` : ""}${apiLang}${query ? apiAdult : ""}${query ? `&query=${query}` : ""}`
};

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