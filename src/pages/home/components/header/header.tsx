import { Logo } from "../../../../shared/logo";
import { Container, SingoutButton } from "./style";
import { SignOut } from 'phosphor-react'

export function Header() {
  return (
    <Container>
      <Logo color="white"/>
      <SingoutButton>
        <SignOut size={24} weight="bold" color="#f5f5f5" />
      </SingoutButton>
    </Container>
  )
}