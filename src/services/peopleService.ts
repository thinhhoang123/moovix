'use server';

import { GET } from './fetchServices';

export async function GetPopular(page = 1) {
  const res = await GET(`person/popular?language=en-US&page=${page}`);
  return res;
}
