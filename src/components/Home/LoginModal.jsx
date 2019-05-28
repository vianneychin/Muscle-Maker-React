import React  from 'react'
import styled from 'styled-components'


//---------------styled-components-----------------

const Container = styled.div`
  background-color: blue;
  height: 55vh;
  width: 35vw;

  > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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