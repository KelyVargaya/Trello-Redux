import React, { Component } from 'react';
import './sing_in.css';
import {Button, FormGroup, FormControl,Nav,Glyphicon, InputGroup, Navbar,
    MenuItem,
    NavItem,
    NavDropdown } from 'react-bootstrap';
import pequeño from './img/logoo.png';
import {
	BrowserRouter,
	Route,
	Switch,
	Redirect,
    
    NavLink,
   
} from 'react-router-dom'

const Boards = ({ }) => {
    return (
        <div>
            <header>
                <center>
                 <img src={pequeño} />
                 </center>
            </header>
             <h4><Glyphicon glyph="user" />My Boards</h4>
        <div className="new">
            new board...
        </div>
        </div>
    );

}

export default Boards;