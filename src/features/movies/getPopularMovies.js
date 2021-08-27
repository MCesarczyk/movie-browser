export const getPopularMovies = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=768f7875782193f5e4797762314da0b7");

    if (!response.ok) {
        new Error(response.statusText);
    }

    return await response.json();
};