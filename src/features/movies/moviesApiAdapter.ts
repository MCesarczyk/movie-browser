import { buildRequestUrl } from 'utils/buildRequestUrl';
import { getDataFromApi } from 'utils/getDataFromApi';
import { MoviesListApiResponse } from './interfaces';

export const moviesApiAdapter = {
  getAllMovies: (): Promise<MoviesListApiResponse> => getDataFromApi(buildRequestUrl('movie/popular')),

  getMoviesByPage: (page: string): Promise<MoviesListApiResponse> => getDataFromApi(buildRequestUrl('movie/popular', page)),
};
