import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../../../common/Wrapper";
import Section from "../../../common/Section";
import Tile from "../../../common/Tile"
import Pager from "../../../common/Pager";
import LoadingPage from "../../../common/LoadingPage";
import ErrorPage from "../../../common/ErrorPage";
import { useGetConfig } from "../../../useGetConfig";
import { useGetPopularPeople } from "../useGetPopularPeople";
import {
  selectImagesBaseURL,
  selectState,
  setProfileSize,
  selectProfileSizes,
  selectProfileSize,
  selectSlideWidth,
  setSlideWidth
} from "../../../globalSlice";
import {
  selectPeopleList,
} from "../peopleSlice";

const PeoplePage = () => {
  const dispatch = useDispatch();
  const peopleList = useSelector(selectPeopleList);
  const peopleState = useSelector(selectState);
  const imgURL = useSelector(selectImagesBaseURL);
  const profileSizes = useSelector(selectProfileSizes);
  const profileSize = useSelector(selectProfileSize);
  const slideWidth = useSelector(selectSlideWidth);

  useGetConfig();
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
          <Section
            title="Popular people"
            body={peopleList.map((person, index) => (
              <Tile
                width={slideWidth}
                imageWidth="100%"
                personId={peopleList[index].id}
                key={peopleList[index].id}
                titleUrl={`/person/${peopleList[index].id}`}
                imageUrl={`${imgURL}${profileSize}${peopleList[index].profile_path}`}
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