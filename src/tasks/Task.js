import React from "react";
import firebase from "../config/Config";

const Task = ({ task }) => {
  const deleteSubmit = e => {
    e.preventDefault();
    let firestore = firebase.firestore();
    let deleteDoc = firestore
      .collection("Task")
      .doc(task.id)
      .delete();
    console.log(task.id);
  };

  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          {" "}
          <input
            value={task.title}
            onChange={changeHeandler}
            disabled
            className="form-control"
          />
          <span className="">
            {`Date:${new Date().toLocaleDateString()}, Time:${new Date().toLocaleTimeString()}, Author:${
              task.authorLastName
            } `}
          </span>
        </li>
      </ul>
      <div>
        <button onClick={deleteSubmit} className="btn btn-danger">
          delete
        </button>
        <button className="btn btn-primary">edit</button>
      </div>
    </div>
  );
};

export default Task;
