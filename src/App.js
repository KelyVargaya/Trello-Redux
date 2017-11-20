import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter,Route,Switch,Redirect,Nav,NavLink} from 'react-router-dom'
import {Button, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import {connect} from 'redux-zero/react';
import './App.css';
import SingIn from './sing_in.js';
import SingUp from './sing_up.js';
import Boards from './board.js'


const App = ({ stages, tasks }) => {
  return (
    <div>
        <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/sing_up" render={() =><SingUp/>}/>
            <Route exact path="/sing_in" render={() =><SingIn/>}/>
             <Route exact path="/boards" render={() =><Boards stages={stages}  tasks = {tasks}/>}/>
            <Route render={() => <Redirect to="/sing_in" />} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

const mapToProps = ({stages, tasks})  => ({stages, tasks});
export default connect(mapToProps)(App);
