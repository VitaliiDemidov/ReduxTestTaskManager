const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCES":
      return { ...state, authError: null };
    case "LOGIN_FAIL":
      return { ...state, authError: "Login failed" };
    case "LOGOUT_SUCCES":
      return state;
    case "REGISTER_SUCCES":
      return {
        ...state,
        authError: null
      };
    case "REGISTER_ERROR":
      return {
        ...state,
        authError: action.err.message
      };

    default:
      return state;
  }
};
export default authReducer;
