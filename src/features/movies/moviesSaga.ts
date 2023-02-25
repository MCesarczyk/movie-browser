import { call, delay, put, select, takeLatest } from "redux-saga/effects";

import { MoviesResultApiResponse } from "types";
import { getDataFromApi } from "utils/getDataFromApi";
import { buildRequestUrl } from "utils/buildRequestUrl";
import {
    setMoviesList,
    setMoviesPage,
    setMoviesQuery,
    selectMoviesPage,
    selectMoviesQuery,
    setMoviesState,
} from "features/movies/moviesSlice";


function* fetchMoviesListHandler() {
    try {
        const currentpage: unknown = yield select(selectMoviesPage);
        const queryString: unknown = yield select(selectMoviesQuery);
        const query = queryString as string | null;
        yield put(setMoviesState("loading"));
        yield delay(query ? 500 : 0);
        const path = query ? "search/movie" : "movie/popular";
        const page = currentpage as string || "1";
        const apiURL = buildRequestUrl(path, page, query);
        const response: unknown = yield call(getDataFromApi, apiURL);
        const { results, total_results, total_pages } = yield response as MoviesResultApiResponse;
        yield delay(500);
        yield put(setMoviesList({
            results,
            total_results: total_results <= 10000 || 10000,
            total_pages: total_pages <= 500 || 500,
            newState: total_results ? "success" : "noResults"
        }))
    } catch (error) {
        yield call(console.error, `fetchMoviesListHandler: ${error}`);
        yield put(setMoviesState("error"));
    }
};

export function* moviesSaga() {
    yield takeLatest(setMoviesPage.type, fetchMoviesListHandler);
    yield takeLatest(setMoviesQuery.type, fetchMoviesListHandler);
};