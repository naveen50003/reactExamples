import React from 'react'
import Footer from './Footer'
//import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import CalCount from '../containers/CalCount'

const App = () => (
  <div>
    <CalCount/>
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
