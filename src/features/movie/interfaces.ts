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

export interface MovieCredits {
  id: number;
  cast: Actor[];
  crew: StaffMember[];
};
