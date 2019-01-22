import Http from '../utils/http'

const GET_CURRENT_USER_API = '/users/current'

class HomeService {
  static ACTION

  GET_CURRENT_USER_SUCCESS(state, payload) {
    return {
      ...state,
      ...payload
    }
  }
}

