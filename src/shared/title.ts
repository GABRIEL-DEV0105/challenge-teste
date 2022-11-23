import styled from "styled-components";

type PropsTitle = {
  size?: string
  align?: string
  fw?: string
  lineHeight?: string
  color?: string
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong';
}

export const Title = styled.span.attrs<PropsTitle>(({variant}) => ({
  as: variant,
}))<PropsTitle>`
  color: ${({color}) => color ? color : 'black'};
  font-weight: ${({fw}) => fw ? fw : '500'};
  font-size: ${({size}) => size ? size : '.8rem'};
  text-align: ${({align}) => align ? align : 'center'};
  line-height: ${({lineHeight}) => lineHeight ? lineHeight : 'auto'};
`