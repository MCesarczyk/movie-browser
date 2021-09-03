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
    totalPages: 500,
    state: "idle",
    posterSize: "w500",
    posterWidth: "312",
    profileSize: "h632",
    slideWidth: "177",
    backdropSize: "w1280",
};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setConfig: (state, { payload: newConfig }) => {
            state.config = newConfig;
        },
        setPosterSize: (state, { payload: newSize }) => {
            state.posterSize = newSize;
        },
        setPosterWidth: (state, { payload: newWidth }) => {
            state.posterWidth = newWidth;
        },
        setProfileSize: (state, { payload: newSize }) => {
            state.profileSize = newSize;
        },
        setSlideWidth: (state, { payload: newWidth }) => {
            state.slideWidth = newWidth;
        },
        setBackdropSize: (state, { payload: newSize }) => {
            state.backdropSize = newSize;
        },
        setTotalPages: (state, { payload: totalPages }) => {
            state.totalPages = totalPages;
        },
        setState: (state, { payload: stateName }) => {
            state.state = stateName;
        },
    },
});

export const {
    setConfig,
    setPosterSize,
    setPosterWidth,
    setProfileSize,
    setSlideWidth,
    setBackdropSize,
    setTotalPages,
    setState,
} = globalSlice.actions;

export const selectConfig = state => state.global;
export const selectImagesConfig = state => state.global.config.images;
export const selectImagesBaseURL = state => state.global.config.images.secure_base_url;
export const selectPosterSizes = state => state.global.config.images.poster_sizes;
export const selectProfileSizes = state => state.global.config.images.profile_sizes;
export const selectBackdropSizes = state => state.global.config.images.backdrop_sizes;
export const selectPosterSize = state => state.global.posterSize;
export const selectPosterWidth = state => state.global.posterWidth;
export const selectProfileSize = state => state.global.profileSize;
export const selectSlideWidth = state => state.global.slideWidth;
export const selectBackdropSize = state => state.global.backdropSize;
export const selectTotalPages = state => state.global.totalPages;
export const selectState = state => state.global.state;

export default globalSlice.reducer;