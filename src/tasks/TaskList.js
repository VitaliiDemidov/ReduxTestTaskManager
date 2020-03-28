import React from "react";
import { connect } from "react-redux";
import Task from "./Task";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const TaskList = ({ newTask }) => {
  // if (newTask.length) {
  //   return <p className="text-center">No tasks</p>;
  // }
  console.log(newTask);

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
  console.log(state);
  return {
    newTask: state.firestore.ordered.Task
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "Task" }])
)(TaskList);
