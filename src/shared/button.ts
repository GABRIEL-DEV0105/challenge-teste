import styled from "styled-components";

type ButtonProps = {
  w?: string,
}

export const Button = styled.button<ButtonProps>`
  background-color: black;
  border: none;
  border-radius: 1Rem;
  color: white;
  cursor: pointer;
  padding: 0 1rem;
  font-size: 1rem;
  height: 2.5rem;
  width: ${props => props.w ? props.w : '100%'};
  :hover{
    background-color: #3A3A3A
  }
`