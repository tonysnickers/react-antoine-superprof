import React from "react";
import styled from "styled-components";

interface ITitle {
  title: string;
}

export const Root = styled.h1`
  font-size: 40px;
  text-align: center;
  margin-bottom: 30px;
  color: dimgrey;
  text-transform: uppercase;
`;

export default function Title({ title }: ITitle) {
  return <Root>{title}</Root>;
}
