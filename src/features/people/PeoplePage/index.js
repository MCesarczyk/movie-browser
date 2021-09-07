import { useEffect } from "react";
import { useSelector } from "react-redux";
import Wrapper from "../../../common/Wrapper";
import SlidesSection from "../../../common/SlidesSection";
import Tile from "../../../common/Tile"
import Pager from "../../../common/Pager";
import LoadingPage from "../../../common/LoadingPage";
import ErrorPage from "../../../common/ErrorPage";
import { useGetPopularPeople } from "../useGetPopularPeople";
import {
  selectImagesBaseURL,
  selectState,
  selectProfileSizes,
} from "../../../globalSlice";
import {
  selectPeopleList,
} from "../peopleSlice";

const PeoplePage = () => {
  const peopleList = useSelector(selectPeopleList);
  const peopleState = useSelector(selectState);
  const imgURL = useSelector(selectImagesBaseURL);
  const profileSizes = useSelector(selectProfileSizes);

  useGetPopularPeople();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const profileSizesArray = [
    profileSizes[1],
    profileSizes[1],
    profileSizes[1],
    profileSizes[1],
    profileSizes[1]
  ];

  const slideWidths = ["144px", "160px", "184px", "184px", "208px"];

  return (
    <>
      <Wrapper>
        {peopleState === "loading" &&
          <LoadingPage
            message="Loading people list..."
          />
        }
        {peopleState === "error" &&
          <ErrorPage />
        }
        {peopleState === "success" && peopleList &&
          <SlidesSection
            title="Popular people"
            body={peopleList.map((person, index) => (
              <Tile
                slide
                key={peopleList[index].id}
                personId={peopleList[index].id}
                imageWidth="100%"
                widths={slideWidths}
                sizes={profileSizesArray}
                imageBaseUrl={imgURL}
                imagePath={peopleList[index].profile_path}
                titleUrl={`/person/${peopleList[index].id}`}
                title={peopleList[index].name}
              />
            ))}
          />
        }
        {peopleState === "success" && <Pager property={"people"} />}
      </Wrapper>
    </>
  )
};

export default PeoplePage;