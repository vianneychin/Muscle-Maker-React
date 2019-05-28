import React         from 'react'
import styled        from 'styled-components'
import LoginModal    from './LoginModal'
import RegisterModal from './RegisterModal'

//---------------styled-components-----------------
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
//-------------------------------------------------

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
      <div>
        {
          this.state.registerModal
          ? <RegisterModal
              hideRegisterModal={ this.hideRegisterModal }
            />
          : <div />
        }
        {
          this.state.loginModal
          ? <LoginModal
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
          <RegisterModal /> {/* Component */}
          <LoginModal  />   {/* Component */}
        </Section>
        <Buttons>
          <button type="button" onClick={this.showRegisterModal}>Register</button>
          <button type="button" onClick={this.showLoginModal}>Login</button>
        </Buttons>
      </div>
    )
  }
}

export default Home