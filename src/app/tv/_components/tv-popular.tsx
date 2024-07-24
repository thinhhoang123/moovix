import { GetPopular } from '@/services/tvService';
import LoadTVList from './load-movie-list';

export default async function TVPopular() {
  const data = await GetPopular();

  return <LoadTVList data={data.results} initPage={1} service={GetPopular} />;
}
