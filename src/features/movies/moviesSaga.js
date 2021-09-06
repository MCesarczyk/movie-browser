import { call, delay, put, takeLatest } from "redux-saga/effects";
import { setError } from "../../globalSlice";
import { getPopularMovies } from "./getPopularMovies";
import { fetchPopularMovies, setMovies, setState } from "./moviesSlice";

function* fetchPopularMoviesHandler() {
    try {
        const movies = yield call(getPopularMovies);
        yield put(setMovies(movies));
        yield put(setState("loading"));
        yield delay(2_000);
        yield put(setState("success"));
    } catch (error) {
        yield call(setError(error));
    }
}

export function* moviesSaga() {
    yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
}