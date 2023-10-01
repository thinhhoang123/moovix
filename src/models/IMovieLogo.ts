import IImages from './IImages';

export default interface IGetMovieImagesResponse {
  id: number;
  backdrops: IImages[];
  posters: IImages[];
  logos: IImages[];
}
