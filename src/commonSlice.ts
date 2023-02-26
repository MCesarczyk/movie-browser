import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface CommonSliceProps {
    images: {
        secure_base_url: string;
        backdrop_sizes: string[];
        poster_sizes: string[];
        profile_sizes: string[];
    },
};

const initialState: CommonSliceProps = {
    images: {
        secure_base_url: "",
        backdrop_sizes: [],
        poster_sizes: [],
        profile_sizes: [],
    },
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
    },
});

export const {
    fetchConfiguration,
    setConfiguration,
} = commonSlice.actions;

const selectCommon = (state: RootState) => state.common;
const selectImages = (state: RootState) => selectCommon(state).images;

export const selectImagesBaseURL = (state: RootState): string => selectImages(state).secure_base_url;
export const selectPosterSizes = (state: RootState): string[] => selectImages(state).poster_sizes;
export const selectProfileSizes = (state: RootState): string[] => selectImages(state).profile_sizes;
export const selectBackdropSizes = (state: RootState): string[] => selectImages(state).backdrop_sizes;

export default commonSlice.reducer;