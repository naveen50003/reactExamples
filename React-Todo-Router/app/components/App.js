import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import { Link } from 'react-router';
const App = ({params,children}) => (
 	 <div>
    	<AddTodo/>
    	<VisibleTodoList filter={params.filter || 'all'}/>
    	{children}
    	<Footer/>
	</div>
)

export default App
