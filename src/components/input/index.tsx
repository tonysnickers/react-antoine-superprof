import React from "react";
import styled from "styled-components";

interface IProps {
  onChange: (value:string) => void;
  type?: "text" | "password";
  placeholder: string;
  value: string;
}

const Field = styled.input`
  padding: 10px;
  border-radius: 10px;
  width: 300px;
  &:focus {
    outline: none !important;
    border-color: limegreen;
  }
`;

export default function Input({
  onChange,
  type = "text",
  placeholder,
  value,
}: IProps) {
  return (
    <Field
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
