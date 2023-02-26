import { buildRequestUrl } from 'services/utils';
import { getDataFromApi } from 'services/restApiService';
import { PersonDetails } from './interfaces';


export const personApi = {
  getPersonById: (path: string): Promise<PersonDetails> => {
    return getDataFromApi(buildRequestUrl(path))
  },
};
