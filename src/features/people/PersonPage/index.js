import React, { Suspense } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../../common/Wrapper";
import Tile from "../../../common/Tile"
import LoadingCircle from "../../../common/LoadingPage/LoadingCircle";
import { useGetConfig } from "../../../useGetConfig";
import { useGetPersonDetails } from "../useGetPersonDetails"
import { useGetPersonCredits } from "../useGetPersonCredits";
import {
    selectImagesBaseURL,
    selectPosterSize,
    selectPosterSizes,
    setPosterSize
} from "../../../globalSlice";
import { selectPersonCast, selectPersonCrew, selectPersonDetails } from "../peopleSlice";
const Section = React.lazy(() => import('../../../common/Section'));

const PersonPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const personId = id;
    const personDetails = useSelector(selectPersonDetails);
    const imgURL = useSelector(selectImagesBaseURL);
    const posterSize = useSelector(selectPosterSize);
    const posterSizes = useSelector(selectPosterSizes);
    const personCast = useSelector(selectPersonCast);
    const personCrew = useSelector(selectPersonCrew);

    useGetConfig();
    useGetPersonDetails(personId);
    useGetPersonCredits(personId);

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
                <Suspense fallback={<LoadingCircle />}>
                    {personCast && <Section
                        title="Cast"
                        body={personCast && personCast.map((person, index) => (
                            <Tile
                                key={personCast[index].credit_id}
                                titleUrl={`/movie/${personCast[index].id}`}
                                imageUrl={`${imgURL}${posterSize}${personCast[index].poster_path}`}
                                title={personCast[index].title}
                                subtitle={`
                                    ${personCast[index].character}
                                    ${personCast && "(" + new Date(Date.parse(personCast[index].release_date)).getFullYear().toString() + ")"}
                                `}
                                genreIds={personCast[index].genre_ids}
                                rating={personCast[index].vote_average}
                                votes={personCast[index].vote_count}
                            />
                        ))}
                    />}
                    {personCrew && <Section
                        title="Crew"
                        body={personCrew && personCrew.map((person, index) => (
                            <Tile
                                key={personCrew[index].credit_id}
                                titleUrl={`/movie/${personCrew[index].id}`}
                                imageUrl={`${imgURL}${posterSize}${personCrew[index].poster_path}`}
                                title={personCrew[index].title}
                                subtitle={`
                                    ${personCrew[index].job}
                                    ${personCrew[index].release_date && "(" + new Date(Date.parse(personCrew[index].release_date)).getFullYear().toString() + ")"}
                                `}
                                genreIds={personCrew[index].genre_ids}
                                rating={personCrew[index].vote_average}
                                votes={personCrew[index].vote_count}
                            />
                        ))}
                    />}
                </Suspense>
            </Wrapper>
        </>
    );
};

export default PersonPage;