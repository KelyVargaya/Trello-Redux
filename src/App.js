import React, { Component } from 'react';
import logo from './logo.svg';

import {Button, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import {connect} from 'redux-zero/react';
import './App.css';
import SingIn from './sing_in.js'

const App = ({ trello }) => {
  return (
    <div>
        <SingIn/>
    </div>
  );
}

const mapToProps = ({trello}) => ({trello});
export default connect(mapToProps)(App);
