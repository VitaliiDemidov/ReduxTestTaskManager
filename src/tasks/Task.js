import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Modal, FormControl } from "react-bootstrap";
import firebase from "../config/Config";
import moment from "moment";

const Task = ({ task, profile }) => {
  const deleteSubmit = e => {
    e.preventDefault();
    let firestore = firebase.firestore();
    firestore
      .collection("Task")
      .doc(task.id)
      .delete();
  };
  const [title, setTitle] = useState("");
  const handleChange = e => {
    setTitle({
      [e.target.id]: e.target.value
    });
  };
  let author = `Author: ${task.authorLastName}`;
  const heandleUpdate = e => {
    e.preventDefault();
    let firestore = firebase.firestore();
    firestore
      .collection("Task")
      .doc(task.id)
      .update(title);
    handleClose();
  };
  const disabled = [title] || ""; //batton disabled

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          <input value={task.title} readOnly className="form-control" />
          <span className="">
            {author}
            <hr />
            {/* {`${task.edit === undefined ? "" : `last-editor: ${task.edit}`}`} */}
          </span>
        </li>
      </ul>
      <div>
        <button onClick={deleteSubmit} className="btn btn-danger">
          delete
        </button>
        <Button variant="primary" onClick={handleShow}>
          edit
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit this Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormControl
              type="text"
              onChange={handleChange}
              id="title"
              placeholder="Type here"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              disabled={!disabled}
              onClick={heandleUpdate}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    profile: state.firebase.profile.lastName
  };
};

export default connect(mapStateToProps)(Task);
