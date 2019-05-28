import React  from 'react'
import styled from 'styled-components'


/* <----------- styled components -----------> */

const Container = styled.div`
  background-color: blue;
<<<<<<< HEAD
  height: 55vh;
  width: 36.8em;
=======
  height: 40vh;
  width: 25vw;
>>>>>>> master

  > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
<<<<<<< HEAD
    background-color: grey;
=======
    /* background-color: red; */
>>>>>>> master
    > input {
      width: 70%;
    }
  }
`
/* <-----------------------------------------> */

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