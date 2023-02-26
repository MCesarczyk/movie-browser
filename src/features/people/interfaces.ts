export interface ActingMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[],
  id: number;
  media_type?: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export interface Person {
  adult: false,
  gender: 1,
  id: 3194176,
  known_for: ActingMovie[] | [];
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string;
};

export interface PeopleApiResponse {
  page: number | null;
  results: Person[] | [],
  total_pages: number | null;
  total_results: number | null;
  state: string;
  query: string | null;
};
