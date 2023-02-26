import { API_BASE_URL, API_KEY, API_LANG } from "services/constants";

export const fixedEncodeURIComponent = (str: string) => {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return '%' + c.charCodeAt(0).toString(16);
    });
};

export const buildRequestUrl = (path: string, page?: string, query?: string) => {
    const apiAdult = query ? "&include_adult=false" : "";
    const queryParam = query ? `&query=${fixedEncodeURIComponent(query)}` : "";
    const pageParam = page ? `&page=${page}` : "";

    const requestUrlElements = [API_BASE_URL, path, API_KEY, API_LANG, apiAdult, queryParam, pageParam];

    return requestUrlElements.join("");
};

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
