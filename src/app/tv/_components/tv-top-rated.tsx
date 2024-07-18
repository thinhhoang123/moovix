import { GetTopRated } from '@/services/tvService';
import LoadMovieList from './load-movie-list';

export default async function TVTopRate() {
  const data = await GetTopRated();
  return (
    <LoadMovieList data={data.results} initPage={1} service={GetTopRated} />
  );
}
