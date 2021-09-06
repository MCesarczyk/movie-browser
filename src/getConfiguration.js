export const getConfiguration = async () => {
    const response = await fetch("https://api.themoviedb.org/3/configuration?api_key=768f7875782193f5e4797762314da0b7&language=en-US");

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};