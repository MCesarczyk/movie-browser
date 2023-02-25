import { useEffect } from "react";
import { useIsFetching, useQuery, useQueryClient } from "react-query";
import { useLocation, useParams } from "react-router-dom";

import searchQueryParamName from "features/search/searchQueryParamName";
import { moviesApi } from "./moviesApiAdapter";


export const useMoviesApiService = () => {
  const queryClient = useQueryClient();
  const { page }: any = useParams();

  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

  const path = query ? "search/movie" : "movie/popular";

  const getQueryKey = (page: number, query?: string) => [
    path,
    {
      page,
      query,
    }
  ];

  useEffect(() => {
    queryClient.prefetchQuery(getQueryKey(+page + 1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, queryClient]);

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
