const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      counter: state.counter + 1
    };
  }

  if
  return state;
};

export default reducer;
