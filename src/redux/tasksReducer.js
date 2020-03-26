const initialState = [];

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_TASK":
      console.log("pog", action.task);
  }
  return state;
};

export default tasksReducer;
