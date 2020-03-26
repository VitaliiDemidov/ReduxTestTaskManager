import React from "react";
import { connect } from "react-redux";
import { Task } from "./Task";

const TaskList = ({ newTask }) => {
  if (!newTask.length) {
    return <p className="text-center">No tasks</p>;
  }

  return newTask.map(task => <Task task={task} key={task.id} />);
};

const mapStateToProps = state => {
  return {
    newTask: state.tasks.tasks
  };
};

export default connect(mapStateToProps, null)(TaskList);
