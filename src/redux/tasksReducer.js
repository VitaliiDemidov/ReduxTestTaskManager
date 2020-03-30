const initialState = [];

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_TASK":
      console.log("task created", action.task);
      return state;
    case "TASK_ERROR":
      console.log("createError", action.err);
      return state;
    case "DELETE_TASK":
      console.log("DELETE_TASK");
      return state;
    case "DELETE_ERROR":
      console.log("DELETE_ERROR", action.err);
      return state;
    default:
      return state;
  }
};

export default tasksReducer;
