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
    page: 1,
    id: "",
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
        setPage: (state, {payload: currentPage}) => {
            state.page = currentPage;
        },
        setId: (state, {payload: currentId}) => {
            state.id = currentId;
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
        setQuery: (state, {payload: newQuery}) => {
            state.query = newQuery;
        },
    },
});

export const {
    fetchConfiguration,
    setConfig,
    setPage,
    setId,
    setTotalPages,
    setState,
    setError,
    setQuery,
} = globalSlice.actions;

export const selectConfig = state => state.global;
export const selectImagesConfig = state => state.global.config.images;
export const selectImagesBaseURL = state => state.global.config.images.secure_base_url;
export const selectPosterSizes = state => state.global.config.images.poster_sizes;
export const selectBackdropSizes = state => state.global.config.images.backdrop_sizes;
export const selectProfileSizes = state => state.global.config.images.profile_sizes;
export const selectPage = state => state.global.page;
export const selectId = state =>state.global.id;
export const selectTotalPages = state => state.global.totalPages;
export const selectState = state => state.global.state;
export const selectError = state => state.global.error;
export const selectQuery = state => state.global.query;

export default globalSlice.reducer;