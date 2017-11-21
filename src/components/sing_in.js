import React, { Component } from 'react';
import './sing_in.css';
import {Button, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import logo from '../img/logito.png';
import {BrowserRouter,Route,Switch,Redirect,Nav,NavLink} from 'react-router-dom';
import {signIn, signOut, signUp} from '../actions/actions';

const SingIn = ({ successLogin }) => {
	return (
		<div id="logo">
			<center>
        <img src={logo} />
         {
            successLogin  && <Redirect to = "/boards" />
         }
        <form onSubmit = {
            e => {
               e.preventDefault();
               signIn( this.user.value,  this.password.value);
            }
         } >
          <FormGroup>
            <InputGroup className="input">
              <FormControl  id="n" type="text" placeholder = "add name" inputref = { ref => {this.user = ref}}  />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup className="input">
              <FormControl id="n" type="text" placeholder = "password"  inputref = { ref => {this.password = ref}}/>
            </InputGroup>
          </FormGroup>
        
          <button type = "submit" className="boton">SING IN</button>
        </form>
         <NavLink to="/sing_up" className="text-navlink" id="create">Create new account</NavLink>
      </center>
			
		</div>
	);
}

export default SingIn;