import { GetPopular } from '@/services/tvService';
import LoadMovieList from './load-movie-list';

export default async function TVPopular() {
  const data = await GetPopular();

  return (
    <LoadMovieList data={data.results} initPage={1} service={GetPopular} />
  );
}
