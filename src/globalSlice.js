import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    config: {
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

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        fetchConfiguration: () => { },
        setConfig: (state, { payload: newConfig }) => {
            state.config = newConfig;
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
    setConfig,
    fetchMovieGenres,
    setMovieGenres,
    setPage,
    setId,
    setTotalResults,
    setTotalPages,
    setState,
    setError,
    setQuery,
} = globalSlice.actions;

const selectGlobal = state => state.global;
export const selectMoviesGenres = state => selectGlobal(state).genres;
export const selectPage = state => selectGlobal(state).page;
export const selectId = state => selectGlobal(state).id;
export const selectTotalResults = state => selectGlobal(state).totalResults;
export const selectTotalPages = state => selectGlobal(state).totalPages;
export const selectState = state => selectGlobal(state).state;
export const selectError = state => selectGlobal(state).error;
export const selectQuery = state => selectGlobal(state).query;

const selectConfig = state => selectGlobal(state).config
const selectImagesConfig = state => selectConfig(state).images;

export const selectImagesBaseURL = state => selectImagesConfig(state).secure_base_url;
export const selectPosterSizes = state => selectImagesConfig(state).poster_sizes;
export const selectProfileSizes = state => selectImagesConfig(state).profile_sizes;
export const selectBackdropSizes = state => selectImagesConfig(state).backdrop_sizes;

export default globalSlice.reducer;