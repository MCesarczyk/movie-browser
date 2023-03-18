import { useQuery } from "@tanstack/react-query";
import { ImagesConfiguration } from "./types";

import { COMMON_CONFIGURATION_CACHE_TIME, COMMON_CONFIGURATION_STALE_TIME, IMAGES_CONFIGURATION_PATH } from "./constants";
import { getDataFromApi } from "./restApiService";
import { buildRequestUrl } from "./utils";


export const useImagesConfigService = (initialValue: ImagesConfiguration) => {

  const imagesRequestUrl = buildRequestUrl(IMAGES_CONFIGURATION_PATH);

  const { status, data } = useQuery(
    [IMAGES_CONFIGURATION_PATH],
    () => getDataFromApi(imagesRequestUrl),
    {
      staleTime: COMMON_CONFIGURATION_STALE_TIME,
      cacheTime: COMMON_CONFIGURATION_CACHE_TIME,
    },
  );

  const baseUrl = data?.images.secure_base_url || "";
  const posterSizes = data?.images.poster_sizes || [];
  const profileSizes = data?.images.profile_sizes || [];
  const backdropSizes = data?.images.backdrop_sizes || [];

  const config = { baseUrl, posterSizes, profileSizes, backdropSizes };

  const imagesConfig = (status === "success") ? config : initialValue;

  return imagesConfig;
};
