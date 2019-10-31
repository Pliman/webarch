import { applyMiddleware, createStore, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'

import { getReducers, getSagas } from '../utils/redux-decorators'

const reducer = combineReducers({
  ...getReducers(),
  routing: routerReducer
})

const sagaMiddleware = createSagaMiddleware()

const logger = createLogger({
  collapsed: true
})

const store = compose(applyMiddleware(sagaMiddleware, routerMiddleware(), logger))(createStore)(reducer, {})
sagaMiddleware.run(getSagas)

export default store
