import { handleFetch } from './handleFetch.js';

// Fetch trending GIFs from the backend
export const getTrendingGifs = async () => {
  return await handleFetch(`/api/gifs`);
};

// Placeholder for fetching GIFs by search term
export const getGifsBySearch = async (searchTerm) => {
  return await handleFetch(`/api/gifs/search?query=${encodeURIComponent(searchTerm)}`);
};
