import React from 'react'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'
import styled from 'styled-components'

/* <----------- styled components -----------> */
const Container = styled.div`
  background-image: url('https://i.imgur.com/ZtdwQ6Z.jpg');
  background-size: cover;
  height: 100vh;
`
const Main = styled.div`
  background-color: rgb(0, 0, 0, 0.8);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`
const Title = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 3em;
  letter-spacing: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`
const Section = styled.section`
  font-family: 'Montserrat', sans-serif;
  font-size: 2em;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 5%;
  letter-spacing: 5px;
  section {
    display: flex;
    width: 7.7em;
    justify-content: start;
    p:nth-child(1) {
      margin-right: 0.5em;
    }
  }
`
const Buttons = styled.section`
  width: 41em;
  display: flex;
  justify-content: space-evenly;
  position: relative;
  top: 14%;
  margin-bottom: 12em;
  .login-button {
    background-color: rgb(255, 255, 255, 0);
    color: orange;
    &:hover {
      border: 3px solid orange;
      color: white;
      background-color: orange;
    }
  }
  button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    position: relative;
    font-size: 2.5em;
    border: 3px solid orange;
    background-color: orange;
    color: white;
    width: 6em;
    height: 2em;
    &:hover {
      cursor: pointer;
      border: 3px solid orange;
      color: orange;
      background-color: rgb(255, 255, 255, 0);
    }
  }
`
/* <------- end of styled components --------> */

class Home extends React.Component {
  state = {
    registerModal: false,
    loginModal: false
  }
  showRegisterModal = () => {
    this.setState({ registerModal: true, loginModal: false })
  }
  hideRegisterModal = () => {
    this.setState({ registerModal: false })
  }
  showLoginModal = () => {
    this.setState({ loginModal: true, registerModal: false })
  }
  hideLoginModal = () => {
    this.setState({ loginModal: false })
  }
  render() {
    return (
      <Container>
        <Main>
          <Title>
            <h1>MUSCLE MAKER</h1>
          </Title>
          <Section>
            <section>
              <p>live</p> <p>healthy</p>
            </section>
            <section>
              <p>live</p> <p>active</p>
            </section>
            <section>
              <p>live</p> <p>strong</p>
            </section>
          </Section>
          <Buttons>
            <button type='button' onClick={this.showRegisterModal}>
              Register
            </button>
            <button
              className='login-button'
              type='button'
              onClick={this.showLoginModal}
            >
              Login
            </button>
          </Buttons>
        </Main>
        {this.state.registerModal ? (
          <RegisterModal
            handleRegister={this.props.handleRegister}
            hideRegisterModal={this.hideRegisterModal}
            registerModal={this.registerModal}
            showLoginModal={this.showLoginModal}
          />
        ) : (
          <div />
        )}
        {this.state.loginModal ? (
          <LoginModal
            handleLogin={this.props.handleLogin}
            hideLoginModal={this.hideLoginModal}
            showRegisterModal={this.showRegisterModal}
          />
        ) : (
          <div />
        )}
      </Container>
    )
  }
}

export default Home
