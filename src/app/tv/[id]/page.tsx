import CastAndCrew from '@/components/cast-and-crew';
import FactMedia from '@/components/fact-media';
import MediaInformation from '@/components/media-infomation';
import Recommendations from '@/components/recommendations';
import TmdbImage from '@/components/tmdb-image';
import { MediaType } from '@/enum/mediaType';
import { GetDetail } from '@/services/mediaService';
import { Separator } from '@/components/ui/separator';
import Reviews from '@/components/reviews';
import Keywords from '@/components/keywords';
import EpisodeList from './_components/episode-list';

export default async function TVId({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { season?: string };
}) {
  const { id } = params;
  const data = await GetDetail(id, MediaType.TV);
  const season = searchParams?.season || data.seasons[0].season_number;
  return (
    <section>
      <div className="relative h-screen">
        <TmdbImage
          src={data.backdrop_path!}
          fill
          alt={data.title}
          className="z-0 object-cover "
        />
        <MediaInformation
          id={id}
          title={data.title}
          describe={data.overview}
          generes={data.genres}
          duration={data.runtime}
          type={MediaType.TV}
          years={data.first_air_date}
        />
      </div>
      <div className="md:grid md:grid-cols-4 flex flex-col-reverse gap-6 container mt-4">
        <div className="md:col-span-3 flex flex-col gap-4">
          <CastAndCrew type={MediaType.TV} id={id} />
          <Separator />
          <Reviews id={id} type={MediaType.TV} />
          <Separator />
          <EpisodeList seasons={data.seasons} id={id} currentSeason={season} />
          <Separator />
          <Recommendations id={id} type={MediaType.TV} />
        </div>
        <div className="flex flex-col gap-4">
          <FactMedia
            id={data.id}
            mediaType={MediaType.TV}
            original_name={data.original_name}
            original_language={data.original_language}
            status={data.status}
            type={data.type}
            networks={data.networks}
            homepage={data.homepage}
          />
          <Keywords id={data.id.toString()} type={MediaType.TV} />
        </div>
      </div>
    </section>
  );
}
