export const buildRequestUrl = (path, page, query) => {
    const apiBaseUrl = "https://api.themoviedb.org/3/";
    const apiKey = "?api_key=768f7875782193f5e4797762314da0b7";
    const apiLang = "&language=en-US";
    const apiAdult = "&include_adult=false";

    return `${apiBaseUrl}${path}${apiKey}${page ? `&page=${page}` : ""}${apiLang}${query ? apiAdult : ""}${query ? `&query=${query}` : ""}`
};