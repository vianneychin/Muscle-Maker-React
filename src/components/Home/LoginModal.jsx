import React from 'react'
import styled from 'styled-components'


//---------------styled-components-----------------

const Container = styled.div`
  > form {
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: 20vh;
    background-color: red;
    > input {
      width: 50%;
    }
  }
`

//-------------------------------------------------

const LoginModal = ( props ) => {
  return (
    <Container>
      <h1>Login</h1>
      <form>
        <input placeholder="username" />
        <input placeholder="password" />
      </form>
    </Container>
  )
}

export default LoginModal