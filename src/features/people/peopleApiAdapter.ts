import { buildRequestUrl } from 'utils/buildRequestUrl';
import { getDataFromApi } from 'utils/getDataFromApi';
import { PeopleApiResponse } from './interfaces';


export const peopleApi = {
  getPeopleByPageWithOptionalQuery: (path: string, page: string, query?: string): Promise<PeopleApiResponse> => {
    return getDataFromApi(buildRequestUrl(path, page, query))
  },
};
