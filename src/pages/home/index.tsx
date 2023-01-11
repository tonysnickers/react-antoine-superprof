import React, { useState } from "react";
import { useDebounce } from "use-debounce";
import Header from "containers/home/header";
import Results from "containers/home/results";
import { searchMovies } from "api/search";
import DataContainer from "components/data-container";

const Home = () => {
  const [query, setQuery] = useState("");
  const [rating, setRating] = useState(0);
  const [debouncedQuery] = useDebounce(query, 300);
  const { loading, movies, error } = searchMovies(debouncedQuery, rating);

  return (
    <div className="home-page">
      <Header
        onChangeQuery={setQuery}
        query={query}
        onChangeRating={setRating}
        rating={rating}
      />
      <DataContainer
        loading={loading}
        noData={movies.length === 0}
        error={error}
      >
        <Results movies={movies} />
      </DataContainer>
    </div>
  );
};

export default Home;
