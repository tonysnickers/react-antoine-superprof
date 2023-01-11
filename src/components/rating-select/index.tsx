import React from "react";
import styled from "styled-components";

interface IProps {
  value: number;
  onChange: (value: number) => void;
}

// composant, pour l'affichage
// containers pour la logique

const InputSelect = styled.select`
  margin-left: 20px;
  height: 30px;
  border: 1px solid dimgray;
  border-radius: 8px;
  width: 50px;
  &:focus {
    outline: none !important;
    border-color: limegreen;
  }
`;

const Option = styled.option<{ isSelected?: boolean }>`
  color: ${({ isSelected }) => (isSelected ? "red" : "black")};
`;

export default function RatingSelect({ onChange, value }: IProps) {
  return (
    <InputSelect
      onChange={(e) => onChange(Number(e.target.value))}
      value={value}
    >
      {[...Array(10).keys()].map((mark) => (
        <Option key={mark} value={mark} isSelected={value === mark}>
          {mark} ⭐️
        </Option>
      ))}
    </InputSelect>
  );
}

