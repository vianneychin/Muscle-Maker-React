import React, { Component }  from 'react'
import styled from 'styled-components'

//*<<-------------styled-components--------------->>
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
//*<<--------------------------------------------->>

class RegisterModal extends Component {
  state ={
    username:'',
    email:'',
    password:'',
    verifyPassword:''
  }
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  doRegisterUser = e => {
    e.preventDefault()
    this.props.handleRegister(this.state)
  }

  render() {
    return (
      <Container>
        <button onClick={this.props.hideRegisterModal}>✕</button>
        <h1>Register</h1>
        <form onSubmit={e => this.doRegisterUser(e) }>
          <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.changeHandler} />
          <input type="text" name="email" placeholder="email" value={this.state.email}  onChange={this.changeHandler}/>
          <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.changeHandler} />
          <input type="password" name="verifyPassword" placeholder="verify password" value={this.state.verifyPassword} onChange={this.changeHandler}/>
          <button>Enter</button>
        </form>
      </Container>
    )
  }
}

export default RegisterModal