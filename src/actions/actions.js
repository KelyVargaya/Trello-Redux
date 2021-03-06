
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

    const database = firebase.database();
    const auth = firebase.auth();
    const storage = firebase.storage();
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


    export function signUp (firstName, lastName, email, password) 
    {
      console.log ('signUp' + firstName + email + password);

      auth.createUserWithEmailAndPassword (email, password).then ( user => {
          let newuser = {
            firstName, email, password
          }
          database.ref ('users/' + user.uid).set (newuser);     
          database.ref ('users/' + user.uid).once ('value').then ( res => {
          
          const fullUserInfo = res.val(); 
            console.log ('full info ', fullUserInfo);
            store.setState ( {
                user: {
                  id : user.uid,
                  email :  fullUserInfo.email,
                  firstName :  fullUserInfo.firstName,               
                }
            })
          })
      }) 
    }

    export function signOut () {
      auth.signOut();
      store.setState ( {
          successLogin : false,
          user: {
            id :'',
            email :  ''
          }
      })
    }

    export function signIn (user, password) {
      auth.signInWithEmailAndPassword(user, password).then (userObj => {

          database.ref ('users/' + userObj.uid).once ('value').then ( res => {
            const fullUserInfo = res.val(); 

            console.log ('full info ', fullUserInfo);
            store.setState ( {
                user: {
                  id : userObj.uid,
                  email :  fullUserInfo.email,
                  firstName :  fullUserInfo.firstName,              
                }
            })
          })
      })
    }

    auth.onAuthStateChanged(user => {
      if (user) {
          console.log('user', user);
          let usersRef = database.ref('/users');
          let userRef = usersRef.child(user.uid);
          store.setState ( {
            successLogin : true
          })
      }
    });


    /*Agregar los Boards*/
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
    /*hasta aqui la parte de los boards*/