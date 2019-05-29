import React  from 'react'
import styled from 'styled-components'

/* <----------- styled components -----------> */
const Modal = styled.div`
  background-color: blue;
  height: 55vh;
  width: 36.8em;
  > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: grey;
    > input {
        width: 70%;
    }
  }
`
/* <------- end of styled components --------> */

class LoginModal extends React.Component {
  state = {
    username:'',
    password: ''
  }
  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  doLoginUser = e => {
    e.preventDefault()
    this.props.handleLogin(this.state)
  }
  render() {
    return (
      <Modal>
        <button onClick={this.props.hideLoginModal}>✕</button>
        <h1>Login</h1>
        <form onSubmit={e => this.doLoginUser(e) }>
          <input
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={this.changeHandler}
          />
          <input
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.changeHandler}
          />
          <button>Enter</button>
        </form>
      </Modal>
    )
  }
}

export default LoginModal