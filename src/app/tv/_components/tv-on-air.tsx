import { GetOnAir } from '@/services/tvService';
import LoadTVList from './load-movie-list';

export default async function TVOnAir() {
  const data = await GetOnAir();
  return <LoadTVList data={data.results} initPage={1} service={GetOnAir} />;
}
