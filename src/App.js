import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter,Route,Switch,Redirect,Nav,NavLink} from 'react-router-dom'
import {Button, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import {connect} from 'redux-zero/react';
import './App.css';
import SingIn from './components/sing_in.js';
import SingUp from './components/sing_up.js';
import Boards from './components/Board/Board.js';
import {signIn, signOut, signUp} from './actions/actions'


const App = ({ stages, tasks, successLogin, user}) => {
  return (
    <div>
       
        <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/sing_up" render={() =><SingUp successLogin={successLogin}/>}/>
            <Route exact path="/sing_in" render={() =><SingIn successLogin={successLogin}/>}/>
             <Route exact path="/boards" render={() =><Boards stages={stages}  tasks = {tasks}/>}/>
            <Route render={() => <Redirect to="/sing_in" />} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

const mapToProps = ({stages, tasks,successLogin,user})  => ({stages, tasks,successLogin, user});
export default connect(mapToProps)(App);
