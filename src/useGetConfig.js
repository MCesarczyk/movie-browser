import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setConfig } from "./configSlice";

export const useGetConfig = () => {
    const apiURL = "https://api.themoviedb.org/3/configuration?api_key=768f7875782193f5e4797762314da0b7";
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(apiURL)
            .then(response => response.json())
            .then(config => dispatch(setConfig(config)))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};