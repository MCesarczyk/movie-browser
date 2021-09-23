import { call, all, delay, put, select, takeLatest } from "redux-saga/effects";
import { getDataFromApi } from "../../getDataFromApi";
import { buildRequestUrl } from "../../utils/buildRequestUrl";
import {
    selectPage,
    selectQuery,
    setError,
    setState,
    setTotalPages,
    setTotalResults
} from "../../globalSlice";
import {
    fetchMoviesList,
    setMoviesList,
    clearMoviesList,
} from "./moviesSlice";

function* fetchMoviesListHandler() {
    try {
        const currentpage = yield select(selectPage);
        const query = yield select(selectQuery);
        yield put(setState("loading"));
        yield delay(query ? 500 : 0);
        const path = query ? "search/movie" : "movie/popular";
        const page = currentpage || "1";
        const apiURL = buildRequestUrl(path, page, query);
        const movies = yield call(getDataFromApi, apiURL);
        yield all([
            put(setMoviesList(movies.results)),
            put(setTotalResults(movies.total_results)),
            put(setTotalPages(movies.total_pages)),
        ]);
        yield delay(500);
        yield put(setState("success"));
    } catch (error) {
        yield call(setError(error));
    }
};

function* clearMoviesListDataHandler() {
    yield all([
        put(setMoviesList([])),
        put(setTotalResults(10_000)),
        put(setTotalPages(500)),
    ]);
    yield put(setState("idle"));
};

export function* moviesSaga() {
    yield takeLatest(fetchMoviesList.type, fetchMoviesListHandler);
    yield takeLatest(clearMoviesList.type, clearMoviesListDataHandler);
};