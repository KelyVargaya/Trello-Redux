import React, { Component } from 'react';
import './sing_in.css';
import {Button, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import logo from './img/logito.png';
import {
	BrowserRouter,
	Route,
	Switch,
	Redirect,
    Nav,
    NavLink
} from 'react-router-dom'

const SingIn = ({  }) => {
	return (
		<div id="logo">
			<center>
                <img src={logo} />

                <form >
          <FormGroup>
            <InputGroup className="input">
              <FormControl  id="n" type="text" placeholder = "add name"  />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup className="input">
              <FormControl id="n" type="text" placeholder = "password" />
            </InputGroup>
          </FormGroup>
        
          <NavLink to="/boards"><button className="boton">SING IN</button></NavLink>
          
        </form>
         <NavLink to="/sing_up" className="text-navlink" id="create">Create new account</NavLink>
         
            </center>
			
		</div>
	);
}

export default SingIn;