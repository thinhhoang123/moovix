import CastAndCrew from '@/components/cast-and-crew';
import MediaInformation from '@/components/media-infomation';
import TmdbImage from '@/components/tmdb-image';
import { Card } from '@/components/ui/card';
import { MediaType } from '@/enum/mediaType';
import { GetDetail } from '@/services/mediaService';

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
        <div className="col-span-3">
          <CastAndCrew type={MediaType.TV} id={id} />
        </div>
        <div>
          <Card className="w-full p-4 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h4 className="text-xl font-semibold">Original Name</h4>
              <p>{data.original_name}</p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-xl font-semibold">Status</h4>
              <p>{data.status}</p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-xl font-semibold">Network</h4>
              <div className="flex gap-2">
                {data.networks.map((network: any) => {
                  return (
                    <TmdbImage
                      key={network.name}
                      src={network.logo_path}
                      height={100}
                      width={100}
                      alt={network.name}
                    />
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-xl font-semibold">Type</h4>
              <p>{data.type}</p>
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-xl font-semibold">Original Language</h4>
              <p>{data.original_language}</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
