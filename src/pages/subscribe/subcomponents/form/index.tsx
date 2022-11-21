import { useState, FormEvent } from "react"
import { Button } from "../../../../shared/button"
import { Input } from "../../../../shared/input"
import { FormContainer } from "./styles"


type FormElements ={
  email: HTMLInputElement
  password: HTMLInputElement
  user: HTMLInputElement
} & HTMLFormControlsCollection

type InputFormElement = {
  readonly elements: FormElements
} & HTMLFormElement

type ValuesForm = {
  email: string
  password: string
  user: string
}
export const Form = () => {

  const [values, setValues] = useState<ValuesForm>()

  const handleSubmit = (e: React.FormEvent<InputFormElement>) => {
    e.preventDefault()
    setValues({ 
      email: e.currentTarget.elements.email.value,
      password: e.currentTarget.elements.password.value,
      user: e.currentTarget.elements.user.value})
      console.log(values)
  }
  return (
        <FormContainer onSubmit={handleSubmit}>
          <Input 
          type="email" 
          id="email"
          placeholder="E-mail"
          />
          <Input 
          type="text" 
          id="user" 
          placeholder="Usuário"
          />
          <Input 
          type="password" 
          id="password" 
          placeholder="Senha"
          />
          <Button>Criar Conta</Button> 
        </FormContainer>
  )
}