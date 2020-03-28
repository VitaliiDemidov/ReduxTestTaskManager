import { combineReducers } from "redux";
import authReducer from "./authReducer";
import tasksReducer from "./tasksReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: tasksReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
