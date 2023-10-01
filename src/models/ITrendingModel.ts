import { IMovieList } from './IMovieList';

export interface ITrendingResponse {
  page: number;
  results: IMovieList[];
  total_pages: number;
  total_results: number;
}
