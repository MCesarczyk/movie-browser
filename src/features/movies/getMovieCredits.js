export const getMovieCredits = async (id) => {
    const apiURL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=768f7875782193f5e4797762314da0b7&language=en-US`;

    const response = await fetch(apiURL);

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};