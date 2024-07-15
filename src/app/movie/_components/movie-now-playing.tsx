import { GetNowPlaying } from '@/services/movieService';
import LoadMovieList from './load-movie-list';

export default async function MovieNowPlaying() {
  const data = await GetNowPlaying();

  return (
    <LoadMovieList data={data.results} initPage={1} service={GetNowPlaying} />
  );
}
