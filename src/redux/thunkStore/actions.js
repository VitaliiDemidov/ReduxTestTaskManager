export const createAsyncTask = task => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    console.log(profile, authorId);

    firestore
      .collection("Task")
      .add({
        ...task,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
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
