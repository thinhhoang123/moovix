import { GetAirToday } from '@/services/tvService';
import LoadTVList from './load-movie-list';

export default async function TVAirToday() {
  const data = await GetAirToday();
  return <LoadTVList data={data.results} initPage={1} service={GetAirToday} />;
}
