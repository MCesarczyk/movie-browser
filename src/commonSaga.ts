import { call, put, takeLatest } from "redux-saga/effects";
import { getDataFromApi } from "./services/restApiService";
import { fetchConfiguration, setConfiguration } from "./commonSlice";
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

export function* commonSaga() {
    yield takeLatest(fetchConfiguration.type, fetchConfigurationHandler);
};