import styled from "styled-components";

type PropsTitle = {
  size?: string,
  align?: string
  fw?: string,
}

export const Title = styled.h1<PropsTitle>`
  font-weight: ${({fw}) => fw ? fw : 'semibold'}; //atualizar
  font-size: ${({size}) => size ? size : '1em'};
  text-align: ${({align}) => align ? align : 'center'};
`