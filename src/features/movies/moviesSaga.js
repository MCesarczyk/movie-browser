import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { selectId, selectPage, setError, setState, setTotalPages } from "../../globalSlice";
import { getPopularMovies } from "./getPopularMovies";
import { getMovieGenres } from "./getMovieGenres";
import { getMovieDetails } from "./getMovieDetails";
import { getMovieCredits } from "./getMovieCredits";
import { fetchMovieCredits, fetchMovieDetails, fetchMovieGenres, fetchPopularMovies, setMovieCredits, setMovieDetails, setMovieGenres, setPopularMovies } from "./moviesSlice";

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
};

function* fetchMovieGenresHandler() {
    try {
        const genres = yield call(getMovieGenres);
        yield put(setMovieGenres(genres));
    } catch (error) {
        yield call(setError(error));
    }
};

function* fetchMovieDetailsHandler() {
    try {
        const id = yield select(selectId);
        const details = yield call(getMovieDetails, id);
        yield put(setMovieDetails(details));
    } catch (error) {
        yield call(setError(error));
    }
};

function* fetchMovieCreditsHandler() {
    try {
        const id = yield select(selectId);
        const credits = yield call(getMovieCredits, id);
        yield put(setMovieCredits(credits));
    } catch (error) {
        yield call(setError(error));
    }
};

export function* moviesSaga() {
    yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
    yield takeLatest(fetchMovieGenres.type, fetchMovieGenresHandler);
    yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
    yield takeLatest(fetchMovieCredits.type, fetchMovieCreditsHandler);
};