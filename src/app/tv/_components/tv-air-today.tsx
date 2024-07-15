import { GetAirToday } from '@/services/tvService';
import LoadMovieList from './load-movie-list';

export default async function TVAirToday() {
  const data = await GetAirToday();
  return (
    <LoadMovieList data={data.results} initPage={1} service={GetAirToday} />
  );
}
