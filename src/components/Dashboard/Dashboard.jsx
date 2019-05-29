import React            from 'react'
import { Link }         from 'react-router-dom'
import Clock            from 'react-live-clock'
import styled           from 'styled-components'
import YoutubeComponent from './YoutubeComponent/YoutubeComponent'


/* <----------- styled components -----------> */
const HeaderBackground = styled.div`
  background-image: url('https://i.imgur.com/keKDODv.jpg?1');
  background-size: cover;
  background-position: top;
  height: 26em;
`
const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  transform: translate(0, 10%);
  font-size: 2em;
`
/* <-----------------------------------------> */


class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <HeaderBackground>
          <Main>
            <h2>Hey John</h2>

            {/* <Clock/> is from 'react-live-clock' npm */}
            <h1>Today is Monday, <Clock format={'HH:mm:ssa'} ticking={true} /> </h1>

            <Link to="/workouts">
              <h1>My Workouts ➞</h1>
            </Link>
          </Main>
        </HeaderBackground>

        {/* COMPONENT */}
        <YoutubeComponent />

      </div>
    )
  }
}

export default Dashboard