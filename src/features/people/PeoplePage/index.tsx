import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";

import Section from "common/Section";
import { selectImagesBaseURL, selectProfileSizes } from "commonSlice";
import CorePage from "core/CorePage";
import Tile from "core/Tile"
import Pager from "core/Pager";
import searchQueryParamName from "features/search/searchQueryParamName";
import {
    setPeoplePage,
    setPeopleQuery,
    clearPeopleList,
    selectPeopleResults,
    selectPeopleTotalResults,
} from "features/people/peopleSlice";


const PeoplePage = () => {
    const dispatch = useDispatch();
    const { page }: any = useParams();
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    useEffect(() => {
        dispatch(setPeopleQuery(query));
    }, [dispatch, query]);

    useEffect(() => {
        dispatch(setPeoplePage(page as string || "1"));
    }, [dispatch, page]);

    useEffect(() => {
        window.scrollTo(0, 0);

        return () => {
            dispatch(clearPeopleList());
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const peopleList = useSelector(selectPeopleResults);
    const totalResults = useSelector(selectPeopleTotalResults);
    const imgURL = useSelector(selectImagesBaseURL);
    const profileSizes = useSelector(selectProfileSizes);

    const profileSizesArray = [
        profileSizes[1],
        profileSizes[1],
        profileSizes[1],
        profileSizes[1],
        profileSizes[1]
    ];

    const personTileWidths = ["136px", "160px", "184px", "184px", "208px"];

    return (
        <CorePage
            message="Loading people list..."
            body={
                <>
                    <Section
                        title={query ? `Search results for "${query}" (${totalResults})` : "Popular people"}
                        itemsList={peopleList.map((person, index) => (
                            // @ts-ignore
                            <Tile
                                person="true"
                                key={peopleList[index].id}
                                personId={peopleList[index].id}
                                imageWidth="100%"
                                widths={personTileWidths}
                                sizes={profileSizesArray}
                                imageBaseUrl={imgURL}
                                imagePath={peopleList[index].profile_path}
                                detailsUrl={`/person/${peopleList[index].id}`}
                                title={peopleList[index].name}
                            />
                        ))}
                    />
                    < Pager totalPages={1} property={"/people"} />
                </>
            }
        />
    )
};

export default PeoplePage;