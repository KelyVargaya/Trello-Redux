import React, { Component } from 'react';
import './sing_in.css';
import {Button, From, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import {NavLink, Redirect} from 'react-router-dom';
import {signIn, signOut, signUp} from '../actions/actions'
import logo from '../img/logito.png';

const SingUp = ({successLogin}) => {
  return (
    <div id="logo">
       {
          successLogin  && <Redirect to = "/Boards" />
        }
        <center>
        <img src={logo} />
        <form onSubmit =  {
               e => {
                  e.preventDefault();
                  signUp(this.firstName.value, this.lastName.value, this.email.value, this.password ); 
               }}>
        
          <FormGroup>
            <InputGroup className="input">
              <FormControl  id="n" type="text" placeholder = "First Name" inputref ={e => { this.firstName = e}} required />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup className="input">
              <FormControl id="n" type="text" placeholder = "Last Name" inputref ={e => { this.lastName = e}} required/>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup className="input">
              <FormControl id="n" type="email" placeholder = "Email" inputref = {e => {this.email = e}} required/>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup className="input">
              <FormControl id="n" type="password" placeholder = "password" inputref = {e => {this.password = e}} required/>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup className="input">
              <FormControl id="n" type="password" placeholder = "Confirm Password" />
            </InputGroup>
          </FormGroup>
          <button type="submit" className="boton">SING UP</button>
          <NavLink to="/sing_in" className="text-navlink" >Sing In</NavLink>
        </form>
        </center>
    </div>
  );
}

export default SingUp;