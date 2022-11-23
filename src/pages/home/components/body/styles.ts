import styled from "styled-components";

type boxProps = {
  gap?: string,
  justify?: string,
  w?: string
  al?: string
  fd?: string
  bg?: string
  br?: string
  p?: string
}

type spanProps = {
  w?: string
}

export const Container = styled.div`
  background-color: #F8F8F8;
  display: flex;
  justify-content: center;
  height: 100vmin;
`

export const Box = styled.div<boxProps>`
  align-items: ${({al}) => al ? al : 'flex-start'};
  background-color: ${({bg}) => bg ? bg : 'transparent'};
  border-radius: ${({br}) => br ? br : 'none'};
  display: flex;
  flex-direction: ${({fd}) => fd ? fd : 'row'};
  justify-content: ${({justify}) => justify ? justify : 'none'};
  gap: ${({gap}) => gap ? gap : '0'};
  padding: ${({p}) => p ? p : '0'};
  width: ${({w}) => w ? w : 'auto'};
`

export const Span = styled.div<spanProps>`
  width: ${({w}) => w ? w : 'auto'};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 4rem 0;
`

export const FilterButton = styled.button`
   background-color: transparent;
  border-color: #6B6B6B;
  border-radius: 2rem;
  border-style: solid;
  border-width: 1px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;

  :hover{
    background-color: #EDEDED
  }
`

