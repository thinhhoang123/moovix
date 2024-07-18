'use server';
import { GET } from './fetchServices';

export async function GetOnAir(page = 1) {
  const response = await GET(`tv/on_the_air?language=en-US&page=${page}`);
  return await response;
}
export async function GetPopular(page = 1) {
  return GET(`tv/popular?page=${page}`); // Return the API response directly
}
export async function GetTopRated(page = 1) {
  return GET(`tv/top_rated?page=${page}`); // Return the API response directly
}
export async function GetAirToday(page = 1) {
  return GET(`tv/airing_today?page=${page}`); // Return the API response directly
}
