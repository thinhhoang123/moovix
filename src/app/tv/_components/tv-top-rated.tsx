import { GetTopRated } from '@/services/tvService';
import LoadTVList from './load-movie-list';

export default async function TVTopRate() {
  const data = await GetTopRated();
  return <LoadTVList data={data.results} initPage={1} service={GetTopRated} />;
}
