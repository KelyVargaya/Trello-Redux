import createStore from 'redux-zero'

const initialState = {
   stages: [ ],
   tasks: [ ],
   successLogin : false,
   user : {
      id : null,
      email :  null,
      firstName :  null,
      lastName :  null,          
   }  
}

const store = createStore (initialState);
export default store