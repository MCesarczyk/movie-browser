import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface CommonSliceProps {
    images: {
        secure_base_url: string;
        backdrop_sizes: number[];
        poster_sizes: number[];
        profile_sizes: number[];
    },
    genres: string[];
};

const initialState: CommonSliceProps = {
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
    },
});

export const {
    fetchConfiguration,
    setConfiguration,
    fetchMovieGenres,
    setMovieGenres,
} = commonSlice.actions;

const selectCommon = (state: RootState) => state.common;
const selectImages = (state: RootState) => selectCommon(state).images;

export const selectImagesBaseURL = (state: RootState): string => selectImages(state).secure_base_url;
export const selectPosterSizes = (state: RootState): number[] => selectImages(state).poster_sizes;
export const selectProfileSizes = (state: RootState): number[] => selectImages(state).profile_sizes;
export const selectBackdropSizes = (state: RootState): number[] => selectImages(state).backdrop_sizes;
export const selectMoviesGenres = (state: RootState): string[] => selectCommon(state).genres;

export default commonSlice.reducer;