import React, { Component }  from 'react'
import styled from 'styled-components'

/* <----------- styled components -----------> */
const Container = styled.div`
  background-color: rgb(0, 0, 0, .8);
  border-radius: 40px;
  border: 5px solid grey;
  height: 85vh;
  width: 36.8em;
  h1 {
    margin-left: .7em;
    color: white;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    /* background-color: grey; */
    height: 76vh;
    button {
      position: relative;
      font-size: 3em;
      background-color: rgb(0, 255, 0, 0.5);
      border: 4px solid white;
      color: white;
      padding-left: 1em;
      padding-right: 1em;
      margin-top: .5em;
      margin-bottom: .5em;
      border-radius: 15px;
      &:hover {
        border: 4px solid #7FFF00;
        color: #7FFF00;
        cursor: pointer;
      }
    }
  input {
    width: 70%;
    padding-top: 5%;
    display: block;
    background: 0;
    border: 0;
    border-bottom: 2px solid white;
    color: #fff;
    font-weight: 600;
    font-size: 2em;
    padding-bottom: 8px;
    outline: 0;
    text-align: center;
    }
  }
`
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  position: relative;
  font-size: 3em;
  top: 3%;
  button {
    position: relative;
    left: 12%;
    font-size: 1em;
    background-color: rgb(0,0,0, .0);
    color: white;
    border: none;
    &:hover {
      color: red;
      cursor: pointer;
    }
  }
`
/* <------- end of styled components --------> */

class RegisterModal extends Component {
  state ={
    username:'',
    email:'',
    password:'',
    verify_password:''
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
        <Header>
          <h1>Register</h1>
          <button onClick={this.props.hideRegisterModal}>✕</button>
        </Header>
        <form onSubmit={e => this.doRegisterUser(e) }>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.changeHandler}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.changeHandler}
          />
          <input
            type="password"
            name="verify_password"
            placeholder="verify password"
            value={this.state.verify_password}
            onChange={this.changeHandler}
          />

          {/* TODO: When the user submits the form, a Login modal will appear in lieu. */}
          <button>⟶</button>
        </form>
      </Container>
    )
  }
}

export default RegisterModal