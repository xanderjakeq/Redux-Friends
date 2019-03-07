import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import FriendsPage from './components/FriendsPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <NavLink exact to = '/'>Main</NavLink>
              </li>
              <li>
                <NavLink exact to = '/friends'>My Friends</NavLink>
              </li>
              <li>
                <NavLink exact to = '/login'>Login</NavLink>
              </li>
            </ul>
          </nav>
          <div className="main">
            <Route exact path = '/' component = {LandingPage}/>
            <ProtectedRoute exact path = '/friends' component = {FriendsPage}/>
            <Route exact path = '/login' component = {LoginPage}/>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
