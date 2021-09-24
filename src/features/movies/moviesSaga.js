import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { getDataFromApi } from "../../utils/getDataFromApi";
import { buildRequestUrl } from "../../utils/buildRequestUrl";
import {
    setError,
} from "../../commonSlice";
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
        const { results, total_results, total_pages } = yield call(getDataFromApi, apiURL);
        yield delay(500);
        yield put(setMoviesList({results, total_results, total_pages, newState: "success"}))
    } catch (error) {
        yield call(setError(error));
    }
};

export function* moviesSaga() {
    yield takeLatest(setMoviesPage.type, fetchMoviesListHandler);
    yield takeLatest(setMoviesQuery.type, fetchMoviesListHandler);
};