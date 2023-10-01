import { IGenre } from './IGener';
import {
  IProductionCompanies,
  IProductionCountries,
  ISpokenLanguages,
} from './IGetDetails';

export interface IMovieDetail {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | object;
  budget: number;
  genres: IGenre[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: IProductionCompanies[];
  production_countries: IProductionCountries[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: ISpokenLanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  releases: IRelease;
}

export interface IRelease {
  countries: {
    certification: string;
    descriptors: any;
    iso_3166_1: string;
    primary: boolean;
    release_date: string;
  }[];
}
