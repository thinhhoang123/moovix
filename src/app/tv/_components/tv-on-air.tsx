import { GetOnAir } from '@/services/tvService';
import LoadMovieList from './load-movie-list';

export default async function TVOnAir() {
  const data = await GetOnAir();
  return <LoadMovieList data={data.results} initPage={1} service={GetOnAir} />;
}
