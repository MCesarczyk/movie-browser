import { useQuery } from "react-query";

import { COMMON_CONFIGURATION_CACHE_TIME, COMMON_CONFIGURATION_STALE_TIME, IMAGES_CONFIGURATION_PATH } from "./constants";
import { getDataFromApi } from "./restApiService";
import { buildRequestUrl } from "./utils";


export const useImageSizesService = () => {

  const imagesRequestUrl = buildRequestUrl(IMAGES_CONFIGURATION_PATH);

  const { status: imagesStatus, data: imagesData } = useQuery(
    IMAGES_CONFIGURATION_PATH,
    () => getDataFromApi(imagesRequestUrl),
    {
      staleTime: COMMON_CONFIGURATION_STALE_TIME,
      cacheTime: COMMON_CONFIGURATION_CACHE_TIME,
    },
  );

  const baseURL = imagesData?.images.secure_base_url;
  const posterSizes = imagesData?.images.poster_sizes;
  const profileSizes = imagesData?.images.profile_sizes;
  const backdropSizes = imagesData?.images.backdrop_sizes;

  const config = { baseURL, posterSizes, profileSizes, backdropSizes };

  const images = (imagesStatus === "success") ? config : null;

  return { images };
};
