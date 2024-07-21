'use server';
import { GET } from './fetchServices';

export async function GetMovieSearch(page = 1, query = '') {
  const res = await GET(
    `search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`
  );
  return res;
}

export async function GetTVSearch(page = 1, query = '') {
  const res = await GET(
    `search/tv?query=${query}&include_adult=false&language=en-US&page=${page}`
  );
  return res;
}

export async function GetPersonSearch(page = 1, query = '') {
  const res = await GET(
    `search/person?query=${query}&include_adult=false&language=en-US&page=${page}`
  );
  return res;
}
