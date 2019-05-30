import React, { Component }  from 'react'
import styled from 'styled-components'

/* <----------- styled components -----------> */
const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: rgb(0, 0, 0, .9);
  border-top: 5px solid rgb(0, 255, 0);
  height: 85vh;
  width: 36.8em;
  h3 {
    margin-left: .7em;
    color: white;
    font-weight: 300;
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
    .cancel-button {
      top: -2%;
      margin-left: 20px;
      padding: 18px;
      font-size: 2em;
      width: 6em;
      background-color: rgb(0,0,0, .0);
      &:hover {
        border: 4px solid hotpink;
        color: hotpink;
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
  margin-top: .5em;
  button {
    position: relative;
    left: 18%;
    font-size: .5em;
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
          <h3>Register</h3>
        </Header>
        <form onSubmit={e => this.doRegisterUser(e) }>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.changeHandler}
            autocomplete="off"
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.changeHandler}
            autocomplete="off"
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.changeHandler}
            autocomplete="off"
          />
          <input
            type="password"
            name="verify_password"
            placeholder="verify password"
            value={this.state.verify_password}
            onChange={this.changeHandler}
            autocomplete="off"
          />

          {/* TODO: When the user submits the form, a Login modal will appear in lieu. */}
          <div>
            <button>⟶</button>
            <button
              onClick={this.props.hideRegisterModal}
              className="cancel-button"
            >
              Cancel</button>
          </div>
        </form>
      </Container>
    )
  }
}

export default RegisterModal