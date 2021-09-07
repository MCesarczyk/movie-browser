import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { selectPage, setError, setState, setTotalPages } from "../../globalSlice";
import { getPopularMovies } from "./getPopularMovies";
import { fetchPopularMovies, setPopularMovies } from "./moviesSlice";

function* fetchPopularMoviesHandler() {
    try {
        yield put(setState("loading"));
        const page = yield select(selectPage);
        const movies = yield call(getPopularMovies, page);
        yield put(setPopularMovies(movies.results));
        yield put(setTotalPages(movies.total_pages));
        yield delay(1_000);
        yield put(setState("success"));
    } catch (error) {
        yield call(setError(error));
    }
}

export function* moviesSaga() {
    yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
}