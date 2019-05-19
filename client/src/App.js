import React, {Component} from 'react';
import {BroswerRouter as Router, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'


class App extends Component{
  render(){
    return(
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={LandingPage} />
          <div className="container">
            <Route exact path = "/register" component={Register} />
            <Route exact path = "/login" component={Login} />
            <Route exact path = "/profile" component={Profile} />
          </div>
        

        </div>

      </Router>
    )
  }
}

export default App;
