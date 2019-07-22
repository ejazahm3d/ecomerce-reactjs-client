const initialState = {
  count: 1
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "PLUS":
      return { ...state, ...payload };

    default:
      return state;
  }
};
