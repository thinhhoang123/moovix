import { GetUpComing } from '@/services/movieService';
import LoadMovieList from './load-movie-list';

export default async function MovieUpComing() {
  const data = await GetUpComing();

  return (
    <LoadMovieList data={data.results} initPage={1} service={GetUpComing} />
  );
}
