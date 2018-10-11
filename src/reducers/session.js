import * as Constants from 'actions/constants'

const initialState = {
  user: null,
  config: null,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Constants.LOGOUT: return initialState
    case Constants.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      }
    case Constants.SET_SESSION:
      return {
        ...state,
        user: action.session,
      }
    default: return state
  }
}
