import                  './global.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as routes from './routes/routes'
import React       from 'react';
import Home        from './components/Home/Home'
import Dashboard   from './components/Dashboard/Dashboard'
import Workouts    from './components/Workouts/Workouts'

class App extends React.Component {
  componentDidMount(){
    this.getWorkouts()
  }
  handleRegister = async (data) => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/workouts', {
        credentials: 'include'
      })

      const responseParsed = await response.json()
      console.log(responseParsed, 'workouts')
      
    } catch (err) {
      console.log(err)
      
    }
  }
  render() {
    return (
      <div>
          <BrowserRouter>
            <Switch>
              <Route
                exact path = { routes.ROOT }
                render     = { () => <Home /> }
              />
              <Route
                exact path = { routes.DASHBOARD }
                render     = { () => <Dashboard /> }
              />
              <Route
                exact path = { routes.WORKOUTS }
                render     = { () => <Workouts /> }
              />
            </Switch>
          </BrowserRouter>
      </div>
    )
  }
}

export default App