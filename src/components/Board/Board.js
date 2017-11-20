import React from 'react'
import {addStage} from '../../actions/actions'
import Stage from '../Stage/Stage';
import './Board.css'
import {Button,Glyphicon, InputGroup } from 'react-bootstrap';
import peque from '../../img/logoo.png';
import {BrowserRouter,Route,Switch,Redirect,NavLink,} from 'react-router-dom';

const Board = ({stages, tasks}) => {
   const list = stages.map ( stage => {
      return <Stage  key={stage} title={stage} 
         tasks = {  tasks.filter ( e => e.stage === stage )}
      />
   });

   return (
      <div>
        <header>
                <center>
                 <img src={peque} />
                 </center>
            </header>
             <h4><Glyphicon glyph="user" />My Boards</h4>

          <div className="cajita">
            Add new list
             {list}
          </div>

          <div>
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

export default Board;
