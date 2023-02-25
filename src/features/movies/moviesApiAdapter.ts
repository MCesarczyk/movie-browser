import { buildRequestUrl } from 'utils/buildRequestUrl';
import { getDataFromApi } from 'utils/getDataFromApi';
import { MoviesListApiResponse } from './interfaces';

export const moviesApi = {
  getMoviesByPageWithOptionalQuery: (path: string, page: string, query?: string): Promise<MoviesListApiResponse> => {
    return getDataFromApi(buildRequestUrl(path, page, query))
  },
};
