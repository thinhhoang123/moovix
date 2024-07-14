import { MediaType } from '@/enum/mediaType';
import { GetRecommendations } from '@/services/mediaService';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import TmdbImage from './tmdb-image';
import Title from './title';

export default async function Recommendations({
  id,
  type,
}: {
  id: string;
  type: MediaType;
}) {
  const data = await GetRecommendations(id, type);
  return (
    <section>
      <Title title="Recommendations 🛒" />
      <Carousel
        opts={{
          align: 'start',
        }}
      >
        <CarouselContent>
          {data.results.map((recommendation: any, index: number) => (
            <CarouselItem
              key={index}
              className="basis-auto flex flex-col items-center w-fit"
            >
              <TmdbImage
                src={recommendation.poster_path}
                height={200}
                width={200}
                alt={recommendation.name}
                type={recommendation.media_type}
                id={recommendation.id}
                className="border-4 border-transparent hover:border-primary w-auto"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
