export const createAsyncTask = task => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    const firebase = getFirebase();
    firestore
      .collection("Task")
      .add({
        ...task,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        dispatch({ type: "CREATE_TASK", task });
      })
      .catch(err => {
        dispatch({
          type: "TASK_ERROR",
          err
        });
      });
  };
};
// export const deleteTask = id => {
//   return (dispatch, getState, { getFirestore }) => {
//     const firestore = getFirestore();
//     const authorId = getState().firebase.auth.uid;
//     firestore
//       .collection("Task")
//       .doc(authorId)
//       .delete()
//       .then(() => {
//         dispatch({ type: "DELETE_TASK" });
//       })
//       .catch(err => {
//         dispatch({ type: "DELETE_ERROR", err });
//       });
//   };
// };
