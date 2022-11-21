import styled from "styled-components";

type CardProps = {
  w?: string,
  h?: string,
  gap?: string,
  maxW?: string,
  minW?: string,
  p?: string,
}

export const Card = styled.div<CardProps>`
  background-color: white;
  border: none;
  border-radius: 1em;
  display: flex;
  gap: ${({gap}) => gap ? gap : '1rem'};
  flex-direction: column; 
  width: ${({w}) => w ? w : 'auto'};
  max-width: ${({maxW}) => maxW ? maxW : 'auto'};
  min-width: ${({minW}) => minW ? minW : 'auto'};
  padding: ${({p}) => p ? p : 'none'};
  height: ${({h}) => h ? h : 'auto'};
`