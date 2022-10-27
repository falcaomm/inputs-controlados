import React, { useState } from 'react'
import { MainContainer, Form, Input } from './styles'

function MainPage() {

  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [email, setEmail] = useState("")

  const onChangeNome = (e) => {
    setNome(e.target.value)
  }

  const onChangeIdade = (e) => {
    setIdade(e.target.value)
  }

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const mandaDados = () => {
    let obj = {
      nome: nome,
      idade: idade,
      email: email,
    }
    setEmail("")
    setNome("")
    setIdade("")
    console.log(obj);
  }


  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome: {nome}
          <Input value={nome} onChange={onChangeNome}/>
        </label>

        <label>
          Idade: {idade}
          <Input value={idade} onChange={onChangeIdade}/>
        </label>

        <label>
          E-mail: {email}
          <Input value={email} onChange={onChangeEmail}/>        </label>

        <button onClick={mandaDados}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage