import { put } from 'redux-saga/effects'

import Http from '../../utils/http'
import { actionType, saga, reducer } from '../../utils/redux-decorators'

const GET_CURRENT_USER_API = '/users/current'

class HomeService {
  @actionType('GET_CURRENT_USER')
  static ACTION

  @saga()
  static * GET_CURRENT_USER(action) {
    try {
      let data = yield Http.get(GET_CURRENT_USER_API)

      yield put({
        type: HomeService.ACTION.SUCCESS,
        payload: {
          ...data.data
        }
      })

      if (action.payload.callback) {
        action.payload.callback()
      }
    } catch (err) {
      yield put({type: HomeService.ACTION.FAILED})
    }
  }

  @reducer('user')
  GET_CURRENT_USER_SUCCESS(state, payload) {
    return {
      ...state,
      ...payload
    }
  }
}

