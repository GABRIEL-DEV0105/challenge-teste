import { Button } from "../../shared/button";
import { Card } from "../../shared/card";
import { Logo } from "../../shared/logo";
import { Mid } from "../../shared/mid";
import { Title } from "../../shared/title";
import { Main } from "./styles";
import { Form } from "./subcomponents/form";

export function Cadastrar() {
  return (
    <Main>
      <Card w="25%" gap="2rem">
        <Mid>
          <Logo/>
        </Mid>
        <Title size="2em">Criar Conta</Title>
        <Form/>
        <Button>Login</Button>
      </Card>
    </Main>
  )
}