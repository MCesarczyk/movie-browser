export const getPopularMovies = async () => {
    const url = "https://api.themoviedb.org/3/movie/popular?api_key=768f7875782193f5e4797762314da0b7&language=en-US&page=1";
    const response = await fetch(url);

    if(!response.ok) {
        new Error(response.status_message);
    }

    return await response.json();
}