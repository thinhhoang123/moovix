import TmdbImage from '@/components/tmdb-image';
import { MediaType } from '@/enum/mediaType';
import { GetTopRated } from '@/services/movieService';
import LoadMovieList from './load-movie-list';

export default async function MovieTopRate() {
  const data = await GetTopRated();
  return (
    <LoadMovieList data={data.results} initPage={1} service={GetTopRated} />
  );
}
