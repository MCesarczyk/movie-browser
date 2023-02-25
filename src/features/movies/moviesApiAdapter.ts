import { buildRequestUrl } from 'utils/buildRequestUrl';
import { getDataFromApi } from 'utils/getDataFromApi';
import { MoviesListApiResponse } from './interfaces';

export const moviesApiAdapter = (): Promise<MoviesListApiResponse> => getDataFromApi(buildRequestUrl('movie/popular'));
