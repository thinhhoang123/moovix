'use server';

import { GET } from './fetchServices';

export async function GetPopular(page = 1) {
  const res = await GET(`person/popular?language=en-US&page=${page}`);
  return res;
}

export async function GetDetail(id: string) {
  const res = await GET(`person/${id}?language=en-US`);
  return res;
}
export async function GetMovieCredit(id: string) {
  const res = await GET(`person/${id}/movie_credits?language=en-US`);
  return res;
}
