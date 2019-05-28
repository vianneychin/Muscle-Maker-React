import React  from 'react'
import styled from 'styled-components'

<<<<<<< HEAD
//*<<-------------styled-components--------------->>
const Container = styled.div`
  background-color: dodgerblue;
  height: 55vh;
  width: 36.8em;

=======
//---------------styled-components-----------------

const Container = styled.div`
  background-color: dodgerblue;
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
    > input {
      width: 50%;
    }
  }
`
//*<<--------------------------------------------->>
=======
    /* background-color: red; */
    > input {
      width: 70%;
    }
  }
`
//-------------------------------------------------
>>>>>>> master

const RegisterModal = ( props ) => {
  return (
    <Container>
      <h1>Register</h1>
      <form>
<<<<<<< HEAD
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="verify password" />
=======
        <input placeholder="What is your name?"/>
        <input placeholder="username"/>
        <input placeholder="password"/>
        <input placeholder="verify password"/>
>>>>>>> master
      </form>
    </Container>
  )
}

export default RegisterModal