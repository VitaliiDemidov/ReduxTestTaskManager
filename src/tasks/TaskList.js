import React from "react";
import { connect } from "react-redux";
import Task from "./Task";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const TaskList = ({ newTask, author }) => {
  return (
    <div>
      {newTask ? (
        newTask.map(task => <Task task={task} key={task.id} name={author} />)
      ) : (
        <p className="text-center">No tasks</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    newTask: state.firestore.ordered.Task,
    author: state.firebase.profile.lastName
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "Task" }])
)(TaskList);
