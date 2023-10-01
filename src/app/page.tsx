import MediaInformation from '@/components/media-infomation';
import TmdbImage from '@/components/tmdb-image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { GetTrending } from '@/services/trendingService';
import UpComingMovie from './_components/up-coming-movie';
import TopRatedMovie from './_components/top-rated-movie';

export default async function Home() {
  const data = await GetTrending();
  return (
    <>
      <Carousel>
        <CarouselContent>
          {data.results.map((item: any, index: number) => (
            <CarouselItem key={index} className="relative w-screen h-screen">
              <TmdbImage
                className="object-cover "
                src={item.backdrop_path}
                fill
                alt={item.title}
                id={item.id.toString()}
                type={item.media_type}
              />
              <MediaInformation
                id={item.id}
                title={item.title}
                describe={item.overview}
                years={item.release_date}
                duration={item.runtime}
                type={item.media_type}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <UpComingMovie />
      <TopRatedMovie />
    </>
  );
}

