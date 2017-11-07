import React, { Component } from 'react';

import {Button, From, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import logo from './img/logito.png';

const SingUp = ({}) => {
  return (
    <div id="logo">
        <center>
        <img src={logo} />
        <form >
          <FormGroup>
            <InputGroup className="input">
              <FormControl  id="n" type="text" placeholder = "First Name"  />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup className="input">
              <FormControl id="n" type="text" placeholder = "Last Name" />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup className="input">
              <FormControl id="n" type="text" placeholder = "Email" />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup className="input">
              <FormControl id="n" type="text" placeholder = "password" />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup className="input">
              <FormControl id="n" type="text" placeholder = "Conirm Password" />
            </InputGroup>
          </FormGroup>
          <button type="submit" name="submit" value="submit">SING UP</button><br/>
          <NavLink to="/sing_in" className="btn" >Sing In</NavLink>
        </form>
        </center>
    </div>
  );
}
export default SingUp;