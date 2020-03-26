import React from "react";
import { connect } from "react-redux";
import { Task } from "./Task";

const TaskList = ({ newTask }) => {
  // if (!newTask.length) {
  //   return <p className="text-center">No tasks</p>;
  // }
  console.log(newTask);
  return (
    <div>
      {newTask && newTask.map(task => <Task task={task} key={task.id} />)}{" "}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    newTask: state.tasks
  };
};

export default connect(mapStateToProps)(TaskList);
