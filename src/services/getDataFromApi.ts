import { DEMO_DELAY } from "./constants";
import { delay } from "./utils";

export const getDataFromApi = async (apiURL: string) => {
    await delay(DEMO_DELAY);
    const response = await fetch(apiURL);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
};
