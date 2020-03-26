const initState = {};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      console.log("new task", action.task);

      return state;

    case "CREATE_TASK_ERROR":
      console.log("cret", action.err);
      return state;

    default:
      return state;
  }
};
