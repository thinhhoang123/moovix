'use server';
import { GET } from './fetchServices';

export async function GetOnAir(page = 1) {
  const response = await GET(`tv/on_the_air?language=en-US&page=${page}`);
  return await response;
}
