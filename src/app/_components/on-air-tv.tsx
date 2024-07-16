import RenderList from '@/components/render-list';
import Title from '@/components/title';
import TmdbImage from '@/components/tmdb-image';
import { Button } from '@/components/ui/button';
import { MediaType } from '@/enum/mediaType';
import { GetOnAir } from '@/services/tvService';

export default async function TVOnAir() {
  const data = await GetOnAir();
  return (
    <section className="container flex flex-col gap-2 mt-4">
      <Title title="On the air ✈" />
      <RenderList
        items={data.results}
        renderItem={(item: any, index: number) => {
          return (
            <TmdbImage
              key={index}
              src={item.poster_path}
              width={200}
              height={200}
              alt={item.title}
              type={MediaType.TV}
              id={item.id.toString()}
              className="border-4 border-transparent hover:border-primary hover:scale-105 w-auto"
            />
          );
        }}
      />
      <div className="w-full flex justify-center">
        <Button>See more TV shows on air</Button>
      </div>
    </section>
  );
}
