import { API_BASE_URL, API_KEY, API_LANG } from "services/constants";
import { fixedEncodeURIComponentHelper } from "./helpers";


export const buildRequestUrl = (path: string, page?: string, query?: string) => {
    const apiAdult = query ? "&include_adult=false" : "";
    const queryParam = query ? `&query=${fixedEncodeURIComponentHelper(query)}` : "";
    const pageParam = page ? `&page=${page}` : "";

    const requestUrlElements = [API_BASE_URL, path, API_KEY, API_LANG, apiAdult, queryParam, pageParam];

    return requestUrlElements.join("");
};
