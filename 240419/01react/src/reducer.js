const initialState = {
  count: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.num };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload.num };
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
      };
  }
  // if (action.type === "INCREMENT") {
  //   return { ...state, count: state.count + action.payload.num };
  // }

  return { ...state };
};

export default reducer;
