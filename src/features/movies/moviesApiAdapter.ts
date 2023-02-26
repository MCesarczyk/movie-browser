import { buildRequestUrl } from 'services/utils';
import { getDataFromApi } from 'services/getDataFromApi';
import { MoviesListApiResponse } from './interfaces';

export const moviesApi = {
  getMoviesByPageWithOptionalQuery: (path: string, page: string, query?: string): Promise<MoviesListApiResponse> => {
    return getDataFromApi(buildRequestUrl(path, page, query))
  },
};
