import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import Section from "../../../common/Section";
import CorePage from "../../../core/CorePage";
import Tile from "../../../common/Tile"
import searchQueryParamName from "../../Navigation/Search/searchQueryParamName";
import {
  selectImagesBaseURL,
  selectProfileSizes,
  setQuery,
  setPage,
  selectTotalResults,
} from "../../../globalSlice";
import {
  fetchPeopleList,
  selectPeopleList,
} from "../peopleSlice";

const PeoplePage = () => {
  const dispatch = useDispatch();
  const { page } = useParams();
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

  useEffect(() => {
    dispatch(setQuery(query));
    dispatch(fetchPeopleList());
    // eslint-disable-next-line
  }, [query]);

  useEffect(() => {
    dispatch(setPage(page));
    dispatch(fetchPeopleList());
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const peopleList = useSelector(selectPeopleList);
  const imgURL = useSelector(selectImagesBaseURL);
  const profileSizes = useSelector(selectProfileSizes);
  const totalResults = useSelector(selectTotalResults);

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
        <Section
          title={query ? `Search results for "${query}" (${totalResults})` : "Popular people"}
          itemsList={peopleList.map((person, index) => (
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
      }
    />
  )
};

export default PeoplePage;