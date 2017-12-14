import { createReducer } from './createReducer'
import { fork, takeEvery } from 'redux-saga/effects'

let actionTypes = {}
let sagas = []
let reducers = {}

export function actions(constructor) {
   for(let action in constructor) {
     actionTypes[action] = constructor[action]
   }
}

export function actionType (typeName?) {
  return (target, key) => {
    target[key] = actionTypes[typeName || key]
  }
}

export function saga(actionType?, effect?) {
  return (target, key, descriptor) => {
    sagas.push(function* () {
      yield (effect || takeEvery)(actionType || key, descriptor.value)
    })

    return descriptor
  }
}

export function* getSagas() {
  let saga
  for (let i = 0, length = sagas.length; i < length; i++) {
    yield fork(sagas[i])
  }
}

export function reducer(namespace?, actionType?, initialState?) {
  return (target, key, descriptor) => {
    let reducer = createReducer(initialState || null, {
      [actionType || key]: descriptor.value
    })

    reducers = {
      ...reducers,
      [namespace || target.constructor.name]: reducer
    }

    return descriptor
  }
}

export function getReducers() {
  return reducers
}
