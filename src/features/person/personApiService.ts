import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { personApi } from "./personApiAdapter";


export const usePersonApiService = () => {
  const { id }: any = useParams();

  const path = `person/${id as string}`;

  const { status, error, data: personDetails } = useQuery([path], () => personApi.getPersonById(path));

  const creditsPath = `person/${id as string}/movie_credits`;

  const { status: creditsStatus, error: creditsError, isFetching, data: movieCredits } = useQuery([creditsPath], () => personApi.getPersonCreditsById(creditsPath));

  const credits = (creditsStatus === "success" && !creditsError) ? movieCredits : null;
  const personCast = credits?.cast;
  const personCrew = credits?.crew;

  return { status, error, isFetching, personDetails, personCast, personCrew };
};
