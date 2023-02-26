export interface Genre {
  id: number;
  name: string;
};

export interface Company {
  id: number;
  logo_path: string | null,
  name: string;
  origin_country: string;
};

export interface Country {
  iso_3166_1: string;
  name: string;
};

export interface Language {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export interface Employee {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
};

export interface Actor extends Employee {
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

export interface StaffMember extends Employee {
  credit_id: string;
  department: string;
  job: string;
};

export interface MovieDetails {
  adult: false,
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Company[];
  production_countries: Country[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Language[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export interface MovieDetailsInitialState {
  backdrop_path: number;
};

export interface MovieCredits {
  id: number;
  cast: Actor[];
  crew: StaffMember[];
};

export interface MovieApiResponse {
  id: number | null;
  details: MovieDetails | {};
  credits: MovieCredits | {};
};

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

export interface PersonDetailsInitialState {
  genres: [];
  profile_path: null;
  name: null;
  birthday: null;
  place_of_birth: null;
  biography: null;
};

export interface PersonCreditsInitialState {
  cast: [];
  crew: [];
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

export interface PersonApiResponse {
  id: string | null;
  details: PersonDetails | PersonDetailsInitialState;
  credits: PersonCredits | PersonCreditsInitialState;
  state: string;
};
