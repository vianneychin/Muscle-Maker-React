import React         from 'react'
import LoginModal    from './LoginModal'
import RegisterModal from './RegisterModal'
import styled        from 'styled-components'

/* <----------- styled components -----------> */
const Container = styled.div`
  background-image: url('https://i.imgur.com/ZtdwQ6Z.jpg');
  background-size: cover;
`
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Buttons = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`
/* <------- end of styled components --------> */

class Home extends React.Component {
  state = {
    registerModal: false,
    loginModal: false
  }
  showRegisterModal = () => {
    this.setState({ registerModal: true })
  }
  hideRegisterModal = () => {
    this.setState({ registerModal: false })
  }
  showLoginModal = () => {
    this.setState({ loginModal: true })
  }
  hideLoginModal = () => {
    this.setState({ loginModal: false })
  }
  render() {
    return (
      <Container>
        {
          this.state.registerModal
          ? <RegisterModal
              handleRegister={this.props.handleRegister}
              hideRegisterModal={ this.hideRegisterModal }
            />
          : <div />
        }
        {
          this.state.loginModal
          ? <LoginModal
              handleLogin={this.props.handleLogin}
              hideLoginModal={ this.hideLoginModal }
            />
          : < div />
        }
        <Title>
          <h1>MUSCLE MAKER</h1>
        </Title>
        <Section>
          <p>get healthier,</p>
          <p>look fitter,</p>
          <p>and feel better</p>

          {/* Component */}
          {/* <RegisterModal handleRegister={this.props.handleRegister} /> */}
<br/>
          {/* Component */}
          <LoginModal  handleLogin={this.props.handleLogin} />


        </Section>
        <Buttons>
          <button type="button" onClick={this.showRegisterModal}>
            Register
          </button>
          <button type="button" onClick={this.showLoginModal}>
            Login
          </button>
        </Buttons>
      </Container>
    )
  }
}

export default Home