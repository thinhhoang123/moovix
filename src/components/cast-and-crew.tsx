import { MediaType } from '@/enum/mediaType';
import { GetCredits } from '@/services/mediaService';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import Image from 'next/image';
import TmdbImage from './tmdb-image';
import Title from './title';

export default async function CastAndCrew({
  type,
  id,
}: {
  type: MediaType;
  id: string;
}) {
  const data = await GetCredits(id, type);
  return (
    <section>
      <Title title="Cast & Crew 🎉" />
      <Carousel className="w-full">
        <CarouselContent>
          {[...data.cast, ...data.crew].map((item: any, index: number) => {
            return (
              <CarouselItem
                key="index"
                className="basis-auto flex flex-col items-center w-48"
              >
                <TmdbImage
                  src={item.profile_path}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="w-32 h-32 rounded-full object-cover drop-shadow-md"
                />
                <p className="font-semibold text-center">{item.name}</p>
                <p className="text-sm text-muted-foreground text-center">
                  {item.character ? item.character : item.job}
                </p>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
