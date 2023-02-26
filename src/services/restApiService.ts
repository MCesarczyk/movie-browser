import { DEMO_DELAY } from "./constants";
import { watForMsHelper } from "./helpers";

export const getDataFromApi = async (apiURL: string) => {
    await watForMsHelper(DEMO_DELAY);

    const response = await fetch(apiURL);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
};
