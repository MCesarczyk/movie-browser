import { call, all, put, takeLatest } from "redux-saga/effects";
import { getDataFromApi } from "./services/restApiService";
import { fetchConfiguration, setConfiguration, setMovieGenres } from "./commonSlice";
import { buildRequestUrl } from "./services/utils";

function* fetchConfigurationHandler() {
    try {
        const path = "configuration";
        const apiURL = buildRequestUrl(path);
        const configuration: unknown = yield call(getDataFromApi, apiURL);
        yield put(setConfiguration((configuration as any).images));
    } catch (error) {
        yield call(console.error, `fetchConfigurationHandler: ${error}`);
    }
};

function* fetchMovieGenresHandler() {
    try {
        const path = "genre/movie/list";
        const apiURL = buildRequestUrl(path);
        const genres: unknown = yield call(getDataFromApi, apiURL);
        yield put(setMovieGenres((genres as any).genres));
    } catch (error) {
        yield call(console.error, `fetchMovieGenresHandler: ${error}`);
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