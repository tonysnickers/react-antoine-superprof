import React from "react";
import styled from "styled-components";
import RatingSelect from "components/rating-select";
import Input from "components/input";
import Title from "components/title";
import { useUser } from "src/stores/user/context";

export const Header = styled.header`
  text-align: center;
`;

interface IProps {
  query: string;
  rating: number;
  onChangeRating: (rating: number) => void;
  onChangeQuery: (query: string) => void;
}

export default function HomeHeader({
  query,
  onChangeQuery,
  onChangeRating,
  rating,
}: IProps) {
  const {user} = useUser()
  return (
    <Header>
      <Title title="Movie app"/>
      <p>{user.isLogged ? "you are loggued !" : "you are not loggued!"}</p>
      <Input
        onChange={onChangeQuery}
        value={query}
        placeholder="search a movie"
      />
      <RatingSelect onChange={onChangeRating} value={rating} />
    </Header>
  );
}
