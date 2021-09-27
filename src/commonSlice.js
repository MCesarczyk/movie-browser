import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    images: {
        secure_base_url: "",
        backdrop_sizes: [],
        poster_sizes: [],
        profile_sizes: [],
    },
    genres: [],
};

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        fetchConfiguration: () => { },
        setConfiguration: (state, {
            payload: {
                secure_base_url,
                backdrop_sizes,
                poster_sizes,
                profile_sizes,
            }
        }) => {
            state.images.secure_base_url = secure_base_url;
            state.images.backdrop_sizes = backdrop_sizes;
            state.images.poster_sizes = poster_sizes;
            state.images.profile_sizes = profile_sizes;
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
const selectImages = state => selectCommon(state).images;

export const selectImagesBaseURL = state => selectImages(state).secure_base_url;
export const selectPosterSizes = state => selectImages(state).poster_sizes;
export const selectProfileSizes = state => selectImages(state).profile_sizes;
export const selectBackdropSizes = state => selectImages(state).backdrop_sizes;
export const selectMoviesGenres = state => selectCommon(state).genres;
export const selectError = state => selectCommon(state).error;

export default commonSlice.reducer;