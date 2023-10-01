'use client';
import { MediaType } from '@/enum/mediaType';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';

export default function TmdbImage({
  src,
  alt,
  width,
  height,
  className,
  type,
  id,
  fill,
  sizes,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  type?: MediaType;
  id?: string;
  fill?: boolean;
  sizes?: string;
}) {
  const route = useRouter();
  const classNames = clsx(
    id && type && 'hover:border-white  hover:cursor-pointer transition'
  );
  return (
    <Image
      src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${src}`}
      width={width}
      height={height}
      alt={alt}
      className={[className, classNames].join(' ')}
      onClick={() => id && type && route.push(`/${type}/${id}`)}
      fill={fill}
      sizes={sizes}
    />
  );
}
