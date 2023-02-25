import { delay } from "./delay";

export const getDataFromApi = async (apiURL: string) => {
    await delay(1_000);
    const response = await fetch(apiURL);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
};
