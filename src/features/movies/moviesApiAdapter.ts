import { buildRequestUrl } from 'utils/buildRequestUrl';
import { getDataFromApi } from 'utils/getDataFromApi';

export const moviesApiAdapter = () => getDataFromApi(buildRequestUrl('movie/popular'));
