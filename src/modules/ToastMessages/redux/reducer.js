import {Map, fromJS} from 'immutable'
import * as actions from './actions.js'

let key = -1

const Toast = (state = Map(), {type, ...action}) => {
  switch (type) {
    case actions.DISPLAY_TOAST_MESSAGE:
      key = key + 1
      return state.setIn(['toast', key], fromJS(action))
    case actions.CLEAR_TOAST_MESSAGE:
      return state.deleteIn(['toast', action.indexClear], Map())
    default:
      return state
  }
}

Toast.key = 'Toast'
export default Toast
