import styled from "styled-components";

type formProps = {
  gap?: string
  align?: string
}

export const FormContainer = styled.form<formProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({align}) => align ? align : "center"};
  gap: ${({gap}) => gap ? gap : "2rem"};
`