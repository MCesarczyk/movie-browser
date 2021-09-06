import { call, put, takeLatest } from "redux-saga/effects";
import { getConfiguration } from "./getConfiguration";
import { fetchConfiguration, setConfig, setError } from "./globalSlice";

function* fetchConfigurationHandler() {
    try {
        const config = yield call(getConfiguration);
        yield put(setConfig(config));
    } catch (error) {
        yield call(setError(error));
    }
}

export function* globalSaga() {
    yield takeLatest(fetchConfiguration.type, fetchConfigurationHandler);
}