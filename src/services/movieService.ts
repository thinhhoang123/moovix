'use server';
import { GET } from './fetchServices';

/**
 * Fetches upcoming movies from the API.
 * @param {number} page - The page number for pagination (default is 1).
 * @returns {Promise} - A promise that resolves to the response from the API.
 */
export async function GetUpComing(page = 1) {
  const response = await GET(`movie/upcoming?page=${page}`);
  return await response; // Return the API response
}

/**
 * Fetches top-rated movies from the API.
 * @param {number} page - The page number for pagination (default is 1).
 * @returns {Promise} - A promise that resolves to the response from the API.
 */
export async function GetTopRated(page = 1) {
  return GET(`movie/top_rated?page=${page}`); // Return the API response directly
}

export async function GetPopular(page = 1) {
  return GET(`movie/popular?page=${page}`); // Return the API response directly
}

export async function GetNowPlaying(page = 1) {
  return GET(`movie/now_playing?page=${page}`); // Return the API response directly
}
export async function GetVideos(id: string) {
  return GET(`movie/${id}/videos?language=en-US`); // Return the API response directly
}
