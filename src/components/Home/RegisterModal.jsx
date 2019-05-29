import React  from 'react'
import styled from 'styled-components'

/* <----------- styled components -----------> */
const Container = styled.div`
  background-color: dodgerblue;
  height: 55vh;
  width: 36.8em;

  > form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: grey;
    > input {
        width: 50%;
    }
  }
`
/* <------- end of styled components --------> */

const RegisterModal = ( props ) => {
  return (
    <Container>
      <button onClick={props.hideRegisterModal}>✕</button>
      <h1>Register</h1>
      <form>
        <input type="text"     placeholder="username" />
        <input type="text"     placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="verify password" />
        <button>Enter</button>
      </form>
    </Container>
  )
}

export default RegisterModal