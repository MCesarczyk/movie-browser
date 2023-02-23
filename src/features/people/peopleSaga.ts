import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { getDataFromApi } from "../../utils/getDataFromApi";
import { buildRequestUrl } from "../../utils/buildRequestUrl";
import {
    setPeopleList,
    selectPeoplePage,
    selectPeopleQuery,
    setPeopleState,
    setPeoplePage,
    setPeopleQuery,
} from "./peopleSlice";
import { PeopleApiResponse } from "../../types";

function* fetchPeopleListHandler() {
    try {
        const currentPage: unknown = yield select(selectPeoplePage);
        const queryString: unknown = yield select(selectPeopleQuery);
        const query = queryString as string;
        yield put(setPeopleState("loading"));
        yield delay(query ? 500 : 0);
        const path = query ? "search/person" : "person/popular";
        const page = (currentPage as string) || "1";
        const apiURL = buildRequestUrl(path, page, query);
        const response: unknown = yield call(getDataFromApi, apiURL);
        const { results, total_results, total_pages } = yield response as PeopleApiResponse;
        yield delay(500);
        yield put(setPeopleList({
            results,
            total_results,
            total_pages,
            newState: total_results ? "success" : "noResults"
        }))
    } catch (error) {
        yield call(console.error, `fetchPeopleListHandler: ${error}`);
        yield put(setPeopleState("error"));
    }
};

export function* peopleSaga() {
    yield takeLatest(setPeoplePage.type, fetchPeopleListHandler);
    yield takeLatest(setPeopleQuery.type, fetchPeopleListHandler);
};