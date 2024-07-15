import { GetPopular } from '@/services/movieService';
import LoadMovieList from './load-movie-list';

export default async function MoviePopular() {
  const data = await GetPopular();

  return (
    <LoadMovieList data={data.results} initPage={1} service={GetPopular} />
  );
}
