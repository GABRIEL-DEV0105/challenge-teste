import styled from "styled-components";

type CardProps = {
  w?: string,
  gap?: string
}

export const Card = styled.div<CardProps>`
  background-color: white;
  border: none;
  border-radius: 1em;
  display: flex;
  gap: ${({gap}) => gap ? gap : '1rem'};
  flex-direction: column; 
  width: ${({w}) => w ? w : 'auto'};
  padding: 3em;
 `