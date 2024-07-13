'use server';
import { GET } from './fetchServices';

export async function GetMediaImage(id: string, type: string) {
  const response = await GET(
    `${type}/${id}/images?include_image_language=en&language=en`
  );
  return await response;
}

export async function GetCredits(id: string, type: string) {
  const response = await GET(`${type}/${id}/credits?language=en-US`);
  return await response;
}

/**
 * Fetches detailed information about a specific movie.
 * @param {string} id - The unique identifier of the movie.
 * @returns {Promise} - A promise that resolves to the response containing movie details.
 */
export async function GetDetail(id: string, type: string) {
  const response = await GET(`${type}/${id}`);
  return await response; // Return the API response
}
