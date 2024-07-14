import CastAndCrew from '@/components/cast-and-crew';
import FactMedia from '@/components/fact-media';
import MediaInformation from '@/components/media-infomation';
import Recommendations from '@/components/recommendations';
import TmdbImage from '@/components/tmdb-image';
import { MediaType } from '@/enum/mediaType';
import { IMovieDetail } from '@/models/IMovieDetail';
import { GetDetail } from '@/services/mediaService';
import { Separator } from '@/components/ui/separator';

export default async function MovieId({ params }: { params: { id: string } }) {
  const { id } = params;
  const data: IMovieDetail = await GetDetail(id, MediaType.MOVIE);
  return (
    <section>
      <div className="h-screen">
        <TmdbImage
          src={data.backdrop_path!}
          fill
          alt={data.title}
          className="z-0 object-cover"
        />
        <MediaInformation
          id={id}
          title={data.title}
          describe={data.overview}
          years={data.release_date}
          generes={data.genres}
          duration={data.runtime}
          type={MediaType.MOVIE}
        />
      </div>
      <div className="grid grid-cols-4 gap-6 container mt-4">
        <div className="col-span-3 flex flex-col gap-4">
          <CastAndCrew type={MediaType.MOVIE} id={id} />
          <Separator />
          <Recommendations id={id} type={MediaType.MOVIE} />
        </div>
        <FactMedia
          id={data.id.toString()}
          mediaType={MediaType.MOVIE}
          original_name={data.original_title}
          original_language={data.original_language}
          status={data.status}
        />
      </div>
    </section>
  );
}
