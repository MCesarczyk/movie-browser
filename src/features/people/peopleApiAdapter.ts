import { buildRequestUrl } from 'services/utils';
import { getDataFromApi } from 'services/restApiService';
import { PeopleApiResponse } from './interfaces';


export const peopleApi = {
  getPeopleByPageWithOptionalQuery: (path: string, page: string, query?: string): Promise<PeopleApiResponse> => {
    return getDataFromApi(buildRequestUrl(path, page, query))
  },
};
