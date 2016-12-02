let nextTodoId = 0
export const addTodo = (text) => {
  console.log("action Called TODO");
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
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
export const numberClick  = (number)  =>{
  console.log("entered number numberClick action");
  return {
     type : 'NUMBER_CLICK',
     number
  }
}

export const evalCount  = (tolEq) => {
  console.log("entered evalCount function")
  console.log(tolEq);
  let number  = eval(tolEq);
  console.log(number);
  return {
     type : 'NUMBER_TOTAL',
     number,
     tolEq
  }
}

export const clearClick = () =>{
    let number = "";
    return {
     type : 'NUMBER_CLEAR',
     number
  } 
}