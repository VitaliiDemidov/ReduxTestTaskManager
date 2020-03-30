import React from "react";
import InputForm from "./InputForm";
import TaskList from "./TaskList";
import { Redirect } from "react-router-dom";
import { logOut } from "../redux/thunkStore/authAction";
import { connect } from "react-redux";

const TaskManager = props => {
  const { auth, profile } = props;
  if (!auth.uid) return <Redirect to="/" />;
  return (
    <div className="container">
      <h1>{`Hello, ${profile}`}</h1>
      <button onClick={props.logOut} className="btn btn-warning" type="button">
        LogOUT
      </button>
      <InputForm />
      <TaskList />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    profile: state.firebase.profile.firstName,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskManager);
