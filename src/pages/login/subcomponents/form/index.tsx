import { useState, FormEvent } from "react"
import { Button } from "../../../../shared/button"
import { Input } from "../../../../shared/input"
import { FormContainer } from "./styles"


type FormElements ={
  password: HTMLInputElement
  user: HTMLInputElement
} & HTMLFormControlsCollection

type InputFormElement = {
  readonly elements: FormElements
} & HTMLFormElement

type ValuesForm = {
  password: string
  user: string
}
export const Form = () => {

  const [values, setValues] = useState<ValuesForm>()

  const handleSubmit = (e: React.FormEvent<InputFormElement>) => {
    e.preventDefault()
    setValues({ 
      password: e.currentTarget.elements.password.value,
      user: e.currentTarget.elements.user.value})
  }
  return (
        <FormContainer onSubmit={handleSubmit}>
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
          <Button >Login</Button> 
        </FormContainer>
  )
}