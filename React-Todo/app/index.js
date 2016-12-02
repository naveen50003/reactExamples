import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore,applyMiddleware} from 'redux'
import todoApp from './reducers'
import App from './components/App'
import { Router, Route, browserHistory } from 'react-router';
import {logger,crashReporter } from './middlewares'

let store = createStore(todoApp,applyMiddleware(logger, crashReporter))
console.log(store.getState()) // logs 0
// store.dispatch({
//   type: 'DISPLAY_Msg'
// });
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
