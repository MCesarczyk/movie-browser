import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { movieApi } from "./movieApiAdapter";


export const useMovieApiService = () => {
  const { id }: any = useParams();

  const path = `movie/${id as string}`;

  const { status, error, data: movieDetails } = useQuery([path], () => movieApi.getMovieById(path));

  const creditsPath = `movie/${id as string}/credits`;

  const { status: creditsStatus, error: creditsError, isFetching, data: movieCredits } = useQuery([creditsPath], () => movieApi.getMovieCreditsById(creditsPath));

  const credits = (creditsStatus === "success" && !creditsError) ? movieCredits : null;
  const cast = credits?.cast;
  const crew = credits?.crew;

  return { status, error, isFetching, movieDetails, cast, crew };
};
