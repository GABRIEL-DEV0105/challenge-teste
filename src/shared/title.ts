import styled from "styled-components";

type PropsTitle = {
  size?: string,
  align?: string,
  fw?: string,
  lineHeight?: string,
}

export const Title = styled.h1<PropsTitle>`
  font-weight: ${({fw}) => fw ? fw : '500'};
  font-size: ${({size}) => size ? size : '.8rem'};
  text-align: ${({align}) => align ? align : 'center'};
  line-height: ${({lineHeight}) => lineHeight ? lineHeight : 'auto'};
`