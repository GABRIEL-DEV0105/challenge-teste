import { Button } from "../../shared/button";
import { Card } from "../../shared/card";
import { Logo } from "../../shared/logo";
import { Mid } from "../../shared/mid";
import { Title } from "../../shared/title";
import { Main } from "./styles";
import { Form } from "./subcomponents/form";

export function Subscribe() {
  return (
    <Main>
      <Card w="90%" h="539px" maxW="392px" p="2rem" gap="2rem">
        <Mid>
          <Logo/>
        </Mid>
        <Title size="2em" fw="600">Criar Conta</Title>
        <Form/>
        <Button>Login</Button>
      </Card>
    </Main>
  )
}