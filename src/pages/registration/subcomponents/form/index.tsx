import { useState } from "react"
import { Button } from "../../../../shared/button"
import { Input } from "../../../../shared/input"
import { FormContainer } from "./styles"

type PropsEmail = {
  
}

export const Form = () => {

  const [email, setEmail] = useState('')
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  return (
        <FormContainer>
          <Input 
          type="email" 
          placeholder="E-mail"
          onChange={event => setEmail(event.target.value)}
          />
          <Input 
          type="text" 
          placeholder="Usuário"
          onChange={event => setUser(event.target.value)}
          />
          <Input 
          type="password" 
          placeholder="Senha"
          onChange={event => setPassword(event.target.value)}
          />
          <Button>Criar Conta</Button> 
        </FormContainer>
  )
}