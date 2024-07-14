import TmdbImage from '@/components/tmdb-image';
import { MediaType } from '@/enum/mediaType';
import { GetPopular } from '@/services/movieService';

export default async function MoviePopular() {
  const data = await GetPopular();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 w-full">
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
  );
}
