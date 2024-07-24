import RenderList from '@/components/render-list';
import TmdbImage from '@/components/tmdb-image';
import { Typography } from '@/components/typo';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MediaType } from '@/enum/mediaType';
import { GetDetail, GetMovieCredit } from '@/services/peopleService';
import moment from 'moment';

export default async function PeoplePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const [detail, movieCredit] = await Promise.all([
    GetDetail(id),
    GetMovieCredit(id),
  ]);
  return (
    <section className="mt-20 container">
      <div className="grid grid-cols-4 gap-4">
        <div className="relative col-span-4 md:col-span-2 h-[50vh]">
          <TmdbImage
            src={detail.profile_path}
            fill
            alt={detail.name}
            className="object-cover rounded-lg drop-shadow-md"
          />
        </div>
        <Card className="col-span-4 md:col-span-2 flex items-start gap-6 p-4">
          <div className="flex flex-col gap-1">
            <Typography level="h2">{detail.name}</Typography>
            <ScrollArea className="max-h-[40vh]">
              <Typography level="muted">{detail.biography}</Typography>
            </ScrollArea>
          </div>
        </Card>
        <Card className="p-4 col-span-4 md:col-span-1 flex flex-col gap-4 max-h-[70vh]">
          <ScrollArea>
            {detail.known_for_department ? (
              <div className="flex flex-col gap-1">
                <Typography level="h4">Known for</Typography>
                <Typography>{detail.known_for_department}</Typography>
              </div>
            ) : null}
            {detail.gender ? (
              <div className="flex flex-col gap-1">
                <Typography level="h4">Gender</Typography>
                <Typography>{detail.gender}</Typography>
              </div>
            ) : null}
            {detail.birthday ? (
              <div className="flex flex-col gap-1">
                <Typography level="h4">Date of Birth</Typography>
                <Typography>
                  {moment(detail.birthday).format('LL')} (
                  {moment().diff(detail.birthday, 'years', false)} years old)
                </Typography>
              </div>
            ) : null}
            {detail.place_of_birth ? (
              <div className="flex flex-col gap-1">
                <Typography level="h4">Place of Birth</Typography>
                <Typography>{detail.place_of_birth}</Typography>
              </div>
            ) : null}
            {detail.place_of_birth ? (
              <div className="flex flex-col gap-1">
                <Typography level="h4">Also Known As</Typography>
                {detail.also_known_as.map((know: any) => {
                  return <Typography key={know}>{know}</Typography>;
                })}
              </div>
            ) : null}
          </ScrollArea>
        </Card>
        <Card className="col-span-4 md:col-span-3 p-4 max-h-[70vh]">
          <Typography level="h2">Known for</Typography>
          <ScrollArea className="h-[60vh]">
            <RenderList
              items={movieCredit.cast}
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
          </ScrollArea>
        </Card>
      </div>
    </section>
  );
}
