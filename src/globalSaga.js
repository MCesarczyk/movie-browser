import { call, put, takeLatest } from "redux-saga/effects";
import { getDataFromApi } from "./getDataFromApi";
import { fetchConfiguration, setConfig, setError } from "./globalSlice";

function* fetchConfigurationHandler() {
    try {
        const apiURL = `https://api.themoviedb.org/3/configuration?api_key=768f7875782193f5e4797762314da0b7&language=en-US`;
        const config = yield call(getDataFromApi, apiURL);
        yield put(setConfig(config));
    } catch (error) {
        yield call(setError(error));
    }
}

export function* globalSaga() {
    yield takeLatest(fetchConfiguration.type, fetchConfigurationHandler);
}