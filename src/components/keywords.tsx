import { MediaType } from '@/enum/mediaType';
import { GetKeyword } from '@/services/mediaService';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Typography } from './typo';

export default async function Keywords({
  id,
  type,
}: {
  id: string;
  type: MediaType;
}) {
  const data = await GetKeyword(id, type);
  return (
    <Card className="p-4 flex flex-col gap-1">
      <Typography level="h4">Keywords</Typography>
      <div className="flex gap-1 flex-wrap">
        {type === MediaType.TV
          ? data.results.map((keyword: any, index: number) => {
              return (
                <Badge key={index} variant="outline">
                  {keyword.name}
                </Badge>
              );
            })
          : data.keywords.map((keyword: any, index: number) => {
              return (
                <Badge key={index} variant="outline">
                  {keyword.name}
                </Badge>
              );
            })}
      </div>
    </Card>
  );
}
