import { call, all, put, takeLatest } from "redux-saga/effects";
import { getDataFromApi } from "./utils/getDataFromApi";
import { fetchConfiguration, setConfiguration, setError, setMovieGenres } from "./commonSlice";

const apiBaseUrl = "https://api.themoviedb.org/3/";
const apiKey = "?api_key=768f7875782193f5e4797762314da0b7";
const apiLang = "&language=en-US";

function* fetchConfigurationHandler() {
    try {
        const apiURL = `${apiBaseUrl}configuration${apiKey}${apiLang}`;
        const configuration = yield call(getDataFromApi, apiURL);
        yield put(setConfiguration(configuration));
    } catch (error) {
        yield call(setError(error));
    }
};

function* fetchMovieGenresHandler() {
    try {
        const apiURL = `${apiBaseUrl}genre/movie/list${apiKey}${apiLang}`;
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