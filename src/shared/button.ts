import styled, { css } from "styled-components";

type ButtonProps = {
  w?: string
  bg?: string
  bgHover?: string 
}

export const Button = styled.button<ButtonProps>`
  ${({w, bg, bgHover}) => css`
  background-color: ${bg ?? "black"};
  border: none;
  border-radius: 1Rem;
  color: white;
  cursor: pointer;
  padding: 0 1rem;
  font-size: 1rem;
  height: 2.5rem;
  width: ${w ?? '100%'};
  :hover{
    background-color: ${bgHover ?? '#3A3A3A'};
  }
  
`}
`