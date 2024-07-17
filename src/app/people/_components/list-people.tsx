'use client';
import RenderList from '@/components/render-list';
import TmdbImage from '@/components/tmdb-image';
import { Typography } from '@/components/typo';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MediaType } from '@/enum/mediaType';
import { useState } from 'react';

export default function ListPeople({
  data,
  initPage = 1,
  service,
}: {
  data: any;
  initPage: number;
  service: (number: number) => void;
}) {
  const [listPeople, setListPeople] = useState(data);
  const [page, setPage] = useState(initPage);

  const loadMore = async () => {
    const nextPage = page + 1;
    const res: any = await service(nextPage);
    setListPeople((prev: any) => {
      return [...prev, ...res.results];
    });
    setPage(nextPage);
  };

  return (
    <div className="flex flex-col gap-4">
      <RenderList
        items={listPeople}
        renderItem={(item: any, index: number) => {
          return (
            <div
              key={index}
              className="relative border-4 border-transparent hover:border-primary "
            >
              <TmdbImage
                src={item.profile_path}
                width={200}
                height={200}
                alt={item.title}
                type={MediaType.PERSON}
                id={item.id.toString()}
                className="w-auto"
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t  from-black w-full p-2 h-1/4 flex flex-col justify-end gap-2">
                <Typography
                  level="small"
                  className="font-bold shadow-2xl text-white"
                >
                  {item.name}
                </Typography>
              </div>
            </div>
          );
        }}
      />
      <div className=" flex justify-center">
        <Button onClick={loadMore} variant="outline">
          Load more 👀
        </Button>
      </div>
    </div>
  );
}
