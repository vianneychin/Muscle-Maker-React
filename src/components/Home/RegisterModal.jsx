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
/* <-----------------------------------------> */

const RegisterModal = ( props ) => {
  return (
    <Container>
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="verify password" />
      </form>
    </Container>
  )
}

export default RegisterModal