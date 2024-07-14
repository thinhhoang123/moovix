import CastAndCrew from '@/components/cast-and-crew';
import FactMedia from '@/components/fact-media';
import MediaInformation from '@/components/media-infomation';
import Recommendations from '@/components/recommendations';
import TmdbImage from '@/components/tmdb-image';
import { MediaType } from '@/enum/mediaType';
import { GetDetail } from '@/services/mediaService';
import { Separator } from '@/components/ui/separator';

export default async function TVId({ params }: { params: { id: string } }) {
  const { id } = params;
  const data = await GetDetail(id, MediaType.TV);
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
          type={MediaType.TV}
        />
      </div>
      <div className="grid grid-cols-4 gap-6 container mt-4">
        <div className="col-span-3 flex flex-col gap-4">
          <CastAndCrew type={MediaType.TV} id={id} />
          <Separator />
          <Recommendations id={id} type={MediaType.TV} />
        </div>
        <FactMedia
          id={data.id}
          mediaType={MediaType.TV}
          original_name={data.original_name}
          original_language={data.original_language}
          status={data.status}
          type={data.type}
          networks={data.networks}
        />
      </div>
    </section>
  );
}
