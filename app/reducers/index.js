const initialState = {
  tasks: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_TASK': {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};
