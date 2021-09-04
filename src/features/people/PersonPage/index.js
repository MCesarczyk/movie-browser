import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../../common/Wrapper";
import Tile from "../../../common/Tile"
import {
    selectImagesBaseURL,
    selectPosterSize,
    selectPosterSizes,
    setPosterSize
} from "../../../globalSlice";
import { useGetConfig } from "../../../useGetConfig";
import { useEffect } from "react";
import { selectPersonDetails } from "../peopleSlice";
import { useGetPersonDetails } from "../useGetPersonDetails"

const PersonPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const personId = id;
    const personDetails = useSelector(selectPersonDetails);
    const imgURL = useSelector(selectImagesBaseURL);
    const posterSize = useSelector(selectPosterSize);
    const posterSizes = useSelector(selectPosterSizes);

    useGetConfig();
    useGetPersonDetails(personId);

    // eslint-disable-next-line
    const adjustPhotoSizes = () => {
        const maxwidth = window.innerWidth;
        if (maxwidth > "1280") {
            dispatch(setPosterSize(posterSizes[4]))
        } else if (maxwidth > "768") {
            dispatch(setPosterSize(posterSizes[3]))
        } else if (maxwidth > "480") {
            dispatch(setPosterSize(posterSizes[2]))
        } else {
            dispatch(setPosterSize(posterSizes[1]))
        };
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        adjustPhotoSizes();
    }, [adjustPhotoSizes]);

    window.addEventListener("resize", adjustPhotoSizes);

    return (
        <>
            <Wrapper>
                <Tile
                    oversize
                    key={personId}
                    movieId={personId}
                    imageWidth="312px"
                    titleUrl={`/person/${personId}`}
                    imageUrl={personDetails && `${imgURL}${posterSize}${personDetails.profile_path}`}
                    title={personDetails.name}
                    birthday={personDetails.birthday}
                    birthPlace={personDetails.place_of_birth}
                    overview={personDetails.biography}
                />
            </Wrapper>
        </>
    );
};

export default PersonPage;