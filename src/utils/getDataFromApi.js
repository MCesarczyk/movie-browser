export const getDataFromApi = async (apiURL) => {
    const response = await fetch(apiURL);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
};