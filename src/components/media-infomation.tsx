import IGetMovieImagesResponse from '@/models/IMovieLogo';
import { Badge } from '@/components/ui/badge';
import { IGenre } from '@/models/IGener';
import TmdbImage from '@/components/tmdb-image';
import { MediaType } from '@/enum/mediaType';
import { GetMediaImage } from '@/services/mediaService';

interface MediaInformationProps {
  title: string;
  id: string;
  describe?: string;
  years?: string;
  generes?: IGenre[];
  duration?: number;
  type: MediaType;
}

export default async function MediaInformation({
  title,
  id,
  describe,
  years,
  generes,
  duration,
  type,
}: MediaInformationProps) {
  const movieImage: IGetMovieImagesResponse = await GetMediaImage(id, type);
  const logo = movieImage?.logos[0]?.file_path;
  return (
    <div className="absolute z-10 h-full flex items-end bg-gradient-to-t from-black w-full">
      <div className="flex flex-col container">
        <div className="sm:w-full xl:w-1/2 flex flex-col gap-2 mb-5">
          <TmdbImage src={logo} height={250} width={250} alt="logo" />
          {!logo && <h1 className="text-3xl font-bold">{title}</h1>}
          {generes ? (
            <div className="flex gap-2">
              {generes?.map((genere) => {
                return (
                  <Badge key={genere.id} variant="outline">
                    {genere.name}
                  </Badge>
                );
              })}
            </div>
          ) : null}
          <p className="text-gray-300">{describe}</p>
        </div>
      </div>
    </div>
  );
}
