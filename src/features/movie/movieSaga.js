import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { getDataFromApi } from "../../utils/getDataFromApi";
import { buildRequestUrl } from "../../utils/buildRequestUrl";
import {
    setError,
} from "../../commonSlice";
import {
    setMovieDetails,
    setMovieCredits,
    setMovieId,
    selectMovieId,
    setMovieState,
} from "./movieSlice";

function* fetchMovieDetailsHandler() {
    try {
        yield put(setMovieState("loading"));
        const id = yield select(selectMovieId);
        const path = `movie/${id}`;
        const apiURL = buildRequestUrl(path);
        const details = yield call(getDataFromApi, apiURL);
        yield put(setMovieDetails(details));
        yield call(fetchMovieCreditsHandler);
        yield delay(500);
        yield put(setMovieState("success"));
    } catch (error) {
        yield call(setError(error));
    }
};

function* fetchMovieCreditsHandler() {
    try {
        const id = yield select(selectMovieId);
        const path = `movie/${id}/credits`;
        const apiURL = buildRequestUrl(path);
        const credits = yield call(getDataFromApi, apiURL);
        yield put(setMovieCredits(credits));
    } catch (error) {
        yield call(setError(error));
    }
};

export function* movieSaga() {
    yield takeLatest(setMovieId.type, fetchMovieDetailsHandler);
};