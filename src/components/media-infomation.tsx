import IGetMovieImagesResponse from '@/models/IMovieLogo';
import { Badge } from '@/components/ui/badge';
import { IGenre } from '@/models/IGener';
import TmdbImage from '@/components/tmdb-image';
import { MediaType } from '@/enum/mediaType';
import { GetMediaImage } from '@/services/mediaService';
import { Typography } from './typo';
import moment from 'moment';
import { Calendar, Timer } from 'lucide-react';
import { convertMinutesToHours } from '@/lib/utils';
import { WatchTrailer } from './watch-trailer-button';

interface MediaInformationProps {
  title: string;
  id: string;
  describe?: string;
  years?: string;
  generes?: IGenre[];
  duration?: number;
  type: MediaType;
  keyYoutube?: string;
}

export default async function MediaInformation({
  title,
  id,
  describe,
  years,
  generes,
  duration,
  type,
  keyYoutube,
}: MediaInformationProps) {
  const movieImage: IGetMovieImagesResponse = await GetMediaImage(id, type);
  const logo = movieImage?.logos[0]?.file_path;
  return (
    <div className="absolute z-10 h-full flex items-end bg-gradient-to-t from-black w-full">
      <div className="w-full flex flex-col gap-4 mb-5 container">
        <TmdbImage src={logo} height={250} width={250} alt="logo" />
        {!logo && (
          <Typography level="h2" className="text-white">
            {title}
          </Typography>
        )}
        <div className="flex gap-4">
          {years ? (
            <div className="flex gap-1 items-center">
              <Calendar className="h-4 w-4 text-white" />
              <Typography level="muted">
                {moment(years).format('LL')}
              </Typography>
            </div>
          ) : null}
          {duration ? (
            <div className="flex gap-1 items-center">
              <Timer className="h-4 w-4 text-white" />
              <Typography level="muted">
                {convertMinutesToHours(duration)}
              </Typography>
            </div>
          ) : null}
        </div>

        {generes ? (
          <div className="flex gap-2 flex-wrap">
            {generes?.map((genere) => {
              return (
                <Badge key={genere.id} variant="secondary">
                  {genere.name}
                </Badge>
              );
            })}
          </div>
        ) : null}
        <Typography level="muted" className="sm:w-full md:w-1/2">
          {describe}
        </Typography>
        <WatchTrailer keyYoutube={keyYoutube ?? ''} />
      </div>
    </div>
  );
}
