//import RECIEVE_TASKS from '../actions';
var initialState = {
  tasks:[]
};
const todo = (state = {}, action) => {
  switch (action.type) {
    case "RECEIVE_TASKS":
          console.log("entering single todo reducer");
          return Object.assign({}, state, {
            completed: false
          })
    case 'ADD_TODO':

      console.log("reducer TODO called");
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
        console.log("reducer TODO toggle called");
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
    // case 'DISPLAY_Msg' :
    //     console.log("Entered Display msg Reducer");
    //     return state

    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case "RECEIVE_TASKS" :
        console.log("enterd TODOS recieve Tasks Reduceer");
        return action.text.tasks.map(t =>
          todo(t,action)
        )
    case 'ADD_TODO':
      console.log(state);
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
