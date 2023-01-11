/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "@tanstack/react-query";
import { router } from "./router";

export const searchMovies = (query: string, rating: number) => {
  const { data, error, isLoading } = useQuery(["search-movies", query], () =>
    router.searchMovies(query)
  );
  return {
    movies: data ? data.filter((movie) => movie.vote_average >= rating) : [],
    loading: isLoading,
    error: error ? error["message"] : "",
  };
};

export const getMovieReviews = (movieId: string) => {
  const { data, error, isLoading } = useQuery(["movie-review", movieId], () =>
    router.getMovieReviews(movieId)
  );
  return {
    reviews: data || [],
    loading: isLoading,
    error: error ? error["message"] : "",
  };
};
