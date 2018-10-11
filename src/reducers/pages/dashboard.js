import * as Constants from 'actions/constants'

const initialState = {
  projects: [],
  isLoadingProject: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Constants.PROJECTS_SEARCH:
      return {
        ...state,
        projects: [],
        isLoadingProject: true,
      }
    case Constants.PROJECTS_SEARCH_SUCCESS:
      return {
        ...state,
        projects: action.payload.map(project => project.objectId),
        isLoadingProject: false,
      }
    case Constants.PROJECTS_SEARCH_FAILED:
      return {
        ...state,
        isLoadingProject: false,
      }
    default: return state
  }
}
