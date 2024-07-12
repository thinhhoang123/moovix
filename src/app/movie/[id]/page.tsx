import MediaInformation from '@/components/media-infomation';
import TmdbImage from '@/components/tmdb-image';
import { MediaType } from '@/enum/mediaType';
import { IMovieDetail } from '@/models/IMovieDetail';
import { GetDetail } from '@/services/movieService';

export default async function MovieId({ params }: { params: { id: string } }) {
  const { id } = params;
  const detailMovie: IMovieDetail = await GetDetail(id);
  return (
    <>
      <div className="">
        <TmdbImage
          src={detailMovie.backdrop_path!}
          fill
          alt={detailMovie.title}
          className="z-0 object-cover"
        />
        <MediaInformation
          id={id}
          title={detailMovie.title}
          describe={detailMovie.overview}
          years={detailMovie.release_date}
          generes={detailMovie.genres}
          duration={detailMovie.runtime}
          type={MediaType.MOVIE}
        />
      </div>
    </>
  );
}
