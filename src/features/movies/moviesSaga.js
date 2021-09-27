import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { getDataFromApi } from "../../utils/getDataFromApi";
import { buildRequestUrl } from "../../utils/buildRequestUrl";
import {
    setMoviesList,
    setMoviesPage,
    setMoviesQuery,
    selectMoviesPage,
    selectMoviesQuery,
    setMoviesState,
} from "./moviesSlice";

function* fetchMoviesListHandler() {
    try {
        const currentpage = yield select(selectMoviesPage);
        const query = yield select(selectMoviesQuery);
        yield put(setMoviesState("loading"));
        yield delay(query ? 500 : 0);
        const path = query ? "search/movie" : "movie/popular";
        const page = currentpage || "1";
        const apiURL = buildRequestUrl(path, page, query);
        const response = yield call(getDataFromApi, apiURL);
        const { results, total_results, total_pages } = yield response;
        yield delay(500);
        !response.total_results && query ?
            yield put(setMoviesState("noResults")) :
            yield put(setMoviesList({ results, total_results, total_pages, newState: "success" }))
    } catch (error) {
        yield call(console.error, `fetchMoviesListHandler: ${error}`);
        yield put(setMoviesState("error"));
    }
};

export function* moviesSaga() {
    yield takeLatest(setMoviesPage.type, fetchMoviesListHandler);
    yield takeLatest(setMoviesQuery.type, fetchMoviesListHandler);
};