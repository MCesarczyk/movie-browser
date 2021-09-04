import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setPerson } from "./peopleSlice";

export const useGetPersonDetails = () => {
    const { id } = useParams();
    const personId = id;
    const apiURL = `https://api.themoviedb.org/3/person/${personId}?api_key=768f7875782193f5e4797762314da0b7&language=en-US`;
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(apiURL)
            .then(response => response.json())
            .then(person => dispatch(setPerson(person)))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};