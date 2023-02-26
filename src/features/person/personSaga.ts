import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { getDataFromApi } from "../../services/restApiService";
import { buildRequestUrl } from "../../services/utils";
import { PersonApiResponse, PersonCredits } from "./interfaces";
import {
    setPersonDetails,
    setPersonCredits,
    setPersonId,
    selectPersonId,
    setPersonState,
} from "./personSlice";

function* fetchPersonDetailsHandler() {
    try {
        yield put(setPersonState("loading"));
        const id: unknown = yield select(selectPersonId);
        const path = `person/${id as string}`;
        const apiURL = buildRequestUrl(path);
        const person: unknown = yield call(getDataFromApi, apiURL);
        yield put(setPersonDetails(person as PersonApiResponse));
        yield call(fetchPersonCreditsHandler);
        yield delay(500);
        yield put(setPersonState("success"));
    } catch (error) {
        yield call(console.error, `fetchPersonDetailsListHandler: ${error}`);
        yield put(setPersonState("error"));
    }
};

function* fetchPersonCreditsHandler() {
    try {
        const id: unknown = yield select(selectPersonId);
        const path = `person/${id as string}/movie_credits`;
        const apiURL = buildRequestUrl(path);
        const credits: unknown = yield call(getDataFromApi, apiURL);
        yield put(setPersonCredits(credits as PersonCredits));
    } catch (error) {
        yield call(console.error, `fetchPersonCreditsHandler: ${error}`);
    }
};

export function* personSaga() {
    yield takeLatest(setPersonId.type, fetchPersonDetailsHandler);
};
