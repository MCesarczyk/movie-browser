import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    images: {
        backdrop_sizes: [],
        base_url: "",
        logo_sizes: [],
        poster_sizes: [],
        profile_sizes: [],
        secure_base_url: "",
        still_sizes: [],
    },
    genres: [],
};

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        fetchConfiguration: () => { },
        setConfiguration: (state, { payload: newConfiguration }) => {
            state.images = newConfiguration;
        },
        fetchMovieGenres: () => { },
        setMovieGenres: (state, { payload: genres }) => {
            state.genres = genres;
        },
        setError: (state, { payload: newError }) => {
            state.error = newError;
        },
    },
});

export const {
    fetchConfiguration,
    setConfiguration,
    fetchMovieGenres,
    setMovieGenres,
    setError,
} = commonSlice.actions;

const selectCommon = state => state.common;
const selectImagesConfiguration = state => selectCommon(state).images;

export const selectMoviesGenres = state => selectCommon(state).genres;
export const selectError = state => selectCommon(state).error;
export const selectImagesBaseURL = state => selectImagesConfiguration(state).secure_base_url;
export const selectPosterSizes = state => selectImagesConfiguration(state).poster_sizes;
export const selectProfileSizes = state => selectImagesConfiguration(state).profile_sizes;
export const selectBackdropSizes = state => selectImagesConfiguration(state).backdrop_sizes;

export default commonSlice.reducer;