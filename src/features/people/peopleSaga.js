import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { getDataFromApi } from "../../getDataFromApi";
import {
    selectId,
    selectPage,
    selectQuery,
    setError,
    setState,
    setTotalPages,
    setTotalResults
} from "../../globalSlice";
import {
    setPersonCredits,
    setPersonDetails,
    setPeopleList,
    fetchPersonDetails,
    fetchPeopleList,
    setMovieGenres,
} from "./peopleSlice";

const apiBaseUrl = "https://api.themoviedb.org/3/";
const apiKey = "?api_key=768f7875782193f5e4797762314da0b7";
const apiLang = "&language=en-US";
const apiAdult = "&include_adult=false";

function* fetchPeopleListHandler() {
    try {
        const page = yield select(selectPage);
        const query = yield select(selectQuery);
        yield put(setState("loading"));
        yield delay(query ? 500 : 0);
        const apiURL = (query ?
            `${apiBaseUrl}search/person${apiKey}&query=${query}&page=${page}${apiLang}${apiAdult}`
            :
            `${apiBaseUrl}person/popular${apiKey}&page=${page}${apiLang}`
        );
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

function* fetchPersonDetailsHandler() {
    try {
        yield put(setState("loading"));
        const id = yield select(selectId);
        const apiURL = `${apiBaseUrl}person/${id}${apiKey}${apiLang}`;
        const person = yield call(getDataFromApi, apiURL);
        yield put(setPersonDetails(person));
        yield call(fetchMovieGenresHandler);
        yield call(fetchPersonCreditsHandler);
        yield delay(500);
        yield put(setState("success"));
    } catch (error) {
        yield call(setError(error));
    }
};

function* fetchMovieGenresHandler() {
    try {
        const apiURL = `${apiBaseUrl}genre/movie/list${apiKey}${apiLang}`;
        const genres = yield call(getDataFromApi, apiURL);
        yield put(setMovieGenres(genres));
    } catch (error) {
        yield call(setError(error));
    }
};

function* fetchPersonCreditsHandler() {
    try {
        const id = yield select(selectId);
        const apiURL = `${apiBaseUrl}person/${id}/movie_credits${apiKey}${apiLang}`;
        const credits = yield call(getDataFromApi, apiURL);
        yield put(setPersonCredits(credits));
    } catch (error) {
        yield call(setError(error));
    }
};

export function* peopleSaga() {
    yield takeLatest(fetchPeopleList.type, fetchPeopleListHandler);
    yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsHandler);
};