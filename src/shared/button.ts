import styled from "styled-components";

type ButtonProps = {
  w?: string,
}

export const Button = styled.button<ButtonProps>`
  background-color: black;
  border: none;
  border-radius: 1em;
  color: white;
  padding: 1em;
  font-size: 1em;
  width: ${props => props.w ? props.w : '100%'};
`