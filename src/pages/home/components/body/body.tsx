import { Card } from "../../../../shared/card";
import { Box, Container, FilterButton, Span } from "./styles";
import { UserCircle } from 'phosphor-react'
import { Title } from "../../../../shared/title";
import { CardTransf } from "./subcomponents";
import { FormContainer } from "../../../subscribe/subcomponents/form/styles";
import { Input } from "../../../../shared/input";
import { Button } from "../../../../shared/button";

export function Body() {
  return (
    <Container>
      <Span w="60%">
        <Card p="1.5rem" fd="row">
          <Box gap="0.5rem" al="center" w="100%" justify="space-between">
            <Box al="center">
              <UserCircle size={96} color="#0d0d0d" weight="fill" />
              <Title fw="600" size="2rem" align="0" variant="h1">
              Bem vindo,
              <Title fw="600" size="2rem" align="0" variant="h1">Fulano</Title>
              </Title>
            </Box>
            <Box fd="column">
              <Title fw="500" size="1.5rem">Saldo</Title>
              <Title fw="600" size="1.5rem">R$ 100,00</Title>
            </Box>
          </Box>
        </Card>
        <Box gap="1rem" w="100%">
          <Card gap="1rem" p="2.5rem" fg="1">
            <Title fw="600" size="1.5rem" align="flex-start"
            >Transferências realizadas</Title>
            <Box gap="1rem" >
              <FilterButton>Ordenação</FilterButton>
              <FilterButton>Entrada</FilterButton>
              <FilterButton>Saída</FilterButton>
            </Box>
            <CardTransf/>
            <CardTransf/>
            <CardTransf/>
            <CardTransf/>
            <CardTransf/>
            <CardTransf/>
          </Card>
          <Card p="2.5rem" gap="1rem">
          <Title fw="600" size="1.5rem" align="flex-start"
          >Nova transferência</Title>
          <FormContainer gap="1rem" align="flex-start">
            <Title size="1rem">Quem recebe</Title>
            <Input type="text" id="user" placeholder="Usuário"/>
            <Title size="1rem">Valor</Title>
            <Input type="text" id="value" placeholder="R$ 0"/>
            <Button bg="#33D67E">Pagar</Button>
          </FormContainer>
          </Card>
        </Box>
      </Span>
    </Container>
  )
}