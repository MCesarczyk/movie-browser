import { useEffect, useMemo } from "react";
import { useIsFetching, useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";

import { SEARCH_QUERY_PARAM_NAME } from "features/search/constants";
import { MOVIE_LIST_PATH, MOVIE_SEARCH_PATH } from "./constants";
import { moviesApi } from "./moviesApiAdapter";


export const useMoviesApiService = () => {
  const queryClient = useQueryClient();
  const { page }: any = useParams();

  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(SEARCH_QUERY_PARAM_NAME);
  const path = query ? MOVIE_SEARCH_PATH : MOVIE_LIST_PATH;

  const getQueryKey = useMemo(() => (
    (page: number, query?: string) => [
      path,
      {
        page,
        query,
      }
    ]
  ), [path]);

  useEffect(() => {
    page && queryClient.prefetchQuery(getQueryKey(+page + 1, query || undefined));
  }, [page, query, queryClient, getQueryKey]);

  const { status, error, data, isPreviousData } = useQuery(
    getQueryKey(page, query || undefined),
    () => moviesApi.getMoviesByPageWithOptionalQuery(path, page, query || undefined)
  );

  const movieList = data?.results || null;
  const totalPages = data?.total_pages || null;
  const totalResults = data?.total_results || null;

  const isFetching = useIsFetching();

  return { status, error, isPreviousData, isFetching, query, movieList, totalPages, totalResults };
};
