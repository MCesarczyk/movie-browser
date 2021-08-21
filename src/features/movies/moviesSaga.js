import { call, put, delay, takeLatest } from "redux-saga/effects"
import { getPopularMovies } from "./getPopularMovies";
import { fetchPopularMovies, setMovies, setMoviesState } from "./moviesSlice";

function* fetchPopularMoviesHandler() {
    try {
        yield put(setMoviesState("loading"));
        yield delay(0.5);
        const popularMovies = yield call(getPopularMovies);
        yield put(setMovies(popularMovies));
        yield put(setMoviesState("success"));
    } catch (error) {
        yield call(alert, "Sorry, unable to fetch data...");
    }
}

export function* moviesSaga() {
    yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
}