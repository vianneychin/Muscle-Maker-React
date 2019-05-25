import React from 'react'
import styled from 'styled-components'

//---------------styled-components-----------------

const Container = styled.div`
  background-color: dodgerblue;
  height: 40vh;
  width: 25vw;
  > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
    > input {
      width: 70%;
    }
  }
`
//-------------------------------------------------

const RegisterModal = ( props ) => {
  return (
    <Container>
      <h1>Register</h1>
      <form>
        <input placeholder="What is your name?"/>
        <input placeholder="username"/>
        <input placeholder="password"/>
        <input placeholder="verify password"/>
      </form>
    </Container>
  )
}

export default RegisterModal