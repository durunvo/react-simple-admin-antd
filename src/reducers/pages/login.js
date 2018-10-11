import * as Constants from 'actions/constants'

const initialState = {
  isLoading: false,
  error: null,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Constants.LOGIN:
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case Constants.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }
    case Constants.LOGIN_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.err,
      }
    default: return state
  }
}
