export interface ActingMovieDetailed {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[],
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  popularity: number;
  character: string;
  credit_id: string;
  order: number;
  job: string;
};

export interface PersonDetails {
  adult: boolean;
  also_known_as: string[] | [];
  biography: string; birthday: string;
  deathday: null;
  gender: string;
  homepage: string | null;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
};

export interface PersonCredits {
  cast: ActingMovieDetailed[] | [];
  crew: ActingMovieDetailed[] | [];
  id: number;
};
