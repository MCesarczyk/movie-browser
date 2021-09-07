import { call, delay, put, select, takeLatest } from "redux-saga/effects";
import { getDataFromApi } from "../../getDataFromApi";
import { 
    selectId, 
    selectPage, 
    setError, 
    setState, 
    setTotalPages 
} from "../../globalSlice";
import {
    setPersonCredits,
    setPersonDetails,
    setPopularPeople,
    fetchPersonCredits,
    fetchPersonDetails,
    fetchPopularPeople,
    setMovieGenres,
    fetchMovieGenres
} from "./peopleSlice";

function* fetchPopularPeopleHandler() {
    try {
        yield put(setState("loading"));
        const page = yield select(selectPage);
        const apiURL = `https://api.themoviedb.org/3/person/popular?api_key=768f7875782193f5e4797762314da0b7&page=${page}&language=en-US`;
        const people = yield call(getDataFromApi, apiURL);
        yield put(setPopularPeople(people.results));
        yield put(setTotalPages(people.total_pages));
        yield delay(1_000);
        yield put(setState("success"));
    } catch (error) {
        yield call(setError(error));
    }
};

function* fetchMovieGenresHandler() {
    try {
        const apiURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=768f7875782193f5e4797762314da0b7&language=en-US";
        const genres = yield call(getDataFromApi, apiURL);
        yield put(setMovieGenres(genres));
    } catch (error) {
        yield call(setError(error));
    }
};

function* fetchPersonDetailsHandler() {
    try {
        const id = yield select(selectId);
        const apiURL = `https://api.themoviedb.org/3/person/${id}?api_key=768f7875782193f5e4797762314da0b7&language=en-US`;
        const person = yield call(getDataFromApi, apiURL);
        yield put(setPersonDetails(person));
    } catch (error) {
        yield call(setError(error));
    }
};

function* fetchPersonCreditsHandler() {
    try {
        const id = yield select(selectId);
        const apiURL = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=768f7875782193f5e4797762314da0b7&language=en-US`;
        const credits = yield call(getDataFromApi, apiURL);
        yield put(setPersonCredits(credits));
    } catch (error) {
        yield call(setError(error));
    }
};

export function* peopleSaga() {
    yield takeLatest(fetchPopularPeople.type, fetchPopularPeopleHandler);
    yield takeLatest(fetchMovieGenres.type, fetchMovieGenresHandler);
    yield takeLatest(fetchPersonDetails.type, fetchPersonDetailsHandler);
    yield takeLatest(fetchPersonCredits.type, fetchPersonCreditsHandler);
};