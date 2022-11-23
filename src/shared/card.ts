import styled from "styled-components";

type cardProps = {
  w?: string
  h?: string
  fd?: string
  gap?: string
  maxW?: string
  minW?: string
  p?: string
  fg?: string
}

export const Card = styled.div<cardProps>`
  background-color: white;
  border: none;
  border-radius: 1em;
  display: flex;
  gap: ${({gap}) => gap ? gap : '0'};
  flex-direction: ${({fd}) => fd ? fd : 'column'}; 
  flex-grow: ${({fg}) => fg ? fg : '0'};
  width: ${({w}) => w ? w : 'auto'};
  max-width: ${({maxW}) => maxW ? maxW : 'none'};
  min-width: ${({minW}) => minW ? minW : 'none'};
  padding: ${({p}) => p ? p : 'none'};
  height: ${({h}) => h ? h : 'auto'};
`