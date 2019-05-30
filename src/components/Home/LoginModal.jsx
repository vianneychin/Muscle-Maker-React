import React        from 'react'
import { Redirect } from 'react-router-dom'
import styled       from 'styled-components'

/* <----------- styled components -----------> */
const Modal = styled.div`
  position: absolute;
  left: 31%;
  top: 11%;
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
      font-size: 2em;
      padding: 18px;
      width: 6em;
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
        <Header>
          <h3>Login</h3>
        </Header>
        <form onSubmit={e => this.doRegisterUser(e) }>
          <input
            name="username"
            placeholder="username"
            autocomplete="off"
            value={this.state.username}
            onChange={this.changeHandler}
          />
          <input
            type="password"
            name="password"
            autocomplete="off"
            placeholder="password"
            value={this.state.password}
            onChange={this.changeHandler}
          />

          {/* TODO: When the user submits the form, a Login modal will appear in lieu. */}
          <div>
            <button>Login</button>
            <button
              onClick={this.props.hideLoginModal}
              className="cancel-button"
            >
              Cancel</button>
          </div>
        </form>
      </Modal>
      // <Modal>
      //   {/* <button onClick={this.props.hideLoginModal}>✕</button> */}
      //   <h1>Login</h1>
      //   <form onSubmit={e => this.doLoginUser(e) }>
      //     <input
      //       name="username"
      //       placeholder="username"
      //       value={this.state.username}
      //       onChange={this.changeHandler}
      //     />
      //     <input
      //       type="password"
      //       name="password"
      //       placeholder="password"
      //       value={this.state.password}
      //       onChange={this.changeHandler}
      //     />
      //     {/* {this.redirectLoggedUser()} */}
      //     <div>
      //       <button onClick={this.setRedirect}>Enter</button>
      //       <button class="cancel-button">Cancel</button>
      //     </div>
      //   </form>
      // </Modal>
    )
  }
}

export default LoginModal