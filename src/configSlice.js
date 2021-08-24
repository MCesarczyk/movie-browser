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
    posterSize: "w500",
};

const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setConfig: (state, { payload: newConfig }) => {
            state.config = newConfig;
        },
        setPosterSize: (state, { payload: newSize }) => {
            state.posterSize = newSize;
        },
    },
});

export const {
    setConfig,
    setPosterSize,
} = configSlice.actions;

export const selectConfig = state => state.config;
export const selectImagesConfig = state => state.config.config.images;
export const selectImagesBaseURL = state => state.config.config.images.secure_base_url;
export const selectPosterSizes = state => state.config.config.images.poster_sizes;
export const selectBackdropSizes = state => state.config.config.images.backdrop_sizes;
export const selectPosterSize = state => state.config.posterSize;

export default configSlice.reducer;