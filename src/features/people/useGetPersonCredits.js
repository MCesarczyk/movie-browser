import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPersonCredits } from "./peopleSlice";

export const useGetPersonCredits = (personId) => {
    const apiURL = `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=768f7875782193f5e4797762314da0b7&language=en-US`;
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(apiURL)
            .then(response => response.json())
            .then(credits => dispatch(setPersonCredits(credits)))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};