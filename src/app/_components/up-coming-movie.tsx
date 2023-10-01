import TmdbImage from '@/components/tmdb-image';
import { Button } from '@/components/ui/button';
import { MediaType } from '@/enum/mediaType';
import { GetUpComing } from '@/services/movieService';

export default async function UpComingMovie() {
  const data = await GetUpComing();
  return (
    <section className="container flex flex-col gap-2 mt-4">
      <div className="grid w-full max-w-6xl gap-2">
        <h1 className="text-2xl font-semibold">Up Comming Movie 🍿</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {data.results.map((item: any, index: number) => {
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
        })}
      </div>
      <div className="w-full flex justify-center">
        <Button>See more up coming movie</Button>
      </div>
    </section>
  );
}
