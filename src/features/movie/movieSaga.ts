import { call, delay, put, select, takeLatest } from "redux-saga/effects";

import { MovieApiResponse, MovieCredits } from "types";
import { getDataFromApi } from "services/restApiService";
import { buildRequestUrl } from "services/utils";
import {
    setMovieDetails,
    setMovieCredits,
    setMovieId,
    selectMovieId,
    setMovieState,
} from "features/movie/movieSlice";


function* fetchMovieDetailsHandler() {
    try {
        yield put(setMovieState("loading"));
        const id: unknown = yield select(selectMovieId);
        const path = `movie/${id as string}`;
        const apiURL = buildRequestUrl(path);
        const details: unknown = yield call(getDataFromApi, apiURL);
        yield put(setMovieDetails(details as MovieApiResponse));
        yield call(fetchMovieCreditsHandler);
        yield delay(500);
        yield put(setMovieState("success"));
    } catch (error) {
        yield call(console.error, `fetchMovieDetailsHandler: ${error}`);
        yield put(setMovieState("error"));
    }
};

function* fetchMovieCreditsHandler() {
    try {
        const id: unknown = yield select(selectMovieId);
        const path = `movie/${id as string}/credits`;
        const apiURL = buildRequestUrl(path);
        const credits: unknown = yield call(getDataFromApi, apiURL);
        yield put(setMovieCredits(credits as MovieCredits));
    } catch (error) {
        yield call(console.error, `fetchMovieCreditsHandler: ${error}`);
    }
};

export function* movieSaga() {
    yield takeLatest(setMovieId.type, fetchMovieDetailsHandler);
};
