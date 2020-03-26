import React from "react";

export const Task = ({ task }) => {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          {" "}
          <strong className="form-control">{task.title}</strong>
          <span className="">
            {`Date:${new Date().toLocaleDateString()}, Time:${new Date().toLocaleTimeString()}`}
          </span>
        </li>
      </ul>
      <div>
        <button className="btn btn-danger">delete</button>
        <button className="btn btn-primary">edit</button>
        <button className="btn btn-warning">share</button>
      </div>
    </div>
  );
};
