const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_TASK': {
      return {
        ...state,
        items: state.items.concat(action.payload),
      };
    }
    default:
      return state;
  }
};
