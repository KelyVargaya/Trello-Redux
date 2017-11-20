
import store from '../store/store'
import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAlCAsfw5TynGfg7nlVKNZyQAjNEvwwSZA",
    authDomain: "trello-37318.firebaseapp.com",
    databaseURL: "https://trello-37318.firebaseio.com",
    projectId: "trello-37318",
    storageBucket: "trello-37318.appspot.com",
    messagingSenderId: "970243208143"
  };
  firebase.initializeApp(config);

export function readBoard () {
   firebase.database().ref('stages').on ('value', res => {
      let stages = []
      res.forEach ( snap  => {
         const stage = snap.val();
         stages.push (stage);
      })
      store.setState ({
         stages : stages
      }) 
   });

   firebase.database().ref('tasks').on ('value', res => {
      let tasks = [];
      res.forEach ( snap  => {
          const task = snap.val();
          tasks.push (task)
      })      
      store.setState ({
         tasks : tasks
      }) 
   });   
}

export function  addStage (text) {

   let stages = [...store.getState().stages];
   stages.push (  text )
   firebase.database().ref('stages').push (text);
}

export function  addTask (stage, text) {
   let tasks = [...store.getState().tasks];
   let newTask = {
      id : store.getState().tasks.length,
      title: text,
      stage : stage
   } 

   firebase.database().ref('tasks/' + newTask.id).set (newTask);
}