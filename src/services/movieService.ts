'use server';
import { GET } from './fetchServices';

export async function getMovieImage(id: string, type: string) {
  const response = await GET(
    `${type}/${id}/images?include_image_language=en&language=en`
  );
  return await response;
}

export async function GetUpComing(page = 1) {
  const response = await GET(`movie/upcoming?page=${page}`);
  return await response;
}

export async function GetTopRated(page = 1) {
  return GET(`movie/top_rated?page=${page}`);
}

export async function GetDetail(id: string) {
  const response = await GET(`movie/${id}`);
  return await response;
}
