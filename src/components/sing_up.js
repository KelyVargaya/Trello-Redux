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
                  signUp(this.fullNameRef.value, this.emailRef.value, this.passwordRef.value); 
               }}>
        
          <FormGroup>
            <InputGroup className="input">
              <FormControl  id="n" type="text" placeholder = "First Name" inputref ={ref => { this.fullNameRef = ref}} required />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup className="input">
              <FormControl id="n" type="text" placeholder = "Last Name" />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup className="input">
              <FormControl id="n" type="text" placeholder = "Email" inputref = {ref => {this.emailRef = ref}} required/>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup className="input">
              <FormControl id="n" type="password" placeholder = "password" inputref = {ref => {this.passwordRef = ref}} required/>
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