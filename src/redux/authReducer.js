const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCES":
      console.log("login succes");

      return { ...state, authError: null };

    case "LOGIN_FAIL":
      console.log("login fail");
      return { ...state, authError: "Login failed" };
    case "LOGOUT_SUCCES":
      console.log("logout");
      return { state };
    default:
      return state;
  }
};
export default authReducer;
