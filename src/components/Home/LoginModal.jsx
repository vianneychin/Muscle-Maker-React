import React        from 'react'
import { Redirect } from 'react-router-dom'
import styled       from 'styled-components'

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
    password: '',
    redirect: false
  }

  // setRedirect = () => {
  //   this.setState({ redirect: true })
  // }
  // redirectLoggedUser = () => {
  //   if( this.state.redirect ) {
  //     return <Redirect to="/dashboard" />
  //   }
  // }

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
      // this.state.logged
      // ? <Redirect to='/dashboard'/>
      // :
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
          {/* {this.redirectLoggedUser()} */}
          <button onClick={this.setRedirect}>Enter</button>
        </form>
      </Modal>
    )
  }
}

export default LoginModal