import { buildRequestUrl } from 'services/utils';
import { getDataFromApi } from 'services/restApiService';
import { PersonCredits, PersonDetails } from './interfaces';


export const personApi = {
  getPersonById: (path: string): Promise<PersonDetails> => {
    return getDataFromApi(buildRequestUrl(path))
  },

  getPersonCreditsById: (path: string): Promise<PersonCredits> => {
    return getDataFromApi(buildRequestUrl(path))
  },
};
