import { buildRequestUrl } from 'services/utils';
import { getDataFromApi } from 'services/restApiService';
import { MovieCredits, MovieDetails } from './interfaces';


export const movieApi = {
  getMovieById: (path: string): Promise<MovieDetails> => {
    return getDataFromApi(buildRequestUrl(path))
  },

  getMovieCreditsById: (path: string): Promise<MovieCredits> => {
    return getDataFromApi(buildRequestUrl(path))
  },
};
