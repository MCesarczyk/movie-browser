import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../../../common/Wrapper";
import Tile from "../../../common/Tile"
import Pager from "../../../common/Pager";
import LoadingPage from "../../../common/LoadingPage";
import ErrorPage from "../../../common/ErrorPage";
import { useGetConfig } from "../../../useGetConfig";
import { useGetPopularPeople } from "../useGetPopularPeople";
import {
  selectPeopleList,
} from "../peopleSlice";
import {
  selectImagesBaseURL,
  selectState,
  setProfileSize,
  selectProfileSizes,
  selectProfileSize,
  selectSlideWidth,
  setSlideWidth
} from "../../../globalSlice";
import { useEffect } from "react";
import SlidesSection from "../../../common/SlidesSection copy";

const PeoplePage = () => {
  const dispatch = useDispatch();
  const peopleList = useSelector(selectPeopleList);
  const peopleState = useSelector(selectState);
  const imgURL = useSelector(selectImagesBaseURL);
  const profileSizes = useSelector(selectProfileSizes);
  const profileSize = useSelector(selectProfileSize);
  const slideWidth = useSelector(selectSlideWidth);

  useGetConfig();
  useGetMovieGenres();
  useGetPopularPeople();

  // eslint-disable-next-line
  const adjustPhotoSizes = () => {
    const maxwidth = window.innerWidth;
    if (maxwidth > "1280") {
      dispatch(setProfileSize(profileSizes[3]));
      dispatch(setSlideWidth("324px"));
    } else if (maxwidth > "620") {
      dispatch(setProfileSize(profileSizes[3]));
      dispatch(setSlideWidth("286px"));
    } else if (maxwidth > "480") {
      dispatch(setProfileSize(profileSizes[3]));
      dispatch(setSlideWidth("228px"));
    } else {
      dispatch(setProfileSize(profileSizes[1]));
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
                width={slidWidth}
                imageWidth="100%"
                personId={peopleList[index].id}
                key={peopleList[index].id}
                personUrl={`/person/${peopleList[index].id}`}
                imageUrl={`${imgURL}${profileSize}${peopleList[index].profile_path}`}
              // title={peopleList[index].title}
              />
            ))}
          />
        }
        {peopleState === "success" && <Pager />}
      </Wrapper>
    </>
  )
};

export default PeoplePage;