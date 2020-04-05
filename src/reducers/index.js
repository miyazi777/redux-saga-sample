import { combineReducers } from 'redux'

export default combineReducers({
  counter: (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      default:
        return state;
    }
  }
});
