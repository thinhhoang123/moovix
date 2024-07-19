import { GetSeasonsDetails } from '@/services/tvService';
import SeasonsSelect from './seasons-select';
import TmdbImage from '@/components/tmdb-image';
import { Typography } from '@/components/typo';
import { convertMinutesToHours } from '@/lib/utils';
import moment from 'moment';
import Title from '@/components/title';

export default async function EpisodeList({
  seasons,
  id,
  currentSeason,
}: {
  seasons: any[];
  id: string;
  currentSeason: string;
}) {
  const data = await GetSeasonsDetails(id, currentSeason);
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Title title="Episodes 🎞" className="w-fit" />
        <SeasonsSelect seasons={seasons} />
      </div>
      <div className="flex flex-col gap-4 max-h-[500px] overflow-y-auto">
        {data.episodes.map((episode: any) => {
          return (
            <div key={episode.id} className="flex gap-4 flex-col md:flex-row">
              <TmdbImage
                src={episode.still_path}
                height={200}
                width={200}
                alt={episode.name}
                className="w-fit h-fit rounded-lg drop-shadow-lg md:basis-1/4 aspect-video"
              />
              <div className="w-full">
                <Typography level="muted">
                  EPISODE: {episode.episode_number}
                </Typography>
                <Typography>{episode.name}</Typography>
                <Typography level="muted">{episode.overview}</Typography>
                <div className="flex gap-1">
                  <Typography level="muted">
                    {convertMinutesToHours(episode.runtime)}
                  </Typography>
                  ·
                  <Typography level="muted">
                    {moment(episode.air_date).format('LL')}
                  </Typography>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
