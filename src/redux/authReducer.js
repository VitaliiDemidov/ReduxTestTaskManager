const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCES":
      console.log("login succes");
      return { ...state, authError: null };
    case "LOGIN_FAIL":
      return { ...state, authError: "Login failed" };
    case "LOGOUT_SUCCES":
      console.log("logout");
      return state;
    case "REGISTER_SUCCES":
      console.log("register");
      return {
        ...state,
        authError: null
      };
    case "REGISTER_ERROR":
      console.log("registererror");
      return {
        ...state,
        authError: action.err.message
      };

    default:
      return state;
  }
};
export default authReducer;
