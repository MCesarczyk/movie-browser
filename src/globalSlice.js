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
    error: "",
};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        fetchConfiguration: () => { },
        setConfig: (state, { payload: newConfig }) => {
            state.config = newConfig;
        },
        setError: (state, {payload: newError}) => {
            state.error = newError;
        },
    },
});

export const {
    fetchConfiguration,
    setConfig,
    setError,
} = globalSlice.actions;

export const selectConfig = state => state.global;
export const selectImagesConfig = state => state.global.config.images;
export const selectImagesBaseURL = state => state.global.config.images.secure_base_url;
export const selectPosterSizes = state => state.global.config.images.poster_sizes;
export const selectBackdropSizes = state => state.global.config.images.backdrop_sizes;
export const selecterror = state => state.global.error;

export default globalSlice.reducer;