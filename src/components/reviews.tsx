import { MediaType } from '@/enum/mediaType';
import { GetReviews } from '@/services/mediaService';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import TmdbImage from './tmdb-image';
import Title from './title';
import { Card } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Typography } from './typo';
import moment from 'moment';
import { ScrollArea } from './ui/scroll-area';

export default async function Reviews({
  id,
  type,
}: {
  id: string;
  type: MediaType;
}) {
  const data = await GetReviews(id, type);
  const firstReview = data.results[0];
  return (
    <section>
      <div className="flex justify-between items-center">
        <Title title="User reviews 📝" className="w-fit" />
        <Typography level="link" className="w-auto">
          See more 👀
        </Typography>
      </div>
      {firstReview && (
        <Card className="p-4 flex flex-col gap-4 max-h-72">
          <div className="flex gap-4 align-top">
            <Avatar>
              <AvatarImage
                src={firstReview.author_details?.avatar_path}
                alt="@shadcn"
              />
              <AvatarFallback>{firstReview.author[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <Typography level="h4">{firstReview.author}</Typography>
              <Typography level="muted">
                {moment(firstReview?.created_at).format('LL')}
              </Typography>
            </div>
          </div>
          <ScrollArea className="h-72">
            <Typography>{firstReview.content.toString()}</Typography>
          </ScrollArea>
        </Card>
      )}
    </section>
  );
}
