import * as Constants from 'actions/constants'

const initialState = {
  showSave: false,
  title: '',
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Constants.SHOW_SAVE:
      return {
        ...state,
        showSave: true,
        title: action.title,
      }
    case Constants.HIDE_SAVE:
      return {
        ...state,
        showSave: false,
        title: '',
      }
    default: return state
  }
}
