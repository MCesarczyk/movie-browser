import { fixedEncodeURIComponent } from "./fixedEncodeURIComponent";

export const buildRequestUrl = (path: string, page?: string, query?: string) => {
    const apiBaseUrl = "https://api.themoviedb.org/3/";
    const apiKey = "?api_key=768f7875782193f5e4797762314da0b7";
    const apiLang = "&language=en-US";
    const apiAdult = query ? "&include_adult=false" : "";
    const queryParam = query ? `&query=${fixedEncodeURIComponent(query)}` : "";
    const pageParam = page ? `&page=${page}` : "";

    const requestUrlElements = [apiBaseUrl, path, apiKey, apiLang, apiAdult, queryParam, pageParam];

    return requestUrlElements.join("");
};