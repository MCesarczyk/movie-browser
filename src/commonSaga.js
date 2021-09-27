import { call, all, put, takeLatest } from "redux-saga/effects";
import { getDataFromApi } from "./utils/getDataFromApi";
import { fetchConfiguration, setConfiguration, setError, setMovieGenres } from "./commonSlice";
import { buildRequestUrl } from "./utils/buildRequestUrl";

function* fetchConfigurationHandler() {
    try {
        const path = "configuration";
        const apiURL = buildRequestUrl(path);
        const configuration = yield call(getDataFromApi, apiURL);
        yield put(setConfiguration(configuration));
    } catch (error) {
        yield call(setError(error));
    }
};

function* fetchMovieGenresHandler() {
    try {
        const path = "genre/movie/list";
        const apiURL = buildRequestUrl(path);
        const genres = yield call(getDataFromApi, apiURL);
        yield put(setMovieGenres(genres.genres));
    } catch (error) {
        yield call(setError(error));
    }
};

export function* bindSaga() {
    yield all([
        call(fetchConfigurationHandler),
        call(fetchMovieGenresHandler),
    ]);
};

export function* commonSaga() {
    yield takeLatest(fetchConfiguration.type, bindSaga);
};