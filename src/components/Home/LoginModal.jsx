import React from 'react'
import styled from 'styled-components'


//---------------styled-components-----------------

const Container = styled.div`
  background-color: blue;
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

const LoginModal = ( props ) => {
  return (
    <Container>
      <h1>Login</h1>
      <form>
        <input placeholder="username" />
        <input placeholder="password" />
        <button>Enter</button>
      </form>
    </Container>
  )
}

export default LoginModal