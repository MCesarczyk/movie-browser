import { useContext, useEffect } from "react";

import Section from "common/Section";
import Tile from "core/Tile"
import { Pager } from "core/Pager";
import { CorePage } from "core/CorePage";
import { usePeopleApiService } from "./peopleApiService";
import { API_TOTAL_PAGES_LIMIT, PEOPLE_LIST_URL, PERSON_DETAILS_URL } from "./constants";
import { Person } from "./interfaces";
import { ImagesConfigContext } from "services/ImagesConfigContext";


export const PeoplePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { baseUrl, profileSizes } = useContext(ImagesConfigContext);

    const profileSizesArray = [
        profileSizes[1],
        profileSizes[1],
        profileSizes[1],
        profileSizes[1],
        profileSizes[1]
    ];

    const personTileWidths = ["136px", "160px", "184px", "184px", "208px"];

    const { status, error, isPreviousData, isFetching, query, peopleList, totalPages, totalResults } = usePeopleApiService();

    return (
        <CorePage
            status={status}
            error={error}
            query={query}
            isDataPresent={!!totalResults}
            loadingMessage="Loading people list..."
            isFetching={!!isFetching}
        >
            <>
                <Section
                    isObsolete={isPreviousData}
                    title={query ? `Search results for "${query}" (${totalResults})` : "Popular people"}
                    itemsList={peopleList && peopleList.map((person: Person) => (
                        // @ts-ignore
                        <Tile
                            person="true"
                            key={person.id}
                            personId={person.id}
                            imageWidth="100%"
                            widths={personTileWidths}
                            sizes={profileSizesArray}
                            imageBaseUrl={baseUrl}
                            imagePath={person.profile_path}
                            detailsUrl={`${PERSON_DETAILS_URL}/${person.id}`}
                            title={person.name}
                        />
                    ))}
                />
                {totalPages && (
                    <Pager
                        totalPages={
                            totalPages < API_TOTAL_PAGES_LIMIT
                                ? totalPages
                                : API_TOTAL_PAGES_LIMIT
                        }
                        property={PEOPLE_LIST_URL}
                    />
                )}
            </>
        </CorePage>
    );
};
