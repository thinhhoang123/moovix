'use client';
import RenderList from '@/components/render-list';
import TmdbImage from '@/components/tmdb-image';
import { Button } from '@/components/ui/button';
import { MediaType } from '@/enum/mediaType';
import { useState } from 'react';

export default function LoadTVList({
  data,
  initPage = 1,
  service,
  query,
}: {
  data: any;
  initPage: number;
  service: (number: number, query?: string) => void;
  query?: string;
}) {
  const [listMovie, setListMovie] = useState(data);
  const [page, setPage] = useState(initPage);

  const loadMore = async () => {
    const nextPage = page + 1;
    const res: any = await service(nextPage, query);
    setListMovie((prev: any) => {
      return [...prev, ...res.results];
    });
    setPage(nextPage);
  };

  return (
    <div className="flex flex-col gap-4">
      <RenderList
        items={listMovie}
        renderItem={(item: any, index: number) => {
          return (
            <TmdbImage
              key={index}
              src={item.poster_path}
              width={200}
              height={200}
              alt={item.title}
              type={MediaType.TV}
              id={item.id.toString()}
              className="border-4 border-transparent hover:border-primary hover:scale-105 w-auto"
            />
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
