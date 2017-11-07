import React, { Component } from 'react';
import './sing_in.css';
import { NavLink } from 'react-router-dom';
import {Button, FormGroup, FormControl, InputGroup } from 'react-bootstrap';
import logo from './img/logito.png';
const SingIn = ({ dish, index }) => {
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
              <FormControl id="n" type="text" placeholder = "add comments" />
            </InputGroup>
          </FormGroup>
          <button type="submit" name="submit" value="submit">POST COMMENT</button>
        </form>
            </center>
			
		</div>
	);
}

export default SingIn;