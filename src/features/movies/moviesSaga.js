import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { getDataFromApi } from "../../getDataFromApi";
import { 
    selectId, 
    selectPage, 
    setError, 
    setState, 
    setTotalPages 
} from "../../globalSlice";
import { 
    fetchMovieCredits, 
    fetchMovieDetails, 
    fetchMovieGenres, 
    fetchPopularMovies, 
    setMovieCredits, 
    setMovieDetails, 
    setMovieGenres, 
    setPopularMovies 
} from "./moviesSlice";

function* fetchPopularMoviesHandler() {
    try {
        yield put(setState("loading"));
        const page = yield select(selectPage);
        const apiURL = `https://api.themoviedb.org/3/movie/popular?api_key=768f7875782193f5e4797762314da0b7&page=${page}&language=en-US`;
        const movies = yield call(getDataFromApi, apiURL);
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
        const apiURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=768f7875782193f5e4797762314da0b7&language=en-US";
        const genres = yield call(getDataFromApi, apiURL);
        yield put(setMovieGenres(genres));
    } catch (error) {
        yield call(setError(error));
    }
};

function* fetchMovieDetailsHandler() {
    try {
        const id = yield select(selectId);
        const apiURL = `https://api.themoviedb.org/3/movie/${id}?api_key=768f7875782193f5e4797762314da0b7&language=en-US`;
        const details = yield call(getDataFromApi, apiURL);
        yield put(setMovieDetails(details));
    } catch (error) {
        yield call(setError(error));
    }
};

function* fetchMovieCreditsHandler() {
    try {
        const id = yield select(selectId);
        const apiURL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=768f7875782193f5e4797762314da0b7&language=en-US`;
        const credits = yield call(getDataFromApi, apiURL);
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