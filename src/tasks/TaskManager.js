import React from "react";
import InputForm from "./InputForm";
import TaskList from "./TaskList";
import { useParams } from "react-router-dom";

const TaskManager = props => {
  let { id } = useParams();
  return (
    <div className="container">
      <h1>{`Hello ${id}`}</h1>
      <InputForm />
      <TaskList />
    </div>
  );
};

export default TaskManager;
