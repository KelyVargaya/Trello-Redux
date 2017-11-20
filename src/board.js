import React, { Component } from 'react';
import './sing_in.css';
import {Button, FormGroup, FormControl,Nav,Glyphicon, InputGroup, Navbar,MenuItem,NavItem, NavDropdown } from 'react-bootstrap';
import pequeño from './img/logoo.png';
import {BrowserRouter,Route,Switch,Redirect,NavLink,} from 'react-router-dom'
import {addStage} from './actions.js'
import Stage from './stage.js';

const Boards = ({ stages, tasks }) => {
    const list = stages.map ( stage => {
      return <Stage  key={stage} title={stage} 
         tasks = {  tasks.filter ( e => e.stage === stage )}
      />
   });

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
             {list}
        </div>

         <div className = "Board-column">
            <form onSubmit = { (e) => {
               e.preventDefault();
               addStage (this.stageInputRef.value);
            }}>
               <input type="text" ref = {e => this.stageInputRef = e}/>
               <button type="submit">
                  save list
               </button>
               </form>
            </div>
        </div>
    );

}

export default Boards;