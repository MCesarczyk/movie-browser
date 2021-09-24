import { call, all, delay, put, select, takeLatest } from "redux-saga/effects";
import { getDataFromApi } from "../../utils/getDataFromApi";
import { buildRequestUrl } from "../../utils/buildRequestUrl";
import {
    selectPage,
    selectQuery,
    setError,
    setState,
    setTotalPages,
    setTotalResults
} from "../../commonSlice";
import {
    setPeopleList,
    fetchPeopleList,
    clearPeopleList,
} from "./peopleSlice";

function* fetchPeopleListHandler() {
    try {
        const currentpage = yield select(selectPage);
        const query = yield select(selectQuery);
        yield put(setState("loading"));
        yield delay(query ? 500 : 0);
        const path = query ? "search/person" : "person/popular";
        const page = currentpage || "1";
        const apiURL = buildRequestUrl(path, page, query);
        const people = yield call(getDataFromApi, apiURL);
        yield put(setPeopleList(people.results));
        yield put(setTotalResults(people.total_results));
        yield put(setTotalPages(people.total_pages));
        yield delay(500);
        yield put(setState("success"));
    } catch (error) {
        yield call(setError(error));
    }
};

function* clearPeopleListDataHandler() {
    yield all([
        put(setPeopleList([])),
        put(setTotalResults(10_000)),
        put(setTotalPages(500)),
    ]);
    yield put(setState("idle"));
};

export function* peopleSaga() {
    yield takeLatest(fetchPeopleList.type, fetchPeopleListHandler);
    yield takeLatest(clearPeopleList.type, clearPeopleListDataHandler);
};