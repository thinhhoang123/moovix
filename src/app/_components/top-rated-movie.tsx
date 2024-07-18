import RenderList from '@/components/render-list';
import Title from '@/components/title';
import TmdbImage from '@/components/tmdb-image';
import { Button } from '@/components/ui/button';
import { MediaType } from '@/enum/mediaType';
import EMoiveTabList from '@/enum/movieTabList';
import { GetTopRated } from '@/services/movieService';
import Link from 'next/link';

export default async function TopRatedMovie() {
  const data = await GetTopRated();
  return (
    <section className="container flex flex-col gap-2 mt-4">
      <Title title="Top Rated Movie 🌟" />
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
              type={MediaType.MOVIE}
              id={item.id.toString()}
              className="border-4 border-transparent hover:border-primary hover:scale-105 w-auto"
            />
          );
        }}
      />
      <div className="w-full flex justify-center">
        <Link href={`/movie?tab=${EMoiveTabList.TOP_RATED}`}>
          <Button>See more top rated movie</Button>
        </Link>
      </div>
    </section>
  );
}
