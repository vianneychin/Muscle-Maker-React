import                                       './global.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {withRouter} from 'react-router'
import * as routes                      from './constants/routes'
import React                            from 'react';
import Home                             from './components/Home/Home'

import Dashboard                        from './components/Dashboard/Dashboard'
import Workouts                         from './components/Workouts/Workouts'

class App extends React.Component {
  state = {
    currentUser: null, 
    logged: false,
    exercise: []
  }


  componentDidMount(){
    // this.getWorkouts().then(data =>{
    //   this.setState({
    //     workout: data.data.results
    //   })
    // })
  }


  doSetCurrentUser = user =>
  this.setState({
    currentUser: user,
    // logged
  })


  // doLogout = async () =>

  handleRegister = async (info) =>{
    console.log(info)
    try {
      const registarCall = await fetch('http://localhost:8000/users/', {
        method: 'POST',
        body: JSON.stringify(info),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const response = await registarCall.json()
      console.log(response, 'from the flask server on localhost:8000')
      // if(response.message = 'success'){
      //   this.setState({
      //     logged: true,
      //     currentUser: response.user

      //   })
      // }
    } catch (err) {
      console.log(err)
    }
  }
  handleLogin = async (info)=>{
    console.log(info)
    try {
      const loginResponse = await fetch('http://localhost:8000/users/login', {
        method:      'POST',
        credentials: 'include',
        body:         JSON.stringify(info),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const parsedData = await loginResponse.json()
      console.log(parsedData);
      if(parsedData.message === 'success'){
        this.setState({
          logged:      true,
          currentUser: parsedData.user,
        })
        return this.props.history.push('/dashboard')
      }
    } catch (error) {
      console.log(error)
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
  // doLogout = async () =>{
  //   await fetch('/users/logout')
  //   this.setState({
  //     currentUser: null
  //   })
  //   this.props.history.push(routes.LOGIN)
  // }

  render() {
    return (
            <Switch>
              <Route
                exact path = { routes.ROOT }
                render     = { () => <Home handleLogin={this.handleLogin} handleRegister={this.handleRegister}/> }
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
    )
  }
}

export default withRouter(App)