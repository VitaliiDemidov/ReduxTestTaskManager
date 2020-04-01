import React from "react";
import { connect } from "react-redux";
import Task from "./Task";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const TaskList = ({ newTask }) => {
  return (
    <div>
      {newTask ? (
        newTask.map(task => <Task task={task} key={task.id} />)
      ) : (
        <p className="text-center">No tasks</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    newTask: state.firestore.ordered.Task
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "Task", orderBy: ["timestamp", "desc"] }])
)(TaskList);
