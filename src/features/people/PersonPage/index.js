import React, { Suspense } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Wrapper from "../../../common/Wrapper";
import Tile from "../../../common/Tile"
import LoadingCircle from "../../../common/LoadingPage/LoadingCircle";
import { useGetPersonDetails } from "../useGetPersonDetails"
import { useGetPersonCredits } from "../useGetPersonCredits";
import {
    selectPersonCast,
    selectPersonCrew,
    selectPersonDetails
} from "../peopleSlice";
import {
    selectImagesBaseURL,
    selectPosterSizes,
    selectProfileSizes,
} from "../../../globalSlice";
const Section = React.lazy(() => import('../../../common/TilesSection'));

const PersonPage = () => {
    const { id } = useParams();
    const personId = id;
    const personDetails = useSelector(selectPersonDetails);
    const imgURL = useSelector(selectImagesBaseURL);
    const posterSizes = useSelector(selectPosterSizes);
    const profileSizes = useSelector(selectProfileSizes);
    const personCast = useSelector(selectPersonCast);
    const personCrew = useSelector(selectPersonCrew);

    useGetPersonDetails(personId);
    useGetPersonCredits(personId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const posterSizesArray = [
        posterSizes[1],
        posterSizes[2],
        posterSizes[2],
        posterSizes[3],
        posterSizes[3]
    ];

    const profileSizesArray = [
        profileSizes[1],
        profileSizes[1],
        profileSizes[1],
        profileSizes[1],
        profileSizes[2]
    ];

    const slideWidths = ["100%", "228px", "286px", "286px", "324px"];
    const tileWidths = ["100%", "100%", "100%", "100%", "100%"];


    return (
        <>
            <Wrapper>
                <Tile
                    oversize
                    key={personId}
                    movieId={personId}
                    sizes={posterSizesArray}
                    imageWidth="312px"
                    widths={tileWidths}
                    titleUrl={`/person/${personId}`}
                    imageBaseUrl={imgURL}
                    imagePath={personDetails.profile_path}
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
                                imageWidth="100%"
                                widths={slideWidths}
                                imageBaseUrl={imgURL}
                                imagePath={personCast[index].poster_path}
                                sizes={profileSizesArray}
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
                                widths={slideWidths}
                                imageBaseUrl={imgURL}
                                imagePath={personCrew[index].poster_path}
                                sizes={profileSizesArray}
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