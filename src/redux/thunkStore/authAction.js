import "firebase/firestore";
import "firebase/auth";
import firebase, { db } from "../../config/Config";

export const logIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCES" });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_FAIL", err });
      });
  };
};

export const logOut = () => (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: "LOGOUT_SUCCES" });
    });
};

export const register = newUser => {
  return (dispatch, getState, firestore) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => {
        db.collection("users")
          .doc(resp.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName
          });
      })
      .then(() => {
        dispatch({ type: "REGISTER_SUCCES" });
      })
      .catch(err => {
        dispatch({ type: "REGISTER_ERROR", err });
      });
  };
};
