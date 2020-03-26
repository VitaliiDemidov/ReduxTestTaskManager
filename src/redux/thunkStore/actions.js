export const createAsyncTask = task => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("Task")
      .add({
        ...task,
        authorFirstName: "vit",
        authorLastName: "dev",
        authorId: 1234,
        created: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_TASK", task });
      })
      .catch(err => {
        dispatch({
          type: " ",
          err
        });
      });
  };
};
