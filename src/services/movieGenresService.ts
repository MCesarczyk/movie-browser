import { useQuery } from "@tanstack/react-query";

import { COMMON_CONFIGURATION_CACHE_TIME, COMMON_CONFIGURATION_STALE_TIME, MOVIES_GENRES_PATH } from "./constants";
import { getDataFromApi } from "./restApiService";
import { buildRequestUrl } from "./utils";


export const useMovieGenresService = () => {
  const genresRequestUrl = buildRequestUrl(MOVIES_GENRES_PATH);

  const { status: genresStatus, data: genresData } = useQuery(
    [MOVIES_GENRES_PATH],
    () => getDataFromApi(genresRequestUrl),
    {
      staleTime: COMMON_CONFIGURATION_STALE_TIME,
      cacheTime: COMMON_CONFIGURATION_CACHE_TIME,
    },
  );

  const genres = (genresStatus === "success") ? genresData?.genres : null;

  return { genres };
};
