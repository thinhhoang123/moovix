'use server';
import { GET } from './fetchServices';

export async function GetMediaImage(id: string, type: string) {
  const response = await GET(
    `${type}/${id}/images?include_image_language=en&language=en`
  );
  return await response;
}
