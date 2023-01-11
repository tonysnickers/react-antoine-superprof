import { api } from "../config";

const api_key = "e601f7811cab9a1cab3eb8660bbfc24d"; // process.env.API_KEY;

async function searchMovies(query: string): Promise<any[]> {
  try {
    if (!query) {
      return [];
    }
    const res = await api.get("/search/movie", {
      params: { api_key, query },
    });
    return res.data.results;
  } catch (err) {
    throw new Error(err);
  }
}


async function getMovieReviews(movieId: string): Promise<any> {
  try {
    const res = await api.get(`/movie/${movieId}/reviews`, {
      params: { api_key },
    });
    return res.data.results;
  } catch (err) {
    throw new Error(err);
  }
}


export const router = {
  searchMovies,
  getMovieReviews,
};
