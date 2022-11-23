import { Box } from "../styles"
import { CurrencyCircleDollar } from "phosphor-react"
import { Title } from "../../../../../shared/title"
import { SpanText } from "./styles"

export const CardTransf = () => {
  return (
    <Box bg="#F5F6FA" br="0.5rem" p="0.5rem" al="center" justify="space-between">
      <Box>
        <CurrencyCircleDollar size={24} color="#0d0d0d" weight="bold" />
        <SpanText>
          <Title size="1rem" lineHeight="0.8rem">Tranferência</Title>
          <Title color="#6B6B6B" lineHeight="0.8rem" fw="200">Usuario</Title>
        </SpanText>
      </Box>
        <Title color="#6B6B6B"> -R$ 50,00</Title>
    </Box>  
  )
}