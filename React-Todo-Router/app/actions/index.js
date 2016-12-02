let nextTodoId = 3;
import fetch from 'isomorphic-fetch';
export const RECIEVE_TASKS  = 'RECEIVE_TASKS';

export const fetchTasks = () => {
  console.log("Fetch Tasks method called");
  return (dispatch) => {
      return fetch('/getTasks')
          .then(response => response.json())
          .then((json) =>  {
            dispatch(recieveTasks(json));
      })
  }
}

export const addTasks = (reqData) => {
  console.log("add Tasks method called");
  return (dispatch) => {
      return fetch('/addTask',{
          method:'get'
          // header:{
          //   "Content-Type":'application/json'
          // },
          // body :  {
          //   data:reqData
          // }
      })
        .then(response => response.json())
        .then((json) =>  {
            dispatch(addTodo(reqData));
      })
  }
}
export const recieveTasks = (text) => {
  console.log("entered recieve Tasks Method in actions");
  return {
     type : RECIEVE_TASKS,
     text
  }
}
export const addTodo = (text) => {
  addTasks(text);
  console.log("action Called TODO");
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  console.log("action performed on SetVisibility filter");
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  console.log("toggle Todo Acttion Called TODO");
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
// export const displayMsg = ()  =>{
//
//   console.log("enter display Action DIsplatch");
//   return {
//     type:'DISPLAY_Msg'
//   }
// }
