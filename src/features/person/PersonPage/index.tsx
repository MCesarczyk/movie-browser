import { lazy, Suspense, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ActingMovieDetailed, PersonDetails, PersonDetailsInitialState } from "types";
import { Wrapper } from "common/Wrapper";
import LoadingCircle from "common/LoadingCircle";
import CorePage from "core/CorePage";
import Tile from "core/Tile"
import {
    selectImagesBaseURL,
    selectPosterSizes,
    selectProfileSizes,
} from "commonSlice";
import {
    setPersonId,
    clearPersonData,
    selectPersonDetails,
    selectPersonCast,
    selectPersonCrew,
} from "features/person/personSlice";
const Section = lazy(() => import('common/Section'));


const PersonPage = () => {
    const dispatch = useDispatch();
    const { id }: any = useParams();
    const personDetails: PersonDetailsInitialState | PersonDetails = useSelector(selectPersonDetails);
    const imgURL: string = useSelector(selectImagesBaseURL);
    const posterSizes = useSelector(selectPosterSizes);
    const profileSizes = useSelector(selectProfileSizes);
    const personCast: ActingMovieDetailed[] = useSelector(selectPersonCast);
    const personCrew: ActingMovieDetailed[] = useSelector(selectPersonCrew);

    useEffect(() => {
        dispatch(setPersonId(id as string));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, id as string]);

    useEffect(() => {
        window.scrollTo(0, 0);

        return () => {
            dispatch(clearPersonData());
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const personTileWidths = ["100%", "228px", "286px", "286px", "324px"];
    const tileWidths = ["100%", "100%", "100%", "100%", "100%"];
    return (
        <CorePage
            message="Loading person details..."
            body={
                <>
                    <Wrapper>
                        {/* @ts-ignore */}
                        <Tile
                            oversize="true"
                            oversizepersontile="true"
                            key={id}
                            sizes={posterSizesArray}
                            imageWidth="312px"
                            widths={tileWidths}
                            detailsUrl={`/person/${id}`}
                            imageBaseUrl={imgURL}
                            imagePath={personDetails.profile_path}
                            title={personDetails.name}
                            birthday={personDetails.birthday}
                            birthPlace={personDetails.place_of_birth}
                            overview={personDetails.biography}
                        />
                        <Suspense fallback={<LoadingCircle />}>
                            {personCast && personCast.length > 0 &&
                                <Section
                                    title={`Cast (${personCast.length})`}
                                    itemsList={personCast && personCast.map((movie, index) => (
                                        // @ts-ignore
                                        <Tile
                                            key={`cast:${personCast[index].credit_id}`}
                                            detailsUrl={`/movie/${personCast[index].id}`}
                                            imageWidth="100%"
                                            widths={personTileWidths}
                                            imageBaseUrl={imgURL}
                                            imagePath={personCast[index].poster_path}
                                            sizes={profileSizesArray}
                                            title={personCast[index].title}
                                            subtitle={`
                                    ${personCast[index].character}
                                    ${personCast[index].release_date && "(" + new Date(Date.parse(personCast[index].release_date)).getFullYear().toString() + ")"}
                                `}
                                            genreIds={personCast[index].genre_ids}
                                            rating={personCast[index].vote_average}
                                            votes={personCast[index].vote_count}
                                        />
                                    ))
                                    }
                                />
                            }
                            {personCrew && personCrew.length > 0 &&
                                <Section
                                    title={`Crew (${personCrew.length})`}
                                    itemsList={personCrew && personCrew.map((movie, index) => (
                                        // @ts-ignore
                                        <Tile
                                            key={`crew:${personCrew[index].credit_id}`}
                                            detailsUrl={`/movie/${personCrew[index].id}`}
                                            widths={personTileWidths}
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
                                    ))
                                    }
                                />
                            }
                        </Suspense>
                    </Wrapper>
                </>
            }
        />
    );
};
export default PersonPage;