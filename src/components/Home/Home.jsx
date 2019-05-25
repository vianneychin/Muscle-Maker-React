import React from 'react'
import styled from 'styled-components'
import LoginModal from './LoginModal'
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
  render() {
    return (
      <div>
        <Title>
          <h1>MUSCLE MAKER</h1>
        </Title>
        <Section>
          <p>get healthier,</p>
          <p>look fitter,</p>
          <p>and feel better</p>
        </Section>
        <Buttons>
          <button>Register</button>
          <button>Login</button>
        </Buttons>
        {/* MODALS */}
        <LoginModal />
        <RegisterModal />
        {/* ----- */}
      </div>
    )
  }
}

export default Home