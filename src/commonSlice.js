import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    configuration: {
        change_keys: [],
        images: {
            backdrop_sizes: [],
            base_url: "",
            logo_sizes: [],
            poster_sizes: [],
            profile_sizes: [],
            secure_base_url: "",
            still_sizes: [],
        },
    },
    genres: [],
    page: 1,
    id: "",
    totalResults: 10_000,
    totalPages: 500,
    state: "idle",
    error: "",
    query: "",
};

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        fetchConfiguration: () => { },
        setConfiguration: (state, { payload: newConfiguration }) => {
            state.configuration = newConfiguration;
        },
        fetchMovieGenres: () => { },
        setMovieGenres: (state, { payload: genres }) => {
            state.genres = genres;
        },
        setPage: (state, { payload: currentPage }) => {
            state.page = currentPage;
        },
        setId: (state, { payload: currentId }) => {
            state.id = currentId;
        },
        setTotalResults: (state, { payload: totalResults }) => {
            state.totalResults = totalResults;
        },
        setTotalPages: (state, { payload: totalPages }) => {
            state.totalPages = totalPages;
        },
        setState: (state, { payload: stateName }) => {
            state.state = stateName;
        },
        setError: (state, { payload: newError }) => {
            state.error = newError;
        },
        setQuery: (state, { payload: newQuery }) => {
            state.query = newQuery;
        },
    },
});

export const {
    fetchConfiguration,
    setConfiguration,
    fetchMovieGenres,
    setMovieGenres,
    setPage,
    setId,
    setTotalResults,
    setTotalPages,
    setState,
    setError,
    setQuery,
} = commonSlice.actions;

const selectCommon = state => state.common;
export const selectMoviesGenres = state => selectCommon(state).genres;
export const selectPage = state => selectCommon(state).page;
export const selectId = state => selectCommon(state).id;
export const selectTotalResults = state => selectCommon(state).totalResults;
export const selectTotalPages = state => selectCommon(state).totalPages;
export const selectState = state => selectCommon(state).state;
export const selectError = state => selectCommon(state).error;
export const selectQuery = state => selectCommon(state).query;

const selectConfiguration = state => selectCommon(state).configuration
const selectImagesConfiguration = state => selectConfiguration(state).images;

export const selectImagesBaseURL = state => selectImagesConfiguration(state).secure_base_url;
export const selectPosterSizes = state => selectImagesConfiguration(state).poster_sizes;
export const selectProfileSizes = state => selectImagesConfiguration(state).profile_sizes;
export const selectBackdropSizes = state => selectImagesConfiguration(state).backdrop_sizes;

export default commonSlice.reducer;