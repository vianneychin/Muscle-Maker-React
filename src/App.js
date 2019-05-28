import                  './global.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import * as routes from './routes/routes'
import React       from 'react';
import Home        from './components/Home/Home'
import Dashboard   from './components/Dashboard/Dashboard'
import Workouts    from './components/Workouts/Workouts'

class App extends React.Component {
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