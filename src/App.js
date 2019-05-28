import                  './global.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as routes from './routes/routes'
import React       from 'react';
import Home        from './components/Home/Home'
import Dashboard   from './components/Dashboard/Dashboard'
import Workouts    from './components/Workouts/Workouts'
import { async } from 'q';

class App extends React.Component {
  componentDidMount(){
    // this.getWorkouts()
  }
  handleRegister = async (data) =>{
    try {
      const registarCall = fetch('http//localhost:8000/users/registration', {
        method: 'POST',
        body: JSON.stringify(data), 
        credentials: 'include',
        headers: {
          'Content_Type': 'application/json'
        }
      })
      const response = registarCall.json()
      console.log(response, 'from the flask server on localhost:8000')
    } catch (err) {
      console.log(err)
      
    }
  }
  getWorkouts = async () => {
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