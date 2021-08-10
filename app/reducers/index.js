import {GET_TASKS_SUCCESS, NEW_TASK} from '../actions';
const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_TASK: {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    case GET_TASKS_SUCCESS: {
      return {
        ...state,
        items: action.payload,
      };
    }
    default:
      return state;
  }
};
