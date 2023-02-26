import { useEffect, useMemo } from "react";
import { useIsFetching, useQuery, useQueryClient } from "react-query";
import { useLocation, useParams } from "react-router-dom";

import searchQueryParamName from "features/search/searchQueryParamName";
import { peopleApi } from "./peopleApiAdapter";
import { PEOPLE_LIST_PATH, PEOPLE_SEARCH_PATH } from "./constants";


export const usePeopleApiService = () => {
  const queryClient = useQueryClient();
  const { page }: any = useParams();

  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);
  const path = query ? PEOPLE_SEARCH_PATH : PEOPLE_LIST_PATH;

  const getQueryKey = useMemo(() => (
    (page: number, query?: string) => [
      path,
      {
        page,
        query,
      }
    ]
  ), [path, query]);

  useEffect(() => {
    page && queryClient.prefetchQuery(getQueryKey(+page + 1, query || undefined));
  }, [page, query, queryClient, getQueryKey]);

  const { status, error, data, isPreviousData } = useQuery(
    getQueryKey(page, query || undefined),
    () => peopleApi.getPeopleByPageWithOptionalQuery(path, page, query || undefined)
  );

  const peopleList = data?.results || null;
  const totalPages = data?.total_pages || null;
  const totalResults = data?.total_results || null;

  const isFetching = useIsFetching();

  return { status, error, isPreviousData, isFetching, query, peopleList, totalPages, totalResults };
};
