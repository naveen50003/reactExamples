import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware} from 'redux'
import todoApp from './reducers'
import App from './components/App'
import { Router, Route, browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import {logger,crashReporter } from './middlewares'
import Root from './containers/Root';
import { syncHistoryWithStore } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import { fetchTasks,toggleTodo } from './actions'


let store = createStore(todoApp,applyMiddleware(logger, crashReporter,thunkMiddleware));

console.log(store.getState()) // logs 0
console.log("hi");
store.dispatch(fetchTasks());
const history = syncHistoryWithStore(browserHistory, store);
// store.dispatch({
//   type: 'DISPLAY_Msg'
// });
// componentDidMount = function(){
//   console.log("enter componentDid Mount");
// }
render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
);
// render(
//   <Provider store={store}>
//   	<Router history={browserHistory}>
//     	// <App />
//     	<Route path="/" component={App}/>
// 	</Router>
//   </Provider>,
//   document.getElementById('root')
// )
