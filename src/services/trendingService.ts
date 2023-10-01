'use server';

import { GET } from './fetchServices';

export async function GetTrending() {
  const res = await GET('trending/all/day');
  return res;
}
