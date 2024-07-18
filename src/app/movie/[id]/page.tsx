import CastAndCrew from '@/components/cast-and-crew';
import FactMedia from '@/components/fact-media';
import MediaInformation from '@/components/media-infomation';
import Recommendations from '@/components/recommendations';
import TmdbImage from '@/components/tmdb-image';
import { MediaType } from '@/enum/mediaType';
import { IMovieDetail } from '@/models/IMovieDetail';
import { GetDetail } from '@/services/mediaService';
import { Separator } from '@/components/ui/separator';
import Reviews from '@/components/reviews';
import { formatCurrency } from '@/lib/utils';
import Keywords from '@/components/keywords';
import { GetVideos } from '@/services/movieService';

export default async function MovieId({ params }: { params: { id: string } }) {
  const { id } = params;
  const [data, videos] = await Promise.all([
    GetDetail(id, MediaType.MOVIE),
    GetVideos(id),
  ]);

  const trailerKey =
    videos.results.length > 0
      ? videos.results.find(
          (video: any) => video.official && video.type === 'Trailer'
        ).key
      : '';

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
          keyYoutube={trailerKey}
        />
      </div>
      <div className="md:grid md:grid-cols-4 flex flex-col-reverse gap-6 container mt-4 w-screen">
        <div className="md:col-span-3 flex flex-col gap-4">
          <CastAndCrew type={MediaType.MOVIE} id={id} />
          <Separator />
          <Reviews type={MediaType.MOVIE} id={id} />
          <Separator />
          <Recommendations id={id} type={MediaType.MOVIE} />
        </div>
        <div className="flex flex-col gap-4">
          <FactMedia
            id={data.id.toString()}
            mediaType={MediaType.MOVIE}
            original_name={data.original_title}
            original_language={data.original_language}
            status={data.status}
            homepage={data.homepage ?? ''}
            budget={formatCurrency(data.budget)}
            revenue={formatCurrency(data.revenue)}
          />
          <Keywords id={data.id.toString()} type={MediaType.MOVIE} />
        </div>
      </div>
    </section>
  );
}
