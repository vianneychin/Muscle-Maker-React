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
  font-family: 'Roboto', sans-serif;
  color: rgb(245, 245, 245);
  a {
    text-decoration: none;
    color: white;
    h1:hover {
      color: rgb(255, 0, 0, .6);
    }
    h1 {
      font-weight: ${props => props.lighter ? 300 : 400};
    }
    h4:hover {
      color: hotpink;
    }
  }
`
const Main = styled.main`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 2em;
  background-color: rgb(0, 0, 0, 0.5);
  h1 {
    font-weight: 900;
  }
  .smaller {
    font-weight: 300;
  }
`
/* <-----------------------------------------> */


class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <HeaderBackground>
          <Main>
            <h1>Hi {this.props.currentUser.username}</h1>

            {/* <Clock/> is from 'react-live-clock' npm */}
            <h2 className="smaller">It's Monday</h2>
            <h3><Clock className="smaller" format={'HH:mm:ss'} ticking={true}/></h3>

            <Link to="/workouts">
              <h1>My Workouts ➞</h1>
            </Link>
            <Link onClick={()=>{this.props.doLogout()}}>
              <h4 className="smaller">← Logout</h4>
            </Link>
          </Main>
        </HeaderBackground>

        {/* COMPONENT */}
        {/* <YoutubeComponent /> */}

      </div>
    )
  }
}

export default Dashboard